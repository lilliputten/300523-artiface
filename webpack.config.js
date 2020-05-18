/**
 * @desc Webpack configuration
 * @since 2020.05.18, 12:00
 * @changed 2020.05.18, 15:22
 */

const path = require('path')
// const webpack = require('webpack')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const WebpackBuildNotifierPlugin = require('webpack-build-notifier') // https://www.npmjs.com/package/webpack-build-notifier
// const CopyWebpackPlugin = require('copy-webpack-plugin')
// const HtmlWebpackPlugin = require('html-webpack-plugin')
// const TerserPlugin = require('terser-webpack-plugin')
// const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin')
// const ExtractCssPlugin = require('mini-css-extract-plugin')

module.exports = (env, argv) => {

  const mode = argv.mode || 'production'
  const isCosmos = (process.env.npm_lifecycle_event === 'cosmos') // Runs under react-cosmos?
  const isDevServer = isCosmos || !!argv.host // (mode === 'none'); // (none = server) // Alternate method: !!argv.host
  const hotReload = isDevServer
  // const cssHotReload = hotReload // Hot reload css for dev-server
  const isStats = !!argv.profile
  const isWatch = !!argv.watch
  const isDev = (/* isDevServer || */ mode === 'development')
  const isProd = !isDev // mode === 'production'
  const useDevTool = true && (isDev || isDevServer) // Need server restart
  // const minimizeBundles = true && isProd // To minimize production bundles
  // // const stripDebugger = true // Comment out all the `debugger` statements from source code
  // const preprocessBundles = true && isProd // To minimize production bundles
  // const sourceMaps = !preprocessBundles // To minimize production bundles
  // const extemeUglify = false // Use mangling (WARNING: May broke some code! Don't use without testing!)
  // const DEBUG = true && (isDev || isDevServer)

  // Stats waiting only json on output...
  const debugModes = [
    // dateTag,
    // mode,
    // 'ip:' + myIP,
    isCosmos && 'Cosmos',
    isDevServer && 'DevServer',
    isWatch && 'Watch',
    isDev && 'Development',
    isProd && 'Production',
    useDevTool && 'DevTool',
    // minimizeBundles && 'minimize',
    // preprocessBundles && 'preprocess',
    // sourceMaps && 'sourceMaps',
    // extemeUglify && 'extemeUglify',
    // DEBUG && 'DEBUG',
    // THEME && 'theme:' + THEME,
  ].filter(x => x).join(' ')
  if (!isStats) {
    console.log('Build parameters:', debugModes) // eslint-disable-line no-console
  }

  const htmlFilename = 'index.html'

  const buildFolder = `build-${isProd ? 'prod' : 'dev'}`
  const buildPath = path.resolve(__dirname, buildFolder)

  return {
    mode,
    entry: './src/index.jsx',
    resolve: {
      extensions: ['.js', '.jsx'],
    },
    output: {
      filename: 'main.js',
      path: path.resolve(__dirname, buildPath),
    },
    watch: isWatch,
    devtool: useDevTool && 'source-map', // 'cheap-module-source-map',
    devServer: {
      hot: hotReload,
      index: htmlFilename,
      // contentBase: buildPath,
      watchContentBase: true,
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
      /* TODO:
       * css/postcss (with cssHotReload/style-loader/ExtractCssPlugin.loader)
       * resources (Not for demo)
       */
    ]},
    plugins: [
      !isDevServer && !isStats && new CleanWebpackPlugin({ // Cleanup before build
        cleanOnceBeforeBuildPatterns: [
          path.join(buildPath, '**/*'),
        ],
        exclude: ['.gitkeep'],
        beforeEmit: true,
        // verbose: true,
        // dry: false,
      }),
      new WebpackBuildNotifierPlugin({
        // title, logo,
        suppressSuccess: true,
      }),
      /* TODO:
       * new webpack.DefinePlugin // Pass constants to source code
       * new CopyWebpackPlugin
       * new HtmlWebpackPlugin
       * new webpack.NoEmitOnErrorsPlugin
       * !cssHotReload && new ExtractCssPlugin
       */
    ].filter(x => x),
  }
}
