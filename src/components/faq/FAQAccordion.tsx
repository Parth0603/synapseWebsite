"use client";

import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/utils/cn";

interface FAQAccordionProps {
  id: string;
  num: string;
  question: string;
  answer: string;
  isOpen: boolean;
  onToggle: () => void;
  isDimmed?: boolean;
}

export default function FAQAccordion({
  num,
  question,
  answer,
  isOpen,
  onToggle,
  isDimmed,
}: FAQAccordionProps) {
  return (
    <div
      className={cn(
        "border border-white/5 bg-obsidian-900/40 backdrop-blur-md rounded-lg overflow-hidden transition-all duration-300",
        isOpen 
          ? "border-brand-violet/30 shadow-[0_0_20px_rgba(124,58,237,0.05)] bg-obsidian-900/60 opacity-100" 
          : cn("hover:border-white/10 hover:bg-obsidian-900/50", isDimmed ? "opacity-60" : "opacity-90")
      )}
    >
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between py-5 px-6 text-left focus:outline-none focus:ring-1 focus:ring-brand-violet/50 group"
        aria-expanded={isOpen}
      >
        <div className="flex items-start gap-4">
          <span className="font-mono text-xs tracking-wider text-brand-violet/50 mt-1 select-none font-semibold">
            [{num}]
          </span>
          <h3 className="text-sm md:text-base font-semibold text-white tracking-wide leading-snug group-hover:text-brand-violet/90 transition-colors">
            {question}
          </h3>
        </div>
        
        {/* Animated Chevron Indicator */}
        <div
          className={cn(
            "w-8 h-8 rounded-full border border-white/5 flex items-center justify-center flex-shrink-0 transition-all duration-300 ml-4 group-hover:border-brand-violet/30",
            isOpen ? "bg-brand-violet/10 border-brand-violet/30 text-brand-violet" : "text-obsidian-400"
          )}
        >
          <svg
            className={cn("w-4 h-4 transform transition-transform duration-300", isOpen ? "rotate-180" : "rotate-0")}
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
          </svg>
        </div>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{
              height: "auto",
              opacity: 1,
              transition: {
                height: { duration: 0.35, ease: [0.16, 1, 0.3, 1] },
                opacity: { duration: 0.25, delay: 0.05 }
              }
            }}
            exit={{
              height: 0,
              opacity: 0,
              transition: {
                height: { duration: 0.3, ease: [0.16, 1, 0.3, 1] },
                opacity: { duration: 0.15 }
              }
            }}
            className="overflow-hidden"
          >
            <div className="px-6 pb-6 pl-[52px] border-t border-white/[0.03]">
              <p className="text-xs md:text-sm text-obsidian-400 font-mono tracking-wide leading-relaxed">
                {answer}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
