import type { ReactNode } from "react";
import { Section, SectionKicker } from "@/components/Section";
import { Sparkle } from "@/components/Doodles";

const RewardBlock = ({
  no,
  label,
  big,
  bigUnit,
  body,
  accent,
}: {
  no: string;
  label: string;
  big: ReactNode;
  bigUnit?: string;
  body: string;
  accent?: string;
}) => (
  <div
    className="relative flex flex-col min-h-[300px] md:min-h-[340px] xl:min-h-[360px] p-7 md:p-8 xl:p-9 xl:pt-9"
    style={{
      background: "var(--paper)",
      border: "2px solid var(--ink)",
      boxShadow: "8px 8px 0 var(--ink)",
    }}
  >
    <div className="flex justify-between items-baseline mb-6 xl:mb-7">
      <div
        className="text-[13px] xl:text-[14px] font-extrabold"
        style={{
          color: "var(--green-deep)",
          letterSpacing: "0.06em",
        }}
      >
        {no}
      </div>
      <div
        className="text-[12px] xl:text-[13px] font-bold"
        style={{ color: "var(--ink-soft)" }}
      >
        {label}
      </div>
    </div>

    <div
      className="mb-2 text-[48px] md:text-[60px] xl:text-[76px] font-black"
      style={{
        lineHeight: 0.95,
        letterSpacing: "-0.05em",
        color: accent || "var(--ink)",
      }}
    >
      {big}
    </div>
    {bigUnit && (
      <div
        className="mb-5 xl:mb-6 text-[14px] xl:text-[16px] font-bold"
        style={{ color: "var(--ink-soft)" }}
      >
        {bigUnit}
      </div>
    )}

    <p
      className="mt-auto text-[14px] xl:text-[15px] font-medium"
      style={{
        lineHeight: 1.7,
        color: "var(--ink-soft)",
      }}
    >
      {body}
    </p>
  </div>
);

export const Rewards = () => (
  <Section
    label="07-rewards"
    background="var(--bg-warm)"
    borderTop
    borderBottom
    innerClassName="py-[64px] md:py-[88px] xl:py-[104px]"
  >
    {/* Header */}
    <div className="flex flex-col xl:flex-row xl:items-end xl:justify-between gap-6 xl:gap-14 mb-10 md:mb-14 xl:mb-[60px]">
      <div>
        <div className="mb-5 xl:mb-[22px]">
          <SectionKicker index="07" label="보상" />
        </div>
        <h2
          className="text-[40px] md:text-[56px] xl:text-[76px] font-black"
          style={{
            lineHeight: 0.96,
            letterSpacing: "-0.04em",
            color: "var(--ink)",
          }}
        >
          가격은 당신이
          <br />
          <span style={{ color: "var(--pink-hot)" }}>직접 정합니다.</span>
        </h2>
      </div>
      <p
        className="xl:max-w-[360px] text-[15px] xl:text-[16px] font-medium"
        style={{
          lineHeight: 1.7,
          color: "var(--ink-soft)",
        }}
      >
        시간당 단가, 정산 일정, 활동 중 비용 처리까지.
        <br />
        투명하게 안내합니다.
      </p>
    </div>

    {/* 3 blocks */}
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-7 xl:gap-8">
      <RewardBlock
        no="01"
        label="시간당 가격"
        big={
          <>
            1.5만
            <span style={{ color: "var(--ink-soft)", fontWeight: 600 }}>
              {" "}
              ~{" "}
            </span>
            5만원
          </>
        }
        bigUnit="/ 시간 — 버디 직접 설정"
        body="자기 코스의 가치와 본인 활동 가능 시간을 고려해 직접 설정합니다. 시즌별로 조정도 가능해요."
        accent="var(--green-deep)"
      />
      <RewardBlock
        no="02"
        label="정산 주기"
        big={<>월 2회</>}
        bigUnit="익월 5일 · 15일 입금"
        body="활동 시간을 합산해 다음 달 5일과 15일에 등록 계좌로 입금됩니다. 명세는 메일로 발송돼요."
        accent="var(--ink)"
      />
      <RewardBlock
        no="03"
        label="활동 중 비용"
        big={<>게스트 부담</>}
        bigUnit="식음료 · 입장료 · 교통비"
        body="활동 중 발생하는 비용은 게스트 부담이 원칙이며, 버디 본인 분도 게스트가 함께 결제합니다."
        accent="var(--pink-hot)"
      />
    </div>

    <div
      className="hidden xl:block bobble slow absolute"
      style={
        {
          top: 80,
          right: 100,
          "--r": "-10deg",
        } as React.CSSProperties
      }
    >
      <Sparkle size={42} color="var(--pink-hot)" />
    </div>
  </Section>
);

export default Rewards;
