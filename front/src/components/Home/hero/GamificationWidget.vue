<script setup lang="ts">
import { computed } from 'vue'

const props = withDefaults(
  defineProps<{
    streak?: number
    gems?: number
    earnedXp?: number
    level?: number
    league?: string
    currentXp?: number
    maxXp?: number
    mascotSrc?: string
    dailyTaskTitle?: string
    dailyTaskDesc?: string
  }>(),
  {
    streak: 14,
    gems: 1420,
    earnedXp: 50,
    level: 7,
    league: 'Изумрудная Лига',
    currentXp: 320,
    maxXp: 400,
    mascotSrc:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuBIJFmicqpWEnFbCraHDPfc6BK3j6wALHLqj7Fx0k5t3qC-qrGF2FqzBWMjDY4M-W_3v6KLJ0fXyvzJGYNqBXusObBDjK4R0XKmMHCmTpMhpSn9qTPeU8bViWxv6glG110TEbTzr85B_7bGil7GeenBZ-8wSRrctc3JLqbG7k6Tt6TWSp0eZcGNWBwc-ZKdmknRmjAaRYqCFxyjYzkQL6Y0klUN4owGYC_VProRj_p8Y-rqNqq3uDEASg',
    dailyTaskTitle: 'Задание дня',
    dailyTaskDesc: '3 урока грамматики',
  },
)

const progressPercentage = computed(() => {
  return Math.min(100, Math.max(0, (props.currentXp / props.maxXp) * 100))
})
</script>

<template>
  <div class="relative">
    <!-- Свечение на фоне -->
    <div
      class="absolute -top-6 -right-6 w-32 h-32 bg-secondary-container/40 rounded-full blur-2xl pointer-events-none"
    ></div>

    <!-- Карточка -->
    <div
      class="relative bg-surface-container-lowest rounded-3xl p-6 shadow-[0_8px_0_0_#dce9ff] flex flex-col gap-5"
    >
      <!-- Верхняя панель: Стрик и Валюта -->
      <div class="flex items-center justify-between gap-3">
        <div
          class="flex items-center gap-2 px-4 py-2 rounded-2xl bg-[#fff7ed] shadow-[0_3px_0_0_#fed7aa]"
        >
          <span class="material-symbols-outlined text-[#ea580c] text-[22px]"
            >local_fire_department</span
          >
          <div class="flex flex-col">
            <span class="font-label-sm text-label-sm text-[#9a3412] uppercase tracking-wider"
              >Стрик</span
            >
            <span class="font-headline-sm text-headline-sm text-[#c2410c] leading-none"
              >{{ streak }} дней!</span
            >
          </div>
        </div>

        <div class="flex items-center gap-2">
          <div
            class="flex items-center gap-1.5 px-3.5 py-2 rounded-2xl bg-[#f0f9ff] shadow-[0_3px_0_0_#bae6fd]"
          >
            <span class="material-symbols-outlined text-[#0284c7] text-[20px]">diamond</span>
            <span class="font-headline-sm text-headline-sm text-[#0369a1]">{{
              gems.toLocaleString()
            }}</span>
          </div>
          <div
            class="flex items-center gap-1.5 px-3 py-2 rounded-2xl bg-[#fdf4ff] shadow-[0_3px_0_0_#f5d0fe]"
          >
            <span class="material-symbols-outlined text-[#a855f7] text-[20px]">bolt</span>
            <span class="font-headline-sm text-headline-sm text-[#7e22ce]">+{{ earnedXp }} XP</span>
          </div>
        </div>
      </div>

      <!-- Центральный визуал маскота -->
      <div
        class="relative w-full h-56 rounded-2xl overflow-hidden bg-gradient-to-b from-surface-container-high to-surface-container-low flex items-center justify-center p-4"
      >
        <img class="w-full h-full object-contain drop-shadow-lg" :src="mascotSrc" alt="Mascot" />

        <!-- Выполненное задание -->
        <div
          class="absolute bottom-3 left-3 right-3 bg-surface-container-lowest/95 backdrop-blur-md px-4 py-2.5 rounded-2xl shadow-md flex items-center justify-between"
        >
          <div class="flex items-center gap-2.5">
            <div
              class="w-8 h-8 rounded-xl bg-[#22c55e] text-white flex items-center justify-center font-bold shadow-[0_2px_0_0_#15803d]"
            >
              ✓
            </div>
            <div>
              <div class="font-label-sm text-[11px] text-on-surface-variant uppercase">
                {{ dailyTaskTitle }}
              </div>
              <div class="font-headline-sm text-body-sm text-on-surface">{{ dailyTaskDesc }}</div>
            </div>
          </div>
          <span class="font-label-sm text-label-sm text-[#16a34a] font-bold">100% Готово</span>
        </div>
      </div>

      <!-- Прогресс XP -->
      <div class="flex flex-col gap-2">
        <div class="flex justify-between items-center text-sm">
          <span class="font-label-md text-label-md text-on-surface"
            >Уровень {{ level }}: {{ league }}</span
          >
          <span class="font-headline-sm text-headline-sm text-primary"
            >{{ currentXp }} / {{ maxXp }} XP</span
          >
        </div>
        <div
          class="h-4 w-full bg-surface-container-high rounded-full overflow-hidden p-0.5 shadow-inner"
        >
          <div
            class="h-full bg-gradient-to-r from-primary to-[#22c55e] rounded-full relative"
            :style="{ width: `${progressPercentage}%` }"
          >
            <div class="absolute inset-x-0 top-0 h-1 bg-white/40 rounded-full"></div>
          </div>
        </div>
      </div>

      <!-- Кнопка действия -->
      <button
        class="w-full py-3 rounded-2xl bg-primary text-white font-label-md text-label-md uppercase tracking-wider shadow-[0_4px_0_0_#3631b4] hover:bg-primary-container active:translate-y-1 active:shadow-[0_1px_0_0_#3631b4] transition-all flex items-center justify-center gap-2"
      >
        <span class="material-symbols-outlined text-[20px]">sports_esports</span>
        <span>Продолжить квест #4</span>
      </button>
    </div>
  </div>
</template>
