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
    outDir: path.resolve(__dirname, '../backend/public'),
    emptyOutDir: true,
    assetsDir: 'assets', // Явно указываем папку для ассетов
    rollupOptions: {
      input: path.resolve(__dirname, 'index.html') // Можно упростить
    }
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src')
    }
  }
})