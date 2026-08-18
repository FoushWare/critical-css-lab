import { generate } from 'critical';
import fs from 'node:fs/promises';
import path from 'path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const PORT = 8083;

const outputPath = path.join(__dirname, 'critical.css');

async function extractCriticalCSS() {
  try {
    console.log('🔍 Extracting Critical CSS using Critical with system Chrome...');
    
    const result = await generate({
      src: `http://localhost:${PORT}`,
      css: path.join(__dirname, 'styles.css'),
      width: 1300,
      height: 900,
      penthouse: {
        userAgent: 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
        executablePath: '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome',
      },
    });

    // Critical returns an object with css property
    const criticalCSS = result.css || result;
    
    await fs.writeFile(outputPath, criticalCSS);
    console.log('✅ Critical CSS extracted to critical.css');
    console.log(`📊 CSS size: ${criticalCSS.length} characters`);
    console.log('🎯 Successfully extracted using system Chrome');
    
  } catch (error) {
    console.error('❌ Error extracting Critical CSS:', error);
    console.log('💡 See CHROME_SETUP.md for installation instructions');
    process.exit(1);
  }
}

extractCriticalCSS();
