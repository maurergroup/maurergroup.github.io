# Multiple Locations for Team Members

## Overview

Team members can now be assigned to **multiple locations**. This is useful for:
- Researchers who split time between offices
- Visiting researchers
- Remote team members who visit multiple locations
- Professors with joint appointments

## How to Use

### Single Location (Array Format)

For a team member at one location, use an array with one element:

```markdown
---
name: "Dr. John Smith"
role: "Senior Researcher"
email: "john@university.edu"
locations: ["uk"]
---
```

### Multiple Locations

For a team member at multiple locations, list all locations:

```markdown
---
name: "Dr. Jane Researcher"
role: "Principal Investigator"
email: "jane@university.edu"
locations: ["usa", "uk"]
---
```

**Result:** Dr. Researcher will appear in BOTH the USA and UK location sections on the homepage.

## Valid Location Values

- `"usa"` - United States office
- `"uk"` - United Kingdom office
- `"germany"` - Germany office

You can add more locations by editing the schema in `src/content/config.ts`.

## Examples

### Example 1: Researcher Based in USA

```markdown
---
name: "Dr. Alice Johnson"
role: "Assistant Professor"
email: "alice@university.edu"
order: 3
locations: ["usa"]
---
```

**Display:** Appears only in the USA location section.

### Example 2: Researcher Splitting Time Between UK and Germany

```markdown
---
name: "Dr. Bob Wilson"
role: "Associate Professor"
email: "bob@university.edu"
order: 4
locations: ["uk", "germany"]
---
```

**Display:** Appears in BOTH UK and Germany location sections.

### Example 3: Visiting Researcher at All Locations

```markdown
---
name: "Dr. Chen Wei"
role: "Visiting Scholar"
email: "chen@university.edu"
order: 5
locations: ["usa", "uk", "germany"]
---
```

**Display:** Appears in ALL THREE location sections.

### Example 4: Remote Researcher with Primary Location

```markdown
---
name: "Dr. Emma Davis"
role: "Research Scientist (Remote)"
email: "emma@university.edu"
order: 6
locations: ["usa"]  # Primary/administrative location
---
```

**Display:** Appears in USA section (you can note "Remote" in the role field).

## How It Works

### Schema

The team member schema now uses:

```typescript
locations: z.array(z.enum(['usa', 'uk', 'germany']))
```

This means:
- It's an **array** (can hold multiple values)
- Each value must be one of the valid locations
- It's **required** (every team member must have at least one location)

### Homepage Display

On the homepage, the "How to Find Us" section groups team members by location:

```typescript
const locations = {
  usa: teamMembers.filter(m => m.data.locations?.includes('usa')),
  uk: teamMembers.filter(m => m.data.locations?.includes('uk')),
  germany: teamMembers.filter(m => m.data.locations?.includes('germany'))
};
```

A team member with `locations: ["usa", "uk"]` will appear in both the USA and UK lists.

## Use Cases

### 1. Joint Appointments

Professor with appointments at two institutions:

```markdown
locations: ["usa", "uk"]
```

### 2. Visiting Positions

Postdoc visiting from another institution:

```markdown
name: "Dr. Visiting Scholar"
role: "Visiting Postdoc (6 months)"
locations: ["germany"]  # Where they're currently visiting
```

### 3. Multi-Site Projects

Researcher leading a project across multiple sites:

```markdown
locations: ["usa", "uk", "germany"]  # Active at all sites
```

### 4. Sabbatical/Temporary

Faculty member on sabbatical at another location:

```markdown
name: "Dr. Professor Name"
role: "Professor (On Sabbatical in UK)"
locations: ["usa", "uk"]  # Home institution + sabbatical location
```

### 5. Remote with Occasional Visits

Remote researcher who occasionally visits an office:

```markdown
name: "Dr. Remote Worker"
role: "Research Scientist (Remote)"
locations: ["usa"]  # Lists under primary/administrative location
```

## Best Practices

### 1. List Primary Location First

While order in the array doesn't affect display, it's helpful to list the primary location first:

```markdown
locations: ["usa", "germany"]  # Primary in USA, also in Germany
```

### 2. Use Role Field for Details

Clarify the arrangement in the role field:

```markdown
role: "Associate Professor (Split USA/UK)"
locations: ["usa", "uk"]
```

### 3. Update When Positions Change

Keep locations current:
- Remove locations when someone leaves that office
- Add new locations when someone starts visiting
- Update role field to reflect current status

### 4. Consider Visitor Duration

For short-term visitors (< 3 months), you might:
- Only list them at the visiting location
- Add "(Visiting)" to their role
- Remove after their visit ends

For long-term visitors (> 6 months):
- List both home and visiting locations
- Specify duration in role field

## Migration from Single Location

If you have existing content with the old `location` field (singular), update to `locations` (plural, array):

**Old format:**
```markdown
location: "usa"
```

**New format:**
```markdown
locations: ["usa"]
```

Note: The field name changed from `location` (singular) to `locations` (plural).

## Adding New Locations

To add a new location (e.g., "france"):

1. **Update schema** in `src/content/config.ts`:
   ```typescript
   locations: z.array(z.enum(['usa', 'uk', 'germany', 'france']))
   ```

2. **Add to homepage** in `src/pages/index.astro`:
   ```typescript
   const locations = {
     usa: teamMembers.filter(m => m.data.locations?.includes('usa')),
     uk: teamMembers.filter(m => m.data.locations?.includes('uk')),
     germany: teamMembers.filter(m => m.data.locations?.includes('germany')),
     france: teamMembers.filter(m => m.data.locations?.includes('france'))
   };
   ```

3. **Add location section** in the locations grid on `src/pages/index.astro`:
   ```astro
   <div class="location-card" data-location="france">
     <div class="location-flag">🇫🇷</div>
     <h3>Paris, France</h3>
     <!-- ... rest of location card ... -->
   </div>
   ```

## Troubleshooting

### Team Member Not Showing in Location Section

**Check:**
1. Is `locations` an array? Use `["usa"]` not `"usa"`
2. Is the location value exactly one of: `usa`, `uk`, `germany`?
3. Did you restart the dev server after changes?

### Build Error

If you get a schema validation error:

```
locations must be an array
```

Make sure you're using array syntax:
- ✅ `locations: ["usa"]`
- ✅ `locations: ["usa", "uk"]`
- ❌ `locations: "usa"`
- ❌ `location: ["usa"]` (wrong field name)

### Team Member Shows in Wrong Location

Double-check the spelling and that values are lowercase:
- ✅ `"usa"`
- ❌ `"USA"`
- ❌ `"us"`

## Summary

**Before:** One location per person
```markdown
location: "usa"
```

**Now:** Multiple locations per person
```markdown
locations: ["usa", "uk", "germany"]
```

Team members can appear in multiple location sections, making it easy to represent:
- Joint appointments
- Visiting positions
- Multi-site roles
- Sabbaticals and temporary positions
