'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';

export function HeroCarousel() {
  const [activeSlide, setActiveSlide] = useState(0);

  const slides = [
    { id: 1, image: '/images/hero-1.jpg', title: 'Outdoor Advertising' },
    { id: 2, image: '/images/hero-2.jpg', title: 'Digital Billboards' },
    { id: 3, image: '/images/hero-3.jpg', title: 'Video Production' },
    { id: 4, image: '/images/hero-4.jpg', title: 'Walking Ads' },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % slides.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [slides.length]);

  return (
    <div className="relative w-screen md:h-[600px] h-[400px] overflow-hidden -ml-4 -mr-4 sm:-ml-6 sm:-mr-6 lg:ml-0 lg:mr-0 lg:rounded-none">
      {/* Slides */}
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            activeSlide === index ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <Image
            src={slide.image}
            alt={slide.title}
            fill
            className="object-cover"
            priority={index === 0}
          />
          {/* Overlay */}
          <div className="absolute inset-0 bg-black/30" />
        </div>
      ))}

      {/* Content */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="text-center text-white">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 text-balance">
            {slides[activeSlide].title}
          </h1>
          <p className="text-lg md:text-2xl opacity-90 text-balance">
            Transform Your Brand with Creative Solutions
          </p>
        </div>
      </div>

      {/* Indicators */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-3">
        {slides.map((_, index) => (
          <button
            type="button"
            key={index}
            onClick={() => setActiveSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              activeSlide === index
                ? 'bg-primary w-8'
                : 'bg-white/50 hover:bg-white'
            }`}
            aria-label={`Slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Navigation arrows */}
      <button
        onClick={() => setActiveSlide((prev) => (prev - 1 + slides.length) % slides.length)}
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-gray-400/40 hover:bg-gray-400/60 text-white p-2 rounded-full transition-all z-10"
        aria-label="Previous slide"
      >
        ←
      </button>
      <button
        onClick={() => setActiveSlide((prev) => (prev + 1) % slides.length)}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-gray-400/40 hover:bg-gray-400/60 text-white p-2 rounded-full transition-all z-10"
        aria-label="Next slide"
      >
        →
      </button>
    </div>
  );
}
