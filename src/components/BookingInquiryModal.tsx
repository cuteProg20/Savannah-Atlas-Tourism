import React, { useState } from 'react';
import { 
  X, 
  CheckCircle2, 
  Sparkles, 
  ShieldCheck, 
  ArrowRight
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { Tour, Language, Currency, DepartureDate } from '../types';
import { CURRENCY_RATES } from '../data/translations';

interface BookingInquiryModalProps {
  tour?: Tour | null;
  customTitle?: string;
  selectedDate?: DepartureDate;
  currentLang: Language;
  currentCurrency: Currency;
  onClose: () => void;
}

export const BookingInquiryModal: React.FC<BookingInquiryModalProps> = ({
  tour,
  customTitle,
  selectedDate,
  currentLang,
  currentCurrency,
  onClose,
}) => {
  const curr = CURRENCY_RATES[currentCurrency] || CURRENCY_RATES.USD;

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [date, setDate] = useState(selectedDate?.date || tour?.departureDates[0]?.date || '2026-09-15');
  const [travelers, setTravelers] = useState<number>(2);
  const [specialRequests, setSpecialRequests] = useState('');
  const [submitted, setSubmitted] = useState<boolean>(false);
  const [bookingRef, setBookingRef] = useState<string>('');

  const getLocalized = (en: string, ru?: string, fr?: string, es?: string) => {
    if (currentLang === 'ru' && ru) return ru;
    if (currentLang === 'fr' && fr) return fr;
    if (currentLang === 'es' && es) return es;
    return en;
  };

  const defaultTitle = getLocalized(
    'Bespoke Serengeti & Kilimanjaro Expedition',
    'Индивидуальная экспедиция в Серенгети',
    'Expédition sur mesure Serengeti & Kilimandjaro',
    'Expedición a medida Serengeti y Kilimanjaro'
  );

  const displayTitle = customTitle || (tour ? (currentLang === 'ru' ? tour.ruTitle : tour.title) : defaultTitle);
  const pricePerPerson = selectedDate?.priceUSD || (tour ? tour.priceUSD : 1850);
  const totalPriceUSD = pricePerPerson * travelers;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email || !phone) return;

    // Generate random booking reference
    const ref = `TZ-${Math.floor(100000 + Math.random() * 900000)}`;
    setBookingRef(ref);
    setSubmitted(true);

    try {
      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#0F2A1D', '#1C4432', '#4A7061', '#D3DED7'],
      });
    } catch {
      // ignore
    }
  };

  const labels = {
    badge: getLocalized('Wilderness Expedition Reservation', 'Бронирование и Запрос Экспедиции', 'Réservation d’Expédition Sauvage', 'Reserva de Expedición'),
    successTitle: getLocalized('Expedition Request Received!', 'Запрос успешно отправлен!', 'Demande de séjour bien reçue !', '¡Solicitud de expedición recibida!'),
    successDesc: getLocalized(
      `Thank you, ${name}! Your reference number is #${bookingRef}. A senior naturalist concierge will contact you within 15 minutes.`,
      `Спасибо, ${name}! Номер вашего запроса: #${bookingRef}. Наш ведущий специалист свяжется с вами в течение 15 минут.`,
      `Merci, ${name} ! Votre référence de dossier est le #${bookingRef}. Notre conciergerie naturaliste vous contactera sous 15 minutes.`,
      `¡Muchas gracias, ${name}! El número de referencia es #${bookingRef}. Un asesor naturalista se pondrá en contacto en 15 minutos.`
    ),
    backToSite: getLocalized('Back to Savanna Atlas', 'Вернуться к сайту', 'Retour à Savanna Atlas', 'Volver a Savanna Atlas'),
    fullName: getLocalized('Full Name', 'Ваше имя', 'Nom complet', 'Nombre completo'),
    email: getLocalized('Email Address', 'Электронная почта', 'Adresse e-mail', 'Correo electrónico'),
    phone: getLocalized('Phone / WhatsApp', 'Телефон / WhatsApp', 'Téléphone / WhatsApp', 'Teléfono / WhatsApp'),
    travelDate: getLocalized('Preferred Travel Date', 'Желаемая дата поездки', 'Date de voyage souhaitée', 'Fecha deseada de viaje'),
    guestsCount: getLocalized('Number of Guests', 'Количество гостей', 'Nombre de voyageurs', 'Número de viajeros'),
    guestsUnit: getLocalized('Guests', 'гостей', 'voyageurs', 'viajeros'),
    preferences: getLocalized('Special Preferences', 'Особые пожелания', 'Souhaits particuliers', 'Preferencias especiales'),
    prefPlaceholder: getLocalized('Honeymoon, wildlife photography, dietary...', 'Медовый месяц, фотосафари, дети...', 'Lune de miel, safari photo, enfants...', 'Luna de miel, fotografía, preferencias...'),
    estimatedLabel: getLocalized('Estimated Private Investment', 'Ориентировочная стоимость (на группу)', 'Investissement estimé (groupe)', 'Inversión privada estimada'),
    complimentaryProposal: getLocalized('Complimentary Custom Proposal', 'Без предоплаты за консультацию', 'Proposition personnalisée offerte', 'Propuesta personalizada gratuita'),
    submitBtn: getLocalized('Submit Reservation Request', 'Отправить запрос на бронирование', 'Envoyer ma demande de réservation', 'Enviar solicitud de reserva'),
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/70 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 animate-fade-in">
      <div className="bg-[#F4F6F4] text-[#1C2826] rounded-3xl max-w-2xl w-full overflow-hidden shadow-2xl border border-[#E2E8E4] relative">
        
        {/* Header */}
        <div className="bg-[#0F2A1D] text-[#FAF8F5] px-6 py-5 flex items-center justify-between border-b border-[#1C4432]">
          <div>
            <div className="flex items-center gap-2 text-[#A3B8AD] text-xs font-semibold uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5 text-[#D3DED7]" />
              <span>{labels.badge}</span>
            </div>
            <h2 className="text-xl font-serif font-bold text-[#FAF8F5] mt-1">
              {displayTitle}
            </h2>
          </div>

          <button
            onClick={onClose}
            className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content Body */}
        <div className="p-6 sm:p-8">
          {submitted ? (
            <div className="text-center py-8 space-y-4">
              <div className="w-16 h-16 bg-[#D3DED7] text-[#0F2A1D] rounded-full flex items-center justify-center mx-auto shadow-inner">
                <CheckCircle2 className="w-10 h-10 text-[#1C4432]" />
              </div>

              <div className="space-y-2">
                <h3 className="text-2xl font-serif font-bold text-[#0F2A1D]">
                  {labels.successTitle}
                </h3>
                <p className="text-[#3A5248] text-sm max-w-md mx-auto leading-relaxed">
                  {labels.successDesc}
                </p>
              </div>

              <div className="pt-4">
                <button
                  onClick={onClose}
                  className="px-8 py-3.5 bg-[#0F2A1D] hover:bg-[#1C4432] text-[#FAF8F5] font-medium text-xs uppercase tracking-wider rounded-full transition-all shadow-md cursor-pointer"
                >
                  {labels.backToSite}
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              
              {/* Row 1: Name and Email */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label className="block text-xs font-semibold uppercase tracking-wider text-[#0F2A1D]">
                    {labels.fullName} *
                  </label>
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Lord Alexander Sterling"
                    className="w-full bg-white border border-[#D3DED7] rounded-xl px-4 py-2.5 text-sm text-[#1C2826] focus:outline-hidden focus:ring-2 focus:ring-[#0F2A1D]"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="block text-xs font-semibold uppercase tracking-wider text-[#0F2A1D]">
                    {labels.email} *
                  </label>
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="alexander@safari.com"
                    className="w-full bg-white border border-[#D3DED7] rounded-xl px-4 py-2.5 text-sm text-[#1C2826] focus:outline-hidden focus:ring-2 focus:ring-[#0F2A1D]"
                  />
                </div>
              </div>

              {/* Row 2: Phone and Travel Date */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label className="block text-xs font-semibold uppercase tracking-wider text-[#0F2A1D]">
                    {labels.phone} *
                  </label>
                  <input
                    type="tel"
                    required
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="+1 (555) 234-5678"
                    className="w-full bg-white border border-[#D3DED7] rounded-xl px-4 py-2.5 text-sm text-[#1C2826] focus:outline-hidden focus:ring-2 focus:ring-[#0F2A1D]"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="block text-xs font-semibold uppercase tracking-wider text-[#0F2A1D]">
                    {labels.travelDate}
                  </label>
                  <input
                    type="date"
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                    className="w-full bg-white border border-[#D3DED7] rounded-xl px-4 py-2.5 text-sm text-[#1C2826] focus:outline-hidden focus:ring-2 focus:ring-[#0F2A1D]"
                  />
                </div>
              </div>

              {/* Row 3: Travelers count and Preferences */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label className="block text-xs font-semibold uppercase tracking-wider text-[#0F2A1D]">
                    {labels.guestsCount}
                  </label>
                  <select
                    value={travelers}
                    onChange={(e) => setTravelers(Number(e.target.value))}
                    className="w-full bg-white border border-[#D3DED7] rounded-xl px-4 py-2.5 text-sm text-[#1C2826] focus:outline-hidden focus:ring-2 focus:ring-[#0F2A1D]"
                  >
                    {[1, 2, 3, 4, 5, 6, 7, 8, '10+'].map((n) => (
                      <option key={n} value={typeof n === 'number' ? n : 10}>
                        {n} {labels.guestsUnit}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="space-y-1.5">
                  <label className="block text-xs font-semibold uppercase tracking-wider text-[#0F2A1D]">
                    {labels.preferences}
                  </label>
                  <input
                    type="text"
                    value={specialRequests}
                    onChange={(e) => setSpecialRequests(e.target.value)}
                    placeholder={labels.prefPlaceholder}
                    className="w-full bg-white border border-[#D3DED7] rounded-xl px-4 py-2.5 text-sm text-[#1C2826] focus:outline-hidden focus:ring-2 focus:ring-[#0F2A1D]"
                  />
                </div>
              </div>

              {/* Price Estimation */}
              <div className="p-4 bg-white rounded-2xl border border-[#E2E8E4] flex items-center justify-between">
                <div>
                  <span className="text-xs text-[#4A7061] uppercase tracking-wider block font-semibold">
                    {labels.estimatedLabel}
                  </span>
                  <span className="text-2xl font-serif font-bold text-[#0F2A1D]">
                    {curr.symbol}{Math.round(totalPriceUSD * curr.rate).toLocaleString()}
                  </span>
                </div>

                <div className="text-right text-[11px] text-[#1C4432] font-semibold">
                  <span className="flex items-center gap-1">
                    <ShieldCheck className="w-4 h-4 text-[#1C4432]" />
                    {labels.complimentaryProposal}
                  </span>
                </div>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full py-4 bg-[#0F2A1D] hover:bg-[#1C4432] text-[#FAF8F5] font-semibold text-xs uppercase tracking-wider rounded-full shadow-lg flex items-center justify-center gap-2 cursor-pointer transition-all hover:scale-[1.01]"
              >
                <span>{labels.submitBtn}</span>
                <ArrowRight className="w-4 h-4 text-[#A3B8AD]" />
              </button>

            </form>
          )}
        </div>

      </div>
    </div>
  );
};
