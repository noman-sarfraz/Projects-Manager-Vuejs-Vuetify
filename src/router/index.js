import Vue from 'vue'
import VueRouter from 'vue-router'
import Dashboard from '../views/DashboardView.vue'
import Projects from '../views/ProjectsView.vue'
import Team from '../views/TeamView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'dashboard',
    component: Dashboard
  },
  {
    path: '/projects',
    name: 'project',
    component: Projects
  },
  {
    path: '/team',
    name: 'team',
    component: Team
  },
  
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
