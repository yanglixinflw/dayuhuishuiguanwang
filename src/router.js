import Vue from 'vue'
import Router from 'vue-router'
import IndexPage from './views/IndexPage.vue'
import Solution from "./views/Solution.vue"
import CompanyProfile from './views/CompanyProfile.vue'
Vue.use(Router)
export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'indexPage',
      component: IndexPage
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    },
    {
      path: '/solution',
      name: 'solution',
      component: Solution
    },
    {
      path: '/companyProfile',
      name: 'companyProfile',
      component: CompanyProfile
    }
  ]
})
