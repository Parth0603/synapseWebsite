# Portal Section References
## WebGL, React Three Fiber, and shader tunnel assets.

### What Belongs in This Folder:
1.  **GLSL Shader Code:** Custom vertex and fragment shaders (`.vert`, `.frag`) driving the glowing data-cable and grid effects.
2.  **3D Math Specs:** Camera path coordinates, scroll-scrub interpolation configurations, and scroll trigger parameters.
3.  **Fallback Assets:** High-resolution optimized 2D fallback videos or CSS gradient transition definitions for low-spec devices or reduced motion options.

### Safety Standard:
The R3F canvas must be lazy-loaded. All reference code here must include optimized cleanup routines (e.g., disposing of geometries and materials on unmount) to prevent memory leaks.
