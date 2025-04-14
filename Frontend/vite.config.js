import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import path from 'path'

export default defineConfig({
  plugins: [
    react({
      include: "**/*.{jsx,js}",
      jsxRuntime: 'automatic'
    }),
    tailwindcss(),
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  server: {
    host: true,
    port: 5173,
    allowedHosts: ['fb23-103-36-44-30.ngrok-free.app'], // 👈 Add your Ngrok domain here
  },
})
