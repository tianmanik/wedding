"use client";

import { motion } from 'framer-motion';
import { EventDetails } from '@/lib/types';
import { cn } from '@/lib/utils';

interface EventSectionProps {
  events: EventDetails[];
}

export default function EventSection({ events }: EventSectionProps) {
  return (
    <section id="events" className="py-24 bg-amber-900 text-white relative overflow-hidden">
      {/* Decorative Batak patterns */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 right-0 h-16">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 50" preserveAspectRatio="none">
            <path d="M0,0 L50,25 L100,0 L150,25 L200,0 L250,25 L300,0 L350,25 L400,0 L450,25 L500,0 L550,25 L600,0 L650,25 L700,0 L750,25 L800,0 L850,25 L900,0 L950,25 L1000,0 V50 H0 Z" fill="#FFF" />
          </svg>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-16 transform rotate-180">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 50" preserveAspectRatio="none">
            <path d="M0,0 L50,25 L100,0 L150,25 L200,0 L250,25 L300,0 L350,25 L400,0 L450,25 L500,0 L550,25 L600,0 L650,25 L700,0 L750,25 L800,0 L850,25 L900,0 L950,25 L1000,0 V50 H0 Z" fill="#FFF" />
          </svg>
        </div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-serif text-amber-200 mb-3">Rangkaian Acara</h2>
          <p className="text-amber-100/80 max-w-2xl mx-auto">Kami merasa terhormat mengundang Anda bergabung merayakan pernikahan kami.</p>
          <div className="w-24 h-1 bg-amber-400 mx-auto mt-6"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 max-w-5xl mx-auto">
          {events.map((event, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className={cn(
                "bg-amber-800/50 backdrop-blur-sm rounded-lg p-8 border border-amber-700/50 shadow-xl",
                "hover:shadow-amber-900/20 hover:-translate-y-1 transition-all duration-300"
              )}
            >
              <div className="mb-6 w-16 h-16 rounded-full bg-amber-200 flex items-center justify-center mx-auto">
                {index === 0 ? (
                  <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-amber-800"><path d="M2 4a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-3.8a2 2 0 0 0-1.37.54L8 22.88a.6.6 0 0 1-1-.31L6.17 20a2 2 0 0 0-1.87-1.3H4a2 2 0 0 1-2-2V4Z"/><path d="M6 8h.01"/><path d="M12 8h.01"/><path d="M18 8h.01"/><path d="M12 12h.01"/><path d="M18 12h.01"/><path d="M6 16h.01"/></svg>
                ) : (
                  <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-amber-800"><path d="M9 18V5l12-2v13"/><path d="M6 11h3"/><path d="M6 15h3"/><circle cx="3" cy="16" r="3"/><circle cx="16" cy="16" r="3"/></svg>
                )}
              </div>
              
              <h3 className="text-xl md:text-2xl font-serif text-center text-amber-200 mb-3">{event.title}</h3>
              
              <div className="mb-4 flex justify-center gap-4 text-amber-100/80">
                <div className="flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2 text-amber-400"><rect width="18" height="18" x="3" y="4" rx="2" ry="2"/><line x1="16" x2="16" y1="2" y2="6"/><line x1="8" x2="8" y1="2" y2="6"/><line x1="3" x2="21" y1="10" y2="10"/></svg>
                  <span>{event.date}</span>
                </div>
                <div className="flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2 text-amber-400"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
                  <span>{event.time}</span>
                </div>
              </div>
              
              <div className="mb-6 text-center">
                <div className="flex items-center justify-center mb-2">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2 text-amber-400"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>
                  <span className="text-amber-100">{event.location}</span>
                </div>
              </div>
              
              <div className="text-center">
                <a 
                  href={event.mapUrl} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-4 py-2 bg-amber-600 text-white rounded hover:bg-amber-700 transition-colors duration-300"
                >
                  <span>View Location</span>
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="ml-2"><path d="M15 3h6v6"/><path d="M10 14 21 3"/><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/></svg>
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}