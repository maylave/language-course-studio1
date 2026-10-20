<script setup lang="ts">
import { ref } from 'vue'
import { storeToRefs } from 'pinia'
import { useContentEditorStore } from '@/stores/contentEditor'

import DashboardLayout from '@/components/layout/DashboardLayout.vue'
import ModuleCard from '@/components/admin/ModuleCard.vue'
import LessonEditorDrawer from '@/components/admin/LessonEditorDrawer.vue'
import UIModal from '@/components/UI/UIModal.vue'

// Инициализация Store
const store = useContentEditorStore()
// storeToRefs сохраняет реактивность переменных из store
const { activeFilter, filters, modules, isDrawerOpen } = storeToRefs(store)

// Локальное состояние для модалки
const isAddModuleModalOpen = ref(false)
const newModuleTitle = ref('')
const newModuleDesc = ref('')

const handleCreateModule = () => {
  if (!newModuleTitle.value) return

  // Обращаемся к Action из Store
  store.addModule(newModuleTitle.value, newModuleDesc.value)

  // Сброс формы
  newModuleTitle.value = ''
  newModuleDesc.value = ''
  isAddModuleModalOpen.value = false
}

const handleEditModule = (moduleId: number) => {
  console.log(`Открываем редактор для модуля ${moduleId}`)
  store.isDrawerOpen = true
}
</script>

