"use client";

import React from "react";
import { ScrollProvider } from "./ScrollProvider";
import { ErrorBoundary } from "@/components/common/ErrorBoundary";
import { WebVitalsTelemetry } from "@/components/common/WebVitalsTelemetry";

interface GlobalProviderProps {
  children: React.ReactNode;
}

export function GlobalProvider({ children }: GlobalProviderProps) {
  return (
    <ErrorBoundary>
      <WebVitalsTelemetry />
      <ScrollProvider>
        {children}
      </ScrollProvider>
    </ErrorBoundary>
  );
}

