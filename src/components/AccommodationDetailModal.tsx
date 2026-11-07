import React, { useState } from 'react';
import { 
  X, 
  MapPin, 
  Star, 
  Wifi, 
  Waves, 
  Wind, 
  Sun, 
  Utensils, 
  ShieldCheck, 
  Check, 
  ArrowRight,
  Bed,
  Maximize2,
  Users,
  Sparkles,
  MessageCircle,
  Send,
  Coffee,
  CheckCircle2
} from 'lucide-react';
import { Accommodation, Currency, Language } from '../types';
import { TRANSLATIONS, CURRENCY_RATES } from '../data/translations';
import { getWhatsAppLink, getTelegramLink } from '../utils/messengerLinks';

interface AccommodationDetailModalProps {
  accommodation: Accommodation | null;
  isOpen: boolean;
  onClose: () => void;
  currentLang: Language;
  currentCurrency: Currency;
  onSelectForTour?: (accommodation: Accommodation) => void;
  onOpenBookingWithAccommodation?: (accommodation: Accommodation) => void;
}

export const AccommodationDetailModal: React.FC<AccommodationDetailModalProps> = ({
  accommodation,
  isOpen,
  onClose,
  currentLang,
  currentCurrency,
  onSelectForTour,
  onOpenBookingWithAccommodation,
}) => {
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [selectedRoomId, setSelectedRoomId] = useState<string | null>(null);

  if (!isOpen || !accommodation) return null;

  const t = TRANSLATIONS[currentLang] || TRANSLATIONS.en;
  const isRu = currentLang === 'ru';
  const curr = CURRENCY_RATES[currentCurrency] || CURRENCY_RATES.USD;

  const convertPrice = (usd: number) => {
    return Math.round(usd * curr.rate);
  };

  const images = [accommodation.coverImage, ...(accommodation.galleryImages || [])];
  const activeImage = images[activeImageIndex] || accommodation.coverImage;

  const formatAmenityIcon = (amenity: string) => {
    switch (amenity) {
      case 'WiFi':
        return <Wifi className="w-4 h-4 text-sky-400" />;
      case 'Swimming Pool':
      case 'Plunge Pool':
        return <Waves className="w-4 h-4 text-teal-400" />;
      case 'Air Conditioning':
        return <Wind className="w-4 h-4 text-blue-400" />;
      case 'Solar Power':
        return <Sun className="w-4 h-4 text-amber-400" />;
      case 'Bush Dining':
        return <Utensils className="w-4 h-4 text-orange-400" />;
      case 'Spa & Wellness':
        return <Sparkles className="w-4 h-4 text-purple-400" />;
      default:
        return <CheckCircle2 className="w-4 h-4 text-emerald-400" />;
    }
  };

  const inquiryMessage = isRu
    ? `Здравствуйте! Интересует бронирование/апгрейд проживания в: ${accommodation.ruName} (${accommodation.tier}). Подскажите наличие номеров.`
    : `Hello! I would like to inquire about booking/upgrading stay at: ${accommodation.name} (${accommodation.tier}). Please share availability.`;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-950/70 backdrop-blur-md flex items-center justify-center p-2 sm:p-4 md:p-6 animate-in fade-in">
      <div className="relative w-full max-w-5xl bg-white border border-slate-200 rounded-2xl shadow-2xl overflow-hidden text-slate-900 flex flex-col max-h-[92vh]">
        {/* Header Bar */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-200 bg-white/95 sticky top-0 z-20 backdrop-blur-sm">
          <div className="flex items-center gap-3">
            <span className="text-xs font-bold px-2.5 py-1 rounded-full bg-blue-50 text-[#1E3A8A] border border-blue-200">
              {isRu
                ? accommodation.tier === 'Luxury Safari Lodges'
                  ? 'Люкс-сафари лодж'
                  : accommodation.tier === 'Luxury Tented Camps'
                  ? 'Премиум тентовый кемп'
                  : accommodation.tier === 'Boutique Zanzibar Resorts'
                  ? 'Бутик-отель Занзибара'
                  : 'Комфортный эко-лодж'
                : accommodation.tier}
            </span>
            <div className="hidden sm:flex items-center gap-1.5 text-xs text-slate-500">
              <MapPin className="w-3.5 h-3.5 text-[#2563EB]" />
              <span>{isRu ? accommodation.ruLocation : accommodation.location}</span>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 text-slate-500 hover:text-slate-800 bg-slate-100 hover:bg-slate-200 rounded-full transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Scrollable Content */}
        <div className="overflow-y-auto p-4 sm:p-6 space-y-6">
          {/* Main Title & Rating */}
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div>
              <h2 className="text-2xl sm:text-3xl font-serif font-bold text-[#1E3A8A] tracking-tight">
                {isRu ? accommodation.ruName : accommodation.name}
              </h2>
              <div className="flex flex-wrap items-center gap-3 mt-2 text-sm">
                <div className="flex items-center gap-1 text-amber-800 font-bold bg-amber-50 px-2 py-0.5 rounded border border-amber-300">
                  <Star className="w-4 h-4 fill-amber-500 text-amber-500" />
                  <span>{accommodation.rating.toFixed(2)}</span>
                  <span className="text-slate-500 font-normal text-xs">
                    ({accommodation.reviewCount} {isRu ? 'отзывов' : 'reviews'})
                  </span>
                </div>

                <div className="flex items-center gap-1.5 text-emerald-800 text-xs font-semibold bg-emerald-50 px-2 py-0.5 rounded border border-emerald-300">
                  <Coffee className="w-3.5 h-3.5 text-emerald-600" />
                  <span>
                    {t.stayMealPlan}: {isRu ? accommodation.ruMealPlan : accommodation.mealPlan}
                  </span>
                </div>

                {accommodation.isRussianStaffAvailable && (
                  <div className="flex items-center gap-1 text-blue-800 text-xs font-semibold bg-blue-50 px-2 py-0.5 rounded border border-blue-300">
                    <ShieldCheck className="w-3.5 h-3.5 text-[#2563EB]" />
                    <span>{isRu ? 'Русскоязычный персонал / координатор' : 'Multilingual Concierge Desk'}</span>
                  </div>
                )}
              </div>
            </div>

            {/* Price Preview Block */}
            <div className="bg-slate-50 border border-slate-200 p-3.5 rounded-xl flex items-center md:flex-col justify-between md:items-end min-w-[180px]">
              <span className="text-xs text-slate-500">{t.stayPerNightFrom}</span>
              <div className="text-right">
                <span className="text-2xl sm:text-3xl font-bold font-serif text-[#1E3A8A]">
                  {curr.symbol}
                  {convertPrice(accommodation.pricePerNightFromUSD).toLocaleString()}
                </span>
                <span className="text-xs text-slate-500 block">{curr.code} / night</span>
              </div>
            </div>
          </div>

          {/* Photo Gallery & Thumbnails */}
          <div className="space-y-3">
            <div className="relative aspect-[16/9] sm:aspect-[21/9] rounded-xl overflow-hidden border border-slate-200 bg-slate-100">
              <img
                src={activeImage}
                alt={accommodation.name}
                className="w-full h-full object-cover transition-all duration-300"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 via-transparent to-transparent pointer-events-none" />

              {accommodation.badge && (
                <div className="absolute top-4 left-4 bg-amber-400 text-slate-900 font-bold text-xs px-3 py-1 rounded-full shadow-md">
                  {isRu ? accommodation.ruBadge || accommodation.badge : accommodation.badge}
                </div>
              )}
            </div>

            {/* Thumbnail Strip */}
            {images.length > 1 && (
              <div className="flex items-center gap-2 overflow-x-auto pb-1">
                {images.map((img, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveImageIndex(idx)}
                    className={`relative w-20 h-14 sm:w-24 sm:h-16 rounded-lg overflow-hidden shrink-0 border-2 transition-all ${
                      activeImageIndex === idx
                        ? 'border-[#1E3A8A] scale-105 shadow-sm'
                        : 'border-slate-200 opacity-60 hover:opacity-100'
                    }`}
                  >
                    <img
                      src={img}
                      alt={`Thumbnail ${idx + 1}`}
                      className="w-full h-full object-cover"
                      referrerPolicy="no-referrer"
                    />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Description & Key Highlights Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2 space-y-5">
              <div>
                <h3 className="text-sm font-bold uppercase tracking-wider text-slate-500 mb-2">
                  {isRu ? 'О лодже и атмосфере' : 'Lodge Overview & Atmosphere'}
                </h3>
                <p className="text-slate-700 leading-relaxed text-sm sm:text-base">
                  {isRu ? accommodation.ruDescription : accommodation.description}
                </p>
              </div>

              {/* Highlights Bullet List */}
              <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 space-y-2.5">
                <h4 className="text-xs font-bold uppercase tracking-wider text-[#1E3A8A] flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5 text-[#2563EB]" />
                  <span>{isRu ? 'Особенности и преимущества' : 'Distinctive Highlights'}</span>
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs sm:text-sm text-slate-700">
                  {(isRu ? accommodation.ruHighlights : accommodation.highlights).map((hl, i) => (
                    <div key={i} className="flex items-start gap-2">
                      <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      <span>{hl}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Verified Amenities */}
              <div>
                <h3 className="text-sm font-bold uppercase tracking-wider text-slate-500 mb-3">
                  {t.stayVerifiedAmenities}
                </h3>
                <div className="flex flex-wrap gap-2.5">
                  {accommodation.amenities.map((amenity, idx) => (
                    <div
                      key={idx}
                      className="flex items-center gap-2 px-3 py-1.5 bg-slate-100 border border-slate-200 rounded-lg text-xs font-medium text-slate-800"
                    >
                      {formatAmenityIcon(amenity)}
                      <span>{amenity}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Room Configurations & Types */}
            <div className="space-y-4">
              <h3 className="text-sm font-bold uppercase tracking-wider text-slate-500">
                {t.stayRoomTypes}
              </h3>

              <div className="space-y-3">
                {accommodation.roomTypes.map((room) => {
                  const isSelected = selectedRoomId === room.id;
                  return (
                    <div
                      key={room.id}
                      onClick={() => setSelectedRoomId(isSelected ? null : room.id)}
                      className={`p-3.5 rounded-xl border transition-all cursor-pointer ${
                        isSelected
                          ? 'bg-blue-50/70 border-[#1E3A8A] shadow-xs ring-1 ring-[#1E3A8A]'
                          : 'bg-slate-50 border-slate-200 hover:border-slate-300'
                      }`}
                    >
                      <div className="flex items-center justify-between mb-2">
                        <h4 className="font-bold text-sm text-slate-900">
                          {isRu ? room.ruName : room.name}
                        </h4>
                        <span className="text-xs font-mono font-bold text-[#1E3A8A]">
                          {curr.symbol}
                          {convertPrice(room.pricePerNightUSD).toLocaleString()}
                        </span>
                      </div>

                      <div className="flex items-center gap-3 text-xs text-slate-500 mb-2">
                        <span className="flex items-center gap-1">
                          <Maximize2 className="w-3 h-3 text-slate-400" />
                          {room.sizeM2} m²
                        </span>
                        <span className="flex items-center gap-1">
                          <Bed className="w-3 h-3 text-slate-400" />
                          {isRu ? room.ruBedConfig : room.bedConfig}
                        </span>
                        <span className="flex items-center gap-1">
                          <Users className="w-3 h-3 text-slate-400" />
                          max {room.maxGuests}
                        </span>
                      </div>

                      <p className="text-xs text-slate-600 line-clamp-2">
                        {isRu ? room.ruDescription : room.description}
                      </p>
                    </div>
                  );
                })}
              </div>

              {/* Direct Quick Messengers Trigger */}
              <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 space-y-3">
                <span className="text-xs text-slate-600 font-medium block">
                  {isRu ? 'Уточнить наличие мест и спецтарифы:' : 'Direct Specialist Inquiry:'}
                </span>
                <div className="grid grid-cols-2 gap-2">
                  <a
                    href={getWhatsAppLink(inquiryMessage)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-1.5 py-2 px-3 bg-[#25D366] hover:bg-[#20bd5a] text-white rounded-lg text-xs font-bold transition-all shadow-xs"
                  >
                    <MessageCircle className="w-4 h-4" />
                    <span>WhatsApp</span>
                  </a>
                  <a
                    href={getTelegramLink(inquiryMessage)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-1.5 py-2 px-3 bg-[#229ED9] hover:bg-[#1e8bc0] text-white rounded-lg text-xs font-bold transition-all shadow-xs"
                  >
                    <Send className="w-4 h-4" />
                    <span>Telegram</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Actions */}
        <div className="px-6 py-4 bg-slate-50 border-t border-slate-200 flex flex-wrap items-center justify-between gap-4 sticky bottom-0 z-20">
          <div className="flex items-center gap-2 text-xs text-slate-500">
            <ShieldCheck className="w-4 h-4 text-emerald-600" />
            <span>
              {isRu
                ? 'Прямой контракт с администрацией лоджа • Гарантия лучшей цены'
                : 'Direct Partner Contract • Best Rate & Upgrade Guarantee'}
            </span>
          </div>

          <div className="flex items-center gap-3">
            {onSelectForTour && (
              <button
                onClick={() => {
                  onSelectForTour(accommodation);
                  onClose();
                }}
                className="px-4 py-2.5 bg-white hover:bg-slate-100 text-slate-800 border border-slate-300 rounded-xl text-xs sm:text-sm font-semibold transition-colors"
              >
                {t.staySelectLodge}
              </button>
            )}

            {onOpenBookingWithAccommodation && (
              <button
                onClick={() => {
                  onOpenBookingWithAccommodation(accommodation);
                  onClose();
                }}
                className="px-5 py-2.5 bg-[#1E3A8A] hover:bg-[#1e40af] text-white rounded-xl text-xs sm:text-sm font-bold transition-all shadow-xs flex items-center gap-2 hover:scale-[1.02]"
              >
                <span>{isRu ? 'Включить в сафари-программу' : 'Add to Safari Program'}</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
