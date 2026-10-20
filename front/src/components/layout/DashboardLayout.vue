<script setup lang="ts">
import { computed } from 'vue'
import { useRouter } from 'vue-router'
import { storeToRefs } from 'pinia'
import { useAuthStore } from '@/stores/auth'

import AppSidebar, { type SidebarLink } from '@/components/layout/AppSidebar.vue'
import AppHeader from '@/components/layout/AppHeader.vue'

const router = useRouter()
const authStore = useAuthStore()

// Извлекаем текущего пользователя из глобального стейта
const { user, userRoleLabel } = storeToRefs(authStore)

// Безопасное определение роли (если данных нет, ставим student по умолчанию)
const currentRole = computed(() => user.value?.role || 'student')

const adminLinks: SidebarLink[] = [
  { name: 'Редактор контента', path: '/admin/content', icon: 'edit_note' },
  { name: 'Геймификация & Экономика', path: '/admin/gamification', icon: 'token' },
  { name: 'Пользователи и тарифы', path: '/admin/users', icon: 'group' },
  { name: 'Аналитика платформы', path: '/admin/analytics', icon: 'monitoring' },
]

const studentLinks: SidebarLink[] = [
  { name: 'Мой путь', path: '/dashboard', icon: 'map' },
  { name: 'Турнирная лига', path: '/league', icon: 'emoji_events' },
  { name: 'Разговорный ИИ', path: '/ai-tutor', icon: 'psychology' },
  { name: 'Запись к учителю', path: '/sessions', icon: 'video_camera_front' },
]

const teacherLinks: SidebarLink[] = [
  { name: 'Расписание сессий', path: '/teacher/schedule', icon: 'calendar_month' },
  { name: 'Проверка заданий', path: '/teacher/grading', icon: 'fact_check' },
  { name: 'Статистика учеников', path: '/teacher/students', icon: 'insights' },
]

const currentLinks = computed(() => {
  if (currentRole.value === 'admin') return adminLinks
  if (currentRole.value === 'teacher') return teacherLinks
  return studentLinks
})

const bottomLinks: SidebarLink[] = [{ name: 'Настройки системы', path: '/settings', icon: 'tune' }]

const handleLogout = () => {
  authStore.logout()
  router.push('/login')
}
</script>

<template>
  <div class="min-h-screen bg-surface">
    <AppSidebar
      :portal-name="
        currentRole === 'admin'
          ? 'ADMIN PORTAL'
          : currentRole === 'teacher'
            ? 'TEACHER PORTAL'
            : 'STUDENT PORTAL'
      "
      :links="currentLinks"
      :bottom-links="bottomLinks"
      @logout="handleLogout"
    />

    <div class="pl-72">
      <!-- Передаем реальные данные пользователя из store -->
      <AppHeader :user-name="user?.name || 'Гость'" :user-role-label="userRoleLabel">
        <template #role-badge v-if="currentRole === 'admin'">
          <div
            class="hidden sm:flex items-center gap-1 bg-primary-fixed px-4 py-1.5 rounded-full shadow-[0_2px_0_0_#c2c1ff]"
          >
            <span class="material-symbols-outlined text-primary text-[18px]">shield_person</span>
            <span
              class="font-label-sm text-label-sm text-on-primary-fixed font-bold uppercase tracking-wider"
            >
              Режим администратора
            </span>
          </div>
        </template>
      </AppHeader>

      <!-- Главная рабочая область контента, сюда подставляются страницы из роутера -->
      <main class="relative pt-20 w-full min-h-screen px-6 py-6">
        <slot></slot>
      </main>
    </div>
  </div>
</template>
