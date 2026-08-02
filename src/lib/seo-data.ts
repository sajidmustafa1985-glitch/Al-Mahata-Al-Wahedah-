// =============================================================
// SEO Data Constants for Al Mahata Al Wahedah
// Centralized data for sitemap, metadata, and structured data
// =============================================================

export const SITE_URL = 'https://almahata.ae';
export const SITE_NAME = 'Al Mahata Al Wahedah';
export const BUSINESS_NAME = 'Al Mahata Al Wahedah Auto Maintenance L.L.C';
export const BUSINESS_NAME_AR = 'المحطة الوحيدة للصيانة';
export const PHONE_PRIMARY = '+971556132145';
export const PHONE_RECOVERY = '+971529045252';
export const EMAIL = 'sajidmustafa1985@gmail.com';
export const ADDRESS = 'Sector 4, Street 19/18, Emirates Industrial City, Al Sajaa, Sharjah, UAE';
export const LATITUDE = '25.28';
export const LONGITUDE = '55.53';

// All services offered with SEO-optimized slugs and metadata
export const SERVICES = [
  {
    slug: 'engine-repair',
    key: 'engine',
    title: 'Engine Repair',
    titleAr: 'إصلاح المحركات',
    shortDesc: 'Complete engine diagnostics, rebuilds, and performance tuning for all vehicle types.',
    metaTitle: 'Engine Repair Sharjah | Car Engine Overhaul & Diagnostics | Al Mahata Al Wahedah',
    metaDesc: 'Expert engine repair in Sharjah at Al Mahata Al Wahedah. Full engine diagnostics, rebuilds, overhauls & performance tuning for Toyota, Nissan, BMW, Mercedes & all brands. Free first inspection!',
    keywords: 'engine repair Sharjah, car engine overhaul Sharjah, engine rebuild UAE, engine diagnostic Sharjah, check engine light Sharjah, engine replacement Sharjah, cylinder head repair Sharjah, timing belt replacement Sharjah, gasket repair Sharjah, engine mounting Sharjah',
    h1: 'Professional Engine Repair in Sharjah',
    h2: 'Expert Engine Diagnostics, Rebuilds & Performance Tuning',
  },
  {
    slug: 'mechanical-repair',
    key: 'mechanical',
    title: 'Mechanical Repair',
    titleAr: 'إصلاح ميكانيكي',
    shortDesc: 'Transmission, brakes, clutch, steering, and all mechanical components.',
    metaTitle: 'Mechanical Repair Sharjah | Car Mechanic Services | Al Mahata Al Wahedah',
    metaDesc: 'Trusted mechanical repair in Sharjah. Clutch, transmission, brakes, steering & all mechanical components serviced. OEM & quality aftermarket parts. Toyota, BMW, Mercedes & all brands. Book now!',
    keywords: 'mechanical repair Sharjah, car mechanic Sharjah, clutch replacement Sharjah, steering repair Sharjah, mechanical workshop Sharjah, general mechanic Sharjah, car repair near me Sharjah, auto mechanic Al Sajaa, mechanical services UAE',
    h1: 'Expert Mechanical Repair Services in Sharjah',
    h2: 'Precision Mechanical Repairs for All Vehicle Types',
  },
  {
    slug: 'electrical-repair',
    key: 'electrical',
    title: 'Electrical Systems',
    titleAr: 'الأنظمة الكهربائية',
    shortDesc: 'Advanced electrical diagnostics, wiring repairs, ECU programming, sensor replacements.',
    metaTitle: 'Car Electrical Repair Sharjah | Auto Electrician | Al Mahata Al Wahedah',
    metaDesc: 'Professional car electrical repair in Sharjah. ECU programming, wiring diagnostics, sensor replacement, battery charging system repair. BMW, Mercedes, Toyota & all brands. Free diagnostic!',
    keywords: 'car electrical repair Sharjah, auto electrician Sharjah, ECU repair Sharjah, car wiring repair Sharjah, sensor replacement Sharjah, electrical diagnostic Sharjah, car not starting Sharjah, alternator repair Sharjah, starter motor repair Sharjah, fuse box repair Sharjah',
    h1: 'Car Electrical System Repair in Sharjah',
    h2: 'Advanced Electrical Diagnostics & Wiring Repairs',
  },
  {
    slug: 'suspension-steering-repair',
    key: 'suspension',
    title: 'Suspension & Steering',
    titleAr: 'المقاصات والتوجيه',
    shortDesc: 'Shock absorbers, coil springs, control arms, wheel alignment, and balancing.',
    metaTitle: 'Suspension Repair Sharjah | Wheel Alignment & Balancing | Al Mahata Al Wahedah',
    metaDesc: 'Expert suspension & steering repair in Sharjah. Shock absorbers, coil springs, wheel alignment, balancing & control arms. All car brands serviced. Restore your ride comfort today!',
    keywords: 'suspension repair Sharjah, wheel alignment Sharjah, shock absorber replacement Sharjah, coil spring repair Sharjah, car balancing Sharjah, steering repair Sharjah, control arm replacement Sharjah, tie rod replacement Sharjah, ball joint repair Sharjah, suspension specialist Sharjah',
    h1: 'Suspension & Steering Repair in Sharjah',
    h2: 'Restore Ride Comfort & Handling Precision',
  },
  {
    slug: 'body-work-paint',
    key: 'body',
    title: 'Body Work & Paint',
    titleAr: 'الهيكل والدهان',
    shortDesc: 'Professional denting, painting, panel beating, and full body restoration.',
    metaTitle: 'Car Body Work & Paint Sharjah | Denting Painting | Al Mahata Al Wahedah',
    metaDesc: 'Premium car body work & paint in Sharjah. Denting, painting, panel beating & full body restoration. Factory-quality finish with color-matching technology. All car brands. Get a free quote!',
    keywords: 'car body work Sharjah, car painting Sharjah, denting painting Sharjah, panel beating Sharjah, car dent repair Sharjah, scratch repair Sharjah, bumper repair Sharjah, car paint shop Sharjah, body repair Sharjah, collision repair Sharjah',
    h1: 'Car Body Work & Painting in Sharjah',
    h2: 'Factory-Quality Denting, Painting & Body Restoration',
  },
  {
    slug: 'recovery-towing',
    key: 'recovery',
    title: 'Recovery & Towing',
    titleAr: 'استعادة وسحب',
    shortDesc: '24/7 emergency towing and vehicle recovery across all UAE.',
    metaTitle: '24/7 Car Towing & Recovery Sharjah | Emergency Towing | Al Mahata Al Wahedah',
    metaDesc: '24/7 emergency car towing & recovery service in Sharjah. Fast 20-min response, flatbed carriers, safe transport for any vehicle. Call now for immediate roadside assistance across UAE!',
    keywords: 'car towing Sharjah, emergency towing Sharjah, recovery service Sharjah, 24/7 towing Sharjah, roadside assistance Sharjah, flatbed towing Sharjah, car breakdown recovery Sharjah, vehicle recovery UAE, tow truck Sharjah, emergency recovery Sharjah',
    h1: '24/7 Car Recovery & Towing Service in Sharjah',
    h2: 'Fast Emergency Towing Across All UAE',
  },
  {
    slug: 'ac-repair',
    key: 'ac',
    title: 'AC & Cooling',
    titleAr: 'التكييف والتبريد',
    shortDesc: 'Full AC system check, gas top-up, and performance test.',
    metaTitle: 'Car AC Repair Sharjah | Auto Air Conditioning Service | Al Mahata Al Wahedah',
    metaDesc: 'Expert car AC repair in Sharjah. Gas refill, compressor repair, condenser cleaning & full AC service. Starting from AED 149. All car brands. Beat the Sharjah heat — book now!',
    keywords: 'car AC repair Sharjah, car air conditioning Sharjah, AC gas refill Sharjah, AC compressor repair Sharjah, car cooling system Sharjah, AC service Sharjah, car AC not cooling Sharjah, AC regas Sharjah, auto AC repair Al Sajaa, car AC specialist Sharjah',
    h1: 'Car AC Repair & Cooling Service in Sharjah',
    h2: 'Stay Cool — Expert AC Diagnostics & Repair',
  },
  {
    slug: 'oil-change',
    key: 'oil',
    title: 'Oil Change',
    titleAr: 'تغيير الزيت',
    shortDesc: 'Semi-synthetic and fully synthetic oil changes per manufacturer specs.',
    metaTitle: 'Car Oil Change Sharjah | Engine Oil Service | Al Mahata Al Wahedah',
    metaDesc: 'Quick & reliable car oil change in Sharjah. Semi-synthetic & fully synthetic oil, filter change & fluid top-ups. All brands — Toyota, BMW, Mercedes & more. Walk-in or book today!',
    keywords: 'oil change Sharjah, car oil change Sharjah, engine oil Sharjah, synthetic oil change Sharjah, oil filter replacement Sharjah, car service Sharjah, quick oil change Sharjah, engine oil service Al Sajaa, oil change near me Sharjah',
    h1: 'Car Oil Change Service in Sharjah',
    h2: 'Premium Engine Oil & Filter Changes',
  },
  {
    slug: 'brake-repair',
    key: 'brakes',
    title: 'Brake Service',
    titleAr: 'أقراص الفرامل',
    shortDesc: 'Brake pad replacement, disc machining, brake fluid change, full brake system inspection.',
    metaTitle: 'Brake Repair Sharjah | Brake Pad Replacement | Al Mahata Al Wahedah',
    metaDesc: 'Expert brake repair in Sharjah. Brake pad replacement, disc machining, brake fluid change & full brake inspection. Safe stopping for all car brands. Book your brake service today!',
    keywords: 'brake repair Sharjah, brake pad replacement Sharjah, brake disc repair Sharjah, brake fluid change Sharjah, brake service Sharjah, brake shoes Sharjah, ABS repair Sharjah, brake caliper repair Sharjah, car brakes Sharjah, brake specialist Sharjah',
    h1: 'Brake Repair & Service in Sharjah',
    h2: 'Complete Brake System Inspection & Repair',
  },
  {
    slug: 'battery-replacement',
    key: 'battery',
    title: 'Battery Replacement',
    titleAr: 'استبدال البطارية',
    shortDesc: 'Battery testing, replacement, and charging system diagnostics for all brands.',
    metaTitle: 'Car Battery Replacement Sharjah | Battery Service | Al Mahata Al Wahedah',
    metaDesc: 'Fast car battery replacement in Sharjah. Free battery testing, charging system diagnostics & replacement batteries for all brands — Toyota, BMW, Mercedes, Nissan & more. Warranty included!',
    keywords: 'car battery replacement Sharjah, battery replacement Sharjah, car battery Sharjah, battery testing Sharjah, dead battery Sharjah, jump start Sharjah, battery installation Sharjah, car won\'t start Sharjah, battery service Al Sajaa, auto battery Sharjah',
    h1: 'Car Battery Replacement & Testing in Sharjah',
    h2: 'Reliable Battery Service for Every Vehicle',
  },
  {
    slug: 'transmission-gearbox-repair',
    key: 'transmission',
    title: 'Transmission & Gearbox',
    titleAr: 'نقل الحركة والصندوق',
    shortDesc: 'Full transmission diagnostics, oil change, rebuild, and replacement.',
    metaTitle: 'Transmission Repair Sharjah | Gearbox Service | Al Mahata Al Wahedah',
    metaDesc: 'Expert transmission & gearbox repair in Sharjah. Automatic & manual transmission diagnostics, rebuild, oil change & replacement. All car brands. Free diagnostic available!',
    keywords: 'transmission repair Sharjah, gearbox repair Sharjah, automatic transmission Sharjah, manual transmission repair Sharjah, gearbox oil change Sharjah, transmission rebuild Sharjah, gear slipping Sharjah, clutch gearbox Sharjah, transmission service Al Sajaa, car gearbox specialist Sharjah',
    h1: 'Transmission & Gearbox Repair in Sharjah',
    h2: 'Expert Automatic & Manual Transmission Service',
  },
] as const;

