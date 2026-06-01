import type { CSSProperties, ReactNode } from "react";

type SectionProps = {
  id?: string;
  label?: string;
  background?: string;
  color?: string;
  borderTop?: boolean;
  borderBottom?: boolean;
  children: ReactNode;
  innerStyle?: CSSProperties;
  /** Tailwind classes appended to the inner container. Use to override py-* paddings. */
  innerClassName?: string;
  className?: string;
};

/**
 * Section wrapper — 1440px max with responsive horizontal padding.
 * Default vertical padding is 72 / 110 / 130 (mobile / tablet / desktop).
 * Override via innerClassName e.g. "py-[100px] md:py-[140px] xl:py-[180px]".
 */
export const Section = ({
  id,
  label,
  background = "var(--bg)",
  color,
  borderTop = false,
  borderBottom = false,
  children,
  innerStyle,
  innerClassName = "py-[72px] md:py-[110px] xl:py-[130px]",
  className,
}: SectionProps) => (
  <section
    id={id}
    data-screen-label={label}
    className={className}
    style={{
      position: "relative",
      width: "100%",
      background,
      color,
      borderTop: borderTop ? "1.5px solid var(--ink)" : undefined,
      borderBottom: borderBottom ? "1.5px solid var(--ink)" : undefined,
      overflow: "hidden",
    }}
  >
    <div
      className={`relative mx-auto w-full max-w-page px-5 md:px-12 xl:px-20 ${innerClassName}`}
      style={innerStyle}
    >
      {children}
    </div>
  </section>
);

export const SectionKicker = ({
  index,
  label,
  indexColor = "var(--green)",
  labelColor = "var(--ink-soft)",
}: {
  index: string;
  label: string;
  indexColor?: string;
  labelColor?: string;
}) => (
  <div className="flex items-baseline gap-3 md:gap-4">
    <div
      className="text-[40px] md:text-[52px] xl:text-[64px] font-black leading-none"
      style={{
        color: indexColor,
        letterSpacing: "-0.04em",
      }}
    >
      {index}
    </div>
    <div
      className="text-[13px] md:text-[15px] xl:text-base font-bold"
      style={{
        color: labelColor,
        letterSpacing: "0.04em",
      }}
    >
      ──── {label}
    </div>
  </div>
);

export default Section;
