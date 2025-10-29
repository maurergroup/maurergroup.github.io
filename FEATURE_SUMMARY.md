# Research Group Website - Feature Summary

## ✅ All Implemented Features

### 1. Team Member Assignment to Research Areas

**What it does:** Team members can be assigned to specific research areas and will automatically appear on those research area detail pages.

**How to use:**
```markdown
---
name: "Dr. Jane Researcher"
researchAreas:
  - "machine-learning"
  - "nlp"
---
```

**Benefits:**
- One team member can be assigned to multiple research areas
- Automatic display on research detail pages
- Clickable cards that link to team member profiles
- Sorted by team member `order` field

**Documentation:** [TEAM_ASSIGNMENT_GUIDE.md](TEAM_ASSIGNMENT_GUIDE.md)

### 2. LaTeX/Math Equation Support

**What it does:** Write mathematical equations in Markdown using LaTeX syntax, rendered with KaTeX.

**How to use:**
```markdown
Inline math: $E = mc^2$

Display math:
$$
\nabla f(x) = \frac{\partial f}{\partial x}
$$
```

**Benefits:**
- Fast rendering (KaTeX, not MathJax)
- No JavaScript required at runtime
- Works in all content types (team bios, research areas, publications)

**Documentation:** [LATEX_GUIDE.md](LATEX_GUIDE.md)

### 3. Clickable Research Area Cards

**What it does:** Research area cards on the homepage link to detailed research pages.

**Features:**
- Hover effects with "Learn more →" indicator
- Smooth transitions
- Full detail pages with content, team members, and publications

**Fixed:** Previously cards were not clickable

### 4. Team Member Detail Pages

**What it does:** Each team member gets their own dedicated page with full profile.

**Includes:**
- Profile photo or initials
- Contact links (email, website, GitHub, Google Scholar, Twitter)
- Research interests
- Full biography with Markdown support
- Education history
- Back navigation to team section

**Fixed:** Previously returned 404 errors due to base path configuration

## Content Structure

### Team Members
**Location:** `src/content/team/*.md`

**Required fields:**
- `name`, `role`, `email`, `order`, `location`

**Optional fields:**
- `image`, `website`, `github`, `scholar`, `twitter`
- `researchInterests`, `researchAreas`, `education`, `bio`

### Research Areas
**Location:** `src/content/research/*.md`

**Required fields:**
- `title`, `description`, `order`

**Features:**
- Full Markdown content support
- LaTeX equation support
- Auto-display of assigned team members
- Auto-display of related publications

### Publications
**Location:** `src/content/publications/*.md`

**Required fields:**
- `title`, `authors`, `venue`, `year`, `date`

**Optional fields:**
- `pdf`, `code`, `dataset`, `demo`

### Software Projects
**Location:** `src/content/software/*.md`

**Required fields:**
- `title`, `description`, `order`

**Optional fields:**
- `github`, `documentation`, `demo`, `pypi`, `npm`, `language`, `stars`

### Job Opportunities
**Location:** `src/content/opportunities/*.md`

**Required fields:**
- `title`, `type`, `location`, `open`, `order`

**Optional fields:**
- `deadline`

## Page Types

### 1. Homepage (`/`)
**Sections:**
- Hero banner
- About (with PI profile)
- Research Areas (clickable cards)
- Team (clickable cards)
- Publications
- Software
- Opportunities
- Locations (grouped by USA, UK, Germany)

### 2. Team Member Pages (`/team/[slug]`)
**Features:**
- Full profile with contact links
- Research interests
- Biography
- Education history
- Breadcrumb navigation

### 3. Research Area Pages (`/research/[slug]`)
**Features:**
- Detailed content with LaTeX support
- Team members working in this area
- Related publications
- Breadcrumb navigation

## Key Improvements Made

### Session 1: Initial Setup
- ✅ Complete project structure
- ✅ All components and layouts
- ✅ Sample content for all sections
- ✅ GitHub Actions deployment workflow

### Session 2: Bug Fixes
- ✅ Fixed research cards not clickable
- ✅ Fixed team member 404 errors
- ✅ Updated base path for local development
- ✅ Added comprehensive troubleshooting guide

### Session 3: Enhanced Features
- ✅ Added LaTeX/Math equation support
- ✅ Added team member assignment to research areas
- ✅ Created detailed documentation for all features

## Current Sample Data

### Team Members
1. **Dr. Jane Researcher** (PI, USA)
   - Assigned to: Machine Learning, NLP
2. **Dr. John Smith** (Senior Researcher, UK)
   - Assigned to: Machine Learning
3. **Maria Lopez** (PhD Candidate, Germany)
   - Assigned to: NLP

### Research Areas
1. **Machine Learning**
   - Shows: Dr. Jane Researcher, Dr. John Smith
   - Includes LaTeX equation example
2. **Natural Language Processing**
   - Shows: Dr. Jane Researcher, Maria Lopez

### Publications
1. Neural Architecture paper (2024)
2. Fairness-Aware paper (2023)

### Software
1. NeuralToolkit (Python, 1250 stars)
2. MultiLang (Python, 890 stars)
3. FairnessChecker (Python, 645 stars)

### Opportunities
1. PhD Position in Machine Learning (USA)
2. Postdoc in NLP (Germany)
3. Summer Internship (Multiple locations)

## Quick Start Commands

```bash
# Install dependencies (including LaTeX packages)
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Configuration Notes

### For Local Development
```javascript
// astro.config.mjs
base: '/'
```

### For GitHub Pages
```javascript
// astro.config.mjs
base: '/your-repo-name'
```

### For Custom Domain
```javascript
// astro.config.mjs
site: 'https://yourdomain.com'
base: '/'
```

## Documentation Index

1. **[README.md](README.md)** - Project overview and quick start
2. **[SETUP_GUIDE.md](SETUP_GUIDE.md)** - Detailed setup and customization
3. **[TROUBLESHOOTING.md](TROUBLESHOOTING.md)** - Common issues and fixes
4. **[LATEX_GUIDE.md](LATEX_GUIDE.md)** - How to use LaTeX equations
5. **[TEAM_ASSIGNMENT_GUIDE.md](TEAM_ASSIGNMENT_GUIDE.md)** - Assigning team members to research areas
6. **[FEATURE_SUMMARY.md](FEATURE_SUMMARY.md)** - This file

## Next Steps

To customize for your lab:

1. ✅ Update `astro.config.mjs` with your site URL
2. ✅ Replace sample team members in `src/content/team/`
3. ✅ Add your publications in `src/content/publications/`
4. ✅ Update research areas in `src/content/research/`
5. ✅ Assign team members to research areas
6. ✅ Add your software projects
7. ✅ Update job opportunities
8. ✅ Customize colors in `src/layouts/Layout.astro`
9. ✅ Update lab name and location info in `src/pages/index.astro`
10. ✅ Test locally, then deploy!

## Support

All features are fully documented. Check the relevant guide for detailed instructions:
- LaTeX not rendering? → [LATEX_GUIDE.md](LATEX_GUIDE.md)
- Team members not showing? → [TEAM_ASSIGNMENT_GUIDE.md](TEAM_ASSIGNMENT_GUIDE.md)
- Links broken? → [TROUBLESHOOTING.md](TROUBLESHOOTING.md)
- General setup? → [SETUP_GUIDE.md](SETUP_GUIDE.md)
