import React from 'react';
import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import heroBgDesktop from '@assets/generated_images/hero-bg.jpg';
import heroBgMobile from '@assets/generated_images/hero-bg-mobile.jpg';

export const Hero = () => {
  const scrollToContact = (e: React.MouseEvent) => {
    e.preventDefault();
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToAbout = (e: React.MouseEvent) => {
    e.preventDefault();
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const stats = [
    { label: 'Happy Clients', value: '500+' },
    { label: 'Years Experience', value: '10+' },
    { label: 'Services', value: '50+' },
    { label: 'Google Reviews', value: '★★★★★ 68' },
  ];

  return (
    <section id="home" className="relative w-full h-[100dvh] flex items-center justify-center overflow-hidden" data-testid="section-hero">
      {/* Background Images */}
      <div className="absolute inset-0 z-0 bg-black">
        <picture>
          <source media="(max-width: 767px)" srcSet={heroBgMobile} />
          <img
            src={heroBgDesktop}
            alt="Luxurious salon interior"
            className="w-full h-full object-cover opacity-60 mix-blend-overlay"
            style={{ transform: 'translateZ(0)', willChange: 'transform' }} // subtle hack for performance
          />
        </picture>
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/80" />
      </div>

      <div className="relative z-10 container mx-auto px-6 flex flex-col items-center text-center mt-16 md:mt-0">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="max-w-4xl"
        >
          <span className="text-primary tracking-[0.3em] uppercase text-xs md:text-sm font-semibold mb-6 block">Welcome to Premium Care</span>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif text-white mb-6 leading-tight">
            Beauty That Inspires <br className="hidden md:block" />
            <span className="italic text-primary-foreground/90">Confidence</span>
          </h1>
          <p className="text-lg md:text-xl text-white/80 mb-10 max-w-2xl mx-auto font-light">
            Professional Hair Styling, Nail Care, Spa & Waxing in Windsor.
            Experience luxury pampering tailored just for you.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6">
            <a
              href="#contact"
              onClick={scrollToContact}
              className="w-full sm:w-auto px-8 py-4 bg-primary text-primary-foreground rounded-full text-sm uppercase tracking-widest font-medium hover:bg-primary/90 transition-all hover:scale-105 active:scale-95 shadow-lg shadow-primary/25"
            >
              Book Appointment
            </a>
            <a
              href="tel:+15198007524"
              className="w-full sm:w-auto px-8 py-4 bg-transparent text-white border border-white/30 rounded-full text-sm uppercase tracking-widest font-medium hover:bg-white/10 transition-all hover:scale-105 active:scale-95 backdrop-blur-sm"
            >
              Call Now
            </a>
          </div>
        </motion.div>

        {/* Stats overlay for desktop */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="hidden md:grid grid-cols-4 gap-8 absolute bottom-32 left-1/2 -translate-x-1/2 w-full max-w-5xl px-6"
        >
          {stats.map((stat, i) => (
            <div key={i} className="text-center p-4 backdrop-blur-md bg-white/5 rounded-2xl border border-white/10">
              <div className="text-2xl font-serif text-primary mb-1">{stat.value}</div>
              <div className="text-xs text-white/70 uppercase tracking-wider">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>

      <motion.a
        href="#about"
        onClick={scrollToAbout}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/70 hover:text-white transition-colors z-20 hidden sm:flex flex-col items-center gap-2"
        aria-label="Scroll down"
      >
        <span className="text-xs uppercase tracking-widest">Scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
        >
          <ChevronDown className="w-5 h-5 text-primary" />
        </motion.div>
      </motion.a>
    </section>
  );
};
