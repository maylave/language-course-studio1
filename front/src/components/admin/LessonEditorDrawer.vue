<script setup lang="ts">
import { reactive } from 'vue'
import UIToggle from '@/components/UI/UIToggle.vue'
import UICounter from '@/components/UI/UICounter.vue'
import UISelect from '@/components/UI/UISelect.vue'

const emit = defineEmits<{
  (e: 'close'): void
  (e: 'save', data: any): void
}>()

// Интерактивное состояние формы урока
const lessonData = reactive({
  title: 'Исключения глаголов движения: ir, venir, andar',
  cefrLevel: 'A2+ (Intermediate)',
  xpReward: 25,
  questionsCount: 8,
  isPublished: true
})

const cefrOptions = ['A1 (Beginner)', 'A2 (Elementary)', 'A2+ (Intermediate)', 'B1 (Intermediate)', 'B2 (Upper)']

const handleSave = () => {
  // Эмитируем событие сохранения с собранными данными
  emit('save', { ...lessonData })
}
</script>

<template>
  <div class="bg-white p-6 sm:p-8 rounded-[2rem] shadow-[0_4px_24px_rgba(0,0,0,0.06)] flex flex-col gap-6 sticky top-24 border border-slate-100">
    
    <!-- Шапка панели -->
    <div class="flex items-start justify-between pb-4 border-b border-slate-100">
      <div class="flex flex-col gap-1.5">
        <div class="flex items-center gap-3">
          <span class="bg-[#eaf1ff] text-[#006591] px-2.5 py-0.5 rounded-md text-xs font-black uppercase tracking-wider">Урок 14</span>
          <span class="text-xs text-slate-500 font-bold uppercase tracking-wider">Модуль 3</span>
        </div>
        <h3 class="text-xl font-black text-slate-800 mt-1">Настройки урока</h3>
        <span class="text-sm text-[#006591] font-bold flex items-center gap-1.5">
          <span class="material-symbols-outlined text-[18px]">videocam</span>
          Интерактивный видео-квест
        </span>
      </div>
      <button @click="emit('close')" class="w-8 h-8 rounded-full bg-slate-100 text-slate-500 hover:bg-slate-200 flex items-center justify-center transition-colors">
        <span class="material-symbols-outlined text-[18px]">close</span>
      </button>
    </div>

    <!-- Интерактивные поля формы -->
    <div class="flex flex-col gap-5">
      
      <!-- Название -->
      <div class="flex flex-col gap-1.5">
        <label class="text-sm font-black text-slate-800">Название урока</label>
        <input 
          v-model="lessonData.title"
          class="w-full px-4 py-3 rounded-2xl bg-slate-50 text-sm font-bold text-slate-800 outline-none focus:bg-white focus:ring-2 focus:ring-[#5856d6] shadow-inner transition-all border border-slate-200" 
          type="text" 
        />
      </div>

      <!-- Сложность и XP -->
      <div class="grid grid-cols-2 gap-4">
        <div class="flex flex-col gap-1.5">
          <label class="text-sm font-black text-slate-800">Сложность CEFR</label>
          <UISelect v-model="lessonData.cefrLevel" :options="cefrOptions" />
        </div>
        
        <div class="flex flex-col gap-1.5">
          <label class="text-sm font-black text-slate-800">Базовая награда</label>
          <div class="flex items-center gap-2 bg-slate-50 border border-slate-200 px-4 py-3 rounded-2xl shadow-inner">
            <span class="material-symbols-outlined text-amber-500 text-[20px]">bolt</span>
            <!-- Инпут для изменения XP -->
            <input 
              v-model.number="lessonData.xpReward"
              type="number"
              class="bg-transparent outline-none font-black text-sm text-slate-800 w-full"
            />
            <span class="text-sm font-black text-slate-800">XP</span>
          </div>
        </div>
      </div>

      <!-- Количество вопросов (Счетчик) -->
      <div class="flex items-center justify-between p-5 rounded-2xl bg-slate-50 border border-slate-200">
        <div class="flex flex-col">
          <span class="text-sm font-black text-slate-800">Количество вопросов</span>
          <span class="text-xs font-medium text-slate-500 mt-0.5">Оптимально для одного микро-урока</span>
        </div>
        <UICounter v-model="lessonData.questionsCount" :min="1" :max="30" />
      </div>

      <!-- Статус видимости (Тоггл) -->
      <div class="p-5 rounded-2xl bg-slate-50 border border-slate-200 flex items-center justify-between">
        <div class="flex items-center gap-3">
          <span class="material-symbols-outlined text-[#5856d6] text-[24px]">visibility</span>
          <div class="flex flex-col">
            <span class="text-sm font-black text-slate-800">Доступен для студентов</span>
            <span class="text-xs font-medium text-slate-500 mt-0.5">Открывается после урока 13</span>
          </div>
        </div>
        <UIToggle v-model="lessonData.isPublished" />
      </div>
    </div>

    <!-- Кнопки действий -->
    <div class="flex flex-col gap-3 pt-4 border-t border-slate-100">
      <button 
        @click="handleSave" 
        class="w-full py-4 rounded-2xl bg-[#5856d6] text-white font-bold text-sm shadow-[0_4px_0_0_#3631b4] hover:translate-y-0.5 hover:shadow-[0_2px_0_0_#3631b4] active:translate-y-1 active:shadow-none transition-all flex items-center justify-center gap-2"
      >
        <span class="material-symbols-outlined text-[20px]">save</span>
        <span>Сохранить изменения</span>
      </button>
      
      <button class="w-full py-4 rounded-2xl bg-slate-50 border border-slate-200 text-[#006591] font-bold text-sm hover:bg-slate-100 transition-all flex items-center justify-center gap-2">
        <span class="material-symbols-outlined text-[20px]">play_circle</span>
        <span>Предпросмотр для студента</span>
      </button>
    </div>
    
  </div>
</template>