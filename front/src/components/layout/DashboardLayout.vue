<script setup lang="ts">
import { ref, computed } from 'vue'
import AppSidebar, { type SidebarLink } from '@/components/layout/AppSidebar.vue'
import AppHeader from '@/components/layout/AppHeader.vue'

// Здесь в реальном приложении вы получите роль из вашего auth-стейта (Pinia/Vuex)
const userRole = ref<'admin' | 'student' | 'teacher'>('admin')

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
  if (userRole.value === 'admin') return adminLinks
  if (userRole.value === 'teacher') return teacherLinks
  return studentLinks
})

const bottomLinks: SidebarLink[] = [{ name: 'Настройки системы', path: '/settings', icon: 'tune' }]

const handleLogout = () => {
  console.log('Выход из системы')
  // Очистка localStorage и redirect на /login
}
</script>

<template>
  <div class="min-h-screen bg-surface">
    <AppSidebar
      :portal-name="
        userRole === 'admin'
          ? 'ADMIN PORTAL'
          : userRole === 'teacher'
            ? 'TEACHER PORTAL'
            : 'STUDENT PORTAL'
      "
      :links="currentLinks"
      :bottom-links="bottomLinks"
      @logout="handleLogout"
    />

    <div class="pl-72">
      <AppHeader
        user-name="Александр В."
        :user-role-label="userRole === 'admin' ? 'Главный администратор' : 'Ученик'"
      >
        <template #role-badge v-if="userRole === 'admin'">
          <div
            class="hidden sm:flex items-center gap-1 bg-primary-fixed px-4 py-1.5 rounded-full shadow-[0_2px_0_0_#c2c1ff]"
          >
            <span class="material-symbols-outlined text-primary text-[18px]">shield_person</span>
            <span
              class="font-label-sm text-label-sm text-on-primary-fixed font-bold uppercase tracking-wider"
              >Режим администратора</span
            >
          </div>
        </template>
      </AppHeader>

      <!-- Главная рабочая область контента -->
      <main class="relative pt-20 w-full min-h-screen px-6 py-6">
        <slot></slot>
      </main>
    </div>
  </div>
</template>
