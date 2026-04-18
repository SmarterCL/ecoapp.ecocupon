import React, { useState } from 'react';
import { Tab } from '../types';
import { MapPin, Phone, CreditCard, ShieldCheck, Tag, CheckCircle2, Leaf, Box, ArrowRight } from 'lucide-react';
import { motion } from 'motion/react';
import { cn } from '../lib/utils';

interface CheckoutProps {
  onNavigate: (tab: Tab) => void;
}

export default function Checkout({ onNavigate }: CheckoutProps) {
  const [couponApplied, setCouponApplied] = useState(true);

  return (
    <div className="px-6 md:px-10 py-6 md:py-10 max-w-7xl mx-auto pb-40">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-12">
        
        {/* Left Column: Delivery & Items */}
        <div className="lg:col-span-7 space-y-10">
          {/* Delivery Section */}
          <section className="space-y-6">
            <div className="flex items-center justify-between px-2">
              <h2 className="text-2xl font-extrabold tracking-tight headline text-text-main">Entrega y Datos</h2>
              <button className="text-primary font-bold text-sm hover:underline">Editar</button>
            </div>
            
            <motion.div 
              initial={{ x: -20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              className="bg-white border border-border rounded-xl p-6 md:p-8 shadow-sm"
            >
              <div className="flex gap-4">
                <div className="w-12 h-12 bg-secondary rounded-lg flex items-center justify-center flex-shrink-0 shadow-sm border border-border">
                  <MapPin size={24} className="text-primary" />
                </div>
                <div className="flex-1">
                  <p className="text-[10px] font-bold text-text-muted tracking-[0.2em] uppercase mb-1">Dirección de despacho</p>
                  <p className="text-text-main font-bold headline text-lg">Av. Vitacura 2670, Depto 402</p>
                  <p className="text-text-muted font-medium opacity-80 mt-1">Las Condes, Región Metropolitana</p>
                </div>
              </div>
              
              <div className="grid grid-cols-2 gap-4 pt-6 mt-6 border-t border-border">
                <div>
                  <p className="text-[10px] font-bold text-text-muted tracking-widest uppercase mb-1">RUT</p>
                  <p className="text-text-main font-bold text-[15px]">18.442.339-K</p>
                </div>
                <div>
                  <p className="text-[10px] font-bold text-text-muted tracking-widest uppercase mb-1">Teléfono</p>
                  <p className="text-text-main font-bold text-[15px]">+56 9 8234 1120</p>
                </div>
              </div>
            </motion.div>
          </section>

          {/* Items Summary */}
          <section className="space-y-6">
            <h2 className="text-2xl font-extrabold tracking-tight headline text-text-main px-2">Tu Pedido</h2>
            <div className="space-y-4">
              {[
                { 
                  name: 'EcoCleaner Multiuso v2', 
                  price: 12990, 
                  variant: 'Fragancia Bosque Nativo', 
                  tag: 'Refillable',
                  img: 'https://picsum.photos/seed/cleaner/200/200'
                },
                { 
                  name: 'Bento Box Bamboo Pro', 
                  price: 24500, 
                  variant: 'Material 100% Biodegradable', 
                  tag: 'Eco-Choice',
                  img: 'https://picsum.photos/seed/bento/200/200'
                }
              ].map((item, idx) => (
                <motion.div 
                  key={idx}
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: idx * 0.1 }}
                  className="coupon-ticket p-5 flex items-center gap-5 transition-shadow hover:shadow-md"
                >
                  <div className="w-20 h-20 rounded-lg overflow-hidden bg-surface-container shrink-0 border border-border/50">
                    <img src={item.img} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                  </div>
                  <div className="flex-1 min-w-0 pr-4">
                    <div className="flex justify-between items-start mb-1">
                      <h3 className="font-bold text-text-main headline truncate pr-2 text-lg">{item.name}</h3>
                      <span className="font-black text-primary tracking-tighter shrink-0 text-lg">${item.price.toLocaleString('es-CL')}</span>
                    </div>
                    <p className="text-[13px] text-text-muted italic font-medium opacity-80 truncate">{item.variant}</p>
                    <div className="flex items-center gap-2 mt-3">
                      <span className="text-[10px] bg-accent text-white px-2 py-0.5 rounded font-bold uppercase tracking-[0.1em]">
                        {item.tag}
                      </span>
                      <span className="text-[11px] text-text-muted font-bold uppercase tracking-widest ml-auto">Cant: 1</span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </section>
        </div>

        {/* Right Column: Totals & Summary */}
        <div className="lg:col-span-5">
          <div className="sticky top-28 space-y-8">
            {/* Ecocupon Application */}
            <section className="bg-text-main text-white rounded-2xl p-8 shadow-xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary-light/10 rounded-full -mr-16 -mt-16 blur-2xl" />
              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-6">
                  <Tag size={20} className="text-accent" fill="currentColor" />
                  <h2 className="headline font-bold text-xl tracking-tight">Aplicar Ecocupon</h2>
                </div>
                <div className="flex gap-2 mb-6">
                  <input 
                    className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 placeholder-white/30 focus:ring-2 focus:ring-accent text-white font-medium transition-all" 
                    placeholder="Código de descuento" 
                    type="text" 
                  />
                  <button className="bg-accent text-white px-6 py-3 rounded-lg font-bold active:scale-95 transition-all shadow-lg shadow-accent/20">
                    Aplicar
                  </button>
                </div>
                {couponApplied && (
                  <motion.div 
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="flex flex-wrap gap-2"
                  >
                    <div className="flex items-center gap-3 bg-primary-light/20 border border-primary-light/40 px-4 py-2.5 rounded-lg">
                      <span className="text-[12px] font-bold uppercase tracking-widest text-primary-light">ECOGREEN20</span>
                      <CheckCircle2 size={16} className="text-secondary" />
                    </div>
                  </motion.div>
                )}
              </div>
            </section>

            {/* Price Breakdown */}
            <section className="bg-white border border-border rounded-2xl p-8 space-y-8 shadow-sm">
              <div className="space-y-4">
                <div className="flex justify-between items-center text-text-muted font-medium">
                  <span className="text-sm">Subtotal</span>
                  <span className="font-bold headline text-text-main">$37.490</span>
                </div>
                <div className="flex justify-between items-center text-primary">
                  <div className="flex items-center gap-2">
                    <span className="text-sm font-bold">Ecocupon Aplicado</span>
                    <span className="text-[10px] bg-secondary text-primary px-1.5 py-0.5 rounded font-black uppercase">20%</span>
                  </div>
                  <span className="font-black headline text-lg">-$7.498</span>
                </div>
                <div className="flex justify-between items-center text-text-muted">
                  <span className="text-sm font-medium">Despacho Carbono Cero</span>
                  <span className="font-bold headline text-accent">Gratis</span>
                </div>
                
                <div className="pt-6 border-t border-border flex justify-between items-end">
                  <div>
                    <p className="text-[10px] font-bold text-text-muted tracking-[0.2em] uppercase mb-1">Monto de Inversión</p>
                    <p className="text-4xl font-black text-text-main tracking-tighter headline">$29.992</p>
                  </div>
                  <div className="text-right">
                    <p className="text-[10px] text-primary font-bold uppercase tracking-tighter mb-0.5">Ahorro Verde</p>
                    <p className="text-sm font-black text-primary headline">-$7.498</p>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <button 
                  className="w-full bg-primary text-white py-5 rounded-xl font-bold text-xl shadow-lg shadow-primary/20 flex items-center justify-center gap-3 active:scale-[0.98] hover:bg-primary-light transition-all headline"
                >
                  Confirmar Pago Pago
                  <ArrowRight size={22} className="text-secondary" />
                </button>
                
                <div className="flex flex-col items-center gap-3 pt-2 opacity-50">
                  <p className="text-[9px] font-bold text-text-muted uppercase tracking-[0.4em]">Transacción Protegida</p>
                  <div className="flex items-center justify-center gap-4">
                    <div className="h-4 w-12 bg-surface-container-high rounded" />
                    <div className="h-4 w-12 bg-surface-container-high rounded" />
                    <div className="h-4 w-px bg-border mx-1" />
                    <span className="text-[10px] font-bold text-text-muted uppercase">Smarter MCP Secure</span>
                  </div>
                </div>
              </div>
            </section>

            {/* Security Badge */}
            <div className="flex items-center gap-4 p-5 bg-surface-container-low/50 border border-border rounded-xl">
              <ShieldCheck size={24} className="text-primary shrink-0" />
              <p className="text-[12px] text-text-muted font-medium leading-relaxed opacity-80">
                Tu compra contribuye directamente a proyectos de reforestación en la Patagonia. Certificado por <span className="text-text-main font-bold">EcoAudit Chile</span>.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Impact Badge */}
      <motion.div 
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="fixed bottom-6 left-1/2 -translate-x-1/2 flex items-center gap-3 bg-text-main text-white px-8 py-3.5 rounded-full shadow-2xl z-40 whitespace-nowrap border border-white/10"
      >
        <Leaf size={18} className="text-primary-light animate-pulse" />
        <p className="text-xs font-bold headline tracking-tight">
          Impacto Smarter MCP: <span className="text-primary-light">2.4kg de CO2 mitigado</span>
        </p>
      </motion.div>
    </div>
  );
}
