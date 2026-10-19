<script setup lang="ts">
import { ref } from 'vue'

const email = ref('')

const handleStartQuest = () => {
  if (email.value) {
    console.log('Starting quest with email:', email.value)
    // Логика перехода к регистрации
  }
}
</script>

<template>
  <section class="max-w-7xl mx-auto px-6 lg:px-12 pb-24">
    <div
      class="relative bg-gradient-to-br from-primary via-primary-container to-[#3b82f6] rounded-[2.5rem] p-10 md:p-16 text-white overflow-hidden shadow-[0_12px_0_0_#2b2889]"
    >
      <!-- Floating Emojis -->
      <div
        class="absolute -top-6 -right-6 text-7xl select-none opacity-20 transform rotate-12 pointer-events-none"
      >
        🏆
      </div>
      <div
        class="absolute -bottom-6 -left-6 text-7xl select-none opacity-20 transform -rotate-12 pointer-events-none"
      >
        💎
      </div>
      <div
        class="absolute top-1/2 right-12 text-6xl select-none opacity-15 transform rotate-45 pointer-events-none hidden md:block"
      >
        🔥
      </div>

      <!-- Content -->
      <div class="relative z-10 max-w-2xl flex flex-col items-start gap-6">
        <div
          class="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/20 backdrop-blur-md text-white font-label-sm text-label-sm font-bold"
        >
          <span class="material-symbols-outlined text-[18px]">rocket_launch</span>
          <span>Старт за 60 секунд без кредитной карты</span>
        </div>

        <h2 class="font-headline-xl text-headline-xl text-white tracking-tight">
          Готовы сделать первый шаг к свободному языку?
        </h2>

        <p class="font-body-lg text-body-lg text-white/90">
          Присоединяйтесь к 250,000+ игрокам прямо сейчас. Пройдите короткий 2-минутный тест уровня
          и откройте первую главу приключения.
        </p>

        <!-- Form -->
        <form
          @submit.prevent="handleStartQuest"
          class="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 w-full max-w-lg pt-2"
        >
          <input
            v-model="email"
            type="email"
            required
            class="h-[54px] px-5 rounded-2xl bg-white text-on-surface font-body-md text-body-md outline-none placeholder:text-on-surface-variant/60 shadow-[inset_0_2px_0_0_#cbd5e1] focus:ring-4 focus:ring-white/30 flex-1"
            placeholder="Ваш адрес эл. почты..."
          />
          <button
            type="submit"
            class="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-2xl bg-[#22c55e] text-white font-label-lg text-label-lg uppercase tracking-wider shadow-[0_5px_0_0_#15803d] hover:bg-[#16a34a] active:translate-y-1 active:shadow-none transition-all shrink-0"
          >
            <span>Начать квест</span>
            <span class="material-symbols-outlined text-[20px]">arrow_forward</span>
          </button>
        </form>

        <!-- Checklist -->
        <div class="flex items-center gap-6 text-white/80 font-label-sm text-label-sm pt-2">
          <span class="flex items-center gap-1.5">
            <span class="material-symbols-outlined text-[16px]">check_circle</span>
            Всегда бесплатный план
          </span>
          <span class="flex items-center gap-1.5">
            <span class="material-symbols-outlined text-[16px]">check_circle</span>
            Синхронизация с телефоном
          </span>
        </div>
      </div>
    </div>
  </section>
</template>
