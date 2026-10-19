<script setup lang="ts">
import { computed } from 'vue'
import UIPanel from '@/components/UI/UIPanel.vue'
import UIInput from '@/components/UI/UIInput.vue'
import UIButton from '@/components/UI/UIButton.vue'

const props = defineProps<{
  email: string
  password: string
}>()

const emit = defineEmits<{
  (e: 'update:email', val: string): void
  (e: 'update:password', val: string): void
  (e: 'next'): void
  (e: 'prev'): void
}>()

const emailModel = computed({
  get: () => props.email,
  set: (v) => emit('update:email', v),
})

const passwordModel = computed({
  get: () => props.password,
  set: (v) => emit('update:password', v),
})

const passwordStrength = computed(() => {
  const len = props.password.length
  if (len === 0) return 0
  if (len < 6) return 1
  if (len < 8) return 2
  if (len < 10) return 3
  return 4
})
</script>

<template>
  <UIPanel class="!max-w-[540px] w-full">
    <div class="text-center mb-6">
      <div
        class="w-16 h-16 rounded-full bg-primary mx-auto mb-3 flex items-center justify-center text-white shadow-[0_4px_0_#3631b4]"
      >
        <span class="material-symbols-outlined text-[34px]">verified_user</span>
      </div>
      <h1 class="text-2xl sm:text-3xl font-black text-slate-800">Создай логин и пароль</h1>
      <p class="text-slate-500 text-sm mt-1">
        Для сохранения ударного режима и прямого доступа к прогрессу.
      </p>
    </div>

    <div class="flex flex-col gap-5">
      <div>
        <label class="text-sm font-extrabold text-slate-700 mb-1.5 block">Электронная почта</label>
        <UIInput v-model="emailModel" type="email" placeholder="student@example.com" />
      </div>

      <div>
        <label class="text-sm font-extrabold text-slate-700 mb-1.5 block">Придумай пароль</label>
        <UIInput v-model="passwordModel" type="password" placeholder="Минимум 8 символов" />

        <!-- Индикатор надежности пароля -->
        <div class="mt-2.5 bg-slate-50 p-3 rounded-xl border border-slate-200">
          <div class="flex justify-between text-xs font-bold mb-1.5">
            <span class="text-sky-600">Надёжность пароля</span>
            <span class="text-slate-400">{{ passwordStrength }} из 4</span>
          </div>
          <div class="grid grid-cols-4 gap-1.5 h-2">
            <div
              v-for="i in 4"
              :key="i"
              class="rounded-full transition-colors"
              :class="i <= passwordStrength ? 'bg-sky-400' : 'bg-slate-200'"
            ></div>
          </div>
        </div>
      </div>

      <div class="flex flex-col gap-3 pt-2">
        <UIButton
          bgColor="#39b8fd"
          hoverColor="#0ea5e9"
          borderColor="#006591"
          :disabled="!emailModel || passwordModel.length < 6"
          @click="emit('next')"
        >
          Продолжить →
        </UIButton>

        <UIButton
          bgColor="#f1f5f9"
          hoverColor="#e2e8f0"
          borderColor="#cbd5e1"
          shadowColor="#cbd5e1"
          textColor="#475569"
          @click="emit('prev')"
        >
          ← Назад
        </UIButton>
      </div>
    </div>
  </UIPanel>
</template>
