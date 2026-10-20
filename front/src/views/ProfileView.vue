<script setup lang="ts">
import { ref, watch } from 'vue'
import { storeToRefs } from 'pinia'
import { useAuthStore } from '@/stores/auth'
import DashboardLayout from '@/layouts/DashboardLayout.vue'

const authStore = useAuthStore()
const { user, userRoleLabel } = storeToRefs(authStore)

// Локальное состояние для редактирования профиля
const editName = ref('')
const editEmail = ref('')

// Заполняем форму текущими данными при загрузке
watch(
  user,
  (newVal) => {
    if (newVal) {
      editName.value = newVal.name
      editEmail.value = newVal.email
    }
  },
  { immediate: true },
)

// Состояние для смены пароля
const currentPassword = ref('')
const newPassword = ref('')
const confirmPassword = ref('')

const isSavingProfile = ref(false)
const isSavingPassword = ref(false)

const handleSaveProfile = () => {
  isSavingProfile.value = true
  console.log('Сохранение профиля:', { name: editName.value, email: editEmail.value })

  // TODO: Вызов API обновления профиля
  setTimeout(() => {
    if (user.value) {
      user.value.name = editName.value
      user.value.email = editEmail.value
    }
    isSavingProfile.value = false
  }, 800)
}

const handleChangePassword = () => {
  if (newPassword.value !== confirmPassword.value) {
    alert('Новые пароли не совпадают')
    return
  }
  isSavingPassword.value = true
  console.log('Смена пароля...')

  // TODO: Вызов API смены пароля
  setTimeout(() => {
    currentPassword.value = ''
    newPassword.value = ''
    confirmPassword.value = ''
    isSavingPassword.value = false
    alert('Пароль успешно изменен!')
  }, 800)
}
</script>

