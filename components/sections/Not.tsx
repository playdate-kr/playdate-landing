import { Section, SectionKicker } from "@/components/Section";
import { Squiggle, Star } from "@/components/Doodles";

const NotChip = ({ label }: { label: string }) => (
  <div
    className="inline-flex items-center gap-3 md:gap-3.5 rounded-full px-5 md:px-6 py-3 md:py-3.5 text-[16px] md:text-[19px] xl:text-[22px] font-extrabold relative"
    style={{
      background: "transparent",
      border: "2px solid var(--paper)",
      color: "var(--paper)",
      letterSpacing: "-0.02em",
    }}
  >
    <svg
      width="22"
      height="22"
      viewBox="0 0 24 24"
      className="shrink-0 w-[18px] h-[18px] md:w-[22px] md:h-[22px]"
    >
      <circle
        cx="12"
        cy="12"
        r="11"
        fill="var(--pink-hot)"
        stroke="var(--paper)"
        strokeWidth="1.5"
      />
      <path
        d="M7 7 L17 17 M17 7 L7 17"
        stroke="var(--paper)"
        strokeWidth="3"
        strokeLinecap="round"
      />
    </svg>
    <span style={{ position: "relative" }}>
      {label}
      <span
        style={{
          position: "absolute",
          left: -4,
          right: -4,
          top: "52%",
          height: 2,
          background: "var(--pink-hot)",
          transform: "rotate(-3deg)",
        }}
      />
    </span>
  </div>
);

export const Not = () => (
  <Section
    label="04-not"
    background="var(--green-deep)"
    color="var(--paper)"
    innerClassName="py-[72px] md:py-[96px] xl:py-[120px]"
  >
    <div className="mb-8 md:mb-10 xl:mb-[36px]">
      <SectionKicker
        index="04"
        label="분명히 짚어둡니다"
        indexColor="var(--pink)"
        labelColor="rgba(244, 239, 230, 0.7)"
      />
    </div>

    <div className="grid grid-cols-1 xl:grid-cols-2 gap-10 xl:gap-20 items-start">
      <h2
        className="text-[52px] md:text-[80px] xl:text-[116px] font-black"
        style={{
          lineHeight: 0.92,
          letterSpacing: "-0.05em",
        }}
      >
        플레이데이트는
        <br />
        이런 서비스가
        <br />
        <span style={{ color: "var(--pink)" }}>아닙니다.</span>
      </h2>

      <div className="flex flex-col gap-4 md:gap-[18px] xl:pt-[30px] items-start">
        <NotChip label="데이팅·매칭 서비스" />
        <NotChip label="성적 서비스" />
        <NotChip label="신체 접촉을 동반하는 만남" />
        <NotChip label="만남 이후의 사적 연락" />

        <p
          className="mt-6 xl:mt-8 text-[15px] xl:text-[17px] font-medium max-w-[460px]"
          style={{
            lineHeight: 1.7,
            color: "rgba(244, 239, 230, 0.85)",
          }}
        >
          정확히 약속한 한 두 시간, 공개된 장소에서, 짠 코스대로.
          <br />그 이상도 그 이하도 아닙니다. 운영자가 직접 점검하고 관리해요.
        </p>
      </div>
    </div>

    {/* Doodles — md+ */}
    <div
      className="hidden md:block bobble slow absolute"
      style={
        {
          top: 90,
          right: 80,
          "--r": "14deg",
        } as React.CSSProperties
      }
    >
      <Star size={64} color="var(--pink)" />
    </div>
    <div className="hidden md:block absolute" style={{ bottom: 90, left: 70 }}>
      <Squiggle width={140} color="var(--pink-soft)" />
    </div>
  </Section>
);

export default Not;
