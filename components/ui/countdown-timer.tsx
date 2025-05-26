"use client";

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { CountdownResult } from '@/lib/types';

interface CountdownTimerProps {
  targetDate: Date;
}

export default function CountdownTimer({ targetDate }: CountdownTimerProps) {
  const [countdown, setCountdown] = useState<CountdownResult>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });
  
  useEffect(() => {
    const calculateTimeLeft = () => {
      const difference = +targetDate - +new Date();
      
      if (difference > 0) {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
        const minutes = Math.floor((difference / 1000 / 60) % 60);
        const seconds = Math.floor((difference / 1000) % 60);
        
        setCountdown({ days, hours, minutes, seconds });
      }
    };
    
    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);
    
    return () => clearInterval(timer);
  }, [targetDate]);
  
  const timeUnits = [
    { value: countdown.days, label: 'Days' },
    { value: countdown.hours, label: 'Hours' },
    { value: countdown.minutes, label: 'Minutes' },
    { value: countdown.seconds, label: 'Seconds' }
  ];
  
  return (
    <section className="py-16 bg-amber-50 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-2 bg-amber-800 opacity-20"></div>
      <div className="absolute bottom-0 left-0 w-full h-2 bg-amber-800 opacity-20"></div>
      
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-10"
        >
          <h2 className="text-2xl md:text-3xl font-serif text-amber-800">Counting Down To Our Special Day</h2>
          <div className="w-20 h-1 bg-amber-600 mx-auto mt-4"></div>
        </motion.div>
        
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {timeUnits.map((unit, index) => (
              <motion.div
                key={unit.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="bg-white rounded-lg shadow-lg p-6 text-center relative overflow-hidden"
              >
                <div className="absolute top-0 left-0 w-full h-1 bg-amber-600"></div>
                <h3 className="text-3xl md:text-4xl font-bold text-amber-800">{unit.value}</h3>
                <p className="text-gray-600 text-sm md:text-base mt-2">{unit.label}</p>
                
                {/* Decorative corner */}
                <div className="absolute bottom-0 right-0 w-8 h-8 bg-amber-100 rounded-tl-lg flex items-center justify-center">
                  <div className="w-4 h-4 bg-amber-800/20 rounded-sm transform rotate-45"></div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}