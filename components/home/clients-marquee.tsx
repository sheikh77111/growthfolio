'use client';

import Image from 'next/image';

const brands = [
  { name: 'GETEC Education', logo: '/brands/brand-1.jpg' },
  { name: 'QUBE Cinema Network', logo: '/brands/brand-2.jpg' },
  { name: 'Markaz', logo: '/brands/brand-3.jpg' },
  { name: 'Yes Bharath Wedding Collections', logo: '/brands/brand-4.jpg' },
  { name: 'Markaz Knowledge City', logo: '/brands/brand-5.jpg' },
  { name: 'Shamiya Medicare', logo: '/brands/brand-6.jpg' },
  { name: 'Planet Care', logo: '/brands/brand-7.jpg' },
  { name: 'Kite', logo: '/brands/brand-8.jpg' },
  { name: 'Fintree Corporate Services', logo: '/brands/brand-9.jpg' },
];

export function ClientsMarquee() {
  return (
    <section className="py-16 md:py-24 bg-primary/5">
      <div className="w-full px-4 sm:px-6 lg:px-8 mb-12">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-balance">
          Brands We've Worked With
        </h2>
        <p className="text-center text-muted-foreground text-lg max-w-2xl mx-auto">
          Trusted by leading brands across Kerala and beyond
        </p>
      </div>

      {/* Marquee */}
      <style>{`
        @keyframes scroll-left {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        .marquee-content {
          animation: scroll-left 30s linear infinite;
        }

        .marquee:hover .marquee-content {
          animation-play-state: paused;
        }
      `}</style>

      <div className="marquee overflow-hidden bg-background border-y border-border">
        <div className="marquee-content flex gap-16 py-8 px-4 whitespace-nowrap">
          {[...brands, ...brands, ...brands].map((brand, idx) => (
            <div
              key={idx}
              className="flex-shrink-0 h-24 w-auto flex items-center justify-center p-4"
            >
              <Image
                src={brand.logo}
                alt={brand.name}
                width={150}
                height={100}
                style={{ width: 'auto', height: '100%' }}
                className="object-contain opacity-80 hover:opacity-100 transition-opacity"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
