const path = require('path');
const webpackNodeExternals = require('webpack-node-externals');
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');

module.exports = {
  target: 'node',
  entry: './src/server/index.ts',
  output: {
    path: path.resolve(__dirname, './build/server'),
    filename: 'server.js'
  },
  externals: [webpackNodeExternals()],
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
        exclude: ['/node-modules/', '/build']
      }
    ]
  },
  resolve: {
    plugins: [
      new TsconfigPathsPlugin({
        configFile: './tsconfig.json',
        extensions: ['.ts', '.tsx', '.js', '.jsx']
      })
    ],
    extensions: ['.ts', '.tsx', '.js', '.jsx']
  }
};
