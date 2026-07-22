'use client';

import { motion } from 'framer-motion';
import { MapPin, Clock, Phone, Mail } from 'lucide-react';
import { useLanguageStore } from '@/store/language-store';

export default function Contact() {
  const { t } = useLanguageStore();

  return (
    <section id="contact" className="py-24 relative">
      <div className="section-divider mb-24" />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/[0.02] to-transparent" />

      <div className="container mx-auto px-4 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <p className="text-sm font-semibold tracking-[0.3em] text-primary uppercase mb-4">
            {t('contact.tagline')}
          </p>

          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            {t('contact.title')}
          </h2>

          <p className="text-muted-foreground text-lg">
            {t('contact.subtitle')}
          </p>
        </motion.div>

        {/* Contact Information */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-6xl mx-auto"
        >
          <h3 className="text-xl font-bold mb-6">
            {t('contact.info.title')}
          </h3>

          {/* Contact Details */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
            {/* Address */}
            <div className="flex items-start gap-3">
              <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                <MapPin className="w-5 h-5 text-primary" />
              </div>

              <div>
                <div className="font-medium text-sm">Address</div>
                <div className="text-sm text-muted-foreground">
                  {t('contact.info.address')}
                </div>
              </div>
            </div>

            {/* Phone */}
            <div className="flex items-start gap-3">
              <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                <Phone className="w-5 h-5 text-primary" />
              </div>

              <div>
                <div className="font-medium text-sm">Phone</div>

                <a
                  href="tel:+971556132145"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  +971 55 613 2145
                </a>

                <div className="text-xs text-primary mt-0.5">
                  24/7 Recovery:{' '}
                  <a
                    href="tel:+971529045252"
                    className="hover:underline"
                  >
                    +971 52 904 5252
                  </a>
                </div>
              </div>
            </div>

            {/* Email */}
            <div className="flex items-start gap-3">
              <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                <Mail className="w-5 h-5 text-primary" />
              </div>

              <div>
                <div className="font-medium text-sm">Email</div>

                <a
                  href="mailto:sajidmustafa1985@gmail.com"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  sajidmustafa1985@gmail.com
                </a>
              </div>
            </div>

            {/* Hours */}
            <div className="flex items-start gap-3">
              <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                <Clock className="w-5 h-5 text-primary" />
              </div>

              <div>
                <div className="font-medium text-sm">Hours</div>

                <div className="text-sm text-muted-foreground">
                  {t('contact.info.hours')}
                </div>

                <div className="text-sm text-muted-foreground">
                  {t('contact.info.hours.friday')}
                </div>

                <div className="text-xs text-primary font-medium">
                  {t('contact.info.hours.recovery')}
                </div>
              </div>
            </div>
          </div>

          {/* Google Reviews */}
          <div className="space-y-2.5 mb-10">
            <h4 className="text-sm font-bold flex items-center gap-1">
              <svg
                viewBox="0 0 24 24"
                className="w-4 h-4 text-primary fill-primary"
              >
                <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 01-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z" />
                <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
              </svg>

              Google Reviews
            </h4>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {[
                {
                  name: 'Rashid Al Mansoori',
                  text: 'Excellent service! They fixed my Nissan Patrol engine issue quickly and the price was very fair. Highly recommended for anyone in Sharjah.',
                  stars: 5,
                },
                {
                  name: 'Priya Sharma',
                  text: 'Best garage in Emirates Industrial City. The AC repair was done in just 2 hours and they charged a very reasonable price. Very professional team.',
                  stars: 5,
                },
                {
                  name: 'Ahmed Hassan',
                  text: 'Used their recovery service at midnight when my car broke down. They came in 20 minutes! Amazing response time and very helpful staff.',
                  stars: 5,
                },
                {
                  name: 'Michael Torres',
                  text: 'Brought my BMW for electrical issues. The diagnostic was thorough and they explained everything clearly. Great workmanship and honest pricing.',
                  stars: 4,
                },
              ].map((review, i) => (
                <div
                  key={i}
                  className="bg-card border border-border rounded-xl p-4"
                >
                  <div className="flex gap-0.5 mb-2">
                    {[...Array(review.stars)].map((_, j) => (
                      <svg
                        key={j}
                        viewBox="0 0 24 24"
                        className="w-3 h-3 fill-primary text-primary"
                      >
                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                      </svg>
                    ))}
                  </div>

                  <p className="text-xs text-muted-foreground leading-relaxed mb-2">
                    &ldquo;{review.text}&rdquo;
                  </p>

                  <div className="text-[11px] font-medium">
                    {review.name}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Google Maps */}
          <div className="rounded-2xl overflow-hidden border border-border h-64 bg-muted/50 relative">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3606.0358623064826!2d55.640047900000006!3d25.3365776!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ef5f30000b0cacd%3A0x8747865b31fb1ab7!2sAl%20Mahata%20Al%20wahedah%20Auto%20Maint!5e0!3m2!1sen!2s!4v1784699046561!5m2!1sen!2s"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="strict-origin-when-cross-origin"
              title="Al Mahata Al Wahedah Auto Maint Location"
              className="absolute inset-0"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}