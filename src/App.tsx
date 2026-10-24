import React from 'react';
import { LanguageProvider } from './context/LanguageContext';
import { TopBar } from './components/TopBar';
import { Hero } from './components/Hero';
import { Marquee } from './components/Marquee';
import { WhatChanges } from './components/WhatChanges';
import { SampleBuilds } from './components/SampleBuilds';
import { ProofCalculator } from './components/ProofCalculator';
import { HowItWorks } from './components/HowItWorks';
import { Founder } from './components/Founder';
import { AuditPanel } from './components/AuditPanel';
import { Questions } from './components/Questions';
import { ClosingAndFooter } from './components/ClosingAndFooter';
import { StickyBottomBar } from './components/StickyBottomBar';

export default function App() {
  return (
    <LanguageProvider>
      <div className="min-h-screen bg-[#F6F5F1] text-[#18181B] flex flex-col font-body selection:bg-[#FFB020] selection:text-[#18181B]">
        {/* 1. Top bar */}
        <TopBar />

        <main className="flex-grow">
          {/* 2. Hero on dark colour */}
          <Hero />

          {/* 3. Marquee */}
          <Marquee />

          {/* 4. What changes for you */}
          <WhatChanges />

          {/* 5. Sample builds */}
          <SampleBuilds />

          {/* 6. Proof: What missed appointments cost you (Calculator) */}
          <ProofCalculator />

          {/* 7. How it works */}
          <HowItWorks />

          {/* 8. Founder */}
          <Founder />

          {/* 9. Free audit call panel on dark colour */}
          <AuditPanel />

          {/* 10. Questions */}
          <Questions />

          {/* 11. Closing + Footer */}
          <ClosingAndFooter />
        </main>

        {/* Sticky mobile CTA button */}
        <StickyBottomBar />
      </div>
    </LanguageProvider>
  );
}
