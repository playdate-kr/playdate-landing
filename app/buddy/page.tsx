import Hero from "@/components/sections/Hero";
import Steps from "@/components/sections/Steps";
import Buddies from "@/components/sections/Buddies";
import Criteria from "@/components/sections/Criteria";
import Rewards from "@/components/sections/Rewards";
import SafetyRules from "@/components/sections/SafetyRules";
import FinalCTA from "@/components/sections/FinalCTA";
import StickyCTA from "@/components/StickyCTA";
import ApplyFlow from "@/components/ApplyFlow";
import type { Metadata } from "next";
import { META } from "@/content/landing";

export const metadata: Metadata = {
  title: META.title,
  description: META.description,
  openGraph: {
    title: META.title,
    description: META.description,
    images: [{ url: META.ogImage, width: 1200, height: 630, alt: META.title }],
  },
  twitter: {
    card: "summary_large_image",
    title: META.title,
    description: META.description,
    images: [META.ogImage],
  },
};

export default function BuddyPage() {
  return (
    <main>
      <Hero />
      <Steps />
      <Buddies />
      <Criteria />
      <Rewards />
      <SafetyRules />
      <FinalCTA />
      <StickyCTA />
      <ApplyFlow />
    </main>
  );
}
