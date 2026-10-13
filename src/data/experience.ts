export interface ResponsibilityItem {
  title: string;
  titleAr: string;
  description: string;
  descriptionAr: string;
}

export interface CommunityGraphic {
  src: string;
  title: string;
  titleAr: string;
  subtitle: string;
  subtitleAr: string;
  description: string;
  descriptionAr: string;
  tag: string;
  tagAr: string;
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
  transferableSkillsAr: string[];
  connectedProject?: {
    title: string;
    titleAr: string;
    description: string;
    descriptionAr: string;
    repoUrl: string;
    implementedFeatures: string[];
    implementedFeaturesAr: string[];
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
        titleAr: "شهادة تقدير رسمية — GDG NCTU",
        subtitle: "Official GDG NCTU Recognition",
        subtitleAr: "اعتماد رسمي من مجتمع مطوري جوجل بالجامعة",
        description: "Awarded for successfully serving as Core Team HR Specialist at New Cairo Technological University for the 2025–2026 academic year.",
        descriptionAr: "مُنحت تقديراً للأداء المتميز كأخصائي موارد بشرية ضمن الفريق الأساسي في جامعة مصر التكنولوجية الدولية للعام الأكاديمي 2025–2026.",
        tag: "Official Award",
        tagAr: "شهادة رسمية"
      },
      {
        src: "/assets/gdg-nctu/team-introduction.jpg",
        title: "Meet Our Team Announcement",
        titleAr: "الإعلان الرسمي عن فريق العمل",
        subtitle: "Community & Membership Committee",
        subtitleAr: "لجنة العضوية والمجتمع",
        description: "Official GDG NCTU community announcement welcoming Hossam as Human Resource Specialist in the Community & Membership Committee.",
        descriptionAr: "الإعلان الرسمي لمجتمع GDG NCTU للترحيب بحسام أحمد كأخصائي موارد بشرية في لجنة العضوية والمجتمع.",
        tag: "Team Announcement",
        tagAr: "إعلان الفريق"
      },
      {
        src: "/assets/gdg-nctu/season-1-finale.jpg",
        title: "Season 1 Finale Celebration",
        titleAr: "احتفالية ختام الموسم الأول",
        subtitle: "Community Milestones & Recognition",
        subtitleAr: "تكريم الإنجازات ومحطات النجاح",
        description: "Celebrating a season of learning, building, and growing with the GDG NCTU student developer community.",
        descriptionAr: "الاحتفاء بموسم حافل بالتعلم والبناء والنمو المشترك مع مجتمع المطورين الطلابي في GDG NCTU.",
        tag: "Season 1 Celebration",
        tagAr: "ختام الموسم 1"
      }
    ],
    responsibilities: [
      {
        title: "Member Onboarding & Engagement",
        titleAr: "تأهيل ودمج الأعضاء الجدد",
        description:
          "Welcoming new student recruits to GDG NCTU, introducing them to community workflows, and helping them integrate into their assigned technical tracks and committee teams.",
        descriptionAr:
          "استقبال الطلاب الجدد المنضمين إلى GDG NCTU، وتعريفهم بنظام العمل داخل المجتمع، ومساعدتهم على الاندماج الفعال في مساراتهم التقنية ولجانهم."
      },
      {
        title: "Team Communication & Coordination",
        titleAr: "التواصل والتنسيق بين اللجان",
        description:
          "Supporting clear, structured communication regarding tasks, deadlines, upcoming milestones, and community announcements across technical and non-technical teams.",
        descriptionAr:
          "دعم التواصل المنظم والواضح بشأن المهام والمواعيد النهائية والإعلانات الدورية عبر الفرق التقنية والتنظيمية."
      },
      {
        title: "Attendance & Task Follow-up",
        titleAr: "متابعة الحضور وإنجاز المهام",
        description:
          "Monitoring session attendance and tracking task submissions to maintain accurate, objective participation records across both community sessions.",
        descriptionAr:
          "رصد حضور الجلسات ومتابعة تسليم المهام للحفاظ على سجلات مشاركة دقيقة وموضوعية على مدار الموسمين."
      },
      {
        title: "Feedback & Member Development",
        titleAr: "التقييم البناء وتطوير الأعضاء",
        description:
          "Supporting constructive feedback and follow-up loops on submitted assignments and committee deliverables to encourage ongoing technical development.",
        descriptionAr:
          "تقديم تغذية راجعة بناءة وحلقات متابعة مستمرة على التكليفات والمخرجات لتشجيع التطور التقني والشخصي للأعضاء."
      },
      {
        title: "HR Rules, Documentation & Points Systems",
        titleAr: "لوائح الموارد البشرية والتوثيق ونظام النقاط",
        description:
          "Contributing to structured team rules, documented evaluation guidelines, and transparent points systems to promote fair, evidence-based member recognition.",
        descriptionAr:
          "المساهمة في صياغة قواعد العمل المنظمة، ومعايير التقييم الموثقة، ونظام النقاط الشفاف لضمان التقدير العادل القائم على الأدلة."
      },
      {
        title: "Improving Tracking & Follow-up Workflows",
        titleAr: "تطوير مسارات المتابعة والتنظيم",
        description:
          "Identifying operational communication gaps across consecutive sessions and contributing to structured reminder workflows and member follow-up processes.",
        descriptionAr:
          "تحليل فجوات التواصل التشغيلي عبر المواسم المتتالية والمساهمة في بناء آليات تذكير ومتابعة استباقية للأعضاء."
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
    transferableSkillsAr: [
      "التواصل الفعال والاستماع النشط",
      "تنسيق فرق العمل متعددة التخصصات",
      "توثيق العمليات وتصميم مسارات العمل",
      "إدارة الحوار وحل الخلافات بمرونة",
      "المتابعة المنظمة للمهام والمساءلة",
      "حل المشكلات في بيئات العمل الجماعي",
      "التكامل بين الفرق التقنية والتنظيمية"
    ],
    connectedProject: {
      title: "GDG NCTU Operations & HR Platform",
      titleAr: "منصة إدارة العمليات والموارد البشرية لـ GDG NCTU",
      description:
        "Directly translated operational HR workflows into an enterprise-grade full-stack web platform governing 17 operational modules.",
      descriptionAr:
        "ترجمة مسارات العمل الفعلية للموارد البشرية مباشرة إلى منصة ويب متكاملة تدير 17 وحدة تشغيلية.",
      repoUrl: "https://github.com/HossamAhmedSoft/hr-management-platform",
      implementedFeatures: [
        "Member and multi-track profile governance across sessions",
        "Attendance and task submission lifecycle tracking",
        "Individual points ledger and evaluation systems",
        "Automated smart reminders and Egyptian calendar support",
        "Feedback and resubmission workflows with historical scoring",
        "At-Risk member detection and proactive follow-up triggers"
      ],
      implementedFeaturesAr: [
        "إدارة ملفات الأعضاء والمسارات المتعددة عبر المواسم",
        "تتبع دورة حياة الحضور وتسليم المهام الدورية",
        "سجل نقاط فردي معزول ونظام تقييم شامل",
        "تذكيرات ذكية مؤتمتة متوافقة مع التقويم المصري",
        "مسارات التغذية الراجعة وإعادة التسليم مع سجل التقييمات",
        "رصد الأعضاء المعرضين للانقطاع وتنبيهات المتابعة الاستباقية"
      ]
    }
  }
];
