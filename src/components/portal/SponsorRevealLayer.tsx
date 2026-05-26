"use client";
import React from "react";
import { motion, MotionValue, useTransform, useMotionTemplate } from "framer-motion";
import SponsorCard, { Sponsor } from "../sponsors/SponsorCard";

interface SponsorRevealLayerProps {
  progress: MotionValue<number>;
  isMobile: boolean;
}

// Full sponsor dataset — same sponsors, rendered inside the portal depth
const SPONSORS_DATASET: Sponsor[] = [
  {
    id: "nvidia",
    name: "NVIDIA Inception",
    tier: "alpha",
    url: "https://www.nvidia.com",
    nodeId: "NODE.0x01",
    logo: (
      <svg viewBox="0 0 200 48" className="w-full h-full text-white fill-current" aria-hidden="true">
        <path d="M12 24c0-6.63 5.37-12 12-12s12 5.37 12 12-5.37 12-12 12-12-5.37-12-12zm12-9c-4.97 0-9 4.03-9 9s4.03 9 9 9 9-4.03 9-9-4.03-9-9-9z" fill="#76b900" />
        <path d="M24 18c-3.31 0-6 2.69-6 6s2.69 6 6 6 6-2.69 6-6-2.69-6-6-6z" fill="#ffffff" />
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
        <path d="M24 8l10.5 6v12L24 32l-10.5-6v-12z" fill="none" stroke="#375bd2" strokeWidth="2.5" />
        <path d="M24 14l5.2 3v6L24 26l-5.2-3v-6z" fill="#375bd2" />
        <text x="48" y="31" fontFamily="monospace" fontSize="16" fontWeight="bold" letterSpacing="0.1em" fill="#ffffff">CHAINLINK</text>
      </svg>
    )
  },
  {
    id: "openai",
    name: "OpenAI",
    tier: "consensus",
    url: "https://openai.com",
    nodeId: "NODE.0x0A",
    logo: (
      <svg viewBox="0 0 200 48" className="w-full h-full text-white fill-current" aria-hidden="true">
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
        <path d="M24 10l12 20H12z" fill="#ffffff" />
        <text x="48" y="30" fontFamily="monospace" fontSize="15" fontWeight="bold" letterSpacing="0.1em" fill="#ffffff">VERCEL</text>
      </svg>
    )
  },
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
  }
];

export default function SponsorRevealLayer({ progress, isMobile }: SponsorRevealLayerProps) {
  // The sponsor world fades in and scales up from "deep inside the portal"
  const layerOpacity = useTransform(progress, [0.40, 0.82], [0, 1]);
  const layerScale  = useTransform(progress, [0.38, 0.92], [0.82, 1.0]);

  // Radial portal-center unmask:
  //   inner=0%, outer=2%  → fully dark (portal not yet entered)
  //   inner=100%, outer=110% → fully transparent (sponsors fully revealed)
  // This creates the illusion of sponsors emerging through the portal mouth.
  const innerRadius = useTransform(progress, [0.42, 0.96], [0, 100]);
  const outerRadius = useTransform(progress, [0.42, 0.96], [3, 112]);
  const revealMask  = useMotionTemplate`radial-gradient(circle at 50% 50%, transparent ${innerRadius}%, rgba(5,5,12,0.97) ${outerRadius}%)`;

  const gridCols = isMobile
    ? "grid grid-cols-2 gap-3 max-w-md w-full px-4"
    : "grid grid-cols-2 md:grid-cols-4 gap-5 max-w-5xl w-full px-6";

  return (
    <motion.div
      className="absolute inset-0 flex flex-col justify-center items-center"
      style={{
        zIndex: 10,
        opacity: layerOpacity,
        scale: layerScale,
        willChange: "transform, opacity",
      }}
    >
      {/* Solid background of the new dimension — this is what the portal "opens into" */}
      <div className="absolute inset-0 bg-obsidian-950" />

      {/* Dimensional atmosphere: subtle radial violet glow from center */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: "radial-gradient(ellipse 80% 60% at 50% 50%, rgba(124,58,237,0.07) 0%, transparent 70%)"
        }}
      />

      {/* Blueprint coordinate dot-grid of the new dimension */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.045]"
        style={{
          backgroundImage: "radial-gradient(circle, rgba(139,92,246,0.8) 1px, transparent 1px)",
          backgroundSize: "26px 26px"
        }}
      />

      {/* Sponsor content — centered, clean */}
      <div className="relative flex flex-col items-center w-full pointer-events-auto" style={{ zIndex: 20 }}>

        {/* Section header */}
        <div className="text-center mb-8 md:mb-10 pointer-events-none px-4">
          <span className="font-mono text-[9px] tracking-[0.40em] text-brand-violet font-semibold uppercase">
            [ DIMENSIONAL_NODE_SYNC ]
          </span>
          <h2 className="text-2xl md:text-4xl font-extrabold tracking-tight text-white font-display mt-2 mb-2">
            SYNAPSE ECOSYSTEM
          </h2>
          <p className="text-[10px] md:text-xs text-obsidian-400 font-mono tracking-wide leading-relaxed max-w-md mx-auto">
            Compute partners synchronizing infrastructure across the network lattice.
          </p>
        </div>

        {/* 4×2 sponsor grid */}
        <div className={gridCols}>
          {SPONSORS_DATASET.map((sponsor, index) => (
            <SponsorCard key={sponsor.id} sponsor={sponsor} index={index} />
          ))}
        </div>

        {/* Bottom coordinate tag */}
        <div className="mt-8 font-mono text-[8px] tracking-widest text-obsidian-600 pointer-events-none select-none">
          [ SYSTEM.METROPOLIS_LAYER // 0x4F92 ]
        </div>
      </div>

      {/* ─── RADIAL PORTAL-CENTER REVEAL MASK ─── */}
      {/* Sits on top of sponsor content. Starts as a full dark cover.       */}
      {/* As progress advances, the transparent hole expands from center,    */}
      {/* making sponsors appear to emerge from INSIDE the portal mouth.     */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        style={{
          zIndex: 35,
          background: revealMask,
        }}
      />
    </motion.div>
  );
}
