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
      {/* Structural Framing Lines */}
      {showDividers && (
        <>
          <div className="absolute inset-x-0 top-0 h-[1px] bg-white/5 pointer-events-none" />
          <div className="absolute inset-x-0 bottom-0 h-[1px] bg-white/5 pointer-events-none" />
          <div className="absolute left-[64px] inset-y-0 w-[1px] bg-white/[0.02] hidden xl:block pointer-events-none" />
          <div className="absolute right-[64px] inset-y-0 w-[1px] bg-white/[0.02] hidden xl:block pointer-events-none" />
        </>
      )}
      
      {/* Layout Grid Bounding box */}
      <div className="container mx-auto px-6 max-w-[1200px] relative z-10">
        {children}
      </div>
    </section>
  );
}
