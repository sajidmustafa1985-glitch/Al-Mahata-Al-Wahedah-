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
// DYNAMIC SERVICE PAGE — /services/[slug]
// Handles:
//   /services/engine-repair  → service detail page
//   /services/toyota          → brand hub page (all services for Toyota)
// =============================================================

interface PageProps {
  params: Promise<{ slug: string }>;
}

// ---- METADATA ----
export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;

  const service = getServiceBySlug(slug);
  const brand = getBrandBySlug(slug);

  // Brand hub page
  if (!service && brand) {
    return {
      title: `${brand.name} Repair Sharjah | ${brand.name} Garage | ${SITE_NAME}`,
      description: `Expert ${brand.name} repair & service in Sharjah at ${BUSINESS_NAME}. Engine, electrical, AC, brakes, battery, body work & all services for ${brand.name} vehicles. ${brand.origin}-spec specialists. Free first inspection!`,
      keywords: `${brand.name} repair Sharjah, ${brand.name} mechanic Sharjah, ${brand.name} service center Sharjah, ${brand.name} garage Sharjah, ${brand.name} parts Sharjah, best ${brand.name} workshop Sharjah, ${brand.name} specialist Sharjah, ${brand.name} maintenance Sharjah`,
      openGraph: {
        title: `${brand.name} Repair & Service in Sharjah | ${SITE_NAME}`,
        description: `All ${brand.name} models serviced. Engine, AC, brakes, electrical, body work & more. ${brand.origin}-spec specialists.`,
        url: `${SITE_URL}/services/${brand.slug}`,
      },
      alternates: {
        canonical: `${SITE_URL}/services/${brand.slug}`,
      },
    };
  }

  // Service detail page
  if (service) {
    return {
      title: service.metaTitle,
      description: service.metaDesc,
      keywords: service.keywords,
      openGraph: {
        title: service.metaTitle,
        description: service.metaDesc,
        url: `${SITE_URL}/services/${service.slug}`,
      },
      alternates: {
        canonical: `${SITE_URL}/services/${service.slug}`,
      },
    };
  }

  return { title: 'Not Found' };
}

// ---- STATIC PARAMS ----
export function generateStaticParams() {
 const params: { slug: string }[] = [];

  for (const service of SERVICES) {
    params.push({ slug: service.slug });
  }
  for (const brand of CAR_BRANDS) {
    params.push({ slug: brand.slug });
  }

  return params;
}

// ---- FAQ JSON-LD ----
function buildFaqJsonLd() {
  return {
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
}

function buildServiceJsonLd(service: (typeof SERVICES)[number]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: service.h1,
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
    areaServed: {
      '@type': 'City',
      name: 'Sharjah',
    },
  };
}

