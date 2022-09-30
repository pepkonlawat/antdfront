import { createApp } from 'vue'
import './style.css'
import 'ant-design-vue/dist/antd.css'
import App from './App.vue'
import Antd from 'ant-design-vue'

import router from "./router"
createApp(App).use(Antd).use(router).mount('#app')
