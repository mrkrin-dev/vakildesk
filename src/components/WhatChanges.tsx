import React from 'react';
import { PhoneOff, MessageSquareText, CalendarCheck2 } from 'lucide-react';
import { WordReveal, FadeUp, StaggerContainer, StaggerItem } from './MotionPrimitives';
import { useLanguage } from '../context/LanguageContext';

export const WhatChanges: React.FC = () => {
  const { t, language } = useLanguage();
  const icons = [PhoneOff, MessageSquareText, CalendarCheck2];

  return (
    <section id="what-changes" className="py-20 sm:py-28 bg-[#F6F5F1] text-[#18181B]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Section Heading */}
        <div className="max-w-2xl mb-14 sm:mb-18">
          <FadeUp yOffset={12} duration={0.45}>
            <p key={`wc-eye-${language}`} className="text-xs sm:text-sm font-bold tracking-wider uppercase text-stone-600 mb-3">
              {t.whatChanges.eyebrow}
            </p>
          </FadeUp>

          <WordReveal
            key={`wc-head-${language}`}
            text={t.whatChanges.heading}
            as="h2"
            delayOffset={0.08}
            className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#18181B] leading-tight"
          />
        </div>

        {/* 3 Cards with Staggered Entrance */}
        <StaggerContainer
          key={`wc-stagger-${language}`}
          staggerDelay={0.16}
          delayChildren={0.12}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8"
        >
          {t.setupItems.map((item, idx) => {
            const IconComponent = icons[idx % icons.length];
            return (
              <StaggerItem
                key={idx}
                hoverLift={true}
                className="bg-gradient-to-b from-white via-white to-stone-50/60 rounded-[24px] p-7 sm:p-8 border border-stone-200/80 shadow-[0_16px_36px_-10px_rgba(0,0,0,0.06),0_4px_12px_-2px_rgba(0,0,0,0.03),inset_0_1px_0_rgba(255,255,255,0.9)] hover:shadow-[0_20px_42px_-8px_rgba(0,0,0,0.1)] transition-shadow flex flex-col justify-between"
              >
                <div>
                  {/* Big icon in a rounded highlight tile with outer shadow and soft inner gradient */}
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#FFC247] via-[#FFB020] to-[#E59810] text-[#18181B] flex items-center justify-center mb-6 shadow-[0_8px_20px_-3px_rgba(255,176,32,0.4),inset_0_2px_3px_rgba(255,255,255,0.45),inset_0_-2px_4px_rgba(0,0,0,0.18)]">
                    <IconComponent className="w-7 h-7" />
                  </div>

                  {/* Card heading naming the problem starting with You or Your */}
                  <h3 className="font-heading text-xl sm:text-2xl font-bold tracking-tight text-[#18181B] leading-snug mb-4">
                    {item.cardProblem}
                  </h3>

                  {/* What changes for you */}
                  <p className="text-sm sm:text-base text-stone-600 leading-relaxed">
                    {item.cardChange}
                  </p>
                </div>

                <div className="mt-8 pt-5 border-t border-stone-100 flex items-center justify-between">
                  <span className="text-xs font-semibold text-stone-400 uppercase tracking-wider">
                    {item.title}
                  </span>
                </div>
              </StaggerItem>
            );
          })}
        </StaggerContainer>

      </div>
    </section>
  );
};
