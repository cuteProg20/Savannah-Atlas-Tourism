export type Language = 'en' | 'ru' | 'es' | 'fr' | 'de';

export type Currency = 'USD' | 'EUR' | 'RUB' | 'TSH' | 'GBP';

export type TanzaniaCircuit = 
  | 'Northern Circuit'
  | 'Kilimanjaro & Meru'
  | 'Zanzibar & Coast'
  | 'Southern & Western'
  | 'Cultural & Tribal';

export type Region = TanzaniaCircuit;

export type TravelStyle = 
  | 'Luxury Tented Safari' 
  | 'Private 4x4 Jeep Safari'
  | 'Private 4x4 Jeep' 
  | 'Kilimanjaro Trekking' 
  | 'Zanzibar Beach & Spice' 
  | 'Fly-In Safari Expedition'
  | 'Fly-In Safari' 
  | 'Cultural & Walking Safari'
  | 'Small Group Discovery';

export type AccommodationTier =
  | 'Luxury Safari Lodges'
  | 'Luxury Tented Camps'
  | 'Boutique Zanzibar Resorts'
  | 'Budget & Mid-Range Eco-Lodges';

export type MealPlan = 
  | 'Full Board'
  | 'All-Inclusive'
  | 'Half Board'
  | 'Bed & Breakfast';

export type LodgeAmenity = 
  | 'WiFi'
  | 'Plunge Pool'
  | 'Swimming Pool'
  | 'Air Conditioning'
  | 'Solar Power'
  | 'En-Suite Bathroom'
  | 'Bush Dining'
  | 'Spa & Wellness'
  | 'Scenic Wildlife View'
  | 'Laundry Service'
  | 'Bar & Lounge'
  | '24/7 Security'
  | 'Private Butler'
  | 'Airport Transfers';

export interface RoomType {
  id: string;
  name: string;
  ruName: string;
  sizeM2: number;
  bedConfig: string;
  ruBedConfig: string;
  description: string;
  ruDescription: string;
  image: string;
  pricePerNightUSD: number;
  maxGuests: number;
}

export interface Accommodation {
  id: string;
  name: string;
  ruName: string;
  tier: AccommodationTier;
  circuit: TanzaniaCircuit;
  location: string;
  ruLocation: string;
  coverImage: string;
  galleryImages: string[];
  description: string;
  ruDescription: string;
  mealPlan: MealPlan;
  ruMealPlan: string;
  roomTypes: RoomType[];
  amenities: LodgeAmenity[];
  rating: number;
  reviewCount: number;
  pricePerNightFromUSD: number;
  upgradePricePerNightUSD: number;
  badge?: string;
  ruBadge?: string;
  highlights: string[];
  ruHighlights: string[];
  coordinates: { lat: number; lng: number };
  isRussianStaffAvailable?: boolean;
  featured?: boolean;
}

export interface RouteStop {
  name: string;
  ruName: string;
  lat: number;
  lng: number;
  day: number;
  desc: string;
  ruDesc: string;
  activities: string[];
  ruActivities: string[];
  wildlife?: string[];
  accommodationName?: string;
  ruAccommodationName?: string;
}

export interface DepartureDate {
  id: string;
  date: string;
  priceUSD: number;
  seatsLeft: number;
  guideLanguage: 'EN' | 'RU' | 'ES' | 'Bilingual';
  season?: 'Peak Migration' | 'Calving Season' | 'Dry Season' | 'Green Season';
}

export interface ChoiceExcursion {
  id: string;
  title: string;
  ruTitle: string;
  type: 'Wildlife' | 'Culture' | 'Adventure' | 'Relaxation' | 'Food';
  included: boolean;
  priceUSD?: number;
  description: string;
  ruDescription: string;
}

export interface Tour {
  id: string;
  title: string;
  ruTitle: string;
  subtitle: string;
  ruSubtitle: string;
  destination: string;
  ruDestination: string;
  circuit: TanzaniaCircuit;
  region: TanzaniaCircuit; // Alias for compatibility
  country: string;
  ruCountry: string;
  travelStyle: TravelStyle;
  durationDays: number;
  durationNights: number;
  priceUSD: number;
  originalPriceUSD?: number;
  discountBadge?: string;
  ruDiscountBadge?: string;
  rating: number;
  reviewCount: number;
  isRussianGuideAvailable: boolean;
  russianGuideDetails?: {
    tourDirector: boolean;
    localCityGuides: boolean;
    headsetsAudio: boolean;
    certified4x4DriverGuide: boolean;
  };
  coverImage: string;
  galleryImages: string[];
  overview: string;
  ruOverview: string;
  highlights: string[];
  ruHighlights: string[];
  wildlifeFeatured: string[];
  included: string[];
  ruIncluded: string[];
  route: RouteStop[];
  departureDates: DepartureDate[];
  choiceExcursions: ChoiceExcursion[];
  featured?: boolean;
  badge?: string;
  ruBadge?: string;
  altitudeMeters?: number;
  defaultAccommodationTier?: AccommodationTier;
  featuredAccommodations?: string[]; // IDs of accommodation
}

export interface TravelStyleInfo {
  id: TravelStyle;
  title: string;
  ruTitle: string;
  tag: string;
  ruTag: string;
  priceFromUSD: number;
  iconName: string;
  desc: string;
  ruDesc: string;
  image: string;
  features: string[];
  ruFeatures: string[];
}

export interface Review {
  id: string;
  author: string;
  ruAuthor: string;
  city: string;
  country: string;
  rating: number;
  tourId: string;
  tourTitle: string;
  ruTourTitle: string;
  date: string;
  comment: string;
  ruComment: string;
  avatar: string;
  isRussianSpeaker?: boolean;
  verifiedTripType?: string;
}

export interface FilterState {
  searchQuery: string;
  region: string;
  circuit?: string;
  travelStyle: string;
  accommodationTier?: string;
  durationRange: [number, number];
  priceRange: [number, number];
  russianGuideOnly: boolean;
  month: string;
  sortBy: 'recommended' | 'price-asc' | 'price-desc' | 'duration-asc' | 'duration-desc' | 'rating';
}
