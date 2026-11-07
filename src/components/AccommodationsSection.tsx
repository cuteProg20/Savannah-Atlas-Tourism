import React, { useState } from 'react';
import { 
  Crown, 
  Sparkles, 
  ArrowRight, 
  Flame, 
  Waves, 
  Bath, 
  Wifi, 
  Layers, 
  ChevronLeft, 
  ChevronRight
} from 'lucide-react';
import { Currency, Language } from '../types';
import { CURRENCY_RATES } from '../data/translations';

interface AccommodationsSectionProps {
  currentLang: Language;
  currentCurrency: Currency;
  onOpenBookingModal: (accommodationName?: string) => void;
}

interface LuxuryRoomShowcase {
  id: string;
  nameEn: string;
  nameRu: string;
  nameFr: string;
  nameEs: string;
  lodgeEn: string;
  lodgeRu: string;
  lodgeFr: string;
  lodgeEs: string;
  locationEn: string;
  locationRu: string;
  locationFr: string;
  locationEs: string;
  dimensions: string;
  sqft: string;
  maxGuests: string;
  priceUsd: number;
  descriptionEn: string;
  descriptionRu: string;
  descriptionFr: string;
  descriptionEs: string;
  photos: { 
    url: string; 
    captionEn: string; 
    captionRu: string;
    captionFr: string;
    captionEs: string;
  }[];
  keyAmenities: { 
    icon: any; 
    labelEn: string; 
    labelRu: string;
    labelFr: string;
    labelEs: string;
  }[];
  specDetails: { 
    labelEn: string; 
    labelRu: string; 
    labelFr: string;
    labelEs: string;
    valueEn: string; 
    valueRu: string;
    valueFr: string;
    valueEs: string;
  }[];
}

