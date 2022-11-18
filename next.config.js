const withTM = require('next-transpile-modules')([]) // pass the modules you would like to see transpiled

module.exports = withTM({
  
})

module.exports = {
  distDir: 'build',
  reactStrictMode: true,
  images: {
    domains: ['rb.gy', 'image.tmdb.org'],
  },
}
