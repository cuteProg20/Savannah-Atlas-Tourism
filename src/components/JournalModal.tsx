import React, { useState } from 'react';
import { X, BookOpen, Calendar, MapPin, Compass, Sparkles, Camera, Mountain, SunMedium, ArrowRight } from 'lucide-react';
import { Language } from '../types';

interface JournalModalProps {
  isOpen: boolean;
  onClose: () => void;
  currentLang: Language;
  onOpenBooking: () => void;
}

export const JournalModal: React.FC<JournalModalProps> = ({
  isOpen,
  onClose,
  currentLang,
  onOpenBooking,
}) => {
  const [activeTab, setActiveTab] = useState<'migration' | 'kilimanjaro' | 'packing' | 'photography'>('migration');

  if (!isOpen) return null;

  const isRu = currentLang === 'ru';

  const migrationMonths = [
    {
      months: isRu ? 'Январь — Март' : 'January — March',
      location: isRu ? 'Южный Серенгети & Ндуту' : 'Southern Serengeti & Ndutu',
      event: isRu ? 'Сезон массового отёла антилоп гну (Calving Season)' : 'Great Calving Season (8,000 calves born daily)',
      highlights: isRu ? 'Высочайшая концентрация гепардов и львов, охота хищников на открытых равнинах.' : 'Peak predator action, cheetah hunts, newborn zebra and wildebeest.',
    },
    {
      months: isRu ? 'Апрель — Май' : 'April — May',
      location: isRu ? 'Центральный Серенгети (Серонера)' : 'Central Serengeti (Seronera)',
      event: isRu ? 'Движение стад на северо-запад, зеленая саванна' : 'Rutting Season & Green Season Savanna',
      highlights: isRu ? 'Меньше туристов, сочные пейзажи, пышная растительность, брачный период.' : 'Low visitor volume, lush landscape photography, resident leopards on kopjes.',
    },
    {
      months: isRu ? 'Июнь — Июль' : 'June — July',
      location: isRu ? 'Западный коридор & река Грумети' : 'Western Corridor & Grumeti River',
      event: isRu ? 'Первые водные переправы через реку Грумети' : 'Grumeti River Crossings & Giant Crocodiles',
      highlights: isRu ? 'Огромные нильские крокодилы караулят стада гну на переправах.' : 'Dramatic ambush predation by Nile crocodiles in muddy channels.',
    },
    {
      months: isRu ? 'Август — Октябрь' : 'August — October',
      location: isRu ? 'Северный Серенгети & река Мара' : 'Northern Serengeti & Mara River',
      event: isRu ? 'Кульминация: Легендарные переправы реки Мара' : 'The Legendary Mara River Crossings',
      highlights: isRu ? 'Самое зрелищное природное шоу планеты. Прыжки со скалистых берегов.' : 'World’s most iconic wildlife spectacle. Stampedes leaping into churning waters.',
    },
    {
      months: isRu ? 'Ноябрь — Декабрь' : 'November — December',
      location: isRu ? 'Восточный и Центральный Серенгети' : 'Eastern Serengeti & Lobo Hills',
      event: isRu ? 'Возвращение стад на юг к равнинам Ндуту' : 'Return Southward Migration Cycle',
      highlights: isRu ? 'Короткие освежающие дожди, возвращение к начальной точке цикла.' : 'Fast-moving columns returning to mineral-rich short grass plains.',
    },
  ];

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-950/70 backdrop-blur-md flex items-center justify-center p-3 sm:p-6 animate-in fade-in">
      <div className="relative w-full max-w-4xl bg-white border border-slate-200 rounded-2xl shadow-2xl overflow-hidden text-slate-900 flex flex-col max-h-[90vh]">
        {/* Header Bar */}
        <div className="px-6 py-5 border-b border-slate-200 bg-white/95 flex items-center justify-between sticky top-0 z-10 backdrop-blur-sm">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-blue-50 text-[#1E3A8A] rounded-xl border border-blue-200">
              <BookOpen className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-xl sm:text-2xl font-serif font-bold text-[#1E3A8A]">
                {isRu ? 'Safari Journal & Справочник Путешественника' : 'Wilderness Safari Journal & Field Guide'}
              </h2>
              <p className="text-xs text-slate-500">
                {isRu ? 'Экспертные руководства, календарь миграции и секреты Танзании' : 'Expert dispatches, wildlife migration calendars, and packing insights'}
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 text-slate-500 hover:text-slate-800 bg-slate-100 hover:bg-slate-200 rounded-full transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Tab Navigation */}
        <div className="flex items-center gap-2 px-6 py-3 bg-slate-50 border-b border-slate-200 overflow-x-auto">
          <button
            onClick={() => setActiveTab('migration')}
            className={`px-3.5 py-1.5 rounded-lg text-xs font-bold transition-all flex items-center gap-1.5 shrink-0 ${
              activeTab === 'migration'
                ? 'bg-[#1E3A8A] text-white shadow-xs'
                : 'bg-white text-slate-700 border border-slate-200 hover:bg-slate-100'
            }`}
          >
            <Compass className="w-3.5 h-3.5" />
            <span>{isRu ? 'Календарь Миграции' : 'Great Migration Tracker'}</span>
          </button>

          <button
            onClick={() => setActiveTab('kilimanjaro')}
            className={`px-3.5 py-1.5 rounded-lg text-xs font-bold transition-all flex items-center gap-1.5 shrink-0 ${
              activeTab === 'kilimanjaro'
                ? 'bg-[#1E3A8A] text-white shadow-xs'
                : 'bg-white text-slate-700 border border-slate-200 hover:bg-slate-100'
            }`}
          >
            <Mountain className="w-3.5 h-3.5" />
            <span>{isRu ? 'Гайд по Килиманджаро' : 'Kilimanjaro Summit Prep'}</span>
          </button>

          <button
            onClick={() => setActiveTab('packing')}
            className={`px-3.5 py-1.5 rounded-lg text-xs font-bold transition-all flex items-center gap-1.5 shrink-0 ${
              activeTab === 'packing'
                ? 'bg-[#1E3A8A] text-white shadow-xs'
                : 'bg-white text-slate-700 border border-slate-200 hover:bg-slate-100'
            }`}
          >
            <SunMedium className="w-3.5 h-3.5" />
            <span>{isRu ? 'Чек-лист: Что брать' : 'Safari Packing Checklist'}</span>
          </button>

          <button
            onClick={() => setActiveTab('photography')}
            className={`px-3.5 py-1.5 rounded-lg text-xs font-bold transition-all flex items-center gap-1.5 shrink-0 ${
              activeTab === 'photography'
                ? 'bg-[#1E3A8A] text-white shadow-xs'
                : 'bg-white text-slate-700 border border-slate-200 hover:bg-slate-100'
            }`}
          >
            <Camera className="w-3.5 h-3.5" />
            <span>{isRu ? 'Фотография в Саванне' : 'Wildlife Photo Tips'}</span>
          </button>
        </div>

        {/* Tab Content */}
        <div className="overflow-y-auto p-6 space-y-6">
          {activeTab === 'migration' && (
            <div className="space-y-4">
              <div className="p-4 bg-blue-50 border border-blue-200 rounded-xl space-y-1">
                <h3 className="font-serif font-bold text-[#1E3A8A] text-lg">
                  {isRu ? 'Круглогодичный цикл Великой Миграции 2 миллиона животных' : 'The 12-Month Great Migration Life Cycle'}
                </h3>
                <p className="text-xs text-slate-600">
                  {isRu
                    ? 'Миграция никогда не останавливается. В зависимости от месяца мы выбираем мобильные тентовые кемпы прямо по ходу движения стад.'
                    : 'The migration is a continuous circular journey across the Serengeti-Mara ecosystem. Our camps move with the herds for front-row wildlife access.'}
                </p>
              </div>

              <div className="space-y-3">
                {migrationMonths.map((m, idx) => (
                  <div
                    key={idx}
                    className="p-4 bg-slate-50 border border-slate-200 rounded-xl space-y-2 hover:border-[#1E3A8A]/30 transition-colors"
                  >
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <span className="text-xs font-bold text-[#1E3A8A] bg-blue-50 px-2.5 py-1 rounded-full border border-blue-200">
                        {m.months}
                      </span>
                      <span className="flex items-center gap-1 text-xs text-slate-500">
                        <MapPin className="w-3.5 h-3.5 text-[#2563EB]" />
                        <span>{m.location}</span>
                      </span>
                    </div>

                    <h4 className="font-bold text-sm sm:text-base text-slate-900">{m.event}</h4>
                    <p className="text-xs sm:text-sm text-slate-600">{m.highlights}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'kilimanjaro' && (
            <div className="space-y-4">
              <div className="p-4 bg-blue-50 border border-blue-200 rounded-xl space-y-2">
                <h3 className="font-serif font-bold text-[#1E3A8A] text-lg">
                  {isRu ? 'Правило акклиматизации: "Pole Pole" (Медленно)' : 'Acclimatization Secret: "Pole Pole" (Walk Slow)'}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {isRu
                    ? 'Успех восхождения на пик Ухуру (5895 м) на 90% зависит от грамотной программы акклиматизации. Мы рекомендуем 8-дневный маршрут Лемошо или 7-дневный Мачаме для достижения 99.4% шанса успешного штурма.'
                    : 'Summit success on Uhuru Peak (5,895m) is heavily dictated by your acclimatization profile. We strongly recommend the 8-Day Lemosho or 7-Day Machame route to achieve our 99.4% summit rate.'}
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="p-4 bg-slate-50 border border-slate-200 rounded-xl space-y-2">
                  <h4 className="font-bold text-sm text-[#1E3A8A]">
                    {isRu ? 'Кислород и пульсоксиметрия' : 'Daily Medical Oximeter Checks'}
                  </h4>
                  <p className="text-xs text-slate-600">
                    {isRu
                      ? 'Каждое утро и вечер гиды измеряют уровень кислорода в крови и пульс, а в штурмовом лагере всегда дежурят баллоны с аварийным кислородом.'
                      : 'Twice daily biometric monitoring with fingertip pulse oximeters and medical emergency oxygen tanks on every summit push.'}
                  </p>
                </div>

                <div className="p-4 bg-slate-50 border border-slate-200 rounded-xl space-y-2">
                  <h4 className="font-bold text-sm text-[#1E3A8A]">
                    {isRu ? 'Питание на высоте' : 'High-Altitude Nutrition'}
                  </h4>
                  <p className="text-xs text-slate-600">
                    {isRu
                      ? 'Горячее 3-разовое питание от нашего горного шеф-повара: супы-пюре, свежие овощи, паста, имбирный чай и калорийные перекусы.'
                      : '3 hot meals prepared daily by our mountain chef in heated dining tents: ginger broths, hearty pastas, fresh fruit, and electrolyte packs.'}
                  </p>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'packing' && (
            <div className="space-y-4">
              <div className="p-4 bg-slate-50 border border-slate-200 rounded-xl space-y-3">
                <h3 className="font-serif font-bold text-slate-900 text-base">
                  {isRu ? 'Рекомендованная экипировка для Сафари' : 'Essential Safari Clothing & Gear'}
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-slate-700">
                  <div className="space-y-1.5">
                    <p className="font-bold text-[#1E3A8A]">{isRu ? 'Одежда и Обувь:' : 'Apparel & Footwear:'}</p>
                    <p>• {isRu ? 'Одежда цвета хаки, беж или песка (избегайте темно-синего и черного цвета — привлекают муху цеце)' : 'Neutral colors: khaki, sand, olive (avoid dark blue/black which attract tsetse flies)'}</p>
                    <p>• {isRu ? 'Флисовая кофта или ветровка для прохладных утренних сафари' : 'Fleece jacket or windbreaker for crisp 6 AM dawn game drives'}</p>
                    <p>• {isRu ? 'Удобные треккинговые кроссовки или легкие ботинки' : 'Sturdy trail sneakers or lightweight safari boots'}</p>
                  </div>
                  <div className="space-y-1.5">
                    <p className="font-bold text-[#1E3A8A]">{isRu ? 'Электроника и Защита:' : 'Electronics & Essentials:'}</p>
                    <p>• {isRu ? 'Бинокль (8x42 или 10x42) для каждого участника' : 'High-quality binoculars (8x42 or 10x42) per traveler'}</p>
                    <p>• {isRu ? 'Репеллент с содержанием ДЭТА (DEET) от 30%' : 'Insect repellent with 30%+ DEET'}</p>
                    <p>• {isRu ? 'Powerbank и адаптер для розеток британского типа (тип G)' : 'Powerbank & UK Type-G plug adapters (standard in Tanzania)'}</p>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'photography' && (
            <div className="space-y-4">
              <div className="p-4 bg-slate-50 border border-slate-200 rounded-xl space-y-2">
                <h3 className="font-serif font-bold text-[#1E3A8A] text-base">
                  {isRu ? 'Как привезти потрясающие кадры из Серенгети' : 'Mastering African Wildlife Photography'}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {isRu
                    ? 'Наши джипы оборудованы специальными мешками-упорами для телеобъективов (bean bags) и 220V розетками. Лучшие часы для съемки — первые 90 минут после восхода и "золотой час" перед закатом солнца.'
                    : 'All our custom Land Cruisers feature beanbags for telephoto stability and 220V inverter outlets. Golden hour (6:30–8:00 AM and 5:00–6:30 PM) offers magical warm African rim lighting.'}
                </p>
              </div>
            </div>
          )}
        </div>

        {/* Footer Actions */}
        <div className="px-6 py-4 bg-slate-50 border-t border-slate-200 flex items-center justify-between sticky bottom-0 z-10">
          <span className="text-xs text-slate-500">
            {isRu ? 'Справочник обновлен для сезона 2026/2027' : 'Field guide curated for the 2026/2027 safari season'}
          </span>

          <button
            onClick={() => {
              onClose();
              onOpenBooking();
            }}
            className="px-5 py-2.5 bg-[#1E3A8A] hover:bg-[#1e40af] text-white font-bold text-xs sm:text-sm rounded-xl transition-all shadow-xs flex items-center gap-2 hover:scale-[1.02]"
          >
            <span>{isRu ? 'Запросить расчет сафари' : 'Inquire on Migration Safari'}</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};
