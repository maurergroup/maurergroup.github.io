# Publication Citations Update

## Changes Made

Enhanced publication display to show full bibliographic references including volume, pages/article number, year, and DOI.

### 1. Updated Schema

**File:** [src/content/config.ts](src/content/config.ts#L27-L44)

Added new optional fields:
```typescript
volume: z.string().optional(),
pages: z.string().optional(),
article: z.string().optional(),
doi: z.string().optional(),
```

### 2. Updated Publication Component

**File:** [src/components/Publication.astro](src/components/Publication.astro)

**New citation format logic:**
```typescript
let citation = venue;
if (volume) {
  citation += ` ${volume}`;
}
if (article) {
  citation += `, ${article}`;
} else if (pages) {
  citation += `, ${pages}`;
}
citation += ` (${year})`;
if (doi) {
  citation += `. DOI: ${doi}`;
}
```

**Example outputs:**
- `Nature Communications 10, 5024 (2019). DOI: 10.1038/s41467-019-12875-2`
- `Physical Review Letters 116, 217601 (2016). DOI: 10.1103/PhysRevLett.116.217601`
- `Nature Computational Science 3, 139-148 (2023). DOI: 10.1038/s43588-022-00391-1`

### 3. Updated Homepage

**File:** [src/pages/index.astro](src/pages/index.astro#L100-L113)

Now passes all citation fields to Publication component:
```astro
<Publication
  title={pub.data.title}
  authors={pub.data.authors}
  venue={pub.data.venue}
  year={pub.data.year}
  volume={pub.data.volume}
  pages={pub.data.pages}
  article={pub.data.article}
  doi={pub.data.doi}
  pdf={pub.data.pdf}
  code={pub.data.code}
  dataset={pub.data.dataset}
  demo={pub.data.demo}
/>
```

### 4. Updated Publication Files

Added citation information to key publications:

#### ✅ ml-quantum-chemistry-2019.md
- Volume: "10"
- Article: "5024"
- DOI: "10.1038/s41467-019-12875-2"

#### ✅ electronic-friction-2016.md
- Volume: "116"
- Article: "217601"
- DOI: "10.1103/PhysRevLett.116.217601"

#### ✅ generative-design-2023.md
- Volume: "3"
- Pages: "139-148"
- DOI: "10.1038/s43588-022-00391-1"

#### ✅ graphene-structure-2024.md
- Volume: "132"
- Article: "196201"
- DOI: "10.1103/PhysRevLett.132.196201"

### Remaining Publications to Update

The following publications still need citation information added:

- ❌ vibrational-dissipation-2025.md
- ❌ foundation-models-2025.md
- ❌ co-cryo-sorption-2025.md
- ❌ nonadiabatic-dynamics-2025.md

## Citation Format

The component intelligently formats citations based on available data:

1. **With article number** (common in many journals):
   - Format: `Venue Volume, Article (Year). DOI: xxx`
   - Example: `Nature Communications 10, 5024 (2019). DOI: 10.1038/s41467-019-12875-2`

2. **With page range** (traditional format):
   - Format: `Venue Volume, Pages (Year). DOI: xxx`
   - Example: `Nature Computational Science 3, 139-148 (2023). DOI: 10.1038/s43588-022-00391-1`

3. **Minimal** (fallback):
   - Format: `Venue (Year)`
   - Example: `Journal Name (2024)`

## Benefits

✅ **Professional appearance**: Full academic citations
✅ **Complete information**: Volume, pages/article, DOI included
✅ **Clickable DOI**: DOI appears in text, PDF link remains separate button
✅ **Flexible format**: Handles both article numbers and page ranges
✅ **Backward compatible**: Works with publications lacking citation details

## To Add Citation Information

For each publication, add to frontmatter:

```yaml
volume: "10"           # Volume number
article: "5024"        # Article number (OR use pages)
pages: "139-148"       # Page range (if no article number)
doi: "10.1038/..."     # DOI string
```

## Sources

Citation information for Nature Communications 2019 paper obtained from:
- [Nature Communications article](https://www.nature.com/articles/s41467-019-12875-2)
- [PubMed entry](https://pubmed.ncbi.nlm.nih.gov/31729373/)