// All car brands/makes serviced
export const CAR_BRANDS = [
  { name: 'Toyota', slug: 'toyota', origin: 'Japanese' },
  { name: 'Nissan', slug: 'nissan', origin: 'Japanese' },
  { name: 'Honda', slug: 'honda', origin: 'Japanese' },
  { name: 'BMW', slug: 'bmw', origin: 'German' },
  { name: 'Mercedes-Benz', slug: 'mercedes-benz', origin: 'German' },
  { name: 'Audi', slug: 'audi', origin: 'German' },
  { name: 'Porsche', slug: 'porsche', origin: 'German' },
  { name: 'Lexus', slug: 'lexus', origin: 'Japanese' },
  { name: 'Ford', slug: 'ford', origin: 'American' },
  { name: 'Chevrolet', slug: 'chevrolet', origin: 'American' },
  { name: 'Hyundai', slug: 'hyundai', origin: 'Korean' },
  { name: 'Kia', slug: 'kia', origin: 'Korean' },
  { name: 'Volkswagen', slug: 'volkswagen', origin: 'German' },
  { name: 'Land Rover', slug: 'land-rover', origin: 'British' },
  { name: 'Jeep', slug: 'jeep', origin: 'American' },
  { name: 'Mazda', slug: 'mazda', origin: 'Japanese' },
] as const;

