"use client";
import React from "react";
import { motion } from "framer-motion";

export interface TimelineEvent {
  id: string;
  phase: string;
  title: string;
  date: string;
  status: "active" | "completed" | "locked";
  isOffline: boolean;
  time: string;
  description: string;
  deliverables: string[];
  coordinates?: string;
  venue?: string;
}

interface TimelineNodeProps {
  event: TimelineEvent;
  index: number;
}

export default function TimelineNode({ event, index }: TimelineNodeProps) {
  const isLeft = index % 2 === 0;

  // Visual palettes based on state & physical vs digital venue
  const statusConfig = {
    completed: {
      badge: "border-emerald-500/20 bg-emerald-500/5 text-emerald-400",
      indicator: "bg-emerald-500 border-emerald-400 shadow-[0_0_15px_rgba(16,185,129,0.5)]",
      line: "bg-emerald-500"
    },
    active: {
      badge: "border-brand-amber/25 bg-brand-amber/5 text-brand-amber/90 font-bold animate-pulse",
      indicator: "bg-brand-amber border-brand-amber/30 shadow-[0_0_12px_rgba(249,115,22,0.4)] scale-105",
      line: "bg-brand-amber/80"
    },
    locked: {
      badge: "border-white/5 bg-white/[0.02] text-obsidian-400",
      indicator: "bg-obsidian-850 border-white/10",
      line: "bg-white/10"
    }
  }[event.status];

  const theme = event.isOffline
    ? {
        border: "border-brand-amber/20 group-hover:border-brand-amber/50",
        glow: "rgba(249, 115, 22, 0.12)",
        textAccent: "text-brand-amber",
        accentCard: "shadow-[0_0_30px_rgba(249,115,22,0.06)] border-brand-amber/20 bg-brand-amber/[0.02]"
      }
    : {
        border: "border-brand-violet/20 group-hover:border-brand-violet/50",
        glow: "rgba(139, 92, 246, 0.1)",
        textAccent: "text-brand-violet",
        accentCard: "border-brand-violet/10 bg-brand-violet/[0.01]"
      };

  const Card = ({ forceLeftAlign = false }: { forceLeftAlign?: boolean }) => {
    // Determine text alignment based on card side and layout override
    const alignRight = isLeft && !forceLeftAlign;

    return (
      <motion.div
        initial={{ opacity: 0, x: alignRight ? -40 : 40 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className={`w-full rounded-lg border bg-obsidian-900/40 backdrop-blur-md p-6 md:p-8 relative overflow-hidden transition-all duration-300 ${theme.border} ${theme.accentCard}`}
        whileHover={{ y: -2, scale: 1.004 }}
      >
        {/* Radial underglow adjusted for card side */}
        <div
          className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
          style={{
            background: `radial-gradient(circle at ${alignRight ? "90% 10%" : "10% 10%"}, ${theme.glow} 0%, transparent 60%)`
          }}
        />

        {/* Blueprint corner vector lines adjusted for side */}
        {alignRight ? (
          <>
            <div className="absolute top-0 right-0 w-8 h-8 border-t border-r border-white/[0.03] group-hover:border-white/10 duration-300" />
            <div className="absolute bottom-0 left-0 w-8 h-8 border-b border-l border-white/[0.03] group-hover:border-white/10 duration-300" />
          </>
        ) : (
          <>
            <div className="absolute top-0 left-0 w-8 h-8 border-t border-l border-white/[0.03] group-hover:border-white/10 duration-300" />
            <div className="absolute bottom-0 right-0 w-8 h-8 border-b border-r border-white/[0.03] group-hover:border-white/10 duration-300" />
          </>
        )}

        {/* Header Telemetry band */}
        <div className={`flex items-center gap-3 justify-between ${alignRight ? "md:justify-end" : "md:justify-between"} mb-4`}>
          {!alignRight && (
            <span className="font-mono text-[9px] tracking-widest text-obsidian-500 uppercase select-none">
              {event.phase}
            </span>
          )}
          <span className={`font-mono text-[8px] tracking-widest px-2 py-0.5 rounded border uppercase select-none ${statusConfig.badge}`}>
            {event.status}
          </span>
          {alignRight && (
            <span className="font-mono text-[9px] tracking-widest text-obsidian-500 uppercase select-none">
              {event.phase}
            </span>
          )}
        </div>

        {/* Date and time display */}
        <div className={`mb-4 flex flex-col ${alignRight ? "md:items-end" : "md:items-start"}`}>
          <div className="flex items-baseline gap-2">
            <span className="text-2xl md:text-3xl font-black font-display text-white tracking-tight">
              {event.date}
            </span>
            <span className="font-mono text-[9px] text-obsidian-400">{event.time}</span>
          </div>
          {event.isOffline && event.coordinates && (
            <div className={`flex items-center gap-1.5 mt-1.5 text-brand-amber font-mono text-[9px] tracking-wider select-none ${alignRight ? "md:justify-end" : ""}`}>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="w-3 h-3">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                <circle cx="12" cy="10" r="3" />
              </svg>
              <span>{event.coordinates} // PHYSICAL_ARENA</span>
            </div>
          )}
        </div>

        {/* Title & Description */}
        <div className={`flex flex-col ${alignRight ? "md:items-end md:text-right" : "md:items-start md:text-left"}`}>
          <h3 className="text-lg md:text-xl font-bold tracking-tight text-white mb-3 uppercase">
            {event.title}
          </h3>
          <p className="text-xs md:text-sm font-mono text-obsidian-450 tracking-wide leading-relaxed mb-5">
            {event.description}
          </p>
        </div>

        {/* Venue Staging Ground info */}
        {event.isOffline && event.venue && (
          <div className={`mb-5 border border-brand-amber/15 bg-brand-amber/5 px-4 py-3 rounded text-left ${alignRight ? "md:text-right" : ""}`}>
            <span className="font-mono text-[8px] tracking-widest text-brand-amber/80 font-bold block mb-1">STAGING_GROUND</span>
            <span className="font-mono text-[10px] text-white font-bold">{event.venue}</span>
          </div>
        )}

        {/* Checkpoint Deliverables Checklist */}
        <div className="w-full h-[1px] bg-white/5 mb-4" />
        <div className={`flex flex-col ${alignRight ? "md:items-end" : "md:items-start"}`}>
          <span className="font-mono text-[8px] tracking-widest text-obsidian-500 uppercase select-none block mb-3">KEY_SYNCHRONIZATIONS</span>
          <ul className={`flex flex-col gap-2 font-mono text-[9px] text-obsidian-350 ${alignRight ? "md:items-end" : "md:items-start"}`}>
            {event.deliverables.map((del, i) => (
              <li key={i} className="flex items-center gap-2">
                {alignRight ? (
                  <>
                    <span className="tracking-wide uppercase select-all">{del}</span>
                    <span className={`w-1 h-1 rounded-full shrink-0 ${theme.textAccent}`} />
                  </>
                ) : (
                  <>
                    <span className={`w-1 h-1 rounded-full shrink-0 ${theme.textAccent}`} />
                    <span className="tracking-wide uppercase select-all">{del}</span>
                  </>
                )}
              </li>
            ))}
          </ul>
        </div>
      </motion.div>
    );
  };

  return (
    <div className="relative w-full flex md:grid md:grid-cols-[1fr_80px_1fr] items-stretch mb-16 md:mb-24 last:mb-0 group">
      {/* 
        ========================================================================
        COLUMN 1: DESKTOP LEFT COLUMN (Even indices only, hidden on mobile)
        ========================================================================
      */}
      <div className="hidden md:flex items-center justify-end w-full pr-8">
        {isLeft ? <Card /> : <div className="w-full" />}
      </div>

      {/* 
        ========================================================================
        COLUMN 2: CENTRAL TIMELINE AXIS DOT (Positioned on the far left on mobile)
        ========================================================================
      */}
      <div className="absolute md:relative left-[24px] -translate-x-1/2 md:left-0 md:translate-x-0 flex md:justify-center items-center z-20 h-full">
        {/* Progress network node dot */}
        <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center bg-obsidian-950 transition-all duration-300 ${statusConfig.indicator}`}>
          {event.status === "completed" ? (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" className="w-3 h-3 text-white">
              <polyline points="20 6 9 17 4 12" />
            </svg>
          ) : event.status === "active" ? (
            <span className="w-2 h-2 rounded-full bg-white animate-pulse" />
          ) : (
            <span className="w-1.5 h-1.5 rounded-full bg-white/10" />
          )}
        </div>
      </div>

      {/* 
        ========================================================================
        COLUMN 3: DESKTOP RIGHT COLUMN / MOBILE CONTENT CONTAINER
        ========================================================================
      */}
      <div className="w-full pl-10 md:pl-8 flex items-center justify-start">
        {/* 
          1. Odd Index Card -> Visible on desktop and mobile.
          2. Even Index Card -> Hidden on desktop (rendered in Col 1), visible on mobile.
        */}
        {!isLeft ? (
          <Card forceLeftAlign={true} />
        ) : (
          <div className="w-full md:hidden">
            <Card forceLeftAlign={true} />
          </div>
        )}
      </div>
    </div>
  );
}
