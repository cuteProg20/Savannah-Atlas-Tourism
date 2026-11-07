import React, { useMemo } from 'react';
import { 
  Filter, 
  Search, 
  Sparkles, 
  Compass, 
  Calendar, 
  RotateCcw, 
  SlidersHorizontal,
  Languages,
  ArrowUpDown,
  Mountain
} from 'lucide-react';
import { Tour, Language, Currency, FilterState, TanzaniaCircuit, TravelStyle } from '../types';
import { TRANSLATIONS } from '../data/translations';
import { TourCard } from './TourCard';

interface TourCatalogProps {
  tours: Tour[];
  currentLang: Language;
  currentCurrency: Currency;
  filters?: FilterState;
  onFilterChange: (newFilters: Partial<FilterState>) => void;
  onResetFilters: () => void;
  wishlist: string[];
  onToggleWishlist: (tourId: string) => void;
  onSelectTour: (tour: Tour) => void;
  onQuickBook: (tour: Tour) => void;
}

const DEFAULT_FILTERS: FilterState = {
  searchQuery: '',
  circuit: 'All',
  region: 'All',
  travelStyle: 'All',
  month: 'All Months',
  priceRange: [0, 8000],
  durationRange: [1, 30],
  russianGuideOnly: false,
  sortBy: 'recommended',
};

