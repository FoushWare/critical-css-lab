# Critical CSS Extraction Setup

## Installing Critical npm Package with System Chrome

### Option 1: Using Critical npm Package

```bash
cd /Users/a.fouad/Project/critical-css-lab/eps03-automated-critical-css/after/code
npm install critical@5.0.3
```

### Option 2: Using Penthouse npm Package

```bash
cd /Users/a.fouad/Projects/critical-css-lab/eps03-automated-critical-css/after/code
npm install penthouse@2.3.3
```

## Configuration

The extraction script is configured to use your system Chrome at:
```javascript
executablePath: '/Applications/Google Chrome.app/12.0.0.0.0.58/Google Chrome'
```

## Note

These tools use Puppeteer which requires specific Chrome versions. If you encounter "Browser is not downloaded" errors, the tools may need to download their own Chrome version via Puppeteer.

## Alternative: Manual Chrome Download

If you want to use a specific Chrome version:

```bash
# Install Chrome via Puppeteer
npx puppeteer browsers install chrome
```

## Testing

1. Start the server:
```bash
npm run dev
```

2. Run extraction:
```bash
npm run extract-critical
```
