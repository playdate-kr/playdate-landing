"use client";

import { useEffect } from "react";
import { initAnalytics, track } from "@/lib/analytics";

export default function Analytics() {
  useEffect(() => {
    initAnalytics();
    const page = window.location.pathname.startsWith("/buddy") ? "buddy" : "guest";
    track("page_view", { page });
  }, []);
  return null;
}
