"use client";

import React, { useEffect, useRef } from "react";

export function CanvasParticles() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouseRef = useRef({ x: 0, y: 0, targetX: 0, targetY: 0, active: false });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    // Particle class
    class Particle {
      x: number = 0;
      y: number = 0;
      vx: number = 0;
      vy: number = 0;
      radius: number = 0;
      alpha: number = 0;
      decay: number = 0;
      baseAlpha: number = 0;

      constructor() {
        this.reset();
        // Stagger spawn coordinates so they don't pop in on loading
        this.y = Math.random() * height;
      }

      reset() {
        this.x = Math.random() * width;
        this.y = height + Math.random() * 20; // Spawn slightly off-bottom
        this.vx = (Math.random() - 0.5) * 0.15;
        this.vy = -(Math.random() * 0.25 + 0.1); // Always drifting up
        this.radius = Math.random() * 1.5 + 0.5;
        this.baseAlpha = Math.random() * 0.35 + 0.1;
        this.alpha = 0; // Fade in slowly
        this.decay = Math.random() * 0.005 + 0.002;
      }

      update(mouseX: number, mouseY: number, mouseActive: boolean) {
        this.x += this.vx;
        this.y += this.vy;

        // Apply mouse draft/pull force if active
        if (mouseActive) {
          const dx = mouseX - this.x;
          const dy = mouseY - this.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 220) {
            const force = (220 - dist) / 220;
            // Pull gently toward mouse vector
            this.x += (dx / dist) * force * 0.4;
            this.y += (dy / dist) * force * 0.4;
          }
        }

        // Gradually fade in
        if (this.alpha < this.baseAlpha) {
          this.alpha += 0.01;
        }

        // Bounds validation
        if (this.y < -10 || this.x < -10 || this.x > width + 10) {
          this.reset();
        }
      }

      draw(context: CanvasRenderingContext2D) {
        context.beginPath();
        context.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        // Purple glow color matching neural accent
        context.fillStyle = `rgba(168, 85, 247, ${this.alpha})`;
        context.fill();
      }
    }

    const isMobileDevice = window.innerWidth < 768;

    // Spawn 80 particles (30 on mobile for performance optimization)
    const particleCount = isMobileDevice ? 30 : 80;
    const particles: Particle[] = [];
    for (let i = 0; i < particleCount; i++) {
      particles.push(new Particle());
    }

    // Lerp coordinates helper
    const lerp = (start: number, end: number, amt: number) => {
      return (1 - amt) * start + amt * end;
    };

    // Main loops
    const animate = () => {
      ctx.clearRect(0, 0, width, height);

      // Smooth mouse coordinates with lerp tracking (disabled on mobile to avoid cursor computation overhead)
      const mouse = mouseRef.current;
      const isMouseActive = mouse.active && !isMobileDevice;
      if (isMouseActive) {
        mouse.x = lerp(mouse.x, mouse.targetX, 0.06);
        mouse.y = lerp(mouse.y, mouse.targetY, 0.06);
      }

      particles.forEach((p) => {
        p.update(mouse.x, mouse.y, isMouseActive);
        p.draw(ctx);
      });

      animationFrameId = requestAnimationFrame(animate);
    };

    // Track mouse inputs (only active on non-mobile)
    const handleMouseMove = (e: MouseEvent) => {
      if (isMobileDevice) return;
      mouseRef.current.targetX = e.clientX;
      mouseRef.current.targetY = e.clientY;
      mouseRef.current.active = true;
    };

    const handleMouseLeave = () => {
      mouseRef.current.active = false;
    };

    // Handle screen scaling
    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    if (!isMobileDevice) {
      window.addEventListener("mousemove", handleMouseMove);
      document.body.addEventListener("mouseleave", handleMouseLeave);
    }
    window.addEventListener("resize", handleResize);

    animate();

    return () => {
      cancelAnimationFrame(animationFrameId);
      if (!isMobileDevice) {
        window.removeEventListener("mousemove", handleMouseMove);
        document.body.removeEventListener("mouseleave", handleMouseLeave);
      }
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none z-[30]"
      style={{ mixBlendMode: "plus-lighter" }}
      aria-hidden="true"
    />
  );
}
