<script setup lang="ts">
import GamificationWidget from './GamificationWidget.vue'

const badges = [
  { icon: 'verified', color: 'text-[#f59e0b]', text: 'Сертификаты CEFR' },
  { icon: 'all_inclusive', color: 'text-[#0ea5e9]', text: 'Бесплатный базовый доступ' },
  { icon: 'psychology', color: 'text-[#8b5cf6]', text: 'ИИ-диалоги 24/7' },
]
</script>

<template>
  <section class="relative max-w-7xl mx-auto px-6 lg:px-12 pt-8 pb-20 lg:pt-14 lg:pb-28">
    <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
      <!-- Левая колонка: Текст и Кнопки -->
      <div class="lg:col-span-7 flex flex-col items-start gap-6">
        <!-- Социальное доказательство -->
        <div
          class="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-surface-container-high shadow-sm"
        >
          <span class="flex text-amber-500 text-sm">★ ★ ★ ★ ★</span>
          <span class="font-label-sm text-label-sm text-on-surface">4.9/5 рейтинг</span>
          <span class="w-1.5 h-1.5 rounded-full bg-outline-variant"></span>
          <span class="font-label-sm text-label-sm text-on-surface-variant"
            >Более 250,000 учеников</span
          >
        </div>

        <!-- Заголовок -->
        <h1
          class="font-headline-xl text-headline-xl lg:text-[48px] lg:leading-[56px] text-on-surface tracking-tight"
        >
          Учите иностранные языки
          <span
            class="text-primary underline decoration-secondary-container decoration-wavy decoration-2 underline-offset-8"
            >играя</span
          >. Без скучной зубрежки!
        </h1>

        <!-- Подзаголовок -->
        <p class="font-body-lg text-body-lg text-on-surface-variant max-w-2xl">
          Интерактивные микро-уроки по 5 минут в день, захватывающие турнирные лиги и чуткий
          ИИ-собеседник, который снимет языковой барьер с первого дня.
        </p>

        <!-- Кнопки действий (Заменены на router-link для работы без перезагрузки) -->
        <div
          class="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto pt-2"
        >
          <router-link
            to="/register"
            class="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-2xl bg-[#22c55e] text-white font-label-lg text-label-lg tracking-wide uppercase shadow-[0_5px_0_0_#15803d] hover:bg-[#16a34a] active:translate-y-1 active:shadow-[0_1px_0_0_#15803d] transition-all"
          >
            <span class="material-symbols-outlined text-[24px]">play_circle</span>
            <span>Начать бесплатно</span>
          </router-link>

          <router-link
            to="/login"
            class="inline-flex items-center justify-center gap-2 px-7 py-4 rounded-2xl bg-surface-container-lowest text-on-surface font-label-lg text-label-lg uppercase tracking-wide shadow-[0_4px_0_0_#cbd5e1] hover:bg-surface-container-low active:translate-y-1 active:shadow-[0_1px_0_0_#cbd5e1] transition-all"
          >
            <span class="material-symbols-outlined text-primary text-[22px]">login</span>
            <span>У меня уже есть аккаунт</span>
          </router-link>
        </div>

        <!-- Микро-бейнджи -->
        <div class="flex flex-wrap items-center gap-3 pt-3">
          <div
            v-for="badge in badges"
            :key="badge.text"
            class="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-surface-container-low text-on-surface shadow-sm"
          >
            <span :class="['material-symbols-outlined text-[18px]', badge.color]">{{
              badge.icon
            }}</span>
            <span class="font-label-sm text-label-sm">{{ badge.text }}</span>
          </div>
        </div>
      </div>

      <!-- Правая колонка: Вынесенный виджет геймификации -->
      <div class="lg:col-span-5">
        <GamificationWidget />
      </div>
    </div>
  </section>
</template>
