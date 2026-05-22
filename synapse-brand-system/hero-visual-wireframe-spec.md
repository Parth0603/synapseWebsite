# SYNAPSE 1.0 — Visual Hero Wireframe Specification
## Production-Grade Composition & Visual Layout Blueprint

This document details the spatial layout, composition grid, lighting zones, atmospheric layering, and responsive visual flow for the **SYNAPSE 1.0** Hero Section. Formulated as a visual composition spec, this blueprint defines the exact spatial distribution of design elements before frontend development begins, ensuring a cinematic experience that maintains high conversion rates and clean brand alignment.

---

## 1. Exact Screen Composition
The screen layout is engineered around a **symmetry-dominated central axis** locked inside a high-security outer border system. 

```
+-----------------------------------------------------------------------------+
| [A] TOP TERMINAL MARGIN (Status indicators & Global Navigation, Height: 72px)  |
+-----------------------------------------------------------------------------+
|                                                                             |
|                                [B] HERO VOID                                |
|                        (Vertical center: Y = 42% - 58%)                    |
|                        - Category Tag: // SYNAPSE CORE                      |
|                        - Main Title: S Y N A P S E  1 . 0                  |
|                        - Description Paragraph                              |
|                                                                             |
|                                [C] CTA ZONE                                 |
|                               (Y = 62% - 68%)                               |
|                     [ APPLY NOW ]   [ AUDIT PROTOCOLS ]                    |
|                                                                             |
|                              [D] COUNTDOWN UNIT                             |
|                               (Y = 72% - 78%)                               |
|                            [ 24 : 12 : 56 : 04 ]                            |
|                                                                             |
+-----------------------------------------------------------------------------+
| [E] FOUNDATION TRUST STRIP (Modular Sponsor Bar, Height: 88px, Y = 90%-100%) |
+-----------------------------------------------------------------------------+
```

---

## 2. Section Vertical Balance
Vertical space is meticulously partitioned to ensure clean breathing room and absolute separation between branding, interactive modules, and trust signals:

*   **0% – 12% (Header Frame):** System diagnostic text, navigation, and security status.
*   **12% – 38% (Atmospheric Void):** Empty space filled only by subtle particle drift and ambient lighting shafts.
*   **38% – 60% (The Information Hub):** Heavy typographical weight, category tags, and the central title block.
*   **60% – 82% (The Action Hub):** High-interaction buttons, countdown matrices, and micro-text details.
*   **82% – 100% (The Trust Base):** The heavy grounding sponsor strip, location coordinate badges, and scroll indicators.

---

## 3. Left/Center/Right Content Distribution
To keep the composition symmetrical and grounded, content is balanced horizontally across the viewport:

*   **Left Axis (Tactical Data):** Local coordinates (`LAT: 37.7749 N | LON: 122.4194 W`), active connection status (`STATUS: OPERATIONAL`), and security network indicators.
*   **Center Axis (Branding & Action):** The primary narrative title, event category description, countdown ticker, and main registration forms. All key interaction paths are centered to minimize head-rotation on large monitors.
*   **Right Axis (Cohort Metrics):** Active registration ratios (`SEATS_FILLED: 84%`), system time markers, and quick utility links.

---

## 4. Hero Grid Structure
The layout is governed by a **12-Column Symmetrical Grid** flanked by modular **1px outer safety borders**:

```
+--1px Border---------------------------------------------------------------+
|  Col 1  |  Col 2  |  Col 3  |  Col 4  |  ...  |  Col 9  | Col 10 | Col 11 | Col 12  |
|         |         |         |<-    Central Bounding Container    ->|        |         |
|         |         |         |      (Cols 3 through 10, Max: 800px) |        |         |
+---------------------------------------------------------------------------+
```

*   **Grid Margins:** `64px` on desktop, auto-collapsing to `20px` on mobile systems.
*   **Central Bounding Box:** Constrained to columns 3 through 10 (maximum width of `800px` for the core title and description).
*   **CTA Grid Span:** Spans columns 5 through 8, keeping action areas contained inside the inner grid column tracks.

---

## 5. Logo Placement Logic
The SYNAPSE 1.0 logo behaves as a security validation token in the navigation bar:

*   **Desktop Positioning:** Set on the absolute top-left corner, aligned exactly with Column 1 of the structural grid.
*   **Sizing:** Height restricted to `24px` with a clean monochrome white outline to maintain premium style.
*   **Hover Behavior:** On mouse hover, the logo undergoes a quick visual raster shift (`200ms` SVG glow outline) before returning to static mode.

