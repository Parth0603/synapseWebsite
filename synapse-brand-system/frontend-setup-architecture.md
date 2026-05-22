# SYNAPSE 1.0 — Foundational Frontend Setup Architecture
## Production-Grade Codebase Structure & Technical Setup Blueprint

This document defines the technical architectural blueprints, folder conventions, rendering guidelines, and global providers required to boot up the frontend codebase for **SYNAPSE 1.0**. Built for senior software architects, this setup prevents visual jank, coordinates server/client hydration loops, and prepares the workspace for scalable, modular, AI-assisted development.

---

## Part 1: Technical Architecture & Systems Setup

### 1. Recommended Folder Structure
We enforce a strict physical separation between server layouts, client-side interactions, hooks, and static assets. The workspace utilizes a clean `src/` directory convention:

```
synapse-root/
├── public/                       <-- Static assets, noise.png overlay, global icons
├── src/
│   ├── app/                      <-- Next.js App Router (Layouts, pages, route groups)
│   ├── components/               <-- Reusable UI components divided by domain
│   ├── hooks/                    <-- Custom client-side React hooks
│   ├── providers/                <-- React Context Providers (Lenis, Theme, UI)
│   ├── styles/                   <-- Global CSS files and Tailwind base layers
│   ├── utils/                    <-- Pure helper functions and math libraries
│   └── types/                    <-- Unified TypeScript interfaces
├── tailwind.config.ts            <-- Core styling configuration
└── tsconfig.json                 <-- Core compiler settings
```

### 2. App Router Architecture
Next.js App Router handles all structural skeleton renders:
*   **Server Components by Default:** Page wrappers, text panels, FAQs, and footer elements are kept as Server Components (`.tsx`) to eliminate JavaScript bundle overhead.
*   **Client Boundaries (`"use client"`):** Dynamic inputs, interactive countdown nixies, custom canvas particle renderers, and magnetic CTA blocks are isolated at component boundaries to keep client-side updates fast.

### 3. Global Layout Strategy
The root layout (`src/app/layout.tsx`) acts as the parent container, setting up structural parameters:
*   **Theme Integration:** Inject font classes directly onto the base `body` tag to prevent Font-Clash and Layout Shifts (CLS).
*   **Core Wrapper:** Wraps the entire visible viewport inside a hardware-accelerated scroll boundary to keep smooth scrolling consistent.

### 4. Global Theme Provider Strategy
Provides functional state hooks to nested elements:
*   **Implementation:** An isolated Client Provider (`src/providers/ThemeProvider.tsx`) wrapping the app.
*   **Purpose:** Tracks active brand color states (Violet AI mode vs Amber Blockchain mode) and manages active scroll velocities to coordinate dynamic lighting adjustments.

### 5. CSS Variable Architecture
Centralizes style values inside `/src/styles/variables.css`:
*   Colors are defined as raw, comma-separated HSL channels (`--color-neural-violet: 271, 91%, 65%`). This enables tailwind utility classes to generate opacity shifts dynamically: `bg-neural-violet/20` (equivalent to `rgba(168, 85, 247, 0.2)`).

### 6. Tailwind Config Architecture
Our Tailwind configuration extension coordinates with CSS variables:
*   Configures custom timers like `ease-synaptic` (`cubic-bezier(0.16, 1, 0.3, 1)`) and border systems (`rounded-panel: 6px`, `rounded-btn: 4px`).

### 7. Global Styles Structure
The global style pipeline is split into logical modules:
*   `base.css`: Declares Next.js fonts, scroll settings, and anti-aliasing layers.
*   `variables.css`: Declares color schemes and structural variables.
*   `components.css`: Declares custom glassmorphism panels, overlays, and grid outlines.

### 8. Motion Infrastructure Setup
Coordinates animations across the DOM tree:
*   Locks standard easing curves inside single variables.
*   Framer Motion triggers micro-animations, while GSAP handles heavy scroll scrubbing.

### 9. Lenis Integration Strategy
Lenis maintains smooth scrolling across desktop, trackpad, and mobile views:
*   **Provider wrapper:** Rendered globally inside `src/providers/ScrollProvider.tsx`.
*   **Setup parameters:** Locks scroll friction and timing parameters (`lerp: 0.1`, `syncTouch: true`) to ensure seamless interactions without trackpad lag.

### 10. Framer Motion Global Patterns
Establishes standardized animation variables:
*   **No local curves:** All `<motion.div>` configurations must consume standardized preset variables (e.g. `TRANSITION_SYNAPTIC`, `TRANSITION_ELASTIC`) imported directly from `@/utils/motion`.

### 11. Scroll Management Philosophy
Friction is maintained consistently across sections:
*   **Strict Lenis driving:** The browser's native scroll thread is entirely intercepted and smoothed by Lenis.
*   **Scroll-Trigger Offsets:** GSAP ScrollTrigger binds to structural markers (`top 85%`) to initiate staggers as elements scroll into the active viewport.

### 12. Animation Utility Architecture
Provides a library of helper functions for common animation tasks:
*   Includes path tracers (`drawSvgPath()`), stagger delays (`createStaggerDelay(index)`), and mouse coordinates calculations.

### 13. Glow Utility Architecture
Computes and applies dynamic glow shadows to containers:
*   Generates glowing borders and hover highlights without taxing browser paint engines.

### 14. Typography System Integration
Next.js preloads fonts to guarantee fast, layout-shift-free rendering:
*   **Outfit** (Headers) and **Inter** (Body/Data) are loaded with `display: swap` enabled, preventing default system fonts from flashing during page hydration.

