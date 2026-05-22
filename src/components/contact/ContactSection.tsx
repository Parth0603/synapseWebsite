"use client";

import React, { useState } from "react";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/utils/cn";

export default function ContactSection() {
  // Dispatch form state machine
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<"idle" | "transmitting" | "dispatched">("idle");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email || !message) return;

    setStatus("transmitting");
    
    // Simulate high-fidelity network consensus transmission delay
    setTimeout(() => {
      setStatus("dispatched");
      setName("");
      setEmail("");
      setMessage("");
    }, 1800);
  };

  const handleReset = () => {
    setStatus("idle");
  };

  return (
    <SectionWrapper id="contact-section" className="border-t border-white/5 bg-obsidian-950/80">
      
      {/* Decorative side indicators */}
      <div className="absolute bottom-12 right-12 font-mono text-[9px] text-brand-violet/20 hidden xl:block">
        [ SYSTEM_ROUTING: SUPPORT_DISPATCH_CONSOLE ]
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
        
        {/* Left Column: Trust Layer & Community Syndicate Links */}
        <div className="lg:col-span-5 flex flex-col justify-center h-full">
          <ScrollReveal delay={0.1}>
            <span className="font-mono text-xs tracking-[0.3em] text-brand-violet font-semibold uppercase mb-3 block">
              [ DIRECT_SYNC // CHANNELS ]
            </span>
          </ScrollReveal>
          
          <ScrollReveal delay={0.2}>
            <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight text-white mb-6 font-display uppercase">
              Join the Syndicate
            </h2>
          </ScrollReveal>
          
          <ScrollReveal delay={0.3}>
            <p className="text-xs md:text-sm text-obsidian-400 font-mono tracking-wide leading-relaxed mb-8">
              Consensus happens faster in community. Sync with over 240+ developers, AI builders, and blockchain engineers inside our digital terminal hubs. Ask direct support questions, form teams, and unlock resources.
            </p>
          </ScrollReveal>

          {/* Connected Network telemetries */}
          <ScrollReveal delay={0.4} className="space-y-4">
            
            {/* Discord Syndicate Card */}
            <a
              href="https://discord.gg/synapse"
              target="_blank"
              rel="noopener noreferrer"
              className="group block border border-white/5 bg-obsidian-900/30 rounded-lg p-5 hover:border-brand-violet/40 hover:bg-obsidian-900/60 transition-all duration-300 relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-brand-violet/5 blur-2xl rounded-full pointer-events-none" />
              
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded bg-[#5865F2]/10 border border-[#5865F2]/30 flex items-center justify-center flex-shrink-0 group-hover:scale-105 transition-transform duration-300">
                  <svg className="w-5 h-5 text-[#5865F2]" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028 14.09 14.09 0 0 0 1.226-1.994.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.873-.894.077.077 0 0 1-.008-.128c.126-.093.252-.19.372-.287a.075.075 0 0 1 .077-.011 13.973 13.973 0 0 0 10.162 0 .078.078 0 0 1 .078.009c.12.099.246.196.373.289a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.894.077.077 0 0 0-.041.107 14.314 14.314 0 0 0 1.226 1.99.075.075 0 0 0 .084.03 19.793 19.793 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.156-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.156 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.156-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.156 2.418z" />
                  </svg>
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <h4 className="text-sm font-semibold text-white group-hover:text-brand-violet transition-colors">
                      Discord Terminal Sync
                    </h4>
                    <span className="inline-block w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
                  </div>
                  <p className="text-2xs font-mono text-obsidian-400 mt-1 uppercase">
                    [ NODE: ESTABLISHED // 184_ONLINE ]
                  </p>
                </div>
              </div>
            </a>

            {/* WhatsApp Support Group */}
            <a
              href="https://chat.whatsapp.com/synapse"
              target="_blank"
              rel="noopener noreferrer"
              className="group block border border-white/5 bg-obsidian-900/30 rounded-lg p-5 hover:border-brand-violet/40 hover:bg-obsidian-900/60 transition-all duration-300 relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-brand-violet/5 blur-2xl rounded-full pointer-events-none" />
              
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center flex-shrink-0 group-hover:scale-105 transition-transform duration-300">
                  <svg className="w-5 h-5 text-emerald-500" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                  </svg>
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <h4 className="text-sm font-semibold text-white group-hover:text-brand-violet transition-colors">
                      WhatsApp Dispatch Core
                    </h4>
                    <span className="inline-block w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
                  </div>
                  <p className="text-2xs font-mono text-obsidian-400 mt-1 uppercase">
                    [ NODE: RELIABLE // BROADCAST_SYNC ]
                  </p>
                </div>
              </div>
            </a>

          </ScrollReveal>
        </div>

        {/* Right Column: Console Dispatch Query Form */}
        <div className="lg:col-span-7">
          <ScrollReveal delay={0.2} className="relative">
            <div className="absolute -inset-1 rounded-xl bg-gradient-to-r from-brand-violet/10 to-brand-amber/5 blur-xl pointer-events-none opacity-50" />
            
            <div className="relative border border-white/5 bg-obsidian-900/40 backdrop-blur-md rounded-xl p-6 md:p-8 overflow-hidden">
              <div className="flex justify-between items-center border-b border-white/5 pb-4 mb-6">
                <span className="font-mono text-2xs md:text-xs text-brand-violet/60 font-semibold uppercase">
                  [ SYS.QUERY_ROUTER_V1 ]
                </span>
                <span className="font-mono text-2xs text-obsidian-500 uppercase">
                  SECURE_SOCKET_CHANNEL
                </span>
              </div>

              <AnimatePresence mode="wait">
                {status === "dispatched" ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.4 }}
                    className="flex flex-col items-center justify-center py-12 text-center"
                  >
                    <div className="w-16 h-16 rounded-full bg-brand-violet/10 border border-brand-violet/30 flex items-center justify-center mb-6 text-brand-violet animate-pulse">
                      <svg fill="none" className="w-8 h-8" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    
                    <h3 className="text-lg md:text-xl font-bold tracking-tight text-white mb-2 font-display uppercase">
                      Payload Sent Successfully
                    </h3>
                    <p className="text-xs md:text-sm text-obsidian-400 font-mono tracking-wide leading-relaxed max-w-sm mb-8">
                      Your technical query has bypassed the firewall and successfully compiled at the SYNAPSE support cores. Expect a transmission handshake shortly.
                    </p>

                    <button
                      onClick={handleReset}
                      className="px-5 py-2.5 rounded font-mono text-2xs md:text-xs tracking-wider border border-white/10 text-white hover:border-brand-violet/30 hover:text-brand-violet hover:bg-brand-violet/5 transition-all duration-300 uppercase font-semibold"
                    >
                      [ OPEN_NEW_CONNECTION ]
                    </button>
                  </motion.div>
                ) : (
                  <motion.form
                    onSubmit={handleSubmit}
                    initial={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="space-y-6"
                  >
                    {/* User Name input */}
                    <div className="space-y-2">
                      <label className="block font-mono text-2xs text-brand-violet/60 uppercase font-semibold select-none">
                        [ DISPATCH_SENDER: ENTER_NAME ]
                      </label>
                      <input
                        type="text"
                        required
                        disabled={status === "transmitting"}
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="CANDIDATE_NAME"
                        className="w-full bg-obsidian-950 border border-white/5 rounded-lg px-4 py-3 text-sm text-white placeholder-obsidian-600 focus:outline-none focus:border-brand-violet/50 focus:ring-1 focus:ring-brand-violet/20 font-mono transition-all duration-300 disabled:opacity-50"
                      />
                    </div>

                    {/* Email Input */}
                    <div className="space-y-2">
                      <label className="block font-mono text-2xs text-brand-violet/60 uppercase font-semibold select-none">
                        [ HANDSHAKE_EMAIL: ENTER_EMAIL ]
                      </label>
                      <input
                        type="email"
                        required
                        disabled={status === "transmitting"}
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="SUPPORT@COGNITIVE.SYSTEM"
                        className="w-full bg-obsidian-950 border border-white/5 rounded-lg px-4 py-3 text-sm text-white placeholder-obsidian-600 focus:outline-none focus:border-brand-violet/50 focus:ring-1 focus:ring-brand-violet/20 font-mono transition-all duration-300 disabled:opacity-50"
                      />
                    </div>

                    {/* Message / Payload */}
                    <div className="space-y-2">
                      <label className="block font-mono text-2xs text-brand-violet/60 uppercase font-semibold select-none">
                        [ RAW_PAYLOAD: ENTER_QUERY ]
                      </label>
                      <textarea
                        required
                        rows={4}
                        disabled={status === "transmitting"}
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        placeholder="COMPILE YOUR TECHNICAL QUERY OR MATCHMAKING LOGISTICS..."
                        className="w-full bg-obsidian-950 border border-white/5 rounded-lg px-4 py-3 text-sm text-white placeholder-obsidian-600 focus:outline-none focus:border-brand-violet/50 focus:ring-1 focus:ring-brand-violet/20 font-mono transition-all duration-300 resize-none disabled:opacity-50"
                      />
                    </div>

                    {/* Dynamic submit state-machine */}
                    <button
                      type="submit"
                      disabled={status === "transmitting" || !name || !email || !message}
                      className="w-full flex items-center justify-center py-3.5 px-6 rounded-lg font-mono text-xs tracking-widest text-black bg-white hover:bg-brand-violet hover:text-white disabled:bg-white/10 disabled:text-obsidian-600 hover:shadow-[0_0_20px_rgba(124,58,237,0.15)] disabled:hover:shadow-none transition-all duration-300 uppercase font-bold border border-transparent disabled:border-transparent group"
                    >
                      {status === "transmitting" ? (
                        <div className="flex items-center gap-3">
                          <div className="w-4 h-4 rounded-full border border-black/30 border-t-black animate-spin" />
                          <span>RESOLVING_CONSENSUS...</span>
                        </div>
                      ) : (
                        <div className="flex items-center gap-2">
                          <span>COMPILE_AND_SEND</span>
                          <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                          </svg>
                        </div>
                      )}
                    </button>
                  </motion.form>
                )}
              </AnimatePresence>
            </div>
          </ScrollReveal>
        </div>

      </div>
    </SectionWrapper>
  );
}
