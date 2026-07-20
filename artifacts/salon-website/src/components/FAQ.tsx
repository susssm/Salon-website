import React from 'react';
import { motion } from 'framer-motion';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "Do I need an appointment?",
    answer: "While we welcome walk-ins based on availability, we highly recommend booking in advance to ensure your preferred time slot and stylist. Weekends are particularly busy."
  },
  {
    question: "What services do you offer?",
    answer: "We offer a full range of beauty services including hair styling, advanced coloring, nail care (manicure/pedicure), spa treatments, facials, waxing, threading, and relaxing massages."
  },
  {
    question: "Do you accept walk-ins?",
    answer: "Yes! We accept walk-ins based on stylist availability. For best results and guaranteed service, please call ahead or use our booking form."
  },
  {
    question: "What payment methods do you accept?",
    answer: "We accept cash, debit cards, Apple Pay, and all major credit cards (Visa, MasterCard, Amex) for your convenience."
  },
  {
    question: "How long does a typical appointment take?",
    answer: "Service time varies based on what you need. Haircuts take 30-60 minutes, color treatments 2-3 hours, nail services 45-90 minutes, and facials around 60 minutes."
  }
];

export const FAQ = () => {
  return (
    <section className="py-24 bg-card" data-testid="section-faq">
      <div className="container mx-auto px-6 max-w-4xl">
        <div className="text-center mb-16">
          <span className="text-primary font-semibold tracking-[0.2em] uppercase text-sm mb-4 block">Have Questions?</span>
          <h2 className="text-3xl md:text-5xl font-serif text-foreground mb-6">Frequently Asked Questions</h2>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border-border">
                <AccordionTrigger className="text-left font-serif text-lg text-foreground hover:text-primary transition-colors py-6">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground text-base leading-relaxed pb-6">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
};
