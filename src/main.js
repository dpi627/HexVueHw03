// import 'bootstrap/dist/css/bootstrap.min.css'
import '@/assets/all.scss'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

import EasyCard from './components/EasyCard.vue'

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.component('EasyCard', EasyCard)

app.mount('#app')
