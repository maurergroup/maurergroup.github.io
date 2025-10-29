# Adding Images to Location Cards

## Overview

The location cards in the "How to Find Us" section now have space for images above the address information. This guide shows you how to add images for each location.

## Quick Start

Each location card has a dedicated image area at the top. Currently, placeholders are shown, but you can easily replace them with actual photos.

## Adding an Image

### Step 1: Prepare Your Image

**Recommended specifications:**
- **Dimensions**: 800x600px or similar aspect ratio (4:3)
- **Format**: JPG, PNG, or WebP
- **File size**: Under 500KB (optimize for web)
- **Content**: Building exterior, office view, campus shot, or city landmark

### Step 2: Add Image to Project

Create a `public/images` directory if it doesn't exist:

```bash
mkdir public/images
```

Place your images in this directory:
```
public/
  images/
    vienna.jpg
    warwick.jpg
    goettingen.jpg
```

### Step 3: Update the HTML

Edit `src/pages/index.astro` and find the location card you want to update.

**Current placeholder code:**
```html
<div class="location-image">
  <!-- Replace with actual image: <img src="/images/vienna.jpg" alt="Vienna office" /> -->
  <div class="image-placeholder">📸 Add location image</div>
</div>
```

**Replace with:**
```html
<div class="location-image">
  <img src="/images/vienna.jpg" alt="Vienna office" />
</div>
```

## Complete Examples

### Vienna, Austria

```html
<div class="location-card" data-location="at">
  <div class="location-image">
    <img src="/images/vienna.jpg" alt="University of Vienna Physics Building" />
  </div>
  <div class="location-flag">🇦🇹</div>
  <h3>Vienna, Austria</h3>
  <!-- rest of content -->
</div>
```

### Coventry, UK

```html
<div class="location-card" data-location="uk">
  <div class="location-image">
    <img src="/images/warwick.jpg" alt="University of Warwick Chemistry Building" />
  </div>
  <div class="location-flag">🇬🇧</div>
  <h3>Coventry, UK</h3>
  <!-- rest of content -->
</div>
```

### Göttingen, Germany

```html
<div class="location-card" data-location="de">
  <div class="location-image">
    <img src="/images/goettingen.jpg" alt="University of Göttingen Chemistry Department" />
  </div>
  <div class="location-flag">🇩🇪</div>
  <h3>Göttingen, Germany</h3>
  <!-- rest of content -->
</div>
```

## Image Styling

The location images have the following styling:

- **Width**: 100% of card width
- **Height**: 200px fixed
- **Position**: Extends to card edges at top with rounded corners
- **Object-fit**: Cover (image will be cropped to fill the space)
- **Fallback**: Gradient background if image fails to load

## Tips for Good Location Images

### 1. Choose Representative Photos

Good choices:
- Building exterior showing where the office is located
- Campus landmarks or iconic views
- Office interior or lab space (if appropriate)
- City skyline with building marked

Avoid:
- Too much text in the image
- Overly dark or low-contrast photos
- Images with important details at edges (they may be cropped)

### 2. Image Optimization

Before adding images, optimize them:

**Using online tools:**
- [TinyPNG](https://tinypng.com/) - Free image compression
- [Squoosh](https://squoosh.app/) - Google's image optimizer

**Using command line (ImageMagick):**
```bash
convert original.jpg -resize 800x600^ -gravity center -extent 800x600 -quality 85 vienna.jpg
```

### 3. Accessibility

Always include descriptive alt text:

```html
<!-- Good -->
<img src="/images/vienna.jpg" alt="University of Vienna Physics Building, home of the research group" />

<!-- Bad -->
<img src="/images/vienna.jpg" alt="building" />
```

### 4. Responsive Design

The images automatically work on mobile devices:
- They scale to fit smaller screens
- The 200px height is maintained for consistency
- Images are cropped (not squished) to maintain aspect ratio

## Advanced: Different Images for Dark Mode

If you want different images for dark/light mode:

```html
<div class="location-image">
  <picture>
    <source srcset="/images/vienna-dark.jpg" media="(prefers-color-scheme: dark)" />
    <img src="/images/vienna.jpg" alt="Vienna office" />
  </picture>
</div>
```

## Advanced: Using External URLs

You can also use external image URLs:

```html
<div class="location-image">
  <img src="https://example.com/path/to/image.jpg" alt="Vienna office" />
</div>
```

**Note:** External images may load slower and aren't guaranteed to be available.

## Troubleshooting

### Image Not Showing

**Problem:** Image doesn't appear, placeholder is still visible

**Solutions:**
1. Check the image path is correct (should start with `/images/`)
2. Verify the image file exists in `public/images/`
3. Check browser console for 404 errors
4. Make sure you removed the `<div class="image-placeholder">` element

### Image Is Distorted

**Problem:** Image looks stretched or squished

**Solution:** The CSS uses `object-fit: cover` which crops images to fit. Make sure your source image is approximately 4:3 aspect ratio (e.g., 800x600px).

### Image Too Dark/Light

**Problem:** Image doesn't match site aesthetic

**Solutions:**
1. Adjust image brightness/contrast before uploading
2. Use image editing software to improve quality
3. Choose a different photo with better lighting

### File Size Too Large

**Problem:** Page loads slowly

**Solutions:**
1. Compress images using tools mentioned above
2. Convert to WebP format for better compression
3. Reduce image dimensions (800x600 is sufficient)

## Custom Styling

If you want to customize the image area, edit the CSS in `src/pages/index.astro`:

```css
.location-image {
  width: 100%;
  height: 200px;           /* Adjust height */
  margin: -2rem -2rem 1.5rem -2rem;
  border-radius: 10px 10px 0 0;
  overflow: hidden;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
}
```

## Removing Images

If you prefer not to have images, you can remove the entire image section:

```html
<!-- Remove this entire block -->
<div class="location-image">
  <img src="/images/vienna.jpg" alt="Vienna office" />
</div>
```

Or adjust the styling to hide them:

```css
.location-image {
  display: none;  /* Hide all location images */
}
```

## Example Directory Structure

After adding images, your project should look like:

```
group_page/
├── public/
│   └── images/
│       ├── vienna.jpg      (University of Vienna building)
│       ├── warwick.jpg     (University of Warwick building)
│       └── goettingen.jpg  (University of Göttingen building)
├── src/
│   └── pages/
│       └── index.astro     (Updated with image paths)
└── ...
```

## Free Image Sources

If you need placeholder images or don't have photos yet:

1. **University websites** - Often have press kits with building photos
2. **Wikimedia Commons** - Free, high-quality photos of universities and cities
3. **Unsplash** - Free stock photos (search for city names)
4. **Google Maps Street View** - Can capture building exteriors

**Important:** Ensure you have the right to use any images you add to the site.

## Summary

To add an image to a location card:

1. ✅ Prepare image (800x600px, optimized, < 500KB)
2. ✅ Place in `public/images/` directory
3. ✅ Update HTML in `src/pages/index.astro`
4. ✅ Replace placeholder with `<img>` tag
5. ✅ Include descriptive alt text
6. ✅ Test locally to verify image displays correctly

The images will add visual interest to your location cards and help visitors identify where your research group is located!
