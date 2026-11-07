import React from 'react';
import { X, Heart, Trash2, ArrowRight, Compass } from 'lucide-react';
import { Tour, Language, Currency } from '../types';
import { TRANSLATIONS, formatPrice } from '../data/translations';

interface WishlistDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  wishlistIds: string[];
  tours: Tour[];
  currentLang: Language;
  currentCurrency: Currency;
  onRemoveFromWishlist: (tourId: string) => void;
  onSelectTour: (tour: Tour) => void;
  onBookTour: (tour: Tour) => void;
}

export const WishlistDrawer: React.FC<WishlistDrawerProps> = ({
  isOpen,
  onClose,
  wishlistIds,
  tours,
  currentLang,
  currentCurrency,
  onRemoveFromWishlist,
  onSelectTour,
  onBookTour,
}) => {
  if (!isOpen) return null;

  const t = TRANSLATIONS[currentLang] || TRANSLATIONS.en;
  const wishlistedTours = tours.filter((tour) => wishlistIds.includes(tour.id));

  return (
    <div className="fixed inset-0 z-50 overflow-hidden bg-slate-950/60 backdrop-blur-xs flex justify-end animate-in fade-in duration-200">
      <div className="bg-white text-slate-900 w-full max-w-md h-full shadow-2xl flex flex-col justify-between border-l border-slate-200 animate-in slide-in-from-right duration-300">
        {/* Header */}
        <div className="p-5 border-b border-slate-200 flex items-center justify-between bg-slate-50">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-xl bg-rose-50 text-rose-600 flex items-center justify-center border border-rose-200">
              <Heart className="w-4 h-4 fill-current" />
            </div>
            <div>
              <h3 className="font-serif font-bold text-base text-[#1E3A8A]">
                {t.wishlistTitle}
              </h3>
              <span className="text-xs text-slate-500">
                {wishlistedTours.length} {currentLang === 'ru' ? 'сохраненных туров' : 'saved journeys'}
              </span>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-full hover:bg-slate-200 text-slate-500 hover:text-slate-800 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* List of saved tours */}
        <div className="flex-1 overflow-y-auto p-5 space-y-4">
          {wishlistedTours.length === 0 ? (
            <div className="text-center py-16 space-y-3">
              <Compass className="w-12 h-12 text-slate-300 mx-auto" />
              <p className="text-sm font-medium text-slate-600">
                {t.wishlistEmpty}
              </p>
              <button
                onClick={onClose}
                className="px-4 py-2 bg-[#1E3A8A] text-white text-xs font-bold rounded-xl shadow-xs hover:bg-[#1e40af] transition-colors"
              >
                {t.navExploreTours}
              </button>
            </div>
          ) : (
            wishlistedTours.map((tour) => (
              <div
                key={tour.id}
                className="bg-white border border-slate-200 rounded-2xl p-3.5 shadow-xs hover:shadow-md transition-all space-y-3"
              >
                <div className="flex gap-3">
                  <img
                    src={tour.coverImage}
                    alt={tour.title}
                    className="w-20 h-20 rounded-xl object-cover shrink-0"
                  />
                  <div className="flex-1 min-w-0">
                    <span className="text-[10px] text-[#2563EB] font-bold uppercase block">
                      {tour.travelStyle} • {tour.durationDays}D
                    </span>
                    <h4 
                      onClick={() => {
                        onClose();
                        onSelectTour(tour);
                      }}
                      className="font-serif font-bold text-sm text-slate-900 hover:text-[#1E3A8A] cursor-pointer line-clamp-1"
                    >
                      {currentLang === 'ru' ? tour.ruTitle : tour.title}
                    </h4>
                    <div className="text-xs text-slate-500 truncate">
                      {currentLang === 'ru' ? tour.ruDestination : tour.destination}
                    </div>
                    <div className="font-serif font-bold text-sm text-[#1E3A8A] mt-1">
                      {formatPrice(tour.priceUSD, currentCurrency)}
                    </div>
                  </div>
                </div>

                <div className="flex items-center justify-between pt-2 border-t border-slate-100">
                  <button
                    onClick={() => onRemoveFromWishlist(tour.id)}
                    className="text-slate-400 hover:text-rose-600 text-xs flex items-center gap-1 transition-colors"
                  >
                    <Trash2 className="w-3.5 h-3.5" />
                    <span>{currentLang === 'ru' ? 'Удалить' : 'Remove'}</span>
                  </button>

                  <div className="flex gap-2">
                    <button
                      onClick={() => {
                        onClose();
                        onSelectTour(tour);
                      }}
                      className="px-3 py-1.5 bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs font-bold rounded-lg transition-colors"
                    >
                      {t.viewItinerary}
                    </button>
                    <button
                      onClick={() => {
                        onClose();
                        onBookTour(tour);
                      }}
                      className="px-3 py-1.5 bg-amber-500 hover:bg-amber-400 text-slate-950 text-xs font-bold rounded-lg shadow-xs transition-colors"
                    >
                      {t.quickInquiry}
                    </button>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Footer */}
        {wishlistedTours.length > 0 && (
          <div className="p-4 border-t border-slate-200 bg-slate-50">
            <button
              onClick={onClose}
              className="w-full py-3 bg-[#1E3A8A] hover:bg-[#1e40af] text-white font-bold text-xs rounded-xl shadow-xs transition-colors"
            >
              {currentLang === 'ru' ? 'Продолжить выбор туров' : 'Continue Exploring'}
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
