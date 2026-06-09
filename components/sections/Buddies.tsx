"use client";

import { Section, SectionKicker } from "@/components/Section";
import { Photo } from "@/components/Photo";
import { Flower } from "@/components/Doodles";

type Buddy = {
  name: string;
  color: string;
  photoSrc?: string;
  tone: "warm" | "sage" | "dusk";
  pos: string;
  proposal: string;
  region: string;
  rating: string;
  reviews: string;
  tags: string[];
  hours: string;
  price: string;
};

const BUDDIES: Buddy[] = [
  { name: "이안", color: "var(--green-deep)", photoSrc: "/photos/ian.jpg", tone: "warm", pos: "center 28%", proposal: "저랑 포켓몬 잡으면서 성수동 산책해요", region: "성동구", rating: "4.9", reviews: "38", tags: ["포켓몬Go", "방탈출", "코인노래방"], hours: "2시간", price: "4만원 / 시간" },
  { name: "시드", color: "var(--pink-hot)", photoSrc: "/photos/sid.jpg", tone: "sage", pos: "center 22%", proposal: "서촌 커피 맛집에서 연애 고민 들어드려요", region: "종로구", rating: "4.8", reviews: "52", tags: ["연애상담", "커피맛집", "수다"], hours: "1.5시간", price: "3만원 / 시간" },
  { name: "도키", color: "var(--green-deep)", photoSrc: "/photos/doki.jpg", tone: "dusk", pos: "center 25%", proposal: "한강에서 함께 러닝하고 스트레칭해요", region: "수서구", rating: "NEW", reviews: "0", tags: ["러닝", "한강", "스트레칭"], hours: "1시간", price: "1만원 / 시간" },
];

const BuddyCard = ({ b }: { b: Buddy }) => (
  <div className="snap-start shrink-0 w-[284px] md:w-[342px] flex flex-col" style={{ background: "var(--paper)", border: "2px solid var(--ink)", borderRadius: 8, boxShadow: "6px 6px 0 var(--ink)", overflow: "hidden" }}>
    <div className="relative">
      <Photo src={b.photoSrc} alt={`${b.name} 버디`} tone={b.tone} objectPosition={b.pos} sizes="(max-width: 768px) 284px, 342px" style={{ width: "100%", aspectRatio: "4 / 5", borderBottom: "2px solid var(--ink)" }}>
        {!b.photoSrc && (
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="rounded-full px-3 py-1.5 text-[12px] font-bold" style={{ background: "rgba(20,20,20,0.5)", color: "var(--paper)", backdropFilter: "blur(2px)" }}>사진 준비중</span>
          </div>
        )}
      </Photo>
      <div className="absolute top-3 left-3 z-[2] inline-flex items-center rounded-full px-2.5 py-1 text-[12px] font-extrabold" style={{ background: "var(--paper)", border: "1.5px solid var(--ink)", boxShadow: "2px 2px 0 var(--ink)", color: "var(--ink)" }}>{b.region}</div>
    </div>
    <div className="p-5 flex flex-col flex-1">
      <div className="flex items-baseline gap-1.5 mb-2">
        <span className="text-[10px] font-bold" style={{ color: "var(--ink-soft)", letterSpacing: "0.08em" }}>버디</span>
        <span className="text-[26px] md:text-[30px] font-black" style={{ color: b.color, letterSpacing: "-0.04em", lineHeight: 1 }}>{b.name}</span>
      </div>
      <p className="text-[14px] md:text-[15px] font-bold mb-3" style={{ color: "var(--ink)", lineHeight: 1.4, letterSpacing: "-0.01em" }}>{b.proposal}</p>
      <div className="flex items-center gap-1.5 mb-3 text-[12px] md:text-[13px] font-bold">
        {b.rating === "NEW" ? (
          <span className="rounded-full px-2 py-0.5 text-[11px] font-extrabold" style={{ background: "var(--pink)", border: "1.5px solid var(--ink)", color: "var(--ink)" }}>신규 버디</span>
        ) : (
          <span className="inline-flex items-center gap-1.5">
            <span style={{ color: "var(--pink-hot)" }}>★</span>
            <span style={{ color: "var(--ink)" }}>{b.rating}</span>
            <span style={{ color: "var(--ink-soft)", fontWeight: 600 }}>· 리뷰 {b.reviews}</span>
          </span>
        )}
      </div>
      <div className="flex flex-wrap gap-1.5 mb-4">
        {b.tags.map((t, i) => (
          <span key={i} className="rounded-full px-2.5 py-1 text-[11px] font-bold" style={{ background: "var(--bg-warm)", border: "1px solid var(--ink)", color: "var(--ink-soft)" }}>#{t}</span>
        ))}
      </div>
      <div className="flex items-center gap-2 mt-auto pt-3 text-[13px] font-bold" style={{ borderTop: "1.5px solid var(--ink)" }}>
        <span style={{ color: "var(--ink-soft)", fontWeight: 600 }}>소요</span><span style={{ color: "var(--ink)" }}>{b.hours}</span>
        <span style={{ opacity: 0.35 }}>·</span>
        <span style={{ color: "var(--pink-hot)", fontWeight: 800 }}>{b.price}</span>
      </div>
    </div>
  </div>
);

