// vite.config.ts
import { defineConfig } from 'vite';
import { tanstackRouter } from '@tanstack/router-plugin/vite';
import react from '@vitejs/plugin-react';
import * as path from 'path'; 
import url from 'node:url'
const _dirname = path.dirname(url.fileURLToPath(import.meta.url))
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    // Please make sure that '@tanstack/router-plugin' is passed before '@vitejs/plugin-react'
    tanstackRouter({
      target: 'react',
      autoCodeSplitting: true,
    }),
    react(),
    // ...,
  ],
  resolve: {
    alias : [
      { find: '@', replacement: path.resolve(__dirname, 'src') },
    ]
  }
});
