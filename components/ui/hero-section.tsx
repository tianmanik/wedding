"use client";

import { useRef, useEffect } from 'react';
import { GuestInfo } from '@/lib/types';
import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';

interface HeroSectionProps {
  guestInfo: GuestInfo;
  onOpenInvitation: () => void;
  isOpen: boolean;
}

export default function HeroSection({ guestInfo, onOpenInvitation, isOpen }: HeroSectionProps) {
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    if (isOpen && audioRef.current) {
      audioRef.current.volume = 0.3;
      audioRef.current.play().catch(err => console.error("Audio couldn't play:", err));
    }
  }, [isOpen]);

  return (
    <div className={cn(
      "relative min-h-screen flex flex-col items-center justify-center px-6 overflow-hidden transition-all duration-1000",
      isOpen ? "opacity-0 pointer-events-none" : "opacity-100"
    )}>
      <div className="absolute inset-0 bg-black/50 z-10" />
      
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/70" />
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ 
            // backgroundImage: "url('https://images.pexels.com/photos/3532326/pexels-photo-3532326.jpeg?auto=compress&cs=tinysrgb&w=1600')",
            backgroundImage: "url('/images/latar.png')",
          }}
        />
      </div>

      <div className="absolute top-0 left-0 right-0 h-24 bg-gradient-to-b from-black/70 to-transparent z-10" />
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-black/70 to-transparent z-10" />
      
      {/* Decorative Batak pattern borders */}
      <div className="absolute top-8 left-8 right-8 bottom-8 border-2 border-amber-600/70 z-10 pointer-events-none" />
      <div className="absolute top-10 left-10 right-10 bottom-10 border border-amber-400/50 z-10 pointer-events-none" />
      
      <motion.div 
        className="relative z-20 text-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-amber-300 text-xl md:text-2xl font-serif mb-2">Pernikahan</h2>
        
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="my-6"
        >
          <h1 className="text-4xl md:text-6xl text-white font-serif mb-1">Joshua & Sipra</h1>
          <p className="text-amber-200 text-lg md:text-xl mt-2 mb-6">Dengan penuh suka cita, kami mengundang Anda hadir merayakan hari spesial kami</p>
        </motion.div>
        
        {guestInfo.name && (
          <motion.div 
            className="my-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            <p className="text-gray-100 text-lg mb-1">Dear,</p>
            <h3 className="text-white text-2xl md:text-3xl font-medium">{guestInfo.name}</h3>
            <p className="text-gray-200 text-sm mt-2">
              {guestInfo.event === "Resepsi" ? "You are invited to our reception" : "You are invited to our ceremony"}
            </p>
          </motion.div>
        )}
        
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.98 }}
          className="mt-8 mx-auto px-8 py-3 bg-amber-600 text-white rounded-md font-medium tracking-wide shadow-lg hover:bg-amber-700 transition-all duration-300 flex items-center justify-center group"
          onClick={onOpenInvitation}
        >
          <span>Buka Undangan</span>
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            className="h-5 w-5 ml-2 group-hover:translate-x-1 transition-transform duration-200" 
            fill="none" 
            viewBox="0 0 24 24" 
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </motion.button>

      </motion.div>

      <audio ref={audioRef} loop>
        <source src="https://assets.mixkit.co/music/preview/mixkit-spirit-meditation-strings-1559.mp3" type="audio/mpeg" />
        Your browser does not support the audio element.
      </audio>
    </div>
  );
}