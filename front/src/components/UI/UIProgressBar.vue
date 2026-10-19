<script setup lang="ts">
import { computed } from 'vue'

const props = withDefaults(
  defineProps<{
 
    progress: number

  
    variant?: 'emerald' | 'indigo' | 'rose' | 'amber'
  }>(),
  {
    progress: 0,
    variant: 'emerald',
  },
)


const clampedProgress = computed(() => {
  return Math.min(Math.max(props.progress, 0), 100)
})


const colorClasses = computed(() => {
  const schemes = {
    // Зеленый (как в Duolingo)
    emerald:
      'from-emerald-400 to-green-500 shadow-[inset_0_2px_0_rgba(255,255,255,0.4),0_2px_4px_rgba(16,185,129,0.3)]',

    // Синий
    indigo:
      'from-indigo-400 to-indigo-600 shadow-[inset_0_2px_0_rgba(255,255,255,0.4),0_2px_4px_rgba(79,70,229,0.3)]',

    // Красный
    rose: 'from-rose-400 to-rose-500 shadow-[inset_0_2px_0_rgba(255,255,255,0.4),0_2px_4px_rgba(244,63,94,0.3)]',

    // Желтый/Оранжевый
    amber:
      'from-amber-400 to-amber-500 shadow-[inset_0_2px_0_rgba(255,255,255,0.4),0_2px_4px_rgba(245,158,11,0.3)]',
  }
  return schemes[props.variant]
})
</script>

<template>

  <div
    class="relative w-full h-5 bg-slate-200/90 rounded-full border-2 border-slate-300 overflow-hidden p-0.5 shadow-[inset_0_2px_4px_rgba(0,0,0,0.1)] flex items-center"
  >

    <div
      class="h-full rounded-full relative transition-all duration-500 ease-out flex items-center justify-end pr-1.5 bg-gradient-to-r"
      :class="colorClasses"
      :style="{ width: `${clampedProgress}%` }"
    >
 
      <div
        class="h-1.5 w-full absolute top-0.5 inset-x-1 bg-white/30 rounded-full pointer-events-none"
      ></div>

  
      <span
        v-if="clampedProgress > 5"
        class="w-2 h-2 rounded-full bg-white/80 animate-pulse shrink-0"
      ></span>
    </div>
  </div>
</template>
