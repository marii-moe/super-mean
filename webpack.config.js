var webpack = require('webpack')
var path = require('path')

module.exports = {
  devtool: 'inline-source-map',
  entry: [
    'webpack-dev-server/client?http://0.0.0.0:8080/',
    'webpack/hot/only-dev-server',
    './src/'
  ],
  output: {
    path: path.join(__dirname, 'public'),
    filename: 'bundle.js'
  },
  resolve: {
    modules: [
      path.resolve('node_modules'),
      path.resolve('src')
    ]
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      },
      {
        test: /\.html$/,
        loader: 'raw-loader'
      }
    ]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin()
  ],
  devServer: {
    hot: true,
    proxy: {
      '*':'http://localhost:3000'
    }
  }
}