export const TourCatalog: React.FC<TourCatalogProps> = ({
  tours = [],
  currentLang,
  currentCurrency,
  filters = DEFAULT_FILTERS,
  onFilterChange,
  onResetFilters,
  wishlist = [],
  onToggleWishlist,
  onSelectTour,
  onQuickBook,
}) => {
  const activeFilters = filters || DEFAULT_FILTERS;
  const t = TRANSLATIONS[currentLang] || TRANSLATIONS.en;

  const filteredAndSortedTours = useMemo(() => {
    let result = (tours || []).filter((tour) => {
      // Search query filter
      if (activeFilters.searchQuery) {
        const q = activeFilters.searchQuery.toLowerCase();
        const matchesTitle = tour.title.toLowerCase().includes(q) || tour.ruTitle.toLowerCase().includes(q);
        const matchesDest = tour.destination.toLowerCase().includes(q) || tour.ruDestination.toLowerCase().includes(q);
        const matchesCircuit = tour.circuit?.toLowerCase().includes(q) || tour.region.toLowerCase().includes(q);
        const matchesOverview = tour.overview.toLowerCase().includes(q) || tour.ruOverview.toLowerCase().includes(q);
        if (!matchesTitle && !matchesDest && !matchesCircuit && !matchesOverview) return false;
      }

      // Circuit filter
      const activeCircuit = activeFilters.circuit || activeFilters.region;
      if (activeCircuit && activeCircuit !== 'All') {
        if (tour.circuit !== activeCircuit && tour.region !== activeCircuit) return false;
      }

      // Travel style filter
      if (activeFilters.travelStyle && activeFilters.travelStyle !== 'All') {
        if (tour.travelStyle !== activeFilters.travelStyle) return false;
      }

      // Russian guide only filter
      if (activeFilters.russianGuideOnly && !tour.isRussianGuideAvailable) {
        return false;
      }

      // Price filter
      if (activeFilters.priceRange && tour.priceUSD > activeFilters.priceRange[1]) {
        return false;
      }

      return true;
    });

    // Sorting
    switch (activeFilters.sortBy) {
      case 'price-asc':
        result.sort((a, b) => a.priceUSD - b.priceUSD);
        break;
      case 'price-desc':
        result.sort((a, b) => b.priceUSD - a.priceUSD);
        break;
      case 'duration-desc':
        result.sort((a, b) => b.durationDays - a.durationDays);
        break;
      case 'duration-asc':
        result.sort((a, b) => a.durationDays - b.durationDays);
        break;
      case 'rating':
        result.sort((a, b) => b.rating - a.rating);
        break;
      default:
        // recommended (featured first, then rating)
        result.sort((a, b) => (b.featured ? 1 : 0) - (a.featured ? 1 : 0));
    }

    return result;
  }, [tours, activeFilters]);

  const circuitTabs = [
    { id: 'All', label: 'All Circuits', ruLabel: 'Все маршруты' },
    { id: 'Northern Circuit', label: 'Northern Circuit', ruLabel: 'Северное сафари' },
    { id: 'Kilimanjaro & Meru', label: 'Kilimanjaro', ruLabel: 'Килиманджаро' },
    { id: 'Zanzibar & Coast', label: 'Zanzibar & Coast', ruLabel: 'Занзибар' },
    { id: 'Southern & Western', label: 'Wild South', ruLabel: 'Дикий Юг' },
    { id: 'Cultural & Tribal', label: 'Tribes & Culture', ruLabel: 'Племена и культура' },
  ];

  return (
    <section id="explore-tours" className="py-20 bg-[#FAFAF9] text-slate-900 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
          <div>
            <div className="inline-flex items-center gap-2 bg-blue-50 border border-blue-200 text-[#1E3A8A] text-xs font-bold uppercase tracking-wider px-3.5 py-1.5 rounded-full mb-2">
              <Compass className="w-4 h-4 text-[#2563EB]" />
              <span>{t.navExploreTours}</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-black text-[#1E3A8A] tracking-tight">
              {t.catalogTitle}
            </h2>
            <p className="text-sm sm:text-base text-slate-600 font-normal mt-1">
              {t.catalogSubtitle}
            </p>
          </div>

          {/* Circuit Tabs Header Filter */}
          <div className="flex flex-wrap gap-1.5 bg-white border border-slate-200 p-1.5 rounded-2xl shadow-xs">
            {circuitTabs.map((tab) => {
              const currentVal = activeFilters.circuit || activeFilters.region || 'All';
              const isSelected = currentVal === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => onFilterChange({ circuit: tab.id as TanzaniaCircuit, region: tab.id })}
                  className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
                    isSelected
                      ? 'bg-[#1E3A8A] text-white shadow-xs font-bold'
                      : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
                  }`}
                >
                  {currentLang === 'ru' ? tab.ruLabel : tab.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* Secondary Filter & Control Bar */}
        <div className="bg-white rounded-2xl border border-slate-200 p-4 mb-8 shadow-xs space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 items-center">
            {/* Search filter input */}
            <div className="relative">
              <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={activeFilters.searchQuery}
                onChange={(e) => onFilterChange({ searchQuery: e.target.value })}
                placeholder={currentLang === 'ru' ? 'Поиск: Серенгети, Килиманджаро, львы...' : 'Search: Serengeti, Kili, Big Five...'}
                className="w-full pl-10 pr-4 py-2 bg-slate-50 border border-slate-200 rounded-xl text-xs sm:text-sm text-slate-900 placeholder:text-slate-400 focus:outline-hidden focus:ring-2 focus:ring-[#1E3A8A] transition-all"
              />
            </div>

            {/* Travel style selector */}
            <div>
              <select
                value={activeFilters.travelStyle}
                onChange={(e) => onFilterChange({ travelStyle: e.target.value })}
                className="w-full py-2 px-3 bg-slate-50 border border-slate-200 rounded-xl text-xs sm:text-sm font-medium text-slate-900 focus:outline-hidden focus:ring-2 focus:ring-[#1E3A8A] transition-all"
              >
                <option value="All">{currentLang === 'ru' ? 'Все стили экспедиций' : 'All Expedition Styles'}</option>
                <option value="Private 4x4 Jeep">Private 4x4 Land Cruiser</option>
                <option value="Luxury Tented Safari">Luxury Tented Safari</option>
                <option value="Kilimanjaro Trekking">Kilimanjaro Trekking</option>
                <option value="Fly-In Safari">Fly-In Safari</option>
                <option value="Zanzibar Beach & Spice">Zanzibar Beach & Spice</option>
                <option value="Cultural & Walking">Cultural & Walking Safari</option>
              </select>
            </div>

            {/* Sort selector */}
            <div className="flex items-center gap-2">
              <ArrowUpDown className="w-4 h-4 text-[#2563EB] shrink-0" />
              <select
                value={activeFilters.sortBy}
                onChange={(e) => onFilterChange({ sortBy: e.target.value as FilterState['sortBy'] })}
                className="w-full py-2 px-3 bg-slate-50 border border-slate-200 rounded-xl text-xs sm:text-sm font-medium text-slate-900 focus:outline-hidden focus:ring-2 focus:ring-[#1E3A8A] transition-all"
              >
                <option value="recommended">{t.filterSortPopular}</option>
                <option value="price-asc">{t.filterSortPriceLow}</option>
                <option value="price-desc">{t.filterSortPriceHigh}</option>
                <option value="duration-desc">{t.filterSortDuration}</option>
                <option value="rating">Highest Rated ★</option>
              </select>
            </div>

            {/* Russian guide toggle */}
            <label className="flex items-center gap-2 cursor-pointer bg-slate-50 hover:bg-slate-100 border border-slate-200 px-3 py-2 rounded-xl transition-colors select-none">
              <input
                type="checkbox"
                checked={activeFilters.russianGuideOnly}
                onChange={(e) => onFilterChange({ russianGuideOnly: e.target.checked })}
                className="w-4 h-4 text-[#1E3A8A] rounded border-slate-300 focus:ring-[#1E3A8A] accent-[#1E3A8A]"
              />
              <span className="text-xs font-bold text-slate-700 truncate">
                {currentLang === 'ru' ? 'Русскоязычный гид' : 'Russian Guide Guaranteed'}
              </span>
            </label>
          </div>

          {/* Results Counter & Reset Button */}
          <div className="flex items-center justify-between text-xs text-slate-500 pt-2 border-t border-slate-100">
            <span className="font-bold text-slate-800">
              {filteredAndSortedTours.length} {t.toursFound}
            </span>

            {(activeFilters.searchQuery || activeFilters.circuit !== 'All' || activeFilters.region !== 'All' || activeFilters.travelStyle !== 'All' || activeFilters.russianGuideOnly) && (
              <button
                onClick={onResetFilters}
                className="flex items-center gap-1 text-[#2563EB] hover:text-[#1E3A8A] font-bold transition-colors"
              >
                <RotateCcw className="w-3.5 h-3.5" />
                <span>{t.filterReset}</span>
              </button>
            )}
          </div>
        </div>

        {/* Tour Grid */}
        {filteredAndSortedTours.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredAndSortedTours.map((tour) => (
              <TourCard
                key={tour.id}
                tour={tour}
                currentLang={currentLang}
                currentCurrency={currentCurrency}
                isWishlisted={wishlist.includes(tour.id)}
                onToggleWishlist={onToggleWishlist}
                onSelectTour={onSelectTour}
                onQuickBook={onQuickBook}
              />
            ))}
          </div>
        ) : (
          <div className="text-center py-16 bg-white rounded-3xl border border-slate-200 p-8 space-y-4 shadow-xs">
            <Compass className="w-12 h-12 text-slate-400 mx-auto" />
            <h3 className="text-xl font-bold text-slate-800">
              {t.noToursFound}
            </h3>
            <button
              onClick={onResetFilters}
              className="px-6 py-2.5 bg-[#1E3A8A] hover:bg-[#1e40af] text-white font-bold text-xs rounded-xl shadow-xs transition-all"
            >
              {t.filterReset}
            </button>
          </div>
        )}
      </div>
    </section>
  );
};
