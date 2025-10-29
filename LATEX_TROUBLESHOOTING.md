# LaTeX Rendering Troubleshooting

## Issue: LaTeX Equations Not Rendering

If you see raw LaTeX text like `$$E = mc^2$$` instead of rendered equations, here are the solutions:

### Solution 1: Check Configuration ✅

The Astro configuration must include math plugins for **both** Markdown and MDX files.

**Correct configuration** in `astro.config.mjs`:

```javascript
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';

export default defineConfig({
  integrations: [mdx()],
  markdown: {
    remarkPlugins: [remarkMath],    // For .md files
    rehypePlugins: [rehypeKatex]
  },
  output: 'static'
});
```

**Why this matters:**
- Content collection files are `.md` (Markdown)
- The `markdown` option processes `.md` files
- The `mdx()` integration processes `.mdx` files
- You need plugins in both places for full coverage

**Common mistake:**
```javascript
// ❌ WRONG - Only works for .mdx files
integrations: [
  mdx({
    remarkPlugins: [remarkMath],
    rehypePlugins: [rehypeKatex]
  })
]
// Missing the markdown: { } section!
```

### Solution 2: Check KaTeX CSS is Loaded

The KaTeX stylesheet must be in your layout file.

**Check `src/layouts/Layout.astro`:**

```html
<head>
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/katex@0.16.9/dist/katex.min.css"
        integrity="sha384-n8MVd4RsNIU0tAv4ct0nTaAbDJwPJzDEaqSD1odI+WdtXRGWt2kTvGFasHpSy3SV"
        crossorigin="anonymous">
</head>
```

**Test:** Open browser dev tools and check if the KaTeX CSS loaded successfully.

### Solution 3: Verify Dependencies are Installed

Make sure the math packages are installed:

```bash
npm install
```

Check `package.json` includes:
```json
"dependencies": {
  "rehype-katex": "^7.0.0",
  "remark-math": "^6.0.0"
}
```

### Solution 4: Restart Dev Server

After changing configuration, always restart:

```bash
# Stop the server (Ctrl+C)
npm run dev
```

### Solution 5: Check LaTeX Syntax

Make sure your LaTeX syntax is valid:

**Inline math** - single `$`:
```markdown
The equation $E = mc^2$ is famous.
```

**Display math** - double `$$`:
```markdown
$$
E = mc^2
$$
```

**Common syntax errors:**
```markdown
❌ $ $E = mc^2$ $          # Extra spaces
❌ $$E = mc^2              # Missing closing $$
❌ $E = mc^2$              # Use $$ for display math on own line
✅ $$E = mc^2$$            # Correct display math
```

### Solution 6: File Extension

Content files can be either `.md` or `.mdx`:
- `.md` files work with the `markdown` config
- `.mdx` files work with the `mdx()` integration

Both should work if configured correctly.

### Solution 7: Browser Cache

Clear your browser cache:
- Chrome/Edge: `Ctrl+Shift+R` (Windows) or `Cmd+Shift+R` (Mac)
- Firefox: `Ctrl+F5` (Windows) or `Cmd+Shift+R` (Mac)

## Testing

### Test 1: Simple Inline Math

Create a test file `src/content/research/test.md`:

```markdown
---
title: "Test"
description: "Testing LaTeX"
order: 99
---

This is inline math: $x^2 + y^2 = z^2$

This is display math:

$$
\frac{-b \pm \sqrt{b^2 - 4ac}}{2a}
$$
```

Visit `/research/test` and check if equations render.

### Test 2: Check Browser Console

1. Open browser dev tools (F12)
2. Go to Console tab
3. Look for errors related to:
   - KaTeX loading
   - Math rendering
   - Missing dependencies

### Test 3: Check Network Tab

1. Open browser dev tools (F12)
2. Go to Network tab
3. Reload page
4. Look for `katex.min.css` - should show status 200
5. If 404 or failed, the CSS link is broken

## Common Errors and Fixes

### Error: "remark-math is not defined"

**Cause:** Package not installed

**Fix:**
```bash
npm install remark-math rehype-katex
```

### Error: KaTeX CSS 404

**Cause:** Incorrect CDN link

**Fix:** Use the correct link:
```html
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/katex@0.16.9/dist/katex.min.css">
```

### Error: Build fails with "Unknown macro"

**Cause:** Using LaTeX commands not supported by KaTeX

**Fix:** Check [KaTeX supported functions](https://katex.org/docs/supported.html)

Common unsupported commands:
- `\tag{}` - Use `\text{(1)}` instead
- Some AMS environments - Use alternatives

### Equations Show as Text

**Cause:** Math plugins not applied to `.md` files

**Fix:** Add `markdown: { }` section to `astro.config.mjs` (see Solution 1)

## Verification Checklist

After fixing, verify:

- [ ] `astro.config.mjs` has both `markdown` and `mdx` configured
- [ ] `package.json` includes `remark-math` and `rehype-katex`
- [ ] KaTeX CSS link is in `src/layouts/Layout.astro`
- [ ] Dev server restarted after config changes
- [ ] LaTeX syntax is correct
- [ ] Browser cache cleared
- [ ] Test page shows rendered equations

## Working Example

The Machine Learning research page (`src/content/research/machine-learning.md`) includes a working LaTeX example:

```markdown
A key result in our work shows that the expected loss on a target task $\mathcal{T}_t$ can be bounded by:

$$
\mathbb{E}_{\mathcal{T}_t}[\mathcal{L}(\theta)] \leq \mathbb{E}_{\mathcal{T}_s}[\mathcal{L}(\theta)] + \mathcal{D}(\mathcal{T}_s, \mathcal{T}_t)
$$

where $\mathcal{D}(\mathcal{T}_s, \mathcal{T}_t)$ measures the divergence between source and target task distributions.
```

Visit `/research/machine-learning` to see it rendered.

## Still Not Working?

If equations still don't render after trying all solutions:

1. **Check versions:**
   ```bash
   npm list remark-math rehype-katex
   ```

2. **Try clean install:**
   ```bash
   rm -rf node_modules package-lock.json
   npm install
   ```

3. **Check Astro version:**
   ```bash
   npm list astro
   ```
   Should be 4.0.0 or higher

4. **Test with minimal config:**
   Temporarily simplify `astro.config.mjs` to isolate the issue

5. **Check for conflicts:**
   Other remark/rehype plugins might conflict with math plugins

## Quick Fix Summary

**Most common issue:** Plugins only in MDX integration, not in markdown section.

**Quick fix:**
```javascript
// astro.config.mjs
export default defineConfig({
  integrations: [mdx()],
  markdown: {                    // Add this!
    remarkPlugins: [remarkMath],
    rehypePlugins: [rehypeKatex]
  }
});
```

Then restart: `npm run dev`
