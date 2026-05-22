# SYNAPSE 1.0 — Project Initialization Setup Blueprint
## Production-Grade CLI Bootstrapping, Core Configurations & Codebase Setup

This document outlines the exact project initialization sequences, terminal commands, dependency versioning, core configs, and global setup wrappers required to boot up the **SYNAPSE 1.0** codebase. Built for senior frontend architects, this setup integrates Tailwind, typescript paths, smooth scrolling, and hardware-accelerated animations into a stable foundation before any page sections are built.

---

## Part 1: Architecture & Technical Initialization

### 1. Exact Project Initialization Commands
Use `npx` with automatic setup flags to initialize the Next.js framework inside your target project directory:
```bash
npx -y create-next-app@latest ./ --typescript --tailwind --eslint --app --src-dir --import-alias "@/*" --use-npm
```

### 2. Package Installation Commands
Install the core animation, typography, and utility packages via NPM:
```bash
npm install framer-motion gsap @gsap/react @lenis/react lucide-react clsx tailwind-merge
```
*(Optionally, for WebGL and 3D portal elements later)*:
```bash
npm install three @react-three/fiber @react-three/drei @types/three --save-dev
```

### 3. Recommended Dependency Versions
*   `next`: `^14.2.0` or higher
*   `framer-motion`: `^11.0.0`
*   `gsap`: `^3.12.5`
*   `@gsap/react`: `^2.1.1`
*   `@lenis/react`: `^1.1.5`
*   `clsx`: `^2.1.0`
*   `tailwind-merge`: `^2.2.2`

### 4. Tailwind Setup
Modify `tailwind.config.ts` to extend the custom design tokens (Neural Violet `#A855F7`, Cryptographic Amber `#F97316`, Obsidian base `#030305`, and structural transition curves).

### 5. TypeScript Configuration Strategy
Ensure `tsconfig.json` contains standard path mappings for clean visual imports:
```json
"paths": {
  "@/*": ["./src/*"],
  "@/components/*": ["./src/components/*"],
  "@/utils/*": ["./src/utils/*"],
  "@/styles/*": ["./src/styles/*"],
  "@/providers/*": ["./src/providers/*"]
}
```

### 6. App Router Setup
Keep routes performant by separating static layouts (`layout.tsx`) from the main page wrapper (`page.tsx`), maintaining high SEO compliance and quick initial loads.

### 7. Global CSS Setup
Import Next.js custom Google Fonts (`Outfit` & `Inter`) directly onto the root layout wrapper and set up CSS variables inside `/src/styles/globals.css`.

### 8. CSS Variable Architecture
Color channels are stored inside `globals.css` as raw HSL numeric parameters:
```css
--neural-violet: 271 91% 65%;
--crypto-amber: 24 95% 53%;
```
This enables Tailwind colors to adjust opacity dynamically in real time: `bg-brand-violet/10` or `border-brand-amber/20`.

### 9. Theme Token Integration
Map visual parameters directly inside standard tailwind presets to ensure all borders, blurs, and hover elements align perfectly.

### 10. Framer Motion Setup
Define standard transition configurations globally within `/src/utils/motion.ts` to keep spring behaviors uniform across buttons, panels, and modal popups.

### 11. Lenis Setup Strategy
Initialize the smooth scroll wrapper globally using a single dedicated provider component (`/src/providers/ScrollProvider.tsx`), matching touch and scroll speeds perfectly.

### 12. GSAP Setup Restrictions
GSAP timeline triggers are restricted to the 3D scroll portal canvas and complex vector lines, keeping hover effects inside Framer Motion to prevent double rendering lag.

### 13. Motion AI Kit Setup
Configure pre-designed widgets and glass overlays to inherit global system variables for fonts, rounded corners, and brand glows.

### 14. Folder Generation Commands
Use standard terminal tools to bootstrap the entire directory tree instantly (see exact scripts in Part 2).

