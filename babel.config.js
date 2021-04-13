/** @module babel.config
 *  @desc Babel configuration
 *  @since 2019.03.06, 12:00
 *  @changed 2021.04.13, 15:02
 */

const srcPath = './src';

const srcFolders = [
  'demo',
  'config',
  'elements',
  'forms',
  'utils',
  'helpers',
];

module.exports = {
  presets: [
    ['@babel/preset-env', {
      targets: { ie: '11' },
      // useBuiltIns: 'usage', // NOTE: Causes over-transpiling (eg, for userAgent) and crashing in Chrome's DevTool with "Cannot assign to read only property 'exports' of object '#<Object>'" for config ES5 modules
      // corejs: 3,
      loose: true,
    }],
    // ['@babel/preset-flow'],
    ['@babel/preset-react'],
    // ['@babel/preset-typescript'],
  ],
  plugins: [
    '@babel/plugin-transform-runtime',
    '@babel/plugin-proposal-class-properties',
    '@babel/plugin-transform-arrow-functions',
    '@babel/plugin-proposal-optional-chaining',
    '@babel/plugin-proposal-export-default-from', // Single-line export syntax
    '@babel/plugin-syntax-export-namespace-from', // Singlie-line reexport as namespace -- https://www.npmjs.com/package/@babel/plugin-syntax-export-namespace-from
    ['module-resolver', { // https://github.com/tleunen/babel-plugin-module-resolver
      root: [srcPath],
      extenstions: ['.ts', '.tsx', '.js', '.jsx'],
      alias: srcFolders.reduce((aliases, dir) => {
        return { ...aliases, [dir]: srcPath + '/' + dir };
      }, { '~': srcPath }),
    }],
    ['directory-resolver', { moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx'] }], // https://github.com/mgcrea/babel-plugin-directory-resolver
  ],
};
