'use client';

import Link from 'next/link';
import { Monitor, SignpostBig, Video, Megaphone, Users } from 'lucide-react';

const services = [
  {
    id: 1,
    title: 'Digital Billboards',
    description: 'High-impact LED and digital display advertising solutions that grab attention 24/7.',
    icon: Monitor,
  },
  {
    id: 2,
    title: 'Hoardings',
    description: 'Strategic outdoor hoarding placements with premium visibility and creative designs.',
    icon: SignpostBig,
  },
  {
    id: 3,
    title: 'Video Production',
    description: 'Professional video content creation tailored for advertising and promotional campaigns.',
    icon: Video,
  },
  {
    id: 4,
    title: 'Marketing Campaigns',
    description: 'Integrated marketing solutions that combine digital and traditional media for maximum reach.',
    icon: Megaphone,
  },
  {
    id: 5,
    title: 'Walking Ads',
    description: 'Mobile street marketing with trained personnel wearing branded displays and promotional gear.',
    icon: Users,
  },
];

export function ServicesGrid() {
  return (
    <>
      {/* Video Presentation Section */}
      <section className="py-16 md:py-24 bg-background">
        <div className="w-full px-4 sm:px-6 lg:px-8">
          <div className="mb-12 md:mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4 text-foreground">
              How We Present Services
            </h2>
            <p className="text-lg text-muted-foreground">
              Watch how our advertising solutions transform brands
            </p>
          </div>

          <div className="w-full h-96 md:h-[600px] rounded-lg overflow-hidden shadow-2xl">
            <video
              autoPlay
              muted
              loop
              playsInline
              className="w-full h-full object-cover"
              src="/services-demo.webm"
            />
          </div>
        </div>
      </section>

      {/* Services Grid Section */}
      <section className="py-16 md:py-24 bg-background">
        <div className="w-full px-4 sm:px-6 lg:px-8">
          <div className="mb-12 md:mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-foreground">
              Our Services
            </h2>
            <p className="text-lg text-muted-foreground mt-2">
              Comprehensive advertising solutions tailored to elevate your brand presence
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
            {services.map((service) => {
              const IconComponent = service.icon;
              return (
                <Link key={service.id} href={`/services?service=${service.id}`}>
                  <div className="glowing-border rounded-lg cursor-pointer h-full">
                    <div className="h-full bg-card border border-border rounded-lg p-6 hover:shadow-lg transition-all duration-300 hover:border-secondary relative z-10 flex flex-col min-h-96 text-center">
                      <h3 className="text-xl font-bold mb-6 text-foreground">{service.title}</h3>
                      <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mb-6 mx-auto">
                        <IconComponent className="w-8 h-8 text-primary" />
                      </div>
                      <p className="text-muted-foreground leading-relaxed text-sm flex-grow">{service.description}</p>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
