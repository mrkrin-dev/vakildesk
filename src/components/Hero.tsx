import React from 'react';
import { motion, useReducedMotion } from 'motion/react';
import { DETAILS } from '../constants';
import { RealMobilePhone } from './PhoneMockup';
import { useLanguage } from '../context/LanguageContext';

export const Hero: React.FC = () => {
  const { t, language } = useLanguage();
  const prefersReduced = useReducedMotion();
  const headlineWords = t.hero.headline.split(' ');

  return (
    <section className="relative overflow-hidden bg-[#18181B] text-white pt-12 pb-20 md:py-24">
      {/* Drifting soft glow of highlight color behind hero */}
      <motion.div
        animate={
          prefersReduced
            ? {}
            : {
                x: [0, 40, -30, 0],
                y: [0, -30, 20, 0],
                scale: [1, 1.1, 0.95, 1],
              }
        }
        transition={{
          duration: 16,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[420px] sm:w-[620px] h-[420px] sm:h-[620px] bg-[#FFB020]/15 rounded-full blur-[120px] pointer-events-none"
      />

      {/* Subtle depth lighting from top */}
      <div className="absolute inset-0 bg-radial-gradient from-transparent via-[#18181B]/80 to-[#111113] pointer-events-none" />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Copy & Actions */}
          <div className="lg:col-span-7 flex flex-col items-start">
            
            {/* Pill: For [Who I help] in [City] */}
            <motion.div
              key={`pill-${language}`}
              initial={prefersReduced ? false : { opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#27272A] border border-[#3F3F46] text-xs sm:text-sm font-medium text-stone-200 mb-6 shadow-sm"
            >
              <span className="w-2 h-2 rounded-full bg-[#FFB020]" />
              {t.hero.pill}
            </motion.div>

            {/* Big Headline that names the problem, said to the reader (rising in word by word) */}
            <h1
              key={`h1-${language}`}
              className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-[1.12] mb-6"
            >
              {headlineWords.map((word, index) => (
                <motion.span
                  key={index}
                  initial={prefersReduced ? false : { opacity: 0, y: 18 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.45,
                    delay: prefersReduced ? 0 : index * 0.05,
                    ease: [0.215, 0.61, 0.355, 1],
                  }}
                  className="inline-block mr-[0.28em]"
                >
                  {word}
                </motion.span>
              ))}
            </h1>

            {/* One plain sentence under it */}
            <motion.p
              key={`sub-${language}`}
              initial={prefersReduced ? false : { opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: prefersReduced ? 0 : 0.25 }}
              className="text-base sm:text-lg text-stone-300 leading-relaxed mb-8 max-w-xl"
            >
              {t.hero.subtext}
            </motion.p>

            {/* Call to Action Button */}
            <motion.div
              initial={prefersReduced ? false : { opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: prefersReduced ? 0 : 0.35 }}
              className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto"
            >
              <motion.a
                href={DETAILS.bookingLink}
                data-cal-link={DETAILS.calSlug}
                data-cal-namespace="20-minute-intro-call"
                data-cal-config='{"layout":"month_view"}'
                target="_blank"
                rel="noopener noreferrer"
                role="button"
                aria-label="Book a free audit call"
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex items-center justify-center px-8 py-4 rounded-full text-base sm:text-lg font-bold tracking-tight bg-[#FFB020] text-[#18181B] shadow-lg shadow-[#FFB020]/20 hover:shadow-xl hover:shadow-[#FFB020]/30 transition-all duration-200"
              >
                {t.hero.button}
              </motion.a>
            </motion.div>

            {/* One small line under the buttons */}
            <motion.p
              key={`subline-${language}`}
              initial={prefersReduced ? false : { opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: prefersReduced ? 0 : 0.45 }}
              className="mt-4 text-xs sm:text-sm text-stone-400"
            >
              {t.hero.subline}
            </motion.p>
          </div>

          {/* Right Column: Photorealistic Smartphone showing WhatsApp chat */}
          <div className="lg:col-span-5 w-full flex flex-col items-center">
            <RealMobilePhone />
          </div>

        </div>
      </div>
    </section>
  );
};
