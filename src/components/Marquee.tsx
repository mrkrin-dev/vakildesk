import React, { useState } from 'react';
import { motion, useReducedMotion } from 'motion/react';
import { useLanguage } from '../context/LanguageContext';

export const Marquee: React.FC = () => {
  const { t } = useLanguage();
  const [isHovered, setIsHovered] = useState(false);
  const prefersReduced = useReducedMotion();

  const row1Items = t.marquee.row1;
  const row2Items = t.marquee.row2;

  // Repeat items so the ticker flows seamlessly
  const repeatedRow1 = [...row1Items, ...row1Items, ...row1Items, ...row1Items];
  const repeatedRow2 = [...row2Items, ...row2Items, ...row2Items, ...row2Items, ...row2Items, ...row2Items];

  return (
    <div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="w-full bg-[#111113] border-y border-[#27272A] py-5 overflow-hidden select-none"
    >
      {/* Row 1: things set up, big and bold in white, in heading font, moving left */}
      <div className="relative w-full overflow-hidden flex whitespace-nowrap mb-3.5">
        <motion.div
          animate={
            prefersReduced
              ? { x: 0 }
              : {
                  x: ['0%', '-50%'],
                }
          }
          transition={{
            duration: isHovered ? 45 : 22,
            repeat: Infinity,
            ease: 'linear',
          }}
          className="flex items-center shrink-0 will-change-transform"
        >
          {repeatedRow1.map((item, idx) => (
            <div key={idx} className="flex items-center">
              <span className="font-heading font-bold text-xl sm:text-2xl md:text-3xl text-white tracking-tight px-4 sm:px-6">
                {item}
              </span>
              <span className="w-2 h-2 rounded-full bg-[#FFB020] shrink-0" />
            </div>
          ))}
        </motion.div>
      </div>

      {/* Row 2: who I help, city, WhatsApp, in solid letters half size, body font, uppercase, wide letter spacing, off-white 60%, moving right */}
      <div className="relative w-full overflow-hidden flex whitespace-nowrap">
        <motion.div
          animate={
            prefersReduced
              ? { x: 0 }
              : {
                  x: ['-50%', '0%'],
                }
          }
          transition={{
            duration: isHovered ? 50 : 25,
            repeat: Infinity,
            ease: 'linear',
          }}
          className="flex items-center shrink-0 will-change-transform"
        >
          {repeatedRow2.map((item, idx) => (
            <div key={idx} className="flex items-center">
              <span className="font-body font-bold text-xs sm:text-sm tracking-[0.22em] text-[#F6F5F1]/60 uppercase px-4 sm:px-6">
                {item}
              </span>
              <span className="w-1.5 h-1.5 rounded-full bg-[#FFB020] shrink-0" />
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};
