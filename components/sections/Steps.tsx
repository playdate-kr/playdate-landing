import type { ReactNode } from "react";
import { Section, SectionKicker } from "@/components/Section";
import { Photo, PHOTOS, type PhotoTone } from "@/components/Photo";
import { Arrow, Flower, Sparkle, Star } from "@/components/Doodles";

const Step = ({
  num,
  title,
  body,
  photoSrc,
  photoNote,
  tone,
  doodle,
  rotate = 0,
}: {
  num: string;
  title: string;
  body: string;
  photoSrc: string;
  photoNote: string;
  tone: PhotoTone;
  doodle?: ReactNode;
  rotate?: number;
}) => (
  <div className="relative">
    <div
      className="text-[44px] md:text-[80px] xl:text-[96px] font-black mb-2 md:mb-5"
      style={{
        lineHeight: 1,
        letterSpacing: "-0.04em",
        color: "var(--green-deep)",
      }}
    >
      {num}
    </div>

    <div className="relative mb-4 xl:mb-7">
      <Photo
        src={photoSrc}
        tone={tone}
        note={photoNote}
        className="w-full aspect-[16/9] md:aspect-[3/2] lg:aspect-[4/5]"
        style={{
          border: "2px solid var(--ink)",
          transform: `rotate(${rotate}deg)`,
          boxShadow: "8px 8px 0 var(--ink)",
        }}
      />
      {doodle && (
        <div className="absolute -top-7 -right-7 z-[3]">{doodle}</div>
      )}
    </div>

    <h3
      className="text-[24px] md:text-[26px] xl:text-[30px] font-black mb-3 xl:mb-3.5"
      style={{
        letterSpacing: "-0.03em",
        color: "var(--ink)",
      }}
    >
      {title}
    </h3>
    <p
      className="text-[15px] xl:text-[16px] font-medium max-w-[320px]"
      style={{
        lineHeight: 1.65,
        color: "var(--ink-soft)",
      }}
    >
      {body}
    </p>
  </div>
);

export const Steps = () => (
  <Section
    label="03-steps"
    background="var(--bg-warm)"
    borderTop
    borderBottom
    innerClassName="py-[48px] md:py-[80px] xl:py-[104px]"
  >
    {/* Heading row */}
    <div className="flex flex-col md:flex-row md:justify-between md:items-end mb-7 md:mb-14 xl:mb-[60px] gap-5 md:gap-14">
      <div>
        <div className="mb-4 md:mb-[18px]">
          <SectionKicker index="03" label="버디가 하는 일" />
        </div>
        <h2
          className="text-[40px] md:text-[56px] xl:text-[76px] font-black"
          style={{
            lineHeight: 0.96,
            letterSpacing: "-0.04em",
            color: "var(--ink)",
          }}
        >
          세 가지로
          <br />
          <span style={{ color: "var(--green-deep)" }}>심플하게.</span>
        </h2>
      </div>
      <p
        className="md:max-w-[340px] text-[15px] xl:text-[16px] font-medium"
        style={{
          lineHeight: 1.7,
          color: "var(--ink-soft)",
        }}
      >
        코스를 짜고, 정해진 시간 동안 함께하고, 깔끔하게 마무리합니다.
        <br className="hidden md:inline" />그 이상도 그 이하도 아니에요.
      </p>
    </div>

    {/* Steps */}
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-10 xl:gap-[60px] relative">
      <Step
        num="01"
        title="내 코스 짜기"
        body="좋아하는 골목, 가게, 풍경을 한 두 시간짜리 산책 코스로 묶어요. 시간과 가격도 직접 정합니다."
        photoSrc={PHOTOS.course1}
        photoNote="장면 · 코스 노트, 지도"
        tone="warm"
        rotate={-2}
        doodle={<Flower size={80} color="var(--pink)" center="#FFC93E" />}
      />
      <Step
        num="02"
        title="함께 걷기"
        body="게스트와 약속한 시간에 만나, 짠 코스대로 같이 걷고 이야기합니다. 모든 곳은 사람이 있는 공개된 장소예요."
        photoSrc={PHOTOS.course2}
        photoNote="장면 · 함께 걷기"
        tone="sage"
        rotate={1.5}
        doodle={<Sparkle size={48} color="var(--pink-hot)" />}
      />
      <Step
        num="03"
        title="깔끔하게 마무리"
        body="정해진 시간이 끝나면 잘 인사하고 헤어집니다. 만남 이후의 사적 연락은 남기지 않아요."
        photoSrc={PHOTOS.course3}
        photoNote="장면 · 노을, 마무리"
        tone="dusk"
        rotate={-1}
        doodle={<Star size={64} color="var(--green-soft)" />}
      />
    </div>

    {/* Connecting arrows — desktop only */}
    <div
      className="hidden xl:block absolute z-[5]"
      style={{
        top: 480,
        left: "calc(33.33% - 30px)",
        transform: "translateX(-50%)",
      }}
    >
      <Arrow width={90} color="var(--green-deep)" />
    </div>
    <div
      className="hidden xl:block absolute z-[5]"
      style={{
        top: 480,
        left: "calc(66.66% - 30px)",
        transform: "translateX(-50%)",
      }}
    >
      <Arrow width={90} color="var(--green-deep)" />
    </div>
  </Section>
);

export default Steps;
