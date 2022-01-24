const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');

let mode = 'development'; // По умолчанию режим development
if (process.env.NODE_ENV === 'production') {
  // Режим production, если
  // при запуске webpack было указано --mode=production
  mode = 'production';
}

const plugins = [];
if (process.env.NODE_ENV === 'development') {
  plugins.push('react-refresh/babel');
}

if (process.env.SERVE) {
  // Используем плагин только если запускаем devServer
  plugins.push(new ReactRefreshWebpackPlugin());
} // Данный код должен быть размещен после объявления массива plugins

module.exports = {
  mode,
  // context: path.resolve(__dirname, 'src'),
  entry: './src/index.tsx',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
  },
  devtool: 'inline-source-map', // показывает в каком конкретно файле ошибка
  resolve: {
    extensions: ['.tsx', '.ts', '.js', 'jsx'],
    alias: {
      styles: path.resolve(__dirname, './src/components/styles'),
      components: path.resolve(__dirname, './src/components'),
    },
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
      favicon: './src/assets/favicon.png',
    }),
    new MiniCssExtractPlugin({
      runtime: false,
    }),
    ...plugins,
  ],
  module: {
    // как файлы будут восприниматься webpack
    rules: [
      {
        test: /\.(j|t)sx?$/, // проверка файлов которые попадают в модуль
        exclude: /node_modules/,
        include: path.resolve(__dirname, 'src'),
        use: [
          {
            loader: 'babel-loader',
            options: {
              cacheDirectory: true,
              presets: ['@babel/preset-react', '@babel/preset-typescript'],
            },
          },
          {
            loader: 'ts-loader',
            options: {
              configFile: 'tsconfig.json',
            },
          },
        ],
      },
      {
        test: /\.css$/i,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: {
              sourceMap: true,
            },
          },
        ],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: 'asset/resource',
      },
    ],
  },
  devServer: {
    hot: true,
    port: 3000,
  },
};
