import { createApp } from 'vue';
import { router } from './router';
import { store, key } from './store';
import App from './App.vue';

const app = createApp(App);

app.use(router);
app.use(store, key);

app.mount('#app');

export { app };