### 15. Root Architecture Generation
Create Layout and Page templates to act as standard shells for custom elements.

### 16. Component Architecture Generation
Define structural subfolders for reusable units like glass buttons, magnetic links, status grids, and separators.

### 17. Utility Architecture Generation
Set up helper directories for custom mathematical models, animation offsets, and system diagnostics.

### 18. Animation Utility Setup
Build visual text splitters and border tracers inside `/src/utils/motion.ts` to coordinate staggered entrances.

### 19. Glow Utility Setup
Create functional glow variables to spotlight interface elements using hardware-accelerated static layers.

### 20. Global Provider Setup
Wrap standard providers (Theme variables, scroll drivers, UI interactions) inside a single parent component (`/src/providers/GlobalProvider.tsx`) to simplify configuration layouts.

### 21. Layout.tsx Structure Planning
Integrate metadata, viewports, global providers, and custom font weights cleanly inside the root layout.

### 22. Metadata Strategy
Set up search engine headers, descriptions, and OpenGraph tags to guarantee premium visibility.

### 23. Performance Optimization Defaults
Enforce strict budget caps: split and lazy-load major scripts, and compress images to webp formats under `200kb`.

### 24. Image Optimization Defaults
Configure `next.config.mjs` to cache graphics on Vercel's edge network, optimizing loading speeds.

### 25. SVG Handling Strategy
Import lightweight SVGs inline to support responsive color shifts and interactive styling.

### 26. Dynamic Import Rules
Lazy-load complex scripts and the main portal canvas using `ssr: false` flags to prioritize static visual rendering.

### 27. GPU Safety Defaults
Tag animated elements with CSS `will-change: transform` to optimize graphics card memory buffers.

### 28. Accessibility Defaults
Define keyboard-focus selectors using clear glowing rings and comply with screen reader layouts.

### 29. Development Workflow Rules
Set up atomic build stages, and overlay diagnostic grid borders during debugging to test layouts.

### 30. Final Initialization Checklist
Verify CSS compiles correctly, and confirm the scroll driver maintains a steady 60 FPS across all viewports.

---

## Part 2: CLI Commands & Configuration Setup

### 1. Exact Terminal Commands

Execute the following sequential terminal commands inside your workspace directory to bootstrap the environment:

```powershell
# 1. Initialize Next.js app in current directory
npx -y create-next-app@latest ./ --typescript --tailwind --eslint --app --src-dir --import-alias "@/*" --use-npm

# 2. Install core and animation libraries
npm install framer-motion gsap @gsap/react @lenis/react lucide-react clsx tailwind-merge

# 3. Create folder sub-architecture in src/ directory
mkdir src/components/common
mkdir src/components/hero
mkdir src/providers
mkdir src/styles
mkdir src/utils
```

### 2. Exact Folder Tree

Verify that your physical workspace matches the following directory tree:

```
synapse-root/
├── src/
│   ├── app/
│   │   ├── favicon.ico
│   │   ├── layout.tsx
│   │   └── page.tsx
│   ├── components/
│   │   └── common/
│   │       ├── GlassButton.tsx
│   │       ├── MagneticWrapper.tsx
│   │       └── GridDivider.tsx
│   ├── providers/
│   │   ├── ScrollProvider.tsx
│   │   └── GlobalProvider.tsx
│   ├── styles/
│   │   ├── globals.css
│   │   ├── variables.css
│   │   └── base.css
│   └── utils/
│       ├── motion.ts
│       └── cn.ts
├── tailwind.config.ts
├── tsconfig.json
└── package.json
```

### 3. Exact Starter Configuration Files

Below are the complete, production-ready configurations.

