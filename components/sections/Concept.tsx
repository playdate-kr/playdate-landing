import { Section, SectionKicker } from "@/components/Section";
import { Flower, Sparkle, Squiggle } from "@/components/Doodles";

export const Concept = () => (
  <Section
    label="02-concept"
    borderTop
    innerClassName="py-[72px] md:py-[100px] xl:py-[130px]"
  >
    <div className="mb-10 md:mb-12 xl:mb-14">
      <SectionKicker index="02" label="컨셉" />
    </div>

    <div className="relative max-w-[1100px]">
      <p
        className="text-[36px] md:text-[60px] xl:text-[88px] font-extrabold"
        style={{
          lineHeight: 1.18,
          letterSpacing: "-0.04em",
          color: "var(--ink)",
        }}
      >
        플레이데이트는
        <br />
        시간을 사고파는 일이 아니라,
        <br />
        누군가의{" "}
        <span style={{ color: "var(--pink-hot)", fontWeight: 900 }}>
          좋아하는 하루
        </span>
        를<br />
        빌려 함께 걷는 일이에요.
      </p>

      <div className="grid grid-cols-1 xl:grid-cols-[1fr_460px] mt-8 xl:mt-12">
        <div className="hidden xl:block" />
        <p
          className="text-[15px] md:text-[16px] xl:text-[18px] font-medium"
          style={{
            lineHeight: 1.75,
            color: "var(--ink-soft)",
          }}
        >
          버디가 짠 코스대로 한 두 시간.
          <br />
          그 시간만큼 평범한 일상이 살짝 특별해집니다.
          <br />
          하루를 끝내고 나면 우리는 다시 각자의 일상으로.
        </p>
      </div>
    </div>

    {/* Doodles — desktop only */}
    <div
      className="hidden xl:block bobble slow absolute"
      style={
        {
          top: 160,
          right: 140,
          "--r": "15deg",
        } as React.CSSProperties
      }
    >
      <Flower size={100} color="var(--green-soft)" center="var(--pink)" />
    </div>
    <div
      className="hidden xl:block bobble absolute"
      style={
        {
          bottom: 220,
          left: 60,
          "--r": "-12deg",
        } as React.CSSProperties
      }
    >
      <Sparkle size={36} color="var(--pink-soft)" />
    </div>
    <div className="hidden xl:block absolute top-[380px] left-[980px]">
      <Squiggle width={120} color="var(--green)" />
    </div>
  </Section>
);

export default Concept;
