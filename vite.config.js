import { defineConfig } from 'vite';
import { resolve } from 'path';
import fs from 'fs';

function copyDirectory(src, dest) {
  if (!fs.existsSync(src)) return;
  if (!fs.existsSync(dest)) fs.mkdirSync(dest, { recursive: true });
  const entries = fs.readdirSync(src, { withFileTypes: true });
  for (const entry of entries) {
    const srcPath = resolve(src, entry.name);
    const destPath = resolve(dest, entry.name);
    if (entry.isDirectory()) {
      copyDirectory(srcPath, destPath);
    } else {
      fs.copyFileSync(srcPath, destPath);
    }
  }
}

export default defineConfig({
  plugins: [
    {
      name: 'copy-static-assets',
      closeBundle() {
        copyDirectory(resolve(__dirname, 'js'), resolve(__dirname, 'dist/js'));
        copyDirectory(resolve(__dirname, 'css'), resolve(__dirname, 'dist/css'));
      },
    },
  ],
  build: {
    outDir: 'dist',
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        privacy: resolve(__dirname, 'privacy.html'),
        terms: resolve(__dirname, 'terms.html'),
      },
    },
  },
});
