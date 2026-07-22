'use client';

import { motion } from 'framer-motion';
import { Phone, Calendar, Truck, ChevronDown, ShieldCheck, BadgeDollarSign, Award } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useLanguageStore } from '@/store/language-store';

export default function Hero() {
  const { t } = useLanguageStore();

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Royal Blue Colored Hero Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#1e40af] via-[#2563eb] to-[#1d4ed8]" />

      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 -right-32 w-96 h-96 bg-white/10 rounded-full blur-3xl" />
        <div className="absolute -bottom-32 -left-32 w-96 h-96 bg-blue-300/10 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-400/[0.05] rounded-full" />
        {/* Grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.05]"
          style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,0.2) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.2) 1px, transparent 1px)`,
            backgroundSize: '60px 60px',
          }}
        />
      </div>

      {/* Content */}
      <div className="relative container mx-auto px-4 pt-28 pb-20 lg:pt-32 lg:pb-0">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="space-y-7"
          >
            {/* Trust badges row */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="flex flex-wrap gap-2.5"
            >
              {[
                { icon: BadgeDollarSign, label: 'Fair-Price' },
                { icon: Award, label: 'Certified' },
                { icon: ShieldCheck, label: '100% Guarantee' },
              ].map((badge) => (
                <span
                  key={badge.label}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/15 border border-white/20 text-white text-xs font-medium backdrop-blur-sm"
                >
                  <badge.icon className="w-3.5 h-3.5" />
                  {badge.label}
                </span>
              ))}
            </motion.div>

            {/* Tagline */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-sm font-semibold tracking-[0.3em] text-blue-100 uppercase"
            >
              {t('hero.tagline')}
            </motion.p>

            {/* Title */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-black leading-tight text-white"
            >
              {t('hero.title').split(' ').map((word, i) => (
                <span key={i}>
                  {i >= t('hero.title').split(' ').length - 2 ? (
                    <span className="hero-gradient-text">{word} </span>
                  ) : (
                    <>{word} </>
                  )}
                </span>
              ))}
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="text-lg text-blue-100/70 max-w-xl leading-relaxed"
            >
              {t('hero.subtitle')}
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="flex flex-wrap gap-4"
            >
              <Button
                size="lg"
                className="gap-2 text-base px-8 bg-white text-blue-700 hover:bg-blue-50 font-semibold shadow-lg shadow-black/10"
                onClick={() => {
                  const el = document.getElementById('booking-trigger');
                  el?.click();
                }}
              >
                <Calendar className="w-5 h-5" />
                {t('hero.cta.book')}
              </Button>
              <a
                href="tel:+971529045252"
                className="inline-flex items-center justify-center gap-2 text-base px-8 h-10 rounded-md border-2 border-white/50 text-white font-semibold hover:bg-white hover:text-blue-700 transition-all"
              >
                <Phone className="w-5 h-5" />
                {t('hero.cta.call')}
              </a>
            </motion.div>

            {/* Trust badges - car types */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="flex flex-wrap gap-3 pt-2"
            >
              {['GCC Spec', 'US Import', 'German', 'Asian'].map((brand) => (
                <span
                  key={brand}
                  className="text-xs font-medium text-blue-200/70 bg-white/10 px-3 py-1.5 rounded-full border border-white/15 backdrop-blur-sm"
                >
                  {brand}
                </span>
              ))}
            </motion.div>
          </motion.div>

          {/* Right side - Visual element */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="hidden lg:block relative"
          >
            <div className="relative">
              {/* Decorative card stack */}
              <div className="relative w-full aspect-square max-w-lg mx-auto">
                <div className="absolute inset-0 rounded-3xl bg-white/10 border border-white/15" />
                <div className="absolute inset-4 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm" />

                {/* Center content */}
                <div className="absolute inset-0 flex flex-col items-center justify-center p-8">
                  <div className="text-center space-y-4">
                    <div className="w-20 h-20 mx-auto rounded-2xl bg-white/15 border border-white/20 flex items-center justify-center">
                      <svg viewBox="0 0 24 24" className="w-10 h-10 text-blue-200" fill="none" stroke="currentColor" strokeWidth="1.5">
                        <path d="M5 17h14M5 17a2 2 0 01-2-2V9a2 2 0 012-2h1l2-3h8l2 3h1a2 2 0 012 2v6a2 2 0 01-2 2M5 17l-1 2h16l-1-2M8 12h.01M12 12h.01M16 12h.01" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                    <h3 className="text-2xl font-bold text-white">All Brands</h3>
                    <p className="text-sm text-blue-200/60">GCC · US · German · Asian</p>

                    {/* Stats grid */}
                    <div className="grid grid-cols-2 gap-3 mt-6 w-full max-w-xs">
                      {[
                        { num: '1.5K+', label: 'Cars Fixed' },
                        { num: '3+', label: 'Years' },
                        { num: '10+', label: 'Experts' },
                        { num: '99%', label: 'Happy' },
                      ].map((stat) => (
                        <div key={stat.label} className="bg-white/10 rounded-xl p-3 border border-white/15 backdrop-blur-sm">
                          <div className="text-xl font-black text-white">{stat.num}</div>
                          <div className="text-xs text-blue-200/60">{stat.label}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating element: Free Inspection */}
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ repeat: Infinity, duration: 3, ease: 'easeInOut' }}
                className="absolute top-20 -right-4 bg-white/15 border border-white/20 rounded-xl p-3 shadow-xl backdrop-blur-md"
              >
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full bg-green-400/25 flex items-center justify-center">
                    <svg viewBox="0 0 24 24" className="w-4 h-4 text-green-300" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <div>
                    <div className="text-xs font-bold text-white">Free Inspection</div>
                    <div className="text-[10px] text-blue-200/60">First visit</div>
                  </div>
                </div>
              </motion.div>

              {/* Floating element: 24/7 Recovery */}
              <motion.div
                animate={{ y: [0, 8, 0] }}
                transition={{ repeat: Infinity, duration: 3.5, ease: 'easeInOut', delay: 0.5 }}
                className="absolute bottom-16 -left-4 bg-white/15 border border-white/20 rounded-xl p-3 shadow-xl backdrop-blur-md"
              >
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full bg-white/15 flex items-center justify-center">
                    <Truck className="w-4 h-4 text-blue-200" />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-white">24/7 Recovery</div>
                    <div className="text-[10px] text-blue-200/60">Anytime, Anywhere</div>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <button
          onClick={() => scrollTo('services')}
          className="flex flex-col items-center gap-1 text-white/40 hover:text-white/70 transition-colors cursor-pointer"
        >
          <span className="text-xs">Scroll</span>
          <ChevronDown className="w-4 h-4" />
        </button>
      </motion.div>

      {/* Bottom fade to light page background */}
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-[#f8fafc] to-transparent" />
    </section>
  );
}
