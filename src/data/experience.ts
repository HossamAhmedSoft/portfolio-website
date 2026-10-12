export interface ResponsibilityItem {
  title: string;
  description: string;
}

export interface ExperienceItem {
  id: string;
  role: string;
  community: string;
  location: string;
  session: string;
  category: string;
  summary: string;
  responsibilities: ResponsibilityItem[];
  transferableSkills: string[];
  connectedProject?: {
    title: string;
    description: string;
    repoUrl: string;
    implementedFeatures: string[];
  };
}

export const communityExperiences: ExperienceItem[] = [
  {
    id: "gdg-nctu-hr",
    role: "HR Team Member",
    community: "GDG NCTU",
    location: "NCTU Campus",
    session: "Session 2026",
    category: "Student Community Leadership & Human Resources",
    summary:
      "Contributing to the people-management and member-engagement activities of GDG NCTU, supporting member onboarding, communication, follow-up, and a structured community experience across university technical tracks.",
    responsibilities: [
      {
        title: "Member Onboarding",
        description:
          "Welcoming new student recruits and introducing them to the GDG NCTU community structure, committee expectations, communication channels, and collaborative workflows."
      },
      {
        title: "Member Engagement & Integration",
        description:
          "Following up on member participation across assigned tracks, facilitating cross-team integration, and encouraging continuous active involvement in team activities."
      },
      {
        title: "Communication & Structured Follow-up",
        description:
          "Supporting clear, consistent communication regarding tasks, deadlines, upcoming milestones, and community announcements to maintain organizational clarity."
      },
      {
        title: "Participation Monitoring",
        description:
          "Helping monitor attendance, task submissions, and workshop participation to maintain objective records of team activity and engagement."
      },
      {
        title: "Feedback & Member Development",
        description:
          "Facilitating constructive feedback and follow-up loops on submitted assignments and committee deliverables to support member skill growth."
      },
      {
        title: "Member Support & Empathetic Retention",
        description:
          "Proactively understanding the personal and academic circumstances of less-active members before drawing conclusions, providing supportive re-engagement pathways."
      },
      {
        title: "HR Process & Operational Improvement",
        description:
          "Contributing to structured community rules, points systems, automated reminder workflows, and member follow-up processes to improve operational consistency."
      }
    ],
    transferableSkills: [
      "Communication & Interpersonal Skills",
      "Cross-Functional Team Coordination",
      "Process Documentation & Workflows",
      "Conflict-Sensitive Communication & Empathy",
      "Structured Follow-up & Task Discipline",
      "Problem-Solving in Team Dynamics",
      "Collaboration Across Technical & Non-Technical Tracks"
    ],
    connectedProject: {
      title: "GDG NCTU Operations & HR Platform",
      description:
        "Directly translated operational HR workflows into an enterprise-grade full-stack web platform governing 17 operational modules.",
      repoUrl: "https://github.com/HossamAhmedSoft/hr-management-platform",
      implementedFeatures: [
        "Member and multi-track profile governance",
        "Attendance and task submission lifecycle tracking",
        "Individual points ledger and evaluation systems",
        "Automated smart reminders and Egyptian calendar support",
        "Feedback and resubmission workflows with historical scoring",
        "At-Risk member detection and proactive follow-up triggers"
      ]
    }
  }
];
