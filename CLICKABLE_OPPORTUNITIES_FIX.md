# Clickable Opportunities Fix

## Problem

The opportunities list on the landing page was not clickable. Clicking on an opportunity did not lead to a separate detail page.

## Solution

Made opportunities clickable and created individual detail pages for each opportunity.

## Changes Made

### 1. Updated OpportunityCard Component

**File:** [src/components/OpportunityCard.astro](src/components/OpportunityCard.astro)

**Added slug parameter:**
```typescript
interface Props {
  title: string;
  type: string;
  location: string;
  deadline?: Date;
  open: boolean;
  slug: string;  // Added
}
```

**Changed from `<div>` to `<a>` tag:**
```astro
<a href={`/opportunities/${slug}`} class="opportunity-card">
  <!-- content -->
</a>
```

**Updated location labels to match new schema:**
```typescript
const locationLabels: Record<string, string> = {
  at: 'Austria',        // Changed from 'usa', 'germany', etc.
  uk: 'United Kingdom',
  de: 'Germany'
};
```

**Added hover effects:**
```css
.opportunity-card:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  border-left-color: var(--primary);
}
```

**Fixed TypeScript errors:**
- Added `Record<string, string>` type annotations to `typeLabels` and `locationLabels`

### 2. Updated Homepage to Pass Slug

**File:** [src/pages/index.astro](src/pages/index.astro#L133-L141)

**Added slug prop:**
```astro
<OpportunityCard
  title={opp.data.title}
  type={opp.data.type}
  location={opp.data.location}
  deadline={opp.data.deadline}
  open={opp.data.open}
  slug={opp.slug}  // Added
/>
```

### 3. Created Dynamic Opportunity Detail Pages

**File:** [src/pages/opportunities/[slug].astro](src/pages/opportunities/[slug].astro) (NEW)

**Features:**
- ✅ Dynamic route generation for all opportunities
- ✅ Breadcrumb navigation
- ✅ Full metadata display (type, location, deadline, status)
- ✅ Status badge (Open/Closed)
- ✅ Full markdown content rendering
- ✅ "Back to all opportunities" link
- ✅ Responsive design
- ✅ Dark mode support

**Layout:**
```
Breadcrumb: Home › Opportunities › [Title]
┌─────────────────────────────────────┐
│ Title                               │
│ Type | Location | Deadline | Badge  │
├─────────────────────────────────────┤
│                                     │
│ Full opportunity content            │
│ (rendered from markdown)            │
│                                     │
└─────────────────────────────────────┘
← Back to all opportunities
```

## Result

### Before:
- ❌ Opportunities were static, non-clickable cards
- ❌ No way to view full details
- ❌ No individual pages for opportunities

### After:
- ✅ Opportunities are clickable cards with hover effects
- ✅ Click leads to `/opportunities/[slug]` detail page
- ✅ Full opportunity content displayed on detail page
- ✅ Proper navigation and breadcrumbs
- ✅ Consistent styling with rest of site
- ✅ Mobile responsive

## URLs

Opportunities now have individual pages:
- `/opportunities/postdoc-goettingen-2026`
- `/opportunities/phd-vienna-2026`
- `/opportunities/phd-vienna-ml-2026`
- `/opportunities/phd-position` (closed)
- `/opportunities/postdoc-nlp` (closed)
- `/opportunities/research-intern` (closed)

## User Experience

1. **Homepage:** User sees opportunity cards with summary info
2. **Click:** User clicks any opportunity card
3. **Detail Page:** Full opportunity description loads at `/opportunities/[slug]`
4. **Navigation:** User can return via breadcrumb or "Back to all opportunities" link

## Technical Notes

- Uses Astro's `getStaticPaths()` for static generation
- Renders markdown content using `await opportunity.render()`
- Maintains consistent color scheme and dark mode support
- TypeScript-safe with proper type annotations
- Accessible with semantic HTML and ARIA labels
