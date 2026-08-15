# Assets Directory

This directory contains SVG placeholder images used in the Critical CSS Lab baseline page.

## Files

- `article-1.svg` - Browser rendering illustration
- `article-2.svg` - CSS rendering illustration  
- `article-3.svg` - Performance measurement illustration

## Purpose

These SVG files serve as lightweight, self-contained visual placeholders for article cards. They:

- Keep the project self-contained without external dependencies
- Ensure reproducible performance measurements
- Load quickly (no large image files)
- Maintain visual consistency

## Usage

The images are referenced in the HTML as:

```html
<img src="assets/article-1.svg" alt="Browser rendering process" />
```

## Technical Details

- Format: SVG
- Size: ~600 bytes each
- Dimensions: 320x200px
- Type: Vector graphics with gradients and text
