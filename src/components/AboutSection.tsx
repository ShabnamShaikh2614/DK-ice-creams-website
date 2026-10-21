import React from 'react';
import { ShieldCheck, Droplet, Sun, Sparkles } from 'lucide-react';

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-16 lg:py-24 bg-white/80 border-b border-pink-100 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl pb-10">
          <div className="flex items-center gap-2 text-xs font-bold text-pink-600 uppercase tracking-wider">
            <span className="bg-pink-100 px-2 py-0.5 rounded-full">Our Roots &amp; Craft</span>
            <span aria-hidden="true">·</span>
            <span className="text-sky-700">Solapur Proud Since 2014</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-stone-900 font-display mt-1.5">
            Crafting Solapur&apos;s Sweet Memories
          </h2>
          <p className="text-stone-600 text-sm sm:text-base mt-2.5 leading-relaxed">
            What started as a neighborhood juice stall on Hotgi Road has blossomed into one of Asra Chowk&apos;s most cherished dessert landmarks. We believe in one simple principle: real whole fruits, pure thick milk, and zero compromise on hygiene.
          </p>
        </div>

        {/* 4 Pillars of Quality */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          
          <div className="p-5 rounded-2xl bg-gradient-to-b from-pink-50/70 to-white border-2 border-pink-100 space-y-3 shadow-xs">
            <div className="w-10 h-10 rounded-xl bg-pink-100 flex items-center justify-center text-pink-600">
              <Sun className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-stone-900 font-display">
              Orchard-Fresh Fruits
            </h3>
            <p className="text-xs text-stone-600 leading-relaxed">
              We procure farm-picked pomegranates, sweet limes, and Nagpur citrus every morning from local wholesale mandis in Solapur.
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-gradient-to-b from-sky-50/70 to-white border-2 border-sky-100 space-y-3 shadow-xs">
            <div className="w-10 h-10 rounded-xl bg-sky-100 flex items-center justify-center text-sky-600">
              <Droplet className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-stone-900 font-display">
              Pure Dairy &amp; Mawa Rabdi
            </h3>
            <p className="text-xs text-stone-600 leading-relaxed">
              Our rabdi is simmered slowly from pure whole milk until rich and caramelized. No artificial thickeners or starch fillers.
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-gradient-to-b from-pink-50/70 to-white border-2 border-pink-100 space-y-3 shadow-xs">
            <div className="w-10 h-10 rounded-xl bg-pink-100 flex items-center justify-center text-pink-600">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-stone-900 font-display">
              RO Water &amp; Food Grade Ice
            </h3>
            <p className="text-xs text-stone-600 leading-relaxed">
              Every drop of water used for juices, lemon soda, and ice is triple-filtered via commercial UV/RO systems for complete safety.
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-gradient-to-b from-sky-50/70 to-white border-2 border-sky-100 space-y-3 shadow-xs">
            <div className="w-10 h-10 rounded-xl bg-sky-100 flex items-center justify-center text-sky-600">
              <Sparkles className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-stone-900 font-display">
              Pune-Style Mastani Craft
            </h3>
            <p className="text-xs text-stone-600 leading-relaxed">
              Authentic velvety thick milkshakes generously topped with dense ice cream scoops, glazed cherries, and roasted dry fruits.
            </p>
          </div>

        </div>

        {/* Seasonal Fruit Calendar Strip in Baby Pink & Sky Blue */}
        <div className="mt-12 p-6 rounded-3xl bg-gradient-to-r from-pink-100/90 via-sky-50 to-pink-50 border-2 border-pink-200/80 shadow-xs">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div>
              <span className="text-xs font-bold text-pink-600 uppercase tracking-wider">Nature&apos;s Harvest</span>
              <h4 className="text-lg font-bold text-stone-900 font-display mt-0.5">
                Seasonal Fruit Juice Calendar
              </h4>
              <p className="text-xs sm:text-sm text-stone-600 mt-1 max-w-xl">
                Experience the peak sweetness of handpicked harvests across seasons at DK Ice Cream Center.
              </p>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs">
              <div className="p-3 bg-white/95 rounded-xl border border-pink-200 shadow-2xs">
                <span className="font-bold text-pink-600 block">Summer Special</span>
                <span className="text-stone-600 text-[11px]">Ratnagiri Mango &amp; Watermelon</span>
              </div>
              <div className="p-3 bg-white/95 rounded-xl border border-sky-200 shadow-2xs">
                <span className="font-bold text-sky-600 block">Monsoon Cooler</span>
                <span className="text-stone-600 text-[11px]">Konkan Kokum &amp; Mosambi</span>
              </div>
              <div className="p-3 bg-white/95 rounded-xl border border-pink-200 shadow-2xs">
                <span className="font-bold text-pink-600 block">Winter Harvest</span>
                <span className="text-stone-600 text-[11px]">Sitaphal &amp; Ruby Pomegranate</span>
              </div>
              <div className="p-3 bg-white/95 rounded-xl border border-sky-200 shadow-2xs">
                <span className="font-bold text-sky-600 block">All-Year Favorites</span>
                <span className="text-stone-600 text-[11px]">Royal Falooda &amp; Chikoo Shake</span>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
