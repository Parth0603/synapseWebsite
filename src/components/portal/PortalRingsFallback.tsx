"use client";

import React from "react";
import { motion, useTransform, MotionValue } from "framer-motion";

interface PortalRingsFallbackProps {
  progress: MotionValue<number>;
  isReducedMotion?: boolean;
}

// Crisp decagon (10-sided polygon) points centered at (50, 50) with radius 48
const DECAGON_POINTS = "50,2 78.2,11.2 95.6,36.8 95.6,68.2 78.2,93.8 50,103 21.8,93.8 4.4,68.2 4.4,36.8 21.8,11.2";

// Dedicated child component to ensure hooks (useTransform) run unconditionally and at the top level
const FallbackRing = ({
  index,
  progress,
  isReducedMotion
}: {
  index: number;
  progress: MotionValue<number>;
  isReducedMotion: boolean;
}) => {
  // Unique scroll mapping offset for each ring
  // Rings emerge sequentially, expand past the screen boundaries, and fade out
  const delay = index * 0.15;
  const startScroll = 0.2 + delay;
  const endScroll = Math.min(startScroll + 0.35, 1.0);

  // Translate Z-axis scaling - run hooks unconditionally at top level
  const scale = useTransform(
    progress,
    [0, startScroll, endScroll, 1.0],
    isReducedMotion 
      ? [1.0, 1.0, 1.0, 1.0] // Static scale if reduced motion is requested
      : [0.35, 0.6, 2.5, 3.5]
  );

  // Opacity profile: fades in, remains bright, fades out when expanding past boundaries
  const opacity = useTransform(
    progress,
    [0, startScroll - 0.05, startScroll + 0.1, endScroll - 0.05, endScroll],
    isReducedMotion
      ? [0.1, 0.2, 0.8, 0.8, 0.1] // Simplified opacity transitions for reduced motion
      : [0, 0.15, 0.6, 0.45, 0]
  );

  // Border color interpolation: Violet down towards Amber glow
  const strokeColor = useTransform(
    progress,
    [0.2, 0.6, 1.0],
    ["#8b5cf6", "#a78bfa", "#f97316"] // Violet -> Violet Amber -> Amber handoff
  );

  return (
    <motion.div
      className="absolute w-full h-full flex items-center justify-center"
      style={{
        scale,
        opacity,
        willChange: "transform, opacity"
      }}
    >
      <svg
        viewBox="0 0 105 105"
        className="w-full h-full filter drop-shadow-[0_0_8px_rgba(139,92,246,0.35)]"
      >
        {/* Thin technical blueprint guide outline */}
        <polygon
          points={DECAGON_POINTS}
          fill="none"
          stroke="#7c3aed"
          strokeWidth="0.15"
          strokeDasharray="2, 2"
          opacity="0.25"
        />
        
        {/* Master Decagonal glowing vector outline */}
        <motion.polygon
          points={DECAGON_POINTS}
          fill="none"
          stroke={strokeColor}
          strokeWidth="0.8"
          vectorEffect="non-scaling-stroke"
        />

        {/* Micro tech indicators on vertices */}
        <circle cx="50" cy="2" r="0.8" fill="#f97316" opacity="0.6" />
        <circle cx="50" cy="103" r="0.8" fill="#f97316" opacity="0.6" />
      </svg>
    </motion.div>
  );
};

export default function PortalRingsFallback({
  progress,
  isReducedMotion = false
}: PortalRingsFallbackProps) {
  
  // Concentric ring levels
  const ringIndexes = [0, 1, 2, 3, 4];

  return (
    <div className="absolute inset-0 w-full h-full flex items-center justify-center bg-obsidian-950 overflow-hidden z-20 pointer-events-none select-none">
      {/* Background radial spotlight grid */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(124,58,237,0.1)_0%,rgba(0,0,0,0)_60%)]" />

      {/* Grid Blueprint Guidelines for Tech aesthetics */}
      <div className="absolute inset-0 flex items-center justify-center opacity-10">
        <div className="absolute w-[2px] h-full bg-brand-violet/40 border-dashed" />
        <div className="absolute h-[2px] w-full bg-brand-violet/40 border-dashed" />
        <div className="absolute w-[70vw] h-[70vw] rounded-full border border-dashed border-brand-violet/30" />
      </div>

      {/* Renders concentric rings that scale outward safely */}
      <div className="relative w-[300px] h-[300px] md:w-[450px] md:h-[450px] flex items-center justify-center">
        {ringIndexes.map((index) => (
          <FallbackRing
            key={index}
            index={index}
            progress={progress}
            isReducedMotion={isReducedMotion}
          />
        ))}
      </div>

      {/* Atmospheric depth spotlights */}
      <div className="absolute top-0 inset-x-0 h-1/3 bg-gradient-to-b from-brand-violet/5 to-transparent" />
      <div className="absolute bottom-0 inset-x-0 h-1/3 bg-gradient-to-t from-brand-amber/5 to-transparent" />
    </div>
  );
}
