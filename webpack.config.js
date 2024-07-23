const path = require('path');
const HtmlWebPackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.join(__dirname, 'dist'),
    filename: '[name].bundle.js',
    chunkFilename: '[name].chunk.js',
    publicPath: '/',
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: 'babel-loader',
      },
      // {
      //   test: /\.css$/,
      //   use: ['style-loader', 'css-loader'],
      // },
      // {
      //   test: /\.html$/,
      //   use: ['html-loader'],
      // },
    ],
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: './src/index.html',
    }),
  ],
  optimization: {
    splitChunks: {
      chunks: 'all',
    },
  },
  devServer: {
    host: 'localhost',
    port: process.env.PORT || 8080,
    historyApiFallback: true,
    open: true,
  },
};
