---
title: "NQCDynamics.jl"
description: "Simulating nonadiabatic quantum dynamics using classical trajectory methods"
order: 1
github: "https://github.com/NQCD/NQCDynamics.jl"
logo: "/images/nqcd.png"
documentation: "https://nqcd.github.io/NQCDynamics.jl/stable/"
language: "Julia"
---

NQCDynamics.jl is a comprehensive Julia package for simulating nonadiabatic quantum classical dynamics.

## Overview

This software enables researchers to simulate molecular dynamics that go beyond the Born-Oppenheimer approximation, capturing the crucial quantum mechanical effects that occur when electronic and nuclear degrees of freedom are strongly coupled.

## Key Features

- **Nonadiabatic Dynamics**: Simulate systems where electronic transitions play a crucial role
- **Classical Trajectory Methods**: Efficient surface hopping and related algorithms
- **Julia Performance**: High-performance computing with Julia's speed and ease of use
- **Extensible Framework**: Modular design for easy customization and extension

## Applications

NQCDynamics.jl is particularly useful for studying:

- Photocatalysis and light-driven chemistry
- Electron transfer processes
- Energy dissipation at surfaces
- Chemical reactions on metal surfaces
- Excited state dynamics

## Technical Details

The package implements various nonadiabatic molecular dynamics methods, including:

- **Surface Hopping**: Trajectory surface hopping for mixed quantum-classical dynamics
- **Ehrenfest Dynamics**: Mean-field approach to nonadiabatic dynamics
- **Electronic Friction**: Modeling energy dissipation through electron-hole pair creation

## Documentation

Complete documentation, tutorials, and examples are available at the [official documentation site](https://nqcd.github.io/NQCDynamics.jl/stable/).

## Installation

As a Julia package, it can be easily installed via Julia's package manager:

```julia
using Pkg
Pkg.add("NQCDynamics")
```

## Development

NQCDynamics.jl is actively developed and maintained by the research group. Contributions and feedback are welcome through the GitHub repository.

## Citation

If you use NQCDynamics.jl in your research, please cite:

Gardner, J. D., *et al.*  . NQCDynamics.jl: A Julia package for nonadiabatic quantum classical molecular dynamics in the condensed phase. *Journal of Chemical Physics* 156, 174801 (2022)

## Links

- [GitHub Repository](https://github.com/NQCD/NQCDynamics.jl)
- [Documentation](https://nqcd.github.io/NQCDynamics.jl/stable/)
- [Issue Tracker](https://github.com/NQCD/NQCDynamics.jl/issues)
