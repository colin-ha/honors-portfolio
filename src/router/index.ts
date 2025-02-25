import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue'),
    },
    {
      path: '/experiences',
      name: 'experiences',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/ExperiencesView.vue'),
    },
    {
      path: '/honors-plan',
      name: 'honors-plan',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/HonorsPlanDevelopmentView.vue'),
    },
    {
      path: '/philosophy',
      name: 'philosophy',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/PhilosophyView.vue'),
    },
    {
      path: '/experience/1stopconed',
      name: 'experience-1stop',
      component: () => import('../views/experience/OneStopConEdView.vue'),
    },
    {
      path: '/experience/keysteptutorials',
      name: 'experience-keysteptutorials',
      component: () => import('../views/experience/KeystepTutorialsView.vue'),
    },
    {
      path: '/experience/scoreboard',
      name: 'experience-scoreboard',
      component: () => import('../views/experience/ScoreboardSoftwareView.vue'),
    },
    {
      path: '/experience/commercialce',
      name: 'experience-commercialce',
      component: () => import('../views/experience/CommercialCE.vue'),
    },
    {
      path: '/experience/frc',
      name: 'experience-frc',
      component: () => import('../views/experience/FRC.vue'),
    },
    {
      path: '/experience/drivegame',
      name: 'experience-drivegame',
      component: () => import('../views/experience/DriveGame.vue'),
    },
  ],
})

export default router
