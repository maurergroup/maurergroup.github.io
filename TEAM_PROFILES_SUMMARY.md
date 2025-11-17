# Team Profiles Summary

## Overview

Team member profiles have been created for all members of the Maurer Research Group based on information from the existing Warwick website.

## Profiles Created

### Principal Investigator (1)

1. **Prof. Dr. Reinhard J. Maurer** - Group Leader
   - Updated with accurate information from Warwick website
   - Includes full career history, education, and research focus

### Postdoctoral Researchers (6)

2. **Dr. Nils Hertl** - Surface dynamics, electron-phonon coupling
3. **Dr. Lukas Hoermann** - Marie Curie Fellow, atomic-scale friction
4. **Dr. Chen Qian** - Hot electron dynamics, machine learning
5. **Dr. Connor Box** - Light-matter interactions, electronic friction theory
6. **Dr. Danjo De Chavez** - Quantum chemistry, machine learning (joined Feb 2025)
7. **Dr. Benedict Saunders** - Computational chemistry

### PhD Students (12)

8. **Dylan Morgan** - Surface spectroscopy of single atom magnets
9. **Mariia Radova** - Graph neural networks
10. **Alexander Spears** - Light-driven hydrogen evolution
11. **Xuexun Lu** - Non-Markovian memory effects
12. **Henry Snowden** - Photocatalysis, excited electron dynamics
13. **Valdas Vitartas** - Computational chemistry
14. **YC Wong** - Computational chemistry
15. **Henry Thake** - Defective graphene, catalysts (started Sept 2024)
16. **Matt Larkin** - New PhD student (started Oct 2024)
17. **Ash Baldwin** - Quantum correlations, ultra-fast dynamics (started Oct 2024)

**Note:** Lucas Belz-Koeling and Jasper Allen were listed on the team page but did not have individual profile pages available.

## Profile Content

Each profile includes:

### Required Fields
- Name
- Role
- Email
- Order (for display sorting)
- Locations (all set to "uk" based on Warwick affiliation)
- Research Areas (assigned to relevant collections)

### Optional Fields (where available)
- Research Interests
- Education history
- Google Scholar links
- Personal websites
- GitHub profiles
- Detailed biography
- Research focus description

## Display Order

Profiles are numbered using the `order` field:

- **1:** Prof. Maurer (PI)
- **10-15:** Postdocs
- **20-29:** PhD students

This ensures proper sorting on the website with the PI first, followed by postdocs, then PhD students.

## Research Area Assignments

Team members have been assigned to relevant research areas:

- **computational-chemistry:** Most team members (core focus of the group)
- **machine-learning:** Members working on ML methods (Chen Qian, Danjo De Chavez, Mariia Radova, Henry Thake)

## Profile Quality Levels

### Detailed Profiles (Full information available)
- Reinhard Maurer
- Nils Hertl
- Lukas Hoermann
- Chen Qian
- Danjo De Chavez
- Connor Box
- Alexander Spears
- Henry Snowden
- Henry Thake
- Ash Baldwin
- Dylan Morgan
- Mariia Radova
- Xuexun Lu

### Basic Profiles (Limited information on website)
- Benedict Saunders
- Valdas Vitartas
- YC Wong
- Matt Larkin

**Note:** Basic profiles can be expanded later as more information becomes available or through Pages CMS.

## Next Steps

### 1. View the Profiles

Visit http://localhost:4321/ to see all team members displayed on the homepage and individual profile pages at `/team/[member-name]`.

### 2. Add Profile Photos

To add photos for team members:

```
public/images/[firstname-lastname].jpg
```

Then add to the frontmatter:
```yaml
image: /images/firstname-lastname.jpg
```

### 3. Update via Pages CMS

Once you commit and push to GitHub:

1. Go to https://pagescms.org
2. Sign in with GitHub
3. Navigate to Team Members
4. Edit profiles, add photos, update information
5. Changes automatically commit to your repository

### 4. Expand Basic Profiles

For team members with minimal information:
- Contact them directly for details
- Add research interests, education, bio
- Link to Google Scholar, personal websites

### 5. Add Missing Members

If Lucas Belz-Koeling and Jasper Allen should be included:
- Create basic profiles for them
- Update information when available

## File Locations

All team member files are in:
```
src/content/team/
```

Files follow the naming convention: `firstname-lastname.md`

## Updating Information

### Manually

Edit the markdown files directly in `src/content/team/`

### Via Pages CMS

1. Push changes to GitHub
2. Access https://pagescms.org
3. Edit through the visual interface
4. Changes auto-commit back to the repository

## Profile Template

For adding new team members, use this template:

```markdown
---
name: "Dr. Firstname Lastname"
role: "Position"
email: "email@warwick.ac.uk"
order: 30
locations: ["uk"]
researchAreas:
  - "computational-chemistry"
researchInterests:
  - "Interest 1"
  - "Interest 2"
education:
  - degree: "PhD in Subject"
    institution: "University Name"
    year: 2020
---

Brief biography and research description.

## Research Focus

Details about their research.

## Background

Educational and career background.
```

## Team Statistics

- **Total Members:** 18 profiles created
- **Postdocs:** 6
- **PhD Students:** 12
- **Locations:** All at University of Warwick (UK)
- **Research Areas:** Computational Chemistry, Machine Learning

## Data Sources

All information extracted from:
- https://warwick.ac.uk/fac/sci/chemistry/research/maurer/maurergroup/people/
- Individual profile pages for each team member
- Extracted: October 30, 2024

Information reflects the state of the website at that time. Some details may have changed since extraction.
