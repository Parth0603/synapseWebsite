"use client";

import React from "react";
import { motion } from "framer-motion";

// Stagger container — orchestrates the cinematic reveal sequence
const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.1,
    },
  },
};

// Each element rises from below on a physics-spring curve
const itemVariants = {
  hidden: { opacity: 0, y: 22 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring" as const,
      stiffness: 80,
      damping: 22,
    },
  },
};

// Status badge pops in before the headline
const badgeVariants = {
  hidden: { opacity: 0, scale: 0.92, y: -4 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      type: "spring" as const,
      stiffness: 120,
      damping: 18,
      delay: 0.05,
    },
  },
};

export function CentralStack() {
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="flex flex-col items-center text-center max-w-[840px] mx-auto relative px-4"
      style={{ zIndex: 40 }}
    >
      {/* ── Status badge ── */}
      <motion.div
        variants={badgeVariants}
        className="mb-8 inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full border border-brand-violet/25 bg-brand-violet/[0.05] backdrop-blur-sm hover:border-brand-violet/45 transition-colors duration-400 cursor-default select-none"
      >
        {/* Pulsing live indicator */}
        <span className="relative flex h-[7px] w-[7px]">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-violet opacity-60" />
          <span className="relative inline-flex rounded-full h-[7px] w-[7px] bg-brand-violet" />
        </span>
        <span className="font-mono text-[9px] tracking-[0.28em] text-brand-violet font-medium">
          HYBRID INNOVATION SUMMIT // JUNE 12-13
        </span>
      </motion.div>

      {/* ── Primary wordmark headline ── */}
      <motion.div variants={itemVariants} className="relative">
        {/* Ambient title glow — rendered behind the text */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: "radial-gradient(ellipse at 50% 60%, hsla(271,91%,65%,0.12) 0%, transparent 70%)",
            filter: "blur(30px)",
            transform: "scaleY(1.4)",
          }}
          aria-hidden="true"
        />

        <h1
          className="relative font-heading font-extrabold tracking-[-0.045em] leading-[0.88] text-white"
          style={{
            fontSize: "clamp(3.5rem, 12vw, 8.5rem)",
            textShadow: "0 0 80px hsla(271,91%,65%,0.08)",
          }}
        >
          SYNAPSE
          <span
            className="block mt-1"
            style={{
              background: "linear-gradient(135deg, hsl(271,91%,72%) 0%, hsl(271,80%,62%) 45%, hsl(32,95%,62%) 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
              filter: "drop-shadow(0 0 28px hsla(271,91%,65%,0.20))",
            }}
          >
            1.0
          </span>
        </h1>
      </motion.div>

      {/* ── Cinematic divider ── */}
      <motion.div
        variants={itemVariants}
        className="flex items-center gap-4 my-8"
      >
        {/* Left arm */}
        <div className="w-16 md:w-24 h-[1px] bg-gradient-to-r from-transparent to-white/15" />
        {/* Center diamond */}
        <div
          className="w-1.5 h-1.5 rotate-45 bg-brand-violet/60"
          style={{ boxShadow: "0 0 8px hsla(271,91%,65%,0.5)" }}
        />
        {/* Right arm */}
        <div className="w-16 md:w-24 h-[1px] bg-gradient-to-l from-transparent to-white/15" />
      </motion.div>

      {/* ── Descriptor copy ── */}
      <motion.p
        variants={itemVariants}
        className="text-slate-400 text-sm sm:text-base md:text-lg font-body max-w-[520px] mx-auto leading-[1.75] antialiased font-light tracking-[0.01em]"
      >
        Where advanced AI models, decentralized systems, automation, and emerging architectures converge.{" "}
        <span className="text-slate-300">Join elite engineers, Web3 builders, and founders</span>{" "}
        to co-develop production-ready protocols.
      </motion.p>

      {/* ── Mono technical detail line ── */}
      <motion.div
        variants={itemVariants}
        className="mt-6 flex items-center gap-3"
      >
        <span className="w-5 h-[1px] bg-white/10" />
        <span className="font-mono text-[9px] tracking-[0.30em] text-slate-600 uppercase select-none">
          AGENTIC SYSTEMS × DECENTRALIZED COMPUTE × PRODUCTION RUNWAY
        </span>
        <span className="w-5 h-[1px] bg-white/10" />
      </motion.div>
    </motion.div>
  );
}
