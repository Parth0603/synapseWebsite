"use client";

import React from "react";
import { motion } from "framer-motion";
import { MagneticWrapper } from "@/components/common/MagneticWrapper";
import { GlassButton } from "@/components/common/GlassButton";

export function CTAButtonGroup() {
  const containerVariants = {
    hidden: { opacity: 0, y: 15 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring" as const,
        stiffness: 100,
        damping: 18,
        delay: 0.65,
      },
    },
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 py-6 z-40 relative max-w-md mx-auto px-4"
    >
      {/* Primary Action Button - Wrapped in Magnet Hook */}
      <MagneticWrapper range={45} strength={0.3}>
        <GlassButton
          variant="primary"
          glowColor="violet"
          className="w-full sm:w-auto min-w-[200px]"
          onClick={() => {
            const el = document.getElementById("registration");
            if (el) {
              el.scrollIntoView({ behavior: "smooth" });
            }
          }}
        >
          Access Terminal
          <svg
            className="w-4 h-4 ml-1.5 transition-transform duration-300 group-hover:translate-x-1"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M13 10V3L4 14h7v7l9-11h-7z"
            />
          </svg>
        </GlassButton>
      </MagneticWrapper>

      {/* Secondary Information Button - Wrapped in Magnet Hook */}
      <MagneticWrapper range={45} strength={0.3}>
        <GlassButton
          variant="secondary"
          className="w-full sm:w-auto min-w-[200px]"
          onClick={() => {
            const el = document.getElementById("tracks-section");
            if (el) {
              el.scrollIntoView({ behavior: "smooth" });
            }
          }}
        >
          View Specs
          <svg
            className="w-4 h-4 ml-1.5 opacity-60 transition-opacity duration-300 group-hover:opacity-100"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
            />
          </svg>
        </GlassButton>
      </MagneticWrapper>
    </motion.div>
  );
}
