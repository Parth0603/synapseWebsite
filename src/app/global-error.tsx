"use client";

import React from "react";
import { AlertCircle, RefreshCw, Terminal, Home } from "lucide-react";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  React.useEffect(() => {
    console.error("SYNAPSE Global Root Crash Captured:", error);
  }, [error]);

  const handleRootReset = () => {
    reset();
    if (typeof window !== "undefined") {
      window.location.href = "/";
    }
  };

  return (
    <html lang="en">
      <body className="bg-black text-slate-100 font-mono min-h-screen relative antialiased flex items-center justify-center p-6 select-none overflow-hidden">
        {/* Cinematic Matrix Grid Overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.005)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.005)_1px,transparent_1px)] bg-[size:30px_30px] pointer-events-none" />

        {/* Ambient Retro Neon Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-violet-900/10 blur-[140px] pointer-events-none" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[350px] rounded-full bg-amber-500/5 blur-[120px] pointer-events-none" />

        {/* Diagnostic Telemetry Guide Overlays */}
        <div className="absolute top-6 left-6 text-[10px] text-slate-600 tracking-widest font-mono">
          [SYS_ALERT: CORE_CRITICAL]
        </div>
        <div className="absolute top-6 right-6 text-[10px] text-slate-600 tracking-widest font-mono">
          SECTOR: ROOT_RESCUE
        </div>
        <div className="absolute bottom-6 left-6 text-[10px] text-slate-600 tracking-widest font-mono">
          SYNAPSE // OPERATING_MODE: SAFE_FALLBACK
        </div>

        <div className="relative z-10 w-full max-w-lg bg-zinc-950/80 border border-violet-500/20 p-8 rounded-xl backdrop-blur-xl shadow-2xl flex flex-col items-center text-center">
          <div className="p-4 bg-violet-500/10 rounded-full border border-violet-500/25 mb-6 text-violet-400 animate-pulse">
            <AlertCircle className="w-10 h-10" />
          </div>

          <h1 className="font-sans text-xl md:text-2xl font-bold tracking-widest uppercase text-violet-300 mb-2">
            SYNAPSE Core Crash
          </h1>

          <p className="text-xs text-slate-400 font-mono mb-8 max-w-sm leading-relaxed">
            The application experienced a terminal sector exception. Core threads have been suspended to prevent layout instability.
          </p>

          {/* Diagnostic Log Stack */}
          <div className="w-full p-4 mb-8 bg-black/60 rounded-lg border border-white/5 text-left font-mono text-[10px] text-slate-300 max-h-[140px] overflow-y-auto scrollbar-thin">
            <div className="flex items-center gap-2 mb-2 text-slate-400 border-b border-white/5 pb-1 select-none">
              <Terminal className="w-3.5 h-3.5 text-violet-500" />
              <span className="font-semibold uppercase tracking-wider">ERROR RUNTIME DATA</span>
            </div>
            <div className="text-violet-400 font-bold mb-1">
              {error.name || "RuntimeError"}: {error.message || "Unknown root-level page process exception"}
            </div>
            {error.digest && (
              <div className="text-amber-500/80 font-bold mb-1">
                DIGEST_HASH: {error.digest}
              </div>
            )}
            <div className="text-slate-500 text-[9px] mt-2 select-none leading-normal">
              SYSTEM_BOOT: INTERRUPTED<br />
              ALLOC_BUFFER: FLUSHED<br />
              STACK_DUMP: AVAILABLE IN CLIENT CONSOLE
            </div>
          </div>

          {/* Navigation Action controls */}
          <div className="flex flex-col sm:flex-row gap-3 w-full justify-center">
            <button
              onClick={handleRootReset}
              className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-violet-500/10 hover:bg-violet-500/20 text-violet-300 font-mono text-xs uppercase tracking-widest border border-violet-500/30 hover:border-violet-500/50 rounded-lg shadow-lg hover:shadow-violet-500/5 transition-all duration-300 group"
            >
              <RefreshCw className="w-3.5 h-3.5 group-hover:rotate-180 transition-transform duration-500" />
              Reboot System
            </button>
            
            <a
              href="/"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-zinc-900 hover:bg-zinc-800 text-slate-300 font-mono text-xs uppercase tracking-widest border border-white/5 hover:border-white/10 rounded-lg transition-all duration-300"
            >
              <Home className="w-3.5 h-3.5 text-slate-400" />
              Return Home
            </a>
          </div>
        </div>
      </body>
    </html>
  );
}
