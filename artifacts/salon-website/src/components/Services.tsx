import React from 'react';
import { motion } from 'framer-motion';
import { Scissors, Palette, Sparkles, Smile, Hand, Eye } from 'lucide-react'; // Using lucide for clean line icons that fit the aesthetic

const services = [
  {
    icon: Scissors,
    title: 'Hair Styling',
    desc: "Women's, Men's, and Children's haircuts tailored to your unique style and face shape.",
    price: 'From $30'
  },
  {
    icon: Palette,
    title: 'Hair Coloring',
    desc: 'Expert balayage, highlights, full color, and root touch-ups using premium, healthy products.',
    price: 'From $80'
  },
  {
    icon: Sparkles,
    title: 'Nail Care',
    desc: 'Luxurious manicures, pedicures, acrylics, and custom nail art designs.',
    price: 'From $25'
  },
  {
    icon: Smile,
    title: 'Facial & Spa',
    desc: 'Rejuvenating facials and skin treatments to bring back your natural, healthy glow.',
    price: 'From $65'
  },
  {
    icon: Eye,
    title: 'Eyebrow & Waxing',
    desc: 'Precise threading, waxing, and tinting for perfectly shaped brows and smooth skin.',
    price: 'From $15'
  },
  {
    icon: Hand,
    title: 'Massage',
    desc: 'Relaxing massage therapies to relieve tension and restore your body and mind.',
    price: 'From $70'
  }
];

export const Services = () => {
  return (
    <section id="services" className="py-24 bg-muted/30" data-testid="section-services">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-primary font-semibold tracking-[0.2em] uppercase text-sm mb-4 block">What We Offer</span>
          <h2 className="text-3xl md:text-5xl font-serif text-foreground mb-6">Our Premium Services</h2>
          <p className="text-muted-foreground text-lg">
            Experience our comprehensive range of beauty treatments, delivered with expertise and the finest products available.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative bg-card p-8 rounded-2xl shadow-sm border border-border hover:shadow-xl hover:border-primary/30 transition-all duration-300 hover:-translate-y-1"
              >
                <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center text-primary mb-6 group-hover:scale-110 group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                  <Icon className="w-7 h-7" strokeWidth={1.5} />
                </div>
                <h3 className="text-2xl font-serif text-foreground mb-3">{service.title}</h3>
                <p className="text-muted-foreground mb-6 min-h-[4rem]">{service.desc}</p>
                
                <div className="flex items-center justify-between border-t border-border pt-4 mt-auto">
                  <span className="font-medium text-foreground">{service.price}</span>
                  <a href="#contact" className="text-sm font-semibold text-primary hover:text-primary/80 uppercase tracking-wider">Book</a>
                </div>
                
                {/* Decorative corner accent */}
                <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-bl from-primary/10 to-transparent rounded-tr-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
