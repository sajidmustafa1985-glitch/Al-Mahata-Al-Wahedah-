// =============================================================
// FAQ JSON-LD Structured Data Component
// Add this to layout.tsx alongside the existing AutoRepair JSON-LD
// Google uses FAQPage schema to show rich results in search
// =============================================================

import { FAQ_DATA } from '@/lib/seo-data';

export default function FaqJsonLd() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: FAQ_DATA.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}
