import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { resolve } from 'path';

const basePath = process.env.VITE_BASE_PATH || '/';

export default defineConfig({
  plugins: [react()],
  base: basePath,
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        agenda: resolve(__dirname, 'agenda/index.html'),
      },
    },
  },
});
