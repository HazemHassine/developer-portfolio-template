// Full project case studies used by /projects/[slug].
// Keep each slug in sync with the matching card in lib/data.js.

const placeholderImage = "/projects/project-placeholder.svg";

function createProject({
  id,
  slug,
  title,
  subtitle,
  category,
  headline,
  techStack,
  problem,
  solution,
  capabilities,
  architectureLayers,
  deepDive,
}) {
  return {
    id,
    slug,
    aliases: [],
    title,
    subtitle,
    category,
    year: "2026",
    status: "SAMPLE CASE STUDY",
    headline,
    summary: headline,
    github: `https://github.com/yourusername/${slug}`,
    liveDemo: "https://example.com",
    primaryImage: placeholderImage,
    stats: [
      { label: "PROJECT TYPE", value: category },
      { label: "STATUS", value: "Replace with yours" },
      { label: "ROLE", value: "Your role" },
      { label: "YEAR", value: "2026" },
    ],
    techStack,
    overview: [
      `${title} is starter content that demonstrates the complete project-showcase layout. Replace this paragraph with a concise explanation of the product and its audience.`,
      "Use the second paragraph to describe your contribution, important constraints, and the outcome. Specific evidence makes a case study more credible.",
    ],
    problemStatement: {
      problem,
      solution,
      keyTakeaway:
        "Replace this sentence with the clearest lesson or result from the project.",
    },
    architecture: {
      description:
        "Explain how the major parts of your system communicate and why you selected this architecture.",
      image: placeholderImage,
      asciiDiagram: [
        "┌──────────────┐      ┌──────────────┐      ┌──────────────┐",
        "│   CLIENT     │ ───▶ │   SERVICE    │ ───▶ │  DATA STORE  │",
        "└──────────────┘      └──────┬───────┘      └──────────────┘",
        "                              │",
        "                              ▼",
        "                       ┌──────────────┐",
        "                       │ INTEGRATIONS │",
        "                       └──────────────┘",
      ].join("\n"),
      layers: architectureLayers,
    },
    keyCapabilities: capabilities,
    technicalDeepDive: deepDive,
    screenshots: [
      {
        src: placeholderImage,
        alt: `${title} placeholder preview`,
        caption:
          "Replace this placeholder with an interface screenshot, architecture diagram, or product image.",
      },
    ],
    cliOrApiReference: {
      title: "Example commands",
      items: [
        {
          command: `git clone https://github.com/yourusername/${slug}.git`,
          description: "Replace this with the actual repository URL.",
        },
        {
          command: "npm run dev",
          description: "Replace this with the command that starts your project.",
        },
      ],
    },
    gettingStarted: {
      prerequisites: [
        "List the required runtime and package manager",
        "List any local services or API credentials",
      ],
      steps: [
        {
          title: "1. Clone the repository",
          code: `git clone https://github.com/yourusername/${slug}.git\ncd ${slug}`,
        },
        { title: "2. Install dependencies", code: "npm install" },
        { title: "3. Start development", code: "npm run dev" },
      ],
    },
  };
}

