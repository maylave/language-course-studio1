<script setup lang="ts">
import { ref, reactive, computed } from 'vue'
import { useRouter } from 'vue-router'
import UIProgressBar from '@/components/UI/UIProgressBar.vue'

import LoginForm from '@/components/auth/LoginForm.vue'
import Step1Name from '@/components/auth/Step1Name.vue'
import Step2Account from '@/components/auth/Step2Account.vue'
import Step3Age from '@/components/auth/Step3Age.vue'
import Step4Language from '@/components/auth/Step4Language.vue'
import Step5Level from '@/components/auth/Step5Level.vue'

// import { authApi } from '@/api'

const router = useRouter()

// Режим: 'login' (вход) или 'register' (5 шагов онбординга)
const mode = ref<'login' | 'register'>('register')
const currentStep = ref(1)
const totalSteps = 5

// Единый стейт для всех 5 шагов регистрации
const formData = reactive({
  name: '',
  email: '',
  password: '',
  age: 21,
  language: 'Испанский',
  pathway: 'test' as 'scratch' | 'test',
  cefrLevel: 'A2',
})

const progressPercent = computed(() => (currentStep.value / totalSteps) * 100)

const nextStep = () => {
  if (currentStep.value < totalSteps) currentStep.value++
}

const prevStep = () => {
  if (currentStep.value > 1) {
    currentStep.value--
  } else {
    router.push('/')
  }
}

const finishOnboarding = async () => {
  console.log('Итоговые данные регистрации:', { ...formData })

  // TODO: Раскомментировать, когда бэкенд будет готов
  // try {
  //   const response = await authApi.register(formData.email, formData.password)
  //   localStorage.setItem('sq_token', response.token)
  //   router.push('/dashboard')
  // } catch (error) {
  //   console.error('Ошибка при регистрации:', error)
  // }
}
</script>

<template>
  <div class="min-h-screen bg-[#f4f7fb] flex flex-col justify-between">
    <!-- Верхний бар с вашим UIProgressBar (показывается только при регистрации) -->
    <header
      v-if="mode === 'register'"
      class="fixed top-0 left-0 w-full z-50 bg-white/90 backdrop-blur-xl border-b border-slate-200"
    >
      <div class="h-20 max-w-4xl mx-auto px-6 flex items-center justify-between gap-6">
        <div class="flex items-center gap-3">
          <button
            type="button"
            class="w-10 h-10 rounded-full bg-slate-100 hover:bg-slate-200 flex items-center justify-center"
            @click="prevStep"
          >
            <span class="material-symbols-outlined text-[20px]">arrow_back</span>
          </button>
          <span class="font-black text-lg text-primary hidden sm:inline-block">SkillQuest</span>
        </div>

        <!-- Ваш компонент прогресс-бара -->
        <div class="flex-1 max-w-xs mx-auto flex items-center gap-3">
          <UIProgressBar :progress="progressPercent" variant="indigo" />
          <span class="text-xs font-extrabold text-slate-500 shrink-0">
            Шаг {{ currentStep }}/{{ totalSteps }}
          </span>
        </div>

        <button class="text-xs font-extrabold text-primary hover:underline" @click="mode = 'login'">
          Войти
        </button>
      </div>
    </header>

    <!-- Основной контент -->
    <main class="flex-1 flex items-center justify-center px-4 py-24">
      <!-- Режим Входа -->
      <LoginForm
        v-if="mode === 'login'"
        @switch-to-register="mode = 'register'"
        @back="router.push('/')"
      />

      <!-- Режим Регистрации (5 шагов) -->
      <template v-else>
        <Step1Name
          v-if="currentStep === 1"
          v-model="formData.name"
          @next="nextStep"
          @switch-to-login="mode = 'login'"
        />

        <Step2Account
          v-else-if="currentStep === 2"
          v-model:email="formData.email"
          v-model:password="formData.password"
          @next="nextStep"
          @prev="prevStep"
        />

        <Step3Age
          v-else-if="currentStep === 3"
          v-model="formData.age"
          @next="nextStep"
          @prev="prevStep"
        />

        <Step4Language
          v-else-if="currentStep === 4"
          v-model="formData.language"
          @next="nextStep"
          @prev="prevStep"
        />

        <Step5Level
          v-else-if="currentStep === 5"
          :language="formData.language"
          v-model:pathway="formData.pathway"
          v-model:cefrLevel="formData.cefrLevel"
          @prev="prevStep"
          @finish="finishOnboarding"
        />
      </template>
    </main>

    <footer class="w-full py-4 text-center text-xs text-slate-400">
      SkillQuest Gamified Learning • Safe, interactive, and joyful education
    </footer>
  </div>
</template>
