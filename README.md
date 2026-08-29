# Developer Portfolio Template

A customizable developer portfolio with a brutalist visual system, responsive project case studies, a Markdown blog, an interactive 404 game, and optional CMS, contact, analytics, and AI-assistant integrations.

The repository ships with explicit placeholder content and placeholder SVGs. It contains no production credentials or personal profile data, so you can clone it and start editing immediately.

## Stack

- Next.js 16 App Router and React 19
- Tailwind CSS 4
- Framer Motion
- Three.js and React Three Fiber
- Local Markdown posts with an optional Supabase CMS
- Optional Vercel AI Gateway assistant, Resend contact delivery, and Vercel Analytics
- Docker and GitHub Actions support

## Quick start

Requirements: Node.js 22 or newer and npm.

```bash
git clone https://github.com/yourusername/developer-portfolio-template.git
cd developer-portfolio-template
npm install
cp .env.example .env.local
npm run dev
```

Open [http://127.0.0.1:3000](http://127.0.0.1:3000). The core portfolio and local Markdown blog work without configuring any external service.

## Customize the portfolio

Start with these files:

| What to change | File |
| --- | --- |
| Name, links, bio, experience, education, project cards, and core stack | `lib/data.js` |
| Full project case studies | `lib/projects-data.js` |
| Detailed skills and evidence | `lib/skillsData.js` |
| SEO, page copy, marquee text, and default theme | `lib/cms-shared.js` |
| Blog posts | `content/blog/*.md` |
| Portrait | `public/profile-placeholder.svg` and its path in `components/HeroSection.js` |
| Project media | `public/projects/` and image paths in the project data files |
| Browser icon | `app/icon.svg` |
| Canonical site URL | `NEXT_PUBLIC_SITE_URL` in `.env.local` |

Keep the short project cards in `lib/data.js` and full case studies in `lib/projects-data.js` aligned by slug. The included `project-atlas`, `orbit-api`, and `signal-lab` entries demonstrate every supported field and are intended to be replaced.

Each local blog post is a Markdown file with frontmatter:

```md
---
title: "How I built this feature"
date: "AUGUST 29, 2026"
summary: "A concise description shown on article cards."
---

Write the article here.
```

## Environment variables

Copy `.env.example` to `.env.local`. Only `NEXT_PUBLIC_SITE_URL` is useful for the basic local setup; all integrations are optional.

| Variable | Purpose |
| --- | --- |
| `NEXT_PUBLIC_SITE_URL` | Canonical URL for metadata, `robots.txt`, and `sitemap.xml` |
| `NEXT_PUBLIC_SUPABASE_URL` | Public Supabase project URL |
| `NEXT_PUBLIC_SUPABASE_ANON_KEY` | Public Supabase anonymous key |
| `SUPABASE_SERVICE_ROLE_KEY` | Server-only CMS, media, inbox, and leaderboard access |
| `ADMIN_TOTP_SECRET` | Base32 TOTP secret for `/admin` |
| `JWT_SECRET` | Long random secret used to sign admin sessions |
| `AI_GATEWAY_API_KEY` | Vercel AI Gateway authentication for the assistant |
| `RESEND_API_KEY` | Contact-form email delivery |

Never commit `.env.local`. Variables without the `NEXT_PUBLIC_` prefix must remain server-only.

## Optional CMS and admin studio

The site falls back to the files in this repository when Supabase is not configured. To enable browser-based content editing:

1. Create a Supabase project.
2. Run `supabase/cms.sql` in the Supabase SQL editor.
3. Add the three Supabase variables to `.env.local`.
4. Create a base32 TOTP secret and add it as `ADMIN_TOTP_SECRET`.
5. Generate a long random `JWT_SECRET`.
6. Add the same TOTP secret to an authenticator app, then sign in at `/admin`.

Published CMS entries override the local defaults. The studio supports draft previews, revisions, project data, page copy, theme variables, blog posts, media, and contact messages.

## Optional contact form

Add `RESEND_API_KEY`, replace `siteConfig.email` in `lib/data.js`, and configure a verified sender in `app/api/contact/route.js` before production use. Resend's sandbox sender is intentionally left in place for initial testing.

## Optional portfolio assistant

Add `AI_GATEWAY_API_KEY` to enable the floating assistant. Its source-of-truth profile is generated from the same portfolio, project, skill, CMS, and blog data used by the website. Customize its rules and model in `app/api/chat/route.js`.

## Commands

```bash
npm run dev      # local development
npm run lint     # ESLint
npm run build    # production build
npm run start    # serve the production build
```

## Docker

After creating `.env.local`:

```bash
docker compose up --build
```

The production image uses Next.js standalone output and serves the site on port 3000.

## Deploy

Deploy to any platform that supports Next.js 16 and Node.js 22+. Set `NEXT_PUBLIC_SITE_URL` to the final HTTPS origin and configure only the optional service variables you plan to use.

Before publishing, search for `Your Name`, `yourusername`, `you@example.com`, `Your Location`, and `example.com` to catch any remaining placeholders.

## License

MIT — see `LICENSE`.
