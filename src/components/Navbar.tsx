import React, { useState } from 'react';
import { Search, Menu, X, ArrowRight } from 'lucide-react';
import { BrandLogo } from './BrandLogo';

interface NavbarProps {
  onSearchClick: () => void;
  onOpenBooking: () => void;
  onOpenInquiry: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  onSearchClick,
  onOpenBooking,
  onOpenInquiry,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchValue, setSearchValue] = useState('');

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSearchClick();
  };

  return (
    <header className="sticky top-0 z-50 bg-[#14231A] text-white border-b border-[#1F3A2B] shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20 gap-4">
          
          {/* Site Logo */}
          <div className="shrink-0 flex items-center">
            <BrandLogo
              size="md"
              variant="tanzanite"
              className="cursor-pointer"
            />
          </div>

          {/* Search Bar */}
          <form 
            onSubmit={handleSearchSubmit} 
            className="hidden md:flex flex-1 max-w-md mx-6"
          >
            <div className="relative w-full">
              <input
                type="text"
                value={searchValue}
                onChange={(e) => setSearchValue(e.target.value)}
                placeholder="Search Serengeti, Kilimanjaro, lodges..."
                className="w-full bg-white/10 text-white placeholder-slate-300 text-sm rounded-full pl-10 pr-4 py-2.5 border border-white/15 focus:outline-none focus:ring-2 focus:ring-amber-400 focus:bg-white/15 transition-all"
              />
              <Search className="w-4 h-4 text-slate-300 absolute left-3.5 top-3.5 pointer-events-none" />
            </div>
          </form>

          {/* Header Action Buttons ("Book Now", "Inquire") & Menu Icon */}
          <div className="flex items-center gap-3">
            
            {/* Search Icon button on mobile */}
            <button
              onClick={onSearchClick}
              className="md:hidden p-2 text-slate-200 hover:text-white rounded-lg hover:bg-white/10"
              aria-label="Search"
            >
              <Search className="w-5 h-5" />
            </button>

            {/* Inquire Button */}
            <button
              id="header-inquire-btn"
              onClick={onOpenInquiry}
              className="px-4 py-2 text-xs sm:text-sm font-semibold rounded-full border border-white/25 text-white hover:bg-white/10 transition-colors cursor-pointer"
            >
              Inquire
            </button>

            {/* Book Now Button */}
            <button
              id="header-book-now-btn"
              onClick={onOpenBooking}
              className="px-4 sm:px-5 py-2 text-xs sm:text-sm font-bold rounded-full bg-amber-400 text-[#14231A] hover:bg-amber-300 transition-colors shadow-md flex items-center gap-1.5 cursor-pointer"
            >
              <span>Book Now</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>

            {/* Menu Icon */}
            <button
              id="header-menu-btn"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-slate-200 hover:text-white rounded-lg hover:bg-white/10 transition-colors cursor-pointer"
              aria-label="Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>

          </div>

        </div>
      </div>

      {/* Mobile drawer if menu clicked */}
      {mobileMenuOpen && (
        <div className="border-t border-[#1F3A2B] bg-[#14231A] px-4 py-4 space-y-3">
          <form onSubmit={handleSearchSubmit} className="md:hidden">
            <div className="relative w-full">
              <input
                type="text"
                value={searchValue}
                onChange={(e) => setSearchValue(e.target.value)}
                placeholder="Search..."
                className="w-full bg-white/10 text-white placeholder-slate-300 text-sm rounded-xl pl-10 pr-4 py-2.5 border border-white/15 focus:outline-none focus:ring-2 focus:ring-amber-400"
              />
              <Search className="w-4 h-4 text-slate-300 absolute left-3.5 top-3.5" />
            </div>
          </form>

          <div className="grid grid-cols-2 gap-3 pt-2">
            <button
              onClick={() => {
                onOpenInquiry();
                setMobileMenuOpen(false);
              }}
              className="w-full py-2.5 text-center text-sm font-semibold rounded-xl border border-white/20 text-white hover:bg-white/10"
            >
              Inquire
            </button>
            <button
              onClick={() => {
                onOpenBooking();
                setMobileMenuOpen(false);
              }}
              className="w-full py-2.5 text-center text-sm font-bold rounded-xl bg-amber-400 text-[#14231A] hover:bg-amber-300"
            >
              Book Now
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
