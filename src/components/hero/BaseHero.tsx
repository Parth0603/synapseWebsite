"use client";

import React, { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import { motion, useScroll, useTransform } from "framer-motion";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { CentralStack } from "./CentralStack";
import { NixieCountdown } from "./NixieCountdown";
import { CTAButtonGroup } from "./CTAButtonGroup";
import { SponsorTrustStrip } from "./SponsorTrustStrip";
import { ErrorBoundary } from "@/components/common/ErrorBoundary";

const CanvasParticles = dynamic(
  () => import("./CanvasParticles").then((mod) => mod.CanvasParticles),
  { ssr: false }
);

export function BaseHero() {
  const [mounted, setMounted] = useState(false);
  const { scrollY } = useScroll();

  // Single scroll transform for content parallax — atmosphere divs are static (no scroll binding = no recalc)
  const contentY = useTransform(scrollY, [0, 500], [0, 55]);

  useEffect(() => { setMounted(true); }, []);

  return (
    <SectionWrapper
      id="hero"
      showDividers={false}
      className="min-h-screen flex flex-col justify-between overflow-hidden relative selection:bg-brand-violet/30 selection:text-white"
    >

      {/* ── BASE: Deep obsidian void ── */}
      <div className="absolute inset-0 bg-[#040409] pointer-events-none" style={{ zIndex: 5 }} />

      {/* ── LAYER 15: Blueprint corner framing (desktop only, pure CSS — zero cost) ── */}
      <div className="absolute inset-0 pointer-events-none hidden md:block" style={{ zIndex: 15 }} aria-hidden="true">
        <div className="absolute top-8 left-8 w-6 h-6 border-t border-l border-white/[0.05]" />
        <div className="absolute top-8 right-8 w-6 h-6 border-t border-r border-white/[0.05]" />
        <div className="absolute bottom-8 left-8 w-6 h-6 border-b border-l border-white/[0.05]" />
        <div className="absolute bottom-8 right-8 w-6 h-6 border-b border-r border-white/[0.05]" />
      </div>

      {/* ── LAYER 20: Static atmospheric gradients ──────────────────────────────
          PERFORMANCE NOTE: All blur() filters removed — radial-gradient naturally
          produces soft edges and is GPU-composited for free as a static layer.
          NO filter, NO animation, NO mixBlendMode = zero render cost per frame.
      ──────────────────────────────────────────────────────────────────────── */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden" style={{ zIndex: 20 }} aria-hidden="true">

        {/* Primary violet crown — illuminates title from above */}
        <div
          className="absolute pointer-events-none"
          style={{
            top: "-20%",
            left: "50%",
            transform: "translateX(-50%)",
            width: "min(1200px, 130vw)",
            height: "min(650px, 75vh)",
            background: "radial-gradient(ellipse at 50% 0%, hsla(271,80%,62%,0.18) 0%, hsla(271,80%,62%,0.06) 45%, transparent 72%)",
          }}
        />

        {/* Left amber warmth accent */}
        <div
          className="absolute pointer-events-none"
          style={{
            top: "20%",
            left: "-5%",
            width: "min(550px, 50vw)",
            height: "min(420px, 45vh)",
            background: "radial-gradient(ellipse at 50% 50%, hsla(25,90%,58%,0.09) 0%, transparent 70%)",
          }}
        />

        {/* Right-side depth accent */}
        <div
          className="absolute pointer-events-none"
          style={{
            bottom: "5%",
            right: "-5%",
            width: "min(500px, 45vw)",
            height: "min(380px, 40vh)",
            background: "radial-gradient(ellipse at 50% 50%, hsla(25,90%,58%,0.06) 0%, transparent 70%)",
          }}
        />
      </div>

      {/* ── LAYER 30: Canvas particle field (lazy, ssr:false) ── */}
      <ErrorBoundary>
        {mounted && <CanvasParticles />}
      </ErrorBoundary>

      {/* ── LAYER 35: Edge vignette — cheap CSS radial, static ── */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          zIndex: 35,
          background: "radial-gradient(ellipse at 50% 45%, transparent 35%, rgba(4,4,9,0.70) 100%)",
        }}
        aria-hidden="true"
      />

      {/* ── LAYER 45: Content — single motion.div with one scroll binding ── */}
      <motion.div
        style={{ y: contentY, zIndex: 45 }}
        className="flex-grow flex flex-col justify-center items-center relative w-full pt-4 pb-6"
      >
        <CentralStack />
        <NixieCountdown />
        <CTAButtonGroup />
        <ScrollInvitation />
      </motion.div>

      {/* ── LAYER 50: Trust strip ticker ── */}
      <div className="w-full relative" style={{ zIndex: 50 }}>
        <SponsorTrustStrip />
      </div>
    </SectionWrapper>
  );
}

// ─────────────────────────────────────────────
// Scroll Invitation — static animation, minimal
// ─────────────────────────────────────────────
function ScrollInvitation() {
  return (
    <motion.button
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8, delay: 2.0, ease: "easeOut" }}
      className="mt-8 flex flex-col items-center gap-2.5 cursor-pointer group focus:outline-none"
      onClick={() => {
        const el = document.getElementById("portal-transition-section");
        if (el) el.scrollIntoView({ behavior: "smooth" });
        else window.scrollTo({ top: window.innerHeight, behavior: "smooth" });
      }}
      aria-label="Scroll down to enter the portal"
    >
      <span className="font-mono text-[8px] tracking-[0.35em] text-slate-600 group-hover:text-brand-violet/70 transition-colors duration-400 uppercase select-none">
        ENTER PORTAL CORE
      </span>
      {/* Simple CSS chevron using border — zero JS animation cost */}
      <div className="flex flex-col items-center gap-[5px] opacity-40 group-hover:opacity-80 transition-opacity duration-400">
        <svg width="12" height="7" viewBox="0 0 12 7" fill="none" className="text-slate-500 group-hover:text-brand-violet/60 transition-colors duration-400">
          <path d="M1 1l5 5 5-5" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
        <svg width="12" height="7" viewBox="0 0 12 7" fill="none" className="text-slate-600/60 group-hover:text-brand-violet/40 transition-colors duration-400">
          <path d="M1 1l5 5 5-5" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </div>
    </motion.button>
  );
}
