"use client";

import React, { useEffect } from "react";
import { ReactLenis } from "lenis/react";

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
        duration: 0.9, // Tighter cinematic duration for highly responsive feedback
        easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // smooth decel
        orientation: "vertical",
        gestureOrientation: "vertical",
        smoothWheel: true,
        wheelMultiplier: 0.95, // Dampen scroll leaps for visual stability
        touchMultiplier: 1.25, // Fluid touch response on mobile/trackpads
      }}
    >
      {children}
    </ReactLenis>
  );
}
