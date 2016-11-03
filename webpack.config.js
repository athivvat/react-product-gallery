var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin     = require('extract-text-webpack-plugin');

var HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
  template: __dirname + '/src/index.html',
  filename: 'index.html',
  inject: 'body'
})

// To extract the styles from the bundle
var ExtractTextPluginConfig = new ExtractTextPlugin('styles/main.css', {
  allChunks: true
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
        test: /\.css$/,
        exclude: /node_modules/,
        loader: ExtractTextPlugin.extract('style-loader', 'css-loader?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]!postcss-loader')
      },
      {
        test: /\.(jpe?g|png)$/,
        exclude: /node_modules/,
        loader: 'url-loader?limit=100000&name=images/[name].[ext]'
      }
    ]
  },
  postcss: [
    require('autoprefixer-core'),
  ],
  devServer: {
    contentBase: 'dist'
  },
  plugins: [HtmlWebpackPluginConfig, ExtractTextPluginConfig]
}
