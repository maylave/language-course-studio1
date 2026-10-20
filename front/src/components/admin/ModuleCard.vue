<script setup lang="ts">
export interface CourseModule {
  id: number
  title: string
  description: string
  status: string
  statusColor: string
  dotColor: string
  themeColor: string
  lessons: number
  tasks: number
  xp: number
  isDraft?: boolean
}

defineProps<{
  module: CourseModule
}>()

const emit = defineEmits<{
  (e: 'edit', id: number): void
}>()
</script>

<template>
  <div
    class="p-6 rounded-3xl bg-white shadow-[0_4px_0_0_#dce9ff] flex flex-col gap-4 hover:shadow-[0_6px_0_0_#cbdbf5] transition-all relative overflow-hidden"
  >
    <div v-if="module.isDraft" class="absolute left-0 top-0 bottom-0 w-1.5 bg-amber-500"></div>

    <div class="flex items-start justify-between gap-2" :class="{ 'pl-2': module.isDraft }">
      <div class="flex items-start gap-4">
        <div
          :class="[
            'w-12 h-12 rounded-2xl flex items-center justify-center font-black text-xl shrink-0',
            module.themeColor,
          ]"
        >
          {{ module.id }}
        </div>
        <div class="flex flex-col">
          <div class="flex items-center gap-2 flex-wrap mb-1.5">
            <span
              class="bg-slate-50 text-sky-700 text-xs font-bold px-2 py-0.5 rounded-full uppercase tracking-wider"
            >
              Модуль {{ module.id }}
            </span>
            <span
              :class="[
                'text-[11px] font-bold px-2.5 py-0.5 rounded-full flex items-center gap-1 uppercase tracking-wider',
                module.statusColor,
              ]"
            >
              <span :class="['w-1.5 h-1.5 rounded-full', module.dotColor]"></span>
              {{ module.status }}
            </span>
          </div>
          <h2 class="text-xl font-bold text-slate-800">{{ module.title }}</h2>
          <p class="text-sm font-medium text-slate-500 mt-1">{{ module.description }}</p>
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
      :class="{ 'pl-2': module.isDraft }"
    >
      <div class="flex items-center gap-4 text-slate-500 text-sm font-bold">
        <span class="flex items-center gap-1.5">
          <span class="material-symbols-outlined text-[18px] text-primary">menu_book</span>
          {{ module.lessons }} уроков
        </span>
        <span class="flex items-center gap-1.5">
          <span class="material-symbols-outlined text-[18px] text-sky-600">quiz</span>
          {{ module.tasks }} заданий
        </span>
        <span v-if="module.xp > 0" class="hidden sm:flex items-center gap-1.5">
          <span class="material-symbols-outlined text-[18px] text-amber-600">bolt</span>
          +{{ module.xp }} XP
        </span>
      </div>

      <button
        @click="emit('edit', module.id)"
        :class="[
          'flex items-center gap-1.5 px-4 py-2 rounded-xl text-sm font-bold transition-all',
          module.isDraft
            ? 'bg-amber-100 text-amber-800 hover:bg-amber-200'
            : 'bg-slate-100 text-slate-700 hover:bg-primary hover:text-white',
        ]"
      >
        <span v-if="module.isDraft" class="material-symbols-outlined text-[16px]">edit</span>
        <span>{{ module.isDraft ? 'Продолжить черновик' : 'Редактировать уроки' }}</span>
        <span v-if="!module.isDraft" class="material-symbols-outlined text-[16px]"
          >chevron_right</span
        >
      </button>
    </div>
  </div>
</template>
