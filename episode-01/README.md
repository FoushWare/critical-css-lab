# Episode 01 - Critical CSS Baseline

## Goal

This project represents the **BEFORE** state of the Critical CSS experiment. It creates a realistic, modern landing page using only vanilla HTML and CSS to establish a reproducible baseline for measuring the impact of Critical CSS optimization.

## Technology

- **HTML5** - Semantic markup
- **CSS3** - Modern CSS with custom properties, flexbox, and grid
- **No frameworks** - Pure HTML/CSS implementation
- **No build tools** - Direct browser rendering

## Current CSS Strategy

The page uses a **normal external stylesheet**:

```html
<link rel="stylesheet" href="styles.css">
```

This is intentionally the baseline approach. The stylesheet contains styles for the entire page, including:

- Critical (above-the-fold): Header, hero section, navigation
- Non-critical (below-the-fold): Article cards, metrics, footer, additional sections

**No Critical CSS optimization has been applied.**

## 🎬 Interactive Demo Controls

The page includes an interactive demo control panel (top-right corner) designed for video demonstrations and educational purposes. These controls help illustrate the impact of Critical CSS without requiring actual network manipulation.

### Demo Features

1. **🐢 Simulate Slow Network** - Demonstrates how render-blocking CSS affects page loading on slow connections
2. **📊 Show Network Waterfall** - Visual comparison of resource loading with and without Critical CSS
3. **⚡ Performance Comparison** - Before/after metrics showing FCP, LCP, and other performance improvements
4. **🎯 What is Critical CSS?** - Educational modal explaining the concept, benefits, and trade-offs

### Using the Demo Controls for Video

#### 1. Show the Problem (Slow Network)
Click "🐢 Simulate Slow Network" to demonstrate:
- How external CSS blocks rendering
- The blank screen users experience while CSS loads
- Sequential loading: HTML → CSS → Render → Images

#### 2. Visual Network Waterfall
Click "📊 Show Network Waterfall" to show:
- Side-by-side comparison of loading patterns
- Red highlighted CSS blocking time
- Green highlighted Critical CSS improvements
- Time savings from Critical CSS

#### 3. Performance Metrics
Click "⚡ Performance Comparison" to display:
- Quantitative before/after measurements
- FCP improvement: 2.8s → 1.2s (57% faster)
- LCP improvement: 3.4s → 1.7s (50% faster)
- TTI improvement: 4.2s → 2.8s (33% faster)

#### 4. Educational Content
Click "🎯 What is Critical CSS?" to explain:
- The problem with render-blocking CSS
- How Critical CSS solves it
- Code examples of before/after implementation
- Benefits and trade-offs
- When to use Critical CSS

## Page Structure

The landing page includes the following sections:

1. **Header** - Logo, navigation, mobile menu button
2. **Hero Section** - Headline, description, CTA button, visual illustration
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
- **FCP (First Contentful Paint)** - Time to first content render
- **LCP (Largest Contentful Paint)** - Time to largest content render

## How to Run

### Using Python

1. Navigate to the before directory:
   ```bash
   cd episode-01/before
   ```

2. Start a local HTTP server:
   ```bash
   python3 -m http.server 8080
   ```

3. Open in browser:
   ```
   http://localhost:8080
   ```

### Using Node.js

If you have Node.js installed:

```bash
cd episode-01/before
npx http-server -p 8080
```

Then open: `http://localhost:8080`

## Measuring Performance

### Network Tab Setup

1. Open Chrome DevTools (F12 or Cmd+Option+I)
2. Go to **Network** tab
3. Enable **☑ Disable cache**
4. Set throttling to **Fast 4G** (or Slow 3G for more dramatic results)
5. Reload the page

### What to Observe

In the Network tab, notice:
- `styles.css` loading as a render-blocking resource
- The waterfall timeline showing CSS blocking paint
- Transfer size and download time of the stylesheet

### Performance Panel Setup

1. Go to **Performance** tab
2. Click **Record** (or press Ctrl+E / Cmd+E)
3. Reload the page
4. Stop recording when page loads

### Key Metrics to Note

- **First Contentful Paint (FCP)** - When content first appears
- **Largest Contentful Paint (LCP)** - When main content is visible
- **CSS Parse Time** - Time spent parsing stylesheet
- **Render Block Time** - How long CSS blocks rendering

## Important Notes

### This is the BEFORE Version

This implementation intentionally represents the starting point:

