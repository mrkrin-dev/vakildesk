import React, { useState, useEffect } from 'react';
import { motion, useReducedMotion } from 'motion/react';
import {
  ArrowLeft,
  Video,
  Phone,
  MoreVertical,
  Smile,
  Paperclip,
  Camera,
  Mic,
  Calendar,
  PhoneMissed,
  CheckCheck,
  Wifi,
  Signal,
} from 'lucide-react';

import { useLanguage } from '../context/LanguageContext';

export interface ChatMessage {
  id: string;
  sender: 'client' | 'advocate' | 'system';
  text: string;
  time: string;
  isAction?: boolean;
}

export interface ChatTab {
  id: string;
  labelKey: 'tabCallback' | 'tabIntake' | 'tabBooking';
  title: string;
  messages: ChatMessage[];
}

export const CHAT_TABS: ChatTab[] = [
  {
    id: 'callback',
    labelKey: 'tabCallback',
    title: 'Court Hours Auto Reply',
    messages: [
      {
        id: '1',
        sender: 'system',
        text: 'Missed voice call at 11:15 AM',
        time: '11:15 AM',
      },
      {
        id: '2',
        sender: 'advocate',
        text: 'నమస్కారం. I am currently presenting a matter before the bench in Chittoor and cannot answer your call.',
        time: '11:15 AM',
      },
      {
        id: '3',
        sender: 'advocate',
        text: 'I received your call. Please tap below to choose a time for us to talk at my chambers today:',
        time: '11:15 AM',
      },
      {
        id: '4',
        sender: 'advocate',
        text: 'Book Chambers Consultation',
        time: '11:16 AM',
        isAction: true,
      },
      {
        id: '5',
        sender: 'client',
        text: 'Booked consultation for today at 5:15 PM. Thank you Advocate garu.',
        time: '11:16 AM',
      },
    ],
  },
  {
    id: 'bilingual',
    labelKey: 'tabIntake',
    title: 'Bilingual Case Intake',
    messages: [
      {
        id: 'b1',
        sender: 'client',
        text: 'నమస్కారం సార్, ల్యాండ్ రిజిస్ట్రేషన్ వివాదంపై నోటీసు వచ్చింది. అర్జెంట్ గా మాట్లాడాలి.',
        time: '11:40 AM',
      },
      {
        id: 'b2',
        sender: 'advocate',
        text: 'నమస్కారం. మీ మెసేజ్ అందింది. కోర్టు సెషన్ తర్వాత పరిశీలిస్తాను. డాక్యుమెంట్లు మీ వద్ద సిద్ధంగా ఉన్నాయా?',
        time: '11:40 AM',
      },
      {
        id: 'b3',
        sender: 'client',
        text: 'అవును సార్, పట్టాదారు పాస్ బుక్ మరియు సేల్ డీడ్ కాపీలు రెడీగా ఉన్నాయి.',
        time: '11:41 AM',
      },
      {
        id: 'b4',
        sender: 'advocate',
        text: 'మంచిది. సాయంత్రం 5:30 కి చిత్తూరు ఛాంబర్స్ లో నేరుగా కలుద్దాం. డాక్యుమెంట్లు తీసుకురండి.',
        time: '11:41 AM',
      },
    ],
  },
  {
    id: 'booking',
    labelKey: 'tabBooking',
    title: 'Chambers Slot Selection',
    messages: [
      {
        id: 'c1',
        sender: 'client',
        text: 'Sir, I called your mobile for a cheque bounce matter in Chittoor. Need to meet you today.',
        time: '02:10 PM',
      },
      {
        id: 'c2',
        sender: 'advocate',
        text: 'Court is currently in session. Please choose an open consultation slot from my diary:',
        time: '02:10 PM',
      },
      {
        id: 'c3',
        sender: 'advocate',
        text: 'Today, 5:00 PM • Chamber Consultation',
        time: '02:10 PM',
        isAction: true,
      },
      {
        id: 'c4',
        sender: 'client',
        text: 'Confirmed for 5:00 PM. Will be at your office near the District Court.',
        time: '02:11 PM',
      },
    ],
  },
];

