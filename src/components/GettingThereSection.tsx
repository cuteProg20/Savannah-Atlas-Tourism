import React from 'react';
import { 
  Plane, 
  MapPin, 
  ArrowRight, 
} from 'lucide-react';
import { Language } from '../types';

interface GettingThereSectionProps {
  currentLang: Language;
  onOpenAdvisorModal: () => void;
}

export const GettingThereSection: React.FC<GettingThereSectionProps> = ({
  currentLang,
  onOpenAdvisorModal,
}) => {
  const getLocalized = (en: string, ru?: string, fr?: string, es?: string) => {
    if (currentLang === 'ru' && ru) return ru;
    if (currentLang === 'fr' && fr) return fr;
    if (currentLang === 'es' && es) return es;
    return en;
  };

  const gateways = [
    {
      code: 'JRO',
      nameEn: 'Kilimanjaro International Airport',
      nameRu: 'Международный аэропорт Килиманджаро',
      nameFr: 'Aéroport International du Kilimandjaro',
      nameEs: 'Aeropuerto Internacional del Kilimanjaro',
      tagEn: 'Primary Gateway for Northern Safari Circuit',
      tagRu: 'Главный хаб для Северного сафари и Килиманджаро',
      tagFr: 'Porte d’entrée principale pour le circuit Nord & Kilimandjaro',
      tagEs: 'Puerta principal para el circuito norte y Kilimanjaro',
      airlinesEn: 'KLM, Qatar Airways, Turkish Airlines, Ethiopian, flydubai',
      airlinesRu: 'KLM, Qatar Airways, Turkish Airlines, Ethiopian, flydubai',
      airlinesFr: 'KLM, Qatar Airways, Turkish Airlines, Ethiopian, flydubai',
      airlinesEs: 'KLM, Qatar Airways, Turkish Airlines, Ethiopian, flydubai',
      transferEn: '45 mins VIP private transfer to Arusha luxury lodges',
      transferRu: '45 мин на индивидуальном трансфере до лоджей в Аруше',
      transferFr: '45 min de transfert VIP privé vers les lodges d’Arusha',
      transferEs: '45 min de traslado privado VIP a los lodges de Arusha',
      image: 'https://images.unsplash.com/photo-1650668301026-664448e89f74?auto=format&fit=crop&w=800&q=80',
    },
    {
      code: 'SEU / KOG',
      nameEn: 'Serengeti Bush Airstrips (Seronera & Kogatende)',
      nameRu: 'Аэродромы саванны Серенгети (Серонера и Когатенде)',
      nameFr: 'Pistes de brousse du Serengeti (Seronera & Kogatende)',
      nameEs: 'Pistas de aterrizaje del Serengeti (Seronera y Kogatende)',
      tagEn: 'Direct Bush Fly-In to Tented Sanctuaries',
      tagRu: 'Прямые посадки в саванне рядом с кемпами',
      tagFr: 'Vols directs en brousse vers les camps de tentes',
      tagEs: 'Vuelos directos en avioneta a los campamentos',
      airlinesEn: 'Coastal Aviation, Auric Air, Safari Air Link',
      airlinesRu: 'Coastal Aviation, Auric Air, Safari Air Link',
      airlinesFr: 'Coastal Aviation, Auric Air, Safari Air Link',
      airlinesEs: 'Coastal Aviation, Auric Air, Safari Air Link',
      transferEn: 'Bush runway touchdown directly into open 4x4 game viewer',
      transferRu: 'Посадка на грунтовую полосу прямо к открытому 4x4 сафари-джипу',
      transferFr: 'Atterrissage en pleine savane directement accueilli en 4x4 privé',
      transferEs: 'Aterrizaje en pista de tierra recibido directamente por el 4x4',
      image: 'https://images.unsplash.com/photo-1516426122078-c23e76319801?auto=format&fit=crop&w=800&q=80',
    },
    {
      code: 'ZNZ',
      nameEn: 'Abeid Amani Karume International (Zanzibar)',
      nameRu: 'Международный аэропорт Занзибара (ZNZ)',
      nameFr: 'Aéroport International de Zanzibar (ZNZ)',
      nameEs: 'Aeropuerto Internacional de Zanzíbar (ZNZ)',
      tagEn: 'Indian Ocean Beach Resorts & Coral Islands',
      tagRu: 'Курорты Индийского океана и коралловые атоллы',
      tagFr: 'Resorts de l’Océan Indien & Îles coralliennes',
      tagEs: 'Resorts del Océano Índico e Islas de Coral',
      airlinesEn: 'Emirates, Qatar, Ethiopian, Turkish, Precision Air',
      airlinesRu: 'Emirates, Qatar, Ethiopian, Turkish, Precision Air',
      airlinesFr: 'Emirates, Qatar, Ethiopian, Turkish, Precision Air',
      airlinesEs: 'Emirates, Qatar, Ethiopian, Turkish, Precision Air',
      transferEn: '60 mins coastal highway escort to Kendwa luxury beachfront',
      transferRu: '60 мин по шоссе до белоснежных пляжей Кендвы',
      transferFr: '60 min de route côtière vers les plages de Kendwa et Nungwi',
      transferEs: '60 min de trayecto costero hasta las playas de Kendwa',
      image: 'https://images.unsplash.com/photo-1586861635167-e5223aadc9fe?auto=format&fit=crop&w=800&q=80',
    },
  ];

  const labels = {
    eyebrow: getLocalized('Aviation Gateways & Transport Logistics', 'Логистика и авиация', 'Logistique Aérienne & Accès', 'Logística de Vuelos y Llegadas'),
    heading: getLocalized('Seamless Journey to the Wilderness', 'Как добраться: трансферы и авиаперелеты', 'Rejoindre la Nature Sauvage en Toute Sérénité', 'Llegada Fluida al Corazón de la Sabana'),
    subheading: getLocalized('From international wide-body arrivals to private bush airstrip touchdowns, our flight concierge coordinates every single leg.', 'От международных рейсов до посадок на грунтовые полосы в саванне — мы берем на себя всю логистику вашего маршрута.', 'Des vols internationaux aux atterrissages sur les pistes de brousse privées, notre conciergerie coordonne l’intégralité de vos trajets.', 'Desde vuelos internacionales de larga distancia hasta avionetas en pistas privadas, nuestro equipo coordina cada escala.'),
    flightConcierge: getLocalized('Flight Concierge Assistant', 'Консьерж по авиабилетам', 'Service Conciergerie Vols', 'Asistente de Vuelos'),
    internationalAirlines: getLocalized('Connected Carriers', 'Авиакомпании', 'Compagnies aériennes', 'Aerolíneas'),
    groundTransfer: getLocalized('Ground Transfer', 'Наземный трансфер', 'Transfert terrestre', 'Traslado terrestre'),
  };

  return (
    <section 
      id="getting-there" 
      className="py-20 bg-[#F4F6F4] text-[#1C2826] border-b border-[#E2E8E4] scroll-mt-20"
    >
      <div className="max-w-7xl mx-auto px-8 space-y-12">
        
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 pb-4 border-b border-[#E2E8E4]">
          <div className="space-y-1 max-w-2xl">
            <span className="text-xs font-semibold tracking-widest text-[#4A7061] uppercase flex items-center gap-2">
              <Plane className="w-3.5 h-3.5 text-[#1C4432]" />
              {labels.eyebrow}
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-[#0F2A1D] tracking-tight mt-1">
              {labels.heading}
            </h2>
            <p className="text-sm text-[#3A5248] font-light mt-2">
              {labels.subheading}
            </p>
          </div>

          <button
            onClick={onOpenAdvisorModal}
            className="px-6 py-3.5 bg-[#0F2A1D] hover:bg-[#1C4432] text-[#FAF8F5] font-semibold text-xs uppercase tracking-wider rounded-full transition-all flex items-center gap-2 cursor-pointer shadow-md self-start lg:self-auto"
          >
            <span>{labels.flightConcierge}</span>
            <ArrowRight className="w-4 h-4 text-[#A3B8AD]" />
          </button>
        </div>

        {/* 3 Major Gateways Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {gateways.map((g) => {
            const gName = getLocalized(g.nameEn, g.nameRu, g.nameFr, g.nameEs);
            const gTag = getLocalized(g.tagEn, g.tagRu, g.tagFr, g.tagEs);
            const gAirlines = getLocalized(g.airlinesEn, g.airlinesRu, g.airlinesFr, g.airlinesEs);
            const gTransfer = getLocalized(g.transferEn, g.transferRu, g.transferFr, g.transferEs);

            return (
              <div
                key={g.code}
                className="bg-white rounded-3xl overflow-hidden border border-[#E2E8E4] shadow-xs hover:shadow-lg transition-all duration-500 flex flex-col justify-between group"
              >
                {/* Image Header */}
                <div className="relative h-48 w-full overflow-hidden bg-[#0F2A1D]">
                  <img
                    src={g.image}
                    alt={gName}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                  {/* Airport Code Tag */}
                  <div className="absolute top-4 left-4 bg-black/60 backdrop-blur-md px-3 py-1 rounded-full text-xs font-mono font-bold text-white border border-white/20">
                    {g.code}
                  </div>

                  {/* Tag Overlay */}
                  <div className="absolute bottom-3 left-4 right-4 text-white text-[11px] font-medium text-[#D3DED7]">
                    {gTag}
                  </div>
                </div>

                {/* Body Content */}
                <div className="p-6 space-y-4 flex-1 flex flex-col justify-between">
                  <div className="space-y-2">
                    <h3 className="text-xl font-serif font-bold text-[#0F2A1D] group-hover:text-[#1C4432] transition">
                      {gName}
                    </h3>
                  </div>

                  <div className="space-y-3 pt-3 border-t border-[#E2E8E4] text-xs">
                    <div>
                      <span className="text-[10px] uppercase font-bold text-[#4A7061] block">
                        {labels.internationalAirlines}
                      </span>
                      <span className="text-[#1C2826] font-medium mt-0.5 block">
                        {gAirlines}
                      </span>
                    </div>

                    <div>
                      <span className="text-[10px] uppercase font-bold text-[#4A7061] block">
                        {labels.groundTransfer}
                      </span>
                      <span className="text-[#3A5248] mt-0.5 block">
                        {gTransfer}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
