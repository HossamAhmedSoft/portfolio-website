export interface ServiceCategory {
  id: string;
  name: string;
  shortDescription: string;
  valueProposition: string;
  iconName: string;
  deliverables: string[];
  suitableProjects: { id: string; title: string }[];
  clientRequirements: string[];
  contextualQuestions: {
    id: string;
    label: string;
    placeholder: string;
    type: "text" | "select" | "textarea";
    options?: string[];
    required: boolean;
  }[];
  ar: {
    name: string;
    shortDescription: string;
    valueProposition: string;
    deliverables: string[];
    clientRequirements: string[];
  };
}

export const servicesCatalog: ServiceCategory[] = [
  {
    id: "website-development",
    name: "Website Development",
    shortDescription: "High-performance, responsive business websites, portfolios, and landing pages with clean code and modern technical SEO.",
    valueProposition: "Deliver visually striking, accessible, and fast web experiences engineered with modern web standards, structured metadata, and responsive layouts that convert visitors into clients.",
    iconName: "Globe",
    deliverables: [
      "Custom responsive layout tailored for mobile, tablet, and desktop",
      "Semantic HTML5 structure and Core Web Vitals performance optimization",
      "Comprehensive Technical SEO (Open Graph, JSON-LD schema, sitemaps)",
      "Accessible navigation (WCAG AA compliant) with dark/light mode",
      "Cross-browser testing and production deployment setup"
    ],
    suitableProjects: [
      { id: "mdboutique-ecommerce-pwa", title: "MDBoutique Luxury Retail PWA" }
    ],
    clientRequirements: [
      "Target audience and primary website objective",
      "Estimated number of pages and core navigation sections",
      "Branding guidelines, logo assets, and color palette preferences",
      "Content readiness (copy, images, credentials)",
      "Domain and preferred hosting environment (e.g., Vercel, Netlify)"
    ],
    contextualQuestions: [
      {
        id: "pageCount",
        label: "Estimated Number of Pages",
        placeholder: "e.g., 1-3 landing pages, 4-8 multi-page site",
        type: "select",
        options: ["Single Landing Page (1 Page)", "Small Business Site (2-5 Pages)", "Extended Corporate Site (6-12 Pages)", "Custom Web Platform"],
        required: true
      },
      {
        id: "contentReadiness",
        label: "Content & Copy Availability",
        placeholder: "Select readiness",
        type: "select",
        options: ["All text and imagery ready", "Text ready, need design & image assets", "Drafting in progress", "Need assistance structuring content"],
        required: true
      },
      {
        id: "designReference",
        label: "Design Inspiration or Competitor Links",
        placeholder: "Share URLs of websites whose aesthetic or structure you admire",
        type: "text",
        required: false
      }
    ],
    ar: {
      name: "تطوير المواقع الإلكترونية والواجهات",
      shortDescription: "مواقع إلكترونية وصفحات هبوط عالية الأداء ومتجاوبة برمجياً بمعايير الويب القياسية وتهيئة محركات البحث.",
      valueProposition: "بناء واجهات ويب سريعة، متجاوبة، وسهلة الوصول تعتمد على أفضل ممارسات SEO والتهيئة التقنية لزيادة ثقة العملاء ومعدل التحويل.",
      deliverables: [
        "تصميم متجاوب بالكامل لكافة أحجام الشاشات (الهواتف، الأجهزة اللوحية، الحواسيب)",
        "هيكلية HTML5 دلالية متوافقة مع مؤشرات أداء Core Web Vitals",
        "تهيئة SEO تقنية شاملة (خرائط sitemap، وسوم Open Graph، وبيانات JSON-LD)",
        "واجهات مستخدم تدعم الوضع الليلي والنهاري وسهولة الوصول (WCAG AA)",
        "اختبارات التوافق مع المتصفحات وإعداد النشر الإنتاجي"
      ],
      clientRequirements: [
        "الجمهور المستهدف والهدف الأساسي من الموقع",
        "عدد الصفحات المتوقع والأقسام الرئيسية",
        "الهوية البصرية وشعار المؤسسة ولوحة الألوان المفضلة",
        "جاهزية المحتوى (النصوص، الصور، التراخيص)",
        "النطاق واستضافة الويب المفضلة"
      ]
    }
  },
  {
    id: "backend-development",
    name: "Backend Development & REST APIs",
    shortDescription: "Robust Java & Spring Boot backend services, secure RESTful APIs, JWT authentication, and relational persistence.",
    valueProposition: "Engineer scalable, auditable enterprise backends with Java 21 LTS and Spring Boot 3, featuring bulletproof role-based access control, transaction integrity, and clean modular architecture.",
    iconName: "Server",
    deliverables: [
      "RESTful API design following OpenAPI/Swagger specifications",
      "Stateless JWT authentication filter chain with role-based access control (RBAC)",
      "Clean layered architecture (Controller, Service, Repository, DTO)",
      "Relational database persistence with Spring Data JPA / Hibernate",
      "Centralized exception handling and standardized error responses",
      "Unit and integration test suites with Maven build validation"
    ],
    suitableProjects: [
      { id: "employee-management-api", title: "Enterprise Employee & Department REST API" },
      { id: "library-management-system-desktop", title: "Library Management System (Oracle JDBC)" }
    ],
    clientRequirements: [
      "Domain entity models and business workflows",
      "User role hierarchy and permission requirements",
      "Target database engine (Oracle SQL, PostgreSQL, MySQL)",
      "Expected throughput and request concurrency",
      "Third-party integrations or external services needed"
    ],
    contextualQuestions: [
      {
        id: "authRequirements",
        label: "Authentication & Authorization Model",
        placeholder: "Select security model",
        type: "select",
        options: ["Stateless JWT Token with RBAC Roles", "Session-based Authentication", "API Key / Service-to-Service", "None / Public Endpoints Only"],
        required: true
      },
      {
        id: "databasePreference",
        label: "Database Engine Preference",
        placeholder: "Select database",
        type: "select",
        options: ["Oracle SQL", "PostgreSQL", "MySQL", "SQLite", "Client will provide existing DB"],
        required: true
      },
      {
        id: "integrations",
        label: "External Integrations or Third-Party Services",
        placeholder: "e.g., Payment gateways, SMTP email, SMS, cloud storage",
        type: "textarea",
        required: false
      }
    ],
    ar: {
      name: "تطوير الأنظمة الخلفية والواجهات البرمجية (REST APIs)",
      shortDescription: "خدمات خلفية مؤسسية قوية بـ Java و Spring Boot 3 مع مصادقة JWT الآمنة وقواعد البيانات العلائقية.",
      valueProposition: "بناء أنظمة خلفية متينة وقابلة للتوسع بـ Java 21 LTS و Spring Boot 3 مع تطبيق صارم لصلاحيات المستخدمين (RBAC) وسلامة المعاملات المالية والمحاسبية.",
      deliverables: [
        "تصميم واجهات RESTful قياسية متوافقة مع مواصفات OpenAPI/Swagger",
        "سلسلة أمان ومصادقة JWT عديمة الحالة مع التحكم بالصلاحيات حسب الدور",
        "معمارية طبقية نظيفة (Controller, Service, Repository, DTO)",
        "ربط قواعد البيانات العلائقية عبر Spring Data JPA و Hibernate",
        "معالجة مركزية للاستثناءات واستجابات أخطاء موحدة",
        "حزم اختبارات شاملة مع بناء موثق عبر Apache Maven"
      ],
      clientRequirements: [
        "نماذج البيانات وقواعد العمل المطلوبة",
        "هيكلية أدوار المستخدمين وصلاحيات كل دور",
        "محرك قاعدة البيانات المفضل (Oracle SQL, PostgreSQL, MySQL)",
        "الحجم المتوقع للبيانات والطلبات المتزامنة",
        "الخدمات الخارجية المطلوب الربط معها"
      ]
    }
  },
  {
    id: "management-systems",
    name: "Management Systems (SIS / ERP / HR)",
    shortDescription: "Custom database-driven operational platforms, administrative dashboards, member ledgers, and automated reporting.",
    valueProposition: "Transform fragmented administrative spreadsheets into centralized, secure management platforms featuring strict role boundaries, automated performance ledgers, and one-click PDF reports.",
    iconName: "FolderKanban",
    deliverables: [
      "Multi-role administrative portal (Admin, Manager, Member, Student)",
      "Strict data isolation preventing cross-leakage between departments",
      "Automated calculation engines (GPA, performance points, penalties)",
      "Executive PDF report generator and data export workflows",
      "Smart reminder engine for deadlines and inactive accounts",
      "Search, sorting, and server-paginated data tables"
    ],
    suitableProjects: [
      { id: "hr-management-platform", title: "GDG NCTU Operations Platform (17 Modules)" },
      { id: "student-information-system-cli", title: "University Student Information System (C++ SIS)" }
    ],
    clientRequirements: [
      "Organizational structure and department breakdown",
      "Key workflow steps from task creation to sign-off",
      "Formula specifications for performance, points, or grading",
      "Required export formats (PDF, Excel, CSV)",
      "Hosting environment preferences"
    ],
    contextualQuestions: [
      {
        id: "systemDomain",
        label: "Management System Domain",
        placeholder: "Select domain",
        type: "select",
        options: ["HR & Employee Operations", "Student Information System (SIS)", "Inventory & Asset Management", "Membership / Community Ledger", "Other Custom Management"],
        required: true
      },
      {
        id: "userRoles",
        label: "Required Roles & Access Portals",
        placeholder: "e.g., Super Admin, Department Head, Member, Viewer",
        type: "text",
        required: true
      },
      {
        id: "reportingNeeds",
        label: "Reporting & Export Requirements",
        placeholder: "Do you require automated PDF reports, Excel spreadsheets, or live metric dashboards?",
        type: "textarea",
        required: false
      }
    ],
    ar: {
      name: "أنظمة الإدارة المؤسسية (ERP / HR / SIS)",
      shortDescription: "منصات تشغيلية مخصصة، لوحات تحكم إدارية، سجلات متابعة الأداء، وتوليد تقارير الأداء التنفيذية.",
      valueProposition: "تحويل جداول البيانات المشتتة إلى منصة مركزية متكاملة تضمن عزل الصلاحيات، وحساب النقاط والمعدلات بدقة، وتصدير تقارير PDF تنفيذية بضغطة زر.",
      deliverables: [
        "بوابات إدارية متعددة الأدوار (مدير عام، مسؤول قسم، عضو، طالب)",
        "عزل صارم للبيانات لمنع تداخل السجلات بين اللجان أو الأقسام",
        "محركات حساب آلي للمعدلات التراكمية، ونقاط الأداء، وغرامات التأخير",
        "توليد تقارير PDF تنفيذية وجداول تصدير البيانات",
        "محرك تنبيهات ذكي للمواعيد النهائية وسجلات الحضور",
        "جداول بيانات سريعة مع البحث والتصفية وتقسيم الصفحات"
      ],
      clientRequirements: [
        "الهيكل التنظيمي للمؤسسة وتوزيع الأقسام",
        "خطوات ومسارات اعتماد المهام والعمليات اليومية",
        "معايير حساب التقييمات أو النقاط أو الدرجات",
        "صيغ التقارير المطلوبة (PDF, Excel, CSV)",
        "بيئة الاستضافة المفضلة"
      ]
    }
  },
  {
    id: "database-design",
    name: "Database Design & Optimization",
    shortDescription: "Relational database schema modeling, SQL query tuning, Oracle Database JDBC integration, and ACID data integrity.",
    valueProposition: "Architect normalized, high-performance relational schemas that eliminate redundancy, protect transaction boundaries, and ensure sub-millisecond query execution even under sustained scale.",
    iconName: "Database",
    deliverables: [
      "Entity-Relationship Diagrams (ERD) and relational schema design (3NF)",
      "Oracle SQL / PostgreSQL DDL migration scripts with foreign key integrity",
      "Indexed query design and execution plan analysis",
      "Prepared statements, stored procedures, and concurrency lock controls",
      "Data sanitation and migration utilities",
      "JDBC / JPA connection pooling optimization (HikariCP)"
    ],
    suitableProjects: [
      { id: "library-management-system-desktop", title: "Oracle Database Library System" },
      { id: "employee-management-api", title: "Enterprise Employee Schema (Oracle SQL)" }
    ],
    clientRequirements: [
      "Core entities, attributes, and relationship cardinality",
      "Anticipated volume of records per table and daily write frequency",
      "Specific database engine (Oracle Database 19c/21c, PostgreSQL, MySQL)",
      "Existing database dumps or schema diagrams if refactoring",
      "Compliance or audit requirements"
    ],
    contextualQuestions: [
      {
        id: "dbEngine",
        label: "Target Database Engine",
        placeholder: "Select database engine",
        type: "select",
        options: ["Oracle Database (SQL/PL-SQL)", "PostgreSQL", "MySQL / MariaDB", "SQLite", "Not sure, need recommendation"],
        required: true
      },
      {
        id: "workType",
        label: "Database Project Scope",
        placeholder: "Select scope",
        type: "select",
        options: ["New Database Architecture from scratch", "Schema Refactoring & Normalization", "Query Optimization & Indexing", "Migration between Database Engines"],
        required: true
      },
      {
        id: "estimatedDataVolume",
        label: "Estimated Data Volume / Scale",
        placeholder: "e.g., thousands of rows, hundreds of thousands, or millions of records",
        type: "text",
        required: false
      }
    ],
    ar: {
      name: "تصميم وتحسين قواعد البيانات (Database Design & SQL)",
      shortDescription: "تصميم مخططات قواعد البيانات العلائقية، وتحسين استعلامات SQL، والربط مع Oracle Database ومعاملات ACID.",
      valueProposition: "بناء قواعد بيانات علائقية معيارية وخالية من التكرار مع فهرسة ذكية واستعلامات مجهزة تضمن أسرع استجابة وسلامة تامة للبيانات والمعاملات.",
      deliverables: [
        "مخططات الكيانات والعلاقات (ERD) وتصميم المخطط العلائقي (3NF)",
        "سكربتات بناء الجداول (DDL) لـ Oracle SQL أو PostgreSQL مع القيود الصارمة",
        "تصميم الفهارس وتحليل خطط تنفيذ الاستعلامات (Execution Plans)",
        "استعلامات مجهزة وإجراءات مخزنة ومنع تضارب المعاملات",
        "أدوات تنقية وترحيل البيانات",
        "ضبط مجمعات الاتصال (Connection Pooling عبر HikariCP)"
      ],
      clientRequirements: [
        "الكيانات الأساسية وخصائصها وحجم العلاقات بينها",
        "الحجم التقديري للبيانات ومعدل العمليات اليومية",
        "محرك قاعدة البيانات المحدد (Oracle, PostgreSQL, MySQL)",
        "المخططات الحالية في حال الرغبة في إعادة الهيكلة والتطوير",
        "معايير الأمان والنسخ الاحتياطي المطلوبة"
      ]
    }
  },
  {
    id: "fullstack-applications",
    name: "Full-Stack Web Applications",
    shortDescription: "End-to-end web applications uniting Next.js/React frontends with secure backends, databases, and authenticated user flows.",
    valueProposition: "Deliver complete web products with strict TypeScript typing, responsive interactive interfaces, resilient API backends, and battle-tested database integrations ready for commercial launch.",
    iconName: "Layers",
    deliverables: [
      "Modern full-stack application built with Next.js App Router and TypeScript",
      "Secure user authentication (stateless tokens, OAuth, or Supabase Auth)",
      "Relational database schema with Row Level Security (RLS) or JPA controls",
      "Interactive data dashboards with responsive charts and filters",
      "Form validation pipelines with sanitization and error boundaries",
      "Production deployment configuration (Vercel, containerization)"
    ],
    suitableProjects: [
      { id: "hr-management-platform", title: "GDG NCTU Operations Platform" },
      { id: "mdboutique-ecommerce-pwa", title: "MDBoutique Retail Platform & PWA" }
    ],
    clientRequirements: [
      "End-to-end user journeys and screen wireframes or sketches",
      "Authentication and account management workflows",
      "Data models and core CRUD operations",
      "Third-party integrations (payments, notifications, storage)",
      "Target launch date and deployment preferences"
    ],
    contextualQuestions: [
      {
        id: "targetUsers",
        label: "Target User Base",
        placeholder: "Select audience",
        type: "select",
        options: ["Internal Company / Organization Staff", "B2B Clients / Partners", "Public Consumers (B2C)", "Educational / Campus Community"],
        required: true
      },
      {
        id: "keyWorkflows",
        label: "Primary Workflows or Core Features",
        placeholder: "Describe the 2-3 most important actions users must perform",
        type: "textarea",
        required: true
      },
      {
        id: "preferredStack",
        label: "Tech Stack Preference (if any)",
        placeholder: "e.g., Next.js + PostgreSQL, Spring Boot + Next.js, or Developer recommendation",
        type: "text",
        required: false
      }
    ],
    ar: {
      name: "تطبيقات الويب المتكاملة (Full-Stack Applications)",
      shortDescription: "تطبيقات ويب متكاملة تجمع بين واجهات Next.js/React الحديثة والأنظمة الخلفية الآمنة وقواعد البيانات.",
      valueProposition: "تطوير تطبيقات ويب شاملة بنمط TypeScript الصارم، وواجهات تفاعلية متجاوبة، ومسارات مصادقة آمنة، وقواعد بيانات علائقية موثوقة جاهزة للإطلاق الإنتاجي.",
      deliverables: [
        "تطبيق ويب متكامل حديث مبني بـ Next.js App Router ولغة TypeScript",
        "مصادقة مستخدمين آمنة وإدارة الجلسات",
        "مخطط قاعدة بيانات علائقية محمي بسياسات الأمان",
        "لوحات تحكم تفاعلية مع رسوم بيانية وتصفية متقدمة",
        "مسارات تحقق آمنة من المدخلات ومعالجة شاملة للأخطاء",
        "إعداد النشر السحابي الكامل عبر منصات الإنتاج"
      ],
      clientRequirements: [
        "رحلة المستخدم والشاشات المطلوبة أو النماذج الأولية",
        "مسارات تسجيل الحسابات والصلاحيات",
        "نماذج البيانات والعمليات الأساسية",
        "الخدمات الخارجية المراد ربطها (الدفع، التخزين السحابي، التنبيهات)",
        "الموعد المستهدف للإطلاق وتفضيلات الاستضافة"
      ]
    }
  },
  {
    id: "embedded-iot",
    name: "Embedded Systems & IoT Telemetry",
    shortDescription: "Microcontroller firmware development (Arduino/ESP32), sensor arrays, serial/WebSocket bridges, and telemetry dashboards.",
    valueProposition: "Bridge physical microcontrollers with modern web interfaces. Author real-time firmware loops in C/C++, stream sensor telemetry, and build browser control rooms for hardware monitoring.",
    iconName: "Cpu",
    deliverables: [
      "Arduino Mega/Uno & ESP32-CAM C/C++ firmware architectures",
      "Sensor array drivers (flame infrared, ultrasonic, reflectance line sensors)",
      "Actuator control logic (motor H-bridges, relays, PWM speed tuning)",
      "Bidirectional serial to WebSocket telemetry bridge (Node.js)",
      "Browser-based control room with live telemetry dials and manual override",
      "Comprehensive hardware pinout and wiring documentation"
    ],
    suitableProjects: [
      { id: "troy-firebot", title: "Troy FireBot Autonomous IoT Firefighting Robot" }
    ],
    clientRequirements: [
      "Target microcontroller model (Arduino, ESP32, STM32)",
      "Sensor and actuator specifications and voltage requirements",
      "Physical testing protocol and hardware availability arrangements",
      "Telemetry communication protocol (Serial, WebSockets, MQTT, HTTP)",
      "Clear understanding that physical hardware prototyping requires separate component arrangements"
    ],
    contextualQuestions: [
      {
        id: "controllerModel",
        label: "Target Microcontroller / Board",
        placeholder: "Select hardware platform",
        type: "select",
        options: ["Arduino (Uno / Mega / Nano)", "ESP32 / ESP32-CAM (Wi-Fi/Bluetooth)", "Raspberry Pi / Single Board Computer", "Other / To be determined"],
        required: true
      },
      {
        id: "sensorsActuators",
        label: "Sensors & Actuators Involved",
        placeholder: "e.g., Temperature, Ultrasonic, Motors, Relays, Cameras, Displays",
        type: "textarea",
        required: true
      },
      {
        id: "telemetryProtocol",
        label: "Telemetry & Communication Needs",
        placeholder: "Select communication method",
        type: "select",
        options: ["WebSockets to Browser Dashboard", "Serial USB / UART", "MQTT / Cloud IoT", "Local Wi-Fi HTTP API", "Standalone Hardware (No telemetry)"],
        required: false
      }
    ],
    ar: {
      name: "الأنظمة المدمجة وإنترنت الأشياء (Embedded Systems & IoT)",
      shortDescription: "برمجة المتحكمات الدقيقة (Arduino/ESP32)، وحساسات القياس، وجسور نقل البيانات، وغرف التحكم اللحظية.",
      valueProposition: "ربط العتاد الفيزيائي بالواجهات الرقمية عبر فيرموير C/C++ دقيق، وقراءة الحساسات اللحظية، وبناء لوحات تحكم ومراقبة حية عبر المتصفح.",
      deliverables: [
        "برمجة فيرموير C/C++ لمتحكمات Arduino و ESP32-CAM",
        "تعريفات مصفوفات الحساسات (حساسات اللهب، الموجات فوق الصوتية، حساسات المسار)",
        "التحكم بالمشغلات الميكانيكية (محركات H-Bridge، وحدات التتابع Relay، وإشارات PWM)",
        "جسر اتصال تسلسلي لحظي عبر WebSockets لربط العتاد بالمتصفح",
        "لوحة تحكم تفاعلية للمراقبة الحية والتحكم اليدوي",
        "توثيق مخططات التوصيل وتوزيع المنافذ (Pinout Documentation)"
      ],
      clientRequirements: [
        "نوع المتحكم الدقيق المستهدف (Arduino, ESP32)",
        "مواصفات الحساسات والمحركات وجهد التشغيل",
        "ترتيبات اختبار العتاد وتوفير المكونات الفيزيائية",
        "بروتوكول نقل البيانات المفضل (Serial, WebSockets, MQTT)",
        "ملاحظة: تطوير واختبار العتاد الفيزيائي يتطلب ترتيبات خاصة لتوفير القطع والمكونات"
      ]
    }
  },
  {
    id: "ai-assisted-consulting",
    name: "AI-Assisted Development & Technical Consulting",
    shortDescription: "Codebase analysis, prompt engineering workflows, automated test suite construction, and refactoring roadmaps.",
    valueProposition: "Accelerate software delivery and clean code quality by embedding structured prompt engineering, agentic development workflows (Antigravity, Cursor, Trae), and human-in-the-loop review into your development lifecycle.",
    iconName: "Sparkles",
    deliverables: [
      "Codebase architectural audit and technical debt assessment",
      "Structured prompt templates and task boundary definitions",
      "Automated test harness construction (unit, integration, regression)",
      "Refactoring roadmaps for legacy codebases",
      "Developer workflow setup (AI-assisted pair programming and Git discipline)",
      "Strict human-in-the-loop verification guidelines"
    ],
    suitableProjects: [
      { id: "classical-cryptography-toolkit", title: "Classical Cryptography Suite (69/69 Pytest)" },
      { id: "employee-management-api", title: "Enterprise Architecture & Clean Code Refactoring" }
    ],
    clientRequirements: [
      "Access to repository or architecture documentation under NDA",
      "Primary pain point (e.g., slow delivery, lack of automated tests, technical debt)",
      "Existing team structure and tool preferences",
      "Clear understanding that this service focuses on developer tool workflows and code quality, not training AI machine learning models"
    ],
    contextualQuestions: [
      {
        id: "consultingGoal",
        label: "Primary Consultation Objective",
        placeholder: "Select objective",
        type: "select",
        options: ["Codebase Quality & Refactoring Roadmap", "Automated Testing Suite Setup", "AI Developer Tooling & Workflow Integration", "Architecture & Technology Selection Review"],
        required: true
      },
      {
        id: "codebaseState",
        label: "Current Codebase State & Tech Stack",
        placeholder: "e.g., Java Spring Boot backend needing test coverage, or legacy app needing modernization",
        type: "textarea",
        required: true
      },
      {
        id: "teamSize",
        label: "Engineering Team Size",
        placeholder: "Select team size",
        type: "select",
        options: ["Solo Developer / Founder", "Small Team (2-5 Engineers)", "Medium Team (6-15 Engineers)", "Academic / Student Group"],
        required: false
      }
    ],
    ar: {
      name: "التطوير المدعوم بالذكاء الاصطناعي والاستشارات التقنية",
      shortDescription: "تحليل الشيفرة البرمجية، وهندسة الأوامر المنظمة، وبناء حزم الاختبارات الآلية، وخطط إعادة الهيكلة.",
      valueProposition: "مضاعفة سرعة وجودة التسليم البرمجي عبر أدوات التطوير المدعومة بالذكاء الاصطناعي وهندسة الأوامر الهيكلية وحزم الاختبارات الآلية مع المراجعة البشرية الصارمة.",
      deliverables: [
        "تدقيق معماري للشيفرة البرمجية وتقييم الديون التقنية",
        "قوالب أوامر منظمة وتحديد دقيق لحدود المهام البرمجية",
        "بناء حزم اختبارات آلية شاملة (وحدة، تكامل، وانعكاس)",
        "خطط إعادة هيكلة معيارية (Refactoring Roadmaps)",
        "إعداد بيئات التطوير المسرّع وإجراءات التحكم بالإصدارات Git",
        "معايير صارمة للمراجعة البشرية وضمان الجودة"
      ],
      clientRequirements: [
        "الوصول للشيفرة أو وثائق النظام المعماري تحت اتفاقية السرية",
        "التحدي الأساسي المراد حله (بطء التسليم، غياب الاختبارات، التعقيد البرمجي)",
        "أدوات التطوير الحالية المستخدمة لدى الفريق",
        "ملاحظة: تركز هذه الخدمة على أدوات تسريع التطوير وهندسة الأوامر وضمان الجودة، ولا تشمل تدريب نماذج الذكاء الاصطناعي الأساسية"
      ]
    }
  }
];

