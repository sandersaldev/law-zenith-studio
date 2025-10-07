import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/advocacia1/',  // 👈 coloque o nome EXATO do repo aqui!
})

