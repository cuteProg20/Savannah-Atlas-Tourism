import React from 'react';

interface BrandLogoProps {
  size?: 'sm' | 'md' | 'lg';
  variant?: 'light' | 'dark' | 'gold' | 'tanzanite';
  showSubtitle?: boolean;
  className?: string;
  onClick?: () => void;
}

export const BrandLogo: React.FC<BrandLogoProps> = ({
  size = 'md',
  variant = 'tanzanite',
  showSubtitle = true,
  className = '',
  onClick,
}) => {
  const iconSizeClasses = {
    sm: 'w-8 h-8',
    md: 'w-10 h-10 sm:w-11 sm:h-11',
    lg: 'w-14 h-14',
  };

  const titleSizeClasses = {
    sm: 'text-lg',
    md: 'text-xl sm:text-2xl',
    lg: 'text-3xl',
  };

  const subtitleSizeClasses = {
    sm: 'text-[9px]',
    md: 'text-[10px] sm:text-[11px]',
    lg: 'text-xs',
  };

  return (
    <div
      onClick={onClick}
      className={`inline-flex items-center gap-2.5 sm:gap-3 select-none group ${
        onClick ? 'cursor-pointer' : ''
      } ${className}`}
    >
      {/* Emblem: Stylized African Acacia & Kilimanjaro Crest */}
      <div
        className={`relative ${iconSizeClasses[size]} rounded-xl flex items-center justify-center p-1.5 transition-all duration-300 group-hover:scale-105 shadow-md ${
          variant === 'tanzanite'
            ? 'bg-gradient-to-br from-[#1E3A8A] via-[#1E40AF] to-[#0F172A] text-amber-400 border border-blue-400/30 shadow-blue-950/20'
            : variant === 'gold'
            ? 'bg-gradient-to-br from-amber-400 via-amber-500 to-amber-600 text-slate-950 border border-amber-300/50 shadow-amber-900/15'
            : variant === 'light'
            ? 'bg-white text-[#1E3A8A] border border-slate-200 shadow-slate-200'
            : 'bg-slate-900 text-amber-400 border border-slate-800 shadow-slate-950'
        }`}
      >
        {/* Vector Acacia / Safari Sun SVG */}
        <svg
          viewBox="0 0 100 100"
          className="w-full h-full fill-current stroke-current"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Radiant African Safari Sun */}
          <circle cx="50" cy="38" r="14" className={variant === 'tanzanite' ? 'fill-amber-400/20 stroke-none' : 'fill-stone-950/15 stroke-none'} />
          <path
            d="M50 16 L50 20 M50 56 L50 60 M28 38 L32 38 M68 38 L72 38 M34 22 L37 25 M63 51 L66 54 M34 54 L37 51 M63 25 L66 22"
            strokeWidth="3.5"
            strokeLinecap="round"
            className="fill-none stroke-current opacity-90"
          />
          
          {/* Acacia Tree Silhouette */}
          <path
            d="M48 84 L48 58 Q46 52 42 46 Q34 44 26 44 Q22 41 26 38 Q32 35 44 38 Q48 39 50 42 Q52 39 56 38 Q68 35 74 38 Q78 41 74 44 Q66 44 58 46 Q54 52 52 58 L52 84 Z"
            className={variant === 'tanzanite' ? 'fill-amber-400 stroke-none' : 'fill-slate-950 stroke-none'}
          />

          {/* Serengeti Horizon Ground Line */}
          <path
            d="M16 84 Q50 81 84 84"
            strokeWidth="4"
            strokeLinecap="round"
            className={variant === 'tanzanite' ? 'fill-none stroke-amber-400/80' : 'fill-none stroke-slate-950'}
          />

          {/* Distant Kilimanjaro Peak */}
          <path
            d="M62 82 L72 66 L82 82 Z"
            className={variant === 'tanzanite' ? 'fill-sky-300/40 stroke-none' : 'fill-slate-950/40 stroke-none'}
          />
        </svg>

        {/* Subtle Luxury Tanzanite Sparkle Indicator */}
        <span className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-amber-300 rounded-full border border-blue-900 animate-pulse" />
      </div>

      {/* Brand Name Typography */}
      <div className="flex flex-col justify-center text-left">
        <div className="flex items-center gap-1.5 leading-none">
          <span
            className={`font-serif font-black tracking-tight ${titleSizeClasses[size]} ${
              variant === 'light' || variant === 'tanzanite' ? 'text-[#1E3A8A]' : 'text-stone-100'
            }`}
          >
            Tour<span className="text-amber-500">Web</span>
          </span>
          <span className="bg-blue-50 border border-blue-200 text-[#1E3A8A] font-bold text-[9px] px-1.5 py-0.5 rounded tracking-widest uppercase font-mono">
            Tanzania
          </span>
        </div>

        {showSubtitle && (
          <div className="flex items-center gap-1.5 mt-0.5">
            <span
              className={`font-medium tracking-wider uppercase ${subtitleSizeClasses[size]} ${
                variant === 'light' || variant === 'tanzanite' ? 'text-slate-500' : 'text-stone-400'
              }`}
            >
              Wilderness & Safari Expeditions
            </span>
          </div>
        )}
      </div>
    </div>
  );
};
