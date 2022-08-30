import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _32d51a46 = () => interopDefault(import('..\\pages\\about.vue' /* webpackChunkName: "pages/about" */))
const _66af363d = () => interopDefault(import('..\\pages\\all-events\\index.vue' /* webpackChunkName: "pages/all-events/index" */))
const _74439dd5 = () => interopDefault(import('..\\pages\\all-places\\index.vue' /* webpackChunkName: "pages/all-places/index" */))
const _400b80ed = () => interopDefault(import('..\\pages\\all-festival\\index.vue' /* webpackChunkName: "pages/all-festival/index" */))
const _19b43250 = () => interopDefault(import('..\\pages\\all-artist\\index.vue' /* webpackChunkName: "pages/all-artist/index" */))
const _35dabc4b = () => interopDefault(import('..\\pages\\contact-us.vue' /* webpackChunkName: "pages/contact-us" */))
const _372858dd = () => interopDefault(import('..\\pages\\all-events\\event\\index.vue' /* webpackChunkName: "pages/all-events/event/index" */))
const _a0371698 = () => interopDefault(import('..\\pages\\all-places\\places\\index.vue' /* webpackChunkName: "pages/all-places/itinerary/index" */))
const _64a3c486 = () => interopDefault(import('..\\pages\\all-festival\\festival\\index.vue' /* webpackChunkName: "pages/all-festival/poi/index" */))
const _5692c467 = () => interopDefault(import('..\\pages\\all-artist\\artist\\index.vue' /* webpackChunkName: "pages/all-artist/service/index" */))
const _064d4da2 = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages/index" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/about",
    component: _32d51a46,
    name: "about"
  }, {
    path: "/all-events",
    component: _66af363d,
    name: "all-events"
  }, {
    path: "/all-places",
    component: _74439dd5,
    name: "all-places"
  }, {
    path: "/all-festival",
    component: _400b80ed,
    name: "all-festival"
  }, {
    path: "/all-artist",
    component: _19b43250,
    name: "all-artist"
  }, {
    path: "/contact-us",
    component: _35dabc4b,
    name: "contact-us"
  }, {
    path: "/all-events/event",
    component: _372858dd,
    name: "all-events-event"
  }, {
    path: "/all-places/places",
    component: _a0371698,
    name: "all-places-itinerary"
  }, {
    path: "/all-festival/festival",
    component: _64a3c486,
    name: "all-festival-festival"
  }, {
    path: "/all-artist/artist",
    component: _5692c467,
    name: "all-artist-artist"
  }, {
    path: "/",
    component: _064d4da2,
    name: "index"
  }],

  fallback: false
}

export function createRouter (ssrContext, config) {
  const base = (config._app && config._app.basePath) || routerOptions.base
  const router = new Router({ ...routerOptions, base  })

  // TODO: remove in Nuxt 3
  const originalPush = router.push
  router.push = function push (location, onComplete = emptyFn, onAbort) {
    return originalPush.call(this, location, onComplete, onAbort)
  }

  const resolve = router.resolve.bind(router)
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = normalizeURL(to)
    }
    return resolve(to, current, append)
  }

  return router
}
