import { HomeHero } from "@/components/sections/HomeHero";
import { ProjectCard } from "@/components/ui/ProjectCard";
import { projects } from "@/content/projects";
import { skillGroups } from "@/content/skills";
import { Button } from "@/components/ui/Button";
import Link from "next/link";
import { PageTransition } from "@/components/layout/PageTransition";

export default function Home() {
  const featuredProjects = projects.filter((p) => p.featured);

  return (
    <PageTransition>
      <div className="flex flex-col gap-32 pb-24">
        <HomeHero />

        {/* Featured Projects Section */}
        <section className="container mx-auto px-4 max-w-7xl">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
                Selected Work
              </h2>
              <p className="text-text-muted max-w-xl">
                A showcase of my most complex engineering projects, combining AI models, full-stack architecture, and real-world impact.
              </p>
            </div>
            <Button asChild variant="outline" size="sm" className="shrink-0">
              <Link href="/projects">View All Projects →</Link>
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredProjects.map((project) => (
              <ProjectCard key={project.slug} project={project} />
            ))}
          </div>
        </section>

        {/* Skills Teaser */}
        <section className="container mx-auto px-4 max-w-7xl">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
            <div>
              <h2 className="text-3xl md:text-4xl font-display font-bold mb-3">
                Technical Toolkit
              </h2>
              <p className="text-text-muted max-w-xl">
                The languages, frameworks, and tools I use to bring ideas to production.
              </p>
            </div>
            <Button asChild variant="outline" size="sm" className="shrink-0 self-start sm:self-auto">
              <Link href="/skills">View All Skills →</Link>
            </Button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {skillGroups.slice(0, 6).map((group) => (
              <div
                key={group.category}
                className="p-6 rounded-2xl bg-surface border border-border hover:border-accent/30 transition-colors duration-300"
              >
                <h3 className="text-xs font-bold uppercase tracking-widest text-accent mb-4">
                  {group.category}
                </h3>
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
          <div className="flex items-center gap-6 mt-6 px-1">
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
        </section>

        {/* Contact CTA Banner */}
        <section className="container mx-auto px-4 max-w-7xl">
          <div className="bg-accent/10 border border-accent/20 rounded-3xl p-8 md:p-16 text-center relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent pointer-events-none" />
            <div className="relative z-10 max-w-2xl mx-auto">
              <h2 className="text-3xl md:text-5xl font-display font-bold mb-6 text-balance">
                Let's build something <span className="text-accent">together.</span>
              </h2>
              <p className="text-text-muted text-lg mb-8">
                I'm currently open to internships and junior roles where I can contribute to meaningful engineering challenges.
              </p>
              <Button asChild variant="accent" size="lg">
                <Link href="/contact">Get in Touch</Link>
              </Button>
            </div>
          </div>
        </section>
      </div>
    </PageTransition>
  );
}
