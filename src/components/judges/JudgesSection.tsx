"use client";
import React from "react";
import { motion } from "framer-motion";
import JudgeCard, { Judge } from "./JudgeCard";

export default function JudgesSection() {
  const juryBoard: Judge[] = [
    {
      id: "jury-1",
      name: "Dr. Aarav Mehta",
      role: "Director of Neural Architectures",
      company: "OranetAI Research Labs",
      specialties: ["LLM_Ops", "RAG_Agents", "Deep_Learning"],
      tier: "jury",
      themeColor: "gold",
      nodeId: "VALIDATOR.0x01_AI",
      isSponsorAligned: true,
      socials: {
        linkedin: "https://linkedin.com",
        github: "https://github.com",
        twitter: "https://twitter.com"
      }
    },
    {
      id: "jury-2",
      name: "Kunal Sen",
      role: "Chief Web3 Protocol Architect",
      company: "EtherSync Foundation",
      specialties: ["Solidity", "EVM_Scaling", "Crypto_Protocols"],
      tier: "jury",
      themeColor: "gold",
      nodeId: "VALIDATOR.0x02_WEB3",
      socials: {
        linkedin: "https://linkedin.com",
        github: "https://github.com",
        twitter: "https://twitter.com"
      }
    },
    {
      id: "jury-3",
      name: "Priya Sharma",
      role: "Principal Venture Partner",
      company: "Synapse Capital Syndicate",
      specialties: ["Protocol_Valuation", "Growth", "Venture_Runway"],
      tier: "jury",
      themeColor: "gold",
      nodeId: "VALIDATOR.0x03_VC",
      socials: {
        linkedin: "https://linkedin.com",
        twitter: "https://twitter.com"
      }
    }
  ];

  const mentors: Judge[] = [
    {
      id: "mentor-1",
      name: "Rohan Joshi",
      role: "Senior Machine Learning Engineer",
      company: "OranetAI Systems",
      specialties: ["PyTorch", "Cloud_Infra", "Model_Distill"],
      tier: "mentor",
      themeColor: "violet",
      nodeId: "GUIDE.0x01_ML",
      isSponsorAligned: true,
      socials: {
        linkedin: "https://linkedin.com",
        github: "https://github.com"
      }
    },
    {
      id: "mentor-2",
      name: "Vikram Malhotra",
      role: "Lead Smart Contract Auditor",
      company: "SecureNodes",
      specialties: ["Hardhat", "Compiler_Logic", "Audit_Security"],
      tier: "mentor",
      themeColor: "teal",
      nodeId: "GUIDE.0x02_AUDIT",
      socials: {
        linkedin: "https://linkedin.com",
        github: "https://github.com"
      }
    },
    {
      id: "mentor-3",
      name: "Anjali Nair",
      role: "Full-Stack Interface Architect",
      company: "Decentralized UX Guild",
      specialties: ["NextJS", "React", "GraphQL"],
      tier: "mentor",
      themeColor: "violet",
      nodeId: "GUIDE.0x03_UI",
      socials: {
        linkedin: "https://linkedin.com",
        github: "https://github.com"
      }
    },
    {
      id: "mentor-4",
      name: "Devendra Singh",
      role: "Cloud DevOps & AWS Orchestrator",
      company: "Acropolis Tech Lab",
      specialties: ["AWS_Runway", "Docker", "CI_CD_Pipeline"],
      tier: "mentor",
      themeColor: "teal",
      nodeId: "GUIDE.0x04_DEVOPS",
      socials: {
        linkedin: "https://linkedin.com",
        github: "https://github.com"
      }
    }
  ];

  return (
    <section id="judges-section" className="relative w-full py-24 md:py-32 bg-[#030305] border-t border-white/[0.04] overflow-hidden select-none">
      {/* Background visual layers */}
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
      <div className="absolute top-1/4 left-1/4 w-[700px] h-[350px] bg-brand-violet/5 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[600px] h-[300px] bg-brand-amber/5 blur-[110px] rounded-full pointer-events-none" />

      {/* Decorative Outer Laser Lines */}
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent" />

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
            <span className="w-1.5 h-1.5 bg-brand-amber rounded-full animate-pulse" />
            <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-brand-amber font-semibold">
              [ ECOSYSTEM_VALIDATORS ]
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
            LEADERSHIP & MENTORSHIP
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
            MEET THE SYSTEM ARCHITECTS AND GUILD GUIDES STABILIZING THE SYNAPSE ECOSYSTEM. RECEIVE ACTIVE RUN-TIME FEEDBACK AND ACCELERATE YOUR PROTOTYPE INTO VIABLE PROTOCOLS.
          </motion.p>
        </div>

        {/* 
          JURY BOARD GRID (3-Columns, elevated hierarchy)
        */}
        <div className="mb-20 md:mb-28">
          <div className="flex items-center gap-4 mb-10 select-none">
            <span className="font-mono text-xs text-brand-amber font-extrabold tracking-widest uppercase">[ COHORT_01 // CORE_JURY ]</span>
            <div className="flex-1 h-[1px] bg-brand-amber/15" />
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 justify-items-stretch items-stretch">
            {juryBoard.map((judge, index) => (
              <motion.div
                key={judge.id}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: index * 0.08 }}
                className="h-full"
              >
                <JudgeCard judge={judge} />
              </motion.div>
            ))}
          </div>
        </div>

        {/* 
          MENTORS GRID (4-Columns, scannable, domain specialties)
        */}
        <div className="mb-20 md:mb-28">
          <div className="flex items-center gap-4 mb-10 select-none">
            <span className="font-mono text-xs text-brand-violet font-extrabold tracking-widest uppercase">[ COHORT_02 // ACCELERATION_MENTORS ]</span>
            <div className="flex-1 h-[1px] bg-brand-violet/15" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 justify-items-stretch items-stretch">
            {mentors.map((mentor, index) => (
              <motion.div
                key={mentor.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1], delay: index * 0.06 }}
                className="h-full"
              >
                <JudgeCard judge={mentor} />
              </motion.div>
            ))}
          </div>
        </div>

        {/* 
          High-Conversion Bottom CTA Card
          Direct conversion loop to trigger registration or expert collaboration panel.
        */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="relative w-full max-w-4xl mx-auto rounded-lg border border-white/5 bg-obsidian-950 p-8 md:p-12 overflow-hidden shadow-[0_0_50px_rgba(0,0,0,0.5)] group"
        >
          {/* Internal Blueprint markings */}
          <div className="absolute inset-0 bg-gradient-to-r from-brand-amber/5 via-transparent to-brand-violet/5 opacity-40 pointer-events-none" />
          <div className="absolute top-0 left-0 w-8 h-8 border-t border-l border-white/10" />
          <div className="absolute top-0 right-0 w-8 h-8 border-t border-r border-white/10" />
          <div className="absolute bottom-0 left-0 w-8 h-8 border-b border-l border-white/10" />
          <div className="absolute bottom-0 right-0 w-8 h-8 border-b border-r border-white/10" />

          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8 md:gap-12 text-center md:text-left">
            <div className="flex-1">
              <span className="font-mono text-[9px] text-brand-amber font-bold tracking-widest uppercase block mb-3">
                [ RUN-TIME_COLLABORATION ]
              </span>
              <h3 className="text-2xl md:text-3xl font-black font-display text-white tracking-tight mb-3 uppercase">
                COLLABORATE WITH ECOSYSTEM LEADERS
              </h3>
              <p className="text-xs md:text-sm font-mono text-obsidian-400 max-w-lg leading-relaxed">
                Want to accelerate developer teams or validate emerging crypto-networks and AI models? Join our mentor network or secure your team credentials to build under their oversight.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-stretch gap-4 w-full md:w-auto min-w-[280px]">
              <motion.a
                href="#register"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="flex-1 sm:flex-none text-center px-8 py-3.5 rounded font-mono text-xs font-black tracking-widest text-black bg-brand-amber hover:bg-brand-amber-light transition-colors shadow-[0_0_25px_rgba(249,115,22,0.15)] uppercase select-none"
              >
                SECURE_SYNDICATE_SLOT
              </motion.a>
              <motion.a
                href="mailto:partners@synapse.io?subject=Mentor%20Application%20-%20Synapse%201.0"
                whileHover={{ scale: 1.02, backgroundColor: "rgba(255,255,255,0.03)" }}
                whileTap={{ scale: 0.98 }}
                className="flex-1 sm:flex-none text-center px-8 py-3.5 rounded font-mono text-xs font-bold tracking-widest text-white border border-white/10 hover:border-white/20 transition-all uppercase select-none"
              >
                APPLY_AS_MENTOR
              </motion.a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
