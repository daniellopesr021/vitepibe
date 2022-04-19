import Vue from '@vitejs/plugin-vue';
import { fileURLToPath, URL } from 'url';
import { defineConfig } from 'vite';
import AutoImport from 'unplugin-auto-import/vite';
import Pages from 'vite-plugin-pages';
import Components from 'unplugin-vue-components/vite';
import Layouts from 'vite-plugin-vue-layouts';
import Unocss from 'unocss/vite';
import Inspect from 'vite-plugin-inspect';
import transformerDirective from '@unocss/transformer-directives';

export default defineConfig({
  plugins: [
    Vue({
      include: [/\.vue$/],
    }),

    AutoImport({
      imports: ['vue', '@vueuse/head', '@vueuse/core', 'vue-router'],
      dts: '@types/auto-imports.d.ts',
    }),

    Layouts({
      layoutsDirs: 'src/layouts',
      defaultLayout: 'default',
    }),

    Unocss({
      transformers: [transformerDirective()],
    }),

    Pages({
      extensions: ['vue'],
    }),

    Components({
      extensions: ['vue'],
      include: [/\.vue$/, /\.vue\?vue/],
      dirs: ['src/components', 'src/widgets'],
      dts: '@types/components.d.ts',
      directoryAsNamespace: true,
    }),

    Inspect(),
  ],

  test: {
    include: ['tests/**/*.spec.ts'],
    environment: 'jsdom',
    deps: {
      inline: ['@vue', '@vueuse', 'vue-demi'],
    },
  },

  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
});
