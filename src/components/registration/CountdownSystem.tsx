"use client";
import React, { useState, useEffect } from "react";

interface TimeLeft {
  days: string;
  hours: string;
  minutes: string;
  seconds: string;
  isExpired: boolean;
}

export default function CountdownSystem() {
  const targetDate = "2026-09-12T08:00:00+05:30"; // SYNAPSE 1.0 Launch time

  const calculateTimeLeft = (): TimeLeft => {
    const difference = +new Date(targetDate) - +new Date();
    
    if (difference <= 0) {
      return { days: "00", hours: "00", minutes: "00", seconds: "00", isExpired: true };
    }

    const d = Math.floor(difference / (1000 * 60 * 60 * 24));
    const h = Math.floor((difference / (1000 * 60 * 60)) % 24);
    const m = Math.floor((difference / 1000 / 60) % 60);
    const s = Math.floor((difference / 1000) % 60);

    return {
      days: String(d).padStart(2, "0"),
      hours: String(h).padStart(2, "0"),
      minutes: String(m).padStart(2, "0"),
      seconds: String(s).padStart(2, "0"),
      isExpired: false
    };
  };

  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    days: "00",
    hours: "00",
    minutes: "00",
    seconds: "00",
    isExpired: false
  });

  // Hydration safety: calculate time left on mount
  useEffect(() => {
    setTimeLeft(calculateTimeLeft());

    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const timeSegments = [
    { label: "DAYS.val", value: timeLeft.days, id: "days" },
    { label: "HOURS.sys", value: timeLeft.hours, id: "hours" },
    { label: "MINS.run", value: timeLeft.minutes, id: "minutes" },
    { label: "SECS.clk", value: timeLeft.seconds, id: "seconds", highlight: true }
  ];

  return (
    <div className="w-full max-w-xl mx-auto mb-10 select-none">
      {/* Telemetry Header */}
      <div className="flex items-center justify-between mb-4 border-b border-white/5 pb-2">
        <div className="flex items-center gap-1.5">
          <span className="w-1.5 h-1.5 bg-brand-amber rounded-full animate-ping" />
          <span className="font-mono text-[9px] text-obsidian-400 uppercase tracking-widest">
            SYNAPSE_COHORT_LAUNCH_T-MINUS
          </span>
        </div>
        <span className="font-mono text-[9px] text-obsidian-500">
          [ ZONE: IST_GMT+5:30 ]
        </span>
      </div>

      {/* Retro-Tech Timer Grid or Expired Message */}
      {timeLeft.isExpired ? (
        <div
          className="font-mono text-center font-bold tracking-wider px-6 py-8 rounded border border-brand-amber/30 bg-brand-amber/5 shadow-[0_0_20px_rgba(249,115,22,0.1)]"
          style={{
            color: "hsl(32,95%,62%)",
            textShadow: "0 0 10px hsla(32,95%,62%,0.5)",
            fontSize: "clamp(1.1rem, 3.5vw, 1.8rem)",
          }}
        >
          SYNAPSE 1.0 HAS BEGUN 🚀
        </div>
      ) : (
        <div className="grid grid-cols-4 gap-3 md:gap-4">
          {timeSegments.map((segment) => (
            <div
              key={segment.id}
              className="relative bg-obsidian-950/60 border border-white/5 rounded p-3 md:p-4 flex flex-col items-center justify-center overflow-hidden group"
            >
              {/* Visual corner indicators */}
              <div className="absolute top-1 left-1 w-1 h-1 border-t border-l border-white/10" />
              <div className="absolute top-1 right-1 w-1 h-1 border-t border-r border-white/10" />
              <div className="absolute bottom-1 left-1 w-1 h-1 border-b border-l border-white/10" />
              <div className="absolute bottom-1 right-1 w-1 h-1 border-b border-r border-white/10" />

              {/* Glowing vertical alignment vector (subtle) */}
              <div className="absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              {/* MONOSPACE DATA DISPLAY */}
              <span
                className={`font-mono text-3xl md:text-4xl lg:text-5xl font-black tracking-tight ${
                  segment.highlight && !timeLeft.isExpired
                    ? "text-brand-amber shadow-glow-sm"
                    : "text-white"
                }`}
              >
                {segment.value}
              </span>

              {/* Grid label */}
              <span className="font-mono text-[8px] text-obsidian-450 uppercase tracking-wider mt-1.5 block">
                {segment.label}
              </span>
            </div>
          ))}
        </div>
      )}

      {/* Dynamic Status Bar */}
      <div className="mt-3 flex items-center justify-between font-mono text-[8px] text-obsidian-500">
        <span>[ STATS: RUNNING_NOMINAL ]</span>
        <span>
          {timeLeft.isExpired
            ? "[ STATUS: PROTOCOL_ACTIVE ]"
            : "[ REGISTRATION_DEVICES: CONNECTED ]"}
        </span>
      </div>
    </div>
  );
}
