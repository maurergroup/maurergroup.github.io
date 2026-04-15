# CLAUDE.md

## Project
Academic research group website for the Maurer Computational Surface Science Group.
Built with Astro 5 (static generation), MDX, and KaTeX for math rendering.
Deployed to GitHub Pages via GitHub Actions on push to the `astro` branch.

## Key conventions
- All content lives in `src/content/` as markdown/MDX with YAML frontmatter
- Schemas are defined in `src/content/config.ts` — always check before adding fields
- Styling is component-scoped inside `<style>` blocks in `.astro` files — no external CSS files
- CSS variables handle light/dark theming (defined in `src/layouts/Layout.astro`)
- Location codes: `at` = Austria, `uk` = UK, `de` = Germany

## Content collections
- `team` — researcher profiles, rendered at `/team/[slug]`
- `publications` — papers sorted by date (newest first) on homepage
- `research` — research areas, rendered at `/research/[slug]`
- `software` — open-source tools, rendered at `/software/[slug]`
- `opportunities` — job postings with `open: true/false` flag
- `theses` — PhD theses archive at `/phd-theses`

## Dev commands
```bash
npm run dev      # local dev server
npm run build    # production build
npm run preview  # preview build locally
```

## Deployment
Push to `astro` branch triggers GitHub Actions build and deploy to GitHub Pages.
Do not push directly to `master`.