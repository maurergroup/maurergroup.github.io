# Profile Image Fix for Head of Group Section

## Problem

The photo of Prof. Dr. Reinhard J. Maurer was not displaying in the "Head of Group" section on the homepage. Instead, only initials were shown.

## Root Cause

In [src/pages/index.astro](src/pages/index.astro), the "Head of Group" section was hardcoded to display initials rather than checking if an image was available:

```astro
<div class="profile-image">
  {principalInvestigator.data.name.split(' ').map(n => n[0]).join('')}
</div>
```

## Solution

### 1. Updated Profile Image Display Logic

Changed the code to check if an image exists and display it, with fallback to initials:

```astro
<div class="profile-image">
  {principalInvestigator.data.image ? (
    <img src={principalInvestigator.data.image} alt={principalInvestigator.data.name} />
  ) : (
    principalInvestigator.data.name.split(' ').map(n => n[0]).join('')
  )}
</div>
```

**Location:** [src/pages/index.astro:43-49](src/pages/index.astro#L43-L49)

### 2. Added CSS Styling for Image

Added CSS rules to ensure the image displays correctly within the profile container:

```css
.profile-image {
  width: 100%;
  aspect-ratio: 1;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 4rem;
  font-weight: 700;
  overflow: hidden;  /* Added to clip image to border-radius */
}

.profile-image img {  /* New rule */
  width: 100%;
  height: 100%;
  object-fit: cover;  /* Ensures image fills container while maintaining aspect ratio */
}
```

**Location:** [src/pages/index.astro:265-283](src/pages/index.astro#L265-L283)

## Image File Details

- **Profile:** Prof. Dr. Reinhard J. Maurer (Principal Investigator)
- **Image Path:** `/images/reinhard-maurer.jpg`
- **Image Path in Profile:** Correctly set in [src/content/team/reinhard-maurer.md:8](src/content/team/reinhard-maurer.md#L8)
- **Physical File Location:** `public/images/reinhard-maurer.jpg` ✅ (exists, 374KB)

## How It Works

1. The homepage retrieves the principal investigator from team members (sorted by order, first member)
2. Checks if `principalInvestigator.data.image` exists
3. If image exists: displays `<img>` tag with the image
4. If image doesn't exist: displays initials as fallback (gradient background with text)
5. CSS ensures proper sizing and cropping of the image

## Result

Prof. Reinhard Maurer's photo will now display correctly in the "Head of Group" section on the homepage at `/#about`.

## Testing

To verify the fix works:

1. Start the dev server: `npm run dev`
2. Visit `http://localhost:4321/#about`
3. The "Head of Group" section should show Prof. Maurer's photo instead of initials
4. The image should be properly cropped to a square with rounded corners

## Note

If you encounter the npm dependency error when running `npm run dev`, try:

```bash
rm -rf node_modules package-lock.json
npm install
npm run dev
```

This will rebuild the dependencies and should resolve the @rollup/rollup-win32-x64-msvc module error.
