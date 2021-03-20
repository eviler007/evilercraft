import { createRouter, createWebHistory } from 'vue-router';
import routes from './routes';

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

router.afterEach((to, from, next) => {
  // 为每个路由设置title
  if (to.meta.title) {
    document.title = to.meta.title;
  }
  if (next && typeof next === 'function') { // 防止切换到当前路由报错
    next();
  }
});

export default router;
