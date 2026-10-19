<script setup lang="ts">
import { computed } from 'vue'

const props = withDefaults(
  defineProps<{
    variant?: 'default' | 'modal'

    noPadding?: boolean
  }>(),
  {
    variant: 'default',
    noPadding: false,
  },
)

const panelClass = computed(() => {
  const base = 'bg-white rounded-3xl border-2 border-slate-200 flex flex-col transition-all'

  const padding = props.noPadding ? '' : props.variant === 'modal' ? 'p-7' : 'p-6 sm:p-10 md:p-12'

  if (props.variant === 'default') {
    return `${base} ${padding} w-full max-w-[880px] mx-auto shadow-[0_8px_0_#e2e8f0,0_18px_25px_rgba(0,0,0,0.04)]`
  }

  if (props.variant === 'modal') {
    return `${base} ${padding} max-w-sm w-full mx-auto shadow-[0_12px_0_#cbd5e1] text-center gap-5`
  }
})
</script>

<template>
  <div :class="panelClass">
    <slot />
  </div>
</template>
