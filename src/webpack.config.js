const path = require('path');
const webpack = require('webpack');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
   mode: 'development',
   entry: './index.js',
   devtool: 'inline-source-map',
   output: {
      filename: 'bundle.[hash].js',
      path: path.resolve(__dirname, '../dist'),
   },
   devServer: {
      historyApiFallback: true,
      contentBase: path.resolve(__dirname, '../dist'),
      open: true,
      compress: true,
      hot: true,
      port: 8080,
   },
   module: {
      rules: [
         {
            test: /\.js$/,
            exclude: /node_modules/,
            use: ['babel-loader'],
         },
         {
            test: /\.css$/i,
            use: [MiniCssExtractPlugin.loader, 'css-loader'],
         },
         {
            test: /\.s[ac]ss$/i,
            use: [
               'style-loader',
               'css-loader',
               'sass-loader',
            ],
         },
         {
            test: /\.html$/i,
            // use: ['file-loader?name=[name].[ext]', 'extract-loader', 'html-loader'],
            loader: 'html-loader',
         }
      ],
   },
   plugins: [
      new CleanWebpackPlugin(),
      new HtmlWebpackPlugin({
         title: "Weekly scheduler",
      }),
      new MiniCssExtractPlugin(),
      new webpack.HotModuleReplacementPlugin(),
   ],
}