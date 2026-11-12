import { fileURLToPath, URL } from 'node:url'
import { defineConfig, loadEnv } from 'vite'
import vue from '@vitejs/plugin-vue'
import vuetify from 'vite-plugin-vuetify'

export default defineConfig(({ mode }) => {
  // Vite only exposes VITE_* variables by default.
  // The empty prefix loads all variables so BASE_URL can be set in .env files or the shell.
  const env = loadEnv(mode, process.cwd(), '')

  return {
    base: env.BASE_URL || '/',
    plugins: [
      vue({
        template: {
          // Images are in public/ and templates use URLs relative to the page (e.g. "img/usgs-logo.png").
          // Without this setting, Vite tries to import those URLs as modules and the build fails.
          transformAssetUrls: false
        }
      }),
      // imports only the Vuetify components that the templates use
      vuetify({ autoImport: true })
    ],
    resolve: {
      alias: {
        '@': fileURLToPath(new URL('./src', import.meta.url))
      }
    },
    server: {
      port: 8080
    }
  }
})
