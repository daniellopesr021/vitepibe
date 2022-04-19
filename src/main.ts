import App from './App.vue';
import { createApp } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';
import { setupLayouts } from 'virtual:generated-layouts';
import generatedRoutes from 'virtual:generated-pages';

import 'uno.css';
import '@/styles/reset.css';

const app = createApp(App);

const routes = setupLayouts(generatedRoutes);
const router = createRouter({ history: createWebHistory(), routes });
app.use(router);

Object.values(import.meta.globEager('./plugins/*.ts')).map((plugin) =>
  plugin.install?.({ app, router, routes }),
);

app.mount('#app');
