# LaTeX Math Equations in Markdown

LaTeX/KaTeX support has been added to the website! You can now write mathematical equations in your Markdown content files.

## Setup

The following packages have been added:
- `remark-math` - Parses math syntax in Markdown
- `rehype-katex` - Renders math using KaTeX
- KaTeX CSS - Loaded via CDN in the layout

## Usage

### Inline Math

Use single dollar signs `$...$` for inline math:

```markdown
The quadratic formula is $x = \frac{-b \pm \sqrt{b^2-4ac}}{2a}$.
```

**Result:** The quadratic formula is $x = \frac{-b \pm \sqrt{b^2-4ac}}{2a}$.

### Display Math (Block)

Use double dollar signs `$$...$$` for display/block math:

```markdown
$$
E = mc^2
$$
```

**Result:**
$$
E = mc^2
$$

### Complex Equations

```markdown
$$
\nabla \times \vec{\mathbf{B}} -\, \frac1c\, \frac{\partial\vec{\mathbf{E}}}{\partial t} = \frac{4\pi}{c}\vec{\mathbf{j}}
$$
```

**Result:**
$$
\nabla \times \vec{\mathbf{B}} -\, \frac1c\, \frac{\partial\vec{\mathbf{E}}}{\partial t} = \frac{4\pi}{c}\vec{\mathbf{j}}
$$

### Matrices

```markdown
$$
\begin{bmatrix}
a & b \\
c & d
\end{bmatrix}
$$
```

**Result:**
$$
\begin{bmatrix}
a & b \\
c & d
\end{bmatrix}
$$

### Aligned Equations

```markdown
$$
\begin{aligned}
f(x) &= (x+a)(x+b) \\
&= x^2 + (a+b)x + ab
\end{aligned}
$$
```

**Result:**
$$
\begin{aligned}
f(x) &= (x+a)(x+b) \\
&= x^2 + (a+b)x + ab
\end{aligned}
$$

## Examples in Content Files

### Research Area Example

Create `src/content/research/optimization.md`:

```markdown
---
title: "Optimization Theory"
description: "Mathematical foundations of optimization algorithms"
order: 3
---

Our research focuses on convex optimization problems of the form:

$$
\min_{x \in \mathbb{R}^n} f(x) \quad \text{subject to} \quad g_i(x) \leq 0
$$

where $f: \mathbb{R}^n \to \mathbb{R}$ is the objective function.

## Gradient Descent

The gradient descent algorithm updates parameters using:

$$
x_{k+1} = x_k - \alpha \nabla f(x_k)
$$

where $\alpha > 0$ is the learning rate.
```

### Publication Example

In `src/content/publications/convergence-analysis.md`:

```markdown
---
title: "Convergence Analysis of Stochastic Gradient Descent"
authors: ["J. Researcher", "M. Lopez"]
venue: "NeurIPS 2024"
year: 2024
date: 2024-12-01
pdf: "https://example.com/paper.pdf"
---

We prove that under Lipschitz conditions, SGD converges at rate $O(1/\sqrt{T})$ where $T$ is the number of iterations. The key bound is:

$$
\mathbb{E}[f(x_T) - f(x^*)] \leq \frac{L\sigma^2}{2\sqrt{T}}
$$
```

### Team Member Biography Example

In `src/content/team/mathematician.md`:

```markdown
---
name: "Dr. Math Expert"
role: "Associate Professor"
email: "math@university.edu"
order: 4
location: "usa"
---

Dr. Expert's work focuses on the Riemann Hypothesis, which states that all non-trivial zeros of the Riemann zeta function $\zeta(s) = \sum_{n=1}^{\infty} \frac{1}{n^s}$ have real part equal to $\frac{1}{2}$.

## Recent Results

We have shown that for large $N$:

$$
\pi(N) \sim \frac{N}{\log N}
$$

where $\pi(N)$ is the prime counting function.
```

## Installation

After updating the config files, run:

```bash
npm install
```

This will install the new math rendering dependencies.

## Supported Syntax

KaTeX supports most standard LaTeX math commands. See the full list at:
https://katex.org/docs/supported.html

Common features:
- Greek letters: `\alpha`, `\beta`, `\gamma`, etc.
- Operators: `\sum`, `\prod`, `\int`, `\lim`, etc.
- Relations: `\leq`, `\geq`, `\approx`, `\equiv`, etc.
- Arrows: `\to`, `\rightarrow`, `\Rightarrow`, etc.
- Sets: `\mathbb{R}`, `\mathbb{N}`, `\mathbb{Z}`, etc.
- Matrices: `\begin{matrix}...\end{matrix}`, `\begin{bmatrix}...\end{bmatrix}`
- Alignment: `\begin{aligned}...\end{aligned}`

## Notes

- **Performance**: KaTeX is much faster than MathJax and doesn't require JavaScript at runtime
- **Rendering**: Math is rendered during build time as HTML+CSS
- **Accessibility**: KaTeX output includes proper semantic HTML
- **Escaping**: If you need to write a literal `$` symbol, escape it as `\$`

## Troubleshooting

### Math not rendering

**Most common issue:** Configuration only in MDX integration, not in markdown section.

The config must include plugins for BOTH `.md` and `.mdx` files:

```javascript
// astro.config.mjs
export default defineConfig({
  integrations: [mdx()],
  markdown: {                    // Required for .md files!
    remarkPlugins: [remarkMath],
    rehypePlugins: [rehypeKatex]
  }
});
```

**Other checks:**
1. Make sure you ran `npm install` after updating the config
2. Restart the dev server (`npm run dev`)
3. Check browser console for KaTeX CSS loading errors
4. See [LATEX_TROUBLESHOOTING.md](LATEX_TROUBLESHOOTING.md) for detailed fixes

### Syntax errors
- KaTeX is stricter than LaTeX - check the supported commands list
- Use `\text{...}` for normal text inside math mode
- Make sure braces are balanced

### Build errors
- Check that your LaTeX syntax is valid
- Common issue: unescaped special characters like `_`, `^`, `{`, `}`
- Run `npm run build` to see detailed error messages
