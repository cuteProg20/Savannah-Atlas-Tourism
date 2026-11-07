import { Language, Currency } from '../types';

export const CURRENCY_RATES: Record<Currency, { symbol: string; rate: number; format: (val: number) => string }> = {
  USD: {
    symbol: '$',
    rate: 1.0,
    format: (val) => `$${Math.round(val).toLocaleString('en-US')}`,
  },
  EUR: {
    symbol: '€',
    rate: 0.92,
    format: (val) => `€${Math.round(val * 0.92).toLocaleString('de-DE')}`,
  },
  RUB: {
    symbol: '₽',
    rate: 92.5,
    format: (val) => `${Math.round(val * 92.5).toLocaleString('ru-RU')} ₽`,
  },
  TSH: {
    symbol: 'TSh',
    rate: 2600,
    format: (val) => `${Math.round(val * 2600).toLocaleString('en-US')} TSh`,
  },
  GBP: {
    symbol: '£',
    rate: 0.79,
    format: (val) => `£${Math.round(val * 0.79).toLocaleString('en-GB')}`,
  },
};

export function formatPrice(priceUSD: number, currency: Currency): string {
  const curr = CURRENCY_RATES[currency] || CURRENCY_RATES.USD;
  return curr.format(priceUSD);
}

export interface TranslationSchema {
  // Brand & Header
  brandTitle: string;
  brandTagline: string;
  guidedTours: string;
  phoneSupport: string;
  callAdvisor: string;
  emergencyLine: string;
  myGlobus: string;
  savedTours: string;
  searchPlaceholder: string;
  changeCountry: string;
  selectLanguage: string;

  // Navigation
  navHome: string;
  navEnquireNow: string;
  navDestinations: string;
  navCamps: string;
  navRegions: string;
  navExperiences: string;
  navJourneys: string;
  navExclusiveOffers: string;
  navImpact: string;
  navJournal: string;
  navAboutWilderness: string;
  navExploreTours: string;
  navAccommodations: string;
  navInteractiveMap: string;
  navWhyGlobus: string;
  navTravelStyles: string;
  navDeals: string;
  navNorthAmerica: string;
  navTourPlanning: string;
  navBrochures: string;
  navAiPlanner: string;
  navProposal: string;
  chatWhatsApp: string;
  chatTelegram: string;
  directConsultation: string;
  directConsultationSub: string;
  instantProposalTitle: string;
  instantProposalSubtitle: string;

  // Stays & Accommodations
  accommodationsTitle: string;
  accommodationsSubtitle: string;
  stayTierLuxuryLodges: string;
  stayTierTentedCamps: string;
  stayTierZanzibarResorts: string;
  stayTierEcoLodges: string;
  stayTierAll: string;
  stayMealPlan: string;
  stayAmenities: string;
  stayRoomTypes: string;
  stayUpgradeOption: string;
  stayIncludedStandard: string;
  stayViewLodgeDetails: string;
  staySelectLodge: string;
  stayUpgradePerNight: string;
  stayIncludedInTour: string;
  stayVerifiedAmenities: string;
  stayRussianStaff: string;
  stayExploreAllLodges: string;
  stayPerNightFrom: string;
  staySelectRoom: string;
  stayClosePreview: string;

  // Hero Section
  heroBadge: string;
  heroTitle: string;
  heroSubtitle: string;
  heroSubtext: string;
  heroSearchDestination: string;
  heroAllDestinations: string;
  heroTravelStyle: string;
  heroAllStyles: string;
  heroDepartureMonth: string;
  heroAnyMonth: string;
  heroRussianGuideFilter: string;
  heroRussianGuideBadge: string;
  heroBtnSearch: string;
  heroQuickStatsCountries: string;
  heroQuickStatsContinents: string;
  heroQuickStatsSatisfaction: string;
  heroQuickStatsExperience: string;

  // Trust Badges
  trustTato: string;
  trustTtb: string;
  trustTanapa: string;
  trustZatoga: string;

  // Promo Banner
  promoSmarterTitle: string;
  promoSmarterSubtitle: string;
  promoUpgradeTitle: string;
  promoUpgradeDesc: string;
  promoEscapesBadge: string;
  promoClaimBtn: string;

  // Interactive Map
  mapTitle: string;
  mapSubtitle: string;
  mapFilterAll: string;
  mapFilterRussianOnly: string;
  mapClickToPreview: string;
  mapSelectedDestination: string;
  mapViewFullItinerary: string;
  mapRouteStopsCount: string;
  mapInteractiveGuideInfo: string;

  // Northern & Island Highlights
  naFeatureBadge: string;
  naFeatureTitle: string;
  naFeatureSubtitle: string;
  naThousandIslands: string;
  naKentuckyHorses: string;
  naVancouver: string;
  naParks: string;
  naExploreCollection: string;

  // Pillars / Why TourWeb
  whyTitle: string;
  whySubtitle: string;
  usp1Title: string;
  usp1Desc: string;
  usp2Title: string;
  usp2Desc: string;
  usp3Title: string;
  usp3Desc: string;
  usp4Title: string;
  usp4Desc: string;
  usp5Title: string;
  usp5Desc: string;
  usp6Title: string;
  usp6Desc: string;

  // Travel Styles Section
  stylesTitle: string;
  stylesSubtitle: string;
  styleSmallGroup: string;
  styleSmallGroupDesc: string;
  styleClassic: string;
  styleClassicDesc: string;
  styleEscapes: string;
  styleEscapesDesc: string;
  styleIndependent: string;
  styleIndependentDesc: string;
  styleCruises: string;
  styleCruisesDesc: string;

  // Tour Catalog & Filters
  catalogTitle: string;
  catalogSubtitle: string;
  filterRegion: string;
  filterStyle: string;
  filterDuration: string;
  filterPrice: string;
  filterSort: string;
  filterSortPopular: string;
  filterSortPriceLow: string;
  filterSortPriceHigh: string;
  filterSortDuration: string;
  filterRussianOnlyCheckbox: string;
  filterReset: string;
  toursFound: string;
  noToursFound: string;
  viewItinerary: string;
  bookNow: string;
  fromPrice: string;
  perPerson: string;
  daysNights: string;
  viewDetails: string;
  quickInquiry: string;

  // Tour Details Modal
  modalOverview: string;
  modalHighlights: string;
  modalInclusions: string;
  modalDailyItinerary: string;
  modalChoiceExcursions: string;
  modalDatesPricing: string;
  modalRussianGuideHeading: string;
  modalRussianGuideText: string;
  modalDay: string;
  modalSeatsRemaining: string;
  modalSelectDate: string;
  modalRequestQuote: string;
  modalDownloadBrochure: string;
  modalClose: string;

  // Booking & Inquiry Modal
  inquiryTitle: string;
  inquirySubtitle: string;
  inquiryName: string;
  inquiryEmail: string;
  inquiryPhone: string;
  inquiryDepartureDate: string;
  inquiryTravelersCount: string;
  inquiryCurrency: string;
  inquiryRussianAssistance: string;
  inquirySpecialRequests: string;
  inquirySubmitBtn: string;
  inquirySuccessTitle: string;
  inquirySuccessMsg: string;

  // Brochure Modal
  brochureTitle: string;
  brochureSubtitle: string;
  brochureDownloadPdf: string;
  brochureEmailBrochure: string;

  // Testimonials & Awards
  awardsTitle: string;
  awardsSubtitle: string;
  award1: string;
  award2: string;
  award3: string;
  award4: string;
  testimonialsTitle: string;

  // AI Concierge
  aiAdvisorTitle: string;
  aiAdvisorSubtitle: string;
  aiAskPlaceholder: string;
  aiAskBtn: string;

  // Footer
  footerBigTrips: string;
  footerBigTripsSub: string;
  footerSearchHeadline: string;
  footerHaveQuestion: string;
  footerPhone: string;
  footerRussianPhone: string;
  footerRussianEmail: string;
  footerAlsoInterest: string;
  footerInterestLinks: string;
  footerCompany: string;
  footerBrand1: string;
  footerBrand2: string;
  footerBrand3: string;
  footerBrand4: string;
  footerLegal: string;
  footerCopyright: string;
}

