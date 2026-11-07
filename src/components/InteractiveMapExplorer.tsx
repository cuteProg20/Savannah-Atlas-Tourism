import React, { useState, useMemo } from 'react';
import { 
  MapPin, 
  Compass, 
  Layers, 
  Sparkles, 
  ArrowRight, 
  CheckCircle, 
  Calendar, 
  ShieldCheck, 
  ZoomIn, 
  ZoomOut, 
  RotateCcw,
  Languages,
  MessageCircle
} from 'lucide-react';
import { Tour, Language, Currency, Region } from '../types';
import { TRANSLATIONS, formatPrice } from '../data/translations';
import { getWhatsAppLink, getTelegramLink, generateTourInquiryMessage } from '../utils/messengerLinks';

interface InteractiveMapExplorerProps {
  tours: Tour[];
  currentLang: Language;
  currentCurrency: Currency;
  onSelectTour: (tour: Tour) => void;
  onBookTour: (tour: Tour) => void;
}

export const InteractiveMapExplorer: React.FC<InteractiveMapExplorerProps> = ({
  tours,
  currentLang,
  currentCurrency,
  onSelectTour,
  onBookTour,
}) => {
  const t = TRANSLATIONS[currentLang] || TRANSLATIONS.en;

  const [selectedRegion, setSelectedRegion] = useState<string>('All');
  const [russianOnly, setRussianOnly] = useState<boolean>(false);
  const [activeTourId, setActiveTourId] = useState<string>(tours[0]?.id || 'na-thousand-islands');
  const [activeStopIndex, setActiveStopIndex] = useState<number>(0);
  const [zoomLevel, setZoomLevel] = useState<number>(1);

  const filteredTours = useMemo(() => {
    return tours.filter((tour) => {
      if (selectedRegion !== 'All' && tour.region !== selectedRegion) return false;
      if (russianOnly && !tour.isRussianGuideAvailable) return false;
      return true;
    });
  }, [tours, selectedRegion, russianOnly]);

  const activeTour = useMemo(() => {
    return tours.find((t) => t.id === activeTourId) || filteredTours[0] || tours[0];
  }, [tours, activeTourId, filteredTours]);

  // Convert lat/lng coordinates to SVG viewBox coords (0-1000 width, 0-500 height)
  const projectCoords = (lat: number, lng: number): { x: number; y: number } => {
    // Mercator approximation for world view
    const x = ((lng + 180) * (1000 / 360));
    // lat clamp between -70 and 80
    const latClamped = Math.max(-70, Math.min(80, lat));
    const latRad = (latClamped * Math.PI) / 180;
    const mercN = Math.log(Math.tan(Math.PI / 4 + latRad / 2));
    const y = (500 / 2) - (1000 * mercN) / (2 * Math.PI) * 0.45;
    return { 
      x: Math.max(10, Math.min(990, x)), 
      y: Math.max(20, Math.min(480, y + 60)) 
    };
  };

  const continentRegions = [
    { id: 'All', label: 'All Regions (Все регионы)' },
    { id: 'North America', label: 'North America (Сев. Америка)' },
    { id: 'Europe', label: 'Europe (Европа)' },
    { id: 'Asia', label: 'Asia & Silk Road (Азия)' },
  ];

  return (
    <section id="interactive-map" className="py-16 bg-[#FAFAF9] text-slate-900 relative overflow-hidden border-t border-slate-200">
      {/* Subtle Grid Canvas Background */}
      <div className="absolute inset-0 bg-[radial-gradient(#94a3b8_1px,transparent_1px)] [background-size:24px_24px] opacity-25" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4 border-b border-slate-200 pb-6">
          <div>
            <div className="inline-flex items-center gap-2 text-[#1E3A8A] text-xs font-bold uppercase tracking-widest mb-2 bg-blue-50 px-3 py-1 rounded-full border border-blue-200">
              <Compass className="w-4 h-4 text-[#2563EB]" />
              <span>{t.navInteractiveMap}</span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-serif font-bold text-[#1E3A8A] tracking-tight">
              {t.mapTitle}
            </h2>
            <p className="text-sm sm:text-base text-slate-600 mt-1 max-w-2xl">
              {t.mapSubtitle}
            </p>
          </div>

          {/* Region & Russian Filter Controls */}
          <div className="flex flex-wrap items-center gap-2">
            <div className="flex bg-white p-1 rounded-xl border border-slate-200 shadow-xs">
              {continentRegions.map((reg) => (
                <button
                  key={reg.id}
                  onClick={() => setSelectedRegion(reg.id)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                    selectedRegion === reg.id
                      ? 'bg-[#1E3A8A] text-white shadow-xs font-bold'
                      : 'text-slate-600 hover:text-[#1E3A8A] hover:bg-slate-100'
                  }`}
                >
                  {reg.id === 'All' ? t.mapFilterAll : reg.id}
                </button>
              ))}
            </div>

            <button
              onClick={() => setRussianOnly(!russianOnly)}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-bold border transition-all ${
                russianOnly
                  ? 'bg-blue-50 border-[#2563EB] text-[#1E3A8A]'
                  : 'bg-white border-slate-200 text-slate-600 hover:text-slate-900 shadow-xs'
              }`}
            >
              <Languages className="w-3.5 h-3.5 text-[#2563EB]" />
              <span>{t.mapFilterRussianOnly}</span>
            </button>
          </div>
        </div>

        {/* Main Map & Itinerary Explorer Split Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
          {/* Interactive Vector Map Canvas (7 cols on desktop) */}
          <div className="lg:col-span-8 bg-white rounded-2xl border border-slate-200 p-4 relative shadow-sm overflow-hidden">
            {/* Map Header Status */}
            <div className="flex items-center justify-between text-xs text-slate-600 mb-2 px-2">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-amber-500 animate-ping" />
                <span className="font-semibold text-slate-800">
                  {currentLang === 'ru' ? activeTour?.ruTitle : activeTour?.title}
                </span>
                <span className="hidden sm:inline bg-blue-50 text-[#1E3A8A] border border-blue-200 px-2 py-0.5 rounded text-[11px] font-bold">
                  {activeTour?.durationDays} {currentLang === 'ru' ? 'Дней' : 'Days'}
                </span>
              </div>

              {/* Map Zoom Controls */}
              <div className="flex items-center gap-1 bg-slate-100 border border-slate-200 rounded-lg p-1">
                <button
                  onClick={() => setZoomLevel((z) => Math.min(1.6, z + 0.15))}
                  className="p-1 text-slate-600 hover:text-[#1E3A8A] rounded transition-colors"
                  title="Zoom in"
                >
                  <ZoomIn className="w-3.5 h-3.5" />
                </button>
                <button
                  onClick={() => setZoomLevel((z) => Math.max(0.85, z - 0.15))}
                  className="p-1 text-slate-600 hover:text-[#1E3A8A] rounded transition-colors"
                  title="Zoom out"
                >
                  <ZoomOut className="w-3.5 h-3.5" />
                </button>
                <button
                  onClick={() => setZoomLevel(1)}
                  className="p-1 text-slate-600 hover:text-[#1E3A8A] rounded transition-colors"
                  title="Reset view"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

            {/* SVG Interactive Canvas */}
            <div className="relative w-full aspect-16/9 bg-[#0F172A] rounded-xl overflow-hidden border border-slate-800">
              <svg
                viewBox="0 0 1000 500"
                className="w-full h-full cursor-grab active:cursor-grabbing transition-transform duration-300"
                style={{ transform: `scale(${zoomLevel})` }}
              >
                <defs>
                  {/* Subtle map glow */}
                  <linearGradient id="routeGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#2563EB" />
                    <stop offset="50%" stopColor="#EAB308" />
                    <stop offset="100%" stopColor="#F59E0B" />
                  </linearGradient>

                  <filter id="glow">
                    <feGaussianBlur stdDeviation="3" result="coloredBlur" />
                    <feMerge>
                      <feMergeNode in="coloredBlur" />
                      <feMergeNode in="SourceGraphic" />
                    </feMerge>
                  </filter>
                </defs>

                {/* Continents Simplified Stylized Outlines */}
                <g fill="#1E293B" stroke="#334155" strokeWidth="0.8" opacity="0.8">
                  {/* North America */}
                  <path d="M 120 70 Q 180 60 260 80 Q 280 120 270 170 Q 210 200 180 260 Q 150 210 130 140 Z" />
                  {/* South America */}
                  <path d="M 230 260 Q 300 270 320 340 Q 280 440 240 460 Q 210 380 220 300 Z" />
                  {/* Europe */}
                  <path d="M 460 80 Q 540 70 560 130 Q 520 170 480 160 Q 450 120 460 80 Z" />
                  {/* Africa */}
                  <path d="M 460 170 Q 550 170 570 240 Q 550 350 500 400 Q 450 310 450 220 Z" />
                  {/* Asia */}
                  <path d="M 560 80 Q 750 60 820 120 Q 840 210 740 260 Q 640 230 560 160 Z" />
                  {/* Australia */}
                  <path d="M 760 310 Q 840 310 850 380 Q 780 410 740 360 Z" />
                </g>

                {/* Active Tour Route Line Connecting Stops */}
                {activeTour?.route && activeTour.route.length > 1 && (
                  <g>
                    {/* Glowing Route Polyline */}
                    <path
                      d={activeTour.route.reduce((acc, stop, i) => {
                        const pt = projectCoords(stop.lat, stop.lng);
                        return i === 0 ? `M ${pt.x} ${pt.y}` : `${acc} L ${pt.x} ${pt.y}`;
                      }, '')}
                      fill="none"
                      stroke="url(#routeGradient)"
                      strokeWidth="3.5"
                      strokeDasharray="6,4"
                      filter="url(#glow)"
                      className="animate-pulse"
                    />

                    {/* Secondary Route Underlay */}
                    <path
                      d={activeTour.route.reduce((acc, stop, i) => {
                        const pt = projectCoords(stop.lat, stop.lng);
                        return i === 0 ? `M ${pt.x} ${pt.y}` : `${acc} L ${pt.x} ${pt.y}`;
                      }, '')}
                      fill="none"
                      stroke="#EAB308"
                      strokeWidth="1.5"
                    />
                  </g>
                )}

                {/* Render All Tour Hub Markers */}
                {filteredTours.map((tour) => {
                  const firstStop = tour.route[0] || { lat: 40, lng: -74 };
                  const pt = projectCoords(firstStop.lat, firstStop.lng);
                  const isSelected = tour.id === activeTourId;

                  return (
                    <g
                      key={`hub-${tour.id}`}
                      onClick={() => {
                        setActiveTourId(tour.id);
                        setActiveStopIndex(0);
                      }}
                      className="cursor-pointer group"
                    >
                      {/* Pulse Circle for Selected Tour */}
                      {isSelected && (
                        <circle
                          cx={pt.x}
                          cy={pt.y}
                          r="16"
                          fill="#2563EB"
                          opacity="0.3"
                          className="animate-ping"
                        />
                      )}

                      <circle
                        cx={pt.x}
                        cy={pt.y}
                        r={isSelected ? '9' : '6'}
                        fill={isSelected ? '#EAB308' : '#3B82F6'}
                        stroke="#ffffff"
                        strokeWidth="2"
                        className="transition-all duration-200 group-hover:scale-125"
                      />

                      {/* Tooltip Label on Map */}
                      <text
                        x={pt.x}
                        y={pt.y - 12}
                        textAnchor="middle"
                        fill={isSelected ? '#FEF08A' : '#E2E8F0'}
                        fontSize={isSelected ? '10' : '8'}
                        fontWeight={isSelected ? 'bold' : 'normal'}
                        className="pointer-events-none select-none drop-shadow-md"
                      >
                        {currentLang === 'ru' ? tour.ruDestination : tour.destination}
                      </text>
                    </g>
                  );
                })}

                {/* Render Individual Day Route Stop Markers for Active Tour */}
                {activeTour?.route.map((stop, index) => {
                  const pt = projectCoords(stop.lat, stop.lng);
                  const isActiveStop = index === activeStopIndex;

                  return (
                    <g
                      key={`stop-${stop.name}-${index}`}
                      onClick={(e) => {
                        e.stopPropagation();
                        setActiveStopIndex(index);
                      }}
                      className="cursor-pointer group"
                    >
                      <circle
                        cx={pt.x}
                        cy={pt.y}
                        r={isActiveStop ? '7' : '4.5'}
                        fill={isActiveStop ? '#EF4444' : '#EAB308'}
                        stroke="#ffffff"
                        strokeWidth="1.5"
                      />

                      {/* Day Number inside or above pin */}
                      <text
                        x={pt.x}
                        y={pt.y + 14}
                        textAnchor="middle"
                        fill="#ffffff"
                        fontSize="8"
                        fontWeight="bold"
                        className="pointer-events-none select-none bg-slate-900/80 px-1"
                      >
                        Day {stop.day}: {currentLang === 'ru' ? stop.ruName.split(' ')[0] : stop.name.split(' ')[0]}
                      </text>
                    </g>
                  );
                })}
              </svg>

              {/* Map Footer Helper Bar */}
              <div className="absolute bottom-2 left-3 right-3 flex items-center justify-between text-[11px] text-slate-300 bg-slate-900/90 backdrop-blur-md px-3 py-1.5 rounded-lg border border-slate-700">
                <span className="flex items-center gap-1.5 text-slate-200">
                  <MapPin className="w-3 h-3 text-amber-400" />
                  {t.mapClickToPreview}
                </span>
                <span className="text-amber-400 font-bold hidden sm:inline">
                  {t.mapInteractiveGuideInfo}
                </span>
              </div>
            </div>

            {/* Quick Tour Switcher Tabs underneath map */}
            <div className="mt-3 flex items-center gap-2 overflow-x-auto pb-1">
              <span className="text-[11px] font-bold text-slate-500 uppercase tracking-wider whitespace-nowrap">
                {currentLang === 'ru' ? 'Маршруты:' : 'Tours:'}
              </span>
              {filteredTours.map((tour) => (
                <button
                  key={tour.id}
                  onClick={() => {
                    setActiveTourId(tour.id);
                    setActiveStopIndex(0);
                  }}
                  className={`px-3 py-1 rounded-lg text-xs font-semibold whitespace-nowrap transition-all flex items-center gap-1.5 ${
                    tour.id === activeTourId
                      ? 'bg-[#1E3A8A] text-white font-bold shadow-xs'
                      : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                  }`}
                >
                  <span>{currentLang === 'ru' ? tour.ruDestination : tour.destination}</span>
                  {tour.isRussianGuideAvailable && (
                    <span className="text-[9px] bg-amber-400 text-slate-950 font-black px-1 rounded">
                      RU
                    </span>
                  )}
                </button>
              ))}
            </div>
          </div>

          {/* Active Tour Details & Route Timeline Card (4 cols on desktop) */}
          <div className="lg:col-span-4 bg-white rounded-2xl border border-slate-200 p-5 shadow-sm space-y-4">
            {/* Tour Hero Header */}
            <div className="relative rounded-xl overflow-hidden border border-slate-200 aspect-16/9">
              <img
                src={activeTour?.coverImage}
                alt={activeTour?.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/30 to-transparent" />
              
              <div className="absolute top-2 left-2 flex flex-wrap gap-1.5">
                <span className="bg-[#1E3A8A] text-white text-[10px] font-bold px-2 py-0.5 rounded shadow-xs">
                  {activeTour?.travelStyle}
                </span>
                {activeTour?.isRussianGuideAvailable && (
                  <span className="bg-emerald-700 text-white text-[10px] font-bold px-2 py-0.5 rounded flex items-center gap-1 shadow-xs">
                    <Languages className="w-3 h-3" />
                    <span>{t.heroRussianGuideBadge}</span>
                  </span>
                )}
              </div>

              <div className="absolute bottom-2 left-3 right-3 text-white">
                <div className="text-xs text-amber-300 font-semibold">
                  {activeTour?.durationDays} {currentLang === 'ru' ? 'Дней' : 'Days'} • {currentLang === 'ru' ? activeTour?.ruCountry : activeTour?.country}
                </div>
                <div className="text-sm font-bold truncate">
                  {currentLang === 'ru' ? activeTour?.ruTitle : activeTour?.title}
                </div>
              </div>
            </div>

            {/* Price & Rating Bar */}
            <div className="flex items-center justify-between border-y border-slate-100 py-2.5">
              <div>
                <span className="text-[11px] text-slate-500 uppercase tracking-wider block">
                  {t.fromPrice}
                </span>
                <span className="text-xl font-bold font-serif text-[#1E3A8A]">
                  {formatPrice(activeTour?.priceUSD || 0, currentCurrency)}
                </span>
                <span className="text-[10px] text-slate-400 ml-1">/ {t.perPerson}</span>
              </div>

              <div className="text-right">
                <div className="flex items-center justify-end gap-1 text-amber-600 font-bold text-xs">
                  <Sparkles className="w-3.5 h-3.5 text-amber-500 fill-amber-500" />
                  <span>★ {activeTour?.rating}</span>
                </div>
                <span className="text-[10px] text-slate-500">
                  ({activeTour?.reviewCount} {currentLang === 'ru' ? 'отзывов' : 'reviews'})
                </span>
              </div>
            </div>

            {/* Interactive Day-by-Day Stops Timeline */}
            <div className="space-y-2">
              <div className="flex items-center justify-between text-xs font-bold uppercase tracking-wider text-slate-500">
                <span>{t.mapRouteStopsCount}</span>
                <span className="text-[#1E3A8A]">
                  {activeTour?.route.length} {currentLang === 'ru' ? 'этапов' : 'milestones'}
                </span>
              </div>

              <div className="space-y-2 max-h-52 overflow-y-auto pr-1">
                {activeTour?.route.map((stop, idx) => {
                  const isCurrent = idx === activeStopIndex;
                  return (
                    <div
                      key={`route-stop-card-${idx}`}
                      onClick={() => setActiveStopIndex(idx)}
                      className={`p-2.5 rounded-xl border transition-all cursor-pointer text-xs ${
                        isCurrent
                          ? 'bg-blue-50/80 border-[#2563EB] text-slate-900 font-medium shadow-xs'
                          : 'bg-slate-50 border-slate-200 text-slate-600 hover:text-slate-900 hover:bg-slate-100'
                      }`}
                    >
                      <div className="flex items-center justify-between font-bold mb-1">
                        <span className={isCurrent ? 'text-[#1E3A8A]' : 'text-slate-800'}>
                          {t.modalDay} {stop.day}: {currentLang === 'ru' ? stop.ruName : stop.name}
                        </span>
                        {isCurrent && (
                          <span className="w-2 h-2 rounded-full bg-[#2563EB]" />
                        )}
                      </div>
                      <p className="line-clamp-2 text-[11px] text-slate-500">
                        {currentLang === 'ru' ? stop.ruDesc : stop.desc}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Actions for Active Tour */}
            <div className="pt-2 flex flex-col gap-2">
              <button
                onClick={() => onSelectTour(activeTour)}
                id="map-view-itinerary-btn"
                className="w-full py-2.5 bg-[#1E3A8A] hover:bg-[#1e40af] text-white font-bold text-xs rounded-xl shadow-md flex items-center justify-center gap-2 transition-all hover:scale-[1.01]"
              >
                <span>{t.mapViewFullItinerary}</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>

              <button
                onClick={() => onBookTour(activeTour)}
                id="map-quick-quote-btn"
                className="w-full py-2 bg-slate-100 hover:bg-amber-50 border border-slate-200 hover:border-amber-400 text-slate-800 hover:text-amber-800 font-semibold text-xs rounded-xl transition-colors"
              >
                {t.quickInquiry}
              </button>

              <div className="flex items-center justify-between pt-2 border-t border-slate-100 text-[11px] text-slate-500">
                <span>{currentLang === 'ru' ? 'Спросить в мессенджере:' : 'Chat with advisor:'}</span>
                <div className="flex items-center gap-2">
                  <a
                    href={getWhatsAppLink(generateTourInquiryMessage({
                      tour: activeTour,
                      currentLang,
                      currentCurrency,
                    }))}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-emerald-600 hover:text-emerald-700 font-bold"
                  >
                    WhatsApp
                  </a>
                  <span>•</span>
                  <a
                    href={getTelegramLink(generateTourInquiryMessage({
                      tour: activeTour,
                      currentLang,
                      currentCurrency,
                    }))}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sky-600 hover:text-sky-700 font-bold"
                  >
                    Telegram
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
