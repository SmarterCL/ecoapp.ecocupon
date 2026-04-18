import React, { useState } from 'react';
import { Product } from '../types';
import { Search, Plus, ShoppingBasket, ArrowRight, Leaf } from 'lucide-react';
import { motion } from 'motion/react';
import { cn } from '../lib/utils';

interface StoreProps {
  onAddToBasket: () => void;
}

const products: Product[] = [
  {
    id: 'featured-1',
    name: 'Heirloom Harvest Box',
    price: 34.00,
    description: 'Our curated selection of 10-12 seasonal varieties, direct from the greenhouse.',
    category: 'seasonal',
    image: 'https://picsum.photos/seed/harvest/800/600',
    tag: 'Seasonal Pick',
    unit: 'Box',
  },
  {
    id: 'p1',
    name: 'Wild Strawberries',
    price: 6.50,
    description: 'Organic berries',
    category: 'fruits',
    image: 'https://picsum.photos/seed/strawberry/400/300',
    unit: '500g',
  },
  {
    id: 'p2',
    name: 'Hass Avocados',
    price: 4.20,
    description: 'Pack of 2',
    category: 'vegetables',
    image: 'https://picsum.photos/seed/avocado/400/300',
    unit: 'Pack of 2',
    isEcoChoice: true,
  },
  {
    id: 'p3',
    name: 'Tuscan Kale',
    price: 3.15,
    description: 'Local produce',
    category: 'vegetables',
    image: 'https://picsum.photos/seed/kale/400/300',
    unit: '200g Bunch',
  },
  {
    id: 'p4',
    name: 'Ancient Grain Loaf',
    price: 7.80,
    description: 'Stoneground bakery',
    category: 'bakery',
    image: 'https://picsum.photos/seed/bread/400/300',
    unit: '800g',
  }
];

