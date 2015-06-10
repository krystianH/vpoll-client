'use strict';

module.exports = {
  entry: './player.js',
  output: {
    path: './dist',
    filename: 'player.js'
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel?optional[]=runtime'
      },
      { test: /\.less$/, loader: 'style-loader!css-loader!less-loader' },
      { test: /\.(png|jpg)$/, loader: 'url-loader?limit=8192'}
    ]
  }
};
