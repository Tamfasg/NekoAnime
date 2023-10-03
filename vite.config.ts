import { UserConfig, defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  server: {
    middleware: [
      (req, res, next) => {
        if (req.url && req.url.endsWith('.vtt')) {
          res.setHeader('Content-Type', 'text/vtt');
        }
        next();
      }
    ]
  },
  plugins: [react()],
  base: '/NekoAnime/'
} as UserConfig);

