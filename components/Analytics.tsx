"use client";

import { useEffect } from "react";
import { initAnalytics, track } from "@/lib/analytics";

export default function Analytics() {
  useEffect(() => {
    initAnalytics();
    const path = window.location.pathname;
    let page = "guest";
    const props: Record<string, unknown> = {};
    if (path === "/buddies") page = "buddy_catalog";
    else if (path.startsWith("/buddies/")) { page = "buddy_detail"; props.buddyId = path.split("/")[2] ?? ""; }
    else if (path.startsWith("/buddy")) page = "buddy_recruit";
    track("page_view", { page, ...props });
  }, []);
  return null;
}
