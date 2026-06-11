import { NextResponse } from "next/server";
import { getSupabaseAdmin } from "@/lib/supabase";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

type Body = {
  name?: string;
  phone?: string;
  wish?: string;
  budget?: string;
  nickname?: string;
  adult?: boolean;
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
  const phone = s(body.phone, 50);
  const wish = s(body.wish, 4000);
  const budget = s(body.budget, 50);
  const nickname = s(body.nickname, 100);

  // 필수값 검증 (폼과 동일 기준)
  if (!name || !phone || !wish || !budget || body.adult !== true || body.consent !== true) {
    return NextResponse.json({ ok: false, error: "invalid" }, { status: 400 });
  }

  const { error } = await supabase.from("guest_applications").insert({
    name,
    phone,
    wish,
    budget,
    nickname: nickname || null,
    adult: true,
    consent: true,
  });

  if (error) {
    console.error("[beta] insert failed:", error.message);
    return NextResponse.json({ ok: false, error: "db_error" }, { status: 500 });
  }

  // 슬랙 알림 (best-effort — 실패해도 신청 저장은 성공으로 응답, 실패 시 로그만)
  await notifySlack({ name, phone, wish, budget, nickname }).catch(() => {});

  return NextResponse.json({ ok: true });
}

async function notifySlack(d: {
  name: string;
  phone: string;
  wish: string;
  budget: string;
  nickname: string;
}): Promise<void> {
  const url = process.env.SLACK_WEBHOOK_URL;
  if (!url) {
    console.error("[beta-slack] SLACK_WEBHOOK_URL not set in runtime");
    return;
  }
  const lines = [
    "💌 *새 게스트 신청이 들어왔어요!*",
    `• 이름: ${d.name}`,
    `• 연락처: ${d.phone}`,
    `• 하고 싶은 데이트: ${d.wish}`,
    `• 희망 금액: ${d.budget}`,
  ];
  if (d.nickname) lines.push(`• 게스트 호칭 제안: ${d.nickname}`);
  try {
    const res = await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ text: lines.join("\n") }),
    });
    if (!res.ok) console.error("[beta-slack] webhook failed:", res.status);
  } catch (e) {
    console.error("[beta-slack] notify error:", (e as Error)?.message);
  }
}
