"use client";

import type { CSSProperties } from "react";
import { Flower, Squiggle } from "@/components/Doodles";

type ApplyCardProps = {
  src: string;
  pos?: string;
  name: string;
  color?: string;
  rating: string;
  msg: string;
  delay?: string;
};

const BuddyApplyCard = ({ src, pos, name, color, rating, msg, delay }: ApplyCardProps) => (
  <div
    className="apply-card"
    style={{ flex: 1, minWidth: 0, display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center", background: "var(--paper)", border: "2px solid var(--ink)", borderRadius: 14, padding: "16px 12px 14px", animationDelay: delay || "0s" }}
  >
    <div style={{ width: 78, height: 78, borderRadius: "50%", border: "2px solid var(--ink)", backgroundImage: `url(${src})`, backgroundSize: "185%", backgroundPosition: pos || "center", flexShrink: 0 }} />
    <div style={{ display: "flex", alignItems: "baseline", gap: 5, marginTop: 9 }}>
      <span style={{ fontSize: 14.5, fontWeight: 900, letterSpacing: "-0.03em", color: color || "var(--ink)" }}>{name}</span>
      <span style={{ fontSize: 10.5, fontWeight: 700, color: "var(--ink-soft)", whiteSpace: "nowrap" }}><span style={{ color: "var(--pink-hot)" }}>★</span> {rating}</span>
    </div>
    <p style={{ fontSize: 11, fontWeight: 600, color: "var(--ink-soft)", lineHeight: 1.45, margin: "4px 0 0", letterSpacing: "-0.01em" }}>“{msg}”</p>
  </div>
);

const openBeta = (e: React.MouseEvent) => {
  e.preventDefault();
  window.dispatchEvent(new Event("open-beta"));
};

export const GuestHero = () => (
  <section data-screen-label="01-hero" className="hero" style={{ position: "relative", width: "100%", minHeight: "92vh", background: "var(--bg)", overflow: "hidden" }}>
    <div style={{ position: "relative", margin: "0 auto", width: "100%", maxWidth: 1440, padding: "40px 80px 64px" }}>
      {/* nav */}
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 40 }}>
        <img src="/brand/wordmark.png" alt="플레이데이트" style={{ height: 28, width: "auto" }} />
        <div className="hero-nav" style={{ display: "flex", gap: 28, alignItems: "center", fontSize: 14, fontWeight: 600, color: "var(--ink-soft)" }}>
          <span>예측 가능한 만남</span>
          <span>버디 소개</span>
          <a href="/buddy" className="ghost-link" style={{ fontSize: 14 }}>버디로 활동하기 →</a>
        </div>
      </div>

      {/* split */}
      <div className="hero-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 72, alignItems: "center", minHeight: "60vh" }}>
        {/* left: text */}
        <div>
          <h1 style={{ fontSize: 72, fontWeight: 900, lineHeight: 1.08, letterSpacing: "-0.05em", color: "#218A3D" }}>
            가끔은<br />10년 친구보다,<br /><span style={{ color: "var(--pink-hot)" }}>하루 친구.</span>
          </h1>
          <div id="hero-cta" style={{ display: "flex", flexWrap: "wrap", alignItems: "center", gap: 24, marginTop: 36 }}>
            <a href="#" onClick={openBeta} className="cta"><span>데이트 신청하기</span><span className="arrow">→</span></a>
            <span style={{ fontSize: 14, fontWeight: 700, color: "var(--ink-soft)", whiteSpace: "nowrap" }}>약 30초 소요</span>
          </div>
        </div>

        {/* right: visual — 요청 → 버디 지원 → 선택 흐름 */}
        <div style={{ position: "relative" }}>
          {/* 1) Guest 요청 카드 */}
          <div style={{ position: "relative", zIndex: 4, background: "var(--paper)", border: "2px solid var(--ink)", borderRadius: 16, padding: "18px 20px", transform: "rotate(-1.5deg)" }}>
            <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 14 }}>
              <span style={{ width: 9, height: 9, borderRadius: "50%", background: "var(--pink-hot)" }} />
              <span style={{ fontSize: 12, fontWeight: 800, color: "var(--ink-soft)", letterSpacing: "0.02em" }}>내가 올린 요청</span>
            </div>
            <div style={{ fontSize: 19, fontWeight: 900, letterSpacing: "-0.03em", lineHeight: 1.4, color: "var(--ink)" }}>
              이번 주 토요일,<br />저랑 벚꽃 보러 가실 분?
            </div>
            <div className="tag-row" style={{ marginTop: 12, flexWrap: "nowrap" }}>
              <span className="tag" style={{ fontSize: 12.5, padding: "6px 12px" }}><span className="dot">#</span>성수동</span>
              <span className="tag" style={{ fontSize: 12.5, padding: "6px 12px" }}><span className="dot">#</span>2시간</span>
              <span className="tag" style={{ fontSize: 12.5, padding: "6px 12px" }}><span className="dot">#</span>10만원</span>
            </div>
          </div>

          {/* 2) 연결 — 점선 + 라벨 */}
          <div style={{ display: "flex", alignItems: "center", gap: 10, margin: "18px 0 4px", position: "relative", zIndex: 3 }}>
            <span style={{ flex: 1, borderTop: "2px dashed rgba(20,20,20,0.35)" }} />
            <span style={{ fontSize: 13, fontWeight: 800, color: "var(--green-deep)", display: "flex", alignItems: "center", gap: 6, whiteSpace: "nowrap" }}>
              지원한 버디 <span style={{ width: 19, height: 19, borderRadius: "50%", background: "var(--pink)", border: "1.5px solid var(--ink)", color: "var(--ink)", fontSize: 11, fontWeight: 900, display: "flex", alignItems: "center", justifyContent: "center" }}>3</span>
            </span>
            <span style={{ flex: 1, borderTop: "2px dashed rgba(20,20,20,0.35)" }} />
          </div>

          {/* 3) 지원한 버디 미니 카드 3장 */}
          <div className="apply-row" style={{ position: "relative", zIndex: 3, marginTop: 14, display: "flex", gap: 11, alignItems: "stretch" }}>
            <BuddyApplyCard src="/photos/ian.jpg" pos="50% 32%" name="이안" color="var(--green-deep)" rating="4.9" msg="1시 어때요? 저 성수동 10년 살았어요 :)" delay="0.3s" />
            <BuddyApplyCard src="/photos/sid.jpg" pos="40% 34%" name="시드" rating="4.8" msg="성수 맛집까지 소개해드릴 수 있어요" delay="1.1s" />
            <BuddyApplyCard src="/photos/doki.jpg" pos="45% 24%" name="도키" rating="4.9" msg="제가 성수동 벚꽃남이에요" delay="1.9s" />
          </div>

          {/* 두들 포인트 */}
          <div className="bobble" style={{ position: "absolute", top: -36, right: -14, zIndex: 5, "--r": "-8deg" } as CSSProperties}>
            <Flower size={80} color="var(--pink)" center="var(--green)" />
          </div>
          <div style={{ position: "absolute", top: 150, right: -44, zIndex: 1 }}>
            <Squiggle width={104} color="var(--green)" />
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default GuestHero;
