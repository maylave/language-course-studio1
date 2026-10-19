<script setup lang="ts">
import { computed } from 'vue'
import AppButton from '@/components/UI/UIButton.vue'

const props = withDefaults(
  defineProps<{
    title: string
    description: string
    iconEmoji?: string
    iconSrc?: string
    iconAlt?: string
    xp?: number
    badge?: string
    levels?: string
    students?: number | string
    buttonText?: string
    loading?: boolean
    disabled?: boolean
  }>(),
  {
    iconEmoji: '',
    iconSrc: undefined,
    iconAlt: '',
    xp: 0,
    badge: '',
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
    class="flex flex-col h-full p-5 rounded-3xl bg-surface-container-lowest shadow-[0_6px_0_0_#dce9ff] hover:-translate-y-1 transition-all group"
  >
    <!-- Верхняя часть с flex-1 будет выталкивать подвал вниз -->
    <div class="flex-1 flex flex-col">
      <!-- Иконка + XP / Badge -->
      <div class="flex items-center justify-between mb-4">
        <span v-if="iconEmoji" class="text-4xl p-2 rounded-2xl bg-surface-container-low shadow-sm">
          {{ iconEmoji }}
        </span>
        <div
          v-else-if="iconSrc"
          class="w-14 h-14 rounded-2xl bg-surface-container-low flex items-center justify-center overflow-hidden"
        >
          <img :src="iconSrc" :alt="iconAlt" class="w-8 h-8 object-contain" />
        </div>

        <span
          v-if="badge"
          class="px-2.5 py-1 rounded-full bg-rose-100 text-rose-800 font-label-sm text-label-sm font-extrabold uppercase"
        >
          {{ badge }}
        </span>
        <span
          v-else-if="xp > 0"
          class="px-2.5 py-1 rounded-full bg-emerald-100 text-emerald-800 font-label-sm text-label-sm font-extrabold"
        >
          +{{ xp }} XP
        </span>
      </div>

      <!-- Текст -->
      <h3 class="font-headline-md text-headline-md text-on-surface">{{ title }}</h3>
      <p class="font-body-sm text-body-sm text-on-surface-variant mt-2 mb-4">{{ description }}</p>
    </div>

    <!-- Нижняя часть прижата к низу благодаря flex-1 у верхнего блока -->
    <div class="mt-auto">
      <!-- Мета-информация -->
      <div
        v-if="levels || studentsLabel"
        class="flex items-center justify-between gap-2 text-[13px] text-on-surface-variant pt-4 pb-4 border-t border-surface-container-high/60"
      >
        <!-- whitespace-nowrap запрещает перенос текста на новую строку -->
        <span v-if="levels" class="whitespace-nowrap"
          >Уровни: <strong>{{ levels }}</strong></span
        >
        <span v-if="studentsLabel" class="whitespace-nowrap text-right"
          >{{ studentsLabel }} учеников</span
        >
      </div>

      <div class="w-full">
        <AppButton
          class="w-full"
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
    </div>
  </article>
</template>
