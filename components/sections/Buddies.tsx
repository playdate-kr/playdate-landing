import type { ReactNode } from "react";
import { Section, SectionKicker } from "@/components/Section";
import { Photo, PHOTOS, type PhotoTone } from "@/components/Photo";
import { Flower, Sparkle, Squiggle, Star } from "@/components/Doodles";

type Side = "left" | "right";

const BuddyCard = ({
  no,
  name,
  tagline,
  course,
  hours,
  price,
  photoSrc,
  photoNote,
  tone,
  side = "left",
  offsetClassName = "",
  accent,
  doodle,
}: {
  no: string;
  name: string;
  tagline: string;
  course: string;
  hours: string;
  price: string;
  photoSrc: string;
  photoNote: string;
  tone: PhotoTone;
  side?: Side;
  offsetClassName?: string;
  accent: string;
  doodle?: ReactNode;
}) => {
  const photoFirst = side === "left";
  return (
    <div
      className={`grid grid-cols-1 xl:gap-[60px] gap-8 items-start relative ${
        photoFirst
          ? "xl:grid-cols-[460px_1fr]"
          : "xl:grid-cols-[1fr_460px]"
      } ${offsetClassName}`}
    >

      {/* Photo */}
      <div
        className={`relative w-full max-w-[460px] mx-auto xl:mx-0 ${
          photoFirst ? "xl:order-1" : "xl:order-2"
        }`}
      >
        <Photo
          src={photoSrc}
          tone={tone}
          note={photoNote}
          style={{
            width: "100%",
            aspectRatio: "23 / 29",
            border: "2px solid var(--ink)",
            boxShadow: "8px 8px 0 var(--ink)",
          }}
        />
        <div
          className="tape"
          style={{
            top: -14,
            [photoFirst ? "right" : "left"]: 70,
            transform: `rotate(${photoFirst ? -5 : 4}deg)`,
          }}
        />
        {doodle && (
          <div
            className="hidden md:block bobble slow absolute z-[3]"
            style={{
              top: 30,
              [photoFirst ? "right" : "left"]: -40,
            }}
          >
            {doodle}
          </div>
        )}
      </div>

      {/* Info column */}
      <div
        className={`pt-2 xl:pt-10 ${photoFirst ? "xl:order-2" : "xl:order-1"}`}
      >
        <div
          className="inline-block text-[13px] xl:text-[14px] font-bold mb-4 xl:mb-[18px]"
          style={{ color: "var(--ink-soft)" }}
        >
          사례 {no} · 활동중인 버디
        </div>

        <h3
          className="text-[56px] md:text-[72px] xl:text-[88px] font-black mb-2 xl:mb-2.5"
          style={{
            letterSpacing: "-0.05em",
            lineHeight: 0.9,
            color: "var(--ink)",
          }}
        >
          {name}
        </h3>

        <p
          className="mb-7 xl:mb-8 text-[18px] xl:text-[22px] font-bold"
          style={{
            letterSpacing: "-0.02em",
            color: accent,
            lineHeight: 1.3,
          }}
        >
          {tagline}
        </p>

        <div
          className="mb-5 xl:mb-6 max-w-[540px] p-5 xl:p-6"
          style={{
            background: "var(--paper)",
            border: "2px solid var(--ink)",
            boxShadow: "6px 6px 0 var(--ink)",
          }}
        >
          <div
            className="text-[12px] font-extrabold mb-2.5"
            style={{
              color: "var(--green)",
              letterSpacing: "0.08em",
            }}
          >
            코스
          </div>
          <p
            className="text-[15px] xl:text-[17px] font-medium"
            style={{
              lineHeight: 1.6,
              color: "var(--ink)",
            }}
          >
            {course}
          </p>
        </div>

        <div className="flex gap-3 xl:gap-3.5 flex-wrap">
          <div
            className="rounded-full px-4 xl:px-5 py-2.5 xl:py-3 text-[14px] xl:text-[16px] font-bold"
            style={{
              background: "var(--bg-warm)",
              border: "1.5px solid var(--ink)",
            }}
          >
            <span
              style={{
                color: "var(--ink-soft)",
                marginRight: 8,
                fontWeight: 600,
              }}
            >
              소요
            </span>
            {hours}
          </div>
          <div
            className="rounded-full px-4 xl:px-5 py-2.5 xl:py-3 text-[14px] xl:text-[16px] font-extrabold"
            style={{
              background: "var(--pink)",
              border: "1.5px solid var(--ink)",
              color: "var(--ink)",
            }}
          >
            <span style={{ fontWeight: 600, marginRight: 8 }}>가격</span>
            {price}
          </div>
        </div>
      </div>
    </div>
  );
};

