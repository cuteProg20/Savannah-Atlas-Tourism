import React, { useState } from 'react';
import { 
  CheckCircle2, 
  Sparkles, 
  ShieldCheck, 
  ArrowRight,
  Send
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { Language, Currency } from '../types';

interface PlanTripSectionProps {
  currentLang: Language;
  currentCurrency: Currency;
  onOpenBookingModal?: (customTitle?: string) => void;
}

export const PlanTripSection: React.FC<PlanTripSectionProps> = ({
  currentLang,
}) => {
  const [selectedRoute, setSelectedRoute] = useState('Serengeti in Stillness');
  const [duration, setDuration] = useState('6–10 nights');
  const [travelers, setTravelers] = useState(2);
  const [month, setMonth] = useState('Jul – Aug 2026');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [notes, setNotes] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [bookingRef, setBookingRef] = useState('');

  const getLocalized = (en: string, ru?: string, fr?: string, es?: string) => {
    if (currentLang === 'ru' && ru) return ru;
    if (currentLang === 'fr' && fr) return fr;
    if (currentLang === 'es' && es) return es;
    return en;
  };

  const routes = [
    { 
      id: 'Serengeti in Stillness', 
      labelEn: 'Serengeti in Stillness', 
      labelRu: 'Серенгети в тишине', 
      labelFr: 'Le Serengeti dans le Silence', 
      labelEs: 'Serengeti en Silencio', 
      tagEn: '6 Nights · Private Camp', 
      tagRu: '6 Ночей · Приватный кемп',
      tagFr: '6 Nuits · Camp Privé',
      tagEs: '6 Noches · Campamento Privado'
    },
    { 
      id: 'Ruaha After Rain', 
      labelEn: 'Ruaha After Rain', 
      labelRu: 'Руаха после дождей', 
      labelFr: 'Ruaha Après la Pluie', 
      labelEs: 'Ruaha Tras la Lluvia', 
      tagEn: '7 Nights · Walking Safari', 
      tagRu: '7 Ночей · Пешее сафари',
      tagFr: '7 Nuits · Safari à pied',
      tagEs: '7 Noches · Safari a pie'
    },
    { 
      id: 'Tarangire at Dusk', 
      labelEn: 'Tarangire at Dusk', 
      labelRu: 'Тарангире на закате', 
      labelFr: 'Tarangire au Crépuscule', 
      labelEs: 'Tarangire al Atardecer', 
      tagEn: '5 Nights · Family Camp', 
      tagRu: '5 Ночей · Семейный кемп',
      tagFr: '5 Nuits · Camp Famille',
      tagEs: '5 Noches · Campamento Familiar'
    },
    { 
      id: 'Custom Tailored Itinerary', 
      labelEn: 'Custom Tailored Circuit', 
      labelRu: 'Индивидуальный маршрут под ключ', 
      labelFr: 'Circuit Privé Sur Mesure', 
      labelEs: 'Circuito Exclusivo a Medida', 
      tagEn: 'Bespoke Nights', 
      tagRu: 'Любая длительность',
      tagFr: 'Durée flexible',
      tagEs: 'Duración flexible'
    },
  ];

  const durations = [
    { id: '4–6 nights', labelEn: '4–6 Nights (Express Circuit)', labelRu: '4–6 Ночей (Экспресс-маршрут)', labelFr: '4–6 Nuits (Circuit Express)', labelEs: '4–6 Noches (Circuito Express)' },
    { id: '6–10 nights', labelEn: '6–10 Nights (Signature Safari)', labelRu: '6–10 Ночей (Классическое сафари)', labelFr: '6–10 Nuits (Safari Signature)', labelEs: '6–10 Noches (Safari Insignia)' },
    { id: '11–14 nights', labelEn: '11–14 Nights (Safari & Zanzibar)', labelRu: '11–14 Ночей (Сафари + Занзибар)', labelFr: '11–14 Nuits (Safari & Zanzibar)', labelEs: '11–14 Noches (Safari y Zanzíbar)' },
  ];

  const seasons = [
    { id: 'Jun – Oct', labelEn: 'Jun – Oct (Dry Season & Great Migration)', labelRu: 'Июн – Окт (Сухой сезон и Великая миграция)', labelFr: 'Juin – Oct (Saison sèche & Grande Migration)', labelEs: 'Jun – Oct (Temporada seca y Gran Migración)' },
    { id: 'Dec – Mar', labelEn: 'Dec – Mar (Calving Season & Emerald Savannah)', labelRu: 'Дек – Мар (Сезон отела в саванне)', labelFr: 'Déc – Mars (Saison des naissances & Savane verte)', labelEs: 'Dic – Mar (Temporada de cría y sabana esmeralda)' },
    { id: 'Nov or May', labelEn: 'Nov or May (Green Season · Intimate Wilderness)', labelRu: 'Ноя или Май (Зеленый сезон без людей)', labelFr: 'Nov ou Mai (Saison verte · Solitude absolue)', labelEs: 'Nov o Mayo (Temporada verde y serenidad)' },
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email) return;

    const ref = `SA-${Math.floor(100000 + Math.random() * 900000)}`;
    setBookingRef(ref);
    setSubmitted(true);

    try {
      confetti({
        particleCount: 70,
        spread: 65,
        origin: { y: 0.7 },
        colors: ['#0F2A1D', '#1C4432', '#4A7061', '#D3DED7']
      });
    } catch {
      // silent
    }
  };

  const labels = {
    eyebrow: getLocalized('Plan a Trip', 'ИНДИВИДУАЛЬНЫЕ ПУТЕШЕСТВИЯ', 'CRÉER UN SÉJOUR', 'PLANIFICAR VIAJE'),
    heading: getLocalized('Shape your journey with care.', 'Сформируйте путешествие с натуралистом.', 'Façonnez votre voyage avec délicatesse.', 'Diseñe su viaje con delicadeza.'),
    subtitle: getLocalized(
      'Tell us your ideal cadence, season, and companions. Our field naturalists will craft an unhurried, conservation-first private itinerary.',
      'Расскажите о ваших пожеланиях, датах и темпе. Мы создадим выверенную частную экспедицию без спешки и клише.',
      'Partagez vos envies, votre rythme et la saison rêvée. Nos naturalistes concevront un itinéraire privé empreint de sérénité.',
      'Comparta su ritmo ideal, temporada y acompañantes. Nuestros naturalistas diseñarán un itinerario privado a medida.'
    ),
    selectRoute: getLocalized('1. Select Destination Circuit', '1. Выберите маршрут', '1. Choisissez votre circuit', '1. Seleccione su circuito'),
    selectDuration: getLocalized('2. Ideal Duration', '2. Длительность', '2. Durée idéale', '2. Duración ideal'),
    selectSeason: getLocalized('3. Preferred Season', '3. Сезон поездки', '3. Saison souhaitée', '3. Temporada preferida'),
    travelersCount: getLocalized('4. Number of Guests', '4. Количество гостей', '4. Nombre de voyageurs', '4. Número de viajeros'),
    contactInfo: getLocalized('5. Contact Coordinates', '5. Контактные данные', '5. Vos coordonnées', '5. Datos de contacto'),
    fullName: getLocalized('Your Name', 'Ваше имя', 'Votre nom', 'Su nombre'),
    email: getLocalized('Email Address', 'Электронная почта', 'Adresse e-mail', 'Correo electrónico'),
    phone: getLocalized('Phone / WhatsApp (Optional)', 'Телефон / WhatsApp (необязательно)', 'Téléphone / WhatsApp (optionnel)', 'Teléfono / WhatsApp (opcional)'),
    notes: getLocalized('Special Notes (Celebrations, photography, family...)', 'Особые пожелания (медовый месяц, фотосафари...)', 'Notes particulières (célébrations, photo, enfants...)', 'Notas especiales (celebraciones, fotos, familia...)'),
    submitBtn: getLocalized('Request Custom Itinerary', 'Запросить расчет маршрута', 'Demander un itinéraire sur mesure', 'Solicitar propuesta personalizada'),
    successTitle: getLocalized('Proposal Request Registered', 'Запрос на расчет принят', 'Demande d’itinéraire bien enregistrée', 'Solicitud registrada con éxito'),
    successDesc: getLocalized(
      `Thank you, ${name}! Your reference number is #${bookingRef}. An East Africa safari specialist will review your details and send a bespoke PDF dossier.`,
      `Спасибо, ${name}! Номер вашего запроса: #${bookingRef}. Эксперт по сафари подготовит индивидуальное досье и свяжется с вами.`,
      `Merci, ${name} ! Votre référence dossier est #${bookingRef}. Notre spécialiste préparera votre carnet de voyage sur mesure.`,
      `¡Gracias, ${name}! Su código de referencia es #${bookingRef}. Un especialista preparará su dossier personalizado.`
    ),
    resetBtn: getLocalized('Plan Another Journey', 'Создать еще один запрос', 'Planifier un autre voyage', 'Planificar otro viaje'),
  };

  return (
    <section id="plan" className="max-w-7xl mx-auto px-8 py-20 border-t border-[#E2E8E4] scroll-mt-20">
      <div className="max-w-3xl mb-12">
        <span className="text-xs font-semibold tracking-widest text-[#4A7061] uppercase">
          {labels.eyebrow}
        </span>
        <h2 className="text-4xl md:text-5xl font-serif mt-2 mb-4 text-[#0F2A1D] tracking-tight">
          {labels.heading}
        </h2>
        <p className="text-[#3A5248] text-lg leading-relaxed font-light">
          {labels.subtitle}
        </p>
      </div>

      {submitted ? (
        <div className="bg-white rounded-3xl p-10 md:p-14 border border-[#E2E8E4] shadow-xs space-y-6 animate-fade-in max-w-3xl">
          <div className="w-16 h-16 rounded-full bg-[#E2E8E4] text-[#0F2A1D] flex items-center justify-center">
            <CheckCircle2 className="w-8 h-8 text-[#1C4432]" />
          </div>

          <div className="space-y-2">
            <span className="text-xs font-bold uppercase tracking-widest text-[#4A7061]">
              SAVANNA ATLAS · FIELD CONCIERGE
            </span>
            <h3 className="text-2xl sm:text-3xl font-serif font-bold text-[#0F2A1D]">
              {labels.successTitle}
            </h3>
            <p className="text-[#3A5248] text-sm leading-relaxed">
              {labels.successDesc}
            </p>
          </div>

          <div className="pt-4">
            <button
              onClick={() => setSubmitted(false)}
              className="px-6 py-3 bg-[#0F2A1D] text-[#FAF8F5] text-xs font-medium uppercase tracking-wider rounded-full hover:bg-[#1C4432] transition cursor-pointer"
            >
              {labels.resetBtn}
            </button>
          </div>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="bg-white rounded-3xl p-8 sm:p-12 border border-[#E2E8E4] shadow-xs space-y-8 max-w-4xl">
          
          {/* 1. Circuit Selection */}
          <div className="space-y-3">
            <label className="block text-xs font-bold uppercase tracking-wider text-[#0F2A1D]">
              {labels.selectRoute}
            </label>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {routes.map((r) => {
                const isSelected = selectedRoute === r.id;
                const rLabel = getLocalized(r.labelEn, r.labelRu, r.labelFr, r.labelEs);
                const rTag = getLocalized(r.tagEn, r.tagRu, r.tagFr, r.tagEs);

                return (
                  <button
                    type="button"
                    key={r.id}
                    onClick={() => setSelectedRoute(r.id)}
                    className={`p-4 rounded-2xl text-left border transition-all cursor-pointer flex flex-col justify-between ${
                      isSelected
                        ? 'border-[#0F2A1D] bg-[#F4F6F4] ring-1 ring-[#0F2A1D]'
                        : 'border-[#E2E8E4] hover:border-[#4A7061] bg-white'
                    }`}
                  >
                    <span className="text-xs font-bold uppercase tracking-wider text-[#4A7061] mb-1">
                      {rTag}
                    </span>
                    <span className="text-sm font-serif font-bold text-[#0F2A1D]">
                      {rLabel}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* 2. Duration & Season Row */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label className="block text-xs font-bold uppercase tracking-wider text-[#0F2A1D]">
                {labels.selectDuration}
              </label>
              <select
                value={duration}
                onChange={(e) => setDuration(e.target.value)}
                className="w-full bg-[#F4F6F4] border border-[#D3DED7] rounded-xl px-4 py-3 text-sm text-[#1C2826] focus:outline-hidden focus:ring-2 focus:ring-[#0F2A1D]"
              >
                {durations.map((d) => (
                  <option key={d.id} value={d.id}>
                    {getLocalized(d.labelEn, d.labelRu, d.labelFr, d.labelEs)}
                  </option>
                ))}
              </select>
            </div>

            <div className="space-y-2">
              <label className="block text-xs font-bold uppercase tracking-wider text-[#0F2A1D]">
                {labels.selectSeason}
              </label>
              <select
                value={month}
                onChange={(e) => setMonth(e.target.value)}
                className="w-full bg-[#F4F6F4] border border-[#D3DED7] rounded-xl px-4 py-3 text-sm text-[#1C2826] focus:outline-hidden focus:ring-2 focus:ring-[#0F2A1D]"
              >
                {seasons.map((s) => (
                  <option key={s.id} value={s.id}>
                    {getLocalized(s.labelEn, s.labelRu, s.labelFr, s.labelEs)}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* 3. Number of Guests */}
          <div className="space-y-2">
            <label className="block text-xs font-bold uppercase tracking-wider text-[#0F2A1D]">
              {labels.travelersCount}
            </label>
            <div className="flex items-center gap-2">
              {[1, 2, 3, 4, 5, 6, '8+'].map((num) => (
                <button
                  type="button"
                  key={num}
                  onClick={() => setTravelers(typeof num === 'number' ? num : 8)}
                  className={`w-12 h-12 rounded-xl text-xs font-bold transition-all cursor-pointer flex items-center justify-center ${
                    travelers === num || (num === '8+' && travelers >= 8)
                      ? 'bg-[#0F2A1D] text-[#FAF8F5]'
                      : 'bg-[#F4F6F4] text-[#2D4A3E] border border-[#E2E8E4] hover:border-[#4A7061]'
                  }`}
                >
                  {num}
                </button>
              ))}
            </div>
          </div>

          {/* 4. Contact Information */}
          <div className="space-y-4 pt-4 border-t border-[#E2E8E4]">
            <label className="block text-xs font-bold uppercase tracking-wider text-[#0F2A1D]">
              {labels.contactInfo}
            </label>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <input
                type="text"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder={labels.fullName}
                className="w-full bg-[#F4F6F4] border border-[#D3DED7] rounded-xl px-4 py-3 text-sm text-[#1C2826] focus:outline-hidden focus:ring-2 focus:ring-[#0F2A1D]"
              />

              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder={labels.email}
                className="w-full bg-[#F4F6F4] border border-[#D3DED7] rounded-xl px-4 py-3 text-sm text-[#1C2826] focus:outline-hidden focus:ring-2 focus:ring-[#0F2A1D]"
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <input
                type="tel"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder={labels.phone}
                className="w-full bg-[#F4F6F4] border border-[#D3DED7] rounded-xl px-4 py-3 text-sm text-[#1C2826] focus:outline-hidden focus:ring-2 focus:ring-[#0F2A1D]"
              />

              <input
                type="text"
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
                placeholder={labels.notes}
                className="w-full bg-[#F4F6F4] border border-[#D3DED7] rounded-xl px-4 py-3 text-sm text-[#1C2826] focus:outline-hidden focus:ring-2 focus:ring-[#0F2A1D]"
              />
            </div>
          </div>

          {/* Submit Action */}
          <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2 text-xs text-[#4A7061]">
              <ShieldCheck className="w-4 h-4 text-[#1C4432]" />
              <span>Complimentary customized itinerary within 24h</span>
            </div>

            <button
              type="submit"
              className="w-full sm:w-auto px-8 py-4 bg-[#0F2A1D] hover:bg-[#1C4432] text-[#FAF8F5] text-xs font-semibold uppercase tracking-wider rounded-full shadow-md flex items-center justify-center gap-2 cursor-pointer transition-all hover:scale-105"
            >
              <span>{labels.submitBtn}</span>
              <ArrowRight className="w-4 h-4 text-[#FAF8F5]" />
            </button>
          </div>

        </form>
      )}

    </section>
  );
};
