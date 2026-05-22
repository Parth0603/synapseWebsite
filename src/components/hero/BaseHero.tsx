"use client";

import React, { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import { motion, useScroll, useTransform } from "framer-motion";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { AtmosphericGlow } from "@/components/ui/AtmosphericGlow";
import { CentralStack } from "./CentralStack";
import { NixieCountdown } from "./NixieCountdown";
import { CTAButtonGroup } from "./CTAButtonGroup";
import { SponsorTrustStrip } from "./SponsorTrustStrip";
import { ErrorBoundary } from "@/components/common/ErrorBoundary";

// Lazy-load Canvas Particles to prevent hydration lags and protect early bundle sizes
const CanvasParticles = dynamic(
  () => import("./CanvasParticles").then((mod) => mod.CanvasParticles),
  { ssr: false }
);

export function BaseHero() {
  const [mounted, setMounted] = useState(false);
  const { scrollY } = useScroll();

  // Deceleration-based scroll transforms for parallax atmospheric shifts
  const atmosphereOpacity = useTransform(scrollY, [0, 600], [1, 0]);
  const atmosphereScale = useTransform(scrollY, [0, 600], [1, 0.95]);
  const contentTranslateY = useTransform(scrollY, [0, 600], [0, 80]);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <SectionWrapper id="hero" showDividers={true} className="min-h-screen flex flex-col justify-between py-16 md:py-24 overflow-hidden relative selection:bg-brand-violet/30 selection:text-white">
      {/* ── LAYER 10: TERMINAL BASE (OBSIDIAN VOID & SUB-PIXEL NOISE GRAIN) ── */}
      <div className="absolute inset-0 bg-obsidian-950 noise-overlay opacity-40 pointer-events-none z-[10]" />
      
      {/* Blueprint Coordinate Outlines */}
      <div className="absolute inset-0 border border-white/[0.02] pointer-events-none z-[11] hidden md:block">
        <div className="absolute top-12 left-12 w-6 h-6 border-t border-l border-white/10" />
        <div className="absolute top-12 right-12 w-6 h-6 border-t border-r border-white/10" />
        <div className="absolute bottom-12 left-12 w-6 h-6 border-b border-l border-white/10" />
        <div className="absolute bottom-12 right-12 w-6 h-6 border-b border-r border-white/10" />
        
        {/* Symmetrical framing guides */}
        <div className="absolute left-[12%] inset-y-0 w-[1px] bg-white/[0.01]" />
        <div className="absolute right-[12%] inset-y-0 w-[1px] bg-white/[0.01]" />
      </div>

      {/* ── LAYER 20: ENERGY MESH (RADIAL MESH GLOWS WITH ACCENT GRADIENTS) ── */}
      <motion.div 
        style={{ opacity: atmosphereOpacity, scale: atmosphereScale }}
        className="absolute inset-0 pointer-events-none z-[20] overflow-hidden"
      >
        {/* Top-Centered Neural Violet Spotlight (illuminates titles) */}
        <AtmosphericGlow
          color="violet"
          intensity="high"
          className="top-[-10%] left-1/2 -translate-x-1/2 w-[900px] h-[550px] md:w-[1300px] md:h-[650px] opacity-60 mix-blend-screen"
        />

        {/* Mid-level auxiliary Amber Spotlight (bridges elements) */}
        <AtmosphericGlow
          color="amber"
          intensity="medium"
          className="top-[35%] left-[20%] w-[500px] h-[400px] opacity-25 mix-blend-screen"
        />
        
        {/* Bottom-right Crypto Amber Spotlight (balances deep contrast voids) */}
        <AtmosphericGlow
          color="amber"
          intensity="low"
          className="bottom-[-10%] right-[10%] w-[600px] h-[450px] opacity-20 mix-blend-screen"
        />
      </motion.div>

      {/* ── LAYER 30: ATMOSPHERE DRIFT (PARTICLES SIMULATOR) ── */}
      <ErrorBoundary>
        {mounted && <CanvasParticles />}
      </ErrorBoundary>

      {/* ── LAYER 40 & 50: CONTENT INFRASTRUCTURE (TYPOGRAPHY, CTAS, CONTROLS) ── */}
      <motion.div 
        style={{ y: contentTranslateY }}
        className="flex-grow flex flex-col justify-center items-center relative z-[45] py-8 w-full"
      >
        {/* Typography stack */}
        <CentralStack />

        {/* Urgency countdown panels */}
        <NixieCountdown />

        {/* Tactical CTAs buttons */}
        <CTAButtonGroup />

        {/* Subtle, highly visible animated scroll cue */}
        <motion.div
          initial={{ opacity: 0, y: -5 }}
          animate={{ opacity: 0.6, y: [0, 8, 0] }}
          transition={{
            duration: 2.2,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1.5,
          }}
          className="mt-8 flex flex-col items-center gap-2 cursor-pointer group"
          onClick={() => {
            const nextSec = document.getElementById("portal-transition-section") || document.getElementById("tracks-section");
            if (nextSec) {
              nextSec.scrollIntoView({ behavior: "smooth" });
            } else {
              window.scrollTo({ top: window.innerHeight, behavior: "smooth" });
            }
          }}
          aria-label="Scroll down to explore portal"
          role="button"
          tabIndex={0}
          onKeyDown={(e) => {
            if (e.key === "Enter" || e.key === " ") {
              window.scrollTo({ top: window.innerHeight, behavior: "smooth" });
            }
          }}
        >
          <span className="text-[9px] font-mono tracking-[0.25em] text-slate-500 group-hover:text-brand-violet transition-colors duration-300">
            SCROLL TO EXPLORE
          </span>
          <svg
            className="w-4 h-4 text-slate-500 group-hover:text-brand-violet transition-colors duration-300"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </motion.div>
      </motion.div>

      {/* ── LAYER 50 Grounding Ticker Marquee ── */}
      <div className="w-full relative z-[50]">
        <SponsorTrustStrip />
      </div>
    </SectionWrapper>
  );
}
