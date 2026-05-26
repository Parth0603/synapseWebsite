import React from "react";
import { BaseHero } from "@/components/hero/BaseHero";
import BasePortal from "@/components/portal/BasePortal";
import SponsorsSection from "@/components/sponsors/SponsorsSection";
import TracksSection from "@/components/tracks/TracksSection";
import PrizeSection from "@/components/prizes/PrizeSection";
import TimelineSection from "@/components/timeline/TimelineSection";
import JudgesSection from "@/components/judges/JudgesSection";
import FinalCTASection from "@/components/registration/FinalCTASection";
import FAQSection from "@/components/faq/FAQSection";
import ContactSection from "@/components/contact/ContactSection";
import Footer from "@/components/footer/Footer";

export default function Home() {
  return (
    <main className="relative w-full min-h-screen bg-obsidian-950 overflow-x-clip overflow-y-visible">
      {/* Cinematic grid boundary lines mapping global canvas framing */}
      <div className="absolute inset-0 bg-obsidian-950 z-0 pointer-events-none" />
      
      {/* Polished Master Hero Area */}
      <BaseHero />

      {/* Cinematic Portal Transition */}
      <BasePortal />

      {/* Standalone Sponsors Section */}
      <SponsorsSection />

      {/* Cinematic Tracks and Challenges Section */}
      <TracksSection />

      {/* Cinematic Prize Pool & Reward Ecosystem */}
      <PrizeSection />

      {/* Cinematic Event Journey Timeline */}
      <TimelineSection />

      {/* Cinematic Judges & Mentors Leadership */}
      <JudgesSection />

      {/* Cinematic Final Registration & Conversion Section */}
      <FinalCTASection />

      {/* Cinematic FAQ Section Objections Resolver */}
      <FAQSection />

      {/* Cinematic Contact Syndicate Hub */}
      <ContactSection />

      {/* Cinematic Closing Grid Footer */}
      <Footer />
    </main>
  );
}
