"use client";

import dynamic from "next/dynamic";
import { Suspense, useEffect, useState } from "react";
import { useMediaQuery } from "@/hooks/useMediaQuery";
import { DeskSceneFallback } from "./DeskSceneFallback";

const DeskScene = dynamic(() => import("./DeskScene"), {
  ssr: false,
});

export function DeskSceneLoader() {
  const [mounted, setMounted] = useState(false);
  const prefersReducedMotion = useMediaQuery("(prefers-reduced-motion: reduce)");

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div className="w-full h-[400px] md:h-[600px] animate-pulse bg-surface/50 rounded-xl" />
    );
  }

  if (prefersReducedMotion) {
    return (
      <div className="w-full h-[400px] md:h-[600px]">
        <DeskSceneFallback />
      </div>
    );
  }

  return (
    <div className="w-full h-[400px] md:h-[600px] relative">
      <Suspense fallback={<div className="w-full h-full animate-pulse bg-surface/50 rounded-xl" />}>
        <DeskScene />
      </Suspense>
    </div>
  );
}
