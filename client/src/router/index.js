import Vue from 'vue'
import Router from 'vue-router'
import HomePage from './HomePage'
import AboutPage from './AboutPage'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      component: HomePage,
    }, {
      path: '/about',
      component: AboutPage,
    },
  ],
})
