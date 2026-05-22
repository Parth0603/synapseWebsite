"use client";

import React from "react";
import { cn } from "@/utils/cn";

interface MarqueeProps {
  children: React.ReactNode;
  direction?: "left" | "right";
  speed?: number; // Speed in seconds for full loop
  pauseOnHover?: boolean;
  className?: string;
}

export function Marquee({
  children,
  direction = "left",
  speed = 40,
  pauseOnHover = true,
  className = "",
}: MarqueeProps) {
  return (
    <div
      className={cn(
        "group flex overflow-hidden p-2 select-none relative w-full",
        className
      )}
      style={{
        maskImage: "linear-gradient(to right, transparent, white 20%, white 80%, transparent)",
        WebkitMaskImage: "linear-gradient(to right, transparent, white 20%, white 80%, transparent)",
      }}
    >
      {/* Dynamic scrolling tracks */}
      <div
        className={cn(
          "flex shrink-0 min-w-full justify-around items-center gap-16 animate-marquee will-change-transform",
          direction === "right" && "animate-marquee-reverse",
          pauseOnHover && "group-hover:[animation-play-state:paused]"
        )}
        style={{
          animationDuration: `${speed}s`,
        }}
      >
        {children}
      </div>

      {/* Duplicate track to guarantee infinite continuous illusion */}
      <div
        aria-hidden="true"
        className={cn(
          "flex shrink-0 min-w-full justify-around items-center gap-16 animate-marquee will-change-transform",
          direction === "right" && "animate-marquee-reverse",
          pauseOnHover && "group-hover:[animation-play-state:paused]"
        )}
        style={{
          animationDuration: `${speed}s`,
        }}
      >
        {children}
      </div>

      <style jsx global>{`
        @keyframes marquee {
          0% {
            transform: translateX(0%);
          }
          100% {
            transform: translateX(-100%);
          }
        }
        @keyframes marquee-reverse {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(0%);
          }
        }
        .animate-marquee {
          animation: marquee linear infinite;
        }
        .animate-marquee-reverse {
          animation: marquee-reverse linear infinite;
        }
      `}</style>
    </div>
  );
}
