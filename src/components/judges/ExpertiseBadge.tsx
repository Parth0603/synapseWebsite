"use client";
import React from "react";

interface ExpertiseBadgeProps {
  text: string;
  themeColor?: "gold" | "violet" | "teal";
}

export default function ExpertiseBadge({ text, themeColor = "violet" }: ExpertiseBadgeProps) {
  const styles = {
    gold: "border-brand-amber/20 bg-brand-amber/5 text-brand-amber",
    violet: "border-brand-violet/20 bg-brand-violet/5 text-brand-violet",
    teal: "border-teal-500/20 bg-teal-500/5 text-teal-400"
  }[themeColor];

  return (
    <span className={`font-mono text-[9px] font-bold tracking-wider px-2.5 py-1 rounded border uppercase select-none ${styles}`}>
      {text}
    </span>
  );
}