---

## 6. Headline Placement
The title "SYNAPSE 1.0" represents the core focal point of the visual layout:

*   **Positioning:** Centered horizontally at `Y = 46%`.
*   **Visual Weight:** Rendered at `8vw` on desktop scale, with letters tracked tightly (`letter-spacing: -0.04em`) to establish massive structural presence.
*   **Masking bounds:** The letters are masked inside a horizontal clip-path, allowing them to rise smoothly out of the background void on page initialization.

---

## 7. Subheadline Positioning
The category tag and core event description flank the main headline:

*   **Category Tag ("// PHASE 01 // COGNITIVE HACK PROTOCOL"):** Aligned exactly `24px` above the top edge of the main headline. Rendered in clean mono type, sized at `13px`, tracked extremely wide (`letter-spacing: 0.18em`) in full uppercase.
*   **Core Event Description:** Centered exactly `32px` beneath the baseline of the main headline. Word length is limited to 24 words, maintaining high-contrast readability against the ambient glows.

---

## 8. CTA Group Positioning
The primary CTA button group sits as the tactical hub beneath the subheadline:

*   **Symmetrical Lock:** Centered horizontally directly beneath the description at `Y = 66%`.
*   **Button Sizing:** Width capped at `240px` and height at `56px` to feel solid and easy to click.
*   **Spacing:** A precise `16px` gap separates the Primary ("SECURE COHORT SEAT") and Secondary ("EXPLORE THE SHADERS") buttons.

---

## 9. Countdown Positioning
The countdown timer is framed inside a glowing nixie panel:

*   **Placement:** Centered horizontally at `Y = 76%`, bridging the CTA block and the bottom Trust Strip.
*   **Grid Span:** Spans exactly columns 4 through 9.
*   **Structure:** Dividers inside the countdown container are set to low-opacity white lines (`rgba(255,255,255,0.08)`) with dynamic amber glows illuminating each numeric column.

---

## 10. Trust Strip Layout
The base of the Hero section is anchored by a structured panel of institutional trust:

*   **Geometry:** A clean horizontal container (`height: 88px`) extending the full width of the screen.
*   **Left Element:** Sized cash pool indicator ("$50,000 GUARANTEED VALUE PROTOCOL").
*   **Center Element:** A slow-moving horizontal marquee showcasing monochrome sponsor icons (Google Cloud, Polygon, Arbitrum) with subtle gradient borders.
*   **Right Element:** Cohort size tracker ("RESERVED FOR 500 ELITE MINDS").

---

## 11. Atmospheric Depth Layers
The background void is not flat black; it is a three-dimensional cinematic stage:

```
[ FRONT STAGE: Text & Interactive CTAs ] --------------------> Z-INDEX: 50
       |
[ MID STAGE 1: Floating Smoke Shaders & Dust Particles ] ----> Z-INDEX: 30 (Opacity: 12%)
       |
[ MID STAGE 2: Primary Neon Glow Zones ] --------------------> Z-INDEX: 20 (Soft Radial Blur)
       |
[ BACKGROUND: Obsidian Base, Grain & Blueprints ] -----------> Z-INDEX: 10
```

*   **Layer A (Front):** Sharp typographical text, high-contrast inputs, and crisp terminal grid borders (`z-index: 50`).
*   **Layer B (Volumetric):** Floating dust particles and low-opacity smoky shader layers (`z-index: 30`, opacity capped at `12%`).
*   **Layer C (Energy):** The radial glow zones (Violet + Amber) providing high-energy light projections behind the text elements (`z-index: 20`).
*   **Layer D (Deep base):** The obsidian background, vector blueprint grids, and CSS noise filter (`z-index: 10`).

---

## 12. Glow Distribution Zones
Glows are strategically positioned to spotlight key interface modules without creating a muddy overlay:

*   **Zone 1 (Neural Violet Core):** A massive, soft radial gradient (`450px` width) centered directly behind the letters "SYNAPSE" to push them visually forward.
*   **Zone 2 (Cryptographic Amber Base):** A wide, low-intensity glowing oval (`600px` width, `150px` height) stretched along the bottom Trust Strip to ground the layout base.
*   **Zone 3 (Interactive CTA Glows):** Dynamic, cursor-linked spot glows centered on the mouse position during active hover states.

---

## 13. Empty Space Strategy
To avoid generic startup layouts and gamer aesthetic chaos, the hero implements a strict **"Atmospheric Margin"** rule:

