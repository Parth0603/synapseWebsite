"use client";

import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";

// ─── Animated counter ─────────────────────────────────────────────────────────
function Counter({ to, suffix = "" }: { to: number; suffix?: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const ran = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting || ran.current) return;
        ran.current = true;
        observer.disconnect();
        let start = 0;
        const step = Math.ceil(to / 60);
        const timer = setInterval(() => {
          start = Math.min(start + step, to);
          setCount(start);
          if (start >= to) clearInterval(timer);
        }, 16);
      },
      { threshold: 0.5 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [to]);

  return (
    <span ref={ref}>
      {count}
      {suffix}
    </span>
  );
}

// ─── Timeline ─────────────────────────────────────────────────────────────────
const TIMELINE = [
  { day: "DAY 1", date: "26 June", color: "hsl(271,91%,65%)", events: [
    { time: "09:00", label: "Inauguration & Opening Ceremony" },
    { time: "10:00", label: "Problem Statements Released" },
    { time: "10:30", label: "Hacking Officially Begins" },
    { time: "13:00", label: "Lunch Break & Networking" },
    { time: "18:00", label: "Mentor Office Hours" },
    { time: "22:00", label: "Progress Check-in" },
  ]},
  { day: "DAY 2", date: "27 June", color: "hsl(24,95%,53%)", events: [
    { time: "02:00", label: "Midnight Sprint & Snacks" },
    { time: "09:30", label: "Final Submissions Close" },
    { time: "11:00", label: "Jury Evaluation" },
    { time: "14:00", label: "Finalist Presentations" },
    { time: "17:00", label: "Grand Finale & Awards" },
  ]},
];

const STATS = [
  { value: 200, suffix: "+", label: "Offline Participants" },
  { value: 24, suffix: "H", label: "Non-stop Hacking" },
  { value: 2, suffix: "", label: "Rounds" },
  { value: 2, suffix: "", label: "Core Domains" },
];

const WHY_SPONSOR = [
  {
    icon: "◈",
    title: "200+ Elite Builders",
    body: "Offline access to India's brightest AI & blockchain minds — your next hire, co-founder, or customer.",
    color: "hsl(271,91%,65%)",
  },
  {
    icon: "◎",
    title: "Brand on Every Surface",
    body: "Logo on venue, website, social media, certificates, and swag for the entire event duration.",
    color: "hsl(174,86%,45%)",
  },
  {
    icon: "⬡",
    title: "Talent Pipeline",
    body: "Interview finalists, host a workshop, and recruit directly from the offline grand cohort.",
    color: "hsl(24,95%,53%)",
  },
  {
    icon: "◆",
    title: "Sponsor-Led Tracks",
    body: "Own a custom challenge track — real teams building on your stack, creating real feedback.",
    color: "hsl(271,91%,65%)",
  },
];

