import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    // In dev: redirect all unknown paths to index.html
    historyApiFallback: true,
  },
});
