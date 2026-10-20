<script setup lang="ts">
import { ref } from 'vue'
import DashboardLayout from '@/components/layout/DashboardLayout.vue'

// Данные для KPI
const kpis = ref([
  {
    title: 'Требуют проверки',
    value: '7',
    badge: '3 горящих',
    badgeClass: 'text-error bg-error-container/60',
    icon: 'assignment_late',
    iconClass: 'bg-primary-fixed text-primary shadow-[0_3px_0_0_#c2c1ff]',
    subtext: 'Эссе и аудиозаписи',
    actionIcon: 'arrow_forward',
    actionColor: 'text-primary'
  },
  {
    title: 'Разговорных сессий',
    value: '4',
    badge: 'слота на сегодня',
    badgeClass: 'text-secondary',
    icon: 'mic',
    iconClass: 'bg-secondary-fixed text-secondary shadow-[0_3px_0_0_#89ceff]',
    subtext: 'Ближайшая: 15:30 (Анна С.)',
    pulse: true,
    pulseColor: 'bg-secondary'
  },
  {
    title: 'В зоне риска',
    value: '5',
    badge: 'требуют курации',
    badgeClass: 'text-error',
    icon: 'warning',
    iconClass: 'bg-error-container text-error shadow-[0_3px_0_0_#ffdad6]',
    subtext: 'Частые ошибки в тестах',
    actionText: 'Внимание!',
    actionColor: 'text-error font-extrabold'
  },
  {
    title: 'Индекс фидбека',
    value: '4.95',
    badge: '/ 5.0',
    badgeClass: 'text-tertiary-container',
    icon: 'reviews',
    iconClass: 'bg-tertiary-fixed text-tertiary shadow-[0_3px_0_0_#ffb95f]',
    subtext: '98% реакций «Супер!»',
    subtextIcon: 'thumb_up',
    subtextIconColor: 'text-tertiary-fixed-dim'
  }
])

// Проблемные правила (Тепловая карта)
const problemRules = ref([
  {
    id: 1,
    tag: '#1 КРИТИЧНО',
    tagClass: 'bg-error text-on-error',
    title: 'Разница между «Por» и «Para»',
    desc: 'Путаница в обозначении цели, причины и временных рамок. 42% неверных вариантов в квизах модуля 3.',
    errorRate: 42,
    color: 'bg-error',
    hashtags: ['#Синтаксис', '#Предлоги'],
    studentsAffected: 28
  },
  {
    id: 2,
    tag: '#2 ВНИМАНИЕ',
    tagClass: 'bg-tertiary-container text-on-tertiary-container',
    title: 'Pretérito Indefinido vs Imperfecto',
    desc: 'Трудности с нерегулярными глаголами прошедшего времени (fui, tuve, hice, dije) в контекстных нарративах.',
    errorRate: 36,
    color: 'bg-tertiary-container',
    hashtags: ['#Времена', '#Исключения'],
    studentsAffected: 21
  },
  {
    id: 3,
    tag: '#3 СРЕДНЕ',
    tagClass: 'bg-secondary text-on-secondary',
    title: 'Субхунтив в придаточных цели',
    desc: 'Пропуск сослагательного наклонения при смене подлежащего в сложноподчиненных предложениях.',
    errorRate: 29,
    color: 'bg-secondary',
    hashtags: [],
    studentsAffected: 0
  }
])

// Очередь проверки
const assignmentsQueue = ref([
  {
    id: 1,
    type: 'Эссе + Аудио',
    typeClass: 'bg-primary-fixed text-primary',
    time: '2 ч назад',
    timeClass: 'text-error',
    title: '«Мой идеальный отпуск в Валенсии»',
    student: 'Анна Смирнова',
    level: 'A2-B1',
    tags: ['180 слов', 'Аудио 1:20'],
    active: true
  },
  {
    id: 2,
    type: 'Только Аудио',
    typeClass: 'bg-secondary-fixed text-secondary',
    time: '4 ч назад',
    timeClass: 'text-on-surface-variant',
    title: '«Презентация проекта на созвоне»',
    student: 'Михаил В.',
    level: 'B1',
    tags: ['Аудио 2:40'],
    active: false
  },
  {
    id: 3,
    type: 'Диалог',
    typeClass: 'bg-surface-container-high text-on-surface',
    time: 'Вчера',
    timeClass: 'text-on-surface-variant',
    title: '«Разговор на ресепшене в отеле»',
    student: 'Дарья К.',
    level: 'A2',
    tags: [],
    active: false
  }
])

