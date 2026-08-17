# Episode 1: CSS is Rendering Blocker - Video Script

## Episode Overview
**Title:** CSS is Rendering Blocker  
**Duration:** ~8-10 minutes  
**Goal:** Demonstrate how external CSS blocks page rendering and affects user experience

---

## Script

### [0:00-0:30] Introduction

**Visual:** Critical CSS Lab title screen, then host on camera

**Host:** "Welcome to the Critical CSS Lab! In this series, we're going to explore how CSS affects page performance and whether Critical CSS optimization is worth the effort. I'm [Your Name], and today we're starting with Episode 1: CSS is Rendering Blocker."

**Visual:** Screen showing "Episode 1: CSS is Rendering Blocker"

**Host:** "In this episode, we're going to demonstrate a fundamental problem in web performance: render-blocking CSS. We'll see exactly how external CSS can delay your page from appearing to users, and we'll measure the impact using real performance metrics."

---

### [0:30-1:00] The Problem

**Visual:** Simple diagram showing browser requesting HTML, then CSS, then rendering

**Host:** "So what does 'render-blocking CSS' actually mean? When a browser loads a webpage, it needs both HTML and CSS. HTML provides the structure and content, while CSS provides the styling. The problem is that the browser will typically wait for CSS to load before it paints anything to the screen."

**Visual:** Animation showing blank screen while CSS loads, then content appears

**Host:** "This means if your CSS file is large or slow to load, users will see a blank screen while waiting. And that's exactly what we're going to demonstrate today."

---

### [1:00-2:00] Episode Setup

**Visual:** Terminal showing project structure

**Host:** "I've set up a realistic landing page with a custom Node.js server. The server intentionally delays the CSS file by 10 seconds to simulate slow network conditions. This lets us clearly see the render-blocking behavior."

**Visual:** File tree showing the project structure

**Host:** "The page has a hero section, metrics, and a browser visualization - all styled with a substantial CSS file. This is a realistic scenario, not a toy example."

---

### [2:00-3:00] Running the Experiment

**Visual:** Terminal showing `npm run dev` command

**Host:** "Let's start the server and see what happens. I'll run `npm run dev` from the code directory."

**Visual:** Server starting up, showing "CSS delay = 10000ms"

**Host:** "You can see the server is configured to delay styles.css by 10 seconds. Now let's open the page in the browser."

**Visual:** Browser showing blank white screen

**Host:** "Watch this carefully. The page loads, but you see... nothing. Just a blank white screen. This is because the browser is waiting for the CSS file to load before it can paint anything."

---

### [3:00-4:00] The Wait

**Visual:** Timer showing 5 seconds, then 10 seconds

**Host:** "We're now at 5 seconds... still nothing. And at 10 seconds... finally, the content appears!"

**Visual:** Page suddenly showing styled content

**Host:** "That's a 10-second blank screen! In the real world, this would be a terrible user experience. Users would likely think the page is broken and leave before seeing any content."

---

### [4:00-5:00] Measuring the Impact

**Visual:** Chrome DevTools Network tab showing the waterfall

**Host:** "Let's look at the Network tab in Chrome DevTools to see what's happening. You can see the HTML loads in just 7 milliseconds, but the CSS takes the full 10 seconds due to our server delay."

**Visual:** Network waterfall showing HTML request (7ms) and CSS request (10000ms)

**Host:** "The browser genuinely blocked rendering while waiting for CSS. This isn't a JavaScript trick or artificial delay - it's real browser behavior."

---

### [5:00-6:00] Performance Metrics

**Visual:** Lighthouse report showing poor FCP and LCP

**Host:** "If we run Lighthouse, we can see the impact on performance metrics. First Contentful Paint is around 10 seconds, and Largest Contentful Paint is similar. These are poor scores that would hurt your page's search ranking and user experience."

**Visual:** Red metrics in Lighthouse report

**Host:** "Even though the HTML loads instantly, the render-blocking CSS prevents any content from appearing until it's fully loaded."

---

### [6:00-7:00] Real-World Implications

**Visual:** Diagram showing slow network conditions on mobile

**Host:** "In the real world, this happens with slow networks, large CSS files, or server issues. Users on mobile devices with poor connectivity experience this exact problem. Even on fast networks, large CSS files can cause noticeable delays."

**Visual:** Comparison of fast vs slow network CSS loading times

**Host:** "The CSS in this demo is about 20KB, which is realistic for a production site. But imagine if your CSS is 100KB or more - the blocking time could be significant."

---

### [7:00-8:00] What We Learned

**Visual:** Summary slide with key points

**Host:** "So what did we learn today? External CSS is render-blocking by default. The browser won't paint content until CSS is loaded. This can cause blank screens and poor user experience, especially on slow networks."

**Visual:** Bullet points: Render-blocking CSS, blank screens, poor UX

**Host:** "This is the problem we need to solve. And in the next episode, we'll explore Critical CSS optimization as a solution."

---

### [8:00-8:30] Conclusion

**Visual:** Critical CSS Lab logo and Episode 2 preview

**Host:** "In Episode 2, we'll implement Critical CSS to fix this problem. We'll extract the essential styles for the initial viewport and inline them in the HTML, so content appears immediately. I'll see you in the next episode!"

**Visual:** "Next Episode: Critical CSS Optimization" with preview

**Host:** "Thanks for watching, and happy coding!"

---

## Key Visuals Needed

1. Title screen with Critical CSS Lab branding
2. Browser rendering diagram (HTML → CSS → Paint)
3. Project structure file tree
4. Terminal showing server startup
5. Browser showing blank screen vs styled content
6. Chrome DevTools Network waterfall
7. Lighthouse performance report
8. Mobile network diagram
9. Summary slide with key points
10. Episode 2 preview

## Equipment/Software Mentioned

- Node.js server
- Chrome DevTools (Network tab, Lighthouse)
- Terminal/shell
- Browser (Chrome recommended)

## Prerequisites for Viewers

- Basic understanding of HTML and CSS
- Node.js installed (if following along)
- Chrome browser

## Next Episode Teaser

"Coming up next: Critical CSS Optimization - we'll fix this render-blocking problem by inlining essential styles and achieving instant page load times!"
