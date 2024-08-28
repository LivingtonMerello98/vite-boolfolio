import { createApp } from 'vue'
import './style.scss'

import router from './router'

import * as bootstrap from "bootstrap"

import App from './App.vue'

createApp(App).use(router).mount('#app')

