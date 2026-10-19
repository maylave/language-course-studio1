<script setup lang="ts">
import { computed } from 'vue'

const props = withDefaults(
  defineProps<{
    // Поддержка v-model
    modelValue?: string | number

    type?: string
    placeholder?: string
    disabled?: boolean

    // Передаем true или строку с текстом ошибки
    error?: boolean | string
  }>(),
  {
    modelValue: '',
    type: 'text',
    placeholder: 'Введите текст...',
    disabled: false,
    error: false,
  },
)

const emit = defineEmits<{
  (e: 'update:modelValue', value: string | number): void
}>()

const onInput = (event: Event) => {
  const target = event.target as HTMLInputElement
  emit('update:modelValue', target.value)
}

const inputClass = computed(() => {
  
  const base =
    'w-full px-5 py-4 rounded-2xl border-[3px] outline-none transition-all duration-150 font-extrabold text-[16px] text-slate-700 placeholder:text-slate-400 placeholder:font-bold'

 
  const normalState =
    'border-slate-200 bg-slate-50 hover:bg-white focus:bg-white focus:border-indigo-400 focus:shadow-[0_4px_0_#818cf8] focus:-translate-y-1'

  
  const errorState =
    'border-rose-300 bg-rose-50 text-rose-600 focus:border-rose-500 focus:shadow-[0_4px_0_#f43f5e] focus:-translate-y-1 placeholder:text-rose-300'

 
  const disabledState = 'opacity-60 cursor-not-allowed bg-slate-100 border-slate-200'

  if (props.disabled) return `${base} ${disabledState}`
  if (props.error) return `${base} ${errorState}`
  return `${base} ${normalState}`
})
</script>

<template>
  <div class="flex flex-col gap-1.5 w-full">
    <input
      :type="type"
      :value="modelValue"
      :placeholder="placeholder"
      :disabled="disabled"
      :class="inputClass"
      @input="onInput"
    />

    
    <span
      v-if="typeof error === 'string' && error"
      class="text-rose-500 text-sm font-extrabold pl-2 flex items-center gap-1"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="h-4 w-4"
        viewBox="0 0 20 20"
        fill="currentColor"
      >
        <path
          fill-rule="evenodd"
          d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z"
          clip-rule="evenodd"
        />
      </svg>
      {{ error }}
    </span>
  </div>
</template>
