export const pageContentDefaults = {
  seo: {
    siteTitle: "YOUR NAME | Software Engineer",
    siteDescription: "A developer portfolio for projects, experience, skills, and technical writing.",
    keywords: ["software engineer", "web developer", "projects", "portfolio", "Your Name"],
    pages: {
      about: {
        title: "About | Your Name",
        description: "Learn about my background, experience, and technical skills.",
      },
      projects: {
        title: "Projects | Your Name",
        description: "A curated selection of software projects, case studies, and experiments.",
      },
      blog: {
        title: "Blog | Your Name",
        description: "Notes and articles about software engineering, design decisions, and lessons learned.",
      },
      contact: {
        title: "Contact | Your Name",
        description: "Get in touch for collaborations, opportunities, or just to say hello.",
      },
    },
  },
  home: {
    marquee: [
      "BUILDING USEFUL PRODUCTS",
      "DESIGNING RELIABLE SYSTEMS",
      "CRAFTING ACCESSIBLE INTERFACES",
      "LEARNING IN PUBLIC",
      "SHIPPING SIDE PROJECTS",
    ],
    experienceLabel: "/ EXPERIENCE",
    projectsLabel: "/ PROJECTS",
    blogLabel: "/ BLOG",
    timelineCta: "[ FULL TIMELINE ]",
    projectsCta: "[ VIEW ALL PROJECTS ]",
    blogCta: "[ READ ALL ARTICLES ]",
  },
  about: {
    eyebrow: "// ABOUT ME",
    heading: "I'M YOUR NAME, A SOFTWARE ENGINEER BASED IN YOUR LOCATION.",
    currentFocusLabel: "CURRENT FOCUS",
    currentFocus: "Describe the technology, product, or problem you are focused on now.",
    skillsLabel: "// CAPABILITIES & STACK",
    contactLabel: "[ CONTACT ]",
  },
  projects: {
    telemetryLabel: "SYSTEM TELEMETRY",
    title: "/ PROJECTS",
    introduction: "A curated selection of products, systems, experiments, and lessons learned.",
    searchPlaceholder: "SEARCH CODEBASES...",
  },
  blog: {
    title: "BLOG / NOTES",
    emptyState: "No published articles yet.",
  },
  contact: {
    eyebrow: "/ GET IN TOUCH",
    introduction: "Have a project in mind, a question, or just want to say hello? Drop a message below or reach out directly via email.",
    displayTitle: "LET'S\nTALK",
    submitLabel: "[ SEND MESSAGE ]",
    successMessage: "Message sent successfully!",
  },
};

export const themeDefaults = {
  accent: "#ccf200",
  accentDim: "#b3d400",
  background: "#131313",
  surface: "#090909",
  surfaceElevated: "#201f1f",
  primaryText: "#ffffff",
  mutedText: "#9a9a9a",
  dimText: "#646464",
  border: "#343434",
  danger: "#ff1a14",
};

export const themeToCssVariables = (theme = {}) => ({
  "--color-primary-fixed": theme.accent,
  "--color-primary-container": theme.accent,
  "--color-primary-fixed-dim": theme.accentDim,
  "--color-surface-tint": theme.accentDim,
  "--color-background": theme.background,
  "--color-surface-dim": theme.background,
  "--color-surface": theme.surface,
  "--color-surface-container": theme.surfaceElevated,
  "--color-primary": theme.primaryText,
  "--color-text-muted": theme.mutedText,
  "--color-text-dim": theme.dimText,
  "--color-border-primary": theme.border,
  "--color-danger": theme.danger,
});

export const CMS_CLIENT_KEYS = [
  "siteConfig",
  "navigation",
  "experience",
  "education",
  "projects",
  "skills",
  "skillCategories",
  "techStack",
  "pageContent",
  "theme",
];
