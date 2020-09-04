
const path = require('path');
const webpack = require('webpack');
const { merge } = require('webpack-merge');
const { config } = require('process');

module.exports = function (env) {
  const isDevelopment = env === 'development';
  console.log(
    `This is a ${isDevelopment ? 'development' : 'production'} build`
  );
  const baseConfig = {
    entry: './app/app.js',
    output: {
      path: path.resolve(__dirname, 'app/dist'),
      publicPath: '/dist/',
      filename: 'app.bundle.js',
    }
  }
}