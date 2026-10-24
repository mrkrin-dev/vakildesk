import React from 'react';
import { Logo } from './Logo';
import { DETAILS } from '../constants';
import { motion } from 'motion/react';
import { useLanguage } from '../context/LanguageContext';

export const TopBar: React.FC = () => {
  const { language, setLanguage, t } = useLanguage();

  return (
    <header className="sticky top-0 z-40 w-full bg-[#18181B]/95 backdrop-blur-md border-b border-[#27272A] transition-colors">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 sm:h-20 flex items-center justify-between gap-3">
        <Logo isLight={true} size="md" />

        <nav className="hidden lg:flex items-center gap-7 text-sm font-medium text-stone-300">
          <a
            href="#what-changes"
            className="hover:text-white transition-colors duration-200"
          >
            {t.topBar.whatChanges}
          </a>
          <a
            href="#sample-builds"
            className="hover:text-white transition-colors duration-200"
          >
            {t.topBar.sampleBuilds}
          </a>
          <a
            href="#calculator"
            className="hover:text-white transition-colors duration-200"
          >
            {t.topBar.calculator}
          </a>
          <a
            href="#how-it-works"
            className="hover:text-white transition-colors duration-200"
          >
            {t.topBar.howItWorks}
          </a>
          <a
            href="#questions"
            className="hover:text-white transition-colors duration-200"
          >
            {t.topBar.questions}
          </a>
        </nav>

        <div className="flex items-center gap-2 sm:gap-3.5 shrink-0">
          {/* Language Switcher in TopBar: English & Telugu */}
          <div
            role="group"
            aria-label="Language switcher"
            className="inline-flex items-center p-0.5 rounded-full bg-[#111113] border border-[#27272A] shadow-inner"
          >
            <button
              type="button"
              onClick={() => setLanguage('en')}
              className={`px-2.5 sm:px-3 py-1 rounded-full text-xs font-semibold transition-all duration-200 ${
                language === 'en'
                  ? 'bg-[#FFB020] text-[#18181B] shadow-sm font-bold'
                  : 'text-stone-400 hover:text-white'
              }`}
              aria-pressed={language === 'en'}
              title="Switch to English"
            >
              EN
            </button>
            <button
              type="button"
              onClick={() => setLanguage('te')}
              className={`px-2.5 sm:px-3 py-1 rounded-full text-xs font-semibold transition-all duration-200 ${
                language === 'te'
                  ? 'bg-[#FFB020] text-[#18181B] shadow-sm font-bold'
                  : 'text-stone-400 hover:text-white'
              }`}
              aria-pressed={language === 'te'}
              title="తెలుగు భాషలోకి మారండి"
            >
              తెలుగు
            </button>
          </div>

          {/* Top Bar Call CTA */}
          <motion.a
            href={DETAILS.bookingLink}
            data-cal-link={DETAILS.calSlug}
            data-cal-namespace="20-minute-intro-call"
            data-cal-config='{"layout":"month_view"}'
            target="_blank"
            rel="noopener noreferrer"
            role="button"
            aria-label="Book a free audit call"
            whileHover={{ scale: 1.03, y: -1 }}
            whileTap={{ scale: 0.97 }}
            className="inline-flex items-center justify-center px-3 sm:px-5 py-1.5 sm:py-2.5 rounded-full text-xs sm:text-sm font-semibold tracking-wide bg-[#FFB020] text-[#18181B] shadow-sm hover:shadow-md transition-shadow shrink-0"
          >
            {t.topBar.freeAuditCall}
          </motion.a>
        </div>
      </div>
    </header>
  );
};
