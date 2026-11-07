import React, { useState } from 'react';
import { 
  Search, 
  MapPin, 
  Compass, 
  Calendar, 
  CheckCircle2, 
  Sparkles, 
  Languages,
  ShieldCheck,
  Award,
  Mountain,
  Sun,
  Leaf,
  ArrowRight,
  Play,
  Volume2,
  VolumeX,
  Globe2,
  ChevronRight,
  CalendarCheck,
  MessageSquare,
  Camera,
  Layers,
  Maximize2
} from 'lucide-react';
import { Language, FilterState, TanzaniaCircuit, TravelStyle } from '../types';
import { TRANSLATIONS } from '../data/translations';

interface HeroSectionProps {
  currentLang: Language;
  filters?: FilterState;
  onFilterChange?: (newFilters: Partial<FilterState>) => void;
  onSearchSubmit?: () => void;
  onStartWithWhere?: () => void;
  onExploreImpact?: () => void;
  onOpenBrochure?: () => void;
  onOpenBooking?: () => void;
  onOpenInquiry?: () => void;
}

const HERO_BACKGROUNDS = [
  {
    id: 'elephant-dust',
    titleEn: 'Elephant Dust-Bath Ritual',
    titleRu: 'Ритуал пылевого купания слона',
    locationEn: 'Tarangire River Basin',
    locationRu: 'Бассейн реки Тарангире',
    photographer: 'Iswanto Arif (Unsplash)',
    url: 'https://images.unsplash.com/photo-1557050543-4d5f4e07ef46?auto=format&fit=crop&w=2400&q=90',
    thumbnail: 'https://images.unsplash.com/photo-1557050543-4d5f4e07ef46?auto=format&fit=crop&w=400&q=80',
    tag: 'Featured Wildlife Shot',
  },
  {
    id: 'serengeti-sunset',
    titleEn: 'Serengeti Golden Hour Pride',
    titleRu: 'Золотой закат в Серенгети',
    locationEn: 'Central Serengeti Savannah',
    locationRu: 'Саванна Центрального Серенгети',
    photographer: 'Wilderness Naturalist Archives',
    url: 'https://images.unsplash.com/photo-1516426122078-c23e76319801?auto=format&fit=crop&w=2400&q=90',
    thumbnail: 'https://images.unsplash.com/photo-1516426122078-c23e76319801?auto=format&fit=crop&w=400&q=80',
    tag: 'Iconic Landscape',
  },
  {
    id: 'ngorongoro-crater',
    titleEn: 'Ngorongoro Caldera Rim',
    titleRu: 'Кромка кратера Нгоронгоро',
    locationEn: 'UNESCO World Heritage Crater',
    locationRu: 'Заповедник ЮНЕСКО',
    photographer: 'Conservation Field Unit',
    url: 'https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?auto=format&fit=crop&w=2400&q=90',
    thumbnail: 'https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?auto=format&fit=crop&w=400&q=80',
    tag: 'Crater Sanctuary',
  },
];

const DEFAULT_FILTERS: FilterState = {
  searchQuery: '',
  circuit: 'All',
  region: 'All',
  travelStyle: 'All',
  month: 'All Months',
  priceRange: [0, 8000],
  durationRange: [1, 30],
  russianGuideOnly: false,
  sortBy: 'recommended',
};

