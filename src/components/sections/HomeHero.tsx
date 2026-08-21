"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { DeskSceneLoader } from "@/components/3d/DeskSceneLoader";
import { personal } from "@/content/personal";
import Link from "next/link";
import { MapPin } from "lucide-react";

export function HomeHero() {
  return (
    <section className="relative min-h-[100dvh] lg:min-h-[85vh] flex flex-col justify-start lg:justify-center pt-40 pb-16 lg:pt-0">
      <div className="container mx-auto px-4 max-w-7xl grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        
        {/* Left Column: Copy */}
        <div className="flex flex-col items-start z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-2 mb-6 px-3 py-1 bg-surface rounded-full border border-border text-sm font-medium"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-accent"></span>
            </span>
            {personal.status}
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-5xl md:text-7xl font-display font-bold tracking-tight mb-4 text-balance"
          >
            I build <span className="text-accent italic">AI-driven</span> systems and scalable web apps.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg text-text-muted mb-8 max-w-xl text-balance"
          >
            {personal.bioShort}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-wrap items-center gap-4 mb-12"
          >
            <Button asChild variant="accent" size="lg">
              <Link href="/projects">View Projects</Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link href="/contact">Contact Me</Link>
            </Button>
          </motion.div>

          {/* Quick Info Strip */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="flex flex-wrap items-center gap-6 text-sm text-text-muted"
          >
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4" />
              {personal.location}
            </div>
          </motion.div>
        </div>

        {/* Right Column: 3D Scene */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative h-[400px] md:h-[600px] w-full"
        >
          {/* Decorative background glow */}
          <div className="absolute inset-0 bg-accent/5 rounded-full blur-3xl -z-10" />
          <DeskSceneLoader />
        </motion.div>

      </div>
    </section>
  );
}
