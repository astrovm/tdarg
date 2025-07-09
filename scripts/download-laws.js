#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const https = require('https');
const zlib = require('zlib');
const { URL } = require('url');

// Configuration of laws to download
const LAWS_CONFIG = [
  {
    id: 'ley-19303-psicotropicos',
    name: 'Ley 19.303 - Psicotrópicos',
    url: 'https://www.argentina.gob.ar/normativa/nacional/ley-19303-20966/actualizacion',
    type: 'ley'
  },
  {
    id: 'ley-27553-recetas-electronicas',
    name: 'Ley 27.553 - Recetas Electrónicas',
    url: 'https://www.argentina.gob.ar/normativa/nacional/ley-27553-340919/actualizacion',
    type: 'ley'
  },
  {
    id: 'ley-27306-dea',
    name: 'Ley 27.306 - DEA',
    url: 'https://www.argentina.gob.ar/normativa/nacional/ley-27306-267234/texto',
    type: 'ley'
  },
  {
    id: 'ley-17565-medicamentos',
    name: 'Ley 17.565 - Medicamentos',
    url: 'https://www.argentina.gob.ar/normativa/nacional/ley-17565-19424/actualizacion',
    type: 'ley'
  },
  {
    id: 'decreto-345-2024-recetas-digitales',
    name: 'Decreto 345/2024 - Recetas Digitales',
    url: 'https://www.argentina.gob.ar/normativa/nacional/decreto-345-2024-398297/texto',
    type: 'decreto'
  },
  {
    id: 'decreto-432-2017-reglamentacion',
    name: 'Decreto 432/2017 - Reglamentación',
    url: 'https://www.argentina.gob.ar/normativa/nacional/decreto-432-2017-274900/actualizacion',
    type: 'decreto'
  },
  {
    id: 'resolucion-5744-2024-repositorios',
    name: 'Resolución 5744/2024 - Repositorios',
    url: 'https://www.argentina.gob.ar/normativa/nacional/resoluci%C3%B3n-5744-2024-406757/texto',
    type: 'resolucion'
  }
];

const DATA_DIR = path.join(__dirname, '../data/leyes');
const METADATA_FILE = path.join(DATA_DIR, 'metadata.json');

// Ensure data directory exists
if (!fs.existsSync(DATA_DIR)) {
  fs.mkdirSync(DATA_DIR, { recursive: true });
}

// Helper function to download a URL
function downloadFile(url, filename) {
  return new Promise((resolve, reject) => {
    console.log(`📥 Downloading: ${filename}`);
    
    const parsedUrl = new URL(url);
    const options = {
      hostname: parsedUrl.hostname,
      path: parsedUrl.pathname + parsedUrl.search,
      method: 'GET',
      headers: {
        'User-Agent': 'Mozilla/5.0 (compatible; TDAH-Argentina-Bot/1.0)',
        'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8',
        'Accept-Language': 'es-AR,es;q=0.9,en;q=0.8',
        'Accept-Encoding': 'identity', // Don't accept compressed content
        'Connection': 'keep-alive',
        'Upgrade-Insecure-Requests': '1'
      }
    };

    const req = https.request(options, (res) => {
      let data = '';
      
      // Handle redirects
      if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
        console.log(`🔄 Redirecting to: ${res.headers.location}`);
        return downloadFile(res.headers.location, filename)
          .then(resolve)
          .catch(reject);
      }

      if (res.statusCode !== 200) {
        reject(new Error(`HTTP ${res.statusCode}: ${res.statusMessage}`));
        return;
      }

      // Handle different content encodings
      let stream = res;
      const encoding = res.headers['content-encoding'];
      
      if (encoding === 'gzip') {
        stream = res.pipe(zlib.createGunzip());
      } else if (encoding === 'deflate') {
        stream = res.pipe(zlib.createInflate());
      }

      stream.setEncoding('utf8');
      
      stream.on('data', (chunk) => {
        data += chunk;
      });

      stream.on('end', () => {
        try {
          const filePath = path.join(DATA_DIR, filename);
          fs.writeFileSync(filePath, data, 'utf8');
          console.log(`✅ Saved: ${filename} (${data.length} bytes)`);
          resolve({
            filename,
            size: data.length,
            downloadedAt: new Date().toISOString(),
            url: url
          });
        } catch (error) {
          reject(error);
        }
      });

      stream.on('error', (error) => {
        reject(error);
      });
    });

    req.on('error', (error) => {
      reject(error);
    });

    req.setTimeout(30000, () => {
      req.abort();
      reject(new Error('Request timeout'));
    });

    req.end();
  });
}

