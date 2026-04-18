import React, { useState, useEffect } from 'react';
import { Tab } from '../types';
import { X, Zap, Target, Sparkles, PartyPopper } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { cn } from '../lib/utils';

interface ScanProps {
  onNavigate: (tab: Tab) => void;
}

export default function Scan({ onNavigate }: ScanProps) {
  const [isScanned, setIsScanned] = useState(false);

  useEffect(() => {
    // Simulate finding a QR code after 2 seconds
    const timer = setTimeout(() => {
      setIsScanned(true);
    }, 2500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="fixed inset-0 z-[100] bg-zinc-900 overflow-hidden text-white">
      {/* Header Overlay */}
      <header className="absolute top-0 w-full z-50 flex justify-between items-center px-6 h-16">
        <button 
          onClick={() => onNavigate('home')}
          className="w-10 h-10 flex items-center justify-center rounded-full bg-black/20 backdrop-blur-md active:scale-95 transition-transform"
        >
          <X size={24} />
        </button>
        <h1 className="headline font-bold text-lg tracking-tight drop-shadow-md">Ecocupon Scanner</h1>
        <div className="w-10 h-10" />
      </header>

      {/* Camera Viewfinder (Simulated) */}
      <div className="absolute inset-0 z-0">
        <img 
          alt="Simulated camera feed" 
          src="https://picsum.photos/seed/market/1080/1920?blur=4" 
          className="w-full h-full object-cover opacity-60"
          referrerPolicy="no-referrer"
        />
        
        {/* Scanner Overlay */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div className="relative w-72 h-72 border-2 border-primary-fixed/30 rounded-[2.5rem]">
            {/* Corner Accents */}
            <div className="absolute -top-1 -left-1 w-12 h-12 border-t-4 border-l-4 border-primary-fixed rounded-tl-[2.5rem]" />
            <div className="absolute -top-1 -right-1 w-12 h-12 border-t-4 border-r-4 border-primary-fixed rounded-tr-[2.5rem]" />
            <div className="absolute -bottom-1 -left-1 w-12 h-12 border-b-4 border-l-4 border-primary-fixed rounded-bl-[2.5rem]" />
            <div className="absolute -bottom-1 -right-1 w-12 h-12 border-b-4 border-r-4 border-primary-fixed rounded-br-[2.5rem]" />
            
            {/* Scanning Line */}
            <div className="scanner-line absolute left-4 right-4 z-10 opacity-70" />
            
            {/* Floating Target Icon */}
            <div className="absolute inset-0 flex items-center justify-center opacity-20">
              <Target size={48} className="animate-pulse" />
            </div>
          </div>
        </div>
      </div>

      {/* Interface Layer */}
      <main className="relative z-10 flex flex-col items-center justify-end h-full pb-12 px-6">
        <button className="mb-12 w-14 h-14 rounded-full bg-white/10 backdrop-blur-xl flex items-center justify-center text-white border border-white/20 active:scale-95 duration-200">
          <Zap size={24} className={cn("transition-colors", true ? "fill-white" : "fill-none")} />
        </button>

        <div className="w-full max-w-md bg-white/10 backdrop-blur-2xl p-6 rounded-[2.5rem] border border-white/20 flex flex-col items-center gap-4 text-center">
          <div className="w-12 h-1.5 bg-white/30 rounded-full mb-2" />
          <div className="p-3 bg-primary-fixed/20 rounded-full">
            <Target size={24} className="text-primary-fixed" />
          </div>
          <p className="font-semibold text-lg leading-snug px-4 headline">
            Apunta al código QR para recibir tu beneficio
          </p>
          <p className="text-white/60 text-sm px-6 font-medium">
            Busca los códigos Ecocupon en tus productos locales favoritos para ganar descuentos.
          </p>
        </div>
      </main>

      {/* Success Modal */}
      <AnimatePresence>
        {isScanned && (
          <div className="fixed inset-0 z-[110] flex items-center justify-center p-6 bg-black/60 backdrop-blur-sm">
            <motion.div 
              initial={{ scale: 0.9, opacity: 0, y: 50 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 50 }}
              className="bg-surface-container-lowest w-full max-w-sm rounded-[2.5rem] overflow-hidden shadow-2xl text-on-surface"
            >
              <div className="h-48 bg-gradient-to-br from-primary to-primary-container flex items-center justify-center relative">
                <img 
                  src="https://picsum.photos/seed/basket/600/400?blur=2" 
                  className="absolute inset-0 w-full h-full object-cover opacity-20"
                  referrerPolicy="no-referrer"
                />
                <div className="relative flex flex-col items-center text-white">
                  <motion.div 
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.3, type: 'spring' }}
                    className="w-20 h-20 bg-white/20 backdrop-blur-xl rounded-full flex items-center justify-center mb-3 border border-white/30"
                  >
                    <PartyPopper size={40} className="text-white" />
                  </motion.div>
                  <span className="font-headline font-extrabold text-3xl tracking-tight">15% OFF</span>
                </div>
              </div>

              <div className="p-8 text-center">
                <h2 className="font-headline font-bold text-2xl text-on-surface mb-2">¡Felicidades!</h2>
                <p className="text-on-surface-variant font-medium text-sm mb-8 px-2 opacity-80">
                  Tienes un 15% en tu próxima canasta de productos orgánicos. Tu compromiso con el planeta rinde frutos.
                </p>
                <div className="flex flex-col gap-3">
                  <button 
                    onClick={() => onNavigate('checkout')}
                    className="w-full bg-gradient-to-r from-primary to-primary-container text-white font-bold py-4 rounded-xl shadow-lg shadow-primary/20 active:scale-[0.98] transition-all"
                  >
                    Canjear Beneficio
                  </button>
                  <button 
                    onClick={() => setIsScanned(false)}
                    className="w-full bg-surface-container-highest text-on-surface font-semibold py-4 rounded-xl active:scale-95 transition-colors"
                  >
                    Guardar para más tarde
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
