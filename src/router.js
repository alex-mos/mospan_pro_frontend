import Vue from 'vue'
import Router from 'vue-router'
import Home from './pages/Home'
import Cv from './pages/Cv'
import Error404 from './pages/404'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/cv',
      name: 'cv',
      component: Cv
    },
    {
      path: '*',
      name: '404',
      component: Error404
    }
  ]
})
