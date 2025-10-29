# 3Dmol.js Molecular Viewer Guide

## Overview

The research group website now supports 3Dmol.js, a powerful JavaScript library for interactive 3D molecular visualization. You can embed molecular structures directly in your research area pages.

## Quick Start

3Dmol.js is already included in the site layout, so you can start using it immediately in any Markdown content file.

## Method 1: Inline Script in Markdown (Recommended)

Add a molecular viewer directly in your research area markdown files:

```markdown
## Example Molecule

<div id="viewer-unique-id" style="width: 100%; height: 500px; border: 1px solid #e2e8f0; border-radius: 8px; margin: 2rem 0;"></div>

<script>
  window.addEventListener('load', function() {
    if (typeof $3Dmol !== 'undefined') {
      const element = document.getElementById('viewer-unique-id');
      const viewer = $3Dmol.createViewer(element, {backgroundColor: 'white'});

      // Load from PDB database
      $3Dmol.download('pdb:1AKE', viewer, {}, function() {
        viewer.setStyle({}, {cartoon: {color: 'spectrum'}});
        viewer.zoomTo();
        viewer.render();
      });
    }
  });
</script>
```

**Important:** Make sure each viewer has a unique ID (e.g., `viewer-protein`, `viewer-molecule1`, etc.).

## Method 2: Using the MolecularViewer Component (Advanced)

For MDX files, you can use the pre-built component:

```astro
import MolecularViewer from '../../components/MolecularViewer.astro';

<MolecularViewer pdb="1AKE" height="500px" style="cartoon" />
```

**Note:** This requires converting your `.md` file to `.mdx`.

## Loading Molecular Structures

### From PDB Database

Load a structure using its PDB ID:

```javascript
$3Dmol.download('pdb:1AKE', viewer, {}, function() {
  viewer.setStyle({}, {cartoon: {color: 'spectrum'}});
  viewer.zoomTo();
  viewer.render();
});
```

### From PDB File Data

Load from a PDB format string:

```javascript
const pdbData = `ATOM      1  N   ALA A   1      ...`;
viewer.addModel(pdbData, "pdb");
viewer.setStyle({}, {cartoon: {color: 'spectrum'}});
viewer.zoomTo();
viewer.render();
```

### From Other Formats

3Dmol.js supports many formats:

```javascript
// SDF format
viewer.addModel(sdfData, "sdf");

// MOL2 format
viewer.addModel(mol2Data, "mol2");

// XYZ format
viewer.addModel(xyzData, "xyz");
```

## Visualization Styles

### Cartoon (Proteins)

Best for proteins and large biomolecules:

```javascript
viewer.setStyle({}, {cartoon: {color: 'spectrum'}});
```

### Stick (Small Molecules)

Best for small molecules and drug-like compounds:

```javascript
viewer.setStyle({}, {stick: {colorscheme: 'default'}});
```

### Sphere (Space-filling)

Shows van der Waals radii:

```javascript
viewer.setStyle({}, {sphere: {colorscheme: 'Jmol'}});
```

### Line (Wireframe)

Simple wireframe representation:

```javascript
viewer.setStyle({}, {line: {}});
```

### Cross (Simple)

Fastest rendering, minimal detail:

```javascript
viewer.setStyle({}, {cross: {}});
```

### Combined Styles

You can combine multiple styles:

```javascript
viewer.setStyle({}, {
  cartoon: {color: 'spectrum'},
  stick: {radius: 0.15}
});
```

## Color Schemes

### Spectrum Colors

Rainbow coloring from N to C terminus:

```javascript
{color: 'spectrum'}
```

### By Element

Standard element colors:

```javascript
{colorscheme: 'default'}
```

### By Secondary Structure

For proteins (helix, sheet, coil):

```javascript
{colorscheme: 'ssFDC'}  // Secondary structure with default colors
```

### Custom Colors

Specify exact colors:

```javascript
{color: '#FF6B6B'}  // Hex color
{color: 'red'}       // Named color
```

## Selection and Styling

### Select Specific Residues

Style only certain parts of the molecule:

```javascript
// Style residues 1-50 as cartoon
viewer.setStyle({resi: '1-50'}, {cartoon: {color: 'blue'}});

// Style residues 51-100 differently
viewer.setStyle({resi: '51-100'}, {cartoon: {color: 'red'}});
```

### Select by Chain

```javascript
viewer.setStyle({chain: 'A'}, {cartoon: {color: 'cyan'}});
viewer.setStyle({chain: 'B'}, {cartoon: {color: 'magenta'}});
```

### Select by Atom Type

```javascript
// Show only backbone
viewer.setStyle({atom: 'CA'}, {sphere: {radius: 0.5}});
```

## Advanced Features

### Add Labels

```javascript
viewer.addLabel("Active Site", {
  position: {x: 10, y: 10, z: 10},
  backgroundColor: 'white',
  fontColor: 'black'
});
```

### Add Surface

```javascript
viewer.addSurface($3Dmol.SurfaceType.VDW, {
  opacity: 0.7,
  color: 'white'
});
```

### Multiple Models

Display multiple structures:

