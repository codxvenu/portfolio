import { useState } from "react";

/**
 * X Themed Highlights Section (Outer Structure Only)
 * You will inject pinned content inside.
 */
export default function HighlightsSection({ children }) {
  return (
    <div className="border-b border-neutral-800">
      {/* Section Header */}
      <div className="px-4 py-3 flex items-center justify-between">
        <div className="text-[15px] font-semibold">Engineering Highlights</div>
        <div className="text-xs text-neutral-500">Pinned</div>
      </div>

      {/* Divider like X */}
      <div className="h-[1px] bg-neutral-800" />

      {/* Content Area (You inject pinned items here) */}
      <div className="flex flex-col">
        {children}
      </div>
    </div>
  );
}

/**
 * Optional Wrapper Card (X Tweet Style Outer Shell)
 * Use this to wrap each pinned item if needed
 */
export function HighlightCard({ children }) {
  return (
    <div className="px-4 py-3 border-b border-neutral-800 hover:bg-neutral-950/60 transition">
      {children}
    </div>
  );
}

/**
 * Optional Section Intro Banner (top pinned explanation)
 */
export function HighlightsIntro() {
  return (
    <div className="px-4 py-3 border-b border-neutral-800 bg-neutral-950/40">
      <div className="text-sm text-neutral-400">
        A curated selection of systems, products and engineering work.
      </div>
    </div>
  );
}
