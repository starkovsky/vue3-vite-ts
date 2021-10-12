import path from 'path';

import vue from '@vitejs/plugin-vue';
import { visualizer } from 'rollup-plugin-visualizer';
import { defineConfig } from 'vite';
import VitePluginHtmlEnv from 'vite-plugin-html-env';
import viteSvgIcons from 'vite-plugin-svg-icons';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    viteSvgIcons({
      iconDirs: [path.resolve(process.cwd(), 'src/assets/icons')],
      symbolId: 'icon-[dir]-[name]',
    }),
    visualizer({
      filename: './tmp/bundle-visualizer.html',
    }),
    VitePluginHtmlEnv(),
  ],
  resolve: {
    alias: [{ find: '@', replacement: '/src' }],
  },
});
