<script setup lang="ts">
import { computed } from 'vue'
import type { CSSProperties } from 'vue'

const props = withDefaults(
  defineProps<{
    disabled?: boolean
    loading?: boolean
    bgColor?: string
    hoverColor?: string
    borderColor?: string
    shadowColor?: string
    textColor?: string
  }>(),
  {
    disabled: false,
    loading: false,

    bgColor: '#58cc02',
    hoverColor: '#46a302',
    borderColor: '#3f8804',
    shadowColor: 'rgba(88,204,2,0.35)',
    textColor: '#ffffff',
  },
)

const buttonClass = computed(() => {
  const baseClasses = `
    transition-all duration-100 ease-in-out w-full sm:w-auto h-[56px] px-10 rounded-2xl border-b-[5px] 
    active:border-b-[1px] active:translate-y-[4px] font-black text-lg tracking-wide flex items-center 
    justify-center gap-3 cursor-pointer
    bg-[var(--btn-bg)] hover:bg-[var(--btn-hover)] border-[var(--btn-border)] 
    text-[var(--btn-text)] shadow-[0_6px_16px_var(--btn-shadow)]
  `
    .replace(/\s+/g, ' ')
    .trim()

  // Состояния загрузки или блокировки
  const stateClasses =
    props.disabled || props.loading
      ? 'opacity-60 cursor-not-allowed !translate-y-0 !shadow-none active:!border-b-[5px]'
      : ''

  return `${baseClasses} ${stateClasses}`
})

const customStyles = computed(
  () =>
    ({
      '--btn-bg': props.bgColor,
      '--btn-hover': props.hoverColor,
      '--btn-border': props.borderColor,
      '--btn-shadow': props.shadowColor,
      '--btn-text': props.textColor,
    }) as CSSProperties,
)
</script>

<template>
  <button :class="buttonClass" :style="customStyles" :disabled="disabled || loading" type="button">
    <svg
      v-if="loading"
      class="animate-spin h-5 w-5 shrink-0"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
    >
      <circle
        class="opacity-25"
        cx="12"
        cy="12"
        r="10"
        stroke="currentColor"
        stroke-width="4"
      ></circle>
      <path
        class="opacity-75"
        fill="currentColor"
        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
      ></path>
    </svg>

    <slot v-else />
  </button>
</template>
