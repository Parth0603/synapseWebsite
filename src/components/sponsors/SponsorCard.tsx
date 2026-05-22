"use client";

import React from "react";
import { motion } from "framer-motion";

export interface Sponsor {
  id: string;
  name: string;
  logo: React.ReactNode;
  tier: "alpha" | "consensus" | "peer";
  url: string;
  nodeId: string;
}

interface SponsorCardProps {
  sponsor: Sponsor;
  index: number;
}

export default function SponsorCard({ sponsor, index }: SponsorCardProps) {
  // Define tier-specific color themes for border and radial glow states (subdued for high-end restraint)
  const theme = {
    alpha: {
      border: "hover:border-brand-violet/30 hover:bg-obsidian-900/85",
      glow: "rgba(139, 92, 246, 0.12)", // Reduced glow density
      tag: "text-brand-violet/60"
    },
    consensus: {
      border: "hover:border-brand-amber/30 hover:bg-obsidian-900/85",
      glow: "rgba(249, 115, 22, 0.10)", // Reduced glow density
      tag: "text-brand-amber/60"
    },
    peer: {
      border: "hover:border-slate-500/30 hover:bg-obsidian-900/85",
      glow: "rgba(71, 85, 105, 0.08)", // Reduced glow density
      tag: "text-slate-400/60"
    }
  }[sponsor.tier];

  // Map tier aspects and optimized padding
  const aspectClass = sponsor.tier === "peer" ? "aspect-[2.2/1] p-4" : "aspect-[16/10] p-6";

  // Map tier-specific expanded logo sizing limits
  const logoSize = {
    alpha: "max-h-[64px] max-w-[190px]",
    consensus: "max-h-[54px] max-w-[160px]",
    peer: "max-h-[40px] max-w-[125px]"
  }[sponsor.tier];

  return (
    <motion.a
      href={sponsor.url}
      target="_blank"
      rel="noopener noreferrer"
      className={`group relative overflow-hidden rounded border border-white/5 bg-obsidian-900/60 backdrop-blur-md flex flex-col items-center justify-center transition-all duration-300 ${theme.border} ${aspectClass} will-change-transform`}
      aria-label={`${sponsor.name} Sponsorship Node`}
      whileHover={{ y: -2, scale: 1.01 }} // Slightly more restrained motion
      transition={{ type: "spring", stiffness: 350, damping: 28 }} // Slightly more damped motion
    >
      {/* 
        Layer 20: Absolute Backdrop Glow. Animating only opacity on the compositor thread 
        to ensure zero repaints (60 FPS GPU-safe rendering).
      */}
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
        style={{
          background: `radial-gradient(circle at center, ${theme.glow} 0%, transparent 70%)`
        }}
      />

      {/* Layer 30: Vector-grid gridline accents inside card edges */}
      <div className="absolute inset-0 pointer-events-none border border-transparent group-hover:border-brand-violet/5 duration-300" />

      {/* Layer 40: Mini technical blueprint indicators */}
      <span className="absolute top-2.5 left-3 font-mono text-[8px] tracking-wider text-obsidian-500 select-none group-hover:text-obsidian-300 duration-300">
        [ {sponsor.nodeId} ]
      </span>
      <span className={`absolute bottom-2.5 right-3 font-mono text-[8px] tracking-wider uppercase select-none ${theme.tag} opacity-80 group-hover:opacity-100 duration-300`}>
        {sponsor.tier === "alpha" ? "ALPHA.CORE" : sponsor.tier === "consensus" ? "CON.NODE" : "NET.PEER"}
      </span>

      {/* 
        Layer 50: Interactive Logo Container. Maps a high-performance grayscale filter by default,
        restoring full colored brand identities only on hover.
      */}
      <div 
        className={`relative w-full h-full ${logoSize} flex items-center justify-center filter grayscale opacity-70 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-300`}
      >
        {sponsor.logo}
      </div>
    </motion.a>
  );
}
