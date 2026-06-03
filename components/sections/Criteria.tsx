import { Section, SectionKicker } from "@/components/Section";
import { Flower } from "@/components/Doodles";

const PItem = ({ no, title, body, accent }: { no: string; title: string; body: string; accent: string }) => (
  <div className="grid grid-cols-[34px_1fr] md:grid-cols-[44px_1fr] gap-4 md:gap-5 py-5 md:py-6" style={{ borderTop: "1.5px solid var(--ink)" }}>
    <div className="text-[20px] md:text-[24px] font-black" style={{ color: accent, lineHeight: 1, letterSpacing: "-0.02em" }}>{no}</div>
    <div>
      <h3 className="mb-1.5 text-[19px] md:text-[22px] font-extrabold" style={{ letterSpacing: "-0.03em", lineHeight: 1.2, color: "var(--ink)" }}>{title}</h3>
      <p className="text-[14px] md:text-[15px] font-medium" style={{ lineHeight: 1.6, color: "var(--ink-soft)" }}>{body}</p>
    </div>
  </div>
);

export const Criteria = () => (
  <Section label="04-criteria" background="var(--bg)" borderTop innerClassName="py-[64px] md:py-[88px] xl:py-[104px]">
    <div className="grid grid-cols-1 xl:grid-cols-[440px_1fr] gap-10 xl:gap-[80px] items-start">
      <div className="relative">
        <div className="mb-5 xl:mb-[22px]"><SectionKicker index="04" label="자격" /></div>
        <h2 className="text-[40px] md:text-[56px] xl:text-[72px] font-black" style={{ lineHeight: 0.96, letterSpacing: "-0.04em", color: "var(--ink)" }}>
          이런 분을<br /><span style={{ color: "var(--green-deep)" }}>찾아요.</span>
        </h2>
        <p className="mt-5 text-[14px] md:text-[15px] xl:text-[16px] font-medium max-w-[340px]" style={{ lineHeight: 1.7, color: "var(--ink-soft)" }}>
          화려한 경력이나 자기소개서는 필요 없어요.
        </p>
        <div className="hidden xl:block mt-[50px]"><Flower size={110} color="var(--pink)" center="var(--green)" /></div>
      </div>
      <div style={{ borderBottom: "1.5px solid var(--ink)" }}>
        <PItem no="01" title="내 동네와 취향에 진심인 사람" body="좋아하는 골목이 있고 취향이 뚜렷한 분." accent="var(--green-deep)" />
        <PItem no="02" title="처음 만난 사람도 편하게 만들어주는 사람" body="적당한 거리감으로 자연스럽게 분위기를 이끄는 분." accent="var(--green-deep)" />
        <PItem no="03" title="시간 약속을 정확히 지키는 사람" body="정해진 시작과 끝을 지켜주실 수 있는 분. 플레이데이트는 시간 단위로 운영돼요." accent="var(--green-deep)" />
        <PItem no="04" title="안전한 만남에 동의하는 사람" body="룸·자택·차량 이동 없이, 공개 장소에서만 진행한다는 원칙에 동의하는 분." accent="var(--green-deep)" />
      </div>
    </div>
  </Section>
);

export default Criteria;
