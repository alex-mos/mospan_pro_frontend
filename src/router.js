import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home'
import Cv from './views/Cv'
import Books from './views/Books'

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
      path: '/books',
      name: 'books',
      component: Books
    }
  ]
})
