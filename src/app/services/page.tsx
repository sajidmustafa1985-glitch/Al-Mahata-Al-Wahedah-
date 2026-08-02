import type { Metadata } from 'next';
import Link from 'next/link';
import { SERVICES, CAR_BRANDS, SITE_NAME, SITE_URL } from '@/lib/seo-data';

// =============================================================
// Services Listing Page — /services
// Lists all 11 services with links to detail pages
// =============================================================

export const metadata: Metadata = {
  title: 'All Car Repair Services in Sharjah | ' + SITE_NAME,
  description:
    'Complete auto repair services in Sharjah at Al Mahata Al Wahedah. Engine repair, mechanical & electrical, suspension, body work, AC, oil change, brakes, battery, transmission & 24/7 towing recovery. All car brands serviced.',
  keywords:
    'car repair services Sharjah, auto repair Sharjah, car garage Sharjah, car service center Sharjah, mechanic Sharjah, full service car repair UAE, Sharjah workshop, Al Sajaa garage',
  openGraph: {
    title: 'All Car Repair Services | ' + SITE_NAME + ' Sharjah',
    description:
      '11 expert auto repair services in Sharjah. Engine, electrical, body work, AC, brakes, battery & 24/7 recovery. All car brands.',
    url: `${SITE_URL}/services`,
  },
  alternates: {
    canonical: `${SITE_URL}/services`,
  },
};

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="container mx-auto px-4 py-16">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-sm font-semibold tracking-[0.3em] text-primary uppercase mb-4">
            OUR SERVICES
          </p>
          <h1 className="text-3xl sm:text-4xl font-bold mb-4">
            Complete Auto Care Solutions in Sharjah
          </h1>
          <p className="text-muted-foreground text-lg">
            From routine maintenance to complex repairs, our certified technicians handle
            every aspect of your vehicle with expertise and care. Click on any service to
            learn more and book an appointment.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto mb-20">
          {SERVICES.map((service) => (
            <Link
              key={service.slug}
              href={`/services/${service.slug}`}
              className="group block p-6 rounded-xl border border-border bg-card hover:border-primary/30 hover:shadow-lg transition-all"
            >
              <h2 className="text-lg font-bold mb-2 group-hover:text-primary transition-colors">
                {service.title}
              </h2>
              <p className="text-sm text-muted-foreground mb-3">{service.shortDesc}</p>
              <span className="text-sm text-primary font-medium">
                Learn More →
              </span>
            </Link>
          ))}
        </div>

        {/* Brands We Service */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-2xl font-bold mb-4">Car Brands We Service</h2>
          <p className="text-muted-foreground mb-8">
            We specialize in GCC-spec, US-import, German, and Asian vehicles.
            Every make and model is welcome.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {CAR_BRANDS.map((brand) => (
              <Link
                key={brand.slug}
                href={`/services/${brand.slug}`}
                className="px-4 py-2 rounded-full bg-muted/50 border border-border text-sm hover:text-primary hover:border-primary/30 transition-colors"
              >
                {brand.name}
              </Link>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <h2 className="text-xl font-bold mb-3">Need a Service Not Listed?</h2>
          <p className="text-muted-foreground mb-6">
            Contact us — we handle all types of auto repairs. Free first inspection for new customers!
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href="/"
              className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-primary text-primary-foreground font-medium hover:bg-primary/90 transition-colors"
            >
              Book Appointment
            </a>
            <a
              href="tel:+971556132145"
              className="inline-flex items-center justify-center px-6 py-3 rounded-lg border border-border font-medium hover:bg-accent transition-colors"
            >
              Call: +971 55 613 2145
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
