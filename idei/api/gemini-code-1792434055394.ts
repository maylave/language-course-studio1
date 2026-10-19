export type UserRole = 'guest' | 'student' | 'teacher' | 'admin' // E1 - E4
export type SubscriptionPlan = 'basic' | 'extended'

export interface User {
  id: string
  email: string
  name: string
  role: UserRole
  avatarUrl?: string
}

export interface AccessStatus {
  plan: SubscriptionPlan
  isActive: boolean
  canBookSessions: boolean // Доступно на расширенном тарифе (Подсистема 5)
  expiresAt?: string
}

export interface AuthResponse {
  user: User
  access: AccessStatus
  token: string
}