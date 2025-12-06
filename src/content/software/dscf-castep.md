---
title: "ΔSCF-DFT and MolPDOS in CASTEP"
description: "Calculate approximate excited states and molecular orbital projected density-of-states"
order: 4
documentation: "https://maurergroup.github.io/DeltaSCF_in_CASTEP_Manual/"
language: "Fortran"
---

ΔSCF-DFT and MolPDOS is a module for the CASTEP electronic structure code, developed by Prof. Reinhard J. Maurer, enabling calculations of excited states and molecular orbital analysis.

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

## MolPDOS: Molecular Projected Density of States

MolPDOS projects the electronic density of states onto molecular orbital basis:

- Identifies molecular orbital character in solid-state calculations
- Tracks hybridization between molecule and substrate
- Analyzes charge transfer and bonding
- Visualizes frontier orbital evolution


## Development and Availability

First released in 2016, this module has been integrated into the main CASTEP codebase and is available to all CASTEP users.


## Documentation

Users can find documentation in:

- CASTEP user manual
- CASTEP online documentation
- Research publications by Maurer and Reuter

## Citation

When using this module, please cite:

Maurer, R. J., & Reuter, K. (2016). Excited-state potential-energy surfaces of metal-adsorbed organic molecules from linear expansion Δ-self-consistent field density-functional theory (ΔSCF-DFT). *Journal of Chemical Physics* 139, 014708 (2013)
