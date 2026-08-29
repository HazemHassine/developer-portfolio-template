// Detailed skills shown on the About page.
// Provenance entries should point to concrete work, projects, or education.

export const skillCategories = [
  { id: "all", label: "ALL" },
  { id: "frontend", label: "FRONTEND & UX" },
  { id: "backend", label: "BACKEND & SYSTEMS" },
  { id: "data", label: "DATA & ANALYTICS" },
];

export const skillsWithProvenance = [
  {
    id: "nextjs",
    name: "Next.js & React",
    shortName: "Next.js / React",
    category: "frontend",
    categoryLabel: "Frontend & UX",
    tag: "PRIMARY STACK",
    tagType: "primary",
    icon: "data_object",
    summary:
      "Building accessible, responsive interfaces with modern React and the Next.js App Router.",
    provenance: [
      {
        entity: "Project Atlas",
        role: "Full-stack case study",
        type: "project",
        badge: "PROJECT",
        summary:
          "Replace this with a specific interface, rendering, or performance contribution from your own work.",
        link: "/projects/project-atlas",
      },
    ],
    ecosystem: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
  },
  {
    id: "accessibility",
    name: "Accessible UI Engineering",
    shortName: "Accessibility",
    category: "frontend",
    categoryLabel: "Frontend & UX",
    tag: "PRODUCT QUALITY",
    tagType: "info",
    icon: "accessibility_new",
    summary:
      "Designing keyboard-friendly, semantic interfaces that work across devices and input methods.",
    provenance: [
      {
        entity: "Current Company",
        role: "Software Engineer",
        type: "work",
        badge: "WORK",
        summary:
          "Replace this placeholder with an accessibility improvement and its verified outcome.",
        link: "#experience",
      },
    ],
    ecosystem: ["Semantic HTML", "ARIA", "Responsive Design", "Web Performance"],
  },
  {
    id: "nodejs",
    name: "Node.js & API Design",
    shortName: "Node.js / APIs",
    category: "backend",
    categoryLabel: "Backend & Systems",
    tag: "SERVICE LAYER",
    tagType: "primary",
    icon: "dns",
    summary:
      "Developing validated service boundaries, maintainable domain logic, and observable APIs.",
    provenance: [
      {
        entity: "Orbit API",
        role: "Backend case study",
        type: "project",
        badge: "PROJECT",
        summary:
          "Replace this with a real API-design decision, reliability improvement, or scale result.",
        link: "/projects/orbit-api",
      },
    ],
    ecosystem: ["Node.js", "REST", "TypeScript", "OpenAPI"],
  },
  {
    id: "databases",
    name: "PostgreSQL & Data Modeling",
    shortName: "PostgreSQL",
    category: "backend",
    categoryLabel: "Backend & Systems",
    tag: "PERSISTENCE",
    tagType: "info",
    icon: "database",
    summary:
      "Designing relational models, migrations, and queries around explicit product constraints.",
    provenance: [
      {
        entity: "Project Atlas",
        role: "Data model",
        type: "project",
        badge: "PROJECT",
        summary:
          "Replace this with a schema or query challenge and the tradeoff you selected.",
        link: "/projects/project-atlas",
      },
    ],
    ecosystem: ["PostgreSQL", "SQL", "Schema Design", "Migrations"],
  },
  {
    id: "docker",
    name: "Docker & Delivery Workflows",
    shortName: "Docker",
    category: "backend",
    categoryLabel: "Backend & Systems",
    tag: "DELIVERY",
    tagType: "default",
    icon: "view_in_ar",
    summary:
      "Packaging applications into reproducible environments with practical build and deployment workflows.",
    provenance: [
      {
        entity: "Orbit API",
        role: "Deployment workflow",
        type: "project",
        badge: "PROJECT",
        summary:
          "Replace this with your container, CI, or deployment contribution.",
        link: "/projects/orbit-api",
      },
    ],
    ecosystem: ["Docker", "Docker Compose", "CI/CD", "Linux"],
  },
  {
    id: "python-data",
    name: "Python Data Analysis",
    shortName: "Python / Data",
    category: "data",
    categoryLabel: "Data & Analytics",
    tag: "ANALYTICS",
    tagType: "primary",
    icon: "analytics",
    summary:
      "Creating reproducible pipelines that turn raw data into explainable product insights.",
    provenance: [
      {
        entity: "Signal Lab",
        role: "Analytics case study",
        type: "project",
        badge: "PROJECT",
        summary:
          "Replace this with a real dataset, method, finding, and impact.",
        link: "/projects/signal-lab",
      },
    ],
    ecosystem: ["Python", "Pandas", "SQL", "Jupyter", "Data Visualization"],
  },
];
