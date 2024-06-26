const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const EslintPlugin = require('eslint-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyPlugin = require('copy-webpack-plugin');
const postcss = require('postcss');

const mode = process.env.NODE_ENV || 'development';
const devMode = mode === 'development';
const devTool = devMode ? 'inline-source-map' : undefined;
const devServer = devMode ? { static: path.resolve(__dirname, './dist') } : undefined;
const folder = 'dist';

const styleHandler = devMode
  ? 'style-loader'
  : {
      loader: MiniCssExtractPlugin.loader,
      options: {
        defaultExport: true,
      },
    };

const cssLoaderWithModules = {
  loader: 'css-loader',
  options: {
    modules: true,
  },
};

const cssLoaderNoModules = {
  loader: 'css-loader',
  options: {
    modules: false,
  },
};

module.exports = {
  entry: path.resolve(__dirname, './src/index'),
  mode: mode,
  devtool: devTool,
  devServer: devServer,
  module: {
    rules: [
      {
        test: /\.css$/i,
        exclude: /\.module\.css$/i,
        use: [styleHandler, cssLoaderNoModules, 'postcss-loader'],
      },
      {
        test: /\.css$/i,
        include: /\.module\.css$/i,
        use: [styleHandler, cssLoaderWithModules, 'postcss-loader'],
      },
      {
        test: /\.s[ac]ss$/i,
        exclude: /\.module\.s[ac]ss$/i,
        use: [styleHandler, cssLoaderNoModules, 'postcss-loader', 'sass-loader'],
      },
      {
        test: /\.s[ac]ss$/i,
        include: /\.module\.s[ac]ss$/i,
        use: [styleHandler, cssLoaderWithModules, 'postcss-loader', 'sass-loader'],
      },
      {
        test: /\.tsx$/i,
        use: 'ts-loader',
      },
      {
        test: /\.(jpg|png|svg|jpeg|gif)$/,
        type: 'asset/resource',
      },
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
  output: {
    filename: '[name].[contenthash].js',
    path: path.resolve(__dirname, `./${folder}`),
    clean: true,
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, './src/index.html'),
      filename: 'index.html',
      // favicon: path.resolve(__dirname, './src/favicon.ico'),
    }),
    new EslintPlugin({ extensions: 'ts' }),
    new MiniCssExtractPlugin({
      filename: '[name].[contenthash].css',
    }),
    new CopyPlugin({
      patterns: [
        {
          from: path.resolve(__dirname, './src/images'),
          to: path.resolve(__dirname, `./${folder}/images`),
        },
      ],
    }),
  ],
};
