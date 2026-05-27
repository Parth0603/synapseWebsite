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
  const aspectClass = sponsor.tier === "peer" ? "aspect-[2.2/1] p-6 md:p-8" : "aspect-[16/10] p-8 md:p-10";

  // Map tier-specific expanded logo sizing limits
  const logoSize = {
    alpha: "max-h-[120px] max-w-[350px]",
    consensus: "max-h-[100px] max-w-[300px]",
    peer: "max-h-[80px] max-w-[250px]"
  }[sponsor.tier];

  return (
    <motion.a
      href={sponsor.url}
      target="_blank"
      rel="noopener noreferrer"
      className={`group relative overflow-hidden rounded border border-white/10 bg-obsidian-900/80 backdrop-blur-md flex flex-col items-center justify-center transition-all duration-300 ${theme.border} ${aspectClass} will-change-transform`}
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
      <div className="absolute inset-0 pointer-events-none border border-transparent group-hover:border-brand-violet/10 duration-300" />



      {/* 
        Layer 50: Interactive Logo Container. Maps a high-performance grayscale filter by default,
        restoring full colored brand identities only on hover.
      */}
      <div 
        className={`relative w-full h-full ${logoSize} flex items-center justify-center filter grayscale opacity-90 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-300`}
      >
        {sponsor.logo}
      </div>
    </motion.a>
  );
}