export const Buddies = () => (
  <Section
    label="05-buddies"
    innerClassName="py-[72px] md:py-[95px] xl:py-[115px]"
  >
    <div className="grid grid-cols-1 xl:grid-cols-2 gap-7 xl:gap-16 items-end mb-12 md:mb-14 xl:mb-[70px]">
      <div>
        <div className="mb-5 xl:mb-[22px]">
          <SectionKicker index="05" label="이미 함께하는 버디" />
        </div>
        <h2
          className="text-[48px] md:text-[68px] xl:text-[92px] font-black"
          style={{
            lineHeight: 0.94,
            letterSpacing: "-0.05em",
            color: "var(--ink)",
          }}
        >
          셋,
          <br />
          그리고 <span style={{ color: "var(--pink-hot)" }}>당신.</span>
        </h2>
      </div>
      <p
        className="xl:max-w-[380px] xl:justify-self-end text-[15px] xl:text-[17px] font-medium"
        style={{
          lineHeight: 1.75,
          color: "var(--ink-soft)",
        }}
      >
        이미 함께하고 있는 세 명의 버디입니다.
        <br />각자 자기 동네, 자기 취향대로{" "}
        <b style={{ color: "var(--ink)" }}>
          코스 · 시간 · 가격을 직접 정해요.
        </b>
        <br />
        당신의 단골 골목이 누군가의 특별한 하루가 됩니다.
      </p>
    </div>

    <div className="flex flex-col gap-12 md:gap-16 xl:gap-[80px]">
      <BuddyCard
        no="01"
        name="이안"
        tagline="성수 골목을 가장 잘 아는 사람"
        course="성수동 빈티지숍 세 곳을 한 바퀴 돌고, 마지막엔 골목 안쪽 작은 카페에서 따뜻한 커피 한 잔."
        hours="2시간"
        price="4만원 / 시간"
        photoSrc={PHOTOS.buddy1}
        photoNote="버디 · 이안"
        tone="warm"
        side="left"
        accent="var(--green-deep)"
        doodle={<Sparkle size={48} color="var(--pink)" />}
      />
      <BuddyCard
        no="02"
        name="시드"
        tagline="산책이 명상인 사람"
        course="남산 둘레길을 천천히 걷고, 사람이 적은 한적한 찻집에서 조용히 차 한 잔을 마십니다."
        hours="1.5시간"
        price="3만원 / 시간"
        photoSrc={PHOTOS.buddy2}
        photoNote="버디 · 시드"
        tone="sage"
        side="right"
        offsetClassName="xl:-mt-10"
        accent="var(--pink-hot)"
        doodle={
          <Flower size={90} color="var(--green-soft)" center="var(--pink)" />
        }
      />
      <BuddyCard
        no="03"
        name="도키"
        tagline="필름카메라 들고 다니는 사람"
        course="을지로 인쇄 골목을 함께 걸으며 사진을 찍습니다. 끝나고 작은 인쇄소에서 한 컷 즉석 인화."
        hours="2시간"
        price="3.5만원 / 시간"
        photoSrc={PHOTOS.buddy3}
        photoNote="버디 · 도키"
        tone="dusk"
        side="left"
        accent="var(--green-deep)"
        doodle={<Star size={56} color="var(--pink-hot)" />}
      />
    </div>

    <div className="hidden xl:block absolute top-[200px] right-[80px]">
      <Squiggle width={120} color="var(--green)" />
    </div>
  </Section>
);

export default Buddies;
