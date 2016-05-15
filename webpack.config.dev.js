//
// (c) 2016-XX, PJ$
// me@pjstein.co
// home.base
//
// webpack.config.dev.js
//

'use strict';

const webpack = require('webpack')
const path    = require('path');

// Constants -------------------------------------------------------------------
const UI   = __dirname;
const OUT  = path.join(UI, 'public');
const CORE = path.join(UI, 'core');

// Exports ---------------------------------------------------------------------
module.exports = (port) => {
  return {
    devtool : 'eval',

    core : CORE,

    out : OUT,

    entry : [
      `webpack-dev-server/client?http://localhost:${port}`,
      'webpack/hot/only-dev-server',
      path.join(CORE, 'index')
    ],

    output: {
      path       : OUT,
      filename   : 'bundle.js',
      publicPath : `/public/`
    },

    plugins: [
      new webpack.HotModuleReplacementPlugin()
    ],

    module: {
      loaders: [
        {
          test    : /\.js$/,
          loaders : [ 'react-hot', 'babel' ],
          include : CORE,
          exclude : /node_modules/
        },
        {
          test   : /\.css$/,
          loader : 'style-loader!css-loader'
        }
      ]
    }
  }
}






