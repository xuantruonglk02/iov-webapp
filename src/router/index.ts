import {createRouter, createWebHistory, type NavigationGuardWithThis} from 'vue-router';
import AuthMiddleware from './middlewares/authMiddleware';
import VueRouteMiddleware, {GLOBAL_MIDDLEWARE_NAME} from './middlewares/middleware';
import {routes} from './routes';

const router = createRouter({
  history: createWebHistory(import.meta.env.VITE_BASE_URL),
  routes: routes,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  scrollBehavior(_to, _from, _savedPosition) {
    return { top: 0 };
  },
});

router.beforeEach(
  VueRouteMiddleware({
    [GLOBAL_MIDDLEWARE_NAME]: AuthMiddleware,
  }) as NavigationGuardWithThis<unknown>,
);

export default router;
