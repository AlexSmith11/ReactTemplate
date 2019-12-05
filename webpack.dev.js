const path = require('path');
const merge = require('webpack-merge');

const common = require('./webpack.common.js');

const port = 5656;

module.exports = merge(common, {
  mode: 'development',
  devtool: 'source-map',

  devServer: {
    contentBase: path.join(__dirname, 'public'),
    compress: true,
    port
  },

  module: {
    rules: [
      {
        test: /(\.scss|.sass)$/,
        exclude: /(node_modules|dist)/,
        use: [
          {
            loader: 'style-loader'
          },

          {
            loader: 'css-loader',
            options: {
              sourceMap: true
            }
          },

          {
            loader: 'sass-loader',
            options: {
              sourceMap: true
            }
          }
        ]
      }
    ]
  }
});
