import type { CSSProperties, ReactNode } from "react";

type SectionProps = {
  label?: string;
  bg?: string;
  color?: string;
  children: ReactNode;
  pad?: string;
  borderTop?: boolean;
};

export const Section = ({ label, bg = "var(--bg)", color, children, pad = "104px 80px", borderTop = true }: SectionProps) => (
  <section
    data-screen-label={label}
    style={{ position: "relative", width: "100%", background: bg, color, overflow: "hidden", borderTop: borderTop ? "1.5px solid var(--ink)" : "none" }}
  >
    <div style={{ position: "relative", margin: "0 auto", maxWidth: 1440, padding: pad }}>{children}</div>
  </section>
);

type KickerProps = {
  index: string;
  label: string;
  indexColor?: string;
  labelColor?: string;
};

export const Kicker = ({ index, label, indexColor = "var(--green)", labelColor = "var(--ink-soft)" }: KickerProps) => (
  <div className="kicker" style={{ display: "flex", alignItems: "baseline", gap: 16 }}>
    <span style={{ fontSize: 60, fontWeight: 900, lineHeight: 1, letterSpacing: "-0.04em", color: indexColor }}>{index}</span>
    <span style={{ fontSize: 15, fontWeight: 700, color: labelColor, letterSpacing: "0.04em" }}>──── {label}</span>
  </div>
);
