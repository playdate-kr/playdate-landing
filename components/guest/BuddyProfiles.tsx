import { Section, Kicker } from "@/components/guest/GuestSection";
import { Sparkle } from "@/components/Doodles";
import type { CSSProperties } from "react";

const SelectCard = () => (
  <div className="card-press" style={{ position: "relative", display: "flex", flexDirection: "column", background: "var(--paper)", border: "2px solid var(--ink)", borderRadius: 12, overflow: "hidden", maxWidth: 360 }}>
    <div style={{ position: "relative" }}>
      <div style={{ width: "100%", aspectRatio: "4 / 5", borderBottom: "2px solid var(--ink)", backgroundImage: "url(/photos/ian.jpg)", backgroundSize: "cover", backgroundPosition: "center 28%" }} />
      <div style={{ position: "absolute", top: 12, left: 12, background: "var(--paper)", border: "1.5px solid var(--ink)", boxShadow: "2px 2px 0 var(--ink)", borderRadius: 999, padding: "4px 11px", fontSize: 12, fontWeight: 800, color: "var(--ink)" }}>성동구</div>
    </div>
    <div style={{ padding: 20 }}>
      <div style={{ display: "flex", alignItems: "baseline", gap: 7, marginBottom: 8 }}>
        <span style={{ fontSize: 10, fontWeight: 700, color: "var(--ink-soft)", letterSpacing: "0.08em" }}>버디</span>
        <span style={{ fontSize: 28, fontWeight: 900, color: "var(--green-deep)", letterSpacing: "-0.04em", lineHeight: 1 }}>이안</span>
        <span style={{ fontSize: 13, fontWeight: 700, color: "var(--ink-soft)", whiteSpace: "nowrap", marginLeft: 4 }}><span style={{ color: "var(--pink-hot)" }}>★</span> 4.9 · 리뷰 38</span>
      </div>
      <p style={{ fontSize: 15, fontWeight: 700, color: "var(--ink)", lineHeight: 1.4, marginBottom: 12 }}>저랑 성수동에서 포켓몬 잡고 산책해요</p>
      <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
        {["ISTJ", "포켓로그도감채우는중", "4세대입문"].map((t, i) => (
          <span key={i} style={{ background: "var(--bg-warm)", border: "1px solid var(--ink)", borderRadius: 999, padding: "4px 10px", fontSize: 11, fontWeight: 700, color: "var(--ink-soft)" }}>#{t}</span>
        ))}
      </div>
    </div>
  </div>
);

const GAL = [
  { src: "/photos/ian-4.jpeg", pos: "center 22%", delay: "0s" },
  { src: "/photos/ian-5.jpeg", pos: "center 30%", delay: "2.6s" },
  { src: "/photos/ian.jpg", pos: "center 28%", delay: "5.2s" },
];

