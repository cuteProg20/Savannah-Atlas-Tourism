import React from 'react';
import { Compass, Sparkles, ArrowRight, Check, MapPin, Calendar, Mountain, Eye } from 'lucide-react';
import { Tour, Language, Currency } from '../types';
import { TRANSLATIONS, formatPrice } from '../data/translations';

interface NorthAmericaFeatureProps {
  tours: Tour[];
  currentLang: Language;
  currentCurrency: Currency;
  onSelectTour: (tour: Tour) => void;
  onExploreAllNA: () => void;
}

export const NorthAmericaFeature: React.FC<NorthAmericaFeatureProps> = ({
  tours,
  currentLang,
  currentCurrency,
  onSelectTour,
  onExploreAllNA,
}) => {
  const t = TRANSLATIONS[currentLang] || TRANSLATIONS.en;

  // Highlight top 4 signature Tanzania itineraries
  const featuredTours = tours.slice(0, 4);

  return (
    <section id="tanzania-circuits" className="py-20 bg-[#FAFAF9] text-slate-900 relative overflow-hidden border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6 border-b border-slate-200 pb-8">
          <div className="space-y-3 max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-blue-50 border border-blue-200 text-[#1E3A8A] text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full">
              <Compass className="w-4 h-4 text-[#2563EB]" />
              <span>{t.naFeatureBadge}</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-black text-[#1E3A8A] tracking-tight">
              {t.naFeatureTitle}
            </h2>
            <p className="text-sm sm:text-base text-slate-600 font-normal leading-relaxed">
              {t.naFeatureSubtitle}
            </p>
          </div>

          <button
            onClick={onExploreAllNA}
            id="view-all-na-btn"
            className="self-start md:self-auto px-6 py-3 bg-[#1E3A8A] hover:bg-[#1e40af] text-white font-bold text-xs sm:text-sm rounded-xl shadow-md transition-all flex items-center gap-2 whitespace-nowrap"
          >
            <span>{t.naExploreCollection}</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        {/* Featured 4 Key Tanzania Destinations Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredTours.map((tour) => (
            <div
              key={tour.id}
              onClick={() => onSelectTour(tour)}
              className="bg-white rounded-2xl border border-slate-200 hover:border-blue-500 overflow-hidden shadow-xs hover:shadow-lg transition-all duration-300 flex flex-col group cursor-pointer hover:-translate-y-1.5"
            >
              {/* Image Banner */}
              <div className="relative h-52 overflow-hidden">
                <img
                  src={tour.coverImage}
                  alt={tour.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent" />

                {/* Badges */}
                <div className="absolute top-3 left-3 flex flex-col gap-1">
                  {tour.badge && (
                    <span className="bg-amber-400 text-slate-950 text-[10px] font-black uppercase px-2 py-0.5 rounded shadow-xs">
                      {currentLang === 'ru' ? tour.ruBadge : tour.badge}
                    </span>
                  )}
                  {tour.isRussianGuideAvailable && (
                    <span className="bg-emerald-700 text-white text-[10px] font-bold px-2 py-0.5 rounded shadow-xs">
                      {t.heroRussianGuideBadge}
                    </span>
                  )}
                </div>

                <div className="absolute bottom-3 left-3 right-3 text-white">
                  <span className="text-[11px] text-amber-300 font-bold uppercase tracking-wider block">
                    {tour.durationDays} {currentLang === 'ru' ? 'Дней' : 'Days'} • {tour.circuit || tour.region}
                  </span>
                  <h3 className="font-serif font-black text-base text-white group-hover:text-amber-200 transition-colors line-clamp-1">
                    {currentLang === 'ru' ? tour.ruTitle : tour.title}
                  </h3>
                </div>
              </div>

              {/* Content Body */}
              <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
                <p className="text-xs text-slate-600 line-clamp-2 leading-relaxed">
                  {currentLang === 'ru' ? tour.ruSubtitle : tour.subtitle}
                </p>

                {/* Wildlife & Circuit Tags */}
                {tour.wildlifeFeatured && (
                  <div className="flex flex-wrap gap-1">
                    {tour.wildlifeFeatured.slice(0, 3).map((w, idx) => (
                      <span key={idx} className="text-[10px] bg-slate-100 text-slate-700 px-2 py-0.5 rounded-full border border-slate-200">
                        🐾 {w}
                      </span>
                    ))}
                  </div>
                )}

                {/* Highlights preview */}
                <div className="space-y-1 text-xs text-slate-600">
                  <div className="flex items-center gap-1.5 text-[11px] text-slate-500">
                    <MapPin className="w-3 h-3 text-[#2563EB]" />
                    <span>{currentLang === 'ru' ? tour.ruDestination : tour.destination}</span>
                  </div>
                  <div className="flex items-center gap-1.5 text-[11px] text-slate-500">
                    <Calendar className="w-3 h-3 text-amber-500" />
                    <span>{tour.departureDates.length} {currentLang === 'ru' ? 'дат в 2026/2027' : 'departures in 2026/2027'}</span>
                  </div>
                </div>

                {/* Price & CTA */}
                <div className="pt-3 border-t border-slate-100 flex items-center justify-between">
                  <div>
                    <span className="text-[10px] text-slate-400 uppercase tracking-wider block">
                      {t.fromPrice}
                    </span>
                    <span className="text-lg font-serif font-black text-[#1E3A8A]">
                      {formatPrice(tour.priceUSD, currentCurrency)}
                    </span>
                  </div>

                  <span className="text-xs font-bold text-[#1E3A8A] flex items-center gap-1 group-hover:text-blue-600 group-hover:translate-x-1 transition-all">
                    <span>{t.viewItinerary}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
