import type { App } from 'vue';
import { createRouter, createWebHashHistory } from 'vue-router';
import page from './page';

const routes: any[] = [...page];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export function setupRouter(app: App) {
  app.use(router);
}

export default router;
