'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { useLanguageStore } from '@/store/language-store';
import { XIcon, AlertTriangle } from 'lucide-react';

interface ServiceDetailModalProps {
  open: boolean;
  onClose: () => void;
  serviceKey: string;
}

const serviceData: Record<
  string,
  {
    image: string;
    imageAlt: string;
    features: string[];
    process: string[];
    signs?: string[];
  }
> = {
  engine: {
    image: 'https://sfile.chatglm.cn/images-ppt/39726ccaaa83.jpg',
    imageAlt: 'Professional engine repair',
    features: [
      'Complete engine diagnostics',
      'Engine rebuild & overhaul',
      'Cylinder head repair',
      'Timing belt/chain replacement',
      'Gasket replacement',
      'Performance tuning',
      'Oil leak repair',
      'Engine mount replacement',
    ],
    process: [
      'Comprehensive diagnostic scan',
      'Detailed inspection and assessment',
      'Transparent cost estimate',
      'Expert repair with quality parts',
      'Post-repair testing and quality check',
    ],
    signs: [
      'Check Engine light stays on',
      'Unusual knocking or ticking sounds',
      'Excessive exhaust smoke (blue, white, or black)',
      'Loss of power or poor acceleration',
      'Engine overheating frequently',
      'Oil consumption increasing rapidly',
    ],
  },
  mechanical: {
    image: 'https://sfile.chatglm.cn/images-ppt/dc89095517c0.png',
    imageAlt: 'Professional mechanical repair',
    features: [
      'Brake pad and rotor replacement',
      'Clutch repair and replacement',
      'Steering system repair',
      'Wheel bearing replacement',
      'Exhaust system repair',
      'CV joint/axle repair',
      'Radiator and cooling system',
      'Belt and hose replacement',
    ],
    process: [
      'Visual and physical inspection',
      'Computerized diagnostic check',
      'Itemized repair estimate',
      'Repair using genuine/quality parts',
      'Road test and final inspection',
    ],
    signs: [
      'Grinding or squeaking noises when braking',
      'Clutch feels spongy or slips',
      'Steering wheel vibrates at speed',
      'Burning smell from engine bay',
      'Fluid leaks under the car',
    ],
  },
  electrical: {
    image: 'https://sfile.chatglm.cn/images-ppt/5011bc0892cf.png',
    imageAlt: 'Professional electrical diagnostic',
    features: [
      'Complete electrical diagnostics',
      'ECU programming and coding',
      'Wiring harness repair',
      'Sensor replacement',
      'Battery testing and replacement',
      'Alternator repair',
      'Starter motor repair',
      'Lighting and fuse issues',
    ],
    process: [
      'Advanced diagnostic equipment scan',
      'Circuit testing and analysis',
      'Fault identification and quote',
      'Precise repair or component replacement',
      'System verification and re-test',
    ],
    signs: [
      'Dashboard warning lights flickering',
      'Power windows or locks not working',
      'Car struggles to start or clicks but no crank',
      'Lights dimming at idle',
      'Blown fuses repeatedly',
    ],
  },
  suspension: {
    image: 'https://sfile.chatglm.cn/images-ppt/37622bcebe2e.jpg',
    imageAlt: 'Car suspension and steering system repair',
    features: [
      'Shock absorber replacement',
      'Coil spring replacement',
      'Control arm repair',
      'Wheel alignment and balancing',
      'Ball joint replacement',
      'Tie rod replacement',
      'Strut assembly replacement',
      'Ride height adjustment',
    ],
    process: [
      'Road test to identify issues',
      'Suspension component inspection',
      'Detailed quote with parts list',
      'Professional installation',
      'Alignment check and calibration',
    ],
    signs: [
      'Car pulls to one side while driving',
      'Bumpy or rough ride over small bumps',
      'Nose dives when braking',
      'Uneven tire wear patterns',
      'Steering feels loose or wanders',
      'Clunking noises over bumps',
    ],
  },
  body: {
    image: 'https://sfile.chatglm.cn/images-ppt/bf272c4845b8.jpg',
    imageAlt: 'Professional body work and painting',
    features: [
      'Dent removal and repair',
      'Panel beating and reshaping',
      'Full body painting',
      'Color matching technology',
      'Bumper repair and replacement',
      'Frame straightening',
      'Rust treatment and prevention',
      'Ceramic coating protection',
    ],
    process: [
      'Damage assessment and documentation',
      'Insurance coordination if needed',
      'Repair plan and cost estimate',
      'Expert bodywork and painting',
      'Quality inspection and polish',
    ],
    signs: [
      'Visible dents or scratches',
      'Rust spots appearing on body',
      'Paint peeling or fading',
      'Misaligned panels after impact',
      'Door or hood not closing properly',
    ],
  },
  recovery: {
    image: 'https://sfile.chatglm.cn/images-ppt/c79a5cf0749a.jpg',
    imageAlt: 'Professional recovery and towing',
    features: [
      '24/7 emergency towing',
      'Flatbed carrier service',
      'Accident recovery',
      'Breakdown assistance',
      'Battery jump-start',
      'Flat tire change',
      'Fuel delivery',
      'Lockout assistance',
    ],
    process: [
      'Emergency call received',
      'Dispatch nearest recovery vehicle',
      'On-site assessment',
      'Safe loading and transport',
      'Delivery to our workshop or your location',
    ],
    signs: [
      'Your vehicle won\'t start',
      'Engine overheating on the road',
      'Flat tire with no spare',
      'After an accident or collision',
      'Vehicle stuck in sand (desert recovery)',
    ],
  },
  ac: {
    image: 'https://sfile.chatglm.cn/images-ppt/945dae5d3709.jpg',
    imageAlt: 'Professional AC repair',
    features: [
      'AC gas refill and recharge',
      'Compressor repair',
      'Condenser cleaning',
      'Evaporator service',
      'Climate control diagnostics',
      'Leak detection and repair',
      'Cabin filter replacement',
      'AC odor treatment',
    ],
    process: [
      'AC performance test',
      'System pressure check',
      'Leak detection scan',
      'Repair or recharge as needed',
      'Temperature verification and handover',
    ],
    signs: [
      'AC not blowing cold air',
      'Weak airflow from vents',
      'Unusual musty smell from AC',
      'AC makes rattling or clicking noises',
      'Water leaking inside the car (clogged drain)',
    ],
  },
  oil: {
    image: 'https://sfile.chatglm.cn/images-ppt/512fdcb01c38.jpeg',
    imageAlt: 'Professional oil change service',
    features: [
      'Semi-synthetic oil change',
      'Fully synthetic oil change',
      'Oil filter replacement',
      'Fluid level top-up (coolant, brake, washer)',
      'Multi-point vehicle check',
      'Oil leak inspection',
      'Engine flush service',
      'Manufacturer-recommended oil grades',
    ],
    process: [
      'Vehicle lifted and oil drained completely',
      'Oil filter removed and replaced',
      'New oil filled to exact specification',
      'All fluid levels checked and topped up',
      'Reset service indicator and handover',
    ],
    signs: [
      'Engine oil is dark or gritty',
      'Oil change light is on',
      'Engine sounds louder than usual',
      'Reduced fuel efficiency',
      'Exceeded recommended mileage interval',
    ],
  },
  brakes: {
    image: 'https://sfile.chatglm.cn/images-ppt/335bc60234de.jpg',
    imageAlt: 'Professional brake pad and rotor service',
    features: [
      'Brake pad replacement (front & rear)',
      'Brake rotor resurfacing',
      'Brake rotor replacement',
      'Brake fluid flush and replacement',
      'Caliper repair and service',
      'Brake line inspection',
      'ABS sensor check',
      'Parking brake adjustment',
    ],
    process: [
      'Full brake system inspection',
      'Measure brake pad thickness and rotor condition',
      'Detailed quote with parts needed',
      'Professional installation and bleeding',
      'Road test and brake performance verification',
    ],
    signs: [
      'Squealing or grinding when braking',
      'Brake pedal feels soft or spongy',
      'Car pulls to one side when braking',
      'Vibration in steering wheel when braking',
      'Brake warning light on dashboard',
    ],
  },
  battery: {
    image: 'https://sfile.chatglm.cn/images-ppt/6a76cad607dd.jpg',
    imageAlt: 'Professional battery testing and replacement',
    features: [
      'Battery health diagnostic test',
      'Battery replacement (all brands)',
      'Charging system test (alternator)',
      'Starter motor draw test',
      'Terminal cleaning and protection',
      'Battery warranty coverage',
      'Voltage regulator check',
      'Parasitic drain test',
    ],
    process: [
      'Battery load test and health check',
      'Charging system output test',
      'Identify if battery needs replacement',
      'Install new battery with terminal protection',
      'System voltage verification and handover',
    ],
    signs: [
      'Engine cranks slowly or struggles to start',
      'Battery warning light on dashboard',
      'Electrical accessories flicker or fail',
      'Battery is more than 3 years old',
      'Swollen or leaking battery case',
      'Clicking sound when turning the key',
    ],
  },
  transmission: {
    image: 'https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?w=800&q=80',
    imageAlt: 'Professional transmission and gearbox repair',
    features: [
      'Transmission fluid change',
      'Transmission diagnostics',
      'Transmission rebuild',
      'Transmission replacement',
      'Clutch kit replacement',
      'Gear linkage repair',
      'Torque converter service',
      'Solenoid and sensor replacement',
    ],
    process: [
      'Computerized transmission scan',
      'Road test and fluid analysis',
      'Detailed diagnosis and cost estimate',
      'Repair, rebuild, or replace as needed',
      'Fluid refill, road test, and calibration',
    ],
    signs: [
      'Transmission slips or hesitates',
      'Difficulty shifting gears',
      'Burning smell from transmission area',
      'Unusual grinding or whining noises',
      'Transmission fluid is dark or burnt',
      'Noticeable reduction in vehicle speed',
    ],
  },
};

