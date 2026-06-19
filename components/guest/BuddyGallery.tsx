"use client";

import { useState } from "react";
import { Photo } from "@/components/Photo";

export function BuddyGallery({ photos, pos, name }: { photos: string[]; pos?: string; name: string }) {
  const [active, setActive] = useState(0);
  const main = photos[active] ?? photos[0];

  return (
    <section style={{ paddingTop: 20 }}>
      <Photo
        src={main}
        alt={`${name} 버디`}
        objectPosition={pos}
        priority
        className="w-full"
        style={{ aspectRatio: "4 / 5", maxWidth: 440, margin: "0 auto", borderRadius: 16, border: "2px solid var(--ink)", boxShadow: "6px 6px 0 var(--ink)" }}
        sizes="(max-width: 768px) 90vw, 440px"
      />
      {photos.length > 1 && (
        <div style={{ display: "flex", gap: 10, justifyContent: "center", marginTop: 14, flexWrap: "wrap" }}>
          {photos.map((src, i) => (
            <button
              key={i}
              type="button"
              onClick={() => setActive(i)}
              aria-label={`${i + 1}번째 사진 보기`}
              aria-pressed={i === active}
              style={{ padding: 0, border: "none", background: "none", cursor: "pointer", lineHeight: 0, borderRadius: 10 }}
            >
              <Photo
                src={src}
                alt={`${name} 사진 ${i + 1}`}
                objectPosition={pos}
                style={{
                  width: 72,
                  height: 72,
                  borderRadius: 10,
                  border: i === active ? "2.5px solid var(--pink-hot)" : "1.5px solid var(--ink)",
                  opacity: i === active ? 1 : 0.65,
                  transition: "opacity .15s ease, border-color .15s ease",
                }}
                sizes="72px"
              />
            </button>
          ))}
        </div>
      )}
    </section>
  );
}

export default BuddyGallery;
