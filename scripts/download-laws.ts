#!/usr/bin/env tsx

import fs from 'fs';
import path from 'path';
import https from 'https';
import zlib from 'zlib';
import { URL } from 'url';

// Type definitions
interface LawConfig {
  id: string;
  name: string;
  url: string;
  type: 'ley' | 'decreto';
}

interface DownloadResult {
  filename: string;
  size: number;
  downloadedAt: string;
  url: string;
}

interface LawMetadata extends LawConfig, DownloadResult {
  lastChecked: string;
}

interface ProcessingResult {
  law: string;
  status: 'downloaded' | 'skipped' | 'failed';
  error?: string;
}

type MetadataRecord = Record<string, LawMetadata>;

// Configuration of laws to download using InfoLeg URLs
const LAWS_CONFIG: LawConfig[] = [
  {
    id: 'ley-19303-psicotropicos',
    name: 'Ley 19.303 - Psicotrópicos',
    url: 'https://servicios.infoleg.gob.ar/infolegInternet/anexos/20000-24999/20966/texact.htm',
    type: 'ley'
  },
  {
    id: 'ley-27553-recetas-electronicas',
    name: 'Ley 27.553 - Recetas Electrónicas',
    url: 'https://servicios.infoleg.gob.ar/infolegInternet/anexos/340000-344999/340919/texact.htm',
    type: 'ley'
  },
  {
    id: 'ley-27306-dea',
    name: 'Ley 27.306 - DEA',
    url: 'https://servicios.infoleg.gob.ar/infolegInternet/anexos/265000-269999/267234/norma.htm',
    type: 'ley'
  },
  {
    id: 'ley-17565-medicamentos',
    name: 'Ley 17.565 - Medicamentos',
    url: 'https://servicios.infoleg.gob.ar/infolegInternet/anexos/15000-19999/19424/texact.htm',
    type: 'ley'
  },
  {
    id: 'ley-17132-arte-curar',
    name: 'Ley 17.132 - Arte de Curar (Ejercicio de la Medicina y Odontología)',
    url: 'https://servicios.infoleg.gob.ar/infolegInternet/anexos/15000-19999/19429/texact.htm',
    type: 'ley'
  },
  {
    id: 'decreto-345-2024-recetas-electronicas',
    name: 'Decreto 345/2024 - Recetas Electrónicas',
    url: 'https://servicios.infoleg.gob.ar/infolegInternet/anexos/395000-399999/398297/norma.htm',
    type: 'decreto'
  },
  {
    id: 'ley-26657-salud-mental',
    name: 'Ley 26.657 - Ley Nacional de Salud Mental',
    url: 'https://servicios.infoleg.gob.ar/infolegInternet/anexos/175000-179999/175977/norma.htm',
    type: 'ley'
  }
];

const DATA_DIR = path.join(__dirname, '../data/leyes');
const METADATA_FILE = path.join(DATA_DIR, 'metadata.json');

// Ensure data directory exists
if (!fs.existsSync(DATA_DIR)) {
  fs.mkdirSync(DATA_DIR, { recursive: true });
}

// Helper function to download a URL
function downloadFile(url: string, filename: string): Promise<DownloadResult> {
  return new Promise((resolve, reject) => {
    console.log(`📥 Downloading: ${filename}`);

    const parsedUrl = new URL(url);
    const options: https.RequestOptions = {
      hostname: parsedUrl.hostname,
      path: parsedUrl.pathname + parsedUrl.search,
      method: 'GET',
      // Disable SSL verification for InfoLeg government site
      rejectUnauthorized: false,
      headers: {
        'User-Agent': 'Mozilla/5.0 (compatible; TDAH-Argentina-Bot/1.0; +https://tdarg.com.ar)',
        'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8',
        'Accept-Language': 'es-AR,es;q=0.9,en;q=0.8',
        'Accept-Encoding': 'identity',
        'Connection': 'keep-alive',
        'Referer': 'https://servicios.infoleg.gob.ar/',
        'Upgrade-Insecure-Requests': '1'
      }
    };

    const req = https.request(options, (res) => {
      // Handle redirects
      if (res.statusCode && res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
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
      let stream: NodeJS.ReadableStream = res;
      const encoding = res.headers['content-encoding'];

      if (encoding === 'gzip') {
        stream = res.pipe(zlib.createGunzip());
      } else if (encoding === 'deflate') {
        stream = res.pipe(zlib.createInflate());
      }

      // Handle data as Buffer to properly detect encoding
      let buffer = Buffer.alloc(0);

      stream.on('data', (chunk: Buffer) => {
        buffer = Buffer.concat([buffer, chunk]);
      });

      stream.on('end', () => {
        try {
          // Convert buffer to string with proper encoding detection
          let data: string;
          const bufferString = buffer.toString();

          // Check if it's likely Windows-1252 by looking for specific byte patterns
          if (bufferString.includes('�') || bufferString.includes('charset=windows-1252') || bufferString.includes('charset=ISO-8859-1')) {
            // Try to decode as Windows-1252
            data = buffer.toString('latin1');
          } else {
            // Default to UTF-8
            data = buffer.toString('utf8');
          }

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

      stream.on('error', (error: Error) => {
        reject(error);
      });
    });

    req.on('error', (error: Error) => {
      reject(error);
    });

    req.setTimeout(30000, () => {
      req.destroy();
      reject(new Error('Request timeout'));
    });

    req.end();
  });
}

// Load existing metadata
function loadMetadata(): MetadataRecord {
  if (fs.existsSync(METADATA_FILE)) {
    try {
      const content = fs.readFileSync(METADATA_FILE, 'utf8');
      return JSON.parse(content) as MetadataRecord;
    } catch (error) {
      console.warn('⚠️  Could not load metadata, starting fresh');
      return {};
    }
  }
  return {};
}

// Save metadata
function saveMetadata(metadata: MetadataRecord): void {
  fs.writeFileSync(METADATA_FILE, JSON.stringify(metadata, null, 2), 'utf8');
}

// Check if file needs update (simple check based on existence)
function needsUpdate(lawId: string, metadata: MetadataRecord): boolean {
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
  const hoursSinceDownload = (now.getTime() - lastDownload.getTime()) / (1000 * 60 * 60);

  return hoursSinceDownload > 24;
}

// Main download function
async function downloadLaws(): Promise<void> {
  console.log('🚀 Starting law download process...');

  const metadata = loadMetadata();
  const results: ProcessingResult[] = [];

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
      const errorMessage = error instanceof Error ? error.message : 'Unknown error';
      console.error(`❌ Failed to download ${law.name}:`, errorMessage);
      results.push({ law: law.name, status: 'failed', error: errorMessage });
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
async function main(): Promise<void> {
  try {
    await downloadLaws();
  } catch (error) {
    console.error('💥 Fatal error:', error);
    process.exit(1);
  }
}

// Export for module use
export { downloadLaws, LAWS_CONFIG, DATA_DIR };
export type { LawConfig, DownloadResult, LawMetadata, ProcessingResult, MetadataRecord };

// Run if this is the main module
if (require.main === module) {
  main();
}
