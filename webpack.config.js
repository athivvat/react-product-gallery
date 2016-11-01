var HtmlWebpackPlugin = require('html-webpack-plugin');

var HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
  template: __dirname + '/src/index.html',
  filename: 'index.html',
  inject: 'body'
})

module.exports = {
  entry: [
    './src/index.js'
  ],
  output: {
    path: __dirname + '/dist',
    publicPath: '/',
    filename: "bundle.js"
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel'
      },
      {
        test: /\.(jpe?g|png)$/,
        exclude: /node_modules/,
        loader: 'url-loader?limit=100000&name=images/[name].[ext]'
      }
    ]
  },
  devServer: {
    contentBase: 'dist'
  },
  plugins: [HtmlWebpackPluginConfig]
}
