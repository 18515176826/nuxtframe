import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _1d4d67dd = () => interopDefault(import('../pages/parent/index.vue' /* webpackChunkName: "pages/parent/index" */))
const _81278372 = () => interopDefault(import('../pages/parent/children/index.vue' /* webpackChunkName: "pages/parent/children/index" */))
const _1a09d8d2 = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))

// TODO: remove in Nuxt 3
const emptyFn = () => {}
const originalPush = Router.prototype.push
Router.prototype.push = function push (location, onComplete = emptyFn, onAbort) {
  return originalPush.call(this, location, onComplete, onAbort)
}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: decodeURI('/'),
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/parent",
    component: _1d4d67dd,
    name: "parent"
  }, {
    path: "/parent/children",
    component: _81278372,
    name: "parent-children"
  }, {
    path: "/",
    component: _1a09d8d2,
    name: "index"
  }],

  fallback: false
}

export function createRouter () {
  return new Router(routerOptions)
}
