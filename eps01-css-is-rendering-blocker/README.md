# EPS01 - CSS is Rendering Blocker

## Goal

This project represents the **BEFORE** state of the Critical CSS experiment. It creates a realistic, modern landing page using only vanilla HTML and CSS to establish a reproducible baseline for measuring the impact of Critical CSS optimization.

## Screenshots

**To add screenshots:** Place your performance and network screenshots in the `screenshots/` directory with the following filenames:
- `performance-metrics.png` - Chrome DevTools Performance panel showing LCP and other metrics
- `network-waterfall.png` - Chrome DevTools Network tab showing CSS blocking behavior

Once added, they will automatically appear here.

## Technology

- **HTML5** - Semantic markup
- **CSS3** - Modern CSS with custom properties, flexbox, and grid
- **Node.js** - Custom server for CSS delay simulation
- **No frameworks** - Pure HTML/CSS implementation
- **No build tools** - Direct browser rendering

## Current CSS Strategy

The page uses a **normal external stylesheet**:

```html
<link rel="stylesheet" href="./styles.css">
```

This is intentionally the baseline approach. The stylesheet contains styles for the entire page, including:

- Critical (above-the-fold): Header, hero section, navigation
- Non-critical (below-the-fold): Article cards, metrics, footer, additional sections

**No Critical CSS optimization has been applied.**

## 🧪 CSS Rendering Block Experiment

This episode uses a **custom Node.js server** to simulate realistic CSS rendering blocking:

- **HTML loads instantly** (~7ms response time)
- **CSS is deliberately delayed by 3000ms** on the server
- **Browser waits for CSS** before painting any content (render-blocking behavior)
- **Users experience blank screen** while waiting for CSS

This authentic approach demonstrates the real impact of render-blocking CSS:
- The browser genuinely blocks rendering while waiting for CSS
- No JavaScript tricks or artificial delays
- Reproducible 3-second CSS delay for consistent measurements
- Educational value: shows actual browser behavior

## How to Run

### Using the Custom Node.js Server (Recommended)

1. Navigate to the episode directory:
   ```bash
   cd eps01-css-is-rendering-blocker/code
   ```

2. Install dependencies (if needed):
   ```bash
   npm install
   ```

3. Start the custom server:
   ```bash
   npm run dev
   ```

4. Open in browser:
   ```
   http://localhost:8080
   ```

**What you'll see:**
- The page will load with HTML first
- Then there will be a **3-second delay** while CSS loads
- Content will only appear after CSS is received
- The browser will show a blank screen during this delay

This demonstrates the render-blocking CSS problem in a realistic, observable way.

### Server Configuration

The custom server (`server.js`) includes:

- **CSS Delay**: 3000ms delay for `styles.css` requests
- **Cache Control**: `no-store` to prevent caching during experiments
- **Security**: Directory traversal protection
- **Logging**: Detailed request/response timing information
- **Port**: 8080 (configurable)

You can modify the CSS delay by changing the `CSS_DELAY` constant in `server.js`.

## Measuring Performance

### Network Tab Setup

1. Open Chrome DevTools (F12 or Cmd+Option+I)
2. Go to **Network** tab
3. Enable **☑ Disable cache**
4. Reload the page

### What to Observe

In the Network tab, notice:
- **HTML loads quickly** (~7ms)
- **styles.css shows ~3000ms** (intentional server delay)
- **Waterfall timeline** shows CSS blocking other resources
- **Content only appears** after CSS is loaded

### Expected Timeline

```
HTML Request    → 7ms   → HTML received
CSS Request     → 3000ms → CSS received (delayed by server)
First Paint      → ~3007ms → Content appears
Images/Assets   → After CSS → Load normally
```

This clearly demonstrates why external CSS blocks rendering and how it affects user experience.

## Page Structure

The landing page includes the following sections:

