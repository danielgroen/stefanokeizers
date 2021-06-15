const site = {
  title: 'Stefano Keizers',
  hostname: 'https://stefanokeizers.nl',
  description: 'Dit is de website van Stefano Keizers',
  keywords: 'Stefano Keizers, theater, toneel, show, presentator',
}

export default {
  // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
  ssr: false,

  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',
  rootDir: 'src',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: site.title,
    htmlAttrs: {
      lang: 'NL-nl',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: site.description },
      { 'http-equiv': 'X-UA-Compatible', content: 'IE=edge' },
      { name: 'description', content: site.description },
      { name: 'keywords', content: site.keywords },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { name: 'HandheldFriendly', content: 'True' },
      { name: 'author', content: site.title },
      { name: 'MobileOptimized', content: '320' },
      { name: 'robots', content: 'index, nofollow' },
      { name: 'last-modified', content: 'Sun, 3 Sep 2017 14:00:46 GMT ' },
      { name: 'cache-control', content: 'Private' },
      { name: 'Expires', content: '600' },
      { property: 'og:title', content: site.title },
      {
        property: 'og:image',
        content: '/img/stefano-hoofd.jpg',
      },
      { property: 'og:url', content: site.hostname },
      { property: 'og:type', content: 'website' },
      { property: 'og:description', content: site.description },
      { property: 'og:site_name', content: site.title },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  env: {
    API: 'https://api.ntk.nl/',
  },
  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ['~/assets/scss/main.scss'],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: [
    { path: '~/components/', extensions: ['vue'] },
    { path: '~/components/Atom/', prefix: 'Atom' },
    { path: '~/components/Organism/', prefix: 'Organism' },
  ],

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    '@nuxt/typescript-build',
    '@nuxtjs/composition-api/module',
    // https://go.nuxtjs.dev/stylelint
    '@nuxtjs/stylelint-module',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    '@nuxtjs/svg',
    'nuxt-rfg-icon',
    '@nuxtjs/manifest',
    '@nuxtjs/sitemap',
    '@nuxt/content',
    '@nuxtjs/component-cache',
    [
      'nuxt-font-loader-strategy',
      {
        ignoredEffectiveTypes: ['2g', 'slow-2g'],
        fonts: [
          {
            fileExtensions: ['ttf'],
            fontFamily: 'Source Sans Pro',
            fontFaces: [
              {
                preload: true,
                src: '@/assets/fonts/SourceSansPro-Regular',
                fontWeight: 400,
                fontStyle: 'normal',
              },
              {
                preload: true,
                src: '@/assets/fonts/SourceSansPro-SemiBold',
                fontWeight: 600,
                fontStyle: 'normal',
              },
              {
                preload: true,
                src: '@/assets/fonts/SourceSansPro-Bold',
                fontWeight: 700,
                fontStyle: 'normal',
              },
              {
                preload: true,
                src: '@/assets/fonts/SourceSansPro-Black',
                fontWeight: 900,
                fontStyle: 'normal',
              },
            ],
          },
        ],
      },
    ],
  ],
  router: {
    trailingSlash: true,
  },
  sitemap: {
    hostname: site.hostname,
    trailingSlash: true,
  },
  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},
  generate: {
    dir: '../dist',
    fallback: true,
    // TODO:: remove below, temp fix for nuxt composition, they gona fix it
    interval: 2000,
  },
}
