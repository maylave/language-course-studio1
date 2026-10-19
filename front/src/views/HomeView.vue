<script setup>
const emit = defineEmits(['navigate'])

const learnLinks = [
  { label: 'Каталог курсов', path: 'courses' },
  { label: 'Методика интервалов', path: 'methodology' },
  { label: 'Рейтинговая таблица', path: 'leagues' },
  { label: 'SkillQuest Super', path: 'pricing' },
]

const communityLinks = [
  { label: 'Истории успеха', path: 'reviews' },
  { label: 'Клуб дуэлянтов' },
  { label: 'Форум учеников' },
  { label: 'Преподавателям' },
]

const stores = [
  {
    hint: 'Доступно в',
    name: 'App Store',
    icon: 'shop',
    iconClass: 'text-primary',
  },
  {
    hint: 'Скачать для',
    name: 'Google Play',
    icon: 'smart_display',
    iconClass: 'text-secondary',
  },
]

const legalLinks = ['Конфиденциальность', 'Условия использования', 'Поддержка']

const year = 2025

function go(path, event) {
  if (path) {
    event.preventDefault()
    emit('navigate', path)
  }
}
</script>

<template>
  <footer
    class="w-full bg-surface-container-low border-t-2 border-surface-container-high mt-16"
  >
    <div class="max-w-7xl mx-auto px-6 lg:px-12 py-16">
      <div
        class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 mb-12"
      >
        <!-- Бренд -->
        <div class="lg:col-span-2 flex flex-col gap-4">
          <div class="flex items-center gap-2">
            <div
              class="w-9 h-9 rounded-xl bg-primary flex items-center justify-center text-on-primary shadow-[0_3px_0_0_#3631b4]"
            >
              <span class="material-symbols-outlined text-[20px]">bolt</span>
            </div>
            <span
              class="font-headline-sm text-headline-sm uppercase tracking-tight text-primary"
              >SkillQuest</span
            >
          </div>

          <p
            class="font-body-md text-body-md text-on-surface-variant max-w-sm"
          >
            Превращаем учебу в захватывающее RPG-приключение. Ежедневные
            стрики, лиги с реальными игроками и награды за каждый уровень.
          </p>

          <div class="flex items-center gap-3 pt-2">
            <div
              class="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#fef3c7] border-2 border-[#f59e0b] text-[#b45309] font-label-sm text-label-sm"
            >
              <span class="material-symbols-outlined text-[16px]"
                >local_fire_department</span
              >
              <span>142K+ Стриков</span>
            </div>
            <div
              class="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#e0f2fe] border-2 border-[#0284c7] text-[#0369a1] font-label-sm text-label-sm"
            >
              <span class="material-symbols-outlined text-[16px]"
                >military_tech</span
              >
              <span>Diamond League</span>
            </div>
          </div>
        </div>

        <!-- Обучение -->
        <div>
          <h4 class="font-headline-sm text-headline-sm text-on-surface mb-4">
            Обучение
          </h4>
          <ul
            class="space-y-2.5 font-body-sm text-body-sm text-on-surface-variant"
          >
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
          <h4 class="font-headline-sm text-headline-sm text-on-surface mb-4">
            Сообщество
          </h4>
          <ul
            class="space-y-2.5 font-body-sm text-body-sm text-on-surface-variant"
          >
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
        <div>
          <h4 class="font-headline-sm text-headline-sm text-on-surface mb-4">
            Скачать приложение
          </h4>
          <p
            class="font-body-sm text-body-sm text-on-surface-variant mb-3"
          >
            Учитесь в пути на iOS и Android
          </p>
          <div class="flex flex-col gap-2.5">
            <div
              v-for="store in stores"
              :key="store.name"
              class="flex items-center gap-3 px-4 py-2.5 rounded-xl border-2 border-outline-variant bg-surface-container-lowest shadow-[0_3px_0_0_#c7c4d6] hover:bg-surface transition-all cursor-pointer"
            >
              <span
                class="material-symbols-outlined text-[24px]"
                :class="store.iconClass"
                >{{ store.icon }}</span
              >
              <div class="leading-none">
                <div
                  class="font-label-sm text-[10px] text-on-surface-variant uppercase"
                >
                  {{ store.hint }}
                </div>
                <div
                  class="font-headline-sm text-body-sm text-on-surface"
                >
                  {{ store.name }}
                </div>
              </div>
            </div>
          </div>
        </div>
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
