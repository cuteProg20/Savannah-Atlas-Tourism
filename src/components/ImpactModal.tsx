import React from 'react';
import { X, ShieldCheck, HeartHandshake, Trees, Sun, Users, ArrowRight } from 'lucide-react';
import { Language } from '../types';

interface ImpactModalProps {
  isOpen: boolean;
  onClose: () => void;
  currentLang: Language;
  onOpenBooking: () => void;
}

export const ImpactModal: React.FC<ImpactModalProps> = ({
  isOpen,
  onClose,
  currentLang,
  onOpenBooking,
}) => {
  if (!isOpen) return null;

  const getLocalized = (en: string, ru?: string, fr?: string, es?: string) => {
    if (currentLang === 'ru' && ru) return ru;
    if (currentLang === 'fr' && fr) return fr;
    if (currentLang === 'es' && es) return es;
    return en;
  };

  const initiatives = [
    {
      icon: <ShieldCheck className="w-6 h-6 text-[#1C4432]" />,
      title: getLocalized(
        'KPAP — Certified Ethical Porter Welfare',
        'KPAP — Партнер по защите прав портеров Килиманджаро',
        'KPAP — Éthique & Bien-être des porteurs du Kilimandjaro',
        'KPAP — Bienestar ético certificado de porteadores del Kilimanjaro'
      ),
      desc: getLocalized(
        'As an official Kilimanjaro Porters Assistance Project partner, we guarantee fair wages, high-altitude cold weather gear, ethical tipping, and mandatory daily medical check-ups.',
        'Мы строго соблюдаем стандарты Kilimanjaro Porters Assistance Project: справедливая оплата труда, качественное снаряжение, горячее 3-разовое питание и строгий лимит веса рюкзаков (до 20 кг).',
        'Partenaire officiel du Kilimanjaro Porters Assistance Project, nous garantissons des salaires équitables, des équipements thermiques certifiés et des bilans de santé quotidiens.',
        'Como socio del Kilimanjaro Porters Assistance Project, garantizamos salarios justos, equipamiento térmico de montaña y chequeos médicos diarios obligatorios.'
      ),
      stat: '100% KPAP Compliant',
    },
    {
      icon: <Trees className="w-6 h-6 text-[#1C4432]" />,
      title: getLocalized(
        'Serengeti De-Snaring & Anti-Poaching Patrols',
        'Патрули против браконьерства в Серенгети',
        'Patrouilles anti-braconnage & démuselement au Serengeti',
        'Patrullas contra la caza furtiva y retiro de trampas en Serengeti'
      ),
      desc: getLocalized(
        'A fixed conservation levy from every safari booking directly funds anti-poaching ranger patrols, snare-removal teams, and black rhino sanctuary monitoring in Moru Kopjes.',
        'Часть средств с каждой safari-путевки направляется в фонд защиты дикой природы FZS и TANAPA для снятия браконьерских петель и сохранения популяции носорогов и слонов.',
        'Une contribution fixe issue de chaque séjour finance directement les rangers anti-braconnage et la protection des rhinocéros noirs des Moru Kopjes.',
        'Un porcentaje fijo de cada safari financia directamente a los guardabosques contra la caza furtiva y la protección de los rinocerontes negros en Moru Kopjes.'
      ),
      stat: '1,200+ Snares Removed',
    },
    {
      icon: <Users className="w-6 h-6 text-[#1C4432]" />,
      title: getLocalized(
        'Maasai Boma Education & Solar Water Wells',
        'Поддержка общин Масаи и чистая вода',
        'Écoles Maasai & Puits solaires en zone rurale',
        'Educación comunitaria Maasai y pozos de agua solar'
      ),
      desc: getLocalized(
        'Direct community investment funding solar-powered boreholes for safe drinking water in Ngorongoro and providing educational supplies to rural Maasai primary schools.',
        'Строительство артезианских скважин с солнечными насосами в районе Нгоронгоро и поставка учебных материалов для начальных школ в деревнях Энгаре Серо (Натрон).',
        'Investissement direct pour le forage de puits solaires fournissant de l’eau potable au Ngorongoro et le soutien matériel aux écoles primaires Maasai.',
        'Financiación directa de pozos solares con agua potable segura en Ngorongoro y material educativo para escuelas primarias rurales Maasai.'
      ),
      stat: '8 Village Wells Built',
    },
    {
      icon: <Sun className="w-6 h-6 text-[#1C4432]" />,
      title: getLocalized(
        'Solar-Assisted 4x4 Fleet & Zero Single-Use Plastic',
        'Эко-сафари и солнечные Land Cruiser',
        'Flotte 4x4 à assistance solaire & Zéro plastique à usage unique',
        'Flota 4x4 con energía solar y Cero plásticos de un solo uso'
      ),
      desc: getLocalized(
        '100% elimination of single-use plastic bottles on all expeditions, rooftop solar charging arrays for photography equipment, and carbon offset tree planting in Arusha.',
        'Отказ от одноразового пластика (многоразовые металлические термосы каждому гостю) и интеграция солнечных батарей на крышах джипов для зарядки камер и дронов.',
        'Élimination totale des bouteilles en plastique à usage unique, panneaux solaires de toit pour recharger appareils photo et drones, et reforestation à Arusha.',
        'Eliminación del 100% de botellas de plástico, paneles solares de techo para recarga de cámaras y plantación de árboles para neutralizar la huella de carbono.'
      ),
      stat: 'Zero Plastic Expeditions',
    },
  ];

  const labels = {
    title: getLocalized('Wilderness Impact & Conservation', 'Вклад и Ответственный Туризм', 'Impact & Préservation de la Nature', 'Impacto y Conservación de la Naturaleza'),
    subtitle: getLocalized('Preserving Tanzania’s heritage, wildlife, and local communities', 'Сохранение дикой природы Танзании и поддержка местных общин', 'Protéger la faune de Tanzanie et soutenir les communautés locales', 'Preservando el patrimonio natural y las comunidades de Tanzania'),
    badge1Percent: getLocalized('1% for the wild', '1% для дикой природы', '1% pour la nature', '1% para la vida salvaje'),
    ctaDesc: getLocalized(
      'Every Savanna Atlas journey is a direct act of conservation stewardship.',
      'Каждое путешествие с Savanna Atlas — это прямой вклад в защиту природы.',
      'Chaque voyage avec Savanna Atlas est un acte direct d’engagement écologique.',
      'Cada expedición con Savanna Atlas es un compromiso directo con la conservación.'
    ),
    ctaBtn: getLocalized('Join a Conservation Safari', 'Забронировать эко-сафари', 'Rejoindre une expédition engagée', 'Unirse a un safari de conservación'),
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/70 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 animate-fade-in">
      <div className="relative w-full max-w-4xl bg-[#F4F6F4] text-[#1C2826] border border-[#E2E8E4] rounded-3xl shadow-2xl overflow-hidden flex flex-col max-h-[90vh]">
        {/* Modal Header */}
        <div className="px-6 py-5 border-b border-[#E2E8E4] bg-white flex items-center justify-between sticky top-0 z-10">
          <div className="flex items-center gap-3">
            <div className="p-2.5 bg-[#E2E8E4] text-[#0F2A1D] rounded-2xl">
              <HeartHandshake className="w-5 h-5 text-[#1C4432]" />
            </div>
            <div>
              <h2 className="text-xl sm:text-2xl font-serif font-bold text-[#0F2A1D]">
                {labels.title}
              </h2>
              <p className="text-xs text-[#3A5248]">
                {labels.subtitle}
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="w-10 h-10 text-[#2D4A3E] hover:text-[#0F2A1D] bg-[#E2E8E4] hover:bg-[#D3DED7] rounded-full transition-colors flex items-center justify-center cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8 space-y-6 overflow-y-auto">
          {/* Top Banner */}
          <div className="bg-[#0F2A1D] text-[#FAF8F5] p-6 sm:p-8 rounded-3xl flex flex-col md:flex-row items-center justify-between gap-6 shadow-md">
            <div className="space-y-2 max-w-xl">
              <span className="text-[11px] font-bold tracking-widest uppercase text-[#A3B8AD]">
                TRAVEL THAT STAYS
              </span>
              <h3 className="text-2xl font-serif font-bold text-[#FAF8F5]">
                Leave the landscape stronger than we found it.
              </h3>
              <p className="text-xs sm:text-sm text-[#D3DED7] font-light">
                {labels.ctaDesc}
              </p>
            </div>
            <div className="w-24 h-24 rounded-full bg-[#1C4432] border border-[#4A7061] text-[#FAF8F5] flex items-center justify-center text-center text-xs font-bold uppercase tracking-wider p-2 shrink-0 shadow-inner">
              {labels.badge1Percent}
            </div>
          </div>

          {/* Grid of 4 Initiatives */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {initiatives.map((item, idx) => (
              <div
                key={idx}
                className="bg-white p-5 rounded-2xl border border-[#E2E8E4] shadow-xs space-y-2.5 hover:border-[#4A7061] transition"
              >
                <div className="flex items-center justify-between">
                  <div className="p-2 bg-[#F4F6F4] rounded-xl">
                    {item.icon}
                  </div>
                  <span className="text-[10px] font-mono font-bold px-2.5 py-1 bg-[#D3DED7] text-[#0F2A1D] rounded-full">
                    {item.stat}
                  </span>
                </div>
                <h4 className="text-sm font-bold text-[#0F2A1D]">
                  {item.title}
                </h4>
                <p className="text-xs text-[#3A5248] leading-relaxed font-light">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Modal Footer */}
        <div className="px-6 py-4 bg-white border-t border-[#E2E8E4] flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-xs text-[#4A7061]">
            Savanna Atlas Conservation Ledger · TTB & TANAPA Verified
          </div>
          <button
            onClick={onOpenBooking}
            className="w-full sm:w-auto px-6 py-3 bg-[#0F2A1D] hover:bg-[#1C4432] text-[#FAF8F5] text-xs font-medium uppercase tracking-wider rounded-full transition flex items-center justify-center gap-2 cursor-pointer shadow-md"
          >
            <span>{labels.ctaBtn}</span>
            <ArrowRight className="w-4 h-4 text-[#A3B8AD]" />
          </button>
        </div>
      </div>
    </div>
  );
};