*   **Minimum void padding:** A guaranteed `120px` of complete visual emptiness surrounding the central title stack in all directions.
*   **No visual noise:** Grid lines, vector charts, and background particles must remain under `8%` opacity inside this breathing zone to ensure absolute focus on the central brand message.

---

## 14. Motion Focus Areas
To optimize browser thread performance, motion is restricted to three distinct zones:

*   **Zone A (Ambient loop):** The extremely slow, vertical drifting of the 80 background particles.
*   **Zone B (Cursor tracking):** The immediate, magnetic response of the hover CTA button elements.
*   **Zone C (Sequential reveal):** The elegant drawing of the modular grid lines and character rises on page entrance.

---

## 15. Visual Attention Path
The layout is mathematically tuned to guide the user's eye through a targeted visual conversion loop:

```
1. Main Title ("SYNAPSE 1.0") ➔ Instant recognition of scale
       |
2. Category Badge ("// COGNITIVE PROTOCOL") ➔ Understand context
       |
3. Primary CTA Button ("APPLY NOW") ➔ Identify the action path
       |
4. Countdown Nixie Matrix ➔ Build scarcity and FOMO
       |
5. Trust Strip Sponsors ➔ Verify credibility and register
```

---

## 16. Scroll Cue Placement
A minimalist scroll indicator directs the user down to the detailed sections below:

*   **Positioning:** Centered exactly at the bottom border of the Trust Strip, overlapping the bottom line.
*   **Visual Style:** A thin vector mouse shape with a single dot that pulses vertically (`ease-in-out-sine`, `1.8s` cycles) between the Violet and Amber color tracks.

---

## 17. Background Composition
The background acts as a physical engineering terminal:

