import Link from 'next/link';

// =============================================================
// Custom 404 Page — Keeps visitors on-site instead of bouncing
// =============================================================

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-background text-foreground px-4">
      <div className="text-center max-w-lg">
        <div className="text-8xl font-bold text-primary mb-4">404</div>
        <h1 className="text-2xl font-bold mb-3">Page Not Found</h1>
        <p className="text-muted-foreground mb-8">
          Sorry, we couldn&apos;t find the page you&apos;re looking for. But our garage is always open!
          Head back to our homepage to explore our car repair services in Sharjah.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Link
            href="/"
            className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-primary text-primary-foreground font-medium hover:bg-primary/90 transition-colors"
          >
            Go to Homepage
          </Link>
          <Link
            href="/services"
            className="inline-flex items-center justify-center px-6 py-3 rounded-lg border border-border font-medium hover:bg-accent transition-colors"
          >
            View Our Services
          </Link>
        </div>
        <p className="text-sm text-muted-foreground mt-8">
          Need urgent help? Call us at{' '}
          <a href="tel:+971556132145" className="text-primary hover:underline">
            +971 55 613 2145
          </a>{' '}
          (24/7 Recovery:{' '}
          <a href="tel:+971529045252" className="text-primary hover:underline">
            +971 52 904 5252
          </a>)
        </p>
      </div>
    </div>
  );
}
