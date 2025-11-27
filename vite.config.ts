import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: '0.0.0.0', // Allow external connections for LocalTunnel
    port: 5173,
    strictPort: false, // Try next available port if 5173 is taken
    allowedHosts: [
      '.loca.lt', // Allow all LocalTunnel subdomains
      'localhost',
      '127.0.0.1',
    ],
  },
  preview: {
    host: '0.0.0.0', // Allow external connections for LocalTunnel
    port: 5175,
    strictPort: false,
    allowedHosts: [
      '.loca.lt', // Allow all LocalTunnel subdomains
      'localhost',
      '127.0.0.1',
    ],
  },
})
