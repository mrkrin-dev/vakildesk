import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useReducedMotion } from 'motion/react';
import { DETAILS } from '../constants';
import { Logo } from './Logo';
import { WordReveal, FadeUp } from './MotionPrimitives';
import { useLanguage } from '../context/LanguageContext';

export const ClosingAndFooter: React.FC = () => {
  const { t } = useLanguage();
  const prefersReduced = useReducedMotion();
  const closingRef = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: closingRef,
    offset: ['start end', 'end start'],
  });

  const bgY = useTransform(scrollYProgress, [0, 1], ['-6%', '6%']);

  return (
    <>
      {/* 11. Closing Section: place.jpg under a dark colour layer, big headline, Book a free audit call */}
      <section
        ref={closingRef}
        className="relative overflow-hidden py-28 sm:py-36 bg-[#111113] text-white"
      >
        {/* Background photo under dark layer with subtle scroll parallax */}
        <motion.div
          style={prefersReduced ? undefined : { y: bgY }}
          className="absolute inset-0 -top-[8%] h-[116%] z-0 will-change-transform"
        >
          <img
            src="/place.jpg"
            alt="Interior view of advocate consultation chamber in Chittoor with case law volumes and consultation desk"
            width={1200}
            height={800}
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover object-center"
          />
          {/* Dark colour layer */}
          <div className="absolute inset-0 bg-[#111113]/85 backdrop-blur-sm" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#111113] via-transparent to-[#111113]/90" />
        </motion.div>

        {/* Content */}
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <WordReveal
            text={t.closing.heading}
            as="h2"
            className="font-heading text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-tight mb-8"
          />

          <FadeUp delay={0.25} yOffset={18}>
            <motion.a
              href={DETAILS.bookingLink}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.03, y: -2 }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex items-center justify-center px-8 sm:px-10 py-4 sm:py-5 rounded-full text-base sm:text-lg font-bold tracking-tight bg-[#FFB020] text-[#18181B] shadow-xl hover:shadow-2xl transition-all"
            >
              {t.closing.button}
            </motion.a>
          </FadeUp>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#111113] border-t border-[#27272A] py-12 sm:py-16 text-stone-400">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <FadeUp yOffset={16} duration={0.5}>
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8 pb-10 border-b border-[#27272A]">
              <div>
                <Logo isLight={true} size="md" />
                <p className="mt-2 text-sm text-stone-400">
                  {t.closing.city}
                </p>
              </div>

              <div className="flex flex-wrap gap-6 text-sm font-medium">
                <a href="#what-changes" className="hover:text-white transition-colors">
                  {t.topBar.whatChanges}
                </a>
                <a href="#sample-builds" className="hover:text-white transition-colors">
                  {t.topBar.sampleBuilds}
                </a>
                <a href="#calculator" className="hover:text-white transition-colors">
                  {t.topBar.calculator}
                </a>
                <a href="#how-it-works" className="hover:text-white transition-colors">
                  {t.topBar.howItWorks}
                </a>
                <a href="#questions" className="hover:text-white transition-colors">
                  {t.topBar.questions}
                </a>
              </div>
            </div>

            <div className="pt-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 text-xs text-stone-400">
              <p>
                © {new Date().getFullYear()} {DETAILS.businessName}. {t.closing.rights}
              </p>
              <p className="max-w-md">
                {t.closing.bciNotice}
              </p>
            </div>
          </FadeUp>
        </div>
      </footer>
    </>
  );
};
