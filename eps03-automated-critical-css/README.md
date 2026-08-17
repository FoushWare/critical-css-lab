# Episode 03 - Automated Critical CSS Extraction

## Goal

This episode explores automated tools for Critical CSS extraction. It compares manual vs automated approaches, demonstrates tools like Penthouse and Critical CSS Extractor, and discusses when automation is worth the investment.

## Status
� In Progress

## Technology

- **Node.js** - For running Critical CSS extraction tools
- **Penthouse** - Popular Critical CSS extraction tool using Headless Chrome
- **Critical CSS Extractor** - Alternative Critical CSS extraction tool
- **Headless Chrome** - Browser automation for CSS extraction
- **Build Tools** - Integration with Gulp, webpack, etc. (optional)

## Structure

This episode has two versions for comparison:

### Before (`before/`)
- **CSS Strategy**: Manual Critical CSS extraction (baseline)
- **Approach**: Manually extracted critical styles from Episode 2
- **Port**: 8082
- **Focus**: Manual extraction time investment and accuracy

### After (`after/`)
- **CSS Strategy**: Automated Critical CSS extraction
- **Approach**: Using Penthouse tool for automated extraction
- **Port**: 8083
- **Focus**: Automation time investment and accuracy

## How to Run

### Before Version (Manual Extraction)

1. Navigate to the before directory:
   ```bash
   cd eps03-automated-critical-css/before/code
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the custom server:
   ```bash
   npm run dev
   ```

4. Open in browser:
   ```
   http://localhost:8082
   ```

This version has manually extracted Critical CSS from Episode 2, demonstrating the manual approach time investment.

### After Version (Automated Extraction)

1. Navigate to the after directory:
   ```bash
   cd eps03-automated-critical-css/after/code
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the custom server:
   ```bash
   npm run dev
   ```

4. Extract Critical CSS using Penthouse:
   ```bash
   npm run extract-critical
   ```

5. Open in browser:
   ```
   http://localhost:8083
   ```

This version uses Penthouse to automatically extract Critical CSS, demonstrating the automated approach.

## Automated Tools

### Penthouse

Penthouse is a Node.js tool that uses Headless Chrome to extract Critical CSS:

```javascript
import penthouse from 'penthouse';

const criticalCSS = await penthouse({
  url: 'http://localhost:8083',
  css: './styles.css',
  width: 1300,
  height: 900,
  timeout: 30000,
});
```

**Features:**
- Uses real browser rendering
- Accurate viewport simulation
- Configurable viewport dimensions
- Multiple viewport support

### Critical CSS Extractor

Alternative tool with similar functionality:

```javascript
import critical from 'critical';

critical.generate({
  src: 'index.html',
  target: 'index-critical.html',
  width: 1300,
  height: 900,
});
```

**Features:**
- Multiple viewport support
- CSS minification options
- Inline mode support
- Build tool integration

## Comparison

### Manual Extraction
- **Time Investment**: High (initial setup + maintenance)
- **Accuracy**: Depends on developer skill
- **Maintenance**: Manual updates needed on design changes
- **Control**: Full control over what's included
- **Best For**: Small projects, one-time optimization, learning

### Automated Extraction
- **Time Investment**: Low (initial setup + automated)
- **Accuracy**: Tool-based, consistent results
- **Maintenance**: Automated updates in build process
- **Control**: Tool decides what's critical
- **Best For**: Large projects, frequent updates, production environments

## Expected Results

Both versions should achieve:
- **Instant FCP** (~7ms) with Critical CSS
- **No blank screen** during 10-second CSS delay
- **Similar performance metrics** if Critical CSS is accurate

The difference is in the workflow and maintenance, not the final performance result.

## File Structure

```
eps03-automated-critical-css/
├── README.md
├── VIDEO_SCRIPT.md
├── before/                        # Before: Manual extraction
│   └── code/
│       ├── index.html            # Normal HTML (no Critical CSS)
│       ├── styles.css            # Full stylesheet
│       ├── server.js             # Custom server with CSS delay
│       ├── package.json          # Node.js dependencies + tools
│       ├── extract-critical.js    # Penthouse extraction script
│       └── assets/
└── after/                         # After: Automated extraction
    └── code/
        ├── index.html            # HTML with critical.css
        ├── styles.css            # Full stylesheet
        ├── server.js             # Custom server with CSS delay
        ├── package.json          # Node.js dependencies + tools
        ├── extract-critical.js    # Penthouse extraction script
        ├── critical.css          # Generated critical CSS
        └── assets/
```

## Next Steps

After comparing manual vs automated approaches:
1. Integrate automated extraction into build process
2. Test on different viewport sizes
3. Measure if automation overhead is worth it
4. Document best practices for automated Critical CSS

## License

This project is part of the Critical CSS Lab educational series.
