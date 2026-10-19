<script setup lang="ts">
import { ref, computed } from 'vue'
import UIPanel from '@/components/UI/UIPanel.vue'
import UIInput from '@/components/UI/UIInput.vue'
import UIButton from '@/components/UI/UIButton.vue'

const props = defineProps<{ modelValue: string }>()
const emit = defineEmits<{
  (e: 'update:modelValue', val: string): void
  (e: 'next'): void
  (e: 'prev'): void
}>()

const search = ref('')

const languages = [
  { name: 'Испанский', emoji: '🇪🇸', desc: 'Топ выбор • 85k учеников' },
  { name: 'Английский', emoji: '🇬🇧', desc: 'Самый популярный • 140k учеников' },
  { name: 'Немецкий', emoji: '🇩🇪', desc: 'Для карьеры и учебы • 42k учеников' },
  { name: 'Китайский', emoji: '🇨🇳', desc: 'Восточный трек • 28k учеников' },
  { name: 'Французский', emoji: '🇫🇷', desc: 'Культура и поездки • 35k учеников' },
  { name: 'Японский', emoji: '🇯🇵', desc: 'Манга и технологии • 22k учеников' },
  { name: 'Итальянский', emoji: '🇮🇹', desc: 'Искусство и гастрономия • 19k учеников' },
  { name: 'Корейский', emoji: '🇰🇷', desc: 'K-Pop и тренды • 25k учеников' },
]

const filteredLanguages = computed(() => {
  const q = search.value.toLowerCase().trim()
  if (!q) return languages
  return languages.filter(
    (l) => l.name.toLowerCase().includes(q) || l.desc.toLowerCase().includes(q),
  )
})
</script>

<template>
  <UIPanel class="!max-w-2xl w-full">
    <div class="text-center mb-6">
      <h1 class="text-2xl sm:text-3xl font-black text-slate-800">Какой язык ты хочешь изучать?</h1>
      <p class="text-slate-500 text-sm mt-1">
        Ты всегда сможешь добавить другие языки позже в личном кабинете.
      </p>
    </div>

    <div class="mb-5">
      <UIInput v-model="search" placeholder="Поиск языка (например, Японский, Французский...)" />
    </div>

    <div v-if="filteredLanguages.length" class="grid grid-cols-1 sm:grid-cols-2 gap-3.5 mb-6">
      <div
        v-for="lang in filteredLanguages"
        :key="lang.name"
        @click="emit('update:modelValue', lang.name)"
        :class="[
          'p-4 rounded-2xl border-2 cursor-pointer transition-all flex items-center justify-between gap-3',
          modelValue === lang.name
            ? 'bg-indigo-50 border-primary shadow-[0_4px_0_#2563eb]'
            : 'bg-white border-slate-200 hover:bg-slate-50 shadow-[0_4px_0_#cbd5e1]',
        ]"
      >
        <div class="flex items-center gap-3 min-w-0">
          <div
            class="w-12 h-12 rounded-xl bg-slate-100 flex items-center justify-center text-3xl shrink-0"
          >
            {{ lang.emoji }}
          </div>
          <div class="min-w-0">
            <h2 class="font-extrabold text-slate-800 truncate">{{ lang.name }}</h2>
            <p class="text-xs text-slate-500 truncate">{{ lang.desc }}</p>
          </div>
        </div>

        <div
          class="w-6 h-6 rounded-full flex items-center justify-center shrink-0"
          :class="
            modelValue === lang.name ? 'bg-primary text-white' : 'bg-slate-200 text-transparent'
          "
        >
          ✓
        </div>
      </div>
    </div>

    <div v-else class="text-center py-8 bg-slate-50 rounded-2xl mb-6 text-slate-500">
      Язык пока не найден. Попробуйте другое название.
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
      <UIButton class="w-2/3" @click="emit('next')"> Продолжить с {{ modelValue }} → </UIButton>
    </div>
  </UIPanel>
</template>