// Load existing metadata
function loadMetadata() {
  if (fs.existsSync(METADATA_FILE)) {
    try {
      const content = fs.readFileSync(METADATA_FILE, 'utf8');
      return JSON.parse(content);
    } catch (error) {
      console.warn('⚠️  Could not load metadata, starting fresh');
      return {};
    }
  }
  return {};
}

// Save metadata
function saveMetadata(metadata) {
  fs.writeFileSync(METADATA_FILE, JSON.stringify(metadata, null, 2), 'utf8');
}

// Check if file needs update (simple check based on existence)
function needsUpdate(lawId, metadata) {
  const filename = `${lawId}.html`;
  const filePath = path.join(DATA_DIR, filename);
  
  // If file doesn't exist, definitely needs update
  if (!fs.existsSync(filePath)) {
    return true;
  }
  
  // If no metadata, assume it needs update
  if (!metadata[lawId]) {
    return true;
  }
  
  // For now, always update if file is older than 24 hours
  const lastDownload = new Date(metadata[lawId].downloadedAt);
  const now = new Date();
  const hoursSinceDownload = (now - lastDownload) / (1000 * 60 * 60);
  
  return hoursSinceDownload > 24;
}

// Main download function
async function downloadLaws() {
  console.log('🚀 Starting law download process...');
  
  const metadata = loadMetadata();
  const results = [];
  
  for (const law of LAWS_CONFIG) {
    const filename = `${law.id}.html`;
    
    try {
      if (needsUpdate(law.id, metadata)) {
        console.log(`📋 Processing: ${law.name}`);
        
        const result = await downloadFile(law.url, filename);
        
        // Update metadata
        metadata[law.id] = {
          ...law,
          ...result,
          lastChecked: new Date().toISOString()
        };
        
        results.push({ law: law.name, status: 'downloaded' });
        
        // Small delay to be respectful to the server
        await new Promise(resolve => setTimeout(resolve, 1000));
      } else {
        console.log(`⏭️  Skipping: ${law.name} (up to date)`);
        results.push({ law: law.name, status: 'skipped' });
      }
    } catch (error) {
      console.error(`❌ Failed to download ${law.name}:`, error.message);
      results.push({ law: law.name, status: 'failed', error: error.message });
    }
  }
  
  // Save updated metadata
  saveMetadata(metadata);
  
  // Print summary
  console.log('\n📊 Download Summary:');
  console.log('====================');
  
  const downloaded = results.filter(r => r.status === 'downloaded');
  const skipped = results.filter(r => r.status === 'skipped');
  const failed = results.filter(r => r.status === 'failed');
  
  console.log(`✅ Downloaded: ${downloaded.length}`);
  console.log(`⏭️  Skipped: ${skipped.length}`);
  console.log(`❌ Failed: ${failed.length}`);
  
  if (failed.length > 0) {
    console.log('\n❌ Failed downloads:');
    failed.forEach(f => console.log(`  - ${f.law}: ${f.error}`));
  }
  
  console.log(`\n📁 Files saved to: ${DATA_DIR}`);
  console.log('🎉 Download process completed!');
}

// Run the download process
if (require.main === module) {
  downloadLaws().catch(error => {
    console.error('💥 Fatal error:', error);
    process.exit(1);
  });
}

module.exports = { downloadLaws, LAWS_CONFIG, DATA_DIR };