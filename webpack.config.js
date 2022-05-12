const path = require('path');

module.exports = {
  entry: './js/app-mobile.js',
  output: {
    filename: 'app-mobile.js',
    path: path.resolve(__dirname, 'dist'),
  },
  mode: 'development'
};