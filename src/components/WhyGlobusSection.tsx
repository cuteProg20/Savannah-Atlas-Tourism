import React from 'react';
import { 
  CheckCircle2, 
  Luggage, 
  Users, 
  Compass, 
  Sparkles, 
  Layers,
  ShieldCheck,
  Languages,
  Mountain,
  Award
} from 'lucide-react';
import { Language } from '../types';
import { TRANSLATIONS } from '../data/translations';

interface WhyGlobusSectionProps {
  currentLang: Language;
  onExploreStyles: () => void;
}

export const WhyGlobusSection: React.FC<WhyGlobusSectionProps> = ({
  currentLang,
  onExploreStyles,
}) => {
  const t = TRANSLATIONS[currentLang] || TRANSLATIONS.en;

  const pillars = [
    {
      id: 'jeep',
      title: t.usp1Title,
      desc: t.usp1Desc,
      icon: CheckCircle2,
      badge: currentLang === 'ru' ? 'Гарантия обзора' : 'Guaranteed Window Seat',
      image: 'https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?auto=format&fit=crop&w=600&q=80',
    },
    {
      id: 'camps',
      title: t.usp2Title,
      desc: t.usp2Desc,
      icon: Luggage,
      badge: currentLang === 'ru' ? 'Премиум лоджи' : 'Luxury Tented Camps',
      image: 'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?auto=format&fit=crop&w=600&q=80',
    },
    {
      id: 'guides',
      title: t.usp3Title,
      desc: t.usp3Desc,
      icon: Languages,
      badge: currentLang === 'ru' ? 'Русские гиды' : 'Multilingual Naturalists',
      image: 'https://images.unsplash.com/photo-1516426122078-c23e76319801?auto=format&fit=crop&w=600&q=80',
    },
    {
      id: 'kili-safety',
      title: t.usp4Title,
      desc: t.usp4Desc,
      icon: Mountain,
      badge: currentLang === 'ru' ? '98.4% Вершина' : 'KPAP Safety First',
      image: 'https://images.unsplash.com/photo-1589553416260-f586c8f1514f?auto=format&fit=crop&w=600&q=80',
    },
    {
      id: 'tribal',
      title: t.usp5Title,
      desc: t.usp5Desc,
      icon: Sparkles,
      badge: currentLang === 'ru' ? 'Хадзабе и Масаи' : 'Ethical Tribal Immersion',
      image: 'https://images.unsplash.com/photo-1509099836639-18ba1795216d?auto=format&fit=crop&w=600&q=80',
    },
    {
      id: 'bush-beach',
      title: t.usp6Title,
      desc: t.usp6Desc,
      icon: Layers,
      badge: currentLang === 'ru' ? 'Bush-to-Beach' : 'Seamless Bush-to-Beach',
      image: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=600&q=80',
    },
  ];

  return (
    <section id="why-globus" className="py-20 bg-[#FAFAF9] text-slate-900 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 bg-blue-50 text-[#1E3A8A] text-xs font-bold uppercase tracking-wider px-3.5 py-1.5 rounded-full border border-blue-200">
            <ShieldCheck className="w-4 h-4 text-[#2563EB]" />
            <span>{t.navWhyGlobus}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-black text-[#1E3A8A] tracking-tight">
            {t.whyTitle}
          </h2>
          <p className="text-base sm:text-lg text-slate-600 font-normal">
            {t.whySubtitle}
          </p>
        </div>

        {/* 6 Signature Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {pillars.map((pillar) => {
            const Icon = pillar.icon;
            return (
              <div
                key={pillar.id}
                className="bg-white rounded-2xl border border-slate-200 shadow-xs hover:shadow-lg hover:border-blue-400 transition-all duration-300 overflow-hidden flex flex-col group hover:-translate-y-1.5"
              >
                {/* Photo Header */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={pillar.image}
                    alt={pillar.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/30 to-transparent" />
                  
                  <div className="absolute top-3 right-3 bg-white/95 backdrop-blur-xs text-[#1E3A8A] text-[10px] font-black uppercase px-2.5 py-1 rounded-full border border-blue-100 shadow-xs">
                    {pillar.badge}
                  </div>

                  <div className="absolute bottom-3 left-3 flex items-center gap-2 text-white">
                    <div className="w-8 h-8 rounded-xl bg-[#1E3A8A] text-white flex items-center justify-center shadow-md font-bold">
                      <Icon className="w-4 h-4" />
                    </div>
                    <span className="font-serif font-black text-base text-white">
                      {pillar.title}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {pillar.desc}
                  </p>

                  <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs text-[#1E3A8A] font-semibold">
                    <span>{currentLang === 'ru' ? 'Премиум стандарт TourWeb' : 'TourWeb Tanzania Signature'}</span>
                    <CheckCircle2 className="w-4 h-4 text-emerald-600" />
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
