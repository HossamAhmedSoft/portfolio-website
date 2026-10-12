export interface EducationItem {
  institution: string;
  degreeOrProgram: string;
  period: string;
  location: string;
  highlights: string[];
  type: "University" | "Academy" | "Community & Leadership";
}

export const educationHistory: EducationItem[] = [
  {
    institution: "New Cairo Technological University (NCTU)",
    degreeOrProgram: "Information and Communication Technology (ICT)",
    period: "2023 — Present",
    location: "New Cairo, Egypt",
    type: "University",
    highlights: [
      "Rigorous curriculum focused on software development, database systems, networking, and applied systems engineering.",
      "Hands-on technical implementation across backend microservices, modern web technologies, and systems programming.",
      "Active engagement in university technology initiatives and open engineering challenges."
    ]
  },
  {
    institution: "Misr International Academy for Computers and Artificial Intelligence (MICA)",
    degreeOrProgram: "Three-Year Comprehensive Computer Science & Software Engineering Foundation",
    period: "2020 — 2023",
    location: "Cairo, Egypt",
    type: "Academy",
    highlights: [
      "Three years of intensive foundational software training covering Java, C/C++, Oracle Database architecture, and relational SQL.",
      "Extensive practical coursework in data structures, algorithms, object-oriented design patterns, and hardware robotics.",
      "Awarded 6 Oracle Academy Course Final Exam Awards and Microsoft Technology Associate (MTA) certification during enrollment."
    ]
  },
  {
    institution: "Google Developer Groups (GDG) on Campus NCTU",
    degreeOrProgram: "Core Software Engineering Contributor",
    period: "2023 — Present",
    location: "Cairo, Egypt",
    type: "Community & Leadership",
    highlights: [
      "Architected, built, and launched the official multi-track HR and operational performance platform governing 17 organizational modules.",
      "Built isolated member point ledgers, smart reminder systems, and automated executive PDF reporting pipelines.",
      "Collaborated with executive leadership to streamline committee operations across mobile, web, and AI technical tracks."
    ]
  }
];
