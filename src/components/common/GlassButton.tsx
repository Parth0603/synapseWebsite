"use client";

import React from "react";
import { motion, HTMLMotionProps } from "framer-motion";
import { cn } from "@/utils/cn";

interface GlassButtonProps extends HTMLMotionProps<"button"> {
  variant?: "primary" | "secondary" | "tertiary";
  glowColor?: "violet" | "amber" | "none";
  showSheen?: boolean;
  children?: React.ReactNode;
}

export function GlassButton({
  variant = "secondary",
  glowColor = "none",
  showSheen = true,
  className = "",
  children,
  ...props
}: GlassButtonProps) {
  const baseStyles =
    "relative inline-flex items-center justify-center px-6 py-3 rounded-btn font-heading text-xs font-semibold uppercase tracking-[0.15em] select-none overflow-hidden transition-all duration-300 active:scale-[0.98] outline-none focus:ring-1 focus:ring-brand-violet/50 focus:border-brand-violet/50";

  const variants = {
    primary:
      "bg-white text-obsidian-950 hover:bg-slate-100 hover:shadow-[0_0_20px_rgba(255,255,255,0.15)] border border-white",
    secondary:
      "bg-obsidian-900/60 backdrop-blur-md text-slate-200 hover:text-white border border-white/10 hover:border-white/20 hover:bg-obsidian-800/80",
    tertiary:
      "bg-transparent text-slate-400 hover:text-white hover:bg-white/5 border border-transparent",
  };

  const glows = {
    violet: "shadow-[0_0_25px_hsla(271,91%,65%,0.2)] border-brand-violet/40 hover:border-brand-violet/70",
    amber: "shadow-[0_0_25px_hsla(24,95%,53%,0.15)] border-brand-amber/40 hover:border-brand-amber/70",
    none: "",
  };

  return (
    <motion.button
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className={cn(
        baseStyles,
        variants[variant],
        glowColor !== "none" && glows[glowColor],
        className
      )}
      {...props}
    >
      {/* Dynamic Hover Sheen */}
      {showSheen && variant !== "tertiary" && (
        <span className="absolute inset-0 w-full h-full pointer-events-none overflow-hidden block">
          <span 
            className="absolute top-0 left-[-100%] w-[50%] h-full bg-gradient-to-r from-transparent via-white/10 to-transparent skew-x-[-25deg] transition-all duration-1000 group-hover:left-[150%]"
            style={{
              animation: "sheen-sweep 3s ease-in-out infinite",
            }}
          />
        </span>
      )}
      
      {/* Dynamic Glow Spotlight (Under-light element) */}
      {glowColor !== "none" && (
        <span 
          className={cn(
            "absolute -inset-1 blur-md opacity-20 group-hover:opacity-40 transition-opacity duration-500 rounded-btn pointer-events-none",
            glowColor === "violet" ? "bg-brand-violet" : "bg-brand-amber"
          )}
        />
      )}

      {/* Button Content */}
      <span className="relative z-10 flex items-center gap-2">
        {children}
      </span>
      
      <style jsx global>{`
        @keyframes sheen-sweep {
          0% {
            left: -100%;
          }
          30% {
            left: 150%;
          }
          100% {
            left: 150%;
          }
        }
      `}</style>
    </motion.button>
  );
}