const BuddyJoinCard = () => (
  <a
    href="#cta"
    onClick={(e) => { e.preventDefault(); window.dispatchEvent(new Event("open-apply")); }}
    className="snap-start shrink-0 w-[280px] md:w-[340px] flex flex-col items-center justify-center text-center gap-5 p-6"
    style={{ background: "var(--green-deep)", border: "2px solid var(--ink)", boxShadow: "6px 6px 0 var(--ink)", color: "var(--paper)" }}
  >
    <Flower size={76} color="var(--pink)" center="var(--paper)" />
    <div className="text-[32px] md:text-[40px] font-black" style={{ letterSpacing: "-0.04em", lineHeight: 0.95 }}>다음은<br />당신 차례.</div>
    <div className="inline-flex items-center gap-2 rounded-full px-5 py-3 text-[14px] font-extrabold" style={{ background: "var(--pink)", color: "var(--ink)", border: "2px solid var(--ink)" }}>버디 신청하기 →</div>
  </a>
);

export const Buddies = () => (
  <Section label="03-buddies" innerClassName="py-[64px] md:py-[88px] xl:py-[100px]">
    <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-5 md:gap-10 mb-9 md:mb-12">
      <div>
        <div className="mb-4 xl:mb-[18px]"><SectionKicker index="03" label="활동중인 버디" /></div>
        <h2 className="text-[40px] md:text-[60px] xl:text-[76px] font-black" style={{ lineHeight: 0.94, letterSpacing: "-0.05em", color: "var(--ink)" }}>
          포켓몬, 연애 고민<br /><span style={{ color: "var(--pink-hot)" }}>그리고 러닝까지!</span>
        </h2>
      </div>
      <p className="md:max-w-[360px] text-[15px] xl:text-[16px] font-medium" style={{ lineHeight: 1.7, color: "var(--ink-soft)" }}>
        내가 좋아하는 동네, 취향대로 <b style={{ color: "var(--ink)" }}>코스를 정해요.</b>
      </p>
    </div>
    <div
      className="flex gap-5 md:gap-6 overflow-x-auto pt-2 pb-4 -mx-5 px-5 md:-mx-12 md:px-12 xl:-mx-20 xl:px-20"
      style={{ scrollSnapType: "x mandatory", WebkitOverflowScrolling: "touch" }}
    >
      {BUDDIES.map((b) => (
        <BuddyCard key={b.name} b={b} />
      ))}
      <BuddyJoinCard />
    </div>
    <div className="flex items-center gap-2 mt-3 text-[13px] font-bold" style={{ color: "var(--ink-soft)" }}>← 옆으로 밀어보세요 →</div>
  </Section>
);

export default Buddies;
