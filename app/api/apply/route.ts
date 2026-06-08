import { NextResponse } from "next/server";
import { getSupabaseAdmin } from "@/lib/supabase";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

type Body = {
  name?: string;
  contact?: string;
  regions?: string[];
  regionEtc?: string;
  intro?: string;
  course?: string;
  etc?: string;
  consent?: boolean;
};

const s = (v: unknown, max: number) =>
  typeof v === "string" ? v.trim().slice(0, max) : "";

export async function POST(req: Request) {
  const supabase = getSupabaseAdmin();
  if (!supabase) {
    // env 미설정 — 아직 DB 연결 전
    return NextResponse.json({ ok: false, error: "not_configured" }, { status: 503 });
  }

  let body: Body;
  try {
    body = (await req.json()) as Body;
  } catch {
    return NextResponse.json({ ok: false, error: "bad_request" }, { status: 400 });
  }

  const name = s(body.name, 100);
  const contact = s(body.contact, 50);
  const regions = Array.isArray(body.regions)
    ? body.regions.filter((r): r is string => typeof r === "string").map((r) => r.trim()).filter(Boolean).slice(0, 26)
    : [];
  const regionEtc = s(body.regionEtc, 100);
  const hasEtc = regions.includes("기타");
  const regionStr = regions.map((r) => (r === "기타" ? regionEtc || "기타" : r)).join(", ").slice(0, 300);
  const intro = s(body.intro, 300);
  const course = s(body.course, 4000);

  // 필수값 검증 (폼과 동일 기준)
  if (!name || !contact || regions.length === 0 || (hasEtc && !regionEtc) || !intro || !course || body.consent !== true) {
    return NextResponse.json({ ok: false, error: "invalid" }, { status: 400 });
  }

  const { error } = await supabase.from("applications").insert({
    name,
    contact,
    region: regionStr,
    region_etc: hasEtc ? regionEtc || null : null,
    intro,
    course,
    etc: s(body.etc, 4000) || null,
    consent: true,
  });

  if (error) {
    console.error("[apply] insert failed:", error.message);
    return NextResponse.json({ ok: false, error: "db_error" }, { status: 500 });
  }

  // 슬랙 알림 (best-effort — 실패해도 신청 저장은 성공으로 응답)
  await notifySlack({
    name,
    contact,
    region: regionStr,
    intro,
    course,
    etc: s(body.etc, 4000),
  }).catch(() => {});

  return NextResponse.json({ ok: true });
}

async function notifySlack(d: {
  name: string;
  contact: string;
  region: string;
  intro: string;
  course: string;
  etc: string;
}) {
  const url = process.env.SLACK_WEBHOOK_URL;
  if (!url) return;
  const lines = [
    "🌷 *새 버디 신청이 들어왔어요!*",
    `• 이름: ${d.name}`,
    `• 연락처: ${d.contact}`,
    `• 지역: ${d.region}`,
    `• 한 줄 소개: ${d.intro}`,
    `• 코스: ${d.course}`,
  ];
  if (d.etc) lines.push(`• 건의사항: ${d.etc}`);
  await fetch(url, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ text: lines.join("\n") }),
  });
}
