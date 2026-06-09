import { Section, SectionKicker } from "@/components/Section";
import { Photo } from "@/components/Photo";

const TextStep = ({ num, title, body }: { num: string; title: string; body: string }) => (
  <div className="relative">
    <div className="text-[44px] md:text-[64px] xl:text-[80px] font-black mb-2 md:mb-4" style={{ lineHeight: 1, letterSpacing: "-0.04em", color: "var(--green-deep)" }}>{num}</div>
    <h3 className="text-[22px] md:text-[24px] xl:text-[28px] font-black mb-2.5 xl:mb-3" style={{ letterSpacing: "-0.03em", lineHeight: 1.25, color: "var(--ink)" }}>{title}</h3>
    <p className="text-[15px] xl:text-[16px] font-medium" style={{ lineHeight: 1.65, color: "var(--ink-soft)" }}>{body}</p>
  </div>
);

export const Steps = () => (
  <Section label="02-steps" background="var(--bg-warm)" borderTop borderBottom innerClassName="py-[56px] md:py-[80px] xl:py-[96px]">
    <div className="flex flex-col md:flex-row md:justify-between md:items-end mb-8 md:mb-12 gap-5 md:gap-14">
      <div>
        <div className="mb-4 md:mb-[18px]"><SectionKicker index="02" label="버디가 하는 일" /></div>
        <h2 className="text-[40px] md:text-[56px] xl:text-[72px] font-black" style={{ lineHeight: 0.96, letterSpacing: "-0.04em", color: "var(--ink)" }}>
          하루동안<br /><span style={{ color: "var(--green-deep)" }}>우리는 친구예요.</span>
        </h2>
      </div>
    </div>
    <div className="relative mb-10 md:mb-14 max-w-[820px] mx-auto">
      <Photo src="/photos/steps.png" alt="버디 활동 예시 화면" tone="warm" sizes="(max-width: 820px) 100vw, 820px" className="w-full aspect-[16/9]" style={{ border: "2px solid var(--ink)", boxShadow: "8px 8px 0 var(--ink)" }} />
    </div>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10 xl:gap-[60px]">
      <TextStep num="01" title="데이트 코스 짜기" body="방탈출, 코인 노래방, 러닝, 포켓몬 등 내 취미를 2~3시간 코스로 짜요." />
      <TextStep num="02" title="신청 기다리기" body="금액을 정하고 내가 가능한 날짜에 게스트의 신청을 받아요." />
      <TextStep num="03" title="하루동안 친구하기" body="게스트와 만나 즐거운 시간을 보내요." />
    </div>
  </Section>
);

export default Steps;
