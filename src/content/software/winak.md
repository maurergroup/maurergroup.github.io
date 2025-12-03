---
title: "winak"
description: "Global optimization and materials structure search using curvilinear coordinates"
order: 3
language: "Python"
---

winak is a global optimization and materials structure search tool developed by Prof. Reinhard J. Maurer and Dr. Konstantin Krautgasser, designed to find the lowest energy structures of molecular and materials systems.

## Overview

Finding the global minimum energy structure of a molecular or materials system is a fundamental challenge in computational chemistry. winak addresses this using sophisticated optimization techniques based on curvilinear delocalized coordinates, which provide superior performance compared to traditional Cartesian coordinates.

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

## Applications

winak is versatile and can be applied to various systems:

### Molecular Clusters

- Metal clusters
- Nanoparticle structures
- Water clusters
- Biomolecular aggregates

### Organic Molecules

- Conformational analysis
- Crystal structure prediction
- Polymorphs identification
- Molecular packing

### Condensed Matter

- Surface reconstructions
- Defect structures
- Interface configurations
- Adsorbate geometries

## Technical Details

The code interfaces with various electronic structure codes to evaluate energies and forces:

- Density Functional Theory (DFT) codes
- Force field methods
- Tight-binding approaches
- Machine learning potentials

## Workflow

Typical winak workflow:

1. **Define System**: Specify atoms and constraints
2. **Set Parameters**: Choose optimization settings
3. **Run Search**: Execute basin hopping algorithm
4. **Analyze Results**: Examine found structures
5. **Validate**: Verify global minimum with additional calculations

## Performance

winak is designed for efficiency:

- Parallel execution support
- Checkpoint/restart capability
- Adaptive step sizes
- Smart initial structure generation

## Use Cases

### Structure Prediction

Predict unknown crystal structures or molecular conformations before synthesis.

### Catalyst Design

Find optimal arrangements of atoms in catalytic clusters or supported nanoparticles.

### Materials Discovery

Explore chemical space to discover new materials with desired properties.

## Development History

First released in 2016, winak has been continuously developed and applied to numerous research projects in the Maurer group, contributing to publications on structure prediction and materials design.

## Requirements

- Python 3.x
- NumPy, SciPy
- ASE (Atomic Simulation Environment)
- Electronic structure calculator

## Contact

For access to winak or questions about implementation, please contact Prof. Reinhard J. Maurer at the University of Warwick.

## Related Work

winak has been used in conjunction with other tools in the group for:

- Machine learning potential development
- High-throughput screening
- Reaction pathway searches
- Interface structure determination
