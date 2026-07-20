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
      <div className="absolute inset-0 z-0" style={{ backgroundColor: '#1C1917' }}>
        <picture>
          <source media="(max-width: 767px)" srcSet={heroBgMobile} />
          <img
            src={heroBgDesktop}
            alt="Luxurious salon interior"
            className="w-full h-full object-cover opacity-70"
            style={{ transform: 'translateZ(0)', willChange: 'transform' }}
          />
        </picture>
        <div className="absolute inset-0" style={{ background: 'linear-gradient(to bottom, rgba(28,25,23,0.55) 0%, rgba(28,25,23,0.28) 50%, rgba(28,25,23,0.72) 100%)' }} />
      </div>

      {/* Main hero content — vertically centred, never overlaps stats */}
      <div className="relative z-10 container mx-auto px-6 flex flex-col items-center text-center mt-16 md:mt-0 pb-40 md:pb-48">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="max-w-4xl"
        >
          {/* Premium eyebrow line with decorative rules */}
          <motion.div
            initial={{ opacity: 0, scaleX: 0.6 }}
            animate={{ opacity: 1, scaleX: 1 }}
            transition={{ duration: 0.9, delay: 0.15 }}
            className="flex items-center justify-center gap-4 mb-7"
          >
            <span className="block h-px w-12 md:w-20 bg-primary/60" />
            <span className="text-primary/90 tracking-[0.35em] uppercase text-[10px] md:text-xs font-semibold whitespace-nowrap">
              Welcome to Premium Care
            </span>
            <span className="block h-px w-12 md:w-20 bg-primary/60" />
          </motion.div>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif text-white mb-6 leading-[1.12]">
            Beauty That Inspires
            <br />
            <em className="not-italic" style={{ fontStyle: 'italic', color: 'hsl(var(--primary) / 0.92)', letterSpacing: '0.02em' }}>
              Confidence
            </em>
          </h1>

          {/* Thin decorative divider under the headline */}
          <motion.div
            initial={{ opacity: 0, scaleX: 0 }}
            animate={{ opacity: 1, scaleX: 1 }}
            transition={{ duration: 0.8, delay: 0.55 }}
            className="mx-auto mb-7 flex items-center justify-center gap-3"
          >
            <span className="block h-px w-8 bg-white/25" />
            <span className="block w-1.5 h-1.5 rounded-full bg-primary/70" />
            <span className="block h-px w-8 bg-white/25" />
          </motion.div>

          <p className="text-lg md:text-xl text-white/75 mb-10 max-w-2xl mx-auto font-light leading-relaxed">
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
      </div>

      {/* Stats bar — anchored to the section bottom, always clear of the headline */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.8 }}
        className="hidden md:grid grid-cols-4 gap-px absolute bottom-16 left-1/2 -translate-x-1/2 w-full max-w-4xl px-6 rounded-2xl overflow-hidden border border-white/10 backdrop-blur-md bg-white/5"
      >
        {stats.map((stat, i) => (
          <div key={i} className={`text-center py-5 px-4 ${i < stats.length - 1 ? 'border-r border-white/10' : ''}`}>
            <div className="text-2xl font-serif text-primary mb-0.5">{stat.value}</div>
            <div className="text-[10px] text-white/60 uppercase tracking-widest">{stat.label}</div>
          </div>
        ))}
      </motion.div>

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
