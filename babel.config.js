/** @module babel.config
 *  @desc Babel configuration
 *  @since 2019.03.06, 12:00
 *  @changed 2020.05.18, 15:23
 */

// const srcFolders = [
//   // 'actions',
//   // 'api',
//   // 'components',
//   // 'config',
//   // 'constants',
//   // 'containers',
//   // 'helpers',
//   // 'i18n',
//   // // 'lib',
//   // 'pages',
//   // 'reducers',
//   // 'saga',
//   // 'sagas',
//   // 'store',
//   // 'template',
//   // 'tests',
//   // 'uikit',
// ]

module.exports = {
  presets: [
    ['@babel/preset-env', {
      targets: {
        ie: '11',
      },
      useBuiltIns: 'usage',
      corejs: 3,
      loose: true,
      // exclude: [
      //   // '@babel/plugin-transform-typeof-symbol',
      //   // '@babel/polyfill',
      //   // '@babel/plugin-transform-runtime',
      // ],
    }],
    ['@babel/preset-react'],
    // ['@babel/preset-flow'],
  ],
  plugins: [
    '@babel/plugin-transform-runtime',
    // '@babel/plugin-proposal-class-properties',
    // '@babel/plugin-transform-arrow-functions',
    // '@babel/plugin-proposal-optional-chaining',
    // '@babel/plugin-proposal-export-default-from', // Single-line export syntax
    // '@babel/plugin-syntax-export-namespace-from', // Singlie-line reexport as namespace -- https://www.npmjs.com/package/@babel/plugin-syntax-export-namespace-from
    // ['module-resolver', { // https://github.com/tleunen/babel-plugin-module-resolver
    //   root: ['./src'],
    //   alias: srcFolders.reduce((aliases, dir) => {
    //     aliases[dir] = ['./src/' + dir]
    //     return aliases
    //   }, {}),
    // }],
    // ['directory-resolver', { moduleFileExtensions: ['js', 'jsx'] }], // https://github.com/mgcrea/babel-plugin-directory-resolver
  ],
}
