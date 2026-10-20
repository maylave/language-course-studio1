<script setup lang="ts">
import { ref } from 'vue'

// Реактивное состояние для уведомления (toast)
const showToast = ref(true)

// Функция для скрытия уведомления
const dismissToast = () => {
  showToast.value = false
}
</script>

<template>
  <div class="bg-background font-body-md text-body-md text-on-surface min-h-screen flex flex-col justify-between selection:bg-primary-fixed selection:text-on-primary-fixed">
    
    <!-- Шапка страницы -->
    <header class="w-full pt-10 pb-4 flex flex-col items-center justify-center shrink-0">
      <router-link 
        to="/" 
        class="inline-flex items-center gap-2 px-6 py-2 rounded-full bg-surface-container-lowest shadow-[0_4px_0_0_#d3e4fe] transition-transform active:translate-y-[2px] active:shadow-[0_2px_0_0_#d3e4fe]"
      >
        <div class="w-9 h-9 rounded-xl bg-primary flex items-center justify-center shadow-[0_3px_0_0_#3631b4]">
          <span class="material-symbols-outlined text-on-primary text-[20px]">sports_esports</span>
        </div>
        <span class="font-headline-sm text-[18px] font-bold text-on-surface tracking-tight">SkillQuest</span>
      </router-link>
    </header>

    <!-- Основной контент -->
    <main class="w-full flex-1 flex flex-col items-center justify-center px-4 py-6">
      <div class="flex flex-col w-full items-center justify-center py-4">
        
        <div class="relative w-full max-w-[620px] flex flex-col items-center">
          
          <!-- Уведомление с наградой (XP) с анимацией исчезновения -->
          <transition
            leave-active-class="transition-all duration-300 ease-in"
            leave-from-class="opacity-100 translate-y-0"
            leave-to-class="opacity-0 -translate-y-2"
          >
            <div 
              v-if="showToast" 
              class="mb-6 flex items-center gap-2 px-4 py-1.5 rounded-full bg-surface-container-lowest shadow-[0_4px_0_0_#d3e4fe]"
            >
              <div class="w-7 h-7 rounded-full bg-secondary-container flex items-center justify-center text-on-secondary-container">
                <span class="material-symbols-outlined text-[18px]" style="font-variation-settings: 'FILL' 1;">diamond</span>
              </div>
              <span class="text-[13px] font-bold text-on-surface">
                Пока вы здесь: <span class="text-secondary text-[18px] font-bold">+5 XP</span> за любопытство исследователя!
              </span>
              <button 
                aria-label="Закрыть уведомление" 
                class="ml-1 w-6 h-6 rounded-full flex items-center justify-center hover:bg-surface-variant transition-colors text-outline" 
                @click="dismissToast"
              >
                <span class="material-symbols-outlined text-[16px]">close</span>
              </button>
            </div>
          </transition>

          <!-- Главная 3D Карточка -->
          <div class="w-full bg-surface-container-lowest rounded-[2rem] p-6 sm:p-10 flex flex-col items-center text-center shadow-[0_8px_0_0_#d3e4fe] relative">
            
            <!-- Статус -->
            <div class="inline-flex items-center gap-1 px-4 py-1.5 rounded-full bg-surface-container-low shadow-[0_2px_0_0_#cbdbf5] mb-6">
              <span class="w-2 h-2 rounded-full bg-error animate-pulse"></span>
              <span class="text-[11px] font-bold text-on-surface-variant tracking-wider uppercase">Ошибка 404 • Маршрут потерян</span>
            </div>

            <!-- Визуал с маскотом и огромными цифрами 404 -->
            <div class="relative w-full max-w-[380px] h-52 sm:h-56 flex items-center justify-center mb-4">
              <!-- Цифры на фоне -->
              <div class="absolute inset-0 flex items-center justify-between select-none pointer-events-none px-4">
                <span class="text-[110px] sm:text-[130px] font-extrabold text-primary-fixed leading-none drop-shadow-[0_6px_0_#c2c1ff]">4</span>
                <div class="w-28 sm:w-36 h-28 sm:h-36 rounded-full bg-surface-container shadow-[inset_0_4px_0_0_#cbdbf5] opacity-60"></div>
                <span class="text-[110px] sm:text-[130px] font-extrabold text-primary-fixed leading-none drop-shadow-[0_6px_0_#c2c1ff]">4</span>
              </div>
              
              <!-- Маскот -->
              <div class="relative z-10 w-40 h-40 sm:w-44 sm:h-44 rounded-full overflow-hidden bg-surface-container-high shadow-[0_6px_0_0_#cbdbf5] p-1 flex items-center justify-center group transition-transform duration-300 hover:scale-105 active:scale-95">
                <img 
                  class="w-full h-full object-cover rounded-full select-none pointer-events-none" 
                  alt="Explorer mascot" 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBA-CA-38GvfnpR5lxG9_oNyireZEqVfhlfHF5yx_ADpQdkiy-Utp7ptuV2iACjL3Y9EHu1cLfkwVVXswjQfxUYFXvDT7Oa7Xc-StB-pnJ2zjtoSRT92n7uMqHxKqRqWWsX0Z3ezHXIoLGMK616qtn-iTeAA3pD1dg_J0KKXnf_ltSB-ZvARWYTJ3XHYk-xtYRcpE2wjEMBHnImQuklE2cQgPAu_YSNh4JbUJyba2H20JbI9kK2JBy_Hw"
                />
                <!-- Компас -->
                <div class="absolute -bottom-1 -right-1 w-11 h-11 rounded-[1rem] bg-primary flex items-center justify-center shadow-[0_3px_0_0_#3631b4] text-on-primary">
                  <span class="material-symbols-outlined text-[22px] animate-spin" style="animation-duration: 9s;">explore</span>
                </div>
              </div>

              <!-- Микро-элементы -->
              <div class="absolute top-2 left-6 px-2 py-1 rounded-full bg-surface-container-lowest shadow-[0_2px_0_0_#d3e4fe] flex items-center gap-1">
                <span class="material-symbols-outlined text-tertiary-container text-[16px]" style="font-variation-settings: 'FILL' 1;">local_fire_department</span>
                <span class="text-[11px] font-bold text-on-surface">Стрик сохранен</span>
              </div>
              <div class="absolute bottom-2 left-8 px-2 py-1 rounded-full bg-surface-container-lowest shadow-[0_2px_0_0_#d3e4fe] flex items-center gap-1">
                <span class="material-symbols-outlined text-error text-[16px]" style="font-variation-settings: 'FILL' 1;">favorite</span>
                <span class="text-[11px] font-bold text-on-surface">5 / 5 жизней</span>
              </div>
            </div>

            <!-- Заголовок -->
            <h1 class="text-[32px] leading-tight font-extrabold text-on-surface tracking-tight mb-2 max-w-lg">
              Ой! Кажется, этой тропы нет на карте знаний
            </h1>
            
            <!-- Описание -->
            <p class="text-[16px] font-medium text-on-surface-variant max-w-md mb-10">
              Страница была перемещена, удалена или вы свернули не на тот грамматический поворот. Не теряйте жизни — ваш игровой прогресс в безопасности!
            </p>

            <!-- Кнопки действий -->
            <div class="w-full max-w-md flex flex-col gap-2 mb-10">
              <router-link 
                to="/" 
                class="w-full min-h-[54px] px-6 py-2 rounded-[1rem] bg-primary text-on-primary text-[16px] font-bold uppercase tracking-wider flex items-center justify-center gap-2 shadow-[0_4px_0_0_#3631b4] transition-all active:translate-y-[4px] active:shadow-[0_0_0_0_#3631b4] hover:bg-primary-container"
              >
                <span class="material-symbols-outlined text-[20px]">cottage</span>
                <span>Вернуться на главную</span>
              </router-link>
              
              <router-link 
                to="/dashboard" 
                class="w-full min-h-[54px] px-6 py-2 rounded-[1rem] bg-surface-container text-on-surface text-[16px] font-bold uppercase tracking-wider flex items-center justify-center gap-2 shadow-[0_4px_0_0_#cbdbf5] transition-all active:translate-y-[4px] active:shadow-[0_0_0_0_#cbdbf5] hover:bg-surface-container-high"
              >
                <span class="material-symbols-outlined text-secondary text-[20px]">fitness_center</span>
                <span>Открыть тренажер уроков</span>
              </router-link>
            </div>

            <!-- Быстрые ссылки -->
            <div class="w-full pt-4 border-t-0 flex flex-col items-center">
              <span class="text-[11px] font-bold uppercase tracking-widest text-outline mb-2">Полезные переходы</span>
              <div class="flex flex-wrap items-center justify-center gap-2 sm:gap-4">
                <router-link to="/dashboard" class="inline-flex items-center gap-1 px-4 py-1 rounded-full bg-surface-container-low text-on-surface text-[13px] font-bold shadow-[0_2px_0_0_#d3e4fe] hover:bg-surface-container transition-all active:translate-y-[2px] active:shadow-[0_0_0_0_#d3e4fe]">
                  <span class="material-symbols-outlined text-[16px] text-primary">dashboard</span>
                  <span>Дашборд студента</span>
                </router-link>
                <router-link to="/test" class="inline-flex items-center gap-1 px-4 py-1 rounded-full bg-surface-container-low text-on-surface text-[13px] font-bold shadow-[0_2px_0_0_#d3e4fe] hover:bg-surface-container transition-all active:translate-y-[2px] active:shadow-[0_0_0_0_#d3e4fe]">
                  <span class="material-symbols-outlined text-[16px] text-tertiary-container">emoji_events</span>
                  <span>Рейтинг лиг</span>
                </router-link>
                <router-link to="/" class="inline-flex items-center gap-1 px-4 py-1 rounded-full bg-surface-container-low text-on-surface text-[13px] font-bold shadow-[0_2px_0_0_#d3e4fe] hover:bg-surface-container transition-all active:translate-y-[2px] active:shadow-[0_0_0_0_#d3e4fe]">
                  <span class="material-symbols-outlined text-[16px] text-secondary">support_agent</span>
                  <span>Служба поддержки</span>
                </router-link>
              </div>
            </div>
            
          </div>

          <!-- Нижняя карточка с подсказкой -->
          <div class="mt-6 w-full max-w-md bg-surface-container-low rounded-[1rem] px-4 py-2 flex items-center justify-between shadow-[0_2px_0_0_#cbdbf5]">
            <div class="flex items-center gap-2">
              <span class="material-symbols-outlined text-secondary text-[22px]">lightbulb</span>
              <span class="text-[14px] font-medium text-on-surface-variant">
                Подсказка: Проверьте адресную строку или воспользуйтесь картой квестов
              </span>
            </div>
            <router-link to="/" class="shrink-0 ml-2 text-primary text-[11px] font-bold hover:underline">
              Квесты →
            </router-link>
          </div>

        </div>
      </div>
    </main>

    <!-- Подвал (Футер) -->
    <footer class="w-full py-6 px-8 shrink-0">
      <div class="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-on-surface-variant text-[13px] font-bold">
        <div class="flex items-center gap-6">
          <router-link to="/" class="hover:text-primary transition-colors">Terms</router-link>
          <router-link to="/" class="hover:text-primary transition-colors">Privacy</router-link>
          <router-link to="/" class="hover:text-primary transition-colors">Help Center</router-link>
        </div>
        <div class="flex items-center gap-2 px-4 py-1.5 rounded-full bg-surface-container-lowest shadow-[0_2px_0_0_#d3e4fe]">
          <span class="material-symbols-outlined text-outline text-[16px]">language</span>
          <span class="text-on-surface text-[11px] font-bold uppercase tracking-wider">English (US)</span>
        </div>
      </div>
    </footer>

  </div>
</template>