import React from "react";
import type { Metadata } from "next";
import { Inter, Outfit, Fira_Code } from "next/font/google";
import { GlobalProvider } from "@/providers/GlobalProvider";
import "@/styles/globals.css";

const fontOutfit = Outfit({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-heading",
  display: "swap",
});

const fontInter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-body",
  display: "swap",
});

const fontMono = Fira_Code({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://synapse.acropolisblockchain.club"),
  title: "SYNAPSE 1.0 — Immersive AI + Blockchain Hackathon",
  description: "Join the elite cohort at SYNAPSE 1.0 (June 12-13, Indore). A hybrid hackathon organized by Acropolis Blockchain Club. Build high-fidelity AI and Web3 protocols.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "SYNAPSE 1.0 — Immersive AI + Blockchain Hackathon",
    description: "Join the elite cohort at SYNAPSE 1.0 (June 12-13, Indore). Build high-fidelity AI and Web3 protocols. Free registration.",
    url: "https://synapse.acropolisblockchain.club",
    siteName: "SYNAPSE 1.0",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "SYNAPSE 1.0 Hackathon",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "SYNAPSE 1.0 — Immersive AI + Blockchain Hackathon",
    description: "Join the elite cohort at SYNAPSE 1.0 (June 12-13, Indore). Free registration.",
    images: ["/og-image.png"],
    creator: "@acropolisblockchain",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  keywords: [
    "SYNAPSE 1.0",
    "Hackathon",
    "AI Hackathon",
    "Blockchain Hackathon",
    "Acropolis Blockchain Club",
    "AITR Indore",
    "Web3",
    "Artificial Intelligence",
    "Indore Hackathon",
    "Coding Competition",
  ],
};

const eventSchema = {
  "@context": "https://schema.org",
  "@type": "Event",
  "name": "SYNAPSE 1.0",
  "description": "SYNAPSE 1.0 is an immersive, high-fidelity AI + Blockchain hybrid hackathon organized by the Acropolis Blockchain Club in Indore, MP, India.",
  "startDate": "2026-06-12T09:00:00+05:30",
  "endDate": "2026-06-13T18:00:00+05:30",
  "eventAttendanceMode": "https://schema.org/MixedEventAttendanceMode",
  "eventStatus": "https://schema.org/EventScheduled",
  "location": [
    {
      "@type": "Place",
      "name": "Acropolis Institute of Technology and Research (AITR) Campus",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Manglia Square, Bypass Road",
        "addressLocality": "Indore",
        "addressRegion": "Madhya Pradesh",
        "postalCode": "453771",
        "addressCountry": "IN"
      }
    },
    {
      "@type": "VirtualLocation",
      "url": "https://synapse.acropolisblockchain.club"
    }
  ],
  "image": "https://synapse.acropolisblockchain.club/og-image.png",
  "organizer": {
    "@type": "Organization",
    "name": "Acropolis Blockchain Club",
    "url": "https://synapse.acropolisblockchain.club"
  },
  "offers": {
    "@type": "Offer",
    "url": "https://synapse.acropolisblockchain.club",
    "price": "0",
    "priceCurrency": "INR",
    "availability": "https://schema.org/InStock",
    "validFrom": "2026-05-01"
  }
};

const orgSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Acropolis Blockchain Club",
  "alternateName": "ABC",
  "url": "https://synapse.acropolisblockchain.club",
  "logo": "https://synapse.acropolisblockchain.club/logo.png",
  "sameAs": [
    "https://github.com/acropolisblockchain",
    "https://linkedin.com/company/acropolisblockchain",
    "https://discord.gg/synapse"
  ]
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Who is eligible to participate in SYNAPSE 1.0?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "SYNAPSE 1.0 is open to all university students, self-taught developers, blockchain builders, and AI enthusiasts. Whether you are a seasoned coder or taking your first steps into advanced technologies, we provide the platform, mentorship, and tracks to help you build remarkable things."
      }
    },
    {
      "@type": "Question",
      "name": "Is there a registration fee to attend?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "No. SYNAPSE is 100% free of charge. Thanks to our core sponsor network—including OranetAI and EtherSync—all access slots, sandbox coding resources, API credits, food, and accommodation for offline finalists are completely covered."
      }
    },
    {
      "@type": "Question",
      "name": "What is the team size requirement? Can I enter solo?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "You can participate in teams of 1 to 4 members. Solo developers are highly welcome! We will facilitate a dedicated digital matchmaking session on our Discord prior to the event to help solo participants form synergistic groups."
      }
    },
    {
      "@type": "Question",
      "name": "How do the Online Qualification and Offline Finals work?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "The event is structured in two major stages. First, the online qualifications run remotely on git repositories. Once the jury panel validates submissions, the top-tier cohorts will be invited for the offline grand finals on June 12–13 at the Acropolis Institute campus in Indore, MP."
      }
    },
    {
      "@type": "Question",
      "name": "Who owns the Intellectual Property (IP) of the developed projects?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "You do. Participants retain 100% ownership of their ideas, code repositories, designs, and intellectual assets. We believe in empowering developers, and our sponsors exist to fund your long-term success without taking equity or ownership."
      }
    },
    {
      "@type": "Question",
      "name": "How are the AWS Cloud Credits distributed?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Our cloud credits are powered by OranetAI. The grand prize winners will receive dedicated AWS credits to run production-grade infrastructure, with extra runway support distributed directly to high-potential track projects nominated by the jury."
      }
    },
    {
      "@type": "Question",
      "name": "Is travel reimbursement or accommodation provided?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "For all teams qualifying for the Grand Finals in Indore, on-campus food and visual hacking zone accommodations are fully provided for the duration of the 2-day hackathon. Highly competitive travel grants will be awarded based on git checkpoint quality and eligibility."
      }
    }
  ]
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${fontOutfit.variable} ${fontInter.variable} ${fontMono.variable}`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(eventSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      </head>
      <body className="bg-obsidian-950 text-slate-100 font-body min-h-screen relative antialiased selection:bg-brand-violet/30 selection:text-white">
        <GlobalProvider>
          {children}
        </GlobalProvider>
      </body>
    </html>
  );
}