#### File A: [tailwind.config.ts](file:///c:/Users/parth%20nagar/OneDrive/Desktop/SYNAPSE/tailwind.config.ts)
```typescript
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        obsidian: {
          950: "#030305",
          900: "#09090E",
          800: "#0D0D15",
        },
        brand: {
          violet: {
            DEFAULT: "hsl(var(--neural-violet) / <alpha-value>)",
            glow: "hsla(271, 91%, 65%, 0.12)",
          },
          amber: {
            DEFAULT: "hsl(var(--crypto-amber) / <alpha-value>)",
            glow: "hsla(24, 95%, 53%, 0.08)",
          },
        },
      },
      fontFamily: {
        heading: ["var(--font-heading)", "sans-serif"],
        body: ["var(--font-body)", "sans-serif"],
        mono: ["var(--font-mono)", "monospace"],
      },
      borderRadius: {
        panel: "6px",
        btn: "4px",
      },
      transitionTimingFunction: {
        "synaptic": "cubic-bezier(0.16, 1, 0.3, 1)",
        "consensus": "cubic-bezier(0.34, 1.56, 0.64, 1)",
      },
    },
  },
  plugins: [],
};

export default config;
```

#### File B: [globals.css](file:///c:/Users/parth%20nagar/OneDrive/Desktop/SYNAPSE/src/styles/globals.css)
```css
@import "./variables.css";
@import "./base.css";

@tailwind base;
@tailwind components;
@tailwind utilities;

@layer utilities {
  .noise-overlay {
    background-image: radial-gradient(rgba(255, 255, 255, 0.015) 1px, transparent 0);
    background-size: 4px 4px;
  }
  
  .glass-panel {
    background: rgba(13, 13, 20, 0.6);
    backdrop-filter: blur(12px) saturate(180%);
    border: 1px solid rgba(255, 255, 255, 0.05);
  }
}
```

#### File C: [variables.css](file:///c:/Users/parth%20nagar/OneDrive/Desktop/SYNAPSE/src/styles/variables.css)
```css
:root {
  --neural-violet: 271 91% 65%;
  --crypto-amber: 24 95% 53%;
  
  --font-heading: 'Outfit', sans-serif;
  --font-body: 'Inter', sans-serif;
  --font-mono: 'Fira Code', monospace;
  
  --spacing-section: 120px;
  --spacing-container: 64px;
}

@media (max-width: 768px) {
  :root {
    --spacing-section: 64px;
    --spacing-container: 20px;
  }
}
```

#### File D: [base.css](file:///c:/Users/parth%20nagar/OneDrive/Desktop/SYNAPSE/src/styles/base.css)
```css
html,
body {
  background-color: #030305;
  color: #F8FAFC;
  overflow-x: hidden;
  font-family: var(--font-body);
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

/* Scroll track adjustments */
::-webkit-scrollbar {
  width: 6px;
}

::-webkit-scrollbar-track {
  background: #030305;
}

::-webkit-scrollbar-thumb {
  background: rgba(255, 255, 255, 0.1);
  border-radius: 3px;
}

::-webkit-scrollbar-thumb:hover {
  background: rgba(168, 85, 247, 0.3);
}
```

#### File E: [cn.ts](file:///c:/Users/parth%20nagar/OneDrive/Desktop/SYNAPSE/src/utils/cn.ts)
```typescript
import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * Combines Classnames with tailwind-merge to prevent utility overrides
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
```

#### File F: [motion.ts](file:///c:/Users/parth%20nagar/OneDrive/Desktop/SYNAPSE/src/utils/motion.ts)
```typescript
export const TRANSITION_SYNAPTIC = {
  type: "tween",
  ease: [0.16, 1, 0.3, 1], // Expo-Out
  duration: 0.8,
};

export const TRANSITION_ELASTIC = {
  type: "spring",
  stiffness: 120,
  damping: 18, // Consensus Back-Out analog
};

export const TRANSITION_AMBIENT = {
  ease: [0.445, 0.05, 0.55, 0.95], // Sine-In-Out
  duration: 2.2,
  repeat: Infinity,
  repeatType: "mirror" as const,
};
```

