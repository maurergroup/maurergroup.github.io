# Alumni Page Implementation

## Overview

Created a dedicated Alumni page showcasing 16 former members of the Computational Surface Science Group.

## Files Created

### 1. Alumni Page

**File:** [src/pages/alumni.astro](src/pages/alumni.astro)

**Content:**
- 16 alumni members from 2019-2025
- Comprehensive information for each person:
  - Name and title (Dr./MSc)
  - Role in the group
  - Membership period (from - until)
  - Current position
  - Email (where available)

**Features:**
- ✅ Responsive design
- ✅ Dark mode support
- ✅ Breadcrumb navigation
- ✅ Card-based layout with hover effects
- ✅ Chronological order (most recent first)
- ✅ Clickable email addresses
- ✅ Back link to current team

## Navigation Update

**File:** [src/components/Navigation.astro:9](src/components/Navigation.astro#L9)

Added "Alumni" link to main navigation between "Team" and "Publications"

## Alumni List (16 Members)

### Recent (2023-2025)
1. **Dr. Zsuzsanna Koczor-Benda** (Mar 2023 - Oct 2025) → UKRI Future Leaders Fellow at U Warwick
2. **Dr. Matt Stoodley** (Oct 2020 - Jan 2025) → R&D Scientist at Clarity Sensors Ltd
3. **Dr. Wojciech Stark** (Jun 2020 - Dec 2024) → PDRA at Imperial College London
4. **Dr. Joe Gilkes** (Oct 2020 - Sep 2024) → PDRA at U Warwick

### 2023
5. **Dr. James Gardner** (Oct 2018 - Aug 2023) → Cresset Biomolecular Discovery
6. **Dr. Daniel Corken** (May 2018 - Jun 2023)
7. **Dr. Shayantan Chaudhuri** (Sep 2019 - Aug 2023) → PostDoc at U Nottingham
8. **Dr. Benedikt Klein** (Mar 2020 - Mar 2023) → Korea Basic Science Institute
9. **Dr. Sam Hall** (Oct 2018 - Feb 2023) → Postdoc at Helmholtz Centre Berlin

### 2022
10. **Dr. Oscar Douglas-Gallardo** (Jan 2019 - Dec 2022) → Assistant Professor at Universidad Austral de Chile
11. **Dr. Billal Sohail** (Oct 2018 - Dec 2022) → CoinShares
12. **Dr. Martin Lea** (Oct 2018 - Aug 2022) → Jaguar Landrover
13. **Dr. Julia Westermayr** (Oct 2020 - Sep 2022) → W1 Tenure-Track Juniorprofessor at U Leipzig

### 2019-2020
14. **Shaumica Saravanabavan** (Oct 2019 - Sep 2020) → PhD student at U Warwick
15. **Dr. Adam McSloy** (Mar 2019 - Jul 2020) → PostDoc at Bremen University
16. **Dr. Georg Michelitsch** (Jan 2019 - Feb 2019) → PostDoc at École Polytechnique, Paris

## Design Features

### Layout
```
Breadcrumb: Home › Alumni
┌─────────────────────────────────────┐
│ Alumni                              │
│ Former members of the group         │
├─────────────────────────────────────┤
│ Introduction text                   │
├─────────────────────────────────────┤
│ ┌─────────────────────────────────┐ │
│ │ Dr. Name        2023 - 2025     │ │
│ │ Role: ...                       │ │
│ │ Current: ...                    │ │
│ │ Email: ...                      │ │
│ └─────────────────────────────────┘ │
│ [More alumni cards...]              │
└─────────────────────────────────────┘
← Back to current team
```

### Styling
- **Cards**: Background with border, hover lift effect
- **Header**: Name + period side-by-side
- **Details**: Grid layout with labels and values
- **Current Position**: Highlighted in bold
- **Email**: Clickable mailto links
- **Responsive**: Stacks on mobile

### Color Scheme
- Uses CSS variables for dark mode
- Primary color accents
- Subtle borders and shadows
- Hover animations

## Access Points

1. **Navigation Bar**: Direct "Alumni" link
2. **URL**: `/alumni`
3. **From Team Section**: "Back to current team" link returns to `/#team`

## Data Source

Alumni information extracted from:
https://warwick.ac.uk/fac/sci/chemistry/research/maurer/maurergroup/people/alumni/

## Future Enhancements

Possible additions:
- Alumni photos (if available)
- Research highlights during their time
- Publications authored
- Filtering by role or year
- Search functionality
- Links to personal websites or LinkedIn profiles

## Technical Notes

- Static data (array in component)
- Could be converted to content collection if frequent updates needed
- Emails formatted as clickable `mailto:` links
- Chronological order (newest first)
- Fully accessible with semantic HTML

## Statistics

- **Total Alumni**: 16
- **PhD Students**: 10
- **Postdoctoral Fellows**: 5
- **MSc Student**: 1
- **Time Range**: 2019-2025
- **With Email Contact**: 8
- **Current Academic Positions**: 7
- **Industry Positions**: 4
