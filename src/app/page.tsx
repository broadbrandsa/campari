import { Navigation } from "@/components/sections/Navigation";
import { Hero } from "@/components/sections/Hero";
import { Overview } from "@/components/sections/Overview";
import { PlatformRules } from "@/components/sections/PlatformRules";
import { MarketDetail } from "@/components/sections/MarketDetail";
import { KenyaFix } from "@/components/sections/KenyaFix";
import { InfluencerStrategy } from "@/components/sections/InfluencerStrategy";
import { Roadmap } from "@/components/sections/Roadmap";
import { Readiness } from "@/components/sections/Readiness";
import { Footer } from "@/components/sections/Footer";

export default function Home() {
  return (
    <>
      <Navigation />
      <main>
        <Hero />
        <Overview />
        <PlatformRules />
        <MarketDetail />
        <KenyaFix />
        <InfluencerStrategy />
        <Roadmap />
        <Readiness />
      </main>
      <Footer />
    </>
  );
}
