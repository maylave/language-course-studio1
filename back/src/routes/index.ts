import { Router } from 'express'
import { coursesRouter } from './courses'

export const apiRouter = Router()

apiRouter.get('/health', (_req, res) => {
  res.json({ status: 'ok' })
})

apiRouter.use('/courses', coursesRouter)
