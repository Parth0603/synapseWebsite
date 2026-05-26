"use client";

import React, { useEffect, useRef } from "react";

/**
 * CanvasParticles — lightweight atmospheric particle field.
 * Single Particle class, minimal per-frame math, requestAnimationFrame capped.
 * Mouse interaction only on desktop. Mobile uses 22 particles max.
 */
export function CanvasParticles() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouseRef  = useRef({ x: 0, y: 0, tx: 0, ty: 0, active: false });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d", { alpha: true });
    if (!ctx) return;

    let raf: number;
    let W = (canvas.width  = window.innerWidth);
    let H = (canvas.height = window.innerHeight);

    const isMobile = W < 768;

    class Particle {
      x = 0; y = 0; vx = 0; vy = 0;
      r = 0; alpha = 0; base = 0;

      constructor() { this.reset(); this.y = Math.random() * H; }

      reset() {
        this.x    = Math.random() * W;
        this.y    = H + 10;
        this.vx   = (Math.random() - 0.5) * 0.10;
        this.vy   = -(Math.random() * 0.20 + 0.06);
        this.r    = Math.random() * 1.2 + 0.35;
        this.base = Math.random() * 0.22 + 0.06;
        this.alpha = 0;
      }

      update(mx: number, my: number, mActive: boolean) {
        this.x += this.vx;
        this.y += this.vy;

        if (mActive) {
          const dx = mx - this.x, dy = my - this.y;
          const d2 = dx * dx + dy * dy;
          if (d2 < 40000) { // 200px radius
            const d = Math.sqrt(d2);
            const f = (200 - d) / 200 * 0.30;
            this.x += (dx / d) * f;
            this.y += (dy / d) * f;
          }
        }

        if (this.alpha < this.base) this.alpha = Math.min(this.base, this.alpha + 0.007);
        if (this.y < -8 || this.x < -8 || this.x > W + 8) this.reset();
      }

      draw() {
        ctx!.beginPath();
        ctx!.arc(this.x, this.y, this.r, 0, 6.283);
        ctx!.fillStyle = `hsla(271,75%,68%,${this.alpha})`;
        ctx!.fill();
      }
    }

    const count = isMobile ? 22 : 55;
    const particles = Array.from({ length: count }, () => new Particle());

    const animate = () => {
      ctx.clearRect(0, 0, W, H);

      const m = mouseRef.current;
      const mActive = m.active && !isMobile;
      if (mActive) {
        m.x += (m.tx - m.x) * 0.05;
        m.y += (m.ty - m.y) * 0.05;
      }

      for (let i = 0; i < particles.length; i++) {
        particles[i].update(m.x, m.y, mActive);
        particles[i].draw();
      }

      raf = requestAnimationFrame(animate);
    };

    const onMove = (e: MouseEvent) => {
      m.tx = e.clientX; m.ty = e.clientY; m.active = true;
    };
    const m = mouseRef.current;
    const onLeave = () => { m.active = false; };
    const onResize = () => {
      W = canvas.width  = window.innerWidth;
      H = canvas.height = window.innerHeight;
    };

    if (!isMobile) {
      window.addEventListener("mousemove", onMove, { passive: true });
      document.body.addEventListener("mouseleave", onLeave);
    }
    window.addEventListener("resize", onResize, { passive: true });
    animate();

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", onResize);
      if (!isMobile) {
        window.removeEventListener("mousemove", onMove);
        document.body.removeEventListener("mouseleave", onLeave);
      }
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none"
      style={{ zIndex: 30, mixBlendMode: "plus-lighter" }}
      aria-hidden="true"
    />
  );
}
