import React, { useState } from 'react';
import { 
  Sparkles, 
  MapPin, 
  Quote, 
  ArrowRight, 
  ShieldCheck, 
  Layers, 
  Mountain, 
  TreePine, 
  Binoculars,
  Camera,
  Maximize2
} from 'lucide-react';
import { Language, Currency } from '../types';

interface AsymmetricNarrativeSectionProps {
  currentLang: Language;
  currentCurrency?: Currency;
  onOpenBooking: () => void;
  onOpenBrochure?: () => void;
}

export const AsymmetricNarrativeSection: React.FC<AsymmetricNarrativeSectionProps> = ({
  currentLang,
  onOpenBooking,
  onOpenBrochure,
}) => {
  const [activeMediaIndex, setActiveMediaIndex] = useState<number>(0);

  const getLocalized = (en: string, ru?: string, fr?: string, es?: string) => {
    if (currentLang === 'ru' && ru) return ru;
    if (currentLang === 'fr' && fr) return fr;
    if (currentLang === 'es' && es) return es;
    return en;
  };

  const mediaItems = [
    {
      id: 'elephant-dust-bath',
      titleEn: 'Majestic Elephant Dust-Bath Ritual',
      titleRu: 'Ритуал пылевого купания слона в саванне',
      titleFr: 'Rituel majestueux du bain de poussière de l’éléphant',
      titleEs: 'Ritual majestuoso del baño de polvo del elefante',
      subtitleEn: 'Tarangire River Basin · Master Sighting by Iswanto Arif',
      subtitleRu: 'Бассейн реки Тарангире · Снимок: Iswanto Arif',
      subtitleFr: 'Bassin du fleuve Tarangire · Photo par Iswanto Arif',
      subtitleEs: 'Cuenca del río Tarangire · Fotografía de Iswanto Arif',
      image: 'https://images.unsplash.com/photo-1557050543-4d5f4e07ef46?auto=format&fit=crop&w=1600&q=85',
      camera: 'Iswanto Arif · Wildlife Masterwork',
      span: 'col-span-12 md:col-span-7 h-80 sm:h-96',
    },
    {
      id: 'leopard-shadows',
      titleEn: 'Leopard in Dappled Riverine Canopy',
      titleRu: 'Леопард в тени прибрежных зарослей',
      titleFr: 'Léopard dans la canopée fluviale ombragée',
      titleEs: 'Leopardo en el dosel ribereño sombreado',
      subtitleEn: 'Ruaha River Sanctuary · Master Sighting by Deepak Nautiyal',
      subtitleRu: 'Заповедник реки Руаха · Снимок: Deepak Nautiyal',
      subtitleFr: 'Sanctuaire de la rivière Ruaha · Photo par Deepak Nautiyal',
      subtitleEs: 'Santuario del río Ruaha · Fotografía de Deepak Nautiyal',
      image: 'https://images.unsplash.com/photo-1456926631375-92c8ce872def?auto=format&fit=crop&w=1600&q=85',
      camera: 'Deepak Nautiyal · Apex Predator Study',
      span: 'col-span-12 md:col-span-5 h-80 sm:h-96',
    },
    {
      id: 'savanna-lions',
      titleEn: 'Resident Pride on Granite Kopjes',
      titleRu: 'Прайд львов на гранитных останцах',
      titleFr: 'Fierté de lions sur les kopjes de granit',
      titleEs: 'Manada de leones en los kopjes de granito',
      subtitleEn: 'Seronera Valley Corridor',
      subtitleRu: 'Долина Серонера',
      subtitleFr: 'Couloir de la vallée de Seronera',
      subtitleEs: 'Corredor del valle de Seronera',
      image: 'https://images.unsplash.com/photo-1534567153574-2b12153a87f0?auto=format&fit=crop&w=1200&q=85',
      camera: 'Nikon Z9 · 600mm f/4 TC',
      span: 'col-span-12 md:col-span-6 h-72 sm:h-80',
    },
    {
      id: 'baobab-sunset',
      titleEn: 'Tarangire Ancient Baobab Canopy at Dusk',
      titleRu: 'Древние баобабы Тарангире на закате',
      titleFr: 'Baobabs millénaires de Tarangire au crépuscule',
      titleEs: 'Baobabs milenarios de Tarangire al atardecer',
      subtitleEn: 'Elephant Migration Route',
      subtitleRu: 'Путь миграции слонов',
      subtitleFr: 'Route de migration des éléphants',
      subtitleEs: 'Ruta de migración de elefantes',
      image: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1200&q=85',
      camera: 'Hasselblad X2D · 38mm f/2.5',
      span: 'col-span-12 md:col-span-6 h-72 sm:h-80',
    },
  ];

  const telemetrySpecs = [
    {
      labelEn: 'Private Sanctuary',
      labelRu: 'Виллы и павильоны',
      labelFr: 'Pavillons d’exception',
      labelEs: 'Pabellones de lujo',
      valueEn: '8 Bespoke Tented Pavilions',
      valueRu: '8 авторских павильонов',
      valueFr: '8 pavillons de toile privés',
      valueEs: '8 pabellones de lona privados',
      icon: Layers,
    },
    {
      labelEn: 'Protected Territory',
      labelRu: 'Охраняемая концессия',
      labelFr: 'Territoire protégé',
      labelEs: 'Territorio protegido',
      valueEn: '350,000 Wilderness Acres',
      valueRu: '350 000 акров природы',
      valueFr: '350 000 acres de nature sauvage',
      valueEs: '350.000 acres de vida salvaje',
      icon: TreePine,
    },
    {
      labelEn: 'Conservation Focus',
      labelRu: 'Эко-миссия',
      labelFr: 'Mission écologique',
      labelEs: 'Misión ecológica',
      valueEn: '100% Off-Grid Solar & Predator Corridors',
      valueRu: '100% солнечная энергия и защита львов',
      valueFr: '100% solaire et corridors de prédateurs',
      valueEs: '100% solar y corredores de depredadores',
      icon: ShieldCheck,
    },
    {
      labelEn: 'Elevation & Climate',
      labelRu: 'Высота и климат',
      labelFr: 'Altitude & Climat',
      labelEs: 'Altitud y Clima',
      valueEn: '1,620m ASL · 26°C Day / 14°C Night',
      valueRu: '1620 м над ур. моря · 26°C / 14°C',
      valueFr: '1 620m d’altitude · 26°C / 14°C',
      valueEs: '1.620m de altitud · 26°C / 14°C',
      icon: Mountain,
    },
    {
      labelEn: 'Fauna Index',
      labelRu: 'Индекс фауны',
      labelFr: 'Indice de faune',
      labelEs: 'Índice de fauna',
      valueEn: '72+ Mammal Species · Big Five Resident',
      valueRu: '72+ вида млекопитающих · Большая Пятерка',
      valueFr: '72+ espèces de mammifères · Big Five résidents',
      valueEs: '72+ especies de mamíferos · Cinco Grandes residentes',
      icon: Sparkles,
    },
    {
      labelEn: 'Optics Standard',
      labelRu: 'Оптика экспедиции',
      labelFr: 'Optique de terrain',
      labelEs: 'Óptica de expedición',
      valueEn: 'Swarovski HD & Leica Optics In-Vehicle',
      valueRu: 'Оптика Swarovski HD и Leica в каждом авто',
      valueFr: 'Jumelles Swarovski HD & Leica dans chaque 4x4',
      valueEs: 'Óptica Swarovski HD y Leica en cada vehículo',
      icon: Binoculars,
    },
  ];

  const sectionEyebrow = getLocalized(
    'Sanctuary & Natural History',
    'Наследие и естествознание',
    'Sanctuaire & Histoire Naturelle',
    'Santuario e Historia Natural'
  );

  const sectionHeading = getLocalized(
    'Where Primordial Serengeti Meets Architectural Sanctuary',
    'Где первозданный Серенгети встречается с архитектурным убежищем',
    'Où le Serengeti originel rencontre un sanctuaire d’exception',
    'Donde el Serengeti primordial se une a un santuario de excepción'
  );

  const narrativeP1 = getLocalized(
    'Perched on the private periphery of the Northern Serengeti and the volcanic highlands of Ngorongoro, our sanctuary was conceived as an architectural dialogue between raw wilderness and profound tranquility. Free of boundary fences, the migration moves unhindered across ancient acacia corridors right outside your canvas terrace.',
    'Расположенное на границе первозданных равнин Северного Серенгети и вулканического нагорья Нгоронгоро, наше убежище было спроектировано как мост между дикой природой и непревзойденным комфортом. Здесь нет заборов — только бескрайний горизонт саванны, по которому ежегодно проходят два миллиона антилоп гну и зебр.',
    'Niché à la lisière sauvage du nord du Serengeti et des hauts plateaux du Ngorongoro, notre sanctuaire a été conçu comme un dialogue intime entre nature brute et sérénité absolue. Sans barrières, la grande migration traverse librement les acacias millénaires sous vos yeux.',
    'Ubicado en la periferia salvaje del norte del Serengeti y las tierras altas del Ngorongoro, nuestro santuario fue concebido como un diálogo íntimo entre la naturaleza salvaje y la serenidad más profunda. Sin vallas, la gran migración avanza libremente ante su terraza de lona.'
  );

  const narrativeP2 = getLocalized(
    'Every dawn begins with the awakening chorus of the savanna—crowned cranes taking flight, lion prides returning from nocturnal patrols, and the fragrance of single-origin Tanzanian peaberry roast. Guided by certified senior wildlife ecologists, our guests access private concessions completely closed to standard tourist circuits.',
    'Каждый рассвет начинается с шепота просыпающейся саванны, криков орлов-скоморохов и аромата свежесваренного танзанийского кофе. В сопровождении биологов-натуралистов и рейнджеров вы исследуете закрытые концессии, недоступные для массового туризма.',
    'Chaque aube commence avec l’éveil de la savane : envol des grues couronnées, retour de chasse des lions et arôme délicat d’un café grand cru de Tanzanie. Accompagnés par des écologistes experts, vous profitez de concessions privées préservées de tout tourisme de masse.',
    'Cada amanecer despierta con los cantos de la sabana: grullas coronadas en vuelo, leones que regresan de patrullar y el aroma del café selecto tanzano. Acompañados por biólogos y naturalistas expertos, exploran concesiones privadas fuera del turismo convencional.'
  );

  const quoteText = getLocalized(
    '“We do not simply observe East Africa; we listen to its ancient cadence and ensure that every footprint leaves the soil richer than we found it.”',
    '«Мы не просто наблюдаем за Восточной Африкой; мы прислушиваемся к ее древнему ритму и делаем все, чтобы каждый наш шаг обогащал эту землю».',
    '« Nous ne faisons pas que contempler l’Afrique de l’Est ; nous écoutons son rythme séculaire et veillons à ce que chaque voyage enrichisse la terre qui nous accueille. »',
    '« No nos limitamos a contemplar África Oriental; escuchamos su ritmo ancestral y nos aseguramos de que cada expedición deje la tierra más viva y protegida. »'
  );

  const quoteAuthor = getLocalized(
    'Dr. Emmanuel Mollel · Lead Ecologist & Conservation Director',
    'Д-р Эммануэль Моллель · Главный эколог и директор фонда',
    'Dr. Emmanuel Mollel · Écologiste en chef et directeur de la conservation',
    'Dr. Emmanuel Mollel · Ecólogo principal y director de conservación'
  );

  const photoArchiveLabel = getLocalized(
    'Expedition Visual Archive · Click to Focus',
    'Визуальный архив экспедиций · Нажмите для просмотра',
    'Archives visuelles de l’expédition · Cliquer pour agrandir',
    'Archivo visual de la expedición · Clic para ampliar'
  );

  const ctaButton = getLocalized(
    'Plan Custom Safari',
    'Запросить маршрут',
    'Créer mon safari sur mesure',
    'Diseñar safari a medida'
  );

  return (
    <section 
      id="narrative" 
      className="py-20 bg-[#F4F6F4] text-[#1C2826] border-b border-[#E2E8E4] relative scroll-mt-20"
    >
      <div className="max-w-7xl mx-auto px-8 space-y-16">
        
        {/* Section Pre-header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 pb-4 border-b border-[#E2E8E4]">
          <div className="space-y-1">
            <span className="text-xs font-semibold tracking-widest text-[#4A7061] uppercase flex items-center gap-2">
              <Sparkles className="w-3.5 h-3.5 text-[#1C4432]" />
              {sectionEyebrow}
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-[#0F2A1D] tracking-tight">
              {sectionHeading}
            </h2>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={onOpenBooking}
              className="px-6 py-3 bg-[#0F2A1D] hover:bg-[#1C4432] text-[#FAF8F5] text-xs font-medium rounded-full transition-all flex items-center gap-2 cursor-pointer shadow-sm"
            >
              <span>{ctaButton}</span>
              <ArrowRight className="w-3.5 h-3.5 text-[#A3B8AD]" />
            </button>
          </div>
        </div>

        {/* Asymmetric 2-Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column (5 Cols): Narrative Storytelling, Naturalist Quote & Telemetry Bar */}
          <div className="lg:col-span-5 space-y-8">
            
            {/* Storytelling Paragraphs */}
            <div className="space-y-5 text-base sm:text-lg text-[#2D4A3E] font-light leading-relaxed">
              <p>{narrativeP1}</p>
              <p className="text-sm sm:text-base text-[#3A5248] leading-relaxed">{narrativeP2}</p>
            </div>

            {/* Naturalist Quote Box */}
            <div className="relative bg-[#E2E8E4] rounded-3xl p-7 border border-[#D3DED7] shadow-xs space-y-4">
              <Quote className="w-8 h-8 text-[#1C4432]/30 absolute top-5 right-5" />
              <p className="text-base sm:text-lg font-serif italic text-[#0F2A1D] leading-relaxed relative z-10">
                {quoteText}
              </p>
              <div className="pt-2 border-t border-[#D3DED7] flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-[#0F2A1D] text-[#FAF8F5] flex items-center justify-center text-xs font-bold font-serif">
                  EM
                </div>
                <div>
                  <div className="text-xs font-bold text-[#0F2A1D]">{quoteAuthor}</div>
                  <div className="text-[11px] text-[#4A7061]">Arusha & Serengeti Field Station</div>
                </div>
              </div>
            </div>

            {/* Telemetry Facts Grid */}
            <div className="grid grid-cols-2 gap-3 pt-2">
              {telemetrySpecs.map((spec, idx) => {
                const IconComponent = spec.icon;
                const specLabel = getLocalized(spec.labelEn, spec.labelRu, spec.labelFr, spec.labelEs);
                const specValue = getLocalized(spec.valueEn, spec.valueRu, spec.valueFr, spec.valueEs);
                return (
                  <div 
                    key={idx} 
                    className="p-4 rounded-2xl bg-white border border-[#E2E8E4] shadow-xs space-y-1 hover:border-[#4A7061] transition"
                  >
                    <div className="flex items-center gap-2 text-[10px] font-bold tracking-wider text-[#4A7061] uppercase">
                      <IconComponent className="w-3.5 h-3.5 text-[#1C4432]" />
                      <span>{specLabel}</span>
                    </div>
                    <div className="text-xs font-bold text-[#0F2A1D] leading-tight">
                      {specValue}
                    </div>
                  </div>
                );
              })}
            </div>

          </div>

          {/* Right Column (7 Cols): Asymmetric Media Mosaic with Interactive Viewer */}
          <div className="lg:col-span-7 space-y-4">
            <div className="flex items-center justify-between px-1">
              <span className="text-[11px] font-semibold tracking-widest text-[#4A7061] uppercase flex items-center gap-1.5">
                <Camera className="w-3.5 h-3.5 text-[#1C4432]" />
                {photoArchiveLabel}
              </span>
              <span className="text-xs text-[#4A7061]">
                {activeMediaIndex + 1} / {mediaItems.length}
              </span>
            </div>

            {/* Asymmetric Image Grid */}
            <div className="grid grid-cols-12 gap-4">
              {mediaItems.map((item, idx) => {
                const isSelected = activeMediaIndex === idx;
                const itemTitle = getLocalized(item.titleEn, item.titleRu, item.titleFr, item.titleEs);
                const itemSub = getLocalized(item.subtitleEn, item.subtitleRu, item.subtitleFr, item.subtitleEs);

                return (
                  <div 
                    key={item.id} 
                    onClick={() => setActiveMediaIndex(idx)}
                    className={`${item.span} relative rounded-3xl overflow-hidden cursor-pointer group shadow-sm transition-all duration-300 ${
                      isSelected ? 'ring-2 ring-[#0F2A1D] shadow-md' : 'opacity-90 hover:opacity-100'
                    }`}
                  >
                    <img 
                      src={item.image} 
                      alt={itemTitle} 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                      referrerPolicy="no-referrer"
                    />
                    
                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                    {/* Top camera watermark */}
                    <div className="absolute top-3 left-3 px-2.5 py-1 bg-black/50 backdrop-blur-md rounded-full text-[10px] font-medium text-white/90 border border-white/10">
                      {item.camera}
                    </div>

                    {/* Bottom Caption */}
                    <div className="absolute bottom-4 left-4 right-4 text-white">
                      <div className="text-[10px] uppercase tracking-wider text-[#D3DED7] flex items-center gap-1 mb-0.5">
                        <MapPin className="w-3 h-3 text-[#A3B8AD]" />
                        <span>{itemSub}</span>
                      </div>
                      <div className="text-sm font-serif font-bold text-white group-hover:text-[#D3DED7] transition">
                        {itemTitle}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
