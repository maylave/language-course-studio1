<!-- <script setup lang="ts">
import AppHeader from '@/components/header/GameHeader.vue'
import type { HeaderUser } from '@/types/header'

const user: HeaderUser = {
  name: 'Анна Смирнова',
  level: 12,
  online: true,
  avatarUrl: 'https://...',
}
</script>

<template>
  <AppHeader :user="user" @profile-click="console.log('profile')" />
</template> -->
<script setup lang="ts">
import CourseCard from '@/components/course/CourseCard.vue'
import { courses } from '@/data/courses'
import type { CourseItem } from '@/data/courses'

const emit = defineEmits<{
  (e: 'select', course: CourseItem): void
}>()
</script>

<template>
  <section class="max-w-7xl mx-auto px-6 lg:px-12 py-12">
    <h2 class="text-3xl font-extrabold tracking-tight text-on-surface mb-8">Выберите курс</h2>

    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      <CourseCard
        v-for="course in courses"
        :key="course.id"
        :title="course.title"
        :description="course.description"
        :icon-src="course.iconSrc"
        :icon-alt="course.title"
        :xp="course.xp"
        :levels="course.levels"
        :students="course.students"
        @select="emit('select', course)"
      />
    </div>
  </section>
</template>
