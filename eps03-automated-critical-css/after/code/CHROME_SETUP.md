# Critical CSS Extraction Setup

## Current Implementation

The extraction script now uses **Playwright with system Chrome** for dynamic Critical CSS extraction. This approach:

- ✅ Uses real browser automation (Playwright)
- ✅ Utilizes your system Chrome browser
- ✅ Extracts actual used CSS via coverage API
- ✅ Works dynamically without manual selector definitions
- ✅ Provides accurate viewport-based extraction

## How It Works

The script:
1. Launches Playwright with your system Chrome
2. Sets viewport to 1300x900 (desktop)
3. Navigates to the local server
4. Enables CSS coverage tracking
5. Reloads the page to capture used CSS
6. Extracts CSS that was actually used during rendering
7. Writes the extracted CSS to critical.css

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
✅ Critical CSS extracted to critical.css
📊 CSS size: 14362 characters
🎯 Successfully extracted using Playwright with system Chrome
```

## Benefits

- **Dynamic extraction**: CSS is extracted based on actual usage, not predefined selectors
- **Accurate**: Uses browser coverage API to determine what CSS is actually used
- **Viewport-aware**: Respects the configured viewport dimensions
- **System Chrome**: Uses your installed Chrome, no additional downloads
- **Real automation**: True browser-based extraction, not static analysis

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
