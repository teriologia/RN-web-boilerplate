const path = require('path');
const webpack = require('webpack');

const appDirectory = path.resolve(__dirname, '../');

const babelLoaderConfiguration = {
  test: /\.js$/,
  include: [
    path.resolve(appDirectory, 'index.web.js'),
    path.resolve(appDirectory, 'App.js'),
  ],
  use: {
    loader: 'babel-loader',
    options: {
      cacheDirectory: true,
      presets: ['module:metro-react-native-babel-preset'],
      plugins: ['react-native-web'],
    },
  },
};
const imageLoaderConfiguration = {
  test: /\.(gif|jpe?g|png|svg)$/,
  use: {
    loader: 'url-loader',
    options: {
      name: '[name].[ext]',
    },
  },
};

module.exports = {
  entry: [path.resolve(appDirectory, 'index.web.js')],
  output: {
    filename: 'bundle.js',
    path: path.resolve(appDirectory, 'web'),
  },

  module: {
    rules: [babelLoaderConfiguration, imageLoaderConfiguration],
  },

  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(
        process.env.NODE_ENV || 'development',
      ),
      __DEV__: process.env.NODE_ENV === 'production' || true,
    }),
  ],

  resolve: {
    alias: {
      'react-native$': 'react-native-web',
    },
    extensions: ['.web.js', '.js'],
  },

  devServer: {
    contentBase: path.join(appDirectory, 'web'),
    compress: true,
    port: 3000,
  },
};
