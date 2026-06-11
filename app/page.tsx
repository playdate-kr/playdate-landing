import GuestHero from "@/components/guest/GuestHero";
import BuddyProfiles from "@/components/guest/BuddyProfiles";
import HowItWorks from "@/components/guest/HowItWorks";
import GuestRules from "@/components/guest/GuestRules";
import Faq from "@/components/guest/Faq";
import GuestCTA from "@/components/guest/GuestCTA";
import BetaApply from "@/components/guest/BetaApply";
import MStickyCTA from "@/components/guest/MStickyCTA";

export default function Page() {
  return (
    <main className="guest">
      <GuestHero />
      <BuddyProfiles />
      <HowItWorks />
      <GuestRules />
      <Faq />
      <GuestCTA />
      <BetaApply />
      <MStickyCTA />
    </main>
  );
}
