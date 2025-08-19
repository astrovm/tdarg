#!/usr/bin/env tsx
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DATA_DIR = exports.LAWS_CONFIG = void 0;
exports.downloadLaws = downloadLaws;
const fs_1 = __importDefault(require("fs"));
const path_1 = __importDefault(require("path"));
const https_1 = __importDefault(require("https"));
const zlib_1 = __importDefault(require("zlib"));
const url_1 = require("url");
// Configuration of laws to download using InfoLeg URLs
const LAWS_CONFIG = [
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
    },
    {
        id: 'ley-23737-codigo-penal-sustancias',
        name: 'Ley 23.737 - Código Penal - Sustancias Medicinales',
        url: 'https://servicios.infoleg.gob.ar/infolegInternet/anexos/0-4999/138/texact.htm',
        type: 'ley'
    },
    {
        id: 'ley-23849-convencion-derechos-nino',
        name: 'Ley 23.849 - Convención sobre los Derechos del Niño',
        url: 'https://servicios.infoleg.gob.ar/infolegInternet/anexos/0-4999/249/norma.htm',
        type: 'ley'
    },
    {
        id: 'disposicion-1-2025-sistemas-informacion-sanitaria',
        name: 'Disposición 1/2025 - Sistemas de Información Sanitaria',
        url: 'https://www.argentina.gob.ar/normativa/nacional/disposici%C3%B3n-1-2025-415504/texto',
        type: 'decreto'
    },
    {
        id: 'resolucion-2214-2025-recetas-electronicas',
        name: 'Resolución 2214/2025 - Recetas Electrónicas',
        url: 'https://www.argentina.gob.ar/normativa/nacional/resoluci%C3%B3n-2214-2025-415349/texto',
        type: 'decreto'
    }
];
exports.LAWS_CONFIG = LAWS_CONFIG;
const DATA_DIR = path_1.default.join(__dirname, '../data/leyes');
exports.DATA_DIR = DATA_DIR;
const METADATA_FILE = path_1.default.join(DATA_DIR, 'metadata.json');
// Ensure data directory exists
if (!fs_1.default.existsSync(DATA_DIR)) {
    fs_1.default.mkdirSync(DATA_DIR, { recursive: true });
}
// Helper function to download a URL
function downloadFile(url, filename) {
    return new Promise((resolve, reject) => {
        console.log(`📥 Downloading: ${filename}`);
        const parsedUrl = new url_1.URL(url);
        const options = {
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
        const req = https_1.default.request(options, (res) => {
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
            let stream = res;
            const encoding = res.headers['content-encoding'];
            if (encoding === 'gzip') {
                stream = res.pipe(zlib_1.default.createGunzip());
            }
            else if (encoding === 'deflate') {
                stream = res.pipe(zlib_1.default.createInflate());
            }
            // Handle data as Buffer to properly detect encoding
            let buffer = Buffer.alloc(0);
            stream.on('data', (chunk) => {
                buffer = Buffer.concat([buffer, chunk]);
            });
            stream.on('end', () => {
                try {
                    // Convert buffer to string with proper encoding detection
                    let data;
                    const bufferString = buffer.toString();
                    // Check if it's likely Windows-1252 by looking for specific byte patterns
                    if (bufferString.includes('�') || bufferString.includes('charset=windows-1252') || bufferString.includes('charset=ISO-8859-1')) {
                        // Try to decode as Windows-1252
                        data = buffer.toString('latin1');
                    }
                    else {
                        // Default to UTF-8
                        data = buffer.toString('utf8');
                    }
                    const filePath = path_1.default.join(DATA_DIR, filename);
                    fs_1.default.writeFileSync(filePath, data, 'utf8');
                    console.log(`✅ Saved: ${filename} (${data.length} bytes)`);
                    resolve({
                        filename,
                        size: data.length,
                        downloadedAt: new Date().toISOString(),
                        url: url
                    });
                }
                catch (error) {
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
            req.destroy();
            reject(new Error('Request timeout'));
        });
        req.end();
    });
}
// Load existing metadata
function loadMetadata() {
    if (fs_1.default.existsSync(METADATA_FILE)) {
        try {
            const content = fs_1.default.readFileSync(METADATA_FILE, 'utf8');
            return JSON.parse(content);
        }
        catch (error) {
            console.warn('⚠️  Could not load metadata, starting fresh');
            return {};
        }
    }
    return {};
}
// Save metadata
function saveMetadata(metadata) {
    fs_1.default.writeFileSync(METADATA_FILE, JSON.stringify(metadata, null, 2), 'utf8');
}
// Check if file needs update (simple check based on existence)
function needsUpdate(lawId, metadata) {
    const filename = `${lawId}.html`;
    const filePath = path_1.default.join(DATA_DIR, filename);
    // If file doesn't exist, definitely needs update
    if (!fs_1.default.existsSync(filePath)) {
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
            }
            else {
                console.log(`⏭️  Skipping: ${law.name} (up to date)`);
                results.push({ law: law.name, status: 'skipped' });
            }
        }
        catch (error) {
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
async function main() {
    try {
        await downloadLaws();
    }
    catch (error) {
        console.error('💥 Fatal error:', error);
        process.exit(1);
    }
}
// Run if this is the main module
if (require.main === module) {
    main();
}
