const nodeExternals = require('webpack-node-externals');
const webpack = require('webpack');
module.exports = {
  /*
  ** Headers of the page
  */
  mode: 'spa',
  head: {
    title: 'nuxt-spa-test',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { 'http-equiv': 'X-UA-Compatible', content: 'IE=edge,chrome=1' },
      { name: 'referrer', content: 'always' },
      { hid: 'description', name: 'description', content: '张博-' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ],
    script: [
    ]
  },
  css: [
    'normalize.css/normalize.css',
    { src: '~assets/css/index.scss', lang: 'scss' }
  ],
  env: {
    BASE_URL: process.env.BASE_URL,
    NPM_ENV: process.env.NPM_ENV
  },
  /*
  ** Customize the progress bar color
  */
  loading: { color: '#3B8070' },
  /*
  ** Build configuration
  */
  build: {
    // vendor: ['babel-polyfill', 'eventsource-polyfill', 'jquery', 'lodash', 'highcharts'],
    /*
    ** Run ESLint on save
    */
    extend(config, { isDev, isClient, isServer }) {
      if (isDev && isClient) {
        // config.entry['polyfill'] = ['babel-polyfill'];
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        });
      }
      if (isServer) {
        config.externals = [
          nodeExternals({
            whitelist: [/es6-promise|\.(?!(?:js|json)$).{1,5}$/i, /^vue-echarts/]
          })
        ];
      }
      config.plugins.push(
        new webpack.ProvidePlugin({
          jQuery: 'jquery',
          $: 'jquery',
          'window.jQuery': 'jquery'
        })
      );
    }
  },

  plugins: [
    '~/plugins/element-ui/element-ui',
    '~/plugins/axios',
    '~/plugins/constants',
    '~/assets/fonts/iconfont/iconfont.js'
  ],
  router: {
    middleware: ['router'],
    scrollBehavior: (to, from, savePosition) => {
      let ele = document.querySelector('#toTop');
      if (ele) {
        document.querySelector('#toTop').scrollTop = 0;
      }
      return { x: 0, y: 0 };
    }
  },
  modules: ['@nuxtjs/axios', '@nuxtjs/proxy', '@nuxtjs/robots'],
  // 防盗
  robots: {
    UserAgent: '*',
    Disallow: '/'
  },
  // 多个代理
  proxy: [
    [
      '/qingqiu1',
      {
        target: process.env.BASE_URL,
        headers: {
          Origin: process.env.BASE_URL,
          Connection: 'keep-alive'
        }
      }
    ],
    [
      '/qingqiu2',
      {
        target: process.env.BASE_URL,
        headers: {
          Origin: process.env.BASE_URL,
          Connection: 'keep-alive'
        }
      }
    ]
  ],
  axios: {
    baseURL: ''
  }
};
