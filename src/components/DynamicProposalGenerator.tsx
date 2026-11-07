import React, { useState, useMemo } from 'react';
import { 
  Sparkles, 
  MapPin, 
  Clock, 
  Compass, 
  Building2, 
  Users, 
  Calendar, 
  CheckCircle2, 
  Download, 
  Printer, 
  Send, 
  Phone, 
  ChevronRight, 
  ShieldCheck, 
  Layers, 
  FileText, 
  ArrowRight, 
  Check, 
  X,
  MessageCircle,
  Mountain,
  Palmtree,
  Camera
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { Language, Currency, TanzaniaCircuit, TravelStyle } from '../types';
import { TRANSLATIONS, formatPrice } from '../data/translations';
import { getWhatsAppLink, getTelegramLink, generateProposalInquiryMessage } from '../utils/messengerLinks';

interface DynamicProposalGeneratorProps {
  currentLang: Language;
  currentCurrency: Currency;
  isOpen?: boolean;
  onClose?: () => void;
}

interface DestinationOption {
  id: string;
  circuit: TanzaniaCircuit;
  title: string;
  ruTitle: string;
  esTitle: string;
  frTitle: string;
  basePriceUSD: number;
  image: string;
  highlights: string[];
}

const DESTINATION_OPTIONS: DestinationOption[] = [
  {
    id: 'serengeti-migration-safari',
    circuit: 'Northern Circuit',
    title: 'Serengeti & Ngorongoro Crater Big Five Safari',
    ruTitle: 'Серенгети и кратер Нгоронгоро (Большая Пятерка)',
    esTitle: 'Serengeti y Cráter de Ngorongoro Safari Big Five',
    frTitle: 'Serengeti et Cratère du Ngorongoro Safari Big Five',
    basePriceUSD: 2890,
    image: 'https://images.unsplash.com/photo-1516426122078-c23e76319801?auto=format&fit=crop&w=800&q=80',
    highlights: ['Serengeti Endless Plains Game Drives', 'Ngorongoro Caldera Safari & Black Rhinos', 'Tarangire Giant Elephants & Baobabs'],
  },
  {
    id: 'kilimanjaro-lemosho-trek',
    circuit: 'Kilimanjaro & Meru',
    title: 'Mount Kilimanjaro Summit: 8-Day Lemosho Route',
    ruTitle: 'Восхождение на Килиманджаро (Маршрут Лемошо 8 дней)',
    esTitle: 'Ascenso al Kilimanjaro: Ruta Lemosho 8 Días',
    frTitle: 'Ascension du Kilimandjaro : Voie Lemosho 8 Jours',
    basePriceUSD: 2650,
    image: 'https://images.unsplash.com/photo-1589553416260-f586c8f1514f?auto=format&fit=crop&w=800&q=80',
    highlights: ['Uhuru Peak 5,895m Summit Attempt', 'KPAP Certified Mountain Crew & Chef', 'Shira Plateau & Barranco Wall Scramble'],
  },
  {
    id: 'bush-to-beach-zanzibar',
    circuit: 'Zanzibar & Coast',
    title: 'Serengeti Safari & Zanzibar Nungwi Beach Combo',
    ruTitle: 'Комбо: Сафари Серенгети + Пляжи Занзибара (Нунгви)',
    esTitle: 'Combo: Safari Serengeti + Playas de Zanzíbar',
    frTitle: 'Combiné : Safari Serengeti + Plages de Zanzibar',
    basePriceUSD: 3690,
    image: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=800&q=80',
    highlights: ['Bush-to-Beach Direct Flight', 'UNESCO Stone Town Heritage Tour', 'Mnemba Atoll Coral Reef Snorkeling'],
  },
  {
    id: 'hadzabe-cultural-safari',
    circuit: 'Cultural & Tribal',
    title: 'Lake Eyasi Hadzabe Bushmen & Maasai Cultural Safari',
    ruTitle: 'Хадзабе, Датога и Масаи: Культурная экспедиция',
    esTitle: 'Safari Cultural Hadzabe y Masái en Lago Eyasi',
    frTitle: 'Safari Culturel Hadzabe et Maasaï au Lac Eyasi',
    basePriceUSD: 2450,
    image: 'https://images.unsplash.com/photo-1509099836639-18ba1795216d?auto=format&fit=crop&w=800&q=80',
    highlights: ['Dawn Bow Hunting with Hadzabe Tribe', 'Datoga Blacksmith Metal Smelting', 'Authentic Maasai Boma Immersion'],
  },
  {
    id: 'wild-south-ruaha-nyerere',
    circuit: 'Southern & Western',
    title: 'Wild Southern Tanzania: Ruaha & Nyerere (Selous)',
    ruTitle: 'Дикий Юг: Парк Руаха и заповедник Ньерере (Селус)',
    esTitle: 'Sur Salvaje: Parques Ruaha y Nyerere (Selous)',
    frTitle: 'Le Sud Sauvage : Parcs de Ruaha et Nyerere (Selous)',
    basePriceUSD: 3350,
    image: 'https://images.unsplash.com/photo-1534177616072-ef7dc120449d?auto=format&fit=crop&w=800&q=80',
    highlights: ['Rufiji River Boat Safari with Hippos', 'Ruaha Lion Super-Pride Tracking', 'Remote Walking Safari with Armed Ranger'],
  },
];

const TRAVEL_STYLES: { id: TravelStyle; label: string; ruLabel: string; priceFactor: number; desc: string }[] = [
  { id: 'Private 4x4 Jeep', label: 'Private 4x4 Land Cruiser (Pop-up Roof)', ruLabel: 'Индивидуальный джип 4x4 Toyota Land Cruiser', priceFactor: 1.0, desc: 'Guaranteed window seat, unlimited game drives, expert private driver-guide.' },
  { id: 'Luxury Tented Safari', label: 'Luxury Tented Wilderness Camp', ruLabel: 'Премиум тентовые сафари-лоджи 5★', priceFactor: 1.25, desc: 'King canvas suites, bush dinners under stars, private plunge pools.' },
  { id: 'Kilimanjaro Trekking', label: 'Kilimanjaro High-Altitude Trek', ruLabel: 'Восхождение на Килиманджаро (KPAP)', priceFactor: 0.95, desc: 'Certified mountain guide team, pulse oximetry checks, summit push support.' },
  { id: 'Fly-In Safari', label: 'Bush-to-Beach Fly-In Safari', ruLabel: 'Авиа-сафари Bush-to-Beach (Легкая авиация)', priceFactor: 1.35, desc: 'Scheduled flights directly between parks and Zanzibar, saving 12+ road hours.' },
  { id: 'Zanzibar Beach & Spice', label: 'Zanzibar Beach & Spice Resort', ruLabel: 'Пляжный курорт на Занзибаре (All-Inclusive)', priceFactor: 0.88, desc: 'Turquoise ocean beachfront, tropical spices, seafood banquets.' },
];

const ACCOMMODATION_TIERS = [
  { id: 'comfort', name: '4★ Safari Lodges & Camps', ruName: '4★ Комфортные сафари-лоджи', costPerDayUSD: 0, desc: 'Comfortable en-suite safari lodges with pool, buffet breakfast and dinners.' },
  { id: 'luxury-tented', name: '5★ Luxury Tented Suites', ruName: '5★ Премиум тентовые сьюты', costPerDayUSD: 110, desc: 'Exclusive tented suites inside Serengeti/Tarangire with butler service.' },
  { id: 'vip-villas', name: 'Ultra-Luxury Private Villas & Oceanfront', ruName: 'VIP Виллы и океанские бунгало', costPerDayUSD: 240, desc: 'Private plunge pools, vintage champagne, five-star private chefs.' },
];

const OPTIONAL_ADDONS = [
  { id: 'russian-guide', name: 'Certified Russian-Speaking Naturalist Driver-Guide', ruName: 'Сертифицированный русскоговорящий гид-водитель', priceUSD: 180, checked: true },
  { id: 'balloon-safari', name: 'Serengeti Sunrise Hot Air Balloon Safari & Champagne Breakfast', ruName: 'Полет на воздушном шаре над Серенгети + шампанское', priceUSD: 590, checked: false },
  { id: 'hadzabe-hunting', name: 'Lake Eyasi Hadzabe Bushmen Morning Hunting Experience', ruName: 'Охота с племенем Хадзабе на рассвете у озера Эяси', priceUSD: 160, checked: true },
  { id: 'flying-doctors', name: 'AMREF Flying Doctors Emergency Evacuation Coverage', ruName: 'Страховка санавиации AMREF Flying Doctors', priceUSD: 60, checked: true },
];

export const DynamicProposalGenerator: React.FC<DynamicProposalGeneratorProps> = ({
  currentLang,
  currentCurrency,
  isOpen = false,
  onClose,
}) => {
  const t = TRANSLATIONS[currentLang] || TRANSLATIONS.en;

  // Proposal Form State
  const [selectedDestId, setSelectedDestId] = useState<string>('serengeti-migration-safari');
  const [durationDays, setDurationDays] = useState<number>(7);
  const [travelStyle, setTravelStyle] = useState<TravelStyle>('Private 4x4 Jeep');
  const [accommodationTier, setAccommodationTier] = useState<string>('comfort');
  const [travelersCount, setTravelersCount] = useState<number>(2);
  const [selectedAddons, setSelectedAddons] = useState<string[]>(['russian-guide', 'hadzabe-hunting', 'flying-doctors']);
  const [proposalSent, setProposalSent] = useState<boolean>(false);
  const [proposalCode, setProposalCode] = useState<string>('TZ-PROP-' + Math.floor(10000 + Math.random() * 90000));

  const currentDest = useMemo(() => {
    return DESTINATION_OPTIONS.find((d) => d.id === selectedDestId) || DESTINATION_OPTIONS[0];
  }, [selectedDestId]);

  const styleObj = useMemo(() => {
    return TRAVEL_STYLES.find((s) => s.id === travelStyle) || TRAVEL_STYLES[0];
  }, [travelStyle]);

  const accomObj = useMemo(() => {
    return ACCOMMODATION_TIERS.find((a) => a.id === accommodationTier) || ACCOMMODATION_TIERS[0];
  }, [accommodationTier]);

  // Dynamic Price Calculation
  const calculation = useMemo(() => {
    const dayFactor = durationDays / 6; // standard 6-day reference
    const basePerPerson = currentDest.basePriceUSD * dayFactor * styleObj.priceFactor;
    const accomPerPerson = accomObj.costPerDayUSD * durationDays;
    
    let addonsTotalUSD = 0;
    selectedAddons.forEach((addonId) => {
      const addon = OPTIONAL_ADDONS.find((a) => a.id === addonId);
      if (addon) {
        addonsTotalUSD += addon.priceUSD;
      }
    });

    const pricePerPersonUSD = Math.round(basePerPerson + accomPerPerson + addonsTotalUSD);
    const grandTotalUSD = pricePerPersonUSD * travelersCount;

    return {
      basePerPersonUSD: Math.round(basePerPerson),
      accomPerPersonUSD: Math.round(accomPerPerson),
      addonsTotalUSD,
      pricePerPersonUSD,
      grandTotalUSD,
    };
  }, [currentDest, durationDays, styleObj, accomObj, selectedAddons, travelersCount]);

  const toggleAddon = (id: string) => {
    setSelectedAddons((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const handlePrintProposal = () => {
    window.print();
  };

  // Messenger links
  const proposalMessage = useMemo(() => {
    const destTitle = currentLang === 'ru' ? currentDest.ruTitle : currentDest.title;
    const accomName = currentLang === 'ru' ? accomObj.ruName : accomObj.name;
    const styleLabel = currentLang === 'ru' ? styleObj.ruLabel : styleObj.label;
    const totalFormatted = formatPrice(calculation.grandTotalUSD, currentCurrency);

    return generateProposalInquiryMessage({
      destination: destTitle,
      region: currentDest.circuit,
      durationDays,
      travelStyle: styleLabel,
      accommodationTier: accomName,
      travelersCount,
      totalPriceFormatted: totalFormatted,
      currentLang,
      referenceCode: proposalCode,
    });
  }, [currentDest, accomObj, styleObj, durationDays, travelersCount, calculation, currentLang, currentCurrency, proposalCode]);

  const whatsappLink = getWhatsAppLink(proposalMessage);
  const telegramLink = getTelegramLink(proposalMessage);

  return (
    <section id="custom-proposal" className="py-16 sm:py-24 bg-[#FAFAF9] text-slate-900 relative overflow-hidden border-b border-slate-200">
      {/* Background Ambience */}
      <div className="absolute inset-0 opacity-25 pointer-events-none bg-[radial-gradient(#94a3b8_1px,transparent_1px)] [background-size:24px_24px]" />
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-blue-400/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-[#1E3A8A] text-xs font-bold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5 text-[#2563EB]" />
            <span>{currentLang === 'ru' ? 'Конструктор сафари в Танзании' : 'Instant Tanzania Safari Proposal Builder'}</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-black text-[#1E3A8A] tracking-tight">
            {t.instantProposalTitle}
          </h2>

          <p className="text-sm sm:text-base text-slate-600 font-normal leading-relaxed">
            {t.instantProposalSubtitle}
          </p>
        </div>

        {/* Builder Container */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Interactive Controls */}
          <div className="lg:col-span-7 bg-white border border-slate-200 rounded-3xl p-6 sm:p-8 space-y-8 shadow-xs">
            {/* Step 1: Select Circuit & Itinerary */}
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <label className="text-xs sm:text-sm font-bold text-slate-800 flex items-center gap-2">
                  <span className="w-5 h-5 rounded-full bg-[#1E3A8A] text-white font-black text-xs flex items-center justify-center">1</span>
                  {currentLang === 'ru' ? 'Выберите сафари-маршрут:' : 'Select Tanzania Circuit & Itinerary:'}
                </label>
                <span className="text-xs text-[#2563EB] font-semibold">{currentDest.circuit}</span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {DESTINATION_OPTIONS.map((dest) => {
                  const isSelected = selectedDestId === dest.id;
                  const title = currentLang === 'ru' ? dest.ruTitle : currentLang === 'es' ? dest.esTitle : currentLang === 'fr' ? dest.frTitle : dest.title;
                  return (
                    <button
                      key={dest.id}
                      onClick={() => setSelectedDestId(dest.id)}
                      className={`text-left p-3.5 rounded-2xl border transition-all flex flex-col justify-between ${
                        isSelected
                          ? 'bg-blue-50/90 border-[#2563EB] ring-2 ring-blue-400 text-slate-900 shadow-xs'
                          : 'bg-slate-50 border-slate-200 text-slate-700 hover:border-blue-300 hover:bg-slate-100'
                      }`}
                    >
                      <div className="font-bold text-xs sm:text-sm mb-1 leading-snug">
                        {title}
                      </div>
                      <div className="flex items-center justify-between text-[11px] text-slate-500 mt-2">
                        <span className="text-[#1E3A8A] font-semibold">{dest.circuit}</span>
                        <span className="font-bold text-[#1E3A8A]">
                          {currentLang === 'ru' ? 'от' : 'from'} {formatPrice(dest.basePriceUSD, currentCurrency)}
                        </span>
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Step 2: Duration & Travelers */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4 border-t border-slate-100">
              {/* Duration Slider */}
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <label className="text-xs sm:text-sm font-bold text-slate-800 flex items-center gap-2">
                    <span className="w-5 h-5 rounded-full bg-[#1E3A8A] text-white font-black text-xs flex items-center justify-center">2</span>
                    {currentLang === 'ru' ? 'Длительность сафари:' : 'Trip Duration:'}
                  </label>
                  <span className="text-sm font-mono font-bold text-[#1E3A8A] bg-blue-50 px-2.5 py-0.5 rounded-md border border-blue-200">
                    {durationDays} {currentLang === 'ru' ? 'дней' : 'days'}
                  </span>
                </div>

                <input
                  type="range"
                  min={3}
                  max={18}
                  step={1}
                  value={durationDays}
                  onChange={(e) => setDurationDays(Number(e.target.value))}
                  className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-[#1E3A8A]"
                />

                <div className="flex justify-between text-[10px] text-slate-500 font-mono">
                  <span>3 Days (Short Safari)</span>
                  <span>7 Days (Classic)</span>
                  <span>18 Days (Grand Circuit)</span>
                </div>
              </div>

              {/* Number of Travelers */}
              <div className="space-y-2">
                <label className="text-xs sm:text-sm font-bold text-slate-800 flex items-center gap-2">
                  <span className="w-5 h-5 rounded-full bg-[#1E3A8A] text-white font-black text-xs flex items-center justify-center">3</span>
                  {currentLang === 'ru' ? 'Количество гостей:' : 'Party Size:'}
                </label>

                <div className="flex items-center gap-2">
                  {[1, 2, 4, 6, 8].map((count) => (
                    <button
                      key={count}
                      onClick={() => setTravelersCount(count)}
                      className={`flex-1 py-2 rounded-xl text-xs font-bold transition-all ${
                        travelersCount === count
                          ? 'bg-[#1E3A8A] text-white shadow-xs font-black'
                          : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                      }`}
                    >
                      {count} {count === 1 ? (currentLang === 'ru' ? 'гость' : 'guest') : (currentLang === 'ru' ? 'гостей' : 'guests')}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Step 3: Travel Style Selection */}
            <div className="space-y-3 pt-4 border-t border-slate-100">
              <label className="text-xs sm:text-sm font-bold text-slate-800 flex items-center gap-2">
                <span className="w-5 h-5 rounded-full bg-[#1E3A8A] text-white font-black text-xs flex items-center justify-center">4</span>
                {currentLang === 'ru' ? 'Формат экспедиции:' : 'Select Safari Style:'}
              </label>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {TRAVEL_STYLES.map((style) => {
                  const isSelected = travelStyle === style.id;
                  const label = currentLang === 'ru' ? style.ruLabel : style.label;
                  return (
                    <button
                      key={style.id}
                      onClick={() => setTravelStyle(style.id)}
                      className={`p-3 rounded-xl border text-left transition-all ${
                        isSelected
                          ? 'bg-blue-50/90 border-[#2563EB] text-slate-900 font-bold shadow-xs'
                          : 'bg-slate-50 border-slate-200 text-slate-700 hover:bg-slate-100'
                      }`}
                    >
                      <div className="text-xs font-bold">{label}</div>
                      <div className="text-[10px] text-slate-500 mt-1 line-clamp-1">{style.desc}</div>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Step 4: Accommodation Tier */}
            <div className="space-y-3 pt-4 border-t border-slate-100">
              <label className="text-xs sm:text-sm font-bold text-slate-800 flex items-center gap-2">
                <span className="w-5 h-5 rounded-full bg-[#1E3A8A] text-white font-black text-xs flex items-center justify-center">5</span>
                {currentLang === 'ru' ? 'Категория сафари-лоджей:' : 'Lodge & Camp Level:'}
              </label>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {ACCOMMODATION_TIERS.map((tier) => {
                  const isSelected = accommodationTier === tier.id;
                  const name = currentLang === 'ru' ? tier.ruName : tier.name;
                  return (
                    <button
                      key={tier.id}
                      onClick={() => setAccommodationTier(tier.id)}
                      className={`p-3 rounded-xl border text-left transition-all ${
                        isSelected
                          ? 'bg-blue-50/90 border-[#2563EB] text-slate-900 font-bold shadow-xs'
                          : 'bg-slate-50 border-slate-200 text-slate-700 hover:bg-slate-100'
                      }`}
                    >
                      <div className="text-xs font-bold">{name}</div>
                      <div className="text-[10px] text-[#1E3A8A] font-semibold mt-1">
                        {tier.costPerDayUSD === 0
                          ? (currentLang === 'ru' ? 'Входит в базу' : 'Included in base')
                          : `+${formatPrice(tier.costPerDayUSD, currentCurrency)} / ${currentLang === 'ru' ? 'день' : 'day'}`}
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Step 5: Add-on Experiences & Guiding */}
            <div className="space-y-3 pt-4 border-t border-slate-100">
              <label className="text-xs sm:text-sm font-bold text-slate-800 flex items-center gap-2">
                <span className="w-5 h-5 rounded-full bg-[#1E3A8A] text-white font-black text-xs flex items-center justify-center">6</span>
                {currentLang === 'ru' ? 'Дополнительные опции сафари:' : 'Add-on Experiences & Guiding:'}
              </label>

              <div className="space-y-2">
                {OPTIONAL_ADDONS.map((addon) => {
                  const isChecked = selectedAddons.includes(addon.id);
                  const name = currentLang === 'ru' ? addon.ruName : addon.name;
                  return (
                    <label
                      key={addon.id}
                      className={`flex items-center justify-between p-3 rounded-xl border cursor-pointer transition-all ${
                        isChecked
                          ? 'bg-blue-50/70 border-blue-400 text-slate-900 shadow-xs'
                          : 'bg-slate-50 border-slate-200 text-slate-600 hover:bg-slate-100'
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <input
                          type="checkbox"
                          checked={isChecked}
                          onChange={() => toggleAddon(addon.id)}
                          className="w-4 h-4 text-[#1E3A8A] rounded border-slate-300 focus:ring-[#1E3A8A] accent-[#1E3A8A]"
                        />
                        <span className="text-xs font-medium">{name}</span>
                      </div>
                      <span className="text-xs font-mono font-bold text-[#1E3A8A] shrink-0 ml-2">
                        +{formatPrice(addon.priceUSD, currentCurrency)}
                      </span>
                    </label>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Right Column: Live Dynamic Proposal Output & One-Click Messengers */}
          <div className="lg:col-span-5 space-y-6">
            {/* Live Generated Proposal Card (Printable / Exportable) */}
            <div id="printable-proposal-card" className="bg-white text-slate-900 rounded-3xl p-6 sm:p-8 shadow-sm border border-slate-200 space-y-6 relative">
              {/* Proposal Header */}
              <div className="flex items-start justify-between border-b border-slate-100 pb-4">
                <div>
                  <div className="flex items-center gap-2">
                    <span className="bg-[#1E3A8A] text-white text-[10px] font-black uppercase px-2.5 py-0.5 rounded tracking-wider">
                      TOURWEB TANZANIA PROPOSAL
                    </span>
                    <span className="text-xs font-mono font-bold text-[#2563EB]">{proposalCode}</span>
                  </div>
                  <h3 className="font-serif font-black text-xl sm:text-2xl text-[#1E3A8A] mt-2">
                    {currentLang === 'ru' ? currentDest.ruTitle : currentDest.title}
                  </h3>
                </div>
              </div>

              {/* Itinerary Specs Grid */}
              <div className="grid grid-cols-2 gap-3 text-xs bg-slate-50 p-4 rounded-2xl border border-slate-200">
                <div>
                  <span className="text-slate-500 block text-[10px] uppercase font-bold">Duration</span>
                  <span className="font-bold text-slate-800">{durationDays} Days / {durationDays - 1} Nights</span>
                </div>
                <div>
                  <span className="text-slate-500 block text-[10px] uppercase font-bold">Party</span>
                  <span className="font-bold text-slate-800">{travelersCount} Travelers</span>
                </div>
                <div>
                  <span className="text-slate-500 block text-[10px] uppercase font-bold">Circuit Style</span>
                  <span className="font-bold text-slate-800 truncate block">{travelStyle}</span>
                </div>
                <div>
                  <span className="text-slate-500 block text-[10px] uppercase font-bold">Lodging Level</span>
                  <span className="font-bold text-slate-800 truncate block">
                    {currentLang === 'ru' ? accomObj.ruName : accomObj.name}
                  </span>
                </div>
              </div>

              {/* Key Inclusions Preview */}
              <div className="space-y-2">
                <span className="text-xs font-bold text-[#1E3A8A] uppercase tracking-wider block">
                  {currentLang === 'ru' ? 'Включено в расчет предложения:' : 'Included in Proposal Estimate:'}
                </span>
                <ul className="text-xs text-slate-700 space-y-1.5">
                  {currentDest.highlights.map((h, i) => (
                    <li key={i} className="flex items-center gap-2">
                      <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                      <span>{h}</span>
                    </li>
                  ))}
                  <li className="flex items-center gap-2">
                    <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                    <span>All TANAPA / NCAA National Park Entry Fees & Concessions</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                    <span>Private 4x4 Safari Land Cruiser with Unlimited Mileage</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                    <span>Full-board meals, bottled mineral water & snacks on game drives</span>
                  </li>
                </ul>
              </div>

              {/* Price Calculation Summary */}
              <div className="border-t border-slate-100 pt-4 space-y-2">
                <div className="flex justify-between text-xs text-slate-500">
                  <span>Base Package ({durationDays} days):</span>
                  <span className="font-mono font-medium text-slate-700">
                    {formatPrice(calculation.basePerPersonUSD * travelersCount, currentCurrency)}
                  </span>
                </div>

                {calculation.accomPerPersonUSD > 0 && (
                  <div className="flex justify-between text-xs text-slate-500">
                    <span>Lodge Upgrade:</span>
                    <span className="font-mono font-medium text-slate-700">
                      +{formatPrice(calculation.accomPerPersonUSD * travelersCount, currentCurrency)}
                    </span>
                  </div>
                )}

                {calculation.addonsTotalUSD > 0 && (
                  <div className="flex justify-between text-xs text-slate-500">
                    <span>Add-ons & Guiding:</span>
                    <span className="font-mono font-medium text-slate-700">
                      +{formatPrice(calculation.addonsTotalUSD * travelersCount, currentCurrency)}
                    </span>
                  </div>
                )}

                <div className="flex items-baseline justify-between pt-2 border-t border-slate-100">
                  <div>
                    <span className="text-xs text-slate-500 block uppercase font-bold tracking-wider">Estimated Total</span>
                    <span className="text-xs text-slate-500 font-medium">
                      ({formatPrice(calculation.pricePerPersonUSD, currentCurrency)} / {t.perPerson})
                    </span>
                  </div>
                  <span className="text-2xl sm:text-3xl font-serif font-black text-[#1E3A8A]">
                    {formatPrice(calculation.grandTotalUSD, currentCurrency)}
                  </span>
                </div>
              </div>

              {/* PDF Print & Export Actions */}
              <div className="grid grid-cols-2 gap-3 pt-2">
                <button
                  onClick={handlePrintProposal}
                  className="py-3 px-4 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs font-bold flex items-center justify-center gap-1.5 transition-colors border border-slate-200"
                >
                  <Printer className="w-4 h-4 text-[#1E3A8A]" />
                  <span>{currentLang === 'ru' ? 'Печать / PDF' : 'Print / Save PDF'}</span>
                </button>

                <a
                  href={`mailto:safari@tourweb.travelm?subject=TourWeb Proposal ${proposalCode}&body=${encodeURIComponent(proposalMessage)}`}
                  className="py-3 px-4 rounded-xl bg-[#1E3A8A] hover:bg-[#1e40af] text-white text-xs font-bold flex items-center justify-center gap-1.5 transition-colors shadow-xs"
                >
                  <Send className="w-4 h-4 text-white" />
                  <span>{currentLang === 'ru' ? 'Отправить на e-mail' : 'Email to Advisor'}</span>
                </a>
              </div>
            </div>

            {/* Direct Multi-Channel Messenger Action Box */}
            <div className="bg-white border border-slate-200 rounded-3xl p-6 space-y-4 shadow-xs">
              <div className="flex items-center gap-2 text-[#1E3A8A] text-xs font-bold uppercase tracking-wider">
                <MessageCircle className="w-4 h-4 text-[#2563EB]" />
                <span>{t.directConsultation}</span>
              </div>
              <p className="text-xs text-slate-600">
                {t.directConsultationSub}
              </p>

              {/* WhatsApp & Telegram Buttons */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
                {/* WhatsApp */}
                <a
                  href={whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  id="proposal-whatsapp-btn"
                  className="flex items-center justify-center gap-2.5 py-3 px-4 bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold text-xs rounded-xl shadow-xs transition-all hover:scale-[1.02]"
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
                  </svg>
                  <span>{t.chatWhatsApp}</span>
                </a>

                {/* Telegram */}
                <a
                  href={telegramLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  id="proposal-telegram-btn"
                  className="flex items-center justify-center gap-2.5 py-3 px-4 bg-[#229ED9] hover:bg-[#1e8bc0] text-white font-bold text-xs rounded-xl shadow-xs transition-all hover:scale-[1.02]"
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm5.894 8.221l-1.97 9.28c-.145.658-.537.818-1.084.508l-3-2.21-1.446 1.394c-.14.18-.357.34-.694.34l.213-3.053 5.56-5.023c.242-.213-.054-.333-.373-.12l-6.871 4.326-2.962-.924c-.643-.204-.657-.643.136-.953l11.57-4.461c.538-.196 1.006.128.832.962z"/>
                  </svg>
                  <span>{t.chatTelegram}</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
