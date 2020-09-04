const path = require('path');
const HtmlWebPackPlugin = require('html-webpack-plugin');
module.exports = function (env) {
  return {
    entry: {
      vendor: ['./src/js/vendors/vendor1.js', './src/js/vendors/vendor2.js'],
      main: './src/js/index.js',
    },
    output: {
      path: path.resolve(__dirname, 'public'),
      filename: '[name].[contentHash].bundle.js',
      publicPath: '/',
    },
    devServer: {
      contentBase: path.resolve(__dirname, 'public'),
      publicPath: '/',
    },
    module: {
      rules: [
        {
          test: /\.(js|jsx)$/,
          exclude: /(node_modules|bower_components)/,
          use: {
            loader: 'babel-loader',
          },
        },
      ],
    },
    plugins: [
      new HtmlWebPackPlugin({
        template: './public/index.html',
        filename: './index.html',
      }),
    ],
  };
};