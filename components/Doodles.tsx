import type { CSSProperties } from "react";

type DoodleProps = {
  size?: number;
  color?: string;
  stroke?: string;
  sw?: number;
  style?: CSSProperties;
};

export const Flower = ({
  size = 80,
  color = "#FF6FA8",
  center = "#1F6B3A",
  stroke = "#141414",
  sw = 2.5,
  style,
}: DoodleProps & { center?: string }) => (
  <svg width={size} height={size} viewBox="0 0 100 100" style={style} fill="none">
    <g stroke={stroke} strokeWidth={sw} strokeLinejoin="round">
      <path
        d="M50 20 C 38 18, 32 30, 42 38 C 30 36, 24 50, 38 56 C 28 60, 30 76, 44 70 C 42 82, 58 84, 58 72 C 70 78, 78 64, 66 58 C 78 56, 78 40, 64 40 C 70 28, 56 18, 50 20 Z"
        fill={color}
      />
      <circle cx="52" cy="50" r="9" fill={center} />
    </g>
  </svg>
);

export const Star = ({
  size = 60,
  color = "#FF6FA8",
  stroke = "#141414",
  sw = 2.5,
  style,
}: DoodleProps) => (
  <svg width={size} height={size} viewBox="0 0 100 100" style={style} fill="none">
    <path
      d="M50 8 C 52 30, 60 40, 92 50 C 60 60, 52 70, 50 92 C 48 70, 40 60, 8 50 C 40 40, 48 30, 50 8 Z"
      fill={color}
      stroke={stroke}
      strokeWidth={sw}
      strokeLinejoin="round"
    />
  </svg>
);

export const Squiggle = ({
  width = 120,
  color = "#141414",
  sw = 3.5,
  style,
}: { width?: number; color?: string; sw?: number; style?: CSSProperties }) => (
  <svg width={width} height={width * 0.3} viewBox="0 0 120 36" style={style} fill="none">
    <path
      d="M4 18 C 14 4, 24 32, 34 18 S 54 4, 64 18 S 84 32, 94 18 S 114 4, 116 18"
      stroke={color}
      strokeWidth={sw}
      strokeLinecap="round"
      fill="none"
    />
  </svg>
);

export const Sparkle = ({
  size = 32,
  color = "#FF6FA8",
  stroke = "#141414",
  sw = 2,
  style,
}: DoodleProps) => (
  <svg width={size} height={size} viewBox="0 0 40 40" style={style} fill="none">
    <path
      d="M20 4 L 22 18 L 36 20 L 22 22 L 20 36 L 18 22 L 4 20 L 18 18 Z"
      fill={color}
      stroke={stroke}
      strokeWidth={sw}
      strokeLinejoin="round"
    />
  </svg>
);

export const Sun = ({
  size = 70,
  color = "#FFC93E",
  stroke = "#141414",
  sw = 2.5,
  style,
}: DoodleProps) => (
  <svg width={size} height={size} viewBox="0 0 100 100" style={style} fill="none">
    <g stroke={stroke} strokeWidth={sw} strokeLinecap="round">
      <circle cx="50" cy="50" r="20" fill={color} />
      {[0, 45, 90, 135, 180, 225, 270, 315].map((a, i) => {
        const rad = (a * Math.PI) / 180;
        const x1 = 50 + Math.cos(rad) * 28;
        const y1 = 50 + Math.sin(rad) * 28;
        const x2 = 50 + Math.cos(rad) * 40;
        const y2 = 50 + Math.sin(rad) * 40;
        return <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} />;
      })}
    </g>
  </svg>
);

export const Heart = ({
  size = 60,
  color = "#FF6FA8",
  stroke = "#141414",
  sw = 2.5,
  style,
}: DoodleProps) => (
  <svg width={size} height={size} viewBox="0 0 100 100" style={style} fill="none">
    <path
      d="M50 84 C 20 64, 8 44, 18 28 C 28 12, 46 18, 50 32 C 54 18, 72 12, 82 28 C 92 44, 80 64, 50 84 Z"
      fill={color}
      stroke={stroke}
      strokeWidth={sw}
      strokeLinejoin="round"
    />
  </svg>
);

export const Arrow = ({
  width = 120,
  color = "#141414",
  sw = 3,
  style,
}: { width?: number; color?: string; sw?: number; style?: CSSProperties }) => (
  <svg width={width} height={width * 0.4} viewBox="0 0 120 48" style={style} fill="none">
    <path
      d="M6 30 C 30 6, 60 6, 90 24 L 80 14 M 90 24 L 78 34"
      stroke={color}
      strokeWidth={sw}
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="none"
    />
  </svg>
);