const DetailPanel = () => (
  <div style={{ width: "100%", maxWidth: 380, aspectRatio: "9 / 16", background: "var(--paper)", border: "2px solid var(--ink)", borderRadius: 24, boxShadow: "8px 8px 0 var(--ink)", padding: "18px 20px 20px", display: "flex", flexDirection: "column", overflow: "hidden" }}>
    {/* ① 사진 영역 — 갤러리 크로스페이드 */}
    <div style={{ position: "relative", width: "100%", height: "34%", minHeight: 170, borderRadius: 14, border: "2px solid var(--ink)", overflow: "hidden", flexShrink: 0 }}>
      {GAL.map((g, i) => (
        <div key={i} className="gal-layer" style={{ backgroundImage: `url(${g.src})`, backgroundPosition: g.pos, animationDelay: g.delay }} />
      ))}
    </div>
    <div style={{ display: "flex", gap: 8, marginTop: 10 }}>
      {GAL.map((g, i) => (
        <div key={i} className="gal-thumb" style={{ width: 54, height: 54, borderRadius: 10, flexShrink: 0, backgroundImage: `url(${g.src})`, backgroundSize: "cover", backgroundPosition: g.pos, border: "2px solid var(--ink)", animationDelay: g.delay }} />
      ))}
    </div>
    {/* ② 이름·평점·배지 */}
    <div style={{ marginTop: 16 }}>
      <div style={{ display: "flex", alignItems: "baseline", gap: 8 }}>
        <span style={{ fontSize: 24, fontWeight: 900, color: "var(--green-deep)", letterSpacing: "-0.04em" }}>이안</span>
        <span style={{ fontSize: 12.5, fontWeight: 700, color: "var(--ink-soft)", whiteSpace: "nowrap" }}><span style={{ color: "var(--pink-hot)" }}>★</span> 4.9 · 리뷰 38</span>
      </div>
      <div style={{ display: "flex", alignItems: "center", gap: 6, fontSize: 12, fontWeight: 700, color: "var(--green-deep)", marginTop: 5 }}>
        <svg width="13" height="13" viewBox="0 0 20 20" fill="none"><circle cx="10" cy="10" r="9" fill="var(--green-deep)" /><path d="M6 10.5 L9 13 L14 7" stroke="var(--paper)" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" /></svg>
        신원 확인 완료 · 운영자 직접 검증
      </div>
    </div>
    {/* ③ 자기소개 */}
    <p style={{ fontSize: 13.5, fontWeight: 500, color: "var(--ink-soft)", lineHeight: 1.6, marginTop: 14 }}>
      안녕하세요, 플레이데이트의 메타몽 포지션을 맡고있는 버디 이안입니다👐 분위기를 휘어잡는 대담함은 없지만🥲 어느 텐션이든 맞춰서 같이 있는 사람들로 하여금 편안함을 줄 수 있는게 저의 장점이랍니다:)
      <br /><span style={{ color: "var(--pink-hot)", fontWeight: 700, fontSize: 12.5 }}>#ISTJ #포켓로그도감채우는중 #4세대입문 #닌텐도칩다수보유</span>
    </p>
    {/* ④ 제공 코스 + CTA */}
    <div style={{ marginTop: "auto", paddingTop: 12 }}>
      <div style={{ fontSize: 11, fontWeight: 800, color: "var(--ink-soft)", letterSpacing: "0.06em", marginBottom: 4 }}>제공 코스</div>
      <div style={{ borderBottom: "1.5px solid var(--ink)" }}>
        <div style={{ display: "flex", alignItems: "baseline", justifyContent: "space-between", gap: 10, padding: "9px 0", borderTop: "1.5px solid var(--ink)" }}>
          <span style={{ fontSize: 14, fontWeight: 800, color: "var(--ink)" }}>성수 포켓몬 산책</span>
          <span style={{ fontSize: 12.5, fontWeight: 700, color: "var(--ink-soft)", whiteSpace: "nowrap" }}>2시간 · <span style={{ color: "var(--pink-hot)", fontWeight: 800 }}>5만원</span></span>
        </div>
        <div style={{ display: "flex", alignItems: "baseline", justifyContent: "space-between", gap: 10, padding: "9px 0", borderTop: "1.5px solid var(--ink)" }}>
          <span style={{ fontSize: 14, fontWeight: 800, color: "var(--ink)" }}>건대 방탈출 체험</span>
          <span style={{ fontSize: 12.5, fontWeight: 700, color: "var(--ink-soft)", whiteSpace: "nowrap" }}>3시간 · <span style={{ color: "var(--pink-hot)", fontWeight: 800 }}>8만원</span></span>
        </div>
      </div>
      <a href="#" className="cta" style={{ width: "100%", justifyContent: "center", fontSize: 15, padding: "13px 18px", boxShadow: "4px 4px 0 var(--ink)", marginTop: 12, boxSizing: "border-box" }}>
        <span>오픈 날짜 보러가기</span><span className="arrow" style={{ width: 26, height: 26, fontSize: 13 }}>→</span>
      </a>
    </div>
  </div>
);

export const BuddyProfiles = () => (
  <Section label="02-profiles" pad="104px 80px">
    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", gap: 48, marginBottom: 60, flexWrap: "wrap" }}>
      <div>
        <div style={{ marginBottom: 22 }}><Kicker index="02" label="함께하는 버디" /></div>
        <h2 style={{ fontSize: 64, fontWeight: 900, lineHeight: 0.98, letterSpacing: "-0.04em", color: "var(--ink)" }}>
          나와 맞는 버디를<br /><span style={{ color: "var(--pink-hot)" }}>찾아보세요.</span>
        </h2>
      </div>
    </div>
    <div className="profiles-grid" style={{ display: "grid", gridTemplateColumns: "360px 380px", gap: 64, alignItems: "center", maxWidth: 900 }}>
      <SelectCard />
      <DetailPanel />
    </div>
    <div className="bobble slow" style={{ position: "absolute", top: 100, right: 90, "--r": "12deg" } as CSSProperties}><Sparkle size={36} color="var(--pink-hot)" /></div>
  </Section>
);

export default BuddyProfiles;
