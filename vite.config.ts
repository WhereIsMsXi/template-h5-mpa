import { defineConfig } from 'vite';
import { resolve } from 'node:path';
import { fileURLToPath, URL } from 'node:url';
import vue from '@vitejs/plugin-vue';

import AutoImport from 'unplugin-auto-import/vite';
import Components from 'unplugin-vue-components/vite';
import { VantResolver } from '@vant/auto-import-resolver';

import { currentEntry } from './config';

// @ts-ignore
import pxtovw from 'postcss-px-to-viewport';

const loderPxtovw = pxtovw({
  viewportWidth: 375,
  viewportUnit: 'vw',
});

// https://vitejs.dev/config/
export default (mode: any) => {
  const tempMode = mode.mode;
  return defineConfig({
    root: resolve(__dirname, currentEntry.src),
    build: {
      outDir: resolve(__dirname, currentEntry.name),
    },
    base: tempMode === 'development' ? './' : currentEntry.ftp,
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@import "@where_is_mr_li/style/dist/mixin.scss";',
        },
      },
      postcss: {
        plugins: [loderPxtovw],
      },
    },
    plugins: [
      vue(),
      AutoImport({
        resolvers: [VantResolver()],
      }),
      Components({
        resolvers: [VantResolver()],
      }),
    ],
    resolve: {
      alias: {
        '@': fileURLToPath(new URL('./src', import.meta.url)),
      },
    },
  });
};
