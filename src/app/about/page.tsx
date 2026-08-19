import { Metadata } from "next";
import { buildMetadata } from "@/lib/metadata";
import { PageTransition } from "@/components/layout/PageTransition";
import { personal } from "@/content/personal";
import { Badge } from "@/components/ui/Badge";
import { Calendar, Building, ArrowLeft } from "lucide-react";
import Link from "next/link";

import { Button } from "@/components/ui/Button";

export const metadata: Metadata = buildMetadata({
  title: "About",
  description: "Learn more about Obinna Okeke, his background, experience, and workflow.",
});

export default function AboutPage() {
  return (
    <PageTransition>
      <div className="container mx-auto px-4 max-w-4xl pt-36 md:pt-40 pb-24 relative">

        {/* Back */}
        <div className="mb-8 md:mb-12 -ml-4">
          <Button asChild variant="ghost" className="text-text-muted hover:text-text-primary relative z-20">
            <Link href="/">
              <ArrowLeft className="w-4 h-4" />
              Back to Home
            </Link>
          </Button>
        </div>

        {/* Header & Bio */}
        <div className="mb-16">
          <h1 className="text-4xl md:text-5xl font-display font-bold mb-6 tracking-tight">
            About Me
          </h1>
          <div className="prose prose-invert prose-lg max-w-none text-text-muted">
            <p>{personal.bioLong}</p>
          </div>
        </div>

        {/* Timeline Bento Grid */}
        <div className="mb-20">
          <h2 className="text-2xl font-display font-bold mb-6">Experience &amp; Education</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

            {/* Education */}
            <div className="bg-surface rounded-2xl p-6 border border-border flex flex-col h-full">
              <Badge variant="accent" className="w-fit mb-4">Education</Badge>
              {personal.education.map((item, idx) => (
                <div key={idx} className="flex-1">
                  <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                  <div className="flex items-center gap-2 text-sm text-text-muted mb-2">
                    <Building className="w-4 h-4 shrink-0" />
                    <span>{item.organization}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-text-muted mb-4">
                    <Calendar className="w-4 h-4 shrink-0" />
                    <span>{item.date}</span>
                  </div>
                  <p className="text-text-primary text-sm leading-relaxed">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>

            {/* Experience */}
            <div className="bg-surface rounded-2xl p-6 border border-border flex flex-col h-full">
              <Badge variant="default" className="w-fit mb-4">Experience</Badge>
              {personal.experience.map((item, idx) => (
                <div key={idx} className={`flex-1 ${idx > 0 ? "mt-6 pt-6 border-t border-border" : ""}`}>
                  <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                  <div className="flex items-center gap-2 text-sm text-text-muted mb-2">
                    <Building className="w-4 h-4 shrink-0" />
                    <span>{item.organization}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-text-muted mb-4">
                    <Calendar className="w-4 h-4 shrink-0" />
                    <span>{item.date}</span>
                  </div>
                  <ul className="list-disc list-outside ml-4 space-y-2 text-sm text-text-primary">
                    {item.bullets?.map((bullet, bIdx) => (
                      <li key={bIdx}>{bullet}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* How I Work */}
        <div className="mb-20">
          <h2 className="text-2xl font-display font-bold mb-6">How I Work</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {personal.howIWork.map((step, idx) => (
              <div key={idx} className="bg-surface rounded-2xl p-6 border border-border">
                <div className="flex items-center gap-3 mb-3">
                  <span className="w-7 h-7 rounded-full bg-accent/10 border border-accent/20 flex items-center justify-center text-xs font-bold text-accent shrink-0">
                    {idx + 1}
                  </span>
                  <h3 className="text-base font-bold text-text-primary">{step.step}</h3>
                </div>
                <p className="text-sm text-text-muted leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Off Duty */}
        <div>
          <h2 className="text-2xl font-display font-bold mb-6">Off Duty</h2>
          <div className="bg-surface rounded-2xl p-6 border border-border">
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {personal.offDuty.map((item, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <span className="text-accent mt-0.5 shrink-0">✦</span>
                  <span className="text-text-primary text-sm">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

      </div>
    </PageTransition>
  );
}
