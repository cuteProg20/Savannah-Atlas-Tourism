import React, { useState } from 'react';
import { 
  Users, 
  Compass, 
  Sparkles, 
  MapPin, 
  Ship, 
  Check, 
  ArrowRight, 
  Tag,
  CheckCircle2,
  Mountain,
  Palmtree
} from 'lucide-react';
import { TravelStyleInfo, Language, Currency, TravelStyle } from '../types';
import { TRAVEL_STYLES_DATA } from '../data/travelStylesData';
import { TRANSLATIONS, formatPrice } from '../data/translations';

interface TravelStylesSectionProps {
  currentLang: Language;
  currentCurrency: Currency;
  onFilterByStyle: (style: TravelStyle) => void;
}

export const TravelStylesSection: React.FC<TravelStylesSectionProps> = ({
  currentLang,
  currentCurrency,
  onFilterByStyle,
}) => {
  const t = TRANSLATIONS[currentLang] || TRANSLATIONS.en;
  const [selectedStyleId, setSelectedStyleId] = useState<TravelStyle>('Private 4x4 Jeep');

  const selectedStyle = TRAVEL_STYLES_DATA.find((s) => s.id === selectedStyleId) || TRAVEL_STYLES_DATA[0];

  const getIcon = (name: string) => {
    switch (name) {
      case 'Users': return Users;
      case 'Compass': return Compass;
      case 'Sparkles': return Sparkles;
      case 'MapPin': return MapPin;
      case 'Ship': return Ship;
      default: return Compass;
    }
  };

  return (
    <section id="travel-styles" className="py-20 bg-[#FAFAF9] text-slate-900 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <div className="inline-flex items-center gap-2 bg-blue-50 border border-blue-200 text-[#1E3A8A] text-xs font-bold uppercase tracking-wider px-3.5 py-1.5 rounded-full">
            <Compass className="w-4 h-4 text-[#2563EB]" />
            <span>{t.navTravelStyles}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-black text-[#1E3A8A] tracking-tight">
            {t.stylesTitle}
          </h2>
          <p className="text-base sm:text-lg text-slate-600 font-normal">
            {t.stylesSubtitle}
          </p>
        </div>

        {/* Style Selector Tabs */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 mb-10">
          {TRAVEL_STYLES_DATA.map((style) => {
            const Icon = getIcon(style.iconName);
            const isSelected = style.id === selectedStyleId;

            return (
              <button
                key={style.id}
                onClick={() => setSelectedStyleId(style.id)}
                className={`p-4 rounded-2xl border text-left transition-all duration-200 flex flex-col justify-between space-y-2 shadow-xs ${
                  isSelected
                    ? 'bg-[#1E3A8A] text-white border-[#1E3A8A] shadow-md ring-2 ring-blue-400 font-bold'
                    : 'bg-white text-slate-700 border-slate-200 hover:border-blue-400 hover:bg-slate-50'
                }`}
              >
                <div className="flex items-center justify-between">
                  <div className={`w-8 h-8 rounded-xl flex items-center justify-center ${
                    isSelected ? 'bg-white/20 text-amber-300 font-bold' : 'bg-blue-50 text-[#1E3A8A]'
                  }`}>
                    <Icon className="w-4 h-4" />
                  </div>
                </div>

                <div>
                  <div className={`font-bold text-xs sm:text-sm line-clamp-1 ${isSelected ? 'text-white' : 'text-slate-900'}`}>
                    {currentLang === 'ru' ? style.ruTitle : style.title}
                  </div>
                  <div className={`text-[11px] font-medium ${isSelected ? 'text-amber-200' : 'text-slate-500'}`}>
                    {currentLang === 'ru' ? style.ruTag : style.tag}
                  </div>
                </div>
              </button>
            );
          })}
        </div>

        {/* Selected Style Detail Spotlight Box */}
        <div className="bg-white rounded-3xl border border-slate-200 overflow-hidden shadow-sm grid grid-cols-1 lg:grid-cols-12">
          {/* Photo banner (5 cols) */}
          <div className="lg:col-span-5 relative min-h-[300px] lg:min-h-[420px]">
            <img
              src={selectedStyle.image}
              alt={selectedStyle.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent" />
            <div className="absolute bottom-6 left-6 right-6 text-white">
              <span className="bg-amber-400 text-slate-950 text-[10px] font-black uppercase px-2.5 py-1 rounded shadow-md mb-2 inline-block">
                {currentLang === 'ru' ? selectedStyle.ruTag : selectedStyle.tag}
              </span>
              <div className="text-xl sm:text-2xl font-serif font-black text-white">
                {currentLang === 'ru' ? selectedStyle.ruTitle : selectedStyle.title}
              </div>
            </div>
          </div>

          {/* Style Description & Inclusions (7 cols) */}
          <div className="lg:col-span-7 p-6 sm:p-10 flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              <div className="flex items-center justify-between border-b border-slate-100 pb-3">
                <div>
                  <span className="text-[11px] text-slate-500 uppercase tracking-wider block font-bold">
                    {t.fromPrice}
                  </span>
                  <span className="text-2xl font-serif font-black text-[#1E3A8A]">
                    {formatPrice(selectedStyle.priceFromUSD, currentCurrency)}
                  </span>
                  <span className="text-xs text-slate-400 ml-1">/ {t.perPerson}</span>
                </div>

                <span className="text-xs font-bold text-emerald-700 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200">
                  {currentLang === 'ru' ? '✓ TATO / TTB Лицензировано' : '✓ TATO / TTB Licensed'}
                </span>
              </div>

              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                {currentLang === 'ru' ? selectedStyle.ruDesc : selectedStyle.desc}
              </p>

              {/* Feature Bullet Points */}
              <div className="space-y-2 pt-2">
                <div className="text-xs font-bold uppercase tracking-wider text-[#1E3A8A]">
                  {currentLang === 'ru' ? 'Ключевые преимущества формата:' : 'Key Style Inclusions & Features:'}
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {(currentLang === 'ru' ? selectedStyle.ruFeatures : selectedStyle.features).map((feat, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-xs text-slate-700">
                      <CheckCircle2 className="w-4 h-4 text-[#2563EB] shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Filter by this style CTA */}
            <div className="pt-6 border-t border-slate-100 flex flex-wrap items-center justify-between gap-4">
              <button
                onClick={() => onFilterByStyle(selectedStyle.id)}
                id={`filter-by-style-${selectedStyle.id.toLowerCase().replace(/\s+/g, '-')}`}
                className="px-6 py-3 bg-[#1E3A8A] hover:bg-[#1e40af] text-white font-bold text-xs sm:text-sm rounded-xl shadow-md transition-all flex items-center gap-2"
              >
                <span>
                  {currentLang === 'ru'
                    ? `Посмотреть сафари «${selectedStyle.ruTitle.split('(')[0]}»`
                    : `Explore ${selectedStyle.title} Safaris`}
                </span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <span className="text-xs text-slate-500 font-medium">
                {currentLang === 'ru' ? 'Русскоязычный гид доступен для бронирования' : 'Russian-speaking driver-guide available'}
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
