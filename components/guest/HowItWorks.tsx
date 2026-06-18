import type { ReactNode } from "react";
import type { CSSProperties } from "react";
import { Section, Kicker } from "@/components/guest/GuestSection";
import { Sparkle } from "@/components/Doodles";

/* 4단계 비주얼 칩 — 코드로 그린 플랫 그래픽 (텍스트 없음) */
const ChipRequest = () => (
  <svg width="150" height="110" viewBox="0 0 150 110" fill="none">
    <rect x="26" y="10" width="98" height="90" rx="12" fill="var(--paper)" stroke="var(--ink)" strokeWidth="2.5" />
    <rect x="40" y="28" width="70" height="10" rx="5" fill="var(--ink-soft)" />
    <rect x="40" y="45" width="48" height="10" rx="5" fill="#C9C2B4" />
    <rect x="40" y="68" width="32" height="15" rx="7.5" fill="var(--pink-soft)" stroke="var(--ink)" strokeWidth="1.5" />
    <rect x="78" y="68" width="32" height="15" rx="7.5" fill="var(--green-soft)" stroke="var(--ink)" strokeWidth="1.5" />
  </svg>
);
const ChipApply = () => (
  <svg width="150" height="110" viewBox="0 0 150 110" fill="none">
    <circle cx="45" cy="58" r="17" fill="#D9C5A8" stroke="var(--ink)" strokeWidth="2" />
    <circle cx="75" cy="58" r="17" fill="var(--green-soft)" stroke="var(--pink-hot)" strokeWidth="3.5" />
    <circle cx="105" cy="58" r="17" fill="var(--pink-soft)" stroke="var(--ink)" strokeWidth="2" />
    <circle cx="89" cy="42" r="9" fill="var(--green-deep)" stroke="var(--paper)" strokeWidth="1.5" />
    <path d="M85 42 L88 45 L93.5 39" stroke="var(--paper)" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);
const ChipChoose = () => (
  <svg width="150" height="110" viewBox="0 0 150 110" fill="none">
    <rect x="22" y="20" width="62" height="27" rx="13.5" fill="var(--green-deep)" stroke="var(--ink)" strokeWidth="2" />
    <path d="M34 45 L30 56 L44 47" fill="var(--green-deep)" stroke="var(--ink)" strokeWidth="2" strokeLinejoin="round" />
    <rect x="64" y="60" width="62" height="27" rx="13.5" fill="var(--pink)" stroke="var(--ink)" strokeWidth="2" />
    <path d="M116 85 L120 96 L106 87" fill="var(--pink)" stroke="var(--ink)" strokeWidth="2" strokeLinejoin="round" />
    <circle cx="118" cy="29" r="10" fill="var(--green-deep)" stroke="var(--paper)" strokeWidth="1.8" />
    <path d="M113.5 29 L117 32.5 L123 25.5" stroke="var(--paper)" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);
const ChipMeet = () => (
  <svg width="150" height="110" viewBox="0 0 150 110" fill="none">
    <path d="M75 96 C 60 78, 48 64, 48 48 C 48 32, 60 22, 75 22 C 90 22, 102 32, 102 48 C 102 64, 90 78, 75 96 Z" fill="var(--pink-hot)" stroke="var(--ink)" strokeWidth="2.5" strokeLinejoin="round" />
    <circle cx="75" cy="48" r="11" fill="var(--paper)" stroke="var(--ink)" strokeWidth="2" />
    <g stroke="var(--ink)" strokeWidth="1.8" strokeLinejoin="round">
      <path d="M30 28 C 24 27, 21 33, 26 37 C 20 36, 17 43, 24 46 C 19 48, 20 56, 27 53 C 26 59, 34 60, 34 54 C 40 57, 44 50, 38 47 C 44 46, 44 38, 37 38 C 40 32, 33 27, 30 28 Z" fill="var(--green-soft)" />
      <circle cx="31" cy="42" r="4" fill="var(--pink)" />
    </g>
    <path d="M122 60 L123.5 70 L133 71.5 L123.5 73 L122 83 L120.5 73 L111 71.5 L120.5 70 Z" fill="var(--pink)" stroke="var(--ink)" strokeWidth="1.6" strokeLinejoin="round" />
  </svg>
);

const HowStep = ({ n, title, chip }: { n: string; title: string; chip: ReactNode }) => (
  <div className="how-step" style={{ display: "flex", flexDirection: "column", gap: 14, background: "var(--paper)", border: "2px solid var(--ink)", borderRadius: 14, padding: "18px 18px 20px", minHeight: 210 }}>
    <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
      <span className="how-num" style={{ width: 32, height: 32, flexShrink: 0, borderRadius: "50%", background: "var(--green-deep)", color: "var(--paper)", fontSize: 15, fontWeight: 800, display: "flex", alignItems: "center", justifyContent: "center" }}>{n}</span>
      <span className="how-title" style={{ fontSize: 17, fontWeight: 800, color: "var(--ink)", letterSpacing: "-0.02em", lineHeight: 1.35 }}>{title}</span>
    </div>
    <div className="how-chip" style={{ margin: "auto auto 0", display: "flex" }}>{chip}</div>
  </div>
);

type CourseProps = {
  name: string; buddy: string; color: string; src: string; pos?: string;
  region: string; time: string; price: string;
  rating?: string; reviews?: string; tags: string[]; isNew?: boolean;
};

