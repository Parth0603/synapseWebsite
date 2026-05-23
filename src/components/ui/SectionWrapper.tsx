import React from "react";
import { cn } from "@/utils/cn";

interface SectionWrapperProps {
  children: React.ReactNode;
  id?: string;
  className?: string;
  showDividers?: boolean;
}

export function SectionWrapper({
  children,
  id,
  className = "",
  showDividers = true,
}: SectionWrapperProps) {
  return (
    <section
      id={id}
      className={cn(
        "relative py-24 md:py-32 w-full overflow-hidden bg-obsidian-950",
        className
      )}
    >
      {/* Soft Baseline Section Spotlight to cure visual coldness */}
      <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-full max-w-4xl h-80 rounded-full bg-brand-violet/[0.015] blur-[120px] pointer-events-none" />

      {/* Structural Framing Lines & Retro Telemetry */}
      {showDividers && (
        <>
          <div className="absolute inset-x-0 top-0 h-[1px] bg-white/[0.04] pointer-events-none" />
          <div className="absolute inset-x-0 bottom-0 h-[1px] bg-white/[0.04] pointer-events-none" />
          
          {/* Symmetrical Left/Right Guide Channels */}
          <div className="absolute left-[64px] inset-y-0 w-[1px] bg-white/[0.015] hidden xl:block pointer-events-none" />
          <div className="absolute right-[64px] inset-y-0 w-[1px] bg-white/[0.015] hidden xl:block pointer-events-none" />

          {/* Retro-Tech Dashboard Metadata Indicators */}
          <div className="absolute top-0 left-20 font-mono text-[7px] md:text-[8px] text-slate-500 tracking-[0.25em] py-1 pointer-events-none hidden md:block select-none">
            [ LOC_COORD: {id ? `0x${id.length.toString(16).toUpperCase().padStart(2, "0")}` : "0x00"} // STATE: SYNCHRONIZED ]
          </div>
          <div className="absolute top-0 right-20 font-mono text-[7px] md:text-[8px] text-slate-500 tracking-[0.25em] py-1 pointer-events-none hidden md:block select-none">
            [ SEC_ANCHOR: {id ? id.toUpperCase() : "MODULE"} ]
          </div>
        </>
      )}
      
      {/* Layout Grid Bounding box */}
      <div className="container mx-auto px-6 max-w-[1200px] relative z-10">
        {children}
      </div>
    </section>
  );
}
