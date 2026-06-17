import { NextResponse } from "next/server";
import { getSupabaseAdmin } from "@/lib/supabase";
import { getCourse, getBuddy } from "@/content/buddies";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

type Body = {
  name?: string;
  contact?: string;
  courseId?: string;
  memo?: string;
  adult?: boolean;
  consent?: boolean;
};

const s = (v: unknown, max: number) =>
  typeof v === "string" ? v.trim().slice(0, max) : "";

export async function POST(req: Request) {
  const supabase = getSupabaseAdmin();
  if (!supabase) {
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
  const courseId = s(body.courseId, 100);
  const memo = s(body.memo, 4000);
  const course = getCourse(courseId);

  // 필수값 + course_id 유효성 검증
  if (!name || !contact || !course || body.adult !== true || body.consent !== true) {
    return NextResponse.json({ ok: false, error: "invalid" }, { status: 400 });
  }

  const { error } = await supabase.from("requests").insert({
    applicant_name: name,
    contact,
    course_id: courseId,
    memo: memo || null,
    adult: true,
    consent: true,
  });

  if (error) {
    console.error("[requests] insert failed:", error.message);
    return NextResponse.json({ ok: false, error: "db_error" }, { status: 500 });
  }

  const buddy = getBuddy(course.buddyId);
  await notifySlack({
    name,
    contact,
    buddyName: buddy?.name ?? course.buddyId,
    courseTitle: course.title,
    memo,
  }).catch(() => {});

  return NextResponse.json({ ok: true });
}

async function notifySlack(d: {
  name: string;
  contact: string;
  buddyName: string;
  courseTitle: string;
  memo: string;
}): Promise<void> {
  const url = process.env.SLACK_WEBHOOK_URL;
  if (!url) {
    console.error("[requests-slack] SLACK_WEBHOOK_URL not set in runtime");
    return;
  }
  const lines = [
    `💚 *${d.name}님이 [${d.buddyName}]의 [${d.courseTitle}]을 신청했어요!*`,
    `• 연락처: ${d.contact}`,
  ];
  if (d.memo) lines.push(`• 메모: ${d.memo}`);
  try {
    const res = await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ text: lines.join("\n") }),
    });
    if (!res.ok) console.error("[requests-slack] webhook failed:", res.status);
  } catch (e) {
    console.error("[requests-slack] notify error:", (e as Error)?.message);
  }
}
