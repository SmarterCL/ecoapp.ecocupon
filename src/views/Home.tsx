import React from 'react';
import { Tab, Activity } from '../types';
import { QrCode, ShoppingBasket, Leaf, Receipt, ShoppingCart, TrendingUp } from 'lucide-react';
import { motion } from 'motion/react';
import { cn } from '../lib/utils';

interface HomeProps {
  onNavigate: (tab: Tab) => void;
}

const recentActivity: Activity[] = [
  {
    id: '1',
    title: 'Escaneo de Botellas PET',
    subtitle: '+150 puntos • Hace 2 horas',
    amount: 2.00,
    type: 'gain',
    date: '2h ago',
    icon: 'receipt',
    color: 'bg-secondary-container'
  },
  {
    id: '2',
    title: 'Canje en Supermercado',
    subtitle: 'Cupón #442 • Ayer',
    amount: -15.00,
    type: 'expense',
    date: 'Yesterday',
    icon: 'cart',
    color: 'bg-primary-fixed'
  },
  {
    id: '3',
    title: 'Escaneo de Aluminio',
    subtitle: '+45 puntos • 12 Oct',
    amount: 0.80,
    type: 'gain',
    date: '12 Oct',
    icon: 'qr',
    color: 'bg-secondary-container'
  }
];

export default function Home({ onNavigate }: HomeProps) {
  return (
    <div className="px-6 md:px-10 py-6 md:py-10 max-w-7xl mx-auto h-full">
      <div className="grid grid-cols-1 md:grid-cols-[260px_1fr] gap-8 h-full items-start">
        {/* Sidebar */}
        <aside className="hidden md:flex flex-col gap-6 sticky top-28">
          <div className="bg-white border border-border rounded-xl p-5 shadow-sm">
            <h3 className="text-[12px] font-bold uppercase tracking-[0.1em] text-text-muted mb-4">Categorías</h3>
            <div className="space-y-1">
              {['♻️ Reciclaje', '🥗 Alimentación Bio', '⚡ Energía Solar', '🧴 Cosmética Natural', '🚲 Movilidad Limpia'].map(cat => (
                <button key={cat} className="w-full flex items-center gap-3 py-2 px-1 text-[15px] font-medium text-text-main hover:text-primary transition-colors text-left group">
                  <span className="transition-transform group-hover:scale-110">{cat}</span>
                </button>
              ))}
            </div>
          </div>

          <div className="bg-text-main text-white rounded-xl p-6 shadow-md overflow-hidden relative">
            <h3 className="text-sm font-bold headline mb-6 relative z-10">Impacto Smarter MCP</h3>
            <div className="space-y-4 relative z-10">
              <div className="flex justify-between items-center text-xs">
                <span className="opacity-70">CO2 Ahorrado</span>
                <span className="font-bold text-primary-light">124.5 kg</span>
              </div>
              <div className="flex justify-between items-center text-xs">
                <span className="opacity-70">Agua Preservada</span>
                <span className="font-bold text-primary-light">1,200 L</span>
              </div>
              <div className="flex justify-between items-center text-xs">
                <span className="opacity-70">Ahorro Mensual</span>
                <span className="font-bold text-primary-light">$42.500</span>
              </div>
            </div>
            {/* Subtle glow */}
            <div className="absolute -right-8 -bottom-8 w-24 h-24 bg-primary-light/20 rounded-full blur-2xl" />
          </div>
        </aside>

        {/* Content Area */}
        <div className="space-y-8">
          {/* Welcome & Hero */}
          <section className="space-y-6">
            <div className="hero-gradient rounded-2xl p-8 md:p-10 text-white shadow-lg relative overflow-hidden group">
              <div className="relative z-10 max-w-lg">
                <motion.h1 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-3xl md:text-4xl font-extrabold headline leading-tight mb-3"
                >
                  Ahorra hoy, protege el mañana
                </motion.h1>
                <p className="text-white/80 font-medium text-lg mb-6 leading-relaxed">
                  Algoritmos de Smarter MCP seleccionan las mejores ofertas basadas en tu huella de carbono.
                </p>
                <button 
                  onClick={() => onNavigate('scan')}
                  className="bg-accent text-white font-bold py-3 px-8 rounded-lg shadow-lg shadow-accent/20 hover:brightness-110 transition-all active:scale-95"
                >
                  Escanear Cupón
                </button>
              </div>
              {/* Decoration */}
              <Leaf size={180} className="absolute -right-10 -bottom-10 text-white/10 rotate-12 transition-transform group-hover:scale-110" />
            </div>
          </section>

          {/* Activity Section mapped to Coupon Grid Style */}
          <section className="pb-8">
            <div className="flex justify-between items-center mb-6">
              <h2 className="headline font-bold text-on-surface text-xl">Actividad Reciente</h2>
              <button className="text-primary font-bold text-sm px-3 py-1.5 hover:bg-primary/5 rounded-lg transition-colors">
                Ver todo
              </button>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
              {recentActivity.map((activity, idx) => (
                <motion.div
                  key={activity.id}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.1 }}
                  className="coupon-ticket p-6 flex gap-4 group cursor-pointer transition-shadow hover:shadow-md"
                >
                  <div className={cn("w-14 h-14 rounded-lg flex items-center justify-center shrink-0 border border-border/50 shadow-sm", idx === 0 ? "bg-secondary text-primary" : "bg-surface-container text-text-muted")}>
                    {activity.icon === 'receipt' && <Receipt size={24} />}
                    {activity.icon === 'cart' && <ShoppingCart size={24} />}
                    {activity.icon === 'qr' && <QrCode size={24} />}
                  </div>
                  <div className="flex-1 min-w-0 pr-2">
                    <h3 className="font-bold text-text-main text-[16px] leading-tight mb-1 truncate group-hover:text-primary transition-colors">
                      {activity.title}
                    </h3>
                    <p className="text-text-muted text-[13px] font-medium mb-3">
                      {activity.subtitle}
                    </p>
                    <div className="flex justify-between items-center">
                      <span className={cn(
                        "px-2 px-1.5 rounded font-bold text-[12px] uppercase tracking-wide",
                        activity.type === 'gain' ? "bg-accent/10 text-accent" : "bg-error/10 text-error"
                      )}>
                        {activity.type === 'gain' ? "Gancia" : "Gasto"}
                      </span>
                      <span className={cn(
                        "font-extrabold text-[15px] headline",
                        activity.type === 'gain' ? "text-primary" : "text-error"
                      )}>
                        {activity.type === 'gain' ? '+' : '-'}${Math.abs(activity.amount).toFixed(2)}
                      </span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
