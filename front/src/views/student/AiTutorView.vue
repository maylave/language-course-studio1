<script setup lang="ts">
import DashboardLayout from '@/components/layout/DashboardLayout.vue'
</script>

<template>
  <DashboardLayout>
    <div class="flex flex-col w-full max-w-6xl mx-auto gap-6 pb-10">
      <div class="flex flex-col gap-1 mt-2">
        <h1 class="font-headline-lg text-4xl font-black text-slate-800 tracking-tight">
          Разговорный ИИ 🤖
        </h1>
        <p class="font-body-md text-base text-slate-600">
          Тренируйте произношение и спонтанную речь без страха ошибиться.
        </p>
      </div>

      <div
        class="bg-white rounded-[2rem] p-8 shadow-[0_8px_24px_rgba(79,70,229,0.06)] border border-slate-100 flex items-center justify-center min-h-[400px]"
      >
        <div class="text-center flex flex-col items-center">
          <div
            class="w-20 h-20 bg-sky-50 text-sky-500 rounded-full flex items-center justify-center mb-4"
          >
            <span class="material-symbols-outlined text-4xl">psychology</span>
          </div>
          <h2 class="text-2xl font-black text-slate-800">Выбор собеседника</h2>
          <p class="text-slate-500 font-medium mt-2 max-w-md">
            Здесь будет интерфейс выбора темы диалога (в кафе, аэропорту, знакомство).
          </p>
        </div>
      </div>
    </div>
  </DashboardLayout>
</template>
