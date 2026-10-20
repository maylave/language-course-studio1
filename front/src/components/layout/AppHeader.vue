<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { storeToRefs } from 'pinia'
import { useAuthStore } from '@/stores/auth'

const router = useRouter()
const authStore = useAuthStore()

// Извлекаем реактивные данные из store
const { user, userRoleLabel, unreadNotifications } = storeToRefs(authStore)

const searchQuery = ref('')
const isProfileMenuOpen = ref(false)

const handleSearch = () => {
  if (!searchQuery.value) return
  console.log('Поиск по платформе:', searchQuery.value)
  // TODO: Вызов глобального поиска
  searchQuery.value = ''
}

const toggleProfileMenu = () => {
  isProfileMenuOpen.value = !isProfileMenuOpen.value
}

const closeProfileMenu = () => {
  isProfileMenuOpen.value = false
}

const handleLogout = () => {
  closeProfileMenu()
  authStore.logout() // Очищаем стейт в Pinia
  router.push('/login') // Перекидываем на страницу входа
}

const navigateTo = (path: string) => {
  closeProfileMenu()
  router.push(path)
}
</script>

<template>
  <header
    class="fixed top-0 left-72 right-0 h-20 bg-white/85 backdrop-blur-xl z-40 px-6 flex items-center justify-between shadow-[0_1px_8px_rgba(0,0,0,0.04)] border-b border-slate-100"
  >
    <!-- Поиск -->
    <div class="flex items-center gap-4">
      <div
        class="flex items-center gap-2 bg-slate-50 border border-slate-200 px-4 py-2.5 rounded-2xl shadow-inner w-72 focus-within:ring-2 focus-within:ring-primary/20 focus-within:bg-white transition-all"
      >
        <span class="material-symbols-outlined text-slate-400 text-[20px]">search</span>
        <input
          v-model="searchQuery"
          @keyup.enter="handleSearch"
          class="bg-transparent border-none outline-none font-bold text-sm text-slate-800 placeholder:text-slate-400 w-full"
          placeholder="Поиск по платформе..."
          type="text"
        />
      </div>
    </div>

    <!-- Уведомления и Профиль -->
    <div class="flex items-center gap-5" v-if="user">
      <slot name="role-badge"></slot>

      <!-- Кнопка Уведомлений -->
      <button
        class="w-10 h-10 rounded-full bg-slate-50 border border-slate-200 flex items-center justify-center text-slate-500 hover:bg-slate-100 hover:text-primary shadow-sm transition-all relative active:translate-y-0.5"
      >
        <span class="material-symbols-outlined text-[20px]">notifications</span>
        <span
          v-if="unreadNotifications > 0"
          class="absolute top-0 right-0 w-3.5 h-3.5 flex items-center justify-center rounded-full bg-rose-500 text-white text-[9px] font-black border-2 border-white"
        >
          {{ unreadNotifications > 9 ? '9+' : unreadNotifications }}
        </span>
      </button>

      <!-- Обертка профиля с выпадающим меню -->
      <div class="relative">
        <!-- Кликабельная зона профиля -->
        <div
          @click="toggleProfileMenu"
          class="flex items-center gap-3 pl-2 border-l border-slate-200 cursor-pointer group"
        >
          <div class="flex flex-col text-right hidden md:flex">
            <span
              class="text-sm font-black text-slate-800 leading-tight group-hover:text-primary transition-colors"
            >
              {{ user.name }}
            </span>
            <span class="text-xs font-bold text-slate-500">{{ userRoleLabel }}</span>
          </div>

          <div
            class="w-10 h-10 rounded-full bg-primary flex items-center justify-center shadow-[0_2px_0_0_#3631b4] text-white font-black overflow-hidden group-hover:translate-y-0.5 group-hover:shadow-none transition-all"
          >
            <img
              v-if="user.avatarUrl"
              :src="user.avatarUrl"
              alt="Аватар"
              class="w-full h-full object-cover"
            />
            <span v-else class="material-symbols-outlined text-[20px]">person</span>
          </div>
        </div>

        <!-- Невидимый слой для закрытия меню по клику вне его -->
        <div v-if="isProfileMenuOpen" class="fixed inset-0 z-40" @click="closeProfileMenu"></div>

        <!-- Само выпадающее меню -->
        <transition
          enter-active-class="transition ease-out duration-100"
          enter-from-class="transform opacity-0 scale-95 translate-y-[-10px]"
          enter-to-class="transform opacity-100 scale-100 translate-y-0"
          leave-active-class="transition ease-in duration-75"
          leave-from-class="transform opacity-100 scale-100 translate-y-0"
          leave-to-class="transform opacity-0 scale-95 translate-y-[-10px]"
        >
          <div
            v-if="isProfileMenuOpen"
            class="absolute right-0 top-full mt-3 w-56 bg-white rounded-2xl shadow-[0_8px_24px_rgba(0,0,0,0.12)] border border-slate-100 z-50 flex flex-col py-2 overflow-hidden"
          >
            <!-- Блок с почтой -->
            <div class="px-4 py-2 border-b border-slate-100 mb-1">
              <span class="block text-[11px] font-bold text-slate-400 uppercase tracking-wider"
                >Авторизован как</span
              >
              <span class="block text-sm font-black text-slate-800 truncate">{{ user.email }}</span>
            </div>

            <!-- Ссылки -->
            <button
              @click="navigateTo('/profile')"
              class="w-full flex items-center gap-3 px-4 py-2.5 text-slate-600 hover:bg-slate-50 hover:text-primary transition-colors text-left font-bold text-sm"
            >
              <span class="material-symbols-outlined text-[20px]">person</span>
              Мой профиль
            </button>
            <button
              @click="navigateTo('/settings')"
              class="w-full flex items-center gap-3 px-4 py-2.5 text-slate-600 hover:bg-slate-50 hover:text-primary transition-colors text-left font-bold text-sm"
            >
              <span class="material-symbols-outlined text-[20px]">settings</span>
              Настройки
            </button>

            <div class="border-t border-slate-100 my-1"></div>

            <!-- Выход -->
            <button
              @click="handleLogout"
              class="w-full flex items-center gap-3 px-4 py-2.5 text-rose-600 hover:bg-rose-50 transition-colors text-left font-bold text-sm"
            >
              <span class="material-symbols-outlined text-[20px]">logout</span>
              Выйти из аккаунта
            </button>
          </div>
        </transition>
      </div>
    </div>
  </header>
</template>
