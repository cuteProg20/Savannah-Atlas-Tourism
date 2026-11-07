import React, { useState } from 'react';
import { 
  Sparkles, 
  Compass, 
  MapPin, 
  Tent, 
  ShieldCheck, 
  Leaf, 
  Calendar, 
  Users, 
  CheckCircle2, 
  ArrowRight, 
  ArrowLeft, 
  Download, 
  MessageCircle, 
  Heart,
  Share2,
  RefreshCw
} from 'lucide-react';
import { Language, Currency } from '../types';
import { formatPrice } from '../data/translations';
import { getWhatsAppLink } from '../utils/messengerLinks';

interface DreamBoardPlannerProps {
  currentLang: Language;
  currentCurrency: Currency;
  onOpenBookingWithPlan: (planDetails: any) => void;
}

export const DreamBoardPlanner: React.FC<DreamBoardPlannerProps> = ({
  currentLang,
  currentCurrency,
  onOpenBookingWithPlan,
}) => {
  const isRu = currentLang === 'ru';
  const [currentStep, setCurrentStep] = useState<number>(1);

  // Selections
  const [selectedRegion, setSelectedRegion] = useState<string>('serengeti');
  const [selectedStyle, setSelectedStyle] = useState<string>('tented');
  const [selectedTier, setSelectedTier] = useState<string>('luxury');
  const [selectedDuration, setSelectedDuration] = useState<number>(8);
  const [selectedTravelers, setSelectedTravelers] = useState<number>(2);
  const [selectedEcoPriority, setSelectedEcoPriority] = useState<string>('solar');

  // Regions
  const regions = [
    {
      id: 'serengeti',
      titleEn: 'Serengeti & Ngorongoro Caldera',
      titleRu: 'Серенгети и Кратер Нгоронгоро',
      tagEn: 'Great Migration & Big 5',
      tagRu: 'Великая Миграция и Big 5',
      image: 'https://images.unsplash.com/photo-1516426122078-c23e76319801?auto=format&fit=crop&w=600&q=80',
    },
    {
      id: 'kilimanjaro',
      titleEn: 'Mount Kilimanjaro Summit (5,895m)',
      titleRu: 'Восхождение на Килиманджаро (5 895 м)',
      tagEn: 'KPAP High Altitude',
      tagRu: 'Безопасный треккинг KPAP',
      image: 'https://images.unsplash.com/photo-1589553416260-f586c8f1514f?auto=format&fit=crop&w=600&q=80',
    },
    {
      id: 'zanzibar',
      titleEn: 'Zanzibar Beach & Spice Coast',
      titleRu: 'Занзибар: пляжи и побережье специй',
      tagEn: 'Coral Reefs & Non-Tidal Waters',
      tagRu: 'Пляжи Кендвы без отливов',
      image: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=600&q=80',
    },
    {
      id: 'southern',
      titleEn: 'Wild South: Ruaha & Nyerere',
      titleRu: 'Дикий Юг: Руаха и Ньерере (Селус)',
      tagEn: 'River Boating & Raw Wilderness',
      tagRu: 'Водные сафари на лодках',
      image: 'https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?auto=format&fit=crop&w=600&q=80',
    },
  ];

  // Styles
  const styles = [
    {
      id: 'tented',
      titleEn: 'Luxury Tented Safari Camp',
      titleRu: 'Премиум тентовые сафари-кемпы',
      descEn: 'Authentic under-canvas living following the migration herds dynamically.',
      descRu: 'Глэмпинг в самом сердце саванны с персональным сервисом.',
      icon: Tent,
    },
    {
      id: 'jeep',
      titleEn: 'Private 4x4 Land Cruiser Explorer',
      titleRu: 'Индивидуальный джип 4x4 с гидом',
      descEn: 'Exclusive extended vehicle with pop-up roof and accredited naturalist.',
      descRu: 'Персональный удлиненный джип с панорамной крышей и гидом-биологом.',
      icon: Compass,
    },
    {
      id: 'flyin',
      titleEn: 'Fly-In Aerial Bush-to-Beach',
      titleRu: 'Авиа-сафари Bush-to-Beach',
      descEn: 'Direct Cessna flights from savanna airstrips straight to oceanfront villas.',
      descRu: 'Прямые авиаперелеты из саванны прямо к океанским пляжам Занзибара.',
      icon: Sparkles,
    },
  ];

  // Tiers
  const tiers = [
    {
      id: 'ultra',
      titleEn: 'Ultra-Luxury Lodges (Singita & Four Seasons)',
      titleRu: 'Ультра-люкс лоджи (Singita, Four Seasons)',
      priceFactor: 850,
      badge: '5★ Premier',
    },
    {
      id: 'luxury',
      titleEn: 'Classic Luxury Tented Glamping',
      titleRu: 'Классический премиум-глэмпинг в саванне',
      priceFactor: 540,
      badge: 'Signature',
    },
    {
      id: 'comfort',
      titleEn: 'Scenic Comfort Eco-Lodges',
      titleRu: 'Уютные видовые эко-лоджи (Mid-Range)',
      priceFactor: 310,
      badge: 'Best Value',
    },
  ];

  // Sustainability Priorities
  const ecoPriorities = [
    {
      id: 'solar',
      titleEn: '100% Off-Grid Solar & Zero Plastics',
      titleRu: '100% Солнечная энергия и Zero Plastic',
      descEn: 'Prioritizing solar-powered camps and stainless steel spring water refilling.',
      descRu: 'Выбор кемпов на солнечной энергии и отказ от пластика.',
    },
    {
      id: 'poaching',
      titleEn: 'Wildlife Anti-Poaching Ranger Patrols',
      titleRu: 'Фонд рейнджеров против браконьерства',
      descEn: 'Directly co-funding 24/7 armed wildlife sanctuary ranger units.',
      descRu: 'Прямое софинансирование патрулей охраны носорогов и слонов.',
    },
    {
      id: 'community',
      titleEn: 'Maasai Schooling & Healthcare Fund',
      titleRu: 'Школы и медицина для племен Масаи',
      descEn: 'Direct contributions to clean water boreholes and village health posts.',
      descRu: 'Вклад в артезианские скважины и образование детей в общинах.',
    },
  ];

  // Price Calculation
  const getCalculatedEstimate = () => {
    const tierData = tiers.find((t) => t.id === selectedTier) || tiers[1];
    const baseDaily = tierData.priceFactor;
    const baseTotal = baseDaily * selectedDuration * selectedTravelers;
    return baseTotal;
  };

  const estimatedTotalUSD = getCalculatedEstimate();

  const handleCreateBlueprint = () => {
    const plan = {
      region: selectedRegion,
      style: selectedStyle,
      tier: selectedTier,
      duration: selectedDuration,
      travelers: selectedTravelers,
      ecoPriority: selectedEcoPriority,
      estimatedUSD: estimatedTotalUSD,
    };
    onOpenBookingWithPlan(plan);
  };

  const getWhatsAppBlueprintLink = () => {
    const msg = isRu
      ? `Здравствуйте, TourWeb! Я составил план путешествия в Dream Board Planner:\n- Регион: ${selectedRegion}\n- Стиль: ${selectedStyle}\n- Уровень: ${selectedTier}\n- Длительность: ${selectedDuration} дней, гостей: ${selectedTravelers}\n- Эко-приоритет: ${selectedEcoPriority}\nОриентировочный бюджет: $${estimatedTotalUSD}. Прошу прислать детальную программу.`
      : `Hello TourWeb! I designed an expedition blueprint on your Dream Board Planner:\n- Region: ${selectedRegion}\n- Style: ${selectedStyle}\n- Accommodation: ${selectedTier}\n- Duration: ${selectedDuration} days, Guests: ${selectedTravelers}\n- Eco Priority: ${selectedEcoPriority}\nEstimated Budget: $${estimatedTotalUSD}. Please send me the detailed proposal.`;
    return getWhatsAppLink(msg);
  };

  return (
    <section id="trip-planner" className="py-24 bg-[#FAF9F5] text-[#1C1917] border-b border-[#E6E1D8] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 bg-[#1B3B2B]/10 text-[#1B3B2B] text-xs font-bold uppercase tracking-widest px-3.5 py-1.5 rounded-full border border-[#1B3B2B]/20">
            <Sparkles className="w-3.5 h-3.5 text-[#D97706]" />
            <span>{isRu ? 'Интерактивный конструктор' : 'Interactive Dream Board & Trip Planner'}</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-[#1C1917] tracking-tight">
            {isRu ? 'Спроектируйте вашу авторскую экспедицию' : 'Design Your Bespoke Wilderness Journey'}
          </h2>

          <p className="text-sm sm:text-base text-slate-600 font-light">
            {isRu
              ? 'Выберите ключевой регион, ритм передвижения, уровень лоджей и природоохранные приоритеты за 4 шага.'
              : 'Customize your private circuit, expedition pace, accommodation tier, and conservation pledge in 4 simple steps.'}
          </p>
        </div>

        {/* Multi-Step Widget Container */}
        <div className="bg-white rounded-3xl border border-[#E6E1D8] shadow-md p-6 sm:p-8 lg:p-10">
          
          {/* Step Progress Tracker */}
          <div className="flex items-center justify-between border-b border-[#E6E1D8] pb-6 mb-8 overflow-x-auto no-scrollbar">
            {[
              { num: 1, labelEn: '1. Destination', labelRu: '1. Регион' },
              { num: 2, labelEn: '2. Travel Style', labelRu: '2. Формат' },
              { num: 3, labelEn: '3. Stays & Guests', labelRu: '3. Лоджи и состав' },
              { num: 4, labelEn: '4. Conservation', labelRu: '4. Экология' },
              { num: 5, labelEn: '5. Live Blueprint', labelRu: '5. Результат' },
            ].map((step) => (
              <button
                key={step.num}
                onClick={() => setCurrentStep(step.num)}
                className={`flex items-center gap-2 text-xs sm:text-sm font-bold whitespace-nowrap transition-colors px-2 py-1 ${
                  currentStep === step.num
                    ? 'text-[#1B3B2B] border-b-2 border-[#1B3B2B]'
                    : currentStep > step.num
                    ? 'text-emerald-700'
                    : 'text-slate-400'
                }`}
              >
                <span className={`w-6 h-6 rounded-full flex items-center justify-center text-xs ${
                  currentStep === step.num
                    ? 'bg-[#1B3B2B] text-white'
                    : currentStep > step.num
                    ? 'bg-emerald-100 text-emerald-800'
                    : 'bg-slate-100 text-slate-500'
                }`}>
                  {step.num}
                </span>
                <span>{isRu ? step.labelRu : step.labelEn}</span>
              </button>
            ))}
          </div>

          {/* STEP 1: Region */}
          {currentStep === 1 && (
            <div className="space-y-6 animate-in fade-in duration-300">
              <div>
                <h3 className="text-xl font-serif font-bold text-[#1C1917]">
                  {isRu ? 'Шаг 1: Выберите основной регион дикой природы' : 'Step 1: Choose Your Primary Wilderness Territory'}
                </h3>
                <p className="text-xs text-slate-500 mt-1">
                  {isRu ? 'Каждая экосистема предлагает уникальные виды животных и ландшафты' : 'Each ecosystem offers distinctive wildlife dynamics and natural landscapes.'}
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {regions.map((reg) => (
                  <div
                    key={reg.id}
                    onClick={() => setSelectedRegion(reg.id)}
                    className={`cursor-pointer rounded-2xl border overflow-hidden transition-all group ${
                      selectedRegion === reg.id
                        ? 'border-[#1B3B2B] ring-2 ring-[#1B3B2B] shadow-md'
                        : 'border-[#E6E1D8] hover:border-slate-400'
                    }`}
                  >
                    <div className="relative h-36 overflow-hidden bg-slate-900">
                      <img
                        src={reg.image}
                        alt={reg.titleEn}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        referrerPolicy="no-referrer"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
                      <span className="absolute bottom-2 left-2 bg-[#1B3B2B]/90 text-amber-300 text-[10px] font-bold px-2 py-0.5 rounded">
                        {isRu ? reg.tagRu : reg.tagEn}
                      </span>
                    </div>
                    <div className="p-3.5 bg-white">
                      <h4 className="font-serif font-bold text-xs sm:text-sm text-[#1C1917] line-clamp-1">
                        {isRu ? reg.titleRu : reg.titleEn}
                      </h4>
                    </div>
                  </div>
                ))}
              </div>

              <div className="flex justify-end pt-4">
                <button
                  onClick={() => setCurrentStep(2)}
                  className="px-6 py-3 bg-[#1B3B2B] hover:bg-[#152e22] text-white font-bold text-xs sm:text-sm rounded-xl shadow-xs transition-all flex items-center gap-2"
                >
                  <span>{isRu ? 'Далее: Выбор формата' : 'Next: Travel Style'}</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          )}

          {/* STEP 2: Travel Style */}
          {currentStep === 2 && (
            <div className="space-y-6 animate-in fade-in duration-300">
              <div>
                <h3 className="text-xl font-serif font-bold text-[#1C1917]">
                  {isRu ? 'Шаг 2: Выберите стиль и формат передвижения' : 'Step 2: Define Your Expedition Pace & Rhythm'}
                </h3>
                <p className="text-xs text-slate-500 mt-1">
                  {isRu ? 'Как именно вы хотите исследовать просторы Танзании?' : 'How would you prefer to traverse the landscapes?'}
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                {styles.map((st) => {
                  const Icon = st.icon;
                  const isSelected = selectedStyle === st.id;
                  return (
                    <div
                      key={st.id}
                      onClick={() => setSelectedStyle(st.id)}
                      className={`cursor-pointer rounded-2xl border p-5 transition-all flex flex-col justify-between space-y-4 ${
                        isSelected
                          ? 'border-[#1B3B2B] bg-[#F5F2EB] ring-2 ring-[#1B3B2B] shadow-md'
                          : 'border-[#E6E1D8] bg-white hover:border-slate-400'
                      }`}
                    >
                      <div className="space-y-3">
                        <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${isSelected ? 'bg-[#1B3B2B] text-amber-300' : 'bg-slate-100 text-slate-700'}`}>
                          <Icon className="w-5 h-5" />
                        </div>
                        <h4 className="font-serif font-bold text-sm sm:text-base text-[#1C1917]">
                          {isRu ? st.titleRu : st.titleEn}
                        </h4>
                        <p className="text-xs text-slate-600 font-light leading-relaxed">
                          {isRu ? st.descRu : st.descEn}
                        </p>
                      </div>

                      <div className="flex items-center gap-1 text-[11px] font-bold text-[#1B3B2B]">
                        {isSelected ? <CheckCircle2 className="w-4 h-4 text-emerald-600" /> : <div className="w-4 h-4 rounded-full border border-slate-300" />}
                        <span>{isSelected ? (isRu ? 'Выбрано' : 'Selected') : (isRu ? 'Выбрать' : 'Select')}</span>
                      </div>
                    </div>
                  );
                })}
              </div>

              <div className="flex items-center justify-between pt-4">
                <button
                  onClick={() => setCurrentStep(1)}
                  className="px-5 py-2.5 text-xs font-bold text-slate-600 hover:text-slate-900 flex items-center gap-1.5"
                >
                  <ArrowLeft className="w-4 h-4" />
                  <span>{isRu ? 'Назад' : 'Back'}</span>
                </button>

                <button
                  onClick={() => setCurrentStep(3)}
                  className="px-6 py-3 bg-[#1B3B2B] hover:bg-[#152e22] text-white font-bold text-xs sm:text-sm rounded-xl shadow-xs transition-all flex items-center gap-2"
                >
                  <span>{isRu ? 'Далее: Лоджи и гости' : 'Next: Lodges & Group'}</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          )}

          {/* STEP 3: Accommodation Tier & Guests */}
          {currentStep === 3 && (
            <div className="space-y-6 animate-in fade-in duration-300">
              <div>
                <h3 className="text-xl font-serif font-bold text-[#1C1917]">
                  {isRu ? 'Шаг 3: Уровень комфорта, длительность и гости' : 'Step 3: Accommodation Level, Duration & Guests'}
                </h3>
                <p className="text-xs text-slate-500 mt-1">
                  {isRu ? 'Категория лоджей и параметры вашей группы' : 'Select your desired lodge comfort tier and party size.'}
                </p>
              </div>

              {/* Tiers */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {tiers.map((tr) => {
                  const isSelected = selectedTier === tr.id;
                  return (
                    <div
                      key={tr.id}
                      onClick={() => setSelectedTier(tr.id)}
                      className={`cursor-pointer rounded-2xl border p-4 transition-all ${
                        isSelected
                          ? 'border-[#1B3B2B] bg-[#F5F2EB] ring-2 ring-[#1B3B2B] shadow-sm'
                          : 'border-[#E6E1D8] bg-white hover:border-slate-400'
                      }`}
                    >
                      <span className="text-[10px] font-bold bg-[#1B3B2B] text-white px-2 py-0.5 rounded">
                        {tr.badge}
                      </span>
                      <h4 className="font-serif font-bold text-xs sm:text-sm text-[#1C1917] mt-2 mb-1">
                        {isRu ? tr.titleRu : tr.titleEn}
                      </h4>
                      <div className="text-xs font-mono text-amber-700 font-bold">
                        ~{formatPrice(tr.priceFactor, currentCurrency)} {isRu ? '/ ночь' : '/ night'}
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Sliders for Duration & Guests */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 bg-[#FAF9F5] border border-[#E6E1D8] p-5 rounded-2xl">
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <label className="text-xs font-bold uppercase text-slate-700">
                      {isRu ? 'Длительность экспедиции:' : 'Expedition Duration:'}
                    </label>
                    <span className="text-sm font-bold text-[#1B3B2B]">
                      {selectedDuration} {isRu ? 'дней' : 'days'}
                    </span>
                  </div>
                  <input
                    type="range"
                    min="3"
                    max="18"
                    value={selectedDuration}
                    onChange={(e) => setSelectedDuration(Number(e.target.value))}
                    className="w-full accent-[#1B3B2B]"
                  />
                  <div className="flex justify-between text-[10px] text-slate-400 mt-1">
                    <span>3 days</span>
                    <span>8 days (optimal)</span>
                    <span>18 days</span>
                  </div>
                </div>

                <div>
                  <div className="flex items-center justify-between mb-2">
                    <label className="text-xs font-bold uppercase text-slate-700">
                      {isRu ? 'Количество путешественников:' : 'Number of Guests:'}
                    </label>
                    <span className="text-sm font-bold text-[#1B3B2B]">
                      {selectedTravelers} {isRu ? 'гостей' : 'travelers'}
                    </span>
                  </div>
                  <input
                    type="range"
                    min="1"
                    max="10"
                    value={selectedTravelers}
                    onChange={(e) => setSelectedTravelers(Number(e.target.value))}
                    className="w-full accent-[#1B3B2B]"
                  />
                  <div className="flex justify-between text-[10px] text-slate-400 mt-1">
                    <span>1 solo</span>
                    <span>2-4 couple/family</span>
                    <span>10 group</span>
                  </div>
                </div>
              </div>

              <div className="flex items-center justify-between pt-4">
                <button
                  onClick={() => setCurrentStep(2)}
                  className="px-5 py-2.5 text-xs font-bold text-slate-600 hover:text-slate-900 flex items-center gap-1.5"
                >
                  <ArrowLeft className="w-4 h-4" />
                  <span>{isRu ? 'Назад' : 'Back'}</span>
                </button>

                <button
                  onClick={() => setCurrentStep(4)}
                  className="px-6 py-3 bg-[#1B3B2B] hover:bg-[#152e22] text-white font-bold text-xs sm:text-sm rounded-xl shadow-xs transition-all flex items-center gap-2"
                >
                  <span>{isRu ? 'Далее: Эко-приоритеты' : 'Next: Conservation Focus'}</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          )}

          {/* STEP 4: Conservation & Sustainability Pledge */}
          {currentStep === 4 && (
            <div className="space-y-6 animate-in fade-in duration-300">
              <div>
                <h3 className="text-xl font-serif font-bold text-[#1C1917]">
                  {isRu ? 'Шаг 4: Выберите ключевой фокус сохранения природы' : 'Step 4: Select Your Conservation Priority'}
                </h3>
                <p className="text-xs text-slate-500 mt-1">
                  {isRu ? '5% от каждой экспедиции направляется в выбранный фонд без доплат' : '5% of your safari booking directly finances your chosen impact initiative at no extra charge.'}
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {ecoPriorities.map((eco) => {
                  const isSelected = selectedEcoPriority === eco.id;
                  return (
                    <div
                      key={eco.id}
                      onClick={() => setSelectedEcoPriority(eco.id)}
                      className={`cursor-pointer rounded-2xl border p-5 transition-all flex flex-col justify-between space-y-3 ${
                        isSelected
                          ? 'border-[#1B3B2B] bg-[#F5F2EB] ring-2 ring-[#1B3B2B] shadow-md'
                          : 'border-[#E6E1D8] bg-white hover:border-slate-400'
                      }`}
                    >
                      <div className="space-y-2">
                        <Leaf className={`w-5 h-5 ${isSelected ? 'text-emerald-700' : 'text-slate-400'}`} />
                        <h4 className="font-serif font-bold text-sm text-[#1C1917]">
                          {isRu ? eco.titleRu : eco.titleEn}
                        </h4>
                        <p className="text-xs text-slate-600 font-light leading-relaxed">
                          {isRu ? eco.descRu : eco.descEn}
                        </p>
                      </div>

                      <div className="flex items-center gap-1.5 text-xs font-bold text-emerald-800">
                        <ShieldCheck className="w-4 h-4 text-emerald-600" />
                        <span>{isRu ? 'Включено в тур' : 'Impact Included'}</span>
                      </div>
                    </div>
                  );
                })}
              </div>

              <div className="flex items-center justify-between pt-4">
                <button
                  onClick={() => setCurrentStep(3)}
                  className="px-5 py-2.5 text-xs font-bold text-slate-600 hover:text-slate-900 flex items-center gap-1.5"
                >
                  <ArrowLeft className="w-4 h-4" />
                  <span>{isRu ? 'Назад' : 'Back'}</span>
                </button>

                <button
                  onClick={() => setCurrentStep(5)}
                  className="px-7 py-3 bg-[#D97706] hover:bg-[#b45309] text-white font-bold text-xs sm:text-sm rounded-xl shadow-md transition-all flex items-center gap-2 hover:scale-[1.02]"
                >
                  <Sparkles className="w-4 h-4 text-amber-200" />
                  <span>{isRu ? 'Сформировать маршрут' : 'Generate Live Blueprint'}</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          )}

          {/* STEP 5: Live Expedition Blueprint */}
          {currentStep === 5 && (
            <div className="space-y-6 animate-in zoom-in-95 duration-300">
              <div className="bg-[#1B3B2B] text-white rounded-2xl p-6 sm:p-8 space-y-6">
                
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-emerald-800/80 pb-4">
                  <div>
                    <span className="text-xs font-mono text-amber-300 uppercase tracking-widest font-bold">
                      TourWeb Customized Expedition Blueprint
                    </span>
                    <h3 className="text-2xl sm:text-3xl font-serif font-bold text-white mt-1">
                      {selectedDuration}-Day {selectedRegion.toUpperCase()} Signature Safari
                    </h3>
                  </div>

                  <div className="text-left sm:text-right">
                    <span className="text-xs text-emerald-300 block">
                      {isRu ? 'Расчётный бюджет для группы' : 'Estimated Party Total'}
                    </span>
                    <span className="text-2xl sm:text-3xl font-serif font-bold text-amber-300">
                      {formatPrice(estimatedTotalUSD, currentCurrency)}
                    </span>
                    <span className="text-[11px] text-emerald-200 block">
                      ({selectedTravelers} {isRu ? 'путешественников' : 'guests'}, ~{formatPrice(Math.round(estimatedTotalUSD / selectedTravelers), currentCurrency)} {isRu ? '/ гостя' : '/ guest'})
                    </span>
                  </div>
                </div>

                {/* Summary Grid */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-xs">
                  <div className="bg-emerald-950/60 p-3 rounded-xl border border-emerald-800/60">
                    <span className="text-emerald-400 block font-semibold">{isRu ? 'Регион' : 'Territory'}</span>
                    <span className="font-bold text-white text-sm capitalize">{selectedRegion}</span>
                  </div>

                  <div className="bg-emerald-950/60 p-3 rounded-xl border border-emerald-800/60">
                    <span className="text-emerald-400 block font-semibold">{isRu ? 'Стиль сафари' : 'Expedition Style'}</span>
                    <span className="font-bold text-white text-sm capitalize">{selectedStyle}</span>
                  </div>

                  <div className="bg-emerald-950/60 p-3 rounded-xl border border-emerald-800/60">
                    <span className="text-emerald-400 block font-semibold">{isRu ? 'Категория лоджей' : 'Stay Tier'}</span>
                    <span className="font-bold text-white text-sm capitalize">{selectedTier}</span>
                  </div>

                  <div className="bg-emerald-950/60 p-3 rounded-xl border border-emerald-800/60">
                    <span className="text-emerald-400 block font-semibold">{isRu ? 'Эко-вклад' : 'Conservation'}</span>
                    <span className="font-bold text-amber-300 text-sm capitalize">{selectedEcoPriority}</span>
                  </div>
                </div>

                {/* Inclusions list */}
                <div className="space-y-2 pt-2 border-t border-emerald-800/60">
                  <div className="text-xs font-bold uppercase text-amber-300 tracking-wider">
                    {isRu ? 'Гарантированные опции вашего тура:' : 'Guaranteed Expedition Inclusions:'}
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-emerald-100">
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                      <span>{isRu ? 'Удлиненный 4x4 Toyota Land Cruiser с панорамной крышей' : 'Private Custom 4x4 Land Cruiser with pop-up roof'}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                      <span>{isRu ? 'Сертифицированный русскоязычный гид-натуралист' : 'Certified Senior Naturalist Driver-Guide'}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                      <span>{isRu ? 'Все парковые сборы TANAPA, Нгоронгоро и налоги' : 'All TANAPA, NCAA Crater & Concession Fees'}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                      <span>{isRu ? '100% компенсация углеродного следа и страховка Flying Doctors' : '100% Carbon Offset + AMREF Flying Doctors Evacuation'}</span>
                    </div>
                  </div>
                </div>

                {/* Actions */}
                <div className="flex flex-wrap items-center gap-3 pt-4 border-t border-emerald-800/80">
                  <button
                    onClick={handleCreateBlueprint}
                    className="px-6 py-3.5 bg-gradient-to-r from-amber-500 to-amber-400 hover:from-amber-400 hover:to-amber-300 text-slate-950 font-black text-xs sm:text-sm rounded-xl shadow-lg transition-all flex items-center gap-2"
                  >
                    <span>{isRu ? 'Забронировать по этому плану' : 'Lock In This Blueprint'}</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>

                  <a
                    href={getWhatsAppBlueprintLink()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-5 py-3.5 bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold text-xs sm:text-sm rounded-xl shadow-xs transition-all flex items-center gap-2"
                  >
                    <MessageCircle className="w-4 h-4" />
                    <span>{isRu ? 'Отправить гиду в WhatsApp' : 'Send to Advisor on WhatsApp'}</span>
                  </a>

                  <button
                    onClick={() => setCurrentStep(1)}
                    className="px-4 py-3.5 bg-emerald-900/60 hover:bg-emerald-900 text-emerald-200 text-xs font-semibold rounded-xl transition-colors flex items-center gap-1.5 ml-auto"
                  >
                    <RefreshCw className="w-3.5 h-3.5" />
                    <span>{isRu ? 'Сбросить' : 'Reset Plan'}</span>
                  </button>
                </div>

              </div>
            </div>
          )}

        </div>

      </div>
    </section>
  );
};
