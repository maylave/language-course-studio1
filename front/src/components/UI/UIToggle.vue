<script setup lang="ts">
defineProps<{
  modelValue: boolean
}>()

const emit = defineEmits<{
  (e: 'update:modelValue', value: boolean): void
}>()
</script>

<template>
  <div
    @click="emit('update:modelValue', !modelValue)"
    class="w-12 h-6 rounded-full relative p-0.5 cursor-pointer transition-colors duration-200 ease-in-out"
    :class="modelValue ? 'bg-[#5856d6] shadow-[0_1px_0_0_#3631b4]' : 'bg-slate-300'"
  >
    <div
      class="w-5 h-5 bg-white rounded-full shadow-sm transition-transform duration-200 ease-in-out"
      :class="modelValue ? 'translate-x-6' : 'translate-x-0'"
    ></div>
  </div>
</template>
