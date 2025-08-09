import { createApp } from 'vue'
import { MotionPlugin } from '@vueuse/motion'
import { createRouter, createWebHistory } from 'vue-router'
import routes from './router'
import App from './App.vue'
import './styles/tailwind.css'
import 'animate.css'

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, saved) {
    if (saved) return saved
    if (to.hash) return { el: to.hash, behavior: 'smooth' }
    return { top: 0 }
  },
})

createApp(App)
  .use(MotionPlugin)
  .use(router)
  .mount('#app')
