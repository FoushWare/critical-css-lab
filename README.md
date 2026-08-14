# Critical CSS Lab

An 8-episode video series investigating Critical CSS optimization across different web technologies and frameworks.

## 🎬 Series Overview

This series explores how Critical CSS works and whether its benefits change when moving from vanilla HTML/CSS to modern frameworks like React, Tailwind, and Next.js.

### Central Question

> **How does Critical CSS work, how do we implement it, and does the approach change when we move from vanilla HTML/CSS to React, Tailwind, and Next.js?**

## 📺 Episodes

| # | Episode | Technology | Status | Description |
|---|---------|------------|--------|-------------|
| 1 | What Is Critical CSS? | HTML/CSS | ✅ Completed | Establish baseline with normal CSS loading |
| 2 | Implementing Critical CSS | HTML/CSS | 📋 Planned | Extract and inline critical styles |
| 3 | Automated Extraction | HTML/CSS | 📋 Planned | Tools for automated Critical CSS generation |
| 4 | Critical CSS in React | React | 📋 Planned | Does Critical CSS work with client-side rendering? |
| 5 | Critical CSS with Tailwind | Tailwind | 📋 Planned | Does Tailwind make Critical CSS unnecessary? |
| 6 | Critical CSS in Next.js | Next.js | 📋 Planned | Does SSR change the Critical CSS equation? |
| 7 | CSS Loading Strategies | HTML/CSS | 📋 Planned | Compare different CSS loading approaches |
| 8 | Final Comparison | All | 📋 Planned | Comprehensive performance comparison |

## 🚀 Quick Start

### View the Series Hub

Open the main landing page to see all episodes:

```bash
# Start a local server in the root directory
python3 -m http.server 8080

# Open http://localhost:8080
```

### Episode 1: Baseline

The first episode is ready to explore:

```bash
cd episode-01/before
python3 -m http.server 8080

# Open http://localhost:8080
```

Episode 1 includes interactive demo controls to help understand the impact of Critical CSS without requiring DevTools expertise.

## 📁 Project Structure

```
critical-css-lab/
├── README.md              # This file
├── index.html             # Main series hub page
├── main.css               # Styling for hub page
├── episode-01/            # ✅ Completed
│   ├── README.md
│   └── before/
│       ├── index.html
│       ├── styles.css
│       ├── demo-controls.css
│       └── assets/
├── episode-02/            # 📋 Planned
├── episode-03/            # 📋 Planned
├── episode-04/            # 📋 Planned
├── episode-05/            # 📋 Planned
├── episode-06/            # 📋 Planned
├── episode-07/            # 📋 Planned
└── episode-08/            # 📋 Planned
```

## 🎯 Series Approach

### Same Design, Different Implementations

Every episode uses the **same page design** with identical content, hero, images, and viewport. Only the implementation approach changes:

- **Episode 1-3**: Vanilla HTML/CSS
- **Episode 4**: React implementation
- **Episode 5**: Tailwind CSS implementation  
- **Episode 6**: Next.js implementation
- **Episode 7**: CSS loading strategies comparison
- **Episode 8**: Final comprehensive comparison

This ensures meaningful performance comparisons across different technologies.

### Real Experiments, Not Toy Demos

- **Realistic pages** with substantial CSS (not toy examples)
- **Meaningful content** below the fold for genuine Critical CSS scenarios
- **Data-driven insights** using actual performance measurements
- **Production-like scenarios** with modern web technologies

## 🛠️ Technologies Used

- **HTML5** - Semantic markup
- **CSS3** - Modern CSS with custom properties, flexbox, grid
- **React** - Client-side rendering framework
- **Tailwind CSS** - Utility-first CSS framework
- **Next.js** - React framework with SSR/SSG
- **Node.js** - Build tools and development servers

## 📊 Performance Metrics

Each episode measures:

- **FCP** (First Contentful Paint) - When content first appears
- **LCP** (Largest Contentful Paint) - When main content is visible
- **CSS Transfer Size** - Amount of CSS data transferred
- **Render Blocking** - Whether CSS blocks initial rendering
- **TTI** (Time to Interactive) - When page becomes interactive

