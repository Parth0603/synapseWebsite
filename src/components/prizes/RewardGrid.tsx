"use client";
import React from "react";
import PrizeCard, { Prize } from "./PrizeCard";

interface RewardGridProps {
  prizes: Prize[];
}

export default function RewardGrid({ prizes }: RewardGridProps) {
  return (
    <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-8 justify-items-stretch items-stretch">
      {prizes.map((prize, index) => (
        <div key={prize.id} className="h-full">
          <PrizeCard prize={prize} index={index} />
        </div>
      ))}
    </div>
  );
}
