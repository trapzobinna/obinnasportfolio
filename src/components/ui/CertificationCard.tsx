"use client";

import { Certification } from "@/types";
import { Button } from "@/components/ui/Button";
import { ExternalLink, Award, Sparkles } from "lucide-react";
import Image from "next/image";

export function CertificationCard({ cert }: { cert: Certification }) {
  return (
    <div className="group flex flex-col bg-surface rounded-2xl border border-border hover:border-accent/50 transition-all duration-300 hover:shadow-card-hover overflow-hidden">
      {/* Top Certificate Media Banner */}
      <div className="relative aspect-[16/10] w-full bg-surface-hover/80 overflow-hidden border-b border-border/80 flex items-center justify-center">
        {cert.image ? (
          <>
            <Image
              src={cert.image}
              alt={cert.name}
              fill
              className="object-cover object-center transition-all duration-500 group-hover:scale-105"
            />
            {/* Subtle hover gradient shine on laptop/PC */}
            <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-0 lg:group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
            
            {/* Certificate badge */}
            <div className="absolute top-3 left-3 px-2.5 py-1 rounded-full bg-background/80 border border-accent/30 text-[10px] font-semibold text-accent flex items-center gap-1.5 backdrop-blur-md">
              <Award className="w-3 h-3 text-accent" />
              VERIFIED
            </div>
          </>
        ) : (
          /* Sleek Minimalist Certificate Placeholder */
          <div className="w-full h-full relative flex flex-col items-center justify-center p-6 text-center bg-gradient-to-br from-surface via-surface-hover to-surface overflow-hidden">
            <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_50%_50%,_var(--accent)_1px,_transparent_1px)] bg-[size:16px_16px]" />
            <div className="w-12 h-12 rounded-2xl bg-accent/5 border border-accent/20 flex items-center justify-center text-accent/70 mb-2 group-hover:scale-110 group-hover:border-accent/40 group-hover:text-accent transition-all duration-300">
              <Award className="w-6 h-6" />
            </div>
            <span className="text-[11px] font-mono tracking-wider uppercase text-text-muted/60 flex items-center gap-1">
              <Sparkles className="w-3 h-3 text-accent/50" /> Credential
            </span>
          </div>
        )}
      </div>

      {/* Content Section */}
      <div className="p-6 flex flex-col flex-1">
        <div className="flex-1 mb-4">
          <h3 className="text-base font-bold mb-1.5 group-hover:text-accent transition-colors leading-snug">
            {cert.name}
          </h3>
          <p className="text-text-muted text-sm">{cert.issuer}</p>
        </div>

        <div>
          {cert.verifyUrl ? (
            <Button asChild variant="outline" size="sm" className="w-fit gap-1.5">
              <a href={cert.verifyUrl} target="_blank" rel="noopener noreferrer">
                <ExternalLink className="w-3.5 h-3.5" />
                Verify
              </a>
            </Button>
          ) : (
            <Button variant="outline" size="sm" disabled className="w-fit">
              Unverified
            </Button>
          )}
        </div>
      </div>
    </div>
  );
}