export const AccommodationsSection: React.FC<AccommodationsSectionProps> = ({
  currentLang,
  currentCurrency,
  onOpenBookingModal,
}) => {
  const curr = CURRENCY_RATES[currentCurrency] || CURRENCY_RATES.USD;
  const convertPrice = (usd: number) => Math.round(usd * curr.rate);

  const [activeSuiteIdx, setActiveSuiteIdx] = useState<number>(0);
  const [activePhotoIdx, setActivePhotoIdx] = useState<number>(0);

  const getLocalized = (en: string, ru?: string, fr?: string, es?: string) => {
    if (currentLang === 'ru' && ru) return ru;
    if (currentLang === 'fr' && fr) return fr;
    if (currentLang === 'es' && es) return es;
    return en;
  };

  const suites: LuxuryRoomShowcase[] = [
    {
      id: 'singita-mara-pavilion',
      nameEn: 'Riverview Luxury Tented Pavilion',
      nameRu: 'Люкс-павильон с панорамным видом на реку Мара',
      nameFr: 'Pavillon de luxe sous tente avec vue sur la rivière Mara',
      nameEs: 'Pabellón de lujo de lona con vistas al río Mara',
      lodgeEn: 'Singita Mara River Tented Sanctuary',
      lodgeRu: 'Singita Mara River Tented Sanctuary',
      lodgeFr: 'Sanctuaire Singita Mara River',
      lodgeEs: 'Santuario Singita Mara River',
      locationEn: 'Lamai Wedge · Northern Serengeti',
      locationRu: 'Треугольник Ламай · Северный Серенгети',
      locationFr: 'Lamai Wedge · Nord du Serengeti',
      locationEs: 'Lamai Wedge · Norte del Serengeti',
      dimensions: '140 m²',
      sqft: '1,507 sq ft',
      maxGuests: '2 Adults + 1 Child',
      priceUsd: 1450,
      descriptionEn: 'Perched high above the Mara River with open canvas walls, this bespoke pavilion harmonizes raw safari nature with refined contemporary elegance. Features a private heated plunge pool, custom brass fittings, and uninterrupted views of migrating herds.',
      descriptionRu: 'Расположенный на возвышении над рекой Мара, этот авторский тент-павильон с открывающимися полотняными стенами сочетает первозданную саванну с роскошным комфортом. Собственный бассейн с подогревом и вид на миграцию прямо из номера.',
      descriptionFr: 'Perché au-dessus de la rivière Mara avec ses parois de toile ouvertes, ce pavillon d’exception allie nature sauvage et élégance contemporaine. Piscine privée chauffée, mobilier raffiné et vue imprenable sur la migration.',
      descriptionEs: 'Ubicado en lo alto del río Mara con amplias paredes de lona, este exclusivo pabellón aúna la naturaleza pura del safari con una refinada elegancia. Piscina privada climatizada y vistas despejadas a las manadas migratorias.',
      photos: [
        {
          url: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1600&q=85',
          captionEn: 'Master bedroom open to the Serengeti savanna breeze',
          captionRu: 'Спальня с открытым панорамным видом на саванну',
          captionFr: 'Chambre principale ouverte sur la brise de la savane',
          captionEs: 'Dormitorio principal abierto a la brisa de la sabana',
        },
        {
          url: 'https://images.unsplash.com/photo-1582719508461-905c673771fd?auto=format&fit=crop&w=1600&q=85',
          captionEn: 'En-suite bath with freestanding copper soaking tub',
          captionRu: 'Ванная комната с медной ванной ручной работы',
          captionFr: 'Salle de bain avec baignoire en cuivre martelé',
          captionEs: 'Baño en suite con bañera exenta de cobre forjado',
        },
        {
          url: 'https://images.unsplash.com/photo-1516426122078-c23e76319801?auto=format&fit=crop&w=1600&q=85',
          captionEn: 'Private teak sundeck overlooking Mara riverbed',
          captionRu: 'Терраса из тика над долиной реки Мара',
          captionFr: 'Terrasse privée en teck dominant le lit de la rivière Mara',
          captionEs: 'Terraza privada de teca sobre el lecho del río Mara',
        },
        {
          url: 'https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?auto=format&fit=crop&w=1600&q=85',
          captionEn: 'Sunset dining on the private plunge pool veranda',
          captionRu: 'Ужин на террасе у бассейна в лучах заката',
          captionFr: 'Dîner au coucher du soleil sur la terrasse avec piscine',
          captionEs: 'Cena al atardecer en el porche junto a la piscina privada',
        },
      ],
      keyAmenities: [
        { icon: Waves, labelEn: 'Private Heated Plunge Pool', labelRu: 'Бассейн с подогревом', labelFr: 'Piscine privée chauffée', labelEs: 'Piscina privada climatizada' },
        { icon: Bath, labelEn: 'Hand-Hammered Copper Tub', labelRu: 'Медная ванна ручной ковки', labelFr: 'Baignoire en cuivre', labelEs: 'Bañera de cobre artesanal' },
        { icon: Flame, labelEn: 'Stone Wood-Burning Fireplace', labelRu: 'Дровяной камин из камня', labelFr: 'Cheminée au bois', labelEs: 'Chimenea de leña en piedra' },
        { icon: Layers, labelEn: 'Private Teak Sundeck & Daybed', labelRu: 'Тиковая терраса с шезлонгами', labelFr: 'Terrasse en teck', labelEs: 'Terraza de teca y diván' },
        { icon: Crown, labelEn: 'Dedicated Butler & Valet Service', labelRu: 'Персональный батлер 24/7', labelFr: 'Service de majordome dédié', labelEs: 'Servicio de mayordomo privado' },
        { icon: Wifi, labelEn: 'High-Speed Starlink Satellite WiFi', labelRu: 'Спутниковый интернет Starlink', labelFr: 'WiFi satellite Starlink', labelEs: 'WiFi satelital Starlink' },
      ],
      specDetails: [
        { labelEn: 'Interior Area', labelRu: 'Площадь', labelFr: 'Superficie', labelEs: 'Superficie', valueEn: '140 m² / 1,507 sq ft', valueRu: '140 м²', valueFr: '140 m²', valueEs: '140 m²' },
        { labelEn: 'Bed Configuration', labelRu: 'Кровати', labelFr: 'Literie', labelEs: 'Camas', valueEn: 'Custom King or 2 Large Twins', valueRu: 'King-size или 2 раздельные', valueFr: 'Lit King-size ou lits jumeaux', valueEs: 'King-size o 2 individuales' },
        { labelEn: 'Energy Standard', labelRu: 'Энергия', labelFr: 'Énergie', labelEs: 'Energía', valueEn: '100% Off-Grid Solar Microgrid', valueRu: '100% солнечная станция', valueFr: '100% solaire autonome', valueEs: '100% solar autónomo' },
        { labelEn: 'Shower System', labelRu: 'Душ', labelFr: 'Douches', labelEs: 'Ducha', valueEn: 'Indoor & Outdoor Rain Showers', valueRu: 'Тропический душ в номере и на воздухе', valueFr: 'Douches pluie intérieure & extérieure', valueEs: 'Ducha de lluvia interior y exterior' },
      ],
    },
    {
      id: 'beyond-crater-suite',
      nameEn: 'Baroque Stargazing Crater Suite',
      nameRu: 'Панорамный сьют на краю кратера Нгоронгоро',
      nameFr: 'Suite baroque avec vue panoramique sur le cratère',
      nameEs: 'Suite barroca panorámica sobre el cráter Ngorongoro',
      lodgeEn: '&Beyond Ngorongoro Crater Lodge',
      lodgeRu: '&Beyond Ngorongoro Crater Lodge',
      lodgeFr: '&Beyond Ngorongoro Crater Lodge',
      lodgeEs: '&Beyond Ngorongoro Crater Lodge',
      locationEn: 'Ngorongoro Caldera Rim · South Edge',
      locationRu: 'Край кратера Нгоронгоро',
      locationFr: 'Bord du cratère du Ngorongoro',
      locationEs: 'Borde del cráter de Ngorongoro',
      dimensions: '165 m²',
      sqft: '1,776 sq ft',
      maxGuests: '2 Adults',
      priceUsd: 1850,
      descriptionEn: 'Dubbed "Versailles in the Bush", this dramatic stilted suite pairs baroque crystal chandeliers and brocade fabrics with raw timber architecture and sweeping 600m caldera vistas.',
      descriptionRu: '«Версаль в африканском буше»: роскошный сьют на сваях с хрустальными люстрами, бархатом, дровяным камином и захватывающей панорамой 600-метрового кратера Нгоронгоро.',
      descriptionFr: 'Surnommée "Versailles dans la brousse", cette suite sur pilotis associe lustres en cristal et boiseries brutes face au panorama spectaculaire du cratère.',
      descriptionEs: 'Conocida como el "Versalles de la sabana", esta suite sobre pilotes combina candelabros de cristal y maderas nobles con vistas impresionantes a los 600 metros de profundidad de la caldera.',
      photos: [
        {
          url: 'https://images.unsplash.com/photo-1582719508461-905c673771fd?auto=format&fit=crop&w=1600&q=85',
          captionEn: 'Opulent baroque lounge with panoramic caldera glass',
          captionRu: 'Гостиная с панорамным остеклением над кратером',
          captionFr: 'Salon baroque avec baies vitrées sur la caldeira',
          captionEs: 'Salón barroco con ventanales sobre la caldera',
        },
        {
          url: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1600&q=85',
          captionEn: 'King canopy bed draped with raw silk',
          captionRu: 'Кровать под шелковым балдахином',
          captionFr: 'Lit à baldaquin paré de soie sauvage',
          captionEs: 'Cama con dosel vestida de seda salvaje',
        },
      ],
      keyAmenities: [
        { icon: Flame, labelEn: 'Open Hearth Log Fireplace', labelRu: 'Камин на дровах', labelFr: 'Cheminée au feu de bois', labelEs: 'Chimenea de leña tradicional' },
        { icon: Crown, labelEn: 'Private Butler Service', labelRu: 'Персональный дворецкий', labelFr: 'Majordome dédié', labelEs: 'Mayordomo privado' },
        { icon: Bath, labelEn: 'Panoramic Soaking Bathtub', labelRu: 'Ванна с панорамой кратера', labelFr: 'Baignoire avec vue panoramique', labelEs: 'Bañera panorámica' },
        { icon: Layers, labelEn: 'Private Viewing Deck', labelRu: 'Смотровая терраса', labelFr: 'Pont d’observation privé', labelEs: 'Mirador privado' },
      ],
      specDetails: [
        { labelEn: 'Interior Area', labelRu: 'Площадь', labelFr: 'Superficie', labelEs: 'Superficie', valueEn: '165 m² / 1,776 sq ft', valueRu: '165 м²', valueFr: '165 m²', valueEs: '165 m²' },
        { labelEn: 'Elevation', labelRu: 'Высота', labelFr: 'Altitude', labelEs: 'Altitud', valueEn: '2,300m ASL', valueRu: '2300 м над ур. моря', valueFr: '2 300m d’altitude', valueEs: '2.300m de altitud' },
        { labelEn: 'Climate Comfort', labelRu: 'Отопление', labelFr: 'Climatisation', labelEs: 'Climatización', valueEn: 'Radiant Fireplace Heating', valueRu: 'Каминное отопление', valueFr: 'Chauffage par cheminée', valueEs: 'Calefacción por chimenea' },
        { labelEn: 'Dining Option', labelRu: 'Питание', labelFr: 'Restauration', labelEs: 'Gastronomía', valueEn: 'Private Fine In-Suite Dining', valueRu: 'Приватные ужины в сьюте', valueFr: 'Dîners privés en suite', valueEs: 'Cenas privadas en la suite' },
      ],
    },
  ];

  const currentSuite = suites[activeSuiteIdx] || suites[0];
  const currentPhotos = currentSuite.photos;
  const currentPhoto = currentPhotos[activePhotoIdx] || currentPhotos[0];

  const labels = {
    eyebrow: getLocalized('Architectural Sanctuary', 'Архитектура и комфорт', 'Sanctuaire Architectural', 'Santuario Arquitectónico'),
    heading: getLocalized('Accommodation Specifications', 'Спецификации авторских павильонов', 'Spécifications des Hébergements', 'Especificaciones de Alojamiento'),
    suiteSubtitle: getLocalized(currentSuite.lodgeEn, currentSuite.lodgeRu, currentSuite.lodgeFr, currentSuite.lodgeEs),
    suiteTitle: getLocalized(currentSuite.nameEn, currentSuite.nameRu, currentSuite.nameFr, currentSuite.nameEs),
    suiteDesc: getLocalized(currentSuite.descriptionEn, currentSuite.descriptionRu, currentSuite.descriptionFr, currentSuite.descriptionEs),
    suiteLocation: getLocalized(currentSuite.locationEn, currentSuite.locationRu, currentSuite.locationFr, currentSuite.locationEs),
    photoCaption: getLocalized(currentPhoto.captionEn, currentPhoto.captionRu, currentPhoto.captionFr, currentPhoto.captionEs),
    amenitiesTitle: getLocalized('Suite Highlights', 'Ключевые удобства сьюта', 'Points forts de la suite', 'Características de la suite'),
    specsTitle: getLocalized('Room Telemetry & Layout', 'Спецификации и конфигурация', 'Dimensions & Configuration', 'Dimensiones y Distribución'),
    rateFrom: getLocalized('Nightly Rate From', 'Стоимость от', 'Tarif par nuit dès', 'Tarifa por noche desde'),
    perNight: getLocalized('/ night', '/ ночь', '/ nuit', '/ noche'),
    reserveBtn: getLocalized('Reserve Suite', 'Забронировать сьют', 'Réserver la suite', 'Reservar suite'),
  };

  const handleNextPhoto = () => {
    setActivePhotoIdx((prev) => (prev + 1) % currentPhotos.length);
  };

  const handlePrevPhoto = () => {
    setActivePhotoIdx((prev) => (prev - 1 + currentPhotos.length) % currentPhotos.length);
  };

  return (
    <section 
      id="accommodations" 
      className="py-20 bg-[#F4F6F4] text-[#1C2826] border-b border-[#E2E8E4] scroll-mt-20"
    >
      <div className="max-w-7xl mx-auto px-8 space-y-12">
        
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 pb-4 border-b border-[#E2E8E4]">
          <div>
            <span className="text-xs font-semibold tracking-widest text-[#4A7061] uppercase flex items-center gap-2">
              <Sparkles className="w-3.5 h-3.5 text-[#1C4432]" />
              {labels.eyebrow}
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-[#0F2A1D] tracking-tight mt-1">
              {labels.heading}
            </h2>
          </div>

          {/* Suite Selector Tabs */}
          <div className="flex items-center gap-2 bg-[#E2E8E4] p-1.5 rounded-full border border-[#D3DED7]">
            {suites.map((s, idx) => (
              <button
                key={s.id}
                onClick={() => {
                  setActiveSuiteIdx(idx);
                  setActivePhotoIdx(0);
                }}
                className={`px-4 py-2 rounded-full text-xs font-medium transition-all cursor-pointer ${
                  activeSuiteIdx === idx
                    ? 'bg-[#0F2A1D] text-[#FAF8F5] shadow-xs'
                    : 'text-[#2D4A3E] hover:text-[#0F2A1D]'
                }`}
              >
                {idx === 0 ? 'Singita Mara Pavilion' : '&Beyond Crater Suite'}
              </button>
            ))}
          </div>
        </div>

        {/* 1. Main Luxury Pavilion Showcase Container */}
        <div className="bg-white rounded-3xl border border-[#E2E8E4] shadow-xs overflow-hidden grid grid-cols-1 lg:grid-cols-12">
          
          {/* Left / Top: Interactive Photo Slider (7 Cols) */}
          <div className="lg:col-span-7 p-6 sm:p-8 space-y-4 border-b lg:border-b-0 lg:border-r border-[#E2E8E4] flex flex-col justify-between">
            
            {/* Main Active Photo Viewport */}
            <div className="relative h-80 sm:h-96 w-full rounded-2xl overflow-hidden bg-[#0F2A1D] group shadow-inner">
              <img
                src={currentPhoto.url}
                alt={labels.photoCaption}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                referrerPolicy="no-referrer"
              />

              {/* Navigation Arrows */}
              <button
                onClick={handlePrevPhoto}
                aria-label="Previous photo"
                className="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/40 hover:bg-black/70 backdrop-blur-md text-white flex items-center justify-center transition cursor-pointer border border-white/20"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>

              <button
                onClick={handleNextPhoto}
                aria-label="Next photo"
                className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/40 hover:bg-black/70 backdrop-blur-md text-white flex items-center justify-center transition cursor-pointer border border-white/20"
              >
                <ChevronRight className="w-5 h-5" />
              </button>

              {/* Top Tags */}
              <div className="absolute top-4 left-4 right-4 flex items-center justify-between pointer-events-none">
                <span className="bg-black/60 backdrop-blur-md border border-white/20 text-white text-[11px] font-bold uppercase px-3.5 py-1.5 rounded-full">
                  {labels.suiteLocation}
                </span>

                <span className="bg-[#D3DED7] text-[#0F2A1D] text-xs font-bold px-3 py-1.5 rounded-full shadow-xs">
                  {currentSuite.dimensions} ({currentSuite.sqft})
                </span>
              </div>

              {/* Bottom Caption Overlay */}
              <div className="absolute bottom-4 left-4 right-4 text-white">
                <p className="text-xs sm:text-sm font-medium bg-black/70 backdrop-blur-md p-2.5 rounded-xl border border-white/15">
                  {labels.photoCaption}
                </p>
              </div>
            </div>

            {/* Thumbnail Navigation Bar */}
            <div className="flex items-center gap-3 overflow-x-auto pt-1">
              {currentPhotos.map((photo, pIdx) => (
                <button
                  key={pIdx}
                  onClick={() => setActivePhotoIdx(pIdx)}
                  className={`relative w-24 h-16 rounded-xl overflow-hidden border-2 shrink-0 transition-all cursor-pointer ${
                    activePhotoIdx === pIdx
                      ? 'border-[#0F2A1D] scale-105 shadow-md'
                      : 'border-transparent opacity-60 hover:opacity-100'
                  }`}
                >
                  <img src={photo.url} alt="thumbnail" className="w-full h-full object-cover" />
                </button>
              ))}
            </div>

          </div>

          {/* Right / Bottom: Specifications, Amenities & Booking (5 Cols) */}
          <div className="lg:col-span-5 p-6 sm:p-8 flex flex-col justify-between space-y-6">
            
            <div className="space-y-4">
              <div>
                <span className="text-xs font-semibold uppercase tracking-widest text-[#4A7061] block">
                  {labels.suiteSubtitle}
                </span>
                <h3 className="text-2xl sm:text-3xl font-serif font-bold text-[#0F2A1D] tracking-tight mt-1">
                  {labels.suiteTitle}
                </h3>
              </div>

              <p className="text-xs sm:text-sm text-[#2D4A3E] leading-relaxed font-light">
                {labels.suiteDesc}
              </p>

              {/* Key Amenities Grid with Icons */}
              <div className="space-y-2 pt-2 border-t border-[#E2E8E4]">
                <h4 className="text-xs font-bold uppercase tracking-wider text-[#0F2A1D]">
                  {labels.amenitiesTitle}
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {currentSuite.keyAmenities.map((am, aIdx) => {
                    const Icon = am.icon;
                    const amLabel = getLocalized(am.labelEn, am.labelRu, am.labelFr, am.labelEs);
                    return (
                      <div key={aIdx} className="flex items-center gap-2 text-xs text-[#2D4A3E] bg-[#F4F6F4] p-2 rounded-xl border border-[#E2E8E4]">
                        <Icon className="w-3.5 h-3.5 text-[#1C4432] shrink-0" />
                        <span className="font-medium truncate">{amLabel}</span>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Technical Specifications Grid */}
              <div className="space-y-2 pt-2 border-t border-[#E2E8E4]">
                <h4 className="text-xs font-bold uppercase tracking-wider text-[#0F2A1D]">
                  {labels.specsTitle}
                </h4>
                <div className="grid grid-cols-2 gap-2">
                  {currentSuite.specDetails.map((spec, sIdx) => {
                    const sLabel = getLocalized(spec.labelEn, spec.labelRu, spec.labelFr, spec.labelEs);
                    const sVal = getLocalized(spec.valueEn, spec.valueRu, spec.valueFr, spec.valueEs);
                    return (
                      <div key={sIdx} className="text-xs bg-[#F4F6F4] p-2.5 rounded-xl border border-[#E2E8E4]">
                        <span className="text-[10px] text-[#4A7061] font-bold uppercase block">{sLabel}</span>
                        <span className="font-semibold text-[#0F2A1D] mt-0.5 block">{sVal}</span>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Price & Booking Call to Action */}
            <div className="pt-4 border-t border-[#E2E8E4] flex items-center justify-between gap-4">
              <div>
                <span className="text-[11px] text-[#4A7061] uppercase tracking-wider block font-medium">
                  {labels.rateFrom}
                </span>
                <div className="flex items-baseline gap-1">
                  <span className="text-2xl sm:text-3xl font-serif font-black text-[#0F2A1D]">
                    {curr.symbol}{convertPrice(currentSuite.priceUsd)}
                  </span>
                  <span className="text-xs text-[#4A7061] font-medium">
                    {labels.perNight}
                  </span>
                </div>
              </div>

              <button
                onClick={() => onOpenBookingModal(currentSuite.nameEn)}
                className="px-6 py-3.5 bg-[#0F2A1D] hover:bg-[#1C4432] text-[#FAF8F5] font-semibold text-xs uppercase tracking-wider rounded-full shadow-md flex items-center gap-2 cursor-pointer transition-all hover:scale-105 active:scale-95"
              >
                <span>{labels.reserveBtn}</span>
                <ArrowRight className="w-4 h-4 text-[#FAF8F5]" />
              </button>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
