# Location Schema Fix for Opportunities

## Problem

The opportunities collection schema was using different location codes than the team collection, causing validation errors:

```
location: Invalid enum value. Expected 'usa' | 'uk' | 'germany' | 'remote' | 'any'
```

## Root Cause

The schema had inconsistent location definitions:
- **Team collection** used: `['at', 'uk', 'de']` (country codes for Austria, UK, Germany)
- **Opportunities collection** used: `['usa', 'uk', 'germany', 'remote', 'any']` (mixed format)

## Solution

Updated the opportunities schema to use the same location codes as the team collection, matching the research group's three actual locations.

### Changes Made

#### 1. Updated Schema in [config.ts:72](src/content/config.ts#L72)

**Before:**
```typescript
location: z.enum(['usa', 'uk', 'germany', 'remote', 'any']),
```

**After:**
```typescript
location: z.enum(['at', 'uk', 'de']),
```

#### 2. Updated Opportunity Files

Fixed location values in all opportunity files to match the new schema:

**[postdoc-goettingen-2026.md](src/content/opportunities/postdoc-goettingen-2026.md)**
- Changed: `location: "germany"` → `location: "de"`

**[postdoc-nlp.md](src/content/opportunities/postdoc-nlp.md)**
- Changed: `location: "germany"` → `location: "de"`

**[research-intern.md](src/content/opportunities/research-intern.md)**
- Changed: `location: "any"` → `location: "uk"`

**Vienna positions** ([phd-vienna-2026.md](src/content/opportunities/phd-vienna-2026.md), [phd-vienna-ml-2026.md](src/content/opportunities/phd-vienna-ml-2026.md))
- Already correct: `location: "at"` ✅

**[phd-position.md](src/content/opportunities/phd-position.md)**
- Already correct: `location: "at"` ✅

## Location Codes

The standardized location codes now used across the entire site:

- **`at`** - Austria (University of Vienna)
- **`uk`** - United Kingdom (University of Warwick)
- **`de`** - Germany (University of Göttingen)

These match the ISO 3166-1 alpha-2 country codes and are consistent with the team member location assignments.

## Result

✅ All opportunities now validate correctly against the schema
✅ Consistent location codes across team and opportunities collections
✅ Matches the research group's three actual locations

## Display Logic

Opportunities can be filtered or displayed by location using these codes. The location labels can be shown to users as:
- `at` → "Austria" or "Vienna"
- `uk` → "United Kingdom" or "Warwick"
- `de` → "Germany" or "Göttingen"

## Future Opportunities

When adding new opportunities, always use one of these three location codes: `at`, `uk`, or `de`.
