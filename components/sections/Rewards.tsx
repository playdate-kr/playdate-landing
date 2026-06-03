import type { ReactNode } from "react";
import { Section, SectionKicker } from "@/components/Section";
import { Flower, Sun, Heart } from "@/components/Doodles";

const RewardRow = ({ label, big, bigAccent, meta, body, doodle }: {
  label?: string;
  big: ReactNode;
  bigAccent: string;
  meta?: string;
  body: string;
  doodle?: ReactNode;
}) => (
  <div className="py-7 md:py-9 relative" style={{ borderTop: "1.5px solid var(--ink)" }}>
    {label && <div className="text-[13px] font-extrabold mb-2.5" style={{ color: "var(--ink-soft)", letterSpacing: "0.04em" }}>{label}</div>}
    <div className="grid grid-cols-1 md:grid-cols-[1fr_360px] gap-3 md:gap-12 items-baseline">
      <div>
        <div className="text-[38px] md:text-[48px] xl:text-[56px] font-black" style={{ color: bigAccent, lineHeight: 0.98, letterSpacing: "-0.04em" }}>{big}</div>
        {meta && <div className="text-[13px] font-bold mt-2.5" style={{ color: "var(--ink-soft)" }}>{meta}</div>}
      </div>
      <p className="text-[15px] md:text-[16px] font-medium" style={{ lineHeight: 1.7, color: "var(--ink-soft)" }}>{body}</p>
    </div>
    {doodle && <div className="hidden xl:block absolute top-7 right-0">{doodle}</div>}
  </div>
);

export const Rewards = () => (
  <Section label="05-rewards" background="var(--bg-warm)" borderTop borderBottom innerClassName="py-[64px] md:py-[88px] xl:py-[104px]">
    <div className="grid grid-cols-1 xl:grid-cols-[400px_1fr] gap-10 xl:gap-[80px] items-start">
      <div className="relative">
        <div className="mb-5 xl:mb-[22px]"><SectionKicker index="05" label="버디가 얻는 것" /></div>
        <h2 className="text-[40px] md:text-[56px] xl:text-[68px] font-black" style={{ lineHeight: 0.98, letterSpacing: "-0.04em", color: "var(--ink)" }}>
          좋아하는 일이<br /><span style={{ color: "var(--pink-hot)" }}>돈</span>이 되는 마법.
        </h2>
        <div className="hidden xl:block mt-[50px]"><Flower size={104} color="var(--green-soft)" center="var(--pink)" /></div>
      </div>
      <div style={{ borderBottom: "1.5px solid var(--ink)" }}>
        <RewardRow
          big={<>월 평균 100만원<span style={{ color: "var(--pink-hot)" }}>+</span></>}
          bigAccent="var(--green-deep)"
          meta="주 10시간 버디 활동 기준 · 주 1회 정산"
          body="데이트 코스에 들어가는 비용을 고려해 직접 설정할 수 있어요."
          doodle={<Sun size={52} />}
        />
        <RewardRow
          big="재미와 효능감"
          bigAccent="var(--pink-hot)"
          body="나만의 데이트 코스가 누군가의 하루를 특별하게 만들어 줄 수 있어요."
          doodle={<Heart size={48} color="var(--pink)" />}
        />
      </div>
    </div>
  </Section>
);

export default Rewards;