const isAudioPlaying = ref(false)

const handlePushNotification = (name: string) => {
  alert(`Подбадривающее сообщение отправлено студенту: ${name}!`)
}

const handleAssignQuest = () => {
  alert('Микро-квест отправлен в группу!')
}

const acceptAssignment = () => {
  alert('Работа принята! Студенту начислено +150 XP 🚀')
}
</script>

<template>
  <DashboardLayout>
    <div class="flex flex-col w-full pb-10">
      
      <!-- ВЕРХНИЙ БАННЕР -->
      <section class="relative overflow-hidden rounded-[2rem] bg-gradient-to-r from-primary to-primary-container text-on-primary p-6 md:p-10 shadow-[0_8px_0_0_#2b2885] mb-10">
        <div class="relative z-10 flex flex-col lg:flex-row lg:items-center justify-between gap-6">
          <div class="flex flex-col gap-2 max-w-2xl">
            <div class="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/15 backdrop-blur-md w-fit">
              <span class="material-symbols-outlined text-[18px] text-tertiary-fixed-dim">verified</span>
              <span class="font-label-sm text-[11px] font-bold uppercase tracking-wider text-white">Главный хаб куратора</span>
            </div>
            <h1 class="text-[32px] md:text-[40px] font-extrabold tracking-tight text-white leading-none">
              Добрый день, Карлос! 🎓
            </h1>
            <p class="font-body-md text-[16px] text-white/90 font-medium">
              Студенты сегодня на подъеме: выполнено 112 микро-квестов. Проверьте новые творческие эссе и проведите разговорный клуб в 19:00.
            </p>
          </div>
          <div class="flex items-center gap-3 self-start lg:self-center">
            <a href="#assignment-desk" class="inline-flex items-center justify-center gap-1.5 px-6 py-3 rounded-2xl bg-white text-primary text-[16px] font-extrabold shadow-[0_4px_0_0_#cbd5e1] hover:bg-slate-50 active:translate-y-1 active:shadow-none transition-all">
              <span class="material-symbols-outlined text-[20px]">play_arrow</span>
              <span>Проверить первую (7)</span>
            </a>
            <button class="inline-flex items-center justify-center p-3 rounded-2xl bg-white/10 hover:bg-white/20 text-white transition-colors">
              <span class="material-symbols-outlined text-[24px]">tune</span>
            </button>
          </div>
        </div>

        <!-- KPI Cards -->
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-10">
          <div 
            v-for="(kpi, idx) in kpis" 
            :key="idx"
            class="bg-white rounded-2xl p-4 text-slate-800 shadow-[0_4px_0_0_#cbd5e1] flex flex-col justify-between relative overflow-hidden group hover:-translate-y-0.5 transition-transform"
          >
            <div class="flex items-start justify-between">
              <div class="flex flex-col">
                <span class="text-[13px] text-slate-500 font-bold uppercase tracking-wide">{{ kpi.title }}</span>
                <div class="flex items-baseline gap-1.5 mt-1">
                  <span class="text-[32px] font-extrabold text-primary">{{ kpi.value }}</span>
                  <span :class="['text-[11px] font-bold px-2 py-0.5 rounded-full', kpi.badgeClass]">{{ kpi.badge }}</span>
                </div>
              </div>
              <div :class="['w-12 h-12 rounded-xl flex items-center justify-center', kpi.iconClass]">
                <span class="material-symbols-outlined text-[26px]">{{ kpi.icon }}</span>
              </div>
            </div>
            
            <div class="mt-4 pt-1 flex items-center justify-between text-slate-500">
              <div class="flex items-center gap-1.5">
                <span v-if="kpi.pulse" :class="['w-2.5 h-2.5 rounded-full animate-pulse', kpi.pulseColor]"></span>
                <span v-if="kpi.subtextIcon" :class="['material-symbols-outlined text-[18px]', kpi.subtextIconColor]">{{ kpi.subtextIcon }}</span>
                <span v-if="kpi.subtext" class="text-[14px] font-medium truncate">
                  <span v-html="kpi.subtext"></span>
                </span>
              </div>
              <span v-if="kpi.actionIcon" :class="['material-symbols-outlined text-[18px] group-hover:translate-x-1 transition-transform', kpi.actionColor]">{{ kpi.actionIcon }}</span>
              <span v-if="kpi.actionText" :class="['text-[11px] font-bold', kpi.actionColor]">{{ kpi.actionText }}</span>
            </div>
          </div>
        </div>
      </section>

      <!-- БЛОК 1: СТАТИСТИКА И СЛАБЫЕ МЕСТА -->
      <section class="flex flex-col gap-4 mb-10">
        <div class="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <div class="inline-flex items-center gap-1.5 text-primary text-[13px] uppercase tracking-wider font-extrabold">
              <span class="material-symbols-outlined text-[18px]">query_stats</span>
              <span>Аналитика освоения курса</span>
            </div>
            <h2 class="text-[22px] font-extrabold text-slate-800 mt-1">Карта слабых мест и когортный прогресс</h2>
          </div>
          
          <div class="flex flex-wrap items-center gap-2">
            <div class="relative">
              <select class="appearance-none bg-white text-slate-800 text-[13px] px-4 py-2.5 pr-8 rounded-xl shadow-[0_3px_0_0_#cbd5e1] font-bold focus:outline-none cursor-pointer border border-slate-100">
                <option>Группа: Испанский B1 Интенсив</option>
              </select>
              <span class="material-symbols-outlined pointer-events-none absolute right-2.5 top-3 text-[18px] text-slate-400">expand_more</span>
            </div>
            <button class="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl bg-slate-100 text-slate-800 text-[13px] font-bold hover:bg-slate-200 transition-colors">
              <span class="material-symbols-outlined text-[18px]">sort</span>
              <span>По частоте ошибок</span>
            </button>
          </div>
        </div>

        <div class="grid grid-cols-1 lg:grid-cols-12 gap-6">
          
          <!-- Левая колонка: Проблемные темы (7) -->
          <div class="lg:col-span-7 flex flex-col gap-4 bg-white p-6 rounded-[2rem] shadow-[0_4px_0_0_#cbd5e1] border border-slate-100">
            <div class="flex items-center justify-between mb-2">
              <div class="flex items-center gap-1.5">
                <span class="material-symbols-outlined text-rose-600 text-[22px]">error</span>
                <h3 class="text-[18px] font-bold text-slate-800">Топ проблемных правил</h3>
              </div>
              <span class="text-[11px] text-slate-500 bg-slate-100 px-2 py-1 rounded-full font-bold">28 учеников</span>
            </div>

            <!-- Список проблемных правил -->
            <div 
              v-for="rule in problemRules" 
              :key="rule.id"
              class="p-4 rounded-xl bg-slate-50 border border-slate-100 flex flex-col gap-2 hover:bg-slate-100 transition-colors"
            >
              <div class="flex items-start justify-between gap-4">
                <div class="flex flex-col gap-1">
                  <div class="flex items-center gap-1.5">
                    <span :class="['px-2 py-0.5 rounded-full text-[11px] font-extrabold', rule.tagClass]">{{ rule.tag }}</span>
                    <span class="text-[18px] font-extrabold text-slate-800">{{ rule.title }}</span>
                  </div>
                  <p class="text-[14px] font-medium text-slate-500">{{ rule.desc }}</p>
                </div>
                <div class="text-right whitespace-nowrap">
                  <span :class="['text-[18px] font-extrabold', 'text-'+rule.color.replace('bg-','')]">{{ rule.errorRate }}%</span>
                  <span class="text-[11px] text-slate-500 block">ошибок</span>
                </div>
              </div>
              
              <!-- Прогресс-бар -->
              <div class="w-full bg-slate-200 rounded-full h-3 shadow-inner relative overflow-hidden mt-1">
                <div :class="[rule.color, 'h-full rounded-full transition-all duration-500']" :style="{ width: `${rule.errorRate}%` }">
                  <div class="w-full h-1/2 bg-white/30 rounded-t-full"></div>
                </div>
              </div>

              <!-- Футер карточки правила -->
              <div class="flex flex-wrap items-center justify-between gap-2 pt-1" v-if="rule.studentsAffected > 0">
                <div class="flex items-center gap-1.5">
                  <span v-for="t in rule.hashtags" :key="t" class="px-2 py-0.5 rounded-md bg-white border border-slate-200 text-[11px] text-slate-500 font-bold">{{ t }}</span>
                  <span class="text-[14px] font-medium text-slate-500 ml-1">{{ rule.studentsAffected }} учеников</span>
                </div>
                <button @click="handleAssignQuest" class="inline-flex items-center gap-1 px-3 py-1.5 rounded-xl bg-primary text-white text-[11px] font-extrabold shadow-[0_3px_0_0_#2b2885] active:translate-y-0.5 active:shadow-none transition-all">
                  <span class="material-symbols-outlined text-[16px]">bolt</span>
                  <span>Назначить микро-квест</span>
                </button>
              </div>
            </div>
          </div>

          <!-- Правая колонка: Студенты (5) -->
          <div class="lg:col-span-5 flex flex-col gap-4 bg-white p-6 rounded-[2rem] shadow-[0_4px_0_0_#cbd5e1] border border-slate-100">
            <div class="flex items-center justify-between mb-2">
              <div class="flex items-center gap-1.5">
                <span class="material-symbols-outlined text-secondary text-[22px]">person_alert</span>
                <h3 class="text-[18px] font-bold text-slate-800">Фокус на студентах</h3>
              </div>
              <span class="px-2.5 py-0.5 rounded-full bg-rose-100 text-rose-800 text-[11px] font-bold">3 в зоне риска</span>
            </div>

            <div class="flex flex-col gap-2">
              <!-- Студент 1 -->
              <div class="p-3 rounded-xl bg-rose-50 border border-rose-100 flex flex-col gap-2">
                <div class="flex items-center justify-between">
                  <div class="flex items-center gap-2">
                    <div class="w-10 h-10 rounded-full bg-white flex items-center justify-center text-[16px] font-extrabold text-primary border border-slate-200">АС</div>
                    <div>
                      <h4 class="text-[16px] font-extrabold text-slate-800">Анна Смирнова</h4>
                      <span class="text-[11px] text-slate-500">Уровень A2+ • Стрик 🔥 14 дней</span>
                    </div>
                  </div>
                  <span class="px-2 py-0.5 rounded-full bg-rose-500 text-white text-[11px] font-bold">4 ошибки подряд</span>
                </div>
                <p class="text-[14px] font-medium text-slate-600 pl-1">Трудности с глаголами движения (ir / venir, llevar / traer).</p>
                <div class="flex items-center justify-between pt-1">
                  <span class="inline-flex items-center gap-1 text-[11px] text-secondary font-bold">
                    <span class="material-symbols-outlined text-[16px]">schedule</span> Записана на 15:30
                  </span>
                  <a href="#assignment-desk" class="text-[11px] text-primary font-extrabold hover:underline">Открыть эссе →</a>
                </div>
              </div>

              <!-- Студент 2 -->
              <div class="p-3 rounded-xl bg-amber-50 border border-amber-100 flex flex-col gap-2">
                <div class="flex items-center justify-between">
                  <div class="flex items-center gap-2">
                    <div class="w-10 h-10 rounded-full bg-white flex items-center justify-center text-[16px] font-extrabold text-amber-600 border border-slate-200">МО</div>
                    <div>
                      <h4 class="text-[16px] font-extrabold text-slate-800">Максим Орлов</h4>
                      <span class="text-[11px] text-slate-500">Уровень B1 • Стрик 💤 0 дней</span>
                    </div>
                  </div>
                  <span class="px-2 py-0.5 rounded-full bg-amber-500 text-white text-[11px] font-bold">Застрял 5+ дней</span>
                </div>
                <p class="text-[14px] font-medium text-slate-600 pl-1">Завис на 4 модуле «Деловая переписка». Нужна подсказка.</p>
                <div class="flex items-center justify-end pt-1">
                  <button @click="handlePushNotification('Максиму')" class="px-3 py-1.5 rounded-xl bg-amber-600 text-white text-[11px] font-bold shadow-[0_2px_0_0_#915b00] active:translate-y-0.5 active:shadow-none transition-all">
                    Отправить пуш-подсказку
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- БЛОК 2: РАБОЧИЙ СТОЛ КУРАТОРА -->
      <section id="assignment-desk" class="flex flex-col gap-4 mb-10">
        <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
          <div>
            <div class="inline-flex items-center gap-1.5 text-primary text-[13px] uppercase tracking-wider font-extrabold">
              <span class="material-symbols-outlined text-[18px]">fact_check</span>
              <span>Рабочий стол куратора</span>
            </div>
            <h2 class="text-[22px] font-extrabold text-slate-800 mt-1">Проверка творческих заданий</h2>
          </div>
          <span class="text-[13px] text-slate-500 font-medium">Всего в очереди: <strong>{{ assignmentsQueue.length }}</strong></span>
        </div>

        <div class="grid grid-cols-1 lg:grid-cols-12 gap-6">
          <!-- Очередь работ -->
          <div class="lg:col-span-4 flex flex-col gap-3">
            <div 
              v-for="task in assignmentsQueue" 
              :key="task.id"
              :class="[
                'p-4 rounded-2xl cursor-pointer transition-all border',
                task.active ? 'bg-white shadow-[0_4px_0_0_#3f3bbd] border-primary' : 'bg-white shadow-[0_4px_0_0_#cbd5e1] border-slate-100 hover:bg-slate-50'
              ]"
            >
              <div class="flex items-center justify-between mb-2">
                <span :class="['px-2 py-0.5 rounded-full text-[11px] font-extrabold', task.typeClass]">{{ task.type }}</span>
                <span :class="['text-[11px] font-extrabold flex items-center gap-1', task.timeClass]">
                  <span v-if="task.active" class="w-2 h-2 rounded-full bg-rose-500 animate-ping"></span>
                  {{ task.time }}
                </span>
              </div>
              <h4 class="text-[18px] font-extrabold text-slate-800 leading-snug">{{ task.title }}</h4>
              <div class="flex items-center gap-1.5 mt-1.5 text-slate-500 text-[14px] font-medium">
                <span class="material-symbols-outlined text-[18px] text-primary">person</span>
                <span class="font-bold text-slate-800">{{ task.student }}</span>
                <span>({{ task.level }})</span>
              </div>
            </div>
          </div>

          <!-- Активная проверка (8) -->
          <div class="lg:col-span-8 flex flex-col gap-4 bg-white p-6 rounded-[2rem] shadow-[0_4px_0_0_#cbd5e1] border border-slate-100">
            <!-- Шапка работы -->
            <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-2 border-b border-slate-100">
              <div class="flex items-center gap-3">
                <div class="w-12 h-12 rounded-2xl bg-primary flex items-center justify-center text-white text-[18px] font-bold shadow-[0_3px_0_0_#2b2885]">
                  АС
                </div>
                <div>
                  <div class="flex items-center gap-2">
                    <h3 class="text-[18px] font-extrabold text-slate-800">Анна Смирнова</h3>
                    <span class="px-2 py-0.5 rounded-full bg-sky-100 text-sky-800 text-[11px] font-bold">Испанский A2+</span>
                  </div>
                  <span class="text-[14px] font-medium text-slate-500">Задание 14.3: Творческое эссе о путешествии</span>
                </div>
              </div>
            </div>

            <!-- Текст с маркерами -->
            <div class="flex flex-col gap-2">
              <div class="flex items-center justify-between">
                <span class="text-[13px] uppercase text-slate-400 font-extrabold">Текст студента с аннотациями:</span>
              </div>
              <div class="p-4 rounded-2xl bg-slate-50 text-[16px] text-slate-800 leading-relaxed border border-slate-100">
                <p>
                  El verano pasado fui a Valencia <mark class="bg-emerald-100 text-emerald-800 px-1 rounded font-bold cursor-pointer" title="Отличный выбор лексики!">por primera vez</mark>. La ciudad es verdaderamente encantadora y soleada. Me gustó mucho pasear por el casco antiguo.
                </p>
                <p class="mt-2">
                  Cada mañana caminaba hacia la playa <mark class="bg-rose-100 text-rose-800 px-1 rounded font-bold cursor-pointer" title="Ошибка предлога! Должно быть: para ver el mar">por ver el mar</mark>, pero un día empezó a llover fuertemente. Entonces <mark class="bg-amber-100 text-amber-800 font-bold px-1 rounded cursor-pointer" title="Стилевая рекомендация: лучше decir 'decidí visitar'">yo tuve la idea de visitar</mark> el mercado central.
                </p>
              </div>
            </div>

            <!-- Аудио-плеер -->
            <div class="p-4 rounded-2xl bg-indigo-50 border border-indigo-100 flex flex-col gap-2">
              <div class="flex items-center justify-between">
                <div class="flex items-center gap-1.5">
                  <span class="material-symbols-outlined text-primary text-[20px]">mic</span>
                  <span class="text-[13px] text-slate-800 font-bold">Аудиозапись произношения:</span>
                </div>
                <span class="text-[11px] text-slate-500 font-bold">0:45 / 1:20</span>
              </div>
              <div class="flex items-center gap-4 pt-1">
                <button 
                  @click="isAudioPlaying = !isAudioPlaying"
                  class="w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center shadow-[0_3px_0_0_#2b2885] active:translate-y-0.5 active:shadow-none transition-all"
                >
                  <span class="material-symbols-outlined text-[20px]">{{ isAudioPlaying ? 'pause' : 'play_arrow' }}</span>
                </button>
                <div class="flex-1 h-2 bg-indigo-200 rounded-full overflow-hidden">
                  <div class="h-full bg-primary rounded-full w-[45%]"></div>
                </div>
              </div>
            </div>

            <!-- Форма обратной связи -->
            <div class="flex flex-col gap-2 mt-4">
              <label class="text-[13px] uppercase font-extrabold text-slate-800">Текстовый фидбек куратора:</label>
              <textarea 
                class="w-full rounded-2xl bg-slate-50 border border-slate-200 p-4 text-[16px] text-slate-800 focus:bg-white focus:ring-2 focus:ring-primary focus:outline-none transition-all resize-none shadow-inner" 
                rows="3"
                placeholder="Напишите комментарий..."
              >Анна, великолепное эссе! Обрати внимание на предлог во втором абзаце: когда мы выражаем цель действия («чтобы увидеть море»), на испанском мы используем «para ver el mar», а не «por».</textarea>
            </div>

            <!-- Кнопки отправки -->
            <div class="flex flex-wrap items-center justify-end gap-2 pt-2 border-t border-slate-100 mt-2">
              <button class="px-4 py-3 rounded-2xl bg-slate-100 text-slate-700 text-[13px] font-bold hover:bg-slate-200 transition-colors">
                Отправить на доработку
              </button>
              <button 
                @click="acceptAssignment"
                class="inline-flex items-center gap-2 px-6 py-3.5 rounded-2xl bg-primary text-white text-[16px] font-extrabold shadow-[0_4px_0_0_#2b2885] active:translate-y-1 active:shadow-none transition-all"
              >
                <span class="material-symbols-outlined text-[20px]">rocket_launch</span>
                <span>Принять и начислить +150 XP</span>
              </button>
            </div>
          </div>
        </div>
      </section>

    </div>
  </DashboardLayout>
</template>