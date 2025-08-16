import { fileURLToPath, URL } from 'node:url'
import tailwindcss from '@tailwindcss/vite'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueDevTools from 'vite-plugin-vue-devtools'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    vueDevTools(),
       tailwindcss(),
  ],
  publicDir: 'public',
  base: '/save-the-children-new/',
  build: {
    assetsInclude: ['**/*.webp', '**/*.svg', '**/*.png', '**/*.jpg', '**/*.jpeg' ],
    outDir: 'dist',
    
  },
  
  
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    },
  },
})
