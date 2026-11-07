import React, { useState, useEffect } from 'react';
import { ArrowRight, Calendar, MessageSquare } from 'lucide-react';
import { Language } from '../types';

interface StickySubNavProps {
  currentLang?: Language;
  onOpenBooking?: () => void;
  onOpenInquiry?: () => void;
}

interface NavSectionItem {
  id: string;
  labelEn: string;
  labelRu: string;
  anchor: string;
}

export const StickySubNav: React.FC<StickySubNavProps> = ({
  currentLang = 'en',
  onOpenBooking,
  onOpenInquiry,
}) => {
  const isRu = currentLang === 'ru';
  const [activeSection, setActiveSection] = useState<string>('introduction');

  const sections: NavSectionItem[] = [
    { id: 'introduction', labelEn: 'Introduction', labelRu: 'Введение', anchor: '#introduction' },
    { id: 'experiences', labelEn: 'Experiences', labelRu: 'Активности', anchor: '#experiences' },
    { id: 'accommodation', labelEn: 'Accommodation', labelRu: 'Размещение', anchor: '#accommodation' },
    { id: 'impact', labelEn: 'Impact & Conservation', labelRu: 'Эко-вклад', anchor: '#impact' },
    { id: 'gallery', labelEn: 'Gallery', labelRu: 'Галерея', anchor: '#gallery' },
    { id: 'getting-there', labelEn: 'Getting There', labelRu: 'Как добраться', anchor: '#getting-there' },
  ];

  // Scroll spy to update active section based on window scroll
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 160;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i].id);
        if (section) {
          const sectionTop = section.offsetTop;
          if (scrollPosition >= sectionTop) {
            setActiveSection(sections[i].id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const yOffset = -90; // Offset for sticky navs
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <nav className="sticky top-20 z-40 bg-[#FAF9F5]/95 backdrop-blur-md border-b border-[#E0D8CA] py-3 shadow-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-4">
          
          {/* Scroll Anchors Bar */}
          <div className="flex items-center space-x-1 sm:space-x-2 overflow-x-auto no-scrollbar py-0.5">
            {sections.map((sec) => {
              const isActive = activeSection === sec.id;
              return (
                <button
                  key={sec.id}
                  onClick={() => scrollToSection(sec.id)}
                  className={`text-xs sm:text-sm transition-all whitespace-nowrap px-3.5 py-1.5 rounded-full cursor-pointer font-medium ${
                    isActive
                      ? 'text-white font-bold bg-[#1B3B2B] shadow-xs'
                      : 'text-[#58685C] hover:text-[#14231A] hover:bg-[#EBE3D3]'
                  }`}
                >
                  <span className="font-mono text-amber-600 mr-1">#</span>
                  <span>{isRu ? sec.labelRu : sec.labelEn}</span>
                </button>
              );
            })}
          </div>

          {/* Quick CTA Buttons in Sub-Nav */}
          <div className="hidden md:flex items-center gap-2.5 shrink-0">
            {onOpenInquiry && (
              <button
                onClick={onOpenInquiry}
                className="px-3.5 py-1.5 text-xs font-bold text-[#1B3B2B] hover:text-amber-800 rounded-full border border-[#D0C7B7] hover:bg-[#EBE4D5] transition-all cursor-pointer"
              >
                {isRu ? 'Запрос' : 'Inquire'}
              </button>
            )}

            {onOpenBooking && (
              <button
                onClick={onOpenBooking}
                className="px-4 py-1.5 text-xs font-bold bg-amber-400 hover:bg-amber-300 text-slate-950 rounded-full shadow-xs transition-all flex items-center gap-1 cursor-pointer"
              >
                <span>{isRu ? 'Бронировать' : 'Book Now'}</span>
                <ArrowRight className="w-3 h-3 text-slate-950" />
              </button>
            )}
          </div>

        </div>
      </div>
    </nav>
  );
};
