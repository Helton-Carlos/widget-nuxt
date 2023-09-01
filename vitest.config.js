import { defineConfig } from 'vite'
import { VitePWA } from 'vite-plugin-pwa'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  plugins: [
    vue(),    
    VitePWA({
      registerType: 'autoUpdate',
      workbox: {
        globPatterns: ['**/*.{js,css,html,ico,png,svg}']
      },
      manifest: {
        name: 'Widget Nuxt',
        short_name: 'WidgetNuxt',
        description: 'Widget Nuxt projeto de estudo com nuxt3. Vue3, Nuxt3, Typescript, Tailwind e bibliotecas adicionais.',
        theme_color: '#ffffff',
        lang: 'pt-BR',
        start_url: '/',
        icons: [
          {
            src: '/favicon-16x16.png',
            sizes: '16x16',
            type: 'image/png',
          },
          {
            src: '/favicon-32x32.png',
            sizes: '32x32',
            type: 'image/png',
          },
          {
            src: '/android-chrome-48x48.png',
            sizes: '48x48',
            type: 'image/png',
          },
          {
            src: '/apple-touch-icon.png',
            sizes: '48x48',
            type: 'image/png',
          },
          {
            src: '/mstile-150x150.png',
            sizes: '150x150',
            type: 'image/png',
            purpose: 'maskable',
          },
        ],
      }
    })
  ],
  test: {
    globals: true,
    environment: 'jsdom',
    coverage: {
      provider: 'istanbul'
    },
  },
})