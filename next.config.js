const withCSS = require('@zeit/next-css'),
  pages = require('./pages')

module.exports = withCSS({
  cssModules: true,
  assetPrefix: "..",
  exportPathMap: function() {
    return Object.assign(
      {
        '/': { page: '/', query: {json: 'home', redirect: 1} }
      },
      ...Object.keys(pages).map(page => (
        {
          [`/${page}`]: {
            page: '/',
            query: {
              json: page
            }
          }
        }
      ))
    )
  }
});