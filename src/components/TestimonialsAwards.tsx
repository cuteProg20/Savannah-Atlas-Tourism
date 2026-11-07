import React, { useState } from 'react';
import { 
  Award, 
  Trophy, 
  Star, 
  CheckCircle2, 
  Quote, 
  ShieldCheck, 
  Compass, 
  Heart, 
  Leaf,
  Users
} from 'lucide-react';
import { Review, Language } from '../types';

interface TestimonialsAwardsProps {
  reviews: Review[];
  currentLang: Language;
}

export const TestimonialsAwards: React.FC<TestimonialsAwardsProps> = ({
  reviews,
  currentLang,
}) => {
  const isRu = currentLang === 'ru';
  const [activeCategoryFilter, setActiveCategoryFilter] = useState<string>('all');

  const industryAccolades = [
    {
      year: '2025/2026',
      titleEn: 'Condé Nast Traveller Top Safari Specialist',
      titleRu: 'Condé Nast Traveller: Лучший специалист по сафари',
      categoryEn: 'Global Safari & Expedition Excellence',
      categoryRu: 'Мировое признание в сфере экспедиций',
      icon: Trophy,
    },
    {
      year: '2025',
      titleEn: 'WTM Responsible Tourism Gold Winner',
      titleRu: 'Золотая медаль WTM за ответственный туризм',
      categoryEn: 'Community Empowerment & Wildlife Protection',
      categoryRu: 'Поддержка общин и сохранение саванны',
      icon: Leaf,
    },
    {
      year: '2025',
      titleEn: 'Travel + Leisure World’s Best Operator',
      titleRu: 'Travel + Leisure: В топе лучших туроператоров мира',
      categoryEn: 'Top 1% Luxury Conservation Travel',
      categoryRu: 'Топ-1% в сегменте осознанной роскоши',
      icon: Star,
    },
    {
      year: '2025/2026',
      titleEn: 'KPAP Certified Mountain Ethical Partner',
      titleRu: 'Сертификат этичного альпинизма KPAP',
      categoryEn: '100% Fair Wages & Mountain Porter Safety',
      categoryRu: '100% справедливая оплата портеров',
      icon: ShieldCheck,
    },
  ];

  return (
    <section id="reviews-and-awards" className="py-24 bg-[#F5F2EB] text-[#1C1917] border-t border-[#E6E1D8] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Industry Awards Showcase */}
        <div className="mb-20">
          <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
            <div className="inline-flex items-center gap-2 bg-[#1B3B2B]/10 text-[#1B3B2B] text-xs font-bold uppercase tracking-widest px-3.5 py-1.5 rounded-full border border-[#1B3B2B]/20">
              <Trophy className="w-3.5 h-3.5 text-[#D97706]" />
              <span>{isRu ? 'Официальное признание и награды' : 'Social Proof & Global Accolades'}</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-[#1C1917]">
              {isRu ? 'Мировые награды за устойчивый туризм и качество' : 'Honored by Global Tourism & Conservation Authorities'}
            </h2>

            <p className="text-sm text-slate-600 font-light max-w-2xl mx-auto">
              {isRu
                ? 'Наши стандарты безопасности, защиты дикой природы и сервиса ежегодно отмечаются ведущими международными премиями.'
                : 'Recognized for relentless conservation stewardship, fair-wage porter ethics, and peerless luxury expedition standards.'}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {industryAccolades.map((award, i) => {
              const Icon = award.icon;
              return (
                <div
                  key={i}
                  className="bg-white border border-[#E6E1D8] rounded-2xl p-6 text-center flex flex-col items-center justify-between space-y-4 hover:border-[#1B3B2B]/40 transition-all shadow-xs hover:shadow-md group"
                >
                  <div className="w-12 h-12 rounded-2xl bg-[#F5F2EB] text-[#1B3B2B] flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Icon className="w-6 h-6 text-[#1B3B2B]" />
                  </div>

                  <div className="space-y-1">
                    <span className="text-[11px] font-mono text-[#D97706] font-extrabold uppercase tracking-wider block">
                      {award.year}
                    </span>
                    <h3 className="font-serif font-bold text-sm text-[#1C1917]">
                      {isRu ? award.titleRu : award.titleEn}
                    </h3>
                    <p className="text-[11px] text-slate-500 line-clamp-2">
                      {isRu ? award.categoryRu : award.categoryEn}
                    </p>
                  </div>

                  <div className="w-full pt-3 border-t border-[#F5F2EB] text-[10px] text-slate-400 font-bold uppercase tracking-wider">
                    Verified Award
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Guest Reviews & Traveler Stories */}
        <div>
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-10 gap-4 border-b border-[#E6E1D8] pb-6">
            <div>
              <div className="text-xs font-bold text-[#D97706] uppercase tracking-wider">
                {isRu ? 'Отзывы путешественников' : 'Guest Reviews & Field Journals'}
              </div>
              <h3 className="text-2xl sm:text-3xl font-serif font-bold text-[#1C1917] mt-1">
                {isRu ? 'Впечатления гостей после экспедиций TourWeb' : 'Real Stories from the African Savanna & Summits'}
              </h3>
            </div>

            <div className="flex items-center gap-3 bg-white border border-[#E6E1D8] px-4 py-2 rounded-xl shadow-xs">
              <div className="flex text-amber-500 text-sm">
                {'★★★★★'.split('').map((s, i) => (
                  <span key={i}>{s}</span>
                ))}
              </div>
              <span className="text-xs font-bold text-[#1C1917]">4.98 / 5.0</span>
              <span className="text-[11px] text-slate-500">
                ({isRu ? 'Более 1,480+ отзывов' : '1,480+ Verified Reviews'})
              </span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {reviews.map((rev) => (
              <div
                key={rev.id}
                className="bg-white border border-[#E6E1D8] rounded-2xl p-6 flex flex-col justify-between space-y-4 hover:border-[#1B3B2B]/40 transition-all shadow-xs hover:shadow-md"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-1 text-amber-500 text-xs">
                      {[...Array(rev.rating)].map((_, idx) => (
                        <span key={idx}>★</span>
                      ))}
                    </div>
                    <span className="text-[10px] text-slate-400 font-mono">
                      {rev.date}
                    </span>
                  </div>

                  <Quote className="w-6 h-6 text-emerald-200" />

                  <p className="text-xs sm:text-sm text-slate-700 leading-relaxed italic font-light">
                    "{isRu ? rev.ruComment : rev.comment}"
                  </p>
                </div>

                <div className="pt-4 border-t border-[#F5F2EB] flex items-center justify-between text-xs">
                  <div>
                    <span className="font-bold text-[#1C1917] block">
                      {rev.author}
                    </span>
                    <span className="text-[11px] text-[#1B3B2B] font-medium">
                      {rev.country}
                    </span>
                  </div>
                  <span className="text-[10px] bg-[#FAF9F5] text-slate-700 border border-[#E6E1D8] px-2 py-1 rounded max-w-[140px] truncate font-medium">
                    {rev.tourTitle}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
