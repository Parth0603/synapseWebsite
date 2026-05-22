"use client";

import React from "react";
import { motion } from "framer-motion";
import TrackCard, { Track } from "./TrackCard";

interface TrackGridProps {
  tracks: Track[];
}

const gridVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.25, 1, 0.5, 1] // High-fidelity decelerated ease
    }
  }
};

export default function TrackGrid({ tracks }: TrackGridProps) {
  return (
    <motion.div
      variants={gridVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 max-w-6xl w-full mx-auto"
    >
      {tracks.map((track, index) => (
        <motion.div
          key={track.id}
          variants={cardVariants}
          className="w-full h-full"
        >
          <TrackCard track={track} index={index} />
        </motion.div>
      ))}
    </motion.div>
  );
}
