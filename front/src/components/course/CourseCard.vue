<script setup lang="ts">
import { computed } from 'vue'
import AppButton from '@/components/UI/UIButton.vue'

const props = withDefaults(
  defineProps<{
    title: string
    description: string
    /** Ссылка на картинку флага/иконки курса */
    iconSrc?: string
    iconAlt?: string
    /** Награда за курс; 0 или не задано — бейдж не показывается */
    xp?: number
    /** Например: 'A1 → C1' */
    levels?: string
    /** Число учеников: 140000 → '140k' (строка выводится как есть) */
    students?: number | string
    buttonText?: string
    loading?: boolean
    disabled?: boolean
  }>(),
  {
    iconSrc: undefined,
    iconAlt: '',
    xp: 0,
    levels: undefined,
    students: undefined,
    buttonText: 'Выбрать курс',
    loading: false,
    disabled: false,
  },
)

const emit = defineEmits<{
  (e: 'select'): void
}>()

const studentsLabel = computed(() => {
  const value = props.students
  if (value === undefined) return ''
  if (typeof value === 'string') return value
  if (value >= 1_000_000) return `${+(value / 1_000_000).toFixed(1)}M`
  if (value >= 1_000) return `${+(value / 1_000).toFixed(1)}k`
  return String(value)
})
</script>

<template>
  <article
    class="flex flex-col gap-4 p-6 rounded-[2rem] bg-surface-container-lowest shadow-[0_8px_24px_rgba(79,70,229,0.08)]"
  >
    <!-- Иконка + XP -->
    <div class="flex items-start justify-between gap-3">
      <div
        class="w-14 h-14 rounded-2xl bg-surface-container-low flex items-center justify-center overflow-hidden"
      >
        <slot name="icon">
          <img v-if="iconSrc" :src="iconSrc" :alt="iconAlt" class="w-8 h-8 object-contain" />
        </slot>
      </div>

      <span
        v-if="xp > 0"
        class="px-3 py-1 rounded-full bg-[#dcfce7] text-[#15803d] text-xs font-extrabold tracking-wide"
      >
        +{{ xp }} XP
      </span>
    </div>

    <!-- Текст -->
    <div class="flex flex-col gap-2">
      <h3 class="text-2xl font-extrabold tracking-tight text-on-surface">{{ title }}</h3>
      <p class="text-base font-medium text-on-surface-variant">{{ description }}</p>
    </div>

    <!-- Мета-информация -->
    <div
      v-if="levels || studentsLabel"
      class="flex items-center justify-between gap-3 pt-4 mt-auto border-t border-surface-container-highest text-xs font-bold text-on-surface-variant"
    >
      <span v-if="levels">Уровни: {{ levels }}</span>
      <span v-if="studentsLabel">{{ studentsLabel }} учеников</span>
    </div>

    <!-- Дополнительный контент (прогресс, теги и т. п.) -->
    <slot />

    <div class="[&>button]:w-full">
      <AppButton
        bg-color="#22c55e"
        hover-color="#16a34a"
        border-color="#15803d"
        shadow-color="rgba(34,197,94,0.35)"
        :loading="loading"
        :disabled="disabled"
        @click="emit('select')"
      >
        {{ buttonText }}
      </AppButton>
    </div>
  </article>
</template>
