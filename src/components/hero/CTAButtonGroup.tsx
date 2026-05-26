"use client";

import React from "react";
import { motion } from "framer-motion";
import { MagneticWrapper } from "@/components/common/MagneticWrapper";

export function CTAButtonGroup() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 14 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ type: "spring", stiffness: 80, damping: 20, delay: 0.72 }}
      className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-5 relative z-40 px-4"
    >
      {/* ── PRIMARY: Access Terminal ── */}
      <MagneticWrapper range={50} strength={0.25}>
        <PrimaryButton
          onClick={() => {
            const el = document.getElementById("registration");
            if (el) el.scrollIntoView({ behavior: "smooth" });
          }}
          label="APPLY FOR ENTRY"
          icon={
            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
          }
        />
      </MagneticWrapper>

      {/* ── SECONDARY: View Specs ── */}
      <MagneticWrapper range={50} strength={0.25}>
        <SecondaryButton
          onClick={() => {
            const el = document.getElementById("tracks");
            if (el) el.scrollIntoView({ behavior: "smooth" });
          }}
          label="EXPLORE RUNWAY"
          icon={
            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
              />
            </svg>
          }
        />
      </MagneticWrapper>
    </motion.div>
  );
}

// ─────────────────────────────────────────────
// Primary CTA — solid violet, commanding
// ─────────────────────────────────────────────
function PrimaryButton({
  onClick,
  label,
  icon,
}: {
  onClick: () => void;
  label: string;
  icon: React.ReactNode;
}) {
  return (
    <motion.button
      onClick={onClick}
      whileHover={{ scale: 1.025 }}
      whileTap={{ scale: 0.975 }}
      transition={{ type: "spring", stiffness: 300, damping: 22 }}
      className="group relative flex items-center gap-2.5 overflow-hidden rounded-lg select-none focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-violet/60"
      style={{
        padding: "12px 28px",
        background: "linear-gradient(135deg, hsl(271,80%,50%) 0%, hsl(271,91%,40%) 100%)",
        boxShadow: "0 0 24px hsla(271,91%,65%,0.20), 0 1px 2px rgba(0,0,0,0.4)",
        minWidth: 180,
      }}
      aria-label={label}
    >
      {/* Hover gloss sheen */}
      <span
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
        style={{
          background: "linear-gradient(105deg, transparent 20%, rgba(255,255,255,0.08) 50%, transparent 80%)",
          transform: "skewX(-12deg)",
        }}
      />

      {/* Hover glow intensification */}
      <span
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none rounded-lg"
        style={{ boxShadow: "0 0 32px hsla(271,91%,65%,0.30)" }}
      />

      <span className="font-mono text-[10px] tracking-[0.28em] text-white font-semibold relative z-10">
        {label}
      </span>
      <span className="text-white/80 group-hover:translate-x-0.5 transition-transform duration-200 relative z-10">
        {icon}
      </span>
    </motion.button>
  );
}

// ─────────────────────────────────────────────
// Secondary CTA — ghost border, restraint
// ─────────────────────────────────────────────
function SecondaryButton({
  onClick,
  label,
  icon,
}: {
  onClick: () => void;
  label: string;
  icon: React.ReactNode;
}) {
  return (
    <motion.button
      onClick={onClick}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.975 }}
      transition={{ type: "spring", stiffness: 300, damping: 22 }}
      className="group relative flex items-center gap-2.5 overflow-hidden rounded-lg select-none focus:outline-none focus-visible:ring-2 focus-visible:ring-white/20"
      style={{
        padding: "11px 28px",
        background: "rgba(255,255,255,0.025)",
        border: "1px solid rgba(255,255,255,0.10)",
        backdropFilter: "blur(8px)",
        minWidth: 180,
      }}
      aria-label={label}
    >
      {/* Hover surface brightening */}
      <span
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
        style={{ background: "rgba(255,255,255,0.04)" }}
      />

      {/* Hover border brightening */}
      <span
        className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
        style={{ boxShadow: "inset 0 0 0 1px rgba(255,255,255,0.20)" }}
      />

      <span className="font-mono text-[10px] tracking-[0.28em] text-slate-300 group-hover:text-white transition-colors duration-300 font-medium relative z-10">
        {label}
      </span>
      <span className="text-slate-500 group-hover:text-slate-300 transition-colors duration-300 relative z-10">
        {icon}
      </span>
    </motion.button>
  );
}
