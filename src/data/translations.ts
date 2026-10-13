export type Language = "en" | "ar";

export interface Translations {
  nav: {
    overview: string;
    firebot: string;
    projects: string;
    skills: string;
    experience: string;
    credentials: string;
    education: string;
    about: string;
    contact: string;
    cv: string;
    quickLauncher: string;
  };
  hero: {
    statusBadge: string;
    headlineStart: string;
    headlineHighlight: string;
    headlineEnd: string;
    summary: string;
    viewProjects: string;
    viewCV: string;
    pillars: {
      java: { label: string; desc: string };
      database: { label: string; desc: string };
      fullstack: { label: string; desc: string };
      embedded: { label: string; desc: string };
    };
    diagram: {
      title: string;
      verifiedPipeline: string;
      layer1Title: string;
      layer1Badge: string;
      layer1Desc: string;
      connector1: string;
      layer2Title: string;
      layer2Badge: string;
      layer2Desc: string;
      connector2: string;
      layer3Title: string;
      layer3Badge: string;
      layer3Desc: string;
      reposCount: string;
      viewSignature: string;
    };
  };
  firebot: {
    badge: string;
    title: string;
    subtitle: string;
    badgeHardwareVerified: string;
    badgeRoboCup: string;
    badgeWebSocket: string;
    sectionProblemTitle: string;
    sectionProblemText: string;
    sectionArchTitle: string;
    sectionArchText: string;
    sectionContribTitle: string;
    sectionContribText: string;
    controlRoomTitle: string;
    controlRoomSubtitle: string;
    telemetryHeading: string;
    flameAngle: string;
    pingDistance: string;
    pumpRelay: string;
    telemetryLatency: string;
    statusActive: string;
    statusStandby: string;
    featuresTitle: string;
    challengesTitle: string;
    hardwareSpecsTitle: string;
    specs: {
      mcu: string;
      vision: string;
      telemetry: string;
      suppression: string;
    };
  };
  projects: {
    badge: string;
    title: string;
    subtitle: string;
    searchPlaceholder: string;
    categoryLabel: string;
    showing: string;
    of: string;
    projectsText: string;
    noResultsTitle: string;
    noResultsText: string;
    resetButton: string;
    whatIImplemented: string;
    deepCaseStudy: string;
    categories: {
      all: string;
      backend: string;
      fullstack: string;
      embedded: string;
      systems: string;
      crypto: string;
    };
  };
  skills: {
    badge: string;
    title: string;
    subtitle: string;
    categories: {
      backend: string;
      frontend: string;
      systems: string;
      embedded: string;
      databases: string;
      testing: string;
    };
    levelAdvanced: string;
    levelProficient: string;
    levelFamiliar: string;
  };
  experience: {
    badge: string;
    title: string;
    role: string;
    organization: string;
    locationDuration: string;
    summary: string;
    pillarsTitle: string;
    pillars: {
      p1Title: string;
      p1Desc: string;
      p2Title: string;
      p2Desc: string;
      p3Title: string;
      p3Desc: string;
      p4Title: string;
      p4Desc: string;
    };
    galleryTitle: string;
    gallerySubtitle: string;
    viewImage: string;
  };
  certifications: {
    badge: string;
    title: string;
    subtitle: string;
    viewCredential: string;
    issuerOracle: string;
    issuerMicrosoft: string;
    issuerRoboCup: string;
  };
  education: {
    badge: string;
    degree: string;
    institution: string;
    status: string;
    description: string;
    keyCoursework: string;
    academicStanding: string;
  };
  about: {
    badge: string;
    title: string;
    p1: string;
    p2: string;
    p3: string;
    pillars: {
      p1Title: string;
      p1Desc: string;
      p2Title: string;
      p2Desc: string;
      p3Title: string;
      p3Desc: string;
    };
  };
  contact: {
    badge: string;
    title: string;
    subtitle: string;
    nameLabel: string;
    emailLabel: string;
    subjectLabel: string;
    messageLabel: string;
    sendButton: string;
    sending: string;
    successMessage: string;
    copiedEmail: string;
    directMethods: string;
    location: string;
  };
  footer: {
    title: string;
    role: string;
    summary: string;
    rights: string;
    navTitle: string;
    socialTitle: string;
  };
  commandPalette: {
    placeholder: string;
    noResults: string;
    navGroup: string;
    actionsGroup: string;
    linksGroup: string;
    toggleThemeLight: string;
    toggleThemeDark: string;
    toggleLangAr: string;
    toggleLangEn: string;
    openCV: string;
    copyEmail: string;
    openGitHub: string;
    hintNavigate: string;
    hintSelect: string;
    emailCopied: string;
  };
  cvModal: {
    title: string;
    subtitle: string;
    downloadPdf: string;
    print: string;
    close: string;
  };
}

