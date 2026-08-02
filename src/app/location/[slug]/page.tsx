import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import {
  SERVICES,
  SITE_NAME,
  SITE_URL,
  BUSINESS_NAME,
  PHONE_PRIMARY,
  ADDRESS,
  AREAS_SERVED,
} from '@/lib/seo-data';

// =============================================================
// LOCATION PAGE — /location/al-sajaa
// For local SEO: targets searches like "car repair near Al Sajaa"
// =============================================================

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const area = AREAS_SERVED.find(
    (a) => a.toLowerCase().replace(/[^a-z0-9]+/g, '-') === slug
  );

  if (!area) return { title: 'Not Found' };

  return {
    title: `Car Garage Near ${area}, Sharjah | ${SITE_NAME}`,
    description: `Looking for a car garage near ${area}, Sharjah? ${BUSINESS_NAME} offers engine repair, AC, brakes, battery, body work & 24/7 towing recovery. Free first inspection!`,
    keywords: `car garage near ${area}, car repair ${area} Sharjah, mechanic near ${area}, auto repair ${area} Sharjah, car service ${area}, towing ${area} Sharjah, best garage near ${area}`,
    openGraph: {
      title: `Car Garage Near ${area} | ${SITE_NAME}`,
      description: `Full-service car garage serving ${area}, Sharjah. 11 services, all brands, 24/7 recovery.`,
      url: `${SITE_URL}/location/${slug}`,
    },
    alternates: {
      canonical: `${SITE_URL}/location/${slug}`,
    },
  };
}

export function generateStaticParams() {
  return AREAS_SERVED.map((area) => ({
    slug: area.toLowerCase().replace(/[^a-z0-9]+/g, '-'),
  }));
}

export default async function LocationPage({ params }: PageProps) {
  const { slug } = await params;
  const area = AREAS_SERVED.find(
    (a) => a.toLowerCase().replace(/[^a-z0-9]+/g, '-') === slug
  );

  if (!area) notFound();

  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <nav className="text-sm text-muted-foreground mb-6 flex items-center gap-1">
            <Link href="/" className="hover:text-primary">Home</Link>
            <span>/</span>
            <span className="text-foreground">Near {area}</span>
          </nav>

          <h1 className="text-3xl sm:text-4xl font-bold mb-4">
            Car Garage Near {area}, Sharjah
          </h1>
          <p className="text-lg text-muted-foreground mb-10 max-w-2xl">
            {BUSINESS_NAME} is your trusted full-service car garage serving {area},
            Sharjah. Located in Al Sajaa, Emirates Industrial City &mdash; we are just a
            short drive from {area}. All car brands, 11 services, and 24/7 recovery.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 mb-12">
            <a
              href="/"
              className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-primary text-primary-foreground font-medium hover:bg-primary/90 transition-colors"
            >
              Book Appointment
            </a>
            <a
              href={`tel:${PHONE_PRIMARY}`}
              className="inline-flex items-center justify-center px-6 py-3 rounded-lg border border-border font-medium hover:bg-accent transition-colors"
            >
              Call: {PHONE_PRIMARY}
            </a>
          </div>

          <div className="mb-12">
            <h2 className="text-xl font-bold mb-4">Our Services Near {area}</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {SERVICES.map((s) => (
                <Link
                  key={s.slug}
                  href={`/services/${s.slug}`}
                  className="p-4 rounded-xl border border-border bg-card hover:border-primary/30 transition-all"
                >
                  <h3 className="font-bold mb-1">{s.title}</h3>
                  <p className="text-xs text-muted-foreground">{s.shortDesc}</p>
                </Link>
              ))}
            </div>
          </div>

          <div className="border-t border-border pt-8">
            <h2 className="text-xl font-bold mb-4">How to Find Us from {area}</h2>
            <p className="text-muted-foreground mb-4">{ADDRESS}</p>
            <p className="text-sm text-muted-foreground">
              We are located in Al Sajaa, Emirates Industrial City, easily accessible
              from {area} and surrounding areas in Sharjah. Call us for directions or
              use navigation to reach our workshop.
            </p>
          </div>

          {/* Other Areas */}
          <div className="mt-12">
            <h2 className="text-xl font-bold mb-4">Other Areas We Serve</h2>
            <div className="flex flex-wrap gap-2">
              {AREAS_SERVED.filter((a) => a !== area).map((a) => (
                <Link
                  key={a}
                  href={`/location/${a.toLowerCase().replace(/[^a-z0-9]+/g, '-')}`}
                  className="px-3 py-1.5 rounded-full bg-muted/50 border border-border text-sm hover:text-primary hover:border-primary/30 transition-colors"
                >
                  {a}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
