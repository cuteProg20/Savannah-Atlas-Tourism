import React, { useState } from 'react';
import { 
  ShieldCheck, 
  Leaf, 
  Trees, 
  HeartHandshake, 
  Award, 
  ArrowRight, 
  Sparkles, 
  CheckCircle2, 
  BatteryCharging, 
  GraduationCap, 
  Dog, 
  FileText, 
  Download 
} from 'lucide-react';
import { Language } from '../types';

interface ValuePropositionImpactProps {
  currentLang: Language;
  onOpenImpactModal?: () => void;
  onOpenBooking: () => void;
}

export const ValuePropositionImpact: React.FC<ValuePropositionImpactProps> = ({
  currentLang,
  onOpenImpactModal,
  onOpenBooking,
}) => {
  const isRu = currentLang === 'ru';
  const [activeReportTab, setActiveReportTab] = useState<number>(0);

  const metrics = [
    {
      value: '100%',
      labelEn: 'Carbon-Neutral Safari Fleets',
      labelRu: 'Углеродно-нейтральный автопарк',
      subEn: 'Electric Land Cruiser Conversions & Offsets',
      subRu: 'Электро-джипы и сертифицированная компенсация',
      icon: BatteryCharging,
    },
    {
      value: '350,000+',
      labelEn: 'Protected Concession Acres',
      labelRu: 'Акров охраняемых коридоров',
      subEn: 'Securing migration corridors with TANAPA',
      subRu: 'Защита путей миграции совместно с TANAPA',
      icon: Trees,
    },
    {
      value: '$1.85M',
      labelEn: 'Community & Ranger Funding',
      labelRu: 'Финансирование общин и рейнджеров',
      subEn: 'Annual direct investment in schools & rangers',
      subRu: 'Ежегодные инвестиции в школы и охрану',
      icon: HeartHandshake,
    },
    {
      value: '4,000+',
      labelEn: 'Serengeti Lions Monitored',
      labelRu: 'Диких львов под мониторингом',
      subEn: 'GPS collar tracking with KopeLion Initiative',
      subRu: 'GPS-трекинг прайдов совместно с KopeLion',
      icon: ShieldCheck,
    },
  ];

  const impactPillars = [
    {
      id: 'rangers-k9',
      titleEn: 'Anti-Poaching K9 Unit & Ranger Patrols',
      titleRu: 'Служебные собаки K9 и рейнджерские патрули',
      icon: Dog,
      descEn: 'We directly finance 42 anti-poaching rangers equipped with night-vision optics and bloodhound detection canine units patrolling 350,000 acres 24 hours a day.',
      descRu: 'Мы полностью финансируем 42 рейнджера с приборами ночного видения и поисковыми собаками K9, патрулирующими 350 000 акров саванны 24 часа в сутки.',
      statEn: '0 Snares Found in 2025 Concession Zone',
      statRu: '0 браконьерских ловушек обнаружено в 2025 году',
    },
    {
      id: 'community-education',
      titleEn: 'Maasai Youth & Girl Child Education',
      titleRu: 'Образование молодежи масаи и женские школы',
      icon: GraduationCap,
      descEn: 'Every safari booking directly funds local primary schools in Endulen and Ololosokwan, providing full university scholarships for young female conservation biologists.',
      descRu: 'Каждое бронирование финансирует школы в поселках Эндулен и Ололосокван, а также стипендии в университетах для девушек-биологов.',
      statEn: '1,420 Students Supported Annually',
      statRu: '1420 учеников получают поддержку ежегодно',
    },
    {
      id: 'clean-energy',
      titleEn: '100% Solar Microgrids & Zero Single-Use Plastic',
      titleRu: '100% солнечная энергия и отказ от пластика',
      icon: Leaf,
      descEn: 'All partner lodges operate solely on lithium-battery solar microgrids. Reverse-osmosis bottling plants eliminate over 180,000 single-use plastic water bottles each season.',
      descRu: 'Все лоджи работают исключительно на солнечных батареях. Собственные станции очистки воды исключают использование 180 000 пластиковых бутылок в год.',
      statEn: '180k+ Single-Use Bottles Eliminated Yearly',
      statRu: 'Более 180 000 бутылок спасено от утилизации',
    },
  ];

  return (
    <section 
      id="impact" 
      className="py-24 bg-[#14231A] text-white border-b border-emerald-950 relative overflow-hidden scroll-mt-24"
    >
      {/* Background imagery */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?auto=format&fit=crop&w=2200&q=85"
          alt="Conservation landscape"
          className="w-full h-full object-cover opacity-15"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#14231A] via-[#14231A]/90 to-[#14231A]/85" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-16">
        
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 pb-6 border-b border-emerald-900/60">
          <div className="space-y-2 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-900/70 border border-emerald-500/40 text-emerald-300 text-xs font-bold uppercase tracking-widest">
              <Leaf className="w-3.5 h-3.5 text-emerald-400" />
              <span>{isRu ? 'Охрана природы и наследие' : 'Conservation & Regenerative Impact'}</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-black text-white tracking-tight">
              {isRu ? 'Путешествия, спасающие дикую природу' : 'Travel That Leaves Our World a Better Place'}
            </h2>
            <p className="text-sm sm:text-base text-[#C5D0C8] font-light">
              {isRu 
                ? '5% от каждого бронирования направляется в фонд защиты биоразнообразия Серенгети и поддержку коренных общин масаи.'
                : '5% of every safari booking directly funds anti-poaching ranger telemetry, predator GPS tracking, and indigenous education in Tanzania.'}
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            {onOpenImpactModal && (
              <button
                onClick={onOpenImpactModal}
                className="px-5 py-3 bg-white/10 hover:bg-white/20 text-white font-bold text-xs uppercase tracking-wider rounded-xl border border-white/20 backdrop-blur-md transition-all flex items-center gap-2 cursor-pointer"
              >
                <FileText className="w-4 h-4 text-amber-400" />
                <span>{isRu ? 'Отчет об охране 2026' : 'View Impact Report'}</span>
              </button>
            )}

            <button
              onClick={onOpenBooking}
              className="px-6 py-3 bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-black text-xs uppercase tracking-wider rounded-xl shadow-lg shadow-emerald-500/20 transition-all flex items-center gap-2 cursor-pointer"
            >
              <span>{isRu ? 'Поддержать миссию' : 'Book Regenerative Safari'}</span>
              <ArrowRight className="w-4 h-4 text-slate-950" />
            </button>
          </div>
        </div>

        {/* 4 Large Conservation Metric Blocks */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {metrics.map((m, idx) => {
            const Icon = m.icon;
            return (
              <div
                key={idx}
                className="bg-[#1C2E22]/90 border border-emerald-800/60 rounded-3xl p-6 backdrop-blur-md hover:border-emerald-500/60 transition-all duration-300 space-y-3 shadow-md"
              >
                <div className="w-10 h-10 rounded-2xl bg-emerald-900/80 border border-emerald-500/40 flex items-center justify-center text-emerald-400">
                  <Icon className="w-5 h-5" />
                </div>
                
                <div className="text-4xl sm:text-5xl font-serif font-black text-amber-300 tracking-tight">
                  {m.value}
                </div>

                <div className="space-y-1">
                  <h4 className="text-sm font-bold text-white leading-snug">
                    {isRu ? m.labelRu : m.labelEn}
                  </h4>
                  <p className="text-xs text-[#9EB2A4] font-light">
                    {isRu ? m.subRu : m.subEn}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* 3 Detailed Impact Pillars */}
        <div className="space-y-6 pt-4">
          <div className="text-center space-y-1">
            <span className="text-xs font-bold uppercase tracking-widest text-emerald-400">
              {isRu ? 'Наши ключевые инициативы' : 'Core Sustainability Pillars'}
            </span>
            <h3 className="text-2xl sm:text-3xl font-serif font-bold text-white">
              {isRu ? 'Реальные дела, подтвержденные аудитом' : 'Measurable Conservation Audits'}
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {impactPillars.map((p) => {
              const Icon = p.icon;
              return (
                <div
                  key={p.id}
                  className="bg-[#18281D] border border-emerald-900/80 rounded-3xl p-7 flex flex-col justify-between space-y-5 hover:bg-[#1D3224] transition-colors"
                >
                  <div className="space-y-3">
                    <div className="w-12 h-12 rounded-2xl bg-amber-400/15 border border-amber-400/30 flex items-center justify-center text-amber-400">
                      <Icon className="w-6 h-6" />
                    </div>
                    <h4 className="text-lg font-serif font-bold text-white">
                      {isRu ? p.titleRu : p.titleEn}
                    </h4>
                    <p className="text-xs sm:text-sm text-[#B0C3B7] font-light leading-relaxed">
                      {isRu ? p.descRu : p.descEn}
                    </p>
                  </div>

                  <div className="p-3 bg-black/40 rounded-xl border border-emerald-900/60 flex items-center gap-2 text-xs text-emerald-300 font-medium">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>{isRu ? p.statRu : p.statEn}</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
};
