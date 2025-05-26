"use client";

import { motion } from 'framer-motion';

export default function FooterSection() {
  return (
    <footer className="py-16 bg-amber-900 text-amber-200 relative overflow-hidden">
      {/* Decorative Batak patterns */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 right-0 h-8">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 20" preserveAspectRatio="none">
            <path d="M0,10 L20,0 L40,10 L60,0 L80,10 L100,0 L120,10 L140,0 L160,10 L180,0 L200,10 L220,0 L240,10 L260,0 L280,10 L300,0 L320,10 L340,0 L360,10 L380,0 L400,10 L420,0 L440,10 L460,0 L480,10 L500,0 L520,10 L540,0 L560,10 L580,0 L600,10 L620,0 L640,10 L660,0 L680,10 L700,0 L720,10 L740,0 L760,10 L780,0 L800,10 L820,0 L840,10 L860,0 L880,10 L900,0 L920,10 L940,0 L960,10 L980,0 L1000,10 V0 H0 Z" fill="#FFF" />
          </svg>
        </div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-10"
        >
          <h2 className="text-3xl md:text-4xl font-serif text-amber-200 mb-3">Joshua & Sipra</h2>
          <p className="text-amber-300/80">Thank you for sharing in our joy</p>
        </motion.div>
        
        {/* <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex justify-center space-x-4 mb-10"
        >
          <a href="#" className="w-10 h-10 rounded-full bg-amber-800 flex items-center justify-center hover:bg-amber-700 transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-instagram"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
          </a>
          <a href="#" className="w-10 h-10 rounded-full bg-amber-800 flex items-center justify-center hover:bg-amber-700 transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
          </a>
        </motion.div> */}
        
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-center text-amber-300/50 text-sm"
        >
          <p>© 2025 Joshua & Sipra Wedding</p>
        </motion.div>
      </div>
    </footer>
  );
}