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
| 2 | Critical CSS Implementation | HTML/CSS | 🚧 In Progress | Extract and inline critical styles |
| 3 | Automated Critical CSS Extraction | HTML/CSS | 🚧 In Progress | Tools for automated Critical CSS generation |
| 4 | Critical CSS in React | React | 🚧 In Progress | Does Critical CSS work with client-side rendering? |
| 5 | Critical CSS with Tailwind | Tailwind | 🚧 In Progress | Does Tailwind make Critical CSS unnecessary? |
| 6 | Critical CSS in Next.js | Next.js | 🚧 In Progress | Does SSR change the Critical CSS equation? |
| 7 | CSS Loading Strategies | HTML/CSS | 🚧 In Progress | Compare different CSS loading approaches |
| 8 | Final Comparison | All | 🚧 In Progress | Comprehensive performance comparison |

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
- **Episode 2**: [eps02-critical-css-optimization/README.md](eps02-critical-css-optimization/README.md) - Critical CSS optimization
- **Episode 3-8**: Coming soon

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
├── eps02-critical-css-optimization/            # 🚧 In Progress
│   ├── README.md
│   ├── code/
│   │   ├── index.html
│   │   ├── styles.css
│   │   ├── server.js
│   │   ├── package.json
│   │   └── assets/
   └── screenshots/
├── eps04-critical-css-react/            # 🚧 In Progress
├── eps05-critical-css-tailwind/            # 🚧 In Progress
├── eps06-critical-css-nextjs/            # 🚧 In Progress
├── eps07-css-loading-strategies/            # 🚧 In Progress
└── eps08-final-comparison/            # 🚧 In Progress
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
