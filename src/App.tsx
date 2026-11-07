import React, { useState } from 'react';
import {
  Globe,
  Menu,
  X,
  ArrowRight,
  Sparkles,
  MapPin,
  Calendar,
  Clock,
  CheckCircle2,
  ChevronDown
} from 'lucide-react';
import { Language, Currency } from './types';
import { CURRENCY_RATES } from './data/translations';
import { JourneyDetailModal, SignatureJourney } from './components/JourneyDetailModal';
import { AsymmetricNarrativeSection } from './components/AsymmetricNarrativeSection';
import { AccommodationsSection } from './components/AccommodationsSection';
import { GallerySection } from './components/GallerySection';
import { GettingThereSection } from './components/GettingThereSection';
import { PlanTripSection } from './components/PlanTripSection';
import { BookingInquiryModal } from './components/BookingInquiryModal';
import { ImpactModal } from './components/ImpactModal';

const SIGNATURE_JOURNEYS: SignatureJourney[] = [
  {
    id: 'serengeti-stillness',
    title: 'Serengeti in Stillness',
    ruTitle: 'Серенгети в тишине',
    frTitle: 'Le Serengeti dans le Silence',
    esTitle: 'Serengeti en Silencio',
    tag: '6 NIGHTS · PRIVATE CAMP',
    ruTag: '6 НОЧЕЙ · ПРИВАТНЫЙ КЕМП',
    frTag: '6 NUITS · CAMP PRIVÉ',
    esTag: '6 NOCHES · CAMPAMENTO PRIVADO',
    image: 'https://images.unsplash.com/photo-1516426122078-c23e76319801?auto=format&fit=crop&w=1600&q=85',
    nights: 6,
    durationText: '6 Nights / 7 Days',
    ruDurationText: '6 Ночей / 7 Дней',
    frDurationText: '6 Nuits / 7 Jours',
    esDurationText: '6 Noches / 7 Días',
    seasonText: 'Jun – Oct & Dec – Mar',
    ruSeasonText: 'Июн – Окт & Дек – Мар',
    frSeasonText: 'Juin – Oct & Déc – Mars',
    esSeasonText: 'Jun – Oct y Dic – Mar',
    locationText: 'Central & Northern Serengeti',
    ruLocationText: 'Центральный и Северный Серенгети',
    frLocationText: 'Serengeti Central & Nord',
    esLocationText: 'Serengeti Central y Norte',
    priceUSD: 3850,
    description: 'An intimate, low-impact private safari based out of seasonal luxury canvas suites pitched away from tourist corridors. Follow predator prides at sunrise, track river crossings, and dine beneath the equatorial Milky Way.',
    ruDescription: 'Камерное сафари с проживанием в эксклюзивных тентовых сьютах вдали от скоплений туристов. Наблюдение за охотой хищников на рассвете, переправы миграции и ужины под звездами.',
    frDescription: 'Un safari intime et éco-responsable au cœur de suites en toile saisonnières, à l’écart des axes touristiques. Suivez les fauves à l’aube et dînez sous la Voie Lactée équatoriale.',
    esDescription: 'Un safari privado e íntimo en suites de lona de temporada lejos de las rutas concurridas. Observe manadas de leones al amanecer y cene bajo la Vía Láctea ecuatorial.',
    highlights: [
      'Private eco-camp relocated along wildlife migratory paths',
      'Dawn hot-air balloon ascent over the Serengeti plains with bush champagne breakfast',
      'Exclusive 4x4 Land Cruiser with unlimited mileage and high-resolution optic scopes',
      'Twilight predator drives utilizing red-spectrum wildlife-safe spotlights'
    ],
    ruHighlights: [
      'Приватный эко-кемп, перемещаемый по ходу миграции животных',
      'Полет на воздушном шаре на рассвете с завтраком с шампанским в саванне',
      'Эксклюзивный джип Land Cruiser без лимита пробега с профессиональной оптикой',
      'Сумеречные сафари с безопасными для животных красными прожекторами'
    ],
    frHighlights: [
      'Campement écologique privé repositionné selon les couloirs de migration',
      'Vol en montgolfière à l’aube au-dessus du Serengeti avec petit-déjeuner au champagne',
      'Land Cruiser 4x4 privé avec kilométrage illimité et longues-vues haute définition',
      'Safaris crépusculaires avec projecteurs à lumière rouge respectueuse de la faune'
    ],
    esHighlights: [
      'Campamento ecológico privado reubicado según la ruta migratoria',
      'Vuelo en globo aerostático al amanecer con desayuno y champán en plena sabana',
      'Vehículo 4x4 privado con kilometraje ilimitado y ópticas de alta resolución',
      'Safaris al atardecer con focos de luz roja seguros para la fauna salvaje'
    ],
    included: [
      'All internal chartered flights (Arusha - Serengeti - Arusha)',
      '100% private vehicle and senior biologist guide',
      'All TANAPA park conservation and concession permits',
      'All meals, sommelier wines, and laundry in camp'
    ],
    ruIncluded: [
      'Все внутренние перелеты (Аруша - Серенгети - Аруша)',
      'Персональный джип и русско-/англоязычный гид-биолог',
      'Все парковые и природоохранные сборы TANAPA',
      'Полный пансион, напитки и услуги кемпа'
    ],
    frIncluded: [
      'Tous les vols intérieurs affrétés (Arusha - Serengeti - Arusha)',
      'Véhicule 100% privé avec guide biologiste senior',
      'Tous les permis et droits d’entrée aux parcs TANAPA',
      'Pension complète, sélection de vins et blanchisserie au camp'
    ],
    esIncluded: [
      'Todos los vuelos internos en avioneta (Arusha - Serengeti - Arusha)',
      'Vehículo 4x4 totalmente privado con guía naturalista experto',
      'Todos los permisos y tasas de conservación de parques TANAPA',
      'Pensión completa, vinos seleccionados y servicio de lavandería'
    ],
    conservationFocus: 'Directly funds the Frankfurt Zoological Society anti-snare patrols and Serengeti wild dog restoration programs.',
    ruConservationFocus: 'Прямое финансирование патрулей против браконьерских силков Зоологического общества Франкфурта.',
    frConservationFocus: 'Finance directement les patrouilles anti-braconnage de la Société Zoologique de Francfort au Serengeti.',
    esConservationFocus: 'Financia directamente las patrullas contra la caza furtiva de la Sociedad Zoológica de Fráncfort.'
  },
  {
    id: 'ruaha-after-rain',
    title: 'Ruaha After Rain',
    ruTitle: 'Руаха после дождей',
    frTitle: 'Ruaha Après la Pluie',
    esTitle: 'Ruaha Tras la Lluvia',
    tag: '7 NIGHTS · WALKING SAFARI',
    ruTag: '7 НОЧЕЙ · ПЕШЕЕ САФАРИ',
    frTag: '7 NUITS · SAFARI À PIED',
    esTag: '7 NOCHES · SAFARI A PIE',
    image: 'https://images.unsplash.com/photo-1456926631375-92c8ce872def?auto=format&fit=crop&w=1600&q=85',
    nights: 7,
    durationText: '7 Nights / 8 Days',
    ruDurationText: '7 Ночей / 8 Дней',
    frDurationText: '7 Nuits / 8 Jours',
    esDurationText: '7 Noches / 8 Días',
    seasonText: 'Jun – Nov (Dry Riverbeds)',
    ruSeasonText: 'Июн – Ноя (Сухой сезон)',
    frSeasonText: 'Juin – Nov (Lits de rivières asséchés)',
    esSeasonText: 'Jun – Nov (Cauces secos)',
    locationText: 'Ruaha National Park & Usangu Sand Rivers',
    ruLocationText: 'Национальный парк Руаха и песчаные реки Усангу',
    frLocationText: 'Parc National de Ruaha & Rivières de sable d’Usangu',
    esLocationText: 'Parque Nacional de Ruaha y Ríos de Usangu',
    priceUSD: 4200,
    description: 'Venture into the wild heart of Southern Tanzania on foot. Guided by master walking guides and armed scouts, read fresh leopard tracks, explore baobab forests, and experience authentic lightweight fly-camping along dry sand riverbeds.',
    ruDescription: 'Пешая экспедиция в дикое сердце Южной Танзании. В сопровождении вооруженных рейнджеров вы исследуете следы леопардов, вековые баобабовые рощи и проведете ночи в мобильном кемпе под открытым небом.',
    frDescription: 'Aventurez-vous à pied au cœur sauvage du Sud tanzanien. Guidé par des maîtres pisteurs, déchiffrez les traces de léopards et vivez le bivouac léger le long des lits de sable.',
    esDescription: 'Adéntrese a pie en el corazón virgen del sur de Tanzania. Con guías expertos y guardabosques armados, rastree huellas de leopardo y disfrute de campamentos ligeros bajo las estrellas.',
    highlights: [
      'Active walking safaris covering 8-12 km daily with botanical and tracking focus',
      'Leopard & apex predator tracking along dry sand riverbeds with high-optic spotting scopes',
      'Two nights lightweight mobile fly-camping beneath mosquito-net dome tents',
      'Stargazing with field astronomers in zero-light-pollution wilderness'
    ],
    ruHighlights: [
      'Пешие сафари по 8-12 км в день с изучением следов и флоры саванны',
      'Следопытство и наблюдение за леопардами вдоль высохших рек с оптикой Leica',
      'Две ночи в легком кемпе под куполом из москитной сетки под звездами',
      'Астрономические наблюдения саванны в условиях абсолютной темноты'
    ],
    frHighlights: [
      'Safaris à pied de 8 à 12 km par jour axés sur la botanique et le pistage',
      'Pistage des léopards le long des rivières de sable avec longues-vues haute précision',
      'Deux nuits de bivouac mobile sous tentes dômes moustiquaires panoramiques',
      'Observation astronomique du ciel austral dans une zone sans pollution lumineuse'
    ],
    esHighlights: [
      'Safaris a pie activos de 8 a 12 km diarios con enfoque botánico y rastreo',
      'Rastreo de leopardos en cauces secos con telescopios terrestres de alta gama',
      'Dos noches de vivac ligero bajo domos de mosquitera con vista al cielo abierto',
      'Astronomía de campo en una de las zonas con menor contaminación lumínica del planeta'
    ],
    included: [
      'Private bush flights from Dar es Salaam / Arusha to Msembe Airstrip',
      'Armed TANAPA wildlife scouts and certified walking master guides',
      'All lightweight camping gear, hot bucket showers & field kitchen',
      'Community eco-levy supporting Usangu Wetland conservation'
    ],
    ruIncluded: [
      'Перелеты на легких самолетах до взлетной полосы Мсембе',
      'Вооруженное сопровождение рейнджеров и сертифицированные гиды по трекингу',
      'Все походное снаряжение, походный душ и полевой шеф-повар',
      'Экологический сбор в поддержку водно-болотных угодий Усангу'
    ],
    frIncluded: [
      'Vols de brousse privés depuis Dar es Salaam / Arusha vers la piste de Msembe',
      'Rangers armés TANAPA et guides naturalistes certifiés pour la marche',
      'Tout l’équipement de bivouac, douches chaudes de brousse et chef de camp',
      'Taxe écologique communautaire soutenant les zones humides d’Usangu'
    ],
    esIncluded: [
      'Vuelos privados en avioneta desde Dar es Salaam / Arusha a Msembe',
      'Rangers armados de TANAPA y guías maestros certificados de senderismo',
      'Todo el equipo de campamento, duchas calientes de cubo y cocinero de campo',
      'Tasa de conservación comunitaria para los humedales de Usangu'
    ],
    conservationFocus: 'Supports Ruaha Carnivore Project leopard & lion guardian collars and camera trap research grids.',
    ruConservationFocus: 'Поддержка проекта защиты крупных кошачьих Ruaha Carnivore Project.',
    frConservationFocus: 'Soutient le programme de colliers GPS pour lions et léopards du Ruaha Carnivore Project.',
    esConservationFocus: 'Apoya el monitoreo con collares GPS del Ruaha Carnivore Project.'
  },
  {
    id: 'tarangire-at-dusk',
    title: 'Tarangire at Dusk',
    ruTitle: 'Тарангире на закате',
    frTitle: 'Tarangire au Crépuscule',
    esTitle: 'Tarangire al Atardecer',
    tag: '5 NIGHTS · FAMILY CAMP',
    ruTag: '5 НОЧЕЙ · СЕМЕЙНЫЙ КЕМП',
    frTag: '5 NUITS · CAMP FAMILLE',
    esTag: '5 NOCHES · CAMPAMENTO FAMILIAR',
    image: 'https://images.unsplash.com/photo-1564760055775-d63b17a55c44?auto=format&fit=crop&w=1600&q=85',
    nights: 5,
    durationText: '5 Nights / 6 Days',
    ruDurationText: '5 Ночей / 6 Дней',
    frDurationText: '5 Nuits / 6 Jours',
    esDurationText: '5 Noches / 6 Días',
    seasonText: 'Year-Round (Peak: Jul – Oct)',
    ruSeasonText: 'Круглый год (Пик: Июл – Окт)',
    frSeasonText: 'Toute l’année (Pic : Juil – Oct)',
    esSeasonText: 'Todo el año (Temporada alta: Jul – Oct)',
    locationText: 'Tarangire Silale Swamps & Manyara Escarpment',
    ruLocationText: 'Болота Силале в Тарангире и рифтовый уступ Маньяра',
    frLocationText: 'Marais de Silale à Tarangire & Escarpement de Manyara',
    esLocationText: 'Pantanos de Silale en Tarangire y Falla de Manyara',
    priceUSD: 2950,
    description: 'Designed specifically for multi-generational families. Witness towering red-dust elephant herds roaming between millennial baobab trees, embark on gentle bush walks for junior rangers, and relax in spacious connected family canvas suites.',
    ruDescription: 'Программа создана для семейных путешествий. Наблюдайте сотни слонов среди тысячелетних баобабов, участвуйте в интерактивных уроках следопытов для детей и отдыхайте в просторных семейных сьютах.',
    frDescription: 'Spécialement conçu pour les familles multigénérationnelles. Admirez d’immenses troupeaux d’éléphants au milieu des baobabs millénaires et profitez d’activités adaptées aux jeunes explorateurs.',
    esDescription: 'Diseñado especialmente para viajes familiares. Admire manadas de elefantes entre baobabs milenarios, participe en talleres de rastreo para jóvenes y descanse en suites familiares interconectadas.',
    highlights: [
      'World-renowned elephant herd congregations (up to 300 individuals per sighting)',
      'Junior Naturalist Program: animal track casting, bird identification, bush survival',
      'Sundowner picnics atop ancient granite kopjes overlooking the Rift Valley',
      'Night game drives in private conservancies to spot bushbabies and aardvarks'
    ],
    ruHighlights: [
      'Крупнейшая в Африке концентрация слонов (до 300 особей на водопоях)',
      'Программа «Юный натуралист»: слепки следов, определение птиц, уроки саванны',
      'Пикники на закате на гранитных холмах копье с видом на Рифтовую долину',
      'Ночные сафари в частных концессиях: галаго, трубкозубы и ночные хищники'
    ],
    frHighlights: [
      'Rassemblements spectaculaires d’éléphants (jusqu’à 300 spécimens par observation)',
      'Programme Jeune Naturaliste : moulage d’empreintes, initiation aux oiseaux et à la savane',
      'Pique-niques au coucher du soleil sur les kopjes granitiques dominant la Vallée du Rift',
      'Safaris nocturnes en concession privée pour observer la faune nocturne'
    ],
    esHighlights: [
      'Espectaculares manadas de elefantes (hasta 300 ejemplares por avistamiento)',
      'Programa Jóvenes Naturalistas: moldes de huellas, aves y orientación en la sabana',
      'Merienda al atardecer sobre colinas de granito con vista al Gran Valle del Rift',
      'Safaris nocturnos en reservas privadas para observar fauna nocturna'
    ],
    included: [
      'Private long-wheelbase Land Cruiser with child safety seats and field binoculars',
      'Dedicated family host and youth safari coordinator',
      'All meals, snacks, soft drinks, and park conservation entry fees',
      'Private transfer from Kilimanjaro International Airport (JRO)'
    ],
    ruIncluded: [
      'Просторный джип Land Cruiser с детскими креслами и биноклями',
      'Персональный гид и координатор семейных активностей',
      'Полный пансион, детское меню, закуски и парковые билеты',
      'Встреча и индивидуальный трансфер из аэропорта Килиманджаро (JRO)'
    ],
    frIncluded: [
      'Land Cruiser 4x4 privé avec sièges enfants et jumelles d’observation',
      'Hôte dédié aux familles et animateur junior safari',
      'Pension complète, collations, boissons fraîches et droits de parcs',
      'Transfert VIP privé depuis l’Aéroport International du Kilimandjaro (JRO)'
    ],
    esIncluded: [
      'Land Cruiser privado con sillas infantiles y prismáticos de campo',
      'Anfitrión exclusivo para familias y coordinador de actividades juveniles',
      'Pensión completa, aperitivos, refrescos y tasas de entrada a los parques',
      'Traslado privado desde el Aeropuerto Internacional del Kilimanjaro (JRO)'
    ],
    conservationFocus: 'Protects the Tarangire-Manyara Elephant Wildlife Corridor preventing human-wildlife conflict.',
    ruConservationFocus: 'Защита миграционного коридора слонов Тарангире-Маньяра от фрагментации.',
    frConservationFocus: 'Protège le corridor de migration des éléphants entre Tarangire et Manyara.',
    esConservationFocus: 'Protege el corredor migratorio de elefantes entre Tarangire y Manyara.'
  }
];

