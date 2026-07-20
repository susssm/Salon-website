import React from 'react';
import { Facebook, Instagram, Music2, MapPin } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="bg-foreground text-background pt-20 pb-10" data-testid="footer">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* Brand Col */}
          <div className="space-y-6">
            <h2 className="font-serif text-2xl font-bold tracking-wider text-white">
              Nguyen<span className="text-primary">Beauty</span>
            </h2>
            <p className="text-white/70 leading-relaxed text-sm">
              Your premier destination for luxury beauty treatments in Windsor. Experience the art of pampering in a sanctuary designed for your comfort.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary hover:text-white transition-colors" aria-label="Facebook">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary hover:text-white transition-colors" aria-label="Instagram">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary hover:text-white transition-colors" aria-label="TikTok">
                <Music2 className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-serif text-lg mb-6 text-white relative inline-block">
              Quick Links
              <span className="absolute -bottom-2 left-0 w-1/2 h-0.5 bg-primary"></span>
            </h3>
            <ul className="space-y-3">
              {['Home', 'About Us', 'Services', 'Gallery', 'Reviews', 'Contact'].map((link) => (
                <li key={link}>
                  <a 
                    href={`#${link.toLowerCase().replace(' ', '-')}`} 
                    className="text-white/70 hover:text-primary transition-colors text-sm"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-serif text-lg mb-6 text-white relative inline-block">
              Our Services
              <span className="absolute -bottom-2 left-0 w-1/2 h-0.5 bg-primary"></span>
            </h3>
            <ul className="space-y-3">
              {['Hair Styling & Color', 'Manicures & Pedicures', 'Spa & Facials', 'Waxing & Threading', 'Massage Therapy', 'Bridal Packages'].map((service) => (
                <li key={service}>
                  <a href="#services" className="text-white/70 hover:text-primary transition-colors text-sm">
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Location Button / Contact */}
          <div>
            <h3 className="font-serif text-lg mb-6 text-white relative inline-block">
              Visit Us
              <span className="absolute -bottom-2 left-0 w-1/2 h-0.5 bg-primary"></span>
            </h3>
            <address className="not-italic text-white/70 text-sm space-y-4 mb-6">
              <p>2605 Howard Ave Unit 4</p>
              <p>Windsor, ON N8X 3W7</p>
              <p>Canada</p>
              <p className="text-primary font-medium mt-2">(519) 800-7524</p>
            </address>
            <a 
              href="https://maps.google.com/?q=2605+Howard+Ave+Windsor+ON" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-white/10 hover:bg-primary text-white text-sm font-medium rounded-full transition-all border border-white/20 hover:border-primary"
            >
              <MapPin className="w-4 h-4" /> Get Directions
            </a>
          </div>

        </div>

        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-white/50">
          <p>&copy; {new Date().getFullYear()} Nguyen Beauty Salon. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
