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
    // Кабинет преподавателя
    {
      path: '/teacher/dashboard',
      name: 'teacher-dashboard',
      component: () => import('@/views/teacher/TeacherDashboardView.vue'),
    },
    {
      path: '/403',
      name: 'forbidden',
      component: () => import('@/views/403.vue'),
    },
    // Страница 404 (должна быть в самом конце списка)
    {
      path: '/:pathMatch(.*)*',
      name: 'not-found',
      component: () => import('@/views/NotFoundView.vue'),
    },
  ],
})

export default router
