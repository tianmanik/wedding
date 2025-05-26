"use client";

import { useState, useEffect } from 'react';
import { useGuestInfo } from '@/lib/hooks';
import HeroSection from '@/components/ui/hero-section';
import CoupleSection from '@/components/ui/couple-section';
import CountdownTimer from '@/components/ui/countdown-timer';
import EventSection from '@/components/ui/event-section';
import GallerySection from '@/components/ui/gallery-section';
import RSVPSection from '@/components/ui/rsvp-section';
import GiftSection from '@/components/ui/gift-section';
import FooterSection from '@/components/ui/footer-section';
import { Toaster } from '@/components/ui/toaster';
import { EventDetails } from '@/lib/types';

// Tanggal Pernikahan (contoh: 15 Oktober 2025)
const weddingDate = new Date('2025-06-28T09:00:00');

// Detail Acara
const events: EventDetails[] = [
  {
    title: "Pemberkatan",
    date: "28 Juni 2025",
    time: "09:00 - 11:00 WIB",
    location: "GBI ICC Pekanbaru",
    mapUrl: "https://maps.app.goo.gl/vAUwAwJQ6FBiuFoN7"
  },
  {
    title: "Resepsi Pernikahan",
    date: "28 Juni 2025",
    time: "11:00 - Selesai",
    location: "Gedung Sopo Godang Rajawali",
    mapUrl: "https://maps.app.goo.gl/DtwHFcMiBHQByWn68"
  }
];

export default function Home() {
  const guestInfo = useGuestInfo();
  const [isInvitationOpen, setIsInvitationOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  
  useEffect(() => {
    // Simulasi loading
    setTimeout(() => {
      setIsLoading(false);
    }, 1500);
    
    // Jika parameter RSVP diatur, otomatis buka undangan
    if (guestInfo.rsvp === "1") {
      setIsInvitationOpen(true);
    }
  }, [guestInfo.rsvp]);
  
  const handleOpenInvitation = () => {
    setIsInvitationOpen(true);
    // Scroll ke bagian couple setelah membuka
    setTimeout(() => {
      document.getElementById('couple')?.scrollIntoView({ behavior: 'smooth' });
    }, 500);
  };
  
  if (isLoading) {
    return (
      <div className="fixed inset-0 bg-amber-900 flex items-center justify-center z-50">
        <div className="text-center">
          <div className="w-20 h-20 mb-4 relative mx-auto">
            <div className="absolute inset-0 rounded-full border-4 border-t-amber-200 border-r-amber-200/30 border-b-amber-200/10 border-l-amber-200/60 animate-spin"></div>
          </div>
          <h2 className="text-2xl font-serif text-amber-200 animate-pulse">Memuat Undangan</h2>
        </div>
      </div>
    );
  }
  
  return (
    <main className="relative">
      <Toaster />
      
      {/* Bagian Hero dengan Cover */}
      <HeroSection 
        guestInfo={guestInfo}
        onOpenInvitation={handleOpenInvitation}
        isOpen={isInvitationOpen}
      />
      
      {/* Konten Utama (Ditampilkan setelah membuka undangan) */}
      <div className={`transition-all duration-1000 ${isInvitationOpen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-24'}`}>
        <CoupleSection />
        <CountdownTimer targetDate={weddingDate} />
        <EventSection events={events} />
        <GallerySection />
        <GiftSection />
        <FooterSection />
      </div>
      
      {/* Navigasi mobile */}
      {isInvitationOpen && (
        <div className="fixed bottom-0 left-0 right-0 bg-amber-900 text-white py-2 px-4 z-40 md:hidden">
          <div className="flex justify-between items-center">
            <a href="#couple" className="text-amber-200 p-2 text-sm">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mx-auto mb-1"><path d="M20 17.5V14a2 2 0 0 0-2-2h-2.586a1 1 0 0 1-.707-.293l-2.914-2.914a1 1 0 0 1-.293-.707V6a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v3.586a1 1 0 0 1-.293.707L4 11"/><path d="M15 17.5v-1a2 2 0 0 1 2-2h.5"/><path d="M20 14a5 5 0 0 0-5 5v3H5v-3a5 5 0 0 1 5-5"/><circle cx="9" cy="6" r="1"/><path d="M12 6a1 1 0 1 1 2 0v3.5"/></svg>
              <span className="block text-center text-xs">Mempelai</span>
            </a>
            <a href="#events" className="text-amber-200 p-2 text-sm">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mx-auto mb-1"><rect width="18" height="18" x="3" y="4" rx="2" ry="2"/><line x1="16" x2="16" y1="2" y2="6"/><line x1="8" x2="8" y1="2" y2="6"/><line x1="3" x2="21" y1="10" y2="10"/></svg>
              <span className="block text-center text-xs">Acara</span>
            </a>
            <a href="#gallery" className="text-amber-200 p-2 text-sm">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mx-auto mb-1"><path d="M15 2H9a1 1 0 0 0-1 1v2c0 .6.4 1 1 1h6c.6 0 1-.4 1-1V3c0-.6-.4-1-1-1Z"/><path d="M8 4H6a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2M16 4h2a2 2 0 0 1 2 2v2"/><path d="M21 15.5V18a2 2 0 0 1-2 2h-2"/><path d="M8 18a2 2 0 0 1-2-2V6"/></svg>
              <span className="block text-center text-xs">Galeri</span>
            </a>
            <a href="#gift" className="text-amber-200 p-2 text-sm">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mx-auto mb-1"><rect width="18" height="16" x="3" y="5" rx="2"/><line x1="3" x2="21" y1="10" y2="10"/><line x1="12" x2="12" y1="10" y2="8"/></svg>
              <span className="block text-center text-xs">Hadiah</span>
            </a>
          </div>
        </div>
      )}
    </main>
  );
}