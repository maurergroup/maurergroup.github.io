---
title: "winak"
description: "Global optimization and materials structure search using curvilinear coordinates"
order: 3
github: "https://github.com/maurergroup/winak"
documentation: "https://maurergroup.github.io/winak/"
logo: "/images/winak.png"
language: "Python"
---

winak is a global optimization and materials structure search tool developed by Prof. Reinhard J. Maurer and Konstantin Krautgasser, designed to find the lowest energy structures of molecular and materials systems.

## Overview

Finding the global minimum energy structure of a molecular or materials system is a fundamental challenge in computational chemistry. winak addresses this using sophisticated optimization techniques based on curvilinear delocalized coordinates, which provide improved performance for molecular systems compared to traditional Cartesian coordinates.

## Key Features

### Basin Hopping Algorithm

winak implements basin hopping, a powerful global optimization method that:

- Explores the potential energy surface efficiently
- Escapes local minima systematically
- Converges to global minimum structures
- Handles complex energy landscapes

### Curvilinear Delocalized Coordinates

The use of curvilinear coordinates offers several advantages:

- **Better Convergence**: More efficient optimization paths
- **Chemical Intuition**: Coordinates reflect molecular structure
- **Reduced Coupling**: Separates different types of motion
- **Improved Performance**: Faster convergence to minima

### Analysis Tools

winak includes comprehensive tools for:

- Structure analysis and comparison
- Energy landscape visualization
- Trajectory analysis
- Symmetry detection

