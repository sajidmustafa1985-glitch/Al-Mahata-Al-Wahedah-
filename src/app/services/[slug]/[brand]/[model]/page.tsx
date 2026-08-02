import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import {
  SERVICES,
  CAR_BRANDS,
  CAR_MODELS,
  SITE_NAME,
  SITE_URL,
  BUSINESS_NAME,
  PHONE_PRIMARY,
  PHONE_RECOVERY,
  ADDRESS,
  getServiceBySlug,
  getBrandBySlug,
} from '@/lib/seo-data';

// =============================================================
// SERVICE + BRAND + MODEL PAGE
// /services/engine-repair/toyota/land-cruiser
// Target: "engine repair for Toyota Land Cruiser in Sharjah"
// These are the HIGHEST-converting long-tail search pages!
// =============================================================

interface PageProps {
  params: Promise<{ slug: string; brand: string; model: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug, brand: brandSlug, model: modelSlug } = await params;
  const service = getServiceBySlug(slug);
  const brand = getBrandBySlug(brandSlug);

  if (!service || !brand) return { title: 'Not Found' };

  const modelName = modelSlug
    .split('-')
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
    .join(' ');

  const vehicle = `${brand.name} ${modelName}`;

  return {
    title: `${service.title} for ${vehicle} in Sharjah | ${SITE_NAME}`,
    description: `Professional ${service.title.toLowerCase()} for ${vehicle} in Sharjah at ${BUSINESS_NAME}. ${service.shortDesc} ${brand.origin}-spec ${brand.name} specialists. Free inspection. Book now!`,
    keywords: `${service.title.toLowerCase()} ${vehicle} Sharjah, ${vehicle} ${service.title.toLowerCase()} UAE, ${vehicle} repair Sharjah, ${vehicle} mechanic Sharjah, ${vehicle} service Sharjah, best ${vehicle} garage Sharjah, ${vehicle} specialist Sharjah, ${vehicle} workshop Sharjah`,
    openGraph: {
      title: `${service.title} for ${vehicle} | ${SITE_NAME} Sharjah`,
      description: `Expert ${service.title.toLowerCase()} for your ${vehicle}. ${brand.origin}-spec specialists. Book now!`,
      url: `${SITE_URL}/services/${service.slug}/${brand.slug}/${modelSlug}`,
    },
    alternates: {
      canonical: `${SITE_URL}/services/${service.slug}/${brand.slug}/${modelSlug}`,
    },
  };
}

export function generateStaticParams() {
  const params: { slug: string; brand: string; model: string }[] = [];
  for (const service of SERVICES) {
    for (const brand of CAR_BRANDS) {
      const models = CAR_MODELS[brand.slug];
      if (models) {
        for (const model of models) {
          const modelSlug = model.toLowerCase().replace(/[^a-z0-9]+/g, '-');
          params.push({ slug: service.slug, brand: brand.slug, model: modelSlug });
        }
      }
    }
  }
  return params;
}

function buildJsonLd(
  service: (typeof SERVICES)[number],
  brand: (typeof CAR_BRANDS)[number],
  modelName: string
) {
  const vehicle = `${brand.name} ${modelName}`;
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: `${service.title} for ${vehicle} in Sharjah`,
    description: service.shortDesc,
    provider: {
      '@type': 'AutoRepair',
      name: BUSINESS_NAME,
      telephone: PHONE_PRIMARY,
      address: {
        '@type': 'PostalAddress',
        streetAddress: 'Sector 4, Street 19/18, Emirates Industrial City',
        addressLocality: 'Sharjah',
        addressCountry: 'AE',
      },
    },
    areaServed: { '@type': 'City', name: 'Sharjah' },
  };
}

