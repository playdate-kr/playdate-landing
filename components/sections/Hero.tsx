import { Photo } from "@/components/Photo";
import { Flower, Squiggle } from "@/components/Doodles";

export const Hero = () => (
  <section
    data-screen-label="01-hero"
    className="relative w-full min-h-[680px] xl:min-h-[880px] overflow-hidden"
    style={{ background: "var(--bg)" }}
  >
    <div className="relative mx-auto w-full max-w-page px-5 md:px-12 xl:px-20 pt-[40px] md:pt-[48px] pb-[56px] xl:pb-[64px]">
      {/* Logo + nav */}
      <div className="flex justify-between items-center mb-8 md:mb-10">
        <img
          src="/brand/wordmark.png"
          alt="플레이데이트"
          className="h-6 md:h-7 w-auto"
        />
        <div
          className="flex gap-4 md:gap-7 text-[13px] md:text-[14px] font-semibold"
          style={{ color: "var(--ink-soft)" }}
        >
          <span>소개</span>
          <span>코스</span>
          <span>신청</span>
        </div>
      </div>

      {/* Two-column: 슬로건(상단/우) + 버디 이미지(하단/좌) */}
      <div className="flex flex-col xl:grid xl:grid-cols-[540px_1fr] gap-10 xl:gap-[60px] items-start">
        {/* 슬로건 — 모바일: 상단 / 데스크탑: 우측 */}
        <div className="w-full xl:order-2 xl:pt-[20px]">
          <h1
            className="text-[56px] md:text-[88px] xl:text-[126px] font-black"
            style={{
              lineHeight: 1.05,
              letterSpacing: "-0.05em",
              color: "#218A3D",
            }}
          >
            당신의
            <br />
            하루를
            <br />
            빌려줄래요?
          </h1>

          <p
            className="mt-6 xl:mt-8 text-[16px] md:text-[18px] xl:text-[19px] font-medium max-w-[520px]"
            style={{
              lineHeight: 1.65,
              color: "var(--ink-soft)",
            }}
          >
            당신이 좋아하는 골목, 카페, 산책길을
            <br />
            소개해주세요
          </p>

          <div className="flex flex-wrap items-center gap-4 md:gap-6 mt-6 md:mt-8">
            <a href="#cta" className="cta">
              <span>신청서 작성하기</span>
              <span className="arrow">→</span>
            </a>
          </div>
        </div>

        {/* 버디 이미지 — 모바일: 하단 / 데스크탑: 좌측 */}
        <div className="w-full max-w-[540px] mx-auto xl:mx-0 xl:order-1">
          <div className="grid grid-cols-2 gap-4 md:gap-5 items-start">
            {/* 이안 */}
            <div
              className="flex flex-col items-center"
              style={{ transform: "rotate(-3deg)" }}
            >
              <Photo
                src="/photos/ian.jpg"
                tone="warm"
                className="w-full aspect-[3/4]"
                style={{
                  border: "2px solid var(--ink)",
                  borderRadius: 6,
                  boxShadow: "6px 6px 0 var(--ink)",
                  backgroundPosition: "center 28%",
                }}
              />
              <div
                className="mt-3 text-[13px] md:text-[15px] font-bold"
                style={{ color: "var(--ink)" }}
              >
                이안
              </div>
            </div>

            {/* 시드 */}
            <div
              className="flex flex-col items-center"
              style={{ transform: "rotate(2deg)" }}
            >
              <Photo
                src="/photos/sid.jpg"
                tone="sage"
                className="w-full aspect-[3/4]"
                style={{
                  border: "2px solid var(--ink)",
                  borderRadius: 6,
                  boxShadow: "6px 6px 0 var(--ink)",
                  backgroundPosition: "center 22%",
                }}
              />
              <div
                className="mt-3 text-[13px] md:text-[15px] font-bold"
                style={{ color: "var(--ink)" }}
              >
                시드
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Doodles — desktop only positions */}
      <div
        className="hidden xl:block bobble absolute"
        style={
          {
            top: 560,
            left: 120,
            zIndex: 8,
            "--r": "-8deg",
          } as React.CSSProperties
        }
      >
        <Flower size={100} color="var(--pink)" center="var(--green)" />
      </div>
      <div className="hidden md:block absolute top-[120px] md:top-[150px] xl:top-[180px] right-5 md:right-12 xl:right-20 z-[8]">
        <Squiggle width={120} color="var(--green)" />
      </div>

      {/* Bottom scroll mark */}
      <div
        className="hidden md:flex absolute bottom-10 right-12 xl:right-20 items-center gap-4 text-[12px] md:text-[13px] font-bold"
        style={{ color: "var(--ink-soft)" }}
      >
        <span>01 · 히어로</span>
        <span style={{ color: "var(--green)" }}>↓ 스크롤</span>
      </div>
    </div>
  </section>
);

export default Hero;
