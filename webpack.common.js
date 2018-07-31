const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
  entry: './src/index.js',
  plugins: [
    new HtmlWebpackPlugin({title: 'From Scratch'}),
    new CleanWebpackPlugin(['./dist'])
  ],
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {presets: ['env']}
        }
      },
      {
        test: /\.(c|sc|sa)ss$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {importLoaders: 2}
          },
          'postcss-loader',
          'sass-loader'
        ]
      }
    ]
  },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist')
  }
};