import type { CSSProperties } from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { Photo } from "@/components/Photo";
import { BUDDIES, coursesOf, minPrice, won, type Buddy } from "@/content/buddies";

export const metadata: Metadata = {
  title: "버디 둘러보기 — 플레이데이트",
  description: "마음에 드는 버디를 고르고, 코스를 골라 하루 친구가 되어보세요.",
};

const badge: CSSProperties = {
  position: "absolute",
  zIndex: 2,
  fontSize: 11,
  fontWeight: 800,
  padding: "5px 9px",
  borderRadius: 999,
  border: "1.5px solid var(--ink)",
  letterSpacing: "-0.01em",
};

const BuddyCard = ({ b }: { b: Buddy }) => {
  const courses = coursesOf(b.id);
  return (
    <Link
      href={`/buddies/${b.id}`}
      style={{
        display: "block",
        background: "var(--paper)",
        border: "2px solid var(--ink)",
        borderRadius: 16,
        boxShadow: "6px 6px 0 var(--ink)",
        overflow: "hidden",
        textDecoration: "none",
        color: "var(--ink)",
      }}
    >
      <Photo
        src={b.photos[0]}
        alt={`${b.name} 버디`}
        objectPosition={b.pos}
        className="w-full"
        style={{ aspectRatio: "4 / 5", borderBottom: "2px solid var(--ink)" }}
        sizes="(max-width: 768px) 90vw, (max-width: 1280px) 45vw, 360px"
      >
        {b.trustBadge && (
          <span style={{ ...badge, top: 12, left: 12, background: "var(--green)", color: "var(--paper)" }}>✓ 신원확인</span>
        )}
        {b.isNew && (
          <span style={{ ...badge, top: 12, right: 12, background: "var(--pink)", color: "var(--ink)" }}>NEW</span>
        )}
      </Photo>

      <div style={{ padding: "18px 18px 20px" }}>
        <div style={{ display: "flex", alignItems: "baseline", justifyContent: "space-between", gap: 8 }}>
          <span style={{ fontSize: 22, fontWeight: 900, letterSpacing: "-0.03em", color: b.nameColor || "var(--ink)" }}>{b.name}</span>
          <span style={{ fontSize: 13, fontWeight: 700, color: "var(--ink-soft)" }}>{b.region}</span>
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: 5, marginTop: 6, fontSize: 13, fontWeight: 700 }}>
          <span style={{ color: "var(--pink-hot)" }}>★</span>
          <span style={{ color: "var(--ink)" }}>{b.rating}</span>
          <span style={{ color: "var(--ink-soft)", fontWeight: 600 }}>리뷰 {b.reviews}</span>
        </div>
        <p style={{ marginTop: 10, fontSize: 15, fontWeight: 600, color: "var(--ink)", lineHeight: 1.5, letterSpacing: "-0.01em", minHeight: 44 }}>{b.oneLiner}</p>
        <div style={{ display: "flex", flexWrap: "wrap", gap: 6, marginTop: 12 }}>
          {b.tags.map((t) => (
            <span key={t} style={{ fontSize: 12, fontWeight: 700, color: "var(--ink-soft)", background: "var(--bg-warm)", border: "1px solid var(--ink)", borderRadius: 999, padding: "4px 10px" }}>#{t}</span>
          ))}
        </div>
        <div style={{ marginTop: 16, paddingTop: 14, borderTop: "1.5px solid rgba(20,20,20,0.12)", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <span style={{ fontSize: 13, fontWeight: 700, color: "var(--ink-soft)" }}>코스 {courses.length}개</span>
          <span style={{ fontSize: 15, fontWeight: 900, color: "var(--green-deep)" }}>{won(minPrice(b.id))}~</span>
        </div>
      </div>
    </Link>
  );
};

export default function BuddiesPage() {
  return (
    <main style={{ background: "var(--bg)", minHeight: "100vh", wordBreak: "keep-all" }}>
      <div style={{ maxWidth: 1240, margin: "0 auto", padding: "0 20px" }}>
        {/* header */}
        <header style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "28px 0 8px" }}>
          <Link href="/" aria-label="플레이데이트 홈">
            <img src="/brand/wordmark.png" alt="플레이데이트" style={{ height: 26, width: "auto", display: "block" }} />
          </Link>
          <Link href="/buddy" className="ghost-link" style={{ fontSize: 14 }}>버디 등록하기 →</Link>
        </header>

        {/* title */}
        <section style={{ padding: "44px 0 28px" }}>
          <h1 style={{ fontSize: "clamp(34px, 7vw, 60px)", fontWeight: 900, lineHeight: 1.05, letterSpacing: "-0.05em", color: "#218A3D" }}>
            오늘, 어떤 버디와<br /><span style={{ color: "var(--pink-hot)" }}>놀아볼까요?</span>
          </h1>
          <p style={{ marginTop: 18, fontSize: 17, fontWeight: 600, color: "var(--ink-soft)", lineHeight: 1.6 }}>
            마음에 드는 버디를 고르고, 코스를 골라 신청하면 끝.<br />운영자가 24시간 안에 연락드려요.
          </p>
        </section>

        {/* grid */}
        <section style={{ paddingBottom: 80 }}>
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 md:gap-7">
            {BUDDIES.map((b) => (
              <BuddyCard key={b.id} b={b} />
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
