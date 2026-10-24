import React from 'react';
import { motion, useReducedMotion } from 'motion/react';
import { DETAILS } from '../constants';
import { CheckCircle2 } from 'lucide-react';
import {
  WordReveal,
  FadeUp,
  StaggerContainer,
  StaggerItem,
  ParallaxPhoto,
  EASE_PREMIUM,
} from './MotionPrimitives';
import { useLanguage } from '../context/LanguageContext';

export const SampleBuilds: React.FC = () => {
  const { t, language } = useLanguage();
  const prefersReduced = useReducedMotion();

  return (
    <section id="sample-builds" className="py-20 sm:py-28 bg-[#F6F5F1] text-[#18181B] border-t border-stone-200/60">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Section Title */}
        <div className="max-w-2xl mb-16 sm:mb-20">
          <FadeUp yOffset={12} duration={0.45}>
            <p key={`sb-eye-${language}`} className="text-xs sm:text-sm font-bold tracking-wider uppercase text-stone-600 mb-3">
              {t.sampleBuilds.eyebrow}
            </p>
          </FadeUp>

          <WordReveal
            key={`sb-head-${language}`}
            text={t.sampleBuilds.heading}
            as="h2"
            delayOffset={0.08}
            className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#18181B] leading-tight"
          />
        </div>

        {/* 3 Alternating Large Rows */}
        <div className="space-y-20 sm:space-y-28">
          {t.setupItems.map((item, idx) => {
            const isEven = idx % 2 === 1;
            const originalImage = DETAILS.setupItems[idx]?.image || '/work-1.jpg';

            return (
              <div
                key={idx}
                className={`grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center ${
                  isEven ? 'lg:flex-row-reverse' : ''
                }`}
              >
                {/* Photo Column with Soft Wipe & Parallax Drift */}
                <div className={`lg:col-span-6 relative ${isEven ? 'lg:order-2' : 'lg:order-1'}`}>
                  <ParallaxPhoto
                    src={originalImage}
                    alt={item.alt}
                    width={600}
                    height={400}
                    className="rounded-[24px] bg-stone-200 shadow-[0_20px_45px_-10px_rgba(0,0,0,0.14)] border border-stone-200/80 aspect-[3/2] group"
                  >
                    {/* Subtle photo vignette */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />

                    {/* Overlapping badge tablet in the corner with outer shadow and soft inner gradient */}
                    <motion.div
                      key={`badge-${idx}-${language}`}
                      initial={prefersReduced ? false : { opacity: 0, y: 16, scale: 0.96 }}
                      whileInView={{ opacity: 1, y: 0, scale: 1 }}
                      viewport={{ once: true, amount: 0.3 }}
                      transition={{ duration: 0.55, delay: 0.25, ease: EASE_PREMIUM }}
                      className="absolute bottom-4 left-4 right-4 sm:right-auto sm:max-w-[85%] bg-gradient-to-b from-[#222227] to-[#121215] text-white backdrop-blur-md rounded-2xl p-3 sm:p-3.5 border border-[#3F3F46] shadow-[0_16px_34px_rgba(0,0,0,0.7),inset_0_1px_1px_rgba(255,255,255,0.15)]"
                    >
                      <div className="flex items-center gap-2.5">
                        <span className="w-2.5 h-2.5 rounded-full bg-[#FFB020] shrink-0" />
                        <p className="text-xs sm:text-sm font-medium leading-tight text-stone-100">
                          {item.badge}
                        </p>
                      </div>
                    </motion.div>
                  </ParallaxPhoto>
                </div>

                {/* Content Column with Staggered Entrance */}
                <StaggerContainer
                  key={`content-${idx}-${language}`}
                  staggerDelay={0.14}
                  delayChildren={0.1}
                  className={`lg:col-span-6 flex flex-col justify-center ${
                    isEven ? 'lg:order-1' : 'lg:order-2'
                  }`}
                >
                  {/* Sample build tablet pill */}
                  <StaggerItem>
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gradient-to-r from-[#FFC247] to-[#FFB020] text-[#18181B] text-xs font-bold tracking-wide mb-4 w-fit shadow-[0_4px_14px_rgba(255,176,32,0.3),inset_0_1px_1px_rgba(255,255,255,0.45)]">
                      {t.sampleBuilds.sampleBuildLabel}
                    </div>
                  </StaggerItem>

                  {/* Title */}
                  <StaggerItem>
                    <h3 className="font-heading text-2xl sm:text-3xl font-bold tracking-tight text-[#18181B] leading-snug mb-6">
                      {item.title}
                    </h3>
                  </StaggerItem>

                  {/* Exactly headed: What you get */}
                  <StaggerItem hoverLift={true} className="mb-6">
                    <div className="bg-gradient-to-b from-white to-stone-50/50 rounded-2xl p-5 border border-stone-200/80 shadow-[0_8px_20px_-4px_rgba(0,0,0,0.04),inset_0_1px_0_rgba(255,255,255,0.9)]">
                      <h4 className="font-heading text-base font-bold text-[#18181B] mb-2 flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                        {t.sampleBuilds.whatYouGet}
                      </h4>
                      <p className="text-sm sm:text-base text-stone-600 leading-relaxed">
                        {item.whatYouGet}
                      </p>
                    </div>
                  </StaggerItem>

                  {/* Exactly headed: What changes for you */}
                  <StaggerItem hoverLift={true}>
                    <div className="bg-gradient-to-b from-white to-stone-50/50 rounded-2xl p-5 border border-stone-200/80 shadow-[0_8px_20px_-4px_rgba(0,0,0,0.04),inset_0_1px_0_rgba(255,255,255,0.9)]">
                      <h4 className="font-heading text-base font-bold text-[#18181B] mb-2 flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                        {t.sampleBuilds.whatChangesForYou}
                      </h4>
                      <p className="text-sm sm:text-base text-stone-600 leading-relaxed">
                        {item.whatChangesForYou}
                      </p>
                    </div>
                  </StaggerItem>
                </StaggerContainer>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
