"use client";

import { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

const images = [
  { src: "/moments/1.JPG", alt: "Couple image 1" },
  { src: "/moments/2.JPG", alt: "Couple image 2" },
  { src: "/moments/3.JPG", alt: "Couple image 3" },
  { src: "/moments/4.JPG", alt: "Couple image 4" },
  { src: "/moments/5.JPG", alt: "Couple image 5" },
  { src: "/moments/6.JPG", alt: "Couple image 6" },
  { src: "/moments/7.JPG", alt: "Couple image 7" },
  { src: "/moments/8.JPG", alt: "Couple image 8" },
  { src: "/moments/9.JPG", alt: "Couple image 9" },
  { src: "/moments/10.JPG", alt: "Couple image 10" }
];

function GalleryModal({ src, alt, onClose, onPrev, onNext }: { src: string; alt: string; onClose: () => void; onPrev: () => void; onNext: () => void; }) {
  const [mounted, setMounted] = useState(false);
  useEffect(() => { setMounted(true); return () => setMounted(false); }, []);
  if (!mounted) return null;

  return createPortal(
    <AnimatePresence>
      <motion.div
        key="overlay"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
        className="fixed inset-0 bg-black/90 z-[9999] flex items-center justify-center p-4"
        onClick={onClose}
      >
        <button onClick={(e) => { e.stopPropagation(); onClose(); }} className="absolute top-4 right-4 z-50 text-white bg-black/50 rounded-full p-2 hover:bg-black/70 transition-colors duration-300">×</button>
        <button onClick={(e) => { e.stopPropagation(); onPrev(); }} className="absolute left-4 top-1/2 transform -translate-y-1/2 z-50 text-white bg-black/50 rounded-full p-2 hover:bg-black/70 transition-colors duration-300">‹</button>
        <button onClick={(e) => { e.stopPropagation(); onNext(); }} className="absolute right-4 top-1/2 transform -translate-y-1/2 z-50 text-white bg-black/50 rounded-full p-2 hover:bg-black/70 transition-colors duration-300">›</button>
        <motion.div key={src} initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.8 }} transition={{ duration: 0.3 }} className="relative max-w-4xl max-h-[90vh] w-auto h-auto" onClick={(e) => e.stopPropagation()}>
          <Image src={src} alt={alt} width={1600} height={1200} className="object-contain max-h-[90vh] w-auto h-auto" priority />
        </motion.div>
      </motion.div>
    </AnimatePresence>,
    document.body
  );
}

export default function GallerySection() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const openModal = (index: number) => {
    setSelectedImage(index);
    document.body.style.overflow = "hidden";
  };
  const closeModal = () => {
    setSelectedImage(null);
    document.body.style.overflow = "auto";
  };
  const navigateImage = (dir: 'prev' | 'next') => {
    setSelectedImage((prev) => {
      if (prev === null) return null;
      return dir === 'prev'
        ? (prev + images.length - 1) % images.length
        : (prev + 1) % images.length;
    });
  };

  return (
    <section id="gallery" className="py-24 bg-amber-800 relative">
      <div className="absolute inset-0 bg-opacity-10 bg-black"></div>
      <div className="container mx-auto px-6 relative z-10">
        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-serif text-amber-100 mb-3">Momen Spesial Kami</h2>
          <p className="text-amber-200/80 max-w-2xl mx-auto">“Setiap senyum dan tatap merekam kisah cinta kami.”</p>
          <div className="w-24 h-1 bg-amber-300 mx-auto mt-6"></div>
        </motion.div>

        <div className="flex space-x-4 overflow-x-auto py-4 snap-x snap-mandatory">
          {images.map((image, index) => (
            <motion.div key={index} initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: index * 0.1 }} whileHover={{ scale: 1.02 }} className={cn("relative cursor-pointer overflow-hidden rounded-lg","min-w-[250px] h-[250px] flex-shrink-0 snap-center","after:absolute after:inset-0 after:bg-black/20 after:z-10","group")} onClick={() => openModal(index)}>
              <Image src={image.src} alt={image.alt} fill sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw" className="object-cover transition-transform duration-700 group-hover:scale-110" />
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20">
                <div className="bg-amber-900/80 px-4 py-2 rounded-full">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-amber-200">
                    <circle cx="11" cy="11" r="8" />
                    <path d="m21 21-4.3-4.3" />
                    <path d="M11 8v6" />
                    <path d="M8 11h6" />
                  </svg>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {selectedImage !== null && (
        <GalleryModal src={images[selectedImage].src} alt={images[selectedImage].alt} onClose={closeModal} onPrev={() => navigateImage('prev')} onNext={() => navigateImage('next')} />
      )}
    </section>
  );
}
