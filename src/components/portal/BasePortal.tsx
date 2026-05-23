"use client";

import React, { useRef, useState, useEffect } from "react";
import { motion, useScroll, useTransform, useSpring, useMotionValue } from "framer-motion";
import { useLenis } from "lenis/react";
import dynamic from "next/dynamic";
import PortalRingsFallback from "./PortalRingsFallback";
import { ErrorBoundary } from "@/components/common/ErrorBoundary";

// Dynamically import PortalCanvas with ssr: false to prevent hydration errors
const PortalCanvas = dynamic(() => import("./PortalCanvas"), {
  ssr: false,
  loading: () => (
    <div className="absolute inset-0 bg-obsidian-950 flex flex-col items-center justify-center z-20">
      <div className="w-12 h-12 rounded-full border border-brand-violet/30 border-t-brand-violet animate-spin mb-4" />
      <span className="font-mono text-xs tracking-widest text-brand-violet/60 uppercase animate-pulse">
        CALIBRATING COGNITIVE TRANSMISSION CORE...
      </span>
    </div>
  )
});

export default function BasePortal() {
  const containerRef = useRef<HTMLDivElement>(null);
  const lenis = useLenis();
  
  const [mounted, setMounted] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [isReducedMotion, setIsReducedMotion] = useState(false);
  const [isDebugMode, setIsDebugMode] = useState(false);
  const [isLocked, setIsLocked] = useState(false);
  const [isCompleted, setIsCompleted] = useState(false);

  // Reference to track real-time scroll direction
  const lastScrollYProgress = useRef(0);
  // High-precision target progress accumulator for linear interpolation (LERP)
  const targetProgress = useRef(0);

  // Monitor raw scroll progress of the sticky section container track
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  // Interactive, physics-smoothed progress driving all portal animations
  const progressValue = useMotionValue(0);
  const smoothProgress = useSpring(progressValue, {
    damping: 40,
    stiffness: 180,
    mass: 0.8
  });

  // Narrative Card Transitions synced to interactive progress
  // Card 1: Emerge into transition (0.02 to 0.35)
  const textOpacity1 = useTransform(smoothProgress, [0.02, 0.08, 0.28, 0.35], [0, 1, 1, 0]);
  const textY1 = useTransform(smoothProgress, [0.02, 0.08, 0.28, 0.35], [25, 0, 0, -25]);

  // Card 2: Deep transmission inside the tunnel (0.35 to 0.68)
  const textOpacity2 = useTransform(smoothProgress, [0.35, 0.42, 0.62, 0.68], [0, 1, 1, 0]);
  const textY2 = useTransform(smoothProgress, [0.35, 0.42, 0.62, 0.68], [25, 0, 0, -25]);

  // Card 3: Approaching grid gateway exit (0.68 to 0.90)
  const textOpacity3 = useTransform(smoothProgress, [0.68, 0.75, 0.85, 0.90], [0, 1, 1, 0]);
  const textY3 = useTransform(smoothProgress, [0.68, 0.75, 0.85, 0.90], [25, 0, 0, -25]);

  // Global Blueprint HUD border opacity transform
  const hudOpacity = useTransform(smoothProgress, [0, 0.15, 0.8, 0.90], [0, 0.45, 0.45, 0]);

  // Symmetrical Exit Cross-Fade: Portal fades and expands slightly as exit approach concludes (0.85 to 0.98)
  const portalOpacity = useTransform(smoothProgress, [0.85, 0.98], [1, 0]);
  const portalScale = useTransform(smoothProgress, [0.85, 0.98], [1, 1.03]);

  // Synchronize progressValue in mobile or reduced motion mode
  useEffect(() => {
    if (!mounted) return;
    
    if (isMobile || isReducedMotion) {
      const unsubscribe = scrollYProgress.on("change", (v) => {
        progressValue.set(v);
      });
      return () => unsubscribe();
    }
  }, [mounted, isMobile, isReducedMotion, scrollYProgress, progressValue]);

  // Bidirectional Scroll Interception & Snap Controller
  useEffect(() => {
    if (!mounted || isMobile || isReducedMotion) return;

    const handleScrollProgress = (v: number) => {
      const direction = v > lastScrollYProgress.current ? "down" : "up";
      lastScrollYProgress.current = v;

      // Case 1: Scrolling DOWN from Hero into Portal -> Lock scroll and traverse forward
      if (direction === "down" && v > 0.02 && v < 0.95 && !isLocked && !isCompleted) {
        setIsLocked(true);
        lenis?.stop();
        targetProgress.current = 0;
        progressValue.set(0);
        
        // Perfectly align viewport with the portal sticky block
        if (containerRef.current) {
          lenis?.scrollTo(containerRef.current, {
            duration: 0.5,
            immediate: false,
            force: true
          });
        }
      }

      // Case 2: Scrolling UP from Sponsors into Portal -> Lock scroll and traverse backward (replay)
      if (direction === "up" && v < 0.97 && v > 0.05 && !isLocked && isCompleted) {
        setIsLocked(true);
        setIsCompleted(false);
        lenis?.stop();
        targetProgress.current = 1.0;
        progressValue.set(1.0); // Snap animation to end of the corridor in reverse
        
        // Perfectly align viewport with the portal sticky block
        if (containerRef.current) {
          lenis?.scrollTo(containerRef.current, {
            duration: 0.5,
            immediate: false,
            force: true
          });
        }
      }
    };

    const unsubscribe = scrollYProgress.on("change", handleScrollProgress);
    return () => unsubscribe();
  }, [mounted, isMobile, isReducedMotion, isCompleted, isLocked, lenis, scrollYProgress, progressValue]);

  // Keyboard, mouse wheel, and touch swipe event listeners when portal is locked
  useEffect(() => {
    if (!isLocked) return;

    let rafId: number;
    const lerpFactor = 0.06; // Electromagnetic fluid corridor resistance

    const updateProgress = () => {
      const current = progressValue.get();
      const target = targetProgress.current;
      const diff = target - current;

      if (Math.abs(diff) > 0.00005) {
        progressValue.set(current + diff * lerpFactor);
      } else if (current !== target) {
        progressValue.set(target);
      }

      rafId = requestAnimationFrame(updateProgress);
    };

    rafId = requestAnimationFrame(updateProgress);

    const handleWheel = (e: WheelEvent) => {
      e.preventDefault();
      
      let normalizedDelta = e.deltaY;
      if (Math.abs(e.deltaY) >= 50) {
        // Physical wheel: damp heavily to prevent big jumps
        normalizedDelta = Math.sign(e.deltaY) * 12;
      } else {
        // Trackpad: damp moderately
        normalizedDelta = e.deltaY * 0.45;
      }
      
      const sensitivity = 0.00055;
      const delta = normalizedDelta * sensitivity;
      targetProgress.current = Math.max(0, Math.min(1, targetProgress.current + delta));

      const currentVal = progressValue.get();
      if (e.deltaY < 0 && targetProgress.current === 0 && currentVal < 0.0001) {
        // User scrolled UP at progress 0 -> Release scroll upwards to Hero
        setIsLocked(false);
        setIsCompleted(false);
        lenis?.start();
        
        // Scroll slightly above the trigger threshold to let the user return to Hero
        const scrollTarget = (containerRef.current?.offsetTop || 0) - 150;
        window.scrollTo({ top: scrollTarget, behavior: "smooth" });
      } else if (e.deltaY > 0 && targetProgress.current >= 0.97 && currentVal > 0.96) {
        // User scrolled DOWN at progress near completion -> Release scroll downwards to Sponsors
        setIsLocked(false);
        setIsCompleted(true);
        lenis?.start();
        
        const sponsorsSec = document.getElementById("sponsors-section");
        if (sponsorsSec) {
          lenis?.scrollTo(sponsorsSec, {
            duration: 1.0,
            easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t))
          });
        }
      }
    };

    const handleTouchMove = (e: TouchEvent) => {
      e.preventDefault();
    };

    const handleKeyDown = (e: KeyboardEvent) => {
      const keys = ["ArrowDown", "ArrowUp", "Space", "PageDown", "PageUp"];
      if (keys.includes(e.key)) {
        e.preventDefault();
        
        const step = 0.08;
        if (e.key === "ArrowDown" || e.key === "Space" || e.key === "PageDown") {
          targetProgress.current = Math.min(1, targetProgress.current + step);
        } else if (e.key === "ArrowUp" || e.key === "PageUp") {
          targetProgress.current = Math.max(0, targetProgress.current - step);
        }

        const currentVal = progressValue.get();
        if (e.key === "ArrowUp" && targetProgress.current === 0 && currentVal < 0.0001) {
          setIsLocked(false);
          setIsCompleted(false);
          lenis?.start();
          const scrollTarget = (containerRef.current?.offsetTop || 0) - 150;
          window.scrollTo({ top: scrollTarget, behavior: "smooth" });
        } else if ((e.key === "ArrowDown" || e.key === "Space") && targetProgress.current >= 0.97 && currentVal > 0.96) {
          setIsLocked(false);
          setIsCompleted(true);
          lenis?.start();
          const sponsorsSec = document.getElementById("sponsors-section");
          if (sponsorsSec) {
            lenis?.scrollTo(sponsorsSec, { duration: 1.0 });
          }
        }
      }
    };

    window.addEventListener("wheel", handleWheel, { passive: false });
    window.addEventListener("touchmove", handleTouchMove, { passive: false });
    window.addEventListener("keydown", handleKeyDown, { passive: false });

    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener("wheel", handleWheel);
      window.removeEventListener("touchmove", handleTouchMove);
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isLocked, lenis, progressValue, isCompleted]);

  // Reset completed state if user scrolls back up to the absolute top of the page
  useEffect(() => {
    if (!mounted) return;
    const handleGlobalScroll = () => {
      const scrollY = window.scrollY;
      if (scrollY < 100 && isCompleted) {
        setIsCompleted(false);
        targetProgress.current = 0;
        progressValue.set(0);
      }
    };
    window.addEventListener("scroll", handleGlobalScroll);
    return () => window.removeEventListener("scroll", handleGlobalScroll);
  }, [mounted, isCompleted, progressValue]);

  // Accessibility Skip portal button
  const handleSkip = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    targetProgress.current = 1;
    progressValue.set(1);
    setIsLocked(false);
    setIsCompleted(true);
    lenis?.start();
    const sponsorsSec = document.getElementById("sponsors-section");
    if (sponsorsSec) {
      lenis?.scrollTo(sponsorsSec, { duration: 0.8 });
    }
  };

  // Client side initialization hooks for hydration safety and system audits
  useEffect(() => {
    setMounted(true);

    const handleResize = () => {
      setIsMobile(window.innerWidth < 1024);
    };
    handleResize();
    window.addEventListener("resize", handleResize);

    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    setIsReducedMotion(mediaQuery.matches);
    const handleMotionChange = (e: MediaQueryListEvent) => {
      setIsReducedMotion(e.matches);
    };
    mediaQuery.addEventListener("change", handleMotionChange);

    const handleDebugKeys = (e: KeyboardEvent) => {
      if (e.shiftKey && (e.key === "D" || e.key === "d")) {
        setIsDebugMode((prev) => !prev);
      }
    };
    window.addEventListener("keydown", handleDebugKeys);

    return () => {
      window.removeEventListener("resize", handleResize);
      mediaQuery.removeEventListener("change", handleMotionChange);
      window.removeEventListener("keydown", handleDebugKeys);
    };
  }, []);

  return (
    <section
      ref={containerRef}
      id="portal-transition-section"
      className="relative w-full h-[150vh] bg-obsidian-950 overflow-visible z-35"
      aria-label="Synapse Grid Portal Traversal"
    >
      {/* Skip Navigation option for accessibility */}
      <a
        href="#sponsors-section"
        onClick={handleSkip}
        className="sr-only focus:not-sr-only absolute top-4 left-4 bg-brand-violet text-white px-4 py-2 rounded font-mono text-xs z-50 focus:ring focus:ring-brand-amber cursor-pointer"
      >
        Skip Portal Transition
      </a>

      {mounted && (
        <motion.div 
          className="sticky top-0 h-screen w-full overflow-hidden flex flex-col justify-center items-center bg-obsidian-950 pointer-events-none"
          style={{ opacity: portalOpacity, scale: portalScale }}
        >
          {isReducedMotion ? (
            <PortalRingsFallback progress={smoothProgress} isReducedMotion={true} />
          ) : isMobile ? (
            <PortalRingsFallback progress={smoothProgress} isReducedMotion={false} />
          ) : (
            <ErrorBoundary fallback={<PortalRingsFallback progress={smoothProgress} isReducedMotion={false} />}>
              <PortalCanvas scrollYProgress={smoothProgress} isMobile={isMobile} />
            </ErrorBoundary>
          )}

          {/* Global CRT Grid overlay plates mapping depth */}
          <div 
            className="absolute inset-0 z-25 pointer-events-none opacity-[0.03] select-none"
            style={{
              backgroundImage: "radial-gradient(ellipse at center, rgba(124,58,237,0.15) 0%, transparent 80%), linear-gradient(rgba(18,16,16,0) 50%, rgba(0,0,0,0.25) 50%)",
              backgroundSize: "100% 100%, 100% 4px"
            }}
          />

          {/* Dynamic Static HUD Blueprint borders */}
          <motion.div 
            className="absolute inset-x-8 md:inset-x-16 inset-y-12 border border-brand-violet/20 pointer-events-none rounded z-30 flex justify-between p-4"
            style={{ opacity: hudOpacity }}
          >
            <div className="h-full flex flex-col justify-between text-[9px] font-mono text-brand-violet/60">
              <span>[ SYS.CORRIDOR_V.1.0 ]</span>
              <span>[ AXIS_Z.TRAVERSAL ]</span>
            </div>
            <div className="h-full flex flex-col justify-between text-[9px] font-mono text-brand-violet/60 text-right">
              <span>[ SYNERGIES_LOCKED ]</span>
              <span>[ DEPTH_ALIGNMENT ]</span>
            </div>
          </motion.div>

          {/* Atmospheric Depth Shadows / Linear Gradient Fog sheets */}
          <div className="absolute top-0 inset-x-0 h-40 bg-gradient-to-b from-obsidian-950 via-obsidian-950/80 to-transparent z-25 pointer-events-none" />
          <div className="absolute bottom-0 inset-x-0 h-40 bg-gradient-to-t from-obsidian-950 via-obsidian-950/80 to-transparent z-25 pointer-events-none" />

          {/* Volumetric Floor Reflection Illusion Plate */}
          <div 
            className="absolute bottom-0 inset-x-0 h-48 pointer-events-none z-24 opacity-[0.28] select-none"
            style={{
              backgroundImage: "radial-gradient(ellipse at bottom, rgba(124,58,237,0.18) 0%, rgba(5,5,12,0.8) 70%, #05050C 100%)",
              mixBlendMode: "screen"
            }}
          />

          {/* Cinematic Narrative Floating Headings Stack */}
          <div className="absolute inset-0 flex items-center justify-center z-30 pointer-events-none">
              
              {/* Narrative Prompt Card 1 */}
              <motion.div
                className="absolute text-center max-w-xl px-6 flex flex-col items-center"
                style={{
                  opacity: textOpacity1,
                  y: textY1,
                  willChange: "transform, opacity"
                }}
              >
                <span className="font-mono text-[10px] tracking-[0.3em] text-brand-amber font-semibold uppercase mb-3">
                  Initializing Handshake
                </span>
                <h2 className="text-xl md:text-3xl font-extrabold tracking-tight text-white mb-2 font-display">
                  DELVING DEEPER
                </h2>
                <p className="text-xs md:text-sm text-obsidian-400 font-mono tracking-wide leading-relaxed">
                  Establishing a high-fidelity consensus channel to synthesize computing protocols. Prepare for synchronization.
                </p>
              </motion.div>

              {/* Narrative Prompt Card 2 */}
              <motion.div
                className="absolute text-center max-w-xl px-6 flex flex-col items-center"
                style={{
                  opacity: textOpacity2,
                  y: textY2,
                  willChange: "transform, opacity"
                }}
              >
                <span className="font-mono text-[10px] tracking-[0.3em] text-brand-violet font-semibold uppercase mb-3">
                  Grid Compiling
                </span>
                <h2 className="text-xl md:text-3xl font-extrabold tracking-tight text-white mb-2 font-display">
                  TRANSLATING ECOSYSTEMS
                </h2>
                <p className="text-xs md:text-sm text-obsidian-400 font-mono tracking-wide leading-relaxed">
                  Consensus packets validated. Structural vector grids are converging to reveal the foundation pillars.
                </p>
              </motion.div>

              {/* Narrative Prompt Card 3 */}
              <motion.div
                className="absolute text-center max-w-xl px-6 flex flex-col items-center"
                style={{
                  opacity: textOpacity3,
                  y: textY3,
                  willChange: "transform, opacity"
                }}
              >
                <span className="font-mono text-[10px] tracking-[0.3em] text-brand-amber font-semibold uppercase mb-3">
                  Gateways Aligned
                </span>
                <h2 className="text-xl md:text-3xl font-extrabold tracking-tight text-white mb-2 font-display">
                  WELCOME TO THE SYNAPSE
                </h2>
                <p className="text-xs md:text-sm text-obsidian-400 font-mono tracking-wide leading-relaxed">
                  Visual portals aligned. Emerging into the core sponsor network ecosystem. Ready for launch.
                </p>
              </motion.div>

            </div>

          {/* Development Audit HUD - Activated with Shift + D */}
          {isDebugMode && (
            <div className="absolute top-4 right-4 bg-black/85 border border-dashed border-red-500 rounded p-4 font-mono text-[10px] text-red-400 z-50 leading-relaxed shadow-xl pointer-events-auto">
              <h3 className="font-bold border-b border-red-500/40 pb-1 mb-2">SYNAPSE PORTAL DIAGNOSTICS</h3>
              <p>PORTAL_PROGRESS: {progressValue.get().toFixed(4)}</p>
              <p>SMOOTH_SPRING_VAL: {smoothProgress.get().toFixed(4)}</p>
              <p>LOCK_STATE: {isLocked ? "LOCKED" : "UNLOCKED"}</p>
              <p>COMPLETED_STATE: {isCompleted ? "TRUE" : "FALSE"}</p>
              <p>VIEWPORT: {isMobile ? "MOBILE_COLLAPSED" : "DESKTOP_FULL"}</p>
              <p>REDUCED_MOTION: {isReducedMotion ? "ACTIVE" : "INACTIVE"}</p>
              <p className="text-gray-400 mt-2 italic text-[9px]">Press Shift + D to close</p>
            </div>
          )}
        </motion.div>
      )}
    </section>
  );
}
