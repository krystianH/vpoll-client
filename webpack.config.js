'use strict';

module.exports = {
  entry: './src/vpoll-player.js',
  output: {
    path: './dist',
    filename: 'vpoll-player.js'
  },
  resolve: {
   alias: {
     'videojs-contrib-hls': 'videojs-contrib-hls/src/videojs-hls.js'
   }
 },
  module: {
    loaders: [
      { test: /\.js$/, exclude: /node_modules/, loader: 'uglify!babel?optional[]=runtime' },
      { test: /\.less$/, loader: 'style-loader!css-loader!autoprefixer-loader!less-loader' },
      { test: /\.(png|jpg)$/, loader: 'url-loader?limit=8192' },
      { test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: "url-loader?limit=10000&minetype=application/font-woff" },
      { test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: "file-loader" }
    ]
  },
};


