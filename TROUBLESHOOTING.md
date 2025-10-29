# Troubleshooting Guide

## Fixed Issues

### ✅ Issue 1: Research Area Cards Not Clickable

**Problem:** Research area cards on the homepage were not clickable/didn't open separate pages.

**Solution:** Updated `src/components/ResearchCard.astro` to:
- Accept a `slug` prop
- Wrap content in an `<a>` tag linking to `/research/${slug}`
- Added hover effects and "Learn more →" indicator

**Status:** FIXED

### ✅ Issue 2: Team Member Links Return 404

**Problem:** Clicking on team members resulted in 404 errors.

**Root Cause:** The `base` path in `astro.config.mjs` was set to `/repository-name` which is correct for GitHub Pages deployment, but causes routing issues in local development.

**Solution:** Changed `base: '/'` for local development in `astro.config.mjs`.

**Important Notes:**
- For local development: use `base: '/'`
- For GitHub Pages deployment: change to `base: '/your-repo-name'`
- See configuration section below for details

**Status:** FIXED

## Configuration for Different Environments

### Local Development

Edit `astro.config.mjs`:

```javascript
export default defineConfig({
  site: 'https://yourusername.github.io',
  base: '/', // Use this for local development
  integrations: [
    mdx({
      remarkPlugins: [remarkMath],
      rehypePlugins: [rehypeKatex]
    })
  ],
  output: 'static'
});
```

### GitHub Pages Deployment

Before deploying to GitHub Pages, update `astro.config.mjs`:

```javascript
export default defineConfig({
  site: 'https://yourusername.github.io',
  base: '/your-repository-name', // Change to your actual repo name
  integrations: [
    mdx({
      remarkPlugins: [remarkMath],
      rehypePlugins: [rehypeKatex]
    })
  ],
  output: 'static'
});
```

### Custom Domain

If using a custom domain, use:

```javascript
export default defineConfig({
  site: 'https://yourdomain.com',
  base: '/', // Use root for custom domain
  integrations: [
    mdx({
      remarkPlugins: [remarkMath],
      rehypePlugins: [rehypeKatex]
    })
  ],
  output: 'static'
});
```

## Common Issues

### LaTeX Equations Not Rendering

**Symptoms:** Math equations show as raw LaTeX text (e.g., `$$E = mc^2$$`)

**Solutions:**
1. Make sure you ran `npm install` after adding the math packages
2. Restart the dev server: Stop and run `npm run dev` again
3. Check that KaTeX CSS is loading (check browser console)
4. Verify your LaTeX syntax is correct

### 404 Errors on Links

**Symptoms:** Links to team members or research pages return 404

**Solutions:**
1. Check `base` path in `astro.config.mjs` matches your environment
2. For local dev, use `base: '/'`
3. Make sure the content files exist in the correct directories
4. Check that file names match the slugs in URLs (e.g., `jane-researcher.md` → `/team/jane-researcher`)

### Build Errors

**Symptoms:** `npm run build` fails with content validation errors

**Solutions:**
1. Check all frontmatter fields match the schema in `src/content/config.ts`
2. Required fields must be present:
   - Team: `name`, `role`, `email`, `order`, `location`
   - Publications: `title`, `authors`, `venue`, `year`, `date`
   - Research: `title`, `description`, `order`
3. Dates must be in YYYY-MM-DD format
4. `location` must be one of: `usa`, `uk`, `germany`

### CSS/Styling Issues

**Symptoms:** Page looks broken or unstyled

**Solutions:**
1. Clear browser cache (Ctrl+Shift+R or Cmd+Shift+R)
2. Check browser console for CSS loading errors
3. Verify `src/layouts/Layout.astro` has the global styles
4. Make sure KaTeX CSS link is present in the layout

### Navigation Links Not Working

**Symptoms:** Clicking nav links doesn't scroll to sections

**Solutions:**
1. Check that the script tag at the bottom of `src/pages/index.astro` is present
2. Verify section IDs match the href in navigation (e.g., `id="team"` and `href="#team"`)
3. The smooth scroll JavaScript should be at the bottom of index.astro

## Verification Checklist

After fixes, verify the following work:

### Homepage
- [ ] Research area cards are clickable
- [ ] Clicking research card opens detail page
- [ ] Team member cards are clickable
- [ ] Clicking team member opens detail page
- [ ] Navigation links scroll to sections
- [ ] All sections display correctly

### Research Area Detail Pages
- [ ] Page loads without 404
- [ ] LaTeX equations render (if present)
- [ ] Breadcrumb links work
- [ ] "Back to Research Areas" link works
- [ ] Related publications show (if any)

### Team Member Detail Pages
- [ ] Page loads without 404
- [ ] Profile photo/initials display
- [ ] Contact links work
- [ ] Research interests display
- [ ] Education history shows (if present)
- [ ] Biography content renders
- [ ] "Back to Team" link works

### LaTeX Support
- [ ] Inline math renders: $x^2$
- [ ] Display math renders: $$E = mc^2$$
- [ ] Complex equations work
- [ ] Math in research pages works
- [ ] Math in team bios works

## Testing Steps

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Start dev server:**
   ```bash
   npm run dev
   ```

3. **Test in browser:**
   - Open http://localhost:4321
   - Click on a research area card → should open detail page
   - Go back, click on a team member → should open detail page
   - Click navigation links → should scroll smoothly
   - Check Machine Learning research page → should show LaTeX equation

4. **Test build:**
   ```bash
   npm run build
   npm run preview
   ```

## Getting Help

If you encounter issues not covered here:

1. Check the browser console for JavaScript errors
2. Check the terminal for build errors
3. Verify all content files have correct frontmatter
4. Make sure `base` path is correct for your environment
5. Try deleting `node_modules` and running `npm install` again

## Quick Reference

### File Structure
```
src/
├── content/
│   ├── team/*.md           # Team member profiles
│   ├── research/*.md       # Research areas
│   ├── publications/*.md   # Papers
│   ├── software/*.md       # Software projects
│   └── opportunities/*.md  # Job postings
├── pages/
│   ├── index.astro         # Homepage
│   ├── team/[slug].astro   # Team detail template
│   └── research/[slug].astro # Research detail template
└── components/
    ├── TeamMember.astro    # Team card (needs slug prop)
    └── ResearchCard.astro  # Research card (needs slug prop)
```

### Key Props

**TeamMember component:**
```astro
<TeamMember
  name={member.data.name}
  role={member.data.role}
  email={member.data.email}
  image={member.data.image}
  slug={member.slug}  // Required for links!
/>
```

**ResearchCard component:**
```astro
<ResearchCard
  title={area.data.title}
  description={area.data.description}
  slug={area.slug}  // Required for links!
/>
```
