import React from 'react';

interface LogoProps {
  className?: string;
  isLight?: boolean;
  size?: 'sm' | 'md' | 'lg' | 'xl';
}

export const Logo: React.FC<LogoProps> = ({ className = '', isLight = false, size = 'md' }) => {
  const iconSizes = {
    sm: 'w-7 h-7',
    md: 'w-9 h-9',
    lg: 'w-12 h-12',
    xl: 'w-24 h-24'
  };

  const textSizes = {
    sm: 'text-lg',
    md: 'text-xl',
    lg: 'text-2xl',
    xl: 'text-4xl'
  };

  return (
    <a href="#" className={`inline-flex items-center gap-2.5 group select-none ${className}`}>
      <div className={`${iconSizes[size]} shrink-0 transition-transform duration-300 group-hover:scale-105`}>
        <svg
          viewBox="0 0 40 40"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full"
        >
          {/* Rounded base tile */}
          <rect width="40" height="40" rx="10" fill="#18181B" />
          
          {/* Subtle inner border */}
          <rect x="0.5" y="0.5" width="39" height="39" rx="9.5" stroke="#3F3F46" strokeWidth="1" />
          
          {/* Modern Vakil V monogram + scales symbol in saffron */}
          <path
            d="M10 11H15.2L20 22.8L24.8 11H30L22.4 29H17.6L10 11Z"
            fill="#FFB020"
          />
          <circle cx="20" cy="14" r="2.2" fill="#FFB020" />
          <path
            d="M14 17H26"
            stroke="#18181B"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
        </svg>
      </div>

      <span
        className={`font-heading font-bold tracking-tight transition-colors duration-200 ${textSizes[size]} ${
          isLight ? 'text-white' : 'text-[#18181B]'
        }`}
      >
        VakilDesk
      </span>
    </a>
  );
};

export const LogoMarkOnly: React.FC<{ className?: string }> = ({ className = 'w-16 h-16' }) => (
  <svg
    viewBox="0 0 40 40"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <rect width="40" height="40" rx="10" fill="#18181B" />
    <path
      d="M10 11H15.2L20 22.8L24.8 11H30L22.4 29H17.6L10 11Z"
      fill="#FFB020"
    />
    <circle cx="20" cy="14" r="2.2" fill="#FFB020" />
    <path
      d="M14 17H26"
      stroke="#18181B"
      strokeWidth="1.5"
      strokeLinecap="round"
    />
  </svg>
);
