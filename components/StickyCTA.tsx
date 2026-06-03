"use client";

import { useState, useEffect } from "react";

type StickyCTAProps = { formUrl?: string };

export const StickyCTA = ({ formUrl = "#" }: StickyCTAProps) => {
  const [hidden, setHidden] = useState(false);
  useEffect(() => {
    const el = document.getElementById("cta");
    if (!el) return;
    const io = new IntersectionObserver(([e]) => setHidden(e.isIntersecting), { threshold: 0.12 });
    io.observe(el);
    return () => io.disconnect();
  }, []);
  return (
    <a
      href={formUrl}
      onClick={(e) => { e.preventDefault(); window.dispatchEvent(new Event("open-apply")); }}
      className="sticky-cta"
      data-hidden={hidden}
      aria-label="신청서 작성하기"
    >
      <span>신청서 작성하기</span>
      <span style={{ fontSize: 11, fontWeight: 600, opacity: 0.7 }}>3분 소요</span>
      <span className="arrow">→</span>
    </a>
  );
};

export default StickyCTA;
