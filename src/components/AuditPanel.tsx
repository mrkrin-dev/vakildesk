import React from 'react';
import { motion } from 'motion/react';
import { DETAILS } from '../constants';
import {
  WordReveal,
  FadeUp,
  StaggerContainer,
  StaggerItem,
} from './MotionPrimitives';
import { useLanguage } from '../context/LanguageContext';

export const AuditPanel: React.FC = () => {
  const { t, language } = useLanguage();

  return (
    <section className="py-20 sm:py-28 bg-[#111113] text-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        
        {/* Large dark panel tablet with outer drop shadow, soft inner gradient, and smooth entrance */}
        <FadeUp yOffset={36} duration={0.7}>
          <div className="bg-gradient-to-b from-[#1F1F25] via-[#161619] to-[#101013] rounded-[24px] p-8 sm:p-14 border border-[#2D2D35] shadow-[0_38px_90px_-20px_rgba(0,0,0,0.9),inset_0_1px_1.5px_rgba(255,255,255,0.14)] relative overflow-hidden">
            
            {/* Subtle warm accent glow */}
            <div className="absolute top-0 right-0 w-80 h-80 bg-[#FFB020]/10 rounded-full blur-[90px] pointer-events-none" />

            <div className="relative z-10 max-w-3xl mx-auto text-center">
              
              <WordReveal
                key={`audit-head-${language}`}
                text={t.auditPanel.heading}
                as="h2"
                className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white leading-tight mb-6"
              />

              <FadeUp delay={0.2} yOffset={14}>
                <p key={`audit-sub-${language}`} className="text-stone-300 text-base sm:text-lg mb-12">
                  {t.auditPanel.subtext}
                </p>
              </FadeUp>

              {/* The three things you leave with */}
              <StaggerContainer
                key={`audit-stagger-${language}`}
                staggerDelay={0.14}
                delayChildren={0.25}
                className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left mb-12"
              >
                {t.auditPanel.deliverables.map((item, idx) => (
                  <StaggerItem
                    key={idx}
                    hoverLift={true}
                    className="bg-gradient-to-b from-[#17171C] to-[#0E0E12] rounded-2xl p-6 border border-[#2A2A33] shadow-[0_12px_28px_-4px_rgba(0,0,0,0.6),inset_0_1px_1px_rgba(255,255,255,0.08)] flex flex-col justify-between"
                  >
                    <div>
                      <div className="w-8 h-8 rounded-full bg-gradient-to-b from-[#2E2E36] to-[#1A1A20] text-[#FFB020] border border-[#3E3E48] shadow-[0_2px_6px_rgba(0,0,0,0.4),inset_0_1px_0.5px_rgba(255,255,255,0.15)] flex items-center justify-center font-heading font-bold text-xs mb-4">
                        0{idx + 1}
                      </div>
                      <h3 className="font-heading text-lg font-bold text-white mb-2 leading-snug">
                        {item.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-stone-400 leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  </StaggerItem>
                ))}
              </StaggerContainer>

              {/* Main CTA button */}
              <FadeUp delay={0.45} yOffset={16} className="inline-block">
                <motion.a
                  href={DETAILS.bookingLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.03, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  className="inline-flex items-center justify-center px-8 sm:px-10 py-4 rounded-full text-base sm:text-lg font-bold tracking-tight bg-[#FFB020] text-[#18181B] shadow-lg shadow-[#FFB020]/20 hover:shadow-xl hover:shadow-[#FFB020]/30 transition-all"
                >
                  {t.auditPanel.button}
                </motion.a>
              </FadeUp>

            </div>

          </div>
        </FadeUp>

      </div>
    </section>
  );
};
