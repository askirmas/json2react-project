const withCSS = require('@zeit/next-css'),
  pages = require('./pages')

module.exports = withCSS({
  cssModules: true,
  exportPathMap: function() {
    return Object.assign(
      {
        '/': { page: '/', query: {json: 'home'} }
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