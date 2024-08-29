import { createApp } from 'vue';
import App from './App.vue';

import '@where_is_mr_li/style/dist/index.scss';
import './styles/index.scss';

function boot() {
  const app = createApp(App);

  app.mount('#app');
}

boot();
