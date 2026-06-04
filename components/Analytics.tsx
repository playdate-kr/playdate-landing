"use client";

import { useEffect } from "react";
import { initAnalytics, track } from "@/lib/analytics";

export default function Analytics() {
  useEffect(() => {
    initAnalytics();
    track("page_view", { page: "landing" });
  }, []);
  return null;
}
