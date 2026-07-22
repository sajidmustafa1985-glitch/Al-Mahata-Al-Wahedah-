'use client';

import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';
import { useLanguageStore } from '@/store/language-store';

const footerServices = [
  'Engine Repair', 'Mechanical Repair', 'Electrical Systems',
  'Suspension & Steering', 'Body Work & Paint', 'Recovery & Towing',
  'AC & Cooling', 'Oil Change', 'Brake Pads & Rotors',
  'Battery Replacement', 'Transmission & Gearbox',
];

export default function Footer() {
  const { t } = useLanguageStore();

  return (
    <footer className="relative border-t border-border">
      <div className="container mx-auto px-4 py-14">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <a href="#home" className="flex items-center gap-2 mb-4">
              <div className="w-9 h-9 rounded-lg bg-primary flex items-center justify-center">
                <span className="text-primary-foreground font-black text-base">AM</span>
              </div>
              <div>
                <span className="font-bold text-sm">
                  {t('brand.short')} <span className="text-primary">Al Wahedah</span>
                </span>
                <p className="text-[9px] text-muted-foreground uppercase tracking-widest">{t('brand.location')}</p>
              </div>
            </a>
            <p className="text-sm text-muted-foreground leading-relaxed max-w-xs">
              {t('footer.desc')}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-sm mb-4">{t('footer.quicklinks')}</h4>
            <ul className="space-y-2.5">
              {['home', 'services', 'about', 'promotions', 'gallery', 'faq', 'contact'].map((link) => (
                <li key={link}>
                  <a
                    href={`#${link}`}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {t(`nav.${link}`)}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-bold text-sm mb-4">{t('footer.services')}</h4>
            <ul className="space-y-2">
              {footerServices.map((service) => (
                <li key={service}>
                  <a
                    href="#services"
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold text-sm mb-4">{t('footer.contact')}</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                <span className="text-sm text-muted-foreground">{t('contact.info.address')}</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-primary flex-shrink-0" />
                <a href="tel:+971529045252" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  +971 52 904 5252
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-primary flex-shrink-0" />
                <a href="tel:+971556132145" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  +971 55 613 2145
                </a>
                <span className="text-[10px] text-primary">(Recovery)</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-primary flex-shrink-0" />
                <a href="mailto:sajidmustafa1985@gmail.com" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  sajidmustafa1985@gmail.com
                </a>
              </li>
              <li className="flex items-start gap-2">
                <Clock className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                <div className="text-sm text-muted-foreground">
                  <div>{t('contact.info.hours')}</div>
                  <div>{t('contact.info.hours.friday')}</div>
                  <div className="text-xs text-primary font-medium">{t('contact.info.hours.recovery')}</div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-border">
        <div className="container mx-auto px-4 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-muted-foreground">
            &copy; {new Date().getFullYear()} {t('brand.full')} Auto Maintenance, {t('brand.location')}. {t('footer.rights')}
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-xs text-muted-foreground hover:text-primary transition-colors">
              {t('footer.privacy')}
            </a>
            <a href="#" className="text-xs text-muted-foreground hover:text-primary transition-colors">
              {t('footer.terms')}
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}