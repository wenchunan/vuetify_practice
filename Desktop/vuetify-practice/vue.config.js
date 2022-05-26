const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: [
    'vuetify'
  ],
  css: {
    loaderOptions: {
      sass: {
        additionalData: `@import"@/assets/base.scss"`
      }
    }
  },
  publicPath: process.env.NODE_ENV === 'production'
    ? '/vuetify_practice/'
    : '/'
})
