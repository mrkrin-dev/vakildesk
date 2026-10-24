import React, { useState, useEffect, useMemo } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronDown } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import {
  WordReveal,
  FadeUp,
  StaggerContainer,
  StaggerItem,
  EASE_PREMIUM,
} from './MotionPrimitives';

export const Questions: React.FC = () => {
  const { t, language } = useLanguage();
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  const toggleFAQ = (idx: number) => {
    setOpenIdx(openIdx === idx ? null : idx);
  };

  // Structured Data Schema for FAQPage with rich Legal Consultation context
  const jsonLdData = useMemo(() => {
    return {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      '@id': 'https://vakildesk.com/#faq-legal-consultation',
      'name': language === 'te'
        ? 'చిత్తూరు న్యాయవాదుల సంప్రదింపుల తరచుగా అడిగే ప్రశ్నలు (Legal Consultation FAQs)'
        : 'Legal Consultation and Court Hours Intake FAQs for Solo Advocates',
      'description': language === 'te'
        ? 'కోర్టు విచారణల సమయంలో క్లయింట్ సంప్రదింపులు, వాట్సాప్ ఆటోమేషన్ మరియు చాంబర్ అపాయింట్‌మెంట్స్ గురించిన సమగ్ర సమాచారం.'
        : 'Structured answers to frequent queries on legal consultation scheduling, court hours callback workflows, and WhatsApp intake for solo advocates in Chittoor, Andhra Pradesh.',
      'inLanguage': language === 'te' ? 'te-IN' : 'en-IN',
      'about': {
        '@type': 'LegalService',
        'name': 'VakilDesk',
        'serviceType': 'Legal Consultation Intake & Workflow Automation',
        'areaServed': {
          '@type': 'AdministrativeArea',
          'name': 'Chittoor, Andhra Pradesh, India',
        },
        'audience': {
          '@type': 'Audience',
          'audienceType': 'Solo Advocates and Legal Clients Seeking Consultations',
        },
      },
      'mainEntity': t.questions.faqs.map((faq) => ({
        '@type': 'Question',
        'name': faq.question,
        'acceptedAnswer': {
          '@type': 'Answer',
          'text': faq.answer,
        },
      })),
    };
  }, [t.questions.faqs, language]);

  // Inject / sync JSON-LD script in document.head for search crawlers
  useEffect(() => {
    const scriptId = 'faq-jsonld-schema';
    let scriptElement = document.getElementById(scriptId) as HTMLScriptElement | null;

    if (!scriptElement) {
      scriptElement = document.createElement('script');
      scriptElement.id = scriptId;
      scriptElement.type = 'application/ld+json';
      document.head.appendChild(scriptElement);
    }

    scriptElement.textContent = JSON.stringify(jsonLdData);

    return () => {
      const existing = document.getElementById(scriptId);
      if (existing) {
        existing.remove();
      }
    };
  }, [jsonLdData]);

  return (
    <section id="questions" className="py-20 sm:py-28 bg-[#F6F5F1] text-[#18181B] border-t border-stone-200/60 relative">
      {/* Search Engine JSON-LD structured data embedded directly in component markup */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdData) }}
      />
      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        
        {/* Section Heading */}
        <div className="text-center mb-14 sm:mb-18">
          <FadeUp yOffset={12} duration={0.45}>
            <p className="text-xs sm:text-sm font-bold tracking-wider uppercase text-stone-600 mb-3">
              {t.questions.eyebrow}
            </p>
          </FadeUp>

          <WordReveal
            text={t.questions.heading}
            as="h2"
            delayOffset={0.08}
            className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#18181B] leading-tight"
          />
        </div>

        {/* Accordions with Staggered Entrance */}
        <StaggerContainer
          staggerDelay={0.12}
          delayChildren={0.1}
          className="space-y-4"
        >
          {t.questions.faqs.map((faq, idx) => {
            const isOpen = openIdx === idx;
            return (
              <StaggerItem
                key={idx}
                className="bg-gradient-to-b from-white to-stone-50/50 rounded-[24px] border border-stone-200/80 shadow-[0_8px_24px_-6px_rgba(0,0,0,0.05),inset_0_1px_0_rgba(255,255,255,0.9)] overflow-hidden transition-all"
              >
                <button
                  type="button"
                  onClick={() => toggleFAQ(idx)}
                  className="w-full px-6 sm:px-8 py-5 sm:py-6 text-left flex items-center justify-between gap-4 group"
                >
                  <span className="font-heading text-lg sm:text-xl font-bold text-[#18181B] tracking-tight group-hover:text-stone-700 transition-colors">
                    {faq.question}
                  </span>
                  <div
                    className={`w-9 h-9 rounded-full bg-stone-100 flex items-center justify-center shrink-0 transition-transform duration-300 ${
                      isOpen ? 'rotate-180 bg-stone-200' : ''
                    }`}
                  >
                    <ChevronDown className="w-4 h-4 text-[#18181B]" />
                  </div>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.35, ease: EASE_PREMIUM }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 sm:px-8 pb-6 sm:pb-7 text-sm sm:text-base text-stone-600 leading-relaxed border-t border-stone-100 pt-4">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </StaggerItem>
            );
          })}
        </StaggerContainer>

      </div>
    </section>
  );
};
