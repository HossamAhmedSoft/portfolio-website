export interface ResponsibilityItem {
  title: string;
  description: string;
}

export interface SessionRecord {
  name: string;
  period: string;
  status: "Most Recent" | "Prior Session";
  focus: string;
}

export interface ExperienceItem {
  id: string;
  role: string;
  community: string;
  location: string;
  duration: string;
  mostRecentSession: string;
  category: string;
  summary: string;
  sessions: SessionRecord[];
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
    duration: "Two Sessions",
    mostRecentSession: "2026",
    category: "Student Community Leadership & Human Resources",
    summary:
      "Contributed to HR and community operations across two sessions at GDG NCTU, supporting member engagement, team coordination, communication, and structured follow-up processes.",
    sessions: [
      {
        name: "Session 2026",
        period: "2025 — 2026",
        status: "Most Recent",
        focus: "Advanced member follow-up, structured feedback loops, rules and points system contribution, and translating operational workflows into the automated HR Platform."
      },
      {
        name: "Session 2025",
        period: "2024 — 2025",
        status: "Prior Session",
        focus: "Foundational member onboarding, participation monitoring, committee communication, and initial member tracking workflows."
      }
    ],
    responsibilities: [
      {
        title: "Member Onboarding & Engagement",
        description:
          "Welcoming new student recruits to GDG NCTU, introducing them to community workflows, and helping them integrate into their assigned technical tracks and committee teams."
      },
      {
        title: "Team Communication & Coordination",
        description:
          "Supporting clear, structured communication regarding tasks, deadlines, upcoming milestones, and community announcements across technical and non-technical teams."
      },
      {
        title: "Attendance & Task Follow-up",
        description:
          "Monitoring session attendance and tracking task submissions to maintain accurate, objective participation records across both community sessions."
      },
      {
        title: "Feedback & Member Development",
        description:
          "Supporting constructive feedback and follow-up loops on submitted assignments and committee deliverables to encourage ongoing technical development."
      },
      {
        title: "HR Rules, Documentation & Points Systems",
        description:
          "Contributing to structured team rules, documented evaluation guidelines, and transparent points systems to promote fair, evidence-based member recognition."
      },
      {
        title: "Improving Tracking & Follow-up Workflows",
        description:
          "Identifying operational communication gaps across consecutive sessions and contributing to structured reminder workflows and member follow-up processes."
      }
    ],
    transferableSkills: [
      "Interpersonal Communication & Active Listening",
      "Cross-Functional Team Coordination",
      "Process Documentation & Workflow Design",
      "Conflict-Sensitive Communication & Empathy",
      "Structured Task Follow-up & Accountability",
      "Problem-Solving in Team Dynamics",
      "Collaboration Across Technical & Non-Technical Teams"
    ],
    connectedProject: {
      title: "GDG NCTU Operations & HR Platform",
      description:
        "Directly translated operational HR workflows from both sessions into an enterprise-grade full-stack web platform governing 17 operational modules.",
      repoUrl: "https://github.com/HossamAhmedSoft/hr-management-platform",
      implementedFeatures: [
        "Member and multi-track profile governance across sessions",
        "Attendance and task submission lifecycle tracking",
        "Individual points ledger and evaluation systems",
        "Automated smart reminders and Egyptian calendar support",
        "Feedback and resubmission workflows with historical scoring",
        "At-Risk member detection and proactive follow-up triggers"
      ]
    }
  }
];