1. **Header** - Logo, navigation, mobile menu button
2. **Hero Section** - Headline, description, CTA buttons, browser visualization
3. **Performance Metrics** - Cards showing FCP, LCP, CSS Size, and Render Blocking status
4. **How It Works** - Visual explanation of the browser rendering pipeline
5. **Experiments** - Grid of research areas (Browser Rendering, CSS, Critical CSS, etc.)
6. **Articles** - 6 article cards with categories, titles, descriptions, and metadata
7. **Newsletter** - Email subscription form
8. **About** - Project description and statistics
9. **Footer** - Logo, navigation, resources, social links, copyright

## CSS Architecture

The stylesheet uses modern CSS practices:

- **CSS Custom Properties** - Consistent design tokens for colors, spacing, typography
- **Semantic Class Names** - Clear, descriptive class names
- **Responsive Design** - Mobile-first approach with breakpoints at 1024px, 768px, and 480px
- **Flexbox & Grid** - Modern layout techniques
- **Component-Based** - Organized by section/component

### CSS Size

The stylesheet is approximately **20KB** of actual CSS, which provides a meaningful baseline for the Critical CSS experiment without being artificially large.

## Experiment

In the next stage we will investigate:

- **Render-blocking CSS** - How external stylesheets delay initial rendering
- **CSS Loading** - Different strategies for loading CSS
- **Above-the-fold CSS** - Identifying styles needed for initial viewport
- **Critical CSS** - Extracting and inlining critical styles
- **FCP** (First Contentful Paint) - Time to first content render
- **LCP** (Largest Contentful Paint) - Time to largest content render

## Key Concepts

This baseline demonstrates:

- **Render-blocking CSS**: External stylesheets prevent the browser from painting content
- **Critical vs Non-critical CSS**: Some styles are needed immediately (header, hero), others can wait (footer, animations)
- **Performance impact**: Large stylesheets delay First Contentful Paint (FCP) and Largest Contentful Paint (LCP)
- **Real network behavior**: The server-side delay simulates slow network conditions authentically

## Important Notes

### This is the BEFORE Version

This implementation intentionally represents the starting point:

- ✅ Uses normal external stylesheet
- ✅ Contains styles for entire page (including below-the-fold)
- ✅ No Critical CSS optimization
- ✅ No CSS loading tricks (preload, async, defer)
- ✅ Server-side CSS delay for demonstration (not artificial JavaScript delays)
- ✅ Well-structured, maintainable code

### Server-Side CSS Delay

The 3000ms CSS delay is implemented at the server level:
- **Authentic network behavior** - Browser genuinely waits for CSS
- **Not JavaScript simulation** - Real HTTP response delay
- **Reproducible experiments** - Consistent timing for measurements
- **Educational value** - Shows actual render-blocking behavior

### What NOT to Do Yet

- ❌ Do NOT inline critical CSS
- ❌ Do NOT use `<link rel="preload">`
- ❌ Do NOT use media tricks for CSS loading
- ❌ Do NOT split CSS into critical/non-critical files
- ❌ Do NOT use any CSS optimization techniques

## Accessibility

The page includes:

- Semantic HTML5 elements (`<header>`, `<main>`, `<section>`, `<article>`, `<footer>`)
- Proper heading hierarchy (h1 → h2 → h3)
- Accessible buttons with `aria-label` attributes
- Meaningful link text
- Alt attributes for images
- Keyboard-friendly interactive elements
- Appropriate ARIA landmarks
- Sufficient color contrast

## Browser Compatibility

The page uses modern CSS features supported in all major browsers:

- CSS Custom Properties (Chrome 49+, Firefox 31+, Safari 9.1+)
- CSS Grid (Chrome 57+, Firefox 52+, Safari 10.1+)
- Flexbox (Chrome 29+, Firefox 28+, Safari 9+)
- CSS `min()`, `max()`, `clamp()` functions (Chrome 79+, Firefox 75+, Safari 11.1+)

## File Structure

