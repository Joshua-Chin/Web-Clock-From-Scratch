process.env.BABEL_ENV = 'development';
process.env.NODE_ENV = 'development';

const merge = require('webpack-merge');
const common = require('./webpack.common');

module.exports = merge(common, {
  mode: 'development',
  devtool: 'eval-source-map',
  devServer: {
    publicPath: '/',
    proxy: {
      '/api': {
        target: 'http://localhost:3000',
        pathRewrite: {'^/api': ''}
      }
    }
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {importLoaders: 1}
          },
          'postcss-loader'
        ]
      }
    ]
  }
});
