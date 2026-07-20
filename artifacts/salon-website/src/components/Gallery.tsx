import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ZoomIn } from 'lucide-react';

import img2 from '@assets/generated_images/gallery-2.jpg';
import img1 from '@assets/generated_images/gallery-1.jpg';
import img4 from '@assets/generated_images/gallery-4.jpg';

const images = [
  { src: '/salon-interior.jpg',       alt: 'Inside Nguyen Beauty Salon — nail stations and styling chairs',  span: 'col-span-1 row-span-2' },
  { src: '/salon-exterior-night.jpg', alt: 'Nguyen Beauty Salon lit up at night',                             span: 'col-span-1 row-span-1' },
  { src: img2,                        alt: 'Nail art',                                                        span: 'col-span-1 row-span-1' },
  { src: img1,                        alt: 'Hair styling',                                                    span: 'col-span-1 row-span-2' },
  { src: '/salon-exterior-day.jpg',   alt: 'Nguyen Beauty Salon storefront on Eugenie Street, Windsor',       span: 'col-span-1 row-span-1' },
  { src: img4,                        alt: 'Makeup application',                                              span: 'col-span-1 row-span-1' },
];

export const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <section id="gallery" className="py-24 bg-background" data-testid="section-gallery">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-primary font-semibold tracking-[0.2em] uppercase text-sm mb-4 block">Portfolio</span>
          <h2 className="text-3xl md:text-5xl font-serif text-foreground mb-6">Our Work</h2>
          <p className="text-muted-foreground text-lg">
            A glimpse into the stunning transformations and relaxing moments at Nguyen Beauty Salon.
          </p>
        </div>

        {/* CSS Grid Masonry approach */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 auto-rows-[150px] sm:auto-rows-[200px] md:auto-rows-[250px]">
          {images.map((img, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`relative group overflow-hidden rounded-xl cursor-pointer ${img.span} bg-muted`}
              onClick={() => setSelectedImage(img.src)}
            >
              <img
                src={img.src}
                alt={img.alt}
                loading="lazy"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors duration-300 flex items-center justify-center">
                <ZoomIn className="text-white opacity-0 group-hover:opacity-100 scale-50 group-hover:scale-100 transition-all duration-300 w-8 h-8" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 p-4"
            onClick={() => setSelectedImage(null)}
          >
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-6 right-6 text-white/70 hover:text-white p-2"
              aria-label="Close lightbox"
            >
              <X className="w-8 h-8" />
            </button>
            <motion.img
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: 'spring', damping: 25, stiffness: 300 }}
              src={selectedImage}
              alt="Enlarged view"
              className="max-w-full max-h-[90vh] object-contain rounded-md"
              onClick={(e) => e.stopPropagation()} // Prevent closing when clicking the image
            />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};