```javascript
const viewer = $3Dmol.createViewer(element, {backgroundColor: 'white'});

// Add first model
$3Dmol.download('pdb:1AKE', viewer, {}, function() {
  viewer.setStyle({model: 0}, {cartoon: {color: 'blue'}});
});

// Add second model
$3Dmol.download('pdb:2AKE', viewer, {}, function() {
  viewer.setStyle({model: 1}, {cartoon: {color: 'red'}});
  viewer.zoomTo();
  viewer.render();
});
```

## Configuration Options

### Viewer Config

```javascript
const config = {
  backgroundColor: 'white',    // Background color
  antialias: true,             // Smooth edges
  disableFog: false           // Enable/disable depth fog
};

const viewer = $3Dmol.createViewer(element, config);
```

### Camera Control

```javascript
// Zoom to specific atoms
viewer.zoomTo({chain: 'A'});

// Set camera angle
viewer.rotate(90, {x: 1, y: 0, z: 0});

// Save and restore view
const view = viewer.getView();
viewer.setView(view);
```

## Complete Example

Here's a complete example showing a protein with custom styling:

```markdown
## Protein Structure

<div id="viewer-example" style="width: 100%; height: 600px; border: 1px solid #e2e8f0; border-radius: 8px; margin: 2rem 0;"></div>

<script>
  window.addEventListener('load', function() {
    if (typeof $3Dmol !== 'undefined') {
      const element = document.getElementById('viewer-example');
      const viewer = $3Dmol.createViewer(element, {
        backgroundColor: '#f8fafc'
      });

      // Load protein structure
      $3Dmol.download('pdb:1AKE', viewer, {}, function() {
        // Style the protein as cartoon
        viewer.setStyle({}, {cartoon: {color: 'spectrum'}});

        // Highlight active site residues
        viewer.setStyle(
          {resi: ['10', '15', '20']},
          {stick: {colorscheme: 'default', radius: 0.3}}
        );

        // Add a semi-transparent surface
        viewer.addSurface($3Dmol.SurfaceType.VDW, {
          opacity: 0.5,
          color: 'lightblue'
        }, {resi: ['10-20']});

        // Add label
        viewer.addLabel('Active Site', {
          position: viewer.modelToScreen({resi: 15}),
          backgroundColor: 'black',
          backgroundOpacity: 0.8,
          fontColor: 'white'
        });

        viewer.zoomTo();
        viewer.render();
      });
    }
  });
</script>

*Interactive 3D structure showing Adenylate Kinase with highlighted active site residues.*
```

## Common PDB IDs for Examples

Here are some interesting structures you might want to use:

| PDB ID | Description |
|--------|-------------|
| 1AKE | Adenylate Kinase (enzyme) |
| 1BNA | DNA double helix |
| 1CRN | Crambin (small protein) |
| 1LYZ | Lysozyme (antibacterial enzyme) |
| 2DHB | Deoxyhemoglobin |
| 3HFM | Hemoglobin |
| 1MBN | Myoglobin |
| 1HHO | Hemoglobin oxygenated |
| 1IGT | Immunoglobulin |
| 4HHB | Hemoglobin with heme |

## Best Practices

### 1. Unique IDs

Always use unique IDs for each viewer on a page:

```markdown
<div id="viewer-protein1" ...></div>
<div id="viewer-protein2" ...></div>
```

### 2. Appropriate Sizing

Choose viewer dimensions based on structure complexity:

- Small molecules: 300-400px height
- Proteins: 500-600px height
- Large complexes: 600-800px height

### 3. Loading Performance

For pages with multiple viewers, consider:

- Using smaller, optimized structures
- Lazy loading (viewers only render when scrolled into view)
- Simpler styles (line/stick instead of surface)

### 4. Mobile Responsiveness

Use percentage-based widths:

```html
<div style="width: 100%; height: 400px; ..."></div>
```

### 5. Accessibility

Always add descriptive text near the viewer:

```markdown
<div id="viewer-..."></div>

*Interactive 3D structure of [molecule name]. Use mouse to rotate, scroll to zoom.*
```

## Troubleshooting

### Viewer Not Showing

**Problem:** Blank box appears instead of molecule

**Solutions:**
1. Check browser console for errors
2. Verify PDB ID is correct
3. Ensure 3Dmol.js is loaded: `console.log(typeof $3Dmol)`
4. Check network tab for PDB download issues

### Incorrect Styling

**Problem:** Molecule appears but wrong style

**Solutions:**
1. Verify style name is correct (cartoon, stick, sphere, etc.)
2. Check selection syntax
3. Ensure `viewer.render()` is called after style changes

### Performance Issues

**Problem:** Viewer is slow or choppy

**Solutions:**
1. Use simpler representations (line instead of surface)
2. Reduce molecule size if possible
3. Disable fog: `disableFog: true`
4. Use lower quality for large structures

### Not Rendering on Page Load

**Problem:** Need to refresh page to see molecule

**Solution:** Wrap in `load` event listener:

```javascript
window.addEventListener('load', function() {
  // viewer code here
});
```

## Resources

- **3Dmol.js Documentation**: https://3dmol.csb.pitt.edu/doc/index.html
- **PDB Database**: https://www.rcsb.org/
- **3Dmol.js Examples**: https://3dmol.csb.pitt.edu/doc/examples.html
- **Supported File Formats**: https://3dmol.csb.pitt.edu/doc/$3Dmol.GLViewer.html#addModel

## Example Research Page

See [Computational Chemistry](src/content/research/computational-chemistry.md) for a working example of 3Dmol.js integration.
