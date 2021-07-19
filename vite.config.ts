import { defineConfig } from 'vite'
import reactRefresh from '@vitejs/plugin-react-refresh'
const path = require('path')

export default defineConfig({
  resolve: {
    alias: [{ find: '@', replacement: path.resolve(__dirname, '/src') }]
  },
  plugins: [reactRefresh()]
})
