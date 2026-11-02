import path from 'path';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';
import { defineConfig, loadEnv } from 'vite';

export default defineConfig(({ mode }) => {
  const workspaceRoot = path.resolve(import.meta.dirname, '../..');
  const env = loadEnv(mode, workspaceRoot, '');
  const basePath = env.BASE_PATH || process.env.BASE_PATH || '/';
  const rawPort = env.PORT || process.env.PORT || '5173';
  const port = Number(rawPort);

  if (!Number.isFinite(port) || port <= 0) {
    throw new Error(`Invalid PORT value: "${rawPort}"`);
  }

  return {
    base: basePath.endsWith('/') ? basePath : `${basePath}/`,
    plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      '@': path.resolve(import.meta.dirname, 'src'),
    },
    dedupe: ['react', 'react-dom'],
  },
  root: path.resolve(import.meta.dirname),
  build: {
    outDir: path.resolve(import.meta.dirname, 'dist/public'),
    emptyOutDir: true,
  },
  server: {
    port,
    strictPort: true,
    host: '0.0.0.0',
    allowedHosts: true,
    fs: {
      strict: true,
    },
  },
  preview: {
    port,
    host: '0.0.0.0',
    allowedHosts: true,
  },
  };
});
