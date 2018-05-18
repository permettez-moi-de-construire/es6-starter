const path = require('path')
const webpack = require('webpack')

module.exports = {
  mode: process.env.NODE_ENV,
  entry: {
    index: [
      'core-js',
      'dom4',
      './src/scripts/index.js'
    ]
  },
  output: {
    filename: './scripts/[name].js',
    sourceMapFilename: './scripts/[name].js.map'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        include: path.join(
          __dirname,
          'src'
        ),
        use: {
          loader: 'babel-loader'
          // config inside .babelrc
        }
      }
    ]
  },
  plugins: [
    new webpack.EnvironmentPlugin({
      NODE_ENV: undefined
    })
  ],
  devtool: 'source-map'
}
