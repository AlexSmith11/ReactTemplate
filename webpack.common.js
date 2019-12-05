const path = require('path');

module.exports = {
  entry: ['@babel/polyfill', path.join(__dirname, 'src', 'main.js')],

  target: 'web',

  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'app.js'
  },

  module: {
    rules: [
      {
        test: /(\.js|\.jsx)$/,
        exclude: /(node_modules|dist)/,
        use: [
          {
            loader: 'babel-loader'
          }
        ]
      }
    ]
  }
};
