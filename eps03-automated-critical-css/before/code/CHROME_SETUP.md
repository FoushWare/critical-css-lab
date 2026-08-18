# Critical CSS Extraction Setup

## Current Implementation

The extraction script now uses **manual selector matching** to extract above-the-fold CSS. This approach:

- ✅ Requires no browser dependencies
- ✅ Works immediately without complex setup
- ✅ Extracts CSS for defined above-the-fold selectors
- ✅ Perfect for educational demonstrations

## How It Works

The script:
1. Reads the full `styles.css` file
2. Matches CSS rules for defined above-the-fold selectors
3. Writes the matching CSS to `critical.css`

## Alternative: Browser-Based Extraction

If you need true viewport-based extraction with browser rendering, you can install:

### Option 1: Using Critical npm Package

```bash
cd /Users/a.fouad/Projects/critical-css-lab/eps03-automated-critical-css/before/code
npm install critical@^5.3.0 --legacy-peer-deps
```

### Option 2: Using Beasties (Browser-Free Alternative)

```bash
cd /Users/a.fouad/Projects/critical-css-lab/eps03-automated-critical-css/before/code
npm install beasties@^0.4.3 --legacy-peer-deps
```

Note: Beasties may have compatibility issues with certain Node.js versions.

## Why Manual Extraction?

For this educational series, manual extraction is ideal because:
- No browser installation required
- Works consistently across environments
- Clear demonstration of the concept
- No version compatibility issues
- Fast and reliable

## Testing

```bash
cd /Users/a.fouad/Projects/critical-css-lab/eps03-automated-critical-css/before/code
npm run extract-critical
```

Expected output:
```
🔍 Extracting Critical CSS manually (above-the-fold selectors)...
✅ Critical CSS extracted to critical.css
📊 CSS size: 7683 characters
🎯 Successfully extracted above-the-fold CSS (manual selector matching)
```
