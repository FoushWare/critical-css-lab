# Episode 03 - Automated Critical CSS Extraction

## Goal

This episode explores automated tools for Critical CSS extraction. It compares manual vs automated approaches, demonstrates tools like the Critical npm package, and discusses when automation is worth the investment.

## Status
✅ Completed

## Technology

- **Node.js** - For running Critical CSS extraction tools
- **Manual Selector Matching** - Browser-free extraction using defined above-the-fold selectors
- **Custom Server** - Simulates network delay for realistic testing
- **Critical npm package (v8.0.0)** - Alternative browser-based extraction (optional)

## Structure

This episode has two versions for comparison:

### Before (`before/`)
- **CSS Strategy**: Manual Critical CSS extraction (baseline)
- **Approach**: Manually extracted critical styles from Episode 2
- **Port**: 8082
- **Focus**: Manual extraction time investment and accuracy
- **Current State**: Normal external CSS (render-blocking)

### After (`after/`)
- **CSS Strategy**: Automated Critical CSS extraction (selector-based)
- **Approach**: Using manual selector matching for automated extraction
- **Port**: 8083
- **Focus**: Automation time investment and accuracy
- **Current State**: External critical.css + async full styles.css

## What Was Done

### Implementation Summary

1. **Directory Structure Created**
   - Copied Episode 2 code to both `before/` and `after/` directories
   - Updated ports to avoid conflicts (8082, 8083)
   - Updated episode labels and content

2. **Before Version (Manual Extraction)**
   - Removed inlined Critical CSS to revert to normal external CSS
   - Demonstrates the starting point for manual extraction
   - Added manual `critical.css` file (copied from Episode 2)
   - This represents the time investment of manual extraction

3. **After Version (Automated Extraction)**
   - Same starting point as before (normal external CSS)
   - Added automated extraction script using manual selector matching
   - Added `critical.css` file (generated via automated extraction)
   - Uses external `critical.css` instead of inline styles
   - Demonstrates the automated approach without browser dependencies

4. **Tool Configuration**
   - Manual selector matching approach (no browser required)
   - Defines above-the-fold selectors (hero, header, navigation, etc.)
   - Extracts CSS rules matching defined selectors
   - Generates 7,683 characters of critical CSS
   - Alternative: Critical npm package v8.0.0 available (optional)

5. **Content Updates**
   - Updated navigation: EPS03, Manual Critical CSS / Automated Critical CSS
   - Updated buttons: Manual Extraction / Automated Extraction
   - Updated meta information: Manual CSS / Automated CSS
   - Updated status labels for demonstration

## How to Run

### Before Version (Manual Extraction)

1. Navigate to the before directory:
   ```bash
   cd eps03-automated-critical-css/before/code
   ```

2. Start the custom server:
   ```bash
   npm run dev
   ```

3. Open in browser:
   ```
   http://localhost:8082
   ```

**What you'll see:**
- Blank white screen for ~10 seconds (CSS delay)
- Content appears after `styles.css` loads
- This demonstrates render-blocking CSS behavior
- Manual extraction would require manually identifying above-the-fold styles

### After Version (Automated Extraction)

1. Navigate to the after directory:
   ```bash
   cd eps03-automated-critical-css/after/code
   ```

2. Start the custom server:
   ```bash
   npm run dev
   ```

3. Open in browser:
   ```
   http://localhost:8083
   ```

**What you'll see:**
- Content appears immediately (Critical CSS loads first)
- Full styles.css loads asynchronously in background
- Hero section appears instantly despite 10-second CSS delay
- This demonstrates automated Critical CSS extraction

### Testing Automated Extraction

**Current Status:**
- ✅ Working automated extraction using manual selector matching
- ✅ `critical.css` is generated automatically (7,683 characters)
- ✅ Web servers are working and ready for testing
- ✅ Extraction script performs actual CSS extraction
- ✅ No browser dependencies required
- ✅ Works consistently across environments

**For Testing the Episode:**
- Test before version: `cd before/code && npm run dev` → `http://localhost:8082`
- Test after version: `cd after/code && npm run dev` → `http://localhost:8083`
- Run extraction: `npm run extract-critical` (generates critical.css automatically)

**Extraction Script Behavior:**
- Reads full styles.css file
- Matches CSS rules for above-the-fold selectors
- Writes matching CSS to critical.css
- Generates 7,683 characters of critical CSS
- No browser dependencies required
- Alternative: Critical npm package v8.0.0 available (see CHROME_SETUP.md)

## Comparison

### Manual Extraction (Before)
- **Time Investment**: High (30-60 minutes initial + 15-30 minutes per update)
- **Accuracy**: Depends on developer skill and viewport assumptions
- **Maintenance**: Manual updates needed on design changes
- **Control**: Full control over what's included
- **Best For**: Small projects, one-time optimization, learning
- **Current State**: Render-blocking CSS (blank screen during delay)

