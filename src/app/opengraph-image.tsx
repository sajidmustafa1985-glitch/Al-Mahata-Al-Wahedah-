import { ImageResponse } from 'next/og';

// =============================================================
// Dynamic OG Image — 1200x630 for social sharing
// Shows business name, tagline, and key info
// =============================================================

export const alt = 'Al Mahata Al Wahedah Garage Sharjah — Premium Car Repair Services';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default function OgImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: '#0a0a0a',
          padding: '60px',
        }}
      >
        {/* Wrench icon */}
        <svg width="80" height="80" viewBox="0 0 24 24" fill="none" stroke="#d4a017" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
        </svg>

        {/* Title */}
        <div
          style={{
            fontSize: 52,
            fontWeight: 800,
            color: '#d4a017',
            marginTop: 30,
            textAlign: 'center',
          }}
        >
          AL MAHATA AL WAHEDAH
        </div>

        {/* Tagline */}
        <div
          style={{
            fontSize: 24,
            color: '#a1a1aa',
            marginTop: 12,
            textAlign: 'center',
          }}
        >
          The Only Station — Auto Maintenance
        </div>

        {/* Key services */}
        <div
          style={{
            display: 'flex',
            gap: '16px',
            marginTop: 36,
          }}
        >
          {['Engine Repair', 'Body Work', '24/7 Recovery', 'AC Service', 'All Brands'].map(
            (text) => (
              <div
                key={text}
                style={{
                  padding: '8px 18px',
                  borderRadius: 999,
                  border: '1px solid #27272a',
                  color: '#a1a1aa',
                  fontSize: 16,
                }}
              >
                {text}
              </div>
            )
          )}
        </div>

        {/* Location */}
        <div
          style={{
            fontSize: 18,
            color: '#71717a',
            marginTop: 36,
          }}
        >
          Al Sajaa, Sharjah, UAE | almahata.ae
        </div>
      </div>
    ),
    { ...size }
  );
}
