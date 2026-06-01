import { Fragment } from "react";
import { Section, SectionKicker } from "@/components/Section";
import { Flower } from "@/components/Doodles";

const CriterionRow = ({
  no,
  label,
  italicWord,
  body,
}: {
  no: string;
  label: string;
  italicWord: string;
  body: string;
}) => {
  const parts = label.split(italicWord);
  return (
    <div
      className="grid grid-cols-[50px_1fr] md:grid-cols-[70px_1fr] gap-5 md:gap-7 py-6 md:py-7"
      style={{ borderTop: "1.5px solid var(--ink)" }}
    >
      <div
        className="text-[24px] md:text-[28px] xl:text-[32px] font-black"
        style={{
          color: "var(--green-deep)",
          letterSpacing: "-0.02em",
          lineHeight: 1,
        }}
      >
        {no}
      </div>
      <div>
        <h3
          className="mb-2.5 text-[22px] md:text-[26px] xl:text-[30px] font-extrabold"
          style={{
            letterSpacing: "-0.03em",
            lineHeight: 1.2,
            color: "var(--ink)",
          }}
        >
          {parts.map((part, i) => (
            <Fragment key={i}>
              {part}
              {i < parts.length - 1 && (
                <span style={{ color: "var(--pink-hot)", fontWeight: 900 }}>
                  {italicWord}
                </span>
              )}
            </Fragment>
          ))}
        </h3>
        <p
          className="text-[14px] md:text-[15px] xl:text-[16px] font-medium max-w-[540px]"
          style={{
            lineHeight: 1.7,
            color: "var(--ink-soft)",
          }}
        >
          {body}
        </p>
      </div>
    </div>
  );
};

export const Criteria = () => (
  <Section
    label="06-criteria"
    borderTop
    innerClassName="py-[64px] md:py-[88px] xl:py-[110px]"
  >
    <div className="grid grid-cols-1 xl:grid-cols-[440px_1fr] gap-12 xl:gap-[100px] items-start">
      {/* Left header */}
      <div>
        <div className="mb-5 xl:mb-[22px]">
          <SectionKicker index="06" label="자격" />
        </div>
        <h2
          className="mb-6 xl:mb-[30px] text-[40px] md:text-[56px] xl:text-[76px] font-black"
          style={{
            lineHeight: 0.96,
            letterSpacing: "-0.04em",
            color: "var(--ink)",
          }}
        >
          이런 분을
          <br />
          <span style={{ color: "var(--green-deep)" }}>찾습니다.</span>
        </h2>
        <p
          className="text-[14px] md:text-[15px] xl:text-[16px] font-medium max-w-[360px]"
          style={{
            lineHeight: 1.7,
            color: "var(--ink-soft)",
          }}
        >
          화려한 경력이나 자기소개서는 필요 없습니다.
          <br />
          아래 네 가지에 자신있게 동의하시면 충분해요.
        </p>

        <div className="hidden xl:block mt-[60px]">
          <Flower size={120} color="var(--pink)" center="var(--green)" />
        </div>
      </div>

      {/* Right list */}
      <div style={{ borderBottom: "1.5px solid var(--ink)" }}>
        <CriterionRow
          no="01"
          label="내 동네와 취향에 진심인 사람"
          italicWord="진심"
          body="누구나 아는 명소 말고, 본인이 자주 가고 좋아하는 골목·가게·풍경이 있는 분."
        />
        <CriterionRow
          no="02"
          label="처음 만난 사람과 두 시간을 편하게 만드는 사람"
          italicWord="편하게"
          body="과한 친밀감 없이, 적당한 거리감으로 자연스럽게 분위기를 이끌어 주실 수 있는 분."
        />
        <CriterionRow
          no="03"
          label="시간 약속을 정확히 지키는 사람"
          italicWord="정확히"
          body="플레이데이트는 시간 단위로 운영됩니다. 정해진 시작과 끝을 지켜주실 수 있어야 해요."
        />
        <CriterionRow
          no="04"
          label="공개된 장소 원칙에 동의하는 사람"
          italicWord="공개된 장소"
          body="룸·자택·차량 이동 없이, 사람이 있는 공개 장소에서만 진행한다는 원칙에 흔쾌히 동의해주시는 분."
        />
      </div>
    </div>
  </Section>
);

export default Criteria;
