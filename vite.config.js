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
        'styled-components', 
        'lucide-react', 
        /^react-bootstrap.*/, 
        /^@fortawesome.*/, 
      ],
      output: {
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM',
          'styled-components': 'styled',
          'lucide-react': 'LucideReact',
          'react-bootstrap': 'ReactBootstrap',
          'react-bootstrap/Card': 'ReactBootstrap.Card',
          'react-bootstrap/ListGroup': 'ReactBootstrap.ListGroup',
          'react-bootstrap/esm/Row': 'ReactBootstrap.Row',
          'react-bootstrap/esm/Col': 'ReactBootstrap.Col',
          '@fortawesome/react-fontawesome': 'FontAwesomeIcon',
          '@fortawesome/free-solid-svg-icons': 'FreeSolidSvgIcons'
        }
      }
    }
  }
});









