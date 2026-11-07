import React from 'react';
import { 
  X, 
  Calendar, 
  Clock, 
  MapPin, 
  CheckCircle2, 
  ArrowRight, 
  Users, 
  HeartHandshake
} from 'lucide-react';
import { Language, Currency } from '../types';
import { CURRENCY_RATES } from '../data/translations';

export interface SignatureJourney {
  id: string;
  title: string;
  ruTitle: string;
  frTitle?: string;
  esTitle?: string;
  tag: string;
  ruTag: string;
  frTag?: string;
  esTag?: string;
  image: string;
  nights: number;
  durationText: string;
  ruDurationText: string;
  frDurationText?: string;
  esDurationText?: string;
  seasonText: string;
  ruSeasonText: string;
  frSeasonText?: string;
  esSeasonText?: string;
  locationText: string;
  ruLocationText: string;
  frLocationText?: string;
  esLocationText?: string;
  priceUSD: number;
  description: string;
  ruDescription: string;
  frDescription?: string;
  esDescription?: string;
  highlights: string[];
  ruHighlights: string[];
  frHighlights?: string[];
  esHighlights?: string[];
  included: string[];
  ruIncluded: string[];
  frIncluded?: string[];
  esIncluded?: string[];
  conservationFocus: string;
  ruConservationFocus: string;
  frConservationFocus?: string;
  esConservationFocus?: string;
}

interface JourneyDetailModalProps {
  journey: SignatureJourney | null;
  isOpen: boolean;
  currentLang: Language;
  currentCurrency: Currency;
  onClose: () => void;
  onBook: (journey: SignatureJourney) => void;
}

