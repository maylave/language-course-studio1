<script setup lang="ts">
import { ref, computed } from 'vue'

// Моковое состояние целей
const goals = ref([
  {
    id: 1,
    title: 'Пройти 1 урок без ошибок',
    xpReward: 15,
    current: 1,
    target: 1,
    completed: true,
    type: 'boolean',
  },
  {
    id: 2,
    title: 'Повторить 10 слов',
    xpReward: 10,
    current: 0,
    target: 10,
    completed: false,
    type: 'action',
  },
  {
    id: 3,
    title: 'Набрать 50 XP за день',
    xpReward: 0,
    current: 35,
    target: 50,
    completed: false,
    type: 'progress',
  },
])

const completedCount = computed(() => goals.value.filter((g) => g.completed).length)
const totalCount = computed(() => goals.value.length)

// Имитация выполнения цели
const handleCompleteGoal = (id: number) => {
  const goal = goals.value.find((g) => g.id === id)
  if (goal) {
    goal.current = goal.target
    goal.completed = true
    // В реальности здесь будет вызов API и начисление XP в глобальный Store
  }
}
</script>

<template>
  <div
    class="bg-white rounded-[2rem] p-6 shadow-[0_8px_24px_rgba(79,70,229,0.04)] border border-slate-100 flex flex-col h-full"
  >
    <div class="flex items-center justify-between mb-6">
      <div class="flex items-center gap-2">
        <span class="material-symbols-outlined text-orange-500">flag</span>
        <h3 class="text-lg font-black text-slate-800">Цели на сегодня</h3>
      </div>
      <span class="px-2.5 py-1 bg-slate-100 text-slate-600 font-black text-xs rounded-lg">
        {{ completedCount }}/{{ totalCount }}
      </span>
    </div>

    <div class="flex flex-col gap-4 flex-1">
      <div
        v-for="goal in goals"
        :key="goal.id"
        :class="[
          'flex items-center gap-4 p-3 rounded-2xl border transition-all',
          goal.completed ? 'bg-sky-50 border-sky-100' : 'bg-white border-slate-100 shadow-sm',
        ]"
      >
        <!-- Иконка статуса -->
        <div
          v-if="goal.completed"
          class="w-8 h-8 rounded-full bg-sky-500 text-white flex items-center justify-center shrink-0"
        >
          <span class="material-symbols-outlined text-[16px] font-bold">check</span>
        </div>
        <div
          v-else-if="goal.type === 'action'"
          class="w-8 h-8 rounded-full border-2 border-slate-200 flex items-center justify-center shrink-0"
        >
          <div class="w-3 h-3 rounded-full bg-slate-200"></div>
        </div>
        <div
          v-else
          class="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center text-slate-400 shrink-0"
        >
          <span class="material-symbols-outlined text-[18px]">hourglass_empty</span>
        </div>

        <!-- Контент цели -->
        <div class="flex flex-col flex-1 w-full gap-1">
          <div class="flex items-start justify-between">
            <div class="flex flex-col">
              <span
                :class="[
                  'text-sm font-bold',
                  goal.completed ? 'text-slate-500 line-through' : 'text-slate-800',
                ]"
              >
                {{ goal.title }}
              </span>
              <span
                v-if="!goal.completed && goal.type !== 'progress'"
                class="text-xs font-bold text-slate-500 mt-0.5"
              >
                {{ goal.current }} / {{ goal.target }}
              </span>
            </div>

            <div class="flex flex-col items-end gap-1 shrink-0">
              <span v-if="goal.completed && goal.xpReward" class="text-xs font-black text-sky-600">
                +{{ goal.xpReward }} XP • Выполнено
              </span>
              <span v-else-if="goal.xpReward" class="text-xs font-black text-primary">
                +{{ goal.xpReward }} XP
              </span>

              <button
                v-if="!goal.completed && goal.type === 'action'"
                @click="handleCompleteGoal(goal.id)"
                class="px-3 py-1.5 bg-primary text-white text-[10px] uppercase tracking-wider font-bold rounded-lg hover:bg-primary-container transition-colors mt-1"
              >
                Выполнить
              </button>
            </div>
          </div>

          <!-- Прогресс-бар для типа progress -->
          <div
            v-if="!goal.completed && goal.type === 'progress'"
            class="w-full flex flex-col gap-1 mt-1"
          >
            <div class="flex justify-end w-full text-[10px] font-black text-slate-400">
              {{ goal.current }} / {{ goal.target }} XP
            </div>
            <div class="w-full h-2 bg-slate-100 rounded-full overflow-hidden">
              <div
                class="h-full bg-sky-400 rounded-full transition-all"
                :style="{ width: `${(goal.current / goal.target) * 100}%` }"
              ></div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Бонусный сундук -->
    <div
      class="mt-6 p-4 border rounded-2xl flex items-center gap-3 transition-colors"
      :class="
        completedCount === totalCount
          ? 'bg-amber-100 border-amber-300'
          : 'bg-orange-50 border-orange-100'
      "
    >
      <div
        class="w-8 h-8 rounded-full bg-orange-200 text-orange-600 flex items-center justify-center shrink-0 shadow-sm"
      >
        <span class="material-symbols-outlined text-[18px]">stars</span>
      </div>
      <p class="text-xs font-bold text-orange-800 leading-snug">
        {{
          completedCount === totalCount
            ? 'Поздравляем! Бонусный сундук открыт.'
            : 'Закрой все цели, чтобы получить бонусный сундук!'
        }}
      </p>
    </div>
  </div>
</template>
