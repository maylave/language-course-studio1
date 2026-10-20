<script setup lang="ts">
import { ref } from 'vue'
import DashboardLayout from '@/components/layout/DashboardLayout.vue'
import StatCard from '@/components/student/StatCard.vue'
import ActiveModuleCard from '@/components/student/ActiveModuleCard.vue'

// Моковое состояние, которое позже заменится на вызов API
const student = ref({
  name: 'Анна',
  streak: 14,
  xp: 1250,
  league: 4,
})

const currentModule = ref({
  language: 'Испанский язык',
  level: 'A2 БАЗОВЫЙ',
  moduleNum: 3,
  title: '«В кафе и ресторане»',
  description:
    'Учимся делать заказ, просить счет и уточнять ингредиенты у официанта на живом испанском.',
  timeEst: '~4 минуты',
  progress: 65,
  completedLessons: 5,
  totalLessons: 8,
})

const handleStartLesson = () => {
  console.log('Запуск урока...')
  // router.push('/lesson/active')
}

const handleOpenDictionary = () => {
  console.log('Открытие словаря...')
}
</script>

<template>
  <DashboardLayout>
    <div class="flex flex-col w-full max-w-6xl mx-auto gap-6 pb-10">
      <!-- Заголовок -->
      <div class="flex flex-col md:flex-row md:items-end justify-between gap-4 mt-2">
        <div class="flex flex-col gap-1">
          <div class="flex items-center gap-2">
            <span
              class="bg-indigo-50 text-primary px-2.5 py-0.5 rounded-full font-label-sm text-[11px] uppercase tracking-wider font-bold"
            >
              Дневной прогресс
            </span>
            <span class="w-1 h-1 rounded-full bg-slate-300"></span>
            <span class="font-label-sm text-xs text-slate-500 font-bold uppercase tracking-wider"
              >24 мая, Пятница</span
            >
          </div>
          <h1
            class="font-headline-lg text-4xl font-black text-slate-800 tracking-tight mt-1 flex items-center gap-2"
          >
            Привет, {{ student.name }}! <span class="text-3xl animate-wave">👋</span>
          </h1>
          <p class="font-body-md text-base text-slate-600 mt-1">
            Твой ударный режим продолжается — {{ student.streak }} дней подряд. Отличный темп!
          </p>
        </div>
      </div>

      <div class="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start mt-2">
        <!-- Левая колонка -->
        <div class="lg:col-span-8 flex flex-col gap-6">
          <ActiveModuleCard
            v-bind="currentModule"
            @start="handleStartLesson"
            @dictionary="handleOpenDictionary"
          />

          <!-- Сетка статистики (Переиспользуемый компонент StatCard) -->
          <div class="grid grid-cols-1 sm:grid-cols-3 gap-6">
            <StatCard
              title="Ударный режим"
              :value="student.streak"
              unit="дней"
              icon="local_fire_department"
              icon-bg-class="bg-orange-100"
              icon-color-class="text-orange-500"
              sub-text="До заморозки:"
              sub-value="6 часов"
              sub-value-color-class="text-orange-600"
              :progress-percent="25"
              progress-color-class="bg-orange-500"
            />

            <StatCard
              title="Опыт за неделю"
              :value="student.xp.toLocaleString()"
              unit="XP"
              icon="diamond"
              icon-bg-class="bg-sky-100"
              icon-color-class="text-sky-500"
              sub-text="Дневная норма:"
              sub-value="100% закрыта"
              sub-value-color-class="text-sky-600"
              :progress-percent="100"
              progress-color-class="bg-sky-500"
            />

            <StatCard
              title="Лига чемпионов"
              :value="`#${student.league}`"
              unit="место"
              icon="shield"
              icon-bg-class="bg-indigo-100"
              icon-color-class="text-indigo-500"
              sub-text="↑ Изумрудная лига:"
              sub-value="Зона перехода ↑"
              sub-value-color-class="text-indigo-600"
              :progress-percent="80"
              progress-color-class="bg-indigo-500"
            />
          </div>
        </div>

        <!-- Правая колонка (Заглушка под блок целей) -->
        <div class="lg:col-span-4 flex flex-col gap-6">
          <!-- Сюда позже добавим компонент DailyGoalsCard.vue -->
          <div
            class="bg-white rounded-[2rem] p-6 shadow-sm border border-slate-100 h-full min-h-[400px]"
          >
            <h3 class="text-lg font-black text-slate-800 mb-4">Цели на сегодня</h3>
            <p class="text-sm text-slate-500">Загрузка ежедневных целей...</p>
          </div>
        </div>
      </div>
    </div>
  </DashboardLayout>
</template>

<style>
/* Простая анимация для руки */
@keyframes wave {
  0% {
    transform: rotate(0deg);
  }
  20% {
    transform: rotate(14deg);
  }
  40% {
    transform: rotate(-8deg);
  }
  60% {
    transform: rotate(14deg);
  }
  80% {
    transform: rotate(-4deg);
  }
  100% {
    transform: rotate(0deg);
  }
}
.animate-wave {
  display: inline-block;
  transform-origin: 70% 70%;
  animation: wave 2s infinite ease-in-out;
}
</style>
