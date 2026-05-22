"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { MagneticWrapper } from "../common/MagneticWrapper";

interface RegistrationButtonProps {
  label: string;
  subLabel?: string;
  href: string;
  isPrimary?: boolean;
  themeColor?: "gold" | "violet" | "teal";
}

export default function RegistrationButton({
  label,
  subLabel = "ACCESS_GATEWAY.sys",
  href,
  isPrimary = true,
  themeColor = "gold"
}: RegistrationButtonProps) {
  const [clickState, setClickState] = useState<"idle" | "requesting" | "success">("idle");

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (clickState !== "idle") return;
    
    e.preventDefault();
    setClickState("requesting");

    // Simulate futuristic secure connection buildup
    setTimeout(() => {
      setClickState("success");
      setTimeout(() => {
        // Navigate to final registration destination
        window.location.href = href;
        // Reset state in case they hit back button
        setTimeout(() => setClickState("idle"), 1000);
      }, 800);
    }, 1200);
  };

  // Color schemes
  const themes = {
    gold: {
      bg: "bg-brand-amber text-black hover:bg-brand-amber-light",
      border: "border-brand-amber/30 group-hover:border-brand-amber/80",
      glow: "rgba(249, 115, 22, 0.35)",
      textAccent: "text-brand-amber",
      textSub: "text-black/60",
      indicator: "bg-black"
    },
    violet: {
      bg: "bg-brand-violet text-white hover:bg-brand-violet-light",
      border: "border-brand-violet/30 group-hover:border-brand-violet/80",
      glow: "rgba(139, 92, 246, 0.35)",
      textAccent: "text-brand-violet",
      textSub: "text-white/60",
      indicator: "bg-white"
    },
    teal: {
      bg: "bg-teal-500 text-black hover:bg-teal-400",
      border: "border-teal-500/30 group-hover:border-teal-500/80",
      glow: "rgba(20, 184, 166, 0.35)",
      textAccent: "text-teal-400",
      textSub: "text-black/60",
      indicator: "bg-black"
    }
  }[themeColor];

  // Underglow transition presets
  const shadowStyle = isPrimary
    ? {
        boxShadow: `0 0 35px ${themes.glow}`
      }
    : {};

  const getButtonText = () => {
    if (clickState === "requesting") return "INITIATING_CONNECTION...";
    if (clickState === "success") return "ACCESS_GRANTED_SECURE";
    return label;
  };

  const getSubText = () => {
    if (clickState === "requesting") return "RESOLVING_IPFS_GATEWAY.0x9";
    if (clickState === "success") return "ROUTING_TO_SYNDICATE_CONSOLE";
    return subLabel;
  };

  const primaryBtn = (
    <motion.a
      href={href}
      onClick={handleClick}
      className={`group relative flex flex-col items-center justify-center px-8 py-4 md:px-12 md:py-5 rounded border ${themes.bg} border-white/10 transition-all duration-300 w-full min-w-[280px] md:min-w-[320px] select-none text-center outline-none focus:ring-2 focus:ring-white/20`}
      style={shadowStyle}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
    >
      {/* Dynamic vector corner borders */}
      <span className="absolute top-1 left-1 w-1.5 h-1.5 border-t border-l border-current opacity-40 group-hover:opacity-100 duration-300" />
      <span className="absolute top-1 right-1 w-1.5 h-1.5 border-t border-r border-current opacity-40 group-hover:opacity-100 duration-300" />
      <span className="absolute bottom-1 left-1 w-1.5 h-1.5 border-b border-l border-current opacity-40 group-hover:opacity-100 duration-300" />
      <span className="absolute bottom-1 right-1 w-1.5 h-1.5 border-b border-r border-current opacity-40 group-hover:opacity-100 duration-300" />

      {/* Button Header Telemetry */}
      <div className="flex items-center gap-1.5 mb-1 justify-center">
        {clickState === "requesting" ? (
          <span className="w-1.5 h-1.5 rounded-full bg-current animate-ping" />
        ) : (
          <span className={`w-1 h-1 rounded-full ${themes.indicator}`} />
        )}
        <span className={`font-mono text-[8px] uppercase tracking-[0.2em] font-bold ${themes.textSub}`}>
          {getSubText()}
        </span>
      </div>

      {/* Main Core Text */}
      <span className="font-mono text-sm md:text-base font-black tracking-[0.15em] flex items-center justify-center gap-2">
        {getButtonText()}
        {clickState === "idle" && (
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="3.0"
            className="w-4 h-4 transform group-hover:translate-x-1 duration-300"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
          </svg>
        )}
      </span>
    </motion.a>
  );

  const secondaryBtn = (
    <motion.a
      href={href}
      className="group relative flex flex-col items-center justify-center px-8 py-4 md:px-12 md:py-5 rounded border border-white/10 bg-obsidian-950/40 hover:bg-white/[0.02] text-white transition-all duration-300 w-full min-w-[280px] md:min-w-[320px] select-none text-center outline-none focus:ring-2 focus:ring-white/20"
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
    >
      <span className="absolute top-1 left-1 w-1.5 h-1.5 border-t border-l border-white/20 group-hover:border-white/50 duration-300" />
      <span className="absolute top-1 right-1 w-1.5 h-1.5 border-t border-r border-white/20 group-hover:border-white/50 duration-300" />
      <span className="absolute bottom-1 left-1 w-1.5 h-1.5 border-b border-l border-white/20 group-hover:border-white/50 duration-300" />
      <span className="absolute bottom-1 right-1 w-1.5 h-1.5 border-b border-r border-white/20 group-hover:border-white/50 duration-300" />

      {/* Button Header Telemetry */}
      <div className="flex items-center gap-1.5 mb-1 justify-center">
        <span className="w-1 h-1 rounded-full bg-obsidian-400 group-hover:bg-brand-violet transition-colors" />
        <span className="font-mono text-[8px] uppercase tracking-[0.2em] font-bold text-obsidian-450 group-hover:text-obsidian-300 transition-colors">
          {subLabel}
        </span>
      </div>

      {/* Main Core Text */}
      <span className="font-mono text-sm md:text-base font-bold tracking-[0.15em] text-obsidian-250 group-hover:text-white transition-colors flex items-center justify-center gap-2">
        {label}
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.0"
          className="w-4 h-4 text-obsidian-400 group-hover:text-white transform group-hover:translate-x-1 duration-300"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
        </svg>
      </span>
    </motion.a>
  );

  return (
    <MagneticWrapper range={50} strength={0.4}>
      {isPrimary ? primaryBtn : secondaryBtn}
    </MagneticWrapper>
  );
}
