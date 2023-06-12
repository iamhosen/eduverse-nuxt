export default {
  // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
  ssr: false,

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    titleTemplate: 'Eduverse',
    title: 'Eduverse',
    meta: [
      { charset: 'utf-8' },
      {
        name: 'viewport',
        content:
          'width=device-width, user-scalable=no, initial-scale=1, maximum-scale=1, minimum-scale=1',
      },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: 'icon.png' }],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '~/assets/scss/app.scss',
    '~/assets/scss/common.scss',
    '@mdi/font/css/materialdesignicons.css',
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: ['~/plugins/init'],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/vuetify
    '@nuxtjs/vuetify',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    // https://go.nuxtjs.dev/pwa
    ['@nuxtjs/pwa', { workbox: false }],
    // https://go.nuxtjs.dev/content
    '@nuxtjs/auth',
    '@nuxtjs/proxy',
    '@nuxtjs/toast',
    ['cookie-universal-nuxt', { alias: 'cookiz' },],
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    withCredentials: true,
    proxy: true,
    prefix: process.env.API_PREFIX,
    headers: {
      common: {
        Secret: '65dsa156sda15dsa1dsa65',
      },
    },
  },

  proxy: {
    '/api': process.env.DEV_SERVER_HOST,
    '/v1': process.env.DEV_SERVER_HOST,
    '/api/v1': process.env.DEV_SERVER_HOST,
  },

  env: {
    MAP_API_KEY: process.env.MAP_API_KEY,
  },

  auth: {
    redirect: {
      login: '/auth',
      logout: false,
      callback: '/auth',
      home: false,
    },
    strategies: {
      local: {
        endpoints: {
          login: false,
          user: {
            url: '/management/auth/me',
            method: 'get',
            propertyName: false,
            autoFetch: false,
          },
          logout: false,
        },
        autoFetchUser: false,
        tokenType: 'Bearer',
      },
    },
    plugins: ['~/plugins/api', '~/plugins/service'],
  },

  // PWA module configuration: https://go.nuxtjs.dev/pwa
  pwa: {
    meta: {
      theme_color: '#B21F66',
    },
    manifest: {
      name: 'سومک',
      short_name: 'سومک',
      description: 'اپلیکیشن سومک',
      background_color: '#B21F66',
      lang: 'fa',
      dir: 'rtl',
    },
    icon: { source: '~/static/icon.png' }
  },

  // Vuetify module configuration: https://go.nuxtjs.dev/config-vuetify
  vuetify: {
    customVariables: ['~/assets/scss/variables.scss'],
    treeShake: true,
    defaultAssets: false,
    rtl: true,
    icons: {
      iconfont: 'mdi',
    },
    theme: {
      dark: false,
      options: { customProperties: true },
      themes: {
        light: {
          primary: {
            base: '#B21F66',
            lighten4: '#ECD1E2',
          },
          secondary: {
            base: '#111D5E',
            lighten2: '#7D84A9',
            lighten3: '#E4E5EE',
            lighten4: '#F2F3FA',
          },
          thirdly: {
            base: '#FFBD69',
            lighten4: '#F5E8DD',
          },
          bg: '#F9FAFF',
        },
      },
    },
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},

  server: {
    host: '0.0.0.0',
    port: process.env.LOCAL_PORT,
  },

  toast: {
    position: 'bottom-left',
    iconPack: 'mdi',
    duration: 3000,
    action: {
      icon: 'mdi-close',
      onClick: (e, toastObject) => {
        toastObject.goAway(0)
      },
    },
  },
}
