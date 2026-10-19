<script setup lang="ts">
import UIPanel from '@/components/UI/UIPanel.vue'
import UIButton from '@/components/UI/UIButton.vue'

const props = defineProps<{
  language: string
  pathway: 'scratch' | 'test'
  cefrLevel: string
}>()

const emit = defineEmits<{
  (e: 'update:pathway', val: 'scratch' | 'test'): void
  (e: 'update:cefrLevel', val: string): void
  (e: 'prev'): void
  (e: 'finish'): void
}>()

const cefrList = [
  { id: 'A1', title: 'Начинающий', desc: 'Простые фразы, буквы, приветствия' },
  { id: 'A2', title: 'Элементарный', desc: 'Кафе, покупки в городе, простые диалоги' },
  { id: 'B1', title: 'Средний', desc: 'Свободное общение в поездках' },
  { id: 'B2+', title: 'Продвинутый', desc: 'Работа, сложные темы, беглая речь' },
]
</script>

<template>
  <UIPanel class="!max-w-2xl w-full">
    <div class="flex items-center justify-between mb-4">
      <span
        class="px-3 py-1 rounded-full bg-indigo-50 text-primary text-xs font-extrabold uppercase"
      >
        Курс: {{ language }}
      </span>
      <span class="px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-extrabold">
        Шаг 5 из 5 • 100% Финал
      </span>
    </div>

    <div class="text-center mb-6">
      <h1 class="text-2xl sm:text-3xl font-black text-slate-800">Определим твой уровень языка</h1>
      <p class="text-slate-500 text-sm mt-1">
        Начнем с нуля или сразу перейдем к интересным вызовам?
      </p>
    </div>

    <!-- Выбор пути: с нуля или тест -->
    <div class="flex flex-col gap-4 mb-6">
      <div
        @click="emit('update:pathway', 'scratch')"
        :class="[
          'cursor-pointer rounded-2xl p-5 border-2 transition-all flex items-start gap-4',
          pathway === 'scratch'
            ? 'bg-indigo-50 border-primary shadow-[0_4px_0_#5856d6]'
            : 'bg-white border-slate-200 shadow-[0_4px_0_#cbd5e1]',
        ]"
      >
        <div
          class="w-14 h-14 rounded-2xl bg-sky-100 flex items-center justify-center text-3xl shrink-0"
        >
          🐣
        </div>
        <div class="flex-1">
          <h2 class="font-extrabold text-slate-800">Я учу язык с нуля</h2>
          <p class="text-xs text-slate-500 mt-1">
            Не знаю алфавита или знаю всего пару слов. Начнем с самых простых основ.
          </p>
        </div>
      </div>

      <div
        @click="emit('update:pathway', 'test')"
        :class="[
          'cursor-pointer rounded-2xl p-5 border-2 transition-all flex items-start gap-4 relative',
          pathway === 'test'
            ? 'bg-indigo-50 border-primary shadow-[0_4px_0_#5856d6]'
            : 'bg-white border-slate-200 shadow-[0_4px_0_#cbd5e1]',
        ]"
      >
        <span
          class="absolute -top-3 right-4 bg-sky-400 text-sky-950 px-2.5 py-0.5 rounded-full text-[11px] font-extrabold"
        >
          💎 +50 XP за тест
        </span>
        <div
          class="w-14 h-14 rounded-2xl bg-primary text-white flex items-center justify-center text-3xl shrink-0"
        >
          🎯
        </div>
        <div class="flex-1">
          <h2 class="font-extrabold text-slate-800">Я уже немного знаю язык</h2>
          <p class="text-xs text-slate-500 mt-1">
            Быстрый адаптивный экспресс-тест (10 вопросов) без потери жизней.
          </p>
        </div>
      </div>
    </div>

    <!-- Ручной выбор шкалы CEFR -->
    <div class="bg-slate-50 rounded-2xl p-5 mb-6 border border-slate-200">
      <div class="font-extrabold text-slate-800 mb-3 text-sm">
        Или выбери уровень вручную (Шкала CEFR):
      </div>
      <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
        <button
          v-for="lvl in cefrList"
          :key="lvl.id"
          type="button"
          @click="emit('update:cefrLevel', lvl.id)"
          :class="[
            'text-left p-3.5 rounded-xl border-2 transition-all',
            cefrLevel === lvl.id
              ? 'bg-indigo-100 border-primary shadow-[0_3px_0_#3631b4]'
              : 'bg-white border-slate-200 hover:bg-slate-100',
          ]"
        >
          <div class="font-extrabold text-slate-800">
            {{ lvl.id }}
            <span class="text-xs font-bold uppercase text-slate-500 ml-1">{{ lvl.title }}</span>
          </div>
          <p class="text-xs text-slate-500 mt-1">{{ lvl.desc }}</p>
        </button>
      </div>
    </div>

    <div class="flex gap-3">
      <UIButton
        class="w-1/3"
        bgColor="#f1f5f9"
        hoverColor="#e2e8f0"
        borderColor="#cbd5e1"
        shadowColor="#cbd5e1"
        textColor="#475569"
        @click="emit('prev')"
      >
        Назад
      </UIButton>
      <UIButton
        class="w-2/3"
        bgColor="#22c55e"
        hoverColor="#16a34a"
        borderColor="#15803d"
        @click="emit('finish')"
      >
        Завершить регистрацию 🚀
      </UIButton>
    </div>
  </UIPanel>
</template>
