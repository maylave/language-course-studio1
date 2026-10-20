<script setup lang="ts">
defineProps<{
  title: string
  value: string | number
  unit: string
  icon: string
  iconColorClass: string
  iconBgClass: string
  subText: string
  subValue: string
  subValueColorClass: string
  progressPercent: number
  progressColorClass: string
}>()
</script>

<template>
  <div
    class="bg-white rounded-3xl p-6 shadow-[0_4px_12px_rgba(0,0,0,0.03)] border border-slate-100 flex flex-col justify-between hover:shadow-[0_8px_24px_rgba(0,0,0,0.06)] transition-shadow cursor-pointer"
  >
    <div class="flex items-start justify-between mb-4">
      <div class="flex flex-col">
        <span class="text-[10px] font-black text-slate-400 uppercase tracking-widest">{{
          title
        }}</span>
        <div class="flex items-baseline gap-1 mt-1">
          <span class="text-4xl font-black text-slate-800">{{ value }}</span>
          <span class="text-sm font-bold text-slate-500">{{ unit }}</span>
        </div>
      </div>
      <div
        :class="[
          'w-12 h-12 rounded-full flex items-center justify-center shadow-sm',
          iconBgClass,
          iconColorClass,
        ]"
      >
        <span class="material-symbols-outlined text-[24px]">{{ icon }}</span>
      </div>
    </div>
    <div class="flex flex-col gap-1.5 mt-2">
      <div class="flex items-center justify-between text-[11px] font-bold">
        <span class="text-slate-500">{{ subText }}</span>
        <span :class="subValueColorClass">{{ subValue }}</span>
      </div>
      <div class="w-full h-1.5 bg-slate-100 rounded-full overflow-hidden">
        <div
          :class="['h-full rounded-full', progressColorClass]"
          :style="{ width: `${progressPercent}%` }"
        ></div>
      </div>
    </div>
  </div>
</template>