#### File G: [ScrollProvider.tsx](file:///c:/Users/parth%20nagar/OneDrive/Desktop/SYNAPSE/src/providers/ScrollProvider.tsx)
```typescript
"use client";

import React, { useEffect } from "react";
import { ReactLenis } from "@lenis/react";

interface ScrollProviderProps {
  children: React.ReactNode;
}

export function ScrollProvider({ children }: ScrollProviderProps) {
  useEffect(() => {
    // Disable native scroll restoration
    if (history.scrollRestoration) {
      history.scrollRestoration = "manual";
    }
  }, []);

  return (
    <ReactLenis
      root
      options={{
        duration: 1.2,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // smooth decel
        orientation: "vertical",
        gestureOrientation: "vertical",
        smoothWheel: true,
        wheelMultiplier: 1,
        touchMultiplier: 1.5,
      }}
    >
      {children}
    </ReactLenis>
  );
}
```

#### File H: [GlobalProvider.tsx](file:///c:/Users/parth%20nagar/OneDrive/Desktop/SYNAPSE/src/providers/GlobalProvider.tsx)
```typescript
"use client";

import React from "react";
import { ScrollProvider } from "./ScrollProvider";

interface GlobalProviderProps {
  children: React.ReactNode;
}

export function GlobalProvider({ children }: GlobalProviderProps) {
  return (
    <ScrollProvider>
      {children}
    </ScrollProvider>
  );
}
```

#### File I: [layout.tsx](file:///c:/Users/parth%20nagar/OneDrive/Desktop/SYNAPSE/src/app/layout.tsx)
```typescript
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
  title: "SYNAPSE 1.0 — Cinematic AI + Blockchain Hackathon",
  description: "Join the elite cohort at SYNAPSE 1.0. A highly conversion-focused, immersive retro-futuristic collision of neural networks and consensus systems.",
  viewport: "width=device-width, initial-scale=1, maximum-scale=1",
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
      <body className="bg-obsidian-950 text-slate-100 font-body min-h-screen relative antialiased selection:bg-brand-violet/30 selection:text-white">
        <GlobalProvider>
          {children}
        </GlobalProvider>
      </body>
    </html>
  );
}
```

#### File J: [page.tsx](file:///c:/Users/parth%20nagar/OneDrive/Desktop/SYNAPSE/src/app/page.tsx)
```typescript
import React from "react";

export default function Home() {
  return (
    <main className="relative w-full min-h-screen bg-obsidian-950 overflow-hidden noise-overlay flex flex-col items-center justify-center p-6 text-center">
      {/* Structural layout outlines during initial setup */}
      <div className="absolute inset-0 border border-white/5 pointer-events-none" />
      
      <div className="z-10 max-w-xl mx-auto space-y-6">
        <div className="text-xs font-mono tracking-[0.2em] text-brand-violet">
          // SYS_STATUS: OPERATIONAL
        </div>
        <h1 className="text-4xl md:text-6xl font-heading font-extrabold tracking-tighter text-white">
          SYNAPSE <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-violet to-brand-amber">1.0</span>
        </h1>
        <p className="text-sm md:text-base text-slate-400 font-body leading-relaxed max-w-md mx-auto">
          The foundational architecture has been successfully compiled. Prepping dynamic glow networks and active neural portal transition arrays.
        </p>
        <div className="pt-4">
          <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-tag bg-obsidian-900 border border-white/5 text-xs font-mono text-slate-500">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
            CORE ONLINE
          </span>
        </div>
      </div>
    </main>
  );
}
```

### 4. Configuration Sequence

1.  **Boot CLI command:** Initialize project skeleton using NPM/Next.js creator arguments (Step 1 of CLI commands).
2.  **Verify directories:** Check that the newly mapped paths under `src/` are structured properly.
3.  **Overwrite files:** Write `tailwind.config.ts`, `globals.css`, layout wrappers, provider architectures, and standard tools inside their specified target directories.
4.  **Run Development environment:** Start local host to ensure standard compilation functions properly.
