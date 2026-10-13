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
  caseStudy: ProjectCaseStudy;
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
    githubUrl: "https://github.com/HossamAhmedSoft/firebot-iot-server",
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
    }
  },
  {
    id: "student-information-system-cli",
    title: "University Student Information System (SIS)",
    category: "Systems & C++",
    headline: "High-performance C++17 object-oriented enterprise terminal ERP with multi-portal access and file persistence.",
    description: "An educational ERP platform architected in modern C++ featuring dedicated portals for Students, Professors, and Administrators, with automated GPA calculations, course prerequisites, and attendance tracking.",
    technologies: ["C++17", "Object-Oriented Architecture", "STL Containers", "File I/O Streams", "MSVC"],
    status: "Production Ready",
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
    }
  },
  {
    id: "classical-cryptography-toolkit",
    title: "Classical Cryptography & Cipher Solver Suite",
    category: "Cryptography",
    headline: "Python 3 cryptographic workbench implementing Caesar, Vigenère, and Rail Fence algorithms with 69/69 automated tests.",
    description: "A comprehensive cryptography toolkit featuring visual graphical interfaces (Tkinter) and command-line solvers, complete with Tabula Recta lookup tables, brute-force frequency analysis, and bilingual support (Arabic & English).",
    technologies: ["Python 3", "Tkinter", "Pytest (100% Pass Rate)", "Modular Arithmetic", "Algorithms"],
    status: "Production Ready",
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
    }
  },
  {
    id: "crypto-desktop-suite",
    title: "Java Cryptography & Security Desktop Suite",
    category: "Cryptography",
    headline: "Modern Java Swing desktop workbench implementing AES-CBC, RSA key generation (512–2048 bit), and SHA hashing with FlatLaf UI.",
    description: "A visual cryptographic desktop application utilizing the Java Cryptography Architecture (JCA) for symmetric AES encryption, asymmetric RSA key generation, and SHA cryptographic hashing.",
    technologies: ["Java SE", "Java Swing", "FlatLaf Theme", "JCA (JCE)", "AES-CBC", "RSA", "SHA-1/256"],
    status: "Production Ready",
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
    }
  },
  {
    id: "library-management-system-desktop",
    title: "Library Management Enterprise Desktop System",
    category: "Backend & APIs",
    headline: "Enterprise Java Swing desktop application with Oracle Database JDBC backend, automated defaulter penalties, and email alerts.",
    description: "A full-featured Java desktop solution designed for institutional library administration, book circulation tracking, student accounts, overdue fine calculations, and automated email receipts.",
    technologies: ["Java 19", "Java Swing & AWT", "Oracle Database (JDBC Thin)", "Apache Maven", "JavaMail API"],
    status: "Production Ready",
    githubUrl: "https://github.com/HossamAhmedSoft/library-management-system-desktop",
    thumbnailUrl: "/projects/library/HomePage.png",
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
    }
  }
];
