import type { ReactNode } from "react";
import { Section, SectionKicker } from "@/components/Section";
import { Flower, Heart, Sun } from "@/components/Doodles";

const Principle = ({
  no,
  title,
  body,
  doodle,
}: {
  no: string;
  title: string;
  body: string;
  doodle: ReactNode;
}) => (
  <div
    className="grid grid-cols-[80px_1fr] md:grid-cols-[110px_1fr_180px] xl:grid-cols-[140px_1fr_260px] gap-6 md:gap-10 xl:gap-[50px] items-start py-9 md:py-10 xl:py-[46px] relative"
    style={{ borderTop: "1.5px solid var(--ink)" }}
  >
    <div
      className="text-[56px] md:text-[72px] xl:text-[88px] font-black"
      style={{
        color: "var(--green)",
        lineHeight: 1,
        letterSpacing: "-0.05em",
      }}
    >
      {no}
    </div>

    <div>
      <h3
        className="mb-3 xl:mb-3.5 text-[24px] md:text-[30px] xl:text-[38px] font-black"
        style={{
          letterSpacing: "-0.03em",
          lineHeight: 1.15,
          color: "var(--ink)",
        }}
      >
        {title}
      </h3>
      <p
        className="text-[14px] md:text-[15px] xl:text-[17px] font-medium max-w-[560px]"
        style={{
          lineHeight: 1.7,
          color: "var(--ink-soft)",
        }}
      >
        {body}
      </p>
    </div>

    <div className="hidden md:block justify-self-end">{doodle}</div>
  </div>
);

export const Safety = () => (
  <Section
    label="08-safety"
    innerClassName="pt-[64px] md:pt-[88px] xl:pt-[110px] pb-[40px] md:pb-[48px] xl:pb-[56px]"
  >
    <div className="grid grid-cols-1 xl:grid-cols-2 gap-7 xl:gap-16 items-end mb-10 md:mb-12 xl:mb-[50px]">
      <div>
        <div className="mb-5 xl:mb-[22px]">
          <SectionKicker index="08" label="안전 운영" />
        </div>
        <h2
          className="text-[44px] md:text-[64px] xl:text-[92px] font-black"
          style={{
            lineHeight: 0.94,
            letterSpacing: "-0.05em",
            color: "var(--ink)",
          }}
        >
          안전하지 않으면,
          <br />
          <span style={{ color: "var(--green-deep)" }}>
            플레이가 아닙니다.
          </span>
        </h2>
      </div>
      <p
        className="xl:max-w-[420px] xl:justify-self-end text-[15px] xl:text-[17px] font-medium"
        style={{
          lineHeight: 1.75,
          color: "var(--ink-soft)",
        }}
      >
        운영자는 모든 활동의 백그라운드에서 항상 대기합니다.
        <br />
        버디와 게스트 모두 안전하게, 명확한 원칙 안에서만 진행돼요.
      </p>
    </div>

    <div style={{ borderBottom: "1.5px solid var(--ink)" }}>
      <Principle
        no="01"
        title="공개된 일반 장소에서만"
        body="카페, 골목, 공원, 전시장 등 사람이 있는 공개된 곳에서만 진행합니다. 룸·자택·차량 이동은 어떤 경우에도 허용되지 않습니다."
        doodle={<Sun size={80} />}
      />
      <Principle
        no="02"
        title="운영자 면접과 신원 확인 후 등록"
        body="지원서 접수 → 운영자 1:1 면접 → 신분증 기반 신원 확인을 거친 분만 버디로 등록됩니다. 이 절차는 게스트에게도 동일하게 적용됩니다."
        doodle={
          <Flower size={80} color="var(--green-soft)" center="var(--pink)" />
        }
      />
      <Principle
        no="03"
        title="컴플레인 발생 시 즉시 개입"
        body="활동 중 불편하거나 위험한 상황이 발생하면 운영자가 곧바로 개입해 정리합니다. 24시간 연락 채널을 별도로 운영합니다."
        doodle={<Heart size={70} color="var(--pink)" />}
      />
    </div>
  </Section>
);

export default Safety;
