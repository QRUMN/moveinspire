import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '')
  return {
    plugins: [react()],
    build: {
      outDir: 'dist',
      sourcemap: true,
      minify: 'esbuild',
      cssMinify: true,
    },
    server: {
      port: 3000,
      open: true,
    },
    define: {
      __APP_VERSION__: JSON.stringify(process.env.npm_package_version),
      // Expose env variables to client
      'process.env': Object.keys(env).reduce((prev, key) => {
        return {
          ...prev,
          [key]: JSON.stringify(env[key])
        }
      }, {})
    },
    optimizeDeps: {
      exclude: ['lucide-react'],
    },
  }
})
