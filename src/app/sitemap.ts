import { MetadataRoute } from 'next';
import { SERVICES, CAR_BRANDS, CAR_MODELS, SITE_URL, AREAS_SERVED } from '@/lib/seo-data';

// =============================================================
// Dynamic Sitemap — Generates ALL indexable URLs for Google
// Includes: homepage, 11 services, 16 brands × 11 services,
// car model combinations, and area pages
// =============================================================

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const today = now.toISOString().split('T')[0];

  const urls: MetadataRoute.Sitemap = [];

  // 1. Homepage
  urls.push({
    url: SITE_URL,
    lastModified: today,
    changeFrequency: 'weekly',
    priority: 1.0,
  });

  // 2. Services listing page
  urls.push({
    url: `${SITE_URL}/services`,
    lastModified: today,
    changeFrequency: 'weekly',
    priority: 0.9,
  });

  // 3. Individual service pages (11 services)
  for (const service of SERVICES) {
    urls.push({
      url: `${SITE_URL}/services/${service.slug}`,
      lastModified: today,
      changeFrequency: 'monthly',
      priority: 0.9,
    });

    // 4. Service + Brand combination pages (11 × 16 = 176 pages)
    for (const brand of CAR_BRANDS) {
      urls.push({
        url: `${SITE_URL}/services/${service.slug}/${brand.slug}`,
        lastModified: today,
        changeFrequency: 'monthly',
        priority: 0.8,
      });

      // 5. Service + Brand + Model pages (for popular models)
      const models = CAR_MODELS[brand.slug];
      if (models) {
        for (const model of models) {
          const modelSlug = model.toLowerCase().replace(/[^a-z0-9]+/g, '-');
          urls.push({
            url: `${SITE_URL}/services/${service.slug}/${brand.slug}/${modelSlug}`,
            lastModified: today,
            changeFrequency: 'monthly',
            priority: 0.7,
          });
        }
      }
    }
  }

  // 6. Brand-specific pages (16 brands)
  for (const brand of CAR_BRANDS) {
    urls.push({
      url: `${SITE_URL}/services/${brand.slug}`,
      lastModified: today,
      changeFrequency: 'monthly',
      priority: 0.7,
    });
  }

  // 7. Area/location pages for local SEO
  for (const area of AREAS_SERVED) {
    const areaSlug = area.toLowerCase().replace(/[^a-z0-9]+/g, '-');
    urls.push({
      url: `${SITE_URL}/location/${areaSlug}`,
      lastModified: today,
      changeFrequency: 'monthly',
      priority: 0.6,
    });
  }

  return urls;
}
