"use client";

import { useReportWebVitals } from "next/web-vitals";

export function WebVitalsTelemetry() {
  useReportWebVitals((metric) => {
    // In production, stream vitals directly to edge reporting endpoint
    const body = JSON.stringify({
      id: metric.id,
      name: metric.name,
      label: metric.label,
      value: metric.value,
      rating: metric.rating, // 'good' | 'needs-improvement' | 'failed'
    });
    
    // Log telemetry cleanly in development console
    if (process.env.NODE_ENV === "development") {
      console.log(`[SYNAPSE TELEMETRY] ${metric.name}:`, {
        value: `${Math.round(metric.value * 100) / 100}ms`,
        rating: metric.rating.toUpperCase(),
      });
    }

    // Use sendBeacon for non-blocking edge analytics delivery if browser supports it
    if (typeof navigator !== "undefined" && typeof navigator.sendBeacon === "function") {
      const endpoint = "/api/telemetry";
      // navigator.sendBeacon(endpoint, body);
    }
  });

  return null;
}
