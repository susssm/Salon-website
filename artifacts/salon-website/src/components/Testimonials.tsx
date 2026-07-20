import React, { useEffect } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';

const reviews = [
  {
    name: 'Sarah Jenkins',
    date: '2 weeks ago',
    text: "Absolutely stunning salon! The attention to detail here is unmatched. I came in for a full color and cut, and my stylist was incredible. The rose gold interior makes you feel like royalty.",
  },
  {
    name: 'Emily Chen',
    date: '1 month ago',
    text: "Best manicure I've ever had in Windsor. The staff is so friendly and the environment is impeccably clean. They really take their time to ensure everything is perfect.",
  },
  {
    name: 'Jessica Thorne',
    date: '2 months ago',
    text: "I booked a spa day here before my wedding and it was the most relaxing experience. The facial left my skin glowing for days. Highly recommend to anyone needing pampering.",
  },
  {
    name: 'Amanda Brooks',
    date: '3 months ago',
    text: "Found my forever salon! They fixed a terrible box dye job and brought my hair back to life. The pricing is very reasonable for the luxury experience you get.",
  },
  {
    name: 'Olivia Martinez',
    date: '4 months ago',
    text: "I always look forward to my appointments. The massage chairs during the pedicure are a dream, and they always offer you a beverage. A true 5-star experience.",
  },
];

export const Testimonials = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: 'center' });

  // Auto-play functionality
  useEffect(() => {
    if (!emblaApi) return;
    const autoplay = setInterval(() => {
      if (emblaApi.canScrollNext()) {
        emblaApi.scrollNext();
      }
    }, 4000);

    return () => clearInterval(autoplay);
  }, [emblaApi]);

  return (
    <section id="testimonials" className="py-24 bg-secondary overflow-hidden" data-testid="section-testimonials">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="max-w-xl">
            <span className="text-primary font-semibold tracking-[0.2em] uppercase text-sm mb-4 block">Client Love</span>
            <h2 className="text-3xl md:text-5xl font-serif text-secondary-foreground mb-4">What Our Clients Say</h2>
          </div>
          <div className="flex flex-col items-start md:items-end bg-card p-4 rounded-xl shadow-sm border border-border">
            <div className="flex text-accent mb-2">
              {[...Array(5)].map((_, i) => <Star key={i} className="w-5 h-5 fill-current" />)}
            </div>
            <div className="text-foreground font-semibold">4.9/5 Average Rating</div>
            <div className="text-muted-foreground text-sm">Based on 68 Google Reviews</div>
          </div>
        </div>

        <div className="relative">
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex touch-pan-y -ml-4 md:-ml-6">
              {reviews.map((review, index) => (
                <div key={index} className="flex-[0_0_100%] md:flex-[0_0_50%] lg:flex-[0_0_33.333%] pl-4 md:pl-6 min-w-0">
                  <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="bg-card p-8 rounded-2xl h-full shadow-sm border border-border relative flex flex-col"
                  >
                    <Quote className="w-10 h-10 text-primary/20 absolute top-6 right-6 rotate-180" />
                    <div className="flex text-accent mb-6">
                      {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-current" />)}
                    </div>
                    <p className="text-muted-foreground italic mb-8 flex-grow leading-relaxed">
                      "{review.text}"
                    </p>
                    <div className="mt-auto">
                      <h4 className="font-serif font-bold text-foreground text-lg">{review.name}</h4>
                      <span className="text-sm text-muted-foreground">{review.date}</span>
                    </div>
                  </motion.div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Custom Navigation Dots or Arrows could go here, but auto-play and swipe are often enough for modern mobile-first design */}
        </div>
      </div>
    </section>
  );
};
