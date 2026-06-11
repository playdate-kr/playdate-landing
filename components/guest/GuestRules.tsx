import type { CSSProperties } from "react";
import { Section, Kicker } from "@/components/guest/GuestSection";
import { Star } from "@/components/Doodles";

const SafeItem = ({ no, title, body }: { no: string; title: string; body: string }) => (
  <div style={{ display: "grid", gridTemplateColumns: "56px 1fr", gap: 20, padding: "24px 0", borderTop: "1.5px solid rgba(244,239,230,0.3)" }}>
    <div style={{ fontSize: 26, fontWeight: 900, color: "var(--pink)", lineHeight: 1, letterSpacing: "-0.02em" }}>{no}</div>
    <div>
      <h3 style={{ fontSize: 24, fontWeight: 800, letterSpacing: "-0.03em", lineHeight: 1.2, color: "var(--paper)", marginBottom: 7 }}>{title}</h3>
      <p style={{ fontSize: 15, fontWeight: 500, lineHeight: 1.6, color: "rgba(244,239,230,0.8)", maxWidth: 560 }}>{body}</p>
    </div>
  </div>
);

export const GuestRules = () => (
  <Section label="04-rules" bg="var(--green-deep)" color="var(--paper)" pad="100px 80px">
    <div style={{ marginBottom: 44 }}><Kicker index="04" label="지켜야 하는 규칙" indexColor="var(--pink)" labelColor="rgba(244,239,230,0.7)" /></div>
    <h2 style={{ fontSize: 80, fontWeight: 900, lineHeight: 0.94, letterSpacing: "-0.05em", marginBottom: 56 }}>
      안전해야<br /><span style={{ color: "var(--pink)" }}>즐거워요.</span>
    </h2>
    <div className="rules-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", columnGap: 80, borderBottom: "1.5px solid rgba(244,239,230,0.3)" }}>
      <SafeItem no="01" title="공개된 장소에서만 만나요" body="카페·공원·전시장 등 사람이 있는 곳에서만 만나요. 룸·자택·차량 이동은 없어요." />
      <SafeItem no="02" title="신체 접촉은 없어요" body="플레이데이트는 신체 접촉이 없는 만남이에요." />
      <SafeItem no="03" title="사적 연락은 하지 않아요" body="만남이 끝나면 깔끔하게 헤어져요. 개인 번호 교환은 하지 않아요." />
      <SafeItem no="04" title="모든 버디는 신원 확인을 거쳐요" body="운영자 면접과 신분증 확인을 거친 버디만 활동해요. 게스트도 본인 인증을 해요." />
      <SafeItem no="05" title="운영자가 상시 연결되어 있어요" body="불편한 상황이 생기면 운영자가 바로 개입해요. 24시간 카톡 채널을 운영해요." />
    </div>
    <div className="bobble slow" style={{ position: "absolute", top: 90, right: 90, "--r": "14deg" } as CSSProperties}><Star size={56} color="var(--pink)" /></div>
  </Section>
);

export default GuestRules;
