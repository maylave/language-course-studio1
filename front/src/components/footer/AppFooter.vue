<script setup lang="ts">
import type { FooterLink, StoreBadge } from '@/types/footer'

const emit = defineEmits<{
  (e: 'navigate', path: string): void
}>()

const learnLinks: FooterLink[] = [
  { label: 'Каталог курсов', path: 'courses' },
  { label: 'Методика интервалов', path: 'methodology' },
  { label: 'Рейтинговая таблица', path: 'leagues' },
  { label: 'SkillQuest Super', path: 'pricing' },
]

const communityLinks: FooterLink[] = [
  { label: 'Истории успеха', path: 'reviews' },
  { label: 'Клуб дуэлянтов' },
  { label: 'Форум учеников' },
  { label: 'Преподавателям' },
]

const legalLinks: string[] = ['Конфиденциальность', 'Условия использования', 'Поддержка']

const year = new Date().getFullYear()

function go(path: string | undefined, event: MouseEvent): void {
  if (path) {
    event.preventDefault()
    emit('navigate', path)
  }
}
</script>

<template>
  <footer class="w-full bg-surface-container-low border-t-2 border-surface-container-high mt-16">
    <div class="max-w-7xl mx-auto px-6 lg:px-12 py-16">
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 mb-12">
        <div class="lg:col-span-2 flex flex-col gap-4">
          <div class="flex items-center gap-2">
            <div
              class="w-9 h-9 rounded-xl bg-primary flex items-center justify-center text-on-primary shadow-[0_3px_0_0_#3631b4]"
            >
              <span class="material-symbols-outlined text-[20px]">bolt</span>
            </div>
            <span class="font-headline-sm text-headline-sm uppercase tracking-tight text-primary"
              >SkillQuest</span
            >
          </div>

          <p class="font-body-md text-body-md text-on-surface-variant max-w-sm">
            Превращаем учебу в захватывающее RPG-приключение. Ежедневные стрики, лиги с реальными
            игроками и награды за каждый уровень.
          </p>

          <div class="flex items-center gap-3 pt-2">
            <div
              class="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#fef3c7] border-2 border-[#f59e0b] text-[#b45309] font-label-sm text-label-sm"
            >
              <span class="material-symbols-outlined text-[16px]">local_fire_department</span>
              <span>142K+ Стриков</span>
            </div>
            <div
              class="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#e0f2fe] border-2 border-[#0284c7] text-[#0369a1] font-label-sm text-label-sm"
            >
              <span class="material-symbols-outlined text-[16px]">military_tech</span>
              <span>Diamond League</span>
            </div>
          </div>
        </div>

        <!-- Обучение -->
        <div>
          <h4 class="font-headline-sm text-headline-sm text-on-surface mb-4">Обучение</h4>
          <ul class="space-y-2.5 font-body-sm text-body-sm text-on-surface-variant">
            <li v-for="link in learnLinks" :key="link.label">
              <a
                class="hover:text-primary transition-colors"
                href="#"
                :data-path="link.path"
                @click="go(link.path, $event)"
                >{{ link.label }}</a
              >
            </li>
          </ul>
        </div>

        <!-- Сообщество -->
        <div>
          <h4 class="font-headline-sm text-headline-sm text-on-surface mb-4">Сообщество</h4>
          <ul class="space-y-2.5 font-body-sm text-body-sm text-on-surface-variant">
            <li v-for="link in communityLinks" :key="link.label">
              <a
                class="hover:text-primary transition-colors"
                href="#"
                :data-path="link.path"
                @click="go(link.path, $event)"
                >{{ link.label }}</a
              >
            </li>
          </ul>
        </div>

        <!-- Приложение -->
      </div>

      <!-- Нижняя строка -->
      <div
        class="pt-8 border-t border-outline-variant/40 flex flex-col md:flex-row items-center justify-between gap-4 font-body-sm text-body-sm text-on-surface-variant"
      >
        <div>© {{ year }} SkillQuest Inc. Все права защищены.</div>
        <div class="flex items-center gap-6">
          <a
            v-for="label in legalLinks"
            :key="label"
            class="hover:text-on-surface transition-colors"
            href="#"
            >{{ label }}</a
          >
        </div>
      </div>
    </div>
  </footer>
</template>
