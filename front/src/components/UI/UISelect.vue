<script setup lang="ts">
defineProps<{
  modelValue: string
  options: string[]
}>()

defineEmits<{
  (e: 'update:modelValue', value: string): void
}>()
</script>

<template>
  <div class="relative w-full">
    <select
      :value="modelValue"
      @change="$emit('update:modelValue', ($event.target as HTMLSelectElement).value)"
      class="w-full appearance-none bg-slate-50 border border-slate-200 text-[#5856d6] font-black text-sm px-4 py-3 rounded-2xl outline-none focus:ring-2 focus:ring-[#5856d6]/20 transition-all cursor-pointer"
    >
      <option v-for="opt in options" :key="opt" :value="opt">{{ opt }}</option>
    </select>
    <span
      class="material-symbols-outlined absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none text-[20px]"
    >
      unfold_more
    </span>
  </div>
</template>
