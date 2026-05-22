"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

interface TimeRemaining {
  days: string;
  hours: string;
  minutes: string;
  seconds: string;
}

export function NixieCountdown() {
  const [mounted, setMounted] = useState(false);
  const [timeLeft, setTimeLeft] = useState<TimeRemaining>({
    days: "00",
    hours: "00",
    minutes: "00",
    seconds: "00",
  });

  useEffect(() => {
    setMounted(true);
    
    // Set fixed future launch date: June 20, 2026 00:00:00 UTC
    const targetDate = new Date("2026-06-20T00:00:00Z").getTime();

    const calculateTime = () => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference <= 0) {
        setTimeLeft({ days: "00", hours: "00", minutes: "00", seconds: "00" });
        return;
      }

      const d = Math.floor(difference / (1000 * 60 * 60 * 24));
      const h = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const m = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      const s = Math.floor((difference % (1000 * 60)) / 1000);

      setTimeLeft({
        days: d.toString().padStart(2, "0"),
        hours: h.toString().padStart(2, "0"),
        minutes: m.toString().padStart(2, "0"),
        seconds: s.toString().padStart(2, "0"),
      });
    };

    calculateTime();
    const interval = setInterval(calculateTime, 1000);

    return () => clearInterval(interval);
  }, []);

  const tubeVariants = {
    hidden: { opacity: 0, scale: 0.94, y: 8 },
    visible: { 
      opacity: 1, 
      scale: 1, 
      y: 0,
      transition: {
        type: "spring" as const,
        stiffness: 90,
        damping: 18,
        delay: 0.45
      }
    }
  };

  const renderNixieTube = (value: string, label: string) => {
    return (
      <div className="flex flex-col items-center">
        {/* Filament Glass Capsule */}
        <div className="relative w-[48px] h-[72px] sm:w-16 sm:h-24 md:w-20 md:h-28 rounded-[12px] glass-panel border border-brand-amber/20 flex flex-col justify-center items-center shadow-[inset_0_0_20px_rgba(249,115,22,0.05),0_0_15px_rgba(249,115,22,0.05)] select-none">
          {/* Internal filament grids */}
          <div className="absolute inset-x-2 inset-y-4 border-[0.5px] border-white/5 rounded-[6px] pointer-events-none" />
          
          {/* Monospace amber neon numbers */}
          <span 
            className="text-2xl sm:text-3xl md:text-5xl font-mono font-bold tracking-tight text-brand-amber filter drop-shadow-[0_0_8px_rgba(249,115,22,0.7)]"
            style={{ fontVariantNumeric: "tabular-nums" }}
          >
            {mounted ? value : "--"}
          </span>

          {/* Filament underlight glow spot */}
          <div className="absolute bottom-1 w-1/3 h-[2px] bg-brand-amber blur-[1px] opacity-40" />
        </div>
        
        {/* Tube Label */}
        <span className="mt-3 text-[10px] font-mono tracking-[0.2em] text-slate-500 uppercase">
          {label}
        </span>
      </div>
    );
  };

  return (
    <motion.div
      variants={tubeVariants}
      initial="hidden"
      animate="visible"
      className="flex justify-center items-center gap-3 sm:gap-4 md:gap-6 mt-8 mb-10 py-2 z-40 relative max-w-lg mx-auto"
    >
      {renderNixieTube(timeLeft.days, "Days")}
      <span className="text-2xl md:text-3xl font-mono text-brand-amber/40 animate-pulse relative -top-3">:</span>
      {renderNixieTube(timeLeft.hours, "Hours")}
      <span className="text-2xl md:text-3xl font-mono text-brand-amber/40 animate-pulse relative -top-3">:</span>
      {renderNixieTube(timeLeft.minutes, "Mins")}
      <span className="text-2xl md:text-3xl font-mono text-brand-amber/40 animate-pulse relative -top-3">:</span>
      {renderNixieTube(timeLeft.seconds, "Secs")}
    </motion.div>
  );
}
