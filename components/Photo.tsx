import Image from "next/image";
import type { CSSProperties, ReactNode } from "react";

export type PhotoTone = "warm" | "sage" | "dusk";

type PhotoProps = {
  src?: string;
  alt?: string;
  tone?: PhotoTone;
  note?: string;
  noteAlt?: string;
  /** maps to object-position (e.g. "center 28%") */
  objectPosition?: string;
  /** responsive sizes hint for next/image */
  sizes?: string;
  /** preload above-the-fold images */
  priority?: boolean;
  style?: CSSProperties;
  className?: string;
  children?: ReactNode;
};

export const Photo = ({
  src,
  alt = "",
  tone = "sage",
  note,
  noteAlt,
  objectPosition = "center",
  sizes = "(max-width: 768px) 100vw, 400px",
  priority = false,
  style,
  className = "",
  children,
}: PhotoProps) => (
  <div className={`photo ${tone} ${className}`} style={style}>
    {src && (
      <Image
        src={src}
        alt={alt}
        fill
        sizes={sizes}
        priority={priority}
        style={{ objectFit: "cover", objectPosition }}
      />
    )}
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
