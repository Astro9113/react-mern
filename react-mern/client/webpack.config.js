const webpack = require('webpack');
const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const config = {
  context: __dirname,
  entry: './src/index.js',
  output: {
    path: __dirname,
    filename: 'bundle.js',
  },
  module: {
    loaders: [
      {exclude: /node_modules/, test: /\.(js|jsx)$/, loader: 'babel',},

      {test : /\.woff/, loader : 'url?prefix=font/&limit=10000&mimetype=application/font-woff'},
      {test : /\.ttf/, loader : 'file?prefix=font/'},
      {test : /\.eot/, loader : 'file?prefix=font/'},
      {test : /\.svg/, loader : 'file?prefix=font/'},

      { test: /\.css$/,  loader:  ExtractTextPlugin.extract("style-loader","css-loader") },
      { test: /\.scss$/, loader: ExtractTextPlugin.extract('css!sass') },
      { test:  /\.less$/,loader:  "style!css!less"},
    ],
  },
  devServer: {
    historyApiFallback: true,
    contentBase: './',
  },
  plugins: [
    new webpack.DefinePlugin({ 'process.env': { NODE_ENV: JSON.stringify('production') } }),
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.optimize.UglifyJsPlugin({
      compress: { warnings: false },
      output: { comments: false },
      mangle: false,
      sourcemap: false,
      minimize: true,
      mangle: { except: ['$super', '$', 'exports', 'require', '$q', '$ocLazyLoad'] },
    }),
    new ExtractTextPlugin('src/public/stylesheets/app.css', {
      allChunks: true,
    }),
  ],
};

module.exports = config;
