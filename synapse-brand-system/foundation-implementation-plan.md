# SYNAPSE 1.0 — Foundation Implementation Plan
## Production-Grade Foundation Bootstrapping, Systems Dependency & File Creation Sequence

This document defines the physical implementation steps, file compilation dependencies, rendering guidelines, and testing checklists for bootstrapping the **SYNAPSE 1.0 Foundation Layer**. Designed for senior frontend software engineers and motion developers, this plan coordinates the assembly of our global scroll managers, modular CSS variables, and layout wrappers, providing a solid baseline before any visual sections are implemented.

---

## Part 1: Foundation Architecture & Technical Setup

### 1. Exact Implementation Order
To prevent file reference errors, we enforce a strict dependency order:
1.  **Phase 1 (Atomic):** Tailwind config extensions, custom types, and system TS paths.
2.  **Phase 2 (Styling):** Globals, variable tables, base CSS, and tailwind base/components hooks.
3.  **Phase 3 (Core Utilities):** Dynamic class combiners (`cn.ts`) and global animation preset vectors.
4.  **Phase 4 (Global State):** Scroll Provider wraps (Lenis scroll driver) and the Global Providers layout shell.
5.  **Phase 5 (Reusable Modules):** Section wrappers, custom blurs, and scroll reveal components.

---

## 2. Foundation Build Phases

```
[ Phase 1: Core Configuration ] ➔ [ Phase 2: Global Styling Setup ] ➔ [ Phase 3: Core Providers Integration ] ➔ [ Phase 4: Reusable Visual Utilities ] ➔ [ Phase 5: Verification & Dev QA ]
```

*   **Phase 1: Environment & Configs:** Setup typescript paths, config extensions, and static asset folders.
*   **Phase 2: Global Styles:** Overwrite styles base layers, typography imports, and raw HSL color variables.
*   **Phase 3: Scroll & Providers:** Implement global Lenis scroll wrappers and font optimization properties.
*   **Phase 4: Reusable Elements:** Build standard Section Wrappers, Atmospheric Glow modules, and transition reveals.
*   **Phase 5: Diagnostics QA:** Run verification scripts, verify 60 FPS scrolling rates, and test accessibility focus loops.

---

### 3. What Should Be Implemented First
*   **Tailwind Config Integration:** Extending custom spacing, HSL variables, Outfit/Inter typography pairs, and custom synaptic timings.
*   **Global CSS Structure:** Modular imports separating `globals.css`, `base.css`, and `variables.css`.
*   **Class Merger Helper (`cn.ts`):** Crucial to prevent utility conflicts when rendering layout cards.
*   **Scroll Wrapper (`ScrollProvider.tsx`):** Coordinates smooth Lenis scroll velocity triggers.

### 4. What Should NOT Be Implemented Yet
*   **❌ ThreeJS & React Three Fiber (R3F):** Canvas loops and portal shaders are lazy-loaded down the track.
*   **❌ Static Hero Elements:** The main landing header and logo widgets are kept separate from the base foundation.
*   **❌ Database API Routes:** Backend registration connectors and email captures remain stubbed.

### 5. Global Layout Implementation Strategy
The root layout organizes layout parameters:
*   Pre-loads Outfit and Inter fonts dynamically, sets up the base background, and applies a repeating film grain overlay to soften neon color gradients.

### 6. CSS Variable Implementation Strategy
Color channels are stored as raw HSL numerical tokens (`--neural-violet: 271 91% 65%`). This enables tailwind utility classes to generate opacity adjustments dynamically (`bg-brand-violet/10` or `border-brand-amber/20`).

### 7. Theme Engine Implementation
Standardizes theme variables across components, managing background glow adjustments during viewport scroll cycles.

### 8. Global Atmosphere Implementation
Integrates low-opacity atmospheric overlays to build vertical depth behind elements without bloating page size.

### 9. Background Rendering Architecture
Combines obsidian bases, high-frequency CSS grid blueprints, and seamless grain textures to create a responsive, dark, premium look.

### 10. Glow Engine Implementation
Glow backplates use static ovals styled with standard Tailwind blur tags (`blur-2xl`, `blur-3xl`) to project typographic elements forward without GPU strain.

### 11. Noise/Grain Implementation
Renders a repeating seamless noise texture on a fixed viewport wrapper, softening glowing light meshes and avoiding digital banding artifacts.

### 12. Typography Engine Implementation
Configures `Outfit` for editorial headers and `Inter` for highly legible body paragraphs, ensuring high contrast ratios to protect accessibility.

### 13. Motion Wrapper Implementation
Defines standard transition components globally within `/src/utils/motion.ts` to keep spring animations uniform across all elements.

### 14. Framer Motion Setup Execution
Standardizes animation curves using dedicated variables to prevent loose, bouncy transitions.

### 15. Lenis Integration Execution
Initializes smooth scroll loops through a dedicated provider, managing wheel velocities and gesture orientations.

### 16. Global Animation Utility Implementation
Provides standard CSS fade reveals and path tracers to coordinate staggered element entrances.

