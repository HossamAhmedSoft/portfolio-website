export interface Certificate {
  id: string;
  title: string;
  issuer: "Oracle Academy" | "Microsoft" | "RoboCup / MICA Egypt";
  category: "Database & SQL" | "Java & Software Engineering" | "Robotics & Hardware";
  date: string;
  credentialType: "Course Final Exam Award" | "Professional Industry Certification" | "Competition Participation";
  imagePath: string;
  verificationCode?: string;
  verificationUrl?: string;
  skills: string[];
  summary: string;
}

export const certificates: Certificate[] = [
  {
    id: "oracle-db-programming-sql",
    title: "Database Programming with SQL",
    issuer: "Oracle Academy",
    category: "Database & SQL",
    date: "December 27, 2022",
    credentialType: "Course Final Exam Award",
    imagePath: "/certificates/oracle-database-programming-sql.jpg",
    skills: ["SQL", "DDL/DML", "Joins", "Subqueries", "Aggregations", "Constraints", "Views"],
    summary: "Comprehensive mastery of relational database querying, multi-table joins, subqueries, group functions, transaction control, database views, and relational constraints in Oracle Database."
  },
  {
    id: "oracle-db-design",
    title: "Database Design",
    issuer: "Oracle Academy",
    category: "Database & SQL",
    date: "December 27, 2022",
    credentialType: "Course Final Exam Award",
    imagePath: "/certificates/oracle-database-design.jpg",
    skills: ["Entity-Relationship Modeling", "Normalization (1NF-3NF)", "Schema Architecture", "Relational Mapping"],
    summary: "Rigorous curriculum covering conceptual, logical, and physical data modeling, ERD development, normalization to Third Normal Form (3NF), and business rule translation to relational schemas."
  },
  {
    id: "oracle-db-foundations",
    title: "Database Foundations",
    issuer: "Oracle Academy",
    category: "Database & SQL",
    date: "December 27, 2022",
    credentialType: "Course Final Exam Award",
    imagePath: "/certificates/oracle-database-foundations.jpg",
    skills: ["Relational Database Theory", "Storage Engines", "SQL Syntax", "Data Modeling"],
    summary: "Foundations of relational database management systems (RDBMS), relational algebra, schema definitions, and table architecture."
  },
  {
    id: "oracle-java-programming",
    title: "Java Programming",
    issuer: "Oracle Academy",
    category: "Java & Software Engineering",
    date: "March 13, 2023",
    credentialType: "Course Final Exam Award",
    imagePath: "/certificates/oracle-java-programming.jpg",
    skills: ["Advanced Java SE", "Polymorphism", "Exception Handling", "Collections Framework", "File I/O"],
    summary: "Advanced Java software engineering covering object-oriented design, custom exception hierarchies, Java Collections Framework (Lists, Sets, Maps), stream I/O, and generic programming."
  },
  {
    id: "oracle-java-fundamentals",
    title: "Java Fundamentals",
    issuer: "Oracle Academy",
    category: "Java & Software Engineering",
    date: "March 24, 2022",
    credentialType: "Course Final Exam Award",
    imagePath: "/certificates/oracle-java-fundamentals.jpg",
    skills: ["Core Java", "Control Flow", "Object-Oriented Design", "Methods & Arrays"],
    summary: "Core Java syntax, primitive data types, control flow statements, arrays, class instantiations, and method encapsulation."
  },
  {
    id: "oracle-java-foundations",
    title: "Java Foundations",
    issuer: "Oracle Academy",
    category: "Java & Software Engineering",
    date: "March 25, 2022",
    credentialType: "Course Final Exam Award",
    imagePath: "/certificates/oracle-java-foundations.jpg",
    skills: ["Programming Logic", "Algorithmic Thinking", "OOP Principles"],
    summary: "Fundamental algorithmic problem-solving and foundational software concepts using the Java language."
  },
  {
    id: "microsoft-mta-java",
    title: "Microsoft Technology Associate (MTA): Introduction to Programming Using Java",
    issuer: "Microsoft",
    category: "Java & Software Engineering",
    date: "April 15, 2022",
    credentialType: "Professional Industry Certification",
    imagePath: "/certificates/microsoft-mta-java.jpg",
    verificationCode: "PEaA-uSHc",
    verificationUrl: "https://verify.certiport.com",
    skills: ["Java SE Syntax", "Data Types", "Object-Oriented Architecture", "Debugging", "Exception Handling"],
    summary: "Industry-standard certification issued by Microsoft Corporation (CEO Satya Nadella) and Certiport, demonstrating validated proficiency in Java programming, object lifecycle, and algorithm implementation."
  },
  {
    id: "robocup-mica-egypt-2023",
    title: "RoboCup MICA Egypt 2023 — Line Follower Robot",
    issuer: "RoboCup / MICA Egypt",
    category: "Robotics & Hardware",
    date: "May 2023",
    credentialType: "Competition Participation",
    imagePath: "/certificates/robocup-mica-egypt-2023.jpg",
    skills: ["Autonomous Line Following", "Sensor Calibration", "PWM Motor Control", "Embedded C++", "Hardware Debugging"],
    summary: "Certificate of participation in the national robotics championship, designing and calibrating an autonomous line-following vehicle under competitive obstacle courses and dynamic lighting conditions."
  }
];
