import { Metadata } from "next";
import { notFound } from "next/navigation";
import { projects } from "@/content/projects";
import { buildMetadata } from "@/lib/metadata";
import { PageTransition } from "@/components/layout/PageTransition";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { ExternalLink, ArrowLeft } from "lucide-react";
import { GithubIcon } from "@/components/ui/Icons";
import Link from "next/link";

export async function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata(
  props: { params: Promise<{ slug: string }> }
): Promise<Metadata> {
  const params = await props.params;
  const project = projects.find((p) => p.slug === params.slug);
  
  if (!project) return {};
  
  return buildMetadata({
    title: project.title,
    description: project.summary,
  });
}

export default async function ProjectCaseStudy(props: { params: Promise<{ slug: string }> }) {
  const params = await props.params;
  const project = projects.find((p) => p.slug === params.slug);

  if (!project) {
    notFound();
  }

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

        {/* Header */}
        <div className="mb-16">
          <div className="flex flex-wrap items-center gap-3 mb-6">
            <Badge variant="accent" className="px-3 py-1 text-sm">{project.status === 'live' ? 'Live' : 'In Progress'}</Badge>
            {project.tags.map(tag => (
              <Badge key={tag} variant="outline">{tag}</Badge>
            ))}
          </div>
          
          <h1 className="text-4xl md:text-6xl font-display font-bold mb-6 tracking-tight text-balance">
            {project.title}
          </h1>
          
          <p className="text-xl text-text-muted max-w-3xl leading-relaxed">
            {project.summary}
          </p>
        </div>

        {/* Links */}
        <div className="flex flex-wrap gap-4 mb-16 pb-16 border-b border-border">
          {project.githubUrl ? (
            <Button asChild variant="outline" className="gap-2">
              <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                <GithubIcon className="w-4 h-4" /> View Source
              </a>
            </Button>
          ) : (
            <Button variant="outline" className="gap-2" disabled>
              <GithubIcon className="w-4 h-4" /> Source (Coming Soon)
            </Button>
          )}

          {project.liveUrl ? (
            <Button asChild variant="accent" className="gap-2 text-[#000000]">
              <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                <ExternalLink className="w-4 h-4" /> Live Demo
              </a>
            </Button>
          ) : (
            <Button variant="accent" className="gap-2" disabled>
              <ExternalLink className="w-4 h-4" /> Live Demo (Coming Soon)
            </Button>
          )}
        </div>

        {/* Content */}
        <div className="grid grid-cols-1 md:grid-cols-[2fr_1fr] gap-12 lg:gap-24">
          
          {/* Main Content */}
          <div className="space-y-12">
            <section>
              <h2 className="text-2xl font-display font-bold mb-4 text-text-primary">The Problem</h2>
              <p className="text-text-muted leading-relaxed">{project.problem}</p>
            </section>
            
            <section>
              <h2 className="text-2xl font-display font-bold mb-4 text-text-primary">The Approach</h2>
              <p className="text-text-muted leading-relaxed">{project.approach}</p>
            </section>

            <section>
              <h2 className="text-2xl font-display font-bold mb-4 text-text-primary">Architecture</h2>
              <p className="text-text-muted leading-relaxed">{project.architecture}</p>
            </section>

            {/* Demo Video / Placeholder */}
            <section className="pt-8">
              <h2 className="text-2xl font-display font-bold mb-4 text-text-primary">Demo</h2>
              {project.demoVideo ? (
                <div className="aspect-video w-full rounded-2xl overflow-hidden border border-border bg-black">
                  <video
                    src={project.demoVideo}
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full h-full object-cover"
                  />
                </div>
              ) : (
                <div className="aspect-video w-full bg-surface rounded-2xl border border-dashed border-border flex flex-col items-center justify-center relative overflow-hidden">
                  <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center mb-4">
                    <svg className="w-6 h-6 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <p className="text-sm font-medium text-text-muted mb-1">Demo video coming soon</p>
                  <p className="text-xs text-text-muted/50">Add a sped-up screen recording to <code className="bg-surface-hover px-1.5 py-0.5 rounded text-xs">/public/demos/{project.slug}.mp4</code></p>
                </div>
              )}
            </section>
          </div>

          {/* Sidebar */}
          <aside className="space-y-10">
            <div>
              <h3 className="text-sm font-bold uppercase tracking-wider text-text-primary mb-4">Tech Stack</h3>
              <ul className="flex flex-wrap gap-2">
                {project.techStack.map(tech => (
                  <li key={tech}>
                    <Badge variant="default" className="text-sm py-1 font-medium bg-surface hover:bg-surface-hover border-transparent">
                      {tech}
                    </Badge>
                  </li>
                ))}
              </ul>
            </div>

            {project.metrics.length > 0 && (
              <div>
                <h3 className="text-sm font-bold uppercase tracking-wider text-text-primary mb-4">Key Metrics</h3>
                <ul className="space-y-3">
                  {project.metrics.map(metric => (
                    <li key={metric} className="flex items-start gap-3">
                      <span className="text-accent mt-0.5">✦</span>
                      <span className="text-text-muted">{metric}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </aside>
          
        </div>
      </div>
    </PageTransition>
  );
}
