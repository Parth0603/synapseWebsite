"use client";

import React from "react";
import { motion } from "framer-motion";
import TrackGrid from "./TrackGrid";
import { Track } from "./TrackCard";
import { SectionWrapper } from "@/components/ui/SectionWrapper";

// ============================================================================
// HIGH-FIDELITY EVENT TRACKS & CHALLENGES DATASET
// ============================================================================
const EVENT_TRACKS: Track[] = [
  {
    id: "ai-track",
    name: "Coming Soon",
    description: "Official sponsor-backed hackathon tracks and challenge statements will be announced shortly.",
    themeColor: "violet",
    isComingSoon: true,
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-6 h-6" aria-hidden="true">
        <rect x="9" y="9" width="6" height="6" rx="1.5" className="stroke-brand-violet" strokeWidth="2" />
        <path d="M12 3v6M12 15v6M3 12h6M15 12h6" strokeLinecap="round" />
        <path d="M7 7l4.5 4.5M17 7l-4.5 4.5M7 17l4.5-4.5M17 17l-4.5-4.5" strokeDasharray="1.5 1.5" />
        <circle cx="12" cy="3" r="1.5" fill="currentColor" />
        <circle cx="12" cy="21" r="1.5" fill="currentColor" />
        <circle cx="3" cy="12" r="1.5" fill="currentColor" />
        <circle cx="21" cy="12" r="1.5" fill="currentColor" />
        <circle cx="7" cy="7" r="1" fill="currentColor" />
        <circle cx="17" cy="7" r="1" fill="currentColor" />
        <circle cx="7" cy="17" r="1" fill="currentColor" />
        <circle cx="17" cy="17" r="1" fill="currentColor" />
      </svg>
    )
  },
  {
    id: "blockchain-track",
    name: "Coming Soon",
    description: "Official sponsor-backed hackathon tracks and challenge statements will be announced shortly.",
    themeColor: "amber",
    isComingSoon: true,
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-6 h-6" aria-hidden="true">
        <path d="M12 2L3 7v10l9 5 9-5V7l-9-5z" className="stroke-brand-amber" strokeWidth="2" />
        <path d="M12 22V12M3 7l9 5M21 7l-9 5" strokeLinecap="round" />
        <circle cx="12" cy="12" r="2" fill="currentColor" className="text-white" />
        <circle cx="12" cy="2" r="1" fill="currentColor" />
        <circle cx="3" cy="7" r="1" fill="currentColor" />
        <circle cx="21" cy="7" r="1" fill="currentColor" />
        <circle cx="12" cy="22" r="1" fill="currentColor" />
      </svg>
    )
  },
  {
    id: "sponsor-track",
    name: "Coming Soon",
    description: "Official sponsor-backed hackathon tracks and challenge statements will be announced shortly.",
    themeColor: "cyan",
    isComingSoon: true,
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-6 h-6" aria-hidden="true">
        <circle cx="12" cy="12" r="8" className="stroke-teal-500" strokeWidth="2" />
        <ellipse cx="12" cy="12" rx="8" ry="3" strokeLinecap="round" transform="rotate(45 12 12)" />
        <ellipse cx="12" cy="12" rx="8" ry="3" strokeLinecap="round" transform="rotate(-45 12 12)" />
        <circle cx="12" cy="12" r="1.5" fill="currentColor" />
      </svg>
    )
  },
  {
    id: "future-track",
    name: "Coming Soon",
    description: "Official sponsor-backed hackathon tracks and challenge statements will be announced shortly.",
    themeColor: "rose",
    isComingSoon: true,
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-6 h-6" aria-hidden="true">
        <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z" strokeDasharray="3 3" />
        <path d="M12 18a6 6 0 100-12 6 6 0 000 12z" className="stroke-rose-500" strokeWidth="2" />
        <path d="M12 14a2 2 0 100-4 2 2 0 000 4z" fill="currentColor" />
        <path d="M12 6v2M12 16v2M6 12h2M16 12h2" strokeLinecap="round" />
      </svg>
    )
  }
];

