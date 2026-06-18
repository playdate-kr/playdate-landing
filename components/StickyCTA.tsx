"use client";

import { useState, useEffect } from "react";
import { track } from "@/lib/analytics";

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
      onClick={(e) => { e.preventDefault(); track("cta_click", { location: "sticky" }); window.dispatchEvent(new Event("open-apply")); }}
      className="sticky-cta"
      data-hidden={hidden}
      aria-label="버디 등록하기"
    >
      <span>버디 등록하기</span>
      <span style={{ fontSize: 11, fontWeight: 600, opacity: 0.7 }}>1분 소요</span>
      <span className="arrow">→</span>
    </a>
  );
};

export default StickyCTA;
