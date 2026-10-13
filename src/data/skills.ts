export interface SkillCategory {
  category: string;
  description: string;
  skills: {
    name: string;
    level: "Advanced" | "Proficient" | "Working Knowledge";
    projectEvidence: string;
  }[];
}

export const skillCategories: SkillCategory[] = [
  {
    category: "Programming Languages",
    description: "Core languages used across production backends, systems programming, and hardware firmware.",
    skills: [
      { name: "Java (JDK 17, 21 LTS, 25)", level: "Advanced", projectEvidence: "Employee Management API, Crypto Desktop Suite, Library Management System" },
      { name: "SQL (Oracle SQL & PostgreSQL)", level: "Advanced", projectEvidence: "Oracle Academy Awards (3x), Library System JDBC, Supabase Schemas" },
      { name: "TypeScript / JavaScript (ES6+)", level: "Proficient", projectEvidence: "GDG Operations Platform, MDBoutique PWA, Vanilla JS CRUD" },
      { name: "C++ (C++17)", level: "Proficient", projectEvidence: "University Student Information System (SIS CLI)" },
      { name: "Python 3", level: "Proficient", projectEvidence: "Classical Cryptography & Cipher Toolkit (69/69 Pytests)" },
      { name: "Embedded C / Arduino C++", level: "Proficient", projectEvidence: "Troy FireBot Autonomous Firmware, Dual Robotics Suite, LCD Calculator" }
    ]
  },
  {
    category: "Backend & Systems Architecture",
    description: "Frameworks, protocols, and architectural patterns powering transactional backends and APIs.",
    skills: [
      { name: "Spring Boot 3 & 4", level: "Proficient", projectEvidence: "Employee Management REST API" },
      { name: "Spring Security 6 & JWT", level: "Proficient", projectEvidence: "Stateless Token Authentication & RBAC Filters" },
      { name: "RESTful API Design", level: "Advanced", projectEvidence: "Standardized JSON Contracts, Global Exception Handlers, Status Codes" },
      { name: "Node.js & Express", level: "Proficient", projectEvidence: "Troy FireBot Telemetry Server & WebSocket Relay" },
      { name: "WebSockets & Serial I/O", level: "Proficient", projectEvidence: "Real-time bidirectional robot telemetry and serial control" },
      { name: "Hibernate / JPA & HikariCP", level: "Proficient", projectEvidence: "Enterprise connection pooling and relational mappings" }
    ]
  },
  {
    category: "Databases & Data Engineering",
    description: "Relational modeling, transaction isolation, and query optimization.",
    skills: [
      { name: "Oracle Database (11g/19c/21c)", level: "Advanced", projectEvidence: "Oracle Academy Certifications, JDBC Thin Driver Persistence" },
      { name: "PostgreSQL & Supabase", level: "Proficient", projectEvidence: "GDG NCTU Platform, Row Level Security (RLS) policies" },
      { name: "MySQL / MariaDB", level: "Proficient", projectEvidence: "Equipment Maintenance Desktop System Database" },
      { name: "Database Normalization (1NF–3NF)", level: "Advanced", projectEvidence: "Certified Oracle Database Design, Enterprise Schemas" }
    ]
  },
  {
    category: "Frontend & Web Engineering",
    description: "Modern, responsive, and accessible client-side architectures.",
    skills: [
      { name: "Next.js 14 / 16 (App Router)", level: "Proficient", projectEvidence: "GDG Operations Platform, Portfolio Website" },
      { name: "React 19 & Hooks", level: "Proficient", projectEvidence: "Server and Client Components, State Management" },
      { name: "Tailwind CSS & Radix UI", level: "Proficient", projectEvidence: "Accessible components, responsive grid design, dark/light themes" },
      { name: "Progressive Web Apps (PWA)", level: "Proficient", projectEvidence: "MDBoutique Service Worker caching and offline manifest" },
      { name: "HTML5 Semantic & Vanilla CSS", level: "Advanced", projectEvidence: "Standards-compliant layouts, accessible keyboard navigation" }
    ]
  },
  {
    category: "Embedded Systems, Hardware & IoT",
    description: "Microcontroller programming, sensor telemetry, and hardware-software integration.",
    skills: [
      { name: "Arduino Uno & Mega 2560", level: "Proficient", projectEvidence: "RoboCup Line-Follower, Troy FireBot Firmware, Hardware Calculator" },
      { name: "ESP32 & ESP32-CAM", level: "Proficient", projectEvidence: "MJPEG Video Streamer, Wi-Fi Telemetry Transmitter" },
      { name: "Sensor Telemetry & Actuation", level: "Proficient", projectEvidence: "Ultrasonic, Infrared, Flame Arrays, PWM H-Bridge Motor Drivers, Relays" },
      { name: "Hardware Displays & Peripherals", level: "Proficient", projectEvidence: "HD44780 16x2 Parallel LCD, 4x4 Matrix Keypad scanning" }
    ]
  },
  {
    category: "DevOps, Testing & Quality",
    description: "Version control hygiene, automated testing, and development workflow.",
    skills: [
      { name: "Git & GitHub Administration", level: "Advanced", projectEvidence: "Clean commit history, branch management, 22 verified public repositories" },
      { name: "Automated Testing (Pytest, JUnit)", level: "Proficient", projectEvidence: "69/69 Pytest suite (100% pass rate in 0.023s), Maven test suites" },
      { name: "TypeScript Strict Mode", level: "Proficient", projectEvidence: "Zero-error type safety across complete full-stack web platforms" },
      { name: "Apache Maven", level: "Proficient", projectEvidence: "Dependency lifecycle, plugin configuration, multi-module packaging" }
    ]
  },
  {
    category: "AI-Assisted Development & Engineering",
    description: "Modern AI coding agents, structured prompt engineering, and disciplined 10-stage workflows.",
    skills: [
      { name: "Cursor (AI Code Editor)", level: "Proficient", projectEvidence: "Semantic codebase indexing, symbol-aware refactoring, multi-file diffs" },
      { name: "Google Antigravity", level: "Proficient", projectEvidence: "Agentic task orchestration, multi-file execution & CLI workflows" },
      { name: "Trae (Adaptive AI IDE)", level: "Proficient", projectEvidence: "Context-aware workspace exploration and rapid feature staging" },
      { name: "Structured Prompt Engineering", level: "Advanced", projectEvidence: "Master Prompt Packages with context grounding, constraints & test guardrails" },
      { name: "10-Stage Workflow Planning", level: "Advanced", projectEvidence: "Requirement decomposition, human-in-the-loop review, zero-error builds" }
    ]
  }
];
