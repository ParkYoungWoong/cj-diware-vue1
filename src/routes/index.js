import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '@/routes/pages/HomePage.vue'
import AboutPage from '@/routes/pages/AboutPage.vue'
import MoviesPage from '@/routes/pages/MoviesPage.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/', // http://localhost:5173/
      component: HomePage
    },
    {
      path: '/about', // http://localhost:5173/about
      component: AboutPage
    },
    {
      path: '/movies', // http://localhost:5173/movies
      component: MoviesPage
    }
  ]
})

export default router
