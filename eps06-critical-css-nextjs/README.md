# Episode 06: Critical CSS in Next.js

## Status
✅ Complete

## Technology
- **Next.js 16** - React framework with SSR/SSG
- **Tailwind CSS 4** - Utility-first CSS framework
- **TypeScript** - Type safety

## Goal
Investigate how Next.js Server-Side Rendering (SSR) and Static Site Generation (SSG) change the Critical CSS equation compared to client-side React (Episode 4).

## Key Questions

1. **Does SSR eliminate the need for Critical CSS?**
   - How does Next.js SSR affect CSS loading compared to React CSR?
   - Does HTML arrive with styles already applied?
   - What's the difference between SSR and CSR CSS blocking behavior?

2. **How does Next.js handle CSS optimization?**
   - What built-in CSS optimization features does Next.js provide?
   - How does Tailwind CSS work with Next.js SSR?
   - What about automatic CSS extraction in newer Next.js versions?

3. **Next.js vs Traditional Critical CSS**
   - Are Next.js built-in optimizations sufficient?
   - When would manual Critical CSS still be beneficial in Next.js?
   - How does the 14 KB rule apply to Next.js?

## Implementation Plan

### Before Version (Port 8088)
- **Next.js Setup**: Basic Next.js 16 with App Router and SSR
- **CSS Strategy**: Tailwind CSS with standard external CSS loading
- **Focus**: Demonstrate baseline Next.js CSS loading behavior with SSR
- **Key Feature**: Show how SSR changes CSS blocking compared to Episode 4 (React CSR)
- **Expected Behavior**: HTML arrives with content, but CSS may still cause render-blocking

### After Version (Port 8089)
- **Next.js Setup**: Same Next.js 16 configuration
- **CSS Strategy**: Next.js built-in CSS optimization with `optimizeCss: true`
- **Focus**: Demonstrate Next.js native CSS optimization capabilities
- **Key Feature**: Next.js automatically inlines critical CSS and optimizes CSS loading during SSR
- **Expected Behavior**: Show improvement with Next.js built-in critical CSS extraction

### Key Comparisons

- **SSR (Episode 6) vs CSR (Episode 4)**: How server-side rendering changes CSS blocking
- **Next.js optimization vs manual Critical CSS**: Are framework optimizations sufficient?
- **Tailwind in Next.js**: How utility-first CSS works with SSR

## Expected Findings

Next.js SSR fundamentally changes the CSS equation because:
- Real HTML arrives before JavaScript execution (unlike React CSR)
- CSS can be inlined or extracted during build process
- Built-in optimizations may make manual Critical CSS unnecessary
- Different from Episode 4 (React CSR) where JavaScript was the bottleneck

## Current Progress

- ✅ Before version initialized with Next.js 16 + Tailwind CSS 4
- ✅ Test page content created with hero, metrics, and pipeline sections
- ✅ Custom server with 10-second CSS delay for before version
- ✅ After version created with Next.js built-in CSS optimization
- ✅ Both versions running on ports 8088 (before) and 8089 (after)

## Critical CSS Approach

**Important Note**: This episode uses Next.js's built-in CSS optimization rather than manual Critical CSS extraction tools like Penthouse or Critical. 

Next.js with `optimizeCss: true` automatically:
- Inlines critical CSS during SSR
- Optimizes CSS loading for production builds
- Minifies and compresses CSS
- Handles CSS extraction natively without external tools

This demonstrates that modern frameworks like Next.js have evolved to handle Critical CSS optimization internally, making manual extraction tools less necessary for SSR applications.

