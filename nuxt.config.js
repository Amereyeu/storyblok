const axios = require('axios');

export default {
  mode: 'universal',
  /*
   ** Headers of the page
   */
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      {
        charset: 'utf-8'
      },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1'
      },
      {
        hid: 'description',
        name: 'description',
        content: process.env.npm_package_description || ''
      }
    ],
    link: [
      {
        rel: 'icon',
        type: 'image/x-icon',
        href: '/favicon.ico'
      },
      {
        rel: 'stylesheet',
        href: "https://fonts.googleapis.com/css?family=Big+Shoulders+Text|Montserrat&display=swap"
      },
      {
        rel: 'stylesheet',
        href: 'https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css'
      },
      {
        rel: 'stylesheet',
        href: '/markdown.css'
      }
    ],
    script: [
      {
        src: 'https://code.jquery.com/jquery-3.4.1.slim.min.js'
      },
      {
        src: 'https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js'
      },
      {
        src: 'https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/js/bootstrap.min.js'
      }
    ]
  },
  /*
   ** Customize the progress-bar color
   */
  loading: {
    color: '#188188'
  },
  /*
   ** Global CSS
   */
  css: [
  ],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: [
  ],
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [
  ],
  /*
   ** Nuxt.js modules
   */
  modules: [
    //font-awesome
    [
      'nuxt-fontawesome', {
        component: 'fa',
        imports: [
          {
            set: '@fortawesome/free-solid-svg-icons',
            icons: ['fas']
         },
          {
            set: '@fortawesome/free-brands-svg-icons',
            icons: ['fab']
         }
       ]
      }
    ],
    // Doc: https://bootstrap-vue.js.org
    'bootstrap-vue/nuxt',
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    //storyblok access token
    ['storyblok-nuxt', {
      accessToken: process.env.NODE_ENV == 'production' ? '5aukxakV2AfcwhFAkTOBKQtt' : 'ga3EtBXKdJryhDam0vZqkAtt',
      cacheProvider: 'memory'
     }]
  ],
  generate: {
    routes: function () {
      return axios
        .get('https://api.storyblok.com/v1/cdn/stories?&version=published&token=5aukxakV2AfcwhFAkTOBKQtt&starts_with=blog&cv=' + Math.floor(Date.now() / 1e3))
        .then(res => {
          const blogPosts = res.data.stories.map(bp => bp.full_slug)
          return [
          '/',
          '/about',
          '/blog',
          ...blogPosts
        ]
        })
    }
  },
  /*
   ** Axios module configuration
   ** See https://axios.nuxtjs.org/options
   */
  axios: {},
  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {}
  }
}
