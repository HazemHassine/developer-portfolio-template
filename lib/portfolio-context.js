import {
  education,
  experience,
  siteConfig,
  techStack,
} from '@/lib/data';
import { projectsDetail } from '@/lib/projects-data';
import { skillsWithProvenance } from '@/lib/skillsData';
import { getAllPosts, getLocalPosts } from '@/lib/markdown';
import { getPublishedCmsData } from '@/lib/cms-server';

function formatTimeline(items, organizationKey, titleKey) {
  return items
    .map((item) => [
      `• ${item.year}: ${item[organizationKey]} — ${item[titleKey]} (${item.location})`,
      `  Details: ${item.description}`,
    ].join('\n'))
    .join('\n\n');
}

function formatSkills(skills) {
  return skills
    .map((skill) => {
      const provenance = skill.provenance
        ?.map((item) => `    - [${item.badge}] ${item.entity} (${item.role}): ${item.summary}`)
        .join('\n') || '';
      return [
        `• ${skill.name} [${skill.categoryLabel}] - Tag: ${skill.tag}`,
        `  Summary: ${skill.summary}`,
        `  Ecosystem: ${skill.ecosystem?.join(', ')}`,
        `  Evidence & provenance:\n${provenance}`,
      ].join('\n');
    })
    .join('\n\n');
}

function formatProjects(projects) {
  return projects
    .map((project) => {
      const stats = project.stats
        ?.map((stat) => `${stat.label}: ${stat.value}`)
        .join(' | ');
      const problem = project.problemStatement
        ? `Problem: ${project.problemStatement.problem}\nSolution: ${project.problemStatement.solution}`
        : '';
      const capabilities = project.keyCapabilities
        ?.slice(0, 4)
        .map((capability) => `    - ${capability.title}: ${capability.description}`)
        .join('\n');
      return [
        `• [${project.id}] ${project.title} — ${project.subtitle} (${project.category})`,
        `  Headline: ${project.headline || project.summary}`,
        `  Summary: ${project.summary}`,
        `  Tech stack: ${project.techStack?.join(', ')}`,
        `  Links: Showcase: /projects/${project.slug}${project.github ? ` | GitHub: ${project.github}` : ''}${project.liveDemo ? ` | Demo: ${project.liveDemo}` : ''}`,
        stats ? `  Key stats: ${stats}` : '',
        problem ? `  ${problem}` : '',
        capabilities ? `  Key capabilities:\n${capabilities}` : '',
      ].filter(Boolean).join('\n');
    })
    .join('\n\n');
}

function buildContextString(posts, cms = {}) {
  const currentSiteConfig = cms.siteConfig || siteConfig;
  const currentExperience = cms.experience || experience;
  const currentEducation = cms.education || education;
  const currentSkills = cms.skillsWithProvenance || skillsWithProvenance;
  const currentTechStack = cms.techStack || techStack;
  const currentProjects = cms.projectDetails || projectsDetail;
  const currentFocus = cms.pageContent?.about?.currentFocus
    || 'See the About page for the current focus.';
  const projectRoutes = currentProjects
    .map((project) => `/projects/${project.slug}`)
    .join(', ');

  return `
AUTHORITATIVE PORTFOLIO PROFILE FOR ${currentSiteConfig.name.toUpperCase()}

1. PROFILE & IDENTITY
Name: ${currentSiteConfig.name}
Role: ${currentSiteConfig.role}
Tagline: ${currentSiteConfig.tagline}
Location: ${currentSiteConfig.location}
Bio: ${currentSiteConfig.bio.join(' ')}
Current focus: ${currentFocus}
GitHub: ${currentSiteConfig.github}
LinkedIn: ${currentSiteConfig.linkedin}
Email: ${currentSiteConfig.email}
Contact page: /contact

2. EXPERIENCE
${formatTimeline(currentExperience, 'company', 'role')}

3. EDUCATION
${formatTimeline(currentEducation, 'institution', 'degree')}

4. SKILLS & PROVENANCE
${formatSkills(currentSkills)}

5. CORE TECH STACK
${currentTechStack.map((tech) => tech.name).join(', ')}

6. FEATURED PROJECTS
${formatProjects(currentProjects)}

7. WRITING & ARTICLES
${posts?.length
    ? posts.map((post) => [
      `• "${post.title}" (${post.date})`,
      `  Summary: ${post.summary || post.excerpt || 'Technical article'}`,
      `  Link: /blog/${post.slug}`,
    ].join('\n')).join('\n\n')
    : 'No published posts currently listed.'}

8. NAVIGATION ROUTES
• Home: /
• About & skills: /about
• Projects index: /projects
• Project showcases: ${projectRoutes}
• Blog: /blog
• Contact: /contact
`.trim();
}

export async function getPortfolioContext() {
  const [posts, cms] = await Promise.all([getAllPosts(), getPublishedCmsData()]);
  return buildContextString(posts || [], cms);
}

export function getStaticPortfolioContext() {
  const posts = getLocalPosts();
  return buildContextString(posts || []);
}
