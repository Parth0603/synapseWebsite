"use client";

import React from "react";
import { motion } from "framer-motion";

export interface Track {
  id: string;
  name: string;
  prizePool: string;
  nodeId: string;
  description: string;
  technologies: string[];
  themeColor: "violet" | "amber" | "cyan" | "rose";
  icon: React.ReactNode;
}

interface TrackCardProps {
  track: Track;
  index: number;
}

export default function TrackCard({ track, index }: TrackCardProps) {
  // Map our premium theme palettes
  const theme = {
    violet: {
      border: "hover:border-brand-violet/50",
      glow: "rgba(139, 92, 246, 0.15)", // Neural Violet radial glow
      iconBg: "bg-brand-violet/10 text-brand-violet border-brand-violet/20",
      pill: "bg-brand-violet/5 text-brand-violet/80 border-brand-violet/10"
    },
    amber: {
      border: "hover:border-brand-amber/50",
      glow: "rgba(249, 115, 22, 0.15)", // Crypto Amber radial glow
      iconBg: "bg-brand-amber/10 text-brand-amber border-brand-amber/20",
      pill: "bg-brand-amber/5 text-brand-amber/80 border-brand-amber/10"
    },
    cyan: {
      border: "hover:border-teal-500/50",
      glow: "rgba(20, 184, 166, 0.12)", // Sponsor Cyan/Teal radial glow
      iconBg: "bg-teal-500/10 text-teal-400 border-teal-500/20",
      pill: "bg-teal-500/5 text-teal-400/80 border-teal-500/10"
    },
    rose: {
      border: "hover:border-rose-500/50",
      glow: "rgba(244, 63, 94, 0.12)", // Experimental Rose radial glow
      iconBg: "bg-rose-500/10 text-rose-400 border-rose-500/20",
      pill: "bg-rose-500/5 text-rose-400/80 border-rose-500/10"
    }
  }[track.themeColor];

  return (
    <motion.div
      className={`group relative overflow-hidden rounded-lg border border-white/5 bg-obsidian-900/40 backdrop-blur-md p-6 md:p-8 flex flex-col justify-between transition-all duration-300 ${theme.border} h-full min-h-[380px] will-change-transform`}
      whileHover={{ y: -2.5, scale: 1.008 }} // Slightly more restrained motion
      transition={{ type: "spring", stiffness: 300, damping: 26 }}
    >
      {/* 
        Layer 10: absolute underglow mesh gradient. Animating only opacity on the compositor thread 
        to ensure high GPU performance during heavy scrolling.
      */}
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
        style={{
          background: `radial-gradient(circle at 10% 10%, ${theme.glow} 0%, transparent 60%)`
        }}
      />

      {/* Layer 20: Subtle grid scanline details */}
      <div className="absolute inset-0 pointer-events-none border border-transparent group-hover:border-white/[0.02] duration-300" />

      {/* Card Header Info */}
      <div>
        <div className="flex items-center justify-between mb-6">
          <span className="font-mono text-[9px] tracking-widest text-obsidian-500 group-hover:text-obsidian-300 duration-300 select-none">
            [ {track.nodeId} ]
          </span>
          <div className="flex items-center gap-1.5 px-3 py-1 rounded bg-white/5 border border-white/10 select-none">
            <span className="font-mono text-[9px] text-obsidian-400 font-bold uppercase tracking-wider">PRIZE_POOL</span>
            <span className="font-mono text-[10px] text-brand-amber font-extrabold">{track.prizePool}</span>
          </div>
        </div>

        {/* Vector SVG Icon */}
        <div className={`w-12 h-12 rounded border flex items-center justify-center mb-6 transition-all duration-300 ${theme.iconBg}`}>
          {track.icon}
        </div>

        {/* Challenge Title */}
        <h3 className="text-xl md:text-2xl font-bold tracking-tight text-white mb-3 font-display">
          {track.name}
        </h3>

        {/* Challenge Description */}
        <p className="text-xs md:text-sm text-obsidian-400 font-mono tracking-wide leading-relaxed mb-6 group-hover:text-obsidian-300 duration-300">
          {track.description}
        </p>
      </div>

      {/* Tech Stack Footer Pills */}
      <div>
        <div className="w-full h-[1px] bg-white/5 mb-5 pointer-events-none" />
        <div className="flex flex-wrap gap-2 select-none">
          {track.technologies.map((tech) => (
            <span
              key={tech}
              className={`font-mono text-[8px] font-bold tracking-widest uppercase px-2.5 py-1 rounded border transition-all duration-300 ${theme.pill}`}
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
