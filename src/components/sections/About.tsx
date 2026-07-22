'use client';

import { motion } from 'framer-motion';
import { Shield, Award, Users, ThumbsUp } from 'lucide-react';
import { useLanguageStore } from '@/store/language-store';

const stats = [
  { key: 'stat1', icon: Shield },
  { key: 'stat2', icon: Award },
  { key: 'stat3', icon: Users },
  { key: 'stat4', icon: ThumbsUp },
];

export default function About() {
  const { t } = useLanguageStore();

  return (
    <section id="about" className="py-24 relative">
      <div className="section-divider mb-24" />

      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left - Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <p className="text-sm font-semibold tracking-[0.3em] text-primary uppercase">
              {t('about.tagline')}
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold">{t('about.title')}</h2>
            <p className="text-muted-foreground text-lg leading-relaxed">
              {t('about.desc')}
            </p>

            {/* Features list */}
            <div className="grid sm:grid-cols-2 gap-4 pt-4">
              {[
                'Certified Technicians',
                'Genuine OEM Parts',
                'State-of-the-Art Equipment',
                'Transparent Pricing',
              ].map((feature) => (
                <div key={feature} className="flex items-center gap-2">
                  <div className="w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                    <svg viewBox="0 0 24 24" className="w-3 h-3 text-primary" fill="none" stroke="currentColor" strokeWidth="3">
                      <path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <span className="text-sm">{feature}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right - Stats + Visual */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat, i) => {
                const Icon = stat.icon;
                return (
                  <motion.div
                    key={stat.key}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="bg-card border border-border rounded-2xl p-6 text-center hover:border-primary/30 transition-colors group"
                  >
                    <div className="w-12 h-12 mx-auto rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                      <Icon className="w-6 h-6 text-primary" />
                    </div>
                    <div className="text-3xl font-black text-primary mb-1">
                      {t(`about.${stat.key}.num`)}
                    </div>
                    <div className="text-sm text-muted-foreground">
                      {t(`about.${stat.key}.label`)}
                    </div>
                  </motion.div>
                );
              })}
            </div>

            {/* Trust badge */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              className="mt-6 bg-gradient-to-r from-primary/10 to-transparent border border-primary/20 rounded-2xl p-6"
            >
              <div className="flex items-center gap-4">
                <div className="text-4xl font-black text-primary">4.9</div>
                <div>
                  <div className="flex gap-0.5">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} viewBox="0 0 24 24" className="w-4 h-4 fill-primary text-primary">
                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                      </svg>
                    ))}
                  </div>
                  <p className="text-sm text-muted-foreground mt-1">Based on 847+ reviews on Google</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}