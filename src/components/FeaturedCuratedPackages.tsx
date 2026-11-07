import React from 'react';
import { 
  Sparkles, 
  Heart, 
  Users, 
  Compass, 
  Crown, 
  Clock, 
  Star, 
  ArrowRight, 
  ShieldCheck,
  CheckCircle2,
  TreeDeciduous,
  Waves,
  Mountain
} from 'lucide-react';
import { Language, Currency } from '../types';
import { formatPrice } from '../data/translations';

interface FeaturedCuratedPackagesProps {
  currentLang: Language;
  currentCurrency: Currency;
  onSelectPackage: (packageCategory: string) => void;
  onOpenBooking: () => void;
}

export interface CuratedPackage {
  id: string;
  category: string;
  titleEn: string;
  titleRu: string;
  subtitleEn: string;
  subtitleRu: string;
  image: string;
  durationEn: string;
  durationRu: string;
  priceFromUSD: number;
  ecoBadgeEn: string;
  ecoBadgeRu: string;
  iconType: 'honeymoon' | 'family' | 'charter' | 'lodge';
  highlightsEn: string[];
  highlightsRu: string[];
}

export const FeaturedCuratedPackages: React.FC<FeaturedCuratedPackagesProps> = ({
  currentLang,
  currentCurrency,
  onSelectPackage,
  onOpenBooking,
}) => {
  const isRu = currentLang === 'ru';

  const packages: CuratedPackage[] = [
    {
      id: 'luxury-honeymoon',
      category: isRu ? 'Романтика и Звезды' : 'Luxury Honeymoons & Stargazing',
      titleEn: 'Serengeti Skies & Zanzibar Coral Sanctuary',
      titleRu: 'Небо Серенгети и коралловый оазис Занзибара',
      subtitleEn: 'Private star-bed fly camping under the African Milky Way paired with beachfront plunge-pool villas in Kendwa.',
      subtitleRu: 'Ночи в саванне под открытыми звездами, романтические ужины у костра и пляжная вилла с бассейном на Занзибаре.',
      image: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=800&q=80',
      durationEn: '10 Days / 9 Nights',
      durationRu: '10 Дней / 9 Ночей',
      priceFromUSD: 5400,
      ecoBadgeEn: '100% Candlelit & Solar Luxury',
      ecoBadgeRu: '100% Солнечные эко-виллы',
      iconType: 'honeymoon',
      highlightsEn: ['Private Sunrise Balloon with Champagne', 'Couples Bush Spa over Riverine Forest', 'Sunset Dhow Marine Sailing'],
      highlightsRu: ['Полет на воздушном шаре с шампанским', 'Спа-ритуалы над речной долиной', 'Закатный круиз на парусном Дхоу'],
    },
    {
      id: 'family-safari',
      category: isRu ? 'Семейные Экспедиции' : 'Multi-Generational Family Safaris',
      titleEn: 'Junior Ranger Savanna & Maasai Ancestral Quest',
      titleRu: 'Юный рейнджер саванны и тропы племени Масаи',
      subtitleEn: 'Spacious interconnected suites, exclusive 4x4 Land Cruiser with private guide, and hands-on wildlife tracking for all ages.',
      subtitleRu: 'Просторные семейные люксы, персональный джип 4x4 без посторонних и увлекательное следопытство для детей и взрослых.',
      image: 'https://images.unsplash.com/photo-1509099836639-18ba1795216d?auto=format&fit=crop&w=800&q=80',
      durationEn: '8 Days / 7 Nights',
      durationRu: '8 Дней / 7 Ночей',
      priceFromUSD: 3950,
      ecoBadgeEn: 'Family Wildlife Education Fund',
      ecoBadgeRu: 'Фонд детского эко-образования',
      iconType: 'family',
      highlightsEn: ['Junior Ranger Tracking Badges', 'Private 4x4 Land Cruiser Exclusively', 'Safe Child-Friendly Campfires'],
      highlightsRu: ['Детские дипломы юного рейнджера', 'Персональный джип только для вашей семьи', 'Семейные вечерние костры в саванне'],
    },
    {
      id: 'migration-charter',
      category: isRu ? 'Приватная Авиация' : 'Private Charter Great Migration',
      titleEn: 'Frontline Mara River Crossings & Bush Flights',
      titleRu: 'Фронт Великой Миграции и частные авиаперелеты',
      subtitleEn: 'Seamless Cessna Caravan bush transfers directly onto remote airstrips, bypassing long road journeys for maximum game time.',
      subtitleRu: 'Прямые перелеты Cessna Caravan на уединенные взлетно-посадочные полосы Серенгети прямо к переправам реки Мара.',
      image: 'https://images.unsplash.com/photo-1516426122078-c23e76319801?auto=format&fit=crop&w=800&q=80',
      durationEn: '7 Days / 6 Nights',
      durationRu: '7 Дней / 6 Ночей',
      priceFromUSD: 6800,
      ecoBadgeEn: 'Biofuel & Carbon-Offset Flight',
      ecoBadgeRu: '100% Компенсация авиа-выбросов',
      iconType: 'charter',
      highlightsEn: ['VIP Direct Airstrip Landings', 'Migration Frontline Mobile Tented Camps', 'Unrestricted Photographic Angles'],
      highlightsRu: ['Прямая посадка в сердце Серенгети', 'Мобильные кемпы прямо на пути стад гну', 'Идеальные ракурсы для фототехники'],
    },
    {
      id: 'architectural-lodges',
      category: isRu ? 'Архитектурные Эко-Лоджи' : 'Exclusive Architectural Eco-Lodges',
      titleEn: 'Singita, &Beyond & Mwiba Sanctuary Collection',
      titleRu: 'Коллекция Singita, &Beyond и заповедник Mwiba',
      subtitleEn: 'World-renowned architectural masterpieces suspended over ancient volcanic crater rims and secluded private reserves.',
      subtitleRu: 'Шедевры мировой эко-архитектуры, парящие над кратером Нгоронгоро и в частных заповедниках без очередей из машин.',
      image: 'https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?auto=format&fit=crop&w=800&q=80',
      durationEn: '9 Days / 8 Nights',
      durationRu: '9 Дней / 8 Ночей',
      priceFromUSD: 8500,
      ecoBadgeEn: '100% Off-Grid Solar Architecture',
      ecoBadgeRu: '100% Автономная эко-архитектура',
      iconType: 'lodge',
      highlightsEn: ['Private Wine Cellars & Michelin Chefs', 'Heated Rim-View Infinity Pools', 'Dedicated Private Butler & Naturalist'],
      highlightsRu: ['Винные погреба и авторская кухня', 'Панорамные бассейны с подогревом', 'Персональный батлер и гид-биолог'],
    },
  ];

  return (
    <section id="featured-trends" className="py-24 bg-[#F5F2EB] text-[#1C1917] border-b border-[#E6E1D8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="space-y-3 max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-[#1B3B2B]/10 text-[#1B3B2B] text-xs font-bold uppercase tracking-widest px-3.5 py-1.5 rounded-full border border-[#1B3B2B]/20">
              <Sparkles className="w-3.5 h-3.5 text-[#D97706]" />
              <span>{isRu ? 'Тренды и эксклюзивные коллекции' : 'Featured Collections & Trends'}</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-[#1C1917] tracking-tight">
              {isRu ? 'Кураторские форматы премиум-путешествий' : 'Hand-Crafted Experiential Safari Circuits'}
            </h2>

            <p className="text-sm sm:text-base text-slate-600 font-light">
              {isRu
                ? 'От уединенных медовых месяцев под саванным небом до частных авиа-экспедиций к переправам Великой Миграции.'
                : 'From intimate under-canvas honeymoons to private aerial charters and multi-generational family discoveries.'}
            </p>
          </div>

          <button
            onClick={() => onSelectPackage('All')}
            className="text-xs sm:text-sm font-bold text-[#1B3B2B] hover:text-[#152e22] flex items-center gap-1.5 bg-white border border-[#E6E1D8] px-4 py-2.5 rounded-xl shadow-xs transition-colors self-start md:self-auto"
          >
            <span>{isRu ? 'Все 14 маршрутов' : 'View Full Catalog'}</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        {/* 4 Responsive Modular Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {packages.map((pkg) => (
            <div
              key={pkg.id}
              className="bg-white rounded-2xl border border-[#E6E1D8] shadow-xs hover:shadow-xl hover:border-[#1B3B2B]/40 transition-all duration-300 overflow-hidden flex flex-col group hover:-translate-y-1.5"
            >
              {/* Photo Header with Badge */}
              <div className="relative h-56 overflow-hidden bg-slate-900">
                <img
                  src={pkg.image}
                  alt={pkg.titleEn}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/20 to-transparent" />

                {/* Eco Badge */}
                <div className="absolute top-3 left-3 bg-[#1B3B2B]/90 backdrop-blur-xs text-amber-300 text-[10px] font-bold px-2.5 py-1 rounded-full border border-emerald-400/30">
                  {isRu ? pkg.ecoBadgeRu : pkg.ecoBadgeEn}
                </div>

                {/* Category Tag */}
                <div className="absolute bottom-3 left-3 right-3 text-white">
                  <span className="text-[11px] font-mono text-amber-300 uppercase font-bold tracking-wider block">
                    {pkg.category}
                  </span>
                  <h3 className="font-serif font-bold text-base text-white line-clamp-1 mt-0.5">
                    {isRu ? pkg.titleRu : pkg.titleEn}
                  </h3>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
                
                <div className="space-y-3">
                  <p className="text-xs text-slate-600 leading-relaxed font-light line-clamp-3">
                    {isRu ? pkg.subtitleRu : pkg.subtitleEn}
                  </p>

                  <div className="space-y-1.5 pt-2 border-t border-[#F5F2EB]">
                    {(isRu ? pkg.highlightsRu : pkg.highlightsEn).map((hl, i) => (
                      <div key={i} className="flex items-center gap-1.5 text-[11px] text-slate-700 font-medium line-clamp-1">
                        <CheckCircle2 className="w-3 h-3 text-emerald-600 shrink-0" />
                        <span>{hl}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Price & Action */}
                <div className="pt-4 border-t border-[#E6E1D8] flex items-center justify-between">
                  <div>
                    <div className="flex items-center gap-1 text-[11px] text-slate-500 font-medium">
                      <Clock className="w-3 h-3 text-slate-400" />
                      <span>{isRu ? pkg.durationRu : pkg.durationEn}</span>
                    </div>
                    <div className="text-base font-serif font-bold text-[#1B3B2B] mt-0.5">
                      {formatPrice(pkg.priceFromUSD, currentCurrency)}
                      <span className="text-[10px] font-sans text-slate-500 font-normal ml-1">
                        {isRu ? '/ гостя' : '/ guest'}
                      </span>
                    </div>
                  </div>

                  <button
                    onClick={onOpenBooking}
                    className="p-2.5 bg-[#1B3B2B] hover:bg-[#152e22] text-white rounded-xl shadow-xs transition-colors group-hover:scale-105"
                    title="Inquire about this collection"
                  >
                    <ArrowRight className="w-4 h-4 text-amber-300" />
                  </button>
                </div>

              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
