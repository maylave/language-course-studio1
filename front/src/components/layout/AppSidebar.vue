<script setup lang="ts">
import { computed } from 'vue'

export interface SidebarLink {
  name: string
  path: string
  icon: string
}

const props = defineProps<{
  portalName: string // Например, "ADMIN PORTAL" или "STUDENT PORTAL"
  links: SidebarLink[]
  bottomLinks?: SidebarLink[]
}>()
</script>

<template>
  <aside
    class="fixed left-0 top-0 h-full w-72 bg-surface-container-lowest z-50 flex flex-col justify-between py-6 px-4 shadow-[0_1px_8px_rgba(0,0,0,0.04)]"
  >
    <div class="flex flex-col gap-6">
      <!-- Логотип и роль -->
      <div class="flex items-center gap-2 px-1">
        <div
          class="w-11 h-11 rounded-2xl bg-primary-container flex items-center justify-center text-on-primary shadow-[0_4px_0_0_#3f3bbd]"
        >
          <span class="material-symbols-outlined text-[24px]">sports_esports</span>
        </div>
        <div class="flex flex-col">
          <span class="font-headline-sm text-headline-sm text-on-surface tracking-tight"
            >SkillQuest</span
          >
          <div class="flex items-center gap-1">
            <span
              class="bg-primary-fixed text-on-primary-fixed-variant px-1.5 py-0.5 rounded-full font-label-sm text-label-sm uppercase tracking-wider"
            >
              {{ portalName }}
            </span>
          </div>
        </div>
      </div>

      <!-- Основная навигация -->
      <nav class="flex flex-col gap-1">
        <router-link
          v-for="link in links"
          :key="link.path"
          :to="link.path"
          class="flex items-center gap-3 px-4 py-3 rounded-2xl font-label-lg text-label-lg transition-all"
          active-class="bg-primary-container text-on-primary font-bold shadow-[0_4px_0_0_#3f3bbd] translate-y-0"
          exact-active-class="bg-primary-container text-on-primary font-bold shadow-[0_4px_0_0_#3f3bbd] translate-y-0"
          :class="
            $route.path !== link.path
              ? 'text-on-surface-variant hover:bg-surface-container-high hover:text-on-surface'
              : ''
          "
        >
          <span class="material-symbols-outlined text-[22px]">{{ link.icon }}</span>
          <span>{{ link.name }}</span>
        </router-link>
      </nav>
    </div>

    <!-- Нижний блок (Настройки, Выход, Статус) -->
    <div class="flex flex-col gap-1 pt-4">
      <div
        class="p-4 rounded-2xl bg-surface-container-low flex items-center justify-between shadow-[0_2px_0_0_#dce9ff] mb-2"
      >
        <div class="flex items-center gap-1">
          <span class="w-2.5 h-2.5 rounded-full bg-secondary-container animate-pulse"></span>
          <span class="font-label-sm text-label-sm text-on-surface-variant">Сервер: 99.98% OK</span>
        </div>
        <span class="material-symbols-outlined text-secondary text-[18px]">verified</span>
      </div>

      <nav v-if="bottomLinks" class="flex flex-col gap-1">
        <router-link
          v-for="link in bottomLinks"
          :key="link.path"
          :to="link.path"
          class="flex items-center gap-3 px-4 py-2.5 rounded-2xl font-label-md text-label-md text-on-surface-variant hover:bg-surface-container-high hover:text-on-surface transition-all"
        >
          <span class="material-symbols-outlined text-[20px]">{{ link.icon }}</span>
          <span>{{ link.name }}</span>
        </router-link>

        <!-- Кнопка выхода -->
        <button
          class="flex items-center gap-3 px-4 py-2.5 rounded-2xl font-label-md text-label-md text-error hover:bg-error-container hover:text-on-error-container transition-all text-left"
          @click="$emit('logout')"
        >
          <span class="material-symbols-outlined text-[20px]">logout</span>
          <span>Выход</span>
        </button>
      </nav>
    </div>
  </aside>
</template>
