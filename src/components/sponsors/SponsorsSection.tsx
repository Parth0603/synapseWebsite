"use client";

import React from "react";
import { motion } from "framer-motion";
import SponsorGrid from "./SponsorGrid";
import { Sponsor } from "./SponsorCard";

// ============================================================================
// HIGH-FIDELITY CRISP INLINE SVG BRAND LOGO DATASET
// ============================================================================
const SPONSORS_DATASET: Sponsor[] = [
  // --------------------------------------------------------------------------
  // TIER 1: ALPHA CORE (PLATINUM SPONSORS)
  // --------------------------------------------------------------------------
  {
    id: "nvidia",
    name: "NVIDIA Inception",
    tier: "alpha",
    url: "https://www.nvidia.com",
    nodeId: "NODE.0x01",
    logo: (
      <svg viewBox="0 0 200 48" className="w-full h-full text-white fill-current" aria-hidden="true">
        {/* NVIDIA Spiral Eye Icon */}
        <path d="M12 24c0-6.63 5.37-12 12-12s12 5.37 12 12-5.37 12-12 12-12-5.37-12-12zm12-9c-4.97 0-9 4.03-9 9s4.03 9 9 9 9-4.03 9-9-4.03-9-9-9z" fill="#76b900" />
        <path d="M24 18c-3.31 0-6 2.69-6 6s2.69 6 6 6 6-2.69 6-6-2.69-6-6-6z" fill="#ffffff" />
        {/* Typographic Label */}
        <text x="48" y="31" fontFamily="monospace" fontSize="16" fontWeight="bold" letterSpacing="0.1em" fill="#ffffff">NVIDIA</text>
        <text x="114" y="31" fontFamily="monospace" fontSize="11" fontWeight="300" letterSpacing="0.05em" fill="#76b900">INCEPTION</text>
      </svg>
    )
  },
  {
    id: "chainlink",
    name: "Chainlink Labs",
    tier: "alpha",
    url: "https://chain.link",
    nodeId: "NODE.0x02",
    logo: (
      <svg viewBox="0 0 200 48" className="w-full h-full text-white fill-current" aria-hidden="true">
        {/* Chainlink Interlocking Hexagon */}
        <path d="M24 8l10.5 6v12L24 32l-10.5-6v-12z" fill="none" stroke="#375bd2" strokeWidth="2.5" />
        <path d="M24 14l5.2 3v6L24 26l-5.2-3v-6z" fill="#375bd2" />
        {/* Typographic Label */}
        <text x="48" y="31" fontFamily="monospace" fontSize="16" fontWeight="bold" letterSpacing="0.1em" fill="#ffffff">CHAINLINK</text>
      </svg>
    )
  },
  // --------------------------------------------------------------------------
  // TIER 2: CONSENSUS NODES (GOLD SPONSORS)
  // --------------------------------------------------------------------------
  {
    id: "openai",
    name: "OpenAI",
    tier: "consensus",
    url: "https://openai.com",
    nodeId: "NODE.0x0A",
    logo: (
      <svg viewBox="0 0 200 48" className="w-full h-full text-white fill-current" aria-hidden="true">
        {/* OpenAI Spiral */}
        <path d="M24 12c.5 0 .9.2 1.2.5l5.5 5.5c.7.7.7 1.8 0 2.5s-1.8.7-2.5 0l-3.3-3.3v13.6c0 1-.8 1.8-1.8 1.8s-1.8-.8-1.8-1.8V17.2l-3.3 3.3c-.7.7-1.8.7-2.5 0s-.7-1.8 0-2.5l5.5-5.5c.3-.3.7-.5 1.2-.5z" fill="#10a37f" />
        <circle cx="24" cy="24" r="9" fill="none" stroke="#10a37f" strokeWidth="1.5" />
        <text x="48" y="31" fontFamily="monospace" fontSize="15" fontWeight="bold" letterSpacing="0.08em" fill="#ffffff">OpenAI</text>
      </svg>
    )
  },
  {
    id: "arbitrum",
    name: "Arbitrum",
    tier: "consensus",
    url: "https://arbitrum.io",
    nodeId: "NODE.0x0B",
    logo: (
      <svg viewBox="0 0 200 48" className="w-full h-full text-white fill-current" aria-hidden="true">
        {/* Arbitrum Triangular Icon */}
        <path d="M24 8l14 24H10z" fill="none" stroke="#28a0f0" strokeWidth="2.5" />
        <path d="M24 16l8 14H16z" fill="#28a0f0" />
        <text x="48" y="31" fontFamily="monospace" fontSize="15" fontWeight="bold" letterSpacing="0.08em" fill="#ffffff">ARBITRUM</text>
      </svg>
    )
  },
  {
    id: "vercel",
    name: "Vercel",
    tier: "consensus",
    url: "https://vercel.com",
    nodeId: "NODE.0x0C",
    logo: (
      <svg viewBox="0 0 200 48" className="w-full h-full text-white fill-current" aria-hidden="true">
        {/* Vercel Geometric Triangle */}
        <path d="M24 10l12 20H12z" fill="#ffffff" />
        <text x="48" y="30" fontFamily="monospace" fontSize="15" fontWeight="bold" letterSpacing="0.1em" fill="#ffffff">VERCEL</text>
      </svg>
    )
  },
  // --------------------------------------------------------------------------
  // TIER 3: NETWORK PEERS (SILVER & COMMUNITY SPONSORS)
  // --------------------------------------------------------------------------
  {
    id: "solana",
    name: "Solana",
    tier: "peer",
    url: "https://solana.com",
    nodeId: "NODE.0x1F",
    logo: (
      <svg viewBox="0 0 200 48" className="w-full h-full text-white fill-current" aria-hidden="true">
        <path d="M12 14h24l-4 6H8zm4 10h24l-4 6H12zm4 10h24l-4 6H16z" fill="#14f195" />
        <text x="48" y="31" fontFamily="monospace" fontSize="13" fontWeight="bold" letterSpacing="0.05em" fill="#ffffff">SOLANA</text>
      </svg>
    )
  },
  {
    id: "circle",
    name: "Circle",
    tier: "peer",
    url: "https://circle.com",
    nodeId: "NODE.0x2A",
    logo: (
      <svg viewBox="0 0 200 48" className="w-full h-full text-white fill-current" aria-hidden="true">
        <circle cx="24" cy="24" r="8" fill="none" stroke="#3b82f6" strokeWidth="2.5" />
        <circle cx="24" cy="24" r="3" fill="#3b82f6" />
        <text x="48" y="31" fontFamily="monospace" fontSize="13" fontWeight="bold" letterSpacing="0.05em" fill="#ffffff">CIRCLE</text>
      </svg>
    )
  },
  {
    id: "ethereum",
    name: "Ethereum",
    tier: "peer",
    url: "https://ethereum.org",
    nodeId: "NODE.0x3D",
    logo: (
      <svg viewBox="0 0 200 48" className="w-full h-full text-white fill-current" aria-hidden="true">
        <path d="M24 8l8 11-8 5-8-5zm0 29l8-11-8-5-8 5z" fill="#8c8c8c" />
        <text x="48" y="31" fontFamily="monospace" fontSize="13" fontWeight="bold" letterSpacing="0.05em" fill="#ffffff">ETH FOUNDATION</text>
      </svg>
    )
  },
  {
    id: "securing_node",
    name: "Synapse Partner Node",
    tier: "peer",
    url: "#",
    nodeId: "NODE.0x99",
    logo: (
      <div className="flex flex-col items-center justify-center text-center">
        <span className="font-mono text-[9px] text-brand-amber animate-pulse tracking-widest">[ SECURING NODE ]</span>
        <span className="font-mono text-[7px] text-obsidian-500 uppercase mt-0.5">ONBOARDING ACTIVE</span>
      </div>
    )
  }
];

