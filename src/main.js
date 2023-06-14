import { createApp } from 'vue'
import "@fortawesome/fontawesome-free/css/all.min.css";
import './assets/css/index.css'
import './assets/css/global.css'
import App from './App.vue'
import { createPinia } from 'pinia'
import Toast from 'vue-toastification';
import 'vue-toastification/dist/index.css';
import {router} from "./router";
import VueCookies from 'vue3-cookies'

const pinia = createPinia()

createApp(App).use(router).use(Toast).use(VueCookies).use(pinia).mount('#app')
