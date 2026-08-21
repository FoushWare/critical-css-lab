# Critical CSS Lab

An 8-episode video series investigating Critical CSS optimization across different web technologies and frameworks.

## 🎬 Series Overview

This series explores how Critical CSS works and whether its benefits change when moving from vanilla HTML/CSS to modern frameworks like React, Tailwind, and Next.js.

### Central Question

> **How does Critical CSS work, how do we implement it, and does the approach change when we move from vanilla HTML/CSS to React, Tailwind, and Next.js?**

## 📺 Episodes

| # | Episode | Technology | Status | Description |
|---|---------|------------|--------|-------------|
| 1 | CSS is Rendering Blocker | HTML/CSS | ✅ Completed | Establish baseline with CSS rendering block experiment |
| 2 | Critical CSS Optimization | HTML/CSS | ✅ Completed | Extract and inline critical styles |
| 3 | Automated Critical CSS Extraction | HTML/CSS | ✅ Completed | Tools for automated Critical CSS generation |
| 4 | Critical CSS in React | React | ✅ Completed | Does Critical CSS work with client-side rendering? |
| 5 | Critical CSS with Tailwind | Tailwind | ✅ Completed | Tailwind CSS makes Critical CSS unnecessary |
| 6 | Critical CSS in Next.js | Next.js | 📋 Planned | Does SSR change the Critical CSS equation? |
| 7 | CSS Loading Strategies | HTML/CSS | 📋 Planned | Compare different CSS loading approaches |
| 8 | Final Comparison | All | 📋 Planned | Comprehensive performance comparison |

## 🚀 Quick Start

### Episode 1: CSS Rendering Block Experiment

The first episode is ready to explore with a custom server that demonstrates CSS rendering blocking:

```bash
cd eps01-css-is-rendering-blocker/code
npm install
npm run dev
```

Then open: `http://localhost:8080`

**What you'll see:**
- HTML loads instantly (~7ms)
- CSS is delayed by 3000ms (server-side delay)
- Browser shows blank screen while waiting for CSS
- Content only appears after CSS is received

This authentic experiment demonstrates why Critical CSS matters.

### Episode Documentation

Each episode has its own README with detailed instructions:

- **Episode 1**: [eps01-css-is-rendering-blocker/README.md](eps01-css-is-rendering-blocker/README.md) - CSS rendering block experiment
- **Episode 2**: [eps02-critical-css-optimization/README.md](eps02-critical-css-optimization/README.md) - Critical CSS optimization demonstration
- **Episode 3**: [eps03-automated-critical-css/README.md](eps03-automated-critical-css/README.md) - Automated Critical CSS extraction tools
- **Episode 4**: [eps04-critical-css-react/README.md](eps04-critical-css-react/README.md) - Critical CSS in React with client-side rendering (includes interactive Arabic explainer article)
- **Episode 5**: [eps05-critical-css-tailwind/README.md](eps05-critical-css-tailwind/README.md) - Critical CSS with Tailwind CSS utility-first framework
- **Episode 6-8**: Coming soon

## 📁 Project Structure

```
critical-css-lab/
├── README.md
├── eps01-css-is-rendering-blocker/            # ✅ Completed
│   ├── README.md
│   ├── code/
│   │   ├── index.html
│   │   ├── styles.css
│   │   ├── server.js              # Custom server with CSS delay
│   │   ├── package.json
│   │   └── assets/
│   └── screenshots/
├── eps02-critical-css-optimization/            # ✅ Completed
│   ├── README.md
│   ├── before/                         # Before: Render-blocking CSS
│   │   └── code/
│   │       ├── index.html
│   │       ├── styles.css
│   │       ├── server.js
│   │       ├── package.json
│   │       └── assets/
│   └── after/                          # After: Critical CSS optimized
│       └── code/
│           ├── index.html
│           ├── styles.css
│           ├── server.js
│           ├── package.json
│           └── assets/
├── eps03-automated-critical-css/            # ✅ Completed
│   ├── README.md
│   ├── before/                         # Before: Manual extraction baseline
│   │   └── code/
│   │       ├── index.html
│   │       ├── styles.css
│   │       ├── critical.css
│   │       ├── server.js
│   │       ├── package.json
│   │       └── assets/
│   └── after/                          # After: Automated extraction
│       └── code/
│           ├── index.html
│           ├── styles.css
│           ├── critical.css
│           ├── server.js
│           ├── package.json
│           └── assets/
├── eps04-critical-css-react/            # ✅ Completed
│   ├── README.md
│   ├── article/                        # Interactive Arabic explainer article
│   │   ├── README.md
│   │   └── critical-css-react-explainer-ar.html
│   ├── before/                         # Before: React CSR without Critical CSS
│   │   └── code/
│   │       ├── package.json
│   │       ├── index.html
│   │       ├── App.jsx                # React components
│   │       ├── styles.css
│   │       ├── server.js              # Custom server with CSS delay (port 8084)
│   │       └── assets/
│   └── after/                          # After: React CSR with Critical CSS
│       └── code/
│           ├── package.json
│           ├── index.html
│           ├── App.jsx                # React components
│           ├── styles.css
│           ├── server.js              # Custom server with CSS delay (port 8085)
│           └── assets/
├── eps05-critical-css-tailwind/            # ✅ Completed
│   ├── README.md
│   ├── before/                         # Before: Tailwind without Critical CSS
│   │   └── code/
│   │       ├── package.json
│   │       ├── tailwind.config.js
│   │       ├── index.html            # HTML with Tailwind classes
│   │       ├── input.css             # Tailwind source CSS
│   │       ├── output.css            # Generated Tailwind CSS
│   │       ├── server.js             # Custom server with CSS delay (port 8086)
│   │       └── assets/
│   └── after/                          # After: Tailwind with Critical CSS
│       └── code/
│           ├── package.json
│           ├── tailwind.config.js
│           ├── index.html            # HTML with critical Tailwind + async full CSS
│           ├── input.css             # Tailwind source CSS
│           ├── output.css            # Generated Tailwind CSS
│           ├── critical.css          # Extracted critical Tailwind CSS
│           ├── server.js             # Custom server with CSS delay (port 8087)
│           └── assets/
├── eps06-critical-css-nextjs/            # 📋 Planned
├── eps07-css-loading-strategies/            # 📋 Planned
└── eps08-final-comparison/            # 📋 Planned
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
- **Node.js** - Custom server for CSS delay simulation
- **React** - Client-side rendering framework (future episodes)
- **Tailwind CSS** - Utility-first CSS framework (future episodes)
- **Next.js** - React framework with SSR/SSG (future episodes)

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

### Running Episode 1

```bash
cd episode-01/before
npm install
npm run dev
```

### Measuring Performance

Use Chrome DevTools for accurate measurements:

1. **Network Tab**: Set throttling to observe CSS blocking behavior
2. **Performance Panel**: Record page load to see rendering timeline
3. **Lighthouse**: Run comprehensive performance audits

## 🤝 Contributing

This is an educational project. Feel free to:

- Open issues for questions or suggestions
- Submit pull requests for improvements
- Share your own Critical CSS experiments

## 📄 License

This project is part of an educational video series on Critical CSS optimization.

---

**Start exploring**: See [episode-01/README.md](episode-01/README.md) for the CSS rendering block experiment!
