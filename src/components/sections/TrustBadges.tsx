'use client';

import { motion } from 'framer-motion';
import { BadgeDollarSign, Award, ShieldCheck } from 'lucide-react';
import { useLanguageStore } from '@/store/language-store';

const badges = [
  { key: 'fair', icon: BadgeDollarSign },
  { key: 'certified', icon: Award },
  { key: 'guarantee', icon: ShieldCheck },
];

export default function TrustBadges() {
  const { t } = useLanguageStore();

  return (
    <section className="py-16 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-primary/[0.02] to-primary/5" />
      <div className="container mx-auto px-4 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-xl mx-auto mb-10"
        >
          <p className="text-sm font-semibold tracking-[0.3em] text-primary uppercase mb-3">
            {t('trust.tagline')}
          </p>
          <h2 className="text-2xl sm:text-3xl font-bold mb-2">{t('trust.title')}</h2>
          <p className="text-muted-foreground">{t('trust.subtitle')}</p>
        </motion.div>

        <div className="grid sm:grid-cols-3 gap-5 max-w-4xl mx-auto">
          {badges.map((badge, i) => {
            const Icon = badge.icon;
            return (
              <motion.div
                key={badge.key}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                className="bg-card/80 backdrop-blur-sm border border-border rounded-2xl p-6 text-center hover:border-primary/30 transition-all group"
              >
                <div className="w-14 h-14 mx-auto rounded-2xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 group-hover:scale-110 transition-all">
                  <Icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-base font-bold mb-2 group-hover:text-primary transition-colors">
                  {t(`trust.${badge.key}.title`)}
                </h3>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  {t(`trust.${badge.key}.desc`)}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}