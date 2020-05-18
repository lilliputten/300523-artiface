const path = require('path')

const useDevTool = true
const hotReload = true
const htmlFilename = 'index.html'
const buildPath = 'build'

module.exports = {
  entry: './src/index.jsx',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, buildPath),
  },
  devtool: useDevTool && 'source-map', // 'cheap-module-source-map',
  devServer: {
    hot: hotReload,
    index: htmlFilename,
    // contentBase: buildPath,
    watchContentBase: true,
    // outputPath: buildPath, // Causes error
    port: 8080,
    host: '0.0.0.0',
  },
  module: { rules: [
    { // JS
      test: /\.(js|jsx)$/,
      exclude: /(node_modules)/,
      loader: 'babel-loader',
      options: {
        // sourceRoot: '/',
        retainLines: true,
        cacheDirectory: true,
      },
    },
  ] },
}
