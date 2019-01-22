import Vue from 'vue'
import Router from 'vue-router'
import IndexPage from './views/IndexPage.vue'
import Solution from "./views/Solution.vue"
import CompanyProfile from './views/CompanyProfile.vue'
import WaterSaving from './views/WaterSaving.vue'
import WaterDrinking from './views/WaterDrinking.vue'
import PollutedWater from './views/PolluterWater.vue'
import RiverSystem from './views/RiverSystem.vue'
Vue.use(Router)
let router =new Router({
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
      component:Solution,
      children:[
        {
          path:'',
          name:'solution',
          component:WaterSaving
        },
        {
          path:'0',
          name:'waterSaving',
          component:WaterSaving
        },
        {
          path:'1',
          name: "waterDrinking",
          component:WaterDrinking
        },
        {
          path:'2',
          name: "pollutedWater",
          component:PollutedWater
        },
        {
          path:'3',
          name: "riverSystem",
          component:RiverSystem
        },
      ]
    },
    {
      path: '/companyProfile',
      name: 'companyProfile',
      component: CompanyProfile
    }
  ]
})
export  {
  router
}
