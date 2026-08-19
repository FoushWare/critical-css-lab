import { chromium } from 'playwright';
import fs from 'node:fs/promises';
import path from 'path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const PORT = 8082;
const outputPath = path.join(__dirname, 'critical.css');

// Define viewports for different devices
const viewports = [
  { name: 'mobile', width: 390, height: 844 },   // iPhone 12/13/14
  { name: 'tablet', width: 768, height: 1024 },  // iPad
  { name: 'desktop', width: 1300, height: 900 },  // Desktop
];

async function extractCriticalCSS() {
  try {
    console.log('🔍 Extracting Critical CSS using Playwright with system Chrome...');
    console.log('📱 Extracting for multiple viewports: mobile, tablet, desktop');
    
    // Launch browser with system Chrome
    const browser = await chromium.launch({
      executablePath: '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome',
      headless: true,
    });

    // Use Map for order-preserving deduplication
    // Key: sheetIndex_ruleIndex, Value: cssText
    const cssRulesMap = new Map();

    for (const viewport of viewports) {
      console.log(`  🔄 Processing ${viewport.name} (${viewport.width}x${viewport.height})...`);
      
      const page = await browser.newPage();
      
      // Set viewport
      await page.setViewportSize({ width: viewport.width, height: viewport.height });
      
      // Navigate to the page
      await page.goto(`http://localhost:${PORT}`, { waitUntil: 'networkidle' });
      
      // Extract critical CSS using bounding-box approach with media query support
      const criticalRules = await page.evaluate(({ vpWidth, vpHeight }) => {
        const used = [];
        const sheets = Array.from(document.styleSheets);
        
        function collectRules(rules, sheetIndex, counter, vpWidth, vpHeight, used) {
          for (const rule of rules) {
            const currentIndex = counter.value++;
            
            // Handle @media rules
            if (rule.type === CSSRule.MEDIA_RULE) {
              // Check if this media query applies to the current viewport
              if (window.matchMedia(rule.conditionText).matches) {
                collectRules(rule.cssRules, sheetIndex, counter, vpWidth, vpHeight, used);
              }
              continue;
            }
            
            // Skip rules without selectorText (@font-face, @keyframes, @supports, etc.)
            if (!rule.selectorText) continue;
            
            try {
              const elements = document.querySelectorAll(rule.selectorText);
              for (const el of elements) {
                const rect = el.getBoundingClientRect();
                // Check if element is within viewport (above the fold)
                if (rect.top < vpHeight && rect.bottom > 0) {
                  // Store with numeric position key for order preservation
                  used.push({
                    cssText: rule.cssText,
                    position: sheetIndex * 1e6 + currentIndex
                  });
                  break; // Only need one element to be visible
                }
              }
            } catch (e) {
              // Invalid selector or other DOM issues
              continue;
            }
          }
        }
        
        for (let sheetIndex = 0; sheetIndex < sheets.length; sheetIndex++) {
          try {
            const rules = sheets[sheetIndex].cssRules || sheets[sheetIndex].rules;
            if (!rules) continue;
            collectRules(rules, sheetIndex, { value: 0 }, vpWidth, vpHeight, used);
          } catch (e) {
            // Cross-origin stylesheet or other access issues
            continue;
          }
        }
        
        return used;
      }, { vpWidth: viewport.width, vpHeight: viewport.height });
      
      // Add CSS rules to Map for order-preserving deduplication
      criticalRules.forEach(rule => {
        if (rule && rule.cssText && rule.position) {
          cssRulesMap.set(rule.position, rule.cssText);
        }
      });
      
      await page.close();
      console.log(`  ✅ ${viewport.name} extraction complete (${criticalRules.length} rules)`);
    }

    await browser.close();
    
    // Sort by position to preserve original source order, then join
    const sortedRules = Array.from(cssRulesMap.entries())
      .sort((a, b) => a[0] - b[0])
      .map(entry => entry[1]);
    
    const criticalCSS = sortedRules.join('\n');
    
    await fs.writeFile(outputPath, criticalCSS);
    console.log('✅ Critical CSS extracted to critical.css');
    console.log(`📊 CSS size: ${criticalCSS.length} characters`);
    console.log(`🎯 Successfully extracted using Playwright with system Chrome`);
    console.log(`📱 Viewports covered: ${viewports.map(v => v.name).join(', ')}`);
    console.log(`🔢 Total unique CSS rules: ${cssRulesMap.size}`);
    
  } catch (error) {
    console.error('❌ Error extracting Critical CSS:', error);
    process.exit(1);
  }
}

extractCriticalCSS();
