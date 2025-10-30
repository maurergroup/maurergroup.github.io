# Video Background Guide

## Overview

Research area pages now support video backgrounds in the hero banner section. The video plays automatically, loops continuously, and has a semi-transparent overlay to ensure text remains readable.

## Quick Start

### Step 1: Prepare Your Video

**Recommended specifications:**
- **Format**: MP4 (H.264 codec for best browser compatibility)
- **Resolution**: 1920×1080 (Full HD) or 1280×720 (HD)
- **Duration**: 10-30 seconds (will loop automatically)
- **File size**: Under 5MB for good performance
- **Frame rate**: 24-30 fps
- **Bitrate**: 2-4 Mbps

**Content suggestions:**
- Lab equipment in action
- Molecular simulations
- Microscope footage
- Chemical reactions
- Data visualizations
- Time-lapse of experiments
- Abstract scientific patterns

### Step 2: Optimize Your Video

Use video compression to reduce file size while maintaining quality:

**Using online tools:**
- [Clideo Video Compressor](https://clideo.com/compress-video)
- [FreeConvert](https://www.freeconvert.com/video-compressor)

**Using FFmpeg (command line):**
```bash
ffmpeg -i input.mp4 -vcodec h264 -crf 28 -preset slow -vf scale=1920:1080 research-background.mp4
```

Parameters explained:
- `-crf 28`: Quality (18-28 recommended, lower = better quality but larger file)
- `-preset slow`: Compression efficiency
- `-vf scale=1920:1080`: Resize to Full HD

### Step 3: Add Video to Project

1. Create a `public/videos` directory if it doesn't exist:
   ```bash
   mkdir public/videos
   ```

2. Place your video file:
   ```
   public/
     videos/
       research-background.mp4
   ```

### Step 4: Verify It Works

The video is already configured in the template at [src/pages/research/[slug].astro](src/pages/research/[slug].astro:42-45).

Visit any research area page (e.g., http://localhost:4321/research/computational-chemistry) to see the video background.

## Current Configuration

The hero section has been updated with:

```html
<div class="research-hero">
  <video class="hero-video" autoplay muted loop playsinline>
    <source src="/videos/research-background.mp4" type="video/mp4">
  </video>
  <div class="hero-overlay"></div>
  <div class="hero-content">
    <!-- Title and description -->
  </div>
</div>
```

### Video Attributes

- `autoplay`: Video starts playing automatically
- `muted`: Required for autoplay to work in most browsers
- `loop`: Video repeats indefinitely
- `playsinline`: Prevents fullscreen on mobile devices

### Styling

The CSS ensures:
- Video fills entire hero section
- Maintains aspect ratio (cropped to fit)
- Has semi-transparent overlay for text readability
- Text content appears above video
- Gradient fallback if video doesn't load

## Different Videos Per Research Area

If you want different videos for different research areas, you can customize per page:

### Option 1: Add Video Field to Schema

Update [src/content/config.ts](src/content/config.ts):

```typescript
const researchCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    order: z.number(),
    heroVideo: z.string().optional(), // Add this
  })
});
```

Update research area frontmatter:

```markdown
---
title: "Computational Chemistry"
description: "..."
order: 3
heroVideo: "/videos/chemistry-simulation.mp4"
---
```

Update [src/pages/research/[slug].astro](src/pages/research/[slug].astro):

```html
<video class="hero-video" autoplay muted loop playsinline>
  <source src={area.data.heroVideo || "/videos/research-background.mp4"} type="video/mp4">
</video>
```

### Option 2: Name Videos by Slug

Store videos with names matching research area slugs:

```
public/videos/
  machine-learning.mp4
  nlp.mp4
  computational-chemistry.mp4
  default.mp4  (fallback)
```

Update the video source:

```html
<video class="hero-video" autoplay muted loop playsinline>
  <source src={`/videos/${area.slug}.mp4`} type="video/mp4">
  <source src="/videos/default.mp4" type="video/mp4">
</video>
```

## Customizing the Overlay

The overlay helps ensure text is readable. You can adjust it in the CSS:

### Change Overlay Color

```css
.hero-overlay {
  background: rgba(102, 126, 234, 0.7);  /* Current: blue at 70% */
}
```

Options:
- Darker: `rgba(0, 0, 0, 0.5)` - Black at 50%
- Lighter: `rgba(255, 255, 255, 0.3)` - White at 30%
- Different color: `rgba(118, 75, 162, 0.6)` - Purple at 60%

### Remove Overlay Completely

```css
.hero-overlay {
  display: none;
}
```

**Warning**: Only do this if your video is dark enough for white text to be readable.

### Gradient Overlay

```css
.hero-overlay {
  background: linear-gradient(to bottom, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 100%);
}
```

## Accessibility and Performance

### Reduced Motion

Some users prefer reduced motion. Add this for accessibility:

```html
<video class="hero-video" autoplay muted loop playsinline
       prefers-reduced-motion="reduce">
  <source src="/videos/research-background.mp4" type="video/mp4">
</video>
```

Add CSS to handle reduced motion preference:

```css
@media (prefers-reduced-motion: reduce) {
  .hero-video {
    display: none;
  }
}
```

### Lazy Loading

For better performance, you can delay video loading:

```html
<video class="hero-video" autoplay muted loop playsinline loading="lazy">
  <source src="/videos/research-background.mp4" type="video/mp4">
</video>
```

### Poster Image

Add a poster image (thumbnail) shown before video loads:

```html
<video class="hero-video" autoplay muted loop playsinline
       poster="/images/video-poster.jpg">
  <source src="/videos/research-background.mp4" type="video/mp4">
</video>
```

## Mobile Considerations

### Smaller Video for Mobile

Serve a lower-resolution video on mobile to save bandwidth:

```html
<video class="hero-video" autoplay muted loop playsinline>
  <source src="/videos/research-background-mobile.mp4"
          type="video/mp4"
          media="(max-width: 768px)">
  <source src="/videos/research-background.mp4" type="video/mp4">
</video>
```

### Disable Video on Mobile

Hide video on small screens to improve performance:

```css
@media (max-width: 768px) {
  .hero-video {
    display: none;
  }
}
```

## Alternative: Image Instead of Video

If you prefer a static background image instead:

```html
<div class="research-hero" style="background-image: url('/images/research-hero.jpg');">
  <div class="hero-overlay"></div>
  <div class="hero-content">
    <!-- content -->
  </div>
</div>
```

Add CSS:

```css
.research-hero {
  background-size: cover;
  background-position: center;
}
```

## Troubleshooting

### Video Not Playing

**Problem**: Video doesn't appear or play

**Solutions**:
1. Check file path: `/videos/research-background.mp4` → `public/videos/research-background.mp4`
2. Verify video format is MP4 with H.264 codec
3. Check browser console for errors
4. Ensure video file is not corrupted
5. Try a different browser

### Video Too Large/Slow

**Problem**: Page loads slowly

**Solutions**:
1. Compress video more (increase `-crf` value in FFmpeg)
2. Reduce resolution (720p instead of 1080p)
3. Shorten duration (10-15 seconds is plenty for a loop)
4. Use lower bitrate
5. Add `loading="lazy"` attribute

### Text Not Readable

**Problem**: Text is hard to read over video

**Solutions**:
1. Increase overlay opacity: `rgba(102, 126, 234, 0.9)`
2. Use darker overlay: `rgba(0, 0, 0, 0.6)`
3. Add text shadow to content:
   ```css
   .hero-content h1 {
     text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.8);
   }
   ```

### Video Doesn't Loop

**Problem**: Video stops after playing once

**Solution**: Ensure `loop` attribute is present:
```html
<video autoplay muted loop playsinline>
```

### Mobile Autoplay Issues

**Problem**: Video doesn't autoplay on mobile

**Solutions**:
1. Ensure `muted` attribute is present (required for autoplay)
2. Add `playsinline` attribute (required on iOS)
3. Consider hiding video on mobile and using static background

## Free Video Resources

If you need stock footage:

1. **[Pexels Videos](https://www.pexels.com/videos/)** - Free stock videos
2. **[Pixabay Videos](https://pixabay.com/videos/)** - Free stock videos
3. **[Coverr](https://coverr.co/)** - Free videos for websites
4. **[Videvo](https://www.videvo.net/)** - Free stock footage

**Search terms for scientific videos:**
- "laboratory"
- "science"
- "chemistry"
- "molecular"
- "data visualization"
- "abstract particles"
- "microscope"
- "technology"

## Creating Your Own Videos

### Record Lab Footage

Use a smartphone or camera to record:
- Time-lapse of experiments
- Equipment in operation
- Team members at work
- Microscope output
- Computer simulations running

### Screen Recording Simulations

Record molecular dynamics simulations or data visualizations:

**Windows**: Windows Game Bar (Win + G)
**macOS**: QuickTime Player → File → New Screen Recording
**Linux**: SimpleScreenRecorder or OBS Studio

### Animation Software

Create abstract animations:
- **Blender** (free, 3D animations)
- **After Effects** (professional, paid)
- **Canva** (simple, web-based)

## Summary

To add a video background:

1. ✅ Create/obtain a video (10-30 sec, MP4, < 5MB)
2. ✅ Optimize video using FFmpeg or online tools
3. ✅ Place in `public/videos/research-background.mp4`
4. ✅ Video will automatically appear on all research pages
5. ✅ Customize overlay opacity/color if needed
6. ✅ Test on desktop and mobile

The gradient background acts as a fallback if the video is missing or doesn't load.

## Files Modified

- [src/pages/research/[slug].astro](src/pages/research/[slug].astro) - Added video element and updated CSS

## Example

Visit http://localhost:4321/research/computational-chemistry to see the video background in action (once you add a video file).
