"use client";

import React from "react";
import { cn } from "@/utils/cn";

export default function Footer() {
  const handleScrollTo = (id: string) => (e: React.MouseEvent) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="relative w-full bg-obsidian-950 border-t border-white/5 py-16 overflow-hidden">
      
      {/* Decorative vertical blueprint lines */}
      <div className="absolute left-[64px] inset-y-0 w-[1px] bg-white/[0.02] hidden xl:block pointer-events-none" />
      <div className="absolute right-[64px] inset-y-0 w-[1px] bg-white/[0.02] hidden xl:block pointer-events-none" />

      <div className="container mx-auto px-6 max-w-[1200px] relative z-10">
        
        {/* Top grid: Brand + Location telemetry & Links */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 pb-12 border-b border-white/5">
          
          {/* Brand Info + Active Grid lock */}
          <div className="md:col-span-4 flex flex-col justify-between">
            <div>
              <span className="text-lg font-black tracking-widest text-white font-display">
                SYNAPSE<span className="text-brand-violet font-mono text-xs ml-1 font-medium">[1.0]</span>
              </span>
              <p className="text-2xs font-mono text-obsidian-500 uppercase tracking-widest mt-2 max-w-xs leading-relaxed">
                SYNTHESIZING PROTOCOLS. VALIDATING ECOSYSTEMS. SHAPING COMPUTATIONAL INNOVATION.
              </p>
            </div>

            {/* Coordinates Widget */}
            <div className="mt-8 font-mono border border-white/5 bg-obsidian-900/30 p-4 rounded-lg inline-flex flex-col gap-1 max-w-xs select-none">
              <span className="text-[9px] text-brand-amber font-semibold tracking-wider uppercase">
                [ LOCATION_LOCK // SECURE ]
              </span>
              <span className="text-[10px] text-white font-semibold">
                22.7533° N, 75.9038° E
              </span>
              <span className="text-[9px] text-obsidian-400 uppercase tracking-wide">
                AITR Campus, Indore, MP, India
              </span>
            </div>
          </div>

          {/* Links Block 1: Info & Vaults */}
          <div className="md:col-span-3">
            <h4 className="font-mono text-2xs text-brand-violet/60 font-bold uppercase tracking-widest mb-4 whitespace-nowrap">
              [ LANDING_SECTIONS ]
            </h4>
            <ul className="space-y-2.5 text-2xs md:text-xs font-mono">
              <li>
                <a href="#portal-transition-section" onClick={handleScrollTo("portal-transition-section")} className="text-obsidian-400 hover:text-white uppercase transition-colors">
                  PORTAL_CORRIDOR
                </a>
              </li>
              <li>
                <a href="#tracks-section" onClick={handleScrollTo("tracks-section")} className="text-obsidian-400 hover:text-white uppercase transition-colors">
                  TRACKS_&_CHALLENGES
                </a>
              </li>
              <li>
                <a href="#prizes-section" onClick={handleScrollTo("prizes-section")} className="text-obsidian-400 hover:text-white uppercase transition-colors">
                  PRIZE_ECOSYSTEM
                </a>
              </li>
              <li>
                <a href="#timeline-section" onClick={handleScrollTo("timeline-section")} className="text-obsidian-400 hover:text-white uppercase transition-colors">
                  JOURNEY_TIMELINE
                </a>
              </li>
              <li>
                <a href="#judges-section" onClick={handleScrollTo("judges-section")} className="text-obsidian-400 hover:text-white uppercase transition-colors">
                  EXPERT_JURY
                </a>
              </li>
            </ul>
          </div>

          {/* Links Block 2: Syndicate tracks */}
          <div className="md:col-span-3">
            <h4 className="font-mono text-2xs text-brand-violet/60 font-bold uppercase tracking-widest mb-4 whitespace-nowrap">
              [ ACTIVE_TRACKS ]
            </h4>
            <ul className="space-y-2.5 text-2xs font-mono">
              <li className="text-obsidian-400 hover:text-brand-violet transition-colors select-none">
                ARTIFICIAL_INTELLIGENCE
              </li>
              <li className="text-obsidian-400 hover:text-brand-violet transition-colors select-none">
                BLOCKCHAIN_ECOSYSTEMS
              </li>
              <li className="text-obsidian-400 hover:text-brand-violet transition-colors select-none">
                SPONSOR_LED_TRACKS
              </li>
            </ul>
          </div>

          {/* Links Block 3: Legal/Support */}
          <div className="md:col-span-2">
            <h4 className="font-mono text-2xs text-brand-violet/60 font-bold uppercase tracking-widest mb-4 whitespace-nowrap">
              [ PROTOCOLS ]
            </h4>
            <ul className="space-y-2.5 text-2xs md:text-xs font-mono">
              <li>
                <a href="/code-of-conduct" className="text-obsidian-400 hover:text-white uppercase transition-colors">
                  CODE_OF_CONDUCT
                </a>
              </li>
              <li>
                <a href="/privacy-policy" className="text-obsidian-400 hover:text-white uppercase transition-colors">
                  PRIVACY_POLICY
                </a>
              </li>
              <li>
                <a href="/terms-of-service" className="text-obsidian-400 hover:text-white uppercase transition-colors">
                  TERMS_OF_SERVICE
                </a>
              </li>
              <li>
                <a href="mailto:blockchainclub@acropolis.in" className="text-obsidian-400 hover:text-white uppercase transition-colors">
                  CONTACT_EMAIL
                </a>
              </li>
              <li>
                <span className="text-obsidian-400 uppercase select-none">
                  VENUE: AITR, INDORE
                </span>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom grid: Sponsor Credential & Copyright */}
        <div className="pt-12 flex flex-col md:flex-row md:justify-between md:items-center gap-8">
          
          {/* Desaturated core sponsors validation */}
          <div className="flex flex-col gap-2">
            <span className="font-mono text-[9px] text-obsidian-500 uppercase tracking-widest">
              PROUDLY SUPPORTED BY INSTITUTIONAL PARTNERS
            </span>
            <div className="flex items-center gap-6 mt-1 opacity-45 group">
              <span className="font-mono text-2xs font-bold text-white tracking-widest border border-white/10 px-2.5 py-1 select-none hover:opacity-100 hover:border-white/30 transition-all cursor-default">
                ORANET AI
              </span>
              <span className="font-mono text-2xs font-bold text-white tracking-widest border border-white/10 px-2.5 py-1 select-none hover:opacity-100 hover:border-white/30 transition-all cursor-default">
                AWADH FOODS
              </span>
            </div>
          </div>

          {/* Copyright details */}
          <div className="font-mono text-2xs text-obsidian-500 text-left md:text-right uppercase space-y-1">
            <p>© 2026 SYNAPSE 1.0. ALL RIGHTS RESERVED.</p>
            <p className="text-[10px] text-brand-violet/40 tracking-wider">
              [ CONSENSUS_TRANSMISSIONS_SECURE_LOG_N_2026 ]
            </p>
          </div>

        </div>

      </div>
    </footer>
  );
}
