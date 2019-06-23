const withCSS = require('@zeit/next-css');

const pages = ['first', 'second']

module.exports = withCSS({
  cssModules: true,
  exportPathMap: function() {
    return Object.assign(
      {
        '/': { page: '/' },
        '/services': { page: '/services' },
      },
      ...pages.map(page => (
        {
          [`/services/${page}`]: {
            page: '/service',
            query: {
              json: page
            }
          }
        }
      ))
    )
  }
});