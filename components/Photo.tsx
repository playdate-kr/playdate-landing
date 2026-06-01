import type { CSSProperties, ReactNode } from "react";

export type PhotoTone = "warm" | "sage" | "dusk";

type PhotoProps = {
  src?: string;
  tone?: PhotoTone;
  note?: string;
  noteAlt?: string;
  style?: CSSProperties;
  className?: string;
  children?: ReactNode;
};

export const Photo = ({
  src,
  tone = "sage",
  note,
  noteAlt,
  style,
  className = "",
  children,
}: PhotoProps) => (
  <div
    className={`photo ${tone} ${className}`}
    style={{
      backgroundImage: src ? `url(${src})` : undefined,
      backgroundSize: "cover",
      backgroundPosition: "center",
      ...style,
    }}
  >
    {note && (
      <div className="photo-note" style={{ top: 14, left: 14 }}>
        {note}
      </div>
    )}
    {noteAlt && (
      <div className="photo-note" style={{ bottom: 14, right: 14 }}>
        {noteAlt}
      </div>
    )}
    {children}
  </div>
);

const u = (id: string, w = 1200) =>
  `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=${w}&q=80`;

export const PHOTOS = {
  heroPortrait: u("1529626455594-4ff0802cfb7e"),
  buddy1: u("1500648767791-00dcc994a43e"),
  buddy2: u("1438761681033-6461ffad8d80"),
  buddy3: u("1531123897727-8f129e1688ce"),
  course1: u("1481627834876-b7833e8f5570"),
  course2: u("1529156069898-49953e39b3ac"),
  course3: u("1502082553048-f009c37129b9"),
  ctaScene: u("1493612276216-ee3925520721"),
  conceptScene: u("1487744480471-9ca1bca6fb7d"),
};
