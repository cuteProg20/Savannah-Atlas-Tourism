import React, { useState } from 'react';
import { 
  Compass, 
  Wind, 
  Footprints, 
  Moon, 
  Flame, 
  Ship, 
  Sparkles, 
  ArrowRight, 
  MapPin, 
  Clock, 
  Users, 
  ShieldCheck, 
  Binoculars,
  CheckCircle2
} from 'lucide-react';
import { Language, Currency } from '../types';

interface ExperiencesSectionProps {
  currentLang: Language;
  currentCurrency?: Currency;
  onOpenBookingModal: (tourTitle?: string) => void;
}

interface DetailedExperienceItem {
  id: string;
  titleEn: string;
  titleRu: string;
  locationEn: string;
  locationRu: string;
  categoryEn: string;
  categoryRu: string;
  categoryKey: 'Game Drives' | 'Hot Air Balloons' | 'Walking Safaris' | 'Night Safaris' | 'Cultural Encounters' | 'Ocean & Coast';
  badgeEn: string;
  badgeRu: string;
  durationEn: string;
  durationRu: string;
  groupEn: string;
  groupRu: string;
  descriptionEn: string;
  descriptionRu: string;
  highlightsEn: string[];
  highlightsRu: string[];
  image: string;
}

export const ExperiencesSection: React.FC<ExperiencesSectionProps> = ({
  currentLang,
  onOpenBookingModal,
}) => {
  const isRu = currentLang === 'ru';
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const experiences: DetailedExperienceItem[] = [
    {
      id: 'hot-air-balloon',
      titleEn: 'Dawn Hot Air Balloon Safari & Champagne Breakfast',
      titleRu: 'Рассветный полет на воздушном шаре и завтрак с шампанским',
      locationEn: 'Central & Northern Serengeti',
      locationRu: 'Центральный и Северный Серенгети',
      categoryEn: 'Hot Air Balloons',
      categoryRu: 'Воздушные шары',
      categoryKey: 'Hot Air Balloons',
      badgeEn: 'Iconic Aerial Safari',
      badgeRu: 'Фирменное аэросафари',
      durationEn: 'Dawn Departure · 4.5 Hours',
      durationRu: 'Вылет на рассвете · 4.5 часа',
      groupEn: 'Max 8-12 Guests',
      groupRu: 'До 8–12 гостей',
      descriptionEn: 'Glide noiselessly over the waking acacia canopy and migrating herds at first golden light, followed by an English bush champagne breakfast in the wild.',
      descriptionRu: 'Бесшумный полет над просыпающейся саванной и стадами миграции в первых лучах солнца, завершающийся завтраком с шампанским под кронами акаций.',
      highlightsEn: ['Panoramic Savanna Aerial Views', '5-Star Bush Champagne Breakfast', 'Certified British Commercial Pilots'],
      highlightsRu: ['Панорамный вид на саванну с высоты птичьего полета', 'Шампанское и горячий завтрак в буше', 'Сертифицированные пилоты международного класса'],
      image: 'https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?auto=format&fit=crop&w=1200&q=85',
    },
    {
      id: 'walking-safari',
      titleEn: 'Guided Walking Safaris with Maasai Trackers',
      titleRu: 'Пешие сафари с проводниками масаи и рейнджерами',
      locationEn: 'Grumeti Reserve & Ngorongoro Highlands',
      locationRu: 'Заповедник Грумети и нагорье Нгоронгоро',
      categoryEn: 'Walking Safaris',
      categoryRu: 'Пешие сафари',
      categoryKey: 'Walking Safaris',
      badgeEn: 'Sensory On-Foot Tracking',
      badgeRu: 'Пеший трекинг',
      durationEn: 'Morning or Late Afternoon · 3 Hours',
      durationRu: 'Утром или вечером · 3 часа',
      groupEn: 'Private / Max 6 Guests',
      groupRu: 'Приватно / До 6 гостей',
      descriptionEn: 'Step out of the vehicle and experience the bush through ancient sensory tracking. Learn spoor interpretation, indigenous medicinal botany, and subtle wildlife alarm calls.',
      descriptionRu: 'Почувствуйте пульс дикой природы без шума моторов. Опытные следопыты научат читать следы хищников, распознавать лечебные травы и птичьи сигналы тревоги.',
      highlightsEn: ['Armed TANAPA Conservation Ranger', 'Indigenous Maasai Botany Insights', 'Micro-Ecosystem & Spoor Tracking'],
      highlightsRu: ['Вооруженный рейнджер TANAPA', 'Секреты традиционной ботаники масаи', 'Чтение следов диких животных'],
      image: 'https://images.unsplash.com/photo-1516426122078-c23e76319801?auto=format&fit=crop&w=1200&q=85',
    },
    {
      id: 'predator-game-drive',
      titleEn: 'Private 4x4 Custom Predator Game Drives',
      titleRu: 'Индивидуальные сафари на 4x4 Land Cruiser',
      locationEn: 'Seronera Valley & Mara River Sector',
      locationRu: 'Долина Серонера и река Мара',
      categoryEn: 'Game Drives',
      categoryRu: 'Джип-сафари',
      categoryKey: 'Game Drives',
      badgeEn: 'Big Five Focus',
      badgeRu: 'Большая Пятерка',
      durationEn: 'Full Day or Flexible Half Day',
      durationRu: 'Полный день или гибкий график',
      groupEn: 'Private Land Cruiser (Window Seat Guaranteed)',
      groupRu: 'Индивидуальный джип (место у окна)',
      descriptionEn: 'Traverse rugged savanna tracks in customized safari cruisers fitted with high-angle pop-up roofs, onboard espresso bars, 220V camera charging inverters, and Leica optics.',
      descriptionRu: 'Экспедиции по саванне на подготовленных Toyota Land Cruiser с подъемной панорамной крышей, кофемашиной, зарядными станциями для фототехники и оптикой Leica.',
      highlightsEn: ['Guaranteed Window Seats', 'Leica Trinovid Binoculars In-Car', 'Onboard Chilled Refreshments & Inverters'],
      highlightsRu: ['Гарантированное место у окна для каждого', 'Бинокли Leica в автомобиле', 'Холодильник с напитками и розетки 220V'],
      image: 'https://images.unsplash.com/photo-1534567153574-2b12153a87f0?auto=format&fit=crop&w=1200&q=85',
    },
    {
      id: 'night-game-drive',
      titleEn: 'Infrared Nocturnal Predator Safaris',
      titleRu: 'Ночные сафари с инфракрасными прожекторами',
      locationEn: 'Tarangire Concession & Manyara Forest',
      locationRu: 'Концессия Тарангире и лес Маньяры',
      categoryEn: 'Night Safaris',
      categoryRu: 'Ночные выезды',
      categoryKey: 'Night Safaris',
      badgeEn: 'Nocturnal Stalking',
      badgeRu: 'Ночная охота',
      durationEn: 'Night Stalking · 2.5 Hours (20:00 - 22:30)',
      durationRu: 'Ночной выезд · 2.5 часа (20:00 - 22:30)',
      groupEn: 'Max 6 Guests',
      groupRu: 'До 6 гостей',
      descriptionEn: 'Witness the savanna after dark using filtered red spotlights. Spot leopards descending baobabs, hunting servals, aardvarks, and nocturnal white-tailed mongooses.',
      descriptionRu: 'Откройте тайную жизнь саванны после захода солнца с красным фильтром. Наблюдайте леопардов на охоте, сервалов, генетов и редких трубкозубов.',
      highlightsEn: ['Red-Filter Thermal Spotlights (Eye-Safe)', 'Leopard & Hyena Hunt Observations', 'Stargazing in Dark-Sky Reserve'],
      highlightsRu: ['Безопасные красные светофильтры', 'Наблюдение за ночной охотой леопардов', 'Астрономические наблюдения в южном полушарии'],
      image: 'https://images.unsplash.com/photo-1540573133985-87b6da6d54a9?auto=format&fit=crop&w=1200&q=85',
    },
    {
      id: 'cultural-hadzabe',
      titleEn: 'Indigenous Hadzabe & Datoga Cultural Exchange',
      titleRu: 'Аутентичная встреча с племенами Хадзабе и Датога',
      locationEn: 'Lake Eyasi Escarpment',
      locationRu: 'Озеро Эяси',
      categoryEn: 'Cultural Encounters',
      categoryRu: 'Культурные встречи',
      categoryKey: 'Cultural Encounters',
      badgeEn: 'Ancient Hunter-Gatherers',
      badgeRu: 'Древние охотники',
      durationEn: 'Morning Expedition · 4 Hours',
      durationRu: 'Утренняя экспедиция · 4 часа',
      groupEn: 'Private Small Group',
      groupRu: 'Приватная малая группа',
      descriptionEn: 'Join Africa’s last true hunter-gatherers on an early morning foraging and traditional archery trek, learning click-language nuances and fire-making by hand.',
      descriptionRu: 'Посетите последних охотников-собирателей Африки. Примите участие в утренней охоте с луком, познакомьтесь с уникальным щелкающим языком и традицией добычи огня трением.',
      highlightsEn: ['Authentic Non-Staged Cultural Heritage', 'Direct Community Support Royalties', 'Traditional Handcrafted Archery Lessons'],
      highlightsRu: ['Аутентичный контакт без туристических постановок', 'Прямая финансовая поддержка общины', 'Обучение традиционной стрельбе из лука'],
      image: 'https://images.unsplash.com/photo-1509099836639-18ba1795216d?auto=format&fit=crop&w=1200&q=85',
    },
    {
      id: 'zanzibar-dhow-sail',
      titleEn: 'Private Handcrafted Swahili Dhow Sunset Sail',
      titleRu: 'Закатный круиз на парусном доу и снорклинг',
      locationEn: 'Zanzibar Archipelago & Mnemba Atoll',
      locationRu: 'Архипелаг Занзибар и атолл Мнемба',
      categoryEn: 'Ocean & Coast',
      categoryRu: 'Океан и острова',
      categoryKey: 'Ocean & Coast',
      badgeEn: 'Marine Sanctuary',
      badgeRu: 'Морской заповедник',
      durationEn: 'Afternoon to Sunset · 3.5 Hours',
      durationRu: 'День и закат · 3.5 часа',
      groupEn: 'Private Charter Only',
      groupRu: 'Только индивидуальный чартер',
      descriptionEn: 'Set sail aboard an authentic wooden dhow with handcrafted sails. Snorkel pristine coral reefs with wild dolphins and savor grilled tiger prawns and tropical cocktails.',
      descriptionRu: 'Индивидуальная морская прогулка на деревянной парусной шхуне доу. Снорклинг на коралловых рифах среди дельфинов и ужин с морепродуктами на закате.',
      highlightsEn: ['Dolphin & Sea Turtle Encounters', 'Fresh Swahili Seafood & Spiced Canapés', 'Sunset Champagne Toast on Deck'],
      highlightsRu: ['Плавание с дельфинами и черепахами', 'Свежие морепродукты и суахили закуски', 'Бокал шампанского на закате'],
      image: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=1200&q=85',
    },
  ];

  const filterCategories = [
    { key: 'All', labelEn: 'All Experiences', labelRu: 'Все активности' },
    { key: 'Game Drives', labelEn: 'Game Drives', labelRu: 'Джип-сафари' },
    { key: 'Hot Air Balloons', labelEn: 'Hot Air Balloons', labelRu: 'Воздушные шары' },
    { key: 'Walking Safaris', labelEn: 'Walking Safaris', labelRu: 'Пешие сафари' },
    { key: 'Night Safaris', labelEn: 'Night Safaris', labelRu: 'Ночные выезды' },
    { key: 'Cultural Encounters', labelEn: 'Cultural Encounters', labelRu: 'Культура и племена' },
    { key: 'Ocean & Coast', labelEn: 'Ocean & Coast', labelRu: 'Океан и Занзибар' },
  ];

  const filteredExperiences = selectedCategory === 'All'
    ? experiences
    : experiences.filter((e) => e.categoryKey === selectedCategory);

  return (
    <section 
      id="experiences" 
      className="py-24 bg-white text-[#14231A] border-b border-[#E5DFD4] relative scroll-mt-24"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Section Header & Category Filter Bar */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 pb-6 border-b border-[#EAE3D5]">
          <div className="space-y-2 max-w-2xl">
            <span className="text-xs font-bold uppercase tracking-[0.25em] text-amber-700 flex items-center gap-2">
              <Compass className="w-3.5 h-3.5 text-amber-600" />
              {isRu ? 'Кураторские активности' : 'Field Expeditions & Activities'}
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-[#14231A] tracking-tight">
              {isRu ? 'Впечатления за пределами воображения' : 'Signature Wilderness Experiences'}
            </h2>
            <p className="text-sm sm:text-base text-[#526357] font-light">
              {isRu 
                ? 'Каждая экспедиция разрабатывается индивидуально с учетом сезонных миграций и сопровождается опытными натуралистами.'
                : 'Immerse yourself in authentic savanna and coastal adventures, tailored around seasonal wildlife dynamics and conducted under the strictest safety protocols.'}
            </p>
          </div>

          {/* Category Filter Pills */}
          <div className="flex items-center gap-2 overflow-x-auto no-scrollbar pb-1">
            {filterCategories.map((cat) => {
              const isActive = selectedCategory === cat.key;
              return (
                <button
                  key={cat.key}
                  onClick={() => setSelectedCategory(cat.key)}
                  className={`px-4 py-2 rounded-full text-xs font-bold whitespace-nowrap transition-all cursor-pointer ${
                    isActive
                      ? 'bg-[#1B3B2B] text-white shadow-md'
                      : 'bg-[#FAF8F3] border border-[#E0D8CA] text-[#556358] hover:text-[#14231A] hover:bg-[#F0EBE0]'
                  }`}
                >
                  {isRu ? cat.labelRu : cat.labelEn}
                </button>
              );
            })}
          </div>
        </div>

        {/* Detailed Experience Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredExperiences.map((exp) => (
            <div
              key={exp.id}
              className="bg-[#FAF9F5] rounded-3xl overflow-hidden border border-[#E8E1D5] shadow-sm hover:shadow-xl transition-all duration-500 flex flex-col justify-between group"
            >
              {/* Card Image Header */}
              <div className="relative h-64 overflow-hidden bg-slate-900">
                <img
                  src={exp.image}
                  alt={isRu ? exp.titleRu : exp.titleEn}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                {/* Top Badges */}
                <div className="absolute top-4 left-4 right-4 flex items-center justify-between pointer-events-none">
                  <span className="bg-black/50 backdrop-blur-md border border-white/20 text-white text-[10px] font-bold uppercase px-3 py-1 rounded-full tracking-wider">
                    {isRu ? exp.badgeRu : exp.badgeEn}
                  </span>

                  <span className="text-[11px] text-amber-300 font-medium flex items-center gap-1 bg-black/50 backdrop-blur-md px-2.5 py-1 rounded-full border border-white/10">
                    <MapPin className="w-3 h-3 text-amber-400" />
                    {isRu ? exp.locationRu : exp.locationEn}
                  </span>
                </div>

                {/* Bottom Category Tag in Image */}
                <div className="absolute bottom-3 left-4 right-4">
                  <span className="text-xs font-serif uppercase tracking-widest text-amber-300 font-semibold">
                    {isRu ? exp.categoryRu : exp.categoryEn}
                  </span>
                </div>
              </div>

              {/* Card Body Content */}
              <div className="p-6 flex-1 flex flex-col justify-between space-y-5">
                <div className="space-y-3">
                  <h3 className="text-xl font-serif font-bold text-[#14231A] leading-snug group-hover:text-amber-800 transition-colors">
                    {isRu ? exp.titleRu : exp.titleEn}
                  </h3>

                  {/* Metadata Tags: Duration & Group size */}
                  <div className="flex flex-wrap items-center gap-3 text-xs text-[#5D6F63] border-y border-[#ECE5D8] py-2">
                    <span className="flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5 text-amber-600" />
                      {isRu ? exp.durationRu : exp.durationEn}
                    </span>
                    <span>•</span>
                    <span className="flex items-center gap-1">
                      <Users className="w-3.5 h-3.5 text-emerald-700" />
                      {isRu ? exp.groupRu : exp.groupEn}
                    </span>
                  </div>

                  <p className="text-xs sm:text-sm text-[#4A5B4F] font-light leading-relaxed">
                    {isRu ? exp.descriptionRu : exp.descriptionEn}
                  </p>

                  {/* Highlights Bullet List */}
                  <div className="space-y-1.5 pt-1">
                    {(isRu ? exp.highlightsRu : exp.highlightsEn).map((h, hIdx) => (
                      <div key={hIdx} className="flex items-start gap-2 text-xs text-[#334437]">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                        <span>{h}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Card CTA Button */}
                <div className="pt-3 border-t border-[#E8E1D5]">
                  <button
                    onClick={() => onOpenBookingModal(exp.titleEn)}
                    className="w-full py-3 px-4 bg-[#1B3B2B] hover:bg-amber-600 text-white font-bold text-xs uppercase tracking-wider rounded-xl transition-all flex items-center justify-center gap-2 cursor-pointer shadow-xs group-hover:shadow-md"
                  >
                    <span>{isRu ? 'Забронировать активность' : 'Reserve Experience'}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
