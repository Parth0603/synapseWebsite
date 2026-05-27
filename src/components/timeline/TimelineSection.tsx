"use client";
import React from "react";
import { motion } from "framer-motion";
import { SectionWrapper } from "@/components/ui/SectionWrapper";

const PLACEHOLDER_PHASES = [
  { id: "ph-01", label: "PHASE_01", title: "Registration & Idea Submission" },
  { id: "ph-02", label: "PHASE_02", title: "Online Prototype Coding" },
  { id: "ph-03", label: "PHASE_03", title: "Shortlisting & Review" },
  { id: "ph-04", label: "PHASE_04", title: "Offline Grand Finale" },
  { id: "ph-05", label: "PHASE_05", title: "Judging & Prize Distribution" },
];

export default function TimelineSection() {
  return (
    <SectionWrapper
      id="timeline"
      className="relative w-full min-h-screen bg-obsidian-950 overflow-visible py-28 z-30"
    >
      {/* ── Ambient background canvas ── */}
      <div
        className="absolute inset-0 opacity-[0.02] pointer-events-none"
        style={{
          backgroundImage: `
            radial-gradient(circle at 1px 1px, white 1px, transparent 0),
            linear-gradient(to right, rgba(255,255,255,0.05) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(255,255,255,0.05) 1px, transparent 1px)
          `,
          backgroundSize: "32px 32px, 64px 64px, 64px 64px",
          backgroundPosition: "center center",
        }}
      />
      <div className="absolute top-1/3 left-1/4 w-[600px] h-[300px] bg-brand-violet/5 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[700px] h-[350px] bg-brand-amber/5 blur-[140px] rounded-full pointer-events-none" />

      {/* Blueprint guide labels */}
      <div className="absolute top-12 left-12 font-mono text-[8px] text-obsidian-600 select-none hidden lg:block uppercase tracking-widest">
        GRID_COORDS // SYSTEM_SEQUENCE_INIT
      </div>
      <div className="absolute top-12 right-12 font-mono text-[8px] text-obsidian-600 select-none hidden lg:block uppercase tracking-widest">
        UTC_OFFSET: +05:30 // IST_ZONE
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-20">

        {/* ── Section heading ── */}
        <div className="flex flex-col items-center text-center mb-20 md:mb-28">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="flex items-center gap-2 mb-3"
          >
            <span className="w-1.5 h-1.5 bg-brand-violet rounded-full animate-ping" />
            <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-brand-violet font-semibold">
              [ REAL-TIME_SYNCHRONIZATION ]
            </span>
            <span className="w-1.5 h-1.5 bg-brand-violet rounded-full animate-ping" />
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 0.05 }}
            className="text-4xl md:text-5xl lg:text-6xl font-black font-display tracking-tight text-white mb-6 uppercase"
          >
            EVENT TIMELINE
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, scaleX: 0 }}
            whileInView={{ opacity: 1, scaleX: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
            className="w-24 h-[1px] bg-gradient-to-r from-transparent via-brand-violet/50 to-transparent mb-6"
          />

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: 0.15 }}
            className="max-w-2xl text-xs md:text-sm font-mono text-obsidian-400 tracking-wide leading-relaxed"
          >
            FROM DIGITAL ABSTRACTS TO THE PHYSICAL ARENA. MAP YOUR SYNAPSE PROGRESSION PIPELINE AND GUARANTEE PERFECT ALIGNMENT WITH EVERY SYSTEM CHECKPOINT.
          </motion.p>
        </div>

        {/* ── Coming Soon card ── */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="relative w-full max-w-4xl mx-auto mb-20 md:mb-28"
        >
          <div className="relative rounded-xl border border-brand-violet/15 bg-obsidian-900/50 backdrop-blur-md overflow-hidden shadow-[0_0_60px_rgba(139,92,246,0.06)]">

            {/* Blueprint corner marks */}
            <div className="absolute top-0 left-0 w-8 h-8 border-t border-l border-brand-violet/25" />
            <div className="absolute top-0 right-0 w-8 h-8 border-t border-r border-brand-violet/25" />
            <div className="absolute bottom-0 left-0 w-8 h-8 border-b border-l border-brand-violet/25" />
            <div className="absolute bottom-0 right-0 w-8 h-8 border-b border-r border-brand-violet/25" />

            {/* Ambient glow */}
            <div
              className="absolute inset-0 pointer-events-none"
              style={{
                background: "radial-gradient(ellipse at 50% 0%, rgba(139,92,246,0.07) 0%, transparent 65%)",
              }}
            />

            {/* Top status bar */}
            <div className="border-b border-white/[0.05] px-6 py-3 flex items-center justify-between">
              <span className="font-mono text-[9px] tracking-[0.3em] text-obsidian-500 uppercase">
                TIMELINE_STATUS
              </span>
              <span className="flex items-center gap-1.5 font-mono text-[9px] tracking-[0.25em] text-brand-amber font-bold uppercase">
                <span className="w-1.5 h-1.5 rounded-full bg-brand-amber animate-pulse" />
                PENDING_RELEASE
              </span>
            </div>

            {/* Central hero area */}
            <div className="flex flex-col items-center justify-center text-center px-8 py-14 md:py-20 gap-6">

              {/* Clock icon */}
              <div className="relative flex items-center justify-center w-16 h-16 rounded-full border border-brand-violet/20 bg-brand-violet/5">
                <svg
                  className="w-7 h-7 text-brand-violet/70"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={1.5}
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6l4 2m6-2a10 10 0 1 1-20 0 10 10 0 0 1 20 0z" />
                </svg>
                <div className="absolute inset-0 rounded-full border border-brand-violet/20 animate-ping opacity-30" />
              </div>

              {/* Headline */}
              <div className="flex flex-col items-center gap-3">
                <span className="font-mono text-[10px] tracking-[0.4em] text-brand-violet uppercase font-semibold">
                  DATES &amp; PHASES
                </span>
                <h3 className="font-display text-3xl md:text-4xl lg:text-5xl font-black text-white tracking-tight uppercase leading-tight">
                  To Be Announced
                </h3>
                <p className="font-mono text-sm text-obsidian-400 leading-relaxed max-w-lg tracking-wide">
                  Official hackathon phases, dates, and checkpoints are being finalized.
                  Follow us for the announcement drop.
                </p>
              </div>

              {/* Phase preview rows */}
              <div className="w-full max-w-md flex flex-col gap-2 mt-2">
                {PLACEHOLDER_PHASES.map((phase, i) => (
                  <motion.div
                    key={phase.id}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.1 + i * 0.06, ease: "easeOut" }}
                    className="flex items-center gap-3 px-4 py-3 rounded-lg border border-white/[0.04] bg-white/[0.02]"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-obsidian-600 shrink-0" />
                    <span className="font-mono text-[9px] text-brand-violet/50 tracking-widest uppercase shrink-0">
                      {phase.label}
                    </span>
                    <div className="flex-1 h-px bg-white/[0.05]" />
                    <span className="font-mono text-[10px] text-obsidian-500 uppercase tracking-wide">
                      {phase.title}
                    </span>
                    <span className="font-mono text-[8px] text-obsidian-600 tracking-widest uppercase shrink-0">
                      TBA
                    </span>
                  </motion.div>
                ))}
              </div>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row items-center gap-3 mt-4">
                <a
                  href="#register"
                  className="group relative flex items-center gap-2 font-mono text-[10px] tracking-widest text-black bg-brand-violet hover:bg-brand-violet/90 font-black uppercase px-8 py-3.5 rounded transition-colors duration-200 shadow-[0_0_30px_rgba(139,92,246,0.2)] overflow-hidden"
                >
                  <div className="absolute inset-0 -translate-x-full group-hover:translate-x-0 bg-gradient-to-r from-white/10 to-transparent transition-transform duration-500 pointer-events-none" />
                  Register Interest
                </a>
                <a
                  href="#"
                  className="font-mono text-[10px] tracking-widest text-obsidian-400 hover:text-white border border-white/10 hover:border-white/20 uppercase px-8 py-3.5 rounded transition-all duration-200"
                >
                  Get Notified
                </a>
              </div>
            </div>

            {/* Bottom status bar */}
            <div className="border-t border-white/[0.05] px-6 py-3 flex items-center justify-center">
              <span className="font-mono text-[8px] tracking-[0.35em] text-obsidian-600 uppercase">
                SYNAPSE 1.0 // TIMELINE_INIT_PENDING // STAND_BY
              </span>
            </div>
          </div>
        </motion.div>

        {/* ── Footer CTA block ── */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="relative w-full max-w-4xl mx-auto rounded-lg border border-brand-violet/10 bg-obsidian-900/60 backdrop-blur-md p-8 md:p-12 overflow-hidden shadow-[0_0_50px_rgba(139,92,246,0.05)] text-center"
        >
          <div className="absolute top-0 left-0 w-6 h-6 border-t border-l border-brand-violet/20" />
          <div className="absolute top-0 right-0 w-6 h-6 border-t border-r border-brand-violet/20" />
          <div className="absolute bottom-0 left-0 w-6 h-6 border-b border-l border-brand-violet/20" />
          <div className="absolute bottom-0 right-0 w-6 h-6 border-b border-r border-brand-violet/20" />

          <div className="relative z-10 flex flex-col items-center">
            <span className="font-mono text-[9px] text-brand-amber font-bold tracking-[0.25em] uppercase mb-4">
              [ SECURE_YOUR_PORTAL_CREDENTIALS ]
            </span>
            <h3 className="text-2xl md:text-4xl font-black font-display text-white tracking-tight mb-4 uppercase">
              READY TO COMMENCE THE SYNCHRONIZATION?
            </h3>
            <p className="text-xs md:text-sm font-mono text-obsidian-400 max-w-xl leading-relaxed mb-8">
              Join elite creators converging from all across Indore and beyond. Secure your developer slot now and prepare for the physical finale at Acropolis Institute.
            </p>
            <div className="flex flex-col sm:flex-row items-stretch gap-4 w-full sm:w-auto">
              <motion.a
                href="#register"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="px-10 py-4 rounded font-mono text-xs font-black tracking-widest text-black bg-brand-violet hover:bg-brand-violet/90 transition-colors shadow-[0_0_30px_rgba(139,92,246,0.2)] uppercase select-none"
              >
                LOCK_IN_SYNDICATE_ACCESS
              </motion.a>
              <motion.a
                href="#prizes"
                whileHover={{ scale: 1.02, backgroundColor: "rgba(255,255,255,0.03)" }}
                whileTap={{ scale: 0.98 }}
                className="px-10 py-4 rounded font-mono text-xs font-bold tracking-widest text-white border border-white/10 hover:border-white/20 transition-all uppercase select-none"
              >
                REVIEW_CAPITAL_INCENTIVES
              </motion.a>
            </div>
          </div>
        </motion.div>

      </div>
    </SectionWrapper>
  );
}
