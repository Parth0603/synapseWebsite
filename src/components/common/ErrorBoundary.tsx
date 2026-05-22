"use client";

import React, { Component, ErrorInfo, ReactNode } from "react";
import { AlertOctagon, RefreshCw, Terminal, Cpu } from "lucide-react";

interface Props {
  children: ReactNode;
  fallback?: ReactNode;
}

interface State {
  hasError: boolean;
  error: Error | null;
}

export class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false,
    error: null,
  };

  public static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error("SYNAPSE Production System Exception Captured:", error, errorInfo);
  }

  private handleReboot = () => {
    this.setState({ hasError: false, error: null });
    if (typeof window !== "undefined") {
      window.location.reload();
    }
  };

  public render() {
    if (this.state.hasError) {
      if (this.props.fallback) {
        return this.props.fallback;
      }

      return (
        <div className="w-full min-h-[450px] my-6 p-8 rounded-xl border border-red-500/20 bg-obsidian-950/90 backdrop-blur-md flex flex-col items-center justify-center relative overflow-hidden text-slate-200">
          {/* Telemetry Guide Overlays */}
          <div className="absolute top-4 left-4 font-mono text-[9px] text-slate-500 tracking-wider select-none">
            [MODULE_ISOLATOR_V1.0]
          </div>
          <div className="absolute top-4 right-4 font-mono text-[9px] text-slate-500 tracking-wider select-none">
            LOC: {typeof window !== "undefined" ? window.location.pathname : "SERVER"}
          </div>
          <div className="absolute bottom-4 left-4 font-mono text-[9px] text-slate-500 tracking-wider select-none">
            ERR_STATUS: CAPTURED
          </div>

          {/* Grid Blueprint Backdrop */}
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.01)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.01)_1px,transparent_1px)] bg-[size:20px_20px] pointer-events-none" />

          {/* Ambient Glow */}
          <div className="absolute -top-40 w-80 h-80 rounded-full bg-red-500/5 blur-[80px] pointer-events-none" />

          <div className="relative z-10 flex flex-col items-center max-w-lg text-center px-4">
            <div className="p-3 bg-red-500/10 rounded-full border border-red-500/20 mb-5 animate-pulse text-red-400">
              <AlertOctagon className="w-8 h-8" />
            </div>

            <h3 className="font-heading text-lg font-bold tracking-wider uppercase text-red-400 mb-2">
              System Interface Failure
            </h3>
            
            <p className="text-xs text-slate-400 font-mono mb-6 leading-relaxed max-w-sm">
              An exception occurred in the WebGL visual matrix or client layer. The main thread has isolated the context to protect page stability.
            </p>

            {/* Error Message Diagnostics Block */}
            <div className="w-full p-4 mb-8 bg-black/40 rounded-lg border border-white/5 font-mono text-[10px] text-left text-slate-300 overflow-x-auto max-h-[120px] scrollbar-thin">
              <div className="flex items-center gap-2 mb-2 text-slate-400 border-b border-white/5 pb-1">
                <Terminal className="w-3.5 h-3.5 text-red-500" />
                <span className="font-bold">DIAGNOSTIC LOG</span>
              </div>
              <div className="text-red-300 font-semibold mb-1">
                {this.state.error?.name || "Error"}: {this.state.error?.message || "Unknown rendering exception"}
              </div>
              {this.state.error?.stack && (
                <div className="text-slate-500 text-[9px] leading-tight whitespace-pre-wrap">
                  {this.state.error.stack.split("\n").slice(0, 3).join("\n")}
                </div>
              )}
            </div>

            {/* Interactive Reboot Control */}
            <button
              onClick={this.handleReboot}
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-red-500/10 hover:bg-red-500/20 text-red-300 font-mono text-xs uppercase tracking-widest border border-red-500/30 hover:border-red-500/50 rounded-lg shadow-lg hover:shadow-red-500/5 transition-all duration-300 group"
            >
              <RefreshCw className="w-3.5 h-3.5 group-hover:rotate-180 transition-transform duration-500" />
              Reboot Visual Module
            </button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}
