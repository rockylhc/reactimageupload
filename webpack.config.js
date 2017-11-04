const { resolve, join } = require('path');
const webpack = require("webpack");

module.exports = {
  entry: [
		'react-hot-loader/patch',
		'webpack-dev-server/client?http://localhost:8888',
		'webpack/hot/only-dev-server',
		'./src/index.js'
  ],
  output: {
    path: resolve(__dirname, "src"),
    filename: 'bundle.js',
	  publicPath: '/static/'
  },
  module: {
      loaders: [{
          test: /\.js$/,
          exclude: /node_modules/,
          loaders: ['react-hot-loader/webpack', 'babel-loader?presets[]=react'],
      }]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NamedModulesPlugin(),
    new webpack.NoEmitOnErrorsPlugin()
  ],
  devtool: 'source-map',
  devServer: {
    port:8888,
    historyApiFallback: true,
    hot: true
  }
};
