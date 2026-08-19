import type { Metadata } from 'next';

interface MetadataProps {
  title?: string;
  description?: string;
  image?: string;
  noIndex?: boolean;
}

export function buildMetadata({
  title,
  description,
  image,
  noIndex = false,
}: MetadataProps = {}): Metadata {
  const baseTitle = 'Obinna Okeke | Full-Stack & AI Systems Developer';
  const finalTitle = title ? `${title} | Obinna Okeke` : baseTitle;
  const finalDescription =
    description ||
    'Portfolio of Obinna Okeke, a Computer Science graduate specializing in Full-Stack and AI Systems Development.';

  return {
    title: finalTitle,
    description: finalDescription,
    robots: {
      index: !noIndex,
      follow: !noIndex,
    },
    openGraph: {
      title: finalTitle,
      description: finalDescription,
      url: 'https://obinna-portfolio.vercel.app', // TODO: Update with real URL
      siteName: 'Obinna Okeke',
      images: [
        {
          url: image || '/og/default.png', // TODO: Update with real dynamic OG route if needed
          width: 1200,
          height: 630,
          alt: finalTitle,
        },
      ],
      locale: 'en_US',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: finalTitle,
      description: finalDescription,
      images: [image || '/og/default.png'],
    },
  };
}
