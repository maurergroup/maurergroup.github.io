# Software Content Summary

## Overview

Software content has been extracted from the group's website and comprehensive content items have been created for each software project developed by the Maurer Research Group.

## Software Projects Created

### 1. NQCDynamics.jl
**File:** `src/content/software/nqcdynamics.md`

- **Language:** Julia
- **Description:** Simulating nonadiabatic quantum dynamics using classical trajectory methods
- **Authors:** James Gardner, Reinhard J. Maurer
- **GitHub:** https://github.com/NQCD/NQCDynamics.jl
- **Documentation:** https://nqcd.github.io/NQCDynamics.jl/stable/
- **Year:** 2022
- **Key Features:**
  - Surface hopping algorithms
  - Ehrenfest dynamics
  - Electronic friction methods
  - High-performance Julia implementation

### 2. Coolvib
**File:** `src/content/software/coolvib.md`

- **Language:** Fortran/Python
- **Description:** Calculate lifetime of adsorbate vibrations due to electron-hole pair excitations
- **Authors:** Reinhard J. Maurer, Mikhail Askerka
- **Year:** 2015
- **Method:** First-order time-dependent perturbation theory
- **Applications:**
  - Vibrational spectroscopy of adsorbates
  - Energy dissipation in surface reactions
  - Hot electron dynamics
  - Pump-probe experiment interpretation

### 3. winak
**File:** `src/content/software/winak.md`

- **Language:** Python
- **Description:** Global optimization and materials structure search using curvilinear coordinates
- **Authors:** Reinhard J. Maurer, Konstantin Krautgasser
- **Year:** 2016
- **Key Features:**
  - Basin hopping algorithm
  - Curvilinear delocalized coordinates
  - Structure analysis tools
  - Applications to clusters, molecules, and materials

### 4. ΔSCF-DFT and MolPDOS in CASTEP
**File:** `src/content/software/dscf-castep.md`

- **Language:** Fortran
- **Description:** Module for calculating approximate excited states and molecular orbital projected density-of-states
- **Authors:** Reinhard J. Maurer, Karsten Reuter
- **Year:** 2016
- **Host Package:** CASTEP
- **Features:**
  - ΔSCF method for excited states
  - Molecular orbital projection
  - Integration with CASTEP plane-wave DFT
  - Applications in photocatalysis and interface science

## Content Quality

Each software page includes:

✅ **Comprehensive Overview** - What the software does and why it's useful
✅ **Scientific Background** - Theory and methods employed
✅ **Key Features** - Main capabilities and advantages
✅ **Applications** - Real-world use cases
✅ **Technical Details** - Implementation specifics
✅ **Usage Information** - Installation and basic usage (where applicable)
✅ **Links** - GitHub repositories and documentation (where available)
✅ **Citations** - How to cite the software
✅ **Contact Information** - How to get access or support

## Metadata Fields

Each software item includes frontmatter with:

```yaml
title: "Software Name"
description: "Brief description"
order: [number]           # Display order
github: "URL"             # GitHub repository (if available)
docs: "URL"               # Documentation URL (if available)
language: "Language"      # Programming language
```

## Display

The software items will appear on:

1. **Homepage Software Section** - Cards with brief descriptions
2. **Individual Software Pages** - Full details at `/software/[name]`

Access them at:
- http://localhost:4321/#software (homepage section)
- http://localhost:4321/software/nqcdynamics
- http://localhost:4321/software/coolvib
- http://localhost:4321/software/winak
- http://localhost:4321/software/dscf-castep

## Additional Information

### Contributing Packages

The group also contributes to these external software packages (mentioned but not separate pages created):

- **CASTEP** - Plane-wave DFT code
- **FHI-aims** - All-electron DFT code
- **HotBit** - Tight-binding calculator
- **DFTB+** - Density functional tight-binding

These could be added as separate entries if desired, though they are primarily contributions rather than group-developed software.

## Removed Placeholder Content

The following placeholder software files were removed:
- `fairness-checker.md`
- `multilang.md`
- `neural-toolkit.md`

These were example files from the initial template and have been replaced with actual research group software.

## Pages CMS Configuration

The software collection is already configured in `.pages.yml` for easy editing through Pages CMS:

```yaml
- name: software
  label: Software
  path: src/content/software
  extension: md
  fields:
    - name: title
    - name: description
    - name: order
    - name: github
    - name: docs
    - name: language
```

## Future Updates

Software information can be updated:

1. **Manually:** Edit markdown files in `src/content/software/`
2. **Via Pages CMS:** After pushing to GitHub, edit through https://pagescms.org
3. **Add New Software:** Create new `.md` files following the same structure

## Technical Notes

- LaTeX equations are supported (e.g., in Coolvib for lifetime formula)
- All content is written in markdown with proper headings
- Links are properly formatted
- Code blocks use appropriate syntax highlighting

## Summary Statistics

- **Total Software Projects:** 4
- **With GitHub Links:** 1 (NQCDynamics.jl)
- **With Documentation:** 1 (NQCDynamics.jl)
- **Languages Represented:** Julia, Fortran, Python
- **Publication Years:** 2015-2022

All software projects are now documented and ready to be displayed on the website!