## 🎓 Learning Goals

By the end of this series, you'll understand:

1. **Why Critical CSS exists** - The render-blocking CSS problem
2. **How to implement it** - Manual and automated approaches
3. **When it's worth it** - Benefits vs costs and complexity
4. **How it changes with frameworks** - React, Tailwind, Next.js considerations
5. **Whether it's still relevant** - With modern frameworks and optimizations

## 🔧 Development

### Running Episodes

Each episode can be run independently:

```bash
# Navigate to specific episode
cd episode-XX/before  # or /after for optimized versions

# Start local server
python3 -m http.server 8080

# Open http://localhost:8080
```

### Measuring Performance

Use Chrome DevTools for accurate measurements:

1. **Network Tab**: Set throttling to "Fast 4G" or "Slow 3G"
2. **Performance Tab**: Record page load to see rendering timeline
3. **Lighthouse**: Run comprehensive performance audits

## 📖 Episode Details

### Episode 1: What Is Critical CSS? ✅

**Goal**: Establish the baseline problem

**Technology**: HTML/CSS

**What you'll learn**:
- Why CSS is render-blocking
- How external stylesheets delay initial rendering
- The impact on First Contentful Paint
- Interactive demo controls for education

**Status**: ✅ Completed - Ready to explore

### Episode 2: Implementing Critical CSS 📋

**Goal**: Actually implement Critical CSS optimization

**Technology**: HTML/CSS

**What you'll learn**:
- Manual Critical CSS extraction
- Inlining critical styles
- Async loading of remaining CSS
- Real performance impact measurement

### Episode 3: Automated Critical CSS Extraction 📋

**Goal**: Automate the Critical CSS process

**Technology**: HTML/CSS + Tools

**What you'll learn**:
- Tools for automated extraction
- Coverage analysis techniques
- Build-time vs runtime extraction
- Viewport-specific Critical CSS

### Episode 4: Critical CSS in React 📋

**Goal**: Test Critical CSS with client-side rendering

**Technology**: React

**What you'll learn**:
- Does Critical CSS work with React?
- JavaScript vs CSS performance bottlenecks
- Critical CSS in SPA architecture
- Framework-specific considerations

### Episode 5: Critical CSS with Tailwind CSS 📋

**Goal**: Investigate Critical CSS with utility-first CSS

**Technology**: Tailwind CSS

**What you'll learn**:
- Tailwind's built-in unused CSS elimination
- Does Tailwind make Critical CSS unnecessary?
- Critical utilities vs full framework
- Build-time optimizations

### Episode 6: Critical CSS in Next.js 📋

**Goal**: Test Critical CSS with server-side rendering

**Technology**: Next.js

**What you'll learn**:
- SSR vs CSR rendering implications
- Does SSR eliminate the need for Critical CSS?
- Framework-managed CSS
- Streaming and hydration considerations

### Episode 7: CSS Loading Strategies 📋

**Goal**: Compare different CSS loading approaches

**Technology**: HTML/CSS

**What you'll learn**:
- Normal stylesheet loading
- Preload strategies
- Inline critical CSS
- Async CSS loading
- Optimal approach selection

### Episode 8: Final Performance Comparison 📋

**Goal**: Comprehensive comparison across all approaches

**Technology**: All frameworks

**What you'll learn**:
- Side-by-side performance comparison
- Which approach performs best
- Trade-offs and considerations
- When to use each approach

## 🤝 Contributing

This is an educational project. Feel free to:

- Open issues for questions or suggestions
- Submit pull requests for improvements
- Share your own Critical CSS experiments

## 📄 License

This project is part of an educational video series on Critical CSS optimization.

## 🙏 Acknowledgments

- Inspired by real-world performance challenges
- Built to help developers make informed decisions about CSS optimization
- Dedicated to understanding web performance fundamentals

---

**Start exploring**: Open [index.html](index.html) to begin the series journey!