<template>
  <DashboardLayout>
    <div class="flex flex-col w-full max-w-5xl mx-auto gap-6 pb-10">
      <!-- Заголовок страницы -->
      <div class="flex flex-col gap-1">
        <h1 class="font-headline-lg text-3xl font-black text-slate-800 tracking-tight">
          Мой профиль
        </h1>
        <p class="font-body-md text-base text-slate-500">
          Управляйте своими личными данными и настройками безопасности.
        </p>
      </div>

      <div class="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start mt-2" v-if="user">
        <!-- Левая колонка: Карточка пользователя и статистика -->
        <div class="lg:col-span-4 flex flex-col gap-6">
          <!-- Главная карточка профиля -->
          <div
            class="bg-white p-6 rounded-3xl shadow-[0_4px_0_0_#dce9ff] flex flex-col items-center text-center border border-slate-100"
          >
            <div class="relative group cursor-pointer mb-4">
              <div
                class="w-24 h-24 rounded-full bg-primary flex items-center justify-center text-white text-3xl font-black shadow-[0_4px_0_0_#3631b4] overflow-hidden"
              >
                <img
                  v-if="user.avatarUrl"
                  :src="user.avatarUrl"
                  alt="Аватар"
                  class="w-full h-full object-cover"
                />
                <span v-else>{{ user.name.charAt(0).toUpperCase() }}</span>
              </div>
              <div
                class="absolute inset-0 bg-slate-900/40 rounded-full opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity"
              >
                <span class="material-symbols-outlined text-white text-[24px]">photo_camera</span>
              </div>
            </div>

            <h2 class="text-xl font-black text-slate-800">{{ user.name }}</h2>
            <span class="text-sm font-bold text-slate-500 mt-1">{{ user.email }}</span>
            <span
              class="mt-3 px-3 py-1 rounded-full bg-sky-100 text-sky-800 text-xs font-black uppercase tracking-wider"
            >
              {{ userRoleLabel }}
            </span>
          </div>

          <!-- Игровая статистика (для красоты и геймификации) -->
          <div
            class="bg-white p-6 rounded-3xl shadow-[0_4px_0_0_#dce9ff] flex flex-col gap-4 border border-slate-100"
          >
            <h3 class="text-sm font-black text-slate-400 uppercase tracking-wider">Статистика</h3>

            <div
              class="flex items-center justify-between p-3 rounded-2xl bg-amber-50 border border-amber-100"
            >
              <div class="flex items-center gap-3">
                <div
                  class="w-10 h-10 rounded-xl bg-amber-100 flex items-center justify-center text-amber-500 shadow-sm"
                >
                  <span class="material-symbols-outlined text-[20px]">local_fire_department</span>
                </div>
                <span class="text-sm font-bold text-amber-900">Ударный режим</span>
              </div>
              <span class="text-lg font-black text-amber-600">14 дней</span>
            </div>

            <div
              class="flex items-center justify-between p-3 rounded-2xl bg-sky-50 border border-sky-100"
            >
              <div class="flex items-center gap-3">
                <div
                  class="w-10 h-10 rounded-xl bg-sky-100 flex items-center justify-center text-sky-500 shadow-sm"
                >
                  <span class="material-symbols-outlined text-[20px]">diamond</span>
                </div>
                <span class="text-sm font-bold text-sky-900">Кристаллы</span>
              </div>
              <span class="text-lg font-black text-sky-600">1,420</span>
            </div>
          </div>
        </div>

        <!-- Правая колонка: Формы редактирования -->
        <div class="lg:col-span-8 flex flex-col gap-6">
          <!-- Основная информация -->
          <div
            class="bg-white p-6 sm:p-8 rounded-3xl shadow-[0_4px_0_0_#dce9ff] flex flex-col gap-5 border border-slate-100"
          >
            <h2 class="text-xl font-black text-slate-800 border-b border-slate-100 pb-4">
              Основные данные
            </h2>

            <div class="grid grid-cols-1 sm:grid-cols-2 gap-5 mt-2">
              <div class="flex flex-col gap-1.5">
                <label class="text-sm font-extrabold text-slate-800">Имя и фамилия</label>
                <input
                  v-model="editName"
                  class="w-full px-4 py-3 rounded-2xl bg-slate-50 text-sm font-bold text-slate-800 outline-none focus:bg-white focus:ring-2 focus:ring-primary shadow-inner transition-all border border-slate-200"
                  type="text"
                />
              </div>
              <div class="flex flex-col gap-1.5">
                <label class="text-sm font-extrabold text-slate-800">Электронная почта</label>
                <input
                  v-model="editEmail"
                  class="w-full px-4 py-3 rounded-2xl bg-slate-50 text-sm font-bold text-slate-800 outline-none focus:bg-white focus:ring-2 focus:ring-primary shadow-inner transition-all border border-slate-200"
                  type="email"
                />
              </div>
            </div>

            <div class="flex justify-end pt-2">
              <button
                @click="handleSaveProfile"
                :disabled="isSavingProfile"
                class="px-6 py-3 rounded-2xl bg-primary text-white font-bold text-sm shadow-[0_4px_0_0_#3631b4] hover:shadow-[0_2px_0_0_#3631b4] active:translate-y-1 active:shadow-none transition-all flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
              >
                <span
                  v-if="isSavingProfile"
                  class="material-symbols-outlined animate-spin text-[18px]"
                  >progress_activity</span
                >
                <span v-else class="material-symbols-outlined text-[18px]">save</span>
                <span>Сохранить изменения</span>
              </button>
            </div>
          </div>

          <!-- Смена пароля -->
          <div
            class="bg-white p-6 sm:p-8 rounded-3xl shadow-[0_4px_0_0_#dce9ff] flex flex-col gap-5 border border-slate-100"
          >
            <h2 class="text-xl font-black text-slate-800 border-b border-slate-100 pb-4">
              Безопасность
            </h2>

            <div class="flex flex-col gap-5 mt-2">
              <div class="flex flex-col gap-1.5">
                <label class="text-sm font-extrabold text-slate-800">Текущий пароль</label>
                <input
                  v-model="currentPassword"
                  class="w-full px-4 py-3 rounded-2xl bg-slate-50 text-sm font-bold text-slate-800 outline-none focus:bg-white focus:ring-2 focus:ring-primary shadow-inner transition-all border border-slate-200"
                  type="password"
                />
              </div>

              <div class="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div class="flex flex-col gap-1.5">
                  <label class="text-sm font-extrabold text-slate-800">Новый пароль</label>
                  <input
                    v-model="newPassword"
                    class="w-full px-4 py-3 rounded-2xl bg-slate-50 text-sm font-bold text-slate-800 outline-none focus:bg-white focus:ring-2 focus:ring-primary shadow-inner transition-all border border-slate-200"
                    type="password"
                  />
                </div>
                <div class="flex flex-col gap-1.5">
                  <label class="text-sm font-extrabold text-slate-800">Повторите пароль</label>
                  <input
                    v-model="confirmPassword"
                    class="w-full px-4 py-3 rounded-2xl bg-slate-50 text-sm font-bold text-slate-800 outline-none focus:bg-white focus:ring-2 focus:ring-primary shadow-inner transition-all border border-slate-200"
                    type="password"
                  />
                </div>
              </div>
            </div>

            <div class="flex justify-end pt-2">
              <button
                @click="handleChangePassword"
                :disabled="!currentPassword || !newPassword || isSavingPassword"
                class="px-6 py-3 rounded-2xl bg-slate-100 text-slate-700 font-bold text-sm shadow-[0_3px_0_0_#cbd5e1] hover:bg-slate-200 active:translate-y-0.5 active:shadow-none transition-all flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed border border-slate-200"
              >
                <span
                  v-if="isSavingPassword"
                  class="material-symbols-outlined animate-spin text-[18px]"
                  >progress_activity</span
                >
                <span v-else class="material-symbols-outlined text-[18px]">lock_reset</span>
                <span>Обновить пароль</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </DashboardLayout>
</template>