export const JourneyDetailModal: React.FC<JourneyDetailModalProps> = ({
  journey,
  isOpen,
  currentLang,
  currentCurrency,
  onClose,
  onBook,
}) => {
  if (!isOpen || !journey) return null;

  const curr = CURRENCY_RATES[currentCurrency] || CURRENCY_RATES.USD;
  const convertedPrice = Math.round(journey.priceUSD * curr.rate);

  // Helper for 4-language localized text
  const getLocalized = (en: string, ru?: string, fr?: string, es?: string) => {
    if (currentLang === 'ru' && ru) return ru;
    if (currentLang === 'fr' && fr) return fr;
    if (currentLang === 'es' && es) return es;
    return en;
  };

  const getLocalizedArray = (en: string[], ru?: string[], fr?: string[], es?: string[]) => {
    if (currentLang === 'ru' && ru && ru.length > 0) return ru;
    if (currentLang === 'fr' && fr && fr.length > 0) return fr;
    if (currentLang === 'es' && es && es.length > 0) return es;
    return en;
  };

  const labels = {
    duration: getLocalized('Duration', 'Длительность', 'Durée', 'Duración'),
    season: getLocalized('Best Season', 'Лучший сезон', 'Meilleure saison', 'Mejor época'),
    format: getLocalized('Group Format', 'Формат группы', 'Format du groupe', 'Formato de grupo'),
    privateExp: getLocalized('100% Private', '100% Приватный', '100% Privé', '100% Privado'),
    startingRate: getLocalized('Starting Rate', 'Стоимость от', 'Tarif dès', 'Tarifa desde'),
    perGuest: getLocalized('/ guest', '/ гость', '/ voyageur', '/ viajero'),
    overview: getLocalized('Overview', 'О маршруте', 'Aperçu', 'Resumen del viaje'),
    highlights: getLocalized('Journey Highlights', 'Главные впечатления', 'Points forts du séjour', 'Experiencias destacadas'),
    conservationTitle: getLocalized('Conservation & Community Commitment', 'Экологический след & Вклад', 'Engagement pour la préservation', 'Compromiso de conservación y comunidad'),
    includedTitle: getLocalized('Included in This Journey', 'Что включено', 'Inclus dans ce séjour', 'Incluido en este viaje'),
    estimatedLabel: getLocalized('Estimated price per traveler', 'Ориентировочная стоимость за человека', 'Prix estimé par voyageur', 'Precio estimado por viajero'),
    feesIncluded: getLocalized('(all park & conservation fees included)', '(все сборы и перелеты включены)', '(tous les frais de parcs inclus)', '(todas las tasas de parques incluidas)'),
    back: getLocalized('Back', 'Назад', 'Retour', 'Volver'),
    inquireDates: getLocalized('Inquire on Dates', 'Запросить даты', 'Demander des dates', 'Consultar fechas'),
  };

  const title = getLocalized(journey.title, journey.ruTitle, journey.frTitle, journey.esTitle);
  const tag = getLocalized(journey.tag, journey.ruTag, journey.frTag, journey.esTag);
  const location = getLocalized(journey.locationText, journey.ruLocationText, journey.frLocationText, journey.esLocationText);
  const duration = getLocalized(journey.durationText, journey.ruDurationText, journey.frDurationText, journey.esDurationText);
  const season = getLocalized(journey.seasonText, journey.ruSeasonText, journey.frSeasonText, journey.esSeasonText);
  const description = getLocalized(journey.description, journey.ruDescription, journey.frDescription, journey.esDescription);
  const highlightsList = getLocalizedArray(journey.highlights, journey.ruHighlights, journey.frHighlights, journey.esHighlights);
  const includedList = getLocalizedArray(journey.included, journey.ruIncluded, journey.frIncluded, journey.esIncluded);
  const conservation = getLocalized(journey.conservationFocus, journey.ruConservationFocus, journey.frConservationFocus, journey.esConservationFocus);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-black/70 backdrop-blur-sm animate-fade-in">
      <div 
        className="relative w-full max-w-4xl bg-[#F4F6F4] text-[#1C2826] rounded-3xl shadow-2xl overflow-hidden my-8 border border-[#E2E8E4] flex flex-col max-h-[90vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header Image with close button */}
        <div className="relative h-72 sm:h-96 w-full shrink-0 overflow-hidden bg-[#0F2A1D]">
          <img
            src={journey.image}
            alt={title}
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-black/30" />

          {/* Close button */}
          <button
            onClick={onClose}
            aria-label="Close"
            className="absolute top-5 right-5 w-11 h-11 rounded-full bg-black/40 hover:bg-black/60 backdrop-blur-md text-white flex items-center justify-center transition-all cursor-pointer border border-white/20"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Floating Tag */}
          <div className="absolute top-5 left-5">
            <span className="text-[11px] font-bold tracking-widest uppercase bg-[#D3DED7] text-[#0F2A1D] px-3.5 py-1.5 rounded-full shadow-md">
              {tag}
            </span>
          </div>

          {/* Hero text overlay */}
          <div className="absolute bottom-6 left-6 right-6 text-white">
            <div className="flex items-center gap-2 text-xs tracking-wider text-[#A3B8AD] uppercase mb-1">
              <MapPin className="w-3.5 h-3.5 text-[#D3DED7]" />
              <span>{location}</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-white tracking-tight">
              {title}
            </h2>
          </div>
        </div>

        {/* Modal Scrollable Content */}
        <div className="p-6 sm:p-10 overflow-y-auto space-y-8">
          
          {/* Quick Metrics Strip */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pb-6 border-b border-[#E2E8E4]">
            <div className="space-y-1">
              <span className="text-[11px] uppercase tracking-wider text-[#4A7061] font-semibold block">
                {labels.duration}
              </span>
              <span className="text-sm sm:text-base font-serif font-bold text-[#0F2A1D] flex items-center gap-1.5">
                <Clock className="w-4 h-4 text-[#2D4A3E]" />
                {duration}
              </span>
            </div>

            <div className="space-y-1">
              <span className="text-[11px] uppercase tracking-wider text-[#4A7061] font-semibold block">
                {labels.season}
              </span>
              <span className="text-sm sm:text-base font-serif font-bold text-[#0F2A1D] flex items-center gap-1.5">
                <Calendar className="w-4 h-4 text-[#2D4A3E]" />
                {season}
              </span>
            </div>

            <div className="space-y-1">
              <span className="text-[11px] uppercase tracking-wider text-[#4A7061] font-semibold block">
                {labels.format}
              </span>
              <span className="text-sm sm:text-base font-serif font-bold text-[#0F2A1D] flex items-center gap-1.5">
                <Users className="w-4 h-4 text-[#2D4A3E]" />
                {labels.privateExp}
              </span>
            </div>

            <div className="space-y-1">
              <span className="text-[11px] uppercase tracking-wider text-[#4A7061] font-semibold block">
                {labels.startingRate}
              </span>
              <span className="text-sm sm:text-base font-serif font-bold text-[#0F2A1D]">
                {curr.symbol}{convertedPrice.toLocaleString()} <span className="text-xs font-normal text-[#3A5248]">{labels.perGuest}</span>
              </span>
            </div>
          </div>

          {/* Description */}
          <div className="space-y-3">
            <span className="text-xs font-semibold tracking-widest text-[#4A7061] uppercase">
              {labels.overview}
            </span>
            <p className="text-base sm:text-lg text-[#2D4A3E] leading-relaxed font-light">
              {description}
            </p>
          </div>

          {/* Key Highlights */}
          <div className="space-y-4">
            <span className="text-xs font-semibold tracking-widest text-[#4A7061] uppercase">
              {labels.highlights}
            </span>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {highlightsList.map((hl, idx) => (
                <div key={idx} className="flex items-start gap-3 p-3.5 bg-white rounded-2xl border border-[#E2E8E4] shadow-xs">
                  <div className="w-6 h-6 rounded-full bg-[#0F2A1D] text-[#FAF8F5] flex items-center justify-center shrink-0 text-xs font-bold mt-0.5">
                    {idx + 1}
                  </div>
                  <span className="text-sm text-[#1C2826] leading-snug">{hl}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Conservation Footprint */}
          <div className="p-6 bg-[#E2E8E4] rounded-2xl border border-[#D3DED7] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div className="space-y-1">
              <div className="flex items-center gap-2 text-xs uppercase tracking-wider font-bold text-[#0F2A1D]">
                <HeartHandshake className="w-4 h-4 text-[#1C4432]" />
                <span>{labels.conservationTitle}</span>
              </div>
              <p className="text-sm text-[#2D4A3E] leading-relaxed">
                {conservation}
              </p>
            </div>
            <div className="shrink-0 px-4 py-2 bg-[#0F2A1D] text-[#FAF8F5] text-[11px] font-bold uppercase tracking-widest rounded-full">
              1% for the wild
            </div>
          </div>

          {/* Included Inclusions */}
          <div className="space-y-3">
            <span className="text-xs font-semibold tracking-widest text-[#4A7061] uppercase">
              {labels.includedTitle}
            </span>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm text-[#2D4A3E]">
              {includedList.map((inc, idx) => (
                <div key={idx} className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#1C4432] shrink-0" />
                  <span>{inc}</span>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* Footer Actions */}
        <div className="p-6 bg-white border-t border-[#E2E8E4] flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <div className="text-xs text-[#4A7061]">{labels.estimatedLabel}</div>
            <div className="text-2xl font-serif font-bold text-[#0F2A1D]">
              {curr.symbol}{convertedPrice.toLocaleString()}{' '}
              <span className="text-xs font-sans font-normal text-[#3A5248]">
                {labels.feesIncluded}
              </span>
            </div>
          </div>

          <div className="flex items-center gap-3 w-full sm:w-auto">
            <button
              onClick={onClose}
              className="w-1/2 sm:w-auto px-6 py-3.5 rounded-full border border-[#D3DED7] text-[#2D4A3E] text-sm font-medium hover:bg-[#E2E8E4] transition cursor-pointer"
            >
              {labels.back}
            </button>
            <button
              onClick={() => {
                onClose();
                onBook(journey);
              }}
              className="w-1/2 sm:w-auto px-8 py-3.5 rounded-full bg-[#0F2A1D] hover:bg-[#1C4432] text-[#FAF8F5] text-sm font-medium transition flex items-center justify-center gap-2 cursor-pointer shadow-lg"
            >
              <span>{labels.inquireDates}</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
