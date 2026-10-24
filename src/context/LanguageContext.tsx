import React, { createContext, useContext, useState, useEffect } from 'react';

export type Language = 'en' | 'te';

export interface SetupItemTranslation {
  title: string;
  summary: string;
  cardProblem: string;
  cardChange: string;
  badge: string;
  alt: string;
  whatYouGet: string;
  whatChangesForYou: string;
}

export interface Translations {
  topBar: {
    whatChanges: string;
    sampleBuilds: string;
    calculator: string;
    howItWorks: string;
    questions: string;
    freeAuditCall: string;
    toggleLabel: string;
  };
  hero: {
    pill: string;
    headline: string;
    subtext: string;
    button: string;
    subline: string;
    chatCaption: string;
  };
  phoneMockup: {
    tabCallback: string;
    tabIntake: string;
    tabBooking: string;
    headerTitle: string;
    headerStatus: string;
    today: string;
    directAppointment: string;
    typeMessage: string;
  };
  marquee: {
    row1: string[];
    row2: string[];
  };
  whatChanges: {
    eyebrow: string;
    heading: string;
  };
  sampleBuilds: {
    eyebrow: string;
    heading: string;
    sampleBuildLabel: string;
    whatYouGet: string;
    whatChangesForYou: string;
  };
  setupItems: SetupItemTranslation[];
  proofCalculator: {
    heading: string;
    subtext: string;
    yourNumbers: string;
    slider1Label: string;
    slider1Min: string;
    slider1Max: string;
    slider2Label: string;
    slider3Label: string;
    moneyLostMonth: string;
    moneyLostYear: string;
    estimateNote: string;
    button: string;
  };
  howItWorks: {
    eyebrow: string;
    heading: string;
    steps: Array<{
      num: string;
      title: string;
      desc: string;
    }>;
  };
  founder: {
    name: string;
    role: string;
    about: string;
    button: string;
  };
  auditPanel: {
    heading: string;
    subtext: string;
    deliverables: Array<{
      title: string;
      desc: string;
    }>;
    button: string;
  };
  questions: {
    eyebrow: string;
    heading: string;
    faqs: Array<{
      question: string;
      answer: string;
    }>;
  };
  closing: {
    heading: string;
    button: string;
    city: string;
    rights: string;
    bciNotice: string;
  };
  stickyBar: {
    button: string;
  };
}

