const merge = require('webpack-merge');

const common = require('./webpack.common.js');

module.exports = merge(common, {
  mode: 'production',

  output: {
    filename: 'app.min.js'
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
              sourceMap: false
            }
          },

          {
            loader: 'sass-loader',
            options: {
              sourceMap: false
            }
          }
        ]
      }
    ]
  }
});