// Popular car models for each brand (for SEO content)
export const CAR_MODELS: Record<string, string[]> = {
  'toyota': ['Land Cruiser', 'Camry', 'Corolla', 'Hilux', 'Prado', 'Fortuner', 'RAV4', 'Yaris', 'Avalon', 'FJ Cruiser'],
  'nissan': ['Patrol', 'Altima', 'Sunny', 'X-Trail', 'Pathfinder', 'Kicks', 'Sentra', 'Maxima', 'GT-R', 'Navara'],
  'honda': ['Civic', 'Accord', 'CR-V', 'Pilot', 'City', 'HR-V', 'Odyssey', 'Prelude'],
  'bmw': ['3 Series', '5 Series', '7 Series', 'X3', 'X5', 'X6', 'X7', 'M3', 'M4', 'M5', 'iX', 'i4'],
  'mercedes-benz': ['C-Class', 'E-Class', 'S-Class', 'GLC', 'GLE', 'GLS', 'A-Class', 'CLA', 'AMG GT', 'G-Class'],
  'audi': ['A4', 'A6', 'A8', 'Q5', 'Q7', 'Q8', 'A3', 'RS6', 'e-tron', 'TT'],
  'porsche': ['Cayenne', 'Macan', '911', 'Panamera', 'Taycan', 'Boxster', 'Cayman'],
  'lexus': ['RX 350', 'ES 350', 'LS 500', 'GX 460', 'NX 300', 'IS 300', 'LX 570', 'UX 250'],
  'ford': ['Explorer', 'Mustang', 'F-150', 'Expedition', 'Escape', 'Edge', 'Ranger', 'Bronco'],
  'chevrolet': ['Tahoe', 'Silverado', 'Camaro', 'Equinox', 'Traverse', 'Suburban', 'Malibu', 'Blazer'],
  'hyundai': ['Tucson', 'Santa Fe', 'Elantra', 'Sonata', 'Accent', 'Palisade', 'Kona', 'Veloster'],
  'kia': ['Sportage', 'Sorento', 'Optima', 'Cerato', 'Telluride', 'Seltos', 'Carnival', 'EV6'],
  'volkswagen': ['Golf', 'Tiguan', 'Passat', 'Jetta', 'Touareg', 'Atlas', 'ID.4', 'Polo'],
  'land-rover': ['Range Rover', 'Range Rover Sport', 'Defender', 'Discovery', 'Evoque', 'Velar'],
  'jeep': ['Wrangler', 'Grand Cherokee', 'Compass', 'Cherokee', 'Renegade', 'Gladiator'],
  'mazda': ['Mazda 3', 'Mazda 6', 'CX-5', 'CX-9', 'CX-30', 'MX-5', 'BT-50'],
};

