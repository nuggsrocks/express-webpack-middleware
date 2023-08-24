const webpack = require('webpack')
const webpackDevMiddleware = require('webpack-dev-middleware')
const webpackHotMiddleware = require('webpack-hot-middleware')

module.exports = (app, webpackConfig) => {
  const compiler = webpack(webpackConfig)

  app.use(
    webpackDevMiddleware(compiler, {
      publicPath: webpackConfig.output.publicPath,
    }),
  )

  app.use(webpackHotMiddleware(compiler))
}