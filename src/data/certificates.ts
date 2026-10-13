export interface Certificate {
  id: string;
  title: string;
  titleAr: string;
  issuer: "Oracle Academy" | "Microsoft" | "RoboCup / MICA Egypt";
  category: "Database & SQL" | "Java & Software Engineering" | "Robotics & Hardware";
  date: string;
  dateAr: string;
  credentialType: "Course Final Exam Award" | "Professional Industry Certification" | "Competition Participation";
  credentialTypeAr: string;
  imagePath: string;
  verificationCode?: string;
  verificationUrl?: string;
  skills: string[];
  skillsAr: string[];
  summary: string;
  summaryAr: string;
}

export const certificates: Certificate[] = [
  {
    id: "oracle-db-programming-sql",
    title: "Database Programming with SQL",
    titleAr: "برمجة قواعد البيانات باستخدام لغة SQL",
    issuer: "Oracle Academy",
    category: "Database & SQL",
    date: "December 27, 2022",
    dateAr: "27 ديسمبر 2022",
    credentialType: "Course Final Exam Award",
    credentialTypeAr: "جائزة اجتياز الاختبار النهائي",
    imagePath: "/certificates/oracle-database-programming-sql.jpg",
    skills: ["SQL", "DDL/DML", "Joins", "Subqueries", "Aggregations", "Constraints", "Views"],
    skillsAr: ["لغة SQL", "أوامر DDL/DML", "الربط بين الجداول Joins", "الاستعلامات الفرعية", "دوال التجميع", "القيود العلائقية", "العروض Views"],
    summary: "Comprehensive mastery of relational database querying, multi-table joins, subqueries, group functions, transaction control, database views, and relational constraints in Oracle Database.",
    summaryAr: "إتقان شامل لاستعلامات قواعد البيانات العلائقية، والربط المتقدم بين الجداول، والاستعلامات الفرعية، ودوال التجميع، والتحكم في المعاملات، والقيود العلائقية في قواعد بيانات Oracle."
  },
  {
    id: "oracle-db-design",
    title: "Database Design",
    titleAr: "تصميم ومعمارية قواعد البيانات",
    issuer: "Oracle Academy",
    category: "Database & SQL",
    date: "December 27, 2022",
    dateAr: "27 ديسمبر 2022",
    credentialType: "Course Final Exam Award",
    credentialTypeAr: "جائزة اجتياز الاختبار النهائي",
    imagePath: "/certificates/oracle-database-design.jpg",
    skills: ["Entity-Relationship Modeling", "Normalization (1NF-3NF)", "Schema Architecture", "Relational Mapping"],
    skillsAr: ["نمذجة الكيانات والعلاقات (ERD)", "التطبيع القياسي (1NF–3NF)", "هندسة المخططات", "الربط العلائقي"],
    summary: "Rigorous curriculum covering conceptual, logical, and physical data modeling, ERD development, normalization to Third Normal Form (3NF), and business rule translation to relational schemas.",
    summaryAr: "منهج متخصص يغطي النمذجة المفاهيمية والمنطقية والفيزيائية للبيانات، وبناء مخططات العلاقات (ERD)، والتطبيع حتى الصيغة المعيارية الثالثة (3NF)، وتحويل قواعد العمل إلى جداول علائقية."
  },
  {
    id: "oracle-db-foundations",
    title: "Database Foundations",
    titleAr: "أساسيات قواعد البيانات العلائقية",
    issuer: "Oracle Academy",
    category: "Database & SQL",
    date: "December 27, 2022",
    dateAr: "27 ديسمبر 2022",
    credentialType: "Course Final Exam Award",
    credentialTypeAr: "جائزة اجتياز الاختبار النهائي",
    imagePath: "/certificates/oracle-database-foundations.jpg",
    skills: ["Relational Database Theory", "Storage Engines", "SQL Syntax", "Data Modeling"],
    skillsAr: ["نظرية قواعد البيانات العلائقية", "محركات التخزين", "بنية لغة SQL", "نمذجة البيانات"],
    summary: "Foundations of relational database management systems (RDBMS), relational algebra, schema definitions, and table architecture.",
    summaryAr: "الأسس العلمية لأنظمة إدارة قواعد البيانات العلائقية (RDBMS)، والجبر العلائقي، وتعريف المخططات، وهيكلة الجداول."
  },
  {
    id: "oracle-java-programming",
    title: "Java Programming",
    titleAr: "البرمجة المتقدمة بلغة Java",
    issuer: "Oracle Academy",
    category: "Java & Software Engineering",
    date: "March 13, 2023",
    dateAr: "13 مارس 2023",
    credentialType: "Course Final Exam Award",
    credentialTypeAr: "جائزة اجتياز الاختبار النهائي",
    imagePath: "/certificates/oracle-java-programming.jpg",
    skills: ["Advanced Java SE", "Polymorphism", "Exception Handling", "Collections Framework", "File I/O"],
    skillsAr: ["Java SE المتقدمة", "تعدد الأشكال (Polymorphism)", "معالجة الاستثناءات", "إطار عمل Collections", "إدارة الملفات I/O"],
    summary: "Advanced Java software engineering covering object-oriented design, custom exception hierarchies, Java Collections Framework (Lists, Sets, Maps), stream I/O, and generic programming.",
    summaryAr: "هندسة البرمجيات المتقدمة بلغة Java وتغطي التصميم كائني التوجه، وبناء الاستثناءات المخصصة، وإطار عمل المجموعات (Lists, Sets, Maps)، والتعامل مع الملفات والبرمجة العامة (Generics)."
  },
  {
    id: "oracle-java-fundamentals",
    title: "Java Fundamentals",
    titleAr: "الركائز الأساسية للبرمجة بلغة Java",
    issuer: "Oracle Academy",
    category: "Java & Software Engineering",
    date: "March 24, 2022",
    dateAr: "24 مارس 2022",
    credentialType: "Course Final Exam Award",
    credentialTypeAr: "جائزة اجتياز الاختبار النهائي",
    imagePath: "/certificates/oracle-java-fundamentals.jpg",
    skills: ["Core Java", "Control Flow", "Object-Oriented Design", "Methods & Arrays"],
    skillsAr: ["أساسيات Java", "هياكل التحكم", "التصميم كائني التوجه (OOP)", "الدوال والمصفوفات"],
    summary: "Core Java syntax, primitive data types, control flow statements, arrays, class instantiations, and method encapsulation.",
    summaryAr: "قواعد لغة Java الأساسية، وأنواع البيانات الأولية، وجمل التحكم الشرطية والتكرارية، والمصفوفات، وبناء الفئات والكائنات وتغليف البيانات."
  },
  {
    id: "oracle-java-foundations",
    title: "Java Foundations",
    titleAr: "مدخل تأسيسي لهندسة البرمجيات بلغة Java",
    issuer: "Oracle Academy",
    category: "Java & Software Engineering",
    date: "March 25, 2022",
    dateAr: "25 مارس 2022",
    credentialType: "Course Final Exam Award",
    credentialTypeAr: "جائزة اجتياز الاختبار النهائي",
    imagePath: "/certificates/oracle-java-foundations.jpg",
    skills: ["Programming Logic", "Algorithmic Thinking", "OOP Principles"],
    skillsAr: ["المنطق البرمجي", "التفكير الخوارزمي", "مبادئ البرمجة كائنية التوجه"],
    summary: "Fundamental algorithmic problem-solving and foundational software concepts using the Java language.",
    summaryAr: "حل المشكلات الخوارزمية والمفاهيم التأسيسية لتطوير البرمجيات باستخدام لغة Java."
  },
  {
    id: "microsoft-mta-java",
    title: "Microsoft Technology Associate (MTA): Introduction to Programming Using Java",
    titleAr: "شهادة مايكروسوفت الدولية (MTA): البرمجة باستخدام لغة Java",
    issuer: "Microsoft",
    category: "Java & Software Engineering",
    date: "April 15, 2022",
    dateAr: "15 أبريل 2022",
    credentialType: "Professional Industry Certification",
    credentialTypeAr: "شهادة دولية مهنية معتمدة",
    imagePath: "/certificates/microsoft-mta-java.jpg",
    verificationCode: "PEaA-uSHc",
    verificationUrl: "https://verify.certiport.com",
    skills: ["Java SE Syntax", "Data Types", "Object-Oriented Architecture", "Debugging", "Exception Handling"],
    skillsAr: ["بنية لغة Java SE", "أنواع البيانات", "المعمارية كائنية التوجه", "تصحيح الأخطاء (Debugging)", "معالجة الاستثناءات"],
    summary: "Microsoft Technology Associate (MTA) certification in Introduction to Programming Using Java, issued via Certiport (Verification Code: PEaA-uSHc), validating foundational competency in Java data types, control flow, object-oriented concepts, and debugging.",
    summaryAr: "شهادة مايكروسوفت المهنية المعتمدة (MTA) في البرمجة بلغة Java عبر منصة Certiport الدولية (كود التحقق: PEaA-uSHc)، وتوثق الكفاءة في هياكل البيانات، والبرمجة كائنية التوجه، وتصحيح الأخطاء البرمجية."
  },
  {
    id: "robocup-mica-egypt-2023",
    title: "RoboCup MICA Egypt 2023 — Line Follower Robot",
    titleAr: "بطولة روبوكاب مصر (RoboCup MICA 2023) — روبوت تتبع المسار",
    issuer: "RoboCup / MICA Egypt",
    category: "Robotics & Hardware",
    date: "May 2023",
    dateAr: "مايو 2023",
    credentialType: "Competition Participation",
    credentialTypeAr: "شهادة مشاركة في بطولة إقليمية",
    imagePath: "/certificates/robocup-mica-egypt-2023.jpg",
    skills: ["Autonomous Line Following", "Sensor Calibration", "PWM Motor Control", "Embedded C++", "Hardware Debugging"],
    skillsAr: ["تتبع المسار الذاتي", "معايرة الحساسات", "التحكم بالمحركات PWM", "برمجة الأنظمة المدمجة C++", "فحص وإصلاح العتاد"],
    summary: "Certificate of participation in the national robotics championship, designing and calibrating an autonomous line-following vehicle under competitive obstacle courses and dynamic lighting conditions.",
    summaryAr: "شهادة مشاركة رسمية في بطولة الروبوتات، لتصميم ومعايرة روبوت ذاتي الحركة لتتبع المسار وتخطي الحلبات التنافسية في ظروف إضاءة متغيرة."
  }
];