### 15. Reusable Component Architecture
Components are structured into decoupled visual modules:
*   Includes buttons, panels, custom inputs, countdown nixies, and grid separators.

### 16. Hero Component Isolation Strategy
The Hero section is divided into separate, manageable files:
*   Maintains zero redundant imports and limits client states exclusively to active interaction cards to preserve fast page loading speeds.

### 17. Performance-First Rendering Rules
Establishes clear rules to maintain a steady **60 FPS** frame rate:
*   Real-time blur filters are banned inside rendering loops. Glow animations shift only basic opacity or hardware-accelerated transform scales to minimize GPU strain.

### 18. Responsive Infrastructure
Responsive layouts are managed through unified grid classes:
*   Grid spacing values are clamped to viewport widths, and heavy WebGL canvas overlays are completely unmounted on mobile screens to save battery.

### 19. GPU Safety Setup
Avoids GPU memory leaks and crashes:
*   Reuses materials, textures, and geometry coordinates, calling `.dispose()` on WebGL assets when they unmount.

### 20. Accessibility Infrastructure
Maintains WCAG AAA compliance:
*   Applies appropriate ARIA tags to custom components and ensures interactive elements are fully navigable via standard keyboard `Tab` routes.

### 21. Dynamic Import Strategy
Speeds up initial page loads through lazy loading:
*   Components like canvas particle systems and interactive registration forms are dynamically loaded using Next.js `dynamic()` tools with `ssr: false` enabled.

### 22. WebGL Isolation Rules
Restricts WebGL resources strictly to designated canvas areas:
*   Only one parent canvas is rendered on the page, and the active loop suspends dynamically when it scrolls out of the active viewport.

### 23. State Management Philosophy
Keeps state variables isolated to specific components:
*   Global state is bypassed in favor of localized React hooks to prevent unnecessary re-rendering across unrelated page components.

### 24. Loading & Hydration Rules
Prevents hydration mismatch errors:
*   Nixie countdown timers remain hidden behind client-side checks on initialization, rendering standard skeleton badges until system dates hydrate successfully.

### 25. Image Optimization Rules
Uses standard optimization patterns:
*   Uses Next.js `next/image` to parse graphic files, providing optimized sizing, automatic webp formatting, and custom dimensions.

### 26. SVG Handling Strategy
Ensures SVGs scale correctly:
*   Inline code is preferred for interactive elements like custom navigation icons, while external SVG paths are used for static sponsor logos.

### 27. Noise/Texture Layer Strategy
Gives the dark theme a textured, cinematic appearance:
*   Applies a repeating, low-opacity CSS noise overlay (`opacity: 0.015`) to the global wrapper, softening glowing neon gradients and preventing banding artifacts.

### 28. Debugging & Dev Workflow
Includes debugging tools for quick layout checks:
*   Provides a toggle class (`border border-dashed border-red-500/20`) to instantly visualize boundaries and grid paths.

### 29. AI-Assisted Development Rules
Ensures clean code outputs from AI assistants:
*   Instructs AI tools to output decoupled code modules, implement hardware-accelerated CSS animations, and strictly observe Next.js server/client boundaries.

### 30. Final SYNAPSE Frontend Foundation Summary
The Foundational Setup Architecture coordinates visual styles, smooth scrolling, layout components, and animation timelines. By prioritizing static-first rendering, separating client-side components from layouts, and optimizing graphics, it ensures a highly performant, immersive landing experience.

---

## Part 2: Folder & Codebase Layout

Below is the complete structural layout for your frontend code files.

### 1. Recommended Root Folder Structure
```
synapse-root/
├── .env.local                    <-- Environmental keys
├── package.json                  <-- Dependency manifest
├── tailwind.config.ts            <-- Tailwind variables
├── tsconfig.json                 <-- Compiler instructions
├── next.config.mjs               <-- Next.js configurations
└── src/
    ├── app/                      <-- Next.js Router System
    ├── components/               <-- UI component library
    ├── hooks/                    <-- Custom state logic hooks
    ├── providers/                <-- Global wrapper states
    ├── styles/                   <-- Styling architecture
    ├── types/                    <-- System TS types
    └── utils/                    <-- Animation & math helpers
```

### 2. Recommended src/app Structure
```
src/app/
├── layout.tsx                    <-- Global layout skeleton
├── page.tsx                      <-- Main page hub
├── favicon.ico                   <-- Site favicon
└── core-portal/
    └── page.tsx                  <-- Dedicated fallback route
```

### 3. Recommended Component Organization
```
src/components/
├── common/                       <-- Global reusable blocks
│   ├── MagneticWrapper.tsx
│   ├── GlassButton.tsx
│   ├── GridDivider.tsx
│   └── SystemStatus.tsx
├── hero/                         <-- Hero isolated modules
│   ├── BaseHero.tsx
│   ├── CentralStack.tsx
│   ├── NixieCountdown.tsx
│   ├── CTAButtonGroup.tsx
│   └── CanvasParticles.tsx
└── portal/                       <-- WebGL isolated modules
    ├── PortalCanvas.tsx
    ├── ShaderTunnel.tsx
    └── FallbackGradient.tsx
```

### 4. Recommended Animation Utility Structure
```
src/utils/
├── motion-presets.ts             <-- Easing specifications
├── glow-generators.ts            <-- Path calculations
├── dynamic-math.ts               <-- Coordinate helpers
└── scroll-triggers.ts            <-- Scroll hooks library
```

### 5. Recommended Styles Architecture
```
src/styles/
├── globals.css                   <-- Main style loader
├── base.css                      <-- Font & layout rules
├── variables.css                 <-- HSL variables
└── components.css                <-- Custom glassmorphic styles
```
