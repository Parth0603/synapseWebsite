# SYNAPSE 1.0 — Design Token System
## Production-Grade UI Foundation & Token Architecture

This document defines the comprehensive Design Token System for **SYNAPSE 1.0**. Built for design systems architects and frontend engineers, this system establishes the exact programmatic visual variables (CSS custom properties and Tailwind extensions) required to build a premium, highly performant, retro-futuristic AI + Blockchain hackathon website.

---

## 1. Color Tokens

Our color token system uses strict functional names, mapped to hexadecimal colors and HSL values to support alpha blending in dynamic glow layers.

```
                  [ SYSTEM BACKGROUND: Obsidian base (#030305) ]
                                        |
                 +----------------------+----------------------+
                 |                                             |
   [ AI Core: Neural Violet ]                  [ Blockchain Core: Crypto Amber ]
   - Solid: #A855F7                            - Solid: #F97316
   - Glow:  hsla(271, 91%, 65%, 0.12)           - Glow:  hsla(24, 95%, 53%, 0.08)
```

### A. Core Branding Colors
*   **Color-Brand-AI-Primary (Neural Violet):** `#A855F7` | `hsl(271, 91%, 65%)`
*   **Color-Brand-AI-Light:** `#C084FC` | `hsl(271, 95%, 75%)`
*   **Color-Brand-Chain-Primary (Cryptographic Amber):** `#F97316` | `hsl(24, 95%, 53%)`
*   **Color-Brand-Chain-Light:** `#FB923C` | `hsl(24, 96%, 61%)`

### B. Atmospheric Backgrounds & Surfaces
*   **Color-Bg-Obsidian (Base Void):** `#030305` | `hsl(240, 25%, 2%)`
*   **Color-Bg-Void-Black (Absolute Margins):** `#000000` | `hsl(0, 0%, 0%)`
*   **Color-Bg-Terminal-Surface (Card/Panel Base):** `#09090E` | `hsl(240, 22%, 5%)`
*   **Color-Bg-Terminal-Elevated (Hover State):** `#0D0D15` | `hsl(240, 22%, 7%)`

### C. Typography Contrast System
*   **Color-Text-Primary (High Contrast):** `#F8FAFC` | `hsl(215, 25%, 97%)`
*   **Color-Text-Secondary (Standard Reading):** `#E2E8F0` | `hsl(214, 32%, 91%)`
*   **Color-Text-Muted (Metadata & Footnotes):** `#94A3B8` | `hsl(215, 20%, 65%)`
*   **Color-Text-Dimmed (Grid Annotations):** `#475569` | `hsl(215, 16%, 34%)`

### D. System Borders & Separators
*   **Color-Border-Subtle (Grid Lines):** `rgba(255, 255, 255, 0.04)`
*   **Color-Border-Terminal (Default Frame):** `rgba(255, 255, 255, 0.08)`
*   **Color-Border-Glass (Cards):** `rgba(255, 255, 255, 0.12)`
*   **Color-Border-AI-Active:** `rgba(168, 85, 247, 0.25)`
*   **Color-Border-Chain-Active:** `rgba(249, 115, 22, 0.25)`

### E. Warning & System Accents
*   **Color-System-Success (Status Green):** `#10B981` | `hsl(162, 76%, 41%)`
*   **Color-System-Alert (Error Red):** `#EF4444` | `hsl(0, 84%, 60%)`

---

## 2. Gradient Tokens

Gradients coordinate dual-energy overlays without creating flat visual splits.

*   **Gradient-Hero-Title (Neural Core):**
    `linear-gradient(to right, #F8FAFC 20%, #C084FC 60%, #A855F7 100%)`
*   **Gradient-Glow-AI (Radial Ambient):**
    `radial-gradient(circle, hsla(271, 91%, 65%, 0.12) 0%, transparent 70%)`
*   **Gradient-Glow-Chain (Radial Ambient):**
    `radial-gradient(circle, hsla(24, 95%, 53%, 0.08) 0%, transparent 75%)`
*   **Gradient-CTA-Primary:**
    `linear-gradient(135deg, #8B5CF6 0%, #A855F7 100%)`
*   **Gradient-CTA-Sheen:**
    `linear-gradient(to right, transparent, rgba(255,255,255,0.15), transparent)`
*   **Gradient-Portal-Fade (Scroll Bounds):**
    `linear-gradient(to bottom, #030305 0%, transparent 20%, transparent 80%, #030305 100%)`

---

## 3. Typography Tokens

Typography balances editorial movie titles with strict monospace technical readouts.

### A. Font Families
*   **Font-Heading:** `'Outfit', sans-serif` (Premium, geometric structural font)
*   **Font-Body:** `'Inter', sans-serif` (High readability, neutral sans-serif)
*   **Font-Mono:** `'Fira Code', monospace` (Terminal system alerts & coordinate metrics)

