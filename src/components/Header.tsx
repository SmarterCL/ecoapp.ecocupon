import React from 'react';
import { Tab } from '../types';
import { Bell, ShieldCheck, ArrowLeft } from 'lucide-react';
import { cn } from '../lib/utils';

interface HeaderProps {
  activeTab: Tab;
}

export default function Header({ activeTab }: HeaderProps) {
  const isCheckout = activeTab === 'checkout';

  return (
    <header className="fixed top-0 w-full z-50 flex justify-between items-center px-6 md:px-10 h-16 md:h-[72px] bg-white border-b border-border transition-all">
      <div className="flex items-center gap-8">
        <div className="flex items-center gap-4">
          {isCheckout && (
            <button className="w-9 h-9 flex items-center justify-center rounded-full hover:bg-surface-container transition-colors">
              <ArrowLeft size={18} className="text-on-surface" />
            </button>
          )}
          <div className="headline font-[800] text-xl md:text-2xl text-primary tracking-tighter flex items-center gap-1">
            ECO<span className="text-accent">CUPÓN</span>
          </div>
        </div>

        {!isCheckout && (
          <nav className="hidden md:flex gap-8 text-[14px] font-semibold text-text-muted">
            <a href="#" className={cn("transition-colors hover:text-primary pb-1 border-b-2", activeTab === 'home' ? "text-primary border-primary" : "border-transparent text-text-muted")}>Explorar</a>
            <a href="#" className="transition-colors hover:text-primary pb-1 border-b-2 border-transparent">Mis Cupones</a>
            <a href="#" className="transition-colors hover:text-primary pb-1 border-b-2 border-transparent">Sustentabilidad</a>
            <a href="#" className="transition-colors hover:text-primary pb-1 border-b-2 border-transparent">Mapa Eco</a>
          </nav>
        )}
      </div>

      <div className="flex items-center gap-3">
        {isCheckout ? (
          <div className="flex items-center gap-2 px-3 py-1.5 bg-[#EEF7F2] rounded-lg border border-primary-light">
            <ShieldCheck size={14} className="text-primary" />
            <span className="text-[11px] font-bold text-primary uppercase tracking-wider">
              Secure Checkout
            </span>
          </div>
        ) : (
          <div className="flex items-center gap-3">
            <div className="hidden sm:flex items-center gap-2 px-3 py-1.5 bg-[#EEF7F2] rounded-lg border border-primary-light">
              <span className="text-[11px] font-bold text-primary uppercase tracking-wider">
                Smarter MCP Active
              </span>
            </div>
            <button className="p-2 text-text-muted hover:text-primary transition-colors hover:bg-surface-container rounded-lg relative">
              <Bell size={20} />
              <div className="absolute top-2 right-2 w-2 h-2 bg-accent rounded-full border-2 border-white" />
            </button>
          </div>
        )}
      </div>
    </header>
  );
}
