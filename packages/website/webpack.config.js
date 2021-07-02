const path = require('path');
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

const { NODE_ENV = 'development' } = process.env;
const isProduction = NODE_ENV === 'production';
const tsConfigFilePath = path.join(__dirname, 'tsconfig.json');

module.exports = {
  mode: NODE_ENV,
  devtool: isProduction ? false : 'eval-source-map',
  entry: {
    app: './src/index.tsx'
  },
  output: {
    path: path.join(__dirname, 'public'),
    filename: '[name].js'
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'ts-loader',
            options: {
              configFile: tsConfigFilePath,
              transpileOnly: true
            }
          }
        ]
      }
    ]
  },
  resolve: {
    extensions: ['.js', '.ts', '.tsx'],
    plugins: [
      new TsconfigPathsPlugin({
        configFile: tsConfigFilePath
      })
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(__dirname, 'src/index.html'),
      filename: 'index.html',
      chunks: ['app'],
      showErrors: true
    }),
    new CopyWebpackPlugin({
      patterns: [{
        from: path.join(__dirname, 'static'),
        to: path.join(__dirname, 'public')
      }]
    })
  ],
  devServer: {
    host: '127.0.0.1',
    port: 9100,
    watchContentBase: true,
    disableHostCheck: true,
    compress: true,
    contentBase: path.join(__dirname, 'public'),
    open: true
  }
};
