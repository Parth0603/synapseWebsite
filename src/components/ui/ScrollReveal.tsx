"use client";

import React from "react";
import { motion } from "framer-motion";
import { TRANSITION_SYNAPTIC } from "@/utils/motion";

interface ScrollRevealProps {
  children: React.ReactNode;
  delay?: number;
  className?: string;
  yOffset?: number;
}

export function ScrollReveal({
  children,
  delay = 0,
  className = "",
  yOffset = 20,
}: ScrollRevealProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: yOffset }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-10% 0px -10% 0px" }}
      transition={{
        ...TRANSITION_SYNAPTIC,
        delay,
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
