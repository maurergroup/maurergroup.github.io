# Research Group Website - Complete Setup Guide

## What Has Been Created

A fully functional academic research group website with:

### Core Structure
- ✅ Astro project configuration
- ✅ TypeScript support with content validation
- ✅ Responsive layouts and components
- ✅ GitHub Actions deployment workflow

### Pages
- ✅ Homepage with all sections (About, Research, Team, Publications, Software, Opportunities, Locations)
- ✅ Dynamic team member detail pages
- ✅ Dynamic research area detail pages

### Content Collections
- ✅ **Team Members** (3 sample profiles with full details)
- ✅ **Publications** (2 sample papers)
- ✅ **Research Areas** (2 areas: Machine Learning, NLP)
- ✅ **Software** (3 projects)
- ✅ **Opportunities** (3 positions)

### Components
- Navigation with smooth scrolling
- Hero banner
- Team member cards (clickable, link to detail pages)
- Research area cards (clickable, link to detail pages)
- Publication listings
- Software project cards
- Opportunity cards
- Multi-location display

## Quick Start

1. **Install dependencies**:
   ```bash
   npm install
   ```

2. **Run development server**:
   ```bash
   npm run dev
   ```
   Visit http://localhost:4321

3. **Build for production**:
   ```bash
   npm run build
   ```

## Customization Checklist

### 1. Update Site Configuration
Edit `astro.config.mjs`:
```javascript
export default defineConfig({
  site: 'https://YOUR-USERNAME.github.io',
  base: '/YOUR-REPO-NAME',
  // ...
});
```

### 2. Update Lab Information
Edit `src/pages/index.astro`:
- Line 31-32: Hero title and subtitle
- Lines 142-210: Location information (addresses, contacts, team members by location)

### 3. Update Navigation
Edit `src/components/Navigation.astro`:
- Line 3: Lab name/logo
- Lines 5-9: Navigation links

### 4. Customize Colors
Edit `src/layouts/Layout.astro` (lines 22-29):
```css
:root {
  --primary: #2563eb;      /* Main brand color */
  --primary-dark: #1e40af;
  --text: #1e293b;
  --text-light: #64748b;
  --bg: #ffffff;
  --bg-alt: #f8fafc;
  --border: #e2e8f0;
}
```

### 5. Replace Sample Content

#### Team Members
- Edit/delete files in `src/content/team/`
- Ensure each has required fields: name, role, email, order, location
- Optional: image, website, scholar, github, twitter, researchInterests, education

#### Publications
- Edit/delete files in `src/content/publications/`
- Required: title, authors, venue, year, date
- Optional: pdf, code, dataset, demo

#### Research Areas
- Edit/delete files in `src/content/research/`
- Required: title, description, order
- Body content will appear on detail pages

#### Software
- Edit/delete files in `src/content/software/`
- Required: title, description, order
- Optional: github, documentation, demo, language, stars

#### Opportunities
- Edit/delete files in `src/content/opportunities/`
- Required: title, type, location, open, order
- Optional: deadline
- Types: phd, postdoc, engineer, intern, visiting
- Locations: usa, uk, germany, remote, any

## File Locations Reference

### Configuration
- `astro.config.mjs` - Site URL and base path
- `src/content/config.ts` - Content schemas (don't modify unless adding fields)
- `tsconfig.json` - TypeScript settings

### Layout & Styling
- `src/layouts/Layout.astro` - Base layout, global styles, CSS variables
- `src/components/Navigation.astro` - Top navigation bar

### Pages
- `src/pages/index.astro` - Homepage (main file to customize)
- `src/pages/team/[slug].astro` - Team member detail template
- `src/pages/research/[slug].astro` - Research area detail template

### Content
- `src/content/team/*.md` - Team member profiles
- `src/content/publications/*.md` - Publications
- `src/content/research/*.md` - Research areas
- `src/content/software/*.md` - Software projects
- `src/content/opportunities/*.md` - Job postings

### Deployment
- `.github/workflows/deploy.yml` - GitHub Actions workflow

## GitHub Pages Deployment

1. **Push to GitHub**:
   ```bash
   git add .
   git commit -m "Initial setup"
   git push origin main
   ```

2. **Enable GitHub Pages**:
   - Go to repository Settings → Pages
   - Source: "GitHub Actions"
   - The workflow will automatically build and deploy

3. **Update astro.config.mjs** with your actual URLs

## Adding Your Own Content

### Example: Adding a New Team Member

1. Create `src/content/team/alice-johnson.md`:
   ```markdown
   ---
   name: "Dr. Alice Johnson"
   role: "Research Scientist"
   email: "alice@university.edu"
   order: 4
   location: "uk"
   github: "alicejohnson"
   researchInterests:
     - "Machine Learning"
     - "Computer Vision"
   ---

   Dr. Johnson's biography goes here...
   ```

2. The website will automatically:
   - Show Alice on the homepage team grid
   - Create a detail page at `/team/alice-johnson`
   - Add her to the UK location section

### Example: Adding a New Research Area

1. Create `src/content/research/computer-vision.md`:
   ```markdown
   ---
   title: "Computer Vision"
   description: "Advanced techniques for visual understanding"
   order: 3
   ---

   Our computer vision research focuses on...

   ## Key Projects

   - Project 1
   - Project 2
   ```

2. The website will automatically:
   - Show a card on the homepage
   - Create a detail page at `/research/computer-vision`
   - Show related publications (if titles match)

## Tips

- **Images**: Add team photos to `public/images/` and reference as `/images/photo.jpg`
- **Order**: Use the `order` field to control display order
- **Dates**: Publications are auto-sorted by date (newest first)
- **Locations**: Team members are automatically grouped by the `location` field
- **Slug**: The filename (without .md) becomes the URL slug

## Troubleshooting

### Build Errors
- Run `npm run build` to check for content validation errors
- Check that all required frontmatter fields are present
- Ensure dates are in YYYY-MM-DD format

### Content Not Showing
- Check the `order` field is set correctly
- For opportunities, ensure `open: true`
- Verify the file is in the correct directory

### Styling Issues
- Clear browser cache
- Check CSS custom properties in Layout.astro
- Verify component imports in index.astro

## Next Steps

1. ✅ Replace sample content with your actual data
2. ✅ Customize colors and styling
3. ✅ Update lab name and location information
4. ✅ Add team member photos (optional)
5. ✅ Test locally with `npm run dev`
6. ✅ Deploy to GitHub Pages
7. ✅ Set up custom domain (optional)

## Support

- Astro Documentation: https://docs.astro.build
- GitHub Pages Docs: https://docs.github.com/pages
- This project structure follows Astro best practices for content-driven sites

Good luck with your research group website!
