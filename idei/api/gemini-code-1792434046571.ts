import { http } from './http'
import type { CourseItem, Lesson, CheckAnswerPayload, CheckAnswerResponse } from '@/types/learning'
import { courses as fallbackCourses } from '@/data/courses'

export const learningApi = {
  // Получение каталога курсов для секции Popular.vue
  async getCourses(category?: string): Promise<CourseItem[]> {
    try {
      return await http.get<CourseItem[]>('/courses', category ? { category } : undefined)
    } catch {
      // Fallback на локальные данные, пока бэкенд не запущен
      return fallbackCourses as CourseItem[]
    }
  },

  // Процесс 2.2: Сформировать урок (с учетом уровня и подписки)
  generateLesson(courseId: string, level: string) {
    return http.get<Lesson>('/lessons/generate', { courseId, level })
  },

  // Процесс 2.3: Проверить ответ (текст, произношение или отправка учителю)
  checkAnswer(payload: CheckAnswerPayload) {
    return http.post<CheckAnswerResponse>(`/lessons/${payload.lessonId}/check`, payload)
  },

  // Процесс 2.4: Сохранить результат урока (триггерит геймификацию и журнал ошибок)
  saveLessonResult(lessonId: string, score: number, errors: string[]) {
    return http.post<{ xpEarned: number; livesLeft: number }>(`/lessons/${lessonId}/complete`, {
      score,
      errors,
    })
  },

  // Процесс 4.3: Получить урок интервального повторения
  getRepetitionLesson() {
    return http.get<Lesson>('/repetition/lesson')
  },
}