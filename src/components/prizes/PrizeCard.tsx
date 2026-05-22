"use client";
import React from "react";
import { motion } from "framer-motion";

export interface Prize {
  id: string;
  title: string;
  cashAmount: string;
  creditsAmount: string;
  nodeId: string;
  description: string;
  perks: string[];
  themeColor: "gold" | "violet" | "teal";
  icon: React.ReactNode;
}

interface PrizeCardProps {
  prize: Prize;
  index: number;
}

export default function PrizeCard({ prize, index }: PrizeCardProps) {
  // Theme color maps for visual borders, text highlights, radial underglow states, and tag accents (dampened for elite balance)
  const theme = {
    gold: {
      border: "border-brand-amber/15 group-hover:border-brand-amber/40",
      glow: "rgba(249, 115, 22, 0.10)", // Reduced from 0.18
      iconBg: "bg-brand-amber/10 text-brand-amber border-brand-amber/20",
      badge: "border-brand-amber/20 bg-brand-amber/5 text-brand-amber",
      text: "text-brand-amber",
      accent: "shadow-[0_0_35px_rgba(249,115,22,0.04)]"
    },
    violet: {
      border: "border-brand-violet/15 group-hover:border-brand-violet/40",
      glow: "rgba(139, 92, 246, 0.08)", // Reduced from 0.16
      iconBg: "bg-brand-violet/10 text-brand-violet border-brand-violet/20",
      badge: "border-brand-violet/20 bg-brand-violet/5 text-brand-violet",
      text: "text-brand-violet",
      accent: ""
    },
    teal: {
      border: "border-teal-500/15 group-hover:border-teal-500/40",
      glow: "rgba(20, 184, 166, 0.08)", // Reduced from 0.14
      iconBg: "bg-teal-500/10 text-teal-400 border-teal-500/20",
      badge: "border-teal-500/20 bg-teal-500/5 text-teal-400",
      text: "text-teal-400",
      accent: ""
    }
  }[prize.themeColor];

  return (
    <motion.div
      className={`group relative overflow-hidden rounded-lg border bg-obsidian-900/60 backdrop-blur-md p-8 flex flex-col justify-between transition-all duration-300 ${theme.border} h-full min-h-[460px] will-change-transform ${theme.accent}`}
      whileHover={{ y: -3, scale: 1.008 }} // Highly dampened motion
      transition={{ type: "spring", stiffness: 300, damping: 26 }}
    >
      {/* 
        Layer 10: Performance-optimized GPU underglow radial mesh. 
        Only updates opacity during interactive states.
      */}
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
        style={{
          background: `radial-gradient(circle at 10% 10%, ${theme.glow} 0%, transparent 60%)`
        }}
      />

      {/* Layer 20: Vector Blueprint Accents */}
      <div className="absolute top-0 right-0 w-12 h-12 border-t border-r border-white/[0.03] group-hover:border-white/10 duration-300 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-12 h-12 border-b border-l border-white/[0.03] group-hover:border-white/10 duration-300 pointer-events-none" />

      {/* Core Payout Content Stack */}
      <div>
        {/* Telemetry Header */}
        <div className="flex items-center justify-between mb-8 select-none">
          <span className="font-mono text-[9px] tracking-[0.2em] text-obsidian-500 group-hover:text-obsidian-300 duration-300">
            [ {prize.nodeId} ]
          </span>
          <span className={`font-mono text-[8px] font-extrabold tracking-widest px-2.5 py-1 rounded border uppercase select-none ${theme.badge}`}>
            {prize.title === "1st Place" ? "CHAMPION" : prize.title === "2nd Place" ? "RUNNER_UP" : "CONTENDER"}
          </span>
        </div>

        {/* Vector SVG Emblem & Title */}
        <div className="flex items-center gap-4 mb-8">
          <div className={`w-12 h-12 rounded border flex items-center justify-center transition-all duration-300 ${theme.iconBg}`}>
            {prize.icon}
          </div>
          <div>
            <span className="font-mono text-[10px] tracking-widest text-obsidian-400 select-none">RANK_LEVEL</span>
            <h3 className="text-xl md:text-2xl font-extrabold tracking-tight text-white font-display">
              {prize.title}
            </h3>
          </div>
        </div>

        {/* Cash Payout Display */}
        <div className="mb-6">
          <span className="font-mono text-[10px] tracking-widest text-obsidian-400 select-none block mb-1">CASH_REWARD</span>
          <div className="flex items-baseline gap-2">
            <span className="text-4xl md:text-5xl font-black font-mono tracking-tight text-white select-all">
              {prize.cashAmount}
            </span>
            <span className="font-mono text-[10px] text-obsidian-500 uppercase">INR</span>
          </div>
        </div>

        {/* Credits Badge Pill (Sponsor Backed AWS credits from OranetAI) */}
        <div className="mb-8">
          <span className="font-mono text-[10px] tracking-widest text-obsidian-400 select-none block mb-2">INFRASTRUCTURE_RUNWAY</span>
          <div className="inline-flex flex-col w-full">
            <div className="flex items-center gap-2 border border-brand-amber/20 bg-brand-amber/5 px-3.5 py-2.5 rounded shadow-[0_0_15px_rgba(249,115,22,0.05)] w-full">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.0" className="w-4 h-4 text-brand-amber shrink-0 animate-pulse">
                <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" strokeLinecap="round" />
              </svg>
              <div className="flex flex-col">
                <span className="font-mono text-[11px] text-white font-bold tracking-wider">
                  {prize.creditsAmount} credits
                </span>
                <span className="font-mono text-[8px] text-brand-amber/80 font-bold uppercase mt-0.5 select-none">
                  ORANET_AI: AWS_CREDITS_PARTNER
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Description */}
        <p className="text-xs md:text-sm text-obsidian-400 font-mono tracking-wide leading-relaxed mb-6 group-hover:text-obsidian-300 duration-300">
          {prize.description}
        </p>
      </div>

      {/* Perks Checklist Footer */}
      <div>
        <div className="w-full h-[1px] bg-white/5 mb-5 pointer-events-none" />
        <span className="font-mono text-[9px] tracking-widest text-obsidian-500 uppercase select-none block mb-3">ADDITIONAL_BENEFITS</span>
        <ul className="flex flex-col gap-2 font-mono text-[9px] text-obsidian-350">
          {prize.perks.map((perk, i) => (
            <li key={i} className="flex items-center gap-2">
              <span className={`w-1 h-1 rounded-full ${theme.text}`} />
              <span className="tracking-wide uppercase">{perk}</span>
            </li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
}
