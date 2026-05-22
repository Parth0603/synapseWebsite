"use client";
import React from "react";
import { motion } from "framer-motion";
import RewardGrid from "./RewardGrid";
import { Prize } from "./PrizeCard";

export default function PrizeSection() {
  // Custom High-Fidelity SVG Emblems for ranks
  const firstPrizeIcon = (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-6 h-6 animate-spin-slow">
      {/* Intricate decagonal / star polygon tech vector */}
      <path d="M12 2L15 8L21 9L16.5 13.5L18 19.5L12 16.5L6 19.5L7.5 13.5L3 9L9 8L12 2Z" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="1" />
      <path d="M12 5V7M12 17V19M5 12H7M17 12H19" strokeLinecap="round" />
    </svg>
  );

  const secondPrizeIcon = (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-6 h-6">
      {/* Premium neural web / overlapping concentric nodes vector */}
      <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M12 18C15.3137 18 18 15.3137 18 12C18 8.68629 15.3137 6 12 6C8.68629 6 6 8.68629 6 12C6 15.3137 8.68629 18 12 18Z" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M12 14C13.1046 14 14 13.1046 14 12C14 10.8954 13.1046 10 12 10C10.8954 10 10 10.8954 10 12C10 13.1046 10.8954 14 12 14Z" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M12 2V6M12 18V22M2 12H6M18 12H22" strokeLinecap="round" />
    </svg>
  );

  const thirdPrizeIcon = (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-6 h-6">
      {/* Precision coordinate tracking/telemetry square node vector */}
      <rect x="4" y="4" width="16" height="16" rx="2" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx="12" cy="12" r="4" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M12 8V16M8 12H16" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M4 12H2M22 12H20M12 4V2M12 22V20" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );

  const prizes: Prize[] = [
    {
      id: "prize-1st",
      title: "1st Place",
      cashAmount: "₹50,000",
      creditsAmount: "₹30,000",
      nodeId: "REWARD.0x01_CHAMPION",
      description: "Allocated to the supreme architectural team demonstrating absolute mastery across artificial intelligence and decentralized ledger orchestration.",
      perks: [
        "Champion's Physical Trophy",
        "Direct VC Pipeline Fast-Track",
        "Premium Synapse Merch Gear",
        "Lifetime Premium Community Access"
      ],
      themeColor: "gold",
      icon: firstPrizeIcon
    },
    {
      id: "prize-2nd",
      title: "2nd Place",
      cashAmount: "₹35,000",
      creditsAmount: "₹20,000",
      nodeId: "REWARD.0x02_RUNNER_UP",
      description: "Presented to the vanguard developer squad presenting outstanding algorithmic scalability, secure protocols, and fluid interactive architectures.",
      perks: [
        "Official Runner-Up Plaque",
        "Incubation Syndicate Review",
        "Synapse Core Gear Kit",
        "Exclusive Mentor Office Hours"
      ],
      themeColor: "violet",
      icon: secondPrizeIcon
    },
    {
      id: "prize-3rd",
      title: "3rd Place",
      cashAmount: "₹20,000",
      creditsAmount: "₹15,000",
      nodeId: "REWARD.0x03_CONTENDER",
      description: "Awarded to the high-innovation builders pushing conceptual boundaries through raw creativity, utility-driven code, and rapid execution.",
      perks: [
        "Contender's Merit Badge",
        "Product Design Audit",
        "Synapse Developer Pack",
        "Technical Advisory Channels"
      ],
      themeColor: "teal",
      icon: thirdPrizeIcon
    }
  ];

  return (
    <section id="prizes-section" className="relative w-full py-24 md:py-32 bg-[#030305] border-t border-white/[0.04] overflow-hidden select-none">
      {/* 
        Layer 10: Performance-optimized background assets.
        Hardware-accelerated CSS Grid Overlay & Subtle Ambient Underglow.
      */}
      <div 
        className="absolute inset-0 opacity-[0.03] pointer-events-none" 
        style={{
          backgroundImage: `
            radial-gradient(circle at 1px 1px, white 1px, transparent 0),
            linear-gradient(to right, rgba(255, 255, 255, 0.05) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(255, 255, 255, 0.05) 1px, transparent 1px)
          `,
          backgroundSize: "24px 24px, 48px 48px, 48px 48px",
          backgroundPosition: "center center"
        }}
      />
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-brand-violet/5 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-10 left-1/4 w-[500px] h-[250px] bg-brand-amber/5 blur-[100px] rounded-full pointer-events-none" />

      {/* Decorative Outer Framing / Laser Lines */}
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-20">
        {/* Header Telemetry Stack */}
        <div className="flex flex-col items-center text-center mb-16 md:mb-24">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="flex items-center gap-2 mb-3"
          >
            <span className="w-1.5 h-1.5 bg-brand-amber rounded-full animate-pulse" />
            <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-brand-amber font-semibold">
              [ DECENTRALIZED_INCENTIVES ]
            </span>
            <span className="w-1.5 h-1.5 bg-brand-amber rounded-full animate-pulse" />
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 0.05 }}
            className="text-4xl md:text-5xl lg:text-6xl font-black font-display tracking-tight text-white mb-6 uppercase"
          >
            PRIZE ECOSYSTEM
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, scaleX: 0 }}
            whileInView={{ opacity: 1, scaleX: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
            className="w-24 h-[1px] bg-gradient-to-r from-transparent via-brand-amber/50 to-transparent mb-6"
          />

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: 0.15 }}
            className="max-w-2xl text-xs md:text-sm font-mono text-obsidian-400 tracking-wide leading-relaxed"
          >
            THE STAKES OF CREATION. SYNAPSE 1.0 UNLOCKS AN ELITE HIGH-VALUATION CAPITAL AND CLOUD MATRIX DESIGNED TO SCALE AND ACCELERATE THE HIGHEST-YIELD CONCEPTS INTO THE ECOSYSTEM.
          </motion.p>
        </div>

        {/* 3-Column Prize Grid */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="mb-20 md:mb-28"
        >
          <RewardGrid prizes={prizes} />
        </motion.div>

        {/* 
          High-Conversion Bottom Registration CTA Block
          Direct, premium conversion vehicle that integrates smoothly into the flow.
        */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="relative w-full max-w-4xl mx-auto rounded-lg border border-white/5 bg-obsidian-950 p-8 md:p-12 overflow-hidden shadow-[0_0_50px_rgba(0,0,0,0.5)] group"
        >
          {/* Internal Blueprint Border Grid */}
          <div className="absolute inset-0 bg-gradient-to-r from-brand-violet/5 via-transparent to-brand-amber/5 opacity-40 pointer-events-none" />
          <div className="absolute top-0 left-0 w-8 h-8 border-t border-l border-white/10" />
          <div className="absolute top-0 right-0 w-8 h-8 border-t border-r border-white/10" />
          <div className="absolute bottom-0 left-0 w-8 h-8 border-b border-l border-white/10" />
          <div className="absolute bottom-0 right-0 w-8 h-8 border-b border-r border-white/10" />

          {/* Dotted Accent lines */}
          <div className="absolute top-4 left-4 right-4 h-[1px] bg-white/[0.02] border-dashed pointer-events-none" />
          <div className="absolute bottom-4 left-4 right-4 h-[1px] bg-white/[0.02] border-dashed pointer-events-none" />

          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8 md:gap-12">
            <div className="text-center md:text-left flex-1">
              <div className="flex items-center justify-center md:justify-start gap-3 mb-4 select-none">
                <span className="font-mono text-[9px] px-2 py-0.5 rounded border border-emerald-500/20 bg-emerald-500/5 text-emerald-400 font-bold uppercase tracking-wider">
                  REGISTRATION_ACTIVE
                </span>
                <span className="font-mono text-[9px] text-obsidian-500 tracking-wider">
                  [ SLOTS_LIMITED ]
                </span>
              </div>
              <h3 className="text-2xl md:text-3xl font-black font-display text-white tracking-tight mb-3 uppercase">
                CLAIM YOUR STAKE NOW
              </h3>
              <p className="text-xs md:text-sm font-mono text-obsidian-400 max-w-lg leading-relaxed">
                Step into the portal, assemble your syndicate, and lock in your chance to capture part of the premium ₹1,00,000+ prize and infrastructure runway pool.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-stretch gap-4 w-full md:w-auto min-w-[280px]">
              <motion.a
                href="#register"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="flex-1 sm:flex-none text-center px-8 py-3.5 rounded font-mono text-xs font-black tracking-widest text-black bg-brand-amber hover:bg-brand-amber-light transition-colors shadow-[0_0_25px_rgba(249,115,22,0.15)] uppercase select-none"
              >
                INITIALIZE_REGISTRATION
              </motion.a>
              <motion.a
                href="#portal"
                whileHover={{ scale: 1.02, backgroundColor: "rgba(255,255,255,0.03)" }}
                whileTap={{ scale: 0.98 }}
                className="flex-1 sm:flex-none text-center px-8 py-3.5 rounded font-mono text-xs font-bold tracking-widest text-white border border-white/10 hover:border-white/20 transition-all uppercase select-none"
              >
                ENTER_PORTAL
              </motion.a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