export const TRANSLATIONS: Record<Language, TranslationSchema> = {
  en: {
    // Brand & Header
    brandTitle: 'TourWeb',
    brandTagline: 'Tanzania Safari, Kilimanjaro & Zanzibar Expeditions',
    guidedTours: 'Custom & Small Group Tanzania Safaris',
    phoneSupport: '+255 784 123 456',
    callAdvisor: 'Direct Safari Specialist Hotline',
    emergencyLine: '24/7 Arusha & Zanzibar Dispatch',
    myGlobus: 'My TourWeb',
    savedTours: 'Saved Safaris',
    searchPlaceholder: 'Search Serengeti, Ngorongoro, Kilimanjaro, Zanzibar, Maasai...',
    changeCountry: 'Currency & Language',
    selectLanguage: 'Language',

    // Navigation
    navHome: 'Home',
    navEnquireNow: 'Enquire Now',
    navDestinations: 'Destinations',
    navCamps: 'Camps',
    navRegions: 'Regions',
    navExperiences: 'Experiences',
    navJourneys: 'Journeys',
    navExclusiveOffers: 'Exclusive Offers',
    navImpact: 'Impact',
    navJournal: 'Journal',
    navAboutWilderness: 'About Wilderness',
    navExploreTours: 'Safari & Trek Packages',
    navAccommodations: 'Stays & Accommodations',
    navInteractiveMap: 'Tanzania Circuit Map',
    navWhyGlobus: 'Why TourWeb',
    navTravelStyles: 'Safari Styles',
    navDeals: 'Migration & Low Season Deals',
    navNorthAmerica: 'Kilimanjaro Summit 2027',
    navTourPlanning: 'Safari Planner',
    navBrochures: 'Safari Brochure',
    navAiPlanner: 'AI Safari Advisor',
    navProposal: 'Instant Proposal Builder',
    chatWhatsApp: 'Chat on WhatsApp',
    chatTelegram: 'Chat on Telegram',
    directConsultation: 'Instant Direct Messenger Consultation',
    directConsultationSub: 'Speak directly with our Arusha-based safari planners and certified guides:',
    instantProposalTitle: 'Dynamic Tanzania Trip Proposal Generator',
    instantProposalSubtitle: 'Customize your Big Five safari, Kilimanjaro climb & Zanzibar beach retreat with live pricing in USD, EUR, RUB, or TSH.',

    // Stays & Accommodations
    accommodationsTitle: 'Handpicked Safari Lodges & Luxury Retreats',
    accommodationsSubtitle: 'From exclusive stone wilderness sanctuaries and migration-tracking tented camps to turquoise Zanzibar beach villas and eco-lodges.',
    stayTierLuxuryLodges: 'Luxury Safari Lodges',
    stayTierTentedCamps: 'Luxury Tented Camps',
    stayTierZanzibarResorts: 'Boutique Zanzibar Resorts',
    stayTierEcoLodges: 'Budget & Mid-Range Eco-Lodges',
    stayTierAll: 'All Accommodations',
    stayMealPlan: 'Meal Plan',
    stayAmenities: 'Key Verified Amenities',
    stayRoomTypes: 'Room Configurations',
    stayUpgradeOption: 'Accommodation Tier Upgrades',
    stayIncludedStandard: 'Included Standard Comfort',
    stayViewLodgeDetails: 'View Lodge & Photo Gallery',
    staySelectLodge: 'Select This Lodge',
    stayUpgradePerNight: 'Upgrade / night',
    stayIncludedInTour: 'Included with Tour Package',
    stayVerifiedAmenities: 'Verified On-Site Amenities',
    stayRussianStaff: 'Russian-Speaking Assistance',
    stayExploreAllLodges: 'Explore All Lodges & Camps',
    stayPerNightFrom: 'From / night',
    staySelectRoom: 'Select Room Type',
    stayClosePreview: 'Close Preview',

    // Hero Section
    heroBadge: 'Certified TATO & TTB Licensed Tour Operator',
    heroTitle: 'Experience Tanzania Beyond Your Wildest Dreams',
    heroSubtitle: 'Big Five game drives across the endless plains of the Serengeti, sunrise at Kilimanjaro’s Uhuru Peak, and crystal waters in Zanzibar.',
    heroSubtext: 'Private 4x4 pop-top Land Cruisers, luxury tented camps, and certified multilingual driver-guides.',
    heroSearchDestination: 'Select Tanzania Circuit',
    heroAllDestinations: 'All Circuits (Northern, Zanzibar, Southern, Kilimanjaro)',
    heroTravelStyle: 'Expedition Style',
    heroAllStyles: 'All Styles (Luxury, Private, Trek, Beach)',
    heroDepartureMonth: 'Departure Month',
    heroAnyMonth: 'Any Month / Season',
    heroRussianGuideFilter: 'Certified Russian-Speaking Safari Guide',
    heroRussianGuideBadge: 'Russian Guide Available',
    heroBtnSearch: 'Find My Safari',
    heroQuickStatsCountries: '16 National Parks',
    heroQuickStatsContinents: 'The Big Five',
    heroQuickStatsSatisfaction: '99.4% Summit & Safari Rating',
    heroQuickStatsExperience: '18 Years in Arusha',

    // Trust Badges
    trustTato: 'TATO Member (Tanzania Association of Tour Operators)',
    trustTtb: 'TTB Licensed (Tanzania Tourist Board)',
    trustTanapa: 'TANAPA Authorized Safari Outfitter',
    trustZatoga: 'ZATOGA Certified Zanzibar Heritage Guides',

    // Promo Banner
    promoSmarterTitle: 'Witness the Great Wildebeest Migration & the Big Five',
    promoSmarterSubtitle: 'River crossings in Northern Serengeti & calving season in Ndutu.',
    promoUpgradeTitle: 'Not Just a Safari. An Authentic African Expedition.',
    promoUpgradeDesc: 'Stay in intimate luxury tented camps surrounded by nature, enjoy guaranteed window seats in custom 4x4s, and meet the ancient Hadzabe & Maasai tribes.',
    promoEscapesBadge: 'Calving & Low Season Safaris from $1,290',
    promoClaimBtn: 'Explore Safari Deals',

    // Interactive Map
    mapTitle: 'Interactive Tanzania Circuit & Safari Explorer',
    mapSubtitle: 'Explore national parks, mountain routes, wildlife corridors, and beach destinations across Tanzania.',
    mapFilterAll: 'All Circuits',
    mapFilterRussianOnly: 'Show Russian-Speaking Guide Guaranteed Tours',
    mapClickToPreview: 'Click on a park or mountain on the map to inspect the route',
    mapSelectedDestination: 'Selected Destination & Park',
    mapViewFullItinerary: 'View Full Safari Itinerary',
    mapRouteStopsCount: 'Game Drives & Stops',
    mapInteractiveGuideInfo: 'Certified Russian, English & Spanish speaking professional naturalists',

    // Northern & Island Highlights
    naFeatureBadge: 'Iconic Tanzanian Expeditions',
    naFeatureTitle: 'From the Roof of Africa to the Spice Island Sands',
    naFeatureSubtitle: 'The ultimate bucket list: Serengeti predator action, Ngorongoro caldera, Mt. Kilimanjaro, and Zanzibar white coral beaches.',
    naThousandIslands: 'Serengeti & Ngorongoro Big Five Safari',
    naKentuckyHorses: 'Mount Kilimanjaro Machame & Lemosho Treks',
    naVancouver: 'Zanzibar Spice Tours & Nungwi Beach Resorts',
    naParks: 'Lake Eyasi Hadzabe Hunter-Gatherer Cultural Immersion',
    naExploreCollection: 'View All Tanzania Safaris',

    // Pillars / Why TourWeb
    whyTitle: 'Why Explore Tanzania with TourWeb',
    whySubtitle: 'Unrivaled field expertise, custom-modified 4x4 Land Cruisers, and transparent pricing.',
    usp1Title: 'Guaranteed Window Seat in 4x4 Land Cruisers',
    usp1Desc: 'Custom-built pop-up roof safari vehicles with charging ports, wildlife reference books, and onboard coolers.',
    usp2Title: 'Hand-Picked Luxury Tented Camps & Lodges',
    usp2Desc: 'Fall asleep to the sounds of the African wilderness in eco-luxury tents with hot showers and gourmet dining.',
    usp3Title: 'Elite Naturalist Driver-Guides',
    usp3Desc: 'Decades of tracking knowledge. Multilingual experts fluent in English, Russian, Spanish, and Swahili.',
    usp4Title: 'High-Altitude Kilimanjaro Safety Protocols',
    usp4Desc: 'Pulse oximeters, emergency oxygen cylinders, hyperbaric chambers, and KPAP-certified fair porter treatment.',
    usp5Title: 'Authentic Non-Commercial Cultural Access',
    usp5Desc: 'Exclusive hunting expeditions with Hadzabe bushmen and respectful cultural visits with Maasai elders.',
    usp6Title: 'Seamless Bush-to-Beach Logistics',
    usp6Desc: 'Direct bush flights from Serengeti or Ngorongoro airstrips straight into Zanzibar beaches without wasted travel days.',

    // Travel Styles Section
    stylesTitle: 'Find Your Tanzania Travel Style',
    stylesSubtitle: 'Tailored adventures matching your pace, comfort, and wildlife ambitions.',
    styleSmallGroup: 'Luxury Tented Safari',
    styleSmallGroupDesc: 'Immersive boutique camps right in the wildlife path with fine wine and campfire storytelling.',
    styleClassic: 'Private 4x4 Jeep Safari',
    styleClassicDesc: 'Dedicated safari vehicle and private guide for your family or group with fully flexible game drive hours.',
    styleEscapes: 'Kilimanjaro Trekking Routes',
    styleEscapesDesc: 'High-success rate 7-day Machame, 8-day Lemosho, and scenic Marangu routes with certified mountain crews.',
    styleIndependent: 'Zanzibar Beach & Spice Relax',
    styleIndependentDesc: 'Tropical coral beaches, historic Stone Town UNESCO tours, dhow sunset cruises, and diving at Mnemba Atoll.',
    styleCruises: 'Fly-In Safari Expedition',
    styleCruisesDesc: 'Save overland travel time with bush flights connecting Arusha, Serengeti, Ruaha, and Zanzibar.',

    // Tour Catalog & Filters
    catalogTitle: 'Tanzania Safari & Expedition Catalog',
    catalogSubtitle: 'Guaranteed departures, all park entrance fees included, and transparent per-person rates.',
    filterRegion: 'Circuit / Region',
    filterStyle: 'Expedition Style',
    filterDuration: 'Duration (Days)',
    filterPrice: 'Max Price (USD)',
    filterSort: 'Sort By',
    filterSortPopular: 'Most Popular Safaris',
    filterSortPriceLow: 'Price: Low to High',
    filterSortPriceHigh: 'Price: High to Low',
    filterSortDuration: 'Longest Duration',
    filterRussianOnlyCheckbox: 'Certified Russian-Speaking Guide',
    filterReset: 'Reset All Filters',
    toursFound: 'Tanzania Tours Found',
    noToursFound: 'No tours match your current filter criteria. Please broaden your selection.',
    viewItinerary: 'Itinerary & Map',
    bookNow: 'Book / Request Quote',
    fromPrice: 'From',
    perPerson: 'per traveler',
    daysNights: 'Days / Nights',
    viewDetails: 'Safari Details',
    quickInquiry: 'Fast Inquiry / Option',

    // Tour Details Modal
    modalOverview: 'Safari Overview & Highlights',
    modalHighlights: 'Wildlife & Landmark Highlights',
    modalInclusions: 'What is Included in Price',
    modalDailyItinerary: 'Day-by-Day Expedition Itinerary',
    modalChoiceExcursions: 'Optional Add-on Experiences',
    modalDatesPricing: 'Available Departure Dates & Seasons',
    modalRussianGuideHeading: 'Multilingual & Russian Guide Guarantee',
    modalRussianGuideText: 'This safari features a certified professional driver-guide fluent in your chosen language.',
    modalDay: 'Day',
    modalSeatsRemaining: 'seats left',
    modalSelectDate: 'Select Departure Date',
    modalRequestQuote: 'Request Booking / Quote',
    modalDownloadBrochure: 'Download Safari PDF',
    modalClose: 'Close',

    // Booking & Inquiry Modal
    inquiryTitle: 'Tanzania Safari Booking & Custom Inquiry',
    inquirySubtitle: 'Lock in your preferred 2026-2027 safari dates or request a custom-tailored private itinerary.',
    inquiryName: 'Full Name',
    inquiryEmail: 'Email Address',
    inquiryPhone: 'Phone / WhatsApp / Telegram',
    inquiryDepartureDate: 'Desired Departure Date',
    inquiryTravelersCount: 'Number of Travelers',
    inquiryCurrency: 'Billing Currency',
    inquiryRussianAssistance: 'Request Russian-speaking driver-guide and visa/flight assistance',
    inquirySpecialRequests: 'Special Interests (e.g. Photography, Honeymoon, Big Cats, Hadzabe, Balloon Safari)',
    inquirySubmitBtn: 'Send Safari Request',
    inquirySuccessTitle: 'Safari Request Received!',
    inquirySuccessMsg: 'Asante sana! Our Arusha safari concierge will contact you within 2 hours with detailed availability and custom proposal.',

    // Brochure Modal
    brochureTitle: 'Download 2026/2027 Tanzania Safari Guide',
    brochureSubtitle: 'Comprehensive PDF guide with wildlife migration calendars, Kilimanjaro elevation profiles, and park maps.',
    brochureDownloadPdf: 'Download PDF Brochure',
    brochureEmailBrochure: 'Send by Email',

    // Testimonials & Awards
    awardsTitle: 'Trusted by Travelers from Across the Globe',
    awardsSubtitle: 'Consistently rated 5 stars for ethical guiding, unmatched wildlife tracking, and memorable African hospitality.',
    award1: 'TripAdvisor Travelers’ Choice Best of the Best 2025',
    award2: 'TATO Top Safari Operator Excellence Award',
    award3: 'KPAP Partner for Responsible Kilimanjaro Trekking',
    award4: 'World Travel Awards: Tanzania Leading Safari Company',
    testimonialsTitle: 'Verified Traveler Experiences',

    // AI Concierge
    aiAdvisorTitle: 'TourWeb Tanzania AI Safari Specialist',
    aiAdvisorSubtitle: 'Ask anything about the Great Migration, Kilimanjaro routes, packing lists, or best seasons to visit.',
    aiAskPlaceholder: 'Ask a question (e.g., "When is the best time to see the Mara River crossing in Serengeti?")...',
    aiAskBtn: 'Ask Safari Advisor',

    // Footer
    footerBigTrips: 'DISCOVER TANZANIA WITH ABSOLUTE CONFIDENCE',
    footerBigTripsSub: 'Serengeti • Ngorongoro • Kilimanjaro • Zanzibar • Ruaha • Selous',
    footerSearchHeadline: 'Ready to witness lions on the prowl and touch the rooftop of Africa?',
    footerHaveQuestion: 'TALK TO AN ARUSHA SPECIALIST',
    footerPhone: '+255 784 123 456 (TZ / WhatsApp)',
    footerRussianPhone: '+7 (495) 987-65-43 (Moscow Desk)',
    footerRussianEmail: 'tanzania@tourweb.travel',
    footerAlsoInterest: 'Popular Safari Combinations',
    footerInterestLinks: '7-Day Classic Big Five Safari • 8-Day Kilimanjaro Lemosho Route • 10-Day Bush & Zanzibar Beach Combo • 5-Day Tarangire & Ngorongoro Caldera • Ndutu Calving Season Special',
    footerCompany: 'TourWeb Tanzania Safaris & Expeditions',
    footerBrand1: 'TourWeb Northern Circuit Safaris',
    footerBrand2: 'Kilimanjaro Summit Adventures',
    footerBrand3: 'Zanzibar Beach & Spice Retreats',
    footerBrand4: 'Southern Wilderness & Mahale Chimpanzees',
    footerLegal: 'TATO Certified • TTB License #TZ-88492 • KPAP Member • Full Tourist Liability Insurance',
    footerCopyright: 'Copyright © TourWeb Tanzania. All rights reserved.',
  },

  ru: {
    // Brand & Header
    brandTitle: 'TourWeb',
    brandTagline: 'Экспедиции по Танзании: Сафари, Килиманджаро и Занзибар',
    guidedTours: 'Индивидуальные и групповые сафари по Танзании',
    phoneSupport: '+255 784 123 456',
    callAdvisor: 'Прямая линия эксперта по сафари в Аруше',
    emergencyLine: 'Круглосуточная поддержка 24/7 (Аруша и Занзибар)',
    myGlobus: 'Мой TourWeb',
    savedTours: 'Избранные сафари',
    searchPlaceholder: 'Поиск: Серенгети, Нгоронгоро, Килиманджаро, Занзибар, Масаи...',
    changeCountry: 'Валюта и Язык',
    selectLanguage: 'Язык интерфейса',

    // Navigation
    navHome: 'Главная',
    navEnquireNow: 'Забронировать',
    navDestinations: 'Направления',
    navCamps: 'Кемпы и Лоджи',
    navRegions: 'Регионы',
    navExperiences: 'Впечатления',
    navJourneys: 'Маршруты',
    navExclusiveOffers: 'Спецпредложения',
    navImpact: 'Экология и Вклад',
    navJournal: 'Журнал',
    navAboutWilderness: 'О компании',
    navExploreTours: 'Все туры и сафари',
    navAccommodations: 'Лоджи и Отели',
    navInteractiveMap: 'Карта парков Танзании',
    navWhyGlobus: 'Почему TourWeb',
    navTravelStyles: 'Стили сафари',
    navDeals: 'Миграция и Спецпредложения',
    navNorthAmerica: 'Килиманджаро 2027',
    navTourPlanning: 'Конструктор тура',
    navBrochures: 'Каталог (PDF)',
    navAiPlanner: 'AI-Сафари Эксперт',
    navProposal: 'Конструктор предложения',
    chatWhatsApp: 'Написать в WhatsApp',
    chatTelegram: 'Написать в Telegram',
    directConsultation: 'Мгновенная консультация в мессенджере',
    directConsultationSub: 'Свяжитесь напрямую с нашими русскоговорящими организаторами в Танзании:',
    instantProposalTitle: 'Интерактивный конструктор сафари и КП',
    instantProposalSubtitle: 'Соберите индивидуальный маршрут по Серенгети, Килиманджаро и Занзибару с расчетом в USD, EUR, RUB или TSH.',

    // Stays & Accommodations
    accommodationsTitle: 'Коллекция проверенных лоджей и вилл Танзании',
    accommodationsSubtitle: 'От 5-звездочных сафари-лоджей с бассейнами до аутентичных шатров на путях Великой Миграции, вилл Занзибара и комфортных эко-коттеджей.',
    stayTierLuxuryLodges: 'Люкс-сафари лоджи',
    stayTierTentedCamps: 'Премиум тентовые кемпы',
    stayTierZanzibarResorts: 'Бутик-отели Занзибара',
    stayTierEcoLodges: 'Комфортные эко-лоджи',
    stayTierAll: 'Все категории отелей',
    stayMealPlan: 'Питание',
    stayAmenities: 'Удобства и сервис',
    stayRoomTypes: 'Категории номеров',
    stayUpgradeOption: 'Апгрейд категории проживания',
    stayIncludedStandard: 'Базовый комфорт (включен)',
    stayViewLodgeDetails: 'Смотреть фото и описание',
    staySelectLodge: 'Выбрать этот лодж',
    stayUpgradePerNight: 'Доплата за ночь',
    stayIncludedInTour: 'Включено в стоимость тура',
    stayVerifiedAmenities: 'Проверенные удобства',
    stayRussianStaff: 'Русскоязычная поддержка',
    stayExploreAllLodges: 'Посмотреть все лоджи и кемпы',
    stayPerNightFrom: 'От / ночь',
    staySelectRoom: 'Выбрать категорию номера',
    stayClosePreview: 'Закрыть просмотр',

    // Hero Section
    heroBadge: 'Официальный лицензированный туроператор TATO и TTB',
    heroTitle: 'Откройте дикую Танзанию за гранью воображения',
    heroSubtitle: 'Большая африканская пятерка в бескрайних саваннах Серенгети, восход на пике Ухуру (Килиманджаро) и белоснежные пляжи Занзибара.',
    heroSubtext: 'Собственные джипы 4x4 Land Cruiser с подъемной крышей, премиальные тентовые лоджи и сертифицированные русскоязычные гиды.',
    heroSearchDestination: 'Выберите регион / парк',
    heroAllDestinations: 'Все маршруты (Северный контур, Занзибар, Килиманджаро)',
    heroTravelStyle: 'Стиль путешествия',
    heroAllStyles: 'Все стили (Люкс-кемпы, Джип-сафари, Восхождение, Пляж)',
    heroDepartureMonth: 'Месяц поездки',
    heroAnyMonth: 'Любой сезон / месяц',
    heroRussianGuideFilter: 'Гарантия русскоязычного гида-натуралиста',
    heroRussianGuideBadge: 'Русскоязычный гид',
    heroBtnSearch: 'Найти идеальное сафари',
    heroQuickStatsCountries: '16 Нацпарков',
    heroQuickStatsContinents: 'Большая Пятёрка',
    heroQuickStatsSatisfaction: '99.4% Успешных восхождений',
    heroQuickStatsExperience: '18 Лет опыта в Танзании',

    // Trust Badges
    trustTato: 'Член TATO (Ассоциация туроператоров Танзании)',
    trustTtb: 'Лицензия TTB (Управление по туризму Танзании)',
    trustTanapa: 'Официальный партнер нацпарков TANAPA',
    trustZatoga: 'Сертификат гидов Занзибара ZATOGA',

    // Promo Banner
    promoSmarterTitle: 'Великая миграция антилоп гну и охота хищников',
    promoSmarterSubtitle: 'Переправа через реку Мара на севере Серенгети и сезон отела в Ндуту.',
    promoUpgradeTitle: 'Не просто поездка. Настоящая африканская экспедиция.',
    promoUpgradeDesc: 'Ночуйте в роскошных тентах среди дикой природы, путешествуйте с гарантированным местом у окна в джипе 4x4 и познакомьтесь с племенами Хадзабе и Масаи.',
    promoEscapesBadge: 'Сафари в сезон отела и межсезонье от $1,290',
    promoClaimBtn: 'Смотреть спецпредложения',

    // Interactive Map
    mapTitle: 'Интерактивная карта сафари-маршрутов Танзании',
    mapSubtitle: 'Исследуйте национальные парки, тропы восхождений на Килиманджаро и острова Занзибар и Пемба.',
    mapFilterAll: 'Все регионы Танзании',
    mapFilterRussianOnly: 'Только с гарантией русскоговорящего гида',
    mapClickToPreview: 'Нажмите на локацию на карте для просмотра программы сафари',
    mapSelectedDestination: 'Выбранный национальный парк',
    mapViewFullItinerary: 'Подробная программа сафари',
    mapRouteStopsCount: 'Остановки и сафари-выезды',
    mapInteractiveGuideInfo: 'Профессиональные гиды-водители со знанием русского и английского языков',

    // Northern & Island Highlights
    naFeatureBadge: 'Главные сокровища Танзании',
    naFeatureTitle: 'От вершины Килиманджаро до лазурных вод Индийского океана',
    naFeatureSubtitle: 'Всемирно известные локации: кратер Нгоронгоро, прайды львов в Серенгети и старинный Каменный город Занзибара.',
    naThousandIslands: 'Сафари в Серенгети и кратер Нгоронгоро (Большая Пятёрка)',
    naKentuckyHorses: 'Восхождение на Килиманджаро: маршруты Мачаме и Лемошо',
    naVancouver: 'Отдых на белоснежных пляжах Нунгви и Кендва на Занзибаре',
    naParks: 'Аутентичная охота с древним племенем Хадзабе на озере Эяси',
    naExploreCollection: 'Смотреть все туры по Танзании',

    // Pillars / Why TourWeb
    whyTitle: 'Почему путешественники выбирают TourWeb',
    whySubtitle: 'Безупречная организация, глубокое знание дикой природы и безопасность.',
    usp1Title: 'Гарантированное место у окна в джипах 4x4',
    usp1Desc: 'Специально подготовленные Toyota Land Cruiser с подъемной панорамной крышей, зарядками для камер и холодильником.',
    usp2Title: 'Отборные аутентичные лоджи и сафари-кемпы',
    usp2Desc: 'Комфорт высшего класса посреди саванны с горячим душем, великолепной кухней и видами на водопои животных.',
    usp3Title: 'Опытные русскоязычные гиды-следопыты',
    usp3Desc: 'Профессиональные гиды-натуралисты, знающие повадки хищников и умеющие находить редких черных носорогов и леопардов.',
    usp4Title: 'Медицинские протоколы безопасности на Килиманджаро',
    usp4Desc: 'Ежедневный замер сатурации пульсоксиметрами, запас кислорода, сертифицированные гиды WFR и этичный союз носильщиков KPAP.',
    usp5Title: 'Подлинное погружение в культуру племен',
    usp5Desc: 'Никаких постановочных шоу: реальный выход на охоту с охотниками Хадзабе и общение со старейшинами Масаи.',
    usp6Title: 'Удобные перелеты из саванны на пляж',
    usp6Desc: 'Прямые авиаперелеты малой авиацией с грунтовых взлетных полос Серенгети прямо на Занзибар без утомительных переездов.',

    // Travel Styles Section
    stylesTitle: 'Выберите подходящий стиль сафари',
    stylesSubtitle: 'От ультрароскошных тентовых лагерей до спортивных восхождений и семейного отдыха.',
    styleSmallGroup: 'Люкс-сафари в тентовых кемпах',
    styleSmallGroupDesc: 'Камерные лагеря на пути Великой миграции с персональным сервисом и ужинами у костра под звездами.',
    styleClassic: 'Индивидуальное джип-сафари 4x4',
    styleClassicDesc: 'Персональный внедорожник и гид только для вашей семьи или компании с гибким графиком выездов.',
    styleEscapes: 'Экспедиции на Килиманджаро',
    styleEscapesDesc: 'Маршруты с высокой акклиматизацией (Лемошо 8 дней, Мачаме 7 дней) с премиальным горным снаряжением.',
    styleIndependent: 'Пляжный отдых на Занзибаре',
    styleIndependentDesc: 'Виллы у океана, снорклинг на атолле Мнемба, экскурсии на фермы специй и закаты на деревянных лодках доу.',
    styleCruises: 'Авиасафари Fly-In',
    styleCruisesDesc: 'Быстрые перелеты на легкомоторных самолетах между парками для максимальной экономии времени.',

    // Tour Catalog & Filters
    catalogTitle: 'Каталог туров и сафари по Танзании',
    catalogSubtitle: 'Гарантированные даты, все сборы нацпарков (Park Fees) включены в стоимость.',
    filterRegion: 'Регион / Контур',
    filterStyle: 'Формат путешествия',
    filterDuration: 'Длительность (дней)',
    filterPrice: 'Макс. цена (USD)',
    filterSort: 'Сортировка',
    filterSortPopular: 'Сначала популярные',
    filterSortPriceLow: 'Сначала доступные',
    filterSortPriceHigh: 'Сначала премиальные',
    filterSortDuration: 'По длительности',
    filterRussianOnlyCheckbox: 'С русскоязычным гидом',
    filterReset: 'Сбросить фильтры',
    toursFound: 'Найдено программ',
    noToursFound: 'Туров по заданным критериям не найдено. Пожалуйста, измените параметры фильтра.',
    viewItinerary: 'Маршрут и карта',
    bookNow: 'Забронировать / Запросить расчет',
    fromPrice: 'от',
    perPerson: 'на человека',
    daysNights: 'Дней / Ночей',
    viewDetails: 'Детали сафари',
    quickInquiry: 'Быстрый запрос в WhatsApp',

    // Tour Details Modal
    modalOverview: 'Обзор сафари и главные впечатления',
    modalHighlights: 'Главные достопримечательности и животные',
    modalInclusions: 'Что включено в стоимость тура',
    modalDailyItinerary: 'Программа экспедиции по дням',
    modalChoiceExcursions: 'Дополнительные экскурсии на выбор',
    modalDatesPricing: 'Доступные даты выездов и цены',
    modalRussianGuideHeading: 'Русскоязычное сопровождение',
    modalRussianGuideText: 'В данном туре вас сопровождает сертифицированный гид со свободным владением русским языком.',
    modalDay: 'День',
    modalSeatsRemaining: 'мест осталось',
    modalSelectDate: 'Выбрать дату сафари',
    modalRequestQuote: 'Запросить бронирование / КП',
    modalDownloadBrochure: 'Скачать программу (PDF)',
    modalClose: 'Закрыть',

    // Booking & Inquiry Modal
    inquiryTitle: 'Бронирование сафари и расчет тура',
    inquirySubtitle: 'Зафиксируйте дату или закажите расчет индивидуальной программы с перелетами.',
    inquiryName: 'Ваше имя и фамилия',
    inquiryEmail: 'Электронная почта',
    inquiryPhone: 'Телефон / WhatsApp / Telegram',
    inquiryDepartureDate: 'Желаемая дата вылета / начала',
    inquiryTravelersCount: 'Количество путешественников',
    inquiryCurrency: 'Валюта расчета (USD, EUR, RUB, TSH)',
    inquiryRussianAssistance: 'Требуется русскоговорящий гид и визовая поддержка',
    inquirySpecialRequests: 'Пожелания (фотосафари, полет на воздушном шаре, медовый месяц, Хадзабе)',
    inquirySubmitBtn: 'Отправить заявку на сафари',
    inquirySuccessTitle: 'Заявка успешно принята!',
    inquirySuccessMsg: 'Asante sana! Наш специалист по Танзании свяжется с вами в течение 2 часов в WhatsApp/Telegram с готовой сметой.',

    // Brochure Modal
    brochureTitle: 'Скачать каталог сафари по Танзании 2026/2027',
    brochureSubtitle: 'Подробный справочник с картами миграции, высотными профилями Килиманджаро и описанием лоджей.',
    brochureDownloadPdf: 'Скачать PDF файл',
    brochureEmailBrochure: 'Получить на e-mail',

    // Testimonials & Awards
    awardsTitle: 'Признание и отзывы наших путешественников',
    awardsSubtitle: 'Сотни довольных туристов из России и всего мира. 18 лет безупречной репутации.',
    award1: 'TripAdvisor Travelers’ Choice 2025 (Лучшие сафари)',
    award2: 'Премия за выдающийся сервис Ассоциации TATO',
    award3: 'Официальный сертифицированный партнер союза KPAP',
    award4: 'World Travel Awards: Ведущий оператор сафари в Танзании',
    testimonialsTitle: 'Отзывы реальных туристов',

    // AI Concierge
    aiAdvisorTitle: 'AI-Консультант TourWeb по Танзании',
    aiAdvisorSubtitle: 'Задайте любой вопрос: когда ехать на миграцию, какой маршрут Килиманджаро выбрать или что взять на Занзибар.',
    aiAskPlaceholder: 'Задайте вопрос (например: "В каком месяце лучше всего наблюдать переправу через реку Мара?")...',
    aiAskBtn: 'Спросить у AI',

    // Footer
    footerBigTrips: 'ВАШЕ ПУТЕШЕСТВИЕ МЕЧТЫ ПО ТАНЗАНИИ',
    footerBigTripsSub: 'Серенгети • Нгоронгоро • Килиманджаро • Занзибар • Тарангире • Руаха',
    footerSearchHeadline: 'Готовы увидеть львов на охоте и подняться на крышу Африки?',
    footerHaveQuestion: 'КОНСУЛЬТАЦИЯ ЭКСПЕРТА',
    footerPhone: '+255 784 123 456 (Аруша / WhatsApp)',
    footerRussianPhone: '+7 (495) 987-65-43 (Москва)',
    footerRussianEmail: 'tanzania@tourweb.travel',
    footerAlsoInterest: 'Популярные маршруты',
    footerInterestLinks: 'Классическое сафари Большая Пятёрка 7 дней • Восхождение на Килиманджаро (Лемошо 8 дней) • Сафари + отдых на Занзибаре 10 дней • Парки Тарангире и Нгоронгоро 5 дней • Сезон отела в Ндуту',
    footerCompany: 'TourWeb Tanzania Expeditions',
    footerBrand1: 'Сафари по Северному контуру',
    footerBrand2: 'Восхождения на Килиманджаро',
    footerBrand3: 'Пляжные туры на Занзибар',
    footerBrand4: 'Южные нацпарки и шимпанзе Махале',
    footerLegal: 'Член TATO • Лицензия TTB #TZ-88492 • Сертификат KPAP • Страхование ответственности',
    footerCopyright: 'Copyright © TourWeb Tanzania. Все права защищены.',
  },

  es: {
    // Brand & Header
    brandTitle: 'TourWeb',
    brandTagline: 'Expediciones en Tanzania: Safari, Kilimanjaro y Zanzíbar',
    guidedTours: 'Safaris Privados y en Grupo en Tanzania',
    phoneSupport: '+255 784 123 456',
    callAdvisor: 'Asesor Especialista en Safaris',
    emergencyLine: 'Atención 24/7 en Arusha y Zanzíbar',
    myGlobus: 'Mi TourWeb',
    savedTours: 'Safaris Guardados',
    searchPlaceholder: 'Buscar: Serengeti, Ngorongoro, Kilimanjaro, Zanzíbar, Masáis...',
    changeCountry: 'Moneda e Idioma',
    selectLanguage: 'Idioma',

    // Navigation
    navHome: 'Inicio',
    navEnquireNow: 'Solicitar Presupuesto',
    navDestinations: 'Destinos',
    navCamps: 'Campamentos y Lodges',
    navRegions: 'Regiones',
    navExperiences: 'Experiencias',
    navJourneys: 'Rutas y Safaris',
    navExclusiveOffers: 'Ofertas Exclusivas',
    navImpact: 'Impacto y Conservación',
    navJournal: 'Revista y Guías',
    navAboutWilderness: 'Sobre Wilderness',
    navExploreTours: 'Safaris y Rutas',
    navAccommodations: 'Alojamientos y Lodges',
    navInteractiveMap: 'Mapa de Tanzania',
    navWhyGlobus: 'Por qué TourWeb',
    navTravelStyles: 'Estilos de Safari',
    navDeals: 'Ofertas y Migración',
    navNorthAmerica: 'Cumbre Kilimanjaro 2027',
    navTourPlanning: 'Planificador de Viaje',
    navBrochures: 'Folleto PDF',
    navAiPlanner: 'Asistente IA',
    navProposal: 'Generador de Propuesta',
    chatWhatsApp: 'Chatear por WhatsApp',
    chatTelegram: 'Chatear por Telegram',
    directConsultation: 'Consulta Directa Instantánea',
    directConsultationSub: 'Hable directamente con nuestros organizadores de safari en Arusha:',
    instantProposalTitle: 'Generador Dinámico de Propuestas para Tanzania',
    instantProposalSubtitle: 'Diseñe su safari de los Cinco Grandes, trekking al Kilimanjaro y playas de Zanzíbar con precios en tiempo real.',

    // Stays & Accommodations
    accommodationsTitle: 'Colección de Lodges de Safari y Alojamientos de Lujo',
    accommodationsSubtitle: 'Desde exclusivos santuarios en la sabana y campamentos de tiendas siguiendo la Gran Migración, hasta villas en Zanzíbar y acogedores ecolodges.',
    stayTierLuxuryLodges: 'Lodges de Safari de Lujo',
    stayTierTentedCamps: 'Campamentos de Tiendas Premium',
    stayTierZanzibarResorts: 'Resorts Boutique en Zanzíbar',
    stayTierEcoLodges: 'Ecolodges de Confort y Calidad',
    stayTierAll: 'Todos los Alojamientos',
    stayMealPlan: 'Régimen de Comidas',
    stayAmenities: 'Servicios e Instalaciones',
    stayRoomTypes: 'Tipos de Habitaciones',
    stayUpgradeOption: 'Opción de Mejora de Alojamiento',
    stayIncludedStandard: 'Confort Estándar Incluido',
    stayViewLodgeDetails: 'Ver Galería y Detalles',
    staySelectLodge: 'Seleccionar este Lodge',
    stayUpgradePerNight: 'Suplemento / noche',
    stayIncludedInTour: 'Incluido en el Itinerario',
    stayVerifiedAmenities: 'Servicios Verificados',
    stayRussianStaff: 'Asistencia Multilingüe',
    stayExploreAllLodges: 'Explorar Todos los Lodges',
    stayPerNightFrom: 'Desde / noche',
    staySelectRoom: 'Seleccionar Habitación',
    stayClosePreview: 'Cerrar',

    // Hero Section
    heroBadge: 'Operador Certificado por TATO y TTB',
    heroTitle: 'Viva Tanzania más allá de sus sueños',
    heroSubtitle: 'Safaris de los Cinco Grandes en las llanuras del Serengeti, amanecer en el pico Uhuru del Kilimanjaro y aguas turquesas en Zanzíbar.',
    heroSubtext: 'Jeeps 4x4 Land Cruiser con techo abatible, campamentos de lujo y guías multilingües certificados.',
    heroSearchDestination: 'Seleccione Circuito',
    heroAllDestinations: 'Todos los Circuitos (Norte, Zanzíbar, Kilimanjaro)',
    heroTravelStyle: 'Estilo de Expedición',
    heroAllStyles: 'Todos los Estilos (Lujo, Privado, Trekking, Playa)',
    heroDepartureMonth: 'Mes de Salida',
    heroAnyMonth: 'Cualquier Mes',
    heroRussianGuideFilter: 'Guía disponible en Ruso / Español',
    heroRussianGuideBadge: 'Guía Multilingüe',
    heroBtnSearch: 'Buscar mi Safari',
    heroQuickStatsCountries: '16 Parques Nacionales',
    heroQuickStatsContinents: 'Los 5 Grandes',
    heroQuickStatsSatisfaction: '99.4% Éxito en Cumbres',
    heroQuickStatsExperience: '18 Años de Excelencia',

    // Trust Badges
    trustTato: 'Miembro TATO (Asociación de Operadores de Tanzania)',
    trustTtb: 'Licencia Oficial TTB (Junta de Turismo de Tanzania)',
    trustTanapa: 'Operador Autorizado TANAPA',
    trustZatoga: 'Guías de Zanzíbar Certificados ZATOGA',

    // Promo Banner
    promoSmarterTitle: 'Presencie la Gran Migración y los Cinco Grandes',
    promoSmarterSubtitle: 'Cruce del río Mara en el norte de Serengeti y temporada de cría en Ndutu.',
    promoUpgradeTitle: 'No es un simple viaje. Es una auténtica expedición africana.',
    promoUpgradeDesc: 'Duerma en campamentos de tiendas de lujo bajo las estrellas africanas y conozca a las tribus Hadzabe y Masái.',
    promoEscapesBadge: 'Safaris de temporada desde $1,290',
    promoClaimBtn: 'Ver Ofertas de Safari',

    // Interactive Map
    mapTitle: 'Explorador Interactivo de Parques de Tanzania',
    mapSubtitle: 'Descubra los parques nacionales, rutas de montaña y las playas de Zanzíbar.',
    mapFilterAll: 'Todos los Circuitos',
    mapFilterRussianOnly: 'Mostrar safaris con guía multilingüe garantizado',
    mapClickToPreview: 'Haga clic en un parque para ver la ruta',
    mapSelectedDestination: 'Destino Seleccionado',
    mapViewFullItinerary: 'Ver Itinerario Completo',
    mapRouteStopsCount: 'Etapas y Safaris',
    mapInteractiveGuideInfo: 'Guías naturalistas en español, ruso e inglés',

    // Northern & Island Highlights
    naFeatureBadge: 'Expediciones Icónicas',
    naFeatureTitle: 'Del Techo de África a las Arenas de Zanzíbar',
    naFeatureSubtitle: 'Serengeti, el cráter del Ngorongoro, la cima del Kilimanjaro y las playas de Nungwi.',
    naThousandIslands: 'Safari Cinco Grandes en Serengeti y Ngorongoro',
    naKentuckyHorses: 'Rutas Machame y Lemosho en el Monte Kilimanjaro',
    naVancouver: 'Resorts de Playa y Tour de Especias en Zanzíbar',
    naParks: 'Convivencia Cultural con Cazadores Hadzabe en Lago Eyasi',
    naExploreCollection: 'Ver Todos los Safaris',

    // Pillars / Why TourWeb
    whyTitle: 'Por Qué Elegir TourWeb Tanzania',
    whySubtitle: 'Vehículos 4x4 personalizados, campamentos exclusivos y máxima seguridad.',
    usp1Title: 'Asiento de Ventana Garantizado en 4x4',
    usp1Desc: 'Vehículos Land Cruiser adaptados con techo panorámico y puertos de carga.',
    usp2Title: 'Campamentos de Lujo en Plena Naturaleza',
    usp2Desc: 'Tiendas de safari con duchas de agua caliente y alta gastronomía.',
    usp3Title: 'Guías Naturalistas de Élite',
    usp3Desc: 'Rastreadores expertos con décadas de experiencia en avistamiento de fauna.',
    usp4Title: 'Protocolos de Seguridad en Kilimanjaro',
    usp4Desc: 'Oxímetros diarios, oxígeno de emergencia y compromiso con porteadores KPAP.',
    usp5Title: 'Encuentros Culturales Genuinos',
    usp5Desc: 'Caza tradicional con los Hadzabe y respeto a las tradiciones Masái.',
    usp6Title: 'Conexión Directa Sabana-Playa',
    usp6Desc: 'Vuelos directos desde el Serengeti a Zanzíbar sin pérdidas de tiempo.',

    // Travel Styles Section
    stylesTitle: 'Estilos de Viaje en Tanzania',
    stylesSubtitle: 'Opciones a medida para cada tipo de viajero.',
    styleSmallGroup: 'Safari en Campamentos de Lujo',
    styleSmallGroupDesc: 'Campamentos íntimos en el corazón de la fauna africana.',
    styleClassic: 'Safari Privado en Jeep 4x4',
    styleClassicDesc: 'Vehículo exclusivo y guía dedicado con horarios flexibles.',
    styleEscapes: 'Trekking en el Kilimanjaro',
    styleEscapesDesc: 'Rutas con alta tasa de éxito y equipo de montaña profesional.',
    styleIndependent: 'Playas y Relax en Zanzíbar',
    styleIndependentDesc: 'Aguas cristalinas, arrecife de Mnemba y Stone Town.',
    styleCruises: 'Safari Aéreo Fly-In',
    styleCruisesDesc: 'Vuelos panorámicos entre parques para aprovechar al máximo su tiempo.',

    // Tour Catalog & Filters
    catalogTitle: 'Catálogo de Safaris y Expediciones',
    catalogSubtitle: 'Salidas garantizadas y todas las tasas de parques incluidas.',
    filterRegion: 'Circuito / Región',
    filterStyle: 'Estilo de Viaje',
    filterDuration: 'Duración (días)',
    filterPrice: 'Precio Máx.',
    filterSort: 'Ordenar por',
    filterSortPopular: 'Más Populares',
    filterSortPriceLow: 'Precio: Menor a Mayor',
    filterSortPriceHigh: 'Precio: Mayor a Menor',
    filterSortDuration: 'Mayor Duración',
    filterRussianOnlyCheckbox: 'Guía Bilingüe / Ruso',
    filterReset: 'Restablecer Filtros',
    toursFound: 'Safaris Encontrados',
    noToursFound: 'No se encontraron safaris con los filtros actuales.',
    viewItinerary: 'Itinerario y Mapa',
    bookNow: 'Reservar / Cotizar',
    fromPrice: 'Desde',
    perPerson: 'por viajero',
    daysNights: 'Días / Noches',
    viewDetails: 'Detalles del Safari',
    quickInquiry: 'Consulta Rápida por WhatsApp',

    // Tour Details Modal
    modalOverview: 'Resumen del Safari',
    modalHighlights: 'Puntos Destacados y Fauna',
    modalInclusions: 'Incluido en el Precio',
    modalDailyItinerary: 'Itinerario Día a Día',
    modalChoiceExcursions: 'Experiencias Opcionales',
    modalDatesPricing: 'Fechas y Tarifas',
    modalRussianGuideHeading: 'Acompañamiento Multilingüe',
    modalRussianGuideText: 'Este safari cuenta con un guía profesional certificado en el idioma seleccionado.',
    modalDay: 'Día',
    modalSeatsRemaining: 'plazas libres',
    modalSelectDate: 'Seleccionar Fecha',
    modalRequestQuote: 'Solicitar Presupuesto',
    modalDownloadBrochure: 'Descargar Itinerario (PDF)',
    modalClose: 'Cerrar',

    // Booking & Inquiry Modal
    inquiryTitle: 'Reserva y Solicitud de Safari',
    inquirySubtitle: 'Asegure su fecha o solicite un itinerario personalizado.',
    inquiryName: 'Nombre Completo',
    inquiryEmail: 'Correo Electrónico',
    inquiryPhone: 'Teléfono / WhatsApp / Telegram',
    inquiryDepartureDate: 'Fecha Deseada',
    inquiryTravelersCount: 'Número de Viajeros',
    inquiryCurrency: 'Moneda (USD, EUR, RUB, TSH)',
    inquiryRussianAssistance: 'Solicitar guía en ruso / español y asistencia de visa',
    inquirySpecialRequests: 'Peticiones Especiales (Fotografía, Luna de Miel, Globo aerostático)',
    inquirySubmitBtn: 'Enviar Solicitud de Safari',
    inquirySuccessTitle: '¡Solicitud Recibida!',
    inquirySuccessMsg: '¡Asante sana! Nuestro equipo en Arusha se comunicará con usted en menos de 2 horas.',

    // Brochure Modal
    brochureTitle: 'Descargar Guía de Safaris 2026/2027',
    brochureSubtitle: 'Guía completa con mapas de migración y consejos para el Kilimanjaro.',
    brochureDownloadPdf: 'Descargar PDF',
    brochureEmailBrochure: 'Enviar por Correo',

    // Testimonials & Awards
    awardsTitle: 'Reconocimientos y Testimonios',
    awardsSubtitle: 'Excelencia avalada por viajeros de todo el mundo durante 18 años.',
    award1: 'TripAdvisor Travelers’ Choice 2025',
    award2: 'Premio de Excelencia Operativa TATO',
    award3: 'Socio Oficial KPAP para el Kilimanjaro',
    award4: 'World Travel Awards: Operador Líder en Tanzania',
    testimonialsTitle: 'Opiniones Verificadas',

    // AI Concierge
    aiAdvisorTitle: 'Asistente IA TourWeb Tanzania',
    aiAdvisorSubtitle: 'Pregunte sobre la Gran Migración, rutas al Kilimanjaro o playas en Zanzíbar.',
    aiAskPlaceholder: 'Haga una pregunta (ej. "¿Cuándo es mejor ver el cruce del río Mara?")...',
    aiAskBtn: 'Consultar al Asistente',

    // Footer
    footerBigTrips: 'DESCUBRA TANZANIA CON TOTAL CONFIANZA',
    footerBigTripsSub: 'Serengeti • Ngorongoro • Kilimanjaro • Zanzíbar • Tarangire',
    footerSearchHeadline: '¿Listo para ver leones en libertad y ascender al techo de África?',
    footerHaveQuestion: 'CONSULTA CON UN ESPECIALISTA',
    footerPhone: '+255 784 123 456 (Arusha / WhatsApp)',
    footerRussianPhone: '+7 (495) 987-65-43 (Madrid / Moscú)',
    footerRussianEmail: 'tanzania@tourweb.travel',
    footerAlsoInterest: 'Circuitos Populares',
    footerInterestLinks: 'Safari 5 Grandes 7 Días • Kilimanjaro Ruta Lemosho 8 Días • Safari y Playa en Zanzíbar 10 Días • Tarangire y Ngorongoro 5 Días • Temporada de Cría en Ndutu',
    footerCompany: 'TourWeb Tanzania Expeditions',
    footerBrand1: 'Safaris en el Circuito Norte',
    footerBrand2: 'Ascensiones al Kilimanjaro',
    footerBrand3: 'Playas y Especias de Zanzíbar',
    footerBrand4: 'Fauna Salvaje del Sur y Chimpancés',
    footerLegal: 'Certificado TATO • Licencia TTB #TZ-88492 • Miembro KPAP • Seguro de Viaje',
    footerCopyright: 'Copyright © TourWeb Tanzania. Todos los derechos reservados.',
  },

  fr: {
    // Brand & Header
    brandTitle: 'TourWeb',
    brandTagline: 'Expéditions en Tanzanie : Safari, Kilimandjaro & Zanzibar',
    guidedTours: 'Safaris Privés & en Petit Groupe en Tanzanie',
    phoneSupport: '+255 784 123 456',
    callAdvisor: 'Spécialiste Safaris Arusha',
    emergencyLine: 'Assistance 24/7 Arusha & Zanzibar',
    myGlobus: 'Mon TourWeb',
    savedTours: 'Safaris Sauvegardés',
    searchPlaceholder: 'Rechercher Serengeti, Ngorongoro, Kilimandjaro, Zanzibar, Masaï...',
    changeCountry: 'Devise & Langue',
    selectLanguage: 'Langue',

    // Navigation
    navHome: 'Accueil',
    navEnquireNow: 'Demander un Devis',
    navDestinations: 'Destinations',
    navCamps: 'Camps & Lodges',
    navRegions: 'Régions',
    navExperiences: 'Expériences',
    navJourneys: 'Itinéraires',
    navExclusiveOffers: 'Offres Exclusives',
    navImpact: 'Impact & Conservation',
    navJournal: 'Journal',
    navAboutWilderness: 'À Propos',
    navExploreTours: 'Tous les Safaris',
    navAccommodations: 'Lodges & Hébergements',
    navInteractiveMap: 'Carte des Parcs de Tanzanie',
    navWhyGlobus: 'Pourquoi TourWeb',
    navTravelStyles: 'Styles de Safari',
    navDeals: 'Offres & Migration',
    navNorthAmerica: 'Sommet Kilimandjaro 2027',
    navTourPlanning: 'Planificateur Safari',
    navBrochures: 'Brochure PDF',
    navAiPlanner: 'Conseiller IA',
    navProposal: 'Générateur de Devis',
    chatWhatsApp: 'Discuter sur WhatsApp',
    chatTelegram: 'Discuter sur Telegram',
    directConsultation: 'Consultation Directe Instantanée',
    directConsultationSub: 'Échangez directement avec nos conseillers basés à Arusha :',
    instantProposalTitle: 'Générateur Dynamique de Devis Tanzanie',
    instantProposalSubtitle: 'Créez votre safari Big Five, ascension du Kilimandjaro et séjour plage à Zanzibar avec tarifs en temps réel en USD, EUR, RUB ou TSH.',

    // Stays & Accommodations
    accommodationsTitle: 'Sélection de Lodges & Écolodges en Tanzanie',
    accommodationsSubtitle: 'Des sanctuaires de luxe et camps de tentes au cœur de la migration aux villas de Zanzibar et écolodges chaleureux.',
    stayTierLuxuryLodges: 'Lodges Safari de Luxe',
    stayTierTentedCamps: 'Camps de Tentes de Luxe',
    stayTierZanzibarResorts: 'Resorts Boutique à Zanzibar',
    stayTierEcoLodges: 'Écolodges Confort & Valeur',
    stayTierAll: 'Tous les Hébergements',
    stayMealPlan: 'Formule Repas',
    stayAmenities: 'Équipements Vérifiés',
    stayRoomTypes: 'Types de Chambres',
    stayUpgradeOption: 'Surclassement Hébergement',
    stayIncludedStandard: 'Confort Standard Inclus',
    stayViewLodgeDetails: 'Voir Galerie & Détails',
    staySelectLodge: 'Sélectionner ce Lodge',
    stayUpgradePerNight: 'Surclassement / nuit',
    stayIncludedInTour: 'Inclus dans le Forfait',
    stayVerifiedAmenities: 'Équipements Vérifiés',
    stayRussianStaff: 'Assistance Multilingue',
    stayExploreAllLodges: 'Explorer Tous les Lodges',
    stayPerNightFrom: 'À partir de / nuit',
    staySelectRoom: 'Choisir la Chambre',
    stayClosePreview: 'Fermer',

    // Hero Section
    heroBadge: 'Opérateur Agréé TATO & TTB Tanzanie',
    heroTitle: 'Vivez la Tanzanie au-delà de vos rêves les plus fous',
    heroSubtitle: 'Les Big Five dans les plaines infinies du Serengeti, le lever de soleil sur le pic Uhuru du Kilimandjaro et les eaux turquoise de Zanzibar.',
    heroSubtext: 'Jeeps 4x4 privées avec toit panoramique, camps de toile de luxe et guides francophones / russophones chevronnés.',
    heroSearchDestination: 'Sélectionnez un circuit',
    heroAllDestinations: 'Tous les circuits (Nord, Zanzibar, Kilimandjaro)',
    heroTravelStyle: 'Style d’expédition',
    heroAllStyles: 'Tous les styles (Luxe, Privé 4x4, Trekking, Plage)',
    heroDepartureMonth: 'Mois de départ',
    heroAnyMonth: 'Tous les mois / saisons',
    heroRussianGuideFilter: 'Guide russophone ou francophone garanti',
    heroRussianGuideBadge: 'Guide multilingue',
    heroBtnSearch: 'Trouver mon safari',
    heroQuickStatsCountries: '16 Parcs Nationaux',
    heroQuickStatsContinents: 'Les Big Five',
    heroQuickStatsSatisfaction: '99.4% Réussite Sommet',
    heroQuickStatsExperience: '18 Ans à Arusha',

    // Trust Badges
    trustTato: 'Membre TATO (Association des voyagistes de Tanzanie)',
    trustTtb: 'Agrément TTB (Office du Tourisme de Tanzanie)',
    trustTanapa: 'Opérateur Officiel TANAPA',
    trustZatoga: 'Guides Agréés ZATOGA Zanzibar',

    // Promo Banner
    promoSmarterTitle: 'Assistez à la Grande Migration & aux Big Five',
    promoSmarterSubtitle: 'La traversée de la rivière Mara au nord du Serengeti et la saison des naissances à Ndutu.',
    promoUpgradeTitle: 'Bien plus qu’un safari. Une véritable aventure africaine.',
    promoUpgradeDesc: 'Dormez au cœur de la savane dans des tentes de grand confort et partagez des instants inoubliables avec les tribus Hadzabe et Masaï.',
    promoEscapesBadge: 'Safaris basse saison dès $1,290',
    promoClaimBtn: 'Voir les offres de safari',

    // Interactive Map
    mapTitle: 'Carte Interactive des Parcs & Circuits de Tanzanie',
    mapSubtitle: 'Explorez le Serengeti, le cratère du Ngorongoro, le Kilimandjaro et l’archipel de Zanzibar.',
    mapFilterAll: 'Tous les circuits',
    mapFilterRussianOnly: 'Départs avec guide russophone / francophone',
    mapClickToPreview: 'Cliquez sur un parc pour visualiser l’itinéraire',
    mapSelectedDestination: 'Destination sélectionnée',
    mapViewFullItinerary: 'Programme complet du safari',
    mapRouteStopsCount: 'Étapes & Safaris',
    mapInteractiveGuideInfo: 'Guides naturalistes experts multilingues',

    // Northern & Island Highlights
    naFeatureBadge: 'Expéditions d’Exception',
    naFeatureTitle: 'Du Toit de l’Afrique aux Lagons de Zanzibar',
    naFeatureSubtitle: 'L’incontournable : prédateurs du Serengeti, caldeira du Ngorongoro et plages de sable blanc.',
    naThousandIslands: 'Safari Big Five Serengeti & Ngorongoro',
    naKentuckyHorses: 'Ascension du Kilimandjaro (Voies Machame & Lemosho)',
    naVancouver: 'Séjour Plage & Épices à Zanzibar (Nungwi & Kendwa)',
    naParks: 'Immersion Culturelle & Chasse avec les Hadzabe du Lac Eyasi',
    naExploreCollection: 'Voir tous les circuits en Tanzanie',

    // Pillars / Why TourWeb
    whyTitle: 'Pourquoi Choisir TourWeb Tanzanie',
    whySubtitle: 'Véhicules 4x4 d’exception, camps immersifs et logistique sans faille.',
    usp1Title: 'Place Côté Fenêtre Garantie en 4x4 Land Cruiser',
    usp1Desc: 'Véhicules spécialement aménagés avec toit ouvrant, prises de recharge et glacière.',
    usp2Title: 'Camps de Toile de Charme & Lodges Raffinés',
    usp2Desc: 'Confort absolu au cœur de la faune sauvage avec douches chaudes et gastronomie soignée.',
    usp3Title: 'Guides-Chauffeurs Naturalistes d’Élite',
    usp3Desc: 'Excellente maîtrise du terrain et capacité unique à repérer léopards et rhinocéros noirs.',
    usp4Title: 'Sécurité Maximale sur le Kilimandjaro',
    usp4Desc: 'Oxymètres quotidiens, bouteilles d’oxygène de secours et respect strict de la charte KPAP pour les porteurs.',
    usp5Title: 'Rencontres Culturelles Authentiques',
    usp5Desc: 'Partage respectueux avec les anciens Masaï et sortie de chasse traditionnelle avec les Hadzabe.',
    usp6Title: 'Liaisons Rapides Savane-Plage',
    usp6Desc: 'Vols directs en petit avion depuis les pistes du Serengeti jusqu’à Zanzibar.',

    // Travel Styles Section
    stylesTitle: 'Styles de Voyage en Tanzanie',
    stylesSubtitle: 'Des aventures adaptées à vos envies de découverte et de confort.',
    styleSmallGroup: 'Safari en Camp de Toile de Luxe',
    styleSmallGroupDesc: 'Camps intimistes au plus près de la faune avec dîners aux chandelles sous les étoiles.',
    styleClassic: 'Safari Privé en 4x4 Dédié',
    styleClassicDesc: 'Véhicule et guide privatifs pour votre famille ou groupe avec horaires flexibles.',
    styleEscapes: 'Trekking & Ascension Kilimandjaro',
    styleEscapesDesc: 'Itinéraires optimisés pour l’acclimatation avec matériel haute montagne de qualité.',
    styleIndependent: 'Séjour Balnéaire & Épices à Zanzibar',
    styleIndependentDesc: 'Plages paradisiaques, récif de Mnemba, Stone Town et croisières en dhow au coucher du soleil.',
    styleCruises: 'Safari Aérien Fly-In',
    styleCruisesDesc: 'Vols brousse pour relier rapidement les grands parcs sans fatigue routière.',

    // Tour Catalog & Filters
    catalogTitle: 'Catalogue des Safaris & Expéditions en Tanzanie',
    catalogSubtitle: 'Départs garantis et entrées de parcs (Park Fees) toutes incluses.',
    filterRegion: 'Circuit / Région',
    filterStyle: 'Style de voyage',
    filterDuration: 'Durée (jours)',
    filterPrice: 'Prix max.',
    filterSort: 'Trier par',
    filterSortPopular: 'Plus populaires',
    filterSortPriceLow: 'Prix : croissant',
    filterSortPriceHigh: 'Prix : décroissant',
    filterSortDuration: 'Durée la plus longue',
    filterRussianOnlyCheckbox: 'Guide russophone / bilingue',
    filterReset: 'Réinitialiser les filtres',
    toursFound: 'Safaris trouvés',
    noToursFound: 'Aucun safari ne correspond à vos critères.',
    viewItinerary: 'Itinéraire & Carte',
    bookNow: 'Réserver / Demander un devis',
    fromPrice: 'Dès',
    perPerson: 'par voyageur',
    daysNights: 'Jours / Nuits',
    viewDetails: 'Détails du safari',
    quickInquiry: 'Devis Rapide WhatsApp',

    // Tour Details Modal
    modalOverview: 'Aperçu du safari',
    modalHighlights: 'Faune & Points Forts',
    modalInclusions: 'Inclus dans le tarif',
    modalDailyItinerary: 'Programme jour par jour',
    modalChoiceExcursions: 'Activités & Excursions au choix',
    modalDatesPricing: 'Départs & Tarifs disponibles',
    modalRussianGuideHeading: 'Accompagnement multilingue',
    modalRussianGuideText: 'Ce safari inclut un guide naturaliste expérimenté dans la langue demandée.',
    modalDay: 'Jour',
    modalSeatsRemaining: 'places restantes',
    modalSelectDate: 'Sélectionner la date',
    modalRequestQuote: 'Demander un devis',
    modalDownloadBrochure: 'Télécharger le PDF',
    modalClose: 'Fermer',

    // Booking & Inquiry Modal
    inquiryTitle: 'Réservation de Safari en Tanzanie',
    inquirySubtitle: 'Bloquez vos dates préférées ou demandez une création de safari sur mesure.',
    inquiryName: 'Nom complet',
    inquiryEmail: 'Adresse e-mail',
    inquiryPhone: 'Téléphone / WhatsApp / Telegram',
    inquiryDepartureDate: 'Date de départ souhaitée',
    inquiryTravelersCount: 'Nombre de voyageurs',
    inquiryCurrency: 'Devise de paiement (USD, EUR, RUB, TSH)',
    inquiryRussianAssistance: 'Assistance linguistique et conseils visa souhaités',
    inquirySpecialRequests: 'Demandes particulières (Photos, Lune de miel, Survol en montgolfière)',
    inquirySubmitBtn: 'Envoyer la demande de safari',
    inquirySuccessTitle: 'Demande bien reçue !',
    inquirySuccessMsg: 'Asante sana ! Un conseiller spécialiste d’Arusha vous répondra sous 2 heures.',

    // Brochure Modal
    brochureTitle: 'Télécharger le Guide Tanzanie 2026/2027',
    brochureSubtitle: 'Guide complet avec cartes de migration, profils du Kilimandjaro et descriptifs des lodges.',
    brochureDownloadPdf: 'Télécharger le PDF',
    brochureEmailBrochure: 'Recevoir par e-mail',

    // Testimonials & Awards
    awardsTitle: 'Notre Plus Grande Fierté : Vos Émotions en Safari',
    awardsSubtitle: 'Une réputation d’excellence construite depuis 18 ans au cœur de la Tanzanie.',
    award1: 'TripAdvisor Travelers’ Choice 2025',
    award2: 'Prix d’Excellence TATO pour le Tourisme Responsable',
    award3: 'Partenaire Officiel KPAP (Porteurs du Kilimandjaro)',
    award4: 'World Travel Awards : Meilleur Opérateur Safari Tanzanie',
    testimonialsTitle: 'Avis de nos voyageurs',

    // AI Concierge
    aiAdvisorTitle: 'Conseiller IA Safari TourWeb',
    aiAdvisorSubtitle: 'Posez vos questions sur la Grande Migration, les voies du Kilimandjaro ou les plages de Zanzibar.',
    aiAskPlaceholder: 'Posez votre question (ex. "Quelle est la meilleure saison pour la migration à Ndutu ?")...',
    aiAskBtn: 'Consulter l’IA',

    // Footer
    footerBigTrips: 'DÉCOUVREZ LA TANZANIE EN TOUTE SÉRÉNITÉ',
    footerBigTripsSub: 'Serengeti • Ngorongoro • Kilimandjaro • Zanzibar • Tarangire • Ruaha',
    footerSearchHeadline: 'Prêt à vivre le spectacle de la faune africaine et à toucher le toit de l’Afrique ?',
    footerHaveQuestion: 'UNE QUESTION SUR VOTRE SAFARI ?',
    footerPhone: '+255 784 123 456 (Arusha / WhatsApp)',
    footerRussianPhone: '+7 (495) 987-65-43 (Paris / Moscou)',
    footerRussianEmail: 'tanzania@tourweb.travel',
    footerAlsoInterest: 'Circuits Populaires',
    footerInterestLinks: 'Safari Big Five 7 Jours • Ascension Kilimandjaro Voie Lemosho 8 Jours • Safari & Plage Zanzibar 10 Jours • Tarangire & Ngorongoro 5 Jours • Saison des Naissances à Ndutu',
    footerCompany: 'TourWeb Tanzania Expeditions',
    footerBrand1: 'Safaris du Circuit Nord',
    footerBrand2: 'Expéditions au Sommet du Kilimandjaro',
    footerBrand3: 'Séjours Balnéaires à Zanzibar',
    footerBrand4: 'Parcs Sauvages du Sud & Chimpancés',
    footerLegal: 'Agréé TATO • Licence TTB #TZ-88492 • Membre KPAP • Assurance Responsabilité Professionnelle',
    footerCopyright: 'Copyright © TourWeb Tanzania. Tous droits réservés.',
  },

  de: {
    // Brand & Header
    brandTitle: 'TourWeb',
    brandTagline: 'Tansania Expeditionen: Safari, Kilimandscharo & Sansibar',
    guidedTours: 'Maßgeschneiderte & Kleingruppen-Safaris in Tansania',
    phoneSupport: '+255 784 123 456',
    callAdvisor: 'Direkte Safari-Experten-Hotline in Arusha',
    emergencyLine: '24/7 Notfallservice in Arusha & Sansibar',
    myGlobus: 'Mein TourWeb',
    savedTours: 'Gespeicherte Safaris',
    searchPlaceholder: 'Suche nach Serengeti, Ngorongoro, Kilimandscharo, Sansibar, Massai...',
    changeCountry: 'Währung & Sprache',
    selectLanguage: 'Sprache',

    // Navigation
    navHome: 'Startseite',
    navEnquireNow: 'Jetzt Anfragen',
    navDestinations: 'Reiseziele',
    navCamps: 'Camps & Lodges',
    navRegions: 'Regionen',
    navExperiences: 'Erlebnisse',
    navJourneys: 'Routen & Reisen',
    navExclusiveOffers: 'Exklusive Angebote',
    navImpact: 'Nachhaltigkeit & Schutz',
    navJournal: 'Journal & Guides',
    navAboutWilderness: 'Über Wilderness',
    navExploreTours: 'Alle Safaris & Touren',
    navAccommodations: 'Unterkünfte & Lodges',
    navInteractiveMap: 'Tansania Park-Karte',
    navWhyGlobus: 'Warum TourWeb',
    navTravelStyles: 'Safari-Arten',
    navDeals: 'Migration & Angebote',
    navNorthAmerica: 'Kilimandscharo 2027',
    navTourPlanning: 'Reiseplaner',
    navBrochures: 'Safari-Broschüre',
    navAiPlanner: 'KI-Safari-Berater',
    navProposal: 'Angebotsersteller',
    chatWhatsApp: 'Über WhatsApp anfragen',
    chatTelegram: 'Über Telegram anfragen',
    directConsultation: 'Direkte Messenger-Beratung',
    directConsultationSub: 'Sprechen Sie direkt mit unseren Safari-Spezialisten in Arusha:',
    instantProposalTitle: 'Dynamischer Tansania-Reiseangebot-Generator',
    instantProposalSubtitle: 'Erstellen Sie Ihre Traum-Safari mit Live-Preisen in USD, EUR, RUB oder TSH.',

    // Stays & Accommodations
    accommodationsTitle: 'Ausgewählte Safari-Lodges & Luxus-Camps',
    accommodationsSubtitle: 'Von exklusiven Wildnis-Lodges und Zeltcamps auf den Migrationspfaden bis hin zu Sansibar-Strandvillen.',
    stayTierLuxuryLodges: 'Luxus-Safari-Lodges',
    stayTierTentedCamps: 'Luxus-Zeltcamps',
    stayTierZanzibarResorts: 'Boutique-Resorts auf Sansibar',
    stayTierEcoLodges: 'Komfortable Öko-Lodges',
    stayTierAll: 'Alle Unterkünfte',
    stayMealPlan: 'Verpflegung',
    stayAmenities: 'Geprüfte Annehmlichkeiten',
    stayRoomTypes: 'Zimmerkategorien',
    stayUpgradeOption: 'Unterkunfts-Upgrades',
    stayIncludedStandard: 'Standard-Komfort inklusive',
    stayViewLodgeDetails: 'Details & Galerie ansehen',
    staySelectLodge: 'Diese Lodge wählen',
    stayUpgradePerNight: 'Upgrade / Nacht',
    stayIncludedInTour: 'Im Tour-Paket enthalten',
    stayVerifiedAmenities: 'Geprüfte Services',
    stayRussianStaff: 'Mehrsprachige Betreuung',
    stayExploreAllLodges: 'Alle Lodges entdecken',
    stayPerNightFrom: 'Ab / Nacht',
    staySelectRoom: 'Zimmer wählen',
    stayClosePreview: 'Schließen',

    // Hero Section
    heroBadge: 'Offiziell lizenziert von TATO & TTB Tansania',
    heroTitle: 'Erleben Sie Tansania jenseits Ihrer kühnsten Träume',
    heroSubtitle: 'Die Big Five in der endlosen Serengeti, Sonnenaufgang am Uhuru Peak des Kilimandscharo und weiße Sandstrände auf Sansibar.',
    heroSubtext: 'Eigene 4x4 Land Cruiser mit Aufstelldach, Luxus-Zeltcamps und zertifizierte mehrsprachige Driver-Guides.',
    heroSearchDestination: 'Region wählen',
    heroAllDestinations: 'Alle Regionen (Norden, Sansibar, Kilimandscharo)',
    heroTravelStyle: 'Reiseart',
    heroAllStyles: 'Alle Reisearten (Luxus, Privat, Trekking, Strand)',
    heroDepartureMonth: 'Reisemonat',
    heroAnyMonth: 'Jeder Monat / Saison',
    heroRussianGuideFilter: 'Zertifizierter Guide in Wunschsprache',
    heroRussianGuideBadge: 'Mehrsprachiger Guide',
    heroBtnSearch: 'Safari finden',
    heroQuickStatsCountries: '16 Nationalparks',
    heroQuickStatsContinents: 'Die Big Five',
    heroQuickStatsSatisfaction: '99.4% Gipfelerfolg',
    heroQuickStatsExperience: '18 Jahre Erfahrung',

    // Trust Badges
    trustTato: 'TATO-Mitglied (Tanzania Association of Tour Operators)',
    trustTtb: 'TTB Lizenziert (Tanzania Tourist Board)',
    trustTanapa: 'Offizieller TANAPA Partner',
    trustZatoga: 'ZATOGA-Zertifizierte Sansibar Guides',

    // Promo Banner
    promoSmarterTitle: 'Erleben Sie die Große Tierwanderung & die Big Five',
    promoSmarterSubtitle: 'Flussüberquerung am Mara River und Kalbungszeit in Ndutu.',
    promoUpgradeTitle: 'Nicht nur eine Reise. Eine echte afrikanische Expedition.',
    promoUpgradeDesc: 'Übernachten Sie in authentischen Luxus-Zeltcamps und lernen Sie die Völker der Hadzabe und Massai kennen.',
    promoEscapesBadge: 'Saison-Safaris ab $1.290',
    promoClaimBtn: 'Safari-Angebote entdecken',

    // Interactive Map
    mapTitle: 'Interaktive Tansania-Karte & Safari-Explorer',
    mapSubtitle: 'Entdecken Sie Nationalparks, Bergtouren und die Trauminseln Sansibar & Pemba.',
    mapFilterAll: 'Alle Regionen',
    mapFilterRussianOnly: 'Safaris mit mehrsprachigem Guide',
    mapClickToPreview: 'Klicken Sie auf einen Park für Details',
    mapSelectedDestination: 'Ausgewählter Nationalpark',
    mapViewFullItinerary: 'Komplette Reiseroute ansehen',
    mapRouteStopsCount: 'Pirschfahrten & Etappen',
    mapInteractiveGuideInfo: 'Zertifizierte Naturführer in Deutsch, Englisch und Russisch',

    // Northern & Island Highlights
    naFeatureBadge: 'Ikonische Tansania-Rundreisen',
    naFeatureTitle: 'Vom Dach Afrikas zu den Gewürzinseln',
    naFeatureSubtitle: 'Die Höhepunkte: Serengeti, Ngorongoro-Krater, Kilimandscharo und Sansibar-Strände.',
    naThousandIslands: 'Serengeti & Ngorongoro Big Five Safari',
    naKentuckyHorses: 'Kilimandscharo-Besteigung (Machame & Lemosho Routen)',
    naVancouver: 'Sansibar Gewürztour & Nungwi Strandresorts',
    naParks: 'Kulturelle Begegnung mit den Hadzabe-Jägern am Eyasi-See',
    naExploreCollection: 'Alle Tansania-Safaris ansehen',

    // Pillars / Why TourWeb
    whyTitle: 'Warum TourWeb Tansania',
    whySubtitle: 'Eigene 4x4-Fahrzeuge, erstklassige Safari-Lodges und maximale Sicherheit.',
    usp1Title: 'Garantierter Fensterplatz im 4x4 Land Cruiser',
    usp1Desc: 'Spezialfahrzeuge mit Aufstelldach, Ladeanschlüssen und Kühlbox an Bord.',
    usp2Title: 'Handverlesene Luxus-Zeltcamps & Lodges',
    usp2Desc: 'Erstklassiger Komfort in der afrikanischen Wildnis mit warmem Wasser und Gourmetküche.',
    usp3Title: 'Erfahrene Natur- & Spurenleser-Guides',
    usp3Desc: 'Jahrzehntelange Erfahrung im Aufspüren von Leoparden, Nashörnern und Löwenrudeln.',
    usp4Title: 'Höchste Sicherheitsstandards am Kilimandscharo',
    usp4Desc: 'Tägliche Pulsoximeter-Checks, Notfallsauerstoff und KPAP-Mitgliedschaft für faire Trägerbedingungen.',
    usp5Title: 'Echte kulturelle Begegnungen',
    usp5Desc: 'Traditionelle Pirsch mit Hadzabe-Buschmännern und authentischer Austausch mit Massai-Ältesten.',
    usp6Title: 'Direkte Flugverbindungen Busch zu Strand',
    usp6Desc: 'Schnelle Buschflüge von den Serengeti-Airstrips direkt nach Sansibar ohne lange Fahrten.',

    // Travel Styles Section
    stylesTitle: 'Wählen Sie Ihren Reisestil',
    stylesSubtitle: 'Maßgeschneiderte Abenteuer für jedes Komfortbedürfnis.',
    styleSmallGroup: 'Luxus-Zeltcamp Safari',
    styleSmallGroupDesc: 'Exklusive Camps mitten auf der Route der Tiermigration.',
    styleClassic: 'Private 4x4 Jeep-Safari',
    styleClassicDesc: 'Eigenes Safarifahrzeug und privater Guide für maximale Flexibilität.',
    styleEscapes: 'Kilimandscharo-Trekking',
    styleEscapesDesc: 'Routen mit hoher Erfolgsquote (Lemosho 8 Tage, Machame 7 Tage) und Top-Bergführern.',
    styleIndependent: 'Sansibar Strandurlaub & Kultur',
    styleIndependentDesc: 'Kristallklares Wasser, Mnemba-Riff, historische Stone Town und Dhow-Segeln.',
    styleCruises: 'Flugsafari (Fly-In)',
    styleCruisesDesc: 'Flüge im Kleinflugzeug zwischen den Parks für optimale Zeitausnutzung.',

    // Tour Catalog & Filters
    catalogTitle: 'Tansania Safari- & Expeditionskatalog',
    catalogSubtitle: 'Garantierte Abreisen und alle Nationalparkgebühren bereits enthalten.',
    filterRegion: 'Region / Zirkel',
    filterStyle: 'Reiseart',
    filterDuration: 'Dauer (Tage)',
    filterPrice: 'Max. Preis (USD)',
    filterSort: 'Sortieren nach',
    filterSortPopular: 'Beliebteste zuerst',
    filterSortPriceLow: 'Preis: aufsteigend',
    filterSortPriceHigh: 'Preis: absteigend',
    filterSortDuration: 'Längste Reisedauer',
    filterRussianOnlyCheckbox: 'Mit Guide in Wunschsprache',
    filterReset: 'Filter zurücksetzen',
    toursFound: 'Safaris gefunden',
    noToursFound: 'Keine Safaris entsprechen Ihren Kriterien.',
    viewItinerary: 'Reiseroute & Karte',
    bookNow: 'Buchen / Angebot anfordern',
    fromPrice: 'ab',
    perPerson: 'pro Person',
    daysNights: 'Tage / Nächte',
    viewDetails: 'Safari-Details',
    quickInquiry: 'Schnellanfrage über WhatsApp',

    // Tour Details Modal
    modalOverview: 'Safari-Übersicht',
    modalHighlights: 'Highlights & Tierwelt',
    modalInclusions: 'Im Preis enthalten',
    modalDailyItinerary: 'Tagesprogramm',
    modalChoiceExcursions: 'Optionale Ausflüge',
    modalDatesPricing: 'Termine & Preise',
    modalRussianGuideHeading: 'Mehrsprachige Reiseleitung',
    modalRussianGuideText: 'Diese Safari beinhaltet einen zertifizierten Guide in der ausgewählten Sprache.',
    modalDay: 'Tag',
    modalSeatsRemaining: 'Plätze frei',
    modalSelectDate: 'Termin auswählen',
    modalRequestQuote: 'Angebot anfordern',
    modalDownloadBrochure: 'PDF-Broschüre herunterladen',
    modalClose: 'Schließen',

    // Booking & Inquiry Modal
    inquiryTitle: 'Safari-Buchung & Beratung',
    inquirySubtitle: 'Sichern Sie sich Ihren Wunschtermin oder fordern Sie ein individuelles Angebot an.',
    inquiryName: 'Vollständiger Name',
    inquiryEmail: 'E-Mail-Adresse',
    inquiryPhone: 'Telefon / WhatsApp / Telegram',
    inquiryDepartureDate: 'Gewünschter Reisetermin',
    inquiryTravelersCount: 'Anzahl Reisende',
    inquiryCurrency: 'Währung (USD, EUR, RUB, TSH)',
    inquiryRussianAssistance: 'Mehrsprachige Betreuung & Visahilfe gewünscht',
    inquirySpecialRequests: 'Besondere Wünsche (z. B. Fotografie, Flitterwochen, Heißluftballon)',
    inquirySubmitBtn: 'Safari-Anfrage absenden',
    inquirySuccessTitle: 'Anfrage erfolgreich erhalten!',
    inquirySuccessMsg: 'Asante sana! Unser Team in Arusha meldet sich innerhalb von 2 Stunden mit Ihrem Angebot.',

    // Brochure Modal
    brochureTitle: 'Tansania Safari-Katalog 2026/2027',
    brochureSubtitle: 'Umfassender Reiseführer mit Migrationskalender und Kilimandscharo-Routen.',
    brochureDownloadPdf: 'PDF herunterladen',
    brochureEmailBrochure: 'Per E-Mail erhalten',

    // Testimonials & Awards
    awardsTitle: 'Auszeichnungen & Gästefeedback',
    awardsSubtitle: 'Ausgezeichnete Safari-Qualität und zufriedene Gäste seit 18 Jahren.',
    award1: 'TripAdvisor Travelers’ Choice 2025',
    award2: 'TATO Excellence Award für nachhaltigen Tourismus',
    award3: 'Offizieller KPAP Partner für den Kilimandscharo',
    award4: 'World Travel Awards: Führender Safari-Veranstalter Tansania',
    testimonialsTitle: 'Echte Reiseberichte',

    // AI Concierge
    aiAdvisorTitle: 'TourWeb Tansania KI-Safari-Berater',
    aiAdvisorSubtitle: 'Fragen Sie nach Tierwanderungen, Kilimandscharo-Ausrüstung oder Sansibar-Stränden.',
    aiAskPlaceholder: 'Stellen Sie Ihre Frage (z. B. "Wann ist die beste Zeit für die Gnu-Wanderung in der Serengeti?")...',
    aiAskBtn: 'KI befragen',

    // Footer
    footerBigTrips: 'ENTDECKEN SIE TANSANIA MIT VOLLER SICHERHEIT',
    footerBigTripsSub: 'Serengeti • Ngorongoro • Kilimandscharo • Sansibar • Tarangire • Ruaha',
    footerSearchHeadline: 'Bereit für die Big Five und das Dach Afrikas?',
    footerHaveQuestion: 'FRAGEN SIE EINEN SPEZIALISTEN',
    footerPhone: '+255 784 123 456 (Arusha / WhatsApp)',
    footerRussianPhone: '+7 (495) 987-65-43 (Berlin / Moskau)',
    footerRussianEmail: 'tanzania@tourweb.travel',
    footerAlsoInterest: 'Beliebte Safari-Routen',
    footerInterestLinks: 'Klassische Big Five Safari 7 Tage • Kilimandscharo Lemosho-Route 8 Tage • Safari & Sansibar Strandkombi 10 Tage • Tarangire & Ngorongoro 5 Tage • Ndutu Kalbungszeit-Special',
    footerCompany: 'TourWeb Tansania Expeditionen',
    footerBrand1: 'Nördlicher Safari-Zirkel',
    footerBrand2: 'Kilimandscharo Gipfel-Expeditionen',
    footerBrand3: 'Sansibar Traumstrände & Gewürze',
    footerBrand4: 'Südliche Wildnis & Mahale Schimpansen',
    footerLegal: 'TATO-Zertifiziert • TTB-Lizenz #TZ-88492 • KPAP-Mitglied • Reiseveranstalter-Haftpflicht',
    footerCopyright: 'Copyright © TourWeb Tansania. Alle Rechte vorbehalten.',
  },
};
