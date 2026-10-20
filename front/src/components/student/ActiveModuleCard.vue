<script setup lang="ts">
defineProps<{
  language: string
  level: string
  moduleNum: number
  title: string
  description: string
  timeEst: string
  progress: number
  completedLessons: number
  totalLessons: number
}>()

const emit = defineEmits(['start', 'dictionary'])
</script>

<template>
  <div
    class="bg-white rounded-[2rem] p-6 sm:p-8 shadow-[0_8px_24px_rgba(79,70,229,0.06)] border border-slate-100 flex flex-col gap-6 relative overflow-hidden"
  >
    <div class="flex items-center justify-between">
      <div class="flex items-center gap-2">
        <span class="text-lg">🇪🇸</span>
        <span class="text-sm font-black text-slate-800">{{ language }}</span>
        <span class="text-slate-300">|</span>
        <span class="text-xs font-black text-primary uppercase">{{ level }}</span>
      </div>
      <div class="flex items-center gap-1.5 text-slate-500 font-bold text-sm">
        <span class="material-symbols-outlined text-[18px]">schedule</span>
        {{ timeEst }}
      </div>
    </div>

    <div class="flex items-center justify-between gap-4">
      <div class="flex flex-col gap-1.5 max-w-md">
        <span class="text-xs font-black text-primary uppercase tracking-wider"
          >Модуль {{ moduleNum }}</span
        >
        <h2 class="text-3xl font-black text-slate-800 tracking-tight">{{ title }}</h2>
        <p class="text-slate-600 font-medium leading-relaxed mt-1">{{ description }}</p>
      </div>
    </div>

    <div class="flex flex-col gap-2 mt-2">
      <div class="flex items-center justify-between text-sm font-bold">
        <span class="text-slate-600"
          >Прогресс модуля: {{ completedLessons }} из {{ totalLessons }} уроков</span
        >
        <span class="text-primary text-lg">{{ progress }}%</span>
      </div>
      <div class="w-full h-3 bg-slate-100 rounded-full overflow-hidden">
        <div
          class="h-full bg-primary rounded-full transition-all duration-500"
          :style="{ width: `${progress}%` }"
        ></div>
      </div>
    </div>

    <div class="flex flex-col sm:flex-row gap-3 pt-2">
      <button
        @click="emit('start')"
        class="flex-1 py-4 rounded-2xl bg-primary text-white font-bold text-sm shadow-[0_4px_0_0_#3631b4] hover:translate-y-0.5 hover:shadow-[0_2px_0_0_#3631b4] active:translate-y-1 active:shadow-none transition-all flex items-center justify-center gap-2"
      >
        <span class="material-symbols-outlined text-[20px]">play_circle</span>
        <span class="uppercase tracking-wider"
          >Продолжить урок <span class="opacity-80 ml-1">(+25 XP)</span></span
        >
      </button>
      <button
        @click="emit('dictionary')"
        class="px-6 py-4 rounded-2xl bg-slate-50 border border-slate-200 text-slate-700 font-bold text-sm hover:bg-slate-100 transition-all flex items-center justify-center gap-2 uppercase tracking-wider"
      >
        <span class="material-symbols-outlined text-[20px]">menu_book</span>
        Словарь темы
      </button>
    </div>
  </div>
</template>
