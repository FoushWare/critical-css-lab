# Episode 07: CSS Loading Strategies

## Status
✅ Complete

## Technology
- **HTML/CSS** - Native CSS loading techniques
- **JavaScript** - Dynamic CSS loading
- **Performance APIs** - Resource Timing API

## Goal
Explore different CSS loading strategies and their impact on page performance. Compare blocking vs non-blocking CSS loading, preload/prefetch techniques, and async CSS loading methods.

## Key Questions

1. **What are the different CSS loading strategies?**
   - Blocking vs non-blocking CSS loading
   - How does the `media` attribute affect CSS loading?
   - What's the difference between `preload` and `prefetch` for CSS?

2. **How do different loading strategies affect performance?**
   - Which strategy provides the fastest First Paint?
   - When should you use async CSS loading?
   - What are the trade-offs of each approach?

3. **Modern CSS loading best practices**
   - How to use `rel="preload"` effectively
   - When to use `rel="prefetch"` for CSS
   - Critical CSS + async loading combination

## Implementation Plan

### Strategy 1: Blocking CSS (Baseline)
- Standard `<link rel="stylesheet">` in head
- Demonstrates render-blocking behavior
- Port: 8090

### Strategy 2: Media Attribute Loading
- CSS with `media="print"` initially, then switch to `all`
- Non-blocking CSS loading technique
- Port: 8091

### Strategy 3: Preload CSS
- Use `<link rel="preload" as="style">` with onload
- Early resource discovery with proper loading
- Port: 8092

### Strategy 4: Async CSS Loading
- JavaScript-based async CSS loading
- Load CSS after page becomes interactive
- Port: 8093

### Strategy 5: Critical CSS + Async
- Inline critical CSS, load rest asynchronously
- Best practice combination
- Port: 8094

## Expected Findings

Different CSS loading strategies have significant performance impacts:
- Blocking CSS is the simplest but slowest
- Media attribute trick provides non-blocking loading
- Preload improves resource discovery
- Async loading can delay styles but improves initial paint
- Critical CSS + async provides the best balance

## Current Progress

- ⏳ Need to create baseline blocking CSS version
- ⏳ Need to implement media attribute loading
- ⏳ Need to implement preload strategy
- ⏳ Need to implement async loading
- ⏳ Need to implement critical CSS + async combination
- ⏳ Need to run performance comparisons

