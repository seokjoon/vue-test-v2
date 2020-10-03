import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import DataV from '@/views/Component/DataV'
import FilterV from '@/views/Component/FilterV'
import ComputedV from '@/views/Component/ComputedV'
import DirectiveV from '@/views/Component/DirectiveV'
import HookV from '@/views/Component/HookV'
import MethodV from '@/views/Component/MethodV'
import ComponentV from '@/views/Component/ComponentV'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },

  {
    path: '/component/component',
    name: 'Component',
    component: ComponentV,
  },
  {
    path: '/component/computed',
    name: 'Computed',
    component: ComputedV,
  },
  {
    path: '/component/data',
    name: 'Data',
    component: DataV,
  },
  {
    path: '/component/directive',
    name: 'Directive',
    component: DirectiveV,
  },
  {
    path: '/component/filter',
    name: 'Filter',
    component: FilterV,
  },
  {
    path: '/component/hook',
    name: 'Hook',
    component: HookV,
  },
  {
    path: '/component/method',
    name: 'Method',
    component: MethodV,
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
