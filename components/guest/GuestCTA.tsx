"use client";

import type { CSSProperties } from "react";
import { Flower, Squiggle, Star } from "@/components/Doodles";
import { track } from "@/lib/analytics";

export const GuestCTA = () => (
  <section id="beta-cta" data-screen-label="05-cta" style={{ position: "relative", width: "100%", background: "var(--pink)", color: "var(--ink)", borderTop: "1.5px solid var(--ink)", overflow: "hidden" }}>
    <div style={{ position: "relative", margin: "0 auto", maxWidth: 1440, padding: "128px 80px" }}>
      <h2 style={{ fontSize: 124, fontWeight: 900, lineHeight: 0.92, letterSpacing: "-0.05em", color: "var(--green-deep)", maxWidth: 1100 }}>
        당신의 첫번째<br /><span style={{ display: "inline-block", marginTop: 8, padding: "0 20px", background: "var(--paper)", color: "var(--ink)" }}>하루 친구</span>를<br />만나보세요.
      </h2>
      <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center", gap: 32, marginTop: 44 }}>
        <a
          href="#"
          onClick={(e) => { e.preventDefault(); track("cta_click", { location: "final", page: "guest" }); window.dispatchEvent(new Event("open-beta")); }}
          className="cta"
          style={{ background: "var(--ink)", color: "var(--paper)", fontSize: 18, padding: "18px 30px 18px 32px", boxShadow: "8px 8px 0 var(--green-deep)" }}
        >
          <span>데이트 신청하기</span>
          <span className="arrow" style={{ background: "var(--pink-hot)", color: "var(--ink)", width: 36, height: 36, fontSize: 18 }}>→</span>
        </a>
        <span style={{ fontSize: 14, fontWeight: 700, color: "var(--green-deep)" }}>약 30초 소요</span>
      </div>
      <div className="bobble" style={{ position: "absolute", top: 80, right: 90, "--r": "12deg" } as CSSProperties}><Flower size={116} color="var(--paper)" center="var(--green)" /></div>
      <div className="bobble slow" style={{ position: "absolute", bottom: 120, right: 200, "--r": "-15deg" } as CSSProperties}><Star size={64} color="var(--green-deep)" /></div>
      <div style={{ position: "absolute", bottom: 90, right: 80 }}><Squiggle width={140} color="var(--green-deep)" /></div>
    </div>
  </section>
);

export default GuestCTA;