```
eps01-css-is-rendering-blocker/
├── README.md
├── code/
│   ├── index.html
│   ├── styles.css
│   ├── server.js              # Custom Node.js server with CSS delay
│   ├── package.json           # Node.js dependencies
│   └── assets/
│       ├── README.md
│       ├── article-1.svg
│       ├── article-2.svg
│       └── article-3.svg
└── screenshots/
    ├── README.md
    ├── performance-metrics.png
    └── network-waterfall.png
```

## Next Steps

After measuring the baseline performance, the next episode will:

1. Extract critical CSS (styles needed for above-the-fold content)
2. Inline critical CSS in the HTML `<head>`
3. Load remaining CSS asynchronously
4. Measure the performance impact
5. Compare before/after metrics

## Design Decisions

### Visual Placeholders

The page uses SVG placeholders for article images to:
- Keep the project self-contained without external dependencies
- Ensure reproducible performance measurements
- Maintain fast loading (no large image files)
- Maintain visual consistency

### Color Scheme

The design uses a professional color palette:
- Primary: Blue (#2563eb)
- Background: Light gray (#f8fafc) and white (#ffffff)
- Text: Dark (#0f172a) and muted (#64748b)
- Accents: Subtle variations for visual hierarchy

### Typography

The font stack prioritizes modern system fonts:
- Inter (if available)
- UI system fonts
- Apple system fonts
- Segoe UI (Windows)
- Sans-serif fallback

## Performance Characteristics

### Current Baseline

- **HTML Response Time**: ~7ms
- **CSS Response Time**: ~3000ms (intentional server delay)
- **CSS Size**: ~20KB
- **CSS Loading**: Render-blocking (normal behavior)
- **Critical CSS**: None (baseline state)
- **Below-the-fold CSS**: Included in main stylesheet
- **Additional Network Requests**: 3 SVG images (~2KB total)

### Expected Behavior

When using the custom server:
- **HTML loads instantly** - Users see quick initial response
- **3-second blank screen** - While CSS is being delayed by server
- **Content appears after CSS** - Browser finally paints styled content
- **Full page render** - All styled content displays correctly

This clearly demonstrates the render-blocking problem: users wait 3 seconds for CSS that includes styles for content they can't even see yet (footer, below-fold articles, etc.).

## Project Context

This is Episode 1 of the "Critical CSS Lab" video series. The series investigates:

1. **Episode 1**: Critical CSS Baseline (this episode)
2. **Episode 2**: Implementing Critical CSS in vanilla HTML/CSS
3. **Episode 3**: Automated Critical CSS extraction
4. **Episode 4**: Critical CSS in React
5. **Episode 5**: Critical CSS with Tailwind CSS
6. **Episode 6**: Critical CSS in Next.js
7. **Episode 7**: CSS Loading Strategies comparison
8. **Episode 8**: Final performance comparison across all approaches

Each episode builds on the same page design to ensure meaningful comparisons.

## Troubleshooting

### Server Not Starting

- Ensure Node.js is installed: `node --version`
- Check you're in the `episode-01/before` directory
- Verify `package.json` exists
- Try `npm install` if dependencies are missing

### Page Not Loading

- Ensure the server is running: `npm run dev`
- Check that server shows "Server running at http://localhost:8080"
- Verify the port 8080 is not already in use
- Check browser console for errors

### CSS Not Delaying

- Verify you're using the custom server (`npm run dev`), not Python's http.server
- Check server logs for "[CSS] Request received. Delaying response by 3000ms..."
- Ensure `styles.css` is being requested (check Network tab in DevTools)
- Verify the CSS_DELAY constant in `server.js` is set to 3000

### Performance Measurements Inconsistent

- The server deliberately adds 3000ms delay to CSS
- This is intentional to demonstrate render-blocking behavior
- measurements should consistently show ~3000ms CSS load time
- HTML should always load quickly (~7ms)

## License

This project is part of the Critical CSS Lab educational series.
