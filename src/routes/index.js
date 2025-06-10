import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '@/routes/pages/HomePage.vue'
import AboutPage from '@/routes/pages/AboutPage.vue'
import MoviesPage from '@/routes/pages/MoviesPage.vue'
import MovieDetailsPage from '@/routes/pages/MovieDetailsPage.vue'
import SignInPage from '@/routes/pages/SignInPage.vue'

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
      component: MoviesPage,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/movies/:movieId', // http://localhost:5173/movies/tt1234567
      component: MovieDetailsPage,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/signin',
      component: SignInPage
    }
  ]
})

export default router
