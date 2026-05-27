"use client";

import React from "react";
import { motion } from "framer-motion";

// ─── Types ────────────────────────────────────────────────────────────────────
interface SponsorTier {
  id: string;
  label: string;
  dotColor: string;
  textColor: string;
  borderColor: string;
  glowColor: string;
  sponsors: {
    id: string;
    name: string;
    subtitle?: string;
    description?: string;
    url: string;
    isPlaceholder?: boolean;
  }[];
}

// ─── Data ─────────────────────────────────────────────────────────────────────
const SPONSOR_TIERS: SponsorTier[] = [
  {
    id: "title",
    label: "TITLE SPONSOR",
    dotColor: "bg-brand-violet",
    textColor: "text-brand-violet",
    borderColor: "border-brand-violet/20",
    glowColor: "rgba(139,92,246,0.08)",
    sponsors: [
      {
        id: "title-open",
        name: "Finding",
        subtitle: "You can be one",
        url: "mailto:partners@synapse.io?subject=Title%20Sponsor%20Inquiry",
        isPlaceholder: true,
      },
    ],
  },
  {
    id: "supporting",
    label: "SUPPORTING PARTNER",
    dotColor: "bg-brand-amber",
    textColor: "text-brand-amber",
    borderColor: "border-brand-amber/20",
    glowColor: "rgba(249,115,22,0.06)",
    sponsors: [
      {
        id: "oranet",
        name: "Oranet AI",
        description:
          "Providing cloud infrastructure support and AWS credits for builders and hackathon teams.",
        url: "https://oranet.ai",
      },
    ],
  },
  {
    id: "food",
    label: "FOOD PARTNER",
    dotColor: "bg-slate-500",
    textColor: "text-slate-400",
    borderColor: "border-white/10",
    glowColor: "rgba(71,85,105,0.06)",
    sponsors: [
      {
        id: "awadh",
        name: "Awadh Foods",
        description:
          "Supporting participant hospitality and food experience during the event.",
        url: "#",
      },
    ],
  },
];

// ─── Animations ───────────────────────────────────────────────────────────────
const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: [0.25, 1, 0.5, 1], delay: i * 0.08 },
  }),
};

// ─── Component ────────────────────────────────────────────────────────────────
export default function SponsorsSection() {
  return (
    <section
      id="sponsors-section"
      className="relative w-full bg-obsidian-950 overflow-hidden py-32 z-30"
      aria-label="SYNAPSE Sponsors & Partners"
    >
      {/* ── Ambient background ── */}
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-brand-violet/30 to-transparent" />
      <div
        className="absolute inset-0 opacity-[0.045] pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(circle at center, rgba(139,92,246,0.18) 1px, transparent 1px)",
          backgroundSize: "28px 28px",
        }}
      />
      <motion.div
        className="absolute top-[10%] left-[-5%] w-[500px] h-[500px] rounded-full pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, rgba(139,92,246,0.07) 0%, transparent 70%)",
        }}
        animate={{ x: [-20, 20, -20], y: [-15, 15, -15] }}
        transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-[10%] right-[-5%] w-[500px] h-[500px] rounded-full pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, rgba(249,115,22,0.05) 0%, transparent 70%)",
        }}
        animate={{ x: [20, -20, 20], y: [15, -15, 15] }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* ── Content ── */}
      <div className="relative z-10 max-w-6xl mx-auto px-6">

        {/* Section header */}
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <span className="inline-block font-mono text-[11px] md:text-xs tracking-[0.4em] text-brand-violet uppercase font-semibold mb-5">
            OUR SPONSORS &amp; PARTNERS
          </span>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.05] mb-5">
            Supported by Our<br className="hidden sm:block" /> Early Partners
          </h2>
          <p className="font-mono text-sm text-obsidian-400 leading-relaxed max-w-xl mx-auto tracking-wide">
            SYNAPSE is proudly backed by ecosystem and hospitality partners
            helping us build a student-first innovation experience.
          </p>
        </motion.div>

        {/* Tiers */}
        <div className="flex flex-col gap-16">
          {SPONSOR_TIERS.map((tier, tierIndex) => (
            <motion.div
              key={tier.id}
              custom={tierIndex}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-60px" }}
              className="flex flex-col items-center gap-8"
            >
              {/* Tier label */}
              <div className="flex items-center gap-3">
                <span className={`w-1.5 h-1.5 rounded-full ${tier.dotColor}`} />
                <span
                  className={`font-mono text-[11px] tracking-[0.35em] uppercase font-bold ${tier.textColor}`}
                >
                  {tier.label}
                </span>
                <span className={`w-1.5 h-1.5 rounded-full ${tier.dotColor}`} />
              </div>

              {/* Cards */}
              <div className="w-full flex justify-center">
                {tier.sponsors.map((sponsor) => (
                  <SponsorCard
                    key={sponsor.id}
                    sponsor={sponsor}
                    tier={tier}
                  />
                ))}
              </div>

              {/* Divider (not after last) */}
              {tierIndex < SPONSOR_TIERS.length - 1 && (
                <div className="w-full max-w-4xl h-px bg-gradient-to-r from-transparent via-white/[0.06] to-transparent mt-2" />
              )}
            </motion.div>
          ))}
        </div>

        {/* CTA block */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.55, delay: 0.15 }}
          className="mt-20 max-w-3xl mx-auto border border-white/[0.08] rounded-xl bg-obsidian-900/40 backdrop-blur-sm p-8 md:p-10 flex flex-col md:flex-row items-center justify-between gap-6"
        >
          <div className="text-center md:text-left">
            <span className="font-mono text-[10px] tracking-[0.3em] text-brand-amber uppercase font-semibold block mb-2">
              BECOME A PARTNER
            </span>
            <h3 className="font-display text-xl md:text-2xl font-bold text-white mb-2">
              Join SYNAPSE as a Sponsor
            </h3>
            <p className="font-mono text-xs text-obsidian-400 leading-relaxed max-w-sm">
              Support Central India's emerging AI &amp; tech hackathon through
              sponsorships, infrastructure, rewards, and community impact.
            </p>
          </div>
          <a
            href="mailto:partners@synapse.io?subject=Synapse%201.0%20Partnership%20Inquiry"
            className="group relative shrink-0 flex items-center gap-2 font-mono text-[11px] tracking-widest text-white uppercase font-bold px-7 py-3.5 rounded-lg border border-brand-violet/30 hover:border-brand-violet/60 hover:bg-brand-violet/10 transition-all duration-300 cursor-pointer overflow-hidden"
          >
            <div className="absolute inset-0 -translate-x-full group-hover:translate-x-0 bg-gradient-to-r from-brand-violet/10 via-brand-violet/5 to-transparent transition-transform duration-500 pointer-events-none" />
            Partner With Us
            <svg
              className="w-3.5 h-3.5 translate-x-0 group-hover:translate-x-1 transition-transform duration-300"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </a>
        </motion.div>
      </div>

      {/* Bottom border */}
      <div className="absolute bottom-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-white/[0.06] to-transparent" />
    </section>
  );
}

