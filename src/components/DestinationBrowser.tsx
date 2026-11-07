import React, { useState } from 'react';
import { 
  Globe2, 
  Compass, 
  MapPin, 
  Sparkles, 
  ArrowRight, 
  Calendar, 
  Thermometer, 
  ShieldCheck, 
  Trees, 
  ChevronRight,
  Eye
} from 'lucide-react';
import { Language, Currency } from '../types';
import { CURRENCY_RATES, formatPrice } from '../data/translations';

interface DestinationBrowserProps {
  currentLang: Language;
  currentCurrency: Currency;
  onSelectRegionCircuit: (circuitOrRegion: string) => void;
  onOpenBooking: () => void;
}

export interface RegionData {
  id: string;
  nameEn: string;
  nameRu: string;
  taglineEn: string;
  taglineRu: string;
  coverImage: string;
  accentColor: string;
  climateEn: string;
  climateRu: string;
  bestSeasonEn: string;
  bestSeasonRu: string;
  wildlifeEn: string[];
  wildlifeRu: string[];
  conservationScore: string;
  circuitsCount: number;
  featuredHighlightsEn: string[];
  featuredHighlightsRu: string[];
  startingPriceUSD: number;
}

export const DestinationBrowser: React.FC<DestinationBrowserProps> = ({
  currentLang,
  currentCurrency,
  onSelectRegionCircuit,
  onOpenBooking,
}) => {
  const isRu = currentLang === 'ru';

  const regions: RegionData[] = [
    {
      id: 'africa',
      nameEn: 'Africa: Serengeti & Great Rift',
      nameRu: 'Африка: Серенгети и Великий Рифт',
      taglineEn: 'Endless plains of the Great Migration, Ngorongoro Crater & Kilimanjaro summits.',
      taglineRu: 'Бескрайние саванны Великой Миграции, кальдера Нгоронгоро и вершина Килиманджаро.',
      coverImage: 'https://images.unsplash.com/photo-1516426122078-c23e76319801?auto=format&fit=crop&w=1200&q=85',
      accentColor: 'from-amber-600/90 to-emerald-900/90',
      climateEn: '22°C - 28°C (Savanna Warmth)',
      climateRu: '22°C - 28°C (Теплый климат саванны)',
      bestSeasonEn: 'Year-Round (Dec-Mar Calving, Jul-Oct River Crossings)',
      bestSeasonRu: 'Круглый год (Дек-Март отел, Июль-Окт переправы)',
      wildlifeEn: ['Lions & Leopards', 'Black Rhinos', 'Wildebeest Herds', 'African Elephants'],
      wildlifeRu: ['Львы и Леопарды', 'Черные Носороги', 'Стада Гну', 'Африканские Слоны'],
      conservationScore: 'A+ (100% Carbon-Neutral)',
      circuitsCount: 6,
      featuredHighlightsEn: ['Serengeti River Crossing', 'Ngorongoro UNESCO Crater', 'Kilimanjaro Summit (5,895m)'],
      featuredHighlightsRu: ['Переправы через реку Мара', 'Кратер Нгоронгоро ЮНЕСКО', 'Пик Ухуру на Килиманджаро'],
      startingPriceUSD: 2450,
    },
    {
      id: 'indian-ocean',
      nameEn: 'Indian Ocean Islands: Zanzibar & Atolls',
      nameRu: 'Острова Индийского Океана: Занзибар и Атоллы',
      taglineEn: 'Powder-white coral sands, aromatic spice trails, and turquoise marine reserves.',
      taglineRu: 'Белоснежный песок без отливов в Кендве, плантации специй и коралловые атоллы.',
      coverImage: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1200&q=85',
      accentColor: 'from-teal-600/90 to-blue-900/90',
      climateEn: '28°C - 32°C (Tropical Ocean)',
      climateRu: '28°C - 32°C (Тропический бриз)',
      bestSeasonEn: 'Year-Round (Best Jun - Oct & Dec - Mar)',
      bestSeasonRu: 'Круглый год (Пик: Июнь - Окт и Дек - Март)',
      wildlifeEn: ['Dolphins & Whale Sharks', 'Hawksbill Sea Turtles', 'Red Colobus Monkeys', 'Giant Aldabra Tortoises'],
      wildlifeRu: ['Дельфины и Китовые Акулы', 'Морские Черепахи', 'Обезьяны Красные Колобусы', 'Гигантские Черепахи'],
      conservationScore: 'A (Coral Reef Sanctuary)',
      circuitsCount: 4,
      featuredHighlightsEn: ['Mnemba Marine Atoll Snorkel', 'Stone Town Sultans Palace', 'Kendwa Non-Tidal Beach Villas'],
      featuredHighlightsRu: ['Морской заповедник Мнемба', 'Дворцы султанов Стоун-Тауна', 'Виллы в Кендве без отливов'],
      startingPriceUSD: 1680,
    },
    {
      id: 'antarctica',
      nameEn: 'Antarctica: Polar Peninsula Expeditions',
      nameRu: 'Антарктика: Полярные Экспедиции',
      taglineEn: 'Towering blue icebergs, teeming penguin colonies, and untouched glacial wilderness.',
      taglineRu: 'Величественные синие айсберги, колонии пингвинов и нетронутое безмолвие ледников.',
      coverImage: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=1200&q=85',
      accentColor: 'from-sky-700/90 to-slate-950/90',
      climateEn: '-2°C - +4°C (Polar Summer)',
      climateRu: '-2°C - +4°C (Полярное лето)',
      bestSeasonEn: 'November to March (Austral Summer)',
      bestSeasonRu: 'Ноябрь — Март (Полярное лето)',
      wildlifeEn: ['Emperor & Gentoo Penguins', 'Humpback Whales', 'Leopard Seals', 'Wandering Albatross'],
      wildlifeRu: ['Императорские пингвины', 'Горбатые киты', 'Морские леопарды', 'Альбатросы'],
      conservationScore: 'IAATO Gold Standard',
      circuitsCount: 3,
      featuredHighlightsEn: ['Zodiac Ice Navigation', 'Drake Passage Crossing', 'South Georgia King Penguins'],
      featuredHighlightsRu: ['Круизы на Зодиаках среди льдов', 'Пролив Дрейка', 'Колонии пингвинов Южной Георгии'],
      startingPriceUSD: 8900,
    },
    {
      id: 'asia',
      nameEn: 'Asia: Snow Leopards & Bengal Tigers',
      nameRu: 'Азия: Снежные Барсы и Бенгальские Тигры',
      taglineEn: 'High-altitude Himalayan tracking, mist-covered rainforests, and dragon archipelagos.',
      taglineRu: 'Высокогорный треккинг в Гималаях, туманные джунгли тигров и острова драконов.',
      coverImage: 'https://images.unsplash.com/photo-1546182990-dffeafbe841d?auto=format&fit=crop&w=1200&q=85',
      accentColor: 'from-amber-700/90 to-stone-900/90',
      climateEn: '5°C - 30°C (Varied Highlands)',
      climateRu: '5°C - 30°C (Горный и тропический)',
      bestSeasonEn: 'October to April',
      bestSeasonRu: 'Октябрь — Апрель',
      wildlifeEn: ['Snow Leopards (Ladakh)', 'Royal Bengal Tigers', 'Indian Rhinos', 'Komodo Dragons'],
      wildlifeRu: ['Снежные барсы (Ладакх)', 'Бенгальские тигры', 'Индийские носороги', 'Комодские вараны'],
      conservationScore: 'Tiger Corridors Protocol',
      circuitsCount: 4,
      featuredHighlightsEn: ['Hemis Snow Leopard Valley', 'Ranthambore Tiger Drives', 'Kaziranga Elephant Corridors'],
      featuredHighlightsRu: ['Долина барсов в Хемисе', 'Сафари на тигров в Рантхамборе', 'Заповедник Казиранга'],
      startingPriceUSD: 4300,
    },
    {
      id: 'south-america',
      nameEn: 'South America: Galápagos & Amazon',
      nameRu: 'Южная Америка: Галапагосы и Амазония',
      taglineEn: 'Living laboratories of evolution, volcanic archipelagos, and Amazonian canopies.',
      taglineRu: 'Живая лаборатория эволюции, вулканические острова и кроны тропических лесов Амазонки.',
      coverImage: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=1200&q=85',
      accentColor: 'from-emerald-700/90 to-amber-950/90',
      climateEn: '20°C - 29°C (Equatorial Mild)',
      climateRu: '20°C - 29°C (Мягкий экваториальный)',
      bestSeasonEn: 'Year-Round (Marine Activity Year-Round)',
      bestSeasonRu: 'Круглый год (Морская фауна активна всегда)',
      wildlifeEn: ['Marine Iguanas', 'Blue-Footed Boobies', 'Jaguar Prowls', 'Pink River Dolphins'],
      wildlifeRu: ['Морские игуаны', 'Голубоногие олуши', 'Ягуары Амазонки', 'Розовые речные дельфины'],
      conservationScore: 'Charles Darwin Bio-Reserve',
      circuitsCount: 5,
      featuredHighlightsEn: ['Darwin Research Concessions', 'Amazonian Canopy Walkways', 'Patagonia Glacier Treks'],
      featuredHighlightsRu: ['Биостанции Дарвина', 'Подвесные мосты в кронах Амазонки', 'Треккинг к ледникам Патагонии'],
      startingPriceUSD: 5200,
    },
  ];

  const [selectedRegionId, setSelectedRegionId] = useState<string>('africa');
  const activeRegion = regions.find((r) => r.id === selectedRegionId) || regions[0];

  const getConvertedPrice = (priceUSD: number) => {
    return formatPrice(priceUSD, currentCurrency);
  };

  return (
    <section id="destination-browser" className="py-24 bg-[#FAF9F5] text-[#1C1917] border-b border-[#E6E1D8] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="space-y-3 max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-[#1B3B2B]/10 text-[#1B3B2B] text-xs font-bold uppercase tracking-widest px-3.5 py-1.5 rounded-full border border-[#1B3B2B]/20">
              <Globe2 className="w-3.5 h-3.5 text-[#1B3B2B]" />
              <span>{isRu ? 'География экспедиций' : 'Global Wilderness Horizons'}</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-[#1C1917] tracking-tight">
              {isRu ? 'Исследуйте ключевые регионы дикой природы' : 'Curated Experiential Travel Regions'}
            </h2>

            <p className="text-sm sm:text-base text-slate-600 font-light">
              {isRu
                ? 'От легендарных равнин Серенгети до полярных льдов Антарктики — выберите экосистему для погружения в первозданную природу.'
                : 'From the untamed savannas of East Africa to the pristine ice shelves of Antarctica — explore planetary strongholds of wildlife and conservation.'}
            </p>
          </div>

          <div className="flex items-center gap-2 text-xs font-bold text-[#1B3B2B] bg-white border border-[#E6E1D8] px-4 py-2.5 rounded-xl shadow-xs">
            <ShieldCheck className="w-4 h-4 text-emerald-600" />
            <span>{isRu ? '100% этичные маршруты с биологами' : 'Accredited Naturalist-Led Circuits'}</span>
          </div>
        </div>

        {/* Region Selector Pills */}
        <div className="flex items-center gap-2 overflow-x-auto no-scrollbar pb-3 mb-8">
          {regions.map((reg) => {
            const isSelected = reg.id === selectedRegionId;
            return (
              <button
                key={reg.id}
                onClick={() => setSelectedRegionId(reg.id)}
                className={`px-5 py-3 rounded-2xl text-xs sm:text-sm font-bold whitespace-nowrap transition-all flex items-center gap-2 border ${
                  isSelected
                    ? 'bg-[#1B3B2B] text-white border-[#1B3B2B] shadow-md scale-[1.02]'
                    : 'bg-white text-slate-700 border-[#E6E1D8] hover:bg-[#F5F2EB] hover:text-[#1C1917]'
                }`}
              >
                <span>{isRu ? reg.nameRu.split(':')[0] : reg.nameEn.split(':')[0]}</span>
                <span className={`text-[10px] px-2 py-0.5 rounded-full ${isSelected ? 'bg-white/20 text-white' : 'bg-slate-100 text-slate-600'}`}>
                  {reg.circuitsCount} {isRu ? 'туров' : 'tours'}
                </span>
              </button>
            );
          })}
        </div>

        {/* Featured Showcase Card for Selected Region */}
        <div className="bg-white rounded-3xl border border-[#E6E1D8] overflow-hidden shadow-md grid grid-cols-1 lg:grid-cols-12">
          
          {/* Left: Visual Banner & Key Wildlife (6 Cols) */}
          <div className="lg:col-span-6 relative min-h-[360px] lg:min-h-[480px] bg-slate-900 overflow-hidden">
            <img
              src={activeRegion.coverImage}
              alt={activeRegion.nameEn}
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />

            <div className="absolute top-4 left-4">
              <span className="bg-[#1B3B2B]/90 backdrop-blur-xs text-amber-300 text-xs font-bold px-3 py-1.5 rounded-full border border-emerald-400/30 flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                <span>{activeRegion.conservationScore}</span>
              </span>
            </div>

            <div className="absolute bottom-6 left-6 right-6 text-white space-y-3">
              <div className="text-xs uppercase tracking-widest text-amber-300 font-bold">
                {isRu ? 'Флагманские виды дикой природы' : 'Key Wildlife Species'}
              </div>
              <div className="flex flex-wrap gap-2">
                {(isRu ? activeRegion.wildlifeRu : activeRegion.wildlifeEn).map((animal, aIdx) => (
                  <span
                    key={aIdx}
                    className="text-xs font-semibold bg-black/50 backdrop-blur-md px-3 py-1.5 rounded-lg border border-white/20 text-slate-100"
                  >
                    🐾 {animal}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Right: Region Details, Telemetry & CTA (6 Cols) */}
          <div className="lg:col-span-6 p-6 sm:p-8 lg:p-10 flex flex-col justify-between space-y-6">
            
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold uppercase tracking-wider text-[#D97706]">
                  {isRu ? 'Фирменный регион TourWeb' : 'Signature Expedition Territory'}
                </span>
                <span className="text-xs font-semibold text-slate-500">
                  {activeRegion.circuitsCount} {isRu ? 'активных маршрутов' : 'active itineraries'}
                </span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-serif font-bold text-[#1C1917] leading-tight">
                {isRu ? activeRegion.nameRu : activeRegion.nameEn}
              </h3>

              <p className="text-sm text-slate-700 font-light leading-relaxed">
                {isRu ? activeRegion.taglineRu : activeRegion.taglineEn}
              </p>

              {/* Telemetry metadata */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                <div className="bg-[#FAF9F5] border border-[#E6E1D8] p-3 rounded-xl flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-amber-100 text-[#D97706] flex items-center justify-center shrink-0">
                    <Calendar className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-[10px] uppercase font-bold text-slate-400">
                      {isRu ? 'Лучший сезон' : 'Optimal Season'}
                    </div>
                    <div className="text-xs font-bold text-[#1C1917]">
                      {isRu ? activeRegion.bestSeasonRu : activeRegion.bestSeasonEn}
                    </div>
                  </div>
                </div>

                <div className="bg-[#FAF9F5] border border-[#E6E1D8] p-3 rounded-xl flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-emerald-100 text-[#1B3B2B] flex items-center justify-center shrink-0">
                    <Thermometer className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-[10px] uppercase font-bold text-slate-400">
                      {isRu ? 'Климат и погода' : 'Climate & Terrain'}
                    </div>
                    <div className="text-xs font-bold text-[#1C1917]">
                      {isRu ? activeRegion.climateRu : activeRegion.climateEn}
                    </div>
                  </div>
                </div>
              </div>

              {/* Highlights List */}
              <div className="space-y-1.5 pt-2">
                <div className="text-xs font-bold uppercase text-slate-400 tracking-wider">
                  {isRu ? 'Ключевые локации маршрута' : 'Circuit Highlights'}
                </div>
                {(isRu ? activeRegion.featuredHighlightsRu : activeRegion.featuredHighlightsEn).map((hl, hlIdx) => (
                  <div key={hlIdx} className="flex items-center gap-2 text-xs text-slate-800 font-medium">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#1B3B2B]" />
                    <span>{hl}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Bottom Price & Action Footer */}
            <div className="pt-6 border-t border-[#E6E1D8] flex flex-wrap items-center justify-between gap-4">
              <div>
                <div className="text-[11px] text-slate-500 font-normal">
                  {isRu ? 'Стоимость экспедиций от' : 'Expeditions starting from'}
                </div>
                <div className="text-xl sm:text-2xl font-serif font-bold text-[#1B3B2B]">
                  {getConvertedPrice(activeRegion.startingPriceUSD)}
                  <span className="text-xs font-sans text-slate-500 font-normal ml-1">
                    {isRu ? '/ гостя' : '/ guest'}
                  </span>
                </div>
              </div>

              <div className="flex items-center gap-2.5">
                <button
                  onClick={() => onSelectRegionCircuit(activeRegion.id === 'africa' ? 'Northern Circuit' : activeRegion.nameEn)}
                  className="px-5 py-2.5 bg-[#1B3B2B] hover:bg-[#152e22] text-white font-bold text-xs rounded-xl shadow-xs transition-all flex items-center gap-1.5 hover:scale-105"
                >
                  <span>{isRu ? 'Смотреть маршруты' : 'View Circuits'}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>

                <button
                  onClick={onOpenBooking}
                  className="px-4 py-2.5 bg-white hover:bg-[#F5F2EB] text-slate-800 font-semibold text-xs rounded-xl border border-[#E6E1D8] transition-colors"
                >
                  <span>{isRu ? 'Консультация' : 'Inquire'}</span>
                </button>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
