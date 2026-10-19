<script setup lang="ts">
import { ref } from 'vue'
import UIPanel from '@/components/UI/UIPanel.vue'
import UIInput from '@/components/UI/UIInput.vue'
import UIButton from '@/components/UI/UIButton.vue'

const email = ref('')
const password = ref('')
</script>

<template>
  <div class="min-h-screen bg-[#f4f7fb] flex items-center justify-center p-4">
    <UIPanel variant="modal">
      <div>
        <h3 class="text-xl font-black text-slate-800">Вход в систему</h3>
      </div>

      <div class="flex flex-col gap-4 mt-2">
        <UIInput v-model="email" placeholder="Ваш Email" />
        <UIInput v-model="password" type="password" placeholder="Пароль" />
      </div>

      <div class="flex flex-col gap-3 mt-4">
        <UIButton> Войти </UIButton>

        <UIButton
          bgColor="#f1f5f9"
          hoverColor="#e2e8f0"
          borderColor="#cbd5e1"
          shadowColor="#cbd5e1"
          textColor="#475569"
        >
          Назад
        </UIButton>
      </div>
    </UIPanel>
  </div>
</template>
