<script setup lang="ts">
import { ref } from 'vue'
import DashboardLayout from '@/components/layout/DashboardLayout.vue'

const activeFilter = ref('Испанский B1')
const filters = ['Все (12)', 'Испанский B1', 'Английский', 'Немецкий', 'Китайский']

const modules = [
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
]
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
            публикация заданий[cite: 13].
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
        <!-- Left Column: Modules (7 cols) -->
        <div class="xl:col-span-7 flex flex-col gap-4">
          <div class="flex items-center justify-between px-1">
            <div class="flex items-center gap-2">
              <span class="text-lg font-bold text-slate-800">Модули курса</span>
              <span class="bg-slate-200 text-slate-600 text-xs font-bold px-2 py-0.5 rounded-full"
                >3 активных</span
              >
            </div>
            <span class="text-sm font-medium text-slate-500"
              >Языковой трек: Испанский B1 Intermedio[cite: 13]</span
            >
          </div>

          <!-- Modules Loop -->
          <div
            v-for="mod in modules"
            :key="mod.id"
            class="p-6 rounded-3xl bg-white shadow-[0_4px_0_0_#dce9ff] flex flex-col gap-4 hover:shadow-[0_6px_0_0_#cbdbf5] transition-all relative overflow-hidden"
          >
            <div v-if="mod.isDraft" class="absolute left-0 top-0 bottom-0 w-1.5 bg-amber-500"></div>

            <div class="flex items-start justify-between gap-2" :class="{ 'pl-2': mod.isDraft }">
              <div class="flex items-start gap-4">
                <div
                  :class="[
                    'w-12 h-12 rounded-2xl flex items-center justify-center font-black text-xl shrink-0',
                    mod.themeColor,
                  ]"
                >
                  {{ mod.id }}
                </div>
                <div class="flex flex-col">
                  <div class="flex items-center gap-2 flex-wrap mb-1.5">
                    <span
                      class="bg-slate-50 text-sky-700 text-xs font-bold px-2 py-0.5 rounded-full uppercase tracking-wider"
                      >Модуль {{ mod.id }}</span
                    >
                    <span
                      :class="[
                        'text-[11px] font-bold px-2.5 py-0.5 rounded-full flex items-center gap-1 uppercase tracking-wider',
                        mod.statusColor,
                      ]"
                    >
                      <span :class="['w-1.5 h-1.5 rounded-full', mod.dotColor]"></span>
                      {{ mod.status }}
                    </span>
                  </div>
                  <h2 class="text-xl font-bold text-slate-800">{{ mod.title }}</h2>
                  <p class="text-sm font-medium text-slate-500 mt-1">{{ mod.description }}</p>
                </div>
              </div>
              <button
                class="w-8 h-8 rounded-full flex items-center justify-center text-slate-400 hover:bg-slate-100 transition-colors"
              >
                <span class="material-symbols-outlined text-[20px]">more_vert</span>
              </button>
            </div>

            <div
              class="flex items-center justify-between pt-2 border-t border-slate-50"
              :class="{ 'pl-2': mod.isDraft }"
            >
              <div class="flex items-center gap-4 text-slate-500 text-sm font-bold">
                <span class="flex items-center gap-1.5">
                  <span class="material-symbols-outlined text-[18px] text-primary">menu_book</span>
                  {{ mod.lessons }} уроков
                </span>
                <span class="flex items-center gap-1.5">
                  <span class="material-symbols-outlined text-[18px] text-sky-600">quiz</span>
                  {{ mod.tasks }} заданий
                </span>
                <span v-if="mod.xp > 0" class="hidden sm:flex items-center gap-1.5">
                  <span class="material-symbols-outlined text-[18px] text-amber-600">bolt</span>
                  +{{ mod.xp }} XP
                </span>
              </div>

              <button
                :class="[
                  'flex items-center gap-1.5 px-4 py-2 rounded-xl text-sm font-bold transition-all',
                  mod.isDraft
                    ? 'bg-amber-100 text-amber-800 hover:bg-amber-200'
                    : 'bg-slate-100 text-slate-700 hover:bg-primary hover:text-white',
                ]"
              >
                <span v-if="mod.isDraft" class="material-symbols-outlined text-[16px]">edit</span>
                <span>{{ mod.isDraft ? 'Продолжить черновик' : 'Редактировать уроки' }}</span>
                <span v-if="!mod.isDraft" class="material-symbols-outlined text-[16px]"
                  >chevron_right</span
                >
              </button>
            </div>
          </div>

          <!-- Quick Add Module Card -->
          <button
            class="w-full p-4 rounded-3xl bg-slate-50 hover:bg-slate-100 text-slate-500 hover:text-primary flex items-center justify-center gap-1.5 font-bold text-sm shadow-[0_2px_0_0_#dce9ff] transition-all border-2 border-dashed border-slate-200 hover:border-primary/30"
          >
            <span class="material-symbols-outlined text-[22px]">add</span>
            <span>Добавить модуль в курс[cite: 13]</span>
          </button>
        </div>

        <!-- Right Column: Lesson Drawer / Quick Peek Form (5 cols) -->
        <div
          class="xl:col-span-5 bg-white p-6 rounded-3xl shadow-[0_4px_0_0_#dce9ff] flex flex-col gap-4 sticky top-24"
        >
          <!-- Drawer Header -->
          <div class="flex items-start justify-between pb-2 border-b border-slate-100">
            <div class="flex flex-col gap-1">
              <div class="flex items-center gap-2">
                <span
                  class="bg-sky-100 text-sky-800 px-2 py-0.5 rounded-full text-xs font-bold uppercase tracking-wider"
                  >Урок 14</span
                >
                <span class="text-xs text-slate-500 font-bold uppercase tracking-wider"
                  >Модуль 3</span
                >
              </div>
              <h3 class="text-lg font-black text-slate-800 mt-1">
                Исключения глаголов движения[cite: 13]
              </h3>
              <span class="text-sm text-sky-600 font-bold flex items-center gap-1">
                <span class="material-symbols-outlined text-[16px]">videocam</span>
                Интерактивный видео-квест
              </span>
            </div>
            <button
              class="w-8 h-8 rounded-full bg-slate-100 text-slate-500 hover:bg-slate-200 flex items-center justify-center transition-colors"
            >
              <span class="material-symbols-outlined text-[18px]">close</span>
            </button>
          </div>

          <!-- Form Fields -->
          <div class="flex flex-col gap-5 py-2">
            <!-- Field 1: Title -->
            <div class="flex flex-col gap-1.5">
              <label class="text-sm font-extrabold text-slate-800">Название урока</label>
              <input
                class="w-full px-4 py-3 rounded-2xl bg-slate-50 text-sm font-bold text-slate-800 outline-none focus:bg-white focus:ring-2 focus:ring-primary shadow-inner transition-all border border-slate-200"
                type="text"
                value="Исключения глаголов движения: ir, venir, andar"
              />
            </div>

            <!-- Field 2: Difficulty & XP Grid -->
            <div class="grid grid-cols-2 gap-4">
              <div class="flex flex-col gap-1.5">
                <label class="text-sm font-extrabold text-slate-800">Сложность CEFR</label>
                <div
                  class="flex items-center justify-between bg-slate-50 border border-slate-200 px-4 py-2.5 rounded-2xl"
                >
                  <span class="text-sm font-black text-primary">A2+ (Intermediate)</span>
                  <span class="material-symbols-outlined text-slate-400 text-[18px]"
                    >unfold_more</span
                  >
                </div>
              </div>
              <div class="flex flex-col gap-1.5">
                <label class="text-sm font-extrabold text-slate-800">Базовая награда</label>
                <div
                  class="flex items-center gap-2 bg-slate-50 border border-slate-200 px-4 py-2.5 rounded-2xl"
                >
                  <span class="material-symbols-outlined text-amber-500 text-[20px]">bolt</span>
                  <span class="text-sm font-black text-slate-800">25 XP</span>
                </div>
              </div>
            </div>

            <!-- Field 3: Questions counter -->
            <div
              class="flex items-center justify-between p-4 rounded-2xl bg-slate-50 border border-slate-200"
            >
              <div class="flex flex-col">
                <span class="text-sm font-extrabold text-slate-800">Количество вопросов</span>
                <span class="text-xs font-medium text-slate-500 mt-0.5"
                  >Оптимально для одного микро-урока</span
                >
              </div>
              <div class="flex items-center gap-2">
                <button
                  class="w-8 h-8 rounded-full bg-white text-slate-700 flex items-center justify-center shadow-[0_2px_0_0_#dce9ff] active:translate-y-0.5 border border-slate-100"
                >
                  <span class="material-symbols-outlined text-[16px]">remove</span>
                </button>
                <span class="w-8 text-center text-lg font-black text-primary">8</span>
                <button
                  class="w-8 h-8 rounded-full bg-white text-slate-700 flex items-center justify-center shadow-[0_2px_0_0_#dce9ff] active:translate-y-0.5 border border-slate-100"
                >
                  <span class="material-symbols-outlined text-[16px]">add</span>
                </button>
              </div>
            </div>

            <!-- Quick Status Switch -->
            <div
              class="p-4 rounded-2xl bg-slate-50 border border-slate-200 flex items-center justify-between"
            >
              <div class="flex items-center gap-3">
                <span class="material-symbols-outlined text-primary text-[24px]">visibility</span>
                <div class="flex flex-col">
                  <span class="text-sm font-extrabold text-slate-800">Доступен для студентов</span>
                  <span class="text-xs font-medium text-slate-500 mt-0.5"
                    >Открывается после урока 13[cite: 13]</span
                  >
                </div>
              </div>
              <div
                class="w-12 h-6 bg-primary rounded-full relative p-0.5 cursor-pointer shadow-[0_1px_0_0_#0c006a]"
              >
                <div class="w-5 h-5 bg-white rounded-full ml-auto shadow-sm"></div>
              </div>
            </div>
          </div>

          <!-- Action Buttons -->
          <div class="flex flex-col gap-3 pt-2">
            <button
              class="w-full py-3.5 rounded-2xl bg-primary-container text-white font-bold text-sm shadow-[0_4px_0_0_#3f3bbd] hover:shadow-[0_2px_0_0_#3f3bbd] hover:translate-y-0.5 active:translate-y-1 active:shadow-none transition-all flex items-center justify-center gap-2"
            >
              <span class="material-symbols-outlined text-[20px]">save</span>
              <span>Сохранить изменения</span>
            </button>
            <button
              class="w-full py-3.5 rounded-2xl bg-slate-100 text-slate-700 font-bold text-sm hover:bg-slate-200 transition-all flex items-center justify-center gap-2"
            >
              <span class="material-symbols-outlined text-[20px] text-sky-600">play_circle</span>
              <span>Предпросмотр для студента</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  </DashboardLayout>
</template>
