import colors from 'vuetify/es5/util/colors'
import auth from './middleware/auth'
import firebase from "firebase/app"

export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  server: {
    port: 8000, // default: 3000
    host: '127.0.0.1', // default: localhost,
    timing: false
  },
  head: {
    titleTemplate: '%s - board-front',
    title: 'board-front',
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },
  publicRuntimeConfig: {
    axios: {
      baseURL: 'http://127.0.0.1:8000/api/token/'
    },
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    // '@nuxtjs/eslint-module',
    // https://go.nuxtjs.dev/stylelint
    '@nuxtjs/stylelint-module',
    // https://go.nuxtjs.dev/vuetify
    '@nuxtjs/vuetify',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  ssr: 'true',
  target: 'server',
  modules: [
    '@nuxtjs/axios',
    '@nuxtjs/auth-next',
    // Simple usage
    'cookie-universal-nuxt',
    ['@nuxtjs/firebase',
    {
      config: {
        apiKey: "AIzaSyAmXx--dYugASIlRzSkDLm_yIFaYLcMyWY",
        authDomain: "new-firebase-6462e.firebaseapp.com",
        projectId: "new-firebase-6462e",
        storageBucket: "new-firebase-6462e.appspot.com",
        messagingSenderId: "266441447413",
        appId: "1:266441447413:web:f70d67388dae834f8df2bc"
      },
      services: {
        auth: true
      }
    }
  ],

    // With options
    ['cookie-universal-nuxt', { alias: 'cookiz' }],
  ],
  
  auth: {
    strategies: {
      cookie: {
        cookie: {
          name: 'auth._token.local'
        }
      },
      local: {
        tokne: {
          property: 'accessToken',
          globla: true
        },
        user: {
          property: 'user'
        },
        endpoints: {
          login: { url: 'login/', method: 'post'},
          user: { url: 'user/', method: 'post', property: 'data'},
        },
      },
    }
  },

  router: {
    middleware: ['auth']
  },


  // Vuetify module configuration: https://go.nuxtjs.dev/config-vuetify
  vuetify: {
    customVariables: ['~/assets/variables.scss'],
    theme: {
      dark: true,
      themes: {
        dark: {
          primary: colors.blue.darken2,
          accent: colors.grey.darken3,
          secondary: colors.amber.darken3,
          info: colors.teal.lighten1,
          warning: colors.amber.base,
          error: colors.deepOrange.accent4,
          success: colors.green.accent3,
        },
      },
    },
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},


  env: {
    FIRE_ENV: process.env.FIRE_ENV
  },
  generate: {
    dir: '../public'
  }
}

