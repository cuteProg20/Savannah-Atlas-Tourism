import React, { useState } from 'react';
import { 
  ShieldCheck, 
  MapPin, 
  Phone, 
  Mail, 
  Heart, 
  Sparkles, 
  Leaf, 
  TreeDeciduous, 
  Award, 
  ExternalLink,
  MessageCircle,
  Clock,
  Compass,
  Send,
  Lock,
  CheckCircle2
} from 'lucide-react';
import { Language, Currency } from '../types';
import { getWhatsAppLink } from '../utils/messengerLinks';

interface FooterProps {
  currentLang: Language;
  onOpenTradeModal?: () => void;
  onOpenImpactModal?: () => void;
  onOpenBooking?: () => void;
  onSelectCategory?: (category: string) => void;
}

export const Footer: React.FC<FooterProps> = ({
  currentLang,
  onOpenTradeModal,
  onOpenImpactModal,
  onOpenBooking,
  onSelectCategory,
}) => {
  const isRu = currentLang === 'ru';
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleNewsletter = (e: React.FormEvent) => {
    e.preventDefault();
    if (newsletterEmail) {
      setIsSubscribed(true);
    }
  };

  return (
    <footer className="bg-[#0C1510] text-[#E6E1D8] border-t border-emerald-900/60 relative overflow-hidden">
      
      {/* Top Newsletter & Conservation Guarantee Banner */}
      <div className="border-b border-emerald-900/50 bg-[#14231A]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-7 space-y-2">
              <div className="inline-flex items-center gap-2 bg-emerald-900/80 text-amber-300 text-xs font-bold px-3 py-1 rounded-full border border-emerald-700/60">
                <TreeDeciduous className="w-3.5 h-3.5" />
                <span>{isRu ? '1 подписка = 1 посаженное дерево в Серенгети' : '1 Subscriber = 1 Indigenous Acacia Planted in Serengeti'}</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-serif font-bold text-white">
                {isRu ? 'Присоединяйтесь к Журналу дикой природы' : 'Subscribe to the Savanna Conservation Gazette'}
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 font-light">
                {isRu
                  ? 'Ежемесячные отчеты биологов, миграционные карты в реальном времени и закрытые спецпредложения на лоджи.'
                  : 'Receive monthly naturalist field dispatches, real-time migration tracking maps, and private lodge preview access.'}
              </p>
            </div>

            <div className="lg:col-span-5">
              {!isSubscribed ? (
                <form onSubmit={handleNewsletter} className="flex gap-2">
                  <input
                    type="email"
                    required
                    value={newsletterEmail}
                    onChange={(e) => setNewsletterEmail(e.target.value)}
                    placeholder={isRu ? 'Ваш рабочий или личный e-mail' : 'Enter your email address'}
                    className="flex-1 bg-[#0A120D] border border-emerald-800/80 rounded-xl px-4 py-3 text-xs sm:text-sm text-white placeholder:text-slate-500 focus:outline-hidden focus:ring-2 focus:ring-amber-400"
                  />
                  <button
                    type="submit"
                    className="px-5 py-3 bg-amber-400 hover:bg-amber-300 text-slate-950 font-black text-xs sm:text-sm rounded-xl transition-all shrink-0 flex items-center gap-1.5 shadow-md"
                  >
                    <span>{isRu ? 'Подписаться' : 'Subscribe'}</span>
                    <Send className="w-3.5 h-3.5" />
                  </button>
                </form>
              ) : (
                <div className="bg-emerald-950/80 border border-emerald-700/60 p-4 rounded-xl flex items-center gap-3 text-xs text-emerald-200">
                  <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />
                  <span>{isRu ? 'Спасибо! Ваша акация будет посажена в питомнике Серонера.' : 'Thank you! Your tree certificate has been registered in the Seronera nursery.'}</span>
                </div>
              )}
            </div>

          </div>
        </div>
      </div>

      {/* Main Directory & Navigation Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          
          {/* Brand & Mission Statement (Col 1 & 2) */}
          <div className="lg:col-span-2 space-y-5">
            <div className="flex items-center gap-2">
              <div className="w-9 h-9 rounded-xl bg-amber-400 text-slate-950 flex items-center justify-center font-serif font-black text-lg shadow-sm">
                TW
              </div>
              <span className="font-serif text-2xl font-bold text-white tracking-tight">
                TourWeb <span className="text-amber-300 text-sm font-sans font-normal ml-1">Wilderness</span>
              </span>
            </div>

            <p className="text-xs sm:text-sm text-slate-300 font-light leading-relaxed max-w-sm">
              {isRu
                ? 'Премиальный туроператор независимых сафари-экспедиций, восхождений на Килиманджаро и отдыха на Занзибаре. 30 лет защиты биоразнообразия и этичного туризма.'
                : 'Premier independent safari operator, high-altitude Kilimanjaro mountaineering outfitter, and bespoke Indian Ocean island retreat curator since 1994.'}
            </p>

            <div className="space-y-2 text-xs text-slate-400">
              <div className="flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                <span>Arusha Safari Hub: Plot 42, Njiro Road, Arusha, Tanzania</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                <span>Zanzibar Beach Desk: Shangani St, Stone Town & Kendwa Office</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                <span>24/7 Operations: +255 784 920 118 / +1 (800) 492-SAFARI</span>
              </div>
            </div>

            {/* B2B Trade Login Trigger Button */}
            <div className="pt-2">
              <button
                onClick={onOpenTradeModal}
                className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-950/80 hover:bg-emerald-900 text-amber-300 text-xs font-bold rounded-xl border border-emerald-700/60 transition-colors shadow-xs"
              >
                <Lock className="w-3.5 h-3.5" />
                <span>{isRu ? 'B2B Портал для Турагентств (Trade Login)' : 'Travel Trade & Agent Portal (Net Rates)'}</span>
              </button>
            </div>
          </div>

          {/* Directory: Destinations (Col 3) */}
          <div className="space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-widest text-amber-300">
              {isRu ? 'Регионы и парки' : 'Wilderness Horizons'}
            </h4>
            <ul className="space-y-2.5 text-xs text-slate-300">
              <li>
                <a href="#destination-browser" className="hover:text-amber-300 transition-colors">
                  {isRu ? 'Серенгети и Великая Миграция' : 'Serengeti & Great Migration'}
                </a>
              </li>
              <li>
                <a href="#destination-browser" className="hover:text-amber-300 transition-colors">
                  {isRu ? 'Кальдера Нгоронгоро (ЮНЕСКО)' : 'Ngorongoro UNESCO Crater'}
                </a>
              </li>
              <li>
                <a href="#destination-browser" className="hover:text-amber-300 transition-colors">
                  {isRu ? 'Килиманджаро: Мачаме и Лемошо' : 'Kilimanjaro: Machame & Lemosho'}
                </a>
              </li>
              <li>
                <a href="#destination-browser" className="hover:text-amber-300 transition-colors">
                  {isRu ? 'Занзибар: Кендва и Мнемба' : 'Zanzibar: Kendwa & Mnemba Atoll'}
                </a>
              </li>
              <li>
                <a href="#destination-browser" className="hover:text-amber-300 transition-colors">
                  {isRu ? 'Тарангире: Гигантские Баобабы' : 'Tarangire & Elephant Corridors'}
                </a>
              </li>
              <li>
                <a href="#destination-browser" className="hover:text-amber-300 transition-colors">
                  {isRu ? 'Дикий Юг: Руаха и Ньерере' : 'Ruaha & Nyerere River Safaris'}
                </a>
              </li>
            </ul>
          </div>

          {/* Directory: Travel Styles & Experiences (Col 4) */}
          <div className="space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-widest text-amber-300">
              {isRu ? 'Форматы экспедиций' : 'Expedition Styles'}
            </h4>
            <ul className="space-y-2.5 text-xs text-slate-300">
              <li>
                <a href="#featured-trends" className="hover:text-amber-300 transition-colors">
                  {isRu ? 'Люкс медовые месяцы под звездами' : 'Luxury Honeymoons & Stargazing'}
                </a>
              </li>
              <li>
                <a href="#featured-trends" className="hover:text-amber-300 transition-colors">
                  {isRu ? 'Семейные сафари с юными рейнджерами' : 'Multi-Gen Family Expeditions'}
                </a>
              </li>
              <li>
                <a href="#featured-trends" className="hover:text-amber-300 transition-colors">
                  {isRu ? 'Частные авиаперелеты Bush-to-Beach' : 'Private Charter Fly-In Circuits'}
                </a>
              </li>
              <li>
                <a href="#trip-planner" className="hover:text-amber-300 transition-colors">
                  {isRu ? 'Интерактивный Dream Board планер' : 'Interactive Dream Board Planner'}
                </a>
              </li>
              <li>
                <button onClick={onOpenImpactModal} className="hover:text-amber-300 transition-colors text-left">
                  {isRu ? 'Отчет об охране природы 2026' : '2026 Conservation Field Report'}
                </button>
              </li>
            </ul>
          </div>

          {/* Directory: Accreditations & Trust (Col 5) */}
          <div className="space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-widest text-amber-300">
              {isRu ? 'Лицензии и безопасность' : 'Ethics & Accreditations'}
            </h4>
            <div className="space-y-3 text-xs text-slate-300">
              <div className="bg-[#14231A] p-3 rounded-xl border border-emerald-900/60 space-y-1">
                <span className="text-[11px] font-bold text-white block">TATO & TTB #TZ-88492</span>
                <span className="text-[10px] text-slate-400 block">Tanzania Association of Tour Operators</span>
              </div>

              <div className="bg-[#14231A] p-3 rounded-xl border border-emerald-900/60 space-y-1">
                <span className="text-[11px] font-bold text-white block">KPAP Partner Standard</span>
                <span className="text-[10px] text-slate-400 block">Kilimanjaro Porters Assistance Project</span>
              </div>

              <div className="bg-[#14231A] p-3 rounded-xl border border-emerald-900/60 space-y-1">
                <span className="text-[11px] font-bold text-white block">AMREF Flying Doctors</span>
                <span className="text-[10px] text-slate-400 block">Savanna Air Ambulance Coverage Included</span>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar: Copyright & Legal */}
        <div className="mt-16 pt-8 border-t border-emerald-900/50 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-slate-400">
          <div>
            © {new Date().getFullYear()} TourWeb Wilderness Expeditions Ltd. All Rights Reserved.
          </div>

          <div className="flex items-center gap-6">
            <span className="hover:text-slate-200 cursor-pointer">
              {isRu ? 'Политика конфиденциальности' : 'Privacy Policy'}
            </span>
            <span className="hover:text-slate-200 cursor-pointer">
              {isRu ? 'Условия экспедиций и TANAPA' : 'Terms & Conditions'}
            </span>
            <span className="hover:text-slate-200 cursor-pointer">
              {isRu ? 'Этический кодекс дикой природы' : 'Wilderness Ethics Code'}
            </span>
          </div>
        </div>

      </div>
    </footer>
  );
};
