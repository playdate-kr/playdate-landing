import { NextResponse } from "next/server";
import { getSupabaseAdmin } from "@/lib/supabase";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

type Body = {
  name?: string;
  contact?: string;
  region?: string;
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
  const region = s(body.region, 50);
  const intro = s(body.intro, 300);
  const course = s(body.course, 4000);

  // 필수값 검증 (폼과 동일 기준)
  if (!name || !contact || !region || !intro || !course || body.consent !== true) {
    return NextResponse.json({ ok: false, error: "invalid" }, { status: 400 });
  }

  const { error } = await supabase.from("applications").insert({
    name,
    contact,
    region,
    region_etc: region === "기타" ? s(body.regionEtc, 100) || null : null,
    intro,
    course,
    etc: s(body.etc, 4000) || null,
    consent: true,
  });

  if (error) {
    console.error("[apply] insert failed:", error.message);
    return NextResponse.json({ ok: false, error: "db_error" }, { status: 500 });
  }

  return NextResponse.json({ ok: true });
}