const TRANSLATIONS: Record<Language, Translations> = {
  en: {
    topBar: {
      whatChanges: 'What changes',
      sampleBuilds: 'Sample builds',
      calculator: 'Calculator',
      howItWorks: 'How it works',
      questions: 'Questions',
      freeAuditCall: 'Free audit call',
      toggleLabel: 'Language',
    },
    hero: {
      pill: 'For solo advocates in Chittoor',
      headline: 'You lose new clients every time you are in court.',
      subtext: 'When you cannot take calls during hearings, an instant WhatsApp message acknowledges your caller and lets them book a time to talk.',
      button: 'Book a free audit call',
      subline: 'Free 1:1 call. You leave with a plan to grow your practice with AI.',
      chatCaption: 'Example chat',
    },
    phoneMockup: {
      tabCallback: 'Callback fix',
      tabIntake: 'Telugu intake',
      tabBooking: 'Diary booking',
      headerTitle: 'Advocate Chambers',
      headerStatus: 'online • Chittoor Court',
      today: 'Today',
      directAppointment: 'Direct Chambers Appointment:',
      typeMessage: 'Message',
    },
    marquee: {
      row1: [
        'The Court Hours Callback Fix',
        'Bilingual Telugu and English Intake',
        'Chambers Consultation Booking',
      ],
      row2: [
        'FOR SOLO ADVOCATES',
        'CHITTOOR',
        'RUNS ON YOUR WHATSAPP',
      ],
    },
    whatChanges: {
      eyebrow: 'Your daily practice',
      heading: 'What changes for you',
    },
    sampleBuilds: {
      eyebrow: 'Built for your practice',
      heading: 'Sample builds',
      sampleBuildLabel: 'Sample build',
      whatYouGet: 'What you get',
      whatChangesForYou: 'What changes for you',
    },
    setupItems: [
      {
        title: 'The Court Hours Callback Fix',
        summary: 'A WhatsApp auto reply goes out when a client calls and you cannot pick up, so they know you got the call and can book a time to talk.',
        cardProblem: 'You cannot take client calls during court proceedings',
        cardChange: 'Callers immediately get a respectful WhatsApp acknowledgement with your consultation calendar, so they never dial another advocate in Chittoor.',
        badge: 'Advocate Desk • Missed call reply sent',
        alt: 'Legal clerk at advocate office front desk in Chittoor attending to a consultation inquiry on mobile phone',
        whatYouGet: 'An automated WhatsApp greeting triggered whenever a client calls your mobile during court hours and you cannot answer.',
        whatChangesForYou: 'Your callers know you received their call, understand you are appearing before the bench, and have a clear way to reach you.',
      },
      {
        title: 'Bilingual Telugu and English Intake',
        summary: 'The member writes the reply in Telugu or English, in your voice, asking the key case dispute details.',
        cardProblem: 'Your callers explain their dispute in Telugu or English',
        cardChange: 'The intake message responds in your voice in their chosen language, capturing the core issue while you focus on your arguments.',
        badge: 'నమస్కారం, కోర్టు విచారణలో ఉన్నాను. మీ కేసుకు సంబంధించి వివరాలు ఇక్కడ తెలపండి.',
        alt: 'Senior advocate in Chittoor chamber reviewing case schedule and client notes on mobile between hearings',
        whatYouGet: 'Intake questions crafted in your personal voice in Telugu or English, tailored to legal inquiries in Chittoor courts.',
        whatChangesForYou: 'You see the client\'s case topic, urgency, and preferred language before you pick up the phone to talk.',
      },
      {
        title: 'Chambers Consultation Booking',
        summary: 'You answer a few questions once and check it before it goes live, allowing clients to pick available slots.',
        cardProblem: 'You spend your evenings returning calls to no response',
        cardChange: 'Prospective clients select an open consultation slot directly, so your appointment book is already organized when you step out of court.',
        badge: 'Consultation confirmed • Chambers meeting scheduled',
        alt: 'Relieved client in Chittoor holding mobile phone after booking an advocate consultation',
        whatYouGet: 'A direct scheduling link that offers only your open chamber hours between court hearings or after filing hours.',
        whatChangesForYou: 'You walk out of the courtroom to confirmed client meetings instead of missed calls and lost cases.',
      },
    ],
    proofCalculator: {
      heading: 'What missed appointments cost you',
      subtext: 'Calculate how many consultations slip away while you are standing before the bench.',
      yourNumbers: 'Your numbers',
      slider1Label: 'Clients calling you a month',
      slider1Min: '10 calls',
      slider1Max: '100 calls',
      slider2Label: 'Share who miss their appointment',
      slider3Label: 'Average consultation or case fee',
      moneyLostMonth: 'Money lost a month',
      moneyLostYear: 'Money lost a year',
      estimateNote: 'Your estimate. We go through it on the free audit call.',
      button: 'Book a free audit call',
    },
    howItWorks: {
      eyebrow: 'Simple three-step rollout',
      heading: 'How it works',
      steps: [
        {
          num: '01',
          title: 'Book your free audit call',
          desc: 'Pick a slot on our calendar. We review how many calls you miss while arguing cases in Chittoor.',
        },
        {
          num: '02',
          title: 'Get your plan',
          desc: 'You leave with a tailored workflow, intake questions in Telugu or English, and a clear price for your practice.',
        },
        {
          num: '03',
          title: 'We set it up on your WhatsApp',
          desc: 'You answer a few questions once and check it before it goes live. We configure everything on your phone.',
        },
      ],
    },
    founder: {
      name: 'Murali Krishna',
      role: 'Founder, VakilDesk',
      about: 'We help solo advocates in Chittoor stop losing clients while they are in court.',
      button: 'Book a free call with Murali',
    },
    auditPanel: {
      heading: 'Get your AI growth plan in a free 1:1 call',
      subtext: 'Spend time with Murali on a free call to review your practice intake and walk away with a ready-to-deploy plan.',
      deliverables: [
        {
          title: 'Where you lose clients today',
          desc: 'We map your incoming calls during court hearing hours to identify where prospective matters are currently slipping away.',
        },
        {
          title: 'What to automate first',
          desc: 'A prioritized intake workflow showing your exact missed call response, case inquiries, and chamber calendar slots.',
        },
        {
          title: 'A clear price for your practice',
          desc: 'You receive transparent, all-inclusive pricing tailored specifically to your practice before you decide on anything.',
        },
      ],
      button: 'Book a free audit call',
    },
    questions: {
      eyebrow: 'Clear answers',
      heading: 'Questions',
      faqs: [
        {
          question: 'Who is this for?',
          answer: 'This is built specifically for solo advocates in Chittoor who cannot answer client calls while court is in session and want to stop losing prospective cases.',
        },
        {
          question: 'What does it cost?',
          answer: 'It depends on your practice. You get a personalized plan and a clear price during your free audit call.',
        },
        {
          question: 'What do we set up?',
          answer: 'We set up the Court Hours Callback Fix on your WhatsApp. An auto reply goes out when a client calls and you cannot pick up, so they know you got the call and can book a time to talk. You answer a few questions once and check it before it goes live, and we do the rest. The reply is written in Telugu or English, in your voice.',
        },
        {
          question: 'How do you start?',
          answer: 'Book your free audit call. We review your current call flow, discuss your intake needs, and show you exactly how the callback fix works on your phone.',
        },
      ],
    },
    closing: {
      heading: 'Stop losing clients while you are in court.',
      button: 'Book a free audit call',
      city: 'Chittoor, Andhra Pradesh',
      rights: 'All rights reserved.',
      bciNotice: 'Technology workflow assistance for solo legal practitioners. Does not advertise or solicit legal work under Bar Council of India rules.',
    },
    stickyBar: {
      button: 'Book a free audit call',
    },
  },
  te: {
    topBar: {
      whatChanges: 'మార్పులు',
      sampleBuilds: 'నమూనాలు',
      calculator: 'క్యాలిక్యులేటర్',
      howItWorks: 'విధానం',
      questions: 'ప్రశ్నలు',
      freeAuditCall: 'ఉచిత ఆడిట్ కాల్',
      toggleLabel: 'భాష',
    },
    hero: {
      pill: 'చిత్తూరులోని సోలో న్యాయవాదుల కోసం',
      headline: 'మీరు కోర్టులో ఉన్న ప్రతిసారీ కొత్త క్లయింట్లను కోల్పోతున్నారు.',
      subtext: 'విచారణ సమయంలో మీరు కాల్స్ మాట్లాడలేనప్పుడు, మీ కాలర్‌కు తక్షణ WhatsApp సందేశం వెళ్లి, వారు మాట్లాడటానికి సమయం బుక్ చేసుకునే వీలు కల్పిస్తుంది.',
      button: 'ఉచిత ఆడిట్ కాల్ బుక్ చేయండి',
      subline: 'ఉచిత 1:1 కాల్. మీ ప్రాక్టీస్‌ను AIతో విస్తరించే ప్రణాళికతో మీరు బయలుదేరుతారు.',
      chatCaption: 'నమూనా చాట్',
    },
    phoneMockup: {
      tabCallback: 'కాల్ బ్యాక్ పరిష్కారం',
      tabIntake: 'తెలుగు ఇన్ టేక్',
      tabBooking: 'డైరీ బుకింగ్',
      headerTitle: 'న్యాయవాది ఛాంబర్స్',
      headerStatus: 'ఆన్‌లైన్ • చిత్తూరు కోర్టు',
      today: 'నేడు',
      directAppointment: 'డైరెక్ట్ ఛాంబర్స్ అపాయింట్‌మెంట్:',
      typeMessage: 'సందేశం రాయండి',
    },
    marquee: {
      row1: [
        'కోర్టు సమయాల కాల్ బ్యాక్ పరిష్కారం',
        'తెలుగు మరియు ఇంగ్లీష్ ద్విభాషా ఇన్ టేక్',
        'ఛాంబర్స్ కన్సల్టేషన్ బుకింగ్',
      ],
      row2: [
        'సోలో న్యాయవాదుల కోసం',
        'చిత్తూరు',
        'మీ WHATSAPP లో నడుస్తుంది',
      ],
    },
    whatChanges: {
      eyebrow: 'మీ రోజువారీ ప్రాక్టీస్',
      heading: 'మీ కోసం మారే అంశాలు',
    },
    sampleBuilds: {
      eyebrow: 'మీ ప్రాక్టీస్ కోసం రూపొందించబడింది',
      heading: 'నమూనా నిర్మాణాలు',
      sampleBuildLabel: 'నమూనా నిర్మాణం',
      whatYouGet: 'మీకు ఏమి లభిస్తుంది',
      whatChangesForYou: 'మీ కోసం మారే అంశాలు',
    },
    setupItems: [
      {
        title: 'కోర్టు సమయాల కాల్ బ్యాక్ పరిష్కారం',
        summary: 'కోర్టు సమయాల్లో క్లయింట్ కాల్ చేసినప్పుడు మీరు తీసుకోలేకపోతే WhatsApp ఆటో రిప్లై వెళ్తుంది.',
        cardProblem: 'కోర్టు విచారణల సమయంలో మీరు క్లయింట్ కాల్స్ తీసుకోలేరు',
        cardChange: 'కాలర్లకు వెంటనే మీ కన్సల్టేషన్ క్యాలెండర్‌తో గౌరవప్రదమైన WhatsApp సందేశం అందుతుంది, దాంతో వారు చిత్తూరులోని మరొక న్యాయవాదిని సంప్రదించరు.',
        badge: 'న్యాయవాది డెస్క్ • మిస్డ్ కాల్ రిప్లై పంపబడింది',
        alt: 'చిత్తూరు అడ్వకేట్ ఆఫీస్ ఫ్రంట్ డెస్క్ లో క్లయింట్ విచారణను ఫోన్‌లో చూస్తున్న సిబ్బంది',
        whatYouGet: 'కోర్టు సమయాల్లో క్లయింట్ మీ మొబైల్‌కు కాల్ చేసినప్పుడు మీరు తీసుకోలేకపోతే ఆటోమేటిక్ WhatsApp సందేశం వెళ్తుంది.',
        whatChangesForYou: 'మీరు కాల్ స్వీకరించారని, ప్రస్తుతం బెంచ్ ముందు ఉన్నారని కాలర్లకు తెలుస్తుంది మరియు మిమ్మల్ని సంప్రదించడానికి స్పష్టమైన మార్గం లభిస్తుంది.',
      },
      {
        title: 'తెలుగు మరియు ఇంగ్లీష్ ద్విభాషా ఇన్ టేక్',
        summary: 'మీ వ్యక్తిగత శైలిలో తెలుగు లేదా ఇంగ్లీషులో కేసు వివరాలను అడిగే సమాధానం రూపొందించబడుతుంది.',
        cardProblem: 'మీ కాలర్లు తమ వివాదాన్ని తెలుగు లేదా ఇంగ్లీషులో వివరిస్తారు',
        cardChange: 'మీరు మీ వాదనలపై దృష్టి పెట్టిన సమయంలో, ఇన్ టేక్ సందేశం వారి ఎంపిక భాషలో మీ గొంతుకతో స్పందించి ప్రధాన వివాదాన్ని సేకరిస్తుంది.',
        badge: 'నమస్కారం, కోర్టు విచారణలో ఉన్నాను. మీ కేసుకు సంబంధించి వివరాలు ఇక్కడ తెలపండి.',
        alt: 'చిత్తూరు ఛాంబర్‌లో విచారణల మధ్య మొబైల్‌లో కేసు వివరాలు పరిశీలిస్తున్న సీనియర్ న్యాయవాది',
        whatYouGet: 'చిత్తూరు కోర్టుల్లో చట్టపరమైన విచారణలకు అనుగుణంగా, తెలుగు లేదా ఇంగ్లీషులో మీ వ్యక్తిగత శైలిలో రూపొందించిన ఇన్ టేక్ ప్రశ్నలు.',
        whatChangesForYou: 'మీరు ఫోన్ మాట్లాడటానికి ముందే క్లయింట్ కేసుకు సంబంధించిన విషయం, అత్యవసరత మరియు ప్రాధాన్యత భాషను చూస్తారు.',
      },
      {
        title: 'ఛాంబర్స్ కన్సల్టేషన్ బుకింగ్',
        summary: 'మీరు ఒకసారి ప్రశ్నలకు సమాధానమిచ్చి సరిచూసుకుంటారు, తద్వారా క్లయింట్లు ఖాళీ స్లాట్లను బుక్ చేసుకోగలరు.',
        cardProblem: 'సాయంత్రాలు మీరు తిరిగి కాల్స్ చేస్తూ సమయం వృథా చేసుకుంటారు',
        cardChange: 'కొత్త క్లయింట్లు నేరుగా అందుబాటులో ఉన్న సమయాన్ని ఎంచుకుంటారు, కాబట్టి మీరు కోర్టు నుండి బయటకు వచ్చేసరికి మీ అపాయింట్‌మెంట్ డైరీ సిద్ధంగా ఉంటుంది.',
        badge: 'కన్సల్టేషన్ నిర్ధారించబడింది • ఛాంబర్స్ సమావేశం షెడ్యూల్ చేయబడింది',
        alt: 'చిత్తూరులో న్యాయవాది కన్సల్టేషన్ బుక్ చేసుకున్న తర్వాత ఫోన్ పట్టుకుని సంతోషంగా ఉన్న క్లయింట్',
        whatYouGet: 'కోర్టు విచారణల మధ్య లేదా ఫైలింగ్ సమయం తర్వాత మీ ఖాళీ ఛాంబర్ వేళలను మాత్రమే చూపే డైరెక్ట్ లింక్.',
        whatChangesForYou: 'మిస్డ్ కాల్స్ మరియు చేజారిన కేసుల బదులుగా, కోర్టు రూమ్ నుండి బయటకు వచ్చేసరికి నిర్ధారిత క్లయింట్ సమావేశాలు మీకు లభిస్తాయి.',
      },
    ],
    proofCalculator: {
      heading: 'మిస్సయిన అపాయింట్‌మెంట్లు మీకెంత నష్టం కలిగిస్తాయి',
      subtext: 'మీరు బెంచ్ ముందు నిలబడి వాదిస్తున్న సమయంలో ఎన్ని కన్సల్టేషన్లు చేజారిపోతున్నాయో లెక్కించండి.',
      yourNumbers: 'మీ అంచనా సంఖ్యలు',
      slider1Label: 'నెలకు మీకు కాల్ చేసే క్లయింట్లు',
      slider1Min: '10 కాల్స్',
      slider1Max: '100 కాల్స్',
      slider2Label: 'అపాయింట్‌మెంట్ తీసుకోని వారి శాతం',
      slider3Label: 'సగటు కన్సల్టేషన్ లేదా కేస్ ఫీజు',
      moneyLostMonth: 'నెలకు కోల్పోయే మొత్తం',
      moneyLostYear: 'సంవత్సరానికి కోల్పోయే మొత్తం',
      estimateNote: 'ఇది మీ అంచనా మాత్రమే. ఉచిత ఆడిట్ కాల్‌లో మేము దీనిని పరిశీలిస్తాము.',
      button: 'ఉచిత ఆడిట్ కాల్ బుక్ చేయండి',
    },
    howItWorks: {
      eyebrow: 'సరళమైన మూడు దశల ప్రక్రియ',
      heading: 'ఇది ఎలా పనిచేస్తుంది',
      steps: [
        {
          num: '01',
          title: 'మీ ఉచిత ఆడిట్ కాల్ బుక్ చేసుకోండి',
          desc: 'మా క్యాలెండర్‌లో ఒక సమయాన్ని ఎంచుకోండి. చిత్తూరులో కేసులు వాదిస్తున్న సమయంలో మీరు ఎన్ని కాల్స్ మిస్ అవుతున్నారో సమీక్షిస్తాము.',
        },
        {
          num: '02',
          title: 'మీ ప్రణాళికను పొందండి',
          desc: 'మీ ప్రాక్టీస్ కోసం తగిన వర్క్‌ఫ్లో, తెలుగు లేదా ఇంగ్లీషులో ఇన్ టేక్ ప్రశ్నలు మరియు స్పష్టమైన ధరతో కూడిన ప్రణాళిక మీకు లభిస్తుంది.',
        },
        {
          num: '03',
          title: 'మేము మీ WhatsApp లో సెటప్ చేస్తాము',
          desc: 'మీరు ఒకసారి కొన్ని ప్రశ్నలకు సమాధానమిచ్చి, ప్రత్యక్ష ప్రసారానికి ముందు తనిఖీ చేస్తారు. మేము మీ ఫోన్‌లో ప్రతిదీ సిద్ధం చేస్తాము.',
        },
      ],
    },
    founder: {
      name: 'మురళీ కృష్ణ',
      role: 'వ్యవస్థాపకుడు, VakilDesk',
      about: 'చిత్తూరులోని సోలో న్యాయవాదులు కోర్టులో ఉన్న సమయంలో క్లయింట్లను కోల్పోకుండా మేము సహాయం చేస్తాము.',
      button: 'మురళితో ఉచిత కాల్ బుక్ చేయండి',
    },
    auditPanel: {
      heading: 'ఉచిత 1:1 కాల్‌లో మీ AI వృద్ధి ప్రణాళికను పొందండి',
      subtext: 'మీ ప్రాక్టీస్ ఇన్ టేక్‌ను సమీక్షించడానికి మరియు సిద్ధంగా ఉన్న ప్రణాళికను పొందడానికి మురళితో ఉచిత కాల్‌లో సమయం గడపండి.',
      deliverables: [
        {
          title: 'నేడు మీరు క్లయింట్లను ఎక్కడ కోల్పోతున్నారు',
          desc: 'కోర్టు విచారణ వేళల్లో వచ్చే కాల్స్‌ను పరిశీలించి, కొత్త కేసులు ఎక్కడ చేజారిపోతున్నాయో మేము గుర్తిస్తాము.',
        },
        {
          title: 'మొదట వేటిని ఆటోమేట్ చేయాలి',
          desc: 'మీ మిస్డ్ కాల్ రిప్లై, కేస్ విచారణలు మరియు ఛాంబర్ క్యాలెండర్ స్లాట్‌లను చూపే ప్రాధాన్యతా ఇన్ టేక్ వర్క్‌ఫ్లో.',
        },
        {
          title: 'మీ ప్రాక్టీస్ కోసం స్పష్టమైన ధర',
          desc: 'మీరు ఏదైనా నిర్ణయం తీసుకునే ముందే మీ ప్రాక్టీస్‌కు తగిన పారదర్శకమైన పూర్తి ధరను అందుకుంటారు.',
        },
      ],
      button: 'ఉచిత ఆడిట్ కాల్ బుక్ చేయండి',
    },
    questions: {
      eyebrow: 'స్పష్టమైన సమాధానాలు',
      heading: 'ప్రశ్నలు',
      faqs: [
        {
          question: 'ఇది ఎవరి కోసం?',
          answer: 'కోర్టు నడుస్తున్న సమయంలో క్లయింట్ కాల్స్ తీసుకోలేక, కొత్త కేసులను కోల్పోకూడదనుకునే చిత్తూరులోని సోలో న్యాయవాదుల కోసం ఇది ప్రత్యేకంగా రూపొందించబడింది.',
        },
        {
          question: 'దీనికి ఎంత ఖర్చవుతుంది?',
          answer: 'ఇది మీ ప్రాక్టీస్ అవసరాలపై ఆధారపడి ఉంటుంది. మీ ఉచిత ఆడిట్ కాల్ సమయంలో వ్యక్తిగత ప్రణాళిక మరియు స్పష్టమైన ధరను పొందుతారు.',
        },
        {
          question: 'మేము ఏమి సెటప్ చేస్తాము?',
          answer: 'మేము మీ WhatsApp లో కోర్టు సమయాల కాల్ బ్యాక్ పరిష్కారాన్ని సెటప్ చేస్తాము. క్లయింట్ కాల్ చేసినప్పుడు మీరు తీసుకోలేకపోతే ఆటో రిప్లై వెళ్తుంది, దాంతో మీరు కాల్ చూశారని వారికి తెలుస్తుంది మరియు మాట్లాడటానికి సమయం బుక్ చేసుకుంటారు. మీరు ఒకసారి కొన్ని ప్రశ్నలకు సమాధానమిచ్చి లైవ్ అయ్యే ముందు చెక్ చేస్తారు, మిగిలిన పని మేము చూసుకుంటాము. మీ శైలిలోనే తెలుగు లేదా ఇంగ్లీషులో ఈ సందేశం రాయబడుతుంది.',
        },
        {
          question: 'మీరు ఎలా ప్రారంభించాలి?',
          answer: 'మీ ఉచిత ఆడిట్ కాల్ బుక్ చేయండి. మేము మీ ప్రస్తుత కాల్ విధానాన్ని పరిశీలించి, ఇన్ టేక్ అవసరాలను చర్చించి, మీ ఫోన్‌లో కాల్ బ్యాక్ పరిష్కారం ఎలా పనిచేస్తుందో స్పష్టంగా చూపిస్తాము.',
        },
      ],
    },
    closing: {
      heading: 'మీరు కోర్టులో ఉన్న సమయంలో క్లయింట్లను కోల్పోవడం ఆపండి.',
      button: 'ఉచిత ఆడిట్ కాల్ బుక్ చేయండి',
      city: 'చిత్తూరు, ఆంధ్రప్రదేశ్',
      rights: 'సర్వహక్కులు ప్రత్యేకించబడ్డాయి.',
      bciNotice: 'సోలో న్యాయవాదుల కోసం సాంకేతిక వర్క్‌ఫ్లో సహాయం. బార్ కౌన్సిల్ ఆఫ్ ఇండియా నిబంధనల ప్రకారం చట్టపరమైన సేవలను ప్రచారం చేయదు లేదా అభ్యర్థించదు.',
    },
    stickyBar: {
      button: 'ఉచిత ఆడిట్ కాల్ బుక్ చేయండి',
    },
  },
};

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  toggleLanguage: () => void;
  isTelugu: boolean;
  t: Translations;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguageState] = useState<Language>(() => {
    try {
      const saved = localStorage.getItem('vakildesk_lang');
      if (saved === 'te' || saved === 'en') return saved;
    } catch {
      // ignore
    }
    return 'en';
  });

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    try {
      localStorage.setItem('vakildesk_lang', lang);
    } catch {
      // ignore
    }
  };

  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'te' : 'en');
  };

  useEffect(() => {
    document.documentElement.lang = language;
  }, [language]);

  return (
    <LanguageContext.Provider
      value={{
        language,
        setLanguage,
        toggleLanguage,
        isTelugu: language === 'te',
        t: TRANSLATIONS[language],
      }}
    >
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
