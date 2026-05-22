# SYNAPSE 1.0 — Hero Implementation Preparation Blueprint
## Architectural Decomposition, Render Layer Planning & Animation Orchestration Sequence

This document defines the technical decomposition, rendering layering, animation staging, and interactive behaviors for building the **SYNAPSE 1.0 Hero Section**. Engineered as a pre-coding blueprint for front-end developers, this preparation establishes the exact component bounds, state controls, dynamic glow coordinates, and performance constraints before hero development is executed.

---

## Part 1: Hero Decomposition & Render Architecture

### 1. Hero System Decomposition
The Hero Section is divided into six independent systems to isolate functionality and state loops:
*   **System 1: Navigation Control:** Symmetrical global nav framing.
*   **System 2: Branding Stack:** Central Outlaid headlines and technical badges.
*   **System 3: Interactive CTA Node:** Magnetic button blocks and sheen sweeps.
*   **System 4: Urgency Matrix:** Tabular-num nixie countdown modules.
*   **System 5: Grounding Trust Base:** Perpetual scrolling sponsor marquees.
*   **System 6: Volumetric Atmosphere:** Drift canvas particles and ambient glows.

---

## 2. Hero Render Layer Hierarchy

The visual stack is rendered using absolute z-indexing layers to enforce vertical separation:

```
[ LAYER 60: nav Frame ] -----------------------------------------> Navigation panel & borders
       |
[ LAYER 50: Interactive UI ] ------------------------------------> Magnetic CTAs & nixie count
       |
[ LAYER 40: Typography ] ----------------------------------------> Symmetrical titles & descriptions
       |
[ LAYER 30: Atmosphere ] ----------------------------------------> Canvas particles & smoke Divs
       |
[ LAYER 20: Energy Mesh ] ---------------------------------------> Radial HSL glow meshes
       |
[ LAYER 10: Terminal base ] -------------------------------------> Obsidian void & grid blueprints
```

---

### 3. Hero DOM Structure Planning
The master structure matches a clean grid flow, wrapping children inside relative viewports with pointer-event rules optimized to preserve link accessibility.

### 4. Hero Atmosphere Composition
Combines low-opacity corner smoke clouds with eighty drift canvas particles to represent active neural networks inside a dark void.

### 5. Hero Lighting Orchestration
Key lights (Neural Violet behind titles) contrast with warm Amber underlights rising from the Trust Strip base, illuminating interactive modules.

### 6. Hero Typography Rendering Strategy
Outfit geometric headers mapped with tight tracking (`-0.04em`) are paired with legible, anti-aliased Inter body text, enforcing high-contrast minimums.

### 7. Hero CTA Orchestration
Splits primary action wrappers into Client boundaries, housing magnetic spring wrappers (`stiffness: 120`, `damping: 18`) and glowing cursor hover tracks.

### 8. Hero Countdown Integration Strategy
Nixie numerical digits calculate remaining apply windows cleanly inside client hooks, initializing standard `--d : --h` skeletons during initial loads.

### 9. Hero Trust-Strip Integration
Embeds verified sponsors inside glassmorphic cards in a slow scrolling marquee. Sponsors are styled white by default, lighting up only during active hover.

### 10. Hero Motion Choreography
Entrance animations initialize sequentially: grid borders draw, main titles rise, category tags fade, and CTA panels lock into place using spring decels.

### 11. Hero Hover Interaction Planning
Cursor tracking gradients expand and follow mouse movements, casting ambient lights on cards and grids as users hover.

### 12. Hero Mouse Movement Philosophy
The cursor behaves as a magnetic light source, attracting CTAs and triggering diagonal border sweeps on glass cards inside hover zones.

### 13. Hero Cinematic Pacing Strategy
Animation timings are timed to complete entrance reveals within `1.2 seconds`, transitioning smoothly into slow ambient looping paths.

### 14. Hero Scroll Handoff Strategy
As users scroll, Lenis drives smooth deceleration fades, reducing background smoke and unmounting canvas elements to prepare for portal entry points.

### 15. Hero-to-Portal Transition Preparation
Prepares a designated coordinate trigger (`top 100%`) linking ScrollTrigger scrub speeds with three-dimensional R3F tunnel camera flights.

### 16. Hero Glow Orchestration
Background glows translate on hardware-accelerated opacity maps, avoiding real-time blurring calculations to prevent browser lag.

### 17. Hero Responsive Adaptation Planning
Visual components clamp spacing parameters and collapse horizontally paired CTA nodes into single vertical blocks on small viewports.

