/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { MenuItem, CartItem } from './types';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { MenuSection } from './components/MenuSection';
import { CustomFaloodaBuilder } from './components/CustomFaloodaBuilder';
import { LocationHours } from './components/LocationHours';
import { ReviewsSection } from './components/ReviewsSection';
import { AboutSection } from './components/AboutSection';
import { Footer } from './components/Footer';
import { CartDrawer } from './components/CartDrawer';
import { ShoppingBag, ArrowRight } from 'lucide-react';

const CART_STORAGE_KEY = 'dk_icecream_cart_v1';

export default function App() {
  const [cartItems, setCartItems] = useState<CartItem[]>(() => {
    try {
      const saved = localStorage.getItem(CART_STORAGE_KEY);
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  const [isCartOpen, setIsCartOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [lastAddedItemName, setLastAddedItemName] = useState<string | null>(null);

  // Sync cart to localStorage
  useEffect(() => {
    try {
      localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(cartItems));
    } catch {
      // Ignore localStorage errors
    }
  }, [cartItems]);

  // Track active section on scroll
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'menu', 'custom-falooda', 'location', 'reviews', 'about'];
      const scrollPos = window.scrollY + 200;

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Cart Handlers
  const handleAddToCart = (item: MenuItem, notes?: string) => {
    setCartItems(prev => {
      const existing = prev.find(ci => ci.item.id === item.id);
      if (existing) {
        return prev.map(ci =>
          ci.item.id === item.id ? { ...ci, quantity: ci.quantity + 1 } : ci
        );
      }
      return [
        ...prev,
        {
          id: `${item.id}-${Date.now()}`,
          item,
          quantity: 1,
          customizationNotes: notes
        }
      ];
    });

    setLastAddedItemName(item.name);
    setTimeout(() => setLastAddedItemName(null), 3000);
  };

  const handleUpdateQuantity = (id: string, delta: number) => {
    setCartItems(prev =>
      prev
        .map(ci => {
          if (ci.id === id) {
            const newQty = ci.quantity + delta;
            return newQty > 0 ? { ...ci, quantity: newQty } : null;
          }
          return ci;
        })
        .filter(Boolean) as CartItem[]
    );
  };

  const handleRemoveItem = (id: string) => {
    setCartItems(prev => prev.filter(ci => ci.id !== id));
  };

  const handleClearCart = () => {
    setCartItems([]);
  };

  // Quantities lookup map for quick feedback on menu cards
  const cartItemQuantities = cartItems.reduce<Record<string, number>>((acc, ci) => {
    acc[ci.item.id] = (acc[ci.item.id] || 0) + ci.quantity;
    return acc;
  }, {});

  const totalCartCount = cartItems.reduce((acc, ci) => acc + ci.quantity, 0);
  const cartSubtotal = cartItems.reduce((acc, ci) => acc + ci.item.price * ci.quantity, 0);

  const scrollToMenu = () => {
    const el = document.getElementById('menu');
    el?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToCustomBuilder = () => {
    const el = document.getElementById('custom-falooda');
    el?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#FAFAF9] text-stone-900">
      
      {/* Top Bar following 3-Zone Contract */}
      <Navbar
        cartCount={totalCartCount}
        onOpenCart={() => setIsCartOpen(true)}
        activeSection={activeSection}
      />

      {/* Main Content Sections */}
      <main className="flex-1">
        <Hero
          onExploreMenu={scrollToMenu}
          onOpenCustomBuilder={scrollToCustomBuilder}
        />

        <MenuSection
          onAddToCart={handleAddToCart}
          cartItemQuantities={cartItemQuantities}
        />

        <CustomFaloodaBuilder
          onAddCustomFalooda={handleAddToCart}
        />

        <LocationHours />

        <ReviewsSection />

        <AboutSection />
      </main>

      {/* Footer */}
      <Footer />

      {/* Slide-over Cart & WhatsApp Checkout Drawer */}
      <CartDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        cartItems={cartItems}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveItem}
        onClearCart={handleClearCart}
      />

      {/* Mobile Sticky Quick Order Floating Pill (Under 15% Viewport Height) */}
      {totalCartCount > 0 && !isCartOpen && (
        <aside
          aria-label="Floating Order Bar"
          className="fixed bottom-4 left-4 right-4 sm:left-auto sm:right-6 sm:bottom-6 z-30"
        >
          <button
            onClick={() => setIsCartOpen(true)}
            className="w-full sm:w-auto px-5 py-3.5 bg-gradient-to-r from-pink-500 via-rose-500 to-sky-600 text-white rounded-2xl shadow-xl shadow-pink-300/50 hover:brightness-105 active:scale-95 transition-all flex items-center justify-between sm:justify-start gap-4"
          >
            <div className="flex items-center gap-2.5">
              <div className="relative">
                <ShoppingBag className="w-4 h-4 text-white" />
                <span className="absolute -top-1.5 -right-2 px-1.5 text-[10px] font-mono font-bold bg-white text-pink-600 rounded-full shadow-xs">
                  {totalCartCount}
                </span>
              </div>
              <span className="text-xs font-bold">View Sweet Tray</span>
            </div>

            <div className="flex items-center gap-2">
              <span className="text-xs font-mono font-extrabold text-white tabular-nums bg-white/20 px-2 py-0.5 rounded-lg">
                ₹{cartSubtotal}
              </span>
              <ArrowRight className="w-3.5 h-3.5 text-white/80" />
            </div>
          </button>
        </aside>
      )}

      {/* Toast Feedback when item added */}
      {lastAddedItemName && (
        <aside
          aria-label="Item added notification"
          className="fixed top-20 right-4 sm:right-6 z-50 bg-white text-pink-900 px-4 py-2.5 rounded-xl shadow-xl shadow-pink-100 text-xs font-bold flex items-center gap-2 border-2 border-pink-200"
        >
          <span className="w-2.5 h-2.5 rounded-full bg-pink-500 animate-ping" />
          <span>Added <strong>{lastAddedItemName}</strong> to tray! 🍧</span>
        </aside>
      )}

    </div>
  );
}
