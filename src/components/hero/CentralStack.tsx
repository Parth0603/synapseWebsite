"use client";

import React from "react";
import { motion } from "framer-motion";
import { TRANSITION_SYNAPTIC } from "@/utils/motion";

export function CentralStack() {
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 15 },
    visible: {
      opacity: 1,
      y: 0,
      transition: TRANSITION_SYNAPTIC,
    },
  };

  const tagVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        type: "spring" as const,
        stiffness: 100,
        damping: 20,
        delay: 0.15,
      },
    },
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="flex flex-col items-center text-center max-w-[800px] mx-auto z-40 relative px-4"
    >
      {/* Cinematic Cyber status tag */}
      <motion.div
        variants={tagVariants}
        className="mb-6 inline-flex items-center gap-2.5 px-3 py-1.5 rounded-full bg-obsidian-900/80 border border-brand-violet/20 hover:border-brand-violet/40 transition-colors duration-300 backdrop-blur-md cursor-default text-[10px] font-mono tracking-[0.25em] text-brand-violet"
      >
        <span className="relative flex h-2 w-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-violet opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-violet"></span>
        </span>
        SYS_STATUS: ACTIVE // CONNECTION_SECURE
      </motion.div>

      {/* Hero Central Headline */}
      <motion.h1
        variants={itemVariants}
        className="text-5xl sm:text-7xl md:text-8xl lg:text-[7.5rem] font-heading font-extrabold tracking-[-0.04em] leading-[0.9] text-white"
      >
        SYNAPSE
        <span className="block mt-2 text-transparent bg-clip-text bg-gradient-to-r from-brand-violet to-brand-amber filter drop-shadow-[0_0_30px_hsla(271,91%,65%,0.15)]">
          1.0
        </span>
      </motion.h1>

      {/* Symmetrical Tech Grid Line Accent */}
      <motion.div 
        variants={itemVariants}
        className="w-24 h-[1px] my-8 bg-gradient-to-r from-transparent via-white/20 to-transparent relative"
      >
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-1 h-1 rounded-full bg-white/40" />
      </motion.div>

      {/* Cinematic High-Readability description */}
      <motion.p
        variants={itemVariants}
        className="text-slate-300 text-sm sm:text-base md:text-lg font-body max-w-xl mx-auto leading-relaxed select-text antialiased font-normal opacity-90"
      >
        Where neural computation collides with consensus networks. 
        Join the elite decentralized sprint defining the next evolutionary epoch 
        of decentralized intelligence.
      </motion.p>
    </motion.div>
  );
}
