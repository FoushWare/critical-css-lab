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

    const allCSS = new Set();

    for (const viewport of viewports) {
      console.log(`  🔄 Processing ${viewport.name} (${viewport.width}x${viewport.height})...`);
      
      const page = await browser.newPage();
      
      // Set viewport
      await page.setViewportSize({ width: viewport.width, height: viewport.height });
      
      // Navigate to the page
      await page.goto(`http://localhost:${PORT}`, { waitUntil: 'networkidle' });
      
      // Extract critical CSS using bounding-box approach
      const criticalRules = await page.evaluate((vpHeight) => {
        const used = [];
        const sheets = Array.from(document.styleSheets);
        
        for (const sheet of sheets) {
          try {
            const rules = sheet.cssRules || sheet.rules;
            if (!rules) continue;
            
            for (const rule of rules) {
              if (!rule.selectorText) continue;
              
              try {
                const elements = document.querySelectorAll(rule.selectorText);
                for (const el of elements) {
                  const rect = el.getBoundingClientRect();
                  // Check if element is within viewport (above the fold)
                  if (rect.top < vpHeight && rect.bottom > 0) {
                    used.push(rule.cssText);
                    break; // Only need one element to be visible
                  }
                }
              } catch (e) {
                // Invalid selector or other DOM issues
                continue;
              }
            }
          } catch (e) {
            // Cross-origin stylesheet or other access issues
            continue;
          }
        }
        
        return used;
      }, viewport.height);
      
      // Add CSS rules to set for deduplication
      criticalRules.forEach(rule => {
        if (rule && rule.trim()) {
          allCSS.add(rule.trim());
        }
      });
      
      await page.close();
      console.log(`  ✅ ${viewport.name} extraction complete (${criticalRules.length} rules)`);
    }

    await browser.close();
    
    // Merge all CSS rules and write to file
    const criticalCSS = Array.from(allCSS).join('\n');
    
    await fs.writeFile(outputPath, criticalCSS);
    console.log('✅ Critical CSS extracted to critical.css');
    console.log(`📊 CSS size: ${criticalCSS.length} characters`);
    console.log(`🎯 Successfully extracted using Playwright with system Chrome`);
    console.log(`📱 Viewports covered: ${viewports.map(v => v.name).join(', ')}`);
    console.log(`🔢 Total unique CSS rules: ${allCSS.size}`);
    
  } catch (error) {
    console.error('❌ Error extracting Critical CSS:', error);
    process.exit(1);
  }
}

extractCriticalCSS();
