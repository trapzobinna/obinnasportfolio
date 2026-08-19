import { Metadata } from "next";
import { buildMetadata } from "@/lib/metadata";
import { PageTransition } from "@/components/layout/PageTransition";
import { certifications } from "@/content/certifications";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { ExternalLink, Award, ArrowLeft } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = buildMetadata({
  title: "Certifications",
  description: "Degrees and certifications obtained by Obinna Okeke.",
});

export default function CertificationsPage() {
  const featured = certifications.filter((c) => c.featured);
  const others = certifications.filter((c) => !c.featured);

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

        <div className="mb-16">
          <h1 className="text-4xl md:text-5xl font-display font-bold mb-4 tracking-tight">
            Certifications
          </h1>
          <p className="text-lg text-text-muted max-w-2xl">
            My academic degrees and professional certifications.
          </p>
        </div>

        {/* Featured / Hero Credentials */}
        {featured.length > 0 && (
          <div className="mb-16">
            <h2 className="text-xs font-bold uppercase tracking-widest text-accent mb-6">Degree</h2>
            <div className="grid grid-cols-1 gap-6">
              {featured.map((cert, idx) => (
                <div key={idx} className="bg-surface rounded-2xl p-8 border-2 border-accent/20 relative overflow-hidden">
                  <div className="absolute -right-12 -top-12 opacity-5 rotate-12">
                    <Award className="w-48 h-48 text-accent" />
                  </div>
                  <div className="relative z-10">
                    <Badge variant="accent" className="mb-4">Featured</Badge>
                    <h3 className="text-2xl md:text-3xl font-display font-bold mb-2">{cert.name}</h3>
                    <p className="text-text-muted text-lg mb-6">{cert.issuer}</p>

                    {cert.verifyUrl ? (
                      <Button asChild variant="outline" size="sm">
                        <a href={cert.verifyUrl} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="w-4 h-4" />
                          Verify Credential
                        </a>
                      </Button>
                    ) : (
                      <Button variant="outline" size="sm" disabled>
                        Verification not available online
                      </Button>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Other Certifications */}
        {others.length > 0 && (
          <div>
            <h2 className="text-xs font-bold uppercase tracking-widest text-accent mb-6">Professional Certifications</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {others.map((cert, idx) => (
                <div key={idx} className="bg-surface rounded-xl p-6 border border-border group hover:border-accent/40 transition-colors flex flex-col">
                  <div className="flex-1">
                    <h3 className="text-base font-bold mb-1 group-hover:text-accent transition-colors">{cert.name}</h3>
                    <p className="text-text-muted text-sm mb-5">{cert.issuer}</p>
                  </div>

                  {cert.verifyUrl ? (
                    <Button asChild variant="outline" size="sm" className="w-fit">
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
              ))}
            </div>
          </div>
        )}

      </div>
    </PageTransition>
  );
}
