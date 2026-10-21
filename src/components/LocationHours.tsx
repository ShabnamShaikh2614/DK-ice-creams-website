import React, { useState } from 'react';
import { SOLAPUR_LANDMARKS } from '../data/landmarksData';
import { MapPin, Clock, Navigation, Phone, Compass, CheckCircle2 } from 'lucide-react';

export const LocationHours: React.FC = () => {
  const [selectedLandmark, setSelectedLandmark] = useState<string>(SOLAPUR_LANDMARKS[0].name);

  const currentLandmark = SOLAPUR_LANDMARKS.find(l => l.name === selectedLandmark) || SOLAPUR_LANDMARKS[0];

  const days = [
    { day: 'Monday', hours: '9:30 AM – 10:30 PM', isToday: true },
    { day: 'Tuesday', hours: '9:30 AM – 10:30 PM' },
    { day: 'Wednesday', hours: '9:30 AM – 10:30 PM' },
    { day: 'Thursday', hours: '9:30 AM – 10:30 PM' },
    { day: 'Friday', hours: '9:30 AM – 10:30 PM' },
    { day: 'Saturday', hours: '9:30 AM – 10:30 PM' },
    { day: 'Sunday', hours: '9:30 AM – 10:30 PM' },
  ];

  return (
    <section id="location" className="py-16 lg:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-b border-pink-100">
      
      {/* Header */}
      <div className="pb-8 border-b border-pink-200/70">
        <div className="flex items-center gap-2 text-xs font-bold text-sky-700 uppercase tracking-wider">
          <Compass className="w-3.5 h-3.5 text-sky-500" />
          <span className="bg-sky-100 px-2 py-0.5 rounded-full">Solapur City Destination</span>
          <span aria-hidden="true" className="text-pink-300">·</span>
          <span className="text-pink-600 font-semibold">Hotgi Road &amp; Asra Chowk</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-stone-900 font-display mt-1.5">
          Visit Us in Sainath Nagar, Solapur
        </h2>
        <p className="text-stone-600 text-sm sm:text-base mt-2 max-w-3xl">
          Located right opposite Mannat Hall on Hotgi Road, just a 2-minute walk from the bustling Asra Chowk junction. Easy parking and evening seating available.
        </p>
      </div>

      <div className="mt-10 grid grid-cols-1 lg:grid-cols-12 gap-10">
        
        {/* Left Column: Location Card & Interactive Landmark Distance Calculator */}
        <div className="lg:col-span-7 space-y-6">
          
          {/* Main Address Card */}
          <div className="p-6 rounded-2xl bg-white border-2 border-pink-100 shadow-md shadow-pink-100/40 space-y-4">
            <div className="flex items-start justify-between gap-4">
              <div>
                <span className="text-xs font-bold text-pink-600 uppercase">Exact Address</span>
                <h3 className="text-xl font-bold text-stone-900 font-display mt-0.5">
                  DK Ice Cream &amp; Juice Center
                </h3>
                <p className="text-sm text-stone-600 mt-1 leading-relaxed">
                  Sainath Nagar, Hotgi Road, near Asra Chowk, (Opposite Mannat Function Hall),
                  <br />
                  Solapur, Maharashtra 413003, India
                </p>
                <div className="mt-2 text-xs font-mono text-sky-700 bg-sky-50 px-2.5 py-1 rounded-md inline-block">
                  DIGIPIN: 432-F3J-7L27 · Opposite Mannat Hall
                </div>
              </div>

              <div className="p-3 bg-pink-100/80 rounded-xl text-pink-600 shrink-0">
                <MapPin className="w-6 h-6" />
              </div>
            </div>

            {/* Direct Map & Navigation Buttons */}
            <div className="pt-3 border-t border-pink-100 flex flex-wrap items-center gap-3">
              <a
                href="https://www.google.com/maps/search/?api=1&query=DK+Ice+Cream+And+Juice+Center+Hotgi+Road+Asra+Chowk+Solapur"
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-2.5 bg-gradient-to-r from-sky-500 to-blue-600 text-white text-xs font-bold rounded-xl hover:from-sky-600 hover:to-blue-700 transition-all flex items-center gap-2 shadow-xs"
              >
                <Navigation className="w-3.5 h-3.5" />
                <span>Open in Google Maps</span>
              </a>

              <a
                href="tel:+919822054321"
                className="px-5 py-2.5 bg-pink-50 text-pink-700 border border-pink-200 text-xs font-bold rounded-xl hover:bg-pink-100 transition-colors flex items-center gap-2"
              >
                <Phone className="w-3.5 h-3.5 text-pink-500" />
                <span>Call: +91 98220 54321</span>
              </a>
            </div>
          </div>

          {/* Interactive Distance from Popular Solapur Spots */}
          <div className="p-6 rounded-2xl bg-gradient-to-br from-pink-50/60 to-sky-50/60 border-2 border-pink-100 space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <h4 className="text-sm font-bold text-stone-900">
                  How Far Are You From Us in Solapur?
                </h4>
                <p className="text-xs text-stone-500 mt-0.5">
                  Select your neighborhood to see estimated travel time to DK Center
                </p>
              </div>
            </div>

            {/* Landmark Selector Pills/Tabs in Baby Pink & Sky Blue */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
              {SOLAPUR_LANDMARKS.map(l => (
                <button
                  key={l.name}
                  onClick={() => setSelectedLandmark(l.name)}
                  className={`p-2.5 text-left rounded-xl border-2 text-xs transition-all ${
                    selectedLandmark === l.name
                      ? 'border-pink-500 bg-white font-bold text-pink-700 shadow-xs'
                      : 'border-pink-100 bg-white/70 text-stone-600 hover:border-sky-300'
                  }`}
                >
                  <div className="font-bold truncate">{l.name}</div>
                  <div className="text-[11px] text-sky-600 font-sans">{l.marathiName}</div>
                </button>
              ))}
            </div>

            {/* Calculated Distance Display */}
            <div className="p-4 bg-white rounded-xl border border-pink-100 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <span className="text-xs text-pink-500 font-semibold">Route from {currentLandmark.name}:</span>
                <div className="text-sm font-semibold text-stone-800 mt-0.5">
                  {currentLandmark.description}
                </div>
              </div>

              <div className="flex items-center gap-4 shrink-0 font-mono text-center">
                <div className="bg-pink-50 px-3 py-1.5 rounded-lg border border-pink-200">
                  <span className="block text-[10px] text-pink-600 uppercase tracking-wide font-bold">Distance</span>
                  <span className="text-sm font-extrabold text-pink-700 tabular-nums">{currentLandmark.distance}</span>
                </div>
                <div className="bg-sky-50 px-3 py-1.5 rounded-lg border border-sky-200">
                  <span className="block text-[10px] text-sky-600 uppercase tracking-wide font-bold">By Bike</span>
                  <span className="text-sm font-extrabold text-sky-700 tabular-nums">{currentLandmark.timeByBike}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Parlor Amenities */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 text-xs text-stone-600">
            <div className="p-3 bg-white rounded-lg border border-stone-200 flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
              <span>Two-Wheeler &amp; Car Parking</span>
            </div>
            <div className="p-3 bg-white rounded-lg border border-stone-200 flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
              <span>Spill-Proof Takeaway</span>
            </div>
            <div className="p-3 bg-white rounded-lg border border-stone-200 flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
              <span>UPI / QR &amp; Cash Accepted</span>
            </div>
          </div>

        </div>

        {/* Right Column: Operating Hours & Peak Times */}
        <div className="lg:col-span-5 space-y-6">
          
          <div className="p-6 rounded-xl bg-white border border-stone-200 shadow-xs space-y-5">
            <div className="flex items-center gap-2.5 pb-4 border-b border-stone-100">
              <Clock className="w-5 h-5 text-amber-700" />
              <div>
                <h3 className="text-lg font-bold text-stone-900 font-display">
                  Operating Hours
                </h3>
                <span className="text-xs text-stone-500">Open 7 days a week including public holidays</span>
              </div>
            </div>

            {/* Hours Table with tabular numerals */}
            <div className="space-y-2.5 text-xs">
              {days.map(d => (
                <div
                  key={d.day}
                  className={`flex items-center justify-between py-1.5 px-2 rounded-md ${
                    d.isToday ? 'bg-amber-50 font-semibold text-amber-950' : 'text-stone-700'
                  }`}
                >
                  <div className="flex items-center gap-2">
                    <span>{d.day}</span>
                    {d.isToday && (
                      <span className="text-[10px] text-amber-700 uppercase tracking-wider font-bold">
                        (Today)
                      </span>
                    )}
                  </div>
                  <span className="font-mono tabular-nums">{d.hours}</span>
                </div>
              ))}
            </div>

            {/* Solapur Evening Rush Tip */}
            <div className="p-3.5 bg-stone-50 rounded-lg border border-stone-200 text-xs text-stone-600 space-y-1">
              <span className="font-bold text-stone-900">Visiting Tip for Solapur Locals:</span>
              <p className="text-[11px] leading-relaxed">
                Evenings between 7:30 PM and 10:00 PM are our most popular hours for families and friends enjoying faloodas. If you prefer quiet seating, afternoons (12:00 PM – 4:30 PM) are peaceful!
              </p>
            </div>

          </div>

          {/* Other Top Spots note as asked in prompt */}
          <div className="p-5 rounded-xl bg-stone-50 border border-stone-200 text-xs text-stone-600 space-y-2">
            <h4 className="font-bold text-stone-900">
              Around Hotgi Road &amp; Asra Chowk:
            </h4>
            <p className="text-[11px] leading-relaxed">
              D K Ice Cream and Juice Center is prominently situated opposite Mannat Hall. When visiting Asra Chowk, our parlor provides a convenient, clean, and family-friendly dessert retreat.
            </p>
          </div>

        </div>

      </div>

    </section>
  );
};
