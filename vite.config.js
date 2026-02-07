import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  // Base path for GitHub Pages deployment
  // Set to '/' for root domain or custom domain
  // Set to '/repository-name/' for GitHub Pages project site
  base: process.env.GITHUB_ACTIONS ? '/KinlyCarePro/' : '/',
})