export default function SponsorsSection() {
  return (
    <section
      id="sponsors-section"
      className="relative w-full min-h-screen bg-obsidian-950 overflow-visible py-28 z-30"
      aria-label="Synapse Ecosystem Partners"
    >
      {/* Volumetric portal exit light-bleed dividing bar */}
      <div className="absolute top-0 inset-x-0 h-40 bg-gradient-to-b from-brand-violet/[0.08] via-brand-amber/[0.03] to-transparent pointer-events-none z-10" />

      {/* Blueprint background dot-coordinate grid map */}
      <div 
        className="absolute inset-0 opacity-[0.06] pointer-events-none select-none"
        style={{
          backgroundImage: "radial-gradient(circle at center, rgba(139,92,246,0.15) 1px, transparent 1px)",
          backgroundSize: "24px 24px"
        }}
      />

      {/* Dynamic volumetric ambient orbs breathing slowly inside the newly traversed dimension */}
      <motion.div
        className="absolute top-[15%] left-[5%] w-[600px] h-[600px] rounded-full pointer-events-none mix-blend-screen opacity-[0.05]"
        style={{
          background: "radial-gradient(circle, rgba(139,92,246,0.3) 0%, rgba(249,115,22,0.05) 50%, transparent 100%)",
        }}
        animate={{
          x: [-30, 30, -30],
          y: [-25, 25, -25],
          scale: [0.95, 1.05, 0.95]
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      <motion.div
        className="absolute bottom-[15%] right-[5%] w-[600px] h-[600px] rounded-full pointer-events-none mix-blend-screen opacity-[0.04]"
        style={{
          background: "radial-gradient(circle, rgba(249,115,22,0.25) 0%, rgba(139,92,246,0.05) 50%, transparent 100%)",
        }}
        animate={{
          x: [30, -30, 30],
          y: [25, -25, 25],
          scale: [1.05, 0.95, 1.05]
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      {/* Blueprint background coordinate grid & Dynamic atmospheric backdrops */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom,rgba(124,58,237,0.03)_0%,transparent_60%)] pointer-events-none" />
      <div className="absolute top-1/4 left-[10%] w-[500px] h-[350px] rounded-full bg-brand-violet/[0.025] blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-[10%] w-[500px] h-[350px] rounded-full bg-brand-amber/[0.015] blur-[120px] pointer-events-none" />

      {/* Layer 30: Container wrapper with viewport scroll reveal transition */}
      <motion.div 
        className="max-w-7xl mx-auto px-6 relative z-10 flex flex-col items-center"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        
        {/* Header Block with technical alignment */}
        <div className="text-center max-w-3xl flex flex-col items-center mb-24">
          <span className="font-mono text-xs md:text-sm tracking-[0.35em] text-brand-violet uppercase font-semibold mb-4">
            [ POWERING_THE_SYNAPSE ]
          </span>
          <h2 className="text-4xl md:text-6xl font-extrabold tracking-tight text-white font-display mb-6">
            ECOSYSTEM PARTNERS
          </h2>
          <p className="text-sm md:text-base text-obsidian-300 font-mono tracking-wide leading-relaxed max-w-2xl">
            Leading enterprise organizations and decentralized Web3 networks bridging technical infrastructure and developer resources.
          </p>
        </div>

        {/* 
          Grid Section 1: ALPHA CORE (PLATINUM SPONSORS)
        */}
        <div className="w-full flex flex-col items-center">
          <div className="flex items-center gap-3 mb-8 select-none">
            <span className="w-2 h-2 rounded-full bg-brand-violet" />
            <span className="font-mono text-xs tracking-[0.25em] text-brand-violet font-bold uppercase">
              ALPHA CORE SPONSORS
            </span>
            <span className="w-2 h-2 rounded-full bg-brand-violet" />
          </div>
          <SponsorGrid sponsors={SPONSORS_DATASET} tier="alpha" />
        </div>

        {/* Blueprint separation gridline 1 */}
        <div className="w-full max-w-5xl h-[1px] border-t border-dashed border-brand-violet/10 my-20 pointer-events-none" />

        {/* 
          Grid Section 2: CONSENSUS NODES (GOLD SPONSORS)
        */}
        <div className="w-full flex flex-col items-center">
          <div className="flex items-center gap-3 mb-8 select-none">
            <span className="w-2 h-2 rounded-full bg-brand-amber" />
            <span className="font-mono text-xs tracking-[0.25em] text-brand-amber font-bold uppercase">
              CONSENSUS NODES
            </span>
            <span className="w-2 h-2 rounded-full bg-brand-amber" />
          </div>
          <SponsorGrid sponsors={SPONSORS_DATASET} tier="consensus" />
        </div>

        {/* Blueprint separation gridline 2 */}
        <div className="w-full max-w-5xl h-[1px] border-t border-dashed border-brand-violet/10 my-20 pointer-events-none" />

        {/* 
          Grid Section 3: NETWORK PEERS (SILVER & COMMUNITY SPONSORS)
        */}
        <div className="w-full flex flex-col items-center">
          <div className="flex items-center gap-3 mb-8 select-none">
            <span className="w-2 h-2 rounded-full bg-slate-500" />
            <span className="font-mono text-xs tracking-[0.25em] text-slate-400 font-bold uppercase">
              NETWORK PEERS
            </span>
            <span className="w-2 h-2 rounded-full bg-slate-500" />
          </div>
          <SponsorGrid sponsors={SPONSORS_DATASET} tier="peer" />
        </div>

        {/* 
          Sponsor Call to Action Block 
        */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="w-full max-w-4xl bg-obsidian-950/30 border border-brand-violet/10 rounded-lg p-8 md:p-12 mt-28 flex flex-col md:flex-row items-center justify-between gap-6"
        >
          <div className="flex flex-col text-center md:text-left">
            <span className="font-mono text-[9px] tracking-[0.2em] text-brand-amber font-semibold uppercase mb-1">
              [ SECURING_FUTURE_NODES ]
            </span>
            <h3 className="text-lg md:text-2xl font-bold tracking-tight text-white mb-2 font-display">
              BECOME AN ECOSYSTEM PARTNER
            </h3>
            <p className="text-xs text-obsidian-400 font-mono tracking-wide leading-relaxed max-w-xl">
              Collaborate on developer challenges, sponsor technical tracks, and provide infrastructural support. Join the frontier.
            </p>
          </div>
          
          <a
            href="mailto:partners@synapse.io?subject=Synapse%201.0%20Partnership%20Inquiry"
            className="group relative flex items-center justify-center font-mono text-[10px] tracking-widest text-white uppercase px-6 py-3 rounded border border-brand-violet/20 hover:border-brand-violet/50 hover:bg-brand-violet/5 transition-all duration-300 font-bold select-none cursor-pointer"
          >
            {/* Gloss sheen sweep */}
            <div className="absolute inset-0 w-0 group-hover:w-full bg-gradient-to-r from-transparent via-white/5 to-transparent duration-700 pointer-events-none" />
            PARTNER_WITH_US
          </a>
        </motion.div>

      </motion.div>
    </section>
  );
}
