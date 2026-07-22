'use client';

import { motion } from 'framer-motion';
import { Percent, Search, Snowflake, Truck, Users, Sun } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useLanguageStore } from '@/store/language-store';

const promos = [
  { key: 'first', icon: Percent, gradient: 'from-amber-400/20 to-yellow-500/10', hot: true },
  { key: 'freeInspection', icon: Search, gradient: 'from-emerald-400/15 to-green-500/10', hot: false },
  { key: 'ac', icon: Snowflake, gradient: 'from-cyan-400/15 to-sky-500/10', hot: false },
  { key: 'recovery', icon: Truck, gradient: 'from-rose-400/15 to-pink-500/10', hot: true },
  { key: 'referral', icon: Users, gradient: 'from-violet-400/15 to-purple-500/10', hot: false },
  { key: 'seasonal', icon: Sun, gradient: 'from-orange-400/20 to-amber-500/10', hot: true },
];

export default function Promotions() {
  const { t } = useLanguageStore();

  return (
    <section id="promotions" className="py-24 relative">
      <div className="section-divider mb-24" />

      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <p className="text-sm font-semibold tracking-[0.3em] text-primary uppercase mb-4">
            {t('promo.tagline')}
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">{t('promo.title')}</h2>
          <p className="text-muted-foreground text-lg">{t('promo.subtitle')}</p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {promos.map((promo, i) => {
            const Icon = promo.icon;
            return (
              <motion.div
                key={promo.key}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group relative bg-card border border-border rounded-2xl overflow-hidden hover:border-primary/30 transition-all duration-300"
              >
                {promo.hot && (
                  <div className="absolute top-4 end-4 bg-primary text-primary-foreground text-[10px] font-bold px-2.5 py-1 rounded-full uppercase tracking-wider">
                    Hot
                  </div>
                )}
                <div className={`h-1 bg-gradient-to-r ${promo.gradient}`} />
                <div className="p-6 space-y-4">
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${promo.gradient} flex items-center justify-center group-hover:scale-110 transition-transform`}>
                    <Icon className="w-6 h-6 text-foreground" />
                  </div>
                  <h3 className="text-lg font-bold group-hover:text-primary transition-colors">
                    {t(`promo.${promo.key}.title`)}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {t(`promo.${promo.key}.desc`)}
                  </p>
                  <Button
                    variant="outline"
                    size="sm"
                    className="gap-2 border-primary/30 text-primary hover:bg-primary hover:text-primary-foreground w-full"
                    onClick={() => {
                      const el = document.getElementById('booking-trigger');
                      el?.click();
                    }}
                  >
                    {t(`promo.${promo.key}.cta`)}
                  </Button>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}