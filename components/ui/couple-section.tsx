"use client";

import { motion } from 'framer-motion';
import Image from 'next/image';
import { cn } from '@/lib/utils';

export default function CoupleSection() {
  return (
    <section id="couple" className="py-24 bg-gradient-to-b from-amber-50 to-white relative">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-32 h-32 opacity-10">
        <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
          <path d="M0,50 L50,0 L100,50 L50,100 Z" fill="#A52A2A"/>
        </svg>
      </div>
      <div className="absolute bottom-0 right-0 w-40 h-40 opacity-10">
        <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
          <path d="M0,0 L100,0 L100,100 L0,100 Z M10,10 L10,90 L90,90 L90,10 Z" fill="#A52A2A"/>
        </svg>
      </div>
      
      <div className="container mx-auto px-6 relative">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-serif text-amber-800 mb-3">Mempelai</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">Kami merasa diberkati dapat merayakan cinta dan komitmen kami sesuai adat istiadat Batak.</p>
          <div className="w-24 h-1 bg-amber-600 mx-auto mt-6"></div>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 max-w-5xl mx-auto">
          {/* Bride */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <div className="relative w-48 h-48 md:w-64 md:h-64 mx-auto mb-6 overflow-hidden">
              <div className={cn(
                "absolute inset-0 rounded-full overflow-hidden border-4 border-amber-600",
                "before:absolute before:inset-0 before:bg-gradient-to-br before:from-amber-100/30 before:to-transparent before:z-10"
              )}>
                <Image 
                  src="/wedding/images/cowo.jpeg" 
                  alt="Bride" 
                  fill
                  className="object-cover" 
                />
              </div>
            </div>
            
            <h3 className="text-2xl md:text-3xl font-serif text-amber-800 mb-2">Joshua Sabam Agustin Manik</h3>
            <p className="text-gray-700 mb-4">Putra Dari</p>
            <p className="text-gray-800 font-medium">Tn. & Ny. Manik</p>
            
            <div className="flex justify-center gap-4 mt-4">
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-amber-700 hover:text-amber-900 transition-colors">
                <span className="sr-only">Instagram</span>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-instagram"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
              </a>
            </div>
          </motion.div>
          
          {/* Groom */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <div className="relative w-48 h-48 md:w-64 md:h-64 mx-auto mb-6 overflow-hidden">
              <div className={cn(
                "absolute inset-0 rounded-full overflow-hidden border-4 border-amber-600",
                "before:absolute before:inset-0 before:bg-gradient-to-br before:from-amber-100/30 before:to-transparent before:z-10"
              )}>
                <Image 
                  src="/wedding/images/cewe.jpeg" 
                  alt="Groom" 
                  fill
                  className="object-cover" 
                />
              </div>
            </div>
            
            <h3 className="text-2xl md:text-3xl font-serif text-amber-800 mb-2">Sipra Rahayu Hutagalung</h3>
            <p className="text-gray-700 mb-4">Putri Dari</p>
            <p className="text-gray-800 font-medium">Tn. & Ny. Hutagalung</p>
            
            <div className="flex justify-center gap-4 mt-4">
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-amber-700 hover:text-amber-900 transition-colors">
                <span className="sr-only">Instagram</span>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-instagram"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
              </a>
            </div>
          </motion.div>
        </div>

        <div className="mt-20 max-w-3xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-lg text-gray-700 italic mb-6">
              "Gabe-gabe na uli Debata do hasangapon, hagabeon, hamoraon."
            </p>
            <p className="text-sm text-gray-600 mb-8">
              (Berkat-berkat yang indah dari Tuhan adalah kehormatan, keturunan, dan kekayaan)
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}