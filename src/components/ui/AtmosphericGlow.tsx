"use client";

import React from "react";
import { cn } from "@/utils/cn";

interface AtmosphericGlowProps {
  color: "violet" | "amber";
  className?: string;
  intensity?: "low" | "medium" | "high";
}

export function AtmosphericGlow({
  color,
  className = "",
  intensity = "medium",
}: AtmosphericGlowProps) {
  const intensityMap = {
    low: "opacity-30 scale-90",
    medium: "opacity-50 scale-100",
    high: "opacity-75 scale-110",
  };

  return (
    <div
      className={cn(
        "absolute pointer-events-none rounded-full blur-[140px] will-change-transform transition-transform duration-1000",
        color === "violet" ? "bg-brand-violet/10" : "bg-brand-amber/8",
        intensityMap[intensity],
        className
      )}
      aria-hidden="true"
    />
  );
}
