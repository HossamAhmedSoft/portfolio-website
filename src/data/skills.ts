export interface SkillCategory {
  category: string;
  categoryAr: string;
  description: string;
  descriptionAr: string;
  skills: {
    name: string;
    level: "Advanced" | "Proficient" | "Working Knowledge";
    projectEvidence: string;
    projectEvidenceAr: string;
  }[];
}

export const skillCategories: SkillCategory[] = [
  {
    category: "Programming Languages",
    categoryAr: "لغات البرمجة الأساسية",
    description: "Core languages used across production backends, systems programming, and hardware firmware.",
    descriptionAr: "اللغات البرمجية المستخدمة في الأنظمة الخلفية، وبرمجة النظم، وفيرموير العتاد المدمج.",
    skills: [
      {
        name: "Java (JDK 17, 21 LTS, 25)",
        level: "Advanced",
        projectEvidence: "Employee Management API, Crypto Desktop Suite, Library Management System",
        projectEvidenceAr: "نظام إدارة الموظفين API، حزمة التشفير المكتبية، نظام إدارة المكتبات"
      },
      {
        name: "SQL (Oracle SQL & PostgreSQL)",
        level: "Advanced",
        projectEvidence: "Oracle Academy Awards (3x), Library System JDBC, Supabase Schemas",
        projectEvidenceAr: "شهادات Oracle Academy (3x)، قاعدة بيانات المكتبة JDBC، جداول Supabase"
      },
      {
        name: "TypeScript / JavaScript (ES6+)",
        level: "Proficient",
        projectEvidence: "GDG Operations Platform, MDBoutique PWA, Vanilla JS CRUD",
        projectEvidenceAr: "منصة إدارة عمليات GDG، متجر MDBoutique PWA، تطبيقات Vanilla JS"
      },
      {
        name: "C++ (C++17)",
        level: "Proficient",
        projectEvidence: "University Student Information System (SIS CLI)",
        projectEvidenceAr: "نظام معلومات الطلاب الجامعي (SIS CLI)"
      },
      {
        name: "Python 3",
        level: "Proficient",
        projectEvidence: "Classical Cryptography & Cipher Toolkit (69/69 Pytests)",
        projectEvidenceAr: "حزمة أدوات التشفير الكلاسيكي (اجتياز 69/69 اختبار Pytest)"
      },
      {
        name: "Embedded C / Arduino C++",
        level: "Proficient",
        projectEvidence: "Troy FireBot Autonomous Firmware, Dual Robotics Suite, LCD Calculator",
        projectEvidenceAr: "فيرموير روبوت الإطفاء Troy FireBot، روبوتات تتبع المسار، الآلة الحاسبة المدمجة"
      }
    ]
  },
  {
    category: "Backend & Systems Architecture",
    categoryAr: "الأنظمة الخلفية ومعمارية النظم",
    description: "Frameworks, protocols, and architectural patterns powering transactional backends and APIs.",
    descriptionAr: "أطر العمل والبروتوكولات والأنماط المعمارية لتشغيل الخوادم والواجهات البرمجية الآمنة.",
    skills: [
      {
        name: "Spring Boot 3 & 4",
        level: "Proficient",
        projectEvidence: "Employee Management REST API",
        projectEvidenceAr: "واجهة برمجة تطبيقات إدارة الموظفين والأقسام (REST API)"
      },
      {
        name: "Spring Security 6 & JWT",
        level: "Proficient",
        projectEvidence: "Stateless Token Authentication & RBAC Filters",
        projectEvidenceAr: "مصادقة التوكن عديمة الحالة (JWT) وترشيح الصلاحيات (RBAC)"
      },
      {
        name: "RESTful API Design",
        level: "Advanced",
        projectEvidence: "Standardized JSON Contracts, Global Exception Handlers, Status Codes",
        projectEvidenceAr: "عقود JSON قياسية، ومعالجة مركزية للاستثناءات وأكواد الحالة"
      },
      {
        name: "Node.js & Express",
        level: "Proficient",
        projectEvidence: "Troy FireBot Telemetry Server & WebSocket Relay",
        projectEvidenceAr: "خادم قياسات روبوت Troy FireBot وجسر اتصال WebSockets"
      },
      {
        name: "WebSockets & Serial I/O",
        level: "Proficient",
        projectEvidence: "Real-time bidirectional robot telemetry and serial control",
        projectEvidenceAr: "نقل القياسات الفوري ثنائي الاتجاه والتحكم عبر المنفذ التسلسلي"
      },
      {
        name: "Hibernate / JPA & HikariCP",
        level: "Proficient",
        projectEvidence: "Enterprise connection pooling and relational mappings",
        projectEvidenceAr: "إدارة مجمعات الاتصال عالية الأداء والربط العلائقي للكائنات (ORM)"
      }
    ]
  },
  {
    category: "Databases & Data Engineering",
    categoryAr: "قواعد البيانات وهندسة البيانات",
    description: "Relational modeling, transaction isolation, and query optimization.",
    descriptionAr: "النمذجة العلائقية، وعزل المعاملات (ACID)، وتحسين أداء الاستعلامات.",
    skills: [
      {
        name: "Oracle Database (11g/19c/21c)",
        level: "Advanced",
        projectEvidence: "Oracle Academy Certifications, JDBC Thin Driver Persistence",
        projectEvidenceAr: "شهادات أكاديمية أوراكل المعتمدة، وربط قواعد البيانات عبر JDBC Thin"
      },
      {
        name: "PostgreSQL & Supabase",
        level: "Proficient",
        projectEvidence: "GDG NCTU Platform, Row Level Security (RLS) policies",
        projectEvidenceAr: "منصة GDG NCTU، وسياسات أمان مستوى الصفوف (Row Level Security)"
      },
      {
        name: "MySQL / MariaDB",
        level: "Proficient",
        projectEvidence: "Equipment Maintenance Desktop System Database",
        projectEvidenceAr: "قاعدة بيانات نظام صيانة المعدات المكتبي"
      },
      {
        name: "Database Normalization (1NF–3NF)",
        level: "Advanced",
        projectEvidence: "Certified Oracle Database Design, Enterprise Schemas",
        projectEvidenceAr: "تصميم قواعد البيانات المعتمد من أوراكل ومخططات المؤسسات القياسية"
      }
    ]
  },
  {
    category: "Frontend & Web Engineering",
    categoryAr: "هندسة الواجهات وتطبيقات الويب",
    description: "Modern, responsive, and accessible client-side architectures.",
    descriptionAr: "معماريات واجهات مستخدم حديثة، متجاوبة، وسريعة الأداء.",
    skills: [
      {
        name: "Next.js 14 / 16 (App Router)",
        level: "Proficient",
        projectEvidence: "GDG Operations Platform, Portfolio Website",
        projectEvidenceAr: "منصة عمليات مجتمع GDG، وموقع البورتفوليو الهندسي"
      },
      {
        name: "React 19 & Hooks",
        level: "Proficient",
        projectEvidence: "Server and Client Components, State Management",
        projectEvidenceAr: "مكونات الخادم والعميل (Server/Client Components) وإدارة الحالة"
      },
      {
        name: "Tailwind CSS & Radix UI",
        level: "Proficient",
        projectEvidence: "Accessible components, responsive grid design, dark/light themes",
        projectEvidenceAr: "مكونات متوافقة مع معايير الوصول، وتصميم متجاوب للوضع الليلي والنهاري"
      },
      {
        name: "Progressive Web Apps (PWA)",
        level: "Proficient",
        projectEvidence: "MDBoutique Service Worker caching and offline manifest",
        projectEvidenceAr: "تخزين مؤقت عبر Service Worker ودعم العمل دون اتصال في متجر MDBoutique"
      },
      {
        name: "HTML5 Semantic & Vanilla CSS",
        level: "Advanced",
        projectEvidence: "Standards-compliant layouts, accessible keyboard navigation",
        projectEvidenceAr: "تخطيطات قياسية متوافقة مع المعايير وتنقل كامل عبر لوحة المفاتيح"
      }
    ]
  },
  {
    category: "Embedded Systems, Hardware & IoT",
    categoryAr: "الأنظمة المدمجة والعتاد وإنترنت الأشياء",
    description: "Microcontroller programming, sensor telemetry, and hardware-software integration.",
    descriptionAr: "برمجة المتحكمات الدقيقة، وقراءة الحساسات، والتكامل بين العتاد والبرمجيات.",
    skills: [
      {
        name: "Arduino Uno & Mega 2560",
        level: "Proficient",
        projectEvidence: "RoboCup Line-Follower, Troy FireBot Firmware, Hardware Calculator",
        projectEvidenceAr: "روبوت تتبع المسار RoboCup، وفيرموير Troy FireBot، وحاسبة العتاد"
      },
      {
        name: "ESP32 & ESP32-CAM",
        level: "Proficient",
        projectEvidence: "MJPEG Video Streamer, Wi-Fi Telemetry Transmitter",
        projectEvidenceAr: "بث الفيديو المباشر MJPEG، وإرسال بيانات الحساسات عبر Wi-Fi"
      },
      {
        name: "Sensor Telemetry & Actuation",
        level: "Proficient",
        projectEvidence: "Ultrasonic, Infrared, Flame Arrays, PWM H-Bridge Motor Drivers, Relays",
        projectEvidenceAr: "حساسات المسافة، والأشعة تحت الحمراء، واللهب، ودرايفرات المحركات PWM والريلاي"
      },
      {
        name: "Hardware Displays & Peripherals",
        level: "Proficient",
        projectEvidence: "HD44780 16x2 Parallel LCD, 4x4 Matrix Keypad scanning",
        projectEvidenceAr: "شاشات العرض الكريستالية LCD 16x2، ولوحات المفاتيح المصفوفية 4x4"
      }
    ]
  },
  {
    category: "DevOps, Testing & Quality",
    categoryAr: "إدارة الإصدارات والاختبارات وجودة الكود",
    description: "Version control hygiene, automated testing, and development workflow.",
    descriptionAr: "إدارة المستودعات البرمجية، والاختبارات الآلية، وضبط جودة البناء.",
    skills: [
      {
        name: "Git & GitHub Administration",
        level: "Advanced",
        projectEvidence: "Clean commit history, branch management, 22 verified public repositories",
        projectEvidenceAr: "سجل تعديلات منظم، وإدارة الفروع، و22 مستودعاً عاماً موثقاً على GitHub"
      },
      {
        name: "Automated Testing (Pytest, JUnit)",
        level: "Proficient",
        projectEvidence: "69/69 Pytest suite (100% pass rate in 0.023s), Maven test suites",
        projectEvidenceAr: "حزمة اختبارات Pytest (نجاح 69/69 بنسبة 100% في 0.023 ثانية)، واختبارات Maven"
      },
      {
        name: "TypeScript Strict Mode",
        level: "Proficient",
        projectEvidence: "Zero-error type safety across complete full-stack web platforms",
        projectEvidenceAr: "سلامة الأنواع البرمجية بدون أي أخطاء عبر منصات الويب المتكاملة"
      },
      {
        name: "Apache Maven",
        level: "Proficient",
        projectEvidence: "Dependency lifecycle, plugin configuration, multi-module packaging",
        projectEvidenceAr: "إدارة دورة حياة الاعتماديات، وإعداد الإضافات وحزم البناء"
      }
    ]
  },
  {
    category: "AI-Assisted Development & Engineering",
    categoryAr: "التطوير والهندسة المدعومة بالذكاء الاصطناعي",
    description: "Modern AI coding agents, structured prompt engineering, and disciplined 10-stage workflows.",
    descriptionAr: "وكلاء البرمجة الأذكياء، وهندسة الأوامر المهيكلة، وسير العمل المنظم من 10 مراحل.",
    skills: [
      {
        name: "Cursor (AI Code Editor)",
        level: "Proficient",
        projectEvidence: "Semantic codebase indexing, symbol-aware refactoring, multi-file diffs",
        projectEvidenceAr: "الفهرسة الدلالية للمشاريع، وإعادة الهيكلة الذكية وتعديلات الملفات المتعددة"
      },
      {
        name: "Google Antigravity",
        level: "Proficient",
        projectEvidence: "Agentic task orchestration, multi-file execution & CLI workflows",
        projectEvidenceAr: "تنظيم المهام عبر الوكلاء الأذكياء، والتنفيذ المتوازي والتحقق عبر التيرمينال"
      },
      {
        name: "Trae (Adaptive AI IDE)",
        level: "Proficient",
        projectEvidence: "Context-aware workspace exploration and rapid feature staging",
        projectEvidenceAr: "استكشاف مساحات العمل الواعي بالسياق وتجهيز الميزات البرمجية بسرعة"
      },
      {
        name: "Structured Prompt Engineering",
        level: "Advanced",
        projectEvidence: "Master Prompt Packages with context grounding, constraints & test guardrails",
        projectEvidenceAr: "بناء حزم أوامر هندسية متكاملة محددة بالسياق والقيود وضوابط الاختبار"
      },
      {
        name: "10-Stage Workflow Planning",
        level: "Advanced",
        projectEvidence: "Requirement decomposition, human-in-the-loop review, zero-error builds",
        projectEvidenceAr: "تفكيك المتطلبات، والمراجعة البشرية الدقيقة، واجتياز البناء بصفر أخطاء"
      }
    ]
  }
];
