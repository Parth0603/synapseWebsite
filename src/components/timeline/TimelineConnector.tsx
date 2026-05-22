"use client";
import React from "react";

export default function TimelineConnector() {
  return (
    <div className="absolute top-16 bottom-16 left-[24px] md:left-1/2 -translate-x-1/2 w-[2px] pointer-events-none z-10">
      {/* 
        Background passive track. 
        Thin laser wire reflecting inactive/future structural connection pipelines.
      */}
      <div className="w-full h-full bg-white/[0.04] absolute inset-0" />

      {/* 
        Active network track trace.
        Represents the historical data path synchronized up to current milestones.
        Using a premium amber-to-violet linear gradient mapping online-to-offline progress.
      */}
      <div 
        className="w-full h-2/3 absolute top-0 left-0 bg-gradient-to-b from-emerald-500 via-brand-violet to-brand-amber/40 shadow-[0_0_15px_rgba(139,92,246,0.3)]"
      />

      {/* Decorative pulse glow representing the data flow current frontier */}
      <div 
        className="absolute top-2/3 -translate-y-1/2 left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-brand-violet/20 border border-brand-violet/40 animate-ping"
      />
    </div>
  );
}
