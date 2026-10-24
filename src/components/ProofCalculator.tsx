import React, { useState, useEffect } from 'react';
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

export const ProofCalculator: React.FC = () => {
  const { t, language } = useLanguage();
  const prefersReduced = useReducedMotion();

  // Round example values under the label "Your numbers"
  const [clientsPerMonth, setClientsPerMonth] = useState<number>(30);
  const [missedShare, setMissedShare] = useState<number>(40);
  const [averageFee, setAverageFee] = useState<number>(2000);

  // Animated display values
  const [displayMonth, setDisplayMonth] = useState<number>(0);
  const [displayYear, setDisplayYear] = useState<number>(0);

  const targetMonth = Math.round(clientsPerMonth * (missedShare / 100) * averageFee);
  const targetYear = targetMonth * 12;

  useEffect(() => {
    if (prefersReduced) {
      setDisplayMonth(targetMonth);
      setDisplayYear(targetYear);
      return;
    }

    const duration = 400; // ms
    const startTime = performance.now();
    const startMonth = displayMonth;
    const startYear = displayYear;

    let animId: number;

    const animate = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      // easeOutQuad
      const eased = 1 - (1 - progress) * (1 - progress);

      setDisplayMonth(Math.round(startMonth + (targetMonth - startMonth) * eased));
      setDisplayYear(Math.round(startYear + (targetYear - startYear) * eased));

      if (progress < 1) {
        animId = requestAnimationFrame(animate);
      }
    };

    animId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animId);
  }, [targetMonth, targetYear, prefersReduced]);

  return (
    <section id="calculator" className="py-20 sm:py-28 bg-[#18181B] text-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        
        {/* Section Heading in my clients' words */}
        <div className="text-center max-w-2xl mx-auto mb-14 sm:mb-18">
          <WordReveal
            key={`calc-head-${language}`}
            text={t.proofCalculator.heading}
            as="h2"
            className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white leading-tight mb-4"
          />

          <FadeUp delay={0.18} yOffset={14}>
            <p key={`calc-sub-${language}`} className="text-stone-300 text-base sm:text-lg">
              {t.proofCalculator.subtext}
            </p>
          </FadeUp>
        </div>

        {/* Calculator Main Box with subtle outer drop shadow, soft inner gradient, and smooth entrance */}
        <FadeUp delay={0.22} yOffset={32}>
          <div className="bg-gradient-to-b from-[#18181D] via-[#131316] to-[#0E0E11] rounded-[24px] p-6 sm:p-10 border border-[#2A2A32] shadow-[0_32px_75px_-15px_rgba(0,0,0,0.85),inset_0_1px_1.5px_rgba(255,255,255,0.08)]">
            
            <div className="mb-8">
              <span className="inline-block px-3.5 py-1.5 rounded-full bg-gradient-to-b from-[#2E2E36] to-[#1C1C22] text-xs font-bold uppercase tracking-wider text-stone-200 border border-[#3E3E48] shadow-[0_4px_12px_rgba(0,0,0,0.4),inset_0_1px_1px_rgba(255,255,255,0.12)]">
                {t.proofCalculator.yourNumbers}
              </span>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
              
              {/* Sliders on Left with Staggered Entrance */}
              <StaggerContainer
                key={`sliders-${language}`}
                staggerDelay={0.12}
                delayChildren={0.15}
                className="lg:col-span-7 space-y-7"
              >
                {/* Slider 1: Customers a month */}
                <StaggerItem>
                  <div className="flex justify-between items-center mb-2">
                    <label className="text-sm font-semibold text-stone-200">
                      {t.proofCalculator.slider1Label}
                    </label>
                    <span className="font-heading font-bold text-lg text-white">
                      {clientsPerMonth}
                    </span>
                  </div>
                  <input
                    type="range"
                    min="10"
                    max="100"
                    step="5"
                    value={clientsPerMonth}
                    onChange={(e) => setClientsPerMonth(Number(e.target.value))}
                    className="w-full h-2 bg-[#27272A] rounded-lg appearance-none cursor-pointer accent-[#FFB020]"
                  />
                  <div className="flex justify-between text-[11px] text-stone-400 mt-1">
                    <span>{t.proofCalculator.slider1Min}</span>
                    <span>{t.proofCalculator.slider1Max}</span>
                  </div>
                </StaggerItem>

                {/* Slider 2: Share who miss their appointment */}
                <StaggerItem>
                  <div className="flex justify-between items-center mb-2">
                    <label className="text-sm font-semibold text-stone-200">
                      {t.proofCalculator.slider2Label}
                    </label>
                    <span className="font-heading font-bold text-lg text-white">
                      {missedShare}%
                    </span>
                  </div>
                  <input
                    type="range"
                    min="10"
                    max="70"
                    step="5"
                    value={missedShare}
                    onChange={(e) => setMissedShare(Number(e.target.value))}
                    className="w-full h-2 bg-[#27272A] rounded-lg appearance-none cursor-pointer accent-[#FFB020]"
                  />
                  <div className="flex justify-between text-[11px] text-stone-400 mt-1">
                    <span>10%</span>
                    <span>70%</span>
                  </div>
                </StaggerItem>

                {/* Slider 3: Average bill / fee */}
                <StaggerItem>
                  <div className="flex justify-between items-center mb-2">
                    <label className="text-sm font-semibold text-stone-200">
                      {t.proofCalculator.slider3Label}
                    </label>
                    <span className="font-heading font-bold text-lg text-white">
                      ₹{averageFee.toLocaleString('en-IN')}
                    </span>
                  </div>
                  <input
                    type="range"
                    min="500"
                    max="10000"
                    step="250"
                    value={averageFee}
                    onChange={(e) => setAverageFee(Number(e.target.value))}
                    className="w-full h-2 bg-[#27272A] rounded-lg appearance-none cursor-pointer accent-[#FFB020]"
                  />
                  <div className="flex justify-between text-[11px] text-stone-400 mt-1">
                    <span>₹500</span>
                    <span>₹10,000</span>
                  </div>
                </StaggerItem>
              </StaggerContainer>

              {/* Big Results Display on Right with physical tablet styling */}
              <motion.div
                initial={prefersReduced ? false : { opacity: 0, y: 24, scale: 0.98 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ duration: 0.65, delay: 0.25, ease: EASE_PREMIUM }}
                className="lg:col-span-5 bg-gradient-to-b from-[#222228] to-[#141417] rounded-2xl p-6 sm:p-8 border border-[#32323C] shadow-[0_18px_36px_rgba(0,0,0,0.6),inset_0_1px_1px_rgba(255,255,255,0.12)] flex flex-col justify-between text-center lg:text-left"
              >
                <div>
                  <p className="text-xs font-semibold text-stone-400 uppercase tracking-wider mb-1">
                    {t.proofCalculator.moneyLostMonth}
                  </p>
                  <div className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6 tracking-tight">
                    ₹{displayMonth.toLocaleString('en-IN')}
                  </div>

                  <p className="text-xs font-semibold text-stone-400 uppercase tracking-wider mb-1">
                    {t.proofCalculator.moneyLostYear}
                  </p>
                  <div className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-[#FFB020] mb-6 tracking-tight">
                    ₹{displayYear.toLocaleString('en-IN')}
                  </div>
                </div>

                <div className="pt-4 border-t border-[#27272A]">
                  {/* Under the result: exact required copy */}
                  <p className="text-xs text-stone-400 leading-normal mb-5">
                    {t.proofCalculator.estimateNote}
                  </p>

                  {/* Call to action button */}
                  <motion.a
                    href={DETAILS.bookingLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.02, y: -2 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full inline-flex items-center justify-center px-6 py-3.5 rounded-full text-base font-bold bg-[#FFB020] text-[#18181B] shadow-md hover:shadow-lg transition-all"
                  >
                    {t.proofCalculator.button}
                  </motion.a>
                </div>
              </motion.div>

            </div>

          </div>
        </FadeUp>

      </div>
    </section>
  );
};
