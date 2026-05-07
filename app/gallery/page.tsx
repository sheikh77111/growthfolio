'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useState } from 'react';
import { X } from 'lucide-react';

const galleryItems = [
  { id: 1, title: 'Event - Walking Advertisement', category: 'Walking Ads', image: '/images/gallery-1.jpg' },
  { id: 2, title: 'Growthfolio Campaign Launch', category: 'Campaigns', image: '/images/gallery-2.jpg' },
  { id: 3, title: 'Event Promotion', category: 'Events', image: '/images/gallery-3.jpg' },
  { id: 4, title: 'Talks Event Activation', category: 'Events', image: '/images/gallery-4.jpg' },
  { id: 5, title: 'Recognition Award Ceremony', category: 'Corporate', image: '/images/gallery-5.jpg' },
  { id: 6, title: 'Team Recognition Event', category: 'Corporate', image: '/images/gallery-6.jpg' },
  { id: 7, title: 'Team Collaboration', category: 'Corporate', image: '/images/gallery-7.jpg' },
  { id: 8, title: 'Brand Billboard Campaign', category: 'Hoardings', image: '/images/gallery-8.jpg' },
  { id: 9, title: 'Award Recognition', category: 'Corporate', image: '/images/gallery-9.jpg' },
  { id: 10, title: 'HeadX Future Event', category: 'Events', image: '/images/gallery-10.jpg' },
  { id: 11, title: 'Event Celebration', category: 'Events', image: '/images/gallery-11.jpg' },
  { id: 12, title: 'Conference Group Photo', category: 'Corporate', image: '/images/gallery-12.jpg' },
];

export default function GalleryPage() {
  const [selectedImage, setSelectedImage] = useState<(typeof galleryItems)[0] | null>(null);

  return (
    <>
      {/* Page Header */}
      <section className="py-12 md:py-20 bg-gradient-to-r from-primary to-secondary text-white">
        <div className="w-full px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 text-balance">Gallery</h1>
          <p className="text-lg md:text-xl opacity-90 max-w-2xl mx-auto text-balance">
            Explore our portfolio of successful advertising campaigns and media solutions
          </p>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-16 md:py-24 bg-background">
        <div className="w-full px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {galleryItems.map((item, index) => (
              <GalleryCard key={item.id} item={item} index={index} onImageClick={setSelectedImage} />
            ))}
          </div>
        </div>
      </section>

      {/* Image Preview Modal */}
      {selectedImage && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4" onClick={() => setSelectedImage(null)}>
          <div className="relative w-full max-w-4xl max-h-[90vh] bg-black rounded-lg overflow-hidden" onClick={(e) => e.stopPropagation()}>
            <Image
              src={selectedImage.image}
              alt={selectedImage.title}
              width={1200}
              height={800}
              className="w-full h-full object-contain"
            />
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 bg-white/20 hover:bg-white/40 rounded-full p-2 transition-colors"
              aria-label="Close preview"
            >
              <X className="w-6 h-6 text-white" />
            </button>
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
              <h3 className="text-white text-xl font-semibold">{selectedImage.title}</h3>
              <p className="text-gray-300">{selectedImage.category}</p>
            </div>
          </div>
        </div>
      )}

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-secondary/50">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance">
            Impressed by Our Work?
          </h2>
          <p className="text-lg text-muted-foreground mb-8 text-balance">
            Let's create something amazing for your brand. Get in touch with our team today.
          </p>
          <a
            href="/contact"
            className="inline-block bg-primary text-primary-foreground px-8 py-3 rounded-lg font-semibold hover:shadow-lg transition-all duration-300 hover:scale-105"
          >
            Start Your Project
          </a>
        </div>
      </section>
    </>
  );
}

function GalleryCard({
  item,
  index,
  onImageClick,
}: {
  item: (typeof galleryItems)[0];
  index: number;
  onImageClick: (item: (typeof galleryItems)[0]) => void;
}) {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group relative overflow-hidden rounded-lg border border-border h-72 hover:shadow-xl transition-all duration-300 cursor-pointer"
      onClick={() => onImageClick(item)}
    >
      {/* Image */}
      <Image
        src={item.image}
        alt={item.title}
        fill
        className="object-cover group-hover:scale-110 transition-transform duration-300"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors duration-300" />
    </motion.div>
  );
}
