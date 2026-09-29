/**
 * VELOOP REWARDS — PRODUCTION BUILD SCRIPT
 * Synchronously bundles and prepares the production distribution package (.dist)
 * with zero external dependencies using native Node.js fs and path.
 */

const fs = require('fs');
const path = require('path');

const ROOT_DIR = __dirname;
const DIST_DIR = path.join(ROOT_DIR, '.dist');

console.log('[BUILD] Starting VELOOP Rewards production build...');

// Ensure clean .dist directory
if (fs.existsSync(DIST_DIR)) {
  fs.rmSync(DIST_DIR, { recursive: true, force: true });
}
fs.mkdirSync(DIST_DIR, { recursive: true });

function copyRecursive(src, dest) {
  const stats = fs.statSync(src);
  if (stats.isDirectory()) {
    if (!fs.existsSync(dest)) {
      fs.mkdirSync(dest, { recursive: true });
    }
    const entries = fs.readdirSync(src);
    for (const entry of entries) {
      if (entry === '.git' || entry === 'node_modules' || entry === '.dist') continue;
      copyRecursive(path.join(src, entry), path.join(dest, entry));
    }
  } else {
    fs.copyFileSync(src, dest);
  }
}

// 1. Copy static core files
const filesToCopy = [
  'index.html',
  'login.html',
  'vercel.json',
  'package.json'
];

for (const file of filesToCopy) {
  const src = path.join(ROOT_DIR, file);
  const dest = path.join(DIST_DIR, file);
  if (fs.existsSync(src)) {
    fs.copyFileSync(src, dest);
    console.log(`[BUILD] Copied file: ${file}`);
  }
}

// 2. Copy asset and source directories
const dirsToCopy = ['assets', 'css', 'js'];
for (const dir of dirsToCopy) {
  const src = path.join(ROOT_DIR, dir);
  const dest = path.join(DIST_DIR, dir);
  if (fs.existsSync(src)) {
    copyRecursive(src, dest);
    console.log(`[BUILD] Copied directory: ${dir}/`);
  }
}

console.log('[BUILD] Production build created successfully in .dist/');
