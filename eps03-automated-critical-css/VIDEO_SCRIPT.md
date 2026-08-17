# Episode 3: Automated Critical CSS Extraction - Video Script

## Episode Overview
**Title:** Automated Critical CSS Extraction  
**Duration:** ~12-15 minutes  
**Goal:** Explore tools that automatically generate Critical CSS and compare manual vs automated approaches

---

## Script

### [0:00-0:30] Introduction

**Visual:** Critical CSS Lab title screen, then host on camera

**Host:** "Welcome back to the Critical CSS Lab! In Episode 2, we manually extracted Critical CSS and saw dramatic performance improvements. But manually extracting Critical CSS is time-consuming and error-prone. Today in Episode 3, we're going to explore automated tools that can do this for us."

**Visual:** Screen showing "Episode 3: Automated Critical CSS Extraction"

**Host:** "We'll look at popular tools like Penthouse and Critical CSS Extractor, see how they work, and discuss whether automation is worth it compared to the manual approach."

---

### [0:30-1:00] Recap of Manual Approach

**Visual:** Code showing the manually extracted critical CSS from Episode 2

**Host:** "In Episode 2, we manually identified which styles were needed for the initial viewport and inlined them in the HTML. This involved going through the CSS file, selecting relevant rules, and testing the results."

**Visual:** Diagram showing the manual extraction process

**Host:** "The manual approach works, but it has drawbacks. It's time-consuming, error-prone, and needs to be repeated whenever the design changes. For production sites with frequent updates, this isn't sustainable."

---

### [1:00-2:00] The Automation Promise

**Visual:** Diagram showing automated Critical CSS extraction workflow

**Host:** "Automated tools promise to solve this problem. They typically work by loading your page in a headless browser, simulating different viewport sizes, and extracting only the CSS that's actually used for those viewports."

**Visual:** Animation showing tool extracting CSS automatically

**Host:** "The promise is that you can get accurate Critical CSS with minimal effort, and you can integrate it into your build process to regenerate it automatically when your design changes."

---

### [2:00-3:00] Tool 1: Penthouse

**Visual:** Penthouse website or npm package page

**Host:** "Let's start with Penthouse, one of the most popular Critical CSS extraction tools. Penthouse is a Node.js tool that uses Headless Chrome to extract critical CSS."

**Visual:** Terminal showing `npm install penthouse`

**Host:** "First, we install Penthouse with npm. Then we can use it to extract critical CSS from our page."

**Visual:** Code showing Penthouse usage example

**Host:** "Penthouse allows us to specify the URL, viewport dimensions, and other options. It loads the page, waits for it to render, and extracts the CSS that's actually used for that viewport."

---

### [3:00-4:00] Using Penthouse

**Visual:** Terminal running Penthouse command

**Host:** "Let's run Penthouse on our Episode 2 page. I'll specify the URL, set the viewport to a common desktop size, and output the result to a file."

**Visual:** Penthouse generating critical CSS output

**Host:** "Penthouse loads the page in headless Chrome, extracts the critical CSS, and saves it to a file. Let's look at what it generated."

**Visual:** Code showing the generated critical CSS

**Host:** "The generated CSS includes styles for the header, hero section, and other visible elements. It's similar to what we manually extracted, but it was done automatically."

---

### [4:00-5:00] Tool 2: Critical CSS Extractor

**Visual:** Critical CSS Extractor npm package page

**Host:** "Another popular tool is Critical CSS Extractor. This tool works similarly but with some different options and approaches."

**Visual:** Terminal showing `npm install critical`

**Host:** "We install it with `npm install critical`. The command-line interface is slightly different, but the concept is the same."

**Visual:** Code showing Critical CSS Extractor usage

**Host:** "Critical CSS Extractor can also handle multiple viewports and can generate different critical CSS for different screen sizes, which is useful for responsive designs."

---

### [5:00-6:00] Comparing the Results

**Visual:** Side-by-side comparison of manual vs automated critical CSS

**Host:** "Let's compare the manually extracted CSS from Episode 2 with the automatically generated CSS from Penthouse."

**Visual:** Code diff showing similarities and differences

**Host:** "The automated version is very similar to our manual extraction, which is good - it means the tool is accurate. There might be some minor differences in which rules are included, but the core critical styles are the same."

**Visual:** File size comparison

**Host:** "The file sizes are comparable too. The manual extraction was about 400 lines, and the automated version is similar. This suggests the tools are doing a good job of identifying truly critical styles."

---

### [6:00-7:00] Integration into Build Process

**Visual:** Diagram showing automated Critical CSS in build pipeline

**Host:** "The real benefit of automation is integration into your build process. You can set up scripts to automatically regenerate critical CSS whenever your CSS or HTML changes."

