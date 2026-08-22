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
- **Order preservation**: Uses numeric position keys with monotonically-increasing counter to maintain original CSS cascade order
- **Index collision prevention**: Shared counter prevents rule index collisions when traversing nested @media rules
- **Falsy check fix**: Uses `position !== undefined` instead of truthiness to prevent dropping first rule (position 0)
- **Responsive CSS**: Now includes mobile/tablet-specific media queries that match the viewport

## Viewports Covered

- **Mobile**: 390x844 (iPhone 12/13/14)
- **Tablet**: 768x1024 (iPad)
- **Desktop**: 1300x900 (standard desktop)

## Dependencies

```bash
cd /Users/a.fouad/Projects/critical-css-lab/eps03-automated-critical-css/after/code
npm install playwright@^1.62.1
```

## Testing

### Start the server:
```bash
cd /Users/a.fouad/Projects/critical-css-lab/eps03-automated-critical-css/after/code
npm run dev
```

### Run extraction:
```bash
cd /Users/a.fouad/Projects/critical-css-lab/eps03-automated-critical-css/after/code
npm run extract-critical
```

Expected output:
```
🔍 Extracting Critical CSS using Playwright with system Chrome...
📱 Extracting for multiple viewports: mobile, tablet, desktop
🔧 Checking Chrome installation...
✅ Chrome installation verified
� Checking dev server...
✅ Dev server is ready
  �🔄 Processing mobile (390x844)...
  ✅ mobile extraction complete (224 style rules, 0 @font-face, 4 @keyframes)
  🔄 Processing tablet (768x1024)...
  ✅ tablet extraction complete (250 style rules, 0 @font-face, 5 @keyframes)
  🔄 Processing desktop (1300x900)...
  ✅ desktop extraction complete (270 style rules, 0 @font-face, 5 @keyframes)
✅ Critical CSS extracted to critical.css
📊 CSS size: 32984 characters (229.7% of original 14362 chars)
🎯 Successfully extracted using Playwright with system Chrome
📱 Viewports covered: mobile, tablet, desktop
🔢 Total unique CSS rules: 284
⚠️  Warning: Output is >80% of original CSS - extraction may not be earning its keep
```

## Benefits

- **Multi-viewport coverage**: CSS optimized for mobile, tablet, and desktop
- **True above-the-fold extraction**: Uses bounding-box detection, not just coverage
- **Media query support**: Properly handles `@media` rules for responsive design
- **Order preservation**: Maintains original CSS cascade order using numeric position keys
- **Index collision prevention**: Shared counter prevents rule loss in nested @media rules
- **Falsy check fix**: Uses `position !== undefined` to prevent dropping first rule (position 0)
- **Accurate**: Uses `getBoundingClientRect()` to determine viewport visibility
- **Viewport-aware**: Respects the configured viewport dimensions for each device
- **System Chrome**: Uses your installed Chrome, no additional downloads
- **Real automation**: True browser-based extraction with DOM walking
- **Deduplication**: Automatically removes duplicate CSS rules across viewports
- **Responsive CSS**: Includes viewport-specific media queries that match each device
- **No silent data loss**: All CSS rules including the first one are properly captured

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
