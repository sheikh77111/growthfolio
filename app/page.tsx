import { HeroCarousel } from '@/components/home/hero-carousel';
import { AboutSection } from '@/components/home/about-section';
import { ServicesGrid } from '@/components/home/services-grid';
import { ClientsMarquee } from '@/components/home/clients-marquee';
import Link from 'next/link';

export default function Home() {
  return (
    <>
      {/* Hero Carousel */}
      <section className="pt-0 pb-16 md:pt-0 md:pb-24 w-full">
        <HeroCarousel />
      </section>

      {/* About Section */}
      <AboutSection />

      {/* Services Grid */}
      <ServicesGrid />

      {/* Clients Marquee */}
      <ClientsMarquee />

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-secondary/50">
        <div className="w-full text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-balance text-foreground">
            Ready to Elevate Your Brand?
          </h2>
          <p className="text-lg md:text-xl mb-8 opacity-90 text-balance text-foreground">
            Let's work together to create impactful advertising campaigns that resonate with your audience.
          </p>
          <Link
            href="/contact"
            className="inline-block px-8 py-3 rounded-lg font-semibold hover:shadow-lg transition-all duration-300 hover:scale-105 bg-primary text-white"
          >
            Get In Touch
          </Link>
        </div>
      </section>
    </>
  );
}
