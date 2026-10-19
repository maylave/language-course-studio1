import './assets/main.css'
import 'material-symbols/outlined.css'
import '@fontsource-variable/plus-jakarta-sans'
import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')
