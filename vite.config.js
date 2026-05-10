import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { resolve } from 'path';

export default defineConfig(({ command }) => {
  // In modalità serve (dev), usa l'entry point di esempio
  if (command === 'serve') {
    return {
      plugins: [react()],
      root: 'demo', // cartella con index.html e main.jsx
      resolve: {
        alias: {
          'riutilizzo-react': resolve(__dirname, 'src'), // nome del pacchetto → src
        },
      },
    };
  }

  // In modalità build, genera la libreria
  return {
    plugins: [react()],
    build: {
      lib: {
        entry: resolve(__dirname, 'src/index.js'),
        name: 'RiutilizzoReact',
        fileName: (format) => `riutilizzoreact.${format}.js`,
        formats: ['es', 'umd'],
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
          globals: {
            react: 'React',
            'react-dom': 'ReactDOM',
            'react/jsx-runtime': 'jsxRuntime',
            'styled-components': 'styled',
            'lucide-react': 'LucideReact',
            'react-bootstrap': 'ReactBootstrap',
            'react-bootstrap/Card': 'ReactBootstrap.Card',
            'react-bootstrap/ListGroup': 'ReactBootstrap.ListGroup',
            'react-bootstrap/esm/Row': 'ReactBootstrap.Row',
            'react-bootstrap/esm/Col': 'ReactBootstrap.Col',
            '@fortawesome/react-fontawesome': 'FontAwesomeIcon',
            '@fortawesome/free-solid-svg-icons': 'FreeSolidSvgIcons',
          },
        },
      },
    },
  };
});   