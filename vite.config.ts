import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'
import WindiCSS from 'vite-plugin-windicss'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), WindiCSS()],
  resolve: {
    alias: {
      '@': resolve(__dirname, './src'),
      '~': resolve(__dirname, './'),
      '~bootstrap': resolve(__dirname, './node_modules/bootstrap'),
      '~bootstrap-icons': resolve(__dirname, './node_modules/bootstrap-icons'),
      'api': resolve(__dirname, './src/api'),
      'assets': resolve(__dirname, './src/assets'),
      'components': resolve(__dirname, './src/components'),
      'config': resolve(__dirname, './src/config'),
      'icons': resolve(__dirname, './src/icons'),
      'router': resolve(__dirname, './src/router'),
      'store': resolve(__dirname, './src/store'),
      'styles': resolve(__dirname, './src/styles'),
      'utils': resolve(__dirname, './src/utils'),
      'pages': resolve(__dirname, './src/pages'),
      'views': resolve(__dirname, './src/views'),
    }
  }
})
