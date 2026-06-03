"use client";

import type { CSSProperties } from "react";
import { Photo } from "@/components/Photo";
import { Flower, Squiggle } from "@/components/Doodles";

type BuddyMini = {
  name: string;
  nameColor: string;
  src: string;
  tone: "warm" | "sage" | "dusk";
  pos: string;
  proposal: string;
  region: string;
  rating: string;
  reviews: string;
  tags: string[];
  rotate: number;
};

const BUDDIES: BuddyMini[] = [
  {
    name: "이안",
    nameColor: "var(--green)",
    src: "/photos/ian.jpg",
    tone: "warm",
    pos: "center 28%",
    proposal: "저랑 성수동에서 포켓몬 잡고 산책해요",
    region: "성동구",
    rating: "4.9",
    reviews: "38",
    tags: ["포켓몬", "방탈출", "코인노래방"],
    rotate: -3,
  },
  {
    name: "시드",
    nameColor: "var(--pink-hot)",
    src: "/photos/sid.jpg",
    tone: "sage",
    pos: "center 22%",
    proposal: "서촌 커피 맛집에서 연애 고민 들어드려요",
    region: "종로구",
    rating: "4.8",
    reviews: "52",
    tags: ["연애 고민", "라떼 맛집"],
    rotate: 2,
  },
];

const BuddyMiniCard = ({ b }: { b: BuddyMini }) => (
  <div className="flex flex-col" style={{ transform: `rotate(${b.rotate}deg)` }}>
    <Photo
      src={b.src}
      tone={b.tone}
      className="w-full aspect-[3/4]"
      style={{
        border: "2px solid var(--ink)",
        borderRadius: 6,
        boxShadow: "6px 6px 0 var(--ink)",
        backgroundPosition: b.pos,
      }}
    >
      <div
        className="absolute bottom-2.5 left-2.5 right-2.5 z-[2] rounded-lg px-3 py-2"
        style={{ background: "var(--paper)", border: "1.5px solid var(--ink)", boxShadow: "2px 2px 0 var(--ink)" }}
      >
        <div className="flex items-baseline gap-1.5">
          <span className="text-[10px] md:text-[11px] font-bold" style={{ color: "var(--ink-soft)", letterSpacing: "0.08em" }}>버디</span>
          <span className="text-[15px] md:text-[17px] font-black" style={{ color: b.nameColor, letterSpacing: "-0.03em" }}>{b.name}</span>
        </div>
        <div className="hidden md:block text-[12px] md:text-[13px] font-bold mt-1" style={{ color: "var(--ink)", letterSpacing: "-0.01em", lineHeight: 1.4 }}>{b.proposal}</div>
        <div className="flex items-center gap-1.5 mt-1.5 text-[11px] md:text-[12px] font-bold" style={{ color: "var(--ink-soft)" }}>
          <span>{b.region}</span>
          <span style={{ opacity: 0.45 }}>·</span>
          <span style={{ color: "var(--pink-hot)" }}>★</span>
          <span style={{ color: "var(--ink)" }}>{b.rating}</span>
          <span style={{ fontWeight: 600, opacity: 0.7 }}>({b.reviews})</span>
        </div>
        <div className="flex flex-wrap gap-1 mt-1.5">
          {b.tags.map((t, i) => (
            <span
              key={i}
              className="rounded px-1.5 py-0.5 text-[9px] md:text-[11px] font-bold"
              style={{ background: "var(--bg-warm)", border: "1px solid var(--ink)", color: "var(--ink-soft)" }}
            >
              #{t}
            </span>
          ))}
        </div>
      </div>
    </Photo>
  </div>
);

export const Hero = () => (
  <section
    data-screen-label="01-hero"
    className="relative w-full min-h-[680px] xl:min-h-[880px] overflow-hidden"
    style={{ background: "var(--bg)" }}
  >
    <div className="relative mx-auto w-full max-w-page px-5 md:px-12 xl:px-20 pt-[40px] md:pt-[48px] pb-[56px] xl:pb-[64px]">
      <div className="flex justify-between items-center mb-8 md:mb-10">
        <img src="/brand/wordmark.png" alt="플레이데이트" className="h-6 md:h-7 w-auto" />
        <a
          href="#cta"
          onClick={(e) => { e.preventDefault(); window.dispatchEvent(new Event("open-apply")); }}
          className="inline-flex items-center gap-1.5 rounded-full text-[13px] md:text-[14px] font-extrabold"
          style={{ background: "var(--pink)", color: "var(--ink)", border: "2px solid var(--ink)", boxShadow: "3px 3px 0 var(--ink)", padding: "9px 16px" }}
        >
          신청하기 <span>→</span>
        </a>
      </div>
      <div className="flex flex-col xl:grid xl:grid-cols-[540px_1fr] gap-10 xl:gap-[60px] items-start xl:items-center">
        <div className="w-full xl:order-2 xl:pt-[20px]">
          <h1 className="text-[56px] md:text-[88px] xl:text-[126px] font-black" style={{ lineHeight: 1.05, letterSpacing: "-0.05em", color: "#218A3D" }}>
            당신의<br />하루를<br /><span style={{ color: "var(--pink-hot)" }}>빌려줄래요?</span>
          </h1>
          <p className="mt-6 xl:mt-8 text-[16px] md:text-[18px] xl:text-[21px] font-semibold max-w-[520px]" style={{ lineHeight: 1.6, color: "var(--ink)" }}>
            <span style={{ color: "var(--pink-hot)", fontWeight: 900 }}>나만의 데이트 코스</span>를 소개하고<br />하루동안 친구가 되어주세요
          </p>
        </div>
        <div className="w-full max-w-[540px] mx-auto xl:mx-0 xl:order-1">
          <div className="grid grid-cols-2 gap-4 md:gap-5 items-start">
            {BUDDIES.map((b) => (
              <BuddyMiniCard key={b.name} b={b} />
            ))}
          </div>
        </div>
      </div>
      <div className="hidden xl:block bobble absolute" style={{ bottom: 48, left: 24, zIndex: 8, "--r": "-8deg" } as CSSProperties}>
        <Flower size={100} color="var(--pink)" center="var(--green)" />
      </div>
      <div className="hidden md:block absolute top-[120px] md:top-[150px] xl:top-[180px] right-5 md:right-12 xl:right-20 z-[8]">
        <Squiggle width={120} color="var(--green)" />
      </div>
    </div>
  </section>
);

export default Hero;
