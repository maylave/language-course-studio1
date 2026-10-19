<script setup lang="ts">
import { ref } from 'vue'
import UIPanel from '@/components/UI/UIPanel.vue'
import UIInput from '@/components/UI/UIInput.vue'
import UIButton from '@/components/UI/UIButton.vue'
// import { authApi } from '@/api'

const emit = defineEmits<{
  (e: 'switch-to-register'): void
  (e: 'back'): void
}>()

const email = ref('')
const password = ref('')
const errorMsg = ref('')

const handleLogin = async () => {
  if (!email.value || !password.value) {
    errorMsg.value = 'Заполните все поля'
    return
  }
  errorMsg.value = ''

  // TODO: Раскомментировать при подключении API
  // try {
  //   const res = await authApi.login(email.value, password.value)
  //   localStorage.setItem('sq_token', res.token)
  // } catch (err) {
  //   errorMsg.value = 'Неверный логин или пароль'
  // }
  console.log('Вход с данными:', { email: email.value })
}
</script>

<template>
  <UIPanel variant="modal">
    <div>
      <div
        class="w-16 h-16 rounded-2xl bg-primary mx-auto mb-3 flex items-center justify-center text-white shadow-[0_4px_0_#3631b4]"
      >
        <span class="material-symbols-outlined text-[32px]">login</span>
      </div>
      <h3 class="text-2xl font-black text-slate-800">Вход в систему</h3>
      <p class="text-sm text-slate-500 mt-1">Продолжите свой языковой квест</p>
    </div>

    <div class="flex flex-col gap-4 mt-2 text-left">
      <UIInput v-model="email" type="email" placeholder="Ваш Email" :error="errorMsg" />
      <UIInput v-model="password" type="password" placeholder="Пароль" />
    </div>

    <div class="flex flex-col gap-3 mt-4">
      <UIButton bgColor="#22c55e" hoverColor="#16a34a" borderColor="#15803d" @click="handleLogin">
        Войти
      </UIButton>

      <UIButton
        bgColor="#f1f5f9"
        hoverColor="#e2e8f0"
        borderColor="#cbd5e1"
        shadowColor="#cbd5e1"
        textColor="#475569"
        @click="emit('back')"
      >
        На главную
      </UIButton>
    </div>

    <div class="pt-3 border-t border-slate-100 text-sm text-slate-500">
      Нет аккаунта?
      <button
        class="text-primary font-extrabold underline ml-1"
        @click="emit('switch-to-register')"
      >
        Начать квест
      </button>
    </div>
  </UIPanel>
</template>
