'use strict';

const webpack = require('webpack');
const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

module.exports = {
  entry: {
    app: './js/index.js',
    vendor: ['react', 'react-dom', 'whatwg-fetch', 'react-bootstrap', 'babel-polyfill', 'react-router',
             'react-router-bootstrap', 'react-router-dom', 'axios', 'react-redux',
             'redux', 'redux-thunk'],
  },
  output: {
    path: path.resolve(__dirname, 'static'),
    filename: '[name].[chunkhash].js'
  },
  plugins: [
    new webpack.optimize.CommonsChunkPlugin({names: ['vendor', 'manifest']}),
    new ExtractTextPlugin('bundle.[chunkhash].css'),
    new HtmlWebpackPlugin({
      template: './static/index.html'}),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('production')
    }),
    new webpack.optimize.UglifyJsPlugin()
  ],
  devServer: {
    port: 8080,
    contentBase: 'static',
    proxy: {
      '/': {
        target: 'http://localhost:3000'
      }
    }
  },

  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        loader: 'babel-loader',
        query: {
          presets: ['react', 'es2015']
        }
      },
      {
        test: /\.scss$/,
        loaders: ExtractTextPlugin.extract({fallback:'style-loader',
        use: 'css-loader!sass-loader!resolve-url-loader'})
      },
      {
        test: /\.(jpe?g|png|gif|svg)$/i,
        loaders: [
            'file-loader?hash=sha512&digest=hex&name=[hash].[ext]',
            'image-webpack-loader?bypassOnDebug&optimizationLevel=7&interlaced=false'
        ]
      }
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx', '.scss']
  }
};