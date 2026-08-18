const critical = require('critical');
const fs = require('node:fs/promises');
const path = require('node:path');

const PORT = 8083;

const outputPath = path.join(__dirname, 'critical.css');

async function extractCriticalCSS() {
  try {
    console.log('🔍 Extracting Critical CSS using Critical...');
    
    const result = await critical.generate({
      src: `http://localhost:${PORT}`,
      css: path.join(__dirname, 'styles.css'),
      width: 1300,
      height: 900,
      timeout: 30000,
      penthouse: {
        userAgent: 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
      },
    });

    // Critical returns an object with css property
    const criticalCSS = result.css || result;
    
    await fs.writeFile(outputPath, criticalCSS);
    console.log('✅ Critical CSS extracted to critical.css');
    console.log(`📊 CSS size: ${criticalCSS.length} characters`);
    
  } catch (error) {
    console.error('❌ Error extracting Critical CSS:', error);
    process.exit(1);
  }
}

extractCriticalCSS();
