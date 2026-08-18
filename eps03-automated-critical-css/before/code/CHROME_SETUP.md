# Critical CSS Extraction Setup

## Current Implementation

The extraction script now uses **Playwright with system Chrome** for dynamic Critical CSS extraction across multiple viewports. This approach:

- ✅ Uses real browser automation (Playwright)
- ✅ Utilizes your system Chrome browser
- ✅ Extracts actual used CSS via coverage API
- ✅ Works dynamically without manual selector definitions
- ✅ Provides accurate viewport-based extraction
- ✅ Covers mobile, tablet, and desktop viewports

## How It Works

The script:
1. Launches Playwright with your system Chrome
2. Iterates through multiple viewports (mobile, tablet, desktop)
3. For each viewport:
   - Sets appropriate dimensions
   - Navigates to the local server
   - Evaluates JavaScript to walk the DOM
   - Uses `getBoundingClientRect()` to determine element visibility
   - Keeps only CSS rules for elements within viewport bounds
   - Extracts actual above-the-fold CSS, not just used CSS
4. Merges and deduplicates CSS from all viewports
5. Writes the comprehensive critical CSS to critical.css

**Key Improvement**: Uses bounding-box detection (`getBoundingClientRect()`) to determine which CSS rules are actually needed for above-the-fold content, not just which rules were used anywhere on the page. Also includes:

- **Media query support**: Properly handles `@media` rules by checking if they apply to the current viewport
- **Order preservation**: Uses Map with position keys to maintain original CSS cascade order
- **Responsive CSS**: Now includes mobile/tablet-specific media queries that match the viewport

## Viewports Covered

- **Mobile**: 390x844 (iPhone 12/13/14)
- **Tablet**: 768x1024 (iPad)
- **Desktop**: 1300x900 (standard desktop)

## Dependencies

```bash
cd /Users/a.fouad/Projects/critical-css-lab/eps03-automated-critical-css/before/code
npm install playwright@^1.62.1
```

## Testing

### Start the server:
```bash
cd /Users/a.fouad/Projects/critical-css-lab/eps03-automated-critical-css/before/code
npm run dev
```

### Run extraction:
```bash
cd /Users/a.fouad/Projects/critical-css-lab/eps03-automated-critical-css/before/code
npm run extract-critical
```

Expected output:
```
🔍 Extracting Critical CSS using Playwright with system Chrome...
📱 Extracting for multiple viewports: mobile, tablet, desktop
  🔄 Processing mobile (390x844)...
  ✅ mobile extraction complete (47 rules)
  🔄 Processing tablet (768x1024)...
  ✅ tablet extraction complete (49 rules)
  🔄 Processing desktop (1300x900)...
  ✅ desktop extraction complete (52 rules)
✅ Critical CSS extracted to critical.css
📊 CSS size: 6720 characters
🎯 Successfully extracted using Playwright with system Chrome
📱 Viewports covered: mobile, tablet, desktop
🔢 Total unique CSS rules: 58
```

## Benefits

- **Multi-viewport coverage**: CSS optimized for mobile, tablet, and desktop
- **True above-the-fold extraction**: Uses bounding-box detection, not just coverage
- **Media query support**: Properly handles `@media` rules for responsive design
- **Order preservation**: Maintains original CSS cascade order using position-based deduplication
- **Accurate**: Uses `getBoundingClientRect()` to determine viewport visibility
- **Viewport-aware**: Respects the configured viewport dimensions for each device
- **System Chrome**: Uses your installed Chrome, no additional downloads
- **Real automation**: True browser-based extraction with DOM walking
- **Deduplication**: Automatically removes duplicate CSS rules across viewports
- **Responsive CSS**: Includes viewport-specific media queries that match each device

## Alternative Approaches

If you prefer different tools:

### Critical npm package (v8.0.0)
```bash
npm install critical@8.0.0 --legacy-peer-deps
```
Note: Requires Chrome browser download via Puppeteer.

### Beasties (Browser-free)
```bash
npm install beasties@^0.4.3 --legacy-peer-deps
```
Note: Static analysis approach, may have compatibility issues.

## Current Implementation Choice

Playwright was chosen because:
- Works with system Chrome (no downloads needed)
- Provides true dynamic extraction via coverage API
- Modern, well-maintained project
- Better system Chrome integration than older tools
- Accurate viewport-based extraction
- Easy multi-viewport support
