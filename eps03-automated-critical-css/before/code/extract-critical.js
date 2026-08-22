import { chromium } from 'playwright';
import fs from 'node:fs/promises';
import path from 'path';
import { fileURLToPath } from 'node:url';
import { exec } from 'node:child_process';
import { promisify } from 'node:util';

const execAsync = promisify(exec);

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const PORT = 8082;
const outputPath = path.join(__dirname, 'critical.css');
const chromePath = '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome';

// Define viewports for different devices
const viewports = [
  { name: 'mobile', width: 390, height: 844 },   // iPhone 12/13/14
  { name: 'tablet', width: 768, height: 1024 },  // iPad
  { name: 'desktop', width: 1300, height: 900 },  // Desktop
];

async function checkChromePath() {
  try {
    await fs.access(chromePath);
    return true;
  } catch {
    return false;
  }
}

async function checkServerReady() {
  try {
    const response = await fetch(`http://localhost:${PORT}`);
    return response.ok;
  } catch {
    return false;
  }
}

async function extractCriticalCSS() {
  try {
    console.log('🔍 Extracting Critical CSS using Playwright with system Chrome...');
    console.log('📱 Extracting for multiple viewports: mobile, tablet, desktop');
    
    // Validate Chrome path
    console.log('🔧 Checking Chrome installation...');
    const chromeExists = await checkChromePath();
    if (!chromeExists) {
      console.error(`❌ Chrome not found at: ${chromePath}`);
      console.error('Please verify your Chrome installation path or update the chromePath variable.');
      process.exit(1);
    }
    console.log('✅ Chrome installation verified');
    
    // Check server readiness
    console.log('🔧 Checking dev server...');
    const serverReady = await checkServerReady();
    if (!serverReady) {
      console.error(`❌ Dev server not reachable at http://localhost:${PORT}`);
      console.error('Please run "npm run dev" first to start the server.');
      process.exit(1);
    }
    console.log('✅ Dev server is ready');
    
    // Launch browser with system Chrome
    const browser = await chromium.launch({
      executablePath: chromePath,
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
      
      // Extract critical CSS with comprehensive rule handling
      const result = await page.evaluate(({ vpWidth, vpHeight }) => {
        const used = [];
        const sheets = Array.from(document.styleSheets);
        
        // Collect all @font-face and @keyframes for later reference checking
        const fontFaces = [];
        const keyframes = [];
        
        function collectRules(rules, sheetIndex, counter, vpWidth, vpHeight, used) {
          for (const rule of rules) {
            const currentIndex = counter.value++;
            
            // Handle @media rules
            if (rule.type === CSSRule.MEDIA_RULE) {
              if (window.matchMedia(rule.conditionText).matches) {
                collectRules(rule.cssRules, sheetIndex, counter, vpWidth, vpHeight, used);
              }
              continue;
            }
            
            // Handle @supports rules
            if (rule.type === CSSRule.SUPPORTS_RULE) {
              if (CSS.supports(rule.conditionText)) {
                collectRules(rule.cssRules, sheetIndex, counter, vpWidth, vpHeight, used);
              }
              continue;
            }
            
            // Collect @font-face rules for later reference checking
            if (rule.type === CSSRule.FONT_FACE_RULE) {
              fontFaces.push({
                cssText: rule.cssText,
                position: sheetIndex * 1e6 + currentIndex,
                fontFamily: rule.style.getPropertyValue('font-family')?.replace(/['"]/g, '')
              });
              continue;
            }
            
            // Collect @keyframes rules for later reference checking
            if (rule.type === CSSRule.KEYFRAMES_RULE) {
              keyframes.push({
                cssText: rule.cssText,
                position: sheetIndex * 1e6 + currentIndex,
                name: rule.name
              });
              continue;
            }
            
            // Skip rules without selectorText (@layer, @import, etc.)
            if (!rule.selectorText) continue;
            
            try {
              // Handle pseudo-elements (::before, ::after, ::placeholder, ::selection, ::marker)
              const selector = rule.selectorText;
              const pseudoPattern = /::(before|after|placeholder|selection|marker)/;
              const baseSelector = selector.replace(pseudoPattern, '');
              
              const elements = document.querySelectorAll(baseSelector);
              for (const el of elements) {
                const rect = el.getBoundingClientRect();
                // Check if element is within viewport (above the fold)
                if (rect.top < vpHeight && rect.bottom > 0) {
                  used.push({
                    cssText: rule.cssText,
                    position: sheetIndex * 1e6 + currentIndex,
                    selector: selector
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
        
        // Check which @font-face and @keyframes are actually used
        const usedFontFamilies = new Set();
        const usedAnimationNames = new Set();
        
        used.forEach(rule => {
          if (!rule.selector) return;
          
          // Check for font-family usage
          const elements = document.querySelectorAll(rule.selector);
          elements.forEach(el => {
            const computedStyle = window.getComputedStyle(el);
            const fontFamily = computedStyle.fontFamily;
            if (fontFamily) {
              fontFamily.split(',').forEach(f => {
                usedFontFamilies.add(f.trim().replace(/['"]/g, ''));
              });
            }
          });
          
          // Check for animation usage
          const styleEl = document.querySelector(rule.selector);
          if (styleEl) {
            const computedStyle = window.getComputedStyle(styleEl);
            const animation = computedStyle.animation;
            const animationName = computedStyle.animationName;
            
            // Parse animation shorthand to extract name
            if (animation) {
              const parts = animation.split(/\s+/);
              // First part is typically the animation name (unless it's a duration)
              if (parts[0] && !parts[0].match(/^\d/)) {
                usedAnimationNames.add(parts[0]);
              }
            }
            if (animationName && animationName !== 'none') {
              usedAnimationNames.add(animationName);
            }
          }
        });
        
        // Keep @font-face rules that are used
        const keptFontFaces = fontFaces.filter(ff => 
          usedFontFamilies.has(ff.fontFamily)
        );
        
        // Keep @keyframes rules that are used
        const keptKeyframes = keyframes.filter(kf => 
          usedAnimationNames.has(kf.name)
        );
        
        return {
          styleRules: used,
          fontFaces: keptFontFaces,
          keyframes: keptKeyframes
        };
      }, { vpWidth: viewport.width, vpHeight: viewport.height });
      
      // Add CSS rules to Map for order-preserving deduplication
      result.styleRules.forEach(rule => {
        if (rule && rule.cssText && rule.position !== undefined) {
          cssRulesMap.set(rule.position, rule.cssText);
        }
      });
      
      // Add @font-face rules
      result.fontFaces.forEach(rule => {
        if (rule && rule.cssText && rule.position !== undefined) {
          cssRulesMap.set(rule.position, rule.cssText);
        }
      });
      
      // Add @keyframes rules
      result.keyframes.forEach(rule => {
        if (rule && rule.cssText && rule.position !== undefined) {
          cssRulesMap.set(rule.position, rule.cssText);
        }
      });
      
      await page.close();
      console.log(`  ✅ ${viewport.name} extraction complete (${result.styleRules.length} style rules, ${result.fontFaces.length} @font-face, ${result.keyframes.length} @keyframes)`);
    }

    await browser.close();
    
    // Sort by position to preserve original source order, then join
    const sortedRules = Array.from(cssRulesMap.entries())
      .sort((a, b) => a[0] - b[0])
      .map(entry => entry[1]);
    
    const criticalCSS = sortedRules.join('\n');
    
    // Read original CSS for size comparison
    const originalCSSPath = path.join(__dirname, 'styles.css');
    let originalCSS = '';
    try {
      originalCSS = await fs.readFile(originalCSSPath, 'utf-8');
    } catch (e) {
      console.warn('⚠️  Could not read styles.css for size comparison');
    }
    
    const originalSize = originalCSS.length;
    const criticalSize = criticalCSS.length;
    const percentage = originalSize > 0 ? ((criticalSize / originalSize) * 100).toFixed(1) : 0;
    
    await fs.writeFile(outputPath, criticalCSS);
    console.log('✅ Critical CSS extracted to critical.css');
    console.log(`📊 CSS size: ${criticalSize} characters (${percentage}% of original ${originalSize} chars)`);
    console.log(`🎯 Successfully extracted using Playwright with system Chrome`);
    console.log(`📱 Viewports covered: ${viewports.map(v => v.name).join(', ')}`);
    console.log(`🔢 Total unique CSS rules: ${cssRulesMap.size}`);
    
    // Sanity checks
    if (criticalSize === 0) {
      console.warn('⚠️  Warning: Output is empty - check that the page loaded correctly');
    }
    if (parseFloat(percentage) > 80) {
      console.warn('⚠️  Warning: Output is >80% of original CSS - extraction may not be earning its keep');
    }
    
  } catch (error) {
    console.error('❌ Error extracting Critical CSS:', error);
    process.exit(1);
  }
}

extractCriticalCSS();
