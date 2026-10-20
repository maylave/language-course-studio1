import { defineStore } from 'pinia'
import { ref, computed } from 'vue'

export type UserRole = 'admin' | 'teacher' | 'student'

export interface UserProfile {
  id: string
  name: string
  email: string
  role: UserRole
  avatarUrl?: string
}

export const useAuthStore = defineStore('auth', () => {
  // --- Состояние (State) ---
  const user = ref<UserProfile | null>({
    id: '1',
    name: 'Александр В.',
    email: 'admin@skillquest.ru',
    role: 'admin',
  })

  const unreadNotifications = ref(3)

  // --- Вычисляемые свойства (Getters) ---
  const isLoggedIn = computed(() => !!user.value)

  const userRoleLabel = computed(() => {
    if (!user.value) return 'Гость'
    const roleLabels: Record<UserRole, string> = {
      admin: 'Главный администратор',
      teacher: 'Преподаватель',
      student: 'Ученик',
    }
    return roleLabels[user.value.role]
  })

  // --- Методы (Actions) ---
  const fetchUserProfile = async () => {
    console.log('Имитация загрузки профиля...')

    // TODO: Раскомментировать при подключении реального API
    // try {
    //   const response = await fetch('/api/v1/auth/me', {
    //     headers: { Authorization: `Bearer ${localStorage.getItem('sq_token')}` }
    //   })
    //   const data = await response.json()
    //   user.value = data
    // } catch (error) {
    //   console.error('Ошибка загрузки профиля', error)
    //   logout()
    // }
  }

  const logout = () => {
    user.value = null
    // TODO: Очистка токена
    // localStorage.removeItem('sq_token')
    // router.push('/login')
  }

  return {
    user,
    unreadNotifications,
    isLoggedIn,
    userRoleLabel,
    fetchUserProfile,
    logout,
  }
})
