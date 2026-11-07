import React, { useState } from 'react';
import { X, Bot, Sparkles, Send, MapPin, Compass, ArrowRight, User } from 'lucide-react';
import { Tour, Language, Currency } from '../types';
import { TRANSLATIONS } from '../data/translations';

interface AiTravelAdvisorModalProps {
  tours: Tour[];
  currentLang: Language;
  currentCurrency: Currency;
  onClose: () => void;
  onSelectTour: (tour: Tour) => void;
}

interface ChatMessage {
  id: string;
  sender: 'user' | 'ai';
  text: string;
  recommendedTourId?: string;
}

export const AiTravelAdvisorModal: React.FC<AiTravelAdvisorModalProps> = ({
  tours,
  currentLang,
  currentCurrency,
  onClose,
  onSelectTour,
}) => {
  const t = TRANSLATIONS[currentLang] || TRANSLATIONS.en;

  const [inputQuery, setInputQuery] = useState('');
  const [loading, setLoading] = useState(false);

  const initialMessage: ChatMessage = {
    id: 'msg-1',
    sender: 'ai',
    text:
      currentLang === 'ru'
        ? 'Jambo! Я ваш персональный AI-эксперт TourWeb по Танзании. Помогу спланировать сафари в Серенгети, выбрать маршрут восхождения на Килиманджаро (Лемошо или Мачаме), подобрать отель на Занзибаре или организовать индивидуальный джип с русскоязычным гидом. Что вы хотите увидеть в Африке?'
        : 'Jambo! I am your TourWeb Tanzania Safari AI Concierge. I can help tailor your Great Migration safari, select the right Mt. Kilimanjaro trekking route, plan a Zanzibar beach extension, or arrange a private 4x4 Land Cruiser with a bilingual guide. What would you like to experience?',
  };

  const [messages, setMessages] = useState<ChatMessage[]>([initialMessage]);

  const quickPrompts = [
    currentLang === 'ru' ? 'Когда лучше смотреть Великую Миграцию в Серенгети?' : 'Best time for the Serengeti Great Migration?',
    currentLang === 'ru' ? 'Какой маршрут на Килиманджаро самый надежный?' : 'Most scenic Kilimanjaro route (Lemosho vs Machame)?',
    currentLang === 'ru' ? 'Сафари + Занзибар: сколько дней нужно?' : 'Recommended Bush-to-Beach combo duration?',
    currentLang === 'ru' ? 'Охота с племенем Хадзабе у озера Эяси' : 'Hadzabe Bushmen cultural experience details',
  ];

  const handleSend = (queryText?: string) => {
    const textToSend = queryText || inputQuery;
    if (!textToSend.trim()) return;

    const userMsg: ChatMessage = {
      id: `user-${Date.now()}`,
      sender: 'user',
      text: textToSend,
    };

    setMessages((prev) => [...prev, userMsg]);
    setInputQuery('');
    setLoading(true);

    setTimeout(() => {
      let reply = '';
      let matchedTourId: string | undefined = undefined;

      const q = textToSend.toLowerCase();

      if (q.includes('migration') || q.includes('миграци') || q.includes('серенгети') || q.includes('serengeti') || q.includes('лев') || q.includes('lion') || q.includes('big five') || q.includes('пятерк')) {
        matchedTourId = 'serengeti-great-migration';
        reply = currentLang === 'ru'
          ? 'Для наблюдения за Великой Миграцией и Большой Пятеркой лучший выбор — тур «Великая Миграция Серенгети и кратер Нгоронгоро» (7 дней). Включены частный джип 4x4 Land Cruiser, спуск в кальдеру Нгоронгоро и премиальные тентовые лоджи.'
          : 'For the Great Migration and Big Five, our signature "Serengeti Great Migration & Ngorongoro Caldera" (7 Days) is the ultimate itinerary. Includes private 4x4 Land Cruiser with pop-up roof and luxury tented camps.';
      } else if (q.includes('kili') || q.includes('килиманджаро') || q.includes('гора') || q.includes('вершин') || q.includes('lemosho') || q.includes('лемошо') || q.includes('uhuru')) {
        matchedTourId = 'kilimanjaro-lemosho-trek';
        reply = currentLang === 'ru'
          ? 'Для максимальной акклиматизации и 98.4% успеха восхождения мы рекомендуем 8-дневный маршрут Лемошо на Килиманджаро. Наша команда сертифицирована KPAP, включает пульсоксиметрический контроль и горячее трехразовое питание от шефа.'
          : 'We recommend the 8-Day Lemosho Route for optimal acclimatization and a 98.4% summit success rate to Uhuru Peak (5,895m). Led by our KPAP-certified mountain crew with twice-daily medical monitoring.';
      } else if (q.includes('zanzibar') || q.includes('занзибар') || q.includes('пляж') || q.includes('beach') || q.includes('океан') || q.includes('море') || q.includes('nungwi')) {
        matchedTourId = 'tanzania-bush-to-beach';
        reply = currentLang === 'ru'
          ? 'Комбо-программа «Bush-to-Beach: Серенгети, Нгоронгоро и пляжи Занзибара» (10 дней) объединяет насыщенное сафари и отдых на белоснежных пляжах Нунгви/Кендвы без приливов и отливов, плюс тур по Стоун-Тауну.'
          : 'Our "Tanzania Bush-to-Beach: Safari & Zanzibar Turquoise Sands" (10 Days) pairs thrilling Serengeti game drives with direct flights to northern Zanzibar beaches (tide-free swimming) and Stone Town spice tours.';
      } else if (q.includes('hadzabe') || q.includes('хадзабе') || q.includes('племен') || q.includes('культура') || q.includes('масаи') || q.includes('tribe') || q.includes('maasai')) {
        matchedTourId = 'cultural-tribes-safari';
        reply = currentLang === 'ru'
          ? 'Тур «Культурная экспедиция: Хадзабе, Датога и Масаи» (6 дней) позволяет принять участие в утренней охоте с луками вместе с последними охотниками-собирателями Хадзабе у озера Эяси и посетить кузницы Датога.'
          : 'Our "Tribal Heartlands: Hadzabe, Datoga & Maasai Cultural Safari" (6 Days) includes authentic sunrise bow hunting with the Hadzabe tribe at Lake Eyasi and ancestral iron-smelting workshops with the Datoga.';
      } else {
        matchedTourId = 'wild-south-ruaha-nyerere';
        reply = currentLang === 'ru'
          ? 'TourWeb предлагает все национальные парки Танзании с гарантией лицензий TATO/TTB, индивидуальными внедорожниками 4x4 и русскоязычными гидами. Рекомендую посмотреть наши туры по Северному кольцу или диким южным паркам Руаха и Ньерере!'
          : 'TourWeb provides fully licensed TATO/TTB custom safaris, private 4x4 vehicles, and expert multilingual guides. Check out our Northern Circuit classics or the untamed wilderness of Ruaha and Nyerere!';
      }

      const aiMsg: ChatMessage = {
        id: `ai-${Date.now()}`,
        sender: 'ai',
        text: reply,
        recommendedTourId: matchedTourId,
      };

      setMessages((prev) => [...prev, aiMsg]);
      setLoading(false);
    }, 500);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-950/70 backdrop-blur-md flex items-center justify-center p-3 sm:p-6 animate-in fade-in duration-200">
      <div className="bg-white text-slate-900 rounded-3xl max-w-2xl w-full max-h-[85vh] overflow-hidden shadow-2xl border border-slate-200 flex flex-col relative">
        {/* Header */}
        <div className="bg-white text-slate-900 px-6 py-4 flex items-center justify-between border-b border-slate-200">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-[#1E3A8A] text-white flex items-center justify-center font-bold shadow-xs">
              <Bot className="w-5 h-5" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h3 className="font-serif font-bold text-base text-[#1E3A8A]">
                  {t.aiAdvisorTitle}
                </h3>
                <span className="bg-emerald-50 text-emerald-800 text-[10px] font-bold px-2 py-0.5 rounded border border-emerald-300">
                  Arusha Desk Online
                </span>
              </div>
              <p className="text-[11px] text-slate-500">
                {t.aiAdvisorSubtitle}
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 rounded-full bg-slate-100 text-slate-500 hover:text-slate-800 hover:bg-slate-200 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Chat Stream Body */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-6 space-y-4 bg-slate-50 min-h-[320px]">
          {messages.map((msg) => {
            const isAI = msg.sender === 'ai';
            const tour = msg.recommendedTourId ? tours.find((t) => t.id === msg.recommendedTourId) : null;

            return (
              <div key={msg.id} className={`flex gap-3 ${isAI ? 'items-start' : 'items-end justify-end'}`}>
                {isAI && (
                  <div className="w-8 h-8 rounded-xl bg-[#1E3A8A] text-white flex items-center justify-center shrink-0 shadow-xs font-bold">
                    <Bot className="w-4 h-4" />
                  </div>
                )}

                <div className={`space-y-2 max-w-[85%] ${isAI ? 'text-left' : 'text-right'}`}>
                  <div
                    className={`p-4 rounded-2xl text-xs sm:text-sm leading-relaxed ${
                      isAI
                        ? 'bg-white border border-slate-200 text-slate-800 shadow-xs'
                        : 'bg-[#1E3A8A] text-white font-medium shadow-xs'
                    }`}
                  >
                    {msg.text}
                  </div>

                  {/* Recommendation Tour Card Chip if available */}
                  {tour && (
                    <div 
                      onClick={() => {
                        onClose();
                        onSelectTour(tour);
                      }}
                      className="bg-white text-slate-900 p-3 rounded-2xl border border-slate-200 flex items-center justify-between gap-3 shadow-xs hover:border-[#1E3A8A] transition-all cursor-pointer group text-left"
                    >
                      <div className="flex items-center gap-3">
                        <img
                          src={tour.coverImage}
                          alt={tour.title}
                          className="w-12 h-12 rounded-xl object-cover"
                        />
                        <div>
                          <span className="text-[10px] text-[#2563EB] font-bold uppercase block">
                            {tour.circuit || tour.travelStyle} • {tour.durationDays} Days
                          </span>
                          <div className="font-serif font-bold text-xs text-slate-900 line-clamp-1 group-hover:text-[#1E3A8A]">
                            {currentLang === 'ru' ? tour.ruTitle : tour.title}
                          </div>
                        </div>
                      </div>

                      <div className="flex items-center gap-1 text-xs font-bold text-[#1E3A8A]">
                        <span className="hidden sm:inline">{t.viewItinerary}</span>
                        <ArrowRight className="w-4 h-4" />
                      </div>
                    </div>
                  )}
                </div>

                {!isAI && (
                  <div className="w-8 h-8 rounded-xl bg-slate-200 text-slate-700 flex items-center justify-center shrink-0 shadow-xs">
                    <User className="w-4 h-4" />
                  </div>
                )}
              </div>
            );
          })}

          {loading && (
            <div className="flex items-center gap-2 text-[#1E3A8A] text-xs italic">
              <span className="w-2 h-2 rounded-full bg-[#2563EB] animate-pulse" />
              <span>{currentLang === 'ru' ? 'AI-эксперт TourWeb подбирает маршрут...' : 'Consulting Tanzania safari database...'}</span>
            </div>
          )}
        </div>

        {/* Quick Suggestion Chips */}
        <div className="px-4 py-2 bg-white border-t border-slate-200 flex gap-2 overflow-x-auto">
          {quickPrompts.map((prompt, idx) => (
            <button
              key={idx}
              onClick={() => handleSend(prompt)}
              className="px-3 py-1.5 bg-slate-50 border border-slate-200 hover:border-[#1E3A8A] text-slate-700 hover:text-[#1E3A8A] rounded-lg text-[11px] font-medium whitespace-nowrap transition-colors"
            >
              {prompt}
            </button>
          ))}
        </div>

        {/* Input Bar */}
        <div className="p-4 bg-white border-t border-slate-200">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleSend();
            }}
            className="flex gap-2"
          >
            <input
              type="text"
              value={inputQuery}
              onChange={(e) => setInputQuery(e.target.value)}
              placeholder={currentLang === 'ru' ? 'Спросите о сафари, парках или Килиманджаро...' : 'Ask about safaris, parks or Kilimanjaro...'}
              className="flex-1 bg-slate-50 border border-slate-200 rounded-xl px-4 py-2.5 text-xs sm:text-sm text-slate-900 placeholder:text-slate-400 focus:outline-hidden focus:ring-2 focus:ring-[#1E3A8A]"
            />
            <button
              type="submit"
              className="px-5 py-2.5 bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs sm:text-sm rounded-xl shadow-xs transition-colors flex items-center gap-1.5"
            >
              <Send className="w-4 h-4 text-slate-950" />
              <span className="hidden sm:inline">{t.aiAskBtn}</span>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};
