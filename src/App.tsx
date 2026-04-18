import React, { useState } from 'react';
import { Tab } from './types';
import Home from './views/Home';
import Store from './views/Store';
import Scan from './views/Scan';
import Checkout from './views/Checkout';
import BottomNav from './components/BottomNav';
import Header from './components/Header';
import { AnimatePresence, motion } from 'motion/react';

export default function App() {
  const [activeTab, setActiveTab] = useState<Tab>('home');
  const [basketCount, setBasketCount] = useState(0);

  const renderView = () => {
    switch (activeTab) {
      case 'home':
        return <Home onNavigate={setActiveTab} />;
      case 'store':
        return <Store onAddToBasket={() => setBasketCount(prev => prev + 1)} />;
      case 'scan':
        return <Scan onNavigate={setActiveTab} />;
      case 'checkout':
        return <Checkout onNavigate={setActiveTab} />;
      default:
        return <Home onNavigate={setActiveTab} />;
    }
  };

  return (
    <div className="min-h-screen bg-surface flex flex-col">
      <Header activeTab={activeTab} />
      
      <main className="flex-1 overflow-x-hidden pt-16 pb-24">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, scale: 0.98, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 1.02, y: -10 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="h-full"
          >
            {renderView()}
          </motion.div>
        </AnimatePresence>
      </main>

      <BottomNav activeTab={activeTab} setActiveTab={setActiveTab} />
    </div>
  );
}