**Visual:** Example package.json scripts with critical CSS generation

**Host:** "For example, you can add a script in package.json that runs the extraction tool during your build process. This ensures your critical CSS is always up-to-date without manual intervention."

**Visual:** Gulp or webpack integration example

**Host:** "Tools like Gulp and webpack have plugins for Critical CSS extraction, making it even easier to integrate into existing build systems."

---

### [7:00-8:00] Pros and Cons of Automation

**Visual:** Split screen showing pros vs cons

**Host:** "Let's discuss the pros and cons of automated Critical CSS extraction."

**Visual:** Pros list: Time-saving, accurate, consistent, integrates with builds

**Host:** "The pros are clear: it saves time, it's more accurate than manual extraction, it's consistent across runs, and it integrates well with build processes."

**Visual:** Cons list: Setup complexity, tool dependencies, over-extraction risks

**Host:** "The cons include setup complexity, additional tool dependencies, and the risk of over-extraction - including more CSS than necessary if the tool isn't configured properly."

---

### [8:00-9:00] Performance Comparison

**Visual:** Lighthouse comparison of manual vs automated approaches

**Host:** "Let's measure the performance impact. I'll test both the manual and automated versions using Lighthouse."

**Visual:** Performance metrics showing similar results

**Host:** "Interestingly, the performance metrics are very similar. Both achieve instant FCP because they're essentially the same critical CSS. The difference is in how it was generated, not in the performance result."

**Visual:** Chart showing file size and performance comparison

**Host:** "This suggests that both approaches are equally effective from a performance standpoint. The difference is in development workflow and maintenance."

---

### [9:00-10:00] When to Use Each Approach

**Visual:** Decision tree showing when to use manual vs automated

**Host:** "So when should you use manual vs automated extraction?"

**Visual:** Manual approach use cases: small projects, one-time optimization, learning CSS

**Host:** "Manual extraction is good for small projects, one-time optimizations, or when you're learning how Critical CSS works. It gives you full control and helps you understand what's critical."

**Visual:** Automated approach use cases: large projects, frequent updates, production environments

**Host:** "Automated extraction is better for large projects, sites with frequent design updates, or production environments where consistency and automation are important."

---

### [10:00-11:00] Setup vs Maintenance

**Visual:** Timeline showing initial setup vs ongoing maintenance

**Host:** "Think about the time investment. Manual extraction might take a few hours initially, but you need to repeat it every time your design changes. Automated extraction takes time to set up initially, but then it runs automatically with zero ongoing effort."

**Visual:** Chart showing cumulative time investment over 6 months

**Host:** "Over time, automation pays off if you have frequent updates. For static sites that rarely change, manual might be sufficient. For dynamic sites with regular updates, automation is essential."

---

### [11:00-12:00] What We Learned

**Visual:** Summary slide with key points

**Host:** "So what did we learn today? Automated tools like Penthouse and Critical CSS Extractor can accurately generate Critical CSS, saving time and ensuring consistency. The trade-off is setup complexity and tool dependencies."

**Visual:** Bullet points: Automation benefits, tool comparison, decision framework

**Host:** "Both manual and automated approaches achieve similar performance results. The choice depends on your project size, update frequency, and team preferences."

---

### [12:00-12:30] Conclusion

**Visual:** Critical CSS Lab logo and Episode 4 preview

**Host:** "In Episode 4, we'll explore Critical CSS in React. Does Critical CSS work the same way with client-side rendering? How does React's component model affect Critical CSS optimization? I'll see you in the next episode!"

**Visual:** "Next Episode: Critical CSS in React" with preview

**Host:** "Thanks for watching, and happy coding!"

---

## Key Visuals Needed

1. Title screen with Critical CSS Lab branding
2. Manual extraction process diagram
3. Automation workflow diagram
4. Penthouse website/npm page
5. Terminal showing Penthouse installation and usage
6. Critical CSS Extractor/npm page
7. Code comparison (manual vs automated)
8. Build pipeline integration diagram
9. Pros vs cons comparison
10. Lighthouse performance comparison
11. Decision tree for approach selection
12. Time investment comparison chart
13. Summary slide with key points
14. Episode 4 preview

## Equipment/Software Mentioned

- Node.js and npm
- Penthouse (npm package)
- Critical CSS Extractor (npm package)
- Headless Chrome
- Chrome DevTools (Lighthouse)
- Terminal/shell
- Code editor
- Build tools (Gulp, webpack - optional mention)

## Prerequisites for Viewers

- Understanding of Episodes 1 and 2 concepts
- Node.js installed (if following along)
- Basic knowledge of build processes
- Chrome browser

## Next Episode Teaser

"Coming up next: Critical CSS in React - we'll explore how client-side rendering affects Critical CSS optimization and whether the same principles apply to React applications!"
