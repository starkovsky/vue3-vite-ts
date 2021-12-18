import { createPinia } from 'pinia';
import { createApp } from 'vue';
import { START_LOCATION } from 'vue-router';

import { router } from './router';

import App from '@/App.vue';

import 'vite-plugin-svg-icons/register';

router.beforeEach(async (to, from, next) => {
  if (from === START_LOCATION) {
    try {
    } catch (error) {}
  }
  next();
});

const pinia = createPinia();

const app = createApp(App);

app.use(router);
app.use(pinia);

app.mount('#app');

export { app };
