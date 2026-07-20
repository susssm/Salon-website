import React from 'react';
import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { MapPin, Phone, Clock, Mail } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';

const formSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  phone: z.string().min(10, 'Please enter a valid phone number'),
  email: z.string().email('Please enter a valid email address'),
  service: z.string().min(1, 'Please select a service'),
  date: z.string().optional(),
  message: z.string().optional(),
});

export const Contact = () => {
  const { toast } = useToast();
  
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      phone: '',
      email: '',
      service: '',
      date: '',
      message: '',
    },
  });

  const onSubmit = (values: z.infer<typeof formSchema>) => {
    // In a real app, this would send an API request
    console.log(values);
    toast({
      title: "Request Sent Successfully",
      description: "We'll call you shortly to confirm your appointment time.",
    });
    form.reset();
  };

  const businessInfo = [
    { icon: MapPin, title: 'Address', detail: '2605 Howard Ave Unit 4, Windsor, ON N8X 3W7' },
    { icon: Phone, title: 'Phone', detail: '+1 (519) 800-7524', link: 'tel:+15198007524' },
    { icon: Mail, title: 'Email', detail: 'info@nguyenbeauty.com', link: 'mailto:info@nguyenbeauty.com' },
  ];

  const hours = [
    { day: 'Mon - Fri', time: '9:00 AM - 7:00 PM' },
    { day: 'Saturday', time: '9:00 AM - 6:00 PM' },
    { day: 'Sunday', time: '10:00 AM - 5:00 PM' },
  ];

  return (
    <section id="contact" className="py-24 bg-background" data-testid="section-contact">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-primary font-semibold tracking-[0.2em] uppercase text-sm mb-4 block">Get In Touch</span>
          <h2 className="text-3xl md:text-5xl font-serif text-foreground mb-6">Book Your Visit</h2>
          <p className="text-muted-foreground text-lg">
            Schedule your appointment today or drop by to speak with one of our specialists.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20">
          
          {/* Left: Info & Map */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="w-full lg:w-5/12 space-y-10"
          >
            <div>
              <h3 className="text-2xl font-serif text-foreground mb-6">Contact Information</h3>
              <ul className="space-y-6">
                {businessInfo.map((info, i) => (
                  <li key={i} className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0">
                      <info.icon className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="font-semibold text-foreground mb-1">{info.title}</div>
                      {info.link ? (
                        <a href={info.link} className="text-muted-foreground hover:text-primary transition-colors">
                          {info.detail}
                        </a>
                      ) : (
                        <div className="text-muted-foreground leading-relaxed">{info.detail}</div>
                      )}
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-2xl font-serif text-foreground mb-6 flex items-center gap-2">
                <Clock className="w-6 h-6 text-primary" /> Opening Hours
              </h3>
              <ul className="space-y-3 bg-card p-6 rounded-2xl border border-border">
                {hours.map((h, i) => (
                  <li key={i} className="flex justify-between items-center text-muted-foreground border-b border-border/50 last:border-0 pb-3 last:pb-0">
                    <span className="font-medium text-foreground">{h.day}</span>
                    <span>{h.time}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Map */}
            <div className="h-[250px] w-full rounded-2xl overflow-hidden border border-border shadow-sm">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2950.551694605151!2d-83.0076295!3d42.2982855!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x883b2d137782161b%3A0xc3f7a4a904d445c!2s2605%20Howard%20Ave%20Unit%204%2C%20Windsor%2C%20ON%20N8X%203W7%2C%20Canada!5e0!3m2!1sen!2sus!4v1700000000000!5m2!1sen!2sus" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen={false} 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                title="Google Maps Location"
              ></iframe>
            </div>
          </motion.div>

          {/* Right: Form */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="w-full lg:w-7/12"
          >
            <div className="bg-card p-8 md:p-10 rounded-3xl shadow-lg border border-border">
              <h3 className="text-2xl font-serif text-foreground mb-8">Request an Appointment</h3>
              
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <FormField
                      control={form.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Full Name</FormLabel>
                          <FormControl>
                            <input 
                              placeholder="Jane Doe" 
                              className="w-full flex h-12 rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50" 
                              {...field} 
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="phone"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Phone Number</FormLabel>
                          <FormControl>
                            <input 
                              placeholder="(519) 800-7524" 
                              type="tel"
                              className="w-full flex h-12 rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50"
                              {...field} 
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Email Address</FormLabel>
                          <FormControl>
                            <input 
                              placeholder="jane@example.com" 
                              type="email"
                              className="w-full flex h-12 rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50"
                              {...field} 
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="service"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Service Interested In</FormLabel>
                          <FormControl>
                            <select 
                              className="w-full flex h-12 rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50"
                              {...field}
                            >
                              <option value="" disabled>Select a service</option>
                              <option value="hair">Hair Styling / Color</option>
                              <option value="nails">Manicure / Pedicure</option>
                              <option value="spa">Facial / Spa</option>
                              <option value="waxing">Waxing / Threading</option>
                              <option value="massage">Massage</option>
                              <option value="other">Other / Consultation</option>
                            </select>
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  <FormField
                    control={form.control}
                    name="date"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Preferred Date (Optional)</FormLabel>
                        <FormControl>
                          <input 
                            type="date"
                            className="w-full flex h-12 rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50"
                            {...field} 
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Additional Notes</FormLabel>
                        <FormControl>
                          <textarea 
                            placeholder="Any specific requests or details..." 
                            className="w-full flex min-h-[120px] rounded-md border border-input bg-transparent px-3 py-2 text-sm shadow-sm transition-colors placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 resize-y"
                            {...field} 
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <button 
                    type="submit" 
                    className="w-full h-14 bg-primary text-primary-foreground rounded-md text-sm font-bold uppercase tracking-widest hover:bg-primary/90 transition-colors"
                  >
                    Send Request
                  </button>
                  <p className="text-xs text-center text-muted-foreground mt-4">
                    Submitting this form does not guarantee an appointment. We will call you to confirm your slot.
                  </p>
                </form>
              </Form>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
