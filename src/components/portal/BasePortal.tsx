"use client";

import React, { useRef, useState, useEffect } from "react";
import {
  motion,
  useScroll,
  useSpring,
  useMotionValue,
  useTransform,
} from "framer-motion";
import { useLenis } from "lenis/react";
import dynamic from "next/dynamic";
import PortalRingsFallback from "./PortalRingsFallback";
import { ErrorBoundary } from "@/components/common/ErrorBoundary";

const PortalCanvas = dynamic(() => import("./PortalCanvas"), {
  ssr: false,
  loading: () => (
    <div className="absolute inset-0 bg-obsidian-950 flex flex-col items-center justify-center z-20">
      <div className="w-12 h-12 rounded-full border border-brand-violet/30 border-t-brand-violet animate-spin mb-4" />
      <span className="font-mono text-xs tracking-widest text-brand-violet/60 uppercase animate-pulse">
        CALIBRATING TRANSMISSION CORE...
      </span>
    </div>
  ),
});

export default function BasePortal() {
  const containerRef = useRef<HTMLDivElement>(null);
  const lenis = useLenis();
  const lenisRef = useRef<typeof lenis | null>(null);
  useEffect(() => { lenisRef.current = lenis; });

  const [mounted, setMounted] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [isReducedMotion, setIsReducedMotion] = useState(false);
  const [isDebugMode, setIsDebugMode] = useState(false);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const progressValue = useMotionValue(0);
  const smoothProgress = useSpring(progressValue, { damping: 38, stiffness: 220, mass: 0.5 });

  const textOpacity = useSpring(
    useTransform(smoothProgress, [0.0, 0.12, 0.45, 0.55], [0, 1, 1, 0]),
    { damping: 40, stiffness: 260 }
  );
  const textY = useSpring(
    useTransform(smoothProgress, [0.0, 0.12, 0.45, 0.55], [15, 0, 0, -15]),
    { damping: 40, stiffness: 260 }
  );

  useEffect(() => {
    if (typeof window === "undefined") return;

    // ─── State ───────────────────────────────────────────────────────────────
    let isLocked = false;
    let isCompleted = false;   // true after forward animation finishes
    let lockDir: "forward" | "backward" = "forward";
    let targetProg = 0;
    let lastProg = 0;
    let rafId: number | null = null;
    let isSnapping = false;

    // ─── RAF lerp ────────────────────────────────────────────────────────────
    const startRaf = () => {
      if (rafId !== null) return;
      const tick = () => {
        const cur = progressValue.get();
        const diff = targetProg - cur;
        progressValue.set(Math.abs(diff) > 0.0001 ? cur + diff * 0.14 : targetProg);
        rafId = requestAnimationFrame(tick);
      };
      rafId = requestAnimationFrame(tick);
    };
    const stopRaf = () => {
      if (rafId !== null) { cancelAnimationFrame(rafId); rafId = null; }
    };

    // ─── Section geometry helpers ─────────────────────────────────────────────
    const stickyBottom = () =>
      (containerRef.current?.offsetTop ?? 0) +
      (containerRef.current?.offsetHeight ?? 0) -
      window.innerHeight;

    const portalBottom = () =>
      (containerRef.current?.offsetTop ?? 0) +
      (containerRef.current?.offsetHeight ?? 0);

    // ─── Exits ───────────────────────────────────────────────────────────────
    const exitForward = () => {
      if (!isLocked) return;
      isLocked = false;
      isCompleted = true;
      stopRaf();
      progressValue.set(1);
      targetProg = 1;
      
      // Sync Lenis scroll position instantly before starting smooth scroll
      const targetY = lockDir === "forward" ? (containerRef.current?.offsetTop ?? 0) : stickyBottom();
      lenisRef.current?.scrollTo(targetY, { immediate: true });
      
      lenisRef.current?.start();
      lenisRef.current?.scrollTo(portalBottom(), {
        duration: 0.6,
        easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      });
    };

    const exitBackward = () => {
      if (!isLocked) return;
      isLocked = false;
      isCompleted = false;
      stopRaf();
      progressValue.set(0);
      targetProg = 0;
      
      // Sync Lenis scroll position instantly before starting smooth scroll
      const targetY = lockDir === "forward" ? (containerRef.current?.offsetTop ?? 0) : stickyBottom();
      lenisRef.current?.scrollTo(targetY, { immediate: true });
      
      lenisRef.current?.start();
      lenisRef.current?.scrollTo(
        Math.max(0, (containerRef.current?.offsetTop ?? 0) - 10),
        { duration: 0.5 }
      );
    };

    // ─── Enter lock ──────────────────────────────────────────────────────────
    const enterLock = (dir: "forward" | "backward") => {
      if (isLocked) return;
      isLocked = true;
      lockDir = dir;

      lenisRef.current?.stop();

      const targetY = dir === "forward" ? (containerRef.current?.offsetTop ?? 0) : stickyBottom();

      // Ensure native and Lenis scroll positions are perfectly synced
      lenisRef.current?.scrollTo(targetY, { immediate: true });
      window.scrollTo({ top: targetY });

      if (dir === "forward") {
        targetProg = 0;
        progressValue.set(0);
      } else {
        // Start backward at 0.75 so portal rings are instantly visible
        targetProg = 0.75;
        progressValue.set(0.75);
      }

      startRaf();
    };

    // ─── Wheel handler (capture phase) ───────────────────────────────────────
    const handleWheel = (e: WheelEvent) => {
      // Pre-lock: detect backward entry near portal boundary
      if (!isLocked && isCompleted && e.deltaY < 0) {
        if (window.scrollY <= portalBottom() + window.innerHeight * 0.8) {
          e.stopImmediatePropagation();
          e.preventDefault();
          enterLock("backward");
          return;
        }
        return;
      }

      // Pre-lock: detect forward entry
      if (!isLocked && !isCompleted && e.deltaY > 0) {
        const portalTop = containerRef.current?.offsetTop ?? 0;
        if (window.scrollY >= portalTop - 50 && window.scrollY <= portalTop + 200) {
          e.stopImmediatePropagation();
          e.preventDefault();
          enterLock("forward");
          return;
        }
        return;
      }

      // Locked: drive animation
      if (!isLocked) return;
      e.stopImmediatePropagation();
      e.preventDefault();

      const delta = Math.abs(e.deltaY) >= 40 ? Math.sign(e.deltaY) * 22 : e.deltaY * 0.75;
      targetProg = Math.max(0, Math.min(1, targetProg + delta * 0.0012));
      const cur = progressValue.get();

      if (lockDir === "forward") {
        if (e.deltaY > 0 && targetProg >= 0.98 && cur > 0.95) exitForward();
        if (e.deltaY < 0 && targetProg <= 0 && cur < 0.01) exitBackward();
      } else {
        if (e.deltaY < 0 && targetProg <= 0 && cur < 0.01) exitBackward();
        if (e.deltaY > 0 && targetProg >= 0.98 && cur > 0.95) exitForward();
      }
    };

    const handleTouchMove = (e: TouchEvent) => {
      if (isLocked) { e.stopImmediatePropagation(); e.preventDefault(); }
    };

    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isLocked) return;
      const keys = ["ArrowDown", "ArrowUp", " ", "PageDown", "PageUp"];
      if (!keys.includes(e.key)) return;
      e.preventDefault();
      const step = 0.12;
      const down = e.key === "ArrowDown" || e.key === " " || e.key === "PageDown";
      targetProg = down ? Math.min(1, targetProg + step) : Math.max(0, targetProg - step);
      const cur = progressValue.get();
      if (down && targetProg >= 0.98 && cur > 0.95) exitForward();
      if (!down && targetProg <= 0 && cur < 0.01) exitBackward();
    };

    // ─── Native Scroll Snap-back (Blocks trackpad momentum / inertia scroll) ──────
    const handleNativeScroll = () => {
      if (!isLocked) return;
      if (isSnapping) return;

      const targetY = lockDir === "forward" ? (containerRef.current?.offsetTop ?? 0) : stickyBottom();
      if (Math.abs(window.scrollY - targetY) > 1) {
        isSnapping = true;
        window.scrollTo({ top: targetY });
        requestAnimationFrame(() => {
          isSnapping = false;
        });
      }
    };

    window.addEventListener("wheel", handleWheel, { passive: false, capture: true });
    window.addEventListener("touchmove", handleTouchMove, { passive: false, capture: true });
    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("scroll", handleNativeScroll, { passive: false });

    // ─── scrollYProgress observer (Fallback for slow scrolls) ───────────────────
    const unsubscribe = scrollYProgress.on("change", (v: number) => {
      const direction = v > lastProg ? "down" : "up";
      lastProg = v;

      if (v < 0.005 && !isLocked) {
        isCompleted = false;
        targetProg = 0;
        progressValue.set(0);
        return;
      }

      // Forward lock fallback
      if (direction === "down" && v > 0.01 && v < 0.96 && !isLocked && !isCompleted) {
        enterLock("forward");
        return;
      }

      // Backward lock fallback
      if (direction === "up" && v < 1.0 && v > 0.0 && !isLocked && isCompleted) {
        enterLock("backward");
        return;
      }
    });

    return () => {
      unsubscribe();
      stopRaf();
      window.removeEventListener("wheel", handleWheel, { capture: true });
      window.removeEventListener("touchmove", handleTouchMove, { capture: true });
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("scroll", handleNativeScroll);
    };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [mounted, isMobile, isReducedMotion]);

  // Mobile / reduced-motion: direct sync, no lock
  useEffect(() => {
    if (!mounted || !(isMobile || isReducedMotion)) return;
    const unsub = scrollYProgress.on("change", (v: number) => progressValue.set(v));
    return () => unsub();
  }, [mounted, isMobile, isReducedMotion, scrollYProgress, progressValue]);

  useEffect(() => {
    setMounted(true);
    const onResize = () => setIsMobile(window.innerWidth < 1024);
    onResize();
    window.addEventListener("resize", onResize);
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setIsReducedMotion(mq.matches);
    const onMq = (e: MediaQueryListEvent) => setIsReducedMotion(e.matches);
    mq.addEventListener("change", onMq);
    const onDebug = (e: KeyboardEvent) => {
      if (e.shiftKey && (e.key === "D" || e.key === "d")) setIsDebugMode((p) => !p);
    };
    window.addEventListener("keydown", onDebug);
    return () => {
      window.removeEventListener("resize", onResize);
      mq.removeEventListener("change", onMq);
      window.removeEventListener("keydown", onDebug);
    };
  }, []);

  const handleSkip = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    progressValue.set(1);
    lenis?.start();
    if (containerRef.current) {
      lenis?.scrollTo(
        containerRef.current.offsetTop + containerRef.current.offsetHeight,
        { duration: 0.6 }
      );
    }
  };

  return (
    <section
      ref={containerRef}
      id="portal-transition-section"
      className="relative w-full h-[180vh] bg-obsidian-950 overflow-visible"
      style={{ zIndex: 35 }}
      aria-label="Synapse Dimensional Portal"
    >
      <a
        href="#sponsors-section"
        onClick={handleSkip}
        className="sr-only focus:not-sr-only absolute top-4 left-4 bg-brand-violet text-white px-4 py-2 rounded font-mono text-xs z-50 focus:ring focus:ring-brand-amber cursor-pointer"
      >
        Skip Portal
      </a>

      <div className="sticky top-0 h-screen w-full overflow-hidden bg-obsidian-950">
        {mounted && !isMobile && !isReducedMotion ? (
          <ErrorBoundary fallback={<PortalRingsFallback progress={smoothProgress} isReducedMotion={false} />}>
            <PortalCanvas scrollYProgress={smoothProgress} isMobile={isMobile} />
          </ErrorBoundary>
        ) : (
          <PortalRingsFallback progress={smoothProgress} isReducedMotion={isReducedMotion} />
        )}

        <div className="absolute inset-0 pointer-events-none select-none" style={{ zIndex: 25, opacity: 0.03, backgroundImage: "linear-gradient(rgba(18,16,16,0) 50%, rgba(0,0,0,0.25) 50%)", backgroundSize: "100% 4px" }} />
        <div className="absolute top-0 inset-x-0 h-36 pointer-events-none" style={{ zIndex: 26, background: "linear-gradient(to bottom, rgba(5,5,12,1) 0%, rgba(5,5,12,0.5) 60%, transparent 100%)" }} />
        <div className="absolute bottom-0 inset-x-0 h-36 pointer-events-none" style={{ zIndex: 26, background: "linear-gradient(to top, rgba(5,5,12,0.9) 0%, rgba(5,5,12,0.4) 60%, transparent 100%)" }} />

        <motion.div
          className="absolute bottom-0 inset-x-0 h-44 pointer-events-none select-none origin-bottom"
          style={{ zIndex: 24, mixBlendMode: "screen" as const }}
          animate={{ opacity: [0.2, 0.32, 0.2], scaleY: [1.0, 1.04, 1.0] }}
          transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut" }}
        >
          <div className="w-full h-full" style={{ background: "radial-gradient(ellipse at bottom, rgba(124,58,237,0.20) 0%, rgba(5,5,12,0.7) 65%, transparent 100%)" }} />
        </motion.div>

        <motion.div className="absolute inset-x-8 md:inset-x-14 inset-y-10 border border-brand-violet/15 pointer-events-none rounded flex justify-between p-3" style={{ zIndex: 30, opacity: 0.25 }}>
          <div className="h-full flex flex-col justify-between text-[8px] font-mono text-brand-violet/50">
            <span>[ SYS.CORRIDOR_V.1 ]</span><span>[ AXIS_Z ]</span>
          </div>
          <div className="h-full flex flex-col justify-between text-[8px] font-mono text-brand-violet/50 text-right">
            <span>[ NODE_SYNC ]</span><span>[ DEPTH_LOCK ]</span>
          </div>
        </motion.div>

        <div className="absolute inset-0 flex items-center justify-center pointer-events-none" style={{ zIndex: 32 }}>
          <motion.div className="text-center max-w-lg px-6 flex flex-col items-center" style={{ opacity: textOpacity, y: textY, willChange: "transform, opacity" }}>
            <span className="font-mono text-[9px] tracking-[0.38em] text-brand-amber font-semibold uppercase mb-2">SYNAPSE CONVERGENCE</span>
            <h2 className="text-2xl md:text-4xl font-extrabold tracking-tight text-white font-display mb-2">TRAVERSING THE CORE</h2>
          </motion.div>
        </div>

        {isDebugMode && (
          <div className="absolute top-4 right-4 bg-black/85 border border-dashed border-red-500 rounded p-4 font-mono text-[10px] text-red-400 leading-relaxed shadow-xl pointer-events-auto" style={{ zIndex: 50 }}>
            <h3 className="font-bold border-b border-red-500/40 pb-1 mb-2">PORTAL DEBUG</h3>
            <p>PROGRESS: {smoothProgress.get().toFixed(3)}</p>
            <p>MOBILE: {isMobile ? "YES" : "NO"}</p>
            <p className="text-gray-400 mt-2 italic text-[9px]">Shift+D to toggle</p>
          </div>
        )}
      </div>
    </section>
  );
}
