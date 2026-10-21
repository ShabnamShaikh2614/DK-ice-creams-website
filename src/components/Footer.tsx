import React from 'react';
import { MapPin, Phone, Clock, ArrowUp, Send } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-stone-900 text-stone-300 pt-16 pb-12 border-t border-stone-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-stone-800">
          
          {/* Brand & Narrative */}
          <div className="lg:col-span-5 space-y-4">
            <h3 className="text-xl font-bold text-white font-display">
              DK Ice Cream &amp; Juice Center
            </h3>
            <p className="text-xs sm:text-sm text-stone-400 leading-relaxed max-w-sm">
              Solapur&apos;s beloved neighborhood destination on Hotgi Road near Asra Chowk. Serving cold-pressed seasonal fruit juices, authentic royal faloodas, and rich Maharashtrian mastani.
            </p>
            <div className="pt-2 text-xs text-stone-400 space-y-1.5">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-pink-400 shrink-0" />
                <span>Opposite Mannat Hall, Sainath Nagar, Hotgi Road, Solapur 413003</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-sky-400 shrink-0" />
                <span>Open Everyday: 9:30 AM – 10:30 PM</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-pink-400 shrink-0" />
                <span>Helpline / Orders: +91 98220 54321</span>
              </div>
            </div>
          </div>

          {/* Quick Menu Links */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider">
              Popular Specialties
            </h4>
            <ul className="space-y-2 text-xs text-stone-400">
              <li><a href="#menu" className="hover:text-pink-400 transition-colors">DK Special Royal Falooda</a></li>
              <li><a href="#menu" className="hover:text-sky-400 transition-colors">Strawberry &amp; Vanilla Dream Sundae</a></li>
              <li><a href="#menu" className="hover:text-pink-400 transition-colors">Solapur Mango Mastani</a></li>
              <li><a href="#menu" className="hover:text-sky-400 transition-colors">Fresh Sweet Lime (Mosambi) Juice</a></li>
              <li><a href="#menu" className="hover:text-pink-400 transition-colors">Pure Ruby Pomegranate Juice</a></li>
              <li><a href="#menu" className="hover:text-sky-400 transition-colors">Special Malai Lassi</a></li>
            </ul>
          </div>

          {/* Navigation & Solapur Landmarks */}
          <div className="lg:col-span-4 space-y-3">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider">
              Solapur Direct Order &amp; Directions
            </h4>
            <p className="text-xs text-stone-400 leading-relaxed">
              Planning a family visit or takeaway parcel from Asra Chowk? Send your order directly to our counter via WhatsApp for instant preparation.
            </p>
            <div className="pt-2 flex flex-col gap-2">
              <a
                href="https://wa.me/919822054321?text=Hello%20DK%20Ice%20Cream%20Center%2C%20I%20would%20like%20to%20place%20an%20order."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-4 py-2.5 bg-gradient-to-r from-pink-500 to-sky-500 hover:from-pink-600 hover:to-sky-600 text-white text-xs font-bold rounded-xl transition-all shadow-md shadow-pink-900/50"
              >
                <Send className="w-3.5 h-3.5" />
                <span>WhatsApp Instant Order</span>
              </a>

              <a
                href="https://www.google.com/maps/search/?api=1&query=DK+Ice+Cream+And+Juice+Center+Hotgi+Road+Asra+Chowk+Solapur"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-4 py-2 bg-stone-800 hover:bg-stone-700 text-stone-200 text-xs font-medium rounded-xl transition-colors border border-stone-700"
              >
                <MapPin className="w-3.5 h-3.5 text-sky-400" />
                <span>Get Directions (150m from Asra Chowk)</span>
              </a>
            </div>
          </div>

        </div>

        {/* Quiet Bottom Strip */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-stone-500">
          <div>
            &copy; {new Date().getFullYear()} DK Ice Cream &amp; Juice Center, Solapur. All rights reserved.
          </div>

          <div className="flex items-center gap-6">
            <span>Pure Vegetarian</span>
            <span aria-hidden="true">·</span>
            <span>Hotgi Road, Solapur</span>
            <button
              onClick={scrollToTop}
              className="flex items-center gap-1 text-stone-400 hover:text-white transition-colors"
            >
              <span>Back to top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};