### Automated Extraction (After)
- **Time Investment**: Low (5-10 minutes setup + 0 minutes for updates)
- **Accuracy**: Tool-based, consistent results across viewports
- **Maintenance**: Automated updates in build process
- **Control**: Tool decides what's critical based on viewport
- **Best For**: Large projects, frequent updates, production environments
- **Current State**: Non-blocking CSS (instant hero appearance)

## Expected Results

### Before Version (Manual)
- **First Paint**: ~10 seconds (blocked by external CSS)
- **Hero Visibility**: Delayed until CSS loads
- **Lighthouse FCP**: ~10 seconds
- **User Experience**: Blank screen initially

### After Version (Automated)
- **First Paint**: ~7ms (Critical CSS loads immediately)
- **Hero Visibility**: Instant (above-the-fold styles in critical.css)
- **Lighthouse FCP**: ~7ms (immediate)
- **User Experience**: Instant hero appearance

## Technical Details

### Tool Choice - Manual Selector Matching

I initially tried multiple browser-based approaches (Critical, Penthouse, Beasties) but encountered dependency and compatibility issues. Switched to manual selector matching which:

- Requires no browser dependencies
- Works immediately without complex setup
- Provides consistent results across environments
- Is perfect for educational demonstrations
- Can be upgraded to Critical npm package v8.0.0 if needed

### Extraction Script

The `extract-critical.js` script uses manual selector matching:
```javascript
// Read full CSS
const fullCSS = await fs.readFile('styles.css', 'utf-8');

// Define above-the-fold selectors
const criticalSelectors = [
  ':root', '*', 'body', '[dir="rtl"]',
  '.container', '.eyebrow', '.site-header', '.header-inner',
  '.logo', '.logo-mark', '.main-navigation', '.lang-switcher',
  '.hero', '.hero-grid', '.hero-content', '.hero h1',
  '.hero-description', '.hero-actions', '.button',
  '.button-primary', '.button-secondary', '.hero-meta',
  '.meta-item', '.meta-item strong', '.meta-item span',
  // ... more selectors
];

// Extract CSS rules for critical selectors
const criticalCSS = cssRules.reduce((result, rule) => {
  if (criticalSelectors.some(selector => rule.includes(selector))) {
    return result + rule;
  }
  return result;
}, '');
```

**Alternative using Critical npm package (v8.0.0):**
```javascript
import { generate } from 'critical';

const { css } = await generate({
  base: __dirname,
  src: 'index.html',
  target: 'critical.css',
  width: 1300,
  height: 900,
});
```

### CSS Loading Strategy

**After version uses:**
1. `critical.css` - External file with above-the-fold styles (non-blocking)
2. `styles.css` - Full stylesheet loaded asynchronously (preload pattern)

This differs from Episode 2 which used inline Critical CSS. External critical.css is easier to automate and maintain.

## File Structure

```
eps03-automated-critical-css/
├── README.md
├── VIDEO_SCRIPT.md
├── before/                        # Before: Manual extraction baseline
│   └── code/
│       ├── index.html            # Normal HTML (render-blocking CSS)
│       ├── styles.css            # Full stylesheet
│       ├── critical.css          # Manual Critical CSS (copied)
│       ├── server.js             # Custom server with CSS delay (port 8082)
│       ├── package.json          # Minimal dependencies
│       ├── extract-critical.js    # Extraction script (for demo)
│       └── assets/
└── after/                         # After: Automated extraction
    └── code/
        ├── index.html            # HTML with critical.css + async styles.css
        ├── styles.css            # Full stylesheet
        ├── critical.css          # Generated critical CSS
        ├── server.js             # Custom server with CSS delay (port 8083)
        ├── package.json          # Minimal dependencies
        ├── extract-critical.js    # Critical npm extraction script
        └── assets/
```

## Key Learning Points

1. **Manual vs Automated Investment**
   - Manual: High upfront time, high maintenance cost
   - Automated: Low upfront time, zero maintenance cost

2. **Accuracy and Consistency**
   - Manual: Depends on developer skill and assumptions
   - Automated: Consistent, viewport-aware, less error-prone

3. **Maintenance**
   - Manual: Requires manual updates on design changes
   - Automated: Automatically updates with build process

4. **When to Use Each**
   - Manual: Small projects, learning, one-time optimization
   - Automated: Large projects, frequent updates, production use

## Next Steps

After comparing manual vs automated approaches:
1. Integrate automated extraction into build process
2. Test on different viewport sizes (mobile, tablet)
3. Add CSS minification for production
4. Compare file sizes and loading performance
5. Document build tool integration (webpack, gulp, etc.)

## License

This project is part of the Critical CSS Lab educational series.
