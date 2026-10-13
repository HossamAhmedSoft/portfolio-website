export interface EducationItem {
  institution: string;
  degreeOrProgram: string;
  period: string;
  location: string;
  highlights: string[];
  highlightsAr: string[];
  type: "University" | "Academy";
}

export const educationHistory: EducationItem[] = [
  {
    institution: "New Cairo Technological University (NCTU)",
    degreeOrProgram: "Information and Communication Technology (ICT)",
    period: "2023 — Present",
    location: "New Cairo, Egypt",
    type: "University",
    highlights: [
      "Rigorous curriculum focused on software engineering, database management systems, computer networks, and systems integration.",
      "Practical development across transactional Java/Spring Boot microservices, modern TypeScript web architectures, and C++ systems programming.",
      "Active participant in technical problem-solving competitions, embedded robotics projects, and technology community initiatives."
    ],
    highlightsAr: [
      "منهج أكاديمي تطبيقي مكثف يركز على هندسة البرمجيات، وأنظمة إدارة قواعد البيانات، وشبكات الحاسب، وتكامل الأنظمة.",
      "تطبيق عملي شامل لبناء الأنظمة الخلفية بـ Java/Spring Boot، ومعماريات الويب الحديثة بـ TypeScript، وبرمجة الأنظمة بلغة C++.",
      "مشاركة فعالة في مسابقات حل المشكلات البرمجية، ومشاريع الروبوتات والأنظمة المدمجة، وقيادة الأنشطة الطلابية التقنية."
    ]
  },
  {
    institution: "Misr International Academy for Computers and Artificial Intelligence (MICA)",
    degreeOrProgram: "Three-Year Comprehensive Computer Science & Software Engineering Curriculum",
    period: "2020 — 2023",
    location: "Cairo, Egypt",
    type: "Academy",
    highlights: [
      "Three years of rigorous foundational computer science instruction covering Java SE, C/C++, Oracle Database architecture, and relational SQL.",
      "Extensive coursework and laboratory implementations in data structures, algorithms, object-oriented design patterns, and hardware robotics.",
      "Earned 6 Oracle Academy Course Final Exam Awards and Microsoft Technology Associate (MTA) Java certification during the program."
    ],
    highlightsAr: [
      "ثلاث سنوات من الدراسة التأسيسية المكثفة لعلوم الحاسب شملت Java SE، و C/C++، ومعمارية قواعد بيانات Oracle ولغة SQL العلائقية.",
      "تطبيقات معملية ومشاريع عملية موسعة في هياكل البيانات، والخوارزميات، وأنماط التصميم كائنية التوجه (OOP)، وبرمجة الروبوتات.",
      "الحصول على 6 شهادات اجتياز نهائية من أكاديمية أوراكل (Oracle Academy) وشهادة Microsoft MTA المعتمدة في البرمجة بلغة Java."
    ]
  }
];
