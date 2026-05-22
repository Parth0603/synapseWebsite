# SYNAPSE 1.0 — Tech Stack & Performance Blueprint
## Premium Tech Stack and High-Performance Guardrails

> **"Cinematic visuals must never cost a single frame. A smooth 60 FPS scrolling experience on mid-tier mobile devices is our absolute baseline."**

---

## 1. The Core Architecture Stack

| Library / Tool | Core Purpose in SYNAPSE | Placement & Implementation |
| :--- | :--- | :--- |
| **Next.js (App Router)** | Foundational React framework. Provides SSR (Server-Side Rendering) for instant loading speed and high SEO compliance. | Entire application. Structural panels, Tracks, FAQ, and footer must remain Server Components to keep the JS bundle minimal. |
| **TailwindCSS** | High-speed layout, grid structures, and typography scaling. | Global utility classes. Used for all layout positioning, paddings, borders, grid setups, and responsive design break points. |
| **Framer Motion** | Declarative React micro-interactions, layout transitions, and card springs. | Used for all interactive buttons, card cursor-hover tracking, dialog transitions, staggered scroll reveals, and micro-physics. |
| **Lenis Scroll** | Ultra-smooth scroll control. Prevents scroll-jank across different OS/browsers. | Global wrapper. Essential for ensuring scroll-linked animations sync perfectly without tearing or lag. |
| **GSAP (Limited)** | Complex multi-stage scroll animations. | Restricted to: the **Portal Scroll Scrubbing** (coordinating R3F canvas scale) and the **Timeline vertical growth line**. |
| **React Three Fiber (R3F)**| Three.js declarative interface. Renders deep 3D spaces. | Placed *strictly* in the Portal Transition Section Canvas. Never used elsewhere to avoid GPU memory overhead. |
| **Motion AI Kit** | Premium pre-engineered UI components. | Used to accelerate high-fidelity micro-cards and glow buttons, customized to match SYNAPSE branding rules. |
| **Vercel** | Edge CDN deployment, automated image optimization, and analytics. | Production hosting and domain routing, utilizing edge middleware for instant page assembly. |

---

## 2. Performance Precautions & Optimization Matrix

High-intensity animations can rapidly degrade performance. Follow these optimization parameters strictly:

### A. React Three Fiber (R3F) Canvas Safety
*   **Lazy Loading & Suspense:** Wrap the R3F Canvas in a dynamic import (`next/dynamic`) with `ssr: false`. Do not load the WebGL engine until the user approaches the viewport.
*   **Asset Management:** Use low-poly geometries and procedural shader materials instead of heavy `.gltf` model imports where possible. Keep the entire portal system under `1.5 MB` in assets.
*   **Viewport Culling:** Disable the canvas rendering loop when the Portal Section scrolls out of the viewport. Use `useFrame` check or an intersection observer to freeze rendering.

### B. Framer Motion Best Practices
*   **Hardware Acceleration:** Always animate `transform` properties (`x`, `y`, `scale`, `rotate`) and `opacity`. Never trigger layout thrashing by animating CSS dimensions (`width`, `height`, `margin`, `top`, `left`).
*   **Use `layoutId` Wisely:** Standardize layouts without over-using shared layout ids, which cause heavy browser re-paint loops.
*   **Reduced Motion Support:** Wrap animations with the `useReducedMotion` hook from Framer Motion. Provide instant transitions for users with motion sensitivities.

### C. Lenis + GSAP Integration Guardrails
*   **Scroll-Trigger Debouncing:** Do not add heavy event listeners to the scroll container.
*   **Scrubbing Limits:** Limit GSAP `scrub` settings to a maximum value of `1.5` to maintain responsiveness on trackpads.
*   **Will-Change Tags:** Strategically apply CSS `will-change: transform` to cards undergoing heavy scroll-bound transitions to allocate GPU rendering buffers in advance.

---

## 3. What Should NOT Be Overused

To prevent the website from feeling like a chaotic, slow-loading art project, the following are strictly prohibited in production:

1.  **❌ Multiple Canvas Elements:** Only *one* `<canvas>` element is permitted on the entire page (the Portal Transition). All other graphics must be modern CSS/SVG.
2.  **❌ Heavy Glitch Shaders:** Glitch filters consume massive pixel fill-rates. Only use text glitching as a fleeting hover transition on main hero headings, never on body copy.
3.  **❌ Infinite Particle Overloads:** Hero background particles must not exceed `100` total active nodes. Offscreen particles must be instantly destroyed.
4.  **❌ Nested Frame-Rate loops:** Never run GSAP tickers alongside R3F `useFrame` hooks on the same properties. Sync them through a single parent scroll scrub.
