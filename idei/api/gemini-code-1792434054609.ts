export interface StudentProgress {
  userId: string
  xp: number               // Опыт (Процесс 3.1)
  earnedXpToday: number
  maxDailyXp: number
  lives: number            // Остаток жизней (Процесс 3.3)
  maxLives: number
  streakDays: number       // Ударный режим (Процесс 3.2)
  level: number
  leagueName: string       // Лига (Процесс 3.4)
  leagueRank: number       // Место в лиге
  gems: number
  lastLessonDate: string
}