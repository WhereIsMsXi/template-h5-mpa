import { createApp } from 'vue';
import App from './App.vue';

function boot() {
  const app = createApp(App);

  app.mount('#app');
}

boot();
