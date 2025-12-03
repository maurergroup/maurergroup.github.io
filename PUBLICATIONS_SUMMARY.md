# Publications Content Summary

## Overview

Publication highlight items have been created for 8 key research papers from the Maurer Research Group, showcasing the breadth of the group's research from fundamental theory to applications in machine learning, catalysis, and nanoscale science.

## Publications Created

### 1. Unifying machine learning and quantum chemistry (2019)
**File:** `src/content/publications/ml-quantum-chemistry-2019.md`

- **Journal:** Nature Communications
- **DOI:** 10.1038/s41467-019-12875-2
- **Authors:** K. T. Schütt, M. Gastegger, A. Tkatchenko, K. R. Müller, R. J. Maurer
- **Topic:** Deep neural networks for molecular wavefunctions
- **Impact:** Groundbreaking work combining quantum chemistry and machine learning

### 2. Role of Tensorial Electronic Friction (2016)
**File:** `src/content/publications/electronic-friction-2016.md`

- **Journal:** Physical Review Letters
- **DOI:** 10.1103/PhysRevLett.116.217601
- **Authors:** M. Askerka, R. J. Maurer, V. S. Batista, J. C. Tully
- **Topic:** Tensorial formulation of electronic friction
- **Impact:** Seminal paper in surface dynamics and nonadiabatic effects

### 3. High-throughput property-driven generative design (2023)
**File:** `src/content/publications/generative-design-2023.md`

- **Journal:** Nature Computational Science
- **DOI:** 10.1038/s43588-022-00391-1
- **Authors:** J. Westermayr, J. Gilkes, R. Barrett, R. J. Maurer
- **Topic:** Generative ML for functional organic molecule design
- **Impact:** Revolutionary approach to molecular design

### 4. Vibrational Energy Dissipation in Noncontact Junctions (2025)
**File:** `src/content/publications/vibrational-dissipation-2025.md`

- **Journal:** JACS Au
- **DOI:** 10.1021/jacsau.5c00931
- **Authors:** A. Ge, B. Rudshteyn, J. Zhu, R. J. Maurer
- **Topic:** Energy dissipation in noncontact AFM junctions
- **Impact:** Groundbreaking insights into nanoscale energy transfer

### 5. Fine-tuning foundation models for STEM (2025)
**File:** `src/content/publications/foundation-models-2025.md`

- **Journal:** npj Computational Materials
- **DOI:** 10.1038/s41524-025-01727-x
- **Authors:** M. Radova, W. G. Stark, C. S. Allen, R. J. Maurer
- **Topic:** Foundation models for microscopy analysis
- **Impact:** Cutting-edge AI for materials characterization

### 6. CO Cryo-Sorption Spectroscopy (2025)
**File:** `src/content/publications/co-cryo-sorption-2025.md`

- **Journal:** Angewandte Chemie International Edition
- **DOI:** 10.1002/anie.202420673
- **Authors:** S. Ringe, R. J. Maurer
- **Topic:** Quantifying local electrostatics in heterogeneous catalysts
- **Impact:** Novel methodology for catalyst characterization

### 7. Nonadiabatic Quantum Dynamics of Molecular Scattering (2025)
**File:** `src/content/publications/nonadiabatic-dynamics-2025.md`

- **Journal:** Journal of Chemical Theory and Computation
- **DOI:** 10.1021/acs.jctc.4c01586
- **Authors:** C. L. Box, Y. Zhang, R. Yin, B. Jiang, R. J. Maurer
- **Topic:** Nonadiabatic dynamics with electronic friction
- **Impact:** Comprehensive framework for surface scattering

### 8. Structure of Graphene on Cu(111) (2024)
**File:** `src/content/publications/graphene-structure-2024.md`

- **Journal:** Physical Review Letters
- **DOI:** 10.1103/PhysRevLett.132.196201
- **Authors:** M. A. Stoodley, L. A. Rochford, T.-L. Lee, B. P. Klein, D. A. Duncan, R. J. Maurer
- **Topic:** Atomic-scale structure of graphene-metal interface
- **Impact:** Resolves longstanding questions about 2D materials

## Content Quality

Each publication page includes:

✅ **Comprehensive Summary** - Clear explanation of the research and its significance
✅ **Key Contributions** - Main scientific advances and innovations
✅ **Methodology** - Technical approaches and methods employed
✅ **Impact and Applications** - Real-world relevance and applications
✅ **Full Metadata** - Authors, venue, year, DOI link

## Metadata Fields

Each publication item includes frontmatter with:

```yaml
title: "Full publication title"
authors: ["Author 1", "Author 2", ...]
venue: "Journal Name"
year: 2024
pdf: "https://doi.org/..."
date: 2024-01-01
```

Optional fields (not used but available in schema):
- `code:` GitHub repository link
- `dataset:` Dataset URL
- `demo:` Demo/application URL

## Display

The publication items will appear on:

1. **Homepage Publications Section** - Cards with brief highlights
2. **Individual Publication Pages** - Full details at `/publications/[name]`

Access them at:
- http://localhost:4321/#publications (homepage section)
- http://localhost:4321/publications/ml-quantum-chemistry-2019
- http://localhost:4321/publications/electronic-friction-2016
- http://localhost:4321/publications/generative-design-2023
- http://localhost:4321/publications/vibrational-dissipation-2025
- http://localhost:4321/publications/foundation-models-2025
- http://localhost:4321/publications/co-cryo-sorption-2025
- http://localhost:4321/publications/nonadiabatic-dynamics-2025
- http://localhost:4321/publications/graphene-structure-2024

## Research Themes

The publications showcase the group's core research areas:

### Machine Learning & Computational Chemistry
- Neural network wavefunctions (2019)
- Generative molecular design (2023)
- Foundation models for microscopy (2025)

### Surface Dynamics & Energy Transfer
- Tensorial electronic friction (2016)
- Vibrational dissipation in AFM (2025)
- Nonadiabatic scattering dynamics (2025)

### Materials & Interfaces
- Graphene structure on Cu(111) (2024)
- CO cryo-sorption spectroscopy (2025)

## Removed Placeholder Content

The following placeholder publication files were removed:
- `fairness-aware-2023.md`
- `neural-architecture-2024.md`

These were example files from the initial template and have been replaced with actual research group publications.

## Future Updates

Publications can be updated:

1. **Manually:** Edit markdown files in `src/content/publications/`
2. **Via Pages CMS:** After pushing to GitHub, edit through https://pagescms.org
3. **Add New Publications:** Create new `.md` files following the same structure

## Pages CMS Configuration

The publications collection is already configured in `.pages.yml` for easy editing:

```yaml
- name: publications
  label: Publications
  path: src/content/publications
  extension: md
  fields:
    - name: title
    - name: authors
    - name: venue
    - name: year
    - name: pdf
    - name: date
```

## Summary Statistics

- **Total Publications:** 8
- **Nature/Science Family Journals:** 3 (Nature Comms, Nature Comp Sci, npj Comp Materials)
- **Physical Review Letters:** 2
- **Other High-Impact Journals:** 3 (JACS Au, Angew Chemie, JCTC)
- **Publication Years:** 2016-2025
- **Team Members Featured:** Multiple current group members including postdocs and PhD students

All publication highlights are now documented and ready to be displayed on the website!
