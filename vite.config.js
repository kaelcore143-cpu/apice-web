import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Para GitHub Pages con dominio personalizado, usar '/'
// Para github.io/TU_REPO/, cambiar a '/TU_REPO/'
export default defineConfig({
  plugins: [react()],
  base: '/',
})