export const projectsDetail = [
  createProject({
    id: "01",
    slug: "project-atlas",
    title: "PROJECT ATLAS",
    subtitle: "Collaborative planning workspace",
    category: "FULL-STACK PRODUCT",
    headline:
      "A collaborative workspace that turns loosely defined ideas into clear, trackable plans.",
    techStack: ["Next.js", "React", "TypeScript", "PostgreSQL"],
    problem:
      "Project decisions were scattered across chats, documents, and task trackers, making context difficult to recover.",
    solution:
      "A shared planning surface connects decisions, tasks, owners, and progress in one searchable workflow.",
    architectureLayers: [
      {
        name: "Web application",
        description: "Responsive user interface and server-rendered routes.",
        tech: "Next.js, React, TypeScript",
      },
      {
        name: "Application service",
        description: "Validated operations, permissions, and integrations.",
        tech: "Route Handlers, background jobs",
      },
      {
        name: "Persistence",
        description: "Relational project, task, and audit data.",
        tech: "PostgreSQL",
      },
    ],
    capabilities: [
      {
        title: "Shared planning",
        description: "Turn goals into structured milestones, tasks, and decisions.",
      },
      {
        title: "Searchable context",
        description: "Keep project history accessible to every collaborator.",
      },
      {
        title: "Progress signals",
        description: "Surface ownership, blockers, and recent activity.",
      },
    ],
    deepDive: [
      {
        title: "Modeling project context",
        content:
          "Describe a consequential data-model or product decision and the alternatives you evaluated.",
      },
      {
        title: "Keeping collaboration responsive",
        content:
          "Explain your approach to optimistic updates, synchronization, caching, or real-time events.",
      },
    ],
  }),
  createProject({
    id: "02",
    slug: "orbit-api",
    title: "ORBIT API",
    subtitle: "Reliable service platform",
    category: "BACKEND & SYSTEMS",
    headline:
      "A sample service platform designed around observable, predictable request processing.",
    techStack: ["Node.js", "REST", "Redis", "PostgreSQL", "Docker"],
    problem:
      "Growing integrations made failures harder to diagnose and request latency less predictable.",
    solution:
      "A versioned API with validation, caching, structured logs, and health checks creates a safer integration boundary.",
    architectureLayers: [
      {
        name: "API gateway",
        description: "Authentication, validation, and request routing.",
        tech: "Node.js, REST",
      },
      {
        name: "Domain services",
        description: "Business rules separated from transport concerns.",
        tech: "TypeScript",
      },
      {
        name: "Storage and cache",
        description: "Durable records with bounded caching.",
        tech: "PostgreSQL, Redis",
      },
    ],
    capabilities: [
      {
        title: "Stable contracts",
        description: "Versioned endpoints and explicit request schemas.",
      },
      {
        title: "Operational visibility",
        description: "Structured logging, metrics, and actionable health checks.",
      },
      {
        title: "Resilient workloads",
        description: "Timeouts, retries, idempotency, and graceful degradation.",
      },
    ],
    deepDive: [
      {
        title: "Failure-aware API design",
        content:
          "Document how the real project handles partial failure, duplicate requests, and external-service timeouts.",
      },
      {
        title: "Measuring reliability",
        content:
          "Add real service-level indicators, load-test results, and the changes those measurements prompted.",
      },
    ],
  }),
  createProject({
    id: "03",
    slug: "signal-lab",
    title: "SIGNAL LAB",
    subtitle: "Analytics and reporting toolkit",
    category: "DATA & ANALYTICS",
    headline:
      "A reproducible analytics workflow that turns raw events into understandable product signals.",
    techStack: ["Python", "Pandas", "SQL", "Jupyter", "Data Visualization"],
    problem:
      "Teams had data but lacked a repeatable way to validate it, explain trends, and share decisions.",
    solution:
      "A documented pipeline standardizes cleaning, analysis, visualization, and report generation.",
    architectureLayers: [
      {
        name: "Ingestion",
        description: "Collect and validate source data.",
        tech: "Python, SQL",
      },
      {
        name: "Transformation",
        description: "Create documented, reproducible analysis tables.",
        tech: "Pandas",
      },
      {
        name: "Reporting",
        description: "Turn results into accessible visual explanations.",
        tech: "Jupyter, charts",
      },
    ],
    capabilities: [
      {
        title: "Data validation",
        description: "Detect missing, malformed, or unexpected records early.",
      },
      {
        title: "Reproducible analysis",
        description: "Keep transformations reviewable and repeatable.",
      },
      {
        title: "Decision-ready reporting",
        description: "Pair visual findings with caveats and next actions.",
      },
    ],
    deepDive: [
      {
        title: "Defining trustworthy metrics",
        content:
          "Explain your metric definitions, quality checks, and how you avoided misleading interpretations.",
      },
      {
        title: "Communicating uncertainty",
        content:
          "Describe how the report distinguishes evidence, assumptions, limitations, and recommended follow-up work.",
      },
    ],
  }),
];

export function getAllProjectSlugs() {
  return projectsDetail.map((project) => project.slug);
}

export function getProjectDetail(slug) {
  if (!slug) return null;
  const normalized = slug.toLowerCase().trim();
  return projectsDetail.find(
    (project) => project.slug === normalized || project.aliases?.includes(normalized),
  ) || null;
}

export function getAdjacentProjects(slug) {
  const currentIndex = projectsDetail.findIndex(
    (project) => project.slug === slug || project.aliases?.includes(slug),
  );
  if (currentIndex === -1) return { prev: null, next: null };

  const prev = currentIndex > 0
    ? projectsDetail[currentIndex - 1]
    : projectsDetail.at(-1);
  const next = currentIndex < projectsDetail.length - 1
    ? projectsDetail[currentIndex + 1]
    : projectsDetail[0];

  return { prev, next };
}
