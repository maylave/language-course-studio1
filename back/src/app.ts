import express from 'express'
import type { ErrorRequestHandler } from 'express'
import cors from 'cors'
import { config } from './config'
import { apiRouter } from './routes'

export function createApp() {
  const app = express()

  app.use(cors({ origin: config.corsOrigin }))
  app.use(express.json())

  app.use('/api', apiRouter)

  app.use((_req, res) => {
    res.status(404).json({ error: 'Не найдено' })
  })

  const errorHandler: ErrorRequestHandler = (err, _req, res, _next) => {
    console.error(err)
    res.status(500).json({ error: 'Внутренняя ошибка сервера' })
  }
  app.use(errorHandler)

  return app
}