const CourseCard = ({ name, buddy, color, src, pos, region, time, price, rating, reviews, tags, isNew }: CourseProps) => (
  <div style={{ display: "flex", flexDirection: "column", background: "var(--paper)", border: "2px solid var(--ink)", borderRadius: 12, boxShadow: "6px 6px 0 var(--ink)", overflow: "hidden" }}>
    <div style={{ position: "relative" }}>
      <div style={{ width: "100%", aspectRatio: "4 / 5", borderBottom: "2px solid var(--ink)", backgroundImage: `url(${src})`, backgroundSize: "cover", backgroundPosition: pos || "center" }} />
      <div style={{ position: "absolute", top: 12, left: 12, background: "var(--paper)", border: "1.5px solid var(--ink)", boxShadow: "2px 2px 0 var(--ink)", borderRadius: 999, padding: "4px 11px", fontSize: 12, fontWeight: 800, color: "var(--ink)" }}>{region}</div>
    </div>
    <div style={{ padding: "18px 18px 16px", display: "flex", flexDirection: "column", flex: 1 }}>
      <div style={{ fontSize: 20, fontWeight: 900, color: "var(--ink)", letterSpacing: "-0.03em", lineHeight: 1.25, marginBottom: 9 }}>{name}</div>
      <div style={{ display: "flex", alignItems: "baseline", gap: 7, marginBottom: 9 }}>
        <span style={{ fontSize: 10, fontWeight: 700, color: "var(--ink-soft)", letterSpacing: "0.08em" }}>버디</span>
        <span style={{ fontSize: 18, fontWeight: 900, color: color, letterSpacing: "-0.03em", lineHeight: 1 }}>{buddy}</span>
        {isNew
          ? <span style={{ fontSize: 11, fontWeight: 800, color: "var(--pink-hot)", whiteSpace: "nowrap" }}>신규 버디</span>
          : <span style={{ fontSize: 12, fontWeight: 700, color: "var(--ink-soft)", whiteSpace: "nowrap" }}><span style={{ color: "var(--pink-hot)" }}>★</span> {rating} · 리뷰 {reviews}</span>}
      </div>
      <div style={{ display: "flex", flexWrap: "wrap", gap: 6, marginBottom: 14 }}>
        {tags.map((t, k) => (<span key={k} style={{ background: "var(--bg-warm)", border: "1px solid var(--ink)", borderRadius: 999, padding: "4px 10px", fontSize: 11, fontWeight: 700, color: "var(--ink-soft)" }}>#{t}</span>))}
      </div>
      <div style={{ marginTop: "auto", paddingTop: 12, borderTop: "1.5px solid var(--ink)", fontSize: 13.5, fontWeight: 700, color: "var(--ink-soft)" }}>
        {time} · <span style={{ color: "var(--pink-hot)", fontWeight: 800 }}>{price}</span>
      </div>
    </div>
  </div>
);

export const HowItWorks = () => (
  <Section label="03-how" bg="var(--bg-warm)">
    <div style={{ marginBottom: 20 }}><Kicker index="03" label="어떻게 진행되나요" /></div>
    <h2 style={{ fontSize: 64, fontWeight: 900, lineHeight: 0.98, letterSpacing: "-0.04em", color: "var(--ink)", marginBottom: 52 }}>
      원하는 플레이와<br /><span style={{ color: "var(--green-deep)" }}>버디를 선택하세요.</span>
    </h2>
    <div className="how-grid" style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 18, marginBottom: 80, alignItems: "stretch" }}>
      <HowStep n="1" title="하고 싶은 데이트를 적어요" chip={<ChipRequest />} />
      <HowStep n="2" title="지원한 버디 프로필 보고 골라요" chip={<ChipApply />} />
      <HowStep n="3" title="협의할 부분은 채팅으로 맞춰요" chip={<ChipChoose />} />
      <HowStep n="4" title="만나서 신나게 놀아요" chip={<ChipMeet />} />
    </div>
    <div style={{ borderTop: "1.5px solid var(--ink)", paddingTop: 52 }}>
      <div style={{ display: "flex", alignItems: "baseline", gap: 16, marginBottom: 28 }}>
        <h3 style={{ fontSize: 30, fontWeight: 900, letterSpacing: "-0.03em", color: "var(--ink)" }}>지금 떠오르는 게 없다면,</h3>
        <span style={{ fontSize: 15, fontWeight: 600, color: "var(--ink-soft)" }}>버디가 올린 코스에 신청하세요</span>
      </div>
    </div>
    <div className="course-grid" style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 20 }}>
      <CourseCard name="성수동 포켓몬 산책" buddy="이안" color="var(--green-deep)" src="/photos/ian.jpg" pos="center 28%" region="성동구" time="2시간" price="5만원" rating="4.9" reviews="38" tags={["ISTJ", "포켓로그도감채우는중"]} />
      <CourseCard name="건대입구 방탈출 체험" buddy="이안" color="var(--green-deep)" src="/photos/ian-4.jpeg" pos="center 22%" region="광진구" time="3시간" price="8만원" rating="4.9" reviews="38" tags={["ISTJ", "4세대입문"]} />
      <CourseCard name="커피 맛집에서 연애 상담" buddy="시드" color="var(--pink-hot)" src="/photos/sid.jpg" pos="center 22%" region="종로구" time="1.5시간" price="4만원" rating="4.8" reviews="52" tags={["연애상담", "커피맛집"]} />
      <CourseCard name="댕댕런 뛰고 쇼츠 남기기" buddy="도키" color="var(--green-deep)" src="/photos/doki.jpg" pos="center 25%" region="종로구" time="1.5시간" price="4만원" isNew tags={["러닝", "쇼츠"]} />
    </div>
    <div className="bobble slow" style={{ position: "absolute", top: 90, right: 90, "--r": "-10deg" } as CSSProperties}><Sparkle size={36} color="var(--pink-hot)" /></div>
  </Section>
);

export default HowItWorks;
