"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { Project } from "@/types";
import { Badge } from "./Badge";
import { ArrowUpRight, Play, Film } from "lucide-react";

export function ProjectCard({ project }: { project: Project }) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    // Only apply autoplay for mobile / tablet screens (width < 1024px or touch-primary devices)
    const isMobileOrTablet =
      window.innerWidth < 1024 ||
      window.matchMedia("(pointer: coarse)").matches;

    const video = videoRef.current;
    if (!video || !project.demoVideo) return;

    if (isMobileOrTablet) {
      // Setup IntersectionObserver for smooth autoplay on mobile/tablet when scrolled into view
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              video.muted = true;
              video.play().catch(() => {});
              setIsPlaying(true);
            } else {
              video.pause();
              setIsPlaying(false);
            }
          });
        },
        { threshold: 0.2 }
      );

      if (containerRef.current) {
        observer.observe(containerRef.current);
      }

      // Initial autoplay trigger for mobile/tablet
      video.muted = true;
      video.play().catch(() => {});

      return () => {
        observer.disconnect();
      };
    }
  }, [project.demoVideo]);

  // Laptop / Desktop Hover Handlers
  const handleMouseEnter = () => {
    const isLaptopOrDesktop = window.innerWidth >= 1024 && !window.matchMedia("(pointer: coarse)").matches;
    if (isLaptopOrDesktop && videoRef.current && project.demoVideo) {
      videoRef.current.muted = true;
      const playPromise = videoRef.current.play();
      if (playPromise !== undefined) {
        playPromise
          .then(() => {
            setIsPlaying(true);
          })
          .catch(() => {});
      }
    }
  };

  const handleMouseLeave = () => {
    const isLaptopOrDesktop = window.innerWidth >= 1024 && !window.matchMedia("(pointer: coarse)").matches;
    if (isLaptopOrDesktop && videoRef.current && project.demoVideo) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
      setIsPlaying(false);
    }
  };

  return (
    <Link
      href={`/projects/${project.slug}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className="group flex flex-col relative bg-surface rounded-2xl border border-border hover:border-accent/50 transition-all duration-300 hover:shadow-card-hover overflow-hidden"
    >
      {/* Top Media / Video Banner Preview */}
      <div
        ref={containerRef}
        className="relative aspect-video w-full bg-surface-hover/80 overflow-hidden border-b border-border/80 flex items-center justify-center"
      >
        {project.demoVideo ? (
          <>
            <video
              ref={videoRef}
              src={project.demoVideo}
              muted
              loop
              playsInline
              preload="auto"
              className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
            />

            {/* Laptop/Desktop Play Icon: Visible when idle on laptop/desktop (hidden on mobile/tablet or when playing) */}
            <div
              className={`hidden lg:flex absolute inset-0 bg-background/40 items-center justify-center backdrop-blur-[2px] transition-opacity duration-300 ${
                isPlaying ? "opacity-0 pointer-events-none" : "opacity-100"
              }`}
            >
              <div className="w-11 h-11 rounded-full bg-surface/90 border border-accent/30 flex items-center justify-center text-accent shadow-lg group-hover:scale-110 transition-transform duration-300">
                <Play className="w-4 h-4 fill-accent ml-0.5" />
              </div>
            </div>

            {/* Preview Badge Indicator */}
            <div
              className={`absolute top-3 left-3 px-2.5 py-1 rounded-full bg-background/80 border border-accent/30 text-[10px] font-semibold text-accent flex items-center gap-1.5 backdrop-blur-md transition-opacity duration-300 ${
                isPlaying ? "opacity-100" : "opacity-0 lg:opacity-0"
              }`}
            >
              <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
              PREVIEW
            </div>
          </>
        ) : (
          /* Sleek Geometric / Placeholder fallback */
          <div className="w-full h-full relative flex flex-col items-center justify-center p-6 text-center bg-gradient-to-br from-surface via-surface-hover to-surface overflow-hidden">
            <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_50%_50%,_var(--accent)_1px,_transparent_1px)] bg-[size:16px_16px]" />
            <div className="w-10 h-10 rounded-xl bg-accent/5 border border-accent/20 flex items-center justify-center text-accent/70 mb-2 group-hover:scale-110 group-hover:border-accent/40 group-hover:text-accent transition-all duration-300">
              <Film className="w-5 h-5" />
            </div>
            <span className="text-[11px] font-mono tracking-wider uppercase text-text-muted/60">
              Interactive Case Study
            </span>
          </div>
        )}
      </div>

      {/* Card Content */}
      <div className="p-6 flex flex-col flex-1">
        <div className="flex items-start justify-between gap-4 mb-3">
          <h3 className="text-xl font-display font-bold group-hover:text-accent transition-colors leading-tight">
            {project.title}
          </h3>
          <div className="opacity-0 -translate-y-1 translate-x-1 group-hover:opacity-100 group-hover:translate-y-0 group-hover:translate-x-0 transition-all duration-300 shrink-0">
            <ArrowUpRight className="text-accent w-5 h-5" />
          </div>
        </div>

        <p className="text-text-muted text-sm line-clamp-2 mb-6 leading-relaxed">
          {project.summary}
        </p>

        <div className="flex flex-wrap gap-2 mt-auto pt-2">
          {project.tags.slice(0, 3).map((tag) => (
            <Badge key={tag} variant="outline" className="text-xs">
              {tag}
            </Badge>
          ))}
          {project.tags.length > 3 && (
            <Badge variant="outline" className="text-xs">
              +{project.tags.length - 3}
            </Badge>
          )}
        </div>
      </div>
    </Link>
  );
}
