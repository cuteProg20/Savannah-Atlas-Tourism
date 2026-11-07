import React from 'react';
import { 
  Sparkles, 
  ArrowRight, 
  Calendar, 
  MapPin, 
  Compass, 
  Check, 
  Eye, 
  ShieldCheck, 
  PhoneCall, 
  Download,
  Flame,
  Sun
} from 'lucide-react';
import { Language, Currency } from '../types';

interface HighImpactMediaStripProps {
  variant?: 'balloon' | 'zanzibar' | 'migration';
  currentLang: Language;
  currentCurrency: Currency;
  onBookNow: () => void;
  onExploreRates: () => void;
  onDownloadBrochure?: () => void;
}

export const HighImpactMediaStrip: React.FC<HighImpactMediaStripProps> = ({
  variant = 'balloon',
  currentLang,
  currentCurrency,
  onBookNow,
  onExploreRates,
  onDownloadBrochure,
}) => {
  const isRu = currentLang === 'ru';

  const contentMap = {
    balloon: {
      image: 'https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?auto=format&fit=crop&w=2400&q=90',
      tagEn: 'EXCLUSIVE DAWN EXPEDITION • SERENGETI & NGORONGORO',
      tagRu: 'ЭКСКЛЮЗИВНЫЙ ПОЛЕТ НА РАССВЕТЕ • СЕРЕНГЕТИ И НГОРОНГОРО',
      titleEn: 'Float 1,000 Feet Above the Endless Serengeti Plains',
      titleRu: 'Полет на воздушном шаре на рассвете над диким Серенгети',
      descEn: 'Witness two million wildebeest stretching across the horizon as dawn breaks over the African savanna. Conclude with an English champagne bush breakfast prepared by private chefs under the acacia trees.',
      descRu: 'Встретьте африканский рассвет на высоте птичьего полета, наблюдая бесконечные стада диких животных. В завершение — традиционный завтрак с шампанским посреди дикой саванны под сенью акаций.',
      badgeEn: 'Champagne Bush Breakfast Included',
      badgeRu: 'Завтрак с шампанским в саванне включен',
      stat1: '6:00 AM',
      stat1Label: isRu ? 'Время старта' : 'Dawn Launch',
      stat2: '1,000 ft',
      stat2Label: isRu ? 'Панорамный обзор' : 'Panoramic Altitude',
      stat3: '100% Safety',
      stat3Label: isRu ? 'Пилоты TCAA' : 'TCAA Certified',
      bookTextEn: 'Book Balloon Safari',
      bookTextRu: 'Забронировать полет',
      ratesTextEn: 'Explore Rates & Dates',
      ratesTextRu: 'Узнать тарифы и даты',
    },
    zanzibar: {
      image: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=2400&q=90',
      tagEn: 'BUSH-TO-BEACH LUXURY • INDIAN OCEAN RETREAT',
      tagRu: 'BUSH-TO-BEACH • ОКЕАНСКИЙ ОТДЫХ НА ЗАНЗИБАРЕ',
      titleEn: 'From Serengeti Dust to Pristine Turquoise Waters',
      titleRu: 'Из саванны Серенгети на белоснежные пляжи Занзибара',
      descEn: 'Direct 55-minute bush flights connect Serengeti airstrips straight to Zanzibar and Pemba Island. Private overwater suites, dhow sunset cruises, and fresh seafood under the southern stars.',
      descRu: 'Прямые 55-минутные рейсы из саванны прямо к океанским виллам Занзибара и острова Пемба. Прозрачная бирюзовая вода, круизы на традиционных лодках доу и свежие морепродукты.',
      badgeEn: 'Direct Bush-to-Beach Flight Included',
      badgeRu: 'Прямой перелет из саванны на остров',
      stat1: '55 Min',
      stat1Label: isRu ? 'Время перелета' : 'Bush Flight',
      stat2: '28°C',
      stat2Label: isRu ? 'Температура воды' : 'Indian Ocean',
      stat3: '5-Star',
      stat3Label: isRu ? 'Пляжные виллы' : 'Ocean Villas',
      bookTextEn: 'Book Bush-to-Beach',
      bookTextRu: 'Забронировать тур',
      ratesTextEn: 'Explore Villa Packages',
      ratesTextRu: 'Тарифы на виллы',
    },
    migration: {
      image: 'https://images.unsplash.com/photo-1516426122078-c23e76319801?auto=format&fit=crop&w=2400&q=90',
      tagEn: '2026/2027 EXPEDITION SEASON • PRIVATE CHARTERS',
      tagRu: 'СЕЗОН ЭКСПЕДИЦИЙ 2026/2027 • ИНДИВИДУАЛЬНЫЕ ЧАРТЕРЫ',
      titleEn: 'Secure Front-Row Access to the Great River Crossings',
      titleRu: 'Гарантированные места у реки Мара на сезон Великой Миграции',
      descEn: 'Mobile luxury tented camps situated precisely in the path of the mega-herds. Customized Toyota Land Cruisers, certified multilingual naturalists, and exclusive photography permits.',
      descRu: 'Мобильные люкс-кемпы, перемещающиеся по ходу движения стад. Экспедиционные джипы Toyota Land Cruiser, русскоязычные эксперты-натуралисты и фото-разрешения.',
      badgeEn: 'Peak Crossing Guarantee',
      badgeRu: 'Гарантия переправы через реку',
      stat1: '2M+',
      stat1Label: isRu ? 'Копытных в миграции' : 'Migrating Animals',
      stat2: '1:1',
      stat2Label: isRu ? 'Оконное место в 4x4' : 'Window Seat Ratio',
      stat3: '24/7',
      stat3Label: isRu ? 'Поддержка в Аруше' : 'Arusha Dispatch',
      bookTextEn: 'Reserve Expedition',
      bookTextRu: 'Забронировать экспедицию',
      ratesTextEn: 'Explore 2027 Rates',
      ratesTextRu: 'Смотреть цены 2027',
    },
  };

  const data = contentMap[variant] || contentMap.balloon;

  return (
    <section className="relative w-full overflow-hidden bg-slate-950 text-white min-h-[480px] sm:min-h-[520px] lg:min-h-[560px] flex items-center border-y border-slate-800">
      {/* Full-width panoramic background image */}
      <img
        src={data.image}
        alt={data.titleEn}
        className="absolute inset-0 w-full h-full object-cover object-center scale-105 transition-transform duration-1000 ease-out hover:scale-100"
        referrerPolicy="no-referrer"
      />

      {/* Cinematic dark gradient vignette overlays for maximum text clarity & immersion */}
      <div className="absolute inset-0 bg-gradient-to-r from-slate-950/95 via-slate-950/75 to-slate-950/40 pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-transparent to-slate-950/30 pointer-events-none" />

      {/* Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24 w-full">
        <div className="max-w-3xl space-y-6">
          {/* Eyebrow & Badges */}
          <div className="flex flex-wrap items-center gap-3">
            <span className="text-xs font-black uppercase tracking-widest text-amber-400 bg-amber-400/10 px-3 py-1 rounded-full border border-amber-400/30 backdrop-blur-md">
              {isRu ? data.tagRu : data.tagEn}
            </span>

            <span className="hidden sm:inline-flex items-center gap-1.5 text-xs text-white/90 bg-white/10 px-3 py-1 rounded-full border border-white/20 backdrop-blur-md font-medium">
              <Sparkles className="w-3.5 h-3.5 text-amber-300" />
              <span>{isRu ? data.badgeRu : data.badgeEn}</span>
            </span>
          </div>

          {/* High-Impact Headline */}
          <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-serif font-black text-white leading-tight tracking-tight drop-shadow-sm">
            {isRu ? data.titleRu : data.titleEn}
          </h2>

          {/* Atmospheric Description */}
          <p className="text-sm sm:text-base lg:text-lg text-slate-200 leading-relaxed max-w-2xl font-light">
            {isRu ? data.descRu : data.descEn}
          </p>

          {/* Quick Stats Strip */}
          <div className="grid grid-cols-3 gap-3 sm:gap-6 py-2 max-w-lg border-y border-white/15">
            <div>
              <span className="text-xl sm:text-2xl font-serif font-bold text-amber-400 block">{data.stat1}</span>
              <span className="text-[11px] sm:text-xs text-slate-300 font-medium">{data.stat1Label}</span>
            </div>
            <div>
              <span className="text-xl sm:text-2xl font-serif font-bold text-amber-400 block">{data.stat2}</span>
              <span className="text-[11px] sm:text-xs text-slate-300 font-medium">{data.stat2Label}</span>
            </div>
            <div>
              <span className="text-xl sm:text-2xl font-serif font-bold text-amber-400 block">{data.stat3}</span>
              <span className="text-[11px] sm:text-xs text-slate-300 font-medium">{data.stat3Label}</span>
            </div>
          </div>

          {/* Minimalist Overlay Action Buttons */}
          <div className="flex flex-wrap items-center gap-4 pt-2">
            {/* Primary Minimalist Button: Book Now */}
            <button
              onClick={onBookNow}
              id={`media-strip-book-${variant}`}
              className="px-7 py-3.5 bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs sm:text-sm rounded-xl shadow-lg transition-all flex items-center gap-2 hover:scale-105 active:scale-95"
            >
              <span>{isRu ? data.bookTextRu : data.bookTextEn}</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            {/* Secondary Minimalist Overlay Button: Explore Rates */}
            <button
              onClick={onExploreRates}
              id={`media-strip-rates-${variant}`}
              className="px-6 py-3.5 bg-white/15 hover:bg-white/25 text-white border border-white/30 backdrop-blur-md font-semibold text-xs sm:text-sm rounded-xl transition-all flex items-center gap-2 hover:scale-105"
            >
              <span>{isRu ? data.ratesTextRu : data.ratesTextEn}</span>
              <ArrowRight className="w-4 h-4 text-amber-300" />
            </button>

            {/* Optional Digital Brochure Quick Trigger */}
            {onDownloadBrochure && (
              <button
                onClick={onDownloadBrochure}
                className="hidden md:inline-flex items-center gap-1.5 text-xs text-slate-300 hover:text-white transition-colors underline-offset-4 hover:underline px-2 py-2"
              >
                <Download className="w-3.5 h-3.5 text-amber-400" />
                <span>{isRu ? 'Скачать PDF буклет' : 'Download PDF Guide'}</span>
              </button>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
