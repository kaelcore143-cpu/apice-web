import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// GitHub Pages project site: /apice-web/
export default defineConfig({
  plugins: [react()],
  base: '/apice-web/',
})
