import React from 'react';
import { motion, useReducedMotion } from 'motion/react';
import { DETAILS } from '../constants';
import {
  WordReveal,
  FadeUp,
  StaggerContainer,
  StaggerItem,
  EASE_PREMIUM,
} from './MotionPrimitives';
import { useLanguage } from '../context/LanguageContext';

export const Founder: React.FC = () => {
  const { t, language } = useLanguage();
  const prefersReduced = useReducedMotion();

  return (
    <section className="py-20 sm:py-28 bg-[#F6F5F1] text-[#18181B] border-t border-stone-200/60">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        
        <FadeUp yOffset={32} duration={0.65}>
          <div className="bg-gradient-to-b from-white via-white to-stone-50/50 rounded-[24px] p-8 sm:p-12 border border-stone-200/80 shadow-[0_22px_50px_-12px_rgba(0,0,0,0.08),inset_0_1px_0_rgba(255,255,255,0.9)]">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 items-center">
              
              {/* Founder Portrait in a premium 4:5 rounded frame with physical depth */}
              <motion.div
                initial={prefersReduced ? false : { opacity: 0, scale: 0.92, y: 16 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.65, ease: EASE_PREMIUM }}
                className="md:col-span-5 flex justify-center"
              >
                <motion.div
                  whileHover={prefersReduced ? undefined : { y: -4, scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                  className="relative w-full max-w-[260px] aspect-[4/5] rounded-[24px] overflow-hidden p-1.5 bg-gradient-to-b from-amber-300/40 via-stone-200/60 to-stone-300/60 shadow-[0_20px_45px_-10px_rgba(15,29,58,0.2),0_8px_20px_-4px_rgba(0,0,0,0.12),inset_0_2px_4px_rgba(255,255,255,0.9),inset_0_-3px_6px_rgba(0,0,0,0.12)] group"
                >
                  <div className="w-full h-full rounded-[20px] overflow-hidden relative bg-[#0F1D3A]">
                    <img
                      src="/assets/aistudio/image_59ebc024.png"
                      alt={`${t.founder.name} - ${t.founder.role}`}
                      className="w-full h-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-105"
                      loading="lazy"
                    />
                  </div>
                </motion.div>
              </motion.div>

              {/* Founder details with staggered reveal */}
              <StaggerContainer
                key={`founder-${language}`}
                staggerDelay={0.12}
                delayChildren={0.15}
                className="md:col-span-7 flex flex-col items-start justify-center"
              >
                <StaggerItem>
                  <WordReveal
                    key={`fname-${language}`}
                    text={t.founder.name}
                    as="h3"
                    className="font-heading text-3xl sm:text-4xl font-bold tracking-tight text-[#18181B] mb-1"
                  />
                </StaggerItem>

                <StaggerItem>
                  <p className="font-body text-sm font-semibold text-stone-500 uppercase tracking-wider mb-6">
                    {t.founder.role}
                  </p>
                </StaggerItem>

                {/* One plain line about who we help */}
                <StaggerItem>
                  <p className="text-base sm:text-lg text-stone-700 leading-relaxed mb-8">
                    {t.founder.about}
                  </p>
                </StaggerItem>

                {/* Button: Book a free call with [first name] */}
                <StaggerItem>
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
                    className="inline-flex items-center justify-center px-7 py-3.5 rounded-full text-base font-bold bg-[#FFB020] text-[#18181B] shadow-sm hover:shadow-md transition-all"
                  >
                    {t.founder.button}
                  </motion.a>
                </StaggerItem>
              </StaggerContainer>

            </div>
          </div>
        </FadeUp>

      </div>
    </section>
  );
};
