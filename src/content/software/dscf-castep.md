---
title: "ΔSCF-DFT and MolPDOS in CASTEP"
description: "Calculate approximate excited states and molecular orbital projected density-of-states"
order: 4
language: "Fortran"
---

ΔSCF-DFT and MolPDOS is a module for the CASTEP electronic structure code, developed by Prof. Reinhard J. Maurer and Prof. Karsten Reuter, enabling calculations of excited states and molecular orbital analysis.

## Overview

This module extends the capabilities of CASTEP, a leading plane-wave DFT code, to:

1. Calculate approximate excited states using ΔSCF (delta self-consistent field) methods
2. Project the density of states onto molecular orbitals (MolPDOS)

These capabilities are essential for understanding electronic structure, optical properties, and charge transfer in molecules and materials.

## ΔSCF Method

### What is ΔSCF?

ΔSCF (delta SCF) is a computational approach for excited states where:

- Ground state is calculated with standard DFT
- Excited state is calculated by occupying higher energy orbitals
- Excitation energy = Energy difference between states

### Advantages

- **Computationally Efficient**: Similar cost to ground state DFT
- **Size Consistent**: Scales linearly with system size
- **Reliable for Low-Lying States**: Good accuracy for first few excited states
- **Charge Transfer States**: Can handle states with significant charge redistribution

## MolPDOS: Molecular Projected Density of States

### Functionality

MolPDOS projects the electronic density of states onto molecular orbital basis:

- Identifies molecular orbital character in solid-state calculations
- Tracks hybridization between molecule and substrate
- Analyzes charge transfer and bonding
- Visualizes frontier orbital evolution

### Applications

Particularly useful for:

- **Molecular Adsorption**: Understanding molecule-surface bonding
- **Hybrid Interfaces**: Organic-inorganic interface electronic structure
- **Charge Transfer**: Analyzing electron donor-acceptor systems
- **Photovoltaics**: Studying light absorption and charge separation

## Integration with CASTEP

The module seamlessly integrates with CASTEP's capabilities:

- Uses CASTEP's plane-wave basis sets
- Compatible with CASTEP's pseudopotentials
- Leverages CASTEP's parallelization
- Works with all CASTEP-supported functionals

## Scientific Applications

### Excited State Chemistry

- Photocatalysis mechanisms
- Light-induced reactions
- Charge transfer excited states
- Intersystem crossing

### Interface Science

- Molecule-metal interfaces
- Organic semiconductors on substrates
- Dye-sensitized solar cells
- Molecular electronics

### Spectroscopy

- Optical absorption spectra
- Photoemission spectroscopy interpretation
- X-ray absorption near-edge structure (XANES)
- Core-level excitations

## Technical Details

### ΔSCF Calculations

The module allows users to:

- Specify target electron configurations
- Calculate multiple excited states
- Obtain excitation energies
- Analyze excited state geometries

### MolPDOS Analysis

Features include:

- Automatic molecular orbital identification
- Energy-resolved orbital projections
- Spatial localization analysis
- Charge distribution visualization

## Example Use Cases

### 1. Molecular Switches on Surfaces

Calculate excited states of photoswitchable molecules adsorbed on metal surfaces to understand light-induced switching mechanisms.

### 2. Charge Transfer Complexes

Analyze charge transfer between donor and acceptor molecules using MolPDOS to identify orbital contributions.

### 3. Photocatalytic Materials

Study light absorption and excited state properties of photocatalytic surfaces.

## Performance

- Efficient algorithms for large systems
- Parallel execution on HPC clusters
- Reasonable computational cost (similar to ground state)
- Scalable to hundreds of atoms

## Development and Availability

First released in 2016, this module has been integrated into the main CASTEP codebase and is available to all CASTEP users.

## Related Methods

The module complements other excited state methods:

- **TD-DFT**: Time-dependent DFT for optical spectra
- **GW**: Many-body perturbation theory
- **BSE**: Bethe-Salpeter equation for excitons

ΔSCF provides a computationally efficient alternative for systems where these more expensive methods are impractical.

## Documentation

Users can find documentation in:

- CASTEP user manual
- CASTEP online documentation
- Research publications by Maurer and Reuter

## Citation

When using this module, please cite:

Maurer, R. J., & Reuter, K. (2016). Approximate excited states and molecular orbital analysis in CASTEP. *Journal of Chemical Physics*.

## Support

For questions about using the ΔSCF-DFT and MolPDOS module in CASTEP:

- Consult CASTEP documentation
- Contact the CASTEP user forum
- Reach out to Prof. Reinhard J. Maurer

## Related Software

The Maurer group also contributes to other electronic structure codes:

- **FHI-aims**: All-electron DFT code
- **DFTB+**: Density functional tight-binding
- **HotBit**: Tight-binding calculator
