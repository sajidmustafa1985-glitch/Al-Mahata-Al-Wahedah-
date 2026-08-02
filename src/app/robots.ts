import { MetadataRoute } from 'next';
import { SITE_URL } from '@/lib/seo-data';

// =============================================================
// Dynamic robots.txt — Replaces the static public/robots.txt
// Delete public/robots.txt after adding this file!
// =============================================================

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/api/'],
      },
    ],
    sitemap: `${SITE_URL}/sitemap.xml`,
  };
}
