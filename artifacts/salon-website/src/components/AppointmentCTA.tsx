import React from 'react';
import { motion } from 'framer-motion';
import ctaBg from '@assets/generated_images/cta-bg.jpg';

export const AppointmentCTA = () => {
  return (
    <section className="relative py-32 overflow-hidden" data-testid="section-cta">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={ctaBg} 
          alt="Salon background" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-foreground/80 mix-blend-multiply" />
      </div>

      <div className="container relative z-10 mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mx-auto"
        >
          <span className="text-primary font-semibold tracking-[0.2em] uppercase text-sm mb-6 block text-white/90">Experience Luxury</span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif text-white mb-8 leading-tight">
            Ready for Your Next <br/>Beauty Appointment?
          </h2>
          <p className="text-lg text-white/80 mb-12 max-w-xl mx-auto">
            Join the hundreds of women and men in Windsor who trust Nguyen Beauty Salon for their personal care and styling needs.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6">
            <a
              href="#contact"
              className="w-full sm:w-auto px-10 py-4 bg-primary text-primary-foreground rounded-full text-sm uppercase tracking-widest font-bold hover:bg-primary/90 transition-all hover:scale-105 shadow-xl shadow-primary/20"
            >
              Book Appointment
            </a>
            <a
              href="tel:+15198007524"
              className="w-full sm:w-auto px-10 py-4 bg-transparent text-white border-2 border-white/50 rounded-full text-sm uppercase tracking-widest font-bold hover:bg-white hover:text-foreground transition-all hover:scale-105"
            >
              Call (519) 800-7524
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
