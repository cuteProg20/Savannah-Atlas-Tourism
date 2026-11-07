import React, { useState } from 'react';
import { 
  Camera, 
  Sparkles, 
  MapPin, 
  ZoomIn, 
  X, 
  ChevronLeft, 
  ChevronRight
} from 'lucide-react';
import { Language } from '../types';

interface GallerySectionProps {
  currentLang: Language;
}

interface GalleryItem {
  id: string;
  titleEn: string;
  titleRu: string;
  titleFr: string;
  titleEs: string;
  locationEn: string;
  locationRu: string;
  locationFr: string;
  locationEs: string;
  category: 'Wildlife' | 'Accommodations' | 'Landscapes' | 'Aerial';
  src: string;
  aspect: 'landscape' | 'portrait' | 'square';
  descriptionEn: string;
  descriptionRu: string;
  descriptionFr: string;
  descriptionEs: string;
  photographer: string;
}

export const GallerySection: React.FC<GallerySectionProps> = ({ currentLang }) => {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const getLocalized = (en: string, ru?: string, fr?: string, es?: string) => {
    if (currentLang === 'ru' && ru) return ru;
    if (currentLang === 'fr' && fr) return fr;
    if (currentLang === 'es' && es) return es;
    return en;
  };

  const galleryItems: GalleryItem[] = [
    {
      id: 'g-elephant-dust-bath',
      titleEn: 'Majestic Elephant Dust-Bath Ritual',
      titleRu: 'Ритуал пылевого купания слона',
      titleFr: 'Rituel majestueux du bain de poussière de l’éléphant',
      titleEs: 'Ritual majestuoso del baño de polvo del elefante',
      locationEn: 'Tarangire River Basin Corridor',
      locationRu: 'Коридор реки Тарангире',
      locationFr: 'Bassin du fleuve Tarangire',
      locationEs: 'Cuenca del río Tarangire',
      category: 'Wildlife',
      src: 'https://images.unsplash.com/photo-1557050543-4d5f4e07ef46?auto=format&fit=crop&w=1600&q=85',
      aspect: 'portrait',
      descriptionEn: 'A magnificent African bull elephant coating its skin in mineral-rich ochre dust to protect against the equatorial sun.',
      descriptionRu: 'Величественный африканский слон покрывает кожу минеральной пылью для защиты от солнца.',
      descriptionFr: 'Un éléphant mâle africain recouvrant sa peau de poussière minérale protectrice sous le soleil équatorial.',
      descriptionEs: 'Un majestuoso elefante macho africano cubriendo su piel con polvo mineral ocre para protegerse del sol.',
      photographer: 'Iswanto Arif',
    },
    {
      id: 'g-leopard-portrait',
      titleEn: 'Solitary Leopard in Shadowed Canopy',
      titleRu: 'Одинокий леопард в тенистых ветвях',
      titleFr: 'Léopard solitaire dans la canopée ombragée',
      titleEs: 'Leopardo solitario en el dosel sombreado',
      locationEn: 'Ruaha National Park & Usangu Wilderness',
      locationRu: 'Национальный парк Руаха и заповедник Усангу',
      locationFr: 'Parc National de Ruaha',
      locationEs: 'Parque Nacional de Ruaha',
      category: 'Wildlife',
      src: 'https://images.unsplash.com/photo-1456926631375-92c8ce872def?auto=format&fit=crop&w=1600&q=85',
      aspect: 'portrait',
      descriptionEn: 'A master of camouflage, this elusive predator peers calmly through the dappled woodland light of Southern Tanzania.',
      descriptionRu: 'Мастер маскировки, этот скрытный хищник спокойно смотрит сквозь лучи солнца в лесах Южной Танзании.',
      descriptionFr: 'Maître du camouflage, ce prédateur insaisissable observe paisiblement à travers les sous-bois du sud tanzanien.',
      descriptionEs: 'Maestro del camuflaje, este esquivo depredador observa con calma a través de la luz de los bosques del sur de Tanzania.',
      photographer: 'Deepak Nautiyal',
    },
    {
      id: 'g-lion-pride',
      titleEn: 'Serengeti Lioness at Golden Hour',
      titleRu: 'Львица на закате в Серенгети',
      titleFr: 'Lionne du Serengeti à l’heure dorée',
      titleEs: 'Leona del Serengeti en la hora dorada',
      locationEn: 'Central Serengeti National Park',
      locationRu: 'Центральный национальный парк Серенгети',
      locationFr: 'Parc National du Serengeti Central',
      locationEs: 'Parque Nacional Central del Serengeti',
      category: 'Wildlife',
      src: 'https://images.unsplash.com/photo-1516426122078-c23e76319801?auto=format&fit=crop&w=1600&q=85',
      aspect: 'landscape',
      descriptionEn: 'A pride matriarch surveying the golden savannah grasslands near the Seronera river valley as dusk falls.',
      descriptionRu: 'Глава прайда осматривает золотую саванну в долине реки Серонера в лучах заходящего солнца.',
      descriptionFr: 'La matriarche d’une troupe contemplant les plaines dorées de la vallée de Seronera au crépuscule.',
      descriptionEs: 'La matriarca de la manada vigilando los pastizales dorados de la sabana en el valle de Seronera al atardecer.',
      photographer: 'David K., Senior Naturalist',
    },
    {
      id: 'g-cheetah-hunt',
      titleEn: 'Cheetah on Termite Mound Vantage',
      titleRu: 'Гепард на сторожевом термитнике',
      titleFr: 'Guépard en vigie sur une termitière',
      titleEs: 'Guepardo en otero sobre un termitero',
      locationEn: 'Ndutu Plains & Southern Serengeti',
      locationRu: 'Равнины Ндуту и Южный Серенгети',
      locationFr: 'Plaines de Ndutu et Sud Serengeti',
      locationEs: 'Llanuras de Ndutu y Sur del Serengeti',
      category: 'Wildlife',
      src: 'https://images.unsplash.com/photo-1534567153574-2b12153a87f0?auto=format&fit=crop&w=1600&q=85',
      aspect: 'landscape',
      descriptionEn: 'Female cheetah scanning the horizon for Thomson gazelle herds across the open short grass plains.',
      descriptionRu: 'Самка гепарда высматривает стадо газелей Томсона на бескрайних равнинах короткой травы.',
      descriptionFr: 'Guépard femelle scrutant l’horizon à la recherche de gazelles sur les grandes plaines herbeuses.',
      descriptionEs: 'Guepardo hembra escaneando el horizonte en busca de gacelas en las llanuras de pasto corto.',
      photographer: 'Amani Tarimo',
    },
    {
      id: 'g-crater-mist',
      titleEn: 'Ngorongoro Caldera Floor in Morning Mist',
      titleRu: 'Утренний туман в кальдере Нгоронгоро',
      titleFr: 'Fond de la caldeira du Ngorongoro dans la brume matinale',
      titleEs: 'Fondo del cráter de Ngorongoro entre la bruma matinal',
      locationEn: 'Ngorongoro Conservation Area',
      locationRu: 'Природоохранная зона Нгоронгоро',
      locationFr: 'Zone de Conservation du Ngorongoro',
      locationEs: 'Área de Conservación de Ngorongoro',
      category: 'Landscapes',
      src: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1600&q=85',
      aspect: 'landscape',
      descriptionEn: 'Sunrise illuminates the 260 sq km UNESCO volcanic caldera floor teeming with black rhinos and flamingo lakes.',
      descriptionRu: 'Рассвет над вулканическим кратером площадью 260 кв. км, где обитают черные носороги и стаи фламинго.',
      descriptionFr: 'Le lever du soleil éclaire la caldeira volcanique classée UNESCO, abritant rhinocéros noirs et lacs de flamants roses.',
      descriptionEs: 'El amanecer ilumina la caldera volcánica de 260 km² protegida por la UNESCO con rinocerontes negros y flamencos.',
      photographer: 'Soren B., Conservation Pilot',
    },
    {
      id: 'g-luxury-tent',
      titleEn: 'Canvas Suite Under Serengeti Acacia',
      titleRu: 'Тентовый сьют под акациями Серенгети',
      titleFr: 'Suite de toile sous les acacias du Serengeti',
      titleEs: 'Suite de lona bajo las acacias del Serengeti',
      locationEn: 'Lamai Wedge · Northern Serengeti',
      locationRu: 'Треугольник Ламай · Северный Серенгети',
      locationFr: 'Lamai Wedge · Nord du Serengeti',
      locationEs: 'Lamai Wedge · Norte del Serengeti',
      category: 'Accommodations',
      src: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1600&q=85',
      aspect: 'portrait',
      descriptionEn: 'Ultra-luxury eco-tented suites elevated on teak timber decks designed for minimal environmental impact.',
      descriptionRu: 'Эко-павильоны на тиковых помостах, созданные для минимального воздействия на природу.',
      descriptionFr: 'Suites écologiques de luxe sous tente, surélevées sur des ponts de teck à faible impact environnemental.',
      descriptionEs: 'Suites ecológicas de ultralujo sobre plataformas de teca diseñadas para un mínimo impacto ambiental.',
      photographer: 'Singita Media',
    },
    {
      id: 'g-zanzibar-dhow',
      titleEn: 'Traditional Dhow on Turquoise Waters',
      titleRu: 'Традиционная лодка доу в лазурных водах',
      titleFr: 'Dhow traditionnel sur les eaux turquoise de Zanzibar',
      titleEs: 'Dhow tradicional en las aguas turquesas de Zanzíbar',
      locationEn: 'Nungwi Coast · Zanzibar Archipelago',
      locationRu: 'Побережье Нунгви · Архипелаг Занзибар',
      locationFr: 'Côte de Nungwi · Archipel de Zanzibar',
      locationEs: 'Costa de Nungwi · Archipiélago de Zanzíbar',
      category: 'Landscapes',
      src: 'https://images.unsplash.com/photo-1586861635167-e5223aadc9fe?auto=format&fit=crop&w=1600&q=85',
      aspect: 'landscape',
      descriptionEn: 'Handcrafted wooden sailing dhow skimming across coral reefs as the tide turns in the warm Indian Ocean.',
      descriptionRu: 'Деревянная парусная лодка доу скользит над коралловыми рифами Индийского океана.',
      descriptionFr: 'Voilier traditionnel en bois naviguant sur les récifs coralliens au rythme des marées de l’Océan Indien.',
      descriptionEs: 'Velero tradicional de madera navegando sobre los arrecifes de coral en el cálido Océano Índico.',
      photographer: 'Elena Rostova',
    },
    {
      id: 'g-kilimanjaro-summit',
      titleEn: 'Uhuru Peak Above Cloud Inversion',
      titleRu: 'Пик Ухуру над океаном облаков',
      titleFr: 'Pic Uhuru au-dessus de la mer de nuages',
      titleEs: 'Pico Uhuru sobre el mar de nubes',
      locationEn: 'Mount Kilimanjaro (5,895m)',
      locationRu: 'Гора Килиманджаро (5895 м)',
      locationFr: 'Mont Kilimandjaro (5 895m)',
      locationEs: 'Monte Kilimanjaro (5.895m)',
      category: 'Aerial',
      src: 'https://images.unsplash.com/photo-1650668301026-664448e89f74?auto=format&fit=crop&w=1600&q=85',
      aspect: 'landscape',
      descriptionEn: 'The Roof of Africa bathed in dawn alpine glow, with ancient glaciers and volcanic crater ridges.',
      descriptionRu: 'Крыша Африки в рассветных лучах солнца с ледниками и кратерными гребнями.',
      descriptionFr: 'Le toit de l’Afrique baigné dans la lueur de l’aube, avec ses glaciers millénaires et ses crêtes volcaniques.',
      descriptionEs: 'El Techo de África bañado por la luz del amanecer, con glaciares milenarios y crestas volcánicas.',
      photographer: 'Wilderness Mountain Guide Unit',
    },
  ];

  const categories = [
    { id: 'All', labelEn: 'All Sites', labelRu: 'Все локации', labelFr: 'Tous les sites', labelEs: 'Todos los sitios' },
    { id: 'Wildlife', labelEn: 'Wildlife Fauna', labelRu: 'Дикая природа', labelFr: 'Faune sauvage', labelEs: 'Fauna salvaje' },
    { id: 'Landscapes', labelEn: 'Landscapes', labelRu: 'Ландшафты', labelFr: 'Paysages', labelEs: 'Paisajes' },
    { id: 'Accommodations', labelEn: 'Lodges & Camps', labelRu: 'Лоджи и кемпы', labelFr: 'Lodges & Camps', labelEs: 'Lodges y Campamentos' },
    { id: 'Aerial', labelEn: 'Peaks & Aerial', labelRu: 'Вершины с воздуха', labelFr: 'Sommets & Vues aériennes', labelEs: 'Cumbres y Vistas aéreas' },
  ];

  const filteredItems = activeCategory === 'All' 
    ? galleryItems 
    : galleryItems.filter(item => item.category === activeCategory);

  const labels = {
    eyebrow: getLocalized('Visual Chronicle', 'Визуальная летопись', 'Chronique Visuelle', 'Crónica Visual'),
    heading: getLocalized('Tanzania Tourism Sites Gallery', 'Галерея национальных парков Танзании', 'Galerie des Sites Touristiques de Tanzanie', 'Galería de Sitios Turísticos de Tanzania'),
    subheading: getLocalized('Real wildlife masterworks captured across protected concessions and UNESCO sanctuaries.', 'Подлинные шедевры природы, запечатленные в охраняемых парках и заповедниках ЮНЕСКО.', 'Chefs-d’œuvre photographiques capturés dans les réserves protégées et sanctuaires de l’UNESCO.', 'Obras maestras fotográficas capturadas en concesiones protegidas y santuarios de la UNESCO.'),
  };

  const handleOpenLightbox = (index: number) => {
    setLightboxIndex(index);
  };

  const handleCloseLightbox = () => {
    setLightboxIndex(null);
  };

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (lightboxIndex !== null) {
      setLightboxIndex((lightboxIndex + 1) % filteredItems.length);
    }
  };

  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (lightboxIndex !== null) {
      setLightboxIndex((lightboxIndex - 1 + filteredItems.length) % filteredItems.length);
    }
  };

  return (
    <section id="gallery" className="py-20 bg-[#F4F6F4] text-[#1C2826] border-b border-[#E2E8E4] scroll-mt-20">
      <div className="max-w-7xl mx-auto px-8 space-y-10">
        
        {/* Header and Filter Tabs */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-4 border-b border-[#E2E8E4]">
          <div>
            <span className="text-xs font-semibold tracking-widest text-[#4A7061] uppercase flex items-center gap-2">
              <Camera className="w-3.5 h-3.5 text-[#1C4432]" />
              {labels.eyebrow}
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-[#0F2A1D] tracking-tight mt-1">
              {labels.heading}
            </h2>
            <p className="text-sm text-[#3A5248] max-w-2xl mt-2 font-light">
              {labels.subheading}
            </p>
          </div>

          {/* Category Filter Pills */}
          <div className="flex items-center gap-1.5 overflow-x-auto no-scrollbar bg-[#E2E8E4] p-1.5 rounded-full border border-[#D3DED7] shrink-0">
            {categories.map((cat) => {
              const catLabel = getLocalized(cat.labelEn, cat.labelRu, cat.labelFr, cat.labelEs);
              return (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className={`px-3.5 py-1.5 rounded-full text-xs font-medium transition-all cursor-pointer whitespace-nowrap ${
                    activeCategory === cat.id
                      ? 'bg-[#0F2A1D] text-[#FAF8F5] shadow-xs'
                      : 'text-[#2D4A3E] hover:text-[#0F2A1D]'
                  }`}
                >
                  {catLabel}
                </button>
              );
            })}
          </div>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredItems.map((item, index) => {
            const itemTitle = getLocalized(item.titleEn, item.titleRu, item.titleFr, item.titleEs);
            const itemLoc = getLocalized(item.locationEn, item.locationRu, item.locationFr, item.locationEs);

            return (
              <div
                key={item.id}
                onClick={() => handleOpenLightbox(index)}
                className="group relative h-80 rounded-3xl overflow-hidden cursor-pointer bg-[#0F2A1D] shadow-xs hover:shadow-xl transition-all duration-500 border border-[#E2E8E4]"
              >
                <img
                  src={item.src}
                  alt={itemTitle}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />

                {/* Dark Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent" />

                {/* Photographer Badge */}
                <div className="absolute top-3.5 left-3.5 px-2.5 py-1 bg-black/60 backdrop-blur-md rounded-full text-[10px] text-white/90 border border-white/10 font-medium">
                  {item.photographer}
                </div>

                {/* Zoom Icon Button */}
                <div className="absolute top-3.5 right-3.5 w-8 h-8 rounded-full bg-black/40 backdrop-blur-md text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <ZoomIn className="w-4 h-4" />
                </div>

                {/* Bottom Caption */}
                <div className="absolute bottom-4 left-4 right-4 text-white space-y-1">
                  <div className="text-[10px] uppercase tracking-wider text-[#D3DED7] flex items-center gap-1 font-semibold">
                    <MapPin className="w-3 h-3 text-[#A3B8AD]" />
                    <span>{itemLoc}</span>
                  </div>
                  <h3 className="text-base font-serif font-bold text-white group-hover:text-[#D3DED7] transition leading-snug">
                    {itemTitle}
                  </h3>
                </div>
              </div>
            );
          })}
        </div>

      </div>

      {/* Fullscreen Lightbox Modal */}
      {lightboxIndex !== null && (
        <div 
          onClick={handleCloseLightbox}
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4 sm:p-8 animate-fade-in"
        >
          <div 
            onClick={(e) => e.stopPropagation()}
            className="relative max-w-5xl w-full max-h-[90vh] bg-[#0F2A1D] rounded-3xl overflow-hidden flex flex-col shadow-2xl border border-white/10"
          >
            {/* Close Button */}
            <button
              onClick={handleCloseLightbox}
              className="absolute top-4 right-4 z-20 w-11 h-11 rounded-full bg-black/50 text-white flex items-center justify-center hover:bg-black/80 transition cursor-pointer border border-white/20"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Navigation Arrows */}
            <button
              onClick={handlePrev}
              className="absolute left-4 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-black/50 text-white flex items-center justify-center hover:bg-black/80 transition cursor-pointer border border-white/20"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            <button
              onClick={handleNext}
              className="absolute right-4 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-black/50 text-white flex items-center justify-center hover:bg-black/80 transition cursor-pointer border border-white/20"
            >
              <ChevronRight className="w-6 h-6" />
            </button>

            {/* Image Box */}
            <div className="relative flex-1 bg-black flex items-center justify-center min-h-[50vh] max-h-[70vh] overflow-hidden">
              <img
                src={filteredItems[lightboxIndex].src}
                alt={getLocalized(filteredItems[lightboxIndex].titleEn, filteredItems[lightboxIndex].titleRu, filteredItems[lightboxIndex].titleFr, filteredItems[lightboxIndex].titleEs)}
                className="max-h-full max-w-full object-contain"
                referrerPolicy="no-referrer"
              />
            </div>

            {/* Lightbox Footer Details */}
            <div className="p-6 bg-[#0F2A1D] border-t border-white/10 text-white flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
              <div className="space-y-1">
                <div className="flex items-center gap-2 text-xs uppercase tracking-wider text-[#A3B8AD] font-semibold">
                  <MapPin className="w-3.5 h-3.5 text-[#D3DED7]" />
                  <span>{getLocalized(filteredItems[lightboxIndex].locationEn, filteredItems[lightboxIndex].locationRu, filteredItems[lightboxIndex].locationFr, filteredItems[lightboxIndex].locationEs)}</span>
                  <span>·</span>
                  <span>Photo by {filteredItems[lightboxIndex].photographer}</span>
                </div>
                <h3 className="text-xl font-serif font-bold text-white">
                  {getLocalized(filteredItems[lightboxIndex].titleEn, filteredItems[lightboxIndex].titleRu, filteredItems[lightboxIndex].titleFr, filteredItems[lightboxIndex].titleEs)}
                </h3>
                <p className="text-xs text-[#D3DED7] font-light max-w-2xl">
                  {getLocalized(filteredItems[lightboxIndex].descriptionEn, filteredItems[lightboxIndex].descriptionRu, filteredItems[lightboxIndex].descriptionFr, filteredItems[lightboxIndex].descriptionEs)}
                </p>
              </div>

              <div className="text-xs text-[#A3B8AD] shrink-0 font-medium">
                {lightboxIndex + 1} / {filteredItems.length}
              </div>
            </div>

          </div>
        </div>
      )}
    </section>
  );
};
