export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Favour Felix - helping people with efficient and intuitive computer software.',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      {
        name: 'description',
        content:
          'This is the official portfolio of Favour Felix. I enjoy building software, helping people with efficient and intuitive computer software has always been the dream. These days I live the dream at Acumen Digital'
      },
      {
        hid: 'og:image',
        name: 'og:image',
        content: 'https://firebasestorage.googleapis.com/v0/b/favour-portfolio.appspot.com/o/favour-felix.jpg?alt=media&token=903343a2-0823-4383-9b9f-3ad1cad45180'
      }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/icon?family=Material+Icons'
      }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '@assets/global.css'
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    { src: '~/plugins/firebase', ssr: false }
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module'
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
  ],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  },

  target: 'static'
}
