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

### 5. 3Dmol.js Molecular Viewer Support

**What it does:** Embed interactive 3D molecular structures in research area pages.

**Features:**
- Load structures from PDB database
- Multiple visualization styles (cartoon, stick, sphere, etc.)
- Interactive rotation and zoom
- Color by structure, element, or custom schemes
- Add labels and surfaces
- Support for proteins, small molecules, and other structures

**How to use:**
```html
<div id="viewer-unique" style="width: 100%; height: 500px;"></div>
<script>
  $3Dmol.download('pdb:1AKE', viewer, {}, function() {
    viewer.setStyle({}, {cartoon: {color: 'spectrum'}});
    viewer.render();
  });
</script>
```

**Documentation:** [3DMOL_GUIDE.md](3DMOL_GUIDE.md)

### 6. Location Card Images

**What it does:** Add photos to location cards in "How to Find Us" section.

**Features:**
- Dedicated image space (200px height) at top of each location card
- Responsive image sizing with `object-fit: cover`
- Rounded corners matching card design
- Fallback gradient background
- Currently shows placeholders with instructions

**How to use:**
Place images in `public/images/` and update the HTML:
```html
<div class="location-image">
  <img src="/images/vienna.jpg" alt="Vienna office" />
</div>
```

**Documentation:** [LOCATION_IMAGES_GUIDE.md](LOCATION_IMAGES_GUIDE.md)

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
- 3Dmol.js molecular viewer support
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

### Session 4: Multiple Locations
- ✅ Changed location from single to array-based
- ✅ Team members can now have multiple locations
- ✅ Updated all team member files and homepage filtering

### Session 5: Advanced Features
- ✅ Added 3Dmol.js molecular viewer support
- ✅ Created MolecularViewer component
- ✅ Added example molecular visualization to Computational Chemistry research area
- ✅ Created comprehensive 3Dmol.js usage guide
- ✅ Added image support to location cards on homepage
- ✅ Created location images setup guide

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
5. **[LATEX_TROUBLESHOOTING.md](LATEX_TROUBLESHOOTING.md)** - Detailed LaTeX debugging
6. **[TEAM_ASSIGNMENT_GUIDE.md](TEAM_ASSIGNMENT_GUIDE.md)** - Assigning team members to research areas
7. **[MULTIPLE_LOCATIONS_GUIDE.md](MULTIPLE_LOCATIONS_GUIDE.md)** - Multiple locations per team member
8. **[3DMOL_GUIDE.md](3DMOL_GUIDE.md)** - Using molecular viewers in research pages
9. **[LOCATION_IMAGES_GUIDE.md](LOCATION_IMAGES_GUIDE.md)** - Adding images to location cards
10. **[FEATURE_SUMMARY.md](FEATURE_SUMMARY.md)** - This file

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
- LaTeX not rendering? → [LATEX_GUIDE.md](LATEX_GUIDE.md) or [LATEX_TROUBLESHOOTING.md](LATEX_TROUBLESHOOTING.md)
- Team members not showing? → [TEAM_ASSIGNMENT_GUIDE.md](TEAM_ASSIGNMENT_GUIDE.md)
- Multiple locations? → [MULTIPLE_LOCATIONS_GUIDE.md](MULTIPLE_LOCATIONS_GUIDE.md)
- Molecular viewers? → [3DMOL_GUIDE.md](3DMOL_GUIDE.md)
- Location images? → [LOCATION_IMAGES_GUIDE.md](LOCATION_IMAGES_GUIDE.md)
- Links broken? → [TROUBLESHOOTING.md](TROUBLESHOOTING.md)
- General setup? → [SETUP_GUIDE.md](SETUP_GUIDE.md)
