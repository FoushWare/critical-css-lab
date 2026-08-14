# Episode 1: What Is Critical CSS?

This episode establishes the baseline for understanding Critical CSS by creating a vanilla HTML/CSS page that demonstrates the performance impact of render-blocking stylesheets.

## Overview

In this episode, we build a simple news/technology landing page using only native HTML and CSS. This creates a reproducible baseline to measure the impact of Critical CSS optimization.

## Structure

```
episode-01/
├── README.md
├── before/
│   ├── index.html      # Baseline HTML page
│   ├── styles.css      # Complete stylesheet
│   └── assets/
│       ├── article-1.svg
│       ├── article-2.svg
│       └── article-3.svg
└── after/              # Placeholder for future optimization
    ├── index.html
    ├── styles.css
    ├── critical.css
    └── assets/
```

## Running the Baseline

1. Navigate to the before directory:
   ```bash
   cd episode-01/before
   ```

2. Start a local server:
   ```bash
   python3 -m http.server 8080
   ```

3. Open in browser:
   ```
   http://localhost:8080
   ```

## Measuring Performance

### Network Tab Setup

1. Open Chrome DevTools (F12)
2. Go to **Network** tab
3. Enable **☑ Disable cache**
4. Set throttling to **Fast 4G**
5. Reload the page

### Performance Panel Setup

1. Go to **Performance** tab
2. Click **Record** (or press Ctrl+E)
3. Reload the page
4. Stop recording when page loads

### What to Observe

- **Network tab**: Notice how `styles.css` blocks rendering
- **Performance panel**: Look for the gap between HTML download and first paint
- **Timeline**: Observe CSS parsing and rendering stages

## Key Concepts

This baseline demonstrates:

- **Render-blocking CSS**: External stylesheets prevent the browser from painting content
- **Critical vs Non-critical CSS**: Some styles are needed immediately (header, hero), others can wait (footer, animations)
- **Performance impact**: Large stylesheets delay First Contentful Paint (FCP) and Largest Contentful Paint (LCP)

## Next Steps

After measuring the baseline, we will:

1. Extract critical CSS (styles needed for above-the-fold content)
2. Inline critical CSS in the HTML head
3. Load remaining CSS asynchronously
4. Compare performance measurements

## Page Components

The page includes both critical and non-critical elements:

**Critical (above-the-fold):**
- Site header
- Hero section
- Navigation

**Non-critical (below-the-fold):**
- Article cards
- Experiment section
- Footer
- Responsive styles for mobile

This separation allows us to demonstrate the real performance impact of Critical CSS optimization.
