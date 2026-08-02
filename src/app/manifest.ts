import type { MetadataRoute } from 'next';

// =============================================================
// Web App Manifest — Improves SEO & mobile experience
// =============================================================

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Al Mahata Al Wahedah — The Only Station Auto Maintenance Sharjah',
    short_name: 'Al Mahata',
    description:
      "Sharjah's trusted full-service car garage. Engine repair, mechanical & electrical services, body work, oil change, brakes, battery, transmission, and 24/7 towing recovery.",
    start_url: '/',
    display: 'standalone',
    background_color: '#0a0a0a',
    theme_color: '#d4a017',
    dir: 'ltr',
    lang: 'en-AE',
    categories: ['automotive', 'auto_repair', 'business'],
    icons: [
      {
        src: '/logo.svg',
        sizes: 'any',
        type: 'image/svg+xml',
      },
      {
        src: '/icon-192.png',
        sizes: '192x192',
        type: 'image/png',
      },
      {
        src: '/icon-512.png',
        sizes: '512x512',
        type: 'image/png',
      },
    ],
  };
}