export default function App() {
  const [currentLang, setCurrentLang] = useState<Language>('en');
  const [currentCurrency, setCurrentCurrency] = useState<Currency>('USD');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [langMenuOpen, setLangMenuOpen] = useState(false);

  // Hero visual banner switcher
  const [heroImageIdx, setHeroImageIdx] = useState(0);
  const heroVisuals = [
    {
      titleEn: 'Tarangire Elephant Basin',
      titleRu: 'Слоны в бассейне Тарангире',
      titleFr: 'Bassin des éléphants de Tarangire',
      titleEs: 'Cuenca de elefantes de Tarangire',
      src: 'https://images.unsplash.com/photo-1557050543-4d5f4e07ef46?auto=format&fit=crop&w=2400&q=90',
      duration: '6–10 nights',
      season: 'Jun–Oct',
      sighting: 'Elephant Dust-Bath Ritual',
      credit: 'Iswanto Arif'
    },
    {
      titleEn: 'Ruaha Leopard in Shadows',
      titleRu: 'Леопард в тенистых зарослях Руахи',
      titleFr: 'Léopard dans les ombres de Ruaha',
      titleEs: 'Leopardo en las sombras de Ruaha',
      src: 'https://images.unsplash.com/photo-1456926631375-92c8ce872def?auto=format&fit=crop&w=2400&q=90',
      duration: '7–12 nights',
      season: 'Jul–Nov',
      sighting: 'Solitary Leopard Gaze',
      credit: 'Deepak Nautiyal'
    },
    {
      titleEn: 'Serengeti Lioness at Twilight',
      titleRu: 'Львица в сумерках Серенгети',
      titleFr: 'Lionne au crépuscule du Serengeti',
      titleEs: 'Leona al atardecer en el Serengeti',
      src: 'https://images.unsplash.com/photo-1516426122078-c23e76319801?auto=format&fit=crop&w=2400&q=90',
      duration: '6–8 nights',
      season: 'Dec–Mar',
      sighting: 'Golden Savannah Dusk',
      credit: 'David K., Naturalist'
    }
  ];

  // Modals state
  const [selectedJourney, setSelectedJourney] = useState<SignatureJourney | null>(null);
  const [isJourneyModalOpen, setIsJourneyModalOpen] = useState(false);
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);
  const [bookingCustomTitle, setBookingCustomTitle] = useState<string>('Savanna Atlas Bespoke Journey');
  const [isImpactModalOpen, setIsImpactModalOpen] = useState(false);

  const getLocalized = (en: string, ru?: string, fr?: string, es?: string) => {
    if (currentLang === 'ru' && ru) return ru;
    if (currentLang === 'fr' && fr) return fr;
    if (currentLang === 'es' && es) return es;
    return en;
  };

  const handleOpenJourney = (journey: SignatureJourney) => {
    setSelectedJourney(journey);
    setIsJourneyModalOpen(true);
  };

  const handleBookJourney = (journey: SignatureJourney) => {
    const jTitle = getLocalized(journey.title, journey.ruTitle, journey.frTitle, journey.esTitle);
    const jDur = getLocalized(journey.durationText, journey.ruDurationText, journey.frDurationText, journey.esDurationText);
    setBookingCustomTitle(`${jTitle} (${jDur})`);
    setIsBookingModalOpen(true);
  };

  const handlePlanCustom = () => {
    const el = document.getElementById('plan');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    } else {
      setBookingCustomTitle(getLocalized('Custom Savanna Expedition', 'Индивидуальное сафари', 'Expédition personnalisée', 'Expedición a medida'));
      setIsBookingModalOpen(true);
    }
  };

  const navLabels = {
    journeys: getLocalized('Journeys', 'Маршруты', 'Voyages', 'Expediciones'),
    accommodations: getLocalized('Accommodations', 'Лоджи и Кемпы', 'Hébergements', 'Alojamientos'),
    gallery: getLocalized('Sites Gallery', 'Галерея', 'Galerie', 'Galería'),
    impact: getLocalized('Our Impact', 'Вклад', 'Impact', 'Impacto'),
    arrival: getLocalized('Arrival & Flights', 'Авиаперелеты', 'Arrivée & Vols', 'Llegada y Vuelos'),
    plan: getLocalized('Plan a Trip', 'Создать поездку', 'Créer un Séjour', 'Planificar Viaje'),
    planBtn: getLocalized('Plan your journey', 'Спланировать путешествие', 'Créer votre séjour', 'Planificar su viaje'),
    heroEyebrow: getLocalized('EAST AFRICA, SLOWLY', 'ВОСТОЧНАЯ АФРИКА, БЕЗ СПЕШКИ', 'L’AFRIQUE DE L’EST, TOUT EN DOUCEUR', 'ÁFRICA ORIENTAL, SIN PRISAS'),
    heroHeading: getLocalized('Follow the wild, with care.', 'Следуйте за дикой природой с заботой.', 'Suivez la nature sauvage, avec délicatesse.', 'Siga la naturaleza salvaje, con cuidado.'),
    heroSubtitle: getLocalized(
      'Private safaris shaped around the animal world — and the people safeguarding it.',
      'Индивидуальные сафари, созданные вокруг мира диких животных и людей, оберегающих их.',
      'Des safaris privés façonnés autour du monde animal et des communautés qui le protègent.',
      'Safaris privados diseñados alrededor de la fauna salvaje y de quienes la protegen.'
    ),
    routesEyebrow: getLocalized('SIGNATURE ROUTES', 'ЭТАЛОННЫЕ МАРШРУТЫ', 'CIRCUITS EMBLÉMATIQUES', 'RUTAS EMBLEMÁTICAS'),
    routesHeading: getLocalized('A better way to be out there.', 'Лучший способ познать саванну.', 'Une façon plus noble d’explorer.', 'La mejor manera de adentrarse en la sabana.'),
    viewDossier: getLocalized('View Detailed Dossier', 'Подробная программа', 'Voir le dossier complet', 'Ver dossier completo'),
    impactEyebrow: getLocalized('TRAVEL THAT STAYS', 'ДОЛГОСРОЧНЫЙ ЭКО-ВКЛАД', 'ENGAGEMENT DURABLE', 'TURISMO SOSTENIBLE'),
    impactHeading: getLocalized('Leave the landscape stronger.', 'Сохранять первозданный ландшафт.', 'Laisser la nature plus vivante.', 'Preservar un paisaje más fuerte.'),
    impactSubtitle: getLocalized(
      'Every Savanna Atlas journey directs a portion of its value to local conservation partners, from wildlife corridors to community ranger programs.',
      'Каждое путешествие Savanna Atlas направляет часть своей стоимости местным природоохранным партнерам: от миграционных коридоров до программ обучения местных рейнджеров.',
      'Chaque voyage Savanna Atlas reverse une part de sa valeur aux acteurs locaux de la conservation, de la protection des couloirs migratoires aux rangers villageois.',
      'Cada expedición de Savanna Atlas destina parte de su valor a socios conservacionistas locales, desde corredores de fauna hasta guardabosques comunitarios.'
    ),
    impactBtn: getLocalized('Explore our conservation ledger', 'Посмотреть отчет об экологическом фонде', 'Découvrir notre registre de conservation', 'Explorar nuestro registro de conservación'),
  };

  const languagesList = [
    { code: 'en', label: 'English' },
    { code: 'ru', label: 'Русский' },
    { code: 'fr', label: 'Français' },
    { code: 'es', label: 'Español' },
  ];

  return (
    <div className="bg-[#F4F6F4] text-[#1C2826] font-sans antialiased min-h-screen selection:bg-[#D3DED7] selection:text-[#0F2A1D]">

      {/* 1. Header with Emerald Accent */}
      <header className="max-w-7xl mx-auto px-8 py-6 flex justify-between items-center border-b border-[#E2E8E4] relative">
        <a href="#" className="text-xl font-serif tracking-widest uppercase font-semibold text-[#0F2A1D] hover:opacity-85 transition">
          SAVANNA ATLAS
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-7 text-sm font-medium tracking-wide text-[#2D4A3E]">
          <a href="#journeys" className="hover:text-[#0F2A1D] transition">{navLabels.journeys}</a>
          <a href="#accommodations" className="hover:text-[#0F2A1D] transition">{navLabels.accommodations}</a>
          <a href="#gallery" className="hover:text-[#0F2A1D] transition">{navLabels.gallery}</a>
          <a href="#impact" className="hover:text-[#0F2A1D] transition">{navLabels.impact}</a>
          <a href="#getting-there" className="hover:text-[#0F2A1D] transition">{navLabels.arrival}</a>
          <a href="#plan" className="hover:text-[#0F2A1D] transition">{navLabels.plan}</a>

          {/* Language and Currency Controls */}
          <div className="flex items-center space-x-3 pl-4 border-l border-[#D3DED7] text-xs font-semibold text-[#4A7061]">
            {/* Language Dropdown Selector */}
            <div className="relative">
              <button
                onClick={() => setLangMenuOpen(!langMenuOpen)}
                className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-[#E2E8E4] text-[#0F2A1D] hover:bg-[#D3DED7] transition cursor-pointer"
              >
                <Globe className="w-3.5 h-3.5 text-[#1C4432]" />
                <span className="uppercase">{currentLang}</span>
                <ChevronDown className="w-3 h-3 opacity-60" />
              </button>

              {langMenuOpen && (
                <div className="absolute top-full right-0 mt-1.5 bg-white border border-[#E2E8E4] rounded-2xl shadow-xl py-1.5 min-w-[120px] z-50 animate-fade-in">
                  {languagesList.map((l) => (
                    <button
                      key={l.code}
                      onClick={() => {
                        setCurrentLang(l.code as Language);
                        setLangMenuOpen(false);
                      }}
                      className={`w-full px-3.5 py-1.5 text-left text-xs transition cursor-pointer flex items-center justify-between ${currentLang === l.code
                        ? 'font-bold text-[#0F2A1D] bg-[#F4F6F4]'
                        : 'text-[#3A5248] hover:bg-[#F4F6F4]'
                        }`}
                    >
                      <span>{l.label}</span>
                      {currentLang === l.code && <span className="w-1.5 h-1.5 rounded-full bg-[#1C4432]" />}
                    </button>
                  ))}
                </div>
              )}
            </div>

            <span className="text-[#A3B8AD]">/</span>

            {/* Currency Selector */}
            <select
              value={currentCurrency}
              onChange={(e) => setCurrentCurrency(e.target.value as Currency)}
              className="bg-transparent border-none text-xs font-semibold text-[#0F2A1D] hover:text-[#1C4432] focus:outline-hidden cursor-pointer"
            >
              <option value="USD">USD ($)</option>
              <option value="EUR">EUR (€)</option>
              <option value="GBP">GBP (£)</option>
            </select>
          </div>
        </nav>

        {/* Mobile menu trigger */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 text-[#0F2A1D] hover:text-[#1C4432]"
          aria-label="Toggle Navigation Menu"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>

        {/* Mobile Nav Drawer */}
        {mobileMenuOpen && (
          <div className="absolute top-full left-0 right-0 bg-[#F4F6F4] border-b border-[#E2E8E4] p-6 flex flex-col space-y-4 shadow-lg md:hidden z-40">
            <a
              href="#journeys"
              onClick={() => setMobileMenuOpen(false)}
              className="text-base font-medium text-[#0F2A1D] hover:opacity-60 transition"
            >
              {navLabels.journeys}
            </a>
            <a
              href="#accommodations"
              onClick={() => setMobileMenuOpen(false)}
              className="text-base font-medium text-[#0F2A1D] hover:opacity-60 transition"
            >
              {navLabels.accommodations}
            </a>
            <a
              href="#gallery"
              onClick={() => setMobileMenuOpen(false)}
              className="text-base font-medium text-[#0F2A1D] hover:opacity-60 transition"
            >
              {navLabels.gallery}
            </a>
            <a
              href="#impact"
              onClick={() => setMobileMenuOpen(false)}
              className="text-base font-medium text-[#0F2A1D] hover:opacity-60 transition"
            >
              {navLabels.impact}
            </a>
            <a
              href="#getting-there"
              onClick={() => setMobileMenuOpen(false)}
              className="text-base font-medium text-[#0F2A1D] hover:opacity-60 transition"
            >
              {navLabels.arrival}
            </a>
            <a
              href="#plan"
              onClick={() => setMobileMenuOpen(false)}
              className="text-base font-medium text-[#0F2A1D] hover:opacity-60 transition"
            >
              {navLabels.plan}
            </a>

            {/* Mobile Language Grid */}
            <div className="pt-3 border-t border-[#E2E8E4] space-y-3">
              <div className="text-xs font-semibold text-[#4A7061] uppercase tracking-wider">
                Language
              </div>
              <div className="grid grid-cols-4 gap-2">
                {languagesList.map((l) => (
                  <button
                    key={l.code}
                    onClick={() => {
                      setCurrentLang(l.code as Language);
                      setMobileMenuOpen(false);
                    }}
                    className={`py-1.5 px-2 text-center rounded-xl text-xs font-semibold uppercase transition ${currentLang === l.code
                      ? 'bg-[#0F2A1D] text-white'
                      : 'bg-white text-[#2D4A3E] border border-[#D3DED7]'
                      }`}
                  >
                    {l.code}
                  </button>
                ))}
              </div>

              <div className="pt-2 flex items-center justify-between">
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    handlePlanCustom();
                  }}
                  className="w-full py-3 bg-[#0F2A1D] text-[#FAF8F5] rounded-full text-xs font-medium uppercase tracking-wider text-center"
                >
                  {navLabels.planBtn}
                </button>
              </div>
            </div>
          </div>
        )}
      </header>

      {/* 2. Minimal Hero Section */}
      <section className="max-w-7xl mx-auto px-8 py-12 md:py-20">
        <span className="text-xs font-semibold tracking-widest text-[#4A7061] uppercase">
          {navLabels.heroEyebrow}
        </span>
        <h1 className="text-5xl md:text-7xl font-serif mt-4 mb-6 tracking-tight leading-none text-[#0F2A1D]">
          {navLabels.heroHeading}
        </h1>
        <p className="text-lg md:text-xl text-[#3A5248] max-w-xl mb-8 leading-relaxed font-light">
          {navLabels.heroSubtitle}
        </p>
        <a
          href="#plan"
          className="inline-block bg-[#0F2A1D] text-[#FAF8F5] px-8 py-4 rounded-full text-sm font-medium hover:bg-[#1C4432] transition cursor-pointer shadow-md"
        >
          {navLabels.planBtn}
        </a>
      </section>

      {/* 3. Featured Hero Media Banner with Visual Switcher */}
      <section className="max-w-7xl mx-auto px-8 mb-20">
        <div className="relative h-[62vh] min-h-[440px] rounded-3xl overflow-hidden shadow-xl bg-[#0F2A1D] group border border-[#E2E8E4]">
          <img
            src={heroVisuals[heroImageIdx].src}
            alt={getLocalized(heroVisuals[heroImageIdx].titleEn, heroVisuals[heroImageIdx].titleRu, heroVisuals[heroImageIdx].titleFr, heroVisuals[heroImageIdx].titleEs)}
            className="w-full h-full object-cover transition duration-700 ease-out"
            referrerPolicy="no-referrer"
          />
          {/* Subtle gradient vignette */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/30" />

          {/* Top-right Photo Switcher Pills */}
          <div className="absolute top-6 right-6 flex items-center space-x-2 bg-black/40 backdrop-blur-md p-1.5 rounded-full border border-white/20">
            {heroVisuals.map((vis, idx) => {
              const visLabel = getLocalized(vis.titleEn, vis.titleRu, vis.titleFr, vis.titleEs);
              return (
                <button
                  key={vis.titleEn}
                  onClick={() => setHeroImageIdx(idx)}
                  className={`px-3.5 py-1.5 rounded-full text-[11px] font-medium transition cursor-pointer whitespace-nowrap ${heroImageIdx === idx
                    ? 'bg-white text-[#0F2A1D] font-bold shadow-xs'
                    : 'text-white/80 hover:text-white hover:bg-white/15'
                    }`}
                >
                  {visLabel}
                </button>
              );
            })}
          </div>

          {/* Floating Metric Badge */}
          <div className="absolute bottom-8 left-8 bg-[#F4F6F4]/95 backdrop-blur-md px-6 py-4 rounded-2xl flex items-center space-x-6 text-xs tracking-wider uppercase shadow-lg text-[#0F2A1D] border border-white/40">
            <div>
              <span className="text-[#4A7061] block text-[10px] font-semibold">
                {getLocalized('Duration', 'Длительность', 'Durée', 'Duración')}
              </span>
              <span className="font-bold">{heroVisuals[heroImageIdx].duration}</span>
            </div>
            <div className="h-6 w-px bg-[#D3DED7]"></div>
            <div>
              <span className="text-[#4A7061] block text-[10px] font-semibold">
                {getLocalized('Season', 'Сезон', 'Saison', 'Temporada')}
              </span>
              <span className="font-bold">{heroVisuals[heroImageIdx].season}</span>
            </div>
            <div className="h-6 w-px bg-[#D3DED7] hidden sm:block"></div>
            <div className="hidden sm:block">
              <span className="text-[#4A7061] block text-[10px] font-semibold">
                {getLocalized('Photo Chronicle', 'Фотография', 'Photographie', 'Fotografía')}
              </span>
              <span className="font-bold lowercase text-[11px]">by {heroVisuals[heroImageIdx].credit}</span>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Asymmetric Narrative Introduction & Tourism Facts */}
      <AsymmetricNarrativeSection
        currentLang={currentLang}
        currentCurrency={currentCurrency}
        onOpenBooking={() => handlePlanCustom()}
      />

      {/* 5. Signature Routes Grid */}
      <section id="journeys" className="max-w-7xl mx-auto px-8 py-20 border-b border-[#E2E8E4] scroll-mt-20">
        <div className="mb-12">
          <span className="text-xs font-semibold tracking-widest text-[#4A7061] uppercase">
            {navLabels.routesEyebrow}
          </span>
          <h2 className="text-3xl md:text-5xl font-serif font-bold mt-2 text-[#0F2A1D] tracking-tight">
            {navLabels.routesHeading}
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {SIGNATURE_JOURNEYS.map((journey) => {
            const jTitle = getLocalized(journey.title, journey.ruTitle, journey.frTitle, journey.esTitle);
            const jTag = getLocalized(journey.tag, journey.ruTag, journey.frTag, journey.esTag);
            const jDesc = getLocalized(journey.description, journey.ruDescription, journey.frDescription, journey.esDescription);

            return (
              <article
                key={journey.id}
                onClick={() => handleOpenJourney(journey)}
                className="group cursor-pointer flex flex-col bg-white rounded-3xl overflow-hidden border border-[#E2E8E4] shadow-xs hover:shadow-xl transition-all duration-500"
              >
                <div className="h-72 overflow-hidden bg-[#0F2A1D] relative">
                  <img
                    src={journey.image}
                    alt={jTitle}
                    className="w-full h-full object-cover group-hover:scale-105 transition duration-700"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />

                  {/* Tag Pill */}
                  <div className="absolute top-4 left-4">
                    <span className="text-[10px] font-bold tracking-widest uppercase bg-black/60 backdrop-blur-md px-3 py-1 rounded-full text-white/90 border border-white/10">
                      {jTag}
                    </span>
                  </div>
                </div>

                <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                  <div className="space-y-2">
                    <h3 className="text-xl font-serif font-bold text-[#0F2A1D] group-hover:text-[#1C4432] transition flex items-center justify-between">
                      <span>{jTitle}</span>
                      <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all text-[#1C4432]" />
                    </h3>
                    <p className="text-xs text-[#3A5248] line-clamp-3 font-light leading-relaxed">
                      {jDesc}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-[#E2E8E4] flex items-center justify-between text-xs">
                    <span className="font-semibold text-[#0F2A1D]">
                      From ${journey.priceUSD.toLocaleString()} USD / guest
                    </span>
                    <span className="text-[#4A7061] font-medium flex items-center gap-1 group-hover:underline">
                      {navLabels.viewDossier}
                    </span>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </section>

      {/* 6. Luxury Accommodations Specifications Section */}
      <AccommodationsSection
        currentLang={currentLang}
        currentCurrency={currentCurrency}
        onOpenBookingModal={(accName) => {
          setBookingCustomTitle(accName || 'Luxury Safari Sanctuary');
          setIsBookingModalOpen(true);
        }}
      />

      {/* 7. Tanzania Tourism Sites Gallery */}
      <GallerySection currentLang={currentLang} />

      {/* 8. Wilderness Impact & Conservation Section */}
      <section id="impact" className="max-w-7xl mx-auto px-8 py-20 scroll-mt-20">
        <div className="bg-white rounded-3xl p-10 md:p-16 flex flex-col md:flex-row justify-between items-start md:items-center shadow-xs border border-[#E2E8E4]">
          <div className="max-w-xl space-y-3">
            <span className="text-xs font-semibold tracking-widest text-[#4A7061] uppercase">
              {navLabels.impactEyebrow}
            </span>
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-[#0F2A1D] tracking-tight">
              {navLabels.impactHeading}
            </h2>
            <p className="text-[#3A5248] leading-relaxed font-light">
              {navLabels.impactSubtitle}
            </p>

            <button
              onClick={() => setIsImpactModalOpen(true)}
              className="mt-4 inline-flex items-center gap-2 text-xs uppercase tracking-wider font-bold text-[#0F2A1D] hover:text-[#1C4432] transition cursor-pointer"
            >
              <span>{navLabels.impactBtn}</span>
              <ArrowRight className="w-3.5 h-3.5 text-[#1C4432]" />
            </button>
          </div>

          <div
            onClick={() => setIsImpactModalOpen(true)}
            className="mt-8 md:mt-0 flex items-center justify-center w-28 h-28 rounded-full bg-[#0F2A1D] hover:bg-[#1C4432] transition text-[#FAF8F5] text-xs font-semibold uppercase tracking-widest text-center p-2 shrink-0 cursor-pointer shadow-lg"
          >
            1% for the wild
          </div>
        </div>
      </section>

      {/* 9. Arrival & Aviation Gateways Section */}
      <GettingThereSection
        currentLang={currentLang}
        onOpenAdvisorModal={() => {
          setBookingCustomTitle('Aviation Concierge & Flight Planning');
          setIsBookingModalOpen(true);
        }}
      />

      {/* 10. Interactive Trip Planner */}
      <PlanTripSection
        currentLang={currentLang}
        currentCurrency={currentCurrency}
        onOpenBookingModal={(customTitle) => {
          setBookingCustomTitle(customTitle || 'Tailored Safari');
          setIsBookingModalOpen(true);
        }}
      />

      {/* 11. Minimalist Luxury Footer */}
      <footer className="max-w-7xl mx-auto px-8 py-16 border-t border-[#E2E8E4] text-xs text-[#4A7061] flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
        <div className="space-y-1">
          <div className="text-sm font-serif tracking-widest uppercase font-semibold text-[#0F2A1D]">SAVANNA ATLAS</div>
          <div>Bespoke wilderness safaris & conservation expeditions in Tanzania.</div>
          <div className="text-[11px] text-[#A3B8AD]">TTB License #TZ-88492 · TATO Member · Arusha, Tanzania</div>
        </div>

        <div className="flex flex-wrap items-center gap-6 text-[#2D4A3E] font-medium">
          <a href="#journeys" className="hover:text-[#0F2A1D] transition">{navLabels.journeys}</a>
          <a href="#accommodations" className="hover:text-[#0F2A1D] transition">{navLabels.accommodations}</a>
          <a href="#gallery" className="hover:text-[#0F2A1D] transition">{navLabels.gallery}</a>
          <a href="#impact" className="hover:text-[#0F2A1D] transition">{navLabels.impact}</a>
          <a href="#getting-there" className="hover:text-[#0F2A1D] transition">{navLabels.arrival}</a>
          <a href="#plan" className="hover:text-[#0F2A1D] transition">{navLabels.plan}</a>
          <button
            onClick={() => setIsImpactModalOpen(true)}
            className="hover:text-[#0F2A1D] transition cursor-pointer"
          >
            1% for the Wild
          </button>
        </div>
      </footer>

      {/* Detail Modal for Signature Journeys */}
      <JourneyDetailModal
        journey={selectedJourney}
        isOpen={isJourneyModalOpen}
        currentLang={currentLang}
        currentCurrency={currentCurrency}
        onClose={() => setIsJourneyModalOpen(false)}
        onBook={(journey) => {
          setIsJourneyModalOpen(false);
          handleBookJourney(journey);
        }}
      />

      {/* Booking / Inquiry Modal */}
      {isBookingModalOpen && (
        <BookingInquiryModal
          customTitle={bookingCustomTitle}
          currentLang={currentLang}
          currentCurrency={currentCurrency}
          onClose={() => setIsBookingModalOpen(false)}
        />
      )}

      {/* Impact & Conservation Modal */}
      {isImpactModalOpen && (
        <ImpactModal
          isOpen={isImpactModalOpen}
          onClose={() => setIsImpactModalOpen(false)}
          currentLang={currentLang}
          onOpenBooking={() => {
            setIsImpactModalOpen(false);
            setBookingCustomTitle('Regenerative Conservation Journey');
            setIsBookingModalOpen(true);
          }}
        />
      )}

    </div>
  );
}
