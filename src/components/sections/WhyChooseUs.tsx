'use client';

import { motion } from 'framer-motion';
import { Clock, Search, ShieldCheck, Car, BadgeDollarSign, Gem } from 'lucide-react';
import { useLanguageStore } from '@/store/language-store';

const reasons = [
  { key: '247', icon: Clock },
  { key: 'free', icon: Search },
  { key: 'warranty', icon: ShieldCheck },
  { key: 'brands', icon: Car },
  { key: 'transparent', icon: BadgeDollarSign },
  { key: 'genuine', icon: Gem },
];

export default function WhyChooseUs() {
  const { t } = useLanguageStore();

  return (
    <section className="py-24 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/[0.02] to-transparent" />

      <div className="container mx-auto px-4 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <p className="text-sm font-semibold tracking-[0.3em] text-primary uppercase mb-4">
            {t('why.tagline')}
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">{t('why.title')}</h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {reasons.map((reason, i) => {
            const Icon = reason.icon;
            return (
              <motion.div
                key={reason.key}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group bg-card border border-border rounded-2xl p-6 hover:border-primary/30 transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 group-hover:scale-110 transition-all">
                  <Icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-bold mb-2 group-hover:text-primary transition-colors">
                  {t(`why.${reason.key}.title`)}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {t(`why.${reason.key}.desc`)}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}