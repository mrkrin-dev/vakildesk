import React from 'react';
import { DETAILS } from '../constants';
import { useLanguage } from '../context/LanguageContext';

export const StickyBottomBar: React.FC = () => {
  const { t } = useLanguage();

  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 z-50 p-3 bg-[#111113]/95 backdrop-blur-md border-t border-[#27272A] shadow-2xl safe-area-bottom">
      <a
        href={DETAILS.bookingLink}
        data-cal-link={DETAILS.calSlug}
        data-cal-namespace="20-minute-intro-call"
        data-cal-config='{"layout":"month_view"}'
        target="_blank"
        rel="noopener noreferrer"
        role="button"
        aria-label="Book a free audit call"
        className="w-full flex items-center justify-center py-3.5 px-6 rounded-full text-base font-bold tracking-tight bg-[#FFB020] text-[#18181B] shadow-md active:scale-98 transition-transform"
      >
        {t.stickyBar.button}
      </a>
    </div>
  );
};