// ─── Sponsor Card ─────────────────────────────────────────────────────────────
function SponsorCard({
  sponsor,
  tier,
}: {
  sponsor: SponsorTier["sponsors"][0];
  tier: SponsorTier;
}) {
  return (
    <motion.a
      href={sponsor.url}
      target={sponsor.url.startsWith("mailto") || sponsor.url === "#" ? "_self" : "_blank"}
      rel="noopener noreferrer"
      className={`group relative w-full max-w-xl flex flex-col items-center justify-center text-center rounded-xl border ${tier.borderColor} bg-obsidian-900/50 backdrop-blur-sm overflow-hidden cursor-pointer transition-all duration-300 hover:bg-obsidian-900/80 p-10 md:p-12`}
      whileHover={{ y: -3, scale: 1.01 }}
      transition={{ type: "spring", stiffness: 280, damping: 22 }}
      aria-label={sponsor.name}
    >
      {/* Glow on hover */}
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
        style={{
          background: `radial-gradient(ellipse at center, ${tier.glowColor} 0%, transparent 65%)`,
        }}
      />

      {/* Placeholder dashed border effect */}
      {sponsor.isPlaceholder && (
        <div className="absolute inset-[1px] rounded-xl border border-dashed border-brand-violet/20 pointer-events-none" />
      )}

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center gap-3">
        {sponsor.isPlaceholder ? (
          <>
            {/* Placeholder icon */}
            <div className="w-10 h-10 rounded-full border border-brand-violet/30 flex items-center justify-center mb-2">
              <svg className="w-5 h-5 text-brand-violet/60" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
              </svg>
            </div>
            <span className="font-display text-3xl md:text-4xl font-extrabold text-white tracking-tight">
              {sponsor.name}
            </span>
            {sponsor.subtitle && (
              <span className="font-mono text-sm text-brand-violet/70 tracking-[0.15em] uppercase">
                {sponsor.subtitle}
              </span>
            )}
            <span className="font-mono text-xs text-obsidian-500 tracking-widest uppercase mt-1">
              Click to enquire
            </span>
          </>
        ) : (
          <>
            <span className="font-display text-3xl md:text-4xl font-extrabold text-white tracking-tight group-hover:text-white transition-colors duration-300">
              {sponsor.name}
            </span>
            {sponsor.description && (
              <p className="font-mono text-sm text-obsidian-400 leading-[1.75] max-w-sm mt-1">
                {sponsor.description}
              </p>
            )}
          </>
        )}
      </div>
    </motion.a>
  );
}
