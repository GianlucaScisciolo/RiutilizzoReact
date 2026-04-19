import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { resolve } from 'path';

export default defineConfig({
  plugins: [react()],
  
  build: {
    lib: {
      entry: resolve(__dirname, 'src/index.js'),
      name: 'RiutilizzoReact',
      fileName: (format) => `riutilizzoreact.${format}.js`,
      formats: ['es', 'umd']
    },
    
    rollupOptions: {
      external: [
        'react', 
        'react-dom', 
        'react/jsx-runtime', 
        'styled-components', 
        'lucide-react', 
        /^react-bootstrap.*/, 
        /^@fortawesome.*/, 
      ],
      output: {
        inlineDynamicImports: false, 
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM',
          'react/jsx-runtime': 'jsxRuntime', 
          'styled-components': 'styled',
          'lucide-react': 'LucideReact',
          'react-bootstrap': 'ReactBootstrap',
        }
      }
    }
  }
});









