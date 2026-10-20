import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AuthView from '@/views/AuthView.vue'
import test from '@/views/test.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    // Направляем /login и /register на один и тот же компонент AuthView
    {
      path: '/login',
      name: 'login',
      component: AuthView,
    },
    {
      path: '/register',
      name: 'register',
      component: AuthView,
    },
    // Заглушка для личного кабинета (ленивая загрузка)
    {
      path: '/dashboard',
      name: 'dashboard',
      component: () => import('@/views/test.vue'), // Пока можно направить на test.vue
    },
    {
      path: '/test',
      name: 'test',
      component: test,
    },
    {
      path: '/admin/content',
      name: 'admin-content',

      component: () => import('@/views/ContentEditorView.vue'),
    },
    {
      path: '/profile',
      name: 'profile',
      component: () => import('@/views/ProfileView.vue'),
    },
  ],
})

export default router
