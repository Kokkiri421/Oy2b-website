export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title:
      '[DEV] Oyster Telecom - оператор связи для бизнеса в Санкт-Петербурге',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  css: [
    '~/assets/fonts/Montserrat.scss',
    '~/assets/colors.scss',
    '~/assets/common-style.scss',
    '~/assets/media_mixin.scss',
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    { src: '~/plugins/ymapPlugin.js', mode: 'client' },
    { src: '~/plugins/vScrollLock.js', mode: 'client' },
    { src: '~/plugins/smoothScroll.js', mode: 'client' },
    { src: '~/plugins/vMask.js', mode: 'client' },
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: ['@aceforth/nuxt-optimized-images'],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa',
    '@nuxtjs/axios',
  ],
  axios: {
    // extra config e.g
    headers: { Authorization: 'Basic FD566FDA9F77376AADBF7A47EA5D9' },
  },
  // PWA module configuration: https://go.nuxtjs.dev/pwa
  pwa: {
    manifest: {
      lang: 'en',
      name: 'Oyster Telecom',
      short_name: 'Oyster',
      icon: {
        source: '~/static/favicon.ico',
        fileName: 'favicon.ico',
      },
    },
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},
}
