import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  base: '/anglee-portfolio/',
  plugins: [react()], 
  base: '/anglee-portfolio/', //base: '/anglee-portfolio/',
})
