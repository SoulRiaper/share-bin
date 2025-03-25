import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA } from 'vite-plugin-pwa'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(),
    VitePWA({
      injectRegister: false, // Отключаем авторегистрацию (делаем вручную)
      strategies: 'injectManifest', // Используем свой sw.js
      srcDir: 'src',               // Папка с sw.js
      filename: 'sw.js',           // Имя файла
    })
  ],
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          react: ['react', 'react-dom']
        }
      }
    },
    manifest: true,
  }
})
