<script setup lang="ts">
import { ref } from 'vue'
import CourseCard from '@/components/course/CourseCard.vue'
import { courses } from '@/data/courses'

const filters = ['Все (12)', 'Европейские', 'Азиатские', 'Для карьеры']
const activeFilter = ref(filters[0])

const handleCourseSelect = (id: string) => {
  console.log(`Selected course ID: ${id}`)
  // Логика перехода к курсу
}
</script>

<template>
  <section class="w-full bg-surface-container-low py-20">
    <div class="max-w-7xl mx-auto px-6 lg:px-12 flex flex-col gap-10">
      <!-- Section Header & Filter Pills -->
      <div class="flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div>
          <span
            class="font-label-sm text-label-sm uppercase tracking-widest text-primary font-extrabold"
          >
            Направления обучения
          </span>
          <h2 class="font-headline-lg text-headline-lg text-on-surface mt-1">
            Выберите язык для старта
          </h2>
          <p class="font-body-md text-body-md text-on-surface-variant mt-1">
            Каждый курс создан сертифицированными лингвистами и разбит на увлекательные микро-главы.
          </p>
        </div>

        <!-- Filter Pills Bar -->
        <div
          class="inline-flex items-center gap-1.5 p-1.5 rounded-2xl bg-surface-container shadow-sm self-start md:self-auto overflow-x-auto"
        >
          <button
            v-for="filter in filters"
            :key="filter"
            @click="activeFilter = filter"
            :class="[
              'px-4 py-2 rounded-xl font-label-sm text-label-sm transition-colors',
              activeFilter === filter
                ? 'bg-surface-container-lowest text-primary shadow-[0_2px_0_0_#cbd5e1] font-bold'
                : 'text-on-surface-variant hover:text-on-surface',
            ]"
          >
            {{ filter }}
          </button>
        </div>
      </div>

      <!-- 3D Cards Grid -->
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
        <CourseCard
          v-for="course in courses"
          :key="course.id"
          :title="course.title"
          :description="course.description"
          :icon-emoji="course.iconEmoji"
          :xp="course.xp"
          :badge="course.badge"
          :levels="course.levels"
          :students="course.students"
          @select="handleCourseSelect(course.id)"
        />
      </div>
    </div>
  </section>
</template>
