import { fileURLToPath } from 'url';
import { dirname } from 'path';
import path from 'path';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      aos: path.resolve(__dirname, 'node_modules/aos'),
    },
  },
  server: {
    host: '0.0.0.0',
    port: 5173,
    warmup: {
      clientFiles: [
        './src/main.jsx', 
        './src/App.jsx',
        './src/components/Navbar.jsx',
        './src/components/Carousel/Carousel.jsx'
      ],
    },
    proxy: {
      '/_events/api': {
        target: 'https://relaticpanama.org',
        changeOrigin: true,
        secure: true,
      },
    },
  },
  build: {
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true,
      },
    },
    rollupOptions: {
      output: {
        manualChunks(id) {
          // Librerías principales
          if (id.includes('node_modules/react') || id.includes('node_modules/react-dom')) {
            return 'vendor_react';
          }
          if (id.includes('node_modules/lucide-react')) {
            return 'vendor_icons';
          }
          if (id.includes('node_modules/chart.js')) {
            return 'vendor_charts';
          }
          if (id.includes('node_modules/react-router')) {
            return 'vendor_router';
          }

          // Componentes grandes separados
          if (id.includes('components/CertificateGenerator')) return 'CertificateGenerator';
          if (id.includes('components/CertificateList')) return 'CertificateList';
          if (id.includes('components/BooksMetrics')) return 'BooksMetrics';
          if (id.includes('components/CoursesMetrics')) return 'CoursesMetrics';
          if (id.includes('components/JournalMetrics')) return 'JournalMetrics';
          if (id.includes('components/PostersMetrics')) return 'PostersMetrics';
          if (id.includes('components/UpcomingActivities')) return 'UpcomingActivities';
          if (id.includes('components/PreviousActivities')) return 'PreviousActivities';
          if (id.includes('components/CreateOrcidGuide')) return 'CreateOrcidGuide';
          if (id.includes('components/SearchPage')) return 'SearchPage';
          if (id.includes('components/Carousel')) return 'Carousel';
          if (id.includes('components/Navbar')) return 'Navbar';
          if (id.includes('components/Footer')) return 'Footer';
          if (id.includes('components/Agreements')) return 'Agreements';
        },
        chunkFileNames: 'assets/js/[name]-[hash].js',
        entryFileNames: 'assets/js/[name]-[hash].js',
        assetFileNames: 'assets/[ext]/[name]-[hash].[ext]',
      },
    },
    chunkSizeWarningLimit: 1000,
    assetsInlineLimit: 4096,
    sourcemap: false,
    cssCodeSplit: true,
    cssMinify: true,
  },
  optimizeDeps: {
    include: ['react', 'react-dom', 'react-router-dom', 'lucide-react'],
    exclude: ['@phosphor-icons/react'],
    esbuildOptions: {
      target: 'es2020',
    },
  },
  esbuild: {
    target: 'es2020',
    legalComments: 'none',
  },
});

