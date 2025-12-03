# Opportunities Summary

## Overview

The opportunities section now features **3 active positions** across the group's locations in Austria and Germany, all with a deadline of January 15, 2026.

## Active Positions (Open)

### 1. Postdoctoral Research Assistant in Theoretical Chemistry (Göttingen)
**File:** `src/content/opportunities/postdoc-goettingen-2026.md`

- **Type:** Postdoc
- **Location:** University of Göttingen, Germany
- **Positions Available:** 2
- **Start Date:** March 1, 2026
- **Duration:** 2 years
- **Salary:** Pay grade 13 TV-L (100%)
- **Deadline:** January 15, 2026
- **Status:** ✅ Open
- **Order:** 1

**Research Focus:**
- Chemical dynamics at electrified interfaces
- Controlled electrodeposition
- Machine learning surrogate models for photo-/electrocatalysis
- Part of Alexander-von-Humboldt Foundation funded project

**Key Requirements:**
- PhD in chemistry, physics, materials science
- Knowledge of electronic structure theory, molecular simulation
- Good programming skills
- Desirable: ML experience

**Contact:** r.maurer@chemie.uni-goettingen.de

---

### 2. PhD Position in Computational Materials Discovery (Vienna)
**File:** `src/content/opportunities/phd-vienna-2026.md`

- **Type:** PhD
- **Location:** University of Vienna, Austria
- **Start Date:** February 1, 2026
- **Duration:** 2 years
- **Salary:** EUR 3,714.80/month (14x p.a.)
- **Deadline:** January 15, 2026
- **Status:** ✅ Open
- **Order:** 2

**Research Focus:**
- Simulation of light-driven chemical reactions at surfaces
- Mixed quantum-classical dynamics methods
- Machine-learning surrogate models
- CO hydrogenation and hydrogen oxidation reactions
- Design of nanostructured catalyst materials

**Key Requirements:**
- Master's degree in Physics
- Background in condensed matter theory, quantum theory, electronic structure theory
- Programming experience (Python, Julia)
- Experience with molecular and quantum dynamics

**Contact:** reinhard.maurer@univie.ac.at

---

### 3. PhD Position in Machine Learning for Computational Materials Science (Vienna)
**File:** `src/content/opportunities/phd-vienna-ml-2026.md`

- **Type:** PhD
- **Location:** University of Vienna, Austria
- **Start Date:** February 1, 2026
- **Duration:** 2 years
- **Salary:** EUR 3,714.80/month (14x p.a.)
- **Deadline:** January 15, 2026
- **Status:** ✅ Open
- **Order:** 3

**Research Focus:**
- Development of novel machine learning representations of electronic structure
- ML surrogate models for quantum operators
- High throughput screening of photocatalyst materials
- Ultrafast dynamics and spectroscopic properties

**Distinguishing Feature:**
- **Stronger emphasis on machine learning methods** compared to other PhD positions
- Ideal for candidates with ML background or strong interest

**Key Requirements:**
- Master's degree in Physics
- Background in condensed matter theory and electronic structure theory
- Programming experience (Python, Julia)
- **Experience with modern machine learning methods**
- Experience with molecular dynamics

**Contact:** reinhard.maurer@univie.ac.at

---

## Closed Positions (Placeholder Content)

### 4. PhD Position in Machine Learning & Electronic Structure Theory
**File:** `src/content/opportunities/phd-position.md`

- **Status:** ❌ Closed
- **Order:** 1
- *Placeholder content - kept for reference*

### 5. Postdoctoral Researcher in NLP
**File:** `src/content/opportunities/postdoc-nlp.md`

- **Status:** ❌ Closed
- **Order:** 2
- *Placeholder content - not relevant to group research*

### 6. Summer Research Internship 2025
**File:** `src/content/opportunities/research-intern.md`

- **Status:** ❌ Closed
- **Order:** 4
- *Placeholder content - not relevant to group research*

---

## Display Logic

The homepage only displays opportunities where `open: true`. Opportunities are sorted by the `order` field.

Current order for active positions:
1. Postdoc at Göttingen (order: 1)
2. PhD at Vienna - Materials Discovery (order: 2)
3. PhD at Vienna - Machine Learning focus (order: 3)

---

## Schema

Each opportunity follows this schema (defined in `src/content/config.ts`):

```typescript
{
  title: string,
  type: 'phd' | 'postdoc' | 'engineer' | 'intern' | 'visiting',
  location: 'usa' | 'uk' | 'germany' | 'remote' | 'any' | 'at',
  deadline: date (optional),
  open: boolean,
  order: number
}
```

**Note:** The schema currently uses `'germany'` for the Göttingen position but `'at'` for Vienna positions. Consider standardizing to use country codes consistently.

---

## Content Quality

Each active opportunity page includes:

✅ **Comprehensive Position Details** - Location, duration, salary, start date
✅ **Research Context** - Scientific background and motivation
✅ **Specific Research Focus** - What the candidate will work on
✅ **Key Objectives/Outcomes** - Expected contributions
✅ **Detailed Responsibilities** - Research, teaching, administration
✅ **Required Qualifications** - Must-have skills and background
✅ **Desirable Qualifications** - Nice-to-have skills
✅ **What We Offer** - Research environment, skills development, working conditions
✅ **About the Group** - Research philosophy and approach
✅ **Application Process** - What to submit and contact information
✅ **Equal Opportunities Statement** - For Vienna positions

---

## Future Updates

To add new opportunities:

1. **Create New File:** `src/content/opportunities/[name].md`
2. **Follow Schema:** Use frontmatter matching the schema
3. **Set Status:** `open: true` to display, `open: false` to hide
4. **Set Order:** Lower numbers appear first
5. **Write Content:** Include all standard sections

To close an opportunity:
- Change `open: true` to `open: false` in frontmatter

To remove old opportunities:
- Delete the markdown file entirely

---

## Summary Statistics

- **Total Opportunities:** 6 files
- **Active (Open):** 3
- **Closed:** 3
- **Locations:** Austria (2), Germany (1)
- **Position Types:** Postdoc (1), PhD (2)
- **Common Deadline:** January 15, 2026
- **Funding:** Alexander-von-Humboldt Foundation (Göttingen postdoc)

All active opportunities are ready to be displayed on the website at `/#opportunities`!
