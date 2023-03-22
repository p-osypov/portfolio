const path = require('path');
const webpack = require('webpack');
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');

const PATHS = {
  src: path.resolve(__dirname, 'src/app/'),
  build: path.resolve(__dirname, 'build/'),
  server: path.resolve(__dirname, 'src/server/')
};

module.exports = {
  entry: PATHS.src,
  output: {
    filename: '[name].js',
    path: PATHS.build
  },
  watchOptions: {
    ignored: ['/node_modules/', '/server/**', 'package.json']
  },
  module: {
    rules: [
      {
        test: /\.(ts|js)x?$/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              '@babel/preset-env',
              '@babel/preset-typescript',
              ['@babel/preset-react', { runtime: 'automatic' }]
            ]
          }
        },
        exclude: /node_modules/
      },
      {
        test: /\.ejs$/i,
        use: ['html-loader', 'template-ejs-loader']
      }
    ]
  },

  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx'],
    plugins: [
      new TsconfigPathsPlugin({
        configFile: './tsconfig.json',
        extensions: ['.ts', '.tsx', '.js', '.jsx']
      })
    ]
  },
  plugins: [
    // Here we set to webpack use env from direnv instead of standard env vars.
    new webpack.DefinePlugin({
      'process.env': JSON.stringify(process.env)
    }),
  ],
  devtool: 'source-map'
};
