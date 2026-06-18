"use client";

import type { CSSProperties } from "react";
import { Flower, Heart, Sparkle, Squiggle, Star } from "@/components/Doodles";
import { track } from "@/lib/analytics";

type FinalCTAProps = { formUrl?: string };

export const FinalCTA = ({ formUrl = "#" }: FinalCTAProps) => (
  <section
    id="cta"
    data-screen-label="07-cta"
    className="relative w-full overflow-hidden"
    style={{ background: "var(--pink)", color: "var(--ink)", borderTop: "1.5px solid var(--ink)" }}
  >
    <div className="relative mx-auto w-full max-w-page px-5 md:px-12 xl:px-20 pt-[80px] md:pt-[112px] xl:pt-[130px] pb-[80px] md:pb-[112px] xl:pb-[130px]">
      <div className="absolute top-8 md:top-10 xl:top-[52px] left-5 md:left-12 xl:left-20 text-[12px] xl:text-[14px] font-extrabold" style={{ color: "var(--green-deep)", letterSpacing: "0.08em" }}>07 ──── 신청</div>
      <h2 className="mb-8 md:mb-10 xl:mb-12 max-w-[1200px] text-[56px] md:text-[96px] xl:text-[144px] font-black" style={{ lineHeight: 0.9, letterSpacing: "-0.05em", color: "var(--green-deep)" }}>
        내 단골 골목이<br />누군가의 하루를<br /><span className="inline-block mt-1 md:mt-2 px-3 md:px-5 xl:px-6" style={{ color: "var(--ink)", background: "var(--paper)" }}>특별하게</span>
      </h2>
      <div className="flex flex-wrap items-center gap-6 md:gap-10 mt-8 md:mt-10">
        <a
          href={formUrl}
          onClick={(e) => { e.preventDefault(); track("cta_click", { location: "final" }); window.dispatchEvent(new Event("open-apply")); }}
          rel="noopener noreferrer"
          className="cta"
          style={{ background: "var(--ink)", color: "var(--paper)", fontSize: 18, padding: "18px 30px 18px 32px", boxShadow: "8px 8px 0 var(--green-deep)" }}
        >
          <span>버디 등록하기</span>
          <span className="arrow" style={{ background: "var(--pink-hot)", color: "var(--ink)", width: 36, height: 36, fontSize: 18 }}>→</span>
        </a>
        <div className="text-[13px] md:text-[14px] xl:text-[15px] font-bold" style={{ color: "var(--green-deep)", lineHeight: 1.6 }}>
          신청 약 1분 소요
        </div>
      </div>
      <div className="hidden md:block bobble absolute" style={{ top: 80, right: 80, "--r": "12deg" } as CSSProperties}><Flower size={120} color="var(--paper)" center="var(--green)" /></div>
      <div className="hidden xl:block bobble slow absolute" style={{ top: 380, right: 80, "--r": "-15deg" } as CSSProperties}><Star size={72} color="var(--green-deep)" /></div>
      <div className="hidden xl:block bobble fast absolute" style={{ bottom: 180, right: 360 }}><Sparkle size={48} color="var(--green-deep)" /></div>
      <div className="hidden md:block absolute" style={{ bottom: 100, right: 60 }}><Squiggle width={140} color="var(--green-deep)" /></div>
      <div className="hidden xl:block bobble absolute" style={{ bottom: 80, left: 200, "--r": "10deg" } as CSSProperties}><Heart size={70} color="var(--green-deep)" /></div>
    </div>
    <div className="flex flex-wrap justify-between items-center gap-5 px-5 md:px-12 xl:px-20 py-6 xl:py-8" style={{ background: "var(--ink)", color: "var(--paper)" }}>
      <img src="/brand/wordmark.png" alt="플레이데이트" className="h-5 xl:h-6 w-auto" style={{ filter: "brightness(0) invert(1)" }} />
      <div className="text-[12px] xl:text-[13px] font-medium" style={{ color: "rgba(244, 239, 230, 0.7)" }}>© 2026 플레이데이트 — 시간 단위 데이트 플랫폼</div>
    </div>
  </section>
);

export default FinalCTA;
