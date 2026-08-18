# Critical CSS Extraction Setup

## Current Implementation

The extraction script now uses **manual selector matching** to extract above-the-fold CSS. This approach:

- ✅ Requires no browser dependencies
- ✅ Works immediately without complex setup
- ✅ Extracts CSS for defined above-the-fold selectors
- ✅ Perfect for educational demonstrations

## Alternative: Browser-Based Extraction

The latest `critical` npm package (v8.0.0) may work better than older versions. If you need true viewport-based extraction with browser rendering:

### Option 1: Using Critical npm Package (Latest)

```bash
cd /Users/a.fouad/Projects/critical-css-lab/eps03-automated-critical-css/after/code
npm install critical@8.0.0 --legacy-peer-deps
```

Update `extract-critical.js` to use:
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

### Option 2: Using Beasties (Browser-Free Alternative)

The Critical documentation mentions Beasties as "a maintained alternative that inlines critical CSS without requiring a headless browser."

```bash
cd /Users/a.fouad/Projects/critical-css-lab/eps03-automated-critical-css/after/code
npm install beasties@^0.4.3 --legacy-peer-deps
```

## Why Manual Extraction?

For this educational series, manual extraction is ideal because:
- No browser installation required
- Works consistently across environments
- Clear demonstration of the concept
- No version compatibility issues
- Fast and reliable

## Critical Package Comparison

| Version | Status | Notes |
|---------|--------|-------|
| 8.0.0 | Latest | Published 3 months ago, may have resolved dependency issues |
| 5.3.0 | Older | Had Puppeteer 2.1.1 dependency issues |
| Beasties | Alternative | Browser-free, but had compatibility issues |

## Testing

### Current Manual Extraction:
```bash
cd /Users/a.fouad/Projects/critical-css-lab/eps03-automated-critical-css/after/code
npm run extract-critical
```

Expected output:
```
🔍 Extracting Critical CSS manually (above-the-fold selectors)...
✅ Critical CSS extracted to critical.css
📊 CSS size: 7683 characters
🎯 Successfully extracted above-the-fold CSS (manual selector matching)
```

### With Critical Package (if installed):
```bash
cd /Users/a.fouad/Projects/critical-css-lab/eps03-automated-critical-css/after/code
npm install critical@8.0.0 --legacy-peer-deps
npm run extract-critical
```
