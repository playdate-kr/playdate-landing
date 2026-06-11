"use client";

import { useEffect, useState } from "react";

export const MStickyCTA = () => {
  const [hidden, setHidden] = useState(true);
  useEffect(() => {
    const check = () => {
      const vh = window.innerHeight;
      const visible = ["hero-cta", "beta-cta"].some((id) => {
        const el = document.getElementById(id);
        if (!el) return false;
        const r = el.getBoundingClientRect();
        return r.bottom > 0 && r.top < vh;
      });
      setHidden(visible);
    };
    let ticking = false;
    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => { check(); ticking = false; });
    };
    check();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => { window.removeEventListener("scroll", onScroll); window.removeEventListener("resize", onScroll); };
  }, []);
  return (
    <a href="#" className="m-sticky" data-hidden={hidden} onClick={(e) => { e.preventDefault(); window.dispatchEvent(new Event("open-beta")); }}>
      <span>데이트 신청하기</span>
      <span style={{ width: 26, height: 26, borderRadius: 999, background: "var(--ink)", color: "var(--pink)", display: "inline-flex", alignItems: "center", justifyContent: "center", fontSize: 13 }}>→</span>
    </a>
  );
};

export default MStickyCTA;
