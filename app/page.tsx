import Hero from "@/components/sections/Hero";
import Steps from "@/components/sections/Steps";
import Buddies from "@/components/sections/Buddies";
import Criteria from "@/components/sections/Criteria";
import Rewards from "@/components/sections/Rewards";
import SafetyRules from "@/components/sections/SafetyRules";
import FinalCTA from "@/components/sections/FinalCTA";
import StickyCTA from "@/components/StickyCTA";
import ApplyFlow from "@/components/ApplyFlow";

export default function Page() {
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
