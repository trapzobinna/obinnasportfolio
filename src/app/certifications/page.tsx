import { Metadata } from "next";
import { buildMetadata } from "@/lib/metadata";
import { PageTransition } from "@/components/layout/PageTransition";
import { certifications } from "@/content/certifications";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { CertificationCard } from "@/components/ui/CertificationCard";
import { ExternalLink, Award, ArrowLeft } from "lucide-react";
import Image from "next/image";
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
      <div className="container mx-auto px-4 max-w-5xl pt-36 md:pt-40 pb-24 relative">

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
                <div key={idx} className="group bg-surface rounded-2xl border-2 border-accent/20 relative overflow-hidden flex flex-col md:flex-row hover:border-accent/50 transition-all duration-300">
                  {cert.image && (
                    <div className="relative w-full md:w-2/5 min-h-[220px] bg-surface-hover overflow-hidden border-b md:border-b-0 md:border-r border-border/80">
                      <Image
                        src={cert.image}
                        alt={cert.name}
                        fill
                        className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
                      />
                    </div>
                  )}
                  
                  <div className="p-8 relative z-10 flex-1 flex flex-col justify-center">
                    {!cert.image && (
                      <div className="absolute -right-12 -top-12 opacity-5 rotate-12 pointer-events-none">
                        <Award className="w-48 h-48 text-accent" />
                      </div>
                    )}
                    <Badge variant="accent" className="w-fit mb-4">Featured Degree</Badge>
                    <h3 className="text-2xl md:text-3xl font-display font-bold mb-2 group-hover:text-accent transition-colors">{cert.name}</h3>
                    <p className="text-text-muted text-lg mb-6">{cert.issuer}</p>

                    {cert.verifyUrl ? (
                      <Button asChild variant="outline" size="sm" className="w-fit">
                        <a href={cert.verifyUrl} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="w-4 h-4" />
                          Verify Credential
                        </a>
                      </Button>
                    ) : (
                      <Button variant="outline" size="sm" disabled className="w-fit">
                        Official Academic Record
                      </Button>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Other Certifications Grid */}
        {others.length > 0 && (
          <div>
            <h2 className="text-xs font-bold uppercase tracking-widest text-accent mb-6">Professional Certifications</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {others.map((cert, idx) => (
                <CertificationCard key={idx} cert={cert} />
              ))}
            </div>
          </div>
        )}

      </div>
    </PageTransition>
  );
}
