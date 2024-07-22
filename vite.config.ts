import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import { fileURLToPath, URL } from 'node:url'
import path from 'node:path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    vueJsx({
      babelPlugins: [
        ['@babel/plugin-proposal-decorators', { legacy: true }],
        ['@babel/plugin-transform-flow-strip-types'],
        ['@babel/plugin-proposal-class-properties', { loose: true }]
      ],
    }),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
      '~bootstrap': path.resolve(__dirname, 'node_modules/bootstrap')
    }
  },
  css: {
    preprocessorOptions: {
      scss: {
        quietDeps: true
      }
    }
  },
  server: {
    host: 'localhost',
    port: 3000,
  },
})
