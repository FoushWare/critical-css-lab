# Episode 02 - Critical CSS Optimization

## Goal

This episode demonstrates how Critical CSS optimization fixes the render-blocking CSS problem. It shows a direct comparison between the "before" state (render-blocking CSS) and the "after" state (Critical CSS optimization).

## Status
✅ Completed

## Technology

- **HTML5** - Semantic markup
- **CSS3** - Modern CSS with custom properties, flexbox, and grid
- **Critical CSS** - Inline critical styles in HTML `<head>`
- **Node.js** - Custom server for CSS delay simulation (for comparison)
- **No frameworks** - Pure HTML/CSS implementation
- **No build tools** - Direct browser rendering

## Structure

This episode has two versions for comparison:

### Before (`before/`)
- **CSS Strategy**: Normal external stylesheet
- **Render Blocking**: Yes (full stylesheet blocks rendering)
- **Blank Screen**: 10 seconds while CSS loads
- **FCP**: ~10.0s
- **LCP**: ~10.1s

### After (`after/`)
- **CSS Strategy**: Critical CSS inlined + async full CSS
- **Render Blocking**: No (Critical CSS renders immediately)
- **Blank Screen**: None (content appears instantly)
- **FCP**: ~7ms (HTML response time)
- **LCP**: Depends on critical CSS size and network

## How to Run

### Before Version (Render-Blocking CSS)

1. Navigate to the before directory:
   ```bash
   cd eps02-critical-css-optimization/before/code
   ```

2. Install dependencies (if needed):
   ```bash
   npm install
   ```

3. Start the custom server:
   ```bash
   npm run dev
   ```

4. Open in browser:
   ```
   http://localhost:8080
   ```

**What you'll see:**
- The page will load with HTML first
- Then there will be a **10-second delay** while CSS loads
- Content will only appear after CSS is received
- The browser will show a blank screen during this delay

### After Version (Critical CSS Optimization)

1. Navigate to the after directory:
   ```bash
   cd eps02-critical-css-optimization/after/code
   ```

2. Install dependencies (if needed):
   ```bash
   npm install
   ```

3. Start the custom server:
   ```bash
   npm run dev
   ```

4. Open in browser:
   ```
   http://localhost:8081
   ```

**What you'll see:**
- The page will load content **immediately** (no blank screen)
- The full `styles.css` will load after 10 seconds (but won't block rendering)
- Content is styled with inlined Critical CSS during the CSS delay
- After CSS loads, the full stylesheet takes over for below-the-fold content

## Comparison

### Before (Render-Blocking)
- **CSS Strategy**: Normal external stylesheet
- **Render Blocking**: Yes (full stylesheet blocks rendering)
- **Blank Screen**: 10 seconds while CSS loads
- **FCP**: ~10.0s
- **LCP**: ~10.1s

### After (Critical CSS)
- **CSS Strategy**: Critical CSS inlined + async full CSS
- **Render Blocking**: No (Critical CSS renders immediately)
- **Blank Screen**: None (content appears instantly)
- **FCP**: ~7ms (HTML response time)
- **LCP**: Depends on critical CSS size and network

## Critical CSS Implementation

The "after" version implements manual Critical CSS extraction:

1. **Identify above-the-fold content**:
   - Header navigation
   - Hero section
   - Performance metrics (if visible)
   - Initial viewport

2. **Extract necessary styles**:
   - Layout styles for critical elements
   - Typography styles
   - Colors and background
   - Responsive breakpoints

3. **Inline in HTML `<head>`**:
   - Add `<style>` tag with critical CSS
   - Minify if desired (optional)
   - Ensure it comes before the external stylesheet

4. **Load full CSS asynchronously**:
   - Keep external `<link rel="stylesheet">`
   - Browser loads it after initial paint
   - Non-critical styles are applied gradually

## Measuring Performance

### Network Tab Setup

1. Open Chrome DevTools (F12 or Cmd+Option+I)
2. Go to **Network** tab
3. Enable **☑ Disable cache**
4. Reload the page

### What to Observe

**Before:**
- **HTML loads quickly** (~7ms)
- **styles.css shows ~10000ms** (intentional server delay)
- **Blank screen for 10 seconds** while CSS loads
- **Content only appears** after CSS is loaded

**After:**
- **HTML loads quickly** (~7ms)
- **Page content appears immediately** (Critical CSS inlined)
- **styles.css shows ~10000ms** (delayed by server)
- **Content remains visible** during CSS delay (styled by Critical CSS)
- **After CSS loads**, full stylesheet takes over

### Expected Timeline

**Before:**
```
HTML Request    → 7ms   → HTML received
CSS Request     → 10000ms → CSS received (delayed by server)
First Paint      → ~10007ms → Content appears
```

**After:**
```
HTML Request        → 7ms    → HTML received
Critical CSS Render → 7ms    → Content visible (styled)
CSS Request         → 10000ms → CSS received (delayed by server)
Full CSS Applied    → After → Non-critical styles loaded
```

## Key Concepts

This comparison demonstrates:

- **Critical CSS**: Inlining styles needed for initial viewport
- **Render-blocking removal**: Non-critical CSS doesn't block rendering
- **Above-the-fold optimization**: Focus on visible content first
- **Performance improvement**: FCP drops from ~10s to ~7ms
- **Trade-offs**: Larger HTML size vs faster initial paint

## File Structure

```
eps02-critical-css-optimization/
├── README.md
├── before/                        # Before: Render-blocking CSS
│   └── code/
│       ├── index.html            # Normal HTML
│       ├── styles.css            # Full stylesheet
│       ├── server.js             # Custom server with CSS delay
│       ├── package.json          # Node.js dependencies
│       └── assets/
│           ├── README.md
│           ├── article-1.svg
│           ├── article-2.svg
│           └── article-3.svg
└── after/                         # After: Critical CSS optimized
    └── code/
        ├── index.html            # HTML with inlined Critical CSS
        ├── styles.css            # Full stylesheet (non-critical)
        ├── server.js             # Custom server with CSS delay
        ├── package.json          # Node.js dependencies
        └── assets/
            ├── README.md
            ├── article-1.svg
            ├── article-2.svg
            └── article-3.svg
```

## License

This project is part of the Critical CSS Lab educational series.
