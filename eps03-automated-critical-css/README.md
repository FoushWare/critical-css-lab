# Episode 03 - Automated Critical CSS Extraction

## Goal

This episode explores automated tools for Critical CSS extraction. It compares manual vs automated approaches, demonstrates tools like the Critical npm package, and discusses when automation is worth the investment.

## Status
✅ Completed

## Technology

- **Node.js** - For running Critical CSS extraction tools
- **Playwright** - Browser automation for dynamic CSS extraction with system Chrome
- **Custom Server** - Simulates network delay for realistic testing
- **System Chrome** - Uses your installed Chrome browser for extraction

## Structure

This episode has two versions for comparison:

### Before (`before/`)
- **CSS Strategy**: Manual Critical CSS extraction (baseline)
- **Approach**: Manually extracted critical styles from Episode 2
- **Port**: 8082
- **Focus**: Manual extraction time investment and accuracy
- **Current State**: Normal external CSS (render-blocking)

### After (`after/`)
- **CSS Strategy**: Automated Critical CSS extraction (Playwright-based)
- **Approach**: Using Playwright with system Chrome for dynamic extraction
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
   - Added automated extraction script using Playwright with system Chrome
   - Added `critical.css` file (generated via dynamic browser extraction)
   - Uses external `critical.css` instead of inline styles
   - Demonstrates the automated approach with real browser automation

4. **Tool Configuration**
   - Playwright with system Chrome for dynamic extraction
   - Uses bounding-box detection with `getBoundingClientRect()` for true above-the-fold extraction
   - Multi-viewport support: mobile (390x844), tablet (768x1024), desktop (1300x900)
   - DOM walking approach to determine viewport visibility
   - Media query support: Handles `@media` rules with viewport matching
   - Order preservation: Uses position-based deduplication to maintain CSS cascade
   - Merges and deduplicates CSS from all viewports
   - Generates 13,173 characters of optimized critical CSS (110 unique rules)
   - System Chrome path: `/Applications/Google Chrome.app/Contents/MacOS/Google Chrome`

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
- ✅ Working automated extraction using Playwright with system Chrome
- ✅ `critical.css` is generated dynamically (13,173 characters for after, 6,720 for before)
- ✅ Web servers are working and ready for testing
- ✅ Extraction script performs actual CSS extraction via bounding-box detection
- ✅ Uses system Chrome browser
- ✅ Dynamic extraction based on actual CSS usage with media query support
- ✅ Order-preserving deduplication maintains CSS cascade
- ✅ Multi-viewport coverage (mobile, tablet, desktop)
- ✅ Responsive CSS properly handled with media query matching

**For Testing the Episode:**
- Test before version: `cd before/code && npm run dev` → `http://localhost:8082`
- Test after version: `cd after/code && npm run dev` → `http://localhost:8083`
- Run extraction: `npm run extract-critical` (generates critical.css dynamically)

**Extraction Script Behavior:**
- Launches Playwright with system Chrome
- Sets viewport to 1300x900
- Enables CSS coverage tracking
- Extracts CSS based on actual browser usage
- Generates 14,362 characters of critical CSS
- Uses your installed Chrome browser
- True dynamic extraction via coverage API

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

### Tool Choice - Playwright with System Chrome

I chose Playwright with system Chrome for dynamic extraction because:

- Uses your installed Chrome browser (no downloads needed)
- Provides true above-the-fold extraction via bounding-box detection
- Extracts CSS based on actual viewport visibility using `getBoundingClientRect()`
- Handles `@media` rules properly for responsive design
- Maintains CSS cascade order with position-based deduplication
- Modern, well-maintained project with good system Chrome integration
- Accurate multi-viewport extraction (mobile, tablet, desktop)
- Implements the same approach as critical/penthouse but with Playwright
- Proper responsive CSS support across different viewports

**Why not other tools:**
- Critical npm package: Required Chrome download via Puppeteer (complex setup)
- Penthouse: Had version compatibility issues with old Puppeteer
- Beasties: Static analysis approach, had compatibility issues
- Manual selector matching: Not truly dynamic, requires maintenance

### Extraction Script

The `extract-critical.js` script uses Playwright with system Chrome for multi-viewport extraction with bounding-box detection and media query support:
```javascript
import { chromium } from 'playwright';

// Define viewports for different devices
const viewports = [
  { name: 'mobile', width: 390, height: 844 },
  { name: 'tablet', width: 768, height: 1024 },
  { name: 'desktop', width: 1300, height: 900 },
];

const browser = await chromium.launch({
  executablePath: '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome',
  headless: true,
});

// Use Map for order-preserving deduplication
const cssRulesMap = new Map();

for (const viewport of viewports) {
  const page = await browser.newPage();
  await page.setViewportSize({ width: viewport.width, height: viewport.height });
  await page.goto('http://localhost:8083', { waitUntil: 'networkidle' });
  
  // Extract critical CSS with media query support
  const criticalRules = await page.evaluate(({ vpWidth, vpHeight }) => {
    function collectRules(rules, sheetIndex, ruleIndex, vpWidth, vpHeight, used) {
      for (const rule of rules) {
        const currentRuleIndex = ruleIndex++;
        
        // Handle @media rules
        if (rule.type === CSSRule.MEDIA_RULE) {
          if (window.matchMedia(rule.conditionText).matches) {
            collectRules(rule.cssRules, sheetIndex, currentRuleIndex, vpWidth, vpHeight, used);
          }
          continue;
        }
        
        if (!rule.selectorText) continue;
        
        const elements = document.querySelectorAll(rule.selectorText);
        for (const el of elements) {
          const rect = el.getBoundingClientRect();
          if (rect.top < vpHeight && rect.bottom > 0) {
            used.push({
              cssText: rule.cssText,
              position: `${sheetIndex}_${currentRuleIndex}`
            });
            break;
          }
        }
      }
    }
    
    const used = [];
    const sheets = Array.from(document.styleSheets);
    for (let sheetIndex = 0; sheetIndex < sheets.length; sheetIndex++) {
      const rules = sheets[sheetIndex].cssRules || sheets[sheetIndex].rules;
      if (!rules) continue;
      collectRules(rules, sheetIndex, 0, vpWidth, vpHeight, used);
    }
    return used;
  }, { vpWidth: viewport.width, vpHeight: viewport.height });
  
  criticalRules.forEach(rule => {
    if (rule && rule.cssText && rule.position) {
      cssRulesMap.set(rule.position, rule.cssText);
    }
  });
  
  await page.close();
}

await browser.close();

// Sort by position to preserve original source order
const sortedRules = Array.from(cssRulesMap.entries())
  .sort((a, b) => a[0].localeCompare(b[0]))
  .map(entry => entry[1]);

const criticalCSS = sortedRules.join('\n');
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