export const RealMobilePhone: React.FC = () => {
  const { t } = useLanguage();
  const [activeTabIdx, setActiveTabIdx] = useState(0);
  const [userInteracted, setUserInteracted] = useState(false);
  const prefersReduced = useReducedMotion();

  const currentTab = CHAT_TABS[activeTabIdx];

  // Auto-switch tabs every 6.5s if user hasn't clicked
  useEffect(() => {
    if (userInteracted || prefersReduced) return;
    const timer = setInterval(() => {
      setActiveTabIdx((prev) => (prev + 1) % CHAT_TABS.length);
    }, 6500);
    return () => clearInterval(timer);
  }, [userInteracted, prefersReduced]);

  return (
    <div className="w-full flex flex-col items-center">
      {/* Tab Switcher Pills placed right above phone */}
      <div className="flex items-center gap-1.5 p-1 bg-gradient-to-b from-[#222227] to-[#161619] rounded-full border border-[#33333C] mb-5 shadow-[0_8px_20px_rgba(0,0,0,0.5),inset_0_1px_1px_rgba(255,255,255,0.12)]">
        {CHAT_TABS.map((tab, idx) => (
          <button
            key={tab.id}
            type="button"
            onClick={() => {
              setUserInteracted(true);
              setActiveTabIdx(idx);
            }}
            className={`py-1.5 px-3.5 text-xs font-semibold rounded-full transition-all duration-200 ${
              activeTabIdx === idx
                ? 'bg-gradient-to-b from-[#FFC247] to-[#FFB020] text-[#18181B] shadow-[0_3px_10px_rgba(255,176,32,0.35),inset_0_1px_1px_rgba(255,255,255,0.4)]'
                : 'text-stone-400 hover:text-white'
            }`}
          >
            {t.phoneMockup[tab.labelKey]}
          </button>
        ))}
      </div>

      {/* Realistic Smartphone Container with Subtle Outer Drop Shadow and Soft Inner Gradient */}
      <div className="relative w-full max-w-[340px] sm:max-w-[370px] aspect-[390/800] select-none">
        
        {/* Physical Floating Outer Drop Shadow */}
        <div className="absolute inset-0 rounded-[52px] shadow-[0_30px_70px_-10px_rgba(0,0,0,0.95),0_14px_32px_-6px_rgba(0,0,0,0.8),0_0_55px_rgba(255,176,32,0.07)] pointer-events-none" />

        {/* Screen Display Content with soft inner depth and rounded corners */}
        <div className="absolute inset-[8px] rounded-[44px] overflow-hidden bg-[#0B141A] flex flex-col z-10 shadow-[inset_0_0_24px_rgba(0,0,0,0.7)]">
          
          {/* Soft inner gradient overlay across the screen glass */}
          <div className="absolute inset-0 bg-gradient-to-b from-white/[0.04] via-transparent to-black/35 pointer-events-none z-25" />

          {/* Top Status Bar (Under Dynamic Island) */}
          <div className="pt-3.5 pb-2 px-7 bg-[#1F2C34] text-white flex items-center justify-between text-[11px] font-semibold select-none z-20">
            {/* Clock */}
            <span className="font-medium tracking-tight">11:15</span>

            {/* Spacer for SVG Dynamic Island */}
            <div className="w-[124px] h-[24px]" />

            {/* Status Icons */}
            <div className="flex items-center gap-1.5 text-stone-200">
              <Signal className="w-3 h-3" />
              <span className="text-[10px] font-bold tracking-tight">5G</span>
              <Wifi className="w-3 h-3" />
              <div className="w-5 h-2.5 border border-white/80 rounded-[3px] p-[1px] flex items-center">
                <div className="w-3 h-1.5 bg-emerald-400 rounded-[1px]" />
              </div>
            </div>
          </div>

          {/* WhatsApp Navigation Header */}
          <div className="bg-[#1F2C34] text-white px-3.5 py-2.5 flex items-center justify-between border-b border-[#2A3942]/70 shadow-sm z-20">
            <div className="flex items-center gap-2">
              <ArrowLeft className="w-4 h-4 text-stone-300" />
              
              {/* Advocate Avatar */}
              <div className="relative w-8 h-8 rounded-full bg-gradient-to-br from-emerald-600 to-teal-800 flex items-center justify-center text-white font-bold text-xs shadow-sm ring-1 ring-emerald-400/40">
                <span>VD</span>
                <span className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-emerald-400 border-2 border-[#1F2C34] rounded-full" />
              </div>

              {/* Contact Name & Live Status */}
              <div className="flex flex-col text-left">
                <span className="text-xs font-semibold leading-tight text-white flex items-center gap-1">
                  {t.phoneMockup.headerTitle}
                </span>
                <span className="text-[10px] text-emerald-400 leading-tight">
                  {t.phoneMockup.headerStatus}
                </span>
              </div>
            </div>

            {/* Header Call & Menu Icons */}
            <div className="flex items-center gap-3 text-stone-300">
              <Video className="w-4 h-4 hover:text-white" />
              <Phone className="w-3.5 h-3.5 hover:text-white" />
              <MoreVertical className="w-4 h-4 hover:text-white" />
            </div>
          </div>

          {/* WhatsApp Chat Canvas */}
          <div
            className="flex-1 overflow-y-auto p-3.5 space-y-2.5 font-sans relative"
            style={{
              backgroundColor: '#0B141A',
              backgroundImage: `radial-gradient(#1E2B33 0.85px, transparent 0.85px)`,
              backgroundSize: '16px 16px',
            }}
          >
            {/* Date pill */}
            <div className="flex justify-center my-1">
              <span className="text-[10px] bg-[#182229] text-stone-400 px-2.5 py-0.5 rounded-md uppercase font-medium shadow-sm">
                {t.phoneMockup.today}
              </span>
            </div>

            {/* Chat Messages */}
            {currentTab.messages.map((msg) => {
              if (msg.sender === 'system') {
                return (
                  <motion.div
                    key={msg.id}
                    initial={prefersReduced ? false : { opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="mx-auto my-1.5 max-w-[92%] text-center"
                  >
                    <div className="inline-flex items-center gap-1.5 bg-[#182229]/95 text-stone-300 text-[10px] px-3 py-1 rounded-lg border border-[#26353D] shadow-sm">
                      <PhoneMissed className="w-3 h-3 text-rose-400 shrink-0" />
                      <span>{msg.text}</span>
                    </div>
                  </motion.div>
                );
              }

              const isOut = msg.sender === 'advocate';

              return (
                <motion.div
                  key={msg.id}
                  initial={prefersReduced ? false : { opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.2 }}
                  className={`flex flex-col ${isOut ? 'items-end' : 'items-start'}`}
                >
                  <div
                    className={`max-w-[86%] rounded-2xl px-3 py-2 text-xs leading-relaxed shadow-md relative ${
                      isOut
                        ? 'bg-[#005C4B] text-white rounded-tr-none'
                        : 'bg-[#202C33] text-stone-100 rounded-tl-none'
                    }`}
                  >
                    {msg.isAction ? (
                      <div className="space-y-1.5">
                        <p className="text-[11px] text-stone-200">
                          {t.phoneMockup.directAppointment}
                        </p>
                        <div className="bg-[#00483A] hover:bg-[#003B30] p-2 rounded-xl border border-emerald-400/30 flex items-center gap-2 cursor-pointer transition-colors shadow-sm">
                          <div className="w-6 h-6 rounded-lg bg-[#FFB020] text-[#18181B] flex items-center justify-center shrink-0">
                            <Calendar className="w-3.5 h-3.5" />
                          </div>
                          <span className="font-semibold text-amber-300 text-[11px]">
                            {msg.text}
                          </span>
                        </div>
                      </div>
                    ) : (
                      <p>{msg.text}</p>
                    )}

                    {/* Timestamp & double blue check */}
                    <div className="flex items-center justify-end gap-1 mt-1 text-[9px] text-stone-300/80 select-none">
                      <span>{msg.time}</span>
                      {isOut && <CheckCheck className="w-3 h-3 text-[#53BDEB]" />}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* WhatsApp Message Input Bar */}
          <div className="bg-[#1F2C34] px-2.5 py-2 flex items-center gap-2 border-t border-[#2A3942]/70 z-20">
            <div className="flex-1 bg-[#2A3942] rounded-full px-3 py-1.5 flex items-center justify-between text-stone-400 text-xs shadow-inner">
              <div className="flex items-center gap-2 text-stone-400">
                <Smile className="w-4 h-4 cursor-pointer hover:text-stone-200" />
                <span className="text-stone-400 text-[11px]">{t.phoneMockup.typeMessage}</span>
              </div>
              <div className="flex items-center gap-2 text-stone-400">
                <Paperclip className="w-3.5 h-3.5 cursor-pointer hover:text-stone-200" />
                <Camera className="w-3.5 h-3.5 cursor-pointer hover:text-stone-200" />
              </div>
            </div>

            {/* Green Voice Note Circle Button */}
            <div className="w-8 h-8 rounded-full bg-[#00A884] text-white flex items-center justify-center shrink-0 shadow-md">
              <Mic className="w-4 h-4" />
            </div>
          </div>

          {/* Bottom spacing above home bar */}
          <div className="h-6 bg-[#1F2C34]" />

        </div>

        {/* SVG Smartphone Frame Overlay (Realistic Vector Hardware Frame) */}
        <svg
          className="absolute inset-0 w-full h-full pointer-events-none z-30"
          viewBox="0 0 390 800"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            {/* Metallic frame gradient */}
            <linearGradient id="phone-metal-frame" x1="0" y1="0" x2="390" y2="800" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#7E7E8E" />
              <stop offset="18%" stopColor="#303036" />
              <stop offset="42%" stopColor="#585866" />
              <stop offset="68%" stopColor="#202026" />
              <stop offset="90%" stopColor="#4C4C58" />
              <stop offset="100%" stopColor="#6E6E7D" />
            </linearGradient>

            {/* Inner rim bevel gradient */}
            <linearGradient id="phone-inner-bevel" x1="0" y1="0" x2="390" y2="800" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#484854" />
              <stop offset="35%" stopColor="#1C1C22" />
              <stop offset="70%" stopColor="#101014" />
              <stop offset="100%" stopColor="#34343E" />
            </linearGradient>

            {/* Soft inner ambient depth gradient */}
            <radialGradient id="phone-chassis-soft-inner" cx="50%" cy="20%" r="80%">
              <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.06" />
              <stop offset="50%" stopColor="#000000" stopOpacity="0" />
              <stop offset="100%" stopColor="#000000" stopOpacity="0.3" />
            </radialGradient>

            {/* Glass reflection gloss */}
            <linearGradient id="phone-glass-reflection" x1="0" y1="0" x2="390" y2="800" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.09" />
              <stop offset="28%" stopColor="#FFFFFF" stopOpacity="0.02" />
              <stop offset="55%" stopColor="#FFFFFF" stopOpacity="0" />
            </linearGradient>
          </defs>

          {/* Hardware Side Buttons */}
          {/* Action button on Left */}
          <rect x="0.5" y="118" width="3.5" height="28" rx="1.5" fill="#44444D" stroke="#18181D" strokeWidth="0.8" />
          {/* Volume Up */}
          <rect x="0.5" y="160" width="3.5" height="48" rx="1.5" fill="#44444D" stroke="#18181D" strokeWidth="0.8" />
          {/* Volume Down */}
          <rect x="0.5" y="220" width="3.5" height="48" rx="1.5" fill="#44444D" stroke="#18181D" strokeWidth="0.8" />
          {/* Power / Lock Button on Right */}
          <rect x="386" y="180" width="3.5" height="74" rx="1.5" fill="#44444D" stroke="#18181D" strokeWidth="0.8" />

          {/* Antenna Bands on side edges */}
          <rect x="1" y="90" width="6" height="2.5" fill="#18181D" />
          <rect x="1" y="700" width="6" height="2.5" fill="#18181D" />
          <rect x="383" y="90" width="6" height="2.5" fill="#18181D" />
          <rect x="383" y="700" width="6" height="2.5" fill="#18181D" />

          {/* Outer Metallic Bezel */}
          <rect
            x="3.5"
            y="3.5"
            width="383"
            height="793"
            rx="52"
            fill="none"
            stroke="url(#phone-metal-frame)"
            strokeWidth="6"
          />

          {/* Inner Black Bezel with soft gradient edge */}
          <rect
            x="6.5"
            y="6.5"
            width="377"
            height="787"
            rx="48"
            fill="none"
            stroke="#0A0A0D"
            strokeWidth="3.5"
          />

          {/* Delicate Highlight Rim on inner edge of glass */}
          <rect
            x="8.5"
            y="8.5"
            width="373"
            height="783"
            rx="45"
            fill="none"
            stroke="url(#phone-inner-bevel)"
            strokeWidth="1.2"
          />

          {/* Soft inner ambient chassis gradient on display boundary */}
          <rect
            x="9"
            y="9"
            width="372"
            height="782"
            rx="44"
            fill="url(#phone-chassis-soft-inner)"
          />

          {/* Dynamic Island Pill with Camera & Sensor Elements */}
          <g transform="translate(133, 16)">
            {/* Pill cutout */}
            <rect width="124" height="28" rx="14" fill="#000000" />
            {/* Camera lens cutout */}
            <circle cx="103" cy="14" r="5" fill="#0C0C14" />
            <circle cx="103" cy="14" r="2.8" fill="#05050A" />
            {/* Camera blue glass antireflective lens gleam */}
            <circle cx="102" cy="13" r="1.2" fill="#3B82F6" opacity="0.45" />
            {/* Sensor dot */}
            <circle cx="28" cy="14" r="2.5" fill="#09090E" />
          </g>

          {/* Speaker Earpiece Slit at top rim */}
          <rect x="165" y="6.5" width="60" height="2" rx="1" fill="#1A1A20" />

          {/* Diagonal Screen Specular Glare */}
          <path
            d="M9 9C9 9 260 9 375 140L30 520L9 9Z"
            fill="url(#phone-glass-reflection)"
          />

          {/* Home Indicator Bar */}
          <rect
            x="128"
            y="778"
            width="134"
            height="5"
            rx="2.5"
            fill="#FFFFFF"
            fillOpacity="0.45"
          />
        </svg>

      </div>

      {/* Floating Floor Ambient Shadow beneath smartphone */}
      <div className="w-[78%] max-w-[280px] h-5 bg-black/80 blur-xl rounded-full -mt-2.5 pointer-events-none" />

      {/* Small caption under phone */}
      <p className="mt-3.5 text-xs text-stone-400 font-medium">
        {t.hero.chatCaption}
      </p>
    </div>
  );
};
