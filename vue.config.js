module.exports = {
  devServer: {
    proxy: {
      '/api': {
        target: 'http://shopweb.sweetysoft.com',
        secure: true,
        changeOrigin: true,
        pathRewrite: {
          '^/api': '',
        },
      }
    },
  },
}