*   **Color Scale:** Pitch obsidian (#030305 at the core, deepening to #000000 at the absolute screen margins).
*   **The Blueprint Grid:** A series of faint vertical lines spaced exactly at grid column boundaries, intersecting with three horizontal lines at `Y = 72px`, `Y = 82%`, and `Y = 90%`.

---

## 18. Noise/Fog/Particle Placement
The volumetric elements are restricted to specific layers to prevent text illegibility:

*   **CSS Grain:** Rendered globally over the entire background container to soften the high-contrast glows.
*   **Volumetric Fog:** Billows from the bottom-left and bottom-right corners of the viewport, fading out completely before reaching the center text zones.
*   **Floating Particles:** Rendered inside a Canvas layer located exclusively *behind* the text layer and *ahead* of the glowing ambient background.

---

## 19. Hero Lighting Direction
The lighting system replicates a cinematic movie poster setup:

*   **Primary Backlight:** Direct high-intensity Neon Violet light projecting from behind the main title text.
*   **Secondary Underlight:** Cryptographic Amber light radiating upward from the trust base, casting clean gold highlights onto the bottoms of the interactive CTA buttons.

---

## 20. Cinematic Framing Strategy
The hero section utilizes a high-end cinematic letterboxing layout:

*   **The Cinematic Frame:** Viewport edges feature a subtle, soft vignette gradient (`rgba(0,0,0,0.85)` at outer bounds, scaling down to absolute transparency inside a `10%` inner boundary).
*   **Tech Borders:** Sharp 1px border lines frame the viewport, giving the website the feeling of a physical high-tech command interface.

---

## 21. Mouse Interaction Zones
To make the page feel alive and reactive, mouse actions trigger responsive lighting feedback:

*   **Active Hover Zone (Inner):** Inside the central bounding container (`max-width: 800px`), the mouse reveals a soft cursor glow that tracks the cursor coordinates perfectly.
*   **Magnetic Hover Zone (Action):** Within a `25px` radius around the primary CTA buttons, the buttons physically drift towards the cursor, locking into magnetic focus.

---

## 22. Sponsor Visibility Rules
Sponsor logos inside the Trust Strip are governed by rigid display rules to ensure they look premium:

*   **Unified Aspect Ratios:** All logo assets are scaled to a unified height of `28px` with maximum widths capped at `120px`.
*   **The Monochrome Rule:** Logo files are displayed in a clean, unified white (`#E2E8F0` at `60%` opacity) to match the tech-noir theme. 
*   **Hover Glow Match:** On mouse hover, the logo card's border glows with that specific sponsor's primary brand hex color, casting a beautiful, ambient aura back onto their logo.

---

## 23. Registration Visibility Rules
The registration path must remain completely visible under all viewport settings:

*   **Floating Navigation Anchor:** The top navigation bar houses a high-contrast mini CTA button ("APPLY"). As the user scrolls past the main hero, this button transitions to active mode to ensure a registration path is always available.
*   **Primary Focus:** The central CTA button is given the highest contrast weight on the screen, highlighted by a subtle glowing border.

---

## 24. Mobile Hero Composition
The layout scales gracefully down to mobile screens without sacrificing readable text:

```
+--20px Mobile Margin----------------------------------------+
| [SYS: OK]                         [APPLY]                  |
+------------------------------------------------------------+
|                                                            |
|              // PHASE 01 // HACKATHON PROTOCOL             |
|                       SYNAPSE 1.0                          |
|         AI + Blockchain Cinematic Hackathon Core           |
|                                                            |
|                  [ 24d : 12h : 56m : 04s ]                 |
|                                                            |
|                        [ APPLY NOW ]                       |
|                                                            |
+------------------------------------------------------------+
| [TRUST PROTOCOL: $50K PRIZE POOL]                         |
+------------------------------------------------------------+
```

*   **Typography Scale:** Main title scales from `8vw` down to `2.8rem`, and body description scales down to `14px` with simplified spacing.
*   **CTA Stacking:** Buttons transition from a horizontal pair to a single vertical stack, with the Primary CTA taking full-width visual dominance.
*   **Trust Strip Simplification:** Mobile viewport hides the full infinite marquee, replacing it with the high-contrast numerical metrics ("$50K PRIZE POOL | 500 SEATS").

---

## 25. Tablet Adaptation Rules
Tablet scales adjust the visual elements to maintain spatial symmetry:

*   **Grid Scale:** Grid padding expands from `20px` to `48px`.
*   **CTA Behavior:** CTA buttons remain horizontally paired but scale their width dynamically to `200px` each to prevent overlapping.
*   **Trust Strip:** The scrolling marquee remains visible but limits active sponsor cards to `4` per screen width.

---

## 26. Responsive Scaling Philosophy
To prevent graphical stretching on ultra-wide or high-DPI displays:

*   **Scale Limits:** Sizing values are mapped to custom CSS fluid clamp values (`font-size: clamp(2rem, 5vw, 6rem)`).
*   **Container Cap:** The central information container is capped at an absolute maximum width of `1024px` on screen widths greater than `1920px`.
*   **Performance Scaling:** Background particles are dynamically capped to a lower density on mobile systems (`40` particles max) to preserve battery and maintain 60 FPS scrolling.

---

## 27. Hero Exit Transition
As the user scrolls down, the visual exit of the hero is smooth and performant:

*   **Deceleration Fade:** Floating background particles and volumetric smoke layers fade to absolute zero opacity once `scrollY > 500px`.
*   **Title Drift:** The central typography stack drifts upward slightly (`translateY: -80px`) linked to scroll velocity to simulate vertical atmospheric movement.

---

## 28. Hero to Portal Narrative Flow
The scroll-bound transition into the adjacent portal section forms a cinematic story arc:

1.  **The Ascent:** The user scrolls past the Trust Strip.
2.  **The Portal Entrance:** The terminal frames expand outwards, opening up the deep WebGL canvas.
3.  **The Neural Accelerator:** The screen speeds up smoothly. Floating grid patterns align to create a 3D shader tunnel that animates dynamically as the user scrolls.
4.  **The Consensus Landing:** The 3D camera emerges from the glowing data-cable tunnel, dissolving into the clean grid panels of the Tracks and Sponsors sections.

---

## 29. Forbidden Layout Mistakes
To prevent the visual design from feeling cheap, the following implementation mistakes are strictly prohibited:

*   **❌ Raw Colorful Buttons:** Buttons must not use flat, intense solid colors. They must utilize glassmorphic opacity and gradient highlights.
*   **❌ Centered Descriptions Exceeding 3 Lines:** Descriptions that span more than 3 lines are difficult to read in a centered layout. Keep text brief and structured.
*   **❌ Overlapping Glowing Borders:** Avoid nesting glowing borders within other glowing cards. Double borders create muddy visuals and hurt contrast.
*   **❌ Auto-Scrolling Glitch Loops:** Text glitches must be triggered only on user interaction (hover), never looped infinitely.

---

## 30. Final Visual Experience Summary
The SYNAPSE 1.0 Visual Hero is an elegant composition of dark retro-futuristic atmosphere and highly functional layout grids. By structuring typographic weight along a strict central axis, grounding the base with a high-contrast Trust Strip, and containing atmospheric smoke within layered depths, the visual design projects absolute premium authority to sponsors and developers alike.
