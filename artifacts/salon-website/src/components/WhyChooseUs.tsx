import React from 'react';
import { motion } from 'framer-motion';
import { Star, Shield, Heart, PiggyBank, Users, Sparkles, Target, ThumbsUp } from 'lucide-react';

const reasons = [
  { icon: Star, title: 'Experienced Professionals', desc: 'Our stylists have years of hands-on experience.' },
  { icon: Sparkles, title: 'Premium Products', desc: 'We only use top-tier, salon-grade beauty products.' },
  { icon: Heart, title: 'Relaxing Atmosphere', desc: 'A serene environment designed for your comfort.' },
  { icon: PiggyBank, title: 'Affordable Pricing', desc: 'Luxury treatments without the exorbitant price tag.' },
  { icon: Users, title: 'Friendly Staff', desc: 'Welcoming team dedicated to making you feel at home.' },
  { icon: Shield, title: 'Clean & Hygienic', desc: 'Strict sterilization protocols for your safety.' },
  { icon: Target, title: 'Personalized Care', desc: 'Treatments tailored specifically to your needs.' },
  { icon: ThumbsUp, title: 'Excellent Service', desc: 'Hundreds of satisfied clients and 5-star reviews.' },
];

export const WhyChooseUs = () => {
  return (
    <section className="py-24 bg-card" data-testid="section-why-choose-us">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-primary font-semibold tracking-[0.2em] uppercase text-sm mb-4 block">The Nguyen Difference</span>
          <h2 className="text-3xl md:text-5xl font-serif text-foreground mb-6">Why Choose Us</h2>
          <p className="text-muted-foreground text-lg">
            We don't just provide beauty services; we craft an unforgettable experience focused entirely on you.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {reasons.map((reason, index) => {
            const Icon = reason.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="p-6 rounded-2xl bg-background border border-border/50 hover:border-primary/20 hover:shadow-lg transition-all text-center flex flex-col items-center group"
              >
                <div className="w-12 h-12 rounded-full bg-secondary text-primary flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <Icon className="w-6 h-6" strokeWidth={1.5} />
                </div>
                <h3 className="text-lg font-serif font-semibold text-foreground mb-2">{reason.title}</h3>
                <p className="text-sm text-muted-foreground">{reason.desc}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
