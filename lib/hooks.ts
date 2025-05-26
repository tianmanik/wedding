"use client";

import { useSearchParams } from 'next/navigation';
import { useCallback, useEffect, useState } from 'react';
import { GuestInfo, CountdownResult } from '@/lib/types';

export function useGuestInfo(): GuestInfo {
  const searchParams = useSearchParams();
  
  return {
    name:  searchParams?.get('name')  ?? "",
    event: searchParams?.get('event') ?? "Resepsi",
    rsvp:  searchParams?.get('rsvp')  ?? "0"
  };
}

export function useCountdown(targetDate: Date): CountdownResult {
  const calculateTimeLeft = useCallback(() => {
    const difference = +targetDate - +new Date();
    
    if (difference > 0) {
      return {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60)
      };
    }
    
    return {
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0
    };
  }, [targetDate]);
  
  const [timeLeft, setTimeLeft] = useState<CountdownResult>(calculateTimeLeft());
  
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
    
    return () => clearInterval(timer);
  }, [calculateTimeLeft]);
  
  return timeLeft;
}