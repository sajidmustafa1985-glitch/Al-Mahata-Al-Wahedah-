import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as SonnerToaster } from "@/components/ui/sonner";
import FaqJsonLd from '@/components/seo/FaqJsonLd';

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Al Mahata Al Wahedah | The Only Station Auto Maintenance Sharjah — Car Repair, Body Work & 24/7 Recovery",
    template: "%s | Al Mahata Al Wahedah Sharjah",
  },
  description:
    "Sharjah's trusted full-service car garage — Al Mahata Al Wahedah (المحطة الوحيدة). Expert engine repair, mechanical & electrical services, suspension, body work, denting, painting, oil change, brake pads, battery, transmission, and 24/7 towing recovery for GCC, US, German & Asian vehicles. Free first inspection. Book now!",
  keywords: [
    "car garage Sharjah",
    "auto repair Sharjah",
    "car mechanic Sharjah",
    "engine repair Sharjah",
    "car body work Sharjah",
    "denting painting Sharjah",
    "car recovery Sharjah",
    "towing service Sharjah",
    "24/7 towing Sharjah",
    "car AC repair Sharjah",
    "suspension repair Sharjah",
    "oil change Sharjah",
    "brake pads Sharjah",
    "battery replacement Sharjah",
    "transmission repair Sharjah",
    "GCC spec car repair",
    "US spec car repair Sharjah",
    "German car repair Sharjah",
    "Asian car repair Sharjah",
    "best garage in Sharjah",
    "car service center Sharjah",
    "Emirates Industrial City garage",
    "Sharjah car workshop",
    "vehicle recovery Sharjah",
    "emergency towing Sharjah",
    "free car inspection Sharjah",
    "car diagnostic Sharjah",
    "brake repair Sharjah",
    "car painting Sharjah",
    "panel beating Sharjah",
    "Al Mahata Al Wahedah",
    "المحطة الوحيدة صيانة سيارات",
  ],
  authors: [{ name: "Al Mahata Al Wahedah Auto Maintenance L.L.C" }],
  creator: "Al Mahata Al Wahedah Auto Maintenance L.L.C",
  publisher: "Al Mahata Al Wahedah Auto Maintenance L.L.C",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  openGraph: {
    type: "website",
    locale: "en_AE",
    alternateLocale: "ar_AE",
    url: "https://almahata.ae",
    siteName: "Al Mahata Al Wahedah — The Only Station Auto Maintenance",
    title: "Al Mahata Al Wahedah Sharjah | Premium Car Repair, Body Work & 24/7 Recovery",
    description:
      "Sharjah's #1 full-service car garage. Engine, mechanical, electrical, body work, oil change, brakes, battery, transmission, painting & 24/7 towing. GCC, US, German & Asian vehicle specialists. Free first inspection!",
      },
  twitter: {
    card: "summary_large_image",
    title: "Al Mahata Al Wahedah Sharjah | Premium Car Repair & 24/7 Recovery",
    description:
      "Sharjah's trusted full-service car garage. 11 services including engine repair, body work, painting & 24/7 towing recovery. All car brands. Free first inspection!",
  },
  alternates: {
    canonical: "https://almahata.ae",
    languages: {
      "en-AE": "https://almahata.ae",
      "ar-AE": "https://almahata.ae/ar",
    },
  },
  verification: {
    google: "google4b1fe4631c319ca0",
  },
};

// JSON-LD Structured Data for Local Business
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "AutoRepair",
  name: "Al Mahata Al Wahedah Auto Maintenance L.L.C",
  alternateName: "المحطة الوحيدة للصيانة",
  description:
    "Full-service car garage in Sharjah offering engine repair, mechanical & electrical services, suspension, body work, denting, painting, oil change, brakes, battery, transmission, and 24/7 towing recovery for all vehicle types.",
  url: "https://almahata.ae",
  telephone: "+971529045252",
  email: "sajidmustafa1985@gmail.com",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Sector 4, Street 19/18, Emirates Industrial City",
    addressLocality: "Sharjah",
    addressCountry: "AE",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: "25.28",
    longitude: "55.53",
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Saturday"],
      opens: "08:00",
      closes: "21:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: "Friday",
      opens: "14:00",
      closes: "21:00",
    },
  ],
  priceRange: "AED",
  image: "https://almahata.ae/og-image.jpg",
  areaServed: {
    "@type": "City",
    name: "Sharjah",
  },
  serviceType: [
    "Engine Repair",
    "Mechanical Repair",
    "Electrical System Repair",
    "Suspension & Steering Repair",
    "Body Work",
    "Denting & Painting",
    "Vehicle Recovery",
    "Towing Service",
    "AC Repair",
    "Oil Change",
    "Brake Pad Replacement",
    "Battery Replacement",
    "Transmission & Gearbox Repair",
    "Car Diagnostic",
  ],
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.9",
    reviewCount: "847",
    bestRating: "5",
  },
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Auto Repair Services",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Free Vehicle Inspection",
          description: "Complimentary diagnostic and inspection for first-time customers",
        },
        price: "0",
        priceCurrency: "AED",
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "AC Service Package",
          description: "Full AC system check, gas top-up, and performance test",
        },
        price: "149",
        priceCurrency: "AED",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta name="geo.region" content="AE-SH" />
        <meta name="geo.placename" content="Sharjah" />
        <meta name="geo.position" content="25.28;55.53" />
        <meta name="ICBM" content="25.28, 55.53" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <FaqJsonLd />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-background text-foreground`}
      >
        {children}
        <Toaster />
        <SonnerToaster />
      </body>
    </html>
  );
}