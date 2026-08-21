import Link from "next/link";
import { Mail } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/ui/Icons";
import { personal } from "@/content/personal";

export function Footer() {
  return (
    <footer className="border-t border-border mt-24 py-12 bg-background">
      <div className="container mx-auto px-4 max-w-7xl flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex flex-col items-center md:items-start gap-2">
          <Link href="/" className="text-xl font-display font-bold tracking-tight">
            Obinna<span className="text-accent">.</span>
          </Link>
          <p className="text-sm text-text-muted text-center md:text-left">
            © {new Date().getFullYear()} Obinna Okeke. All rights reserved.
          </p>
        </div>

        <div className="flex items-center gap-6">
          {personal.github && (
            <a
              href={personal.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-text-muted hover:text-accent transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent rounded-sm"
              aria-label="GitHub Profile"
            >
              <GithubIcon className="w-5 h-5" />
            </a>
          )}
          {personal.linkedin && (
            <a
              href={personal.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-text-muted hover:text-accent transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent rounded-sm"
              aria-label="LinkedIn Profile"
            >
              <LinkedinIcon className="w-5 h-5" />
            </a>
          )}
          {personal.email && (
            <a
              href={`mailto:${personal.email}`}
              className="text-text-muted hover:text-accent transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent rounded-sm"
              aria-label="Email Me"
            >
              <Mail className="w-5 h-5" />
            </a>
          )}
        </div>

        <div className="flex items-center">
          <a
            href="/obinnaokekecv.pdf"
            download="Obinna_Okeke_CV.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-medium border border-border px-4 py-2 rounded-full hover:border-accent hover:text-accent transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
          >
            Download Résumé
          </a>
        </div>
      </div>
    </footer>
  );
}
