const path = require('path');
const merge = require('webpack-merge');
const cssnano = require('cssnano');
const OptimizeCssAsetsPlugin = require('optimize-css-assets-webpack-plugin');
const baseConfig = require('./webpack.base');

const projectRoot = process.cwd();

const prodConfig = {
  mode: 'production',
  output: {
    path: path.resolve(projectRoot, 'dist'),
    filename: '[name]_[hash].bundle.js',
  },
  plugins: [
    new OptimizeCssAsetsPlugin({
      assetsNameRegExp: /\.css$/g,
      cssProcessor: cssnano,
    }),
  ],
  optimization: {
    splitChunks: {
      minSize: 0,
      cacheGroups: {
        commons: {
          name: 'commons',
          chunks: 'all',
          minChunks: 2,
        },
      },
    },
  },
};
module.exports = merge(baseConfig, prodConfig);