export const budgetRanges = [
  { id: "undecided", label: "Budget Not Decided Yet / Discussion Required", labelAr: "الميزانية قيد الدراسة / تتطلب نقاشاً تقنياً" },
  { id: "under-5k", label: "Under EGP 5,000 (Small Fix / Prototype)", labelAr: "أقل من 5,000 ج.م (تحسين بسيط / نموذج أولي)" },
  { id: "5k-15k", label: "EGP 5,000 – 15,000 (Standard Module / Small Project)", labelAr: "5,000 – 15,000 ج.م (وحدة محددة / مشروع مصغر)" },
  { id: "15k-30k", label: "EGP 15,000 – 30,000 (Full Website / API Backend)", labelAr: "15,000 – 30,000 ج.م (موقع ويب كامل / نظام خلفي)" },
  { id: "30k-60k", label: "EGP 30,000 – 60,000 (Complete Management Platform)", labelAr: "30,000 – 60,000 ج.م (منصة إدارة متكاملة)" },
  { id: "above-60k", label: "Above EGP 60,000 (Enterprise Multi-System)", labelAr: "أكثر من 60,000 ج.م (نظام مؤسسي واسع النطاق)" }
];

export const projectStages = [
  { id: "idea", label: "Idea / Conceptual Stage", labelAr: "فكرة / مرحلة التصور الأولي" },
  { id: "planning", label: "Detailed Specification / Planning", labelAr: "تخطيط مفصل / مواصفات مكتوبة" },
  { id: "existing-project", label: "Existing Codebase / Needs Expansion", labelAr: "مشروع قائم / بحاجة للتطوير والتوسعة" },
  { id: "improvement-bugfix", label: "Bug Fixing / Urgent Improvement", labelAr: "معالجة أخطاء / تحسينات عاجلة" }
];

export const projectPlatforms = [
  { id: "web", label: "Web Application / Responsive Website", labelAr: "تطبيق ويب / موقع متجاوب" },
  { id: "api", label: "Backend REST API / Microservice", labelAr: "نظام خلفي / واجهة برمجية REST" },
  { id: "desktop", label: "Desktop Application (Java / C++)", labelAr: "تطبيق مكتبي (Java / C++)" },
  { id: "embedded", label: "Embedded System / Microcontroller IoT", labelAr: "نظام مدمج / إنترنت الأشياء" },
  { id: "other", label: "Other / Multiple Platforms", labelAr: "أخرى / منصات متعددة" }
];

export const priorityLevels = [
  { id: "normal", label: "Normal (Standard Timeline)", labelAr: "عادي (جدول زمني معتاد)" },
  { id: "high", label: "High (Priority Review)", labelAr: "مرتفع (أولوية مراجعة)" },
  { id: "urgent", label: "Urgent (Fast-Track Assessment)", labelAr: "عاجل (تقييم فوري سريع)" }
];
