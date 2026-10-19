import { http } from './http'
import type { StudentProgress } from '@/types/gamification'

export const gamificationApi = {
  // Получение данных для GamificationWidget.vue (Процессы 3.1 - 3.4, накопитель D4)
  async getStudentProgress(): Promise<StudentProgress> {
    try {
      return await http.get<StudentProgress>('/gamification/progress')
    } catch {
      // Мок-данные по умолчанию для демонстрации на фронтенде
      return {
        userId: 'student-1',
        xp: 320,
        earnedXpToday: 50,
        maxDailyXp: 400,
        lives: 5,
        maxLives: 5,
        streakDays: 14,
        level: 7,
        leagueName: 'Изумрудная Лига',
        leagueRank: 4,
        gems: 1420,
        lastLessonDate: new Date().toISOString(),
      }
    }
  },
}