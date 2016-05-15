//
// (c) 2016-XX, PJ$
// me@pjstein.co
// home.base
//
// webpack.config.js
//

'use strict';

const ExtractTextPlugin = require("extract-text-webpack-plugin");
const dev_config        = require('./webpack.config.dev')(80);
const webpack           = require('webpack');
const path              = require('path');

// Exports ---------------------------------------------------------------------
module.exports = Object.assign(dev_config, {
  devtool : 'cheap-module-source-map',

  entry : [
    path.join(dev_config.core, 'index')
  ],

  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify('production')
      }
    }),
    new webpack.optimize.UglifyJsPlugin({
      compressor: {
        warnings: false
      }
    }),
    new webpack.optimize.LimitChunkCountPlugin({ maxChunks: 1 }),
    new webpack.optimize.DedupePlugin(),
    new ExtractTextPlugin("style.css", {
        allChunks: true
    })
  ],

  module: {
    loaders: [
      {
        test    : /\.js$/,
        loaders : [ 'babel-loader' ],
        include : dev_config.core,
        exclude : /node_modules/
      },
      {
          test: /\.css$/,
          loader: ExtractTextPlugin.extract("style-loader", "css-loader")
      }
    ]
  }
});
