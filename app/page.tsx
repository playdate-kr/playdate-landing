import Hero from "@/components/sections/Hero";
import Concept from "@/components/sections/Concept";
import Steps from "@/components/sections/Steps";
import Not from "@/components/sections/Not";
import Buddies from "@/components/sections/Buddies";
import Criteria from "@/components/sections/Criteria";
import Rewards from "@/components/sections/Rewards";
import Safety from "@/components/sections/Safety";
import FinalCTA from "@/components/sections/FinalCTA";
import { LINKS } from "@/content/landing";

export default function Page() {
  return (
    <main>
      <Hero />
      <Concept />
      <Steps />
      <Not />
      <Buddies />
      <Criteria />
      <Rewards />
      <Safety />
      <FinalCTA formUrl={LINKS.googleForm} />
    </main>
  );
}
