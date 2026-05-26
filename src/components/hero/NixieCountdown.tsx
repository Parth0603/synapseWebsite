"use client";

import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface TimeRemaining {
  days: string;
  hours: string;
  minutes: string;
  seconds: string;
}

export function NixieCountdown() {
  const [mounted, setMounted] = useState(false);
  const [timeLeft, setTimeLeft] = useState<TimeRemaining>({
    days: "28",
    hours: "14",
    minutes: "06",
    seconds: "00",
  });

  useEffect(() => {
    setMounted(true);
    const targetDate = new Date("2026-06-20T00:00:00Z").getTime();

    const calculateTime = () => {
      const now = Date.now();
      const diff = targetDate - now;
      if (diff <= 0) {
        setTimeLeft({ days: "00", hours: "00", minutes: "00", seconds: "00" });
        return;
      }
      setTimeLeft({
        days:    Math.floor(diff / 86400000).toString().padStart(2, "0"),
        hours:   Math.floor((diff % 86400000) / 3600000).toString().padStart(2, "0"),
        minutes: Math.floor((diff % 3600000) / 60000).toString().padStart(2, "0"),
        seconds: Math.floor((diff % 60000) / 1000).toString().padStart(2, "0"),
      });
    };

    calculateTime();
    const interval = setInterval(calculateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, y: 14 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ type: "spring", stiffness: 80, damping: 20, delay: 0.5 }}
      className="flex flex-col items-center gap-3 mt-10 mb-8 relative z-40"
    >
      <span className="font-mono text-[9px] tracking-[0.38em] text-slate-600 uppercase select-none">
        REGISTRATION GATE CLOSING IN
      </span>

      {/* Tube row */}
      <div className="flex items-center gap-2 sm:gap-3">
        <NixieTube value={mounted ? timeLeft.days    : "28"} label="DAYS"    />
        <Separator />
        <NixieTube value={mounted ? timeLeft.hours   : "14"} label="HRS"     />
        <Separator />
        <NixieTube value={mounted ? timeLeft.minutes : "06"} label="MIN"     />
        <Separator />
        <NixieTube value={mounted ? timeLeft.seconds : "00"} label="SEC"     />
      </div>
    </motion.div>
  );
}

// ── Individual Nixie tube ────────────────────
function NixieTube({ value, label }: { value: string; label: string }) {
  return (
    <div className="flex flex-col items-center gap-2">
      {/* Glass capsule */}
      <div
        className="relative flex items-center justify-center select-none"
        style={{
          width: "clamp(44px, 8vw, 72px)",
          height: "clamp(64px, 11vw, 96px)",
          borderRadius: 10,
          background: "linear-gradient(160deg, rgba(249,115,22,0.04) 0%, rgba(5,5,12,0.85) 100%)",
          border: "1px solid rgba(249,115,22,0.18)",
          boxShadow: "inset 0 0 18px rgba(249,115,22,0.04), 0 0 12px rgba(249,115,22,0.04)",
        }}
      >
        {/* Inner scan-line overlay */}
        <div
          className="absolute inset-0 pointer-events-none rounded-[9px]"
          style={{
            backgroundImage: "linear-gradient(rgba(255,255,255,0) 50%, rgba(0,0,0,0.12) 50%)",
            backgroundSize: "100% 4px",
            opacity: 0.35,
          }}
        />

        {/* Digit — animates on change */}
        <AnimatePresence mode="wait">
          <motion.span
            key={value}
            initial={{ opacity: 0, y: -4 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 4 }}
            transition={{ duration: 0.15, ease: "easeInOut" }}
            className="font-mono font-bold tabular-nums relative z-10"
            style={{
              fontSize: "clamp(1.4rem, 4.5vw, 2.8rem)",
              color: "hsl(32,95%,62%)",
              textShadow: "0 0 10px hsla(32,95%,62%,0.65), 0 0 24px hsla(32,95%,62%,0.20)",
              letterSpacing: "-0.02em",
            }}
          >
            {value}
          </motion.span>
        </AnimatePresence>

        {/* Bottom filament glow */}
        <div
          className="absolute bottom-1.5 w-1/3 h-[2px] rounded-full pointer-events-none"
          style={{ background: "hsla(32,95%,62%,0.5)", filter: "blur(2px)" }}
        />
      </div>

      {/* Label */}
      <span className="font-mono text-[8px] tracking-[0.25em] text-slate-600 uppercase select-none">
        {label}
      </span>
    </div>
  );
}

// ── Pulsing colon separator ─────────────────
function Separator() {
  return (
    <motion.span
      className="font-mono font-bold text-brand-amber/25 select-none"
      style={{ fontSize: "clamp(1.2rem, 3vw, 2rem)", marginBottom: "1.2rem" }}
      animate={{ opacity: [0.25, 0.65, 0.25] }}
      transition={{ duration: 1.2, repeat: Infinity, ease: "easeInOut" }}
    >
      :
    </motion.span>
  );
}
