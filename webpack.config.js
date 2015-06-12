'use strict';

var webpack = require('webpack');

module.exports = {
  entry: './src/vpoll-player.js',
  output: {
    path: './dist',
    filename: 'vpoll-player.js'
  },
  resolve: {
    alias: {
      'video.js': 'video.js/dist/video-js/video.dev.js',
      'videojs-contrib-media-sources': 'videojs-contrib-media-sources/src/videojs-media-sources.js',
      'videojs-contrib-hls': '../vendor/videojs.hls-0.17.1.js'
    }
  },
  module: {
    loaders: [
      { test: /\.js$/, exclude: /(node_modules)|(vendor)/, loader: 'babel?optional[]=runtime' },
      { test: [/videojs-contrib-media-sources/, /videojs\.hls/], loader: 'imports?this=>window' },
      { test: /\.less$/, loader: 'style-loader!css-loader!autoprefixer-loader!less-loader' },
      { test: /\.(png|jpg)$/, loader: 'url-loader?limit=8192' },
      { test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: 'url-loader?limit=10000&minetype=application/font-woff' },
      { test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: 'file-loader' }
    ]
  },
  plugins: [
    new webpack.ProvidePlugin({
      vjs: 'video.js',
      videojs: 'video.js',
      'window.vjs': 'video.js',
      'window.videojs': 'video.js'
    })
  ]
};
