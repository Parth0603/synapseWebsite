# Glow Systems & Light Physics
## Implementation details for ambient gradients and light projections.

### What Belongs in This Folder:
1.  **CSS Glow Classes:** Specific tailwind configurations or CSS utility codes for creating performance-safe, hardware-accelerated radial glows.
2.  **SVG Glow Elements:** Raw vector radial gradient shapes used to inject atmospheric light into background corners.
3.  **Blend Mode Rules:** CSS mix-blend-mode parameters (e.g., `screen`, `plus-lighter`, `color-dodge`) to ensure rich, vibrant color overlays without washed-out edges.

### Performance Law:
Avoid applying heavy CSS filters (`blur()`, `drop-shadow()`) to complex animated elements. Instead, use static glowing SVG layers or soft CSS radial backgrounds positioned behind the elements for fluid scrolling speeds.