### B. Typography Scales & Heights

| Typography Level | Font Size (Desktop) | Font Size (Mobile) | Line Height | Tracking |
| :--- | :--- | :--- | :--- | :--- |
| **Title-Hero** | `8.0vw` (Fluid scale) | `2.8rem` | `1.05` | `-0.04em` |
| **Title-Section** | `3.5rem` | `2.0rem` | `1.15` | `-0.02em` |
| **Heading-Card** | `1.5rem` | `1.25rem` | `1.25` | `-0.01em` |
| **Body-Large** | `1.125rem` (`18px`) | `1.0rem` | `1.6` | `normal` |
| **Body-Base** | `1.0rem` (`16px`) | `0.875rem` | `1.5` | `normal` |
| **Badge-Mono** | `0.8125rem` (`13px`) | `0.75rem` | `1.4` | `0.18em` |

---

## 4. Spacing Tokens

Spacing enforces strict alignment fields, preventing components from bleeding into each other.

### A. Structural Spacing
*   **Spacing-Section-Padding:** Desktop: `120px` | Mobile: `64px`
*   **Spacing-Container-Padding:** Desktop: `64px` | Mobile: `20px`
*   **Spacing-Grid-Gap-Base:** Desktop: `32px` | Mobile: `16px`
*   **Spacing-Card-Inner-Padding:** Desktop: `28px` | Mobile: `20px`

### B. Responsive Flow Rules
Spacing scales down proportionally. Layout heights adjust to viewport widths using standard calculations:
`space-y-clamp: clamp(24px, 4vw, 48px)`

---

## 5. Radius Tokens

All corners are kept crisp and structural. Rounded bubbly shapes are prohibited.

*   **Radius-Panel-Border (Base Card):** `6px` (`0.375rem`)
*   **Radius-Button (Standard Interactive):** `4px` (`0.25rem`)
*   **Radius-System-Input:** `4px` (`0.25rem`)
*   **Radius-Tag (Subtle details):** `2px` (`0.125rem`)

---

## 6. Shadow & Glow Tokens

Ambient glows are projected through performance-safe radial backplates:

*   **Glow-Soft-AI:** `drop-shadow(0 4px 20px rgba(168, 85, 247, 0.15))`
*   **Glow-Soft-Chain:** `drop-shadow(0 4px 20px rgba(249, 115, 22, 0.10))`
*   **Glow-Hover-Sponsor-Card:** `0 0 24px var(--sponsor-color-hex-30)`
*   **Glow-Portal-Tunnel:** Volumetric glow loops rendered purely inside WebGL shader scripts, bypassing 2D HTML engines.

---

## 7. Blur Tokens

CSS backdrop-blur properties create premium glassmorphic overlays:

*   **Blur-Glass-Standard:** `backdrop-filter: blur(12px) saturate(180%)`
*   **Blur-Atmospheric-Background:** `backdrop-filter: blur(40px)` (Used behind grid panels to separate text from background smoke).

---

## 8. Motion Tokens

Animations are mechanical and physical, locking down snaps precisely:

### A. Easing Presets
*   **Ease-Decel-Synaptic (Main Entrance):** `cubic-bezier(0.16, 1, 0.3, 1)` (Expo-Out)
*   **Ease-Elastic-Consensus (UI Springs):** `cubic-bezier(0.34, 1.56, 0.64, 1)` (Back-Out)
*   **Ease-Ambient-Pulse (Glow loops):** `cubic-bezier(0.445, 0.05, 0.55, 0.95)` (Sine-In-Out)

### B. Timing & Durations
*   **Time-Micro-Interaction:** `150ms` (Instant feedback loops)
*   **Time-Card-Reveal:** `350ms` (Responsive card fades)
*   **Time-Section-Stagger:** `80ms` (Sequence reveal steps)
*   **Time-Portal-Scrub:** `1.5s` (Scrub latency buffer)

---

## 9. Z-Index System

The visual plane is structured to avoid overlapping collisions:

*   **Z-Index-Deep-Void:** `0` (Obsidian background layer, grain, static blueprints)
*   **Z-Index-Atmospheric-Shaders:** `10` (Background glows, smoky gradient maps)
*   **Z-Index-Canvas-Particles:** `20` (Active drifting canvas particles)
*   **Z-Index-UI-Backdrop:** `30` (Glassmorphic cards, default layout boundaries)
*   **Z-Index-UI-Foreground:** `40` (Typography, focus states, CTAs)
*   **Z-Index-System-Nav:** `50` (Top navigation panel, outer security frames)
*   **Z-Index-System-Modal:** `100` (Registration overlays, FAQ popups)

