import React, { useState, useMemo } from 'react';
import { MenuItem } from '../types';
import { Sparkles, Check, RefreshCw, ShoppingBag } from 'lucide-react';

interface CustomFaloodaBuilderProps {
  onAddCustomFalooda: (item: MenuItem) => void;
}

interface SyrupOption {
  id: string;
  name: string;
  price: number;
  color: string;
  bgGradient: string;
}

interface ScoopOption {
  id: string;
  name: string;
  price: number;
  color: string;
}

interface ToppingOption {
  id: string;
  name: string;
  price: number;
}

const SYRUPS: SyrupOption[] = [
  { id: 'rose', name: 'Baby Pink Rose Damask', price: 20, color: '#F472B6', bgGradient: 'from-pink-400 to-rose-500' },
  { id: 'skyblue', name: 'Sky Blue Cotton Candy Berry', price: 25, color: '#38BDF8', bgGradient: 'from-sky-400 to-blue-500' },
  { id: 'kesar', name: 'Kashmiri Kesar Saffron', price: 30, color: '#FBBF24', bgGradient: 'from-amber-400 to-yellow-500' },
  { id: 'mango', name: 'Alphonso Mango Nectar', price: 25, color: '#FB923C', bgGradient: 'from-amber-400 to-orange-500' },
  { id: 'choco', name: 'Dark Chocolate Fudge', price: 25, color: '#78350F', bgGradient: 'from-amber-900 to-stone-900' },
];

const SCOOPS: ScoopOption[] = [
  { id: 'strawberry', name: 'Baby Pink Strawberry Cream', price: 40, color: '#F472B6' },
  { id: 'blueberry-sky', name: 'Sky Blue Vanilla Berry', price: 45, color: '#7DD3FC' },
  { id: 'rajbhog', name: 'Royal Rajbhog Scoop', price: 45, color: '#FDE047' },
  { id: 'kesar-pista', name: 'Kesar Pista Supreme', price: 40, color: '#BEF264' },
  { id: 'mango', name: 'Alphonso Mango Scoop', price: 35, color: '#FDBA74' },
  { id: 'roasted-almond', name: 'Roasted Almond Crunch', price: 40, color: '#FED7AA' },
  { id: 'belgian-choco', name: 'Belgian Dark Chocolate', price: 45, color: '#78350F' },
  { id: 'vanilla', name: 'Classic Vanilla Cream', price: 30, color: '#FEF9C3' },
];

const TOPPINGS: ToppingOption[] = [
  { id: 'nuts', name: 'Roasted Cashews & Pistachios', price: 20 },
  { id: 'tutti-frutti', name: 'Tutti Frutti Mix', price: 10 },
  { id: 'cherry', name: 'Glazed Red Cherry', price: 10 },
  { id: 'wafer', name: 'Crisp Wafer Stick', price: 10 }
];

