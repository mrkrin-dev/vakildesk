import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import React from 'react';
import { renderToString } from 'react-dom/server';
import App from '../src/App';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const distDir = path.resolve(__dirname, '../dist');
const indexPath = path.join(distDir, 'index.html');

if (!fs.existsSync(indexPath)) {
  console.error('dist/index.html not found, cannot prerender');
  process.exit(1);
}

const template = fs.readFileSync(indexPath, 'utf8');
const appHtml = renderToString(React.createElement(App));

const finalHtml = template.replace(
  /<div id="root">[\s\S]*?<\/div>/,
  `<div id="root">${appHtml}</div>`
);

fs.writeFileSync(indexPath, finalHtml, 'utf8');
console.log('Successfully prerendered App into dist/index.html!');
