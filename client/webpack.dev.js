process.env.BABEL_ENV = 'development';
process.env.NODE_ENV = 'development';

const merge = require('webpack-merge');
const common = require('./webpack.common');

module.exports = merge(common, {
  mode: 'development',
  devtool: 'eval-source-map',
  devServer: {
    contentBase: './dist'
  }
});