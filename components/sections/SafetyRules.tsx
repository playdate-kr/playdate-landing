import type { CSSProperties } from "react";
import { Section, SectionKicker } from "@/components/Section";
import { Star } from "@/components/Doodles";

const SafeItem = ({ no, title, body }: { no: string; title: string; body: string }) => (
  <div className="grid grid-cols-[40px_1fr] md:grid-cols-[56px_1fr] gap-4 md:gap-6 py-5 md:py-7" style={{ borderTop: "1.5px solid rgba(244,239,230,0.3)" }}>
    <div className="text-[22px] md:text-[28px] font-black" style={{ color: "var(--pink)", lineHeight: 1, letterSpacing: "-0.02em" }}>{no}</div>
    <div>
      <h3 className="mb-1.5 text-[20px] md:text-[26px] font-extrabold" style={{ letterSpacing: "-0.03em", lineHeight: 1.2, color: "var(--paper)" }}>{title}</h3>
      <p className="text-[14px] md:text-[16px] font-medium max-w-[560px]" style={{ lineHeight: 1.65, color: "rgba(244, 239, 230, 0.8)" }}>{body}</p>
    </div>
  </div>
);

export const SafetyRules = () => (
  <Section label="06-safety" background="var(--green-deep)" color="var(--paper)" innerClassName="py-[72px] md:py-[96px] xl:py-[112px]">
    <div className="mb-8 md:mb-10 xl:mb-12">
      <SectionKicker index="06" label="안전 & 규칙" indexColor="var(--pink)" labelColor="rgba(244, 239, 230, 0.7)" />
    </div>
    <h2 className="mb-10 md:mb-12 xl:mb-14 text-[44px] md:text-[72px] xl:text-[92px] font-black" style={{ lineHeight: 0.94, letterSpacing: "-0.05em" }}>
      안전해야<br /><span style={{ color: "var(--pink)" }}>즐거워요.</span>
    </h2>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 xl:gap-x-[80px]" style={{ borderBottom: "1.5px solid rgba(244,239,230,0.3)" }}>
      <SafeItem no="01" title="공개된 일반 장소에서만" body="카페·골목·공원·전시장 등 사람이 있는 곳에서만. 룸·자택·차량 이동은 허용되지 않아요." />
      <SafeItem no="02" title="운영자 면접·신원 확인 후 등록" body="지원서 → 1:1 면접(온라인) → 신분증 기반 신원 확인을 거친 분만 등록돼요. 게스트도 본인 인증 필수예요." />
      <SafeItem no="03" title="문제 발생 시 즉시 개입" body="불편한 상황이 생기면 운영자가 곧바로 개입해요. 24시간 카톡 채널 운영." />
      <SafeItem no="04" title="신체 접촉은 없어요" body="플레이데이트는 신체 접촉이 없는 만남이에요." />
      <SafeItem no="05" title="만남 이후 사적인 연락은 하지 않아요" body="정해진 시간이 끝나면 깔끔하게 마무리해요. 개인 번호 교환은 하지 않아요." />
    </div>
    <div className="hidden md:block bobble slow absolute" style={{ top: 80, right: 80, "--r": "14deg" } as CSSProperties}>
      <Star size={56} color="var(--pink)" />
    </div>
  </Section>
);

export default SafetyRules;