- ✅ Uses normal external stylesheet for page content
- ✅ Contains styles for entire page (including below-the-fold)
- ✅ No Critical CSS optimization in main implementation
- ✅ No CSS loading tricks (preload, async, defer) for main page
- ✅ No artificial performance delays in page loading
- ✅ Well-structured, maintainable code
- ✅ Demo controls are separate file (demo-controls.css) for educational purposes only

### What NOT to Do Yet

- ❌ Do NOT inline critical CSS in the main implementation
- ❌ Do NOT use `<link rel="preload">` for main page CSS
- ❌ Do NOT use media tricks for CSS loading in main implementation
- ❌ Do NOT split CSS into critical/non-critical files for main page
- ❌ Do NOT use any CSS optimization techniques in the main page

The demo-controls.css file contains styles only for the interactive demonstration panel and educational modals. This is separate from the baseline page implementation and does not affect the performance experiment.

### Realistic Performance

The page is intentionally well-built but has a complete stylesheet. This creates a realistic scenario where:

- The page looks professional and modern
- CSS is substantial but not artificially bloated
- Performance bottleneck is CSS delivery (not bad code)
- Below-the-fold content exists and is styled

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
episode-01/
├── README.md
└── before/
    ├── index.html
    ├── styles.css
    ├── demo-controls.css      # Demo panel and modal styles
    └── assets/
        ├── README.md
        ├── article-1.svg
        ├── article-2.svg
        └── article-3.svg
```

## Demo Control Panel

The floating control panel (top-right) provides interactive demonstrations:

### Network Status Display
Shows current simulation state:
- **Network Speed**: Fast 4G / Slow 3G
- **CSS Loading**: Normal / Simulated Delay
- **Render Blocking**: Yes / Minimal

### Modal Overlays
Three educational modals explain different aspects:
1. **Network Waterfall** - Visual resource loading comparison
2. **Performance Comparison** - Quantitative metrics comparison
3. **Critical CSS Explanation** - Conceptual overview with code examples

## Important Notes for Video Production

### Why Demo Controls?
Real network throttling in DevTools can be inconsistent and hard to capture on video. The demo controls provide:
- **Consistent behavior** - Same timing every time
- **Visual feedback** - Clear loading states and progress
- **Educational value** - Built-in explanations and comparisons
- **Easy to record** - No complex DevTools setup needed

### Demo vs Real Performance
The demo controls simulate network behavior for educational purposes. For actual performance measurement:
- Use Chrome DevTools Network tab with throttling
- Use Chrome DevTools Performance panel for detailed metrics
- Test on real devices and network conditions
- Use Lighthouse for comprehensive audits

### The "Before" State
This implementation intentionally represents the problem:
- ✅ Normal external stylesheet (render-blocking)
- ✅ No inline CSS in main page
- ✅ No preload, async, or defer tricks
- ✅ Styles for entire page (including below-the-fold)
- ✅ ~20KB CSS file
- ✅ Realistic content and layout

The demo controls help visualize the problem without requiring the viewer to understand DevTools or network throttling.

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
- Keep the project self-contained
- Avoid external dependencies
- Ensure reproducible results
- Maintain fast loading (no large image files)

### Color Scheme

The design uses a professional color palette:
- Primary: Dark gray (#111827)
- Secondary: Blue (#2563eb)
- Accent: Green (#10b981)
- Background: White and light gray

### Typography

The font stack prioritizes system fonts for performance:
- Inter (if available)
- System UI fonts
- Apple system fonts
- Segoe UI (Windows)
- Sans-serif fallback

## Performance Characteristics

### Current Baseline

- **CSS Size**: ~20KB
- **CSS Loading**: Render-blocking
- **Critical CSS**: None
- **Below-the-fold CSS**: Included in main stylesheet
- **Additional Network Requests**: 3 SVG images (~2KB total)

### Expected Behavior

With Fast 4G throttling:
- HTML downloads quickly
- CSS download blocks rendering
- First paint occurs after CSS is parsed
- Full page render includes all styled content

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

### Page Not Loading

- Ensure you're running a local server (not just opening the HTML file)
- Check that `styles.css` is in the same directory as `index.html`
- Verify the server is running on the correct port

### Styles Not Applying

- Check browser console for CSS loading errors
- Verify the file path in the `<link>` tag
- Ensure the server is serving CSS with correct MIME type

### Performance Measurements Inconsistent

- Always use "Disable cache" in DevTools
- Use consistent network throttling settings
- Close other tabs that might affect network performance
- Run multiple measurements and take averages

## License

This project is part of the Critical CSS Lab educational series.
