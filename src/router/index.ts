import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/IndexView.vue'
import SearchView from '../views/SearchView.vue'
import ClientView from '../views/ClientView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/search',
      name: 'buscar',
      component: SearchView
    },
    {
      path: '/client',
      name: 'cliente',
      component: ClientView
    }
  ]
})

export default router
