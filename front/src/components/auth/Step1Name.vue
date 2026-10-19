<script setup lang="ts">
import { computed } from 'vue'
import UIPanel from '@/components/UI/UIPanel.vue'
import UIInput from '@/components/UI/UIInput.vue'
import UIButton from '@/components/UI/UIButton.vue'

const props = defineProps<{ modelValue: string }>()
const emit = defineEmits<{
  (e: 'update:modelValue', val: string): void
  (e: 'next'): void
  (e: 'switch-to-login'): void
}>()

const name = computed({
  get: () => props.modelValue,
  set: (val) => emit('update:modelValue', val),
})

const initial = computed(() => (name.value.trim() ? name.value.trim()[0].toUpperCase() : '?'))
const displayName = computed(() => (name.value.trim() ? name.value.trim() : 'Новый ученик'))
</script>

<template>
  <div class="w-full max-w-lg mx-auto flex flex-col items-center">
    <!-- Маскот и приветствие -->
    <div class="flex flex-col sm:flex-row items-center gap-4 mb-6">
      <div
        class="w-24 h-24 rounded-3xl bg-surface-container-high p-2 shadow-[0_6px_0_0_#cbd5e1] shrink-0"
      >
        <img
          class="w-full h-full object-cover rounded-2xl"
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuCg7RtQ9Fwjw1a98a_A9iBMsr-m5e_n6pZx7mejXBqhmHYw1xwrfMfZowBDAgcscBfLbStZrVx3DghRS0Nd64EV0kunyxA3A6FoJyOyNdqDOS3llNibCL0xRrTOcGXWuvYWBRLllT0WR70Fr52wO3tBA3o6Q8BQSOhZRSC8swbNV9MO0KB_ffoxyGyPZOvajNuY7IyolxUhiKtyuRoLom0BZb-NhCESPCq7bUlwIxhp202Dw8vS8tMf5g"
          alt="Mascot"
        />
      </div>
      <div class="bg-white rounded-2xl p-4 shadow-[0_4px_0_0_#cbdbf5] text-sm">
        <div class="font-extrabold text-primary uppercase mb-1">👋 Привет! Начнём путь?</div>
        <p class="text-slate-600">Познакомимся перед тем, как открыть сундуки со знаниями!</p>
      </div>
    </div>

    <UIPanel class="!max-w-lg w-full">
      <div class="text-center mb-6">
        <span
          class="px-3 py-1 rounded-full bg-indigo-50 text-primary text-xs font-extrabold uppercase"
        >
          Шаг 1 из 5
        </span>
        <h1 class="text-2xl sm:text-3xl font-black text-slate-800 mt-2">Как тебя зовут?</h1>
        <p class="text-slate-500 text-sm mt-1">
          Мы создаем твой персональный профиль для языковых квестов и наград.
        </p>
      </div>

      <div class="flex flex-col gap-4">
        <div class="flex justify-between text-xs font-bold text-slate-500 px-1">
          <span>ТВОЕ ИМЯ *</span>
          <span>{{ name.length }} / 25</span>
        </div>

        <UIInput v-model="name" placeholder="Например, Александр или Анна" />

        <!-- Предпросмотр профиля -->
        <div class="p-3.5 rounded-2xl bg-slate-100 flex items-center justify-between">
          <div class="flex items-center gap-3">
            <div
              class="w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center font-bold"
            >
              {{ initial }}
            </div>
            <div>
              <div class="text-[11px] font-bold uppercase text-slate-400">Предпросмотр профиля</div>
              <div class="font-extrabold text-slate-800">{{ displayName }}</div>
            </div>
          </div>
          <span class="px-2.5 py-1 rounded-full bg-amber-100 text-amber-800 text-xs font-extrabold">
            🔥 0 ДНЕЙ
          </span>
        </div>

        <UIButton
          bgColor="#22c55e"
          hoverColor="#16a34a"
          borderColor="#15803d"
          :disabled="!name.trim()"
          @click="emit('next')"
        >
          Продолжить →
        </UIButton>
      </div>

      <div class="mt-6 text-center">
        <button
          class="text-sm font-bold text-secondary hover:underline"
          @click="emit('switch-to-login')"
        >
          У меня уже есть аккаунт • Войти
        </button>
      </div>
    </UIPanel>
  </div>
</template>
