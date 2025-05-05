import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'

export default defineConfig({
  base: '/', // Всегда используем абсолютные пути
  plugins: [vue()],
  server: {
    port: 8000,
    strictPort: true, // Не искать другие порты, если 8000 занят
  },
  build: {
    outDir: '../backend/public', // Куда собирать фронтенд
    emptyOutDir: true
  }
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src')
    }
  }
})
