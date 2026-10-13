export interface ProjectCaseStudy {
  problem: string;
  architecture: string;
  individualContribution: string;
  technologyChoices: string;
  keyFeatures: string[];
  challengesAndSolutions: { challenge: string; solution: string }[];
  securityAndTesting: string;
  statusAndLimitations: string;
}

export interface ProjectLocalized {
  title: string;
  headline: string;
  description: string;
  caseStudy: ProjectCaseStudy;
}

export interface Project {
  id: string;
  title: string;
  category: "Backend & APIs" | "Full-Stack Web" | "Embedded & IoT" | "Systems & C++" | "Cryptography";
  headline: string;
  description: string;
  technologies: string[];
  status: "Production Ready" | "Verified Prototype" | "Active Case Study";
  githubUrl: string;
  liveUrl?: string;
  thumbnailUrl?: string;
  isPrivateRepo?: boolean;
  caseStudy: ProjectCaseStudy;
  ar: ProjectLocalized;
}

export const featuredProjects: Project[] = [
  {
    id: "troy-firebot",
    title: "Troy FireBot — Autonomous IoT Firefighting Robot",
    category: "Embedded & IoT",
    headline: "Autonomous embedded line-tracking robot with flame telemetry, ESP32-CAM stream, and WebSocket telemetry control room.",
    description: "An integrated robotics and IoT platform that combines Arduino microcontroller motor drivers, infrared flame sensors, ultrasonic obstacle avoidance, ESP32-CAM optical streaming, and a Node.js WebSocket dashboard.",
    technologies: ["Arduino Uno/Mega", "ESP32-CAM", "Node.js", "WebSockets", "C/C++", "PWM", "Sensors"],
    status: "Active Case Study",
    githubUrl: "https://github.com/HossamAhmedSoft/arduino-robotics-and-embedded-systems",
    thumbnailUrl: "/projects/firebot/04-control-room.png",
    caseStudy: {
      problem: "Traditional industrial firefighting in high-risk chemical storage and automated facilities exposes human responders to toxic smoke and structural collapse hazards. A robotic solution requires real-time telemetry, low-latency video feed, and autonomous pathing under extreme conditions.",
      architecture: "Three-tier architecture: (1) Hardware edge execution on Arduino Mega running real-time sensor loops and PID motor controls; (2) Telemetry and optical streaming bridge via ESP32-CAM transmitting JPEG frames over HTTP/MJPEG; (3) Central command station powered by Node.js, Express, and WebSockets for live parameter calibration and manual override.",
      individualContribution: "Engineered microcontroller firmware (sensor polling, flame triangulation, line sensor thresholding, relay-driven water pump triggers) and integrated the WebSocket communication pipeline bridging serial data to the browser interface.",
      technologyChoices: "Selected Arduino C++ for predictable deterministic execution of sensor interrupts, and Node.js with WebSockets for bidirectional low-latency telemetry exchange between the robot's hardware bridge and browser control room.",
      keyFeatures: [
        "Autonomous line navigation using calibrated infrared reflectance sensors",
        "Ultrasonic proximity scanning for dynamic obstacle deflection",
        "Multi-angle flame sensor array with priority direction orientation",
        "ESP32-CAM video streamer for remote visual confirmation",
        "Browser-based control room with live telemetry dials, battery monitors, and manual joystick override",
        "Relay-driven water pump suppression mechanism"
      ],
      challengesAndSolutions: [
        {
          challenge: "Hardware sensor noise caused erratic line-following behavior under fluctuating ambient lighting.",
          solution: "Implemented moving-average software filtering and dynamic threshold calibration directly in microcontroller RAM."
        },
        {
          challenge: "High latency and frame dropping when streaming video alongside bidirectional sensor telemetry.",
          solution: "Decoupled video streaming (direct MJPEG socket) from telemetry (compact WebSocket JSON payload), preventing telemetry starvation."
        }
      ],
      securityAndTesting: "Hardware tested on physical obstacle courses during RoboCup MICA 2023. Telemetry endpoints authenticated via session tokens in private network deployments.",
      statusAndLimitations: "Autonomous line tracking and obstacle avoidance are physically verified on hardware. The AI computer vision object-detection module is an experimental prototype operating in controlled test simulations."
    },
    ar: {
      title: "روبوت الإطفاء الذكي المتصل بالسحاب (Troy FireBot)",
      headline: "روبوت مدمج ذاتي الحركة لتتبع المسار وكشف اللهب، مزود ببث فيديو ESP32-CAM وغرفة تحكم لحظية عبر WebSockets.",
      description: "منصة روبوتية متكاملة تجمع بين متحكمات Arduino الدقيقة، وحساسات اللهب بالأشعة تحت الحمراء، وتفادي العوائق بالموجات فوق الصوتية، وبث الفيديو عبر ESP32-CAM، ولوحة تحكم لحظية مبنية على Node.js و WebSockets.",
      caseStudy: {
        problem: "إطفاء الحرائق في المخازن الكيميائية والمنشآت الصناعية المؤتمتة يعرض فرق الإنقاذ لمخاطر الدخان السام والانهيارات الإنشائية. يتطلب الحل الروبوتي قياساً حرارياً لحظياً، وبثاً مرئياً منخفض التأخير، وتنقلًا ذاتياً في البيئات الخطرة.",
        architecture: "بنية معمارية من 3 طبقات: (1) طبقة التنفيذ الفيزيائي على Arduino Mega لمعالجة الحساسات بالزمن الحقيقي والتحكم بالمحركات؛ (2) جسر البث البصري عبر ESP32-CAM لنقل إطارات MJPEG عبر HTTP؛ (3) غرفة قيادة مركزية تعمل بـ Node.js و Express و WebSockets للمعايرة الحية والتحكم اليدوي.",
        individualContribution: "برمجة فيرموير المتحكم الدقيق (قراءة الحساسات، تحديد زاوية اللهب، معايرة حساسات المسار، وتشغيل مضخة المياه عبر الريلاي) وبناء خط الاتصال عبر WebSockets لربط بيانات المنفذ التسلسلي بواجهة المتصفح.",
        technologyChoices: "اختيار لغة C++ على Arduino لضمان استجابة لحظية حتمية للحساسات، مع Node.js و WebSockets لتبادل القياسات ثنائية الاتجاه بأقل زمن تأخير.",
        keyFeatures: [
          "تنقل ذاتي على المسار باستخدام حساسات انعكاس الأشعة تحت الحمراء المعايرة",
          "مسح المسافات بالموجات فوق الصوتية لتفادي العوائق ديناميكياً",
          "مصفوفة حساسات لهب متعددة الزوايا لتحديد اتجاه البؤرة بدقة",
          "بث فيديو مباشر عبر كاميرا ESP32-CAM للتأكيد البصري عن بُعد",
          "غرفة تحكم عبر المتصفح تعرض مؤشرات القياس الحية، وحالة البطارية، والتحكم اليدوي",
          "آلية إخماد حريق بمضخة مياه غاطسة محكومة عبر الريلاي"
        ],
        challengesAndSolutions: [
          {
            challenge: "تشويش قراءات الحساسات الضوئية بسبب تغير الإضاءة المحيطة أثناء تتبع المسار.",
            solution: "تطبيق فلترة برمجية بالمتوسط المتحرك (Moving Average) ومعايرة ديناميكية للعتبات داخل ذاكرة المتحكم."
          },
          {
            challenge: "ارتفاع زمن التأخير وسقوط الإطارات عند دمج بث الفيديو مع بيانات الحساسات اللحظية.",
            solution: "فصل مسار بث الفيديو المباشر (MJPEG Socket) عن قناة بيانات القياس الخفيفة (WebSocket JSON)."
          }
        ],
        securityAndTesting: "تم اختبار العتاد فعلياً في حلبات مسابقة RoboCup MICA 2023، وتأمين جلسات التحكم عبر الشبكة المحلية.",
        statusAndLimitations: "تتبع المسار الذاتي وتفادي العوائق موثقان عملياً على العتاد الفيزيائي. وحدة الرؤية الحاسوبية بالذكاء الاصطناعي هي نموذج أولي تجريبي للتقييم."
      }
    }
  },
  {
    id: "employee-management-api",
    title: "Enterprise Employee & Department Management REST API",
    category: "Backend & APIs",
    headline: "Production-grade Spring Boot 3 enterprise REST API with Spring Security 6, stateless JWT authentication, and Oracle SQL persistence.",
    description: "Robust enterprise backend governing multi-department organizational structures, employee lifecycle records, role-based access control, and leave request workflows.",
    technologies: ["Java 21 LTS", "Spring Boot 3", "Spring Security 6", "JWT", "Hibernate / JPA", "Oracle SQL", "HikariCP", "Maven"],
    status: "Production Ready",
    githubUrl: "https://github.com/HossamAhmedSoft/employee-management-api",
    thumbnailUrl: "/projects/employee-management-api/dashboard.jpg",
    caseStudy: {
      problem: "Mid-to-large organizations require secure, auditable, and resilient APIs for personnel lifecycle management with strict segregation of duties between HR personnel, departmental managers, and administrative executives.",
      architecture: "Layered Spring Boot clean architecture: Controller layer exposes standardized REST endpoints; Service layer enforces business validation and transaction boundaries; Repository layer utilizes Spring Data JPA with HikariCP connection pooling; Security filter chain handles stateless JWT verification.",
      individualContribution: "Designed domain models, engineered relational schema for Oracle SQL, implemented custom JWT authentication filter chain, and wrote comprehensive unit and integration tests.",
      technologyChoices: "Chose Java 21 LTS and Spring Boot 3 for enterprise reliability and modern language features; Oracle SQL for ACID transaction compliance; HikariCP for high-throughput connection management.",
      keyFeatures: [
        "Role-Based Access Control (RBAC) with ROLE_ADMIN and ROLE_USER authorities",
        "Stateless token lifecycle: cryptographic signing, claims extraction, and expiration enforcement",
        "Department-level employee indexing and hierarchical reporting structures",
        "Automated request validation with centralized exception handling and uniform API error responses",
        "Transactional leave request approval pipelines with state history",
        "Optimized database indexing and paging for high-volume personnel queries"
      ],
      challengesAndSolutions: [
        {
          challenge: "Securing fine-grained endpoints without incurring redundant database lookups on every HTTP request.",
          solution: "Constructed custom JWT token claims embedding user permissions, verified via a stateless filter without repetitive user database hits."
        },
        {
          challenge: "Preventing accidental cascading deletes of departments containing active personnel records.",
          solution: "Enforced strict foreign key constraints in Oracle SQL backed by pre-delete validation logic in the service layer."
        }
      ],
      securityAndTesting: "Spring Security 6 with CSRF disabled for stateless JWT, password hashing via BCrypt (12 rounds). Verified with Apache Maven clean build (`mvnw test-compile`) on Java 21 LTS.",
      statusAndLimitations: "Core REST API complete and verified. Ready for containerized deployment with Docker."
    },
    ar: {
      title: "الواجهة البرمجية المؤسسية لإدارة الموظفين والأقسام (REST API)",
      headline: "نظام خلفي إنتاجي مبني بـ Spring Boot 3 و Java 21 LTS مع تأمين Spring Security 6، ومصادقة JWT، وقاعدة بيانات Oracle SQL.",
      description: "نظام خلفي مؤسسي متكامل لإدارة الهياكل التنظيمية متعددة الأقسام، وسجلات الموظفين، والتحكم في الصلاحيات حسب الدور (RBAC)، ومسارات اعتماد الإجازات.",
      caseStudy: {
        problem: "تحتاج المؤسسات المتوسطة والكبيرة إلى واجهات برمجية آمنة وقابلة للتدقيق لإدارة شؤون الموظفين مع فصل صارم للصلاحيات بين مسؤولي الموارد البشرية ومديري الأقسام.",
        architecture: "معمارية طبقية نظيفة بـ Spring Boot: طبقة Controller لنقاط النهاية القياسية، وطبقة Service لقواعد العمل وإدارة المعاملات، وطبقة Repository عبر Spring Data JPA و HikariCP، مع سلسلة فلاتر أمان JWT عديمة الحالة.",
        individualContribution: "تصميم نماذج البيانات والمخطط العلائقي لقاعدة بيانات Oracle SQL، وبناء سلسلة فلاتر مصادقة JWT المخصصة، وكتابة اختبارات الوحدة والتكامل الشاملة.",
        technologyChoices: "اختيار Java 21 LTS و Spring Boot 3 للاعتمادية المؤسسية، وقاعدة بيانات Oracle SQL لضمان معاملات ACID، ومجمع اتصالات HikariCP للأداء العالي.",
        keyFeatures: [
          "تحكم صارم في الصلاحيات المبنية على الأدوار (RBAC) لـ ROLE_ADMIN و ROLE_USER",
          "إدارة دورة حياة التوكن عديم الحالة (JWT): التوقيع التشفيري، استخراج الصلاحيات، والتحقق من الصلاحية الزمنية",
          "فهرسة الموظفين حسب الأقسام والهياكل الإدارية الهرمية",
          "تحقق تلقائي من المدخلات مع معالجة مركزية للاستثناءات واستجابات أخطاء موحدة",
          "مسارات معاملات آمنة لاعتماد طلبات الإجازات مع سجل الحالات",
          "فهرسة وتقسيم صفحات (Pagination) محسن للاستعلامات الضخمة"
        ],
        challengesAndSolutions: [
          {
            challenge: "تأمين نقاط النهاية الدقيقة دون إبطاء الأداء باستعلامات متكررة لقاعدة البيانات مع كل طلب HTTP.",
            solution: "تضمين صلاحيات المستخدم داخل مطالبات التوكن (JWT Claims) والتحقق منها مباشرة عبر فلتر عديم الحالة."
          },
          {
            challenge: "منع الحذف المتسلسل غير المقصود للأقسام التي تضم موظفين نشطين.",
            solution: "فرض قيود مفاتيح أجنبية صارمة في Oracle SQL مدعومة بتحقق مسبق في طبقة الخدمات (Service Layer)."
          }
        ],
        securityAndTesting: "تأمين بواسطة Spring Security 6 وتشفير كلمات المرور بـ BCrypt (12 جولة). تم التحقق من البناء بنجاح عبر Apache Maven (`mvnw test-compile`) على بيئة Java 21 LTS.",
        statusAndLimitations: "الواجهة البرمجية الأساسية مكتملة وموثقة بالكامل وجاهزة للنشر عبر حاويات Docker."
      }
    }
  },
  {
    id: "hr-management-platform",
    title: "GDG Operations & Member Performance Platform",
    category: "Full-Stack Web",
    headline: "Comprehensive Next.js 14 and Supabase web platform governing 17 operational modules for Google Developer Groups NCTU.",
    description: "Production web application serving university developer community operations, featuring multi-role permissions, member performance ledgers, automated PDF reports, and smart reminders.",
    technologies: ["Next.js 14", "TypeScript (Strict)", "Tailwind CSS", "Supabase", "PostgreSQL", "Radix UI", "PDF Generation"],
    status: "Production Ready",
    githubUrl: "https://github.com/HossamAhmedSoft/hr-management-platform",
    thumbnailUrl: "/projects/hr-management-platform/dashboard.jpg",
    caseStudy: {
      problem: "Community organizations with multiple technical tracks (AI, Mobile, Web, DevOps) often struggle with fragmented spreadsheets for tracking attendance, member engagement points, and project milestones.",
      architecture: "Full-stack serverless Next.js App Router with React Server Components, client-side interactive tables, Supabase PostgreSQL backend with Row Level Security (RLS) policies, and TypeScript strict mode.",
      individualContribution: "Architected 17 operational modules, built strict member points isolation ensuring zero cross-leakage between tracks, implemented executive PDF reporting, and designed responsive bilingual UI layouts.",
      technologyChoices: "Selected Next.js 14 for rapid server rendering and SEO; Supabase PostgreSQL for relational integrity and role-based row-level security; Radix UI and Tailwind CSS for accessible design.",
      keyFeatures: [
        "17 comprehensive modules covering member onboarding, task tracking, evaluations, and attendance",
        "Strict individual member points ledger isolation preventing data bleeding across committees",
        "Executive PDF report generation for leadership meetings with one-click export",
        "Smart reminder engine flagging inactive members and approaching milestone deadlines",
        "Full bilingual support (English & Arabic) aligned with Egyptian calendar guidelines",
        "100% strict TypeScript typing verified with clean `tsc --noEmit` checks"
      ],
      challengesAndSolutions: [
        {
          challenge: "Preventing point calculation cross-talk between overlapping tracks when an executive belongs to multiple committees.",
          solution: "Refactored the points engine to use UUID-isolated composite keys and transactional batch recalculation."
        },
        {
          challenge: "Slow client-side rendering when generating large tabular reports with nested relational data.",
          solution: "Adopted TanStack React Table with virtualized scrolling and server-side pagination."
        }
      ],
      securityAndTesting: "Validated with `tsc --noEmit` passing with 0 errors across 38 commits. Supabase RLS enforces data boundaries at the database engine level.",
      statusAndLimitations: "Deployed and operating as the central operations platform for Google Developer Groups on Campus NCTU."
    },
    ar: {
      title: "منصة إدارة العمليات وتقييم الأداء لمجتمع GDG NCTU",
      headline: "منصة ويب متكاملة مبنية بـ Next.js 14 و Supabase تدير 17 وحدة تشغيلية لمجتمع مطوري جوجل بالجامعة التكنولوجية.",
      description: "تطبيق ويب إنتاجي يخدم عمليات مجتمع المطورين الجامعي، ويوفر صلاحيات متعددة الأدوار، وسجلات نقاط فردية معزولة، وتقارير PDF تنفيذية، وتذكيرات ذكية.",
      caseStudy: {
        problem: "تعاني المجتمعات الطلابية ذات المسارات التقنية المتعددة من تشتت البيانات في جداول تقليدية عند متابعة الحضور ونقاط التفاعل وتسليم المهام.",
        architecture: "تطبيق ويب متكامل يعتمد على Next.js App Router ومكونات الخادم (RSC)، مع قاعدة بيانات Supabase PostgreSQL محمية بسياسات أمان مستوى الصفوف (RLS) ونمط TypeScript الصارم.",
        individualContribution: "تصميم وبناء 17 وحدة تشغيلية، وتطوير محرك عزل نقاط الأعضاء لمنع تداخل بيانات اللجان، وبناء مولد تقارير PDF التنفيذية، وتصميم واجهات ثنائية اللغة متجاوبة.",
        technologyChoices: "اختيار Next.js 14 لسرعة الأداء، و Supabase PostgreSQL للتكامل العلائقي وأمان الصفوف (RLS)، و Tailwind CSS مع Radix UI للواجهات القياسية.",
        keyFeatures: [
          "17 وحدة تشغيلية شاملة تغطي تأهيل الأعضاء، وتتبع المهام، والتقييمات، والحضور",
          "عزل صارم لسجل نقاط كل عضو لمنع تسرب أو تداخل النقاط بين اللجان المختلفة",
          "تصدير تقارير PDF تنفيذية لاجتماعات القيادة بضغطة زر",
          "محرك تذكيرات ذكي لرصد الأعضاء غير النشطين والتنبيه بالمواعيد النهائية",
          "دعم كامل للغتين العربية والإنجليزية متوافق مع التقويم الأكاديمي المصري",
          "كتابة كود TypeScript صارم بنسبة 100% مجتاز لفحص `tsc --noEmit` بصفر أخطاء"
        ],
        challengesAndSolutions: [
          {
            challenge: "منع تداخل حسابات النقاط عندما ينتمي العضو لأكثر من لجنة أو مسار تقني.",
            solution: "إعادة هيكلة محرك النقاط باستخدام مفاتيح مركبة معزولة بـ UUID وإعادة حساب دفعية آمنة."
          },
          {
            challenge: "بطء عرض الجداول الكبيرة عند توليد تقارير الأداء المتداخلة.",
            solution: "استخدام جداول تفاعلية مع تقسيم الصفحات من جهة الخادم وتحسين الاستعلامات."
          }
        ],
        securityAndTesting: "تم التحقق عبر `tsc --noEmit` بصفر أخطاء عبر 38 تعديلاً موثقاً (Commits)، مع فرض حدود البيانات عبر سياسات Supabase RLS.",
        statusAndLimitations: "منصة منشورة وتعمل فعلياً كنظام إدارة مركزي لمجتمع مطوري جوجل (GDG NCTU)."
      }
    }
  },
  {
    id: "student-information-system-cli",
    title: "University Student Information System (SIS)",
    category: "Systems & C++",
    headline: "High-performance C++17 object-oriented enterprise terminal ERP with multi-portal access and file persistence.",
    description: "An educational ERP platform architected in modern C++ featuring dedicated portals for Students, Professors, and Administrators, with automated GPA calculations, course prerequisites, and attendance tracking.",
    technologies: ["C++17", "Object-Oriented Architecture", "STL Containers", "File I/O Streams", "MSVC"],
    status: "Verified Prototype",
    githubUrl: "https://github.com/HossamAhmedSoft/student-information-system-cli",
    thumbnailUrl: "/projects/student-information-system-cli/terminal.jpg",
    caseStudy: {
      problem: "Academic institutions require robust data management systems that model complex relationships between students, faculty, course catalogs, grade calculations, and prerequisite validations without web framework overhead.",
      architecture: "Polymorphic object-oriented architecture in C++: Abstract base `User` class inherited by `Student`, `Professor`, and `Admin`; centralized `UniversityDatabase` manager orchestrating relational mappings in memory with persistent disk serialization.",
      individualContribution: "Designed complete class hierarchy, implemented credit-weighted cumulative GPA algorithms, wrote prerequisite verification logic, and structured binary/text file serialization.",
      technologyChoices: "Selected C++17 for high execution speed, strict type safety, deterministic memory allocation, and zero-overhead abstraction.",
      keyFeatures: [
        "Three role-isolated portals: Student (records, enrollment), Professor (grading, attendance), Admin (catalogs, accounts)",
        "Cumulative GPA engine supporting 4.0 grading scale with credit-hour weighting",
        "Dynamic course catalog with strict prerequisite checking and seat availability counters",
        "Lecture hall and section schedule clash detection",
        "Robust file serialization guaranteeing session persistence across restarts"
      ],
      challengesAndSolutions: [
        {
          challenge: "Preventing memory leaks and circular pointer references between Students and Enrolled Courses.",
          solution: "Applied modern C++ RAII principles and smart pointers (`std::shared_ptr`, `std::weak_ptr`) for lifecycle management."
        },
        {
          challenge: "Handling corrupted or missing data files gracefully on startup.",
          solution: "Implemented schema validation on file deserialization with automatic rollback to safe default state."
        }
      ],
      securityAndTesting: "Rigorous compilation with MSVC (Visual Studio 2022) with zero warnings under `/W4`. Input validation blocks buffer overflows and invalid numeric entries.",
      statusAndLimitations: "Complete terminal CLI ERP. Codebase is structured modularly for easy binding to a graphical front-end."
    },
    ar: {
      title: "نظام معلومات الطلاب الجامعي (University SIS)",
      headline: "نظام ERP جامعي عالي الأداء عبر الطرفية مبني بلغة C++17 الحديثة والبرمجة كائنية التوجه مع حفظ مستمر للبيانات.",
      description: "منصة إدارة تعليمية مبنية بلغة C++ الحديثة تضم ثلاث بوابات مستقلة (للطلاب، والأساتذة، والإدارة)، مع حساب آلي للمعدل التراكمي GPA، والتحقق من المتطلبات السابقة للمقررات، ورصد الحضور.",
      caseStudy: {
        problem: "تحتاج المؤسسات الأكاديمية إلى أنظمة إدارة بيانات سريعة وموثوقة لنمذجة العلاقات المعقدة بين الطلاب وأعضاء هيئة التدريس والمقررات وحسابات الدرجات دون عبء أطر العمل الثقيلة.",
        architecture: "معمارية كائنية التوجه متعددة الأشكال (Polymorphic OOP) في C++: فئة أساسية مجردة `User` ترثها فئات `Student` و `Professor` و `Admin`، مع مدير قاعدة بيانات مركزي يدير العلاقات في الذاكرة ويحفظها على القرص.",
        individualContribution: "تصميم الهيكل الكامل للفئات، وتنفيذ خوارزميات حساب المعدل التراكمي الموزون بالساعات المعتمدة، وبناء منطق فحص المتطلبات السابقة وحفظ الملفات.",
        technologyChoices: "اختيار C++17 لسرعة التنفيذ الفائقة، والتحكم الدقيق بالذاكرة، والتجريد البرمجي بدون تكلفة أداء إضافية.",
        keyFeatures: [
          "ثلاث بوابات معزولة الصلاحيات: الطالب (التسجيل والسجل الأكاديمي)، الأستاذ (رصد الدرجات والحضور)، المسؤول (إدارة المقررات والحسابات)",
          "محرك حساب المعدل التراكمي (GPA) بمقياس 4.0 موزون بالساعات المعتمدة",
          "دليل مقررات ديناميكي مع فحص صارم للمتطلبات السابقة وعداد للمقاعد المتاحة",
          "كشف تعارضات جداول المحاضرات والقاعات الدراسية",
          "حفظ واسترجاع متين للبيانات عبر الملفات يضمن استمرارية الجلسات"
        ],
        challengesAndSolutions: [
          {
            challenge: "منع تسرب الذاكرة والمراجع الدائرية للمؤشرات بين كائنات الطلاب والمقررات المسجلة.",
            solution: "تطبيق مبادئ RAII في C++ الحديثة والمؤشرات الذكية (`std::shared_ptr`, `std::weak_ptr`) لإدارة دورة حياة الكائنات."
          },
          {
            challenge: "التعامل الآمن مع ملفات البيانات التالفة أو المفقودة عند بدء التشغيل.",
            solution: "إضافة تحقق من صحة هيكل البيانات عند القراءة مع استعادة تلقائية للحالة الآمنة."
          }
        ],
        securityAndTesting: "ترجمة برمجية صارمة عبر مترجم MSVC (Visual Studio 2022) بصفر تحذيرات تحت مستوى `/W4`، مع تنقية المدخلات لمنع أخطاء التدفق.",
        statusAndLimitations: "نظام ERP مكتمل عبر الطرفية (CLI) ومصمم بهيكلية معيارية تسهل ربطه بواجهة رسومية."
      }
    }
  },
  {
    id: "classical-cryptography-toolkit",
    title: "Classical Cryptography & Cipher Solver Suite",
    category: "Cryptography",
    headline: "Python 3 cryptographic workbench implementing Caesar, Vigenère, and Rail Fence algorithms with 69/69 automated tests.",
    description: "A comprehensive cryptography toolkit featuring visual graphical interfaces (Tkinter) and command-line solvers, complete with Tabula Recta lookup tables, brute-force frequency analysis, and bilingual support (Arabic & English).",
    technologies: ["Python 3", "Tkinter", "Pytest (100% Pass Rate)", "Modular Arithmetic", "Algorithms"],
    status: "Verified Prototype",
    githubUrl: "https://github.com/HossamAhmedSoft/classical-cryptography-toolkit",
    thumbnailUrl: "/projects/classical-cryptography-toolkit/gui.jpg",
    caseStudy: {
      problem: "Understanding foundational cryptographic principles requires hands-on exploration of polyalphabetic and transposition ciphers, visual representation of keystreams, and empirical validation through automated mathematical tests.",
      architecture: "Clean separation of algorithmic solvers (`crypto_core`) and presentation layer (`gui`, `cli`). Core algorithms rely purely on mathematical modular transformations and Python standard library without external dependencies.",
      individualContribution: "Implemented all cipher mathematical algorithms, designed Tabula Recta visual renderer, built brute-force key decoders, and authored full Pytest suite covering all edge cases.",
      technologyChoices: "Selected Python 3 for readable algorithmic representation; built comprehensive Pytest suite to mathematically guarantee symmetric invertibility (Encrypt -> Decrypt = Plaintext).",
      keyFeatures: [
        "Caesar Cipher with arbitrary shift offsets and automated brute-force key recovery",
        "Vigenère Cipher with key expansion, Tabula Recta visualization, and polyalphabetic mapping",
        "Rail Fence Transposition Cipher with configurable rail counts and zigzag traversal",
        "Bilingual alphabet support: English (26 characters) and Arabic (28 characters)",
        "Automated test suite with 69 unit and integration tests executing in 0.023 seconds"
      ],
      challengesAndSolutions: [
        {
          challenge: "Handling Unicode Arabic character ordering and letter normalization during modular arithmetic shifts.",
          solution: "Constructed dedicated Arabic character offset tables mapping Unicode codepoints to normalized modular integer domains."
        },
        {
          challenge: "Boundary conditions in Rail Fence cipher when message length is shorter than key rails.",
          solution: "Implemented matrix boundary clamps and validated with edge-case parameter test fixtures."
        }
      ],
      securityAndTesting: "69 out of 69 automated unit and regression tests passing with 100% success rate in 0.023 seconds under Pytest.",
      statusAndLimitations: "Production-ready educational and algorithmic workbench. Algorithms are classical and designed for academic reference, not modern transport security."
    },
    ar: {
      title: "حزمة أدوات التشفير الكلاسيكي وكسر الشفرات (Cryptography Suite)",
      headline: "بيئة عمل برمجية بلغة Python 3 لتنفيذ خوارزميات Caesar و Vigenère و Rail Fence مع اجتياز 69/69 اختباراً آلياً.",
      description: "مجموعة أدوات تشفير شاملة تضم واجهة رسومية تفاعلية (Tkinter) وأدوات سطر أوامر، مع جداول Tabula Recta المرئية، وكسر الشفرات بالقوة الغاشمة، ودعم كامل للأبجديتين العربية والإنجليزية.",
      caseStudy: {
        problem: "يتطلب إتقان المبادئ الرياضية للتشفير استكشافاً عملياً لخوارزميات الإبدال المتعدد والتبديل الموضعي، وتمثيلاً بصرياً لتدفق المفاتيح، وتحققاً رياضياً عبر اختبارات مؤتمتة.",
        architecture: "فصل معماري نظيف بين نواة الخوارزميات الرياضية (`crypto_core`) وطبقة العرض الرسومية والطرفية (`gui`, `cli`) بالاعتماد الكامل على التحويلات الرياضية المعيارية ومكتبة Python القياسية.",
        individualContribution: "برمجة كافة خوارزميات التشفير وفك التشفير، وتصميم عارض جداول Tabula Recta، وبناء محلل كسر الشفرات، وكتابة حزمة اختبارات Pytest الشاملة.",
        technologyChoices: "اختيار Python 3 لوضوح التمثيل الخوارزمي، مع بناء حزمة اختبارات Pytest لضمان الانعكاسية الرياضية التامة (تشفير ثم فك تشفير يعيد النص الأصلي).",
        keyFeatures: [
          "شفرة قيصر (Caesar Cipher) مع إزاحات مخصصة واسترجاع آلي للمفتاح بالقوة الغاشمة",
          "شفرة فيجينير (Vigenère Cipher) مع تمديد المفاتيح وعرض جدول Tabula Recta التفاعلي",
          "شفرة سياج السكة الحديدية (Rail Fence) بعدد مسارات قابل للتخصيص ومسح متعرج",
          "دعم ثنائي اللغة للأبجدية الإنجليزية (26 حرفاً) والأبجدية العربية (28 حرفاً)",
          "حزمة اختبارات آلية تضم 69 اختبار وحدة وتكامل تعمل في 0.023 ثانية"
        ],
        challengesAndSolutions: [
          {
            challenge: "معالجة ترتيب حروف اليونيكود العربية وتوحيد أشكال الحروف أثناء عمليات الإزاحة الحسابية المعيارية.",
            solution: "بناء جداول فهرسة مخصصة للحروف العربية تربط نقاط Unicode بنطاقات أعداد صحيحة معيارية."
          },
          {
            challenge: "معالجة الحالات الحدية في خوارزمية Rail Fence عندما يكون طول النص أقصر من عدد المسارات.",
            solution: "تطبيق قيود حدودية للمصفوفات والتحقق منها عبر اختبارات الحالات الحدية."
          }
        ],
        securityAndTesting: "اجتياز 69 من أصل 69 اختباراً آلياً بنسبة نجاح 100% في زمن 0.023 ثانية عبر إطار Pytest.",
        statusAndLimitations: "بيئة خوارزمية وتعليمية مكتملة وموثقة؛ الخوارزميات كلاسيكية مخصصة للمرجعية الأكاديمية."
      }
    }
  },
  {
    id: "crypto-desktop-suite",
    title: "Java Cryptography & Security Desktop Suite",
    category: "Cryptography",
    headline: "Modern Java Swing desktop workbench implementing AES-CBC, RSA key generation (512–2048 bit), and SHA hashing with FlatLaf UI.",
    description: "A visual cryptographic desktop application utilizing the Java Cryptography Architecture (JCA) for symmetric AES encryption, asymmetric RSA key generation, and SHA cryptographic hashing.",
    technologies: ["Java SE", "Java Swing", "FlatLaf Theme", "JCA (JCE)", "AES-CBC", "RSA", "SHA-1/256"],
    status: "Verified Prototype",
    githubUrl: "https://github.com/HossamAhmedSoft/crypto-desktop-suite",
    thumbnailUrl: "/projects/crypto-desktop-suite/desktop.jpg",
    caseStudy: {
      problem: "Developers and students need an intuitive visual tool to inspect cryptographic transformations, examine raw ciphertext hexadecimal/Base64 encodings, and understand initialization vector (IV) behavior.",
      architecture: "Event-driven Java desktop application utilizing FlatLaf modern UI engine. Cryptographic operations utilize standard `javax.crypto` and `java.security` providers on background worker threads.",
      individualContribution: "Designed the modern dark UI layout, implemented AES-128/192/256-bit CBC encryption pipelines with PKCS5 padding, and built RSA key generation interfaces.",
      technologyChoices: "Selected Java Cryptography Architecture (JCA) for standards compliance and hardware-accelerated AES instruction support.",
      keyFeatures: [
        "Symmetric encryption workbench supporting AES in CBC and ECB modes with customizable keys and IVs",
        "Asymmetric RSA key pair generator with selectable bit lengths (512, 1024, 2048-bit)",
        "Cryptographic hash digest calculator with instant multi-algorithm checksums",
        "Modern FlatLaf dark theme interface with custom typography and SVG vector icons",
        "Raw hexadecimal and Base64 format conversion utilities"
      ],
      challengesAndSolutions: [
        {
          challenge: "Preventing Swing UI freezing during computational generation of 2048-bit RSA prime key pairs.",
          solution: "Offloaded prime generation and cryptographic calculations to `SwingWorker` background threads."
        }
      ],
      securityAndTesting: "Uses standard secure random (`SecureRandom`) generators for IV and key creation. Verified compilation with standard `javac` on Java SE.",
      statusAndLimitations: "Complete functional desktop application."
    },
    ar: {
      title: "حزمة تطبيقات التشفير وأمن المعلومات المكتبية بلغة Java",
      headline: "تطبيق سطح مكتب حديث بـ Java Swing وواجهة FlatLaf يدعم تشفير AES-CBC وتوليد مفاتيح RSA (512–2048 bit) وخوارزميات التجزئة SHA.",
      description: "تطبيق مكتبي بصري يعتمد على معمارية التشفير في جافا (JCA) للتشفير التماثلي AES، وتوليد المفاتيح غير التماثلية RSA، وحساب البصمات التشفيرية SHA.",
      caseStudy: {
        problem: "يحتاج المطورون وطلاب أمن المعلومات إلى أداة بصرية تفاعلية لفحص التحويلات التشفيرية، ومعاينة النصوص المشفرة بصيغ Hex/Base64، وفهم سلوك متجهات التهيئة (IV).",
        architecture: "تطبيق مكتبي مبني بـ Java Swing ومحرك الواجهات الحديث FlatLaf، ينفذ العمليات التشفيرية عبر مكتبات `javax.crypto` و `java.security` القياسية على خيوط معالجة خلفية.",
        individualContribution: "تصميم الواجهة الليلية الحديثة، وتنفيذ مسارات تشفير AES-128/192/256-bit بنمط CBC وحشو PKCS5، وبناء واجهات توليد مفاتيح RSA.",
        technologyChoices: "اختيار معمارية التشفير القياسية في جافا (JCA) للتوافق مع المعايير الأمنية ودعم تسريع العتاد لخوارزمية AES.",
        keyFeatures: [
          "منصة تشفير تماثلي تدعم AES بنمطي CBC و ECB مع تخصيص المفاتيح ومتجه التهيئة IV",
          "مولد أزواج مفاتيح RSA غير التماثلية بأطوال بت قابلة للاختيار (512، 1024، 2048 بت)",
          "حاسبة بصمات التجزئة التشفيرية (SHA) للتحقق الفوري من سلامة البيانات",
          "واجهة مستخدم حديثة بالوضع الليلي عبر FlatLaf مع أيقونات متجهة وتنسيق واضح",
          "أدوات تحويل فوري بين الصيغ الست عشرية (Hexadecimal) و Base64"
        ],
        challengesAndSolutions: [
          {
            challenge: "منع تجمد واجهة المستخدم الرسومية أثناء العمليات الحسابية الثقيلة لتوليد مفاتيح RSA بطول 2048 بت.",
            solution: "فصل عمليات توليد الأعداد الأولية والحسابات التشفيرية في خيوط خلفية مستقلة (`SwingWorker`)."
          }
        ],
        securityAndTesting: "اعتماد مولدات الأرقام العشوائية الآمنة (`SecureRandom`) لتوليد المفاتيح ومتجهات التهيئة، مع التحقق من سلامة الترجمة عبر `javac`.",
        statusAndLimitations: "تطبيق سطح مكتب مكتمل الوظائف وجاهز للاستخدام."
      }
    }
  },
  {
    id: "library-management-system-desktop",
    title: "Library Management Enterprise Desktop System",
    category: "Backend & APIs",
    headline: "Enterprise Java Swing desktop application with Oracle Database JDBC backend, automated defaulter penalties, and email alerts.",
    description: "A full-featured Java desktop solution designed for institutional library administration, book circulation tracking, student accounts, overdue fine calculations, and automated email receipts.",
    technologies: ["Java 19", "Java Swing & AWT", "Oracle Database (JDBC Thin)", "Apache Maven", "JavaMail API"],
    status: "Verified Prototype",
    githubUrl: "https://github.com/HossamAhmedSoft/library-management-system-desktop",
    thumbnailUrl: "/projects/library/HomePage.png",
    isPrivateRepo: true,
    caseStudy: {
      problem: "Academic libraries require streamlined circulation counters to prevent book loss, automate overdue fine assessments, track student lending histories, and notify borrowers of impending due dates.",
      architecture: "Dual-tier MVC desktop architecture: Presentation layer contains Swing frames for Admin/Owner and User/Student portals; persistence layer uses Oracle JDBC thin driver with prepared statements and transaction isolation.",
      individualContribution: "Developed catalog CRUD workflows, circulation checkout/return pipelines, automated defaulter identification queries, and integrated JavaMail notification utilities.",
      technologyChoices: "Selected Java Swing for responsive zero-latency counter operations; Oracle Database for transactional reliability; JavaMail for automated receipt delivery.",
      keyFeatures: [
        "Dual role portals: Administrator mode (inventory, users, records) and Student mode (browsing, return history)",
        "Book checkout pipeline with automated issue and due date stamping",
        "Automated defaulter tracker listing overdue borrowers with calculated penalty fees",
        "Live dashboard metrics showing active loans, total inventory, and registered patrons",
        "Real-time search filtering across book catalog and student rosters",
        "Rich UI gallery with 14 verified desktop and database schema captures"
      ],
      challengesAndSolutions: [
        {
          challenge: "Preventing race conditions where multiple librarians attempt to issue the last available copy of a textbook.",
          solution: "Implemented SQL transactional row-level updates checking `quantity > 0` before decrementing stock."
        }
      ],
      securityAndTesting: "Enforced parameterized SQL prepared statements to eliminate SQL injection vulnerabilities. Preserved as private repository due to production schema templates.",
      statusAndLimitations: "Complete desktop system prototype with fully verified UI screenshots and database schemas."
    },
    ar: {
      title: "النظام المؤسسي المكتبي لإدارة المكتبات (Library Management System)",
      headline: "تطبيق سطح مكتب مؤسسي بـ Java Swing مرتبط بقاعدة بيانات Oracle عبر JDBC، مع حساب آلي لغرامات التأخير وتنبيهات البريد الإلكتروني.",
      description: "حل برمجي مكتبي متكامل بلغة Java لإدارة المكتبات الأكاديمية، وتتبع استعارة وإرجاع الكتب، وإدارة حسابات الطلاب، وحساب غرامات التأخير، وإرسال إيصالات البريد الإلكتروني تلقائياً.",
      caseStudy: {
        problem: "تحتاج المكتبات الأكاديمية إلى أنظمة استعارة دقيقة لمنع فقدان الكتب، وأتمتة حساب غرامات التأخير، وتتبع سجل استعارات الطلاب، وإرسال تنبيهات بمواعيد الإرجاع.",
        architecture: "معمارية MVC ثنائية الطبقات لسطح المكتب: طبقة العرض تضم نوافذ Swing لبوابتي المسؤول والطالب، وطبقة البيانات تستخدم مشغل Oracle JDBC Thin مع المعاملات المعزولة والاستعلامات المجهزة.",
        individualContribution: "تطوير مسارات إدارة الفهرس (CRUD)، ونظام الاستعارة والإرجاع، واستعلامات رصد المتأخرين تلقائياً، ودمج خدمة إشعارات البريد عبر JavaMail API.",
        technologyChoices: "اختيار Java Swing لسرعة الاستجابة الفورية، وقاعدة بيانات Oracle للموثوقية العلائقية، و JavaMail لإرسال الإيصالات والتنبيهات.",
        keyFeatures: [
          "بوابتان مستقلتان حسب الصلاحية: بوابة المدير (المخزون، المستخدمين، السجلات) وبوابة الطالب (البحث وسجل الاستعارة)",
          "مسار استعارة متكامل مع ختم تلقائي لتاريخ الإصدار وتاريخ الاستحقاق",
          "متتبع آلي للمتأخرين يعرض المستعيرين المتجاوزين للمدة مع حساب الغرامة المستحقة",
          "لوحة إحصائيات حية تعرض الإعارات النشطة وإجمالي الكتب والطلاب المسجلين",
          "بحث وتصفية فورية في فهرس الكتب وسجلات الطلاب",
          "موثق بـ 14 لقطة شاشة حقيقية لواجهات النظام ومخططات قاعدة البيانات"
        ],
        challengesAndSolutions: [
          {
            challenge: "منع تضارب العمليات (Race Conditions) عند محاولة إعارة النسخة الأخيرة المتاحة من الكتاب في نفس اللحظة.",
            solution: "تطبيق تحديثات SQL علائقية على مستوى الصف تتحقق من `quantity > 0` داخل المعاملة قبل خصم الرصيد."
          }
        ],
        securityAndTesting: "استخدام الاستعلامات المجهزة (Prepared Statements) لمنع ثغرات حقن SQL بالكامل. محفوظ كمستودع خاص لحماية قوالب قاعدة البيانات.",
        statusAndLimitations: "نظام مكتبي متكامل وموثق بالكامل بلقطات الواجهات ومخططات جداول Oracle."
      }
    }
  },
  {
    id: "mdboutique-ecommerce-pwa",
    title: "MDBoutique Luxury Retail Platform & PWA",
    category: "Full-Stack Web",
    headline: "Responsive luxury retail storefront and Progressive Web App with service worker caching, live catalog filtering, and persistent cart.",
    description: "A modern, responsive e-commerce web application engineered with Vanilla JavaScript ES6+, progressive web app service workers, and client-side state management across 260 version-controlled commits.",
    technologies: ["HTML5", "CSS3", "JavaScript ES6+", "Service Workers (PWA)", "LocalStorage", "Responsive Design"],
    status: "Production Ready",
    githubUrl: "https://github.com/HossamAhmedSoft/mdboutique-ecommerce-pwa",
    thumbnailUrl: "/projects/mdboutique/storefront.png",
    caseStudy: {
      problem: "Modern web retail demands fast initial render times, offline resilience, and intuitive client-side catalog navigation without heavy front-end framework overhead.",
      architecture: "Progressive Web App built with native web standards: Service Worker (`sw.js`) intercepts network requests for cache-first asset delivery; event-driven state store manages shopping cart and filter queries via browser `localStorage`.",
      individualContribution: "Built product catalog rendering engine, designed responsive CSS layouts with glassmorphic cards, implemented cart persistence, and engineered service worker caching strategy.",
      technologyChoices: "Selected pure native web technologies to achieve sub-second load times and zero framework bundle overhead.",
      keyFeatures: [
        "Full Progressive Web App with offline caching and manifest installability",
        "Real-time instant client-side catalog search and category filtering",
        "Persistent shopping cart with live quantity manipulation and price calculation",
        "Complete multi-step checkout workflow with order summary and receipt confirmation",
        "260 version-controlled commits documenting progressive feature iterations"
      ],
      challengesAndSolutions: [
        {
          challenge: "Maintaining shopping cart synchronization across multiple browser tabs without backend polling.",
          solution: "Utilized the browser `storage` event API to reactively broadcast cart modifications across active tabs."
        }
      ],
      securityAndTesting: "All user inputs sanitized before DOM insertion to prevent cross-site scripting (XSS). Tested across mobile and desktop viewport sizes.",
      statusAndLimitations: "Complete front-end PWA ready for production integration with payment gateways."
    },
    ar: {
      title: "منصة التجارة الإلكترونية وتطبيق الويب التقدمي (MDBoutique PWA)",
      headline: "متجر إلكتروني متجاوب وتطبيق ويب تقدمي (PWA) مع تخزين مؤقت عبر Service Worker، وتصفية فورية للمنتجات، وسلة تسوق مستمرة.",
      description: "تطبيق تجارة إلكترونية حديث ومتجاوب مبني بـ JavaScript ES6+ القياسي، وتقنيات تطبيقات الويب التقدمية (PWA Service Workers)، وإدارة حالة العميل عبر 260 تعديلاً برمجياً موثقاً (Commits).",
      caseStudy: {
        problem: "تتطلب منصات التجزئة الحديثة سرعة تحميل فائقة في اللحظة الأولى، وقدرة على العمل دون اتصال (Offline)، وتصفحاً سلساً للفهرس دون عبء الحزم البرمجية الضخمة.",
        architecture: "تطبيق ويب تقدمي (PWA) مبني بمعايير الويب القياسية: يعترض `Service Worker` طلبات الشبكة لتقديم الأصول من الذاكرة المؤقتة أولاً، ويدير مخزن الحالة سلة التسوق والفلاتر عبر `localStorage`.",
        individualContribution: "بناء محرك عرض فهرس المنتجات، وتصميم التخطيطات المتجاوبة، وبرمجة استمرارية سلة التسوق، وهندسة استراتيجية التخزين المؤقت عبر Service Worker.",
        technologyChoices: "اختيار تقنيات الويب القياسية الخالصة لتحقيق زمن تحميل أقل من ثانية واحدة وبدون أي عبء إضافي للمكتبات الخارجية.",
        keyFeatures: [
          "تطبيق ويب تقدمي كامل (PWA) قابل للتثبيت ويدعم التصفح دون اتصال بالإنترنت",
          "بحث فوري وتصفية لحظية للمنتجات حسب الفئات من جهة العميل",
          "سلة تسوق مستمرة مع تعديل حي للكميات وحساب تلقائي للأسعار",
          "مسار إتمام شراء متعدد الخطوات مع ملخص الطلب وتأكيد الفاتورة",
          "260 تعديلاً برمجياً (Commits) في Git توثق مراحل بناء وتطوير المنصة"
        ],
        challengesAndSolutions: [
          {
            challenge: "الحفاظ على تزامن سلة التسوق عبر عدة علامات تبويب مفتوحة في المتصفح دون استعلامات خادم متكررة.",
            solution: "استخدام واجهة أحداث التخزين (`storage` event API) في المتصفح لبث تحديثات السلة تفاعلياً بين جميع التبويبات."
          }
        ],
        securityAndTesting: "تنقية كافة مدخلات المستخدم قبل إدراجها في DOM لمنع ثغرات XSS، مع اختبار التجاوب عبر مختلف أحجام الشاشات.",
        statusAndLimitations: "واجهة متجر PWA مكتملة وجاهزة للربط المباشر مع بوابات الدفع."
      }
    }
  }
];