// ─── Main page ────────────────────────────────────────────────────────────────
export default function DetailsPage() {
  return (
    <main
      style={{
        background: "#05050C",
        color: "#F8FAFC",
        fontFamily: "var(--font-body, Inter, sans-serif)",
        overflowX: "hidden",
      }}
    >
      {/* ─── Global styles ──────────────────────────────────────────────── */}
      <style>{`
        @keyframes pulse-dot { 0%,100%{opacity:1;transform:scale(1)} 50%{opacity:.45;transform:scale(.7)} }
        @keyframes float-up  { 0%{transform:translateY(0)} 50%{transform:translateY(-8px)} 100%{transform:translateY(0)} }
        @keyframes glow-pulse{ 0%,100%{opacity:.6} 50%{opacity:1} }
        @keyframes shimmer   { 0%{background-position:200% center} 100%{background-position:-200% center} }
        @keyframes spin-slow { from{transform:rotate(0deg)} to{transform:rotate(360deg)} }
        @keyframes fade-up   { from{opacity:0;transform:translateY(24px)} to{opacity:1;transform:translateY(0)} }

        .fade-up { animation: fade-up .7s ease both; }
        .fade-up-d1 { animation-delay:.1s; }
        .fade-up-d2 { animation-delay:.25s; }
        .fade-up-d3 { animation-delay:.4s; }
        .fade-up-d4 { animation-delay:.55s; }

        .shimmer-text {
          background: linear-gradient(90deg, #A78BFA 0%, #fff 30%, #A78BFA 60%, #C084FC 80%, #fff 100%);
          background-size: 200% auto;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          animation: shimmer 4s linear infinite;
        }

        .sponsor-btn:hover { box-shadow: 0 0 60px hsla(271,91%,65%,.55) !important; transform: translateY(-2px); transition: all .2s ease; }
        .card-hover:hover { border-color: hsla(271,91%,65%,.35) !important; background: rgba(255,255,255,.04) !important; transform: translateY(-3px); transition: all .25s ease; }
      `}</style>

      {/* ─── Fixed Nav ──────────────────────────────────────────────────── */}
      <nav
        style={{
          position: "fixed", top: 0, left: 0, right: 0, zIndex: 50,
          display: "flex", alignItems: "center", justifyContent: "space-between",
          padding: "14px 40px",
          background: "rgba(5,5,12,0.85)",
          backdropFilter: "blur(20px) saturate(180%)",
          borderBottom: "1px solid rgba(255,255,255,0.05)",
        }}
      >
        {/* Corner accents */}
        <div style={{ position: "absolute", top: 0, left: 0, width: 20, height: 20, borderTop: "1px solid rgba(139,92,246,.25)", borderLeft: "1px solid rgba(139,92,246,.25)" }} />
        <div style={{ position: "absolute", top: 0, right: 0, width: 20, height: 20, borderTop: "1px solid rgba(139,92,246,.25)", borderRight: "1px solid rgba(139,92,246,.25)" }} />

        <Link href="/" style={{ textDecoration: "none", display: "flex", alignItems: "center", gap: "10px" }}>
          <div style={{ width: 8, height: 8, borderRadius: "50%", background: "hsl(271,91%,65%)", boxShadow: "0 0 8px hsla(271,91%,65%,.6)", animation: "glow-pulse 2s ease-in-out infinite" }} />
          <span style={{ fontFamily: "var(--font-heading, Outfit, sans-serif)", fontSize: "16px", fontWeight: 700, letterSpacing: "0.14em", color: "#fff" }}>
            SYNAPSE 1.0
          </span>
        </Link>

        <a
          href="mailto:partners@synapse.acropolisblockchain.club?subject=Sponsorship%20Inquiry%20%E2%80%94%20SYNAPSE%201.0"
          className="sponsor-btn"
          style={{
            padding: "9px 22px",
            background: "linear-gradient(135deg, hsl(271,91%,55%), hsl(271,91%,40%))",
            color: "#fff", fontSize: "12px", fontWeight: 700, letterSpacing: "0.10em",
            borderRadius: "4px", textDecoration: "none",
            boxShadow: "0 0 24px hsla(271,91%,65%,.30)",
            border: "1px solid hsla(271,91%,65%,.30)",
          }}
        >
          BECOME A SPONSOR →
        </a>
      </nav>

      {/* ═══════════════════════════════════════════════════════════════════
          HERO — Full immersive canvas
      ═══════════════════════════════════════════════════════════════════ */}
      <section
        style={{
          minHeight: "100vh",
          display: "flex", flexDirection: "column",
          alignItems: "center", justifyContent: "center",
          textAlign: "center", padding: "130px 24px 80px",
          position: "relative", overflow: "hidden",
        }}
      >
        {/* ── Background: layered radials matching main site ── */}
        <div style={{ position: "absolute", inset: 0, pointerEvents: "none", zIndex: 1 }}>
          {/* Primary violet crown */}
          <div style={{
            position: "absolute", top: "-20%", left: "50%", transform: "translateX(-50%)",
            width: "min(1200px,130vw)", height: "min(650px,75vh)",
            background: "radial-gradient(ellipse at 50% 0%, hsla(271,80%,62%,.18) 0%, hsla(271,80%,62%,.06) 45%, transparent 72%)",
          }} />
          {/* Left amber warmth */}
          <div style={{
            position: "absolute", top: "20%", left: "-5%",
            width: "min(550px,50vw)", height: "min(420px,45vh)",
            background: "radial-gradient(ellipse at 50% 50%, hsla(25,90%,58%,.09) 0%, transparent 70%)",
          }} />
          {/* Right teal depth */}
          <div style={{
            position: "absolute", top: "30%", right: "-5%",
            width: "min(400px,40vw)", height: "min(350px,40vh)",
            background: "radial-gradient(ellipse at 50% 50%, hsla(174,86%,45%,.07) 0%, transparent 70%)",
          }} />
          {/* Bottom vignette */}
          <div style={{
            position: "absolute", bottom: 0, left: 0, right: 0, height: "40%",
            background: "linear-gradient(to top, #05050C 0%, transparent 100%)",
          }} />
        </div>

        {/* ── Blueprint corner marks ── */}
        <div style={{ position: "absolute", inset: 0, pointerEvents: "none", zIndex: 2 }}>
          {[
            { top: 80, left: 32 }, { top: 80, right: 32 },
            { bottom: 32, left: 32 }, { bottom: 32, right: 32 },
          ].map((pos, i) => (
            <div key={i} style={{
              position: "absolute", ...pos, width: 20, height: 20,
              borderTop: i < 2 ? "1px solid rgba(255,255,255,.06)" : undefined,
              borderBottom: i >= 2 ? "1px solid rgba(255,255,255,.06)" : undefined,
              borderLeft: i % 2 === 0 ? "1px solid rgba(255,255,255,.06)" : undefined,
              borderRight: i % 2 === 1 ? "1px solid rgba(255,255,255,.06)" : undefined,
            }} />
          ))}
        </div>

        {/* ── Scan line ── */}
        <div style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%,-50%)", width: "900px", maxWidth: "100%", height: "1px", background: "linear-gradient(90deg, transparent 0%, rgba(139,92,246,.12) 30%, rgba(139,92,246,.25) 50%, rgba(139,92,246,.12) 70%, transparent 100%)", pointerEvents: "none", zIndex: 2 }} />

        {/* ── Content ── */}
        <div style={{ position: "relative", zIndex: 3, maxWidth: "860px" }}>
          {/* Badge */}
          <div className="fade-up" style={{
            display: "inline-flex", alignItems: "center", gap: "8px",
            padding: "6px 18px",
            background: "rgba(139,92,246,.08)",
            border: "1px solid rgba(139,92,246,.30)",
            borderRadius: "100px",
            fontSize: "11px", fontWeight: 700, letterSpacing: "0.16em",
            color: "hsl(271,91%,75%)", marginBottom: "36px",
          }}>
            <span style={{ width: 6, height: 6, borderRadius: "50%", background: "hsl(271,91%,65%)", display: "inline-block", animation: "pulse-dot 2s ease-in-out infinite" }} />
            26 – 27 JUNE 2026 &nbsp;·&nbsp; AITR, INDORE
          </div>

          {/* Main title */}
          <h1 className="fade-up fade-up-d1" style={{
            fontFamily: "var(--font-heading, Outfit, sans-serif)",
            fontSize: "clamp(60px, 10vw, 120px)",
            fontWeight: 800, lineHeight: 0.95, letterSpacing: "-0.03em",
            marginBottom: "28px",
          }}>
            <span className="shimmer-text">SYNAPSE</span>
            <span style={{ display: "block", fontSize: "clamp(28px, 4vw, 48px)", fontWeight: 700, letterSpacing: "0.20em", color: "rgba(255,255,255,.3)", marginTop: "8px" }}>
              1.0
            </span>
          </h1>

          {/* Tagline */}
          <p className="fade-up fade-up-d2" style={{
            fontSize: "clamp(15px, 2vw, 20px)", color: "rgba(248,250,252,.55)",
            maxWidth: "580px", margin: "0 auto 16px", lineHeight: 1.65,
          }}>
            A <span style={{ color: "hsl(271,91%,75%)", fontWeight: 600 }}>24-hour</span> AI & Blockchain hackathon
            organised by the Acropolis Blockchain Club at{" "}
            <span style={{ color: "rgba(248,250,252,.8)", fontWeight: 500 }}>AITR, Indore.</span>
          </p>

          {/* Domain pills */}
          <div className="fade-up fade-up-d2" style={{ display: "flex", gap: "10px", justifyContent: "center", marginBottom: "52px", flexWrap: "wrap" }}>
            {[
              { label: "Artificial Intelligence", color: "hsl(271,91%,65%)", glow: "hsla(271,91%,65%,.15)" },
              { label: "Blockchain", color: "hsl(24,95%,53%)", glow: "hsla(24,95%,53%,.12)" },
            ].map((d) => (
              <span key={d.label} style={{
                padding: "5px 14px",
                background: d.glow,
                border: `1px solid ${d.color}44`,
                borderRadius: "100px",
                fontSize: "12px", fontWeight: 600, letterSpacing: "0.08em",
                color: d.color,
              }}>
                {d.label}
              </span>
            ))}
          </div>



          {/* CTA buttons */}
          <div className="fade-up fade-up-d4" style={{ display: "flex", gap: "14px", flexWrap: "wrap", justifyContent: "center" }}>
            <a
              href="mailto:blockchainclub@acropolis.in?subject=Sponsorship%20Inquiry%20%E2%80%94%20SYNAPSE%201.0"
              className="sponsor-btn"
              style={{
                padding: "14px 34px",
                background: "linear-gradient(135deg, hsl(271,91%,55%), hsl(271,91%,38%))",
                color: "#fff", fontSize: "14px", fontWeight: 700, letterSpacing: "0.09em",
                borderRadius: "6px", textDecoration: "none",
                boxShadow: "0 0 40px hsla(271,91%,65%,.35)",
                border: "1px solid hsla(271,91%,65%,.35)",
              }}
            >
              SPONSOR THIS EVENT
            </a>
            <Link
              href="/"
              style={{
                padding: "14px 34px",
                background: "rgba(255,255,255,.04)",
                border: "1px solid rgba(255,255,255,.10)",
                color: "rgba(248,250,252,.8)", fontSize: "14px", fontWeight: 600, letterSpacing: "0.06em",
                borderRadius: "6px", textDecoration: "none",
              }}
            >
              VISIT MAIN SITE
            </Link>
          </div>

          {/* Fine print */}
          <p style={{ fontSize: "11px", color: "rgba(255,255,255,.2)", marginTop: "20px", letterSpacing: "0.06em" }}>
            *Registration fee to be announced · Online qualifiers → Offline grand finale
          </p>
        </div>
      </section>

      {/* ─── Stats bar ──────────────────────────────────────────────────── */}
      <section style={{
        padding: "60px 24px",
        borderTop: "1px solid rgba(255,255,255,.05)",
        borderBottom: "1px solid rgba(255,255,255,.05)",
        background: "rgba(139,92,246,.04)",
        position: "relative", overflow: "hidden",
      }}>
        <div style={{ position: "absolute", top: 0, left: "50%", transform: "translateX(-50%)", width: "600px", height: "1px", background: "linear-gradient(90deg, transparent, rgba(139,92,246,.4), transparent)" }} />
        <div style={{
          maxWidth: "900px", margin: "0 auto",
          display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(180px,1fr))",
          gap: "40px", textAlign: "center",
        }}>
          {STATS.map((s) => (
            <div key={s.label}>
              <div style={{
                fontFamily: "var(--font-heading, Outfit, sans-serif)",
                fontSize: "clamp(40px,6vw,64px)", fontWeight: 800, lineHeight: 1,
                background: "linear-gradient(135deg, #fff, hsl(271,91%,75%))",
                WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent",
                backgroundClip: "text", marginBottom: "8px",
              }}>
                <Counter to={s.value} suffix={s.suffix} />
              </div>
              <div style={{ fontSize: "11px", fontWeight: 700, letterSpacing: "0.16em", color: "rgba(255,255,255,.3)", textTransform: "uppercase" }}>
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ─── About ──────────────────────────────────────────────────────── */}
      <section style={{ padding: "100px 24px", maxWidth: "800px", margin: "0 auto" }}>
        <SectionLabel>ABOUT THE EVENT</SectionLabel>
        <h2 style={sH}>Built for builders who think in systems.</h2>
        <p style={bT}>
          SYNAPSE 1.0 is organised by the{" "}
          <span style={{ color: "hsl(271,91%,72%)", fontWeight: 600 }}>Acropolis Blockchain Club</span> — a
          student-led technical community at AITR Indore driving India's next wave of AI and
          decentralised innovation.
        </p>
        <p style={{ ...bT, marginTop: "16px" }}>
          Over <strong style={{ color: "#F8FAFC" }}>24 hours</strong> on{" "}
          <strong style={{ color: "#F8FAFC" }}>June 26–27, 2026</strong>, teams of 1–4 compete
          across two structured rounds: an <strong style={{ color: "#F8FAFC" }}>online qualifier</strong> followed
          by an <strong style={{ color: "#F8FAFC" }}>offline grand finale</strong> at the AITR campus in Indore.
          Mentorship, workshops, and sponsor-led challenge tracks are woven throughout.
        </p>

        <div style={{
          marginTop: "40px",
          display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(195px,1fr))",
          gap: "14px",
        }}>
          {[
            { label: "Dates", value: "26–27 June 2026" },
            { label: "Venue", value: "AITR Campus, Indore" },
            { label: "Duration", value: "24 Hours" },
            { label: "Team Size", value: "1–4 Members" },
            { label: "Round 1", value: "Online Qualifier" },
            { label: "Round 2", value: "Offline Grand Finale" },
            { label: "Domains", value: "AI · Blockchain" },
            { label: "Entry Fee", value: "To Be Announced" },
          ].map((item) => (
            <div
              key={item.label}
              className="card-hover"
              style={{
                padding: "16px 20px",
                background: "rgba(255,255,255,.025)",
                border: "1px solid rgba(255,255,255,.07)",
                borderRadius: "6px",
                transition: "all .25s ease",
              }}
            >
              <div style={{ fontSize: "10px", fontWeight: 700, letterSpacing: "0.14em", color: "rgba(255,255,255,.3)", marginBottom: "6px" }}>
                {item.label.toUpperCase()}
              </div>
              <div style={{ fontSize: "14px", fontWeight: 600, color: "#F8FAFC" }}>{item.value}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ─── Format ─────────────────────────────────────────────────────── */}
      <section style={{ padding: "80px 24px", borderTop: "1px solid rgba(255,255,255,.05)", background: "rgba(10,11,22,.6)" }}>
        <div style={{ maxWidth: "800px", margin: "0 auto" }}>
          <SectionLabel>EVENT FORMAT</SectionLabel>
          <h2 style={sH}>Two rounds. One shot at greatness.</h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px,1fr))", gap: "20px", marginTop: "40px" }}>
            {[
              {
                num: "01",
                title: "Online Qualifier",
                color: "hsl(271,91%,65%)",
                glow: "hsla(271,91%,65%,.10)",
                border: "hsla(271,91%,65%,.20)",
                items: [
                  "Submit your project remotely",
                  "Git-based evaluation",
                  "Top teams advance to offline round",
                  "Open to all participants",
                ],
              },
              {
                num: "02",
                title: "Offline Grand Finale",
                color: "hsl(24,95%,53%)",
                glow: "hsla(24,95%,53%,.08)",
                border: "hsla(24,95%,53%,.20)",
                items: [
                  "24-hour in-person hackathon",
                  "Live at AITR Campus, Indore",
                  "Mentor & sponsor interactions",
                  "Jury presentations & awards",
                ],
              },
            ].map((r) => (
              <div
                key={r.num}
                className="card-hover"
                style={{
                  padding: "32px 28px",
                  background: r.glow,
                  border: `1px solid ${r.border}`,
                  borderRadius: "10px",
                  position: "relative", overflow: "hidden",
                }}
              >
                <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: "2px", background: `linear-gradient(90deg, transparent, ${r.color}, transparent)` }} />
                <div style={{ fontFamily: "var(--font-mono, monospace)", fontSize: "11px", fontWeight: 700, letterSpacing: "0.18em", color: r.color, marginBottom: "12px" }}>
                  ROUND {r.num}
                </div>
                <h3 style={{ fontFamily: "var(--font-heading, Outfit, sans-serif)", fontSize: "22px", fontWeight: 700, color: "#F8FAFC", marginBottom: "20px" }}>
                  {r.title}
                </h3>
                <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "10px" }}>
                  {r.items.map((item) => (
                    <li key={item} style={{ display: "flex", alignItems: "flex-start", gap: "10px", fontSize: "14px", color: "rgba(248,250,252,.6)" }}>
                      <span style={{ color: r.color, flexShrink: 0, marginTop: "2px", fontSize: "10px" }}>▸</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Tracks ─────────────────────────────────────────────────────── */}
      <section style={{ padding: "100px 24px" }}>
        <div style={{ maxWidth: "800px", margin: "0 auto" }}>
          <SectionLabel>COMPETITION TRACKS</SectionLabel>
          <h2 style={sH}>Domains. Defined by builders.</h2>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px,1fr))", gap: "20px", marginTop: "48px" }}>
            {/* Domain cards */}
            {[
              { icon: "◈", name: "Artificial Intelligence", desc: "Agentic systems, LLM workflows, computer vision, edge ML, and responsible AI applications.", color: "hsl(271,91%,65%)" },
              { icon: "⬡", name: "Blockchain", desc: "Smart contracts, DeFi protocols, cross-chain infrastructure, DAOs, and zero-knowledge systems.", color: "hsl(24,95%,53%)" },
            ].map((t) => (
              <div
                key={t.name}
                className="card-hover"
                style={{
                  padding: "32px 28px",
                  background: "rgba(255,255,255,.025)",
                  border: `1px solid ${t.color}22`,
                  borderRadius: "10px",
                  position: "relative", overflow: "hidden",
                }}
              >
                <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: "2px", background: `linear-gradient(90deg, transparent, ${t.color}, transparent)` }} />
                <div style={{ fontSize: "28px", color: t.color, marginBottom: "16px", lineHeight: 1 }}>{t.icon}</div>
                <h3 style={{ fontFamily: "var(--font-heading, Outfit, sans-serif)", fontSize: "18px", fontWeight: 700, color: "#F8FAFC", marginBottom: "10px" }}>{t.name}</h3>
                <p style={{ fontSize: "14px", color: "rgba(248,250,252,.45)", lineHeight: 1.65 }}>{t.desc}</p>
              </div>
            ))}

            {/* Tracks TBA card */}
            <div
              className="card-hover"
              style={{
                padding: "32px 28px",
                background: "rgba(255,255,255,.015)",
                border: "1px dashed rgba(255,255,255,.12)",
                borderRadius: "10px",
                display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center",
                textAlign: "center", minHeight: "160px",
              }}
            >
              <div style={{ fontSize: "24px", marginBottom: "14px" }}>⊕</div>
              <h3 style={{ fontFamily: "var(--font-heading, Outfit, sans-serif)", fontSize: "16px", fontWeight: 700, color: "rgba(248,250,252,.5)", marginBottom: "8px" }}>
                Sponsor-Led Tracks
              </h3>
              <p style={{ fontSize: "13px", color: "rgba(248,250,252,.25)", lineHeight: 1.6 }}>
                Custom challenge tracks powered by sponsors. Details coming soon.
              </p>
              <div style={{
                marginTop: "16px", padding: "4px 14px",
                background: "rgba(139,92,246,.08)", border: "1px solid rgba(139,92,246,.20)",
                borderRadius: "100px", fontSize: "10px", fontWeight: 700, letterSpacing: "0.14em",
                color: "hsl(271,91%,72%)",
              }}>
                TO BE ANNOUNCED
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Timeline ───────────────────────────────────────────────────── */}
      <section style={{ padding: "100px 24px", borderTop: "1px solid rgba(255,255,255,.05)", background: "rgba(10,11,22,.6)" }}>
        <div style={{ maxWidth: "660px", margin: "0 auto" }}>
          <SectionLabel>EVENT SCHEDULE</SectionLabel>
          <h2 style={sH}>June 26–27 · 24 Hours</h2>

          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "40px", marginTop: "48px" }}>
            {TIMELINE.map((day, di) => (
              <div key={day.day}>
                {/* Day badge */}
                <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "28px" }}>
                  <div style={{
                    padding: "4px 12px",
                    background: di === 0 ? "hsla(271,91%,65%,.10)" : "hsla(24,95%,53%,.10)",
                    border: `1px solid ${day.color}44`,
                    borderRadius: "100px",
                    fontSize: "11px", fontWeight: 700, letterSpacing: "0.14em",
                    color: day.color,
                  }}>
                    {day.day}
                  </div>
                  <span style={{ fontSize: "12px", color: "rgba(255,255,255,.3)", fontWeight: 500 }}>{day.date}</span>
                </div>

                {day.events.map((ev, i) => (
                  <div key={ev.time} style={{ display: "flex", gap: "14px", alignItems: "stretch" }}>
                    {/* Spine */}
                    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", width: "10px", flexShrink: 0 }}>
                      <div style={{
                        width: 10, height: 10, borderRadius: "50%",
                        background: day.color, flexShrink: 0,
                        boxShadow: `0 0 8px ${day.color}99`,
                        marginTop: "2px",
                      }} />
                      {i < day.events.length - 1 && (
                        <div style={{
                          width: 1, flex: 1, marginTop: "4px",
                          background: `linear-gradient(to bottom, ${day.color}44, transparent)`,
                        }} />
                      )}
                    </div>
                    {/* Content */}
                    <div style={{ paddingBottom: i < day.events.length - 1 ? "22px" : "0", paddingTop: "0px" }}>
                      <div style={{ fontFamily: "var(--font-mono, monospace)", fontSize: "11px", color: "rgba(255,255,255,.3)", marginBottom: "2px" }}>{ev.time}</div>
                      <div style={{ fontSize: "13px", fontWeight: 500, color: "rgba(248,250,252,.7)", lineHeight: 1.4 }}>{ev.label}</div>
                    </div>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Why Sponsor ────────────────────────────────────────────────── */}
      <section style={{ padding: "100px 24px", position: "relative", overflow: "hidden" }}>
        {/* Background glow */}
        <div style={{
          position: "absolute", top: "50%", left: "50%", transform: "translate(-50%,-50%)",
          width: "800px", height: "400px",
          background: "radial-gradient(ellipse, hsla(271,91%,65%,.08) 0%, transparent 70%)",
          pointerEvents: "none",
        }} />
        <div style={{ maxWidth: "900px", margin: "0 auto", position: "relative" }}>
          <SectionLabel>WHY SPONSOR</SectionLabel>
          <h2 style={sH}>Your brand. Their breakthrough moment.</h2>
          <p style={{ ...bT, marginBottom: "48px", maxWidth: "600px" }}>
            SYNAPSE isn't just a hackathon — it's where India's next AI and blockchain founders
            take their first real steps. Be the company that was there when it started.
          </p>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px,1fr))", gap: "20px" }}>
            {WHY_SPONSOR.map((w) => (
              <div
                key={w.title}
                className="card-hover"
                style={{
                  padding: "28px",
                  background: "rgba(255,255,255,.025)",
                  border: "1px solid rgba(139,92,246,.10)",
                  borderRadius: "10px",
                }}
              >
                <div style={{ fontSize: "22px", color: w.color, marginBottom: "14px" }}>{w.icon}</div>
                <h3 style={{ fontFamily: "var(--font-heading, Outfit, sans-serif)", fontSize: "16px", fontWeight: 700, color: "#F8FAFC", marginBottom: "10px" }}>{w.title}</h3>
                <p style={{ fontSize: "14px", color: "rgba(248,250,252,.4)", lineHeight: 1.65 }}>{w.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Tiers ──────────────────────────────────────────────────────── */}
      <section style={{ padding: "100px 24px", borderTop: "1px solid rgba(255,255,255,.05)", background: "rgba(10,11,22,.6)" }}>
        <div style={{ maxWidth: "800px", margin: "0 auto" }}>
          <SectionLabel>SPONSORSHIP TIERS</SectionLabel>
          <h2 style={sH}>Choose your level of impact.</h2>
          <div style={{ display: "flex", flexDirection: "column", gap: "16px", marginTop: "48px" }}>
            {[
              {
                tier: "TITLE SPONSOR", color: "hsl(271,91%,65%)",
                bg: "hsla(271,91%,65%,.06)", border: "hsla(271,91%,65%,.25)",
                tag: "EXCLUSIVE · 1 SLOT",
                perks: [
                  "Event naming rights — \"SYNAPSE by [Your Brand]\"",
                  "Logo on all collateral: venue, website, social, certificates, swag",
                  "Keynote address slot on Day 1",
                  "Own a custom sponsor-led challenge track",
                  "Exclusive recruitment access to all finalist teams",
                  "Product / API integration as official challenge infrastructure",
                ],
              },
              {
                tier: "GOLD SPONSOR", color: "hsl(45,90%,55%)",
                bg: "hsla(45,90%,55%,.05)", border: "hsla(45,90%,55%,.20)",
                tag: "LIMITED · 3 SLOTS",
                perks: [
                  "Logo on website, venue banner, and all communications",
                  "Dedicated sponsor table and engagement zone",
                  "30-minute workshop or talk slot",
                  "Priority access to participant profiles",
                  "Branded prize category",
                ],
              },
              {
                tier: "SUPPORTING PARTNER", color: "hsl(24,95%,53%)",
                bg: "hsla(24,95%,53%,.04)", border: "hsla(24,95%,53%,.18)",
                tag: "OPEN",
                perks: [
                  "Logo on website and venue",
                  "Social media mentions and recognition",
                  "Participant engagement opportunity",
                ],
              },
            ].map((t) => (
              <div
                key={t.tier}
                className="card-hover"
                style={{
                  padding: "28px 32px",
                  background: t.bg,
                  border: `1px solid ${t.border}`,
                  borderRadius: "10px",
                  position: "relative", overflow: "hidden",
                }}
              >
                <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: "2px", background: `linear-gradient(90deg, transparent, ${t.color}, transparent)` }} />
                <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "18px", flexWrap: "wrap" }}>
                  <span style={{ fontSize: "12px", fontWeight: 700, letterSpacing: "0.14em", color: t.color }}>{t.tier}</span>
                  <span style={{
                    padding: "2px 10px",
                    background: `${t.color}18`,
                    border: `1px solid ${t.color}33`,
                    borderRadius: "100px",
                    fontSize: "10px", fontWeight: 700, letterSpacing: "0.14em",
                    color: t.color, opacity: 0.85,
                  }}>
                    {t.tag}
                  </span>
                </div>
                <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px,1fr))", gap: "8px" }}>
                  {t.perks.map((p) => (
                    <li key={p} style={{ fontSize: "13px", color: "rgba(248,250,252,.55)", display: "flex", alignItems: "flex-start", gap: "8px" }}>
                      <span style={{ color: t.color, flexShrink: 0 }}>✓</span>
                      {p}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Current Sponsors ───────────────────────────────────────────── */}
      <section style={{ padding: "80px 24px", borderTop: "1px solid rgba(255,255,255,.05)", borderBottom: "1px solid rgba(255,255,255,.05)" }}>
        <div style={{ maxWidth: "800px", margin: "0 auto", textAlign: "center" }}>
          <SectionLabel>BACKED BY</SectionLabel>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "16px", justifyContent: "center", marginTop: "36px" }}>
            {[
              { name: "Oranet AI", role: "Supporting Partner", color: "hsl(24,95%,53%)" },
              { name: "Awadh Foods", role: "Food Partner", color: "hsl(174,86%,45%)" },
            ].map((s) => (
              <div
                key={s.name}
                className="card-hover"
                style={{
                  padding: "20px 32px", background: "rgba(255,255,255,.03)",
                  border: `1px solid ${s.color}22`, borderRadius: "8px",
                  textAlign: "center", minWidth: "180px",
                }}
              >
                <div style={{ fontFamily: "var(--font-heading, Outfit, sans-serif)", fontSize: "18px", fontWeight: 700, color: "#F8FAFC", letterSpacing: "0.04em" }}>{s.name}</div>
                <div style={{ fontSize: "10px", fontWeight: 700, letterSpacing: "0.14em", color: s.color, marginTop: "6px" }}>{s.role.toUpperCase()}</div>
              </div>
            ))}
            <div
              className="card-hover"
              style={{
                padding: "20px 32px",
                background: "hsla(271,91%,65%,.04)",
                border: "1px dashed hsla(271,91%,65%,.30)",
                borderRadius: "8px", textAlign: "center", minWidth: "200px",
                display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center",
              }}
            >
              <div style={{ fontFamily: "var(--font-heading, Outfit, sans-serif)", fontSize: "16px", fontWeight: 700, color: "hsl(271,91%,65%)", opacity: 0.65, marginBottom: "6px" }}>Your Brand</div>
              <div style={{ fontSize: "10px", fontWeight: 700, letterSpacing: "0.14em", color: "hsl(271,91%,50%)" }}>TITLE SPONSOR · OPEN</div>
              <a
                href="mailto:blockchainclub@acropolis.in"
                style={{ marginTop: "12px", fontSize: "11px", color: "hsl(271,91%,72%)", textDecoration: "none", opacity: 0.8 }}
              >
                Reach out →
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Final CTA ──────────────────────────────────────────────────── */}
      <section style={{ padding: "140px 24px", textAlign: "center", position: "relative", overflow: "hidden" }}>
        <div style={{
          position: "absolute", top: "50%", left: "50%", transform: "translate(-50%,-50%)",
          width: "700px", height: "500px",
          background: "radial-gradient(ellipse, hsla(271,91%,65%,.14) 0%, transparent 70%)",
          pointerEvents: "none",
        }} />
        {/* Horizontal lines */}
        <div style={{ position: "absolute", top: "20%", left: 0, right: 0, height: "1px", background: "linear-gradient(90deg, transparent, rgba(139,92,246,.10), transparent)" }} />
        <div style={{ position: "absolute", bottom: "20%", left: 0, right: 0, height: "1px", background: "linear-gradient(90deg, transparent, rgba(139,92,246,.10), transparent)" }} />

        <div style={{ position: "relative" }}>
          <SectionLabel>PARTNER WITH US</SectionLabel>
          <h2 style={{
            fontFamily: "var(--font-heading, Outfit, sans-serif)",
            fontSize: "clamp(36px,6vw,72px)",
            fontWeight: 800, lineHeight: 1.05, letterSpacing: "-0.025em",
            color: "#F8FAFC", marginTop: "16px", marginBottom: "20px",
          }}>
            Miss this and you&apos;ll
            <br />
            <span style={{
              background: "linear-gradient(135deg, hsl(271,91%,75%), hsl(271,91%,60%))",
              WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text",
            }}>
              watch from the sidelines.
            </span>
          </h2>
          <p style={{ fontSize: "16px", color: "rgba(248,250,252,.4)", maxWidth: "480px", margin: "0 auto 48px", lineHeight: 1.7 }}>
            Sponsorship slots are limited. Reach out now to secure your tier and join the companies
            backing India's next generation of builders.
          </p>
          <a
            href="mailto:partners@synapse.acropolisblockchain.club?subject=Sponsorship%20Inquiry%20%E2%80%94%20SYNAPSE%201.0"
            className="sponsor-btn"
            style={{
              display: "inline-block", padding: "16px 44px",
              background: "linear-gradient(135deg, hsl(271,91%,55%), hsl(271,91%,38%))",
              color: "#fff", fontSize: "15px", fontWeight: 700, letterSpacing: "0.09em",
              borderRadius: "6px", textDecoration: "none",
              boxShadow: "0 0 60px hsla(271,91%,65%,.40)",
              border: "1px solid hsla(271,91%,65%,.35)",
            }}
          >
            PARTNER WITH US →
          </a>
          <div style={{ marginTop: "28px", display: "flex", flexDirection: "column", gap: "10px", alignItems: "center" }}>
            <a
              href="mailto:blockchainclub@acropolis.in"
              style={{ fontSize: "14px", color: "rgba(248,250,252,.45)", textDecoration: "none", fontFamily: "var(--font-mono, monospace)", letterSpacing: "0.04em", display: "flex", alignItems: "center", gap: "8px" }}
            >
              <span style={{ fontSize: "12px", color: "hsl(271,91%,65%)" }}>✉</span>
              blockchainclub@acropolis.in
            </a>
            <a
              href="tel:+918319232575"
              style={{ fontSize: "14px", color: "rgba(248,250,252,.35)", textDecoration: "none", fontFamily: "var(--font-mono, monospace)", letterSpacing: "0.04em", display: "flex", alignItems: "center", gap: "8px" }}
            >
              <span style={{ fontSize: "12px", color: "hsl(24,95%,53%)" }}>☎</span>
              +91 83192 32575
              <span style={{ fontSize: "11px", color: "rgba(255,255,255,.2)", letterSpacing: "0.10em", fontFamily: "var(--font-body, Inter, sans-serif)" }}>
                · Parth Nagar, VP
              </span>
            </a>
          </div>
        </div>
      </section>

      {/* ─── Footer ─────────────────────────────────────────────────────── */}
      <footer style={{
        padding: "28px 40px",
        borderTop: "1px solid rgba(255,255,255,.05)",
        display: "flex", alignItems: "center", justifyContent: "space-between",
        flexWrap: "wrap", gap: "16px",
        background: "rgba(5,5,12,.8)",
      }}>
        <span style={{ fontFamily: "var(--font-heading, Outfit, sans-serif)", fontSize: "14px", fontWeight: 700, letterSpacing: "0.12em", color: "hsl(271,91%,65%)" }}>
          SYNAPSE 1.0
        </span>
        <span style={{ fontSize: "12px", color: "rgba(255,255,255,.2)", fontFamily: "var(--font-mono, monospace)" }}>
          Acropolis Blockchain Club · AITR Indore · June 26–27, 2026
        </span>
        <Link href="/" style={{ fontSize: "13px", color: "rgba(255,255,255,.35)", textDecoration: "none" }}>
          ← Back to main site
        </Link>
      </footer>
    </main>
  );
}

// ─── Shared style helpers ──────────────────────────────────────────────────────
function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <div style={{
      fontSize: "11px", fontWeight: 700, letterSpacing: "0.20em",
      color: "hsl(271,91%,65%)", textTransform: "uppercase", marginBottom: "16px",
      display: "flex", alignItems: "center", gap: "10px",
    }}>
      <div style={{ width: 20, height: "1px", background: "hsl(271,91%,65%)", opacity: 0.5 }} />
      {children}
    </div>
  );
}

const sH: React.CSSProperties = {
  fontFamily: "var(--font-heading, Outfit, sans-serif)",
  fontSize: "clamp(26px, 4vw, 44px)",
  fontWeight: 800, lineHeight: 1.1, letterSpacing: "-0.02em",
  color: "#F8FAFC", marginBottom: "20px",
};

const bT: React.CSSProperties = {
  fontSize: "16px",
  color: "rgba(248,250,252,.45)",
  lineHeight: 1.8,
};
