import { createApp } from 'vue';
import App from './App.vue';

import { setupRouter } from './router';

import '@where_is_mr_li/style/dist/index.scss';
import './styles/index.scss';

function boot() {
  const app = createApp(App);

  setupRouter(app);

  app.mount('#app');
}

boot();