export const CustomFaloodaBuilder: React.FC<CustomFaloodaBuilderProps> = ({ onAddCustomFalooda }) => {
  const [selectedSyrup, setSelectedSyrup] = useState<SyrupOption>(SYRUPS[0]);
  const [hasNoodles, setHasNoodles] = useState(true);
  const [hasSabja, setHasSabja] = useState(true);
  const [hasRabdi, setHasRabdi] = useState(true);
  const [hasJelly, setHasJelly] = useState(false);
  const [selectedScoop1, setSelectedScoop1] = useState<ScoopOption>(SCOOPS[0]);
  const [selectedScoop2, setSelectedScoop2] = useState<ScoopOption | null>(SCOOPS[1]);
  const [selectedToppings, setSelectedToppings] = useState<string[]>(['nuts', 'cherry']);
  const [addedSuccess, setAddedSuccess] = useState(false);

  // Calculate dynamic price
  const totalPrice = useMemo(() => {
    let total = 20; // base glass & cold milk
    total += selectedSyrup.price;
    if (hasNoodles) total += 15;
    if (hasSabja) total += 15;
    if (hasRabdi) total += 35;
    if (hasJelly) total += 15;
    total += selectedScoop1.price;
    if (selectedScoop2) total += selectedScoop2.price;
    selectedToppings.forEach(tId => {
      const top = TOPPINGS.find(t => t.id === tId);
      if (top) total += top.price;
    });
    return total;
  }, [selectedSyrup, hasNoodles, hasSabja, hasRabdi, hasJelly, selectedScoop1, selectedScoop2, selectedToppings]);

  const toggleTopping = (id: string) => {
    setSelectedToppings(prev =>
      prev.includes(id) ? prev.filter(t => t !== id) : [...prev, id]
    );
  };

  const resetCustomizer = () => {
    setSelectedSyrup(SYRUPS[0]);
    setHasNoodles(true);
    setHasSabja(true);
    setHasRabdi(true);
    setHasJelly(false);
    setSelectedScoop1(SCOOPS[0]);
    setSelectedScoop2(SCOOPS[1]);
    setSelectedToppings(['nuts', 'cherry']);
  };

  const handleAddToCart = () => {
    const toppingsList = selectedToppings
      .map(id => TOPPINGS.find(t => t.id === id)?.name)
      .filter(Boolean)
      .join(', ');

    const description = `Custom Solapur Falooda: ${selectedSyrup.name} base, ${hasNoodles ? 'Sev, ' : ''}${hasSabja ? 'Sabja, ' : ''}${hasRabdi ? 'Rabdi, ' : ''}Scoops: ${selectedScoop1.name}${selectedScoop2 ? ` & ${selectedScoop2.name}` : ''}, Topped with: ${toppingsList || 'No extra toppings'}.`;

    const customItem: MenuItem = {
      id: `custom-falooda-${Date.now()}`,
      name: `Custom Royal Falooda (${selectedSyrup.name})`,
      category: 'faloodas',
      price: totalPrice,
      description,
      ingredients: [
        selectedSyrup.name,
        selectedScoop1.name,
        ...(selectedScoop2 ? [selectedScoop2.name] : []),
        ...(hasRabdi ? ['Slow-cooked Rabdi'] : []),
        ...(hasSabja ? ['Sweet Basil Seeds'] : [])
      ],
      tag: 'Custom Creation',
      accentColor: selectedSyrup.color
    };

    onAddCustomFalooda(customItem);
    setAddedSuccess(true);
    setTimeout(() => setAddedSuccess(false), 2500);
  };

  return (
    <section id="custom-falooda" className="py-16 lg:py-24 bg-white border-y border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto pb-12">
          <div className="flex items-center justify-center gap-2 text-xs font-semibold text-amber-800 uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Interactive Parlor Experience</span>
            <span aria-hidden="true">·</span>
            <span>Made To Your Taste</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-stone-900 font-display mt-1">
            Build Your Own Royal Falooda
          </h2>
          <p className="text-stone-600 text-sm sm:text-base mt-2">
            Customize every layer from fragrant syrups and soaked basil seeds to creamy artisanal scoops and roasted dry fruits.
          </p>
        </div>

        {/* 2-Column Split: Customizer Controls (Left) vs Real-Time Visual Glass (Right) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Controls Column */}
          <div className="lg:col-span-7 space-y-8">
            
            {/* Step 1: Base Syrup */}
            <div>
              <div className="flex items-center justify-between mb-3">
                <span className="text-sm font-bold text-stone-900">
                  Step 1. Choose Nectar Base
                </span>
                <span className="text-xs text-stone-500">Pick 1 syrup</span>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                {SYRUPS.map(syrup => (
                  <button
                    key={syrup.id}
                    onClick={() => setSelectedSyrup(syrup)}
                    className={`p-3 rounded-lg border text-left transition-all ${
                      selectedSyrup.id === syrup.id
                        ? 'border-amber-600 bg-amber-50/60 ring-1 ring-amber-600'
                        : 'border-stone-200 hover:border-stone-300 bg-white'
                    }`}
                  >
                    <div className="flex items-center gap-2">
                      <span className="w-3 h-3 rounded-full" style={{ backgroundColor: syrup.color }} />
                      <span className="text-xs font-semibold text-stone-900 truncate">{syrup.name}</span>
                    </div>
                    <div className="text-xs font-mono text-stone-500 mt-1 tabular-nums">+₹{syrup.price}</div>
                  </button>
                ))}
              </div>
            </div>

            {/* Step 2: Foundation & Textures */}
            <div>
              <div className="flex items-center justify-between mb-3">
                <span className="text-sm font-bold text-stone-900">
                  Step 2. Signature Foundation Layers
                </span>
                <span className="text-xs text-stone-500">Toggle layers</span>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                <button
                  onClick={() => setHasSabja(prev => !prev)}
                  className={`p-3 rounded-xl border-2 text-left transition-all ${
                    hasSabja
                      ? 'border-pink-500 bg-pink-50/80 text-pink-900 font-semibold shadow-xs'
                      : 'border-pink-100 hover:border-pink-200 bg-white'
                  }`}
                >
                  <div className="text-xs font-bold text-stone-900">Sabja Seeds</div>
                  <div className="text-[11px] text-stone-500">Cooling basil seeds</div>
                  <div className="text-xs font-mono text-pink-600 mt-1 tabular-nums font-bold">+₹15</div>
                </button>

                <button
                  onClick={() => setHasNoodles(prev => !prev)}
                  className={`p-3 rounded-xl border-2 text-left transition-all ${
                    hasNoodles
                      ? 'border-sky-500 bg-sky-50/80 text-sky-900 font-semibold shadow-xs'
                      : 'border-sky-100 hover:border-sky-200 bg-white'
                  }`}
                >
                  <div className="text-xs font-bold text-stone-900">Falooda Sev</div>
                  <div className="text-[11px] text-stone-500">Chilled vermicelli</div>
                  <div className="text-xs font-mono text-sky-600 mt-1 tabular-nums font-bold">+₹15</div>
                </button>

                <button
                  onClick={() => setHasRabdi(prev => !prev)}
                  className={`p-3 rounded-xl border-2 text-left transition-all ${
                    hasRabdi
                      ? 'border-pink-500 bg-pink-50/80 text-pink-900 font-semibold shadow-xs'
                      : 'border-pink-100 hover:border-pink-200 bg-white'
                  }`}
                >
                  <div className="text-xs font-bold text-stone-900">Mawa Rabdi</div>
                  <div className="text-[11px] text-stone-500">Slow cooked cream</div>
                  <div className="text-xs font-mono text-pink-600 mt-1 tabular-nums font-bold">+₹35</div>
                </button>

                <button
                  onClick={() => setHasJelly(prev => !prev)}
                  className={`p-3 rounded-xl border-2 text-left transition-all ${
                    hasJelly
                      ? 'border-sky-500 bg-sky-50/80 text-sky-900 font-semibold shadow-xs'
                      : 'border-sky-100 hover:border-sky-200 bg-white'
                  }`}
                >
                  <div className="text-xs font-bold text-stone-900">Pastel Jelly</div>
                  <div className="text-[11px] text-stone-500">Bite-sized cubes</div>
                  <div className="text-xs font-mono text-sky-600 mt-1 tabular-nums font-bold">+₹15</div>
                </button>
              </div>
            </div>

            {/* Step 3: Ice Cream Scoops */}
            <div>
              <div className="flex items-center justify-between mb-3">
                <span className="text-sm font-bold text-stone-900">
                  Step 3. Select Ice Cream Scoops
                </span>
                <span className="text-xs text-sky-700 font-medium">Scoop 1 (Primary) &amp; Scoop 2 (Optional)</span>
              </div>

              {/* Scoop 1 */}
              <div className="space-y-3">
                <div className="text-xs font-bold text-pink-700">Primary Scoop:</div>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                  {SCOOPS.map(scoop => (
                    <button
                      key={`scoop1-${scoop.id}`}
                      onClick={() => setSelectedScoop1(scoop)}
                      className={`px-3 py-2 rounded-xl border-2 text-left transition-all ${
                        selectedScoop1.id === scoop.id
                          ? 'border-pink-500 bg-pink-50 font-bold text-pink-900 shadow-xs'
                          : 'border-stone-200 text-stone-700 hover:border-pink-200 bg-white'
                      }`}
                    >
                      <div className="text-xs truncate">{scoop.name}</div>
                      <div className="text-[11px] font-mono text-stone-500 tabular-nums font-bold">+₹{scoop.price}</div>
                    </button>
                  ))}
                </div>

                {/* Scoop 2 */}
                <div className="pt-2">
                  <div className="flex items-center justify-between text-xs font-bold text-sky-700 mb-1.5">
                    <span>Second Scoop (Optional):</span>
                    {selectedScoop2 && (
                      <button
                        onClick={() => setSelectedScoop2(null)}
                        className="text-pink-500 hover:text-pink-700 text-[11px] font-medium"
                      >
                        Remove 2nd Scoop
                      </button>
                    )}
                  </div>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                    {SCOOPS.map(scoop => (
                      <button
                        key={`scoop2-${scoop.id}`}
                        onClick={() => setSelectedScoop2(prev => prev?.id === scoop.id ? null : scoop)}
                        className={`px-3 py-2 rounded-xl border-2 text-left transition-all ${
                          selectedScoop2?.id === scoop.id
                            ? 'border-sky-500 bg-sky-50 font-bold text-sky-900 shadow-xs'
                            : 'border-stone-200 text-stone-700 hover:border-sky-200 bg-white'
                        }`}
                      >
                        <div className="text-xs truncate">{scoop.name}</div>
                        <div className="text-[11px] font-mono text-stone-500 tabular-nums font-bold">+₹{scoop.price}</div>
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Step 4: Premium Garnishes */}
            <div>
              <div className="flex items-center justify-between mb-3">
                <span className="text-sm font-bold text-stone-900">
                  Step 4. Crunchy Garnishes &amp; Toppings
                </span>
                <span className="text-xs text-stone-500">Pick all you like</span>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                {TOPPINGS.map(top => (
                  <button
                    key={top.id}
                    onClick={() => toggleTopping(top.id)}
                    className={`p-3 rounded-xl border-2 text-left transition-all ${
                      selectedToppings.includes(top.id)
                        ? 'border-pink-500 bg-pink-50 font-bold text-pink-900 shadow-xs'
                        : 'border-pink-100 hover:border-pink-200 bg-white'
                    }`}
                  >
                    <div className="text-xs font-bold text-stone-900 truncate">{top.name}</div>
                    <div className="text-xs font-mono text-pink-600 mt-1 tabular-nums font-bold">+₹{top.price}</div>
                  </button>
                ))}
              </div>
            </div>

            {/* Actions Bar */}
            <div className="pt-4 border-t border-pink-100 flex items-center justify-between gap-4">
              <button
                onClick={resetCustomizer}
                className="text-xs font-semibold text-stone-500 hover:text-pink-600 flex items-center gap-1.5 transition-colors"
              >
                <RefreshCw className="w-3.5 h-3.5" />
                <span>Reset Layers</span>
              </button>

              <button
                onClick={handleAddToCart}
                className="px-6 py-3 bg-gradient-to-r from-pink-500 via-rose-500 to-sky-500 text-white font-bold rounded-xl hover:from-pink-600 hover:to-sky-600 active:scale-95 transition-all flex items-center gap-2 text-sm shadow-md shadow-pink-200"
              >
                {addedSuccess ? (
                  <>
                    <Check className="w-4 h-4 text-white" />
                    <span>Added to Cart!</span>
                  </>
                ) : (
                  <>
                    <ShoppingBag className="w-4 h-4" />
                    <span>Add Custom Falooda (₹{totalPrice})</span>
                  </>
                )}
              </button>
            </div>

          </div>

          {/* Real-Time Visual Glass Column with Baby Pink & Sky Blue Frame */}
          <div className="lg:col-span-5 bg-gradient-to-b from-pink-50/90 via-white to-sky-50/90 rounded-3xl border-2 border-pink-200/80 p-6 sm:p-8 flex flex-col items-center shadow-lg shadow-pink-100/50">
            
            <div className="w-full flex items-center justify-between pb-3 border-b border-pink-100 text-xs text-stone-500">
              <span className="font-bold text-pink-700 uppercase tracking-wide">Live Glass Preview</span>
              <span className="font-mono text-pink-700 font-extrabold text-base tabular-nums">Total: ₹{totalPrice}</span>
            </div>

            {/* Interactive Visual Glass Representation */}
            <div className="relative my-8 w-56 h-84 flex flex-col justify-end p-2 bg-gradient-to-b from-sky-50/50 to-pink-50/40 rounded-b-3xl border-3 border-sky-300 shadow-md overflow-hidden">
              
              {/* Toppings / Cherry / Nuts Graphic */}
              <div className="absolute top-2 left-0 right-0 z-20 flex flex-wrap items-center justify-center gap-1 px-2">
                {selectedToppings.includes('cherry') && (
                  <span className="text-lg" title="Glazed Cherry">🍒</span>
                )}
                {selectedToppings.includes('nuts') && (
                  <span className="text-xs bg-amber-100 text-amber-900 font-bold px-1.5 py-0.5 rounded shadow-2xs">
                    Nuts &amp; Pista
                  </span>
                )}
                {selectedToppings.includes('wafer') && (
                  <span className="text-xs bg-sky-200 text-sky-900 font-bold px-1.5 py-0.5 rounded shadow-2xs">
                    Wafer 🥢
                  </span>
                )}
                {selectedToppings.includes('tutti-frutti') && (
                  <span className="text-[10px] bg-pink-200 text-pink-900 font-bold px-1 rounded">
                    Tutti-Frutti
                  </span>
                )}
              </div>

              {/* Scoop 2 (if present) */}
              {selectedScoop2 && (
                <div 
                  className="h-14 rounded-full mx-auto w-40 flex items-center justify-center text-xs font-bold text-stone-900 shadow-sm border border-black/10 z-10 transition-all duration-300"
                  style={{ backgroundColor: selectedScoop2.color }}
                >
                  <span className="truncate px-2 text-[11px]">{selectedScoop2.name}</span>
                </div>
              )}

              {/* Scoop 1 */}
              <div 
                className="h-16 rounded-full mx-auto w-48 flex items-center justify-center text-xs font-bold text-stone-900 shadow-sm border border-black/10 z-10 -mt-3 transition-all duration-300"
                style={{ backgroundColor: selectedScoop1.color }}
              >
                <span className="truncate px-2 text-[11px]">{selectedScoop1.name}</span>
              </div>

              {/* Rabdi Layer (if present) */}
              {hasRabdi && (
                <div className="h-9 bg-pink-100/90 border-y border-pink-200 flex items-center justify-center text-[10px] font-bold text-pink-900 transition-all duration-200">
                  Thick Mawa Rabdi Layer
                </div>
              )}

              {/* Falooda Sev (Vermicelli) */}
              {hasNoodles && (
                <div className="h-10 bg-amber-50 border-b border-amber-200/50 flex items-center justify-center text-[10px] font-bold text-amber-800 transition-all duration-200">
                  Golden Falooda Vermicelli
                </div>
              )}

              {/* Jelly Layer */}
              {hasJelly && (
                <div className="h-7 bg-sky-200/80 border-b border-sky-300 flex items-center justify-center text-[10px] font-bold text-sky-900 transition-all duration-200">
                  Pastel Jelly Chunks
                </div>
              )}

              {/* Sabja Seeds Layer */}
              {hasSabja && (
                <div className="h-8 bg-stone-800 text-stone-200 flex items-center justify-center text-[10px] font-mono transition-all duration-200">
                  Hydrated Sabja (Basil Seeds)
                </div>
              )}

              {/* Base Syrup */}
              <div 
                className={`h-14 rounded-b-2xl flex items-center justify-center text-xs font-bold text-white shadow-sm transition-all duration-300 bg-gradient-to-r ${selectedSyrup.bgGradient}`}
              >
                {selectedSyrup.name}
              </div>

            </div>

            {/* Recipe Summary Box */}
            <div className="w-full mt-2 text-xs text-stone-600 space-y-1 text-center">
              <div className="font-bold text-pink-800">Your Handcrafted Recipe:</div>
              <p className="text-[11px] text-stone-500">
                {selectedSyrup.name} with {selectedScoop1.name}
                {selectedScoop2 ? ` & ${selectedScoop2.name}` : ''}
                {hasRabdi ? ' + Rabdi' : ''}
                {hasSabja ? ' + Sabja' : ''}
              </p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