### 18. Hero Mobile Simplification Strategy
Unmounts the R3F portal completely on mobile screens under `768px`, converting dynamic glows to static, performance-safe HSL mesh zones.

### 19. Hero GPU Safety Rules
Moving elements are tagged with CSS `will-change: transform`, and paint flash profiles are checked in Chrome DevTools to ensure zero layout-thrashing occurs.

### 20. Hero Accessibility Rules
Applies clear ARIA role markers to count countdown panels, and ensures interactive buttons are fully navigable via standard keyboard `Tab` routes.

### 21. Hero Readability Protection Rules
Body descriptions must not use raw glowing neon colors. Saturated highlights are restricted strictly to accent text, borders, and main titles.

### 22. Hero Animation Sequencing Plan
Entrance delays stagger sequentially (`index * 0.08s`) to guide attention from system indicators toward registration buttons.

### 23. Hero Rendering Priority System
Initializes logos, grid lines, and titles immediately during initial loads, lazy loading particle systems and countdown numbers afterwards.

### 24. Hero Component Isolation Strategy
The root hero remains a static Server Component, isolating dynamic states (hover coordinates, countdown dates) inside localized Client sub-components.

### 25. Hero Lazy-Loading Rules
Uses dynamic imports (`dynamic()` with `ssr: false`) to load canvas particles only after static DOM elements have successfully compiled.

### 26. Hero Performance Budget
Locks strict limits: initial CSS sizes must load under `25kb`, JS core bundles under `120kb`, and scrolling rates must maintain a steady 60 FPS.

### 27. Hero Hydration Safety Rules
Wrap countdown initializations inside client-side `useEffect` hooks, bypassing mismatches between server pre-renders and browser dates.

### 28. Hero Debugging Workflow
Features a coordinate grid toggle class (`border border-dashed border-red-500/20`) to analyze spacing fields.

### 29. Hero Refinement Workflow
Fine-tune hover spring properties and trackpad scroll speeds before starting major page developments.

### 30. Final Hero Implementation Readiness Summary
Both the foundational codebase and visual validation specs are operational, preparing the project for pixel-perfect hero implementation.

---

## Part 2: Step-by-Step Staging & Execution

### 1. Exact Hero Component Breakdown
```
1. BaseHero.tsx                 <-- Root layout coordinator
2. SystemIndicators.tsx         <-- Border data & nav modules
3. CentralStack.tsx             <-- Typography headers
4. CTAButtonGroup.tsx           <-- Client buttons (Magnetic wrapper hooks)
5. NixieCountdown.tsx           <-- Nixie countdown calculations
6. CanvasParticles.tsx          <-- Background drifting engine
```

### 2. Exact Render Order
1.  **Stage 1:** Base obsidian container + CSS noise layer overlay.
2.  **Stage 2:** Nav framing, diagnostic text panels, and logo vectors.
3.  **Stage 3:** Outfit typography titles and body descriptions.
4.  **Stage 4:** Countdown panels, registration forms, and CTA buttons.
5.  **Stage 5:** Ambient SVG glows and dynamic canvas drifting particles.

### 3. Exact Animation Sequence Order
```
1. T = 000ms  ➔ Draw 1px Frame borders (path length, 500ms)
2. T = 150ms  ➔ Category tags slide down (translateY, 300ms)
3. T = 300ms  ➔ Title "SYNAPSE 1.0" rises (text-mask, 800ms)
4. T = 550ms  ➔ Description fades in (opacity, 400ms)
5. T = 700ms  ➔ CTA Buttons & Countdown lock in (spring decel, 600ms)
6. T = 900ms  ➔ Marquee trust strip fades upward (translateY, 500ms)
```

### 4. Exact Layering Strategy
*   **Back (Z: 10-20):** Noise texture ➔ Grid blueprints ➔ Neon radial glows.
*   **Mid (Z: 30):** Drifting canvas particles ➔ Ambient corner smoke clouds.
*   **Front (Z: 40-50):** Typographic titles ➔ Glass cards ➔ Symmetrical CTA buttons.

### 5. Exact Implementation Dependency Order
```
[ types/index.d.ts ] ➔ [ tailwind.config.ts ] ➔ [ utils/motion.ts ] ➔ [ components/ui/SectionWrapper.tsx ] ➔ [ components/hero/CentralStack.tsx ] ➔ [ components/hero/CTAButtonGroup.tsx ] ➔ [ components/hero/BaseHero.tsx ]
```
