import React from 'react';
import { Sparkles, ArrowRight, ShieldCheck, Check, Compass, Flame } from 'lucide-react';
import { Language } from '../types';
import { TRANSLATIONS } from '../data/translations';

interface PromotionsBannerProps {
  currentLang: Language;
  onExploreDeals: () => void;
}

export const PromotionsBanner: React.FC<PromotionsBannerProps> = ({
  currentLang,
  onExploreDeals,
}) => {
  const t = TRANSLATIONS[currentLang] || TRANSLATIONS.en;

  return (
    <section id="deals" className="py-12 bg-gradient-to-r from-[#1E3A8A] via-[#172554] to-[#1E3A8A] text-white relative overflow-hidden border-y border-blue-800">
      {/* Decorative Background Lighting */}
      <div className="absolute -right-20 -top-20 w-96 h-96 bg-amber-500/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -left-20 -bottom-20 w-96 h-96 bg-blue-400/20 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Main Copy */}
          <div className="lg:col-span-8 space-y-4">
            <div className="inline-flex items-center gap-2 bg-amber-500/20 border border-amber-400/40 text-amber-300 text-xs font-extrabold uppercase px-3 py-1 rounded-full tracking-wider">
              <Sparkles className="w-3.5 h-3.5" />
              <span>{t.promoEscapesBadge}</span>
            </div>

            <h2 className="text-2xl sm:text-4xl font-serif font-black text-white tracking-tight leading-tight">
              {t.promoSmarterTitle}
            </h2>

            <p className="text-base sm:text-lg text-amber-200/90 font-medium">
              {t.promoSmarterSubtitle}
            </p>

            <div className="bg-[#0F172A]/70 border border-blue-400/30 rounded-2xl p-5 backdrop-blur-xs space-y-2">
              <h3 className="text-sm font-bold text-amber-400 uppercase tracking-wide flex items-center gap-2">
                <Flame className="w-4 h-4 text-amber-400" />
                <span>{t.promoUpgradeTitle}</span>
              </h3>
              <p className="text-xs sm:text-sm text-slate-200 leading-relaxed">
                {t.promoUpgradeDesc}
              </p>
            </div>
          </div>

          {/* Quick CTA Card */}
          <div className="lg:col-span-4 bg-[#0F172A]/90 border border-blue-400/40 rounded-2xl p-6 text-center shadow-xl space-y-4">
            <div className="w-12 h-12 bg-amber-500/20 text-amber-400 rounded-2xl flex items-center justify-center mx-auto">
              <Compass className="w-6 h-6" />
            </div>

            <div>
              <div className="text-xs uppercase tracking-wider text-amber-400 font-bold">
                {currentLang === 'ru' ? 'Спецпредложение 2026/2027' : 'Special 2026/2027 Season'}
              </div>
              <div className="text-xl font-serif font-black text-white mt-1">
                {currentLang === 'ru' ? 'Скидка до $600 на джип-сафари' : 'Save up to $600 on Private 4x4'}
              </div>
              <p className="text-xs text-slate-300 mt-1">
                {currentLang === 'ru'
                  ? 'Бесплатный апгрейд на русскоязычного гида и сафари на воздушном шаре в Серенгети при бронировании от 4 человек.'
                  : 'Complimentary Serengeti hot air balloon flight credit and Russian/multilingual guide on groups of 4+.'}
              </p>
            </div>

            <button
              onClick={onExploreDeals}
              id="deals-cta-btn"
              className="w-full py-3 bg-gradient-to-r from-amber-500 via-amber-400 to-amber-500 hover:from-amber-400 hover:to-amber-300 text-slate-950 font-black text-sm rounded-xl shadow-lg transition-all hover:scale-[1.02] flex items-center justify-center gap-2"
            >
              <span>{t.promoClaimBtn}</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
