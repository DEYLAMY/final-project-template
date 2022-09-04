export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  ssr: false,
  serverMiddleware: [
    {
      path: "/api",
      handler: "~/server/api.js"
    }
  ],
  head: {
    title: 'Summer Festival',
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'Summer Festival', name: 'website for Summer Festival', content: 'Summer Festival' },
      {
        hid: "description",
        name: "description",
        content: "Summer Festival",
      },
      { property: "og:site_name", content: "Summer Festival Website" },
      { hid: "og:type", property: "og:type", content: "website" },
      {
        hid: "og:url",
        property: "og:url",
        content: "https://imaje.herokuapp.com",
      },
      {
        hid: "og:title",
        property: "og:title",
        content: "Summer Festival",
      },
      {
        hid: "og:description",
        property: "og:description",
        content: "Website for Summer Festival to know better places for Summer Festival.",
      },
      { hid: 'keywords', name: 'keywords', content: 'what to see in Summer Festival, Summer Festival, Summer Festival short topic, where to go in Summer Festival, sightseeing, events in Summer Festival, service in Summer Festival, places in Summer Festival, Summer Festival, summer in Summer Festival, bixi, igloofest' },
      { name: 'format-detection', content: 'telephone=no' },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: "stylesheet", href: "https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/css/bootstrap.min.css" },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Belleza&display=swap" },
    ],
    script: [
      { src: "https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/js/bootstrap.bundle.min.js" },
      { src: "https://cdn.jsdelivr.net/npm/vue-scrollto" }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '~/assets/style.css',
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    ['vue-scrollto/nuxt', { duration: 10 }],
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
    // baseURL: 'http://localhost:3000'
    baseURL: 'https://ali-ali.herokuapp.com'
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},
}
