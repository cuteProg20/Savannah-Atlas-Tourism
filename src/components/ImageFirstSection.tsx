import React from 'react';
import { ArrowRight, Compass, Eye, Sparkles } from 'lucide-react';
import { Language } from '../types';

interface ImageFirstSectionProps {
  currentLang?: Language;
  onExplore?: (topic: string) => void;
}

export const ImageFirstSection: React.FC<ImageFirstSectionProps> = ({
  currentLang = 'en',
  onExplore,
}) => {
  const isRu = currentLang === 'ru';

  const cards = [
    {
      id: 'serengeti-migration',
      categoryEn: 'Ecosystem',
      categoryRu: 'Экосистема',
      titleEn: 'Serengeti Migration',
      titleRu: 'Великая миграция Серенгети',
      descriptionEn: 'Over 2 million wildebeest and zebras crossing the northern Mara plains.',
      descriptionRu: 'Более двух миллионов антилоп гну и зебр на равнинах северного Серенгети.',
      image: 'https://images.unsplash.com/photo-1516426122078-c23e76319801?auto=format&fit=crop&w=1200&q=85',
      badgeEn: 'Peak July – Oct',
      badgeRu: 'Пик: Июль – Окт',
    },
    {
      id: 'ngorongoro-caldera',
      categoryEn: 'Sanctuary',
      categoryRu: 'Заповедник',
      titleEn: 'Ngorongoro Caldera',
      titleRu: 'Кратер Нгоронгоро',
      descriptionEn: 'A self-contained prehistoric haven home to the densest lion prides and black rhinos.',
      descriptionRu: 'Уникальная вулканическая кальдера с редкими черными носорогами и прайдами львов.',
      image: 'https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?auto=format&fit=crop&w=1200&q=85',
      badgeEn: 'UNESCO Heritage',
      badgeRu: 'ЮНЕСКО',
    },
    {
      id: 'zanzibar-coast',
      categoryEn: 'Coastline',
      categoryRu: 'Побережье',
      titleEn: 'Zanzibar Spice Coast',
      titleRu: 'Побережье Занзибара',
      descriptionEn: 'Powder-white coral sands, crystal turquoise tides, and private dhow sunsets.',
      descriptionRu: 'Белоснежные коралловые пляжи, лазурный океан и круизы на традиционных доу.',
      image: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1200&q=85',
      badgeEn: 'Bush to Beach',
      badgeRu: 'Сафари + Пляж',
    },
    {
      id: 'kilimanjaro-summit',
      categoryEn: 'Highland',
      categoryRu: 'Вершина',
      titleEn: 'Kilimanjaro Heights',
      titleRu: 'Вершина Килиманджаро',
      descriptionEn: 'The rooftop of Africa rising 5,895m above the savannah cloudline.',
      descriptionRu: 'Крыша Африки на высоте 5895 метров над бескрайними облаками саванны.',
      image: 'https://images.unsplash.com/photo-1650668301026-664448e89f74?auto=format&fit=crop&w=1200&q=85',
      badgeEn: '5,895m Peak',
      badgeRu: '5895 м',
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Image-First Section Layout */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4 bg-white/60 backdrop-blur-xs rounded-3xl border border-[#E0D8CA]">
        {cards.map((card) => (
          <div 
            key={card.id}
            onClick={() => onExplore?.(card.titleEn)}
            className="relative h-96 rounded-2xl overflow-hidden group cursor-pointer shadow-md hover:shadow-xl transition-all duration-500"
          >
            <img 
              src={card.image} 
              alt={isRu ? card.titleRu : card.titleEn} 
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
              referrerPolicy="no-referrer"
            />
            
            {/* Top Floating Badge */}
            <div className="absolute top-4 right-4 z-10">
              <span className="bg-black/50 backdrop-blur-md border border-white/20 text-white text-[11px] font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                {isRu ? card.badgeRu : card.badgeEn}
              </span>
            </div>

            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent p-6 flex flex-col justify-end">
              <span className="text-amber-400 font-serif text-sm tracking-widest uppercase">
                {isRu ? card.categoryRu : card.categoryEn}
              </span>
              <h3 className="text-white text-2xl font-serif font-bold">
                {isRu ? card.titleRu : card.titleEn}
              </h3>
              <p className="text-slate-200 text-xs mt-1 line-clamp-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                {isRu ? card.descriptionRu : card.descriptionEn}
              </p>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
};
