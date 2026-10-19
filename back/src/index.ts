import { createApp } from './app'
import { config } from './config'

createApp().listen(config.port, () => {
  console.log(`Server running on http://localhost:${config.port}`)
})
