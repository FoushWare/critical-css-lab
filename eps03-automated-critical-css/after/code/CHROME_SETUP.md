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
   - Enables CSS coverage tracking
   - Reloads the page to capture used CSS
   - Extracts CSS that was actually used during rendering
4. Merges and deduplicates CSS from all viewports
5. Writes the comprehensive critical CSS to critical.css

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
  🔄 Processing mobile (390x844)...
  ✅ mobile extraction complete
  🔄 Processing tablet (768x1024)...
  ✅ tablet extraction complete
  🔄 Processing desktop (1300x900)...
  ✅ desktop extraction complete
✅ Critical CSS extracted to critical.css
📊 CSS size: 13977 characters
🎯 Successfully extracted using Playwright with system Chrome
📱 Viewports covered: mobile, tablet, desktop
```

## Benefits

- **Multi-viewport coverage**: CSS optimized for mobile, tablet, and desktop
- **Dynamic extraction**: CSS is extracted based on actual usage across devices
- **Accurate**: Uses browser coverage API to determine what CSS is actually used
- **Viewport-aware**: Respects the configured viewport dimensions for each device
- **System Chrome**: Uses your installed Chrome, no additional downloads
- **Real automation**: True browser-based extraction, not static analysis
- **Deduplication**: Automatically removes duplicate CSS rules across viewports

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