const CheckIcon = () => (
  <svg
    viewBox="0 0 24 24"
    className="w-4 h-4 text-primary flex-shrink-0 mt-0.5"
    fill="none"
    stroke="currentColor"
    strokeWidth="2.5"
  >
    <path
      d="M5 13l4 4L19 7"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const WarningIcon = () => (
  <AlertTriangle className="w-4 h-4 text-amber-400 flex-shrink-0 mt-0.5" />
);

export default function ServiceDetailModal({
  open,
  onClose,
  serviceKey,
}: ServiceDetailModalProps) {
  const { t } = useLanguageStore();
  const service = serviceData[serviceKey];

  if (!service) return null;

  const handleBookService = () => {
    onClose();
    setTimeout(() => {
      const el = document.getElementById('booking-trigger');
      if (el) el.click();
    }, 300);
  };

  return (
    <Dialog open={open} onOpenChange={(isOpen) => !isOpen && onClose()}>
      <DialogContent
        showCloseButton={false}
        className="max-w-3xl max-h-[90vh] overflow-y-auto p-0 gap-0 rounded-xl"
      >
        {/* Image Section */}
        <div className="relative h-48 sm:h-56 w-full overflow-hidden rounded-t-xl bg-muted">
          <Image
            src={service.image}
            alt={service.imageAlt}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 768px"
            priority
          />
          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-3 right-3 z-10 w-8 h-8 flex items-center justify-center rounded-full bg-black/40 backdrop-blur-sm text-white/90 hover:bg-black/60 hover:text-white transition-colors"
            aria-label="Close"
          >
            <XIcon className="w-4 h-4" />
          </button>
          {/* Title overlay */}
          <div className="absolute bottom-4 left-4 right-4 z-10">
            <DialogHeader className="text-left">
              <DialogTitle className="text-xl sm:text-2xl font-bold text-white drop-shadow-lg">
                {t(`services.${serviceKey}.title`)}
              </DialogTitle>
            </DialogHeader>
          </div>
        </div>

        {/* Content */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, ease: 'easeOut' }}
          className="p-5 sm:p-6 space-y-5"
        >
          {/* Description */}
          <p className="text-muted-foreground text-sm leading-relaxed">
            {t(`services.${serviceKey}.desc`)}
          </p>

          {/* Warning Signs Section */}
          {service.signs && service.signs.length > 0 && (
            <section className="bg-amber-50 border border-amber-200/60 rounded-xl p-4">
              <h3 className="text-sm font-semibold text-amber-600 mb-2.5 flex items-center gap-1.5">
                <AlertTriangle className="w-4 h-4" />
                Signs You Need This Service
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {service.signs.map((sign, i) => (
                  <div key={i} className="flex items-start gap-2">
                    <AlertTriangle className="w-4 h-4 text-amber-500 flex-shrink-0 mt-0.5" />
                    <span className="text-xs text-muted-foreground leading-snug">
                      {sign}
                    </span>
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* What We Offer Section */}
          <section>
            <h3 className="text-base font-semibold text-foreground mb-3">
              What We Offer
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {service.features.map((feature, i) => (
                <div key={i} className="flex items-start gap-2">
                  <CheckIcon />
                  <span className="text-sm text-muted-foreground leading-snug">
                    {feature}
                  </span>
                </div>
              ))}
            </div>
          </section>

          {/* Our Process Section */}
          <section>
            <h3 className="text-base font-semibold text-foreground mb-3">
              Our Process
            </h3>
            <div className="space-y-2.5">
              {service.process.map((step, i) => (
                <div key={i} className="flex items-start gap-3">
                  <div className="w-7 h-7 rounded-full bg-primary/20 text-primary flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5">
                    {i + 1}
                  </div>
                  <div className="flex-1 pt-0.5">
                    <p className="text-sm text-muted-foreground leading-snug">
                      {step}
                    </p>
                    {i < service.process.length - 1 && (
                      <div className="ml-3.5 mt-1.5 mb-0.5 w-px h-3 bg-border" />
                    )}
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* CTA Button */}
          <div className="pt-1 pb-1">
            <button
              onClick={handleBookService}
              className="w-full py-3 px-6 bg-primary text-primary-foreground font-semibold rounded-lg hover:bg-primary/90 transition-colors text-sm"
            >
              Book This Service
            </button>
          </div>
        </motion.div>
      </DialogContent>
    </Dialog>
  );
}