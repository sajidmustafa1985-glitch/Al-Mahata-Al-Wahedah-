'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import {
  Menu,
  Phone,
  Calendar,
  Globe,
  ChevronDown
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetTitle
} from '@/components/ui/sheet';
import { useLanguageStore } from '@/store/language-store';

const navLinks = [
  { key: 'home', href: '#home' },
  { key: 'services', href: '#services' },
  { key: 'about', href: '#about' },
  { key: 'promotions', href: '#promotions' },
  { key: 'gallery', href: '#gallery' },
  { key: 'faq', href: '#faq' },
  { key: 'contact', href: '#contact' },
];

export default function Navbar() {
  const { t, lang, setLang } = useLanguageStore();
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [mobileOpen, setMobileOpen] = useState(false);
  const [hotlineOpen, setHotlineOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      const sections = navLinks.map(l => l.key);

      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);

        if (el) {
          const rect = el.getBoundingClientRect();

          if (rect.top <= 120) {
            setActiveSection(sections[i]);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleLang = () => {
    const newLang = lang === 'en' ? 'ar' : 'en';

    setLang(newLang);
    document.documentElement.dir = newLang === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.lang = newLang;
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/95 backdrop-blur-md border-b border-gray-200/80 shadow-sm'
          : 'bg-transparent border-b border-white/10'
      }`}
    >

      {/* Top bar */}
      <div
        className={`transition-colors duration-300 ${
          scrolled ? 'border-gray-200/60' : 'border-white/10'
        }`}
      >
        <div
          className={`container mx-auto px-4 flex items-center justify-end h-9 text-xs transition-colors duration-300 ${
            scrolled ? 'text-gray-500' : 'text-white/60'
          }`}
        >
          {/* Language */}
          <button
            onClick={toggleLang}
            className={`flex items-center gap-1 transition-colors cursor-pointer ${
              scrolled
                ? 'hover:text-primary'
                : 'hover:text-white/90'
            }`}
          >
            <Globe className="w-3 h-3" />
            {t('nav.lang')}
          </button>
        </div>
      </div>

      {/* Main nav */}
      <nav className="container mx-auto px-4">
        <div className="flex items-center justify-between h-14">

          {/* Logo / Company Name */}
          <a
            href="#home"
            className="flex items-center gap-2 group shrink-0"
          >
            <div
              className={`w-9 h-9 rounded-lg flex items-center justify-center group-hover:scale-105 transition-all ${
                scrolled
                  ? 'bg-primary'
                  : 'bg-white/15 backdrop-blur-sm border border-white/20'
              }`}
            >
              <span className="font-black text-base text-white">
                AM
              </span>
            </div>

            <div className="flex flex-col">

              {/* Company Name */}
              <span
                className={`font-bold text-[11px] leading-tight tracking-tight transition-colors ${
                  scrolled
                    ? 'text-foreground'
                    : 'text-white'
                }`}
              >
                AL MAHATA AL WAHEDAH
              </span>

              {/* Company Type */}
              <span
                className={`font-bold text-[10px] leading-tight tracking-wide transition-colors ${
                  scrolled
                    ? 'text-primary'
                    : 'text-blue-200'
                }`}
              >
                AUTO MAINT LLC
              </span>

              {/* Location */}
              <span
                className={`text-[8px] uppercase tracking-widest leading-tight transition-colors ${
                  scrolled
                    ? 'text-muted-foreground'
                    : 'text-white/50'
                }`}
              >
                SHARJAH
              </span>

            </div>
          </a>

          {/* Desktop nav links */}
          <div className="hidden lg:flex items-center gap-0.5">
            {navLinks.map((link) => (
              <a
                key={link.key}
                href={link.href}
                className={`px-2.5 py-1.5 rounded-md text-sm font-medium transition-colors relative ${
                  scrolled
                    ? activeSection === link.key
                      ? 'text-primary'
                      : 'text-muted-foreground hover:text-foreground'
                    : activeSection === link.key
                      ? 'text-white'
                      : 'text-white/60 hover:text-white/90'
                }`}
              >
                {t(`nav.${link.key}`)}

                {activeSection === link.key && (
                  <motion.div
                    layoutId="navbar-indicator"
                    className={`absolute bottom-0 left-1/2 -translate-x-1/2 w-4 h-0.5 rounded-full ${
                      scrolled
                        ? 'bg-primary'
                        : 'bg-white'
                    }`}
                    transition={{
                      type: 'spring',
                      bounce: 0.2,
                      duration: 0.6
                    }}
                  />
                )}
              </a>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="hidden lg:flex items-center gap-2 shrink-0">

            {/* Book Now */}
            <button
              onClick={() => {
                const el = document.getElementById(
                  'booking-trigger'
                );
                el?.click();
              }}
              className="spark-btn relative inline-flex items-center justify-center gap-1.5 px-3 h-8 rounded-md bg-black text-white hover:bg-gray-800 text-xs font-semibold transition-colors cursor-pointer"
            >
              <Calendar className="w-3.5 h-3.5" />
              Book Now
            </button>

            {/* 24/7 Hotline Dropdown */}
            <div className="relative">

              <Button
                size="sm"
                onClick={() =>
                  setHotlineOpen(!hotlineOpen)
                }
                className="gap-1.5 text-xs bg-blue-600 hover:bg-blue-700 text-white"
              >
                <Phone className="w-3.5 h-3.5" />
                24/7 Hotline
                <ChevronDown
                  className={`w-3.5 h-3.5 transition-transform ${
                    hotlineOpen
                      ? 'rotate-180'
                      : ''
                  }`}
                />
              </Button>

              {/* Dropdown */}
              {hotlineOpen && (
                <div
                  className="absolute right-0 top-full mt-2 w-56 rounded-lg bg-white border border-gray-200 shadow-xl overflow-hidden z-50"
                  onMouseLeave={() =>
                    setHotlineOpen(false)
                  }
                >

                  {/* Garage */}
                  <a
                    href="tel:0556132145"
                    className="flex items-center gap-3 px-4 py-3 hover:bg-gray-50 transition-colors group"
                  >
                    <div className="w-8 h-8 rounded-md bg-blue-50 flex items-center justify-center">
                      <Phone className="w-4 h-4 text-blue-600" />
                    </div>

                    <div className="flex flex-col">
                      <span className="text-sm font-semibold text-gray-800">
                        Garage
                      </span>

                      <span className="text-xs text-gray-500">
                        055 613 2145
                      </span>
                    </div>
                  </a>

                  {/* Recovery */}
                  <a
                    href="tel:0529045252"
                    className="flex items-center gap-3 px-4 py-3 hover:bg-gray-50 transition-colors group border-t border-gray-100"
                  >
                    <div className="w-8 h-8 rounded-md bg-blue-50 flex items-center justify-center">
                      <Phone className="w-4 h-4 text-blue-600" />
                    </div>

                    <div className="flex flex-col">
                      <span className="text-sm font-semibold text-gray-800">
                        Recovery
                      </span>

                      <span className="text-xs text-gray-500">
                        052 904 5252
                      </span>
                    </div>
                  </a>

                </div>
              )}

            </div>
          </div>

          {/* Mobile menu */}
          <Sheet
            open={mobileOpen}
            onOpenChange={setMobileOpen}
          >
            <SheetTrigger
              asChild
              className="lg:hidden"
            >
              <Button
                variant="ghost"
                size="icon"
                className={
                  scrolled
                    ? 'text-foreground'
                    : 'text-white'
                }
              >
                <Menu className="w-5 h-5" />
              </Button>
            </SheetTrigger>

            <SheetContent
              side={
                lang === 'ar'
                  ? 'right'
                  : 'left'
              }
              className="w-80 bg-white border-gray-200 p-0"
            >
              <SheetTitle className="sr-only">
                Navigation Menu
              </SheetTitle>

              <div className="flex flex-col h-full">

                {/* Mobile header */}
                <div className="p-5 border-b border-gray-100">
                  <div className="flex items-center gap-2.5">

                    <div className="w-9 h-9 rounded-lg bg-primary flex items-center justify-center">
                      <span className="text-white font-black text-base">
                        AM
                      </span>
                    </div>

                    <div>
                      <span className="font-bold text-sm text-foreground block">
                        AL MAHATA AL WAHIDA
                      </span>

                      <span className="font-bold text-[10px] text-primary block">
                        AUTO MAINT LLC
                      </span>

                      <p className="text-[10px] text-muted-foreground">
                        SHARJAH
                      </p>
                    </div>

                  </div>
                </div>

                {/* Mobile links */}
                <div className="flex-1 py-3 overflow-y-auto">

                  {navLinks.map((link) => (
                    <a
                      key={link.key}
                      href={link.href}
                      onClick={() =>
                        setMobileOpen(false)
                      }
                      className={`flex items-center px-6 py-3 text-sm font-medium transition-colors ${
                        activeSection === link.key
                          ? 'text-primary bg-primary/5'
                          : 'text-gray-600 hover:text-foreground hover:bg-gray-50'
                      }`}
                    >
                      {t(`nav.${link.key}`)}
                    </a>
                  ))}

                </div>

                {/* Mobile footer */}
                <div className="p-5 border-t border-gray-100 space-y-2.5">

                  {/* Book Now */}
                  <Button
                    className="w-full gap-2 text-sm bg-primary hover:bg-primary/90 text-white"
                    onClick={() => {
                      setMobileOpen(false);

                      const el =
                        document.getElementById(
                          'booking-trigger'
                        );

                      el?.click();
                    }}
                  >
                    <Calendar className="w-4 h-4" />
                    Book Now
                  </Button>

                  {/* Garage */}
                  <Button
                    variant="outline"
                    className="w-full gap-2 text-sm border-primary/30 text-primary"
                    asChild
                  >
                    <a href="tel:0556132145">
                      <Phone className="w-4 h-4" />
                      Garage - 055 613 2145
                    </a>
                  </Button>

                  {/* Recovery */}
                  <Button
                    variant="outline"
                    className="w-full gap-2 text-sm border-primary/30 text-primary"
                    asChild
                  >
                    <a href="tel:0529045252">
                      <Phone className="w-4 h-4" />
                      Recovery - 052 904 5252
                    </a>
                  </Button>

                  {/* Language */}
                  <button
                    onClick={toggleLang}
                    className="w-full flex items-center justify-center gap-2 py-2 text-sm text-muted-foreground hover:text-primary transition-colors cursor-pointer"
                  >
                    <Globe className="w-4 h-4" />
                    {t('nav.lang')}
                  </button>

                </div>

              </div>
            </SheetContent>
          </Sheet>

        </div>
      </nav>
    </header>
  );
}