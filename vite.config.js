import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default ({
  base: "/janotan-client/",
  plugins: [react()],
})
