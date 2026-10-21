import React from 'react';
import { ShoppingBag } from 'lucide-react';

interface NavbarProps {
  cartCount: number;
  onOpenCart: () => void;
  activeSection: string;
}

export const Navbar: React.FC<NavbarProps> = ({
  cartCount,
  onOpenCart,
  activeSection
}) => {
  return (
    <header className="sticky top-0 z-40 bg-white/90 backdrop-blur-md border-b border-pink-100 shadow-xs transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-18 flex items-center justify-between gap-8">
        
        {/* Zone 1: Single text element wordmark */}
        <a 
          href="#home" 
          className="text-lg sm:text-xl font-bold tracking-tight text-pink-700 font-display whitespace-nowrap shrink-0 hover:text-sky-600 transition-colors flex items-center gap-1.5"
        >
          <span>🍧</span>
          <span>DK Ice Cream &amp; Juice Center</span>
        </a>

        {/* Zone 2: 4-5 concise single-line text navigation links */}
        <nav className="hidden md:flex items-center gap-7 text-sm font-medium text-stone-600">
          <a 
            href="#menu" 
            className={`whitespace-nowrap shrink-0 transition-colors hover:text-pink-600 ${activeSection === 'menu' ? 'text-pink-600 font-semibold border-b-2 border-pink-500 pb-0.5' : ''}`}
          >
            Menu
          </a>
          <a 
            href="#custom-falooda" 
            className={`whitespace-nowrap shrink-0 transition-colors hover:text-pink-600 ${activeSection === 'custom-falooda' ? 'text-pink-600 font-semibold border-b-2 border-pink-500 pb-0.5' : ''}`}
          >
            Custom Falooda
          </a>
          <a 
            href="#location" 
            className={`whitespace-nowrap shrink-0 transition-colors hover:text-sky-600 ${activeSection === 'location' ? 'text-sky-600 font-semibold border-b-2 border-sky-500 pb-0.5' : ''}`}
          >
            Location &amp; Hours
          </a>
          <a 
            href="#reviews" 
            className={`whitespace-nowrap shrink-0 transition-colors hover:text-pink-600 ${activeSection === 'reviews' ? 'text-pink-600 font-semibold border-b-2 border-pink-500 pb-0.5' : ''}`}
          >
            Reviews
          </a>
          <a 
            href="#about" 
            className={`whitespace-nowrap shrink-0 transition-colors hover:text-sky-600 ${activeSection === 'about' ? 'text-sky-600 font-semibold border-b-2 border-sky-500 pb-0.5' : ''}`}
          >
            About Us
          </a>
        </nav>

        {/* Zone 3: 1 primary action */}
        <div className="flex items-center gap-3 shrink-0">
          <button
            onClick={onOpenCart}
            aria-label={`Shopping Cart with ${cartCount} items`}
            className="flex items-center gap-2.5 px-4 py-2.5 text-xs sm:text-sm font-semibold text-white bg-gradient-to-r from-pink-500 via-rose-500 to-sky-500 hover:from-pink-600 hover:to-sky-600 active:scale-[0.98] transition-all whitespace-nowrap shrink-0 rounded-xl shadow-sm shadow-pink-200"
          >
            <ShoppingBag className="w-4 h-4" />
            <span>Order on WhatsApp</span>
            {cartCount > 0 && (
              <span className="ml-1 px-1.5 py-0.5 text-xs font-mono font-bold bg-white text-pink-700 rounded-md tabular-nums">
                {cartCount}
              </span>
            )}
          </button>
        </div>

      </div>
    </header>
  );
};
