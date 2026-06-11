"use client";

import React, { useState } from "react";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import FAQAccordion from "./FAQAccordion";
import { cn } from "@/utils/cn";

interface FAQItem {
  id: string;
  num: string;
  category: "general" | "rewards" | "logistics";
  question: string;
  answer: string;
}

const FAQ_DATA: FAQItem[] = [
  {
    id: "faq-1",
    num: "01",
    category: "general",
    question: "Who is eligible to participate in SYNAPSE 1.0?",
    answer: "SYNAPSE 1.0 is open to all university students, self-taught developers, blockchain builders, and AI enthusiasts. Whether you are a seasoned coder or taking your first steps into advanced technologies, we provide the platform, mentorship, and tracks to help you build remarkable things.",
  },
  {
    id: "faq-2",
    num: "02",
    category: "rewards",
    question: "Is there a registration fee to attend?",
    answer: "No. SYNAPSE is 100% free of charge. Thanks to our core sponsor network—including OranetAI and EtherSync—all access slots, sandbox coding resources, API credits, food, and accommodation for offline finalists are completely covered.",
  },
  {
    id: "faq-3",
    num: "03",
    category: "general",
    question: "What is the team size requirement? Can I enter solo?",
    answer: "You can participate in teams of 1 to 4 members. Solo developers are highly welcome! We will facilitate a dedicated digital matchmaking session on our Discord prior to the event to help solo participants form synergistic groups.",
  },
  {
    id: "faq-4",
    num: "04",
    category: "logistics",
    question: "How do the Online Qualification and Offline Finals work?",
    answer: "The event is structured in two major stages. First, the online qualifications run remotely on git repositories. Once the jury panel validates submissions, the top-tier cohorts will be invited for the offline grand finals on September 12–13 at the Acropolis Institute campus in Indore, MP.",
  },
  {
    id: "faq-5",
    num: "05",
    category: "rewards",
    question: "Who owns the Intellectual Property (IP) of the developed projects?",
    answer: "You do. Participants retain 100% ownership of their ideas, code repositories, designs, and intellectual assets. We believe in empowering developers, and our sponsors exist to fund your long-term success without taking equity or ownership.",
  },
  {
    id: "faq-6",
    num: "06",
    category: "rewards",
    question: "How are the AWS Cloud Credits distributed?",
    answer: "Our cloud credits are powered by OranetAI. The grand prize winners will receive dedicated AWS credits to run production-grade infrastructure, with extra runway support distributed directly to high-potential track projects nominated by the jury.",
  },
  {
    id: "faq-7",
    num: "07",
    category: "logistics",
    question: "Is travel reimbursement or accommodation provided?",
    answer: "For all teams qualifying for the Grand Finals in Indore, on-campus food and visual hacking zone accommodations are fully provided for the duration of the 2-day hackathon. Highly competitive travel grants will be awarded based on git checkpoint quality and eligibility.",
  },
];

type CategoryFilter = "all" | "general" | "rewards" | "logistics";

export default function FAQSection() {
  const [activeTab, setActiveTab] = useState<CategoryFilter>("all");
  const [openId, setOpenId] = useState<string | null>("faq-1");

  const filteredFaqs = FAQ_DATA.filter((faq) => {
    if (activeTab === "all") return true;
    return faq.category === activeTab;
  });

  const handleToggle = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <SectionWrapper id="faq-section">
      {/* Muted background gradients to balance empty dark areas */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[350px] rounded-full bg-brand-violet/[0.018] blur-[120px] pointer-events-none" />

      {/* Decorative Blueprint coordinates */}
      <div className="absolute top-12 left-12 font-mono text-[9px] text-brand-violet/20 hidden xl:block select-none">
        [ SYSTEM_RESOLVER: FAQ_VAULT_V.1.0 ]
      </div>

      <div className="flex flex-col items-center">
        
        {/* Section Telemetry Header */}
        <div className="text-center max-w-2xl mb-16">
          <ScrollReveal delay={0.1}>
            <span className="font-mono text-xs tracking-[0.3em] text-brand-amber font-semibold uppercase mb-3 block">
              [ TRANSMISSION_TELEMETRY // QUERY_VAULT ]
            </span>
          </ScrollReveal>
          
          <ScrollReveal delay={0.2}>
            <h2 className="text-2xl md:text-4xl font-extrabold tracking-tight text-white mb-4 font-display uppercase">
              Frequently Asked Questions
            </h2>
          </ScrollReveal>
          
          <ScrollReveal delay={0.3}>
            <p className="text-xs md:text-sm text-obsidian-400 font-mono tracking-wide leading-relaxed">
              Resolve remaining structural doubts and lock in your credentials. The SYNAPSE transmission core is open for absolute clarity.
            </p>
          </ScrollReveal>
        </div>

        {/* Dynamic Category Filtering console */}
        <ScrollReveal delay={0.4} className="w-full flex justify-center mb-12">
          <div className="flex flex-wrap gap-2 md:gap-3 p-1.5 border border-white/5 bg-obsidian-900/30 rounded-lg max-w-lg justify-center">
            {(["all", "general", "logistics", "rewards"] as CategoryFilter[]).map((tab) => (
              <button
                key={tab}
                onClick={() => {
                  setActiveTab(tab);
                  // Auto-open first item in filtered list
                  const matched = FAQ_DATA.filter((faq) => tab === "all" || faq.category === tab);
                  if (matched.length > 0) {
                    setOpenId(matched[0].id);
                  } else {
                    setOpenId(null);
                  }
                }}
                className={cn(
                  "px-4 py-2 rounded font-mono text-2xs md:text-xs tracking-wider uppercase font-semibold transition-all duration-300",
                  activeTab === tab
                    ? "bg-brand-violet/10 border border-brand-violet/30 text-brand-violet shadow-[0_0_15px_rgba(124,58,237,0.08)]"
                    : "border border-transparent text-obsidian-400 hover:text-white"
                )}
              >
                {tab === "all" ? "All Queries" : tab === "rewards" ? "Prizes & IP" : `${tab} stages`}
              </button>
            ))}
          </div>
        </ScrollReveal>

        {/* Dynamic Accordion list layout */}
        <div className="w-full max-w-3xl flex flex-col gap-4">
          {filteredFaqs.map((faq, index) => (
            <ScrollReveal key={faq.id} delay={0.1 + index * 0.05} className="w-full">
              <FAQAccordion
                id={faq.id}
                num={faq.num}
                question={faq.question}
                answer={faq.answer}
                isOpen={openId === faq.id}
                onToggle={() => handleToggle(faq.id)}
                isDimmed={openId !== null && openId !== faq.id}
              />
            </ScrollReveal>
          ))}
        </div>

      </div>
    </SectionWrapper>
  );
}
