"use client";
import React from "react";
import { motion } from "framer-motion";
import CountdownSystem from "./CountdownSystem";
import RegistrationButton from "./RegistrationButton";

export default function FinalCTASection() {
  return (
    <section id="registration" className="relative w-full py-24 md:py-36 bg-[#030305] border-t border-white/[0.04] overflow-hidden select-none">
      {/* Dynamic Background Telemetry & Visual Mesh */}
      <div 
        className="absolute inset-0 opacity-[0.02] pointer-events-none" 
        style={{
          backgroundImage: `
            radial-gradient(circle at 1px 1px, white 1px, transparent 0),
            linear-gradient(to right, rgba(255, 255, 255, 0.05) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(255, 255, 255, 0.05) 1px, transparent 1px)
          `,
          backgroundSize: "28px 28px, 56px 56px, 56px 56px",
          backgroundPosition: "center center"
        }}
      />
      
      {/* Hardware-Accelerated Ambient Backlights */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-brand-violet/5 blur-[130px] rounded-full pointer-events-none" />
      <div className="absolute top-1/3 left-1/3 w-[500px] h-[250px] bg-brand-amber/5 blur-[110px] rounded-full pointer-events-none" />

      {/* Decorative Outer Laser Lines */}
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-20">
        
        {/* Core Conversion Blueprint Container Card */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="relative w-full max-w-4xl mx-auto rounded-lg border border-white/5 bg-obsidian-950/40 backdrop-blur-md p-8 md:p-16 overflow-hidden shadow-[0_0_80px_rgba(0,0,0,0.6)] group"
        >
          {/* Blueprint Guideline Anchors */}
          <div className="absolute inset-0 bg-gradient-to-br from-brand-amber/[0.02] via-transparent to-brand-violet/[0.02] pointer-events-none" />
          <div className="absolute top-0 left-0 w-12 h-12 border-t border-l border-white/10 group-hover:border-white/20 transition-colors duration-300" />
          <div className="absolute top-0 right-0 w-12 h-12 border-t border-r border-white/10 group-hover:border-white/20 transition-colors duration-300" />
          <div className="absolute bottom-0 left-0 w-12 h-12 border-b border-l border-white/10 group-hover:border-white/20 transition-colors duration-300" />
          <div className="absolute bottom-0 right-0 w-12 h-12 border-b border-r border-white/10 group-hover:border-white/20 transition-colors duration-300" />

          {/* Blueprint grid coordinate overlays */}
          <span className="absolute top-3 left-4 font-mono text-[7px] text-obsidian-550 select-none">
            [ LAT: 22.7533° N // LON: 75.9038° E ]
          </span>
          <span className="absolute bottom-3 right-4 font-mono text-[7px] text-obsidian-550 select-none">
            [ SECURE_LOCK_STATE: TRUE ]
          </span>

          <div className="flex flex-col items-center text-center">
            
            {/* Urgency Badge */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="flex items-center gap-2 mb-4 border border-brand-amber/20 bg-brand-amber/5 px-3 py-1 rounded select-none"
            >
              <span className="w-1.5 h-1.5 bg-brand-amber rounded-full animate-pulse" />
              <span className="font-mono text-[9px] uppercase tracking-[0.2em] text-brand-amber font-bold">
                [ SYNAPSE_REGISTRATION_PORTAL ]
              </span>
            </motion.div>

            {/* Massive Display Title */}
            <motion.h2
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-4xl sm:text-5xl md:text-6xl font-black font-display tracking-tight text-white mb-6 uppercase leading-none"
            >
              JOIN SYNAPSE 1.0
            </motion.h2>

            {/* Dynamic Scarcity Line */}
            <motion.div
              initial={{ opacity: 0, scaleX: 0 }}
              whileInView={{ opacity: 1, scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.25 }}
              className="flex flex-col items-center gap-2 mb-8 select-none"
            >
              <div className="w-48 h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent" />
              <span className="font-mono text-[10px] text-brand-amber font-bold tracking-widest mt-1">
                [ REGISTRATIONS CLOSING SOON ]
              </span>
            </motion.div>

            {/* Integrated Countdown Clock */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="w-full"
            >
              <CountdownSystem />
            </motion.div>

            {/* High-Impact Body Prompt */}
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="max-w-2xl text-xs md:text-sm font-mono text-obsidian-350 tracking-wide leading-relaxed mb-10 text-center"
            >
              Join builders, developers, designers, and innovators for a 24-hour hybrid hackathon. Build real projects in AI, Web3, cybersecurity, and emerging tech, connect with top sponsors, and compete for prizes. Open to students from all colleges and universities across India. Free registration.
            </motion.p>

            {/* Double-Conversion Kinetic Actions */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="flex flex-col lg:flex-row items-center gap-6 justify-center w-full max-w-2xl mb-12"
            >
              <RegistrationButton
                label="REGISTER NOW"
                subLabel="INITIATE_APPLICATION.sys"
                href="#register"
                themeColor="gold"
              />
              <RegistrationButton
                label="BECOME A SPONSOR"
                subLabel="SUBMIT_SPONSOR_PROPOSAL"
                href="mailto:blockchainclub@acropolis.in?subject=Partner%20Application%20-%20Synapse%201.0"
                isPrimary={false}
              />
            </motion.div>

            {/* Parameters & Summary Panel */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="grid grid-cols-1 sm:grid-cols-3 gap-6 w-full border-t border-white/5 pt-8 select-none"
            >
              <div className="flex flex-col items-center">
                <span className="font-mono text-[8px] text-obsidian-500 uppercase tracking-widest mb-1">
                  [ 01 // EVENT_DATE ]
                </span>
                <span className="font-mono text-[10px] text-white font-bold uppercase tracking-wider">
                  ONLINE + OFFLINE // SEPTEMBER 12-13, 2026
                </span>
              </div>
              <div className="flex flex-col items-center border-y sm:border-y-0 sm:border-x border-white/5 py-4 sm:py-0">
                <span className="font-mono text-[8px] text-obsidian-500 uppercase tracking-widest mb-1">
                  [ 02 // VENUE ]
                </span>
                <span className="font-mono text-[10px] text-white font-bold uppercase tracking-wider">
                  AITR, INDORE
                </span>
              </div>
              <div className="flex flex-col items-center">
                <span className="font-mono text-[8px] text-obsidian-500 uppercase tracking-widest mb-1">
                  [ 03 // PRIZE_POOL ]
                </span>
                <span className="font-mono text-[10px] text-brand-amber font-extrabold uppercase tracking-wider">
                  ₹1,05,000+ & SPONSOR PERKS
                </span>
              </div>
            </motion.div>

          </div>
        </motion.div>

        {/* Desaturated Trust Legitimacy Anchors */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 0.45 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="mt-20 flex flex-col items-center select-none"
        >
          <span className="font-mono text-[8px] text-obsidian-500 uppercase tracking-[0.25em] mb-6">
            [ CERTIFIED_ANCHOR_SPONSOR_INFRASTRUCTURE ]
          </span>
          <div className="flex flex-wrap items-center justify-center gap-12 md:gap-16 opacity-40 hover:opacity-60 transition-opacity duration-500">
            {/* OranetAI AWS */}
            <div className="flex items-center gap-2">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.0" className="w-5 h-5 text-white">
                <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
              </svg>
              <span className="font-mono text-[10px] font-black tracking-widest text-white uppercase">
                ORANET_AI.aws
              </span>
            </div>
            {/* EtherSync */}
            <div className="flex items-center gap-2">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.0" className="w-5 h-5 text-white">
                <path d="M4.5 16.5L12 3l7.5 13.5L12 21L4.5 16.5z" />
              </svg>
              <span className="font-mono text-[10px] font-black tracking-widest text-white uppercase">
                ETHERSYNC.web3
              </span>
            </div>
            {/* Acropolis */}
            <div className="flex items-center gap-2">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.0" className="w-5 h-5 text-white">
                <path d="M22 10v6M2 10l10-5 10 5-10 5zM6 12v5c0 2 2 3 6 3s6-1 6-3v-5" />
              </svg>
              <span className="font-mono text-[10px] font-black tracking-widest text-white uppercase">
                AITR_INDORE.edu
              </span>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
