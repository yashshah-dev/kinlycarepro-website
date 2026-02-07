import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  // Base path for GitHub Pages deployment
  // Uses VITE_BASE_URL env var if set (from GitHub Actions workflow)
  // Otherwise falls back to '/' for local development
  base: process.env.VITE_BASE_URL || (process.env.GITHUB_ACTIONS ? '/kinlycarepro-website/' : '/'),
})
