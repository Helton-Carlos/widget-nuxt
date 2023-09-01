import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { VitePWA as PWA } from 'vite-plugin-pwa';

export default defineConfig({
  plugins: [
    vue(),    
    PWA({
      workbox: {
        globPatterns: [
          '**/*.{js,css,html,png,svg,mp3}',
        ],
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