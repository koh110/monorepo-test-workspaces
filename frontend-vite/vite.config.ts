import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'
import path from 'node:path'

const dirname = path.dirname(new URL(import.meta.url).pathname)

export default defineConfig({
  plugins: [
    react(),
  ],
  build: {
    emptyOutDir: true,
    sourcemap: true,
    outDir: path.resolve(dirname, 'dist')
  },
  root: path.resolve(dirname, 'src'),
  server: {
    port: 8080,
    host: '0.0.0.0'
  }
})