// ---- PAGE COMPONENT ----
export default async function ServicePage({ params }: PageProps) {
  const { slug } = await params;

  const service = getServiceBySlug(slug);
  const brand = getBrandBySlug(slug);

  if (!service && !brand) {
    notFound();
  }

  // ======== BRAND HUB PAGE ========
  if (!service && brand) {
    const models = CAR_MODELS[brand.slug] || [];
    return (
      <div className="min-h-screen bg-background text-foreground">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(buildFaqJsonLd()) }}
        />
        <div className="container mx-auto px-4 py-16">
          <div className="max-w-4xl mx-auto">
            <Link href="/services" className="text-sm text-primary hover:underline mb-6 inline-block">
              &larr; All Services
            </Link>
            <h1 className="text-3xl sm:text-4xl font-bold mb-4">
              {brand.name} Repair &amp; Service in Sharjah
            </h1>
            <p className="text-lg text-muted-foreground mb-4">
              Expert {brand.origin}-spec {brand.name} specialists at{' '}
              {BUSINESS_NAME}, Al Sajaa, Sharjah.
            </p>
            <p className="text-muted-foreground mb-10">
              We service all {brand.name} models with certified technicians,
              genuine OEM parts, and transparent pricing. Free first inspection
              for new customers.
            </p>

            {/* Popular Models */}
            {models.length > 0 && (
              <div className="mb-10">
                <h2 className="text-xl font-bold mb-4">
                  Popular {brand.name} Models We Service
                </h2>
                <div className="flex flex-wrap gap-2">
                  {models.map((m) => {
                    const mSlug = m.toLowerCase().replace(/[^a-z0-9]+/g, '-');
                    return (
                      <Link
                        key={mSlug}
                        href={`/services/engine-repair/${brand.slug}/${mSlug}`}
                        className="px-3 py-1.5 rounded-full bg-muted/50 border border-border text-sm hover:text-primary hover:border-primary/30 transition-colors"
                      >
                        {m}
                      </Link>
                    );
                  })}
                </div>
              </div>
            )}

            {/* All Services for this Brand */}
            <h2 className="text-xl font-bold mb-4">Our {brand.name} Services</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-10">
              {SERVICES.map((s) => (
                <Link
                  key={s.slug}
                  href={`/services/${s.slug}/${brand.slug}`}
                  className="p-4 rounded-xl border border-border bg-card hover:border-primary/30 transition-all"
                >
                  <h3 className="font-bold mb-1">{s.title}</h3>
                  <p className="text-xs text-muted-foreground">{s.shortDesc}</p>
                </Link>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href="/"
                className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-primary text-primary-foreground font-medium"
              >
                Book Appointment
              </a>
              <a
                href={`tel:${PHONE_PRIMARY}`}
                className="inline-flex items-center justify-center px-6 py-3 rounded-lg border border-border font-medium"
              >
                Call: {PHONE_PRIMARY}
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // ======== SERVICE DETAIL PAGE ========
  const faqJsonLd = buildFaqJsonLd();
  const serviceJsonLd = buildServiceJsonLd(service!);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          {/* Breadcrumb */}
          <nav className="text-sm text-muted-foreground mb-6 flex items-center gap-1">
            <Link href="/" className="hover:text-primary">Home</Link>
            <span>/</span>
            <Link href="/services" className="hover:text-primary">Services</Link>
            <span>/</span>
            <span className="text-foreground">{service!.title}</span>
          </nav>

          {/* Title */}
          <h1 className="text-3xl sm:text-4xl font-bold mb-2">{service!.h1}</h1>
          <h2 className="text-lg text-muted-foreground mb-4">{service!.h2}</h2>
          <p className="text-muted-foreground mb-10 max-w-2xl">{service!.metaDesc}</p>

          {/* CTA Buttons */}
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

          {/* What's Included */}
          <div className="mb-12">
            <h3 className="text-xl font-bold mb-4">What&apos;s Included</h3>
            <ul className="space-y-2 text-muted-foreground">
              <li className="flex items-start gap-2">
                <span className="text-primary mt-1">&#10003;</span>
                <span>Comprehensive diagnostic and inspection</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary mt-1">&#10003;</span>
                <span>Expertise for all car brands &mdash; GCC, US, German &amp; Asian</span>
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
              <li className="flex items-start gap-2">
                <span className="text-primary mt-1">&#10003;</span>
                <span>Free first inspection for new customers</span>
              </li>
            </ul>
          </div>

          {/* Brands */}
          <div className="mb-12">
            <h3 className="text-xl font-bold mb-4">Available for All Brands</h3>
            <div className="flex flex-wrap gap-2">
              {CAR_BRANDS.map((b) => (
                <Link
                  key={b.slug}
                  href={`/services/${service!.slug}/${b.slug}`}
                  className="px-3 py-1.5 rounded-full bg-muted/50 border border-border text-sm hover:text-primary hover:border-primary/30 transition-colors"
                >
                  {b.name}
                </Link>
              ))}
            </div>
          </div>

          {/* FAQ Section */}
          <div className="mb-12">
            <h3 className="text-xl font-bold mb-6">Frequently Asked Questions</h3>
            <div className="space-y-4">
              {FAQ_DATA.slice(0, 5).map((faq, i) => (
                <details key={i} className="border border-border rounded-xl p-4">
                  <summary className="font-medium cursor-pointer text-sm">{faq.question}</summary>
                  <p className="text-sm text-muted-foreground mt-2">{faq.answer}</p>
                </details>
              ))}
            </div>
          </div>

          {/* Contact Info */}
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
              <div>
                <p className="font-medium mb-1">Hours</p>
                <p className="text-muted-foreground">Sat&ndash;Thu: 8 AM &ndash; 9 PM</p>
                <p className="text-muted-foreground">Friday: 2 PM &ndash; 9 PM</p>
                <p className="text-primary text-xs">Recovery: 24/7</p>
              </div>
              <div>
                <p className="font-medium mb-1">Email</p>
                <p className="text-muted-foreground">
                  <a href="mailto:sajidmustafa1985@gmail.com" className="hover:text-primary">
                    sajidmustafa1985@gmail.com
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
