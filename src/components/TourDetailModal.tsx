import React, { useState } from 'react';
import { 
  X, 
  MapPin, 
  Calendar, 
  CheckCircle2, 
  Sparkles, 
  Heart, 
  Download, 
  ChevronDown, 
  ChevronUp, 
  Languages, 
  ShieldCheck, 
  Clock, 
  Users, 
  Check,
  MessageCircle,
  Mountain,
  PawPrint,
  Car
} from 'lucide-react';
import { Tour, Language, Currency, DepartureDate } from '../types';
import { TRANSLATIONS, formatPrice } from '../data/translations';
import { getWhatsAppLink, getTelegramLink, generateTourInquiryMessage } from '../utils/messengerLinks';

interface TourDetailModalProps {
  tour: Tour | null;
  currentLang: Language;
  currentCurrency: Currency;
  isWishlisted: boolean;
  onToggleWishlist: (tourId: string) => void;
  onClose: () => void;
  onBookNow: (tour: Tour, selectedDate?: DepartureDate) => void;
  onDownloadBrochure: (tour) => void;
}

export const TourDetailModal: React.FC<TourDetailModalProps> = ({
  tour,
  currentLang,
  currentCurrency,
  isWishlisted,
  onToggleWishlist,
  onClose,
  onBookNow,
  onDownloadBrochure,
}) => {
  if (!tour) return null;

  const t = TRANSLATIONS[currentLang] || TRANSLATIONS.en;

  const [activeImageIndex, setActiveImageIndex] = useState<number>(0);
  const [expandedDays, setExpandedDays] = useState<Record<number, boolean>>({ 1: true, 2: true });
  const [selectedDeparture, setSelectedDeparture] = useState<DepartureDate>(tour.departureDates[0]);
  const [travelersCount, setTravelersCount] = useState<number>(2);

  const allImages = [tour.coverImage, ...(tour.galleryImages || [])];

  const toggleDay = (day: number) => {
    setExpandedDays((prev) => ({ ...prev, [day]: !prev[day] }));
  };

  const totalPriceUSD = (selectedDeparture?.priceUSD || tour.priceUSD) * travelersCount;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-950/70 backdrop-blur-md flex items-center justify-center p-2 sm:p-4 lg:p-6 animate-in fade-in duration-200">
      <div className="bg-white text-slate-900 rounded-3xl max-w-5xl w-full max-h-[92vh] overflow-y-auto shadow-2xl border border-slate-200 flex flex-col relative">
        {/* Sticky Header with Close Button */}
        <div className="sticky top-0 z-30 bg-white/95 backdrop-blur-md px-6 py-4 border-b border-slate-200 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="bg-[#1E3A8A] text-white text-[10px] font-bold uppercase px-2.5 py-1 rounded">
              {tour.circuit || tour.travelStyle}
            </span>
            <span className="text-xs text-slate-500 font-bold">
              {tour.durationDays} {currentLang === 'ru' ? 'Дней' : 'Days'} • {currentLang === 'ru' ? tour.ruDestination : tour.destination}
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => onToggleWishlist(tour.id)}
              className={`p-2 rounded-full border transition-all ${
                isWishlisted
                  ? 'bg-rose-50 border-rose-300 text-rose-600'
                  : 'bg-slate-100 border-slate-200 text-slate-500 hover:text-rose-600'
              }`}
              title="Wishlist"
            >
              <Heart className={`w-4 h-4 ${isWishlisted ? 'fill-current' : ''}`} />
            </button>

            <button
              onClick={onClose}
              className="p-2 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-600 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Modal Scrollable Body */}
        <div className="p-6 sm:p-8 space-y-8">
          {/* Title & Overview Header */}
          <div className="space-y-2">
            <div className="flex flex-wrap items-center gap-2">
              {tour.badge && (
                <span className="bg-amber-100 border border-amber-300 text-amber-900 text-xs font-bold px-2.5 py-0.5 rounded-full">
                  {currentLang === 'ru' ? tour.ruBadge : tour.badge}
                </span>
              )}
              {tour.altitudeMeters && (
                <span className="bg-blue-50 text-[#1E3A8A] border border-blue-200 text-xs font-bold px-2.5 py-0.5 rounded-full flex items-center gap-1">
                  <Mountain className="w-3.5 h-3.5 text-[#2563EB]" />
                  <span>Uhuru Peak: {tour.altitudeMeters}m</span>
                </span>
              )}
              {tour.isRussianGuideAvailable && (
                <span className="bg-emerald-50 text-emerald-800 border border-emerald-300 text-xs font-bold px-2.5 py-0.5 rounded-full flex items-center gap-1">
                  <Languages className="w-3.5 h-3.5 text-emerald-600" />
                  <span>{t.modalRussianGuideHeading}</span>
                </span>
              )}
            </div>

            <h1 className="text-2xl sm:text-4xl font-serif font-black text-[#1E3A8A] leading-tight">
              {currentLang === 'ru' ? tour.ruTitle : tour.title}
            </h1>
            <p className="text-sm sm:text-base text-slate-600 font-medium">
              {currentLang === 'ru' ? tour.ruSubtitle : tour.subtitle}
            </p>
          </div>

          {/* Photo Showcase Carousel */}
          <div className="space-y-3">
            <div className="relative aspect-16/9 rounded-2xl overflow-hidden bg-slate-100 shadow-md">
              <img
                src={allImages[activeImageIndex] || tour.coverImage}
                alt={tour.title}
                className="w-full h-full object-cover transition-all duration-300"
              />
            </div>

            {/* Thumbnail selector */}
            <div className="flex gap-2 overflow-x-auto pb-1">
              {allImages.map((img, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveImageIndex(idx)}
                  className={`w-20 h-14 rounded-xl overflow-hidden shrink-0 border-2 transition-all ${
                    activeImageIndex === idx ? 'border-[#1E3A8A] scale-105 shadow-md' : 'border-slate-200 opacity-60 hover:opacity-100'
                  }`}
                >
                  <img src={img} alt="thumb" className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          </div>

          {/* Russian Guide Feature Highlight Box */}
          {tour.isRussianGuideAvailable && (
            <div className="bg-emerald-50 border border-emerald-200 rounded-2xl p-5 flex flex-col sm:flex-row items-start sm:items-center gap-4">
              <div className="w-12 h-12 rounded-2xl bg-emerald-600 text-white font-bold flex items-center justify-center shrink-0 shadow-sm">
                <Languages className="w-6 h-6" />
              </div>
              <div className="space-y-1">
                <h4 className="font-bold text-slate-900 text-sm sm:text-base flex items-center gap-2">
                  <span>{t.modalRussianGuideHeading}</span>
                  <span className="bg-emerald-600 text-white text-[10px] font-bold px-2 py-0.5 rounded uppercase">
                    100% Guaranteed
                  </span>
                </h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  {t.modalRussianGuideText}
                </p>
              </div>
            </div>
          )}

          {/* Quick Stats Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 bg-slate-50 border border-slate-200 rounded-2xl p-4 text-xs">
            <div className="flex items-center gap-2.5">
              <Clock className="w-4 h-4 text-[#2563EB]" />
              <div>
                <span className="text-slate-500 block">Duration</span>
                <span className="font-bold text-slate-800">{tour.durationDays} Days / {tour.durationNights} Nights</span>
              </div>
            </div>

            <div className="flex items-center gap-2.5">
              <Car className="w-4 h-4 text-[#2563EB]" />
              <div>
                <span className="text-slate-500 block">Transport</span>
                <span className="font-bold text-slate-800">Private 4x4 Land Cruiser</span>
              </div>
            </div>

            <div className="flex items-center gap-2.5">
              <Users className="w-4 h-4 text-[#2563EB]" />
              <div>
                <span className="text-slate-500 block">Style</span>
                <span className="font-bold text-slate-800">{tour.travelStyle}</span>
              </div>
            </div>

            <div className="flex items-center gap-2.5">
              <ShieldCheck className="w-4 h-4 text-[#2563EB]" />
              <div>
                <span className="text-slate-500 block">Licensing</span>
                <span className="font-bold text-slate-800">TATO / TTB / KPAP Certified</span>
              </div>
            </div>
          </div>

          {/* Trip Overview */}
          <div className="space-y-3">
            <h3 className="font-serif font-bold text-xl text-[#1E3A8A] border-b border-slate-200 pb-2">
              {t.modalOverview}
            </h3>
            <p className="text-sm sm:text-base text-slate-700 leading-relaxed font-normal">
              {currentLang === 'ru' ? tour.ruOverview : tour.overview}
            </p>
          </div>

          {/* Highlights & Inclusions 2-Column Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Highlights */}
            <div className="bg-blue-50/50 border border-blue-200 rounded-2xl p-5 space-y-3">
              <h4 className="font-serif font-bold text-base text-[#1E3A8A] flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-[#2563EB]" />
                <span>{t.modalHighlights}</span>
              </h4>
              <ul className="space-y-2">
                {(currentLang === 'ru' ? tour.ruHighlights : tour.highlights).map((hl, i) => (
                  <li key={i} className="flex items-start gap-2 text-xs sm:text-sm text-slate-700">
                    <CheckCircle2 className="w-4 h-4 text-[#2563EB] shrink-0 mt-0.5" />
                    <span>{hl}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Inclusions */}
            <div className="bg-slate-50 border border-slate-200 rounded-2xl p-5 space-y-3">
              <h4 className="font-serif font-bold text-base text-slate-900 flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-emerald-600" />
                <span>{t.modalInclusions}</span>
              </h4>
              <ul className="space-y-2">
                {(currentLang === 'ru' ? tour.ruIncluded : tour.included).map((inc, i) => (
                  <li key={i} className="flex items-start gap-2 text-xs sm:text-sm text-slate-700">
                    <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span>{inc}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Day-by-Day Route Accordion */}
          <div className="space-y-4">
            <div className="flex items-center justify-between border-b border-slate-200 pb-2">
              <h3 className="font-serif font-bold text-xl text-[#1E3A8A]">
                {t.modalDailyItinerary}
              </h3>
              <span className="text-xs text-slate-500 font-semibold">
                {tour.route.length} {currentLang === 'ru' ? 'остановок' : 'stops'}
              </span>
            </div>

            <div className="space-y-3">
              {tour.route.map((stop) => {
                const isExpanded = expandedDays[stop.day] ?? false;
                return (
                  <div
                    key={stop.day}
                    className="border border-slate-200 rounded-2xl overflow-hidden transition-all bg-white"
                  >
                    <button
                      onClick={() => toggleDay(stop.day)}
                      className="w-full px-5 py-3.5 bg-slate-50 hover:bg-slate-100 flex items-center justify-between text-left transition-colors"
                    >
                      <div className="flex items-center gap-3">
                        <span className="w-8 h-8 rounded-xl bg-[#1E3A8A] text-white font-serif font-black text-xs flex items-center justify-center">
                          D{stop.day}
                        </span>
                        <div>
                          <div className="font-bold text-sm text-slate-900">
                            {currentLang === 'ru' ? stop.ruName : stop.name}
                          </div>
                          <div className="text-[11px] text-slate-500">
                            {(currentLang === 'ru' ? stop.ruActivities : stop.activities).join(' • ')}
                          </div>
                        </div>
                      </div>

                      {isExpanded ? <ChevronUp className="w-4 h-4 text-slate-500" /> : <ChevronDown className="w-4 h-4 text-slate-500" />}
                    </button>

                    {isExpanded && (
                      <div className="p-5 bg-white border-t border-slate-200 text-xs sm:text-sm text-slate-700 space-y-3">
                        <p className="leading-relaxed">
                          {currentLang === 'ru' ? stop.ruDesc : stop.desc}
                        </p>
                        
                        <div className="flex flex-wrap gap-1.5 pt-1">
                          {(currentLang === 'ru' ? stop.ruActivities : stop.activities).map((act, idx) => (
                            <span key={idx} className="bg-blue-50 text-[#1E3A8A] border border-blue-200 text-[11px] font-semibold px-2 py-0.5 rounded-md">
                              ✓ {act}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>

          {/* Departures Calendar & Pricing Calculator Action Bar */}
          <div className="bg-slate-50 border border-slate-200 rounded-3xl p-6 shadow-xs space-y-6">
            <div>
              <h3 className="font-serif font-bold text-xl text-[#1E3A8A]">
                {t.modalDatesPricing}
              </h3>
              <p className="text-xs text-slate-500">
                {currentLang === 'ru' ? 'Выберите дату сафари и количество гостей:' : 'Select your safari date & party size:'}
              </p>
            </div>

            {/* Departure Dates Selector */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
              {tour.departureDates.map((dep) => {
                const isSelected = selectedDeparture?.id === dep.id;
                return (
                  <button
                    key={dep.id}
                    onClick={() => setSelectedDeparture(dep)}
                    className={`p-3 rounded-2xl border text-left transition-all ${
                      isSelected
                        ? 'bg-blue-50 border-[#1E3A8A] text-slate-900 shadow-xs font-bold ring-2 ring-[#1E3A8A]/30'
                        : 'bg-white border-slate-200 text-slate-700 hover:bg-slate-100'
                    }`}
                  >
                    <div className="flex items-center justify-between text-xs mb-1">
                      <span className="font-bold">{dep.date}</span>
                      <span className="text-[10px] bg-slate-100 px-1.5 py-0.5 rounded border border-slate-300 text-[#1E3A8A] font-medium">
                        {dep.guideLanguage === 'RU' ? '🇷🇺 RU Guide' : '🌐 EN Guide'}
                      </span>
                    </div>
                    <div className="flex items-baseline justify-between">
                      <span className="font-serif font-bold text-base text-[#1E3A8A]">
                        {formatPrice(dep.priceUSD, currentCurrency)}
                      </span>
                      <span className="text-[10px] text-slate-500">
                        {dep.seatsLeft} {t.modalSeatsRemaining}
                      </span>
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Direct Instant Messenger Consultation Bar */}
            <div className="pt-4 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-3 bg-white p-4 rounded-2xl border border-slate-200">
              <div className="flex items-center gap-2 text-xs text-slate-700">
                <MessageCircle className="w-4 h-4 text-emerald-600 shrink-0" />
                <span className="font-semibold">
                  {currentLang === 'ru' ? 'Мгновенная консультация по WhatsApp и Telegram:' : 'Instant safari consultation via WhatsApp & Telegram:'}
                </span>
              </div>

              <div className="flex items-center gap-2 w-full sm:w-auto">
                <a
                  href={getWhatsAppLink(generateTourInquiryMessage({
                    tour,
                    selectedDate: selectedDeparture,
                    currentLang,
                    currentCurrency,
                    travelersCount,
                  }))}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 sm:flex-none flex items-center justify-center gap-2 py-2 px-3.5 bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold text-xs rounded-xl shadow-xs transition-all hover:scale-105"
                >
                  <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                    <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
                  </svg>
                  <span>WhatsApp</span>
                </a>

                <a
                  href={getTelegramLink(generateTourInquiryMessage({
                    tour,
                    selectedDate: selectedDeparture,
                    currentLang,
                    currentCurrency,
                    travelersCount,
                  }))}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 sm:flex-none flex items-center justify-center gap-2 py-2 px-3.5 bg-[#229ED9] hover:bg-[#1e8bc0] text-white font-bold text-xs rounded-xl shadow-xs transition-all hover:scale-105"
                >
                  <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                    <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm5.894 8.221l-1.97 9.28c-.145.658-.537.818-1.084.508l-3-2.21-1.446 1.394c-.14.18-.357.34-.694.34l.213-3.053 5.56-5.023c.242-.213-.054-.333-.373-.12l-6.871 4.326-2.962-.924c-.643-.204-.657-.643.136-.953l11.57-4.461c.538-.196 1.006.128.832.962z"/>
                  </svg>
                  <span>Telegram</span>
                </a>
              </div>
            </div>

            {/* Price Estimator & Booking Button */}
            <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="flex items-center gap-4">
                <div>
                  <span className="text-xs text-slate-500 block font-medium">Travelers:</span>
                  <div className="flex items-center gap-2 mt-1">
                    {[1, 2, 4, 6].map((num) => (
                      <button
                        key={num}
                        onClick={() => setTravelersCount(num)}
                        className={`w-8 h-8 rounded-lg text-xs font-bold transition-colors ${
                          travelersCount === num
                            ? 'bg-[#1E3A8A] text-white font-bold'
                            : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                        }`}
                      >
                        {num}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="pl-4 border-l border-slate-200">
                  <span className="text-xs text-slate-500 block uppercase tracking-wider">Total Estimate:</span>
                  <span className="text-2xl font-serif font-black text-[#1E3A8A]">
                    {formatPrice(totalPriceUSD, currentCurrency)}
                  </span>
                </div>
              </div>

              <div className="flex items-center gap-3 w-full sm:w-auto">
                <button
                  onClick={() => onDownloadBrochure(tour)}
                  className="px-4 py-3.5 border border-slate-200 hover:border-slate-300 text-slate-700 hover:text-slate-900 rounded-xl text-xs font-bold transition-colors flex items-center gap-1.5"
                >
                  <Download className="w-4 h-4 text-[#2563EB]" />
                  <span className="hidden sm:inline">{t.modalDownloadBrochure}</span>
                </button>

                <button
                  onClick={() => onBookNow(tour, selectedDeparture)}
                  id="modal-request-quote-btn"
                  className="flex-1 sm:flex-none px-8 py-3.5 bg-[#1E3A8A] hover:bg-[#1e40af] text-white font-bold text-sm rounded-xl shadow-xs transition-all hover:scale-[1.02]"
                >
                  {t.modalRequestQuote}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
