import Vue from 'vue'
import Router from 'vue-router'
import Home from './pages/Home'
import Cv from './pages/Cv'
import Books from './pages/Books'
import Projects from './pages/Projects'
import Zaubern from './pages/projects/Zaubern'
import Error404 from './pages/404'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      meta: { layout: 'clean' },
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
    },
    {
      path: '/projects',
      name: 'projects',
      component: Projects
    },
    {
      path: '/projects/zaubern',
      name: 'projects.zaubern',
      meta: { layout: 'clean' },
      component: Zaubern
    },
    {
      path: '*',
      name: '404',
      component: Error404
    }
  ]
})
