import { createApp } from 'vue';
import { START_LOCATION } from 'vue-router';

import { router } from './router';
import { store, key } from './store';

import App from '@/App.vue';

import 'vite-plugin-svg-icons/register';

router.beforeEach(async (to, from, next) => {
  if (from === START_LOCATION) {
    try {
    } catch (error) {}
  }
  next();
});

const app = createApp(App);

app.use(router);
app.use(store, key);

app.mount('#app');

export { app };
