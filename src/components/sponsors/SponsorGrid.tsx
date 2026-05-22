"use client";

import React from "react";
import { motion } from "framer-motion";
import SponsorCard, { Sponsor } from "./SponsorCard";

interface SponsorGridProps {
  sponsors: Sponsor[];
  tier: "alpha" | "consensus" | "peer";
}

const gridVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.06
    }
  }
};

const cardMotionVariants = {
  hidden: { opacity: 0, y: 15 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { 
      duration: 0.45, 
      ease: [0.25, 1, 0.5, 1] // Cinematic decelerated ease
    } 
  }
};

export default function SponsorGrid({ sponsors, tier }: SponsorGridProps) {
  // Filter dataset to isolate the targeted tier
  const filteredSponsors = sponsors.filter((s) => s.tier === tier);

  // Map tier-specific grid column densities
  const gridClasses = {
    alpha: "grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto",
    consensus: "grid grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto",
    peer: "grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 max-w-6xl mx-auto"
  }[tier];

  if (filteredSponsors.length === 0) return null;

  return (
    <motion.div
      variants={gridVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      className={gridClasses}
    >
      {filteredSponsors.map((sponsor, index) => (
        <motion.div
          key={sponsor.id}
          variants={cardMotionVariants}
          className="w-full h-full"
        >
          <SponsorCard sponsor={sponsor} index={index} />
        </motion.div>
      ))}
    </motion.div>
  );
}
