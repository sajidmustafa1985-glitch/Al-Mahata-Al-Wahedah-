'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Wrench, Cog, Zap, Car, Paintbrush, Truck, Snowflake, Droplets, CircleDot, Battery, Settings2, ArrowRight } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { useLanguageStore } from '@/store/language-store';
import ServiceDetailModal from './ServiceDetailModal';

const services = [
  { key: 'engine', icon: Wrench, color: 'from-amber-400/20 to-amber-600/5' },
  { key: 'mechanical', icon: Cog, color: 'from-yellow-400/20 to-yellow-600/5' },
  { key: 'electrical', icon: Zap, color: 'from-orange-400/20 to-orange-600/5' },
  { key: 'suspension', icon: Car, color: 'from-emerald-400/15 to-emerald-600/5' },
  { key: 'body', icon: Paintbrush, color: 'from-sky-400/15 to-sky-600/5' },
  { key: 'recovery', icon: Truck, color: 'from-rose-400/15 to-rose-600/5' },
  { key: 'ac', icon: Snowflake, color: 'from-cyan-400/15 to-cyan-600/5' },
  { key: 'oil', icon: Droplets, color: 'from-lime-400/15 to-lime-600/5' },
  { key: 'brakes', icon: CircleDot, color: 'from-red-400/15 to-red-600/5' },
  { key: 'battery', icon: Battery, color: 'from-violet-400/15 to-violet-600/5' },
  { key: 'transmission', icon: Settings2, color: 'from-teal-400/15 to-teal-600/5' },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function Services() {
  const { t } = useLanguageStore();
  const [selectedService, setSelectedService] = useState<string | null>(null);

  return (
    <section id="services" className="py-24 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-secondary/20 to-transparent" />

      <div className="container mx-auto px-4 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <p className="text-sm font-semibold tracking-[0.3em] text-primary uppercase mb-4">
            {t('services.tagline')}
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">{t('services.title')}</h2>
          <p className="text-muted-foreground text-lg">{t('services.subtitle')}</p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4"
        >
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <motion.div key={service.key} variants={cardVariants}>
                <Card
                  className="service-card group h-full bg-card hover:bg-card/80 cursor-pointer"
                  onClick={() => setSelectedService(service.key)}
                >
                  <CardContent className="p-5 h-full flex flex-col">
                    <div className={`w-11 h-11 rounded-xl bg-gradient-to-br ${service.color} flex items-center justify-center mb-3.5 group-hover:scale-110 transition-transform`}>
                      <Icon className="w-5 h-5 text-foreground" />
                    </div>
                    <h3 className="text-base font-bold mb-1.5 group-hover:text-primary transition-colors leading-snug">
                      {t(`services.${service.key}.title`)}
                    </h3>
                    <p className="text-xs text-muted-foreground leading-relaxed flex-1">
                      {t(`services.${service.key}.desc`)}
                    </p>
                    <div className="mt-3 flex items-center gap-1 text-xs font-medium text-primary opacity-0 group-hover:opacity-100 transition-opacity">
                      {t('services.viewall')}
                      <ArrowRight className="w-3.5 h-3.5" />
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="mt-16 text-center"
        >
          <p className="text-sm text-muted-foreground mb-6">All Vehicle Types Supported</p>
          <div className="flex flex-wrap justify-center gap-2.5">
            {[
              'Toyota', 'Nissan', 'Honda', 'BMW', 'Mercedes-Benz', 'Audi',
              'Porsche', 'Lexus', 'Ford', 'Chevrolet', 'Hyundai', 'Kia',
              'Volkswagen', 'Land Rover', 'Jeep', 'Mazda',
            ].map((brand) => (
              <span
                key={brand}
                className="px-3 py-1.5 rounded-full bg-muted/50 border border-border text-xs text-muted-foreground hover:text-primary hover:border-primary/30 transition-colors"
              >
                {brand}
              </span>
            ))}
          </div>
        </motion.div>
      </div>

      <ServiceDetailModal
        open={!!selectedService}
        onClose={() => setSelectedService(null)}
        serviceKey={selectedService || ''}
      />
    </section>
  );
}