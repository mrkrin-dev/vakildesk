import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useReducedMotion } from 'motion/react';
import { Calendar, FileText, CheckCircle } from 'lucide-react';
import {
  WordReveal,
  FadeUp,
  StaggerContainer,
  StaggerItem,
  EASE_PREMIUM,
} from './MotionPrimitives';
import { useLanguage } from '../context/LanguageContext';

export const HowItWorks: React.FC = () => {
  const { t, language } = useLanguage();
  const prefersReduced = useReducedMotion();
  const sectionRef = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start 80%', 'center 45%'],
  });

  const lineScale = useTransform(scrollYProgress, [0, 1], [0, 1]);

  const stepIcons = [Calendar, FileText, CheckCircle];

  return (
    <section
      id="how-it-works"
      ref={sectionRef}
      className="py-20 sm:py-28 bg-[#F6F5F1] text-[#18181B] relative"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Section Heading */}
        <div className="text-center max-w-2xl mx-auto mb-16 sm:mb-20">
          <FadeUp yOffset={12} duration={0.45}>
            <p key={`hiw-eye-${language}`} className="text-xs sm:text-sm font-bold tracking-wider uppercase text-stone-600 mb-3">
              {t.howItWorks.eyebrow}
            </p>
          </FadeUp>

          <WordReveal
            key={`hiw-head-${language}`}
            text={t.howItWorks.heading}
            as="h2"
            delayOffset={0.08}
            className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#18181B] leading-tight"
          />
        </div>

        {/* 3 Steps joined by animated highlight bar */}
        <div className="relative">
          
          {/* Highlight line drawing across steps as you scroll down */}
          <div className="hidden md:block absolute top-[44px] left-[15%] right-[15%] h-1.5 bg-stone-200 rounded-full overflow-hidden">
            <motion.div
              style={prefersReduced ? { scaleX: 1 } : { scaleX: lineScale }}
              transition={{ duration: 0.9, ease: EASE_PREMIUM }}
              className="h-full bg-[#FFB020] origin-left rounded-full will-change-transform"
            />
          </div>

          <StaggerContainer
            key={`hiw-stagger-${language}`}
            staggerDelay={0.18}
            delayChildren={0.12}
            className="grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10"
          >
            {t.howItWorks.steps.map((step, idx) => (
              <StaggerItem
                key={idx}
                hoverLift={true}
                className="bg-gradient-to-b from-white to-stone-50/60 rounded-[24px] p-7 sm:p-8 border border-stone-200/80 shadow-[0_16px_36px_-10px_rgba(0,0,0,0.06),inset_0_1px_0_rgba(255,255,255,0.95)] flex flex-col items-center text-center relative"
              >
                {/* Step Number in Highlight Tablet with dark text, outer drop shadow, and soft inner gradient */}
                <div className="w-14 h-14 rounded-full bg-gradient-to-br from-[#FFC247] via-[#FFB020] to-[#E59810] text-[#18181B] flex items-center justify-center font-heading font-bold text-lg mb-6 shadow-[0_8px_20px_rgba(255,176,32,0.38),inset_0_2px_3px_rgba(255,255,255,0.45),inset_0_-2px_4px_rgba(0,0,0,0.18)] ring-4 ring-[#F6F5F1]">
                  {step.num}
                </div>

                <h3 className="font-heading text-xl sm:text-2xl font-bold tracking-tight text-[#18181B] mb-3 leading-snug">
                  {step.title}
                </h3>

                <p className="text-sm sm:text-base text-stone-600 leading-relaxed">
                  {step.desc}
                </p>
              </StaggerItem>
            ))}
          </StaggerContainer>

        </div>

      </div>
    </section>
  );
};
