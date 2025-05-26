"use client";

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger, DialogClose } from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { toast } from 'sonner';

export default function GiftSection() {
  const [isCopied, setIsCopied] = useState(false);
  
  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    setIsCopied(true);
    toast.success("Account number copied!");
    
    setTimeout(() => {
      setIsCopied(false);
    }, 2000);
  };
  
  return (
    <section id="gift" className="py-24 bg-amber-50 relative">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-32 h-32 opacity-10">
        <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
          <path d="M0,50 L50,0 L100,50 L50,100 Z" fill="#A52A2A"/>
        </svg>
      </div>
      <div className="absolute bottom-0 left-0 w-40 h-40 opacity-10">
        <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
          <path d="M0,0 L100,0 L100,100 L0,100 Z M10,10 L10,90 L90,90 L90,10 Z" fill="#A52A2A"/>
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
          <h2 className="text-3xl md:text-4xl font-serif text-amber-800 mb-3">Hadiah Pernikahan</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">Kehadiran Anda adalah hadiah terindah bagi kami. Namun, jika Anda ingin memberi kado, silakan melalui opsi di bawah ini.</p>
          <div className="w-24 h-1 bg-amber-600 mx-auto mt-6"></div>
        </motion.div>
        
        <div className="max-w-md mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-white p-8 rounded-lg shadow-lg border border-amber-200"
          >
            <div className="w-20 h-20 mx-auto mb-6 bg-amber-100 rounded-full flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-amber-800"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"/><path d="M21 12H3"/><path d="M12 3v18"/></svg>
            </div>
            
            <h3 className="text-xl font-serif text-amber-800 mb-4">Hadiah Digital</h3>
            <p className="text-gray-600 mb-6">Jika Anda ingin mengirimkan hadiah, Anda dapat melakukannya melalui rekening berikut:</p>
            
            <Dialog>
              <DialogTrigger asChild>
                <Button className="bg-amber-600 hover:bg-amber-700 text-white">Tambilkan Detail Bank </Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-md">
                <DialogHeader>
                  <DialogTitle className="text-center text-xl text-amber-800 font-serif">Detail Akun Bank</DialogTitle>
                  <DialogDescription className="text-center text-gray-600">
                    Hantarkan doa serta restu Anda lewat rekening berikut:
                  </DialogDescription>
                </DialogHeader>
                
                <div className="p-4 border border-amber-100 rounded-lg bg-amber-50 mb-4">
                  <div className="mb-4">
                    <p className="text-gray-500 text-sm mb-1">Nama Bank</p>
                    <p className="text-gray-800 font-medium">Bank Mandiri</p>
                  </div>
                  
                  <div className="mb-4">
                    <p className="text-gray-500 text-sm mb-1">Nama Akun</p>
                    <p className="text-gray-800 font-medium">Joshua Sabam Agustin Manik</p>
                  </div>
                  
                  <div>
                    <p className="text-gray-500 text-sm mb-1">Nomor Rekening</p>
                    <div className="flex items-center">
                      <Input value="1234567890" readOnly className="bg-white border-amber-200 text-gray-800" />
                      <Button 
                        variant="outline" 
                        size="sm" 
                        onClick={() => copyToClipboard("1234567890")}
                        className="ml-2 border-amber-300"
                      >
                        {isCopied ? (
                          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-green-600"><path d="M20 6 9 17l-5-5"/></svg>
                        ) : (
                          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="14" height="14" x="8" y="8" rx="2" ry="2"/><path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"/></svg>
                        )}
                      </Button>
                    </div>
                  </div>
                </div>
                
                <div className="text-center text-gray-600 text-sm italic">
                  Terima kasih atas kebaikan dan kemurahan hati Anda.
                </div>
                
                <DialogClose asChild>
                  <Button variant="outline" className="mt-2 border-amber-200 text-amber-800 hover:bg-amber-50">Close</Button>
                </DialogClose>
              </DialogContent>
            </Dialog>
          </motion.div>
        </div>
      </div>
    </section>
  );
}