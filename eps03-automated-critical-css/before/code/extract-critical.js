import { chromium } from 'playwright';
import fs from 'node:fs/promises';
import path from 'path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const PORT = 8082;
const outputPath = path.join(__dirname, 'critical.css');

async function extractCriticalCSS() {
  try {
    console.log('🔍 Extracting Critical CSS using Playwright with system Chrome...');
    
    // Launch browser with system Chrome
    const browser = await chromium.launch({
      executablePath: '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome',
      headless: true,
    });

    const page = await browser.newPage();
    
    // Set viewport
    await page.setViewportSize({ width: 1300, height: 900 });
    
    // Navigate to the page
    await page.goto(`http://localhost:${PORT}`, { waitUntil: 'networkidle' });
    
    // Extract critical CSS using Playwright's coverage API
    await page.coverage.startCSSCoverage();
    await page.reload({ waitUntil: 'networkidle' });
    const coverage = await page.coverage.stopCSSCoverage();
    
    // Filter for used CSS rules
    const criticalCSS = coverage
      .filter(entry => entry.url.includes('styles.css'))
      .map(entry => entry.text)
      .join('\n');
    
    await browser.close();
    
    await fs.writeFile(outputPath, criticalCSS);
    console.log('✅ Critical CSS extracted to critical.css');
    console.log(`📊 CSS size: ${criticalCSS.length} characters`);
    console.log('🎯 Successfully extracted using Playwright with system Chrome');
    
  } catch (error) {
    console.error('❌ Error extracting Critical CSS:', error);
    process.exit(1);
  }
}

extractCriticalCSS();
