"use client";

import { useState } from 'react';
import { motion } from 'framer-motion';
import { GuestInfo } from '@/lib/types';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import * as z from 'zod';
import { Button } from '@/components/ui/button';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Textarea } from '@/components/ui/textarea';
import { toast } from 'sonner';

interface RSVPSectionProps {
  guestInfo: GuestInfo;
}

const formSchema = z.object({
  name: z.string().min(3, {
    message: "Name must be at least 3 characters.",
  }),
  attendance: z.enum(["attending", "not-attending"], {
    required_error: "Please select if you're attending.",
  }),
  numberOfGuests: z.string().refine((val) => !isNaN(Number(val)) && Number(val) >= 1 && Number(val) <= 10, {
    message: "Number of guests must be between 1 and 10",
  }),
  message: z.string().optional(),
});

export default function RSVPSection({ guestInfo }: RSVPSectionProps) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: guestInfo.name || "",
      attendance: "attending",
      numberOfGuests: "1",
      message: "",
    },
  });
  
  function onSubmit(values: z.infer<typeof formSchema>) {
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      console.log(values);
      setIsSubmitting(false);
      setIsSubmitted(true);
      toast.success("Thank you for your response!");
    }, 1500);
  }
  
  return (
    <section id="rsvp" className="py-24 bg-white relative">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-32 h-32 opacity-10">
        <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
          <path d="M0,0 L100,0 L100,100 L0,100 Z M20,20 L20,80 L80,80 L80,20 Z" fill="#A52A2A"/>
        </svg>
      </div>
      <div className="absolute bottom-0 left-0 w-40 h-40 opacity-10">
        <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
          <path d="M0,50 L50,0 L100,50 L50,100 Z" fill="#A52A2A"/>
        </svg>
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-serif text-amber-800 mb-3">RSVP</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">We would be honored to have your presence at our wedding. Please let us know if you'll be able to join us.</p>
          <div className="w-24 h-1 bg-amber-600 mx-auto mt-6"></div>
        </motion.div>
        
        <div className="max-w-2xl mx-auto">
          {!isSubmitted ? (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 bg-amber-50 p-8 rounded-lg border border-amber-100 shadow-md">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-amber-900">Your Name</FormLabel>
                        <FormControl>
                          <Input placeholder="Enter your full name" {...field} className="bg-white border-amber-200 focus-visible:ring-amber-500" />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="attendance"
                    render={({ field }) => (
                      <FormItem className="space-y-3">
                        <FormLabel className="text-amber-900">Will you attend?</FormLabel>
                        <FormControl>
                          <RadioGroup
                            onValueChange={field.onChange}
                            defaultValue={field.value}
                            className="flex flex-col space-y-1"
                          >
                            <div className="flex items-center space-x-2">
                              <RadioGroupItem value="attending" id="attending" className="text-amber-600" />
                              <label htmlFor="attending" className="text-gray-700 cursor-pointer">Joyfully Attending</label>
                            </div>
                            <div className="flex items-center space-x-2">
                              <RadioGroupItem value="not-attending" id="not-attending" className="text-amber-600" />
                              <label htmlFor="not-attending" className="text-gray-700 cursor-pointer">Regretfully Declining</label>
                            </div>
                          </RadioGroup>
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="numberOfGuests"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-amber-900">Number of Guests</FormLabel>
                        <FormControl>
                          <Input
                            type="number"
                            min="1"
                            max="10"
                            {...field}
                            className="bg-white border-amber-200 focus-visible:ring-amber-500"
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
                        <FormLabel className="text-amber-900">Message for the Couple (Optional)</FormLabel>
                        <FormControl>
                          <Textarea
                            placeholder="Write your wishes or message here..."
                            {...field}
                            className="bg-white border-amber-200 focus-visible:ring-amber-500"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-amber-600 hover:bg-amber-700 text-white"
                  >
                    {isSubmitting ? (
                      <>
                        <svg className="animate-spin -ml-1 mr-3 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Submitting...
                      </>
                    ) : (
                      "Send RSVP"
                    )}
                  </Button>
                </form>
              </Form>
            </motion.div>
          ) : (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="text-center bg-amber-50 p-8 rounded-lg border border-amber-100 shadow-md"
            >
              <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="text-2xl font-serif text-amber-800 mb-4">Thank You!</h3>
              <p className="text-gray-700 mb-6">Your RSVP has been submitted. We look forward to celebrating with you.</p>
              <Button
                onClick={() => setIsSubmitted(false)}
                variant="outline"
                className="border-amber-600 text-amber-800 hover:bg-amber-100"
              >
                Edit Response
              </Button>
            </motion.div>
          )}
        </div>
      </div>
    </section>
  );
}