// Additional areas served (for local SEO)
export const AREAS_SERVED = [
  'Al Sajaa',
  'Emirates Industrial City',
  'Al Dhaid',
  'Muwaileh',
  'Al Qasba',
  'Al Majaz',
  'Al Nahda Sharjah',
  'Sharjah Industrial Area',
  'Al Khan',
  'University City Sharjah',
  'Al Yarmouk',
  'Al Rolla',
  'Bu Tina',
  'Maysaloon',
  'Al Taawun',
] as const;

// FAQ data for JSON-LD structured data
export const FAQ_DATA = [
  {
    question: 'What car brands do you service?',
    answer: 'We service all car brands including Toyota, Nissan, Honda, BMW, Mercedes-Benz, Audi, Porsche, Lexus, Ford, Chevrolet, Hyundai, Kia, and many more. We specialize in GCC-spec, US-import, German, and Asian vehicles.',
  },
  {
    question: 'Do you offer a warranty on repairs?',
    answer: 'Yes! All our repairs come with a service warranty. The warranty period depends on the type of repair and parts used. We stand behind our work and will fix any issues at no extra cost within the warranty period.',
  },
  {
    question: 'How quickly can you respond for recovery/towing?',
    answer: 'Our average response time is 20-30 minutes anywhere in Sharjah. We operate 24/7, 365 days a year, with a fleet of flatbed carriers and experienced drivers to safely transport your vehicle.',
  },
  {
    question: 'Do you provide free vehicle inspection?',
    answer: 'Yes, we offer a complimentary diagnostic and inspection for first-time customers. This includes a comprehensive check of engine, brakes, suspension, electrical systems, and fluid levels — completely free of charge.',
  },
  {
    question: 'Can I get a quote before any work begins?',
    answer: 'Absolutely. We provide detailed written quotes before starting any work. There are no hidden fees or surprise charges. You approve the quote, and we proceed only with your go-ahead.',
  },
  {
    question: 'What are your payment methods?',
    answer: 'We accept cash, all major credit/debit cards, bank transfer, and Apple Pay. For larger repair jobs, we also offer flexible payment plans. Insurance claims for accident repairs are also handled.',
  },
  {
    question: 'Do you use genuine parts?',
    answer: 'We use genuine OEM parts wherever possible. When OEM parts are not available, we use trusted aftermarket brands that meet or exceed original specifications. We always discuss part options and pricing with you beforehand.',
  },
  {
    question: 'How do I book an appointment?',
    answer: 'You can book an appointment through our website, call us directly, send a WhatsApp message, or simply walk in during business hours. For emergency recovery, call our 24/7 hotline anytime.',
  },
];

// Generate all service+brand URL combinations for sitemap
export function generateServiceBrandUrls(): string[] {
  const urls: string[] = [];
  for (const service of SERVICES) {
    urls.push(`/services/${service.slug}`);
    for (const brand of CAR_BRANDS) {
      urls.push(`/services/${service.slug}/${brand.slug}`);
      // Also add car model pages if models exist
      const models = CAR_MODELS[brand.slug];
      if (models) {
        for (const model of models) {
          const modelSlug = model.toLowerCase().replace(/[^a-z0-9]+/g, '-');
          urls.push(`/services/${service.slug}/${brand.slug}/${modelSlug}`);
        }
      }
    }
  }
  return urls;
}

// Helper to look up a service by slug
export function getServiceBySlug(slug: string) {
  return SERVICES.find((s) => s.slug === slug);
}

// Helper to look up a brand by slug
export function getBrandBySlug(slug: string) {
  return CAR_BRANDS.find((b) => b.slug === slug);
}