export const translations: Record<Language, Translations> = {
  en: {
    nav: {
      overview: "Overview",
      firebot: "FireBot",
      projects: "Projects",
      skills: "Skills",
      experience: "Experience",
      credentials: "Credentials",
      education: "Education",
      about: "About",
      contact: "Contact",
      cv: "CV",
      quickLauncher: "Quick Launcher",
    },
    hero: {
      statusBadge: "Available for Software Engineering Roles",
      headlineStart: "I Build ",
      headlineHighlight: "Reliable Software",
      headlineEnd: " and Connected Systems.",
      summary: "Software developer focused on backend engineering, full-stack applications, and integrated systems — combining software, databases, and embedded technology to solve practical problems.",
      viewProjects: "View My Projects",
      viewCV: "View & Download CV",
      pillars: {
        java: { label: "Java 21 & Spring Boot", desc: "Production REST APIs & JWT" },
        database: { label: "Oracle SQL & Databases", desc: "Certified schema & normalization" },
        fullstack: { label: "Full-Stack (Next.js / TS)", desc: "Strict type safety & web PWAs" },
        embedded: { label: "Embedded Systems & IoT", desc: "Firmware, telemetry & robotics" },
      },
      diagram: {
        title: "system_architecture.sys",
        verifiedPipeline: "VERIFIED PIPELINE",
        layer1Title: "1. Hardware Edge & Firmware",
        layer1Badge: "Real-Time",
        layer1Desc: "Arduino Mega 2560 & ESP32-CAM: Infrared flame arrays, line sensors, PWM motor actuation, optical video stream.",
        connector1: "Serial / WebSockets Telemetry",
        layer2Title: "2. Backend & Data Persistence",
        layer2Badge: "ACID Compliance",
        layer2Desc: "Spring Boot 3, Java 21 LTS, Oracle Database & PostgreSQL: Stateless JWT authentication, RBAC filters, HikariCP.",
        connector2: "RESTful JSON / WebSocket Feeds",
        layer3Title: "3. Client Applications & Control Room",
        layer3Badge: "Accessible UI",
        layer3Desc: "Next.js 14, TypeScript (Strict), Java Swing (FlatLaf), and PWA: Live telemetry monitors, responsive dashboards.",
        reposCount: "26 Repositories Synchronized on GitHub",
        viewSignature: "View Signature Project →",
      },
    },
    firebot: {
      badge: "SIGNATURE CASE STUDY & EMBEDDED ROBOTICS",
      title: "Troy FireBot — Autonomous IoT Firefighting Robot",
      subtitle: "Autonomous embedded line-tracking robot with flame telemetry, ESP32-CAM stream, and WebSocket telemetry control room.",
      badgeHardwareVerified: "Hardware Verified (Mega 2560)",
      badgeRoboCup: "RoboCup MICA 2023 Competitor",
      badgeWebSocket: "Low-Latency WebSocket Bridge",
      sectionProblemTitle: "The Engineering Problem",
      sectionProblemText: "Traditional industrial firefighting in hazardous chemical storage and automated facilities exposes human responders to toxic gases, thermal shock, and structural collapse. A viable robotic intervention system requires real-time thermal telemetry, deterministic obstacle avoidance, low-latency visual confirmation, and an instant manual override control room.",
      sectionArchTitle: "Three-Tier Architecture",
      sectionArchText: "Three-tier architecture: (1) Hardware edge execution on Arduino Mega running real-time sensor loops and PID motor controls; (2) Telemetry and optical streaming bridge via ESP32-CAM transmitting JPEG frames over HTTP/MJPEG; (3) Central command station powered by Node.js, Express, and WebSockets for live parameter calibration and manual override.",
      sectionContribTitle: "Individual Technical Contribution",
      sectionContribText: "Engineered microcontroller firmware (sensor polling, flame triangulation, line sensor thresholding, relay-driven water pump triggers) and integrated the WebSocket communication pipeline bridging serial data to the browser interface.",
      controlRoomTitle: "Live Control Room & Telemetry Station",
      controlRoomSubtitle: "Real-time bidirectional telemetry dials, optical camera stream, and emergency overrides.",
      telemetryHeading: "Telemetry Dials",
      flameAngle: "Flame Direction Array",
      pingDistance: "Proximity Clearance",
      pumpRelay: "Extinguisher Pump",
      telemetryLatency: "WebSocket Telemetry Latency",
      statusActive: "ARMED & ENGAGED",
      statusStandby: "STANDBY / CLEAR",
      featuresTitle: "Key Verified Engineering Features",
      challengesTitle: "Technical Challenges & Engineering Solutions",
      hardwareSpecsTitle: "Physical Hardware & Firmware Specifications",
      specs: {
        mcu: "Microcontroller: Arduino Mega 2560 (16MHz AVR)",
        vision: "Optical Stream: ESP32-CAM (Wi-Fi 802.11 b/g/n, OV2640)",
        telemetry: "Telemetry Pipeline: Bidirectional WebSockets / Serial UART",
        suppression: "Suppression: 5V Relay-driven Submersible Pump & Multi-Flame Array",
      },
    },
    projects: {
      badge: "PORTFOLIO CODEBASES & CASE STUDIES",
      title: "Verified Engineering Projects",
      subtitle: "Selected projects demonstrating actual backend architecture, systems programming, and hardware-software integration. Each project represents verifiable code published on GitHub.",
      searchPlaceholder: "Search by technology, keyword, or concept (e.g. 'Java', 'Spring', 'JWT', 'Arduino', 'C++', 'SQL')...",
      categoryLabel: "Category:",
      showing: "Showing",
      of: "of",
      projectsText: "projects",
      noResultsTitle: "No matching projects found",
      noResultsText: "No projects matched your query. Try resetting filters or searching another keyword.",
      resetButton: "Reset Search & Filters",
      whatIImplemented: "What I Implemented",
      deepCaseStudy: "Deep Case Study",
      categories: {
        all: "All",
        backend: "Backend & APIs",
        fullstack: "Full-Stack Web",
        embedded: "Embedded & IoT",
        systems: "Systems & C++",
        crypto: "Cryptography",
      },
    },
    skills: {
      badge: "EVIDENCE-BACKED TECHNICAL SKILLS",
      title: "Technical Competencies & Verified Stack",
      subtitle: "Every skill listed is backed by working code, repository history, and real architectural implementations.",
      categories: {
        backend: "Backend & Enterprise APIs",
        frontend: "Frontend & Full-Stack Web",
        systems: "Systems & C++ Programming",
        embedded: "Embedded Systems, Robotics & IoT",
        databases: "Databases & Data Architecture",
        testing: "Applied Cryptography, Security & Tooling",
      },
      levelAdvanced: "Advanced",
      levelProficient: "Proficient",
      levelFamiliar: "Working Knowledge",
    },
    experience: {
      badge: "EXPERIENCE & COMMUNITY INVOLVEMENT",
      title: "HR Team Member — GDG NCTU",
      role: "HR Team Member",
      organization: "Google Developer Groups on Campus — NCTU",
      locationDuration: "NCTU Campus · Two Sessions (2025–2026)",
      summary: "Contributed to HR and community operations across two sessions at GDG NCTU, supporting member engagement, team coordination, communication, and structured follow-up processes.",
      pillarsTitle: "Core Responsibilities & Operations",
      pillars: {
        p1Title: "Member Onboarding & Track Integration",
        p1Desc: "Facilitated structured onboarding for new student developers across technical tracks (Web, AI, Mobile, Embedded).",
        p2Title: "Team Communication & Coordination",
        p2Desc: "Maintained clear operational channels between committee leads, workshop organizers, and general members.",
        p3Title: "Attendance & Milestone Tracking",
        p3Desc: "Documented member participation across sessions, meetings, and developer workshops with rigorous follow-up.",
        p4Title: "Feedback & Member Development",
        p4Desc: "Conducted internal check-ins and performance reviews, ensuring healthy team dynamics and constructive feedback.",
      },
      galleryTitle: "Community Activity & Team Operations Gallery",
      gallerySubtitle: "Photographic documentation from internal sessions, technical workshops, and campus community meetings.",
      viewImage: "Inspect High-Res Photo",
    },
    certifications: {
      badge: "VERIFIED CREDENTIALS & CERTIFICATIONS",
      title: "Industry Certifications & Credentials",
      subtitle: "Verified credentials from Oracle Academy, Microsoft Technology Associate, and RoboCup Egypt.",
      viewCredential: "View Certificate Document",
      issuerOracle: "Oracle Academy",
      issuerMicrosoft: "Microsoft",
      issuerRoboCup: "RoboCup Egypt & MICA",
    },
    education: {
      badge: "ACADEMIC FOUNDATIONS",
      degree: "Bachelor of Information & Communications Technology (ICT)",
      institution: "New Cairo Technological University (NCTU)",
      status: "Year 2 — Currently Enrolled (Expected Graduation: 2028)",
      description: "Rigorous technological curriculum emphasizing applied computer science, software engineering architectures, database modeling, and embedded systems.",
      keyCoursework: "Relevant Coursework: Data Structures & Algorithms, Object-Oriented Programming (C++ & Java), Relational Database Management Systems (Oracle SQL), Computer Networks & Protocols, Embedded Microcontroller Systems, Operating Systems Concepts.",
      academicStanding: "Academic Focus: Software Engineering & Enterprise Backend Systems",
    },
    about: {
      badge: "ENGINEERING MINDSET & PHILOSOPHY",
      title: "Software Engineering from First Principles",
      p1: "I approach software development with an engineering discipline rooted in systems thinking. Rather than relying on superficial boilerplates, I prioritize understanding what happens beneath the abstractions — from CPU cycles and memory allocations in C++ to database execution plans in Oracle SQL and stateless security filter chains in Spring Boot.",
      p2: "My experience spans both software and hardware realms. Building physical robots like Troy FireBot taught me the unforgiving reality of edge constraints, sensor jitter, and network latency — lessons that directly inform how I design resilient, fault-tolerant backend architectures today.",
      p3: "I value type safety, deterministic testing, clean domain separation, and clear communication. Whether organizing developer tracks at GDG NCTU or shipping production-ready REST APIs, my goal is always to deliver software that is reliable, secure, and maintainable.",
      pillars: {
        p1Title: "Reliability Over Hype",
        p1Desc: "Prioritizing solid architecture, strict types, and thorough testing over fragile trends.",
        p2Title: "Full-Spectrum Perspective",
        p2Desc: "Bridging the gap between low-level hardware firmware and high-level enterprise APIs.",
        p3Title: "Continuous Discipline",
        p3Desc: "Constantly refining skills through production-quality projects, certifications, and community leadership.",
      },
    },
    contact: {
      badge: "LET'S CONNECT",
      title: "Let's Discuss Software Engineering Opportunities",
      subtitle: "I am actively seeking backend, full-stack, and software engineering roles. Reach out directly or send a message below.",
      nameLabel: "Your Name",
      emailLabel: "Your Email Address",
      subjectLabel: "Subject",
      messageLabel: "Message",
      sendButton: "Send Message",
      sending: "Sending...",
      successMessage: "Thank you! Your message has been prepared.",
      copiedEmail: "Email copied to clipboard!",
      directMethods: "Direct Contact Information",
      location: "Cairo, Egypt",
    },
    footer: {
      title: "Hossam Ahmed",
      role: "Software Developer | Backend & Systems Engineer",
      summary: "Committed to engineering reliable, secure, and verifiable software across backend APIs, modern web platforms, and embedded robotics.",
      rights: "© 2026 Hossam Ahmed. All rights reserved.",
      navTitle: "Navigation",
      socialTitle: "Profiles & Connect",
    },
    commandPalette: {
      placeholder: "Search commands, sections, or actions (e.g., 'Projects', 'CV', 'Theme')...",
      noResults: "No matching commands found for",
      navGroup: "Navigation",
      actionsGroup: "Actions",
      linksGroup: "Links",
      toggleThemeLight: "Switch to Light Mode",
      toggleThemeDark: "Switch to Dark Mode",
      toggleLangAr: "التبديل إلى اللغة العربية",
      toggleLangEn: "Switch to English",
      openCV: "Open & Print Verified CV",
      copyEmail: "Copy Email (Kabtinhosa@yahoo.com)",
      openGitHub: "Open GitHub Profile (@HossamAhmedSoft)",
      hintNavigate: "↑↓ Navigate",
      hintSelect: "↵ Select",
      emailCopied: "Email copied to clipboard!",
    },
    cvModal: {
      title: "Verified Curriculum Vitae",
      subtitle: "Hossam Ahmed — Software Developer & Systems Engineer",
      downloadPdf: "Download PDF",
      print: "Print CV",
      close: "Close",
    },
  },
  ar: {
    nav: {
      overview: "نظرة عامة",
      firebot: "مشروع فايربوت",
      projects: "المشاريع",
      skills: "المهارات",
      experience: "الخبرات",
      credentials: "الشهادات",
      education: "التعليم",
      about: "من أنا",
      contact: "تواصل معي",
      cv: "السيرة الذاتية",
      quickLauncher: "لوحة الأوامر",
    },
    hero: {
      statusBadge: "متاح لفرص العمل في هندسة البرمجيات",
      headlineStart: "أبني ",
      headlineHighlight: "برمجيات موثوقة",
      headlineEnd: " وأنظمة متصلة ومتكاملة.",
      summary: "مطور برمجيات متخصص في بناء الأنظمة الخلفية عالية الاعتمادية، والتطبيقات المتكاملة (Full-Stack)، والأنظمة المدمجة (Embedded IoT) — أربط بين هندسة الكود، وقواعد البيانات، ومكونات العتاد لحل المشكلات الواقعية.",
      viewProjects: "استعرض المشاريع",
      viewCV: "عرض وتحميل السيرة الذاتية",
      pillars: {
        java: { label: "Java 21 & Spring Boot", desc: "واجهات برمجية RESTful وتأمين JWT" },
        database: { label: "Oracle SQL وقواعد البيانات", desc: "تصميم جداول معتمد ومعايير تطبيع قياسية" },
        fullstack: { label: "تطبيقات الويب (Next.js / TS)", desc: "كتابة كود منضبط وتطبيقات PWA" },
        embedded: { label: "الأنظمة المدمجة وإنترنت الأشياء", desc: "برمجة عتاد، قياس عن بُعد، وروبوتات" },
      },
      diagram: {
        title: "system_architecture.sys",
        verifiedPipeline: "معمارية برمجية موثقة",
        layer1Title: "1. العتاد والأنظمة المدمجة (Edge Hardware)",
        layer1Badge: "زمن استجابة فوري",
        layer1Desc: "Arduino Mega 2560 و ESP32-CAM: حساسات اللهب بالأشعة تحت الحمراء، تتبع المسار، تحكم محركات PWM، وبث مرئي حي.",
        connector1: "قنوات القياس عن بُعد عبر Serial / WebSockets",
        layer2Title: "2. الأنظمة الخلفية وتكامل البيانات (Backend Core)",
        layer2Badge: "معاملات ACID آمنة",
        layer2Desc: "Spring Boot 3، Java 21 LTS، Oracle Database و PostgreSQL: مصادقة JWT بدون حالة، ترشيح الصلاحيات RBAC، وإدارة اتصالات HikariCP.",
        connector2: "تدفق البيانات عبر RESTful JSON و WebSockets",
        layer3Title: "3. واجهات المستخدم وغرف التحكم (Client Applications)",
        layer3Badge: "واجهات سهلة وتفاعلية",
        layer3Desc: "Next.js 14، TypeScript الصارم، Java Swing (FlatLaf)، وتطبيقات PWA: شاشات متابعة ومؤشرات تحكم فورية.",
        reposCount: "26 مستودع برمجي متزامن ومفتوح على GitHub",
        viewSignature: "استكشف المشروع المميز →",
      },
    },
    firebot: {
      badge: "دراسة حالة مميزة وهندسة أنظمة مدمجة",
      title: "روبوت إطفاء الحرائق الذكي المتصل بالسحاب (Troy FireBot)",
      subtitle: "روبوت مدمج ذاتي الحركة لتتبع المسار وكشف النيران، مزود ببث بصري ESP32-CAM وغرفة تحكم لحظية عبر WebSockets.",
      badgeHardwareVerified: "موثق ومختبر عملياً على عتاد Mega 2560",
      badgeRoboCup: "مشارك في مسابقة RoboCup MICA 2023",
      badgeWebSocket: "اتصال فوري عالي السرعة عبر WebSockets",
      sectionProblemTitle: "المشكلة الهندسية",
      sectionProblemText: "إطفاء الحرائق في المخازن الكيميائية والمنشآت الصناعية المؤتمتة يعرض رجال الإطفاء لمخاطر الغازات السامة والانهيارات الإنشائية. يتطلب الحل الروبوتي قياساً حرارياً لحظياً، وتفادياً ديناميكياً للعوائق، وتأكيداً مرئياً عبر الفيديو مع غرفة تحكم للتدخل اليدوي الفوري.",
      sectionArchTitle: "البنية المعمارية ثلاثية الطبقات",
      sectionArchText: "معمارية متكاملة من ثلاث طبقات: (1) طبقة العتاد على ميكروكنترولر Arduino Mega لمعالجة الحساسات والتحكم بالمحركات، (2) طبقة البث البصري عبر ESP32-CAM لنقل إطارات الفيديو، (3) غرفة القيادة المركزية المبنية على Node.js و WebSockets للمعايرة والتحكم عن بُعد.",
      sectionContribTitle: "مساهمتي البرمجية والهندسية",
      sectionContribText: "قمت ببرمجة الفيرموير للعتاد (قراءة الحساسات، حساب زاوية اللهب، معايرة حساسات المسار، وإطلاق مضخة الإطفاء) وبناء خط الاتصال البرمجي بالكامل لربط بيانات السيريال بالمتصفح.",
      controlRoomTitle: "غرفة التحكم ومحطة القياس عن بُعد (Control Room)",
      controlRoomSubtitle: "مؤشرات لحظية لبيانات الحساسات، بث الكاميرا البصري، وأزرار التحكم والإطفاء اليدوي.",
      telemetryHeading: "مؤشرات القياس اللحظية",
      flameAngle: "مصفوفة توجيه اللهب",
      pingDistance: "حساس المسافة الأمامية",
      pumpRelay: "مضخة إخماد الحريق",
      telemetryLatency: "زمن استجابة الاتصال",
      statusActive: "مفعل وجاهز للإخماد",
      statusStandby: "في وضع الاستعداد / المسار آمن",
      featuresTitle: "أبرز الميزات الهندسية الموثقة",
      challengesTitle: "التحديات التقنية والحلول المبتكرة",
      hardwareSpecsTitle: "مواصفات العتاد والفيرموير الفعلي",
      specs: {
        mcu: "المعالج الدقيق: Arduino Mega 2560 (16MHz AVR)",
        vision: "البث البصري: ESP32-CAM (Wi-Fi 802.11 b/g/n, OV2640)",
        telemetry: "بروتوكول الاتصال: WebSockets ثنائي الاتجاه / Serial UART",
        suppression: "الإخماد: مضخة غاطسة عبر ريلاي 5V ومصفوفة حساسات لهب متعددة الزوايا",
      },
    },
    projects: {
      badge: "المشاريع البرمجية ودراسات الحالة",
      title: "مشاريع برمجية موثقة ومعتمدة",
      subtitle: "مشاريع حقيقية توضح مهارات المعمارية البرمجية، وهندسة النظم، وتكامل العتاد مع الويب، وجميعها موثقة بأكواد حقيقية على GitHub.",
      searchPlaceholder: "ابحث بالتقنية، أو الكلمة المفتاحية، أو المفهوم (مثل Java, Spring, JWT, Arduino, C++, SQL)...",
      categoryLabel: "التصنيف:",
      showing: "عرض",
      of: "من أصل",
      projectsText: "مشاريع",
      noResultsTitle: "لم يتم العثور على مشاريع مطابقة",
      noResultsText: "لم تتطابق نتائج مع بحثك. جرب إعادة تعيين الفلاتر أو البحث بكلمة مفتاحية أخرى.",
      resetButton: "إعادة تعيين البحث والتصنيفات",
      whatIImplemented: "ما قمت بتنفيذه برمجياً",
      deepCaseStudy: "دراسة حالة تفصيلية",
      categories: {
        all: "الكل",
        backend: "الأنظمة الخلفية والـ APIs",
        fullstack: "تطبيقات الويب المتكاملة",
        embedded: "الأنظمة المدمجة والروبوتات",
        systems: "الأنظمة ولغة C++",
        crypto: "التشفير وأمن المعلومات",
      },
    },
    skills: {
      badge: "مصفوفة المهارات المدعومة بأدلة عملية",
      title: "المهارات التقنية والأدوات المعتمدة",
      subtitle: "كل مهارة مدرجة هنا مدعومة بأكواد حقيقية، وسجلات في مستودعات Git، ومشاريع معمارية فعلية.",
      categories: {
        backend: "الأنظمة الخلفية والواجهات البرمجية للمؤسسات",
        frontend: "تطبيقات الويب المتكاملة والواجهات الحديثة",
        systems: "برمجة الأنظمة ولغة C++ الحديثة",
        embedded: "الأنظمة المدمجة، الروبوتات وإنترنت الأشياء",
        databases: "قواعد البيانات وهندسة تخزين البيانات",
        testing: "التشفير التطبيقي، الأمان وأدوات الاختبار",
      },
      levelAdvanced: "متقدم",
      levelProficient: "متمكن",
      levelFamiliar: "معرفة عملية",
    },
    experience: {
      badge: "الخبرات العملية والمجتمعية",
      title: "عضو فريق الموارد البشرية — GDG NCTU",
      role: "عضو فريق الموارد البشرية (HR Team Member)",
      organization: "مجتمع مطوري جوجل بجامعة مصر التكنولوجية الدولية (GDG NCTU)",
      locationDuration: "حرم الجامعة (NCTU) · موسمان متتاليان (2025–2026)",
      summary: "المساهمة في إدارة وتطوير العمليات المجتمعية والموارد البشرية عبر موسمين في مجتمع مطوري جوجل (GDG NCTU)، ودعم تأهيل الأعضاء والتنسيق الداخلي والتوثيق المنظم والمتابعة المستمرة.",
      pillarsTitle: "المهام والمسؤوليات الأساسية",
      pillars: {
        p1Title: "تأهيل ودمج الأعضاء في المسارات التقنية",
        p1Desc: "تسهيل جلسات الانضمام المنظمة للطلاب الجدد وتوزيعهم على المسارات المتخصصة (الويب، الذكاء الاصطناعي، الموبايل، والأنظمة المدمجة).",
        p2Title: "التواصل الداخلي والتنسيق بين اللجان",
        p2Desc: "إدارة قنوات التواصل المباشرة بين قادة المسارات التقنية ومنظمي ورش العمل وأعضاء المجتمع لضمان سير الأنشطة بسلاسة.",
        p3Title: "متابعة الحضور وتوثيق المهام الدورية",
        p3Desc: "تسجيل نسب الحضور والمشاركة في الورش التدريبية والاجتماعات، وإعداد تقارير دورية لمتابعة الإنجاز والالتزام.",
        p4Title: "تقييم الأداء والتطوير المستمر للأعضاء",
        p4Desc: "إجراء مقابلات تقييم دورية لتقديم تغذية راجعة بناءة تسهم في تطوير مهارات الأعضاء الشخصية والتقنية.",
      },
      galleryTitle: "معرض الصور التوثيقية لأنشطة الفريق والمجتمع",
      gallerySubtitle: "لقطات مصورة توثق الورش التدريبية، والاجتماعات الداخلية، والفعاليات المنعقدة داخل الحرم الجامعي.",
      viewImage: "عرض الصورة بدقة كاملة",
    },
    certifications: {
      badge: "الشهادات والاعتمادات الرسمية",
      title: "شهادات معتمدة من Oracle و Microsoft و RoboCup",
      subtitle: "شهادات مهنية موثقة في لغات البرمجة، وقواعد البيانات، والتنافس الروبوتي الإقليمي.",
      viewCredential: "عرض وثيقة الشهادة الرسمية",
      issuerOracle: "أكاديمية أوراكل (Oracle Academy)",
      issuerMicrosoft: "مايكروسوفت (Microsoft MTA)",
      issuerRoboCup: "مسابقة روبوكاب مصر وأكاديمية MICA",
    },
    education: {
      badge: "المسار الأكاديمي والتعليمي",
      degree: "بكالوريوس تكنولوجيا المعلومات والاتصالات (ICT)",
      institution: "جامعة مصر التكنولوجية الدولية بالقاهرة الجديدة (NCTU)",
      status: "السنة الثانية — مقيد حالياً (تاريخ التخرج المتوقع: 2028)",
      description: "منهج أكاديمي تكنولوجي مكثف يركز على علوم الحاسب التطبيقية، معمارية هندسة البرمجيات، نمذجة قواعد البيانات، والأنظمة المدمجة والشبكات.",
      keyCoursework: "المقررات الأكاديمية البارزة: هياكل البيانات والخوارزميات، البرمجة كائنية التوجه (C++ و Java)، أنظمة إدارة قواعد البيانات العلائقية (Oracle SQL)، شبكات الحاسب والبروتوكولات، معالجات الأنظمة المدمجة، ومفاهيم نظم التشغيل.",
      academicStanding: "التركيز الأكاديمي: هندسة البرمجيات وتطوير الأنظمة المؤسسية الخلفية",
    },
    about: {
      badge: "الفكر الهندسي والرؤية المهنية",
      title: "هندسة البرمجيات من المبادئ الأولية (First Principles)",
      p1: "أتعامل مع تطوير البرمجيات بمنهجية هندسية صارمة قائمة على التفكير النظمي. بدلاً من الاعتماد على القوالب الجاهزة والحلول السطحية، أحرص على فهم ما يدور في الأعماق — بدءاً من دورات المعالج وإدارة الذاكرة في C++، وحتى خطط تنفيذ الاستعلامات في Oracle SQL وسلاسل ترشيح الأمان في Spring Boot.",
      p2: "تمتد خبرتي لتشمل كلاً من البرمجيات والعتاد الفيزيائي؛ فبناء روبوتات حقيقية مثل Troy FireBot علمني مواجهة تحديات الواقع بدقة، مثل قيود العتاد المحدود، وتذبذب قراءات الحساسات، وتأخير شبكات الاتصال — وهي خبرات أستفيد منها مباشرة عند تصميم أنظمة خلفية مرنة ومقاومة للأعطال اليوم.",
      p3: "أؤمن بأهمية الانضباط البرمجي الصارم (Strict Typing)، والاختبارات التلقائية الموثوقة، والفصل الواضح بين طبقات النظام. وسواء كنت أنسق أعمال المسارات التقنية في GDG NCTU أو أبني واجهات برمجية إنتاجية، هدفي الدائم هو بناء برمجيات آمنة وعالية الاعتمادية وقابلة للتطوير على المدى الطويل.",
      pillars: {
        p1Title: "الاعتمادية أولاً",
        p1Desc: "إعطاء الأولوية للبنية المعمارية المتينة والاختبارات الشاملة قبل أي صيحات برمجية عابرة.",
        p2Title: "رؤية برمجية شاملة",
        p2Desc: "الربط بين برمجة الفيرموير منخفض المستوى والأنظمة السحابية والـ APIs المتقدمة.",
        p3Title: "انضباط وتعلم مستمر",
        p3Desc: "التطوير المستمر للمهارات من خلال مشاريع حقيقية، شهادات مهنية، ومشاركة مجتمعية فعالة.",
      },
    },
    contact: {
      badge: "تواصل مهني",
      title: "فلنبدأ الحديث عن فرصتك أو مشروعك القادم",
      subtitle: "أنا متاح حالياً لفرص العمل في هندسة الأنظمة الخلفية والبرمجيات المتكاملة. يسعدني تواصلك المباشر أو عبر النموذج أدناه.",
      nameLabel: "الاسم الكريم",
      emailLabel: "البريد الإلكتروني",
      subjectLabel: "الموضوع",
      messageLabel: "نص الرسالة",
      sendButton: "إرسال الرسالة",
      sending: "جاري الإرسال...",
      successMessage: "شكراً لك! تم تجهيز رسالتك بنجاح.",
      copiedEmail: "تم نسخ البريد الإلكتروني إلى الحافظة!",
      directMethods: "وسائل التواصل المباشرة",
      location: "القاهرة، مصر",
    },
    footer: {
      title: "حسام أحمد",
      role: "مطور برمجيات | مهندس أنظمة خلفية ومدمجة",
      summary: "ملتزم بهندسة برمجيات عالية الاعتمادية والأمان، تربط بين الأنظمة الخلفية، تطبيقات الويب الحديثة، والأنظمة الروبوتية المدمجة.",
      rights: "© 2026 حسام أحمد. جميع الحقوق محفوظة.",
      navTitle: "روابط سريعة",
      socialTitle: "الحسابات والتواصل",
    },
    commandPalette: {
      placeholder: "ابحث في الأوامر، الأقسام، أو الإجراءات (مثلاً 'المشاريع', 'السيرة الذاتية', 'الوضع الليلي')...",
      noResults: "لم يتم العثور على أوامر مطابقة لـ",
      navGroup: "التنقل السريع",
      actionsGroup: "الإجراءات والأدوات",
      linksGroup: "روابط خارجية",
      toggleThemeLight: "التبديل إلى الوضع النهاري (Light Mode)",
      toggleThemeDark: "التبديل إلى الوضع الليلي (Dark Mode)",
      toggleLangAr: "التبديل إلى اللغة العربية",
      toggleLangEn: "Switch to English",
      openCV: "عرض وطباعة السيرة الذاتية المعتمدة",
      copyEmail: "نسخ البريد الإلكتروني (Kabtinhosa@yahoo.com)",
      openGitHub: "فتح ملف GitHub الرسمي (@HossamAhmedSoft)",
      hintNavigate: "↑↓ للتنقل",
      hintSelect: "↵ للاختيار",
      emailCopied: "تم نسخ البريد الإلكتروني بنجاح!",
    },
    cvModal: {
      title: "السيرة الذاتية المعتمدة (Curriculum Vitae)",
      subtitle: "حسام أحمد — مهندس ومطور برمجيات",
      downloadPdf: "تحميل بصيغة PDF",
      print: "طباعة السيرة الذاتية",
      close: "إغلاق",
    },
  },
};
