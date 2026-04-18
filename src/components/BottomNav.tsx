import React from 'react';
import { Tab } from '../types';
import { Home, Scan, ShoppingBasket, User } from 'lucide-react';
import { cn } from '../lib/utils';
import { motion } from 'motion/react';

interface BottomNavProps {
  activeTab: Tab;
  setActiveTab: (tab: Tab) => void;
}

export default function BottomNav({ activeTab, setActiveTab }: BottomNavProps) {
  const tabs = [
    { id: 'home' as Tab, label: 'Home', icon: Home },
    { id: 'scan' as Tab, label: 'Scan', icon: Scan, special: true },
    { id: 'store' as Tab, label: 'Store', icon: ShoppingBasket },
    { id: 'profile' as Tab, label: 'Profile', icon: User },
  ];

  return (
    <nav className="fixed bottom-0 left-0 w-full h-20 flex justify-around items-center px-4 pb-2 bg-emerald-50/70 backdrop-blur-xl rounded-t-[2rem] z-50 shadow-[0_-12px_32px_-4px_rgba(15,82,56,0.08)]">
      {tabs.map((tab) => {
        const isActive = activeTab === tab.id;
        const Icon = tab.icon;

        if (tab.special) {
          return (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={cn(
                "flex flex-col items-center justify-center rounded-full w-14 h-14 -mt-8 transition-all duration-300 shadow-lg relative",
                isActive 
                  ? "bg-primary text-white scale-110" 
                  : "bg-primary/90 text-white/90"
              )}
            >
              <Icon size={24} strokeWidth={2.5} />
              <span className="sr-only">{tab.label}</span>
              {isActive && (
                <motion.div
                  layoutId="nav-glow"
                  className="absolute inset-0 bg-white/20 rounded-full blur-md -z-10"
                />
              )}
            </button>
          );
        }

        return (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={cn(
              "flex flex-col items-center justify-center p-2 transition-all duration-300 relative",
              isActive ? "text-primary translate-y-[-4px]" : "text-emerald-900/40"
            )}
          >
            <Icon size={22} strokeWidth={isActive ? 2.5 : 2} />
            <span className="font-headline font-bold text-[10px] tracking-wide uppercase mt-1">
              {tab.label}
            </span>
            {isActive && (
              <motion.div
                layoutId="nav-indicator"
                className="absolute -bottom-1 w-1 h-1 bg-primary rounded-full"
              />
            )}
          </button>
        );
      })}
    </nav>
  );
}
