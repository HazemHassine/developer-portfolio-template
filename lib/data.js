// ============================================================
// Primary portfolio content.
// Start customizing the template here, then continue with:
//   - lib/projects-data.js for full case studies
//   - lib/skillsData.js for the detailed skill explorer
//   - lib/cms-shared.js for page copy, SEO, and theme defaults
// ============================================================

export const siteConfig = {
  name: "Your Name",
  title: "YOUR NAME",
  role: "SOFTWARE ENGINEER",
  tagline:
    "Software engineer building thoughtful, reliable digital products.",
  bio: [
    "Write a short introduction that explains what you build and what you care about.",
    "Use this second paragraph for your background, current focus, and the kinds of opportunities or collaborations you are looking for.",
  ],
  location: "Your City, Country",
  email: "you@example.com",
  github: "https://github.com/yourusername",
  linkedin: "https://www.linkedin.com/in/yourusername",
  copyright: `© ${new Date().getFullYear()} Your Name. All rights reserved.`,
};

export const navigation = [
  { label: "HOME", href: "/", number: "01", icon: "home" },
  { label: "ABOUT", href: "/about", number: "02", icon: "person" },
  { label: "PROJECTS", href: "/projects", number: "03", icon: "work" },
  { label: "BLOG", href: "/blog", number: "04", icon: "article" },
  { label: "CONTACT", href: "/contact", number: "05", icon: "mail" },
];

export const experience = [
  {
    year: "2024 - PRESENT",
    company: "CURRENT COMPANY",
    role: "Software Engineer",
    location: "Your Location",
    description:
      "Describe your responsibilities, the problem space, and one measurable outcome from your current role.",
  },
  {
    year: "2022 - 2024",
    company: "PREVIOUS COMPANY",
    role: "Frontend Developer",
    location: "Remote",
    description:
      "Summarize the products you shipped, the people you worked with, and the impact of your contribution.",
  },
  {
    year: "2021 - 2022",
    company: "EARLY CAREER ROLE",
    role: "Developer Intern",
    location: "Your Location",
    description:
      "Add a concise description of the skills you developed and the project you helped deliver.",
  },
];

export const education = [
  {
    year: "2020 - 2024",
    institution: "YOUR UNIVERSITY",
    degree: "B.Sc. Computer Science",
    location: "Your Location",
    description:
      "List a specialization, thesis topic, relevant coursework, or a notable academic project.",
  },
  {
    year: "2024",
    institution: "LEARNING PROGRAM OR CERTIFICATION",
    degree: "Professional Certificate",
    location: "Online",
    description:
      "Use this optional entry for continuing education, certifications, or focused training.",
  },
];

export const projects = [
  {
    id: "01",
    slug: "project-atlas",
    title: "PROJECT ATLAS",
    subtitle: "Collaborative planning workspace",
    category: "full-stack",
    categoryLabel: "FULL-STACK PRODUCT",
    status: "FEATURED",
    description:
      "A sample full-stack case study. Replace this copy with the problem, approach, and outcome of one of your strongest projects.",
    tech: ["Next.js", "React", "PostgreSQL", "TypeScript"],
    href: "/projects/project-atlas",
    github: "https://github.com/yourusername/project-atlas",
    image: "/projects/project-placeholder.svg",
  },
  {
    id: "02",
    slug: "orbit-api",
    title: "ORBIT API",
    subtitle: "Reliable service platform",
    category: "backend",
    categoryLabel: "BACKEND & SYSTEMS",
    status: "SAMPLE PROJECT",
    description:
      "A sample backend project for explaining system design, reliability choices, and the results your implementation achieved.",
    tech: ["Node.js", "REST", "Redis", "Docker"],
    href: "/projects/orbit-api",
    github: "https://github.com/yourusername/orbit-api",
    image: "/projects/project-placeholder.svg",
  },
  {
    id: "03",
    slug: "signal-lab",
    title: "SIGNAL LAB",
    subtitle: "Analytics and reporting toolkit",
    category: "data",
    categoryLabel: "DATA & ANALYTICS",
    status: "SAMPLE PROJECT",
    description:
      "A sample data project for documenting your pipeline, analysis methods, visualizations, and decisions enabled by the work.",
    tech: ["Python", "Pandas", "SQL", "Data Visualization"],
    href: "/projects/signal-lab",
    github: "https://github.com/yourusername/signal-lab",
    image: "/projects/project-placeholder.svg",
  },
];

export const skills = [
  { name: "FULL-STACK DEVELOPMENT", level: 4 },
  { name: "BACKEND SYSTEMS", level: 4 },
  { name: "UI / UX ENGINEERING", level: 3 },
  { name: "DATA & ANALYTICS", level: 3 },
];

export const techStack = [
  { name: "Next.js", icon: "data_object" },
  { name: "TypeScript", icon: "terminal" },
  { name: "React", icon: "hub" },
  { name: "Node.js", icon: "dns" },
  { name: "PostgreSQL", icon: "database" },
  { name: "Docker", icon: "view_in_ar" },
  { name: "Python", icon: "code_blocks" },
  { name: "Tailwind CSS", icon: "css" },
];

// Blog posts live in content/blog/*.md.

export function getProjectThumbnail(project) {
  if (project?.image) {
    return project.image;
  }
  if (project?.github && project.github.includes("github.com")) {
    const match = project.github.match(/github\.com\/([^/]+)\/([^/]+)/);
    if (match) {
      const owner = match[1];
      const repo = match[2].replace(/\.git$/, "");
      return `https://raw.githubusercontent.com/${owner}/${repo}/main/thumbnail/preview.png`;
    }
  }
  if (project?.href && project.href.includes("github.com")) {
    const match = project.href.match(/github\.com\/([^/]+)\/([^/]+)/);
    if (match) {
      const owner = match[1];
      const repo = match[2].replace(/\.git$/, "");
      return `https://raw.githubusercontent.com/${owner}/${repo}/main/thumbnail/preview.png`;
    }
  }
  return null;
}