---

## 10. Border System

Borders act as modular frames defining the grid lines:

*   **Border-Structural:** `1px solid rgba(255, 255, 255, 0.04)` (Faint grid alignments)
*   **Border-Glass-Card:** `1px solid rgba(255, 255, 255, 0.08)` (Tactile panel shells)
*   **Border-Active-Violet:** `1px solid rgba(168, 85, 247, 0.25)` (AI active status)
*   **Border-Active-Amber:** `1px solid rgba(249, 115, 22, 0.25)` (Blockchain active status)

---

## 11. Noise & Texture Rules

Synthesizes high-end analog physical texture over digital pixels:

*   **Film Grain Overlay:** A static CSS tiling pattern (`width: 128px`, `height: 128px`) repeating seamlessly with a low opacity of `0.015`.
*   **Scanlines:** Restricted purely to active video widgets or image preview cards on hover, never applied globally to text layers to avoid illegibility.

---

## 12. Responsive Rules

Responsive shifts scale elements down cleanly:

*   **Mobile Screen Bounds (< 768px):** Drops R3F canvas components, limits maximum active particles, and simplifies spacing.
*   **Tablet Scale (768px - 1024px):** Locks margins to `48px` and caps active count indicators.
*   **Cinematic Scale (> 1440px):** Containers cap their absolute width to `1200px` to maintain symmetry on ultra-wide screens.

---

## 13. Accessibility Constraints (WCAG Compliance)

Design tokens enforce highly legible, compliant text:

*   **Rule A (AAA Contrast):** Body texts are locked to `#F8FAFC` or `#E2E8F0` on obsidian backdrops, ensuring contrast is greater than `7:1`.
*   **Rule B (No Colored Body Text):** Body text must never be rendered in pure Neon Violet or Cyber Amber. Keep glowing colors restricted to accents, borders, and main headers.

---

## 14. Performance Constraints

Visual elements are budgeted to preserve system performance:

*   **Max Blur Limit:** A maximum of `3` active backdrop-blurs are allowed on screen at any given time.
*   **No Animating Blur Values:** We never animate CSS blur values. Shifting glows are calculated purely through opacity or transform properties.

---

## 15. Tailwind Integration Strategy

The design tokens are integrated directly into the `tailwind.config.js` stylesheet to ensure complete developer alignment:

```javascript
/** @type {import('tailwindcss').Config} */
module.exports = {
  theme: {
    extend: {
      colors: {
        obsidian: {
          950: '#030305',
          900: '#09090E',
          800: '#0D0D15',
        },
        brand: {
          violet: {
            DEFAULT: '#A855F7',
            light: '#C084FC',
          },
          amber: {
            DEFAULT: '#F97316',
            light: '#FB923C',
          }
        }
      },
      fontFamily: {
        heading: ['var(--font-heading)', 'sans-serif'],
        body: ['var(--font-body)', 'sans-serif'],
        mono: ['var(--font-mono)', 'monospace'],
      },
      borderRadius: {
        panel: '6px',
        btn: '4px',
      },
      transitionTimingFunction: {
        'synaptic': 'cubic-bezier(0.16, 1, 0.3, 1)',
        'consensus': 'cubic-bezier(0.34, 1.56, 0.64, 1)',
      }
    },
  },
}
```

---

## 16. CSS Variable Strategy

Functional custom properties reside globally inside the `/styles/globals.css` stylesheet:

```css
@theme {
  --color-neural-violet: 271, 91%, 65%;
  --color-crypto-amber: 24, 95%, 53%;
}

:root {
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

---

## 17. Component Token Usage Philosophy
*   **Functional Assignment:** Standardize variable naming structures inside all components (e.g. `bg-obsidian-950 text-slate-100 font-body border border-white/5 rounded-panel`).
*   **Interactive Bounds:** All active hover elements are assigned the standardized transition helper class `transition-all duration-150 ease-synaptic`.

---

## 18. Forbidden Visual Patterns
To protect visual hierarchy, the following layouts are completely banned:

*   **❌ High Radii Rounding:** Bubbly corners greater than `12px` are prohibited.
*   **❌ Flat Solid Accents:** Accent lines must not use solid colors. They must utilize glassmorphic opacity highlights.
*   **❌ Saturated Blue Backplates:** Saturated blue backplates clash with the dual-glow aesthetic. Background gradients must strictly reside in deep violet and warm amber.

---

## 19. Final SYNAPSE Visual Token Summary
The SYNAPSE 1.0 Design Token System forms a programmatic blueprint for frontend developers. By encoding high-contrast typography, strict grid spacing, hardware-accelerated static glows, and fluid responsive scaling clamps directly into Tailwind configurations, the visual system ensures pixel-perfect consistency across all components.
