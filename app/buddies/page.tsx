import Link from "next/link";
import type { Metadata } from "next";
import { COURSES, CATALOG_HEAD } from "@/content/courses";

export const metadata: Metadata = {
  title: "버디 둘러보기 — 플레이데이트",
  description: "버디가 직접 꾸린 하루 코스를 둘러보고 신청하세요.",
};

const VerifiedBadge = () => (
  <span className="bc-verified">
    <svg width="13" height="13" viewBox="0 0 20 20" fill="none">
      <circle cx="10" cy="10" r="9" fill="var(--bc-green-deep)" />
      <path d="M6 10.5 L9 13 L14 7" stroke="var(--bc-paper)" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
    신원확인
  </span>
);

export default function BuddiesPage() {
  return (
    <div className="bcat">
      <div className="bc-wrap">
        <Link href="/" style={{ display: "inline-flex", alignItems: "center", gap: 6, fontSize: 14, fontWeight: 800, color: "var(--ink)", textDecoration: "none", padding: "4px 12px 4px 0" }}>← 뒤로</Link>
        <header className="bc-head">
          <div className="bc-kicker"><span className="idx">{CATALOG_HEAD.kicker}</span></div>
          <h1>
            {CATALOG_HEAD.title[0]}<br />
            <span className="accent">{CATALOG_HEAD.title[1]}</span>
          </h1>
          <p>{CATALOG_HEAD.sub}</p>
        </header>

        <main className="bc-grid">
          {COURSES.map((c) => {
            const [who, ...rest] = [c.buddy];
            const lastCode = c.buddy.charCodeAt(c.buddy.length - 1) - 0xac00;
            const conj = lastCode >= 0 && lastCode <= 11171 && lastCode % 28 !== 0 ? "과 함께" : "와 함께";
            return (
              <Link key={c.id} href={`/buddies/${c.id}`} className="bc-course" data-accent={c.accent}>
                <div className="bc-photo">
                  <div className="img" style={{ backgroundImage: `url(${c.photo})`, backgroundPosition: c.photoPos }} />
                  <VerifiedBadge />
                  {c.isNew && <span className="bc-newbadge">NEW</span>}
                  <div className="bc-overlay">
                    <span className="desc">{c.blurb}</span>
                    <h2 className="title">
                      <span className="who">{who}{rest}</span>{conj}<br />{c.title}
                    </h2>
                  </div>
                </div>
                <div className="bc-body">
                  <div className="bc-tags">
                    {c.tags.map((t) => <span key={t} className="bc-tag">#{t}</span>)}
                  </div>
                  <div className="bc-meta">
                    <span>{c.duration}</span><span className="sep">·</span><span>{c.region}</span>
                    <span className="grow" /><span className="price">{c.price}</span>
                  </div>
                </div>
              </Link>
            );
          })}
        </main>

        <p className="bc-foot">
          찾는 코스가 없나요? <Link href="/">원하는 데이트를 직접 올려보세요 →</Link>
        </p>
      </div>
    </div>
  );
}
