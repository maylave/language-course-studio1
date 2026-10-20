import { defineStore } from 'pinia'
import { ref } from 'vue'
import type { CourseModule } from '@/components/admin/ModuleCard.vue'

export const useContentEditorStore = defineStore('contentEditor', () => {
  // --- Состояние (State) ---
  const activeFilter = ref('Испанский B1')
  const filters = ref(['Все (12)', 'Испанский B1', 'Английский', 'Немецкий', 'Китайский'])
  const isDrawerOpen = ref(false)

  // Заглушка: Моковые данные вместо API
  const modules = ref<CourseModule[]>([
    {
      id: 1,
      title: 'Базовые диалоги и приветствия',
      description: 'Разговорный этикет, вежливые формы и быстрые реплики для путешествий.',
      status: 'Опубликован',
      statusColor: 'text-[#15803d] bg-[#dcfce7]',
      dotColor: 'bg-[#15803d]',
      themeColor: 'bg-primary-fixed text-on-primary-fixed shadow-[0_2px_0_0_#c2c1ff]',
      lessons: 6,
      tasks: 18,
      xp: 140,
    },
    {
      id: 2,
      title: 'Кафе, отели и городская среда',
      description: 'Ориентация в Мадриде и Барселоне: заказ тапас, чек-ин и заказ такси.',
      status: 'Опубликован',
      statusColor: 'text-[#15803d] bg-[#dcfce7]',
      dotColor: 'bg-[#15803d]',
      themeColor: 'bg-secondary-fixed text-on-secondary-fixed shadow-[0_2px_0_0_#89ceff]',
      lessons: 8,
      tasks: 24,
      xp: 190,
    },
    {
      id: 3,
      title: 'Прошедшие времена: Pretérito Indefinido',
      description: 'Ключевые неправильные глаголы: fui, dije, tuve и построение историй.',
      status: 'На модерации',
      statusColor: 'text-amber-800 bg-amber-100',
      dotColor: 'bg-amber-600',
      themeColor: 'bg-amber-100 text-amber-800 shadow-[0_2px_0_0_#fcd34d]',
      lessons: 5,
      tasks: 15,
      xp: 0,
      isDraft: true,
    },
  ])

  // --- Действия (Actions) ---

  // Мок: создание нового модуля
  const addModule = (title: string, description: string) => {
    const newId = modules.value.length ? Math.max(...modules.value.map((m) => m.id)) + 1 : 1
    modules.value.push({
      id: newId,
      title,
      description,
      status: 'Черновик',
      statusColor: 'text-slate-600 bg-slate-100',
      dotColor: 'bg-slate-400',
      themeColor: 'bg-slate-100 text-slate-600 shadow-[0_2px_0_0_#cbd5e1]',
      lessons: 0,
      tasks: 0,
      xp: 0,
      isDraft: true,
    })
  }

  // Мок: сохранение данных урока из Drawer
  const saveLesson = (lessonData: any) => {
    console.log('API Call: Сохранение урока...', lessonData)
    // Закрываем панель после успешного сохранения
    isDrawerOpen.value = false
  }

  return {
    activeFilter,
    filters,
    modules,
    isDrawerOpen,
    addModule,
    saveLesson,
  }
})
