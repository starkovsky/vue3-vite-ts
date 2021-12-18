import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: () => import('./views/HomePage.vue'),
  },
  {
    path: '/about',
    component: () => import('./views/AboutPage.vue'),
  },
];

const history = createWebHistory();

const router = createRouter({
  history,
  routes,
});

export { router };
