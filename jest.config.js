// @see:
// - https://jestjs.io/docs/en/webpack.html
// - https://github.com/facebook/jest/issues/3094
module.exports = {
  // testURL: 'http://localhost',
  testPathIgnorePatterns: ['node_modules'],
  moduleFileExtensions: ['js','jsx'],
  // transform: {
  //   '^.+\\.js$': 'babel-jest',
  //   // '^.+\\.(ts|tsx)$' : 'ts-jest',
  //   // '.+\\.(css|styl|less|sass|scss)$': 'jest-transform-css',
  // },
  testMatch: [
    '**/src/**/*.test.+(js|jsx)',
  ],
  moduleNameMapper: {
    // '~/(.*)': './src/$1',
    // '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$': '<rootDir>/__mocks__/fileMock.js',
    '\\.(pcss|css|less|svg)$': '<rootDir>/__mocks__/style.js',
  },
  // testEnvironment: '<rootDir>/__mocks__/customizedJsdomEnv.js',
  setupFiles: [ '<rootDir>/__mocks__/setup.js', ],
  modulePaths: [
    '<rootDir>/src',
  ],
  // testEnvironment: 'jsdom',
  // transform: {},
  // transform : {
  //   // '^.+\\.(js|jsx)$' : 'babel-jest',
  //   // 'node_modules/variables/.+\\.(j|t)sx?$': 'ts-jest'
  //   // 'node_modules/react-redux/es/connect/.*': 'babel-jest',
  // },
  transformIgnorePatterns: [
    // |date-fns/esm/locale
    'node_modules/(?!(react-redux/es|@babel/runtime/helpers/esm)/)',
    // 'node_modules/(?!(react-redux/es/connect|@babel/runtime/helpers/esm|react-redux/es/components/)/)',
    // 'node_modules/(?!variables/.*)',
  ],
  // setupFilesAfterEnv: ['mock-local-storage'],
};
