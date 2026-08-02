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
  FAQ_DATA,
} from '@/lib/seo-data';

// =============================================================
// SERVICE + BRAND PAGE — /services/engine-repair/toyota
// Target: "engine repair for Toyota in Sharjah"
// =============================================================

interface PageProps {
  params: Promise<{ slug: string; brand: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug, brand: brandSlug } = await params;
  const service = getServiceBySlug(slug);
  const brand = getBrandBySlug(brandSlug);

  if (!service || !brand) return { title: 'Not Found' };

  return {
    title: `${service.title} for ${brand.name} in Sharjah | ${SITE_NAME}`,
    description: `Professional ${service.title.toLowerCase()} for ${brand.name} in Sharjah. ${service.shortDesc} ${brand.origin}-spec ${brand.name} specialists at ${BUSINESS_NAME}. Book now!`,
    keywords: `${service.title.toLowerCase()} ${brand.name} Sharjah, ${brand.name} ${service.title.toLowerCase()} UAE, ${brand.name} repair Sharjah, ${brand.name} mechanic Sharjah, ${brand.name} service center Sharjah, best ${brand.name} garage Sharjah, ${brand.name} specialist Sharjah`,
    openGraph: {
      title: `${service.title} for ${brand.name} | ${SITE_NAME} Sharjah`,
      description: `Expert ${service.title.toLowerCase()} for your ${brand.name}. ${brand.origin}-spec specialists. Book now!`,
      url: `${SITE_URL}/services/${service.slug}/${brand.slug}`,
    },
    alternates: {
      canonical: `${SITE_URL}/services/${service.slug}/${brand.slug}`,
    },
  };
}

export function generateStaticParams() {
  const params: { slug: string; brand: string }[] = [];
  for (const service of SERVICES) {
    for (const brand of CAR_BRANDS) {
      params.push({ slug: service.slug, brand: brand.slug });
    }
  }
  return params;
}

function buildJsonLd(
  service: (typeof SERVICES)[number],
  brand: (typeof CAR_BRANDS)[number]
) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: `${service.title} for ${brand.name} in Sharjah`,
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

export default async function ServiceBrandPage({ params }: PageProps) {
  const { slug, brand: brandSlug } = await params;
  const service = getServiceBySlug(slug);
  const brand = getBrandBySlug(brandSlug);

  if (!service || !brand) notFound();

  const models = CAR_MODELS[brand.slug] || [];
  const jsonLd = buildJsonLd(service, brand);

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
            <span className="text-foreground">{brand.name}</span>
          </nav>

          {/* Title */}
          <h1 className="text-3xl sm:text-4xl font-bold mb-2">
            {service.title} for {brand.name} in Sharjah
          </h1>
          <h2 className="text-lg text-muted-foreground mb-4">
            {service.h2} &mdash; {brand.origin}-spec {brand.name} Specialists
          </h2>
          <p className="text-muted-foreground mb-10 max-w-2xl">{service.metaDesc}</p>

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

          {/* Models grid */}
          {models.length > 0 && (
            <div className="mb-12">
              <h3 className="text-xl font-bold mb-4">
                {service.title} for {brand.name} Models
              </h3>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
                {models.map((m) => {
                  const mSlug = m.toLowerCase().replace(/[^a-z0-9]+/g, '-');
                  return (
                    <Link
                      key={mSlug}
                      href={`/services/${service.slug}/${brand.slug}/${mSlug}`}
                      className="p-3 rounded-xl border border-border bg-card hover:border-primary/30 transition-all text-sm"
                    >
                      <span className="font-medium">{brand.name} {m}</span>
                      <span className="text-muted-foreground ml-1">&rarr;</span>
                    </Link>
                  );
                })}
              </div>
            </div>
          )}

          {/* What's Included */}
          <div className="mb-12">
            <h3 className="text-xl font-bold mb-4">What&apos;s Included</h3>
            <ul className="space-y-2 text-muted-foreground">
              <li className="flex items-start gap-2">
                <span className="text-primary mt-1">&#10003;</span>
                <span>Comprehensive diagnostic for {brand.name} vehicles</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary mt-1">&#10003;</span>
                <span>Specialized {brand.origin}-spec {brand.name} expertise</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary mt-1">&#10003;</span>
                <span>Genuine OEM parts or trusted aftermarket alternatives</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary mt-1">&#10003;</span>
                <span>Transparent written quote before work begins</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary mt-1">&#10003;</span>
                <span>Service warranty on all repairs</span>
              </li>
            </ul>
          </div>

          {/* Other Services for this Brand */}
          <div className="mb-12">
            <h3 className="text-xl font-bold mb-4">Other {brand.name} Services</h3>
            <div className="grid sm:grid-cols-2 gap-3">
              {SERVICES.filter((s) => s.slug !== service.slug).map((s) => (
                <Link
                  key={s.slug}
                  href={`/services/${s.slug}/${brand.slug}`}
                  className="p-3 rounded-xl border border-border bg-card hover:border-primary/30 transition-all text-sm"
                >
                  <span className="font-medium">{s.title}</span>
                  <span className="text-muted-foreground ml-1">&rarr;</span>
                </Link>
              ))}
            </div>
          </div>

          {/* FAQ */}
          <div className="mb-12">
            <h3 className="text-xl font-bold mb-6">Frequently Asked Questions</h3>
            <div className="space-y-4">
              {FAQ_DATA.slice(0, 4).map((faq, i) => (
                <details key={i} className="border border-border rounded-xl p-4">
                  <summary className="font-medium cursor-pointer text-sm">{faq.question}</summary>
                  <p className="text-sm text-muted-foreground mt-2">{faq.answer}</p>
                </details>
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
