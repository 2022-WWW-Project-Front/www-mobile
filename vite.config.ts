import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';
import dns from 'dns';
import * as process from 'process';

dns.setDefaultResultOrder('verbatim');

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, 'env');

  const htmlPlugin = () => {
    return {
      name: 'html-transform',
      transformIndexHtml(html: string) {
        return html.replace(/<%(.*?)%/g, function (match, p1) {
          return env[p1];
        });
      }
    };
  };
  return {
    plugins: [react(), htmlPlugin()],
    server: {
      port: 3000 // port 번호는 원하는 대로 변경
    },
    define: {
      'process.env': loadEnv(mode, process.cwd(), '')
    }
  };
});