export const HeroSection: React.FC<HeroSectionProps> = ({
  currentLang,
  filters = DEFAULT_FILTERS,
  onFilterChange,
  onSearchSubmit,
  onStartWithWhere,
  onExploreImpact,
  onOpenBrochure,
  onOpenBooking,
  onOpenInquiry,
}) => {
  const activeFilters = filters || DEFAULT_FILTERS;
  const t = TRANSLATIONS[currentLang] || TRANSLATIONS.en;
  const isRu = currentLang === 'ru';
  const [destinationInput, setDestinationInput] = useState(activeFilters.searchQuery || '');
  const [activeBgIndex, setActiveBgIndex] = useState(0);
  const activeBg = HERO_BACKGROUNDS[activeBgIndex];

  const circuits: { id: string; label: string; ruLabel: string }[] = [
    { id: 'All', label: 'All Tanzania Circuits', ruLabel: 'Все маршруты Танзании' },
    { id: 'Northern Circuit', label: 'Northern Circuit (Serengeti & Ngorongoro)', ruLabel: 'Северный маршрут (Серенгети и Нгоронгоро)' },
    { id: 'Kilimanjaro & Meru', label: 'Mount Kilimanjaro & Meru Treks', ruLabel: 'Килиманджаро и треккинг на Меру' },
    { id: 'Zanzibar & Coast', label: 'Zanzibar & Mafia Beach Escapes', ruLabel: 'Занзибар и пляжные курорты' },
    { id: 'Southern & Western', label: 'Southern & Western (Ruaha, Nyerere, Mahale)', ruLabel: 'Дикий Юг и Запад (Руаха, Ньерере)' },
    { id: 'Cultural & Tribal', label: 'Cultural & Tribal (Hadzabe & Maasai)', ruLabel: 'Культурные туры (Хадзабе и Масаи)' },
  ];

  const travelStyles: { id: string; label: string; ruLabel: string }[] = [
    { id: 'All', label: 'All Expedition Styles', ruLabel: 'Все стили экспедиций' },
    { id: 'Luxury Tented Safari', label: 'Luxury Tented Safari', ruLabel: 'Премиум сафари в тентовых лоджах' },
    { id: 'Private 4x4 Jeep', label: 'Private 4x4 Land Cruiser', ruLabel: 'Индивидуальный 4x4 джип' },
    { id: 'Kilimanjaro Trekking', label: 'Kilimanjaro High-Altitude Trek', ruLabel: 'Восхождение на Килиманджаро' },
    { id: 'Zanzibar Beach & Spice', label: 'Zanzibar Beach & Spice', ruLabel: 'Отдых на Занзибаре и специи' },
    { id: 'Cultural & Walking', label: 'Cultural & Walking Safari', ruLabel: 'Пешие сафари и племена' },
    { id: 'Fly-In Safari', label: 'Bush-to-Beach Fly-In Safari', ruLabel: 'Авиа-сафари Bush-to-Beach' },
  ];

  const seasons: { id: string; label: string; ruLabel: string }[] = [
    { id: 'All', label: 'Any Travel Season', ruLabel: 'Любой сезон поездки' },
    { id: 'Ndutu Migration', label: 'Ndutu Calving Season (Dec - Mar)', ruLabel: 'Сезон отела в Ндуту (Дек - Март)' },
    { id: 'Mara River Crossing', label: 'Mara River Crossing (Jul - Oct)', ruLabel: 'Переправа через реку Мара (Июль - Окт)' },
    { id: 'Kili Dry Season', label: 'Kilimanjaro Dry Summit (Jun - Oct / Jan - Mar)', ruLabel: 'Лучший сезон для Килиманджаро' },
    { id: 'Zanzibar Beach Season', label: 'Zanzibar Sun & Diving (Year-Round)', ruLabel: 'Пляжный сезон на Занзибаре' },
  ];

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    onFilterChange?.({ searchQuery: destinationInput });
    onSearchSubmit?.();
  };

  const handleScrollToWhere = () => {
    if (onStartWithWhere) {
      onStartWithWhere();
    } else {
      const el = document.getElementById('experiences') || document.getElementById('destination-browser') || document.getElementById('explore-tours');
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleScrollToImpact = () => {
    if (onExploreImpact) {
      onExploreImpact();
    } else {
      const el = document.getElementById('impact') || document.getElementById('sustainability-impact');
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-[95vh] bg-[#14231A] text-white overflow-hidden flex flex-col justify-between">
      {/* Full-bleed Cinematic Wildlife & Savannah Background Image */}
      <div className="absolute inset-0 z-0 transition-opacity duration-1000">
        <img
          key={activeBg.id}
          src={activeBg.url}
          alt={isRu ? activeBg.titleRu : activeBg.titleEn}
          className="w-full h-full object-cover object-center opacity-50 scale-105 transition-all duration-1000"
          referrerPolicy="no-referrer"
        />
        {/* Deep Forest Green to Earth Charcoal Gradient Overlays */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#14231A] via-[#14231A]/60 to-[#0C1510]/80" />
        <div className="absolute inset-0 bg-radial from-transparent via-[#14231A]/40 to-[#14231A]" />
      </div>

      {/* Main Hero Content Area */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 sm:pt-14 pb-12 w-full flex-1 flex flex-col justify-between">
        
        {/* Top Breadcrumbs & Conservation Credentials */}
        <div className="space-y-4 mb-6">
          {/* Breadcrumbs */}
          <nav aria-label="Breadcrumb" className="flex items-center space-x-2 text-xs sm:text-sm text-[#B8C8BD] font-medium tracking-wide">
            <span className="hover:text-white transition-colors cursor-pointer">{isRu ? 'Главная' : 'Home'}</span>
            <ChevronRight className="w-3.5 h-3.5 text-amber-400" />
            <span className="hover:text-white transition-colors cursor-pointer">{isRu ? 'Восточная Африка' : 'East Africa'}</span>
            <ChevronRight className="w-3.5 h-3.5 text-amber-400" />
            <span className="hover:text-white transition-colors cursor-pointer">{isRu ? 'Танзания' : 'Tanzania'}</span>
            <ChevronRight className="w-3.5 h-3.5 text-amber-400" />
            <span className="text-amber-300 font-semibold">{isRu ? 'Экспедиции Серенгети и Килиманджаро' : 'Serengeti & Kilimanjaro Expeditions'}</span>
          </nav>

          {/* Badges */}
          <div className="flex flex-wrap items-center gap-3">
            <div className="inline-flex items-center gap-2 bg-[#1B3B2B]/90 border border-emerald-500/40 text-emerald-300 text-xs sm:text-sm font-semibold px-4 py-1.5 rounded-full backdrop-blur-md shadow-xs">
              <Leaf className="w-3.5 h-3.5 text-emerald-400" />
              <span>{isRu ? '100% Углеродно-нейтральные сафари' : '100% Carbon-Neutral Regenerative Safaris'}</span>
            </div>

            <div className="inline-flex items-center gap-2 bg-amber-500/20 border border-amber-400/40 text-amber-300 text-xs sm:text-sm font-semibold px-3.5 py-1.5 rounded-full backdrop-blur-md shadow-xs">
              <Award className="w-3.5 h-3.5 text-amber-400" />
              <span>{isRu ? '30+ Лет природоохранного опыта' : '30+ Years of Conservation Heritage'}</span>
            </div>

            <div className="inline-flex items-center gap-2 bg-stone-800/80 border border-stone-600/40 text-stone-200 text-xs sm:text-sm font-semibold px-3.5 py-1.5 rounded-full backdrop-blur-md shadow-xs">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
              <span>TATO & TTB Registered #TZ-88492</span>
            </div>
          </div>
        </div>

        {/* Title, Tagline & Action Buttons + Hero Photo Spotlight */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center my-auto py-4">
          <div className="lg:col-span-8 space-y-6">
            <div className="space-y-3">
              <p className="text-xs sm:text-sm font-bold uppercase tracking-[0.25em] text-amber-400">
                {isRu ? 'Экспедиции высшего класса' : 'Bespoke Wilderness Expeditions'}
              </p>
              <h1 className="text-4xl sm:text-6xl lg:text-7xl font-serif font-black text-[#FDFBF7] tracking-tight leading-[1.08]">
                {isRu ? (
                  <>
                    Путешествия, которые делают наш <span className="text-amber-300 italic font-normal">мир лучше.</span>
                  </>
                ) : (
                  <>
                    Travel that leaves our <span className="text-amber-300 italic font-normal">world a better place.</span>
                  </>
                )}
              </h1>
            </div>

            <p className="text-lg sm:text-2xl text-[#EAE5DA] font-light leading-relaxed max-w-3xl">
              {isRu
                ? 'Эксклюзивные частные сафари в Серенгети, восхождения на Килиманджаро и уединенные виллы Занзибара под патронажем биологов-натуралистов.'
                : 'Immersive, conservation-led luxury safaris and high-altitude summit expeditions crafted for the discerning traveler.'}
            </p>

            {/* Primary CTA Buttons: "Book Now" & "Inquire" */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <button
                onClick={() => {
                  if (onOpenBooking) onOpenBooking();
                  else handleScrollToWhere();
                }}
                id="hero-book-now-btn"
                className="px-8 py-4 bg-gradient-to-r from-amber-500 via-amber-400 to-amber-500 hover:from-amber-400 hover:to-amber-300 text-slate-950 font-black text-sm sm:text-base rounded-2xl shadow-xl shadow-amber-500/25 flex items-center gap-3 transition-all hover:scale-105 active:scale-95 cursor-pointer"
              >
                <CalendarCheck className="w-5 h-5 text-slate-950" />
                <span>{isRu ? 'Забронировать Сафари' : 'Book Now'}</span>
                <ArrowRight className="w-4 h-4 text-slate-950" />
              </button>

              <button
                onClick={() => {
                  if (onOpenInquiry) onOpenInquiry();
                  else if (onOpenBooking) onOpenBooking();
                }}
                id="hero-inquire-btn"
                className="px-7 py-4 bg-[#1B3B2B]/95 hover:bg-[#1B3B2B] text-emerald-100 font-bold text-sm sm:text-base rounded-2xl border border-emerald-500/40 backdrop-blur-md transition-all flex items-center gap-2.5 hover:scale-[1.02] cursor-pointer"
              >
                <MessageSquare className="w-4 h-4 text-emerald-400" />
                <span>{isRu ? 'Отправить запрос' : 'Inquire'}</span>
              </button>

              <button
                onClick={handleScrollToImpact}
                id="hero-explore-impact-btn"
                className="px-6 py-4 bg-white/5 hover:bg-white/10 text-stone-200 hover:text-white font-medium text-sm sm:text-base rounded-2xl border border-white/10 backdrop-blur-md transition-all flex items-center gap-2"
              >
                <Leaf className="w-4 h-4 text-emerald-400" />
                <span>{isRu ? 'Эко-вклад' : 'Our Impact'}</span>
              </button>
            </div>
          </div>

          {/* Featured Wildlife & Photography Card (Featuring Iswanto Arif's elephant photo) */}
          <div className="lg:col-span-4 flex flex-col items-center lg:items-end">
            <div className="w-full max-w-sm bg-[#182B20]/90 backdrop-blur-xl border border-emerald-500/30 rounded-3xl p-4 shadow-2xl space-y-3">
              <div className="flex items-center justify-between text-xs pb-1 border-b border-emerald-800/50">
                <span className="font-bold text-amber-300 flex items-center gap-1.5">
                  <Camera className="w-3.5 h-3.5 text-amber-400" />
                  <span>{isRu ? 'Главный снимок дня' : 'Featured Sighting'}</span>
                </span>
                <span className="text-emerald-400 font-mono text-[11px]">Tarangire Basin</span>
              </div>

              {/* Interactive Photo Thumbnail */}
              <div className="relative rounded-2xl overflow-hidden aspect-4/5 group cursor-pointer border border-emerald-700/40 shadow-md">
                <img
                  src="https://images.unsplash.com/photo-1557050543-4d5f4e07ef46?auto=format&fit=crop&w=1200&q=85"
                  alt="Elephant Dust Bath by Iswanto Arif"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                
                <div className="absolute bottom-3 left-3 right-3 text-left">
                  <span className="inline-block px-2.5 py-0.5 bg-amber-400/90 text-slate-950 font-bold text-[10px] rounded-full uppercase tracking-wider mb-1">
                    Photo by Iswanto Arif
                  </span>
                  <h4 className="text-sm font-serif font-bold text-white leading-tight">
                    {isRu ? 'Ритуал пылевого купания слона' : 'Elephant Dust-Bath Ritual'}
                  </h4>
                  <p className="text-xs text-stone-300 mt-0.5 line-clamp-1">
                    {isRu ? 'Семейство слонов в диких зарослях' : 'Capturing pristine wildlife moments in East Africa'}
                  </p>
                </div>
              </div>

              {/* Background View Selectors */}
              <div className="space-y-1.5 pt-1">
                <div className="flex items-center justify-between text-[11px] text-stone-300">
                  <span className="font-semibold">{isRu ? 'Вид фона:' : 'Background View:'}</span>
                  <span className="text-amber-300">{isRu ? activeBg.titleRu : activeBg.titleEn}</span>
                </div>
                <div className="grid grid-cols-3 gap-2">
                  {HERO_BACKGROUNDS.map((bg, idx) => (
                    <button
                      key={bg.id}
                      onClick={() => setActiveBgIndex(idx)}
                      className={`relative rounded-xl overflow-hidden h-12 border transition-all cursor-pointer ${
                        activeBgIndex === idx
                          ? 'border-amber-400 ring-2 ring-amber-400/40 scale-102'
                          : 'border-white/10 opacity-70 hover:opacity-100'
                      }`}
                    >
                      <img
                        src={bg.thumbnail}
                        alt={bg.titleEn}
                        className="w-full h-full object-cover"
                        referrerPolicy="no-referrer"
                      />
                      <span className="absolute inset-0 bg-black/30 flex items-center justify-center text-[9px] font-bold text-white text-center p-0.5">
                        {idx === 0 ? 'Elephant' : idx === 1 ? 'Lions' : 'Crater'}
                      </span>
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Modular Search & Filter Card with Warm Earth Tone Aesthetics */}
        <div className="bg-[#1C2A20]/95 backdrop-blur-xl text-slate-100 rounded-3xl p-5 sm:p-7 shadow-2xl border border-emerald-900/60 ring-1 ring-white/10 mt-6">
          <form onSubmit={handleSearch} className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              
              {/* Destination Search Input */}
              <div className="space-y-1.5">
                <label className="block text-xs font-bold uppercase tracking-wider text-amber-300 flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-amber-300" />
                  <span>{isRu ? 'Куда вы хотите отправиться?' : 'Destination & Wildlife'}</span>
                </label>
                <input
                  type="text"
                  id="hero-destination-input"
                  value={destinationInput}
                  onChange={(e) => setDestinationInput(e.target.value)}
                  placeholder={
                    isRu
                      ? 'Серенгети, Нгоронгоро, Занзибар...'
                      : 'Serengeti, Ngorongoro, Zanzibar...'
                  }
                  className="w-full bg-[#111C15] border border-emerald-800/60 rounded-xl px-4 py-3 text-sm text-slate-100 placeholder:text-slate-500 focus:outline-hidden focus:ring-2 focus:ring-amber-400 focus:border-amber-400 transition-all"
                />
              </div>

              {/* Circuit Filter */}
              <div className="space-y-1.5">
                <label className="block text-xs font-bold uppercase tracking-wider text-amber-300 flex items-center gap-1.5">
                  <Compass className="w-3.5 h-3.5 text-amber-300" />
                  <span>{isRu ? 'Маршрут и экосистема' : 'Safari Circuit'}</span>
                </label>
                <select
                  id="hero-circuit-select"
                  value={activeFilters.circuit || activeFilters.region}
                  onChange={(e) => onFilterChange?.({ circuit: e.target.value as TanzaniaCircuit, region: e.target.value })}
                  className="w-full bg-[#111C15] border border-emerald-800/60 rounded-xl px-4 py-3 text-sm text-slate-100 focus:outline-hidden focus:ring-2 focus:ring-amber-400 focus:border-amber-400 transition-all"
                >
                  {circuits.map((c) => (
                    <option key={c.id} value={c.id}>
                      {isRu ? c.ruLabel : c.label}
                    </option>
                  ))}
                </select>
              </div>

              {/* Travel Style Filter */}
              <div className="space-y-1.5">
                <label className="block text-xs font-bold uppercase tracking-wider text-amber-300 flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5 text-amber-300" />
                  <span>{isRu ? 'Формат путешествия' : 'Expedition Style'}</span>
                </label>
                <select
                  id="hero-style-select"
                  value={activeFilters.travelStyle}
                  onChange={(e) => onFilterChange?.({ travelStyle: e.target.value })}
                  className="w-full bg-[#111C15] border border-emerald-800/60 rounded-xl px-4 py-3 text-sm text-slate-100 focus:outline-hidden focus:ring-2 focus:ring-amber-400 focus:border-amber-400 transition-all"
                >
                  {travelStyles.map((s) => (
                    <option key={s.id} value={s.id}>
                      {isRu ? s.ruLabel : s.label}
                    </option>
                  ))}
                </select>
              </div>

              {/* Season Filter */}
              <div className="space-y-1.5">
                <label className="block text-xs font-bold uppercase tracking-wider text-amber-300 flex items-center gap-1.5">
                  <Calendar className="w-3.5 h-3.5 text-amber-300" />
                  <span>{isRu ? 'Сезон миграции' : 'Migration Season'}</span>
                </label>
                <select
                  id="hero-season-select"
                  value={activeFilters.month}
                  onChange={(e) => onFilterChange?.({ month: e.target.value })}
                  className="w-full bg-[#111C15] border border-emerald-800/60 rounded-xl px-4 py-3 text-sm text-slate-100 focus:outline-hidden focus:ring-2 focus:ring-amber-400 focus:border-amber-400 transition-all"
                >
                  {seasons.map((s) => (
                    <option key={s.id} value={s.id}>
                      {isRu ? s.ruLabel : s.label}
                    </option>
                  ))}
                </select>
              </div>

            </div>

            {/* Bottom Row Actions */}
            <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-emerald-900/60">
              <div className="flex items-center gap-4 text-xs text-[#A8BDB0]">
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                  {isRu ? 'Официальная лицензия TTB #TZ-88492' : 'Official TTB License #TZ-88492'}
                </span>
                <span className="hidden md:inline">•</span>
                <span className="hidden md:flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                  {isRu ? 'Русско- и англоязычные гиды' : 'Bi-lingual Naturalists'}
                </span>
              </div>

              <div className="flex items-center gap-3 w-full sm:w-auto">
                <button
                  type="submit"
                  id="hero-search-submit-btn"
                  className="w-full sm:w-auto px-6 py-3 bg-amber-400 hover:bg-amber-300 text-slate-950 font-black text-xs uppercase tracking-wider rounded-xl transition-all shadow-md flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Search className="w-4 h-4 text-slate-950" />
                  <span>{isRu ? 'Найти Экспедицию' : 'Find Safari'}</span>
                </button>
              </div>
            </div>
          </form>
        </div>

      </div>
    </section>
  );
};

