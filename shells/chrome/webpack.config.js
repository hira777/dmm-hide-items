const path = require('path');
const webpack = require('webpack');

module.exports = {
  entry: {
    hideItems: './src/hideItems.js',
    options: './src/options.js',
  },
  output: {
    path: path.join(__dirname, 'build'),
    filename: '[name].js',
  },
};
