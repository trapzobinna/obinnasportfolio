"use client";

import { useState } from "react";
import { Project } from "@/types";
import { ProjectCard } from "@/components/ui/ProjectCard";
import { Badge } from "@/components/ui/Badge";
import { PageTransition } from "@/components/layout/PageTransition";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/Button";

export function ProjectsClient({ projects }: { projects: Project[] }) {
  const [filter, setFilter] = useState<string>("All");

  const tags = ["All", ...Array.from(new Set(projects.flatMap(p => p.tags)))].sort();

  const filteredProjects = filter === "All" 
    ? projects 
    : projects.filter(p => p.tags.includes(filter));

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
          <h1 className="text-4xl md:text-5xl font-display font-bold mb-6 tracking-tight">
            Projects
          </h1>
          <p className="text-lg text-text-muted max-w-2xl">
            A comprehensive collection of my work, ranging from AI-powered systems to full-stack applications and academic research.
          </p>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap gap-2 mb-12">
          {tags.map(tag => (
            <button
              key={tag}
              onClick={() => setFilter(tag)}
              className="focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent rounded-full"
            >
              <Badge 
                variant={filter === tag ? "accent" : "outline"}
                className={`text-sm py-1.5 px-4 cursor-pointer hover:border-accent transition-colors ${filter === tag ? 'border-accent' : ''}`}
              >
                {tag}
              </Badge>
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map(project => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>

        {filteredProjects.length === 0 && (
          <div className="text-center py-20 text-text-muted border border-dashed border-border rounded-2xl">
            No projects found for this category.
          </div>
        )}

      </div>
    </PageTransition>
  );
}
