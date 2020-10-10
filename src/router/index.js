import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

import componentRoute from '@/router/component'
import displayRoute from '@/router/display'
import dataRoute from '@/router/data'
import storeRoute from '@/router/store'

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

  ...componentRoute,
  ...dataRoute,
  ...displayRoute,
  ...storeRoute
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
});

router.afterEach((to, from) => { //console.log(to, from);
  //
});
router.beforeEach((to, from, next) => {
  next();
});

export default router
