import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Photo } from "@/components/Photo";
import { CourseApply, CourseApplyButton } from "@/components/guest/CourseApply";
import { BUDDIES, getBuddy, coursesOf, reviewsOf, won } from "@/content/buddies";

export function generateStaticParams() {
  return BUDDIES.map((b) => ({ id: b.id }));
}

export async function generateMetadata({ params }: { params: Promise<{ id: string }> }): Promise<Metadata> {
  const { id } = await params;
  const b = getBuddy(id);
  if (!b) return { title: "버디를 찾을 수 없어요 — 플레이데이트" };
  return {
    title: `${b.name} 버디 — 플레이데이트`,
    description: b.oneLiner,
    openGraph: { title: `${b.name} 버디 — 플레이데이트`, description: b.oneLiner, images: [{ url: b.photos[0] }] },
  };
}

export default async function BuddyDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const b = getBuddy(id);
  if (!b) notFound();

  const courses = coursesOf(b.id);
  const reviews = reviewsOf(b.id);

  return (
    <main style={{ background: "var(--bg)", minHeight: "100vh", wordBreak: "keep-all" }}>
      <div style={{ maxWidth: 720, margin: "0 auto", padding: "0 20px 96px" }}>
        {/* header */}
        <header style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "24px 0 8px" }}>
          <Link href="/" aria-label="플레이데이트 홈">
            <img src="/brand/wordmark.png" alt="플레이데이트" style={{ height: 24, width: "auto", display: "block" }} />
          </Link>
          <Link href="/buddies" className="ghost-link" style={{ fontSize: 14 }}>← 버디 목록</Link>
        </header>

        {/* 갤러리 */}
        <section style={{ paddingTop: 20 }}>
          <Photo
            src={b.photos[0]}
            alt={`${b.name} 버디`}
            objectPosition={b.pos}
            priority
            className="w-full"
            style={{ aspectRatio: "4 / 5", maxWidth: 440, margin: "0 auto", borderRadius: 16, border: "2px solid var(--ink)", boxShadow: "6px 6px 0 var(--ink)" }}
            sizes="(max-width: 768px) 90vw, 440px"
          />
          {b.photos.length > 1 && (
            <div style={{ display: "flex", gap: 10, justifyContent: "center", marginTop: 14, flexWrap: "wrap" }}>
              {b.photos.map((src, i) => (
                <Photo key={i} src={src} alt={`${b.name} 사진 ${i + 1}`} objectPosition={b.pos} style={{ width: 72, height: 72, borderRadius: 10, border: "1.5px solid var(--ink)" }} sizes="72px" />
              ))}
            </div>
          )}
        </section>

        {/* 이름·평점·배지 */}
        <section style={{ paddingTop: 28, textAlign: "center" }}>
          <h1 style={{ fontSize: 40, fontWeight: 900, letterSpacing: "-0.04em", color: b.nameColor || "var(--ink)", lineHeight: 1.1 }}>{b.name}</h1>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 8, marginTop: 12, fontSize: 14, fontWeight: 700 }}>
            <span style={{ color: "var(--pink-hot)" }}>★</span>
            <span style={{ color: "var(--ink)" }}>{b.rating}</span>
            <span style={{ color: "var(--ink-soft)", fontWeight: 600 }}>리뷰 {b.reviews}</span>
            <span style={{ color: "var(--ink-soft)", opacity: 0.4 }}>·</span>
            <span style={{ color: "var(--ink-soft)" }}>{b.region}</span>
          </div>
          {b.trustBadge && (
            <div style={{ display: "inline-flex", alignItems: "center", gap: 6, marginTop: 14, fontSize: 13, fontWeight: 800, color: "var(--green-deep)", background: "var(--green-soft, #D9EDD9)", border: "1.5px solid var(--green-deep)", borderRadius: 999, padding: "6px 14px" }}>
              ✓ 신원 확인 완료 · 운영자 직접 검증
            </div>
          )}
        </section>

        {/* 자기소개 */}
        <section style={{ paddingTop: 32 }}>
          <p style={{ fontSize: 17, fontWeight: 600, color: "var(--ink)", lineHeight: 1.75, textAlign: "center", maxWidth: 600, margin: "0 auto" }}>{b.intro}</p>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 8, justifyContent: "center", marginTop: 18 }}>
            {b.tags.map((t) => (
              <span key={t} style={{ fontSize: 13, fontWeight: 700, color: "var(--ink-soft)", background: "var(--paper)", border: "1.5px solid var(--ink)", borderRadius: 999, padding: "6px 13px" }}>#{t}</span>
            ))}
          </div>
        </section>

        {/* 제공 코스 */}
        <section style={{ paddingTop: 44 }}>
          <h2 style={{ fontSize: 24, fontWeight: 900, letterSpacing: "-0.03em", color: "var(--ink)", marginBottom: 18 }}>제공 코스 <span style={{ color: "var(--pink-hot)" }}>{courses.length}</span></h2>
          <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
            {courses.map((c) => (
              <div key={c.id} style={{ background: "var(--paper)", border: "2px solid var(--ink)", borderRadius: 14, boxShadow: "4px 4px 0 var(--ink)", padding: "20px 20px 18px" }}>
                <div style={{ display: "flex", alignItems: "baseline", justifyContent: "space-between", gap: 12 }}>
                  <h3 style={{ fontSize: 19, fontWeight: 800, letterSpacing: "-0.02em", color: "var(--ink)" }}>{c.title}</h3>
                  <span style={{ fontSize: 18, fontWeight: 900, color: "var(--green-deep)", whiteSpace: "nowrap" }}>{won(c.price)}</span>
                </div>
                <div style={{ fontSize: 13, fontWeight: 700, color: "var(--ink-soft)", marginTop: 4 }}>{c.duration}</div>
                <p style={{ fontSize: 14.5, fontWeight: 500, color: "var(--ink-soft)", lineHeight: 1.6, margin: "12px 0 16px" }}>{c.desc}</p>
                <CourseApplyButton courseId={c.id} buddyName={b.name} courseTitle={c.title} />
              </div>
            ))}
          </div>
        </section>

        {/* 가능 시간·지역 */}
        <section style={{ paddingTop: 40 }}>
          <h2 style={{ fontSize: 24, fontWeight: 900, letterSpacing: "-0.03em", color: "var(--ink)", marginBottom: 16 }}>가능 시간 · 지역</h2>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 12 }}>
            <div style={{ flex: "1 1 200px", background: "var(--paper)", border: "1.5px solid var(--ink)", borderRadius: 12, padding: "16px 18px" }}>
              <div style={{ fontSize: 12, fontWeight: 800, color: "var(--ink-soft)", letterSpacing: "0.03em", marginBottom: 6 }}>가능 시간</div>
              <div style={{ fontSize: 16, fontWeight: 700, color: "var(--ink)" }}>{b.availability}</div>
            </div>
            <div style={{ flex: "1 1 200px", background: "var(--paper)", border: "1.5px solid var(--ink)", borderRadius: 12, padding: "16px 18px" }}>
              <div style={{ fontSize: 12, fontWeight: 800, color: "var(--ink-soft)", letterSpacing: "0.03em", marginBottom: 6 }}>활동 지역</div>
              <div style={{ fontSize: 16, fontWeight: 700, color: "var(--ink)" }}>{b.region}</div>
            </div>
          </div>
        </section>

        {/* 리뷰 */}
        {reviews.length > 0 && (
          <section style={{ paddingTop: 40 }}>
            <h2 style={{ fontSize: 24, fontWeight: 900, letterSpacing: "-0.03em", color: "var(--ink)", marginBottom: 16 }}>리뷰</h2>
            <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
              {reviews.map((r, i) => (
                <div key={i} style={{ background: "var(--paper)", border: "1.5px solid var(--ink)", borderRadius: 12, padding: "16px 18px" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 8 }}>
                    <span style={{ fontSize: 14, fontWeight: 800, color: "var(--ink)" }}>{r.by}</span>
                    <span style={{ fontSize: 12, fontWeight: 700, color: "var(--ink-soft)", background: "var(--bg-warm)", borderRadius: 999, padding: "2px 9px" }}>{r.course}</span>
                  </div>
                  <p style={{ fontSize: 14.5, fontWeight: 500, color: "var(--ink-soft)", lineHeight: 1.6, margin: 0 }}>“{r.text}”</p>
                </div>
              ))}
            </div>
          </section>
        )}
      </div>

      {/* 신청 폼 모달 (코스 버튼이 열어줌) */}
      <CourseApply />
    </main>
  );
}
