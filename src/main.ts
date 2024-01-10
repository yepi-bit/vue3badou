import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import App from './App.vue'
import router from './router'
import moment from 'moment'


const app = createApp(App)
app.use(ElementPlus)
app.use(createPinia())
app.use(router)
app.config.globalProperties.$moment = moment
app.mount('#app')
