import React from 'react';
import { motion } from 'framer-motion';
import { Phone, Calendar } from 'lucide-react';

export const FloatingButtons = () => {
  const scrollToContact = (e: React.MouseEvent) => {
    e.preventDefault();
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="fixed bottom-6 left-0 right-0 z-40 px-6 flex justify-between items-center md:hidden pointer-events-none" data-testid="floating-buttons-mobile">
      <motion.a
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 1 }}
        href="tel:+15198007524"
        className="pointer-events-auto flex items-center justify-center w-14 h-14 rounded-full bg-card shadow-lg border border-border text-primary hover:bg-primary/10 transition-colors"
        aria-label="Call Now"
      >
        <Phone className="w-6 h-6" />
      </motion.a>

      <motion.button
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 1 }}
        onClick={scrollToContact}
        className="pointer-events-auto flex items-center gap-2 px-6 h-14 rounded-full bg-primary text-primary-foreground shadow-lg hover:bg-primary/90 transition-colors font-medium shadow-primary/20"
      >
        <Calendar className="w-5 h-5" />
        <span>Book</span>
      </motion.button>
    </div>
  );
};
