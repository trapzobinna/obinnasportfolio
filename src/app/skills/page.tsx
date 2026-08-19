import { Metadata } from "next";
import { buildMetadata } from "@/lib/metadata";
import { PageTransition } from "@/components/layout/PageTransition";
import { skillGroups } from "@/content/skills";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/Button";

export const metadata: Metadata = buildMetadata({
  title: "Skills",
  description: "Technical toolkit and proficiencies.",
});

export default function SkillsPage() {
  return (
    <PageTransition>
      <div className="container mx-auto px-4 max-w-7xl pt-36 md:pt-40 pb-24 relative">

        {/* Back */}
        <div className="mb-8 md:mb-12 -ml-4">
          <Button asChild variant="ghost" className="text-text-muted hover:text-text-primary relative z-20">
            <Link href="/">
              <ArrowLeft className="w-4 h-4" />
              Back to Home
            </Link>
          </Button>
        </div>

        <div className="mb-12">
          <h1 className="text-4xl md:text-5xl font-display font-bold mb-4 tracking-tight">
            Technical Toolkit
          </h1>
          <p className="text-lg text-text-muted max-w-2xl">
            A structured breakdown of my capabilities across languages, frameworks, AI systems, and tools.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {skillGroups.map((group) => (
            <div
              key={group.category}
              className="p-6 rounded-2xl bg-surface border border-border hover:border-accent/30 transition-colors duration-300"
            >
              <h2 className="text-xs font-bold uppercase tracking-widest text-accent mb-4">
                {group.category}
              </h2>
              <div className="flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <span
                    key={skill.name}
                    className={[
                      "inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium border transition-colors",
                      skill.tier === "comfortable"
                        ? "bg-accent/10 border-accent/20 text-text-primary"
                        : skill.tier === "working-knowledge"
                        ? "bg-surface-hover border-border text-text-muted"
                        : "bg-transparent border-border/50 text-text-muted/60",
                    ].join(" ")}
                  >
                    {skill.tier === "comfortable" && (
                      <span className="w-1.5 h-1.5 rounded-full bg-accent shrink-0" />
                    )}
                    {skill.name}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Legend */}
        <div className="flex items-center gap-6 mt-8 px-1">
          <span className="flex items-center gap-2 text-xs text-text-muted">
            <span className="w-2 h-2 rounded-full bg-accent" />
            Comfortable
          </span>
          <span className="flex items-center gap-2 text-xs text-text-muted">
            <span className="w-2 h-2 rounded-full bg-border" />
            Working knowledge
          </span>
          <span className="flex items-center gap-2 text-xs text-text-muted">
            <span className="w-2 h-2 rounded-full bg-border/40" />
            Learning
          </span>
        </div>

      </div>
    </PageTransition>
  );
}