### 17. Reusable Section Wrapper Implementation
Encapsulates grid lines, layouts, and vertical borders, providing a structured template for building page sections.

### 18. Reusable Cinematic Container Implementation
Constrains layouts to a maximum width of `1200px` on desktop widths, maintaining vertical alignment across ultra-wide monitors.

### 19. Responsive System Implementation
Scales padding values proportionally and unmounts heavy dynamic scripts on small viewports to save mobile battery.

### 20. Accessibility Implementation
Includes standard ARIA roles for custom elements and keeps interactive focus selectors fully navigable via keyboard `Tab` routes.

### 21. GPU Safety Implementation
Tags moving elements with CSS `will-change: transform` to optimize graphics card memory buffers.

### 22. Performance-First Implementation Strategy
Limits active backdrop blurs and avoids real-time blur animations to maintain a steady 60 FPS scrolling rate.

### 23. Dynamic Import Strategy
Speeds up loading times by lazy loading complex widgets and dynamic canvas particles behind `ssr: false` client boundaries.

### 24. Render Optimization Rules
Static text modules remain Server Components to eliminate JavaScript bundle bloat, keeping interactive logic isolated at component borders.

### 25. Mobile Simplification Rules
Mobile screens disable heavy canvas shaders, reducing particle limits and simplifying background glows to performance-safe CSS meshes.

### 26. Development Workflow Rules
Features a diagnostic border checker to analyze coordinate grids, and tracks scroll speeds to prevent layout jank.

### 27. AI-Assisted Implementation Workflow
Instructs AI assistants to keep components decoupled, enforce Next.js server bounds, and use hardware-accelerated animations.

### 28. Common Implementation Mistakes to Avoid
*   **❌ Fluid Springs:** Bouncy, toy-like animations are banned.
*   **❌ real-time Blurring:** Dynamic blur calculations crash browsers; glows must remain static.
*   **❌ Mismatched System Times:** Timer calculations are wrapped in client-side hooks to prevent hydration errors.

### 29. Debugging Workflow
Inject a temporary debug border layout (`border border-dashed border-red-500/20`) to verify alignments and inspect elements in real time.

### 30. Final Implementation Readiness Checklist
*   [x] Tailwind config extended.
*   [x] Font files pre-loaded.
*   [x] Smooth scroll provider compiled.
*   [x] Diagnostic start page validated.

---

## Part 2: Step-by-Step Execution Sequences

### 1. Exact Implementation Phase Order
*   **Phase 1 (System Prep):** Standardize typescript paths, configurations, and core package versions.
*   **Phase 2 (Styling Foundation):** Write variable lists, reset global tags, and configure tailwind presets.
*   **Phase 3 (Core Providers):** Wire up the Lenis smooth scroll driver and global state layers.
*   **Phase 4 (Reusable Blocks):** Build standard section layouts, blurs, and transition components.
*   **Phase 5 (Testing & QA):** Verify compile times and confirm scrolling maintains a steady 60 FPS.

### 2. Exact File Creation Order
```
1. src/types/index.d.ts           <-- System types
2. tailwind.config.ts             <-- Custom presets
3. src/styles/variables.css       <-- HSL variables
4. src/styles/base.css            <-- Global resets
5. src/styles/globals.css         <-- Styling imports
6. src/utils/cn.ts                <-- Class merger
7. src/utils/motion.ts            <-- Animation presets
8. src/providers/ScrollProvider.tsx <-- Smooth scroll driver
9. src/providers/GlobalProvider.tsx <-- Global provider wrapper
10. src/app/layout.tsx            <-- Main layout shell
11. src/components/ui/SectionWrapper.tsx <-- Layout skeleton
12. src/components/ui/AtmosphericGlow.tsx <-- Glow backplates
13. src/components/ui/ScrollReveal.tsx <-- Transition reveals
14. src/app/page.tsx              <-- Diagnostic start page
```

### 3. Exact System Dependency Order
```
[ TSConfig / Tailwind ] ➔ [ Global Styles (globals.css) ] ➔ [ Class Merger (cn.ts) ] ➔ [ Scroll Provider (Lenis) ] ➔ [ App Layout (layout.tsx) ] ➔ [ Reusable UI Components ]
```

### 4. Exact Reusable Utility Creation Order
*   **Step 1:** Dynamic class resolver (`cn.ts`) to avoid naming overrides.
*   **Step 2:** Standard animation presets (`motion.ts`) to enforce uniform cubic-bezier transitions.
*   **Step 3:** Scroll reveal wrappers (`ScrollReveal.tsx`) to coordinate fade triggers.

### 5. Exact Atmosphere Engine Implementation Order
*   **Step 1 (Base void):** Pitch obsidian background + seamless CSS grain texture layer.
*   **Step 2 (Framing lines):** Draw static horizontal and vertical border lines.
*   **Step 3 (Atmospheric glows):** Position glowing ovals behind text tracks.
*   **Step 4 (Drifting particles):** Add floating particle loops using HTML5 Canvas wrappers.
