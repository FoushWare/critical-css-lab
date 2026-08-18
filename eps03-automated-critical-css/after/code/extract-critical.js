import fs from 'node:fs/promises';
import path from 'path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const PORT = 8083;

const outputPath = path.join(__dirname, 'critical.css');

async function extractCriticalCSS() {
  try {
    console.log('🔍 Extracting Critical CSS manually (above-the-fold selectors)...');
    
    // Read the full CSS
    const fullCSS = await fs.readFile(path.join(__dirname, 'styles.css'), 'utf-8');
    
    // Define above-the-fold selectors based on the page structure
    const criticalSelectors = [
      ':root',
      '*',
      'body',
      '[dir="rtl"]',
      '.container',
      '.eyebrow',
      '.site-header',
      '.header-inner',
      '.logo',
      '.logo-mark',
      '.main-navigation',
      '.main-navigation span',
      '.lang-switcher',
      '.hero',
      '.hero-grid',
      '.hero-content',
      '.hero h1',
      '.hero h1 span',
      '.hero-description',
      '[dir="rtl"] .hero-description',
      '.hero-actions',
      '.button',
      '.button.clickable',
      '.button-primary',
      '.button-secondary',
      '.hero-meta',
      '.meta-item',
      '.meta-item strong',
      '.meta-item span',
      '.meta-divider',
      '[dir="rtl"] .hero-grid',
      '[dir="rtl"] .logo',
      '[dir="rtl"] .main-navigation',
      '[dir="rtl"] .hero-actions',
      '[dir="rtl"] .hero-meta',
      '[dir="rtl"] body',
      '[dir="rtl"] h1',
      '[dir="rtl"] h2',
      '[dir="rtl"] h3',
      '[dir="rtl"] .hero h1',
      '[dir="rtl"] p',
      'button',
    ];
    
    // Extract CSS rules for critical selectors
    const cssRules = fullCSS.split('}');
    const criticalCSS = cssRules.reduce((result, rule) => {
      const ruleWithBrace = rule + '}';
      if (criticalSelectors.some(selector => ruleWithBrace.includes(selector))) {
        return result + ruleWithBrace;
      }
      return result;
    }, '');
    
    await fs.writeFile(outputPath, criticalCSS);
    console.log('✅ Critical CSS extracted to critical.css');
    console.log(`📊 CSS size: ${criticalCSS.length} characters`);
    console.log('🎯 Successfully extracted above-the-fold CSS (manual selector matching)');
    
  } catch (error) {
    console.error('❌ Error extracting Critical CSS:', error);
    process.exit(1);
  }
}

extractCriticalCSS();
