import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AuthView from '@/views/AuthView.vue'
import { useAuthStore } from '@/stores/auth'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/login',
      name: 'login',
      component: AuthView,
      meta: { requiresGuest: true },
    },
    {
      path: '/register',
      name: 'register',
      component: AuthView,
      meta: { requiresGuest: true },
    },

    // --- СТУДЕНТ ---
    {
      path: '/dashboard',
      name: 'dashboard',
      component: () => import('@/views/student/DashboardView.vue'),
      meta: { requiresAuth: true, roles: ['student'] },
    },
    {
      path: '/league',
      name: 'league',
      component: () => import('@/views/student/LeagueView.vue'),
      meta: { requiresAuth: true, roles: ['student'] },
    },
    {
      path: '/ai-tutor',
      name: 'ai-tutor',
      component: () => import('@/views/student/AiTutorView.vue'),
      meta: { requiresAuth: true, roles: ['student'] },
    },
    {
      path: '/sessions',
      name: 'sessions',
      component: () => import('@/views/student/SessionsView.vue'),
      meta: { requiresAuth: true, roles: ['student'] },
    },

    // --- АДМИН ---
    {
      path: '/admin/content',
      name: 'admin-content',
      component: () => import('@/views/ContentEditorView.vue'),
      meta: { requiresAuth: true, roles: ['admin'] },
    },
    {
      path: '/admin/gamification',
      name: 'admin-gamification',
      component: () => import('@/views/test.vue'), // Используем заглушку
      meta: { requiresAuth: true, roles: ['admin'] },
    },
    {
      path: '/admin/users',
      name: 'admin-users',
      component: () => import('@/views/test.vue'), // Используем заглушку
      meta: { requiresAuth: true, roles: ['admin'] },
    },
    {
      path: '/admin/analytics',
      name: 'admin-analytics',
      component: () => import('@/views/test.vue'), // Используем заглушку
      meta: { requiresAuth: true, roles: ['admin'] },
    },

    // --- ПРЕПОДАВАТЕЛЬ ---

    {
      path: '/teacher/schedule',
      name: 'teacher-schedule',
      component: () => import('@/views/test.vue'), // Используем заглушку
      meta: { requiresAuth: true, roles: ['teacher'] },
    },
    {
      path: '/teacher/students',
      name: 'teacher-students',
      component: () => import('@/views/test.vue'), // Используем заглушку
      meta: { requiresAuth: true, roles: ['teacher'] },
    },

    // --- ОБЩИЕ ---
    {
      path: '/profile',
      name: 'profile',
      component: () => import('@/views/ProfileView.vue'),
      meta: { requiresAuth: true },
    },
    // Кабинет преподавателя
    {
      path: '/teacher/dashboard',
      name: 'teacher-dashboard',
      component: () => import('@/views/teacher/TeacherDashboardView.vue'),
    },
    {
      path: '/test',
      name: 'test',
      component: () => import('@/views/test.vue'),
    },

    // --- СИСТЕМНЫЕ (ОШИБКИ) ---
    {
      path: '/403',
      name: 'forbidden',
      component: () => import('@/views/403.vue'),
    },
    {
      path: '/:pathMatch(.*)*',
      name: 'not-found',
      component: () => import('@/views/NotFoundView.vue'),
    },
  ],
})

// Глобальная защита маршрутов
// Глобальная защита маршрутов
router.beforeEach((to, from, next) => {
  const authStore = useAuthStore()
  const isLoggedIn = authStore.isLoggedIn
  const userRole = authStore.user?.role

  if (to.meta.requiresAuth && !isLoggedIn) {
    return next('/login')
  }

  if (to.meta.requiresGuest && isLoggedIn) {
    if (userRole === 'admin') return next('/admin/content')
    if (userRole === 'teacher') return next('/teacher/grading')
    return next('/dashboard')
  }

  if (to.meta.roles && Array.isArray(to.meta.roles)) {
    // 👇 НОВОЕ УСЛОВИЕ: Админу можно всё (Superuser)
    if (userRole === 'admin') {
      return next() // Пропускаем без проверок
    }

    if (!userRole || !to.meta.roles.includes(userRole)) {
      if (userRole === 'teacher') return next('/teacher/grading')
      if (userRole === 'student') return next('/dashboard')
      return next('/403')
    }
  }

  next()
})
export default router
