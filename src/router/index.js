import { createRouter, createWebHistory } from 'vue-router'
import Example from '../components/Example/Example.vue'
import Home from '../components/Home/Home.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/Example',
      name: 'Example',
      component: Example
    }
  ]
})

export default router