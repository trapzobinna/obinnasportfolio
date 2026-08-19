import { Metadata } from "next";
import { buildMetadata } from "@/lib/metadata";
import { PageTransition } from "@/components/layout/PageTransition";
import { ContactForm } from "@/components/sections/ContactForm";
import { personal } from "@/content/personal";
import { Mail, MapPin, ArrowLeft } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/ui/Icons";
import { Button } from "@/components/ui/Button";
import Link from "next/link";

export const metadata: Metadata = buildMetadata({
  title: "Contact",
  description: "Get in touch with Obinna Okeke.",
});

export default function ContactPage() {
  return (
    <PageTransition>
      <div className="container mx-auto px-4 max-w-6xl pt-36 md:pt-40 pb-24 relative">

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
            Contact
          </h1>
          <p className="text-lg text-text-muted max-w-2xl">
            I&apos;m currently looking for internships and junior roles. Reach out via the form or my direct links.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">

          {/* Form */}
          <div>
            <ContactForm />
          </div>

          {/* Links & Info */}
          <div className="space-y-10">

            {/* Connect */}
            <div>
              <h2 className="text-xs font-bold uppercase tracking-widest text-accent mb-5">Connect</h2>
              <div className="space-y-4">

                {personal.email && (
                  <a
                    href={`mailto:${personal.email}`}
                    className="flex items-center gap-5 p-5 rounded-2xl border border-border bg-surface hover:border-accent/40 hover:bg-surface-hover transition-all group"
                  >
                    <div className="w-14 h-14 bg-accent/10 rounded-full flex items-center justify-center group-hover:bg-accent/20 transition-colors shrink-0">
                      <Mail className="w-6 h-6 text-accent" />
                    </div>
                    <div className="min-w-0">
                      <p className="text-xs font-bold text-text-muted uppercase tracking-wide mb-1">Email</p>
                      <p className="text-base font-medium text-text-primary group-hover:text-accent transition-colors truncate">{personal.email}</p>
                    </div>
                  </a>
                )}

                {personal.linkedin ? (
                  <a
                    href={personal.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-5 p-5 rounded-2xl border border-border bg-surface hover:border-accent/40 hover:bg-surface-hover transition-all group"
                  >
                    <div className="w-14 h-14 bg-accent/10 rounded-full flex items-center justify-center group-hover:bg-accent/20 transition-colors shrink-0">
                      <LinkedinIcon className="w-6 h-6 text-accent" />
                    </div>
                    <div>
                      <p className="text-xs font-bold text-text-muted uppercase tracking-wide mb-1">LinkedIn</p>
                      <p className="text-base font-medium text-text-primary group-hover:text-accent transition-colors">Let&apos;s connect</p>
                    </div>
                  </a>
                ) : (
                  <div className="flex items-center gap-5 p-5 rounded-2xl border border-border bg-surface opacity-40 cursor-not-allowed">
                    <div className="w-14 h-14 bg-surface-hover rounded-full flex items-center justify-center shrink-0">
                      <LinkedinIcon className="w-6 h-6 text-text-muted" />
                    </div>
                    <div>
                      <p className="text-xs font-bold text-text-muted uppercase tracking-wide mb-1">LinkedIn</p>
                      <p className="text-base text-text-muted">Coming soon</p>
                    </div>
                  </div>
                )}

                {personal.github ? (
                  <a
                    href={personal.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-5 p-5 rounded-2xl border border-border bg-surface hover:border-accent/40 hover:bg-surface-hover transition-all group"
                  >
                    <div className="w-14 h-14 bg-accent/10 rounded-full flex items-center justify-center group-hover:bg-accent/20 transition-colors shrink-0">
                      <GithubIcon className="w-6 h-6 text-accent" />
                    </div>
                    <div>
                      <p className="text-xs font-bold text-text-muted uppercase tracking-wide mb-1">GitHub</p>
                      <p className="text-base font-medium text-text-primary group-hover:text-accent transition-colors">View my repos</p>
                    </div>
                  </a>
                ) : (
                  <div className="flex items-center gap-5 p-5 rounded-2xl border border-border bg-surface opacity-40 cursor-not-allowed">
                    <div className="w-14 h-14 bg-surface-hover rounded-full flex items-center justify-center shrink-0">
                      <GithubIcon className="w-6 h-6 text-text-muted" />
                    </div>
                    <div>
                      <p className="text-xs font-bold text-text-muted uppercase tracking-wide mb-1">GitHub</p>
                      <p className="text-base text-text-muted">Coming soon</p>
                    </div>
                  </div>
                )}

              </div>
            </div>

            {/* Location */}
            <div>
              <h2 className="text-xs font-bold uppercase tracking-widest text-accent mb-5">Location</h2>
              <div className="flex items-center gap-5 p-5 rounded-2xl border border-border bg-surface">
                <div className="w-14 h-14 bg-surface-hover rounded-full flex items-center justify-center shrink-0">
                  <MapPin className="w-6 h-6 text-text-muted" />
                </div>
                <div>
                  <p className="text-xs font-bold text-text-muted uppercase tracking-wide mb-1">Based in</p>
                  <p className="text-base font-medium text-text-primary">{personal.location}</p>
                  <p className="text-sm text-text-muted mt-0.5">{personal.status}</p>
                </div>
              </div>
            </div>

            {/* Resume */}
            {personal.resumeFilename && (
              <div className="pt-4">
                <Button asChild variant="outline" size="lg" className="w-full">
                  <a href={`/${personal.resumeFilename}`} download>
                    Download Résumé
                  </a>
                </Button>
              </div>
            )}

          </div>
        </div>
      </div>
    </PageTransition>
  );
}
