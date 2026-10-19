import { Router } from 'express'
import type { Course } from '../types'

const courses: Course[] = [
  { id: 1, title: 'JavaScript с нуля', description: 'Основы языка и DOM', lessons: 24 },
  { id: 2, title: 'TypeScript', description: 'Типы, generics, утилиты', lessons: 18 },
]

export const coursesRouter = Router()

coursesRouter.get('/', (_req, res) => {
  res.json(courses)
})

coursesRouter.get('/:id', (req, res) => {
  const course = courses.find((c) => c.id === Number(req.params.id))
  if (!course) {
    res.status(404).json({ error: 'Курс не найден' })
    return
  }
  res.json(course)
})
