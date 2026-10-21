import React, { useMemo } from 'react';
import { Sparkles, MapPin, Clock, ArrowRight, ShieldCheck, HeartHandshake, Star } from 'lucide-react';

interface HeroProps {
  onExploreMenu: () => void;
  onOpenCustomBuilder: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onExploreMenu, onOpenCustomBuilder }) => {
  // Determine if the parlor is currently open (9:30 AM to 10:30 PM IST)
  const storeStatus = useMemo(() => {
    try {
      const now = new Date();
      const utcTime = now.getTime() + (now.getTimezoneOffset() * 60000);
      const istTime = new Date(utcTime + (3600000 * 5.5));
      const hours = istTime.getHours();
      const minutes = istTime.getMinutes();
      const currentMinuteOfDay = hours * 60 + minutes;

      const openMinute = 9 * 60 + 30; // 9:30 AM
      const closeMinute = 22 * 60 + 30; // 10:30 PM

      const isOpen = currentMinuteOfDay >= openMinute && currentMinuteOfDay < closeMinute;
      return {
        isOpen,
        label: isOpen ? 'Open Now' : 'Closed Now',
        detail: isOpen ? 'Serving until 10:30 PM tonight' : 'Opens tomorrow at 9:30 AM'
      };
    } catch {
      return {
        isOpen: true,
        label: 'Open Daily',
        detail: '9:30 AM – 10:30 PM'
      };
    }
  }, []);

  return (
    <section id="home" className="relative pt-8 pb-16 lg:pt-14 lg:pb-24 overflow-hidden">
      
      {/* Colorful Dessert Background Accents: Baby Pink & Sky Blue Glowing Aura */}
      <div className="absolute top-0 left-1/4 -translate-x-1/2 w-96 h-96 bg-pink-300/25 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-20 right-10 w-96 h-96 bg-sky-300/25 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 w-[600px] h-72 bg-gradient-to-r from-pink-200/20 via-sky-200/30 to-purple-200/20 rounded-full blur-3xl pointer-events-none" />

      {/* Floating Decorative Pastel Sprinkles */}
      <div className="absolute top-12 left-10 text-pink-300 select-none pointer-events-none text-xl animate-bounce duration-1000">✨</div>
      <div className="absolute top-40 right-16 text-sky-400 select-none pointer-events-none text-2xl">🍦</div>
      <div className="absolute bottom-20 left-16 text-pink-400 select-none pointer-events-none text-xl">🍨</div>
      <div className="absolute bottom-32 right-1/4 text-sky-300 select-none pointer-events-none text-xl">✨</div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Split Hero: 2-column Desktop Balance */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          
          {/* Left Column: Narrative & Action */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Clean Unboxed Metadata kicker (NO PILLS) with Baby Pink & Sky Blue touches */}
            <div className="flex flex-wrap items-center gap-2 text-xs sm:text-sm font-medium text-stone-600">
              <span className="font-bold text-pink-600 bg-pink-100/80 px-2.5 py-0.5 rounded-full">Sainath Nagar, Solapur</span>
              <span aria-hidden="true" className="text-pink-300">·</span>
              <span className="text-sky-800 font-medium">Opposite Mannat Hall, Hotgi Road</span>
              <span aria-hidden="true" className="text-sky-300">·</span>
              <span className="text-emerald-700 font-bold bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200">
                ● {storeStatus.label}
              </span>
            </div>

            {/* Display Headline with Baby Pink & Sky Blue Gradient Accent */}
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-stone-900 tracking-tight font-display leading-[1.12] text-balance">
              Delicious <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-rose-500 to-pink-600">Ice Creams</span> &amp; <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-500 via-sky-600 to-cyan-600">Fresh Juices</span> in Solapur
            </h1>

            {/* Editorial Body Text */}
            <p className="text-base sm:text-lg text-stone-600 max-w-2xl leading-relaxed">
              Solapur&apos;s most vibrant dessert destination for colorful waffle cones, double-scoop Royal Faloodas loaded with rich rabdi, Pune-style thick Mango Mastani, and fresh cold-pressed fruit juices.
            </p>

            {/* Action Buttons: Baby Pink & Sky Blue theme */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <button
                onClick={onExploreMenu}
                className="px-6 py-3.5 text-sm sm:text-base font-bold text-white bg-gradient-to-r from-pink-500 via-rose-500 to-pink-600 rounded-xl hover:from-pink-600 hover:to-rose-700 active:scale-[0.98] transition-all flex items-center gap-2 shadow-lg shadow-pink-200/80 whitespace-nowrap"
              >
                <span>Explore Full Menu</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={onOpenCustomBuilder}
                className="px-6 py-3.5 text-sm sm:text-base font-bold text-sky-800 bg-white border-2 border-sky-200 rounded-xl hover:bg-sky-50 hover:border-sky-300 active:scale-[0.98] transition-all flex items-center gap-2 shadow-sm whitespace-nowrap"
              >
                <Sparkles className="w-4 h-4 text-sky-500" />
                <span>Custom Falooda Maker</span>
              </button>

              <a
                href="#location"
                className="px-4 py-3 text-sm font-semibold text-stone-600 hover:text-pink-600 transition-colors flex items-center gap-1.5 whitespace-nowrap"
              >
                <MapPin className="w-4 h-4 text-pink-400" />
                <span>150m from Asra Chowk</span>
              </a>
            </div>

            {/* Quiet Trust Notes */}
            <div className="pt-4 border-t border-pink-100 flex flex-wrap items-center gap-6 text-xs text-stone-500">
              <div className="flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-pink-500" />
                <span className="font-medium text-stone-700">100% Pure Vegetarian &amp; Fresh Daily Dairy</span>
              </div>
              <div className="flex items-center gap-1.5">
                <HeartHandshake className="w-4 h-4 text-sky-500" />
                <span className="font-medium text-stone-700">Zero Artificial Preservatives</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Clock className="w-4 h-4 text-pink-400" />
                <span>9:30 AM – 10:30 PM Everyday</span>
              </div>
            </div>

          </div>

          {/* Right Column: High-Fidelity Real Ice Cream Photo Anchor */}
          <div className="lg:col-span-5">
            <div className="relative rounded-3xl bg-gradient-to-br from-pink-100/90 via-white to-sky-100/90 p-4 sm:p-5 shadow-xl shadow-pink-100/50 border-2 border-pink-200/80">
              
              {/* Featured Ice Cream Photography */}
              <div className="relative rounded-2xl overflow-hidden aspect-[4/3] shadow-md group">
                <img
                  src="/src/assets/images/royal_falooda_glass_1792567111187.jpg"
                  alt="DK Special Royal Falooda in Solapur with rose syrup, basil seeds, rabdi, and ice cream"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />

                {/* Scrim Overlay with Tag */}
                <div className="absolute inset-0 bg-gradient-to-t from-stone-950/80 via-stone-950/20 to-transparent flex flex-col justify-end p-5 text-white">
                  <div className="flex items-center justify-between text-xs font-semibold mb-1">
                    <span className="bg-pink-500/90 backdrop-blur-xs px-2.5 py-1 rounded-md text-[11px] uppercase tracking-wider font-bold">
                      Signature Royal Falooda
                    </span>
                    <span className="flex items-center gap-1 text-amber-300 font-mono font-bold bg-stone-900/60 px-2 py-0.5 rounded">
                      <Star className="w-3 h-3 fill-amber-300" /> 4.2 / 5
                    </span>
                  </div>
                  <h2 className="text-xl font-bold font-display text-white">
                    DK Special Royal Falooda
                  </h2>
                  <p className="text-xs text-pink-100/90 mt-0.5 line-clamp-1">
                    Damask rose nectar, soaked sabja, golden sev, mawa rabdi &amp; dual scoops
                  </p>
                </div>
              </div>

              {/* Mini Gallery Strip: 2 Real Image Previews (Colorful Cones & Strawberry Sundae) */}
              <div className="mt-4 grid grid-cols-2 gap-3">
                
                {/* Waffle Cones */}
                <div className="rounded-xl overflow-hidden border border-sky-200 bg-white shadow-2xs flex items-center gap-2.5 p-2 hover:border-sky-400 transition-colors">
                  <img
                    src="/src/assets/images/colorful_icecream_cones_1792567111321.jpg"
                    alt="Artisanal Ice Cream Waffle Cones"
                    className="w-14 h-14 rounded-lg object-cover shrink-0"
                    referrerPolicy="no-referrer"
                  />
                  <div className="min-w-0">
                    <span className="text-[10px] font-bold text-sky-600 block uppercase">Waffle Cones</span>
                    <span className="text-xs font-bold text-stone-900 block truncate">Pastel Scoops</span>
                    <span className="text-[11px] font-mono text-pink-600 font-bold">from ₹50</span>
                  </div>
                </div>

                {/* Strawberry Sundae */}
                <div className="rounded-xl overflow-hidden border border-pink-200 bg-white shadow-2xs flex items-center gap-2.5 p-2 hover:border-pink-400 transition-colors">
                  <img
                    src="/src/assets/images/delicious_icecream_sundae_1792567087675.jpg"
                    alt="Gourmet Strawberry Sundae"
                    className="w-14 h-14 rounded-lg object-cover shrink-0"
                    referrerPolicy="no-referrer"
                  />
                  <div className="min-w-0">
                    <span className="text-[10px] font-bold text-pink-600 block uppercase">Sundae Special</span>
                    <span className="text-xs font-bold text-stone-900 block truncate">Berry Cream</span>
                    <span className="text-[11px] font-mono text-pink-600 font-bold">₹110</span>
                  </div>
                </div>

              </div>

              {/* Bottom Quick Card Specs in Sky Blue & Baby Pink */}
              <div className="mt-4 pt-3 border-t border-pink-100/80 grid grid-cols-3 gap-2 text-center text-xs">
                <div className="bg-pink-50/70 p-2 rounded-lg">
                  <div className="text-[10px] text-pink-600 font-medium">Preparation</div>
                  <div className="font-bold text-stone-800 mt-0.5 font-mono">3–5 mins</div>
                </div>
                <div className="bg-sky-50/70 p-2 rounded-lg">
                  <div className="text-[10px] text-sky-600 font-medium">Rating</div>
                  <div className="font-bold text-stone-800 mt-0.5">4.2 ★ (37+ Recs)</div>
                </div>
                <div className="bg-pink-50/70 p-2 rounded-lg">
                  <div className="text-[10px] text-pink-600 font-medium">Sweetness</div>
                  <div className="font-bold text-stone-800 mt-0.5">Customizable</div>
                </div>
              </div>

            </div>
          </div>

        </div>

        {/* 4-Column Proof & Highlights Strip below hero split: Baby Pink & Sky Blue Cards */}
        <div className="mt-14 pt-8 border-t border-pink-200/60 grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
          <div className="p-4 rounded-2xl bg-white/80 border border-pink-100 shadow-xs">
            <div className="text-2xl sm:text-3xl font-extrabold text-pink-600 font-mono tabular-nums">4.2 / 5</div>
            <div className="text-xs sm:text-sm font-semibold text-stone-800 mt-1">Solapur Customer Rating</div>
            <div className="text-[11px] text-stone-500 mt-0.5">37+ verified Justdial reviews</div>
          </div>
          <div className="p-4 rounded-2xl bg-white/80 border border-sky-100 shadow-xs">
            <div className="text-2xl sm:text-3xl font-extrabold text-sky-600 font-mono tabular-nums">100%</div>
            <div className="text-xs sm:text-sm font-semibold text-stone-800 mt-1">Fresh Pure Dairy</div>
            <div className="text-[11px] text-stone-500 mt-0.5">Zero vegetable fat or gelatin</div>
          </div>
          <div className="p-4 rounded-2xl bg-white/80 border border-pink-100 shadow-xs">
            <div className="text-2xl sm:text-3xl font-extrabold text-pink-600 font-mono tabular-nums">₹35 – ₹140</div>
            <div className="text-xs sm:text-sm font-semibold text-stone-800 mt-1">Sweet Value Pricing</div>
            <div className="text-[11px] text-stone-500 mt-0.5">Pocket-friendly for students</div>
          </div>
          <div className="p-4 rounded-2xl bg-white/80 border border-sky-100 shadow-xs">
            <div className="text-2xl sm:text-3xl font-extrabold text-sky-600 font-mono tabular-nums">9:30 – 22:30</div>
            <div className="text-xs sm:text-sm font-semibold text-stone-800 mt-1">Open 13 Hours Daily</div>
            <div className="text-[11px] text-stone-500 mt-0.5">Day &amp; late evening cravings</div>
          </div>
        </div>

      </div>
    </section>
  );
};
