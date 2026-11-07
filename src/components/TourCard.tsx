import React from 'react';
import { 
  MapPin, 
  Calendar, 
  CheckCircle2, 
  Heart, 
  Sparkles, 
  ArrowRight, 
  Languages, 
  ShieldCheck,
  Mountain,
  PawPrint
} from 'lucide-react';
import { Tour, Language, Currency } from '../types';
import { TRANSLATIONS, formatPrice } from '../data/translations';
import { getWhatsAppLink, getTelegramLink, generateTourInquiryMessage } from '../utils/messengerLinks';

interface TourCardProps {
  tour: Tour;
  currentLang: Language;
  currentCurrency: Currency;
  isWishlisted: boolean;
  onToggleWishlist: (tourId: string) => void;
  onSelectTour: (tour: Tour) => void;
  onQuickBook: (tour: Tour) => void;
}

export const TourCard: React.FC<TourCardProps> = ({
  tour,
  currentLang,
  currentCurrency,
  isWishlisted,
  onToggleWishlist,
  onSelectTour,
  onQuickBook,
}) => {
  const t = TRANSLATIONS[currentLang] || TRANSLATIONS.en;

  return (
    <div className="bg-white rounded-2xl border border-slate-200 hover:border-blue-500/60 shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden flex flex-col group hover:-translate-y-1 text-slate-900">
      {/* Top Image Banner */}
      <div className="relative h-56 overflow-hidden bg-slate-950">
        <img
          src={tour.coverImage}
          alt={tour.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent" />

        {/* Top Badges */}
        <div className="absolute top-3 left-3 flex flex-wrap gap-1.5 z-10">
          {tour.badge && (
            <span className="bg-amber-400 text-slate-950 text-[10px] font-black uppercase px-2 py-0.5 rounded shadow-md">
              {currentLang === 'ru' ? tour.ruBadge : tour.badge}
            </span>
          )}
          <span className="bg-[#1E3A8A]/90 text-white border border-blue-400/40 text-[10px] font-bold px-2 py-0.5 rounded backdrop-blur-xs">
            {tour.circuit || tour.region}
          </span>
          {tour.altitudeMeters && (
            <span className="bg-sky-950/90 text-sky-300 border border-sky-600/40 text-[10px] font-bold px-2 py-0.5 rounded flex items-center gap-1">
              <Mountain className="w-3 h-3" />
              {tour.altitudeMeters}m
            </span>
          )}
        </div>

        {/* Wishlist Button */}
        <button
          onClick={(e) => {
            e.stopPropagation();
            onToggleWishlist(tour.id);
          }}
          className={`absolute top-3 right-3 p-2 rounded-full backdrop-blur-md transition-all shadow-md ${
            isWishlisted
              ? 'bg-rose-600 text-white'
              : 'bg-slate-900/70 text-white hover:bg-rose-600 hover:text-white'
          }`}
          title="Save to Wishlist"
        >
          <Heart className={`w-4 h-4 ${isWishlisted ? 'fill-current' : ''}`} />
        </button>

        {/* Russian Guide Ribbon Banner if applicable */}
        {tour.isRussianGuideAvailable && (
          <div className="absolute bottom-3 left-3 flex items-center gap-1.5 bg-emerald-900/90 border border-emerald-500/60 text-emerald-100 text-[11px] font-extrabold px-2.5 py-0.5 rounded-full backdrop-blur-xs">
            <Languages className="w-3.5 h-3.5 text-emerald-300" />
            <span>
              {currentLang === 'ru' ? 'Русскоязычный гид-водитель' : 'Russian-Speaking Driver-Guide'}
            </span>
          </div>
        )}
      </div>

      {/* Body Content */}
      <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
        <div className="space-y-2">
          {/* Destination & Duration Header */}
          <div className="flex items-center justify-between text-xs text-slate-500 font-medium">
            <div className="flex items-center gap-1 text-slate-700">
              <MapPin className="w-3.5 h-3.5 text-[#2563EB]" />
              <span className="font-bold">
                {currentLang === 'ru' ? tour.ruDestination : tour.destination}
              </span>
            </div>
            <span className="bg-blue-50 text-[#1E3A8A] font-bold px-2 py-0.5 rounded text-[11px] border border-blue-200">
              {tour.durationDays} {currentLang === 'ru' ? 'дней' : 'days'} / {tour.durationNights} {currentLang === 'ru' ? 'ночей' : 'nights'}
            </span>
          </div>

          {/* Tour Title */}
          <h3 
            onClick={() => onSelectTour(tour)}
            className="font-serif font-black text-lg text-slate-900 group-hover:text-[#2563EB] transition-colors line-clamp-2 cursor-pointer leading-snug"
          >
            {currentLang === 'ru' ? tour.ruTitle : tour.title}
          </h3>

          <p className="text-xs text-slate-600 line-clamp-2 leading-relaxed">
            {currentLang === 'ru' ? tour.ruSubtitle : tour.subtitle}
          </p>

          {/* Wildlife Tags */}
          {tour.wildlifeFeatured && (
            <div className="flex flex-wrap gap-1 pt-1">
              {tour.wildlifeFeatured.slice(0, 3).map((w, i) => (
                <span key={i} className="text-[10px] bg-slate-100 text-slate-700 px-2 py-0.5 rounded-full border border-slate-200">
                  🐾 {w}
                </span>
              ))}
            </div>
          )}

          {/* Highlights preview */}
          <div className="space-y-1 pt-1">
            {(currentLang === 'ru' ? tour.ruHighlights : tour.highlights).slice(0, 2).map((hl, i) => (
              <div key={i} className="flex items-start gap-1.5 text-xs text-slate-700">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#2563EB] shrink-0 mt-0.5" />
                <span className="line-clamp-1">{hl}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Price & Action Section */}
        <div className="pt-4 border-t border-slate-100 space-y-3">
          <div className="flex items-end justify-between">
            <div>
              <span className="text-[10px] uppercase font-bold tracking-wider text-slate-400 block">
                {t.fromPrice}
              </span>
              <div className="flex items-baseline gap-1.5">
                <span className="text-2xl font-serif font-black text-[#1E3A8A]">
                  {formatPrice(tour.priceUSD, currentCurrency)}
                </span>
                {tour.originalPriceUSD && (
                  <span className="text-xs text-slate-400 line-through">
                    {formatPrice(tour.originalPriceUSD, currentCurrency)}
                  </span>
                )}
              </div>
              <span className="text-[10px] text-slate-500">
                {t.perPerson} • {tour.departureDates.length} {currentLang === 'ru' ? 'дат' : 'dates'}
              </span>
            </div>

            <div className="text-right">
              <div className="flex items-center justify-end gap-1 text-amber-500 font-bold text-xs">
                <span>★ {tour.rating}</span>
              </div>
              <span className="text-[10px] text-slate-500">
                ({tour.reviewCount} {currentLang === 'ru' ? 'отзывов' : 'reviews'})
              </span>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="grid grid-cols-2 gap-2">
            <button
              onClick={() => onSelectTour(tour)}
              className="py-2.5 px-3 bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold text-xs rounded-xl transition-colors flex items-center justify-center gap-1 border border-slate-200"
            >
              <span>{t.viewItinerary}</span>
            </button>

            <button
              onClick={() => onQuickBook(tour)}
              className="py-2.5 px-3 bg-[#1E3A8A] hover:bg-[#1e40af] text-white font-bold text-xs rounded-xl transition-all shadow-xs flex items-center justify-center gap-1 hover:scale-[1.02]"
            >
              <span>{t.quickInquiry}</span>
              <ArrowRight className="w-3.5 h-3.5 text-white" />
            </button>
          </div>

          {/* Direct Quick Messenger Links */}
          <div className="flex items-center justify-between pt-2 border-t border-slate-100 text-[11px] text-slate-500">
            <span>{currentLang === 'ru' ? 'Быстрая связь:' : 'Direct Chat:'}</span>
            <div className="flex items-center gap-2">
              <a
                href={getWhatsAppLink(generateTourInquiryMessage({
                  tour,
                  currentLang,
                  currentCurrency,
                }))}
                target="_blank"
                rel="noopener noreferrer"
                title="WhatsApp"
                className="flex items-center gap-1 text-emerald-600 hover:text-emerald-700 font-bold hover:underline"
              >
                <span>WhatsApp</span>
              </a>
              <span>•</span>
              <a
                href={getTelegramLink(generateTourInquiryMessage({
                  tour,
                  currentLang,
                  currentCurrency,
                }))}
                target="_blank"
                rel="noopener noreferrer"
                title="Telegram"
                className="flex items-center gap-1 text-sky-600 hover:text-sky-700 font-bold hover:underline"
              >
                <span>Telegram</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
