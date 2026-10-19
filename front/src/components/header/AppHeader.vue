<script setup lang="ts">
import UIButton from '@/components/UI/UIButton.vue'

// Пропс для имитации авторизации (в реальном проекте берется из Vuex/Pinia/Router)
defineProps<{
  isLoggedIn?: boolean
}>()

const emit = defineEmits(['login', 'register', 'profile'])
</script>

<template>
  <header class="w-full bg-white border-b-2 border-slate-200 sticky top-0 z-40 shadow-sm">
    <div
      class="max-w-[1020px] mx-auto px-4 sm:px-6 h-[72px] flex items-center justify-between gap-4"
    >
      <!-- Логотип -->
      <a href="/" class="flex items-center gap-3 group">
        <div
          class="w-10 h-10 bg-indigo-500 rounded-xl shadow-[0_3px_0_#3730a3] flex items-center justify-center text-white font-black text-xl group-active:translate-y-1 group-active:shadow-[0_0px_0_#3730a3] transition-all"
        >
          L
        </div>
        <span class="font-black text-2xl text-slate-800 tracking-tight hidden sm:block"
          >LinguaPlay</span
        >
      </a>

      <!-- Правый блок: кнопки входа или профиль -->
      <div class="flex items-center gap-3">
        <template v-if="!isLoggedIn">
          <!-- Вторичная кнопка (Вход) -->
          <button
            class="hidden sm:block font-extrabold text-slate-500 hover:text-slate-800 hover:bg-slate-100 px-5 py-2.5 rounded-xl transition-colors"
            @click="emit('login')"
          >
            Войти
          </button>

          <!-- Главная кнопка (Регистрация) -->
          <UIButton variant="primary" class="!h-[44px] !text-sm !px-6" @click="emit('register')">
            Начать
          </UIButton>
        </template>

        <template v-else>
          <!-- Аватарка профиля (если авторизован) -->
          <button
            class="w-11 h-11 rounded-full border-2 border-slate-200 shadow-[0_3px_0_#cbd5e1] hover:border-indigo-400 active:translate-y-1 active:shadow-none transition-all overflow-hidden"
            @click="emit('profile')"
          >
            <img
              src="https://api.dicebear.com/7.x/avataaars/svg?seed=Felix"
              alt="Профиль"
              class="w-full h-full object-cover bg-indigo-50"
            />
          </button>
        </template>
      </div>
    </div>
  </header>
</template>