export default function Store({ onAddToBasket }: StoreProps) {
  const [activeCategory, setActiveCategory] = useState('All Produce');

  const categories = ['All Produce', 'Vegetables', 'Fruits', 'Dairy & Eggs', 'Artisan Bread'];

  return (
    <div className="px-6 md:px-10 py-6 md:py-10 max-w-7xl mx-auto pb-48">
      {/* Search & Hero */}
      <section className="mb-12">
        <div className="hero-gradient rounded-2xl p-8 md:p-12 text-white shadow-lg mb-10 overflow-hidden relative">
          <div className="relative z-10 max-w-xl">
            <h1 className="text-4xl md:text-5xl font-extrabold headline leading-tight mb-4">
              Ahorra hoy,<br/>protege el mañana
            </h1>
            <p className="text-white/80 font-medium text-lg mb-8 max-w-md">
              Selección exclusiva de productos sustentables con certificación Eco-Direct.
            </p>
            <div className="relative max-w-md">
              <Search size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-primary" />
              <input 
                className="w-full pl-12 pr-6 py-4 rounded-xl bg-white border-none focus:ring-2 focus:ring-accent/50 text-text-main font-medium shadow-xl" 
                placeholder="Buscar productos orgánicos..." 
                type="text" 
              />
            </div>
          </div>
          <Leaf size={220} className="absolute -right-16 -bottom-16 text-white/5 rotate-[-15deg]" />
        </div>
      </section>

      {/* Category Filters */}
      <section className="mb-8 overflow-x-auto no-scrollbar">
        <div className="flex gap-4 pb-2">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={cn(
                "px-6 py-2.5 rounded-lg font-bold text-[13px] uppercase tracking-wider whitespace-nowrap transition-all active:scale-95 border",
                activeCategory === cat 
                  ? "bg-primary text-white border-primary shadow-md" 
                  : "bg-white text-text-muted border-border hover:border-primary/30"
              )}
            >
              {cat}
            </button>
          ))}
        </div>
      </section>

      {/* Product Grid */}
      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
        {products.map((product) => {
          if (product.id === 'featured-1') {
            return (
              <motion.div 
                key={product.id}
                whileHover={{ y: -5 }}
                className="md:col-span-2 relative group rounded-2xl overflow-hidden bg-white border border-border shadow-sm"
              >
                <div className="h-80 md:h-[420px] w-full relative">
                  <img 
                    alt={product.name} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
                    src={product.image}
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-text-main/90 via-text-main/20 to-transparent" />
                  <div className="absolute bottom-0 left-0 p-8 md:p-10 text-white w-full flex flex-col md:flex-row md:items-end md:justify-between gap-6">
                    <div className="flex-1">
                      {product.tag && (
                        <span className="inline-block px-3 py-1 rounded-md bg-accent text-white text-[10px] font-bold uppercase tracking-widest mb-4">
                          {product.tag}
                        </span>
                      )}
                      <h3 className="text-3xl md:text-4xl font-extrabold headline mb-3 leading-tight">{product.name}</h3>
                      <p className="text-white/70 font-medium text-base max-w-md">{product.description}</p>
                    </div>
                    <div className="flex flex-col items-start md:items-end gap-4 shrink-0">
                      <span className="text-3xl font-black headline tracking-tighter">${product.price.toFixed(2)}</span>
                      <button 
                        onClick={onAddToBasket}
                        className="w-full md:w-auto px-8 py-3.5 rounded-lg bg-accent text-white font-bold hover:brightness-110 shadow-xl shadow-accent/20 transition-all active:scale-95"
                      >
                        Añadir a Basket
                      </button>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          }

          return (
            <motion.div 
              key={product.id}
              whileHover={{ y: -5 }}
              className="coupon-ticket p-4 flex flex-col group transition-shadow hover:shadow-xl"
            >
              <div className="h-48 rounded-lg overflow-hidden mb-4 relative bg-surface-container-low shrink-0">
                <img 
                  alt={product.name} 
                  className="w-full h-full object-cover grayscale-[0.1] group-hover:grayscale-0 transition-all duration-500" 
                  src={product.image}
                  referrerPolicy="no-referrer"
                />
                {product.isEcoChoice && (
                  <div className="absolute top-3 right-3 p-1.5 bg-accent text-white rounded shadow-lg">
                    <Leaf size={14} fill="currentColor" />
                  </div>
                )}
              </div>
              <div className="flex flex-col flex-1">
                <div className="flex justify-between items-start mb-2">
                  <div className="flex-1 pr-2">
                    <h4 className="font-extrabold text-[17px] text-text-main headline leading-tight group-hover:text-primary transition-colors">{product.name}</h4>
                    <p className="text-text-muted text-[13px] font-medium italic opacity-70 mt-1">{product.unit} / Premium</p>
                  </div>
                  <span className="font-extrabold text-primary headline text-lg tracking-tighter shrink-0">${product.price.toFixed(2)}</span>
                </div>
                <button 
                  onClick={onAddToBasket}
                  className="w-full mt-auto py-3 rounded-lg bg-primary text-white font-bold flex items-center justify-center gap-2 hover:bg-primary-light transition-all active:scale-95 shadow-lg shadow-primary/10"
                >
                  <Plus size={18} strokeWidth={2.5} />
                  Canjear
                </button>
              </div>
            </motion.div>
          );
        })}
      </section>

      {/* Checkout Sidebar/Summary mapped to Design Style */}
      <motion.div 
        initial={{ y: 100 }}
        animate={{ y: 0 }}
        className="fixed bottom-24 md:bottom-12 left-6 right-6 z-40 md:left-auto md:right-10 md:w-[320px]"
      >
        <div className="bg-text-main text-white p-5 rounded-xl shadow-2xl flex items-center justify-between group cursor-pointer hover:bg-primary border border-primary-light/20 transition-all active:scale-[0.98]">
          <div className="flex items-center gap-4">
            <div className="w-11 h-11 bg-primary-light/20 rounded-lg flex items-center justify-center border border-primary-light/30">
              <ShoppingBasket size={22} className="text-primary-light" />
            </div>
            <div>
              <p className="text-[10px] text-primary-light font-bold uppercase tracking-widest">Carrito Sustentable</p>
              <p className="font-extrabold text-lg headline tracking-tight">3 Prod. <span className="mx-2 opacity-30 text-white">|</span> $48.35</p>
            </div>
          </div>
          <div className="flex items-center gap-2 text-primary-light group-hover:text-white transition-colors">
            <ArrowRight size={20} strokeWidth={2.5} />
          </div>
        </div>
      </motion.div>
    </div>
  );
}
