import { http } from './http'
import type { AuthResponse, AccessStatus, SubscriptionPlan } from '@/types/auth'

export const authApi = {
  // Процесс 1.1: Зарегистрировать пользователя
  register(email: string, password?: string) {
    return http.post<AuthResponse>('/auth/register', { email, password })
  },

  // Процесс 1.2: Авторизовать пользователя
  login(email: string, password: string) {
    return http.post<AuthResponse>('/auth/login', { email, password })
  },

  // Процесс 1.3: Оформить подписку
  subscribe(plan: SubscriptionPlan) {
    return http.post<{ checkoutUrl: string }>('/subscriptions/checkout', { plan })
  },

  // Процесс 1.4: Определить права доступа
  getAccessStatus() {
    return http.get<AccessStatus>('/auth/access')
  },
}