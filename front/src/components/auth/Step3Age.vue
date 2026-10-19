<script setup lang="ts">
import UIPanel from '@/components/UI/UIPanel.vue'
import UIButton from '@/components/UI/UIButton.vue'

const props = defineProps<{ modelValue: number }>()
const emit = defineEmits<{
  (e: 'update:modelValue', val: number): void
  (e: 'next'): void
  (e: 'prev'): void
}>()

const ageGroups = [
  { label: 'До 14 лет', desc: 'Школьная программа, базовые квесты', value: 13, icon: 'backpack' },
  {
    label: '14–17 лет',
    desc: 'Подготовка к экзаменам, молодежный сленг',
    value: 16,
    icon: 'psychology',
  },
  {
    label: '18–24 года',
    desc: 'Студенческая жизнь, путешествия, стажировки',
    value: 21,
    icon: 'flight_takeoff',
    badge: 'Популярно',
  },
  { label: '25–34 года', desc: 'Карьера, IT, свободные путешествия', value: 28, icon: 'terminal' },
  {
    label: '35+ лет',
    desc: 'Бизнес, переезд, развитие памяти',
    value: 38,
    icon: 'workspace_premium',
  },
]
</script>

<template>
  <UIPanel class="!max-w-xl w-full">
    <div class="text-center mb-6">
      <span class="px-3 py-1 rounded-full bg-sky-100 text-sky-900 text-xs font-extrabold uppercase">
        Шаг 3 из 5 • Персонализация
      </span>
      <h1 class="text-2xl sm:text-3xl font-black text-slate-800 mt-2">Сколько тебе лет?</h1>
      <p class="text-slate-500 text-sm mt-1">
        Это поможет подобрать идеальный темп, контекст диалогов и упражнений.
      </p>
    </div>

    <div class="flex flex-col gap-3 mb-6">
      <button
        v-for="group in ageGroups"
        :key="group.value"
        type="button"
        @click="emit('update:modelValue', group.value)"
        :class="[
          'w-full text-left p-4 rounded-2xl border-2 transition-all flex items-center justify-between',
          modelValue === group.value
            ? 'bg-indigo-50 border-primary shadow-[0_4px_0_#3631b4]'
            : 'bg-white border-slate-200 hover:bg-slate-50 shadow-[0_4px_0_#e2e8f0]',
        ]"
      >
        <div class="flex items-center gap-3.5">
          <div
            class="w-11 h-11 rounded-xl bg-slate-100 flex items-center justify-center text-primary"
          >
            <span class="material-symbols-outlined">{{ group.icon }}</span>
          </div>
          <div>
            <div class="font-extrabold text-slate-800 flex items-center gap-2">
              {{ group.label }}
              <span
                v-if="group.badge"
                class="px-2 py-0.5 rounded-full bg-primary text-white text-[10px]"
              >
                {{ group.badge }}
              </span>
            </div>
            <div class="text-xs text-slate-500">{{ group.desc }}</div>
          </div>
        </div>

        <div
          class="w-6 h-6 rounded-full flex items-center justify-center"
          :class="
            modelValue === group.value ? 'bg-primary text-white' : 'bg-slate-200 text-transparent'
          "
        >
          ✓
        </div>
      </button>
    </div>

    <!-- Ручной ввод точного возраста -->
    <div class="bg-slate-100 p-4 rounded-2xl mb-6 flex items-center justify-between">
      <span class="font-bold text-sm text-slate-700">Или укажи точный возраст:</span>
      <div class="flex items-center gap-2">
        <button
          type="button"
          class="w-9 h-9 rounded-xl bg-white font-bold shadow"
          @click="emit('update:modelValue', Math.max(6, modelValue - 1))"
        >
          -
        </button>
        <input
          type="number"
          :value="modelValue"
          @input="emit('update:modelValue', Number(($event.target as HTMLInputElement).value))"
          class="w-16 h-9 text-center font-extrabold rounded-xl bg-white border border-slate-300"
        />
        <button
          type="button"
          class="w-9 h-9 rounded-xl bg-white font-bold shadow"
          @click="emit('update:modelValue', Math.min(99, modelValue + 1))"
        >
          +
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
      <UIButton class="w-2/3" @click="emit('next')"> Продолжить → </UIButton>
    </div>
  </UIPanel>
</template>
