'use client';

import { motion } from 'framer-motion';
import { Camera, Image as ImageIcon } from 'lucide-react';
import { useLanguageStore } from '@/store/language-store';

export default function Gallery() {
  const { t } = useLanguageStore();

  const placeholders = [
    { label: 'Engine Rebuild', aspect: 'aspect-video' },
    { label: 'Body Work', aspect: 'aspect-video' },
    { label: 'Paint Job', aspect: 'aspect-video' },
    { label: 'AC Repair', aspect: 'aspect-video' },
    { label: 'Dent Removal', aspect: 'aspect-video' },
    { label: 'Full Restoration', aspect: 'aspect-video' },
  ];

  return (
    <section id="gallery" className="py-24 relative">
      <div className="section-divider mb-24" />

      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <p className="text-sm font-semibold tracking-[0.3em] text-primary uppercase mb-4">
            {t('gallery.tagline')}
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">{t('gallery.title')}</h2>
          <p className="text-muted-foreground text-lg">{t('gallery.subtitle')}</p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {placeholders.map((item, i) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group relative bg-card border border-border rounded-2xl overflow-hidden"
            >
              <div className={`${item.aspect} bg-gradient-to-br from-muted to-secondary/30 flex flex-col items-center justify-center gap-3 p-6`}>
                <Camera className="w-10 h-10 text-muted-foreground/30 group-hover:text-primary/40 transition-colors" />
                <div className="text-center">
                  <p className="text-sm font-medium text-muted-foreground/50 group-hover:text-muted-foreground/70 transition-colors">
                    {item.label}
                  </p>
                  <p className="text-xs text-muted-foreground/30 mt-1">Photo coming soon</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center text-sm text-muted-foreground mt-8 flex items-center justify-center gap-2"
        >
          <ImageIcon className="w-4 h-4" />
          {t('gallery.coming')}
        </motion.p>
      </div>
    </section>
  );
}