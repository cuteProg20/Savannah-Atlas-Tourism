import React from 'react';
import { X, ShieldCheck, MapPin, Award, Truck, Users, Clock, ArrowRight, CheckCircle2 } from 'lucide-react';
import { Language } from '../types';
import { BrandLogo } from './BrandLogo';

interface AboutWildernessModalProps {
  isOpen: boolean;
  onClose: () => void;
  currentLang: Language;
  onOpenBooking: () => void;
}

export const AboutWildernessModal: React.FC<AboutWildernessModalProps> = ({
  isOpen,
  onClose,
  currentLang,
  onOpenBooking,
}) => {
  if (!isOpen) return null;

  const isRu = currentLang === 'ru';

  const highlights = [
    {
      icon: <ShieldCheck className="w-5 h-5 text-emerald-600" />,
      title: isRu ? 'TATO & TTB Официальные лицензии' : 'TATO & TTB Fully Licensed',
      desc: isRu
        ? 'Официальный член Танзанийской Ассоциации Туроператоров (TATO) и лицензия Министерства Природных Ресурсов и Туризма Танзании (TTB #TZ-88492).'
        : 'Registered member of Tanzania Association of Tour Operators (TATO) and licensed under the Tanzania Tourist Board (TTB #TZ-88492).',
    },
    {
      icon: <Truck className="w-5 h-5 text-amber-500" />,
      title: isRu ? 'Собственный автопарк Toyota Land Cruiser 4x4' : 'Private Custom 4x4 Land Cruiser Fleet',
      desc: isRu
        ? 'Удлиненные сафари-джипы с подъемной панорамной крышей, персональными креслами у окон, мини-холодильниками с напитками и инверторами 220V для зарядки фототехники.'
        : 'Extended custom 4x4 safari vehicles with pop-up photography roofs, guaranteed window seats, onboard mini-fridges, and 220V charging ports.',
    },
    {
      icon: <Users className="w-5 h-5 text-[#2563EB]" />,
      title: isRu ? 'Русскоязычные гиды-натуралисты' : 'Certified Naturalist Guides Desk',
      desc: isRu
        ? 'Штат сертифицированных гидов со стажем от 8 до 20 лет, свободно владеющих русским и английским языками, знающих тайные тропы миграции и повадки хищников.'
        : 'Elite driver-guides with 10+ years of savanna navigation, accredited wildlife biology training, and multilingual fluency.',
    },
    {
      icon: <Clock className="w-5 h-5 text-purple-600" />,
      title: isRu ? 'Круглосуточный офис в Аруше 24/7' : '24/7 Operations Hub in Arusha & Zanzibar',
      desc: isRu
        ? 'Наша операционная база находится прямо в Аруше и Стоун-Тауне. Мы лично встречаем туристов в аэропортах JRO/ARK/ZNZ и контролируем каждый этап тура.'
        : 'Local on-the-ground support with direct radio dispatch, private airport transfers, and 24/7 emergency response.',
    },
  ];

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-950/70 backdrop-blur-md flex items-center justify-center p-3 sm:p-6 animate-in fade-in">
      <div className="relative w-full max-w-4xl bg-white border border-slate-200 rounded-2xl shadow-2xl overflow-hidden text-slate-900 flex flex-col max-h-[90vh]">
        {/* Header */}
        <div className="px-6 py-5 border-b border-slate-200 bg-white/95 flex items-center justify-between sticky top-0 z-10 backdrop-blur-sm">
          <BrandLogo size="md" variant="navy" />

          <button
            onClick={onClose}
            className="p-2 text-slate-500 hover:text-slate-800 bg-slate-100 hover:bg-slate-200 rounded-full transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content Body */}
        <div className="overflow-y-auto p-6 space-y-6">
          <div className="space-y-3">
            <span className="text-xs font-bold text-[#1E3A8A] uppercase tracking-widest bg-blue-50 px-2.5 py-1 rounded-full border border-blue-200">
              {isRu ? 'О компании TourWeb Wilderness' : 'About TourWeb Wilderness'}
            </span>
            <h3 className="text-2xl sm:text-3xl font-serif font-bold text-[#1E3A8A]">
              {isRu
                ? '18 лет опыта организации экспедиций высшего класса в Танзании'
                : '18 Years of Bespoke Safari Craftsmanship Across East Africa'}
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              {isRu
                ? 'TourWeb — это лицензированный танзанийский туроператор с штаб-квартирой в Аруше. Мы специализируемся на индивидуальных и премиальных групповых сафари по паркам Серенгети, Нгоронгоро, Тарангире, экспедициях на Килиманджаро и отдыхе на океанских виллах Занзибара.'
                : 'TourWeb is a premier destination management company and safari outfitter headquartered in Arusha, Tanzania. We craft unforgettable wildlife journeys across the Serengeti, Ngorongoro Crater, Mount Kilimanjaro summit treks, and bespoke Zanzibar beach escapes.'}
            </p>
          </div>

          {/* 4 Pillars Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {highlights.map((item, idx) => (
              <div
                key={idx}
                className="bg-slate-50 border border-slate-200 rounded-xl p-4.5 space-y-2 hover:border-[#1E3A8A]/30 transition-colors"
              >
                <div className="flex items-center gap-2">
                  <div className="p-2 bg-white rounded-lg border border-slate-200 shadow-xs">
                    {item.icon}
                  </div>
                  <h4 className="font-bold text-sm text-slate-900">{item.title}</h4>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed pl-1">{item.desc}</p>
              </div>
            ))}
          </div>

          {/* Stats Bar */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 bg-slate-50 border border-slate-200 p-4 rounded-xl text-center">
            <div>
              <span className="font-serif font-bold text-2xl text-[#1E3A8A]">18+</span>
              <p className="text-[11px] text-slate-500 uppercase font-medium">{isRu ? 'Лет на рынке' : 'Years Experience'}</p>
            </div>
            <div>
              <span className="font-serif font-bold text-2xl text-[#1E3A8A]">99.4%</span>
              <p className="text-[11px] text-slate-500 uppercase font-medium">{isRu ? 'Успех Килиманджаро' : 'Summit Success'}</p>
            </div>
            <div>
              <span className="font-serif font-bold text-2xl text-[#1E3A8A]">100%</span>
              <p className="text-[11px] text-slate-500 uppercase font-medium">{isRu ? 'Собственные джипы' : 'Private 4x4 Fleet'}</p>
            </div>
            <div>
              <span className="font-serif font-bold text-2xl text-[#1E3A8A]">24/7</span>
              <p className="text-[11px] text-slate-500 uppercase font-medium">{isRu ? 'Поддержка в Аруше' : 'Arusha Dispatch'}</p>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="px-6 py-4 bg-slate-50 border-t border-slate-200 flex items-center justify-between sticky bottom-0 z-10">
          <div className="flex items-center gap-1.5 text-xs text-slate-500">
            <MapPin className="w-3.5 h-3.5 text-[#2563EB]" />
            <span>Arusha HQ, Tanzania • Plot 44 Njiro Road</span>
          </div>

          <button
            onClick={() => {
              onClose();
              onOpenBooking();
            }}
            className="px-5 py-2.5 bg-[#1E3A8A] hover:bg-[#1e40af] text-white font-bold text-xs sm:text-sm rounded-xl transition-all shadow-xs flex items-center gap-2 hover:scale-[1.02]"
          >
            <span>{isRu ? 'Связаться с нами' : 'Contact Safari Specialist'}</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};
