import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';
import dns from 'dns';
import * as process from 'process';
import { createHtmlPlugin } from 'vite-plugin-html';

dns.setDefaultResultOrder('verbatim');

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd());
  return {
    plugins: [
      react(),
      createHtmlPlugin({
        minify: true,
        inject: {
          data: {
            clientId: env.VITE_NAVER_MAP_CLIENT_ID
          }
        }
      })
    ],
    server: {
      port: 3000 // port 번호는 원하는 대로 변경
    }
  };
});
