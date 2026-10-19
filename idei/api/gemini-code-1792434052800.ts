export type LanguageLevel = 'A1' | 'A2' | 'B1' | 'B2' | 'C1' | 'HSK 1-4'
export type TaskType = 'translation' | 'matching' | 'sentence_build' | 'voice' | 'creative' // Процесс 2.3.1

export interface CourseItem {
  id: string
  title: string
  description: string
  iconEmoji: string
  xp: number
  badge?: string
  levels: string
  students: number
  category: 'european' | 'asian' | 'career'
}

export interface LessonTask {
  id: string
  type: TaskType
  question: string
  options?: string[]
}

export interface Lesson {
  id: string
  courseId: string
  title: string
  isRepetition: boolean // Из подсистемы 4 (интервальное повторение)
  tasks: LessonTask[]
}

export interface CheckAnswerPayload {
  lessonId: string
  taskId: string
  type: TaskType
  textAnswer?: string
  audioBlob?: Blob      // Для оценки произношения (Процесс 2.3.3)
}

export interface CheckAnswerResponse {
  isCorrect: boolean
  feedback: string      // Обратная связь (Процесс 2.3.4)
  pronunciationScore?: number
  sentToTeacher?: boolean // Если задание творческое (в Подсистему 5)
}