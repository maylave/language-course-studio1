<script setup lang="ts">
import { computed } from 'vue'
import UIButton from '@/components/UI/UIButton.vue'
import type {
  HeaderLanguage,
  HeaderStat,
  HeaderStatKey,
  HeaderUser,
} from '@/types/header'

const props = withDefaults(
  defineProps<{
    language?: HeaderLanguage
    streakDays?: number
    xp?: number
    hearts?: number
    maxHearts?: number
    user: HeaderUser
  }>(),
  {
    language: () => ({ flag: '🇪🇸', name: 'Испанский' }),
    streakDays: 14,
    xp: 1250,
    hearts: 5,
    maxHearts: 5,
  },
)

const emit = defineEmits<{
  (e: 'language-click'): void
  (e: 'stat-click', key: HeaderStatKey): void
  (e: 'profile-click'): void
}>()

const stats = computed<HeaderStat[]>(() => [
  {
    key: 'streak',
    icon: 'local_fire_department',
    iconSize: 'text-[19px]',
    label: `${props.streakDays} дней`,
    bgColor: '#f59e0b',
    hoverColor: '#d97706',
    borderColor: '#b45309',
    shadowColor: 'rgba(245,158,11,0.30)',
  },
  {
    key: 'xp',
    icon: 'diamond',
    iconSize: 'text-[18px]',
    label: `${props.xp.toLocaleString('en-US')} XP`,
    bgColor: '#39b8fd',
    hoverColor: '#1aa6f0',
    borderColor: '#0284c7',
    shadowColor: 'rgba(57,184,253,0.30)',
  },
  {
    key: 'hearts',
    icon: 'favorite',
    iconSize: 'text-[18px]',
    label: `${props.hearts}/${props.maxHearts}`,
    pulse: true,
    bgColor: '#f43f5e',
    hoverColor: '#e11d48',
    borderColor: '#be123c',
    shadowColor: 'rgba(244,63,94,0.30)',
  },
])

// UIButton по умолчанию крупная (h-56, px-10, text-lg) — для шапки
// уменьшаем её через important-классы, которые попадают на корневой <button>
const compactBtn =
  '!w-auto !h-10 !px-3.5 !gap-1.5 !text-xs !rounded-2xl !border-b-4 !shadow-none ' +
  'active:!border-b-[1px] active:!translate-y-[3px]'
</script>

<template>
  <header
    class="fixed top-0 left-64 right-0 h-20 bg-surface-container-lowest/95 backdrop-blur-md border-b-2 border-surface-container-highest z-40 px-space-lg flex items-center justify-between"
  >
    <div class="flex items-center gap-space-md">
      <!-- Выбор языка -->
      <UIButton
        :class="[compactBtn, 'uppercase']"
        bg-color="#ffffff"
        hover-color="#f8f9ff"
        border-color="#d3e4fe"
        text-color="#0b1c30"
        @click="emit('language-click')"
      >
        <span class="text-lg leading-none">{{ language.flag }}</span>
        <span class="font-black text-xs tracking-wider">{{ language.name }}</span>
        <span class="material-symbols-outlined text-base text-on-surface-variant">
          expand_more
        </span>
      </UIButton>

      <div class="h-6 w-0.5 bg-surface-container-highest"></div>

      <!-- Статистика -->
      <div class="flex items-center gap-2.5">
        <UIButton
          v-for="stat in stats"
          :key="stat.key"
          :class="compactBtn"
          :bg-color="stat.bgColor"
          :hover-color="stat.hoverColor"
          :border-color="stat.borderColor"
          :shadow-color="stat.shadowColor"
          @click="emit('stat-click', stat.key)"
        >
          <span
            class="material-symbols-outlined"
            :class="[stat.iconSize, { 'animate-pulse': stat.pulse }]"
            style="font-variation-settings: 'FILL' 1"
          >
            {{ stat.icon }}
          </span>
          <span class="tracking-wide">{{ stat.label }}</span>
        </UIButton>
      </div>
    </div>

    <!-- Профиль -->
    <div
      class="flex items-center gap-3 bg-surface-container-lowest border-2 border-surface-container-highest px-3 py-1.5 rounded-2xl shadow-[0_4px_0_0_#d3e4fe] cursor-pointer"
      @click="emit('profile-click')"
    >
      <div class="text-right">
        <div class="text-sm font-extrabold text-on-surface leading-tight">
          {{ user.name }}
        </div>
        <div class="text-[11px] text-primary font-black uppercase tracking-wider">
          Уровень {{ user.level }}
        </div>
      </div>
      <div class="relative">
        <img
          alt="Profile"
          class="w-10 h-10 rounded-2xl object-cover border-2 border-primary shadow-sm"
          :src="user.avatarUrl"
        />
        <span
          v-if="user.online ?? true"
          class="absolute -bottom-1 -right-1 w-3.5 h-3.5 bg-emerald-500 border-2 border-white rounded-full"
        ></span>
      </div>
    </div>
  </header>
</template>