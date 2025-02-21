import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import compression from 'vite-plugin-compression2';
import commonjs from 'vite-plugin-commonjs';

export default defineConfig({
  plugins: [
    react(),
    compression({
      algorithm: 'gzip',
      threshold: 10240,
      deleteOriginalAssets: false
    }),
    commonjs()
  ],
  build: {
    rollupOptions: {
      treeshake: true,
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom']
        },
      },
    },
    minify: 'esbuild'
  }
});