export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Selevinia — зоологический журнал-ежегодник',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Selevinia — зоологический журнал-ежегодник' },
      {
        hid: 'og:title',
        name: 'og:title',
        content: 'Selevinia — зоологический журнал-ежегодник'
      },
      {
        hid: 'og:site_name',
        name: 'og:site_name',
        content: 'Selevinia — зоологический журнал-ежегодник'
      },
      { name: 'csrf-token', content: '{{ csrf_token() }}' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/icon.png' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    {src: "~/plugins/defaultPlugin", mode: "client"},
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    ['@nuxtjs/date-fns', {
      defaultLocale: 'ru'
    }]
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa',
    // https://go.nuxtjs.dev/content
    '@nuxt/content',
    "vue2-editor/nuxt"
  ],
  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    credentials: true,
    baseURL: "http://localhost:3001"
  },

  // PWA module configuration: https://go.nuxtjs.dev/pwa
  pwa: {
    manifest: {
      lang: 'en'
    }
  },
  transition: {
    name: 'fade',
    mode: 'out-in'
  },
  server: {
    port: 3001
  },

  env: {
    API: 'https://backend.selevinia.kz/api/',
  },

  // Content module configuration: https://go.nuxtjs.dev/config-content
  content: {},

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}
