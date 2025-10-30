---
title: "Computational Chemistry"
description: "Using computational methods to study molecular structures, reactions, and materials properties."
order: 3
---

Our computational chemistry research combines quantum mechanics, molecular dynamics, and machine learning to understand and predict the behavior of molecules and materials at the atomic level.

## Molecular Structure and Dynamics

We use advanced simulation techniques to study how molecules interact and evolve over time. Our research includes:

- **Density Functional Theory (DFT)**: Quantum mechanical calculations of electronic structure
- **Molecular Dynamics Simulations**: Tracking atomic motions to understand reaction mechanisms
- **Free Energy Calculations**: Predicting thermodynamic properties and binding affinities

## Example: Protein Structure Visualization

Below is an interactive 3D visualization of Adenylate Kinase (PDB: 1AKE), an enzyme that catalyzes the transfer of phosphate groups:

<div id="viewer-protein" style="width: 100%; height: 500px; border: 1px solid #e2e8f0; border-radius: 8px; margin: 2rem 0; position: relative; z-index: 1;"></div>

<script is:inline>
  (function() {
    function initViewer() {
      if (typeof $3Dmol !== 'undefined') {
        const element = document.getElementById('viewer-protein');
        if (element && element.children.length === 0) {
          const config = { backgroundColor: 'white' };
          const viewer = $3Dmol.createViewer(element, config);

          $3Dmol.download('pdb:1AKE', viewer, {}, function() {
            viewer.setStyle({}, {cartoon: {color: 'spectrum'}});
            viewer.zoomTo();
            viewer.render();
          });
        }
      }
    }

    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', function() {
        setTimeout(initViewer, 100);
      });
    } else {
      setTimeout(initViewer, 100);
    }
  })();
</script>

*Try rotating the molecule with your mouse! This structure shows the enzyme in its open conformation.*

## Catalysis and Surface Chemistry

We investigate how molecules interact with catalyst surfaces to enable chemical transformations:

- Adsorption and desorption mechanisms
- Reaction pathway analysis
- Design of novel catalytic materials

## Materials Design

Our work extends to designing new materials with specific properties:

- **2D Materials**: Graphene, transition metal dichalcogenides, and other layered structures
- **Metal-Organic Frameworks (MOFs)**: Porous materials for gas storage and separation
- **Photocatalysts**: Materials for solar energy conversion

## Machine Learning for Chemistry

We develop ML models to accelerate computational chemistry:

- Neural network potentials for fast molecular dynamics
- Property prediction from molecular structure
- Automated reaction pathway discovery

The energy of a molecular system can be approximated using a neural network potential:

$$
E(\mathbf{R}) = \sum_{i=1}^{N} E_i(\{\mathbf{r}_j\}_{j \in \mathcal{N}_i})
$$

where $E_i$ is the atomic energy contribution and $\mathcal{N}_i$ represents the local atomic environment.

## Current Projects

- Developing machine learning potentials for catalytic reactions
- Simulating charge transfer at electrode-electrolyte interfaces
- Predicting crystal structures of pharmaceutical compounds
- Understanding photocatalytic water splitting mechanisms

## Computational Resources

Our research leverages high-performance computing clusters with thousands of CPU cores and GPU acceleration for quantum chemistry calculations and large-scale molecular dynamics simulations.
