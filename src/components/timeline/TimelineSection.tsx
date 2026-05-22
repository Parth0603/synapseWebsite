"use client";
import React from "react";
import { motion } from "framer-motion";
import TimelineNode, { TimelineEvent } from "./TimelineNode";
import TimelineConnector from "./TimelineConnector";

export default function TimelineSection() {
  const events: TimelineEvent[] = [
    {
      id: "ev-01",
      phase: "PHASE_01 // GENESIS_SYNC",
      title: "Registration & Idea Submission",
      date: "MAY 15 - JUNE 05",
      time: "11:59 PM IST",
      status: "active",
      isOffline: false,
      description: "Assemble your developer syndicate, choose your innovation focus (AI, Blockchain, or Future-Tech), and submit your abstract concept model to initialize secure portal credentials.",
      deliverables: [
        "Syndicate Registry Activation",
        "Ecosystem Track Mapping",
        "Abstract Paradigm Submission"
      ]
    },
    {
      id: "ev-02",
      phase: "PHASE_02 // SANDBOX_VALIDATION",
      title: "Online Prototype Coding",
      date: "JUNE 06 - JUNE 08",
      time: "08:00 AM IST START",
      status: "locked",
      isOffline: false,
      description: "Shortlisted teams enter the digital sandbox to build functional prototypes. Code repositories are evaluated on architecture cleanlines, ledger security, and AI models.",
      deliverables: [
        "Git Telemetry Initialization",
        "Live Online Technical Checks",
        "Sandbox Working Demo Video"
      ]
    },
    {
      id: "ev-03",
      phase: "PHASE_03 // GATEWAY_CONSENSUS",
      title: "Gateway Cohort Shortlisting",
      date: "JUNE 10",
      time: "06:00 PM IST",
      status: "locked",
      isOffline: false,
      description: "Jury assessment of online submissions. Top finalist squads are selected and receive official physical credentials to enter the mainnet arena in Indore.",
      deliverables: [
        "Evaluator Panel Review",
        "Indore Finalist Cohort Lock",
        "Gateway Travel Authorization"
      ]
    },
    {
      id: "ev-04",
      phase: "PHASE_04 // MAINNET_SYNTHESIS",
      title: "Offline Grand Finale commencement",
      date: "JUNE 12",
      time: "09:00 AM IST ARENA_ON",
      status: "locked",
      isOffline: true,
      coordinates: "22.7533° N, 75.9038° E",
      venue: "Acropolis Institute of Technology & Research, Indore, India",
      description: "Finalist syndicates gather physically at Indore to kick off 36 hours of intensive code construction, real-time server tests, and OranetAI mentor office hours.",
      deliverables: [
        "36-Hour accelerated code run",
        "AWS/OranetAI Sandbox Tuning",
        "Consensus Verification Checks"
      ]
    },
    {
      id: "ev-05",
      phase: "PHASE_05 // PROTOCOL_RELEASE",
      title: "Validator Evaluation & Prize Synthesis",
      date: "JUNE 13",
      time: "04:00 PM IST FINISH",
      status: "locked",
      isOffline: true,
      coordinates: "22.7533° N, 75.9038° E",
      venue: "Acropolis Institute of Technology & Research, Indore, India",
      description: "Live prototype presentations to industry experts, blockchain node judges, and VC partners. Direct distribution of the ₹1,00,000+ prize pool and incubation onboarding.",
      deliverables: [
        "Validator Panel Demos",
        "₹1,00,000+ Payout Processing",
        "Ecosystem Incubation Fast-Track"
      ]
    }
  ];

  return (
    <section id="timeline-section" className="relative w-full py-24 md:py-32 bg-obsidian-950 border-t border-white/[0.04] overflow-hidden select-none">
      {/* Background canvas elements */}
      <div 
        className="absolute inset-0 opacity-[0.02] pointer-events-none" 
        style={{
          backgroundImage: `
            radial-gradient(circle at 1px 1px, white 1px, transparent 0),
            linear-gradient(to right, rgba(255, 255, 255, 0.05) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(255, 255, 255, 0.05) 1px, transparent 1px)
          `,
          backgroundSize: "32px 32px, 64px 64px, 64px 64px",
          backgroundPosition: "center center"
        }}
      />
      <div className="absolute top-1/3 left-1/4 w-[600px] h-[300px] bg-brand-violet/5 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[700px] h-[350px] bg-brand-amber/5 blur-[140px] rounded-full pointer-events-none" />

      {/* Blueprint guide coordinate overlays */}
      <div className="absolute top-12 left-12 font-mono text-[8px] text-obsidian-600 select-none hidden lg:block uppercase tracking-widest">
        GRID_COORDS // SYSTEM_SEQUENCE_INIT
      </div>
      <div className="absolute top-12 right-12 font-mono text-[8px] text-obsidian-600 select-none hidden lg:block uppercase tracking-widest">
        UTC_OFFSET: +05:30 // IST_ZONE
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-20">
        {/* Core Heading Telemetry Block */}
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

        {/* 
          Main Staggered Timeline Node Stack.
          Incorporates centralized fiber-optic progress tracking pipeline.
        */}
        <div className="relative w-full max-w-5xl mx-auto py-12 mb-20 md:mb-28">
          <TimelineConnector />
          
          <div className="flex flex-col w-full relative z-20">
            {events.map((event, index) => (
              <TimelineNode key={event.id} event={event} index={index} />
            ))}
          </div>
        </div>

        {/* 
          High-Conversion Timeline Footer CTA Block
          Direct conversion hook with timeline urgency and physical coordinates validation.
        */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="relative w-full max-w-4xl mx-auto rounded-lg border border-brand-violet/10 bg-obsidian-900/60 backdrop-blur-md p-8 md:p-12 overflow-hidden shadow-[0_0_50px_rgba(139,92,246,0.05)] text-center"
        >
          {/* Blueprint markings */}
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
              Join elite creators converging from all across Indore and beyond. Secure your developer slot now and prepare for physical mainnet deployment on June 12–13 at Acropolis Institute.
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
    </section>
  );
}
