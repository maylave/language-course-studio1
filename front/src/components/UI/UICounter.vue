<script setup lang="ts">
const props = withDefaults(
  defineProps<{
    modelValue: number
    min?: number
    max?: number
  }>(),
  {
    min: 1,
    max: 99,
  },
)

const emit = defineEmits<{
  (e: 'update:modelValue', value: number): void
}>()

const decrement = () => {
  if (props.modelValue > props.min) emit('update:modelValue', props.modelValue - 1)
}

const increment = () => {
  if (props.modelValue < props.max) emit('update:modelValue', props.modelValue + 1)
}
</script>

<template>
  <div class="flex items-center gap-3">
    <button
      @click="decrement"
      :disabled="modelValue <= min"
      class="w-8 h-8 rounded-full bg-white text-slate-700 flex items-center justify-center border border-slate-200 shadow-sm active:translate-y-0.5 disabled:opacity-50 disabled:cursor-not-allowed transition-all"
    >
      <span class="material-symbols-outlined text-[18px]">remove</span>
    </button>
    <span class="w-6 text-center text-lg font-black text-[#5856d6]">{{ modelValue }}</span>
    <button
      @click="increment"
      :disabled="modelValue >= max"
      class="w-8 h-8 rounded-full bg-white text-slate-700 flex items-center justify-center border border-slate-200 shadow-sm active:translate-y-0.5 disabled:opacity-50 disabled:cursor-not-allowed transition-all"
    >
      <span class="material-symbols-outlined text-[18px]">add</span>
    </button>
  </div>
</template>