<template>
  <DashboardLayout>
    <div class="flex flex-col w-full gap-6 pb-10">
      <!-- Top Header & Primary Controls -->
      <div class="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
        <div class="flex flex-col gap-1">
          <div class="flex items-center gap-1">
            <span
              class="bg-primary-fixed text-on-primary-fixed-variant px-2 py-0.5 rounded-full font-label-sm text-[11px] uppercase tracking-wider font-bold"
            >
              Курсы и модули
            </span>
            <span class="w-1.5 h-1.5 rounded-full bg-outline-variant mx-1"></span>
            <span class="font-label-sm text-xs text-on-surface-variant font-bold"
              >Версия программы v3.4</span
            >
          </div>
          <h1 class="font-headline-lg text-3xl font-black text-on-surface tracking-tight mt-1">
            Управление курсами и уроками
          </h1>
          <p class="font-body-md text-base text-on-surface-variant max-w-2xl mt-1">
            Быстрое редактирование учебных программ, добавление интерактивных модулей и моментальная
            публикация заданий.
          </p>
        </div>

        <!-- Actions Area -->
        <div class="flex items-center gap-2 flex-wrap">
          <button
            class="group flex items-center gap-1.5 px-4 py-3 rounded-2xl bg-white text-slate-800 font-bold text-sm shadow-[0_4px_0_0_#cbd5e1] hover:shadow-[0_2px_0_0_#cbd5e1] hover:translate-y-0.5 active:translate-y-1 active:shadow-none transition-all"
          >
            <span
              class="material-symbols-outlined text-[20px] text-slate-500 group-hover:text-primary transition-colors"
              >data_object</span
            >
            <span>Импорт JSON</span>
          </button>
          <button
            class="group flex items-center gap-1.5 px-6 py-3 rounded-2xl bg-primary-container text-white font-bold text-sm shadow-[0_4px_0_0_#3f3bbd] hover:shadow-[0_2px_0_0_#3f3bbd] hover:translate-y-0.5 active:translate-y-1 active:shadow-none transition-all"
          >
            <span class="material-symbols-outlined text-[22px]">add_circle</span>
            <span>Создать новый курс</span>
          </button>
        </div>
      </div>

      <!-- Languages Selector & Quick Filter Bar -->
      <div
        class="bg-white p-4 rounded-2xl shadow-[0_4px_0_0_#dce9ff] flex flex-col md:flex-row items-center justify-between gap-4 mt-2"
      >
        <div class="flex items-center gap-1.5 flex-wrap w-full md:w-auto">
          <button
            v-for="filter in filters"
            :key="filter"
            @click="activeFilter = filter"
            :class="[
              'px-4 py-2 rounded-full font-bold text-sm transition-colors',
              activeFilter === filter
                ? 'bg-primary text-white shadow-[0_2px_0_0_#0c006a]'
                : 'bg-slate-50 text-slate-600 hover:bg-slate-100',
            ]"
          >
            {{ filter }}
          </button>
        </div>

        <div class="flex items-center gap-1.5 bg-slate-50 px-4 py-2 rounded-full w-full md:w-72">
          <span class="material-symbols-outlined text-[20px] text-slate-400">search</span>
          <input
            class="bg-transparent border-none outline-none text-sm text-slate-800 placeholder:text-slate-400 w-full font-medium"
            placeholder="Поиск по урокам..."
            type="text"
          />
        </div>
      </div>

      <!-- Main Work Area: Left (Modules List) & Right (Quick Lesson Peek / Drawer) -->
      <div class="grid grid-cols-1 xl:grid-cols-12 gap-6 items-start mt-2">
        <!-- Left Column: Modules -->
        <div
          :class="isDrawerOpen ? 'xl:col-span-7' : 'xl:col-span-12'"
          class="flex flex-col gap-4 transition-all duration-300"
        >
          <div class="flex items-center justify-between px-1">
            <div class="flex items-center gap-2">
              <span class="text-lg font-bold text-slate-800">Модули курса</span>
              <span class="bg-slate-200 text-slate-600 text-xs font-bold px-2 py-0.5 rounded-full"
                >{{ modules.length }} активных</span
              >
            </div>
            <span class="text-sm font-medium text-slate-500"
              >Языковой трек: Испанский B1 Intermedio</span
            >
          </div>

          <!-- Список модулей из Store -->
          <ModuleCard v-for="mod in modules" :key="mod.id" :module="mod" @edit="handleEditModule" />

          <!-- Кнопка вызова модалки -->
          <button
            @click="isAddModuleModalOpen = true"
            class="w-full p-4 rounded-3xl bg-slate-50 hover:bg-slate-100 text-slate-500 hover:text-primary flex items-center justify-center gap-1.5 font-bold text-sm shadow-[0_2px_0_0_#dce9ff] transition-all border-2 border-dashed border-slate-200 hover:border-primary/30"
          >
            <span class="material-symbols-outlined text-[22px]">add</span>
            <span>Добавить модуль в курс</span>
          </button>
        </div>

        <!-- Right Column: Editor Drawer -->
        <div v-if="isDrawerOpen" class="xl:col-span-5 w-full">
          <LessonEditorDrawer @close="store.isDrawerOpen = false" @save="store.saveLesson" />
        </div>
      </div>
    </div>

    <!-- Модальное окно добавления модуля -->
    <UIModal
      :show="isAddModuleModalOpen"
      title="Новый модуль"
      @close="isAddModuleModalOpen = false"
    >
      <div class="flex flex-col gap-4">
        <div class="flex flex-col gap-1.5">
          <label class="text-sm font-extrabold text-slate-800">Название модуля</label>
          <input
            v-model="newModuleTitle"
            class="w-full px-4 py-3 rounded-2xl bg-slate-50 text-sm font-bold text-slate-800 outline-none focus:bg-white focus:ring-2 focus:ring-primary shadow-inner transition-all border border-slate-200"
            placeholder="Например: Будущее время"
          />
        </div>
        <div class="flex flex-col gap-1.5">
          <label class="text-sm font-extrabold text-slate-800">Описание</label>
          <textarea
            v-model="newModuleDesc"
            rows="3"
            class="w-full px-4 py-3 rounded-2xl bg-slate-50 text-sm font-bold text-slate-800 outline-none focus:bg-white focus:ring-2 focus:ring-primary shadow-inner transition-all border border-slate-200 resize-none"
            placeholder="Краткое описание темы..."
          ></textarea>
        </div>
      </div>

      <template #footer>
        <button
          @click="isAddModuleModalOpen = false"
          class="px-5 py-2.5 rounded-xl bg-slate-100 text-slate-600 font-bold text-sm hover:bg-slate-200 transition-colors"
        >
          Отмена
        </button>
        <button
          @click="handleCreateModule"
          :disabled="!newModuleTitle"
          class="px-6 py-2.5 rounded-xl bg-primary-container text-white font-bold text-sm shadow-[0_3px_0_0_#3f3bbd] hover:shadow-[0_1px_0_0_#3f3bbd] active:translate-y-0.5 active:shadow-none transition-all disabled:opacity-50 disabled:cursor-not-allowed"
        >
          Создать
        </button>
      </template>
    </UIModal>
  </DashboardLayout>
</template>
