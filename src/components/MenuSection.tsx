import React, { useState, useMemo } from 'react';
import { Category, MenuItem } from '../types';
import { MENU_ITEMS } from '../data/menuData';
import { Search, Plus, Check, Sparkles, Leaf } from 'lucide-react';

interface MenuSectionProps {
  onAddToCart: (item: MenuItem) => void;
  cartItemQuantities: Record<string, number>;
}

export const MenuSection: React.FC<MenuSectionProps> = ({
  onAddToCart,
  cartItemQuantities
}) => {
  const [selectedCategory, setSelectedCategory] = useState<Category>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [filterMode, setFilterMode] = useState<'all' | 'popular' | 'sugarFree'>('all');

  const categories: { key: Category; label: string; count: number; icon: string }[] = [
    { key: 'all', label: 'All Delights', count: MENU_ITEMS.length, icon: '✨' },
    { key: 'icecreams', label: 'Ice Creams & Cones', count: MENU_ITEMS.filter(i => i.category === 'icecreams').length, icon: '🍦' },
    { key: 'faloodas', label: 'Royal Faloodas', count: MENU_ITEMS.filter(i => i.category === 'faloodas').length, icon: '🍧' },
    { key: 'mastani', label: 'Mastani & Shakes', count: MENU_ITEMS.filter(i => i.category === 'mastani').length, icon: '🥤' },
    { key: 'juices', label: 'Fresh Juices', count: MENU_ITEMS.filter(i => i.category === 'juices').length, icon: '🍹' },
    { key: 'lassi', label: 'Lassi & Sarbat', count: MENU_ITEMS.filter(i => i.category === 'lassi').length, icon: '🥛' }
  ];

  const filteredItems = useMemo(() => {
    return MENU_ITEMS.filter(item => {
      // Category match
      if (selectedCategory !== 'all' && item.category !== selectedCategory) {
        return false;
      }
      // Mode filter
      if (filterMode === 'popular' && !item.isPopular) {
        return false;
      }
      if (filterMode === 'sugarFree' && !item.isSugarFreeAvailable) {
        return false;
      }
      // Search query
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase();
        const matchesName = item.name.toLowerCase().includes(q);
        const matchesMarathi = item.marathiName?.toLowerCase().includes(q);
        const matchesDesc = item.description.toLowerCase().includes(q);
        const matchesIng = item.ingredients.some(ing => ing.toLowerCase().includes(q));
        return matchesName || matchesMarathi || matchesDesc || matchesIng;
      }
      return true;
    });
  }, [selectedCategory, searchQuery, filterMode]);

  return (
    <section id="menu" className="py-16 lg:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
      
      {/* Decorative colorful background floating bubbles */}
      <div className="absolute top-1/2 -left-20 w-80 h-80 bg-pink-200/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 -right-20 w-80 h-80 bg-sky-200/25 rounded-full blur-3xl pointer-events-none" />

      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-8 border-b border-pink-200/70">
        <div>
          <div className="flex items-center gap-2 text-xs font-bold text-pink-600 uppercase tracking-wider">
            <span className="bg-pink-100 text-pink-700 px-2.5 py-0.5 rounded-full">Baby Pink &amp; Sky Blue Specials</span>
            <span aria-hidden="true">·</span>
            <span className="text-sky-700 font-semibold">Handcrafted in Solapur</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-stone-900 font-display mt-1.5">
            Sweet Delights &amp; Fresh Menu
          </h2>
          <p className="text-stone-600 text-sm sm:text-base mt-2 max-w-2xl">
            Choose from freshly prepared seasonal fruit juices, waffle cone scoops, signature royal faloodas, and rich Mastani shakes.
          </p>
        </div>

        {/* Live Search Input with baby pink & sky blue borders */}
        <div className="w-full md:w-80 relative">
          <label htmlFor="menu-search" className="sr-only">Search menu items</label>
          <Search className="w-4 h-4 text-pink-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
          <input
            id="menu-search"
            type="text"
            value={searchQuery}
            onChange={e => setSearchQuery(e.target.value)}
            placeholder="Search ice cream, juice, falooda..."
            className="w-full pl-9 pr-4 py-2.5 text-sm bg-white/90 border-2 border-pink-200/80 rounded-xl placeholder-stone-400 focus:outline-none focus:ring-2 focus:ring-sky-400/40 focus:border-sky-400 shadow-2xs transition-all"
          />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery('')}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-pink-500 hover:text-pink-700 font-medium"
            >
              Clear
            </button>
          )}
        </div>
      </div>

      {/* Category Tabs & Quick Dietary Filter */}
      <div className="py-6 flex flex-col lg:flex-row lg:items-center justify-between gap-4">
        
        {/* Category Tabs (Segmented Control in Sky Blue & Baby Pink) */}
        <div className="flex items-center gap-1.5 p-1.5 bg-white/90 border border-pink-200/80 rounded-2xl shadow-xs overflow-x-auto no-scrollbar">
          {categories.map(cat => (
            <button
              key={cat.key}
              onClick={() => setSelectedCategory(cat.key)}
              className={`px-3.5 py-2 text-xs sm:text-sm font-semibold rounded-xl whitespace-nowrap transition-all flex items-center gap-1.5 ${
                selectedCategory === cat.key
                  ? 'bg-gradient-to-r from-pink-500 to-rose-500 text-white shadow-sm shadow-pink-200'
                  : 'text-stone-600 hover:text-pink-600 hover:bg-pink-50/60'
              }`}
            >
              <span>{cat.icon}</span>
              <span>{cat.label}</span>
              <span className={`font-mono text-xs tabular-nums ${selectedCategory === cat.key ? 'text-pink-100' : 'text-stone-400'}`}>
                ({cat.count})
              </span>
            </button>
          ))}
        </div>

        {/* Quick Toggles */}
        <div className="flex items-center gap-2 text-xs">
          <button
            onClick={() => setFilterMode('all')}
            className={`px-3 py-1.5 rounded-xl font-bold transition-all ${
              filterMode === 'all'
                ? 'bg-sky-600 text-white shadow-xs'
                : 'bg-white border border-stone-200 text-stone-600 hover:border-sky-300'
            }`}
          >
            All Items
          </button>
          <button
            onClick={() => setFilterMode(prev => prev === 'popular' ? 'all' : 'popular')}
            className={`px-3 py-1.5 rounded-xl font-bold transition-all flex items-center gap-1.5 ${
              filterMode === 'popular'
                ? 'bg-gradient-to-r from-pink-500 to-rose-500 text-white shadow-xs'
                : 'bg-white border border-stone-200 text-stone-600 hover:border-pink-300'
            }`}
          >
            <Sparkles className="w-3.5 h-3.5 text-pink-400" />
            <span>Popular Only</span>
          </button>
          <button
            onClick={() => setFilterMode(prev => prev === 'sugarFree' ? 'all' : 'sugarFree')}
            className={`px-3 py-1.5 rounded-xl font-bold transition-all flex items-center gap-1.5 ${
              filterMode === 'sugarFree'
                ? 'bg-emerald-600 text-white shadow-xs'
                : 'bg-white border border-stone-200 text-stone-600 hover:border-emerald-300'
            }`}
          >
            <Leaf className="w-3.5 h-3.5 text-emerald-500" />
            <span>No Added Sugar</span>
          </button>
        </div>

      </div>

      {/* Product Cards Grid: 3-column desktop */}
      {filteredItems.length === 0 ? (
        <div className="py-16 text-center bg-white/70 rounded-2xl border-2 border-dashed border-pink-200">
          <div className="text-3xl mb-2">🍨</div>
          <p className="text-stone-600 text-sm font-medium">No yummy items found matching &quot;{searchQuery}&quot;.</p>
          <button
            onClick={() => { setSearchQuery(''); setSelectedCategory('all'); setFilterMode('all'); }}
            className="mt-3 text-xs font-bold text-pink-600 hover:underline"
          >
            Reset search filters
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7">
          {filteredItems.map(item => {
            const inCartQty = cartItemQuantities[item.id] || 0;

            return (
              <div
                key={item.id}
                className="group rounded-2xl bg-white/95 border-2 border-pink-100/90 hover:border-sky-300 p-4 sm:p-5 flex flex-col justify-between hover:shadow-xl hover:shadow-pink-100/40 transition-all duration-300"
              >
                <div>
                  
                  {/* Photo or Visual Banner */}
                  {item.imageUrl ? (
                    <div className="w-full h-44 rounded-xl mb-4 overflow-hidden relative shadow-inner group-hover:scale-[1.01] transition-transform">
                      <img
                        src={item.imageUrl}
                        alt={item.name}
                        className="w-full h-full object-cover"
                        referrerPolicy="no-referrer"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-stone-950/70 via-transparent to-transparent flex items-end justify-between p-3 text-white">
                        <span className="text-[11px] font-bold bg-pink-500/90 backdrop-blur-xs px-2 py-0.5 rounded uppercase tracking-wider">
                          {item.tag || item.category}
                        </span>
                        <span className="text-lg font-bold font-mono text-white tabular-nums bg-stone-900/60 px-2 py-0.5 rounded">
                          ₹{item.price}
                        </span>
                      </div>
                    </div>
                  ) : (
                    <div 
                      className="w-full h-36 rounded-xl mb-4 p-4 flex flex-col justify-between relative overflow-hidden transition-transform duration-300 group-hover:scale-[1.01] shadow-inner"
                      style={{
                        background: `linear-gradient(135deg, #FDF2F8 0%, #E0F2FE 100%)`
                      }}
                    >
                      {/* Decorative soft circles */}
                      <div className="absolute -right-4 -bottom-4 w-24 h-24 rounded-full bg-pink-300/30 blur-lg pointer-events-none" />
                      <div className="absolute -left-4 -top-4 w-20 h-20 rounded-full bg-sky-300/30 blur-lg pointer-events-none" />

                      {/* Unboxed Item Category & Tags */}
                      <div className="relative z-10 flex items-center justify-between text-xs">
                        <span className="font-bold uppercase tracking-wider text-[11px] text-pink-700 bg-pink-100/80 px-2 py-0.5 rounded-full">
                          {item.category}
                        </span>
                        {item.tag && (
                          <span className="font-semibold text-sky-800 text-[11px] bg-sky-100/80 px-2 py-0.5 rounded-full">
                            {item.tag}
                          </span>
                        )}
                      </div>

                      {/* Marathi Script Title & Price */}
                      <div className="relative z-10 flex items-end justify-between">
                        <div>
                          {item.marathiName && (
                            <span className="text-xs font-semibold text-stone-500 font-sans block">
                              {item.marathiName}
                            </span>
                          )}
                        </div>
                        <div className="text-2xl font-extrabold font-mono text-pink-600 tabular-nums">
                          ₹{item.price}
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Primary Item Name */}
                  <h3 className="text-lg font-bold text-stone-900 font-display group-hover:text-pink-600 transition-colors">
                    {item.name}
                  </h3>

                  {/* Description */}
                  <p className="text-xs sm:text-sm text-stone-600 mt-1.5 leading-relaxed">
                    {item.description}
                  </p>

                  {/* Ingredients Unboxed Text with Separators */}
                  <div className="mt-3 pt-3 border-t border-pink-100/70 flex flex-wrap items-center gap-1.5 text-[11px] text-stone-500">
                    <span className="font-semibold text-pink-400">Includes:</span>
                    {item.ingredients.map((ing, idx) => (
                      <React.Fragment key={ing}>
                        <span className="text-stone-600">{ing}</span>
                        {idx < item.ingredients.length - 1 && <span aria-hidden="true" className="text-sky-300">·</span>}
                      </React.Fragment>
                    ))}
                  </div>

                </div>

                {/* Card Action Row with Baby Pink / Sky Blue Buttons */}
                <div className="mt-5 pt-3 flex items-center justify-between gap-4 border-t border-stone-100">
                  <div className="text-xs">
                    {item.isSugarFreeAvailable ? (
                      <span className="text-emerald-700 font-semibold bg-emerald-50 px-2 py-0.5 rounded-full">No Sugar Option</span>
                    ) : (
                      <span className="text-pink-600 font-medium">Pure Dairy / Fruit</span>
                    )}
                  </div>

                  <button
                    onClick={() => onAddToCart(item)}
                    aria-label={`Add ${item.name} to order`}
                    className={`px-4 py-2 text-xs font-bold rounded-xl flex items-center gap-1.5 active:scale-95 transition-all whitespace-nowrap shadow-xs ${
                      inCartQty > 0
                        ? 'bg-sky-100 text-sky-900 border border-sky-300 hover:bg-sky-200'
                        : 'bg-gradient-to-r from-pink-500 to-rose-500 text-white hover:from-pink-600 hover:to-rose-600 shadow-pink-200/50'
                    }`}
                  >
                    {inCartQty > 0 ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-sky-700" />
                        <span>In Tray ({inCartQty})</span>
                      </>
                    ) : (
                      <>
                        <Plus className="w-3.5 h-3.5" />
                        <span>Add to Order</span>
                      </>
                    )}
                  </button>
                </div>

              </div>
            );
          })}
        </div>
      )}

      {/* Live Order Callout in Baby Pink & Sky Blue banner */}
      <div className="mt-14 p-6 sm:p-7 rounded-3xl bg-gradient-to-r from-pink-100/90 via-sky-50 to-pink-50 border-2 border-pink-200/80 flex flex-col sm:flex-row items-center justify-between gap-5 shadow-sm">
        <div>
          <span className="text-xs font-bold text-pink-600 uppercase tracking-wider block">Solapur Party &amp; Bulk Catering</span>
          <h4 className="text-lg font-bold text-stone-900 font-display mt-0.5">
            Ice Cream &amp; Fresh Juice Counters for Events
          </h4>
          <p className="text-xs sm:text-sm text-stone-600 mt-1 max-w-xl">
            We supply fresh fruit juice dispensers, royal falooda stalls, and bulk ice cream scoops for weddings at Mannat Hall, birthday celebrations, and family functions across Solapur.
          </p>
        </div>
        <a
          href="https://wa.me/919822054321?text=Hello%20DK%20Ice%20Cream%20Center%2C%20I%20would%20like%20to%20inquire%20about%20party%20catering%20and%20bulk%20orders%20in%20Solapur."
          target="_blank"
          rel="noopener noreferrer"
          className="px-5 py-3 bg-gradient-to-r from-pink-500 to-sky-600 text-white text-xs sm:text-sm font-bold rounded-xl hover:from-pink-600 hover:to-sky-700 whitespace-nowrap shrink-0 transition-all shadow-md shadow-pink-200"
        >
          Book Party Catering
        </a>
      </div>

    </section>
  );
};