export default function TracksSection() {
  return (
    <SectionWrapper
      id="tracks"
      className="relative w-full min-h-screen bg-obsidian-950 overflow-visible py-28 z-30"
    >
      {/* Visual blueprint background grid */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(139,92,246,0.02)_0%,transparent_60%)] pointer-events-none" />
      
      {/* Decorative Blueprint Corner Accents */}
      <div className="absolute top-10 left-10 w-6 h-6 border-t border-l border-white/10 pointer-events-none" />
      <div className="absolute top-10 right-10 w-6 h-6 border-t border-r border-white/10 pointer-events-none" />

      {/* Layer 30: Container wrapper */}
      <div className="max-w-7xl mx-auto px-6 relative z-10 flex flex-col items-center">
        
        {/* Header Block with visual hierarchy */}
        <div className="text-center max-w-3xl flex flex-col items-center mb-20">
          <span className="font-mono text-xs md:text-sm tracking-[0.35em] text-brand-violet uppercase font-semibold mb-4">
            TRACKS_RELEASING_SOON
          </span>
          <h2 className="text-4xl md:text-6xl font-extrabold tracking-tight text-white font-display mb-6">
            Hackathon Tracks Coming Soon
          </h2>
          <p className="text-sm md:text-base text-obsidian-300 font-mono tracking-wide leading-relaxed max-w-2xl">
            We’re preparing specialized innovation tracks across AI, automation, Web3, infrastructure, and emerging technologies. Official challenge tracks and prize categories will be revealed soon.
          </p>
        </div>

        {/* Challenge Cards Grid */}
        <TrackGrid tracks={EVENT_TRACKS} />

        {/* Separator guideline */}
        <div className="w-full max-w-5xl h-[1px] border-t border-dashed border-brand-violet/10 my-24 pointer-events-none" />

        {/* 
          Master High-Conversion Registration CTA Card - Reconfigured for Coming Soon
        */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: [0.25, 1, 0.5, 1] }}
          className="w-full max-w-5xl relative rounded-xl border border-brand-violet/20 bg-gradient-to-br from-obsidian-900/80 via-obsidian-950/90 to-obsidian-900/80 p-8 md:p-14 overflow-hidden flex flex-col items-center text-center group"
        >
          {/* Radial amber-violet backdrop energy node glow */}
          <div className="absolute -inset-40 bg-[radial-gradient(circle_at_center,rgba(139,92,246,0.08)_0%,rgba(249,115,22,0.04)_50%,transparent_100%)] pointer-events-none group-hover:scale-105 duration-700 transition-transform" />

          {/* Grid lines sweep accent */}
          <div className="absolute inset-0 pointer-events-none opacity-[0.02] select-none"
            style={{
              backgroundImage: "radial-gradient(ellipse at center, rgba(139,92,246,0.15) 0%, transparent 80%), linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)",
              backgroundSize: "100% 100%, 20px 20px, 20px 20px"
            }}
          />

          {/* Monospace telemetry tag */}
          <span className="font-mono text-[10px] tracking-[0.3em] text-brand-amber font-extrabold uppercase mb-4 select-none animate-pulse">
            TRACKS_RELEASING_SOON
          </span>

          {/* Heading */}
          <h3 className="text-3xl md:text-5xl font-extrabold tracking-tight text-white font-display mb-5 max-w-3xl leading-tight">
            More Tracks Announcing Soon
          </h3>

          {/* Paragraph explanation */}
          <p className="text-sm md:text-base text-obsidian-300 font-mono tracking-wide leading-relaxed max-w-2xl mb-10">
            New sponsor challenges, ecosystem bounties, and innovation categories are currently being finalized.
          </p>

          {/* CTA Buttons Hierarchy */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-5 w-full max-w-md">
            
            {/* Primary high-glow CTA button */}
            <a
              href="#register"
              className="relative w-full sm:w-auto flex items-center justify-center font-mono text-xs tracking-widest text-black bg-brand-amber hover:bg-brand-amber/90 transition-all duration-300 px-8 py-4 rounded font-bold shadow-[0_0_20px_rgba(249,115,22,0.25)] hover:shadow-[0_0_30px_rgba(249,115,22,0.45)] cursor-pointer select-none"
            >
              Stay Updated
            </a>

          </div>
        </motion.div>
      </div>
    </SectionWrapper>
  );
}
