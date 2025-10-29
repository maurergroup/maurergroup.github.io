# Team Member Assignment to Research Areas

## Overview

Team members can now be assigned to one or multiple research areas. When assigned, they will automatically appear on the research area detail pages, making it easy to see who works on what.

## How It Works

### 1. Assigning Team Members to Research Areas

Edit the team member's markdown file in `src/content/team/` and add the `researchAreas` field with an array of research area slugs:

```markdown
---
name: "Dr. Jane Researcher"
role: "Principal Investigator"
email: "jane@university.edu"
order: 1
location: "usa"
researchInterests:
  - "Deep Learning"
  - "Natural Language Processing"
researchAreas:
  - "machine-learning"
  - "nlp"
---
```

**Key Points:**
- Use the **slug** of the research area (the filename without `.md`)
- Multiple research areas can be assigned to one person
- This field is optional - team members without assignments won't appear on research pages

### 2. Finding Research Area Slugs

The slug is the filename of the research area without the `.md` extension:

| Research Area File | Slug |
|-------------------|------|
| `machine-learning.md` | `machine-learning` |
| `nlp.md` | `nlp` |
| `computer-vision.md` | `computer-vision` |

### 3. Display on Research Pages

Team members assigned to a research area will automatically appear on that area's detail page in a "Team Members" section, displayed before the publications.

## Examples

### Example 1: Single Research Area

Dr. John Smith works only on Machine Learning:

```markdown
---
name: "Dr. John Smith"
role: "Senior Researcher"
email: "john@university.edu"
order: 2
location: "uk"
researchAreas:
  - "machine-learning"
---
```

**Result:** John appears on the Machine Learning research page only.

### Example 2: Multiple Research Areas

Dr. Jane Researcher works on both Machine Learning and NLP:

```markdown
---
name: "Dr. Jane Researcher"
role: "Principal Investigator"
email: "jane@university.edu"
order: 1
location: "usa"
researchAreas:
  - "machine-learning"
  - "nlp"
---
```

**Result:** Jane appears on both the Machine Learning and NLP research pages.

### Example 3: No Research Areas

A team member focused on administration or teaching:

```markdown
---
name: "Dr. Admin Person"
role: "Lab Manager"
email: "admin@university.edu"
order: 5
location: "usa"
# No researchAreas field
---
```

**Result:** This person appears on the team page but not on any research area pages.

## Current Assignments

Based on the sample content:

### Machine Learning Research Area
- **Dr. Jane Researcher** (Principal Investigator)
- **Dr. John Smith** (Senior Researcher)

### Natural Language Processing Research Area
- **Dr. Jane Researcher** (Principal Investigator)
- **Maria Lopez** (PhD Candidate)

## Implementation Details

### Schema

The team member schema includes:

```typescript
researchAreas: z.array(z.string()).optional()
```

### Research Page Query

The research detail page filters team members like this:

```typescript
const assignedTeamMembers = allTeamMembers
  .filter(member => member.data.researchAreas?.includes(area.slug))
  .sort((a, b) => a.data.order - b.data.order);
```

### Display

Team members are shown with:
- Profile photo or initials
- Name (clickable, links to their detail page)
- Role/position

## Best Practices

### 1. Keep Assignments Current
Regularly update team member assignments as their research focus changes.

### 2. Be Specific
Only assign team members to areas where they actively contribute. This helps visitors understand the actual research structure.

### 3. Consider Hierarchy
The display order follows the `order` field in the team member frontmatter, so:
- PI comes first
- Senior researchers next
- PhD students/postdocs after

### 4. Use Consistent Slugs
Always use lowercase with hyphens, matching the research area filenames:
- ✅ `machine-learning`
- ✅ `natural-language-processing`
- ❌ `Machine Learning`
- ❌ `machine_learning`

## Adding New Research Areas

When you create a new research area:

1. Create the file: `src/content/research/quantum-computing.md`
2. The slug is: `quantum-computing`
3. Assign team members using this slug:

```markdown
researchAreas:
  - "quantum-computing"
```

## Troubleshooting

### Team Member Not Showing on Research Page

**Check:**
1. Is the `researchAreas` field present in the team member's frontmatter?
2. Does the slug exactly match the research area filename?
3. Is the research area file present in `src/content/research/`?
4. Did you restart the dev server after making changes?

### Wrong Order on Research Page

Team members are sorted by their `order` field, not the order in `researchAreas`. Update the `order` field to change the display sequence.

### Team Member Shows on Wrong Research Page

Double-check the spelling of the research area slug. It must exactly match the filename (without `.md`).

## Validation

The schema ensures:
- `researchAreas` is an array of strings
- It's optional (can be omitted)
- Each entry should be a valid slug

However, the system doesn't currently validate that the slugs match actual research areas. Make sure to:
- Test locally before deploying
- Check the research page to verify members appear
- Use valid slugs from existing research area files

## Future Enhancements

Potential improvements you could add:
- Validate slugs against actual research areas
- Show research areas on team member detail pages
- Add percentage/role indicators (e.g., "30% time allocation")
- Group by role on research pages (PIs, Postdocs, PhD students, etc.)

## Example Complete Team Member File

```markdown
---
name: "Dr. Alice Johnson"
role: "Associate Professor"
email: "alice@university.edu"
order: 3
location: "usa"
website: "https://alice.edu"
github: "alicejohnson"
scholar: "https://scholar.google.com/citations?user=xyz"
researchInterests:
  - "Machine Learning"
  - "Computer Vision"
  - "Robotics"
researchAreas:
  - "machine-learning"
  - "computer-vision"
education:
  - degree: "Ph.D. in Computer Science"
    institution: "MIT"
    year: "2018"
---

Dr. Johnson's research focuses on applying machine learning to robotics and computer vision problems...
```

This person will appear on both the Machine Learning and Computer Vision research area pages.