export default async function ServiceBrandModelPage({ params }: PageProps) {
  const { slug, brand: brandSlug, model: modelSlug } = await params;
  const service = getServiceBySlug(slug);
  const brand = getBrandBySlug(brandSlug);

  if (!service || !brand) notFound();

  const modelName = modelSlug
    .split('-')
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
    .join(' ');

  const vehicle = `${brand.name} ${modelName}`;
  const jsonLd = buildJsonLd(service, brand, modelName);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          {/* Breadcrumb */}
          <nav className="text-sm text-muted-foreground mb-6 flex items-center gap-1 flex-wrap">
            <Link href="/" className="hover:text-primary">Home</Link>
            <span>/</span>
            <Link href="/services" className="hover:text-primary">Services</Link>
            <span>/</span>
            <Link href={`/services/${service.slug}`} className="hover:text-primary">
              {service.title}
            </Link>
            <span>/</span>
            <Link href={`/services/${service.slug}/${brand.slug}`} className="hover:text-primary">
              {brand.name}
            </Link>
            <span>/</span>
            <span className="text-foreground">{modelName}</span>
          </nav>

          {/* Title */}
          <h1 className="text-3xl sm:text-4xl font-bold mb-2">
            {service.title} for {vehicle} in Sharjah
          </h1>
          <h2 className="text-lg text-muted-foreground mb-4">
            {service.h2} &mdash; {brand.origin}-spec {brand.name} Specialists
          </h2>
          <p className="text-muted-foreground mb-10 max-w-2xl">
            Professional {service.title.toLowerCase()} for your {vehicle} in Sharjah.{' '}
            {service.shortDesc} Our {brand.origin}-spec {brand.name} specialists use genuine OEM parts
            and state-of-the-art diagnostic equipment. Free first inspection for new customers.
          </p>

          {/* CTA */}
          <div className="flex flex-col sm:flex-row gap-3 mb-12">
            <a
              href="/"
              className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-primary text-primary-foreground font-medium hover:bg-primary/90 transition-colors"
            >
              Book This Service
            </a>
            <a
              href={`tel:${PHONE_PRIMARY}`}
              className="inline-flex items-center justify-center px-6 py-3 rounded-lg border border-border font-medium hover:bg-accent transition-colors"
            >
              Call: {PHONE_PRIMARY}
            </a>
            <a
              href={`https://wa.me/${PHONE_RECOVERY.replace(/[^0-9]/g, '')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-6 py-3 rounded-lg border border-border font-medium hover:bg-accent transition-colors"
            >
              WhatsApp Us
            </a>
          </div>

          {/* What is Included */}
          <div className="mb-12">
            <h3 className="text-xl font-bold mb-4">What is Included</h3>
            <ul className="space-y-2 text-muted-foreground">
              <li className="flex items-start gap-2">
                <span className="text-primary mt-1">&#10003;</span>
                <span>Full diagnostic inspection for {vehicle}</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary mt-1">&#10003;</span>
                <span>Specialized {brand.origin}-spec {brand.name} expertise</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary mt-1">&#10003;</span>
                <span>Genuine OEM parts for {vehicle}</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary mt-1">&#10003;</span>
                <span>Transparent written quote &mdash; no hidden fees</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary mt-1">&#10003;</span>
                <span>Service warranty on all {vehicle} repairs</span>
              </li>
            </ul>
          </div>

          {/* Other Services for this Model */}
          <div className="mb-12">
            <h3 className="text-xl font-bold mb-4">Other Services for {vehicle}</h3>
            <div className="grid sm:grid-cols-2 gap-3">
              {SERVICES.filter((s) => s.slug !== service.slug).map((s) => (
                <Link
                  key={s.slug}
                  href={`/services/${s.slug}/${brand.slug}/${modelSlug}`}
                  className="p-3 rounded-xl border border-border bg-card hover:border-primary/30 transition-all text-sm"
                >
                  <span className="font-medium">{s.title}</span>
                  <span className="text-muted-foreground ml-1">&rarr;</span>
                </Link>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div className="border-t border-border pt-8">
            <h3 className="text-xl font-bold mb-4">Contact Us</h3>
            <div className="grid sm:grid-cols-2 gap-4 text-sm">
              <div>
                <p className="font-medium mb-1">Address</p>
                <p className="text-muted-foreground">{ADDRESS}</p>
              </div>
              <div>
                <p className="font-medium mb-1">Phone</p>
                <p className="text-muted-foreground">
                  <a href={`tel:${PHONE_PRIMARY}`} className="hover:text-primary">{PHONE_PRIMARY}</a>
                </p>
                <p className="text-primary text-xs mt-1">
                  24/7 Recovery:{' '}
                  <a href={`tel:${PHONE_RECOVERY}`} className="hover:underline">{PHONE_RECOVERY}</a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
