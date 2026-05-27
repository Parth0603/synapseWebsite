"use client";
import React from "react";
import { motion } from "framer-motion";
import ExpertiseBadge from "./ExpertiseBadge";

export interface Judge {
  id: string;
  name: string;
  role: string;
  company: string;
  specialties: string[];
  tier: "jury" | "mentor";
  themeColor: "gold" | "violet" | "teal";
  socials: {
    linkedin?: string;
    github?: string;
    twitter?: string;
  };
  nodeId: string;
  isSponsorAligned?: boolean;
  isComingSoon?: boolean;
}

interface JudgeCardProps {
  judge: Judge;
}

export default function JudgeCard({ judge }: JudgeCardProps) {
  // Config mapping based on tier/theme colors
  const theme = {
    gold: {
      border: "border-brand-amber/30 hover:border-brand-amber/70",
      glow: "rgba(249, 115, 22, 0.08)",
      textAccent: "text-brand-amber",
      badge: "border-brand-amber/20 text-brand-amber bg-brand-amber/5",
      accentCard: "shadow-[0_0_20px_rgba(249,115,22,0.03)]"
    },
    violet: {
      border: "border-brand-violet/30 hover:border-brand-violet/70",
      glow: "rgba(139, 92, 246, 0.07)",
      textAccent: "text-brand-violet",
      badge: "border-brand-violet/20 text-brand-violet bg-brand-violet/5",
      accentCard: ""
    },
    teal: {
      border: "border-teal-500/30 hover:border-teal-500/70",
      glow: "rgba(20, 184, 166, 0.06)",
      textAccent: "text-teal-400",
      badge: "border-teal-500/20 text-teal-400 bg-teal-500/5",
      accentCard: ""
    }
  }[judge.themeColor];

  // High-Fidelity Retro-Tech Coordinate Vector Avatar
  const geometricAvatar = (
    <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full text-obsidian-750 p-6 group-hover:text-white/20 transition-colors duration-500">
      <circle cx="50" cy="50" r="45" stroke="currentColor" strokeWidth="1" strokeDasharray="3 3" className="animate-spin-slow" />
      <circle cx="50" cy="50" r="35" stroke="currentColor" strokeWidth="1" />
      <circle cx="50" cy="50" r="20" stroke="currentColor" strokeWidth="1.5" />
      <path d="M50 5V95M5 50H95" stroke="currentColor" strokeWidth="0.5" strokeDasharray="2 2" />
      <path d="M35 35L65 65M35 65L65 35" stroke="currentColor" strokeWidth="0.5" />
      {/* Dynamic target ticks */}
      <rect x="47" y="47" width="6" height="6" rx="1" fill="currentColor" className="animate-pulse" />
      <circle cx="50" cy="20" r="2" fill="currentColor" />
      <circle cx="50" cy="80" r="2" fill="currentColor" />
      <circle cx="20" cy="50" r="2" fill="currentColor" />
      <circle cx="80" cy="50" r="2" fill="currentColor" />
    </svg>
  );

  return (
    <motion.div
      className={`group relative overflow-hidden rounded-lg border bg-obsidian-900/40 backdrop-blur-md p-6 flex flex-col justify-between transition-all duration-300 ${theme.border} h-full min-h-[380px] will-change-transform ${theme.accentCard}`}
      whileHover={{ y: -2, scale: 1.006 }}
      transition={{ type: "spring", stiffness: 220, damping: 26 }}
    >
      {/* 
        Layer 10: Performance-optimized background underglow. 
        Only alters opacity to conserve painting resources.
      */}
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
        style={{
          background: `radial-gradient(circle at 50% 20%, ${theme.glow} 0%, transparent 60%)`
        }}
      />

      {/* Layer 20: Vector Blueprint Accents */}
      <div className="absolute top-0 right-0 w-8 h-8 border-t border-r border-white/[0.02] group-hover:border-white/10 duration-300 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-8 h-8 border-b border-l border-white/[0.02] group-hover:border-white/10 duration-300 pointer-events-none" />

      {/* Main card panel */}
      <div>
        {/* Telemetry Header */}
        <div className="flex items-center justify-between mb-6 select-none">
          <span className="font-mono text-[9px] tracking-[0.2em] text-obsidian-500 group-hover:text-obsidian-300 duration-300">
            [ {judge.nodeId} ]
          </span>
          <span className={`font-mono text-[8px] font-extrabold tracking-widest px-2 py-0.5 rounded border uppercase ${theme.badge}`}>
            {judge.tier === "jury" ? "JUDGE" : "MENTOR"}
          </span>
        </div>

        {/* Profile Picture Frame (Cinematic geometric node view) */}
        <div className="relative w-full aspect-square max-h-[140px] mx-auto mb-6 rounded border border-white/5 bg-obsidian-950/60 flex items-center justify-center overflow-hidden">
          {geometricAvatar}
          
          {/* Neon overlay corner ticks */}
          <div className="absolute top-2 left-2 w-2 h-2 border-t border-l border-white/15" />
          <div className="absolute top-2 right-2 w-2 h-2 border-t border-r border-white/15" />
          <div className="absolute bottom-2 left-2 w-2 h-2 border-b border-l border-white/15" />
          <div className="absolute bottom-2 right-2 w-2 h-2 border-b border-r border-white/15" />
        </div>

        {/* Profile details */}
        <div className="text-center mb-5">
          <h3 className="text-lg md:text-xl font-bold tracking-tight text-white uppercase mb-1">
            {judge.name}
          </h3>
          <span className="font-mono text-[10px] text-obsidian-400 block mb-2">
            {judge.role}
          </span>
          
          {/* Verified organization label */}
          <div className="inline-flex items-center gap-1.5 border border-white/5 bg-white/[0.02] px-3 py-1 rounded select-none">
            {judge.isSponsorAligned && (
              <span className="w-1.5 h-1.5 bg-brand-amber rounded-full animate-pulse" />
            )}
            <span className="font-mono text-[9px] text-white font-bold tracking-wide uppercase">
              {judge.company}
            </span>
          </div>
        </div>

        {/* Expertise badge list */}
        <div className="flex flex-wrap justify-center gap-1.5 mb-6">
          {judge.specialties.map((spec, i) => (
            <ExpertiseBadge key={i} text={spec} themeColor={judge.themeColor} />
          ))}
        </div>
      </div>

      {/* Social Vectors Footer */}
      <div>
        <div className="w-full h-[1px] bg-white/5 mb-4 pointer-events-none" />
        <div className="flex items-center justify-center gap-4 min-h-[24px]">
          {judge.isComingSoon ? (
            <span className="font-mono text-[9px] text-obsidian-450 uppercase tracking-widest">
              REVEAL PENDING
            </span>
          ) : (
            <>
              {judge.socials.linkedin && (
                <motion.a
                  href={judge.socials.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1 }}
                  className="text-obsidian-450 hover:text-white transition-colors duration-300 p-1"
                  aria-label={`${judge.name} LinkedIn Profile`}
                >
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.0" className="w-4 h-4">
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z" />
                    <circle cx="4" cy="4" r="2" />
                  </svg>
                </motion.a>
              )}
              {judge.socials.github && (
                <motion.a
                  href={judge.socials.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1 }}
                  className="text-obsidian-450 hover:text-white transition-colors duration-300 p-1"
                  aria-label={`${judge.name} GitHub Profile`}
                >
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.0" className="w-4 h-4">
                    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </motion.a>
              )}
              {judge.socials.twitter && (
                <motion.a
                  href={judge.socials.twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1 }}
                  className="text-obsidian-450 hover:text-white transition-colors duration-300 p-1"
                  aria-label={`${judge.name} Twitter Profile`}
                >
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.0" className="w-4 h-4">
                    <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z" />
                  </svg>
                </motion.a>
              )}
            </>
          )}
        </div>
      </div>
    </motion.div>
  );
}
