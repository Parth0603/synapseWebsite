# SYNAPSE 1.0 — Motion & Animation System
## Performance-First, High-Impact Motion Engineering

> **"Motion in SYNAPSE is physical and magnetic. It should feel like high-grade machinery accelerating smoothly, with instant response and graceful dampening."**

---

## 1. Animation Philosophy

Animation is a powerful narrative tool that can easily destroy usability if overused. In SYNAPSE 1.0, motion is strictly regulated by the **10/90 Principle**:
*   **10% of the experience is Cinematic Hype:** (Hero entrance and Portal transition) where physics, 3D space, and immersive scale-changes command the user's full attention.
*   **90% of the experience is UI Snappiness:** (Navigation, cards, data displays, grids) where motion is invisible, serving only to guide the eye and provide instant, satisfying tactile confirmation of user interaction.

---

## 2. Easing & Speed Standards

We reject default browser animations (`ease`, `ease-in-out`). All animations must use the following custom cubic-beziers or Framer Motion/GSAP configurations:

### Standard Curves
*   **The Synaptic Reveal (Deceleration):** `cubic-bezier(0.16, 1, 0.3, 1)` (Expo-Out)
    *   *Behavior:* Explodes into action instantly, then takes a long time to settle smoothly. Use for all scroll-reveals, modal entrances, and major card reveals.
*   **The Cryptographic Lock (Elastic Deceleration):** `cubic-bezier(0.34, 1.56, 0.64, 1)` (Back-Out)
    *   *Behavior:* Over-shoots the target slightly and locks into place with physical authority. Use for small interactive badges, success icons, and main CTA hover states.
*   **Ambient Pulse (Linear/Sine):** `cubic-bezier(0.445, 0.05, 0.55, 0.95)` (Sine-In-Out)
    *   *Behavior:* Perfectly symmetrical and hypnotic. Use for background glow waves, looping ambient particles, and organic breathing animations.

### Timing Guidelines
*   **Micro-interactions (Hover, Click, Focus):** `150ms` – `250ms` (snappy, urgent).
*   **Scroll-Reveals & UI Transitions:** `500ms` – `800ms` (elegant, observable).
*   **Cinematic / Section-to-Section transitions:** `1200ms` – `1800ms` (majestic, atmospheric).

---

## 3. The Scroll Reveal System

To keep the page load feeling incredibly cohesive, we use a structured scroll-reveal framework.

1.  **Staggered Text Splitting:**
    *   Titles and section headers must never slide up as single blocks.
    *   Use character-based or word-based line masking. Words slide up from behind an invisible clip mask at `15%` offset increments.
2.  **Terminal Container Reveals:**
    *   Containers/panels reveal by first drawing their `1px` border lines (using SVG path length animation or keyframe masks) quickly (`300ms`), followed by a smooth `500ms` glass-opacity fade.
3.  **Scroll Trigger Boundaries:**
    *   Trigger point: `top 85%` of viewport.
    *   Exit point: Keep elements visible once revealed (never animate elements back out on scroll-up, as it creates unnecessary GPU paint cycles and annoys readers).

---

## 4. The Portal Transition Section

The **Portal Transition** is the visual climax of the website scroll. Placed immediately after the Hero/Trust strip, it bridges the analog world and the cyber-digital synapse network.

*   **Technology:** React Three Fiber (R3F) canvas overlaid with custom WebGL shaders.
*   **Concept:** A three-dimensional tunnel of glowing, synthetic data cables and cryptographic matrix grids.
*   **Scroll Linkage (Lenis + GSAP ScrollTrigger):**
    *   As the user enters the Portal section, the main page scrolling is briefly locked or slowed down (using a scrub value of `1.5` in GSAP ScrollTrigger).
    *   The 3D camera moves *through* the center of the neural portal. The dual-glow (Violet + Amber) spirals past the screen.
    *   As the camera reaches the "exit" of the tunnel, the 3D portal dissolves into a beautiful, sharp physical grid layout that anchors the **Sponsors** section.
*   **Performance Safe-Switch:** If the user’s device reports low framerates, or has `prefers-reduced-motion` enabled, the WebGL portal automatically bypasses to a beautiful 2D CSS-animated high-performance gradient warp.

---

## 5. Micro-Interactions & Hover Behavior

Hover states must feel magnetic and physical:

*   **Magnetic CTA Buttons:**
    *   Implement a physical magnet effect where the button moves slightly towards the cursor within a `30px` radius (using Framer Motion `useMotionValue` and `useSpring`).
    *   Inside the button, a sharp diagonal sheen sweep (`linear-gradient`) glides across the text.
*   **Grid Cell Tracking:**
    *   For the Tracks section, the grid panels will track the user's cursor.
    *   The background of the card uses a CSS radial gradient centered on the mouse position:
        `background: radial-gradient(800px circle at var(--x) var(--y), rgba(168, 85, 247, 0.06), transparent 40%)`

---

## 6. Forbidden Motions (The Anti-Patterns)

To maintain a professional, premium atmosphere, the following motion techniques are **strictly banned**:

*   **❌ The Bubble Spring:** Springs with high bounce that oscillate back and forth more than once. (Makes the premium system feel like a toy).
*   **❌ Infinite Rotary Spin:** Random floating objects spinning continuously on all three axes. (Distracting and cheapens the sci-fi aesthetic).
*   **❌ Scroll-Linked Glitch Effects on Body Text:** Glitch effects must be restricted to minor accents (e.g., logo or headers on hover). Glitching body text hurts accessibility and looks amateur.
*   **❌ Non-Hardware-Accelerated Properties:** Never animate `width`, `height`, `top`, `left`, `margin`, or `padding`. Only animate `transform` (scale, translate, rotate) and `opacity`.
