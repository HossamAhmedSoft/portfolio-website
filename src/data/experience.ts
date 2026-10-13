export interface ResponsibilityItem {
  title: string;
  description: string;
}

export interface CommunityGraphic {
  src: string;
  title: string;
  subtitle: string;
  description: string;
  tag: string;
}

export interface ExperienceItem {
  id: string;
  role: string;
  community: string;
  team: string;
  location: string;
  academicYear: string;
  duration: string;
  summary: string;
  certificate: {
    title: string;
    issuer: string;
    recipient: string;
    roleOnCert: string;
    academicYear: string;
    verificationCode: string;
    imageSrc: string;
    chapterLeader: string;
  };
  communityGraphics: CommunityGraphic[];
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
    role: "Core Team HR Specialist",
    community: "Google Developer Group on Campus, New Cairo Technological University (GDG NCTU)",
    team: "Community & Membership Committee",
    location: "New Cairo Technological University, Egypt",
    academicYear: "2025–2026",
    duration: "Across two sessions",
    summary:
      "Contributed to HR and community operations at GDG NCTU, supporting member engagement, communication, and community activities across two sessions.",
    certificate: {
      title: "Certificate of Appreciation",
      issuer: "Google Developer Group on Campus — New Cairo Technological University",
      recipient: "Hossam Ahmed Abdelfattah",
      roleOnCert: "Core Team HR Specialist",
      academicYear: "2025–2026",
      verificationCode: "NCTU-GDG26-KHASHAB-FKJCFD",
      imageSrc: "/assets/gdg-nctu/hr-specialist-certificate.png",
      chapterLeader: "Omar El. Khashab"
    },
    communityGraphics: [
      {
        src: "/assets/gdg-nctu/hr-specialist-certificate.png",
        title: "Certificate of Appreciation",
        subtitle: "Official GDG NCTU Recognition",
        description: "Awarded for successfully serving as Core Team HR Specialist at New Cairo Technological University for the 2025–2026 academic year.",
        tag: "Official Award"
      },
      {
        src: "/assets/gdg-nctu/team-introduction.jpg",
        title: "Meet Our Team Announcement",
        subtitle: "Community & Membership Committee",
        description: "Official GDG NCTU community announcement welcoming Hossam as Human Resource Specialist in the Community & Membership Committee.",
        tag: "Team Announcement"
      },
      {
        src: "/assets/gdg-nctu/season-1-finale.jpg",
        title: "Season 1 Finale Celebration",
        subtitle: "Community Milestones & Recognition",
        description: "Celebrating a season of learning, building, and growing with the GDG NCTU student developer community.",
        tag: "Season 1 Celebration"
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
        "Directly translated operational HR workflows into an enterprise-grade full-stack web platform governing 17 operational modules.",
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
