export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Oyster Telecom - оператор связи для бизнеса в Санкт-Петербурге',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content:
          'Услуги связи и  IT сервисы для бизнеса.\n' +
          'Доступ в интернет, обслуживание оптоволоконной и офисной инфраструктуры, организация wi-fi, телефония, IP видеонаблюдение и нейросетевая аналитика, виртуализация и перенос бизнеса в облако.',
      },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  css: [
    '~/assets/fonts/Montserrat.scss',
    '~/assets/colors.scss',
    '~/assets/common-style.scss',
    '~/assets/media_mixin.scss',
  ],

  router: {
    middleware: 'yMetrics',
  },
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
  // render: {
  //   bundleRenderer: {
  //     shouldPreload: (file, type) => {
  //       return ['font'].includes(type)
  //     },
  //   },
  // },
  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa',
    '@nuxtjs/axios',
    '@nuxtjs/dotenv',
    '@nuxtjs/robots',
    // '@nuxtjs/gtm',
  ],
  robots: [
    {
      UserAgent: '*',
      Disallow: () => '/sla001' 
    },
    {
      UserAgent: '*',
      Disallow: () => '/legal' 
    },
    {
      UserAgent: '*',
      Disallow: () => '/privacy' 
    },
    {
      UserAgent: '*',
      Disallow: () => '/wifiok' 
    },
    {
      UserAgent: '*',
      Disallow: () => '/service/cases' 
    },
  ],
  // gtm: {
  //   id: 'GTM-T9VCHD3',
  //   autoInit: true,
  //   respectDoNotTrack: true,
  //
  //   scriptId: 'gtm-script',
  //   scriptDefer: false,
  //   scriptURL: 'https://www.googletagmanager.com/gtm.js?id=GTM-T9VCHD3',
  //   crossOrigin: false,
  // },
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
