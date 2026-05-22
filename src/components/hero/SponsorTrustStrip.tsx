"use client";

import React from "react";
import { motion } from "framer-motion";
import { Marquee } from "@/components/common/Marquee";

interface Sponsor {
  name: string;
  logo: React.ReactNode;
}

export function SponsorTrustStrip() {
  const sponsors: Sponsor[] = [
    {
      name: "NEURAL_LINK",
      logo: (
        <svg className="w-5 h-5 mr-2 text-brand-violet" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" stroke="currentColor" strokeWidth="1.5" fill="none" />
        </svg>
      ),
    },
    {
      name: "CONSENSUS_LABS",
      logo: (
        <svg className="w-5 h-5 mr-2 text-brand-amber" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <rect x="3" y="3" width="7" height="7" rx="1" stroke="currentColor" strokeWidth="1.5" fill="none" />
          <rect x="14" y="3" width="7" height="7" rx="1" stroke="currentColor" strokeWidth="1.5" fill="none" />
          <rect x="14" y="14" width="7" height="7" rx="1" stroke="currentColor" strokeWidth="1.5" fill="none" />
          <rect x="3" y="14" width="7" height="7" rx="1" stroke="currentColor" strokeWidth="1.5" fill="none" />
        </svg>
      ),
    },
    {
      name: "NVIDIA_INCEPTION",
      logo: (
        <svg className="w-5 h-5 mr-2 text-brand-violet" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="1.5" fill="none" />
          <path d="M12 6a6 6 0 016 6m-6-3a3 3 0 013 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        </svg>
      ),
    },
    {
      name: "SOLANA_FLOW",
      logo: (
        <svg className="w-5 h-5 mr-2 text-brand-amber" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path d="M4 6h16M4 12h16M4 18h16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        </svg>
      ),
    },
    {
      name: "CHAINLINK_NET",
      logo: (
        <svg className="w-5 h-5 mr-2 text-brand-violet" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 2l8 4.5v9L12 20l-8-4.5v-9L12 2z" stroke="currentColor" strokeWidth="1.5" fill="none" />
          <circle cx="12" cy="11" r="3" stroke="currentColor" strokeWidth="1.5" fill="none" />
        </svg>
      ),
    },
    {
      name: "ETHEREUM_CORE",
      logo: (
        <svg className="w-5 h-5 mr-2 text-brand-amber" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 2L4.5 12 12 16.5l7.5-4.5L12 2z" stroke="currentColor" strokeWidth="1.5" fill="none" />
          <path d="M12 16.5L4.5 12 12 22l7.5-10-7.5 4.5z" stroke="currentColor" strokeWidth="1.5" fill="none" />
        </svg>
      ),
    },
  ];

  const stripVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring" as const,
        stiffness: 80,
        damping: 18,
        delay: 0.85,
      },
    },
  };

  return (
    <motion.div
      variants={stripVariants}
      initial="hidden"
      animate="visible"
      className="w-full py-10 z-40 relative border-t border-white/[0.03] bg-obsidian-950/40 backdrop-blur-sm"
    >
      <div className="max-w-[1200px] mx-auto px-6">
        {/* Strip Category Header */}
        <div className="text-center mb-6">
          <span className="text-[9px] font-mono tracking-[0.3em] text-slate-500 uppercase">
            // PLATFORM_VAL_COHORTS //
          </span>
        </div>

        {/* Dynamic Continuous Marquee */}
        <Marquee speed={32} pauseOnHover={true}>
          {sponsors.map((sponsor, index) => (
            <div
              key={`${sponsor.name}-${index}`}
              className="flex items-center justify-center px-6 py-3 rounded-panel glass-panel border border-white/5 hover:border-white/15 bg-obsidian-900/40 backdrop-blur-md transition-all duration-300 group cursor-default select-none shadow-[0_4px_20px_rgba(0,0,0,0.3)] hover:shadow-[0_4px_30px_rgba(168,85,247,0.05)] hover:-translate-y-[2px]"
            >
              {/* Animated logo container */}
              <div className="opacity-40 group-hover:opacity-100 transition-all duration-300 scale-95 group-hover:scale-100 flex items-center">
                {sponsor.logo}
              </div>

              {/* Text Tag */}
              <span className="font-mono text-[10px] tracking-[0.2em] text-slate-400 group-hover:text-white transition-colors duration-300">
                {sponsor.name}
              </span>
            </div>
          ))}
        </Marquee>
      </div>
    </motion.div>
  );
}
