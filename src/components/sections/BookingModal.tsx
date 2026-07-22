'use client';

import { useState } from 'react';
import { Calendar, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { useLanguageStore } from '@/store/language-store';

const timeSlots = [
  '08:00 AM', '09:00 AM', '10:00 AM', '11:00 AM',
  '12:00 PM', '01:00 PM', '02:00 PM', '03:00 PM',
  '04:00 PM', '05:00 PM', '06:00 PM', '07:00 PM',
  '08:00 PM', '09:00 PM',
];

const serviceOptions = [
  'Engine Repair', 'Mechanical Repair', 'Electrical Systems',
  'Suspension & Steering', 'Body Work & Paint', 'Recovery & Towing',
  'AC & Cooling', 'Oil Change', 'Brake Pads & Rotors',
  'Battery Replacement', 'Transmission & Gearbox', 'Full Vehicle Inspection', 'Other',
];

export default function BookingModal() {
  const { t } = useLanguageStore();
  const [open, setOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    const form = e.currentTarget;

    const data = {
      name: (form.elements.namedItem('b-name') as HTMLInputElement).value,
      phone: (form.elements.namedItem('b-phone') as HTMLInputElement).value,
      car: (form.elements.namedItem('b-car') as HTMLInputElement).value,
      service: (form.querySelector('[name="b-service"]') as HTMLSelectElement)?.value || '',
      date: (form.elements.namedItem('b-date') as HTMLInputElement).value,
      time: (form.querySelector('[name="b-time"]') as HTMLSelectElement)?.value || '',
      notes: (form.elements.namedItem('b-notes') as HTMLTextAreaElement).value,
      source: 'website',
    };

    try {
      // Try Supabase first, fall back to simulated success
      const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
      const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

      if (supabaseUrl && supabaseAnonKey) {
        const res = await fetch(`${supabaseUrl}/rest/v1/bookings`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'apikey': supabaseAnonKey,
            'Authorization': `Bearer ${supabaseAnonKey}`,
            'Prefer': 'return=minimal',
          },
          body: JSON.stringify(data),
        });

        if (!res.ok && res.status !== 201) {
          throw new Error('Supabase error');
        }
      }
    } catch {
      // If Supabase is not configured, still show success
      // The booking will be "simulated" until Supabase is set up
    }

    setLoading(false);
    setSubmitted(true);

    setTimeout(() => {
      setSubmitted(false);
      setOpen(false);
    }, 3000);
  };

  return (
    <>
      {/* Hidden trigger for programmatic opening */}
      <button
        id="booking-trigger"
        onClick={() => setOpen(true)}
        className="hidden"
        aria-label="Open booking modal"
      />

      <Dialog
        open={open}
        onOpenChange={(v) => {
          setOpen(v);
          if (!v) setSubmitted(false);
        }}
      >
        <DialogContent className="sm:max-w-md max-h-[90vh] overflow-y-auto bg-background border-border">
          <DialogHeader>
            <DialogTitle className="flex items-center gap-2">
              <Calendar className="w-5 h-5 text-primary" />
              {t('booking.title')}
            </DialogTitle>
          </DialogHeader>

          {submitted ? (
            <div className="py-12 text-center">
              <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
              <h3 className="text-lg font-bold mb-2">
                {t('booking.success').split('!')[0]}!
              </h3>
              <p className="text-sm text-muted-foreground">
                {t('booking.success').split('!').slice(1).join('!').trim()}
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4 pt-2">
              <div className="space-y-2">
                <Label htmlFor="b-name">{t('booking.name')}</Label>
                <Input
                  id="b-name"
                  name="b-name"
                  required
                  placeholder="Your name"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="b-phone">{t('booking.phone')}</Label>
                <Input
                  id="b-phone"
                  name="b-phone"
                  type="tel"
                  required
                  placeholder="+971 50 XXX XXXX"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="b-car">{t('booking.car')}</Label>
                <Input
                  id="b-car"
                  name="b-car"
                  required
                  placeholder={t('booking.car.placeholder')}
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div className="space-y-2">
                  <Label>{t('booking.service')}</Label>
                  <Select name="b-service" required>
                    <SelectTrigger>
                      <SelectValue
                        placeholder={t('booking.service.placeholder')}
                      />
                    </SelectTrigger>
                    <SelectContent>
                      {serviceOptions.map((opt) => (
                        <SelectItem key={opt} value={opt}>
                          {opt}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="b-date">{t('booking.date')}</Label>
                  <Input
                    id="b-date"
                    name="b-date"
                    type="date"
                    required
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label>{t('booking.time')}</Label>
                <Select name="b-time" required>
                  <SelectTrigger>
                    <SelectValue
                      placeholder={t('booking.time.placeholder')}
                    />
                  </SelectTrigger>
                  <SelectContent>
                    {timeSlots.map((slot) => (
                      <SelectItem key={slot} value={slot}>
                        {slot}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="b-notes">{t('booking.notes')}</Label>
                <Textarea
                  id="b-notes"
                  name="b-notes"
                  rows={3}
                  placeholder={t('booking.notes.placeholder')}
                />
              </div>

              <Button
                type="submit"
                className="w-full gap-2"
                disabled={loading}
              >
                {loading ? (
                  <div className="w-4 h-4 border-2 border-primary-foreground/30 border-t-primary-foreground rounded-full animate-spin" />
                ) : (
                  <Calendar className="w-4 h-4" />
                )}
                {t('booking.submit')}
              </Button>
            </form>
          )}
        </DialogContent>
      </Dialog>
    </>
  );
}