---
title: "Coolvib"
description: "Calculate lifetime of adsorbate vibrations due to electron-hole pair excitations"
order: 2
logo: "/images/coolvib.png"
github: "https://github.com/maurergroup/coolvib"
documentation: "https://maurergroup.github.io/coolvib/"
language: "Fortran/Python"
---

Coolvib is a computational tool developed by Prof. Reinhard J. Maurer and Dr. Mikhail Askerka for calculating the vibrational lifetime of molecules adsorbed on metal surfaces.

## Overview

When molecules adsorb on metal surfaces, their vibrations can lose energy by exciting electron-hole pairs in the metal. Coolvib calculates these vibrational lifetimes using first-order time-dependent perturbation theory, providing crucial insights into energy dissipation processes at surfaces.

## Scientific Background

Vibrational cooling is a key process in surface chemistry:

- **Energy Dissipation**: Molecules transfer vibrational energy to substrate electrons
- **Reaction Dynamics**: Cooling rates affect reaction pathways and rates
- **Non-Adiabatic Effects**: Electronic excitations couple to nuclear motion
- **Surface Spectroscopy**: Lifetimes observable in experimental measurements

## Method

Coolvib uses **first-order time-dependent perturbation theory** to calculate:

- Vibrational energy transfer rates
- Mode-specific lifetimes
- Electronic friction coefficients
- Temperature-dependent damping

## Applications

The code is particularly useful for:

- Understanding vibrational spectroscopy of adsorbates
- Predicting energy dissipation in surface reactions
- Modeling hot electron dynamics
- Interpreting pump-probe experiments

## Key Features

- First-principles based calculations
- Mode-specific vibrational lifetimes
- Temperature dependence
- Integration with DFT codes
- Efficient computational methods

