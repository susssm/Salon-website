import React from 'react';
import { motion } from 'framer-motion';
import { Check } from 'lucide-react';
import aboutImg from '@assets/generated_images/about-img.jpg';

export const About = () => {
  const features = [
    'Experienced & Master Stylists',
    'Premium Beauty Products',
    'Relaxing, Luxurious Atmosphere',
    'Clean & Hygienic Environment',
    '100% Customer Satisfaction',
    'Personalized Care & Consultations',
  ];

  return (
    <section id="about" className="py-24 bg-background overflow-hidden" data-testid="section-about">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="w-full lg:w-1/2 relative"
          >
            <div className="relative aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl">
              <img 
                src={aboutImg} 
                alt="Stylists working in a luxurious salon" 
                className="w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 border-2 border-primary/20 rounded-3xl m-4 pointer-events-none" />
            </div>
            
            {/* Floating badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="absolute -bottom-8 -right-8 md:-right-12 bg-card p-6 md:p-8 rounded-2xl shadow-xl border border-border hidden sm:block max-w-xs"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                  <span className="text-2xl">✨</span>
                </div>
                <div>
                  <h4 className="font-serif font-bold text-lg text-foreground">10+ Years</h4>
                  <p className="text-sm text-muted-foreground">Of Beauty Excellence</p>
                </div>
              </div>
            </motion.div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="w-full lg:w-1/2"
          >
            <div className="mb-6">
              <span className="text-primary font-semibold tracking-[0.2em] uppercase text-sm mb-4 block">About Our Salon</span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif text-foreground leading-tight mb-6">
                Your Beauty Is Our <br className="hidden md:block"/>
                <span className="text-primary italic">Greatest Passion</span>
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                Located in the heart of Windsor, Nguyen Beauty Salon is a sanctuary of style and relaxation. We believe that a trip to the salon should be more than an errand—it should be a luxurious escape.
              </p>
              <p className="text-muted-foreground text-lg leading-relaxed mb-8">
                Our team of dedicated professionals combines years of experience with top-tier products to deliver exceptional results. Whether you're here for a transformative haircut, a soothing spa day, or meticulous nail care, we are devoted to making you feel pampered and confident.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
              {features.map((feature, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + (i * 0.1) }}
                  className="flex items-start gap-3"
                >
                  <div className="mt-1 shrink-0 w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                    <Check className="w-3 h-3" />
                  </div>
                  <span className="text-foreground/80 font-medium text-sm">{feature}</span>
                </motion.div>
              ))}
            </div>

            <a 
              href="#services" 
              className="inline-flex items-center gap-2 pb-1 border-b-2 border-primary text-foreground font-semibold hover:text-primary transition-colors"
            >
              Explore Our Services <span aria-hidden="true">&rarr;</span>
            </a>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
