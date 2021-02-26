/** @module demo
 *  @desc Demo app entry point
 *  @since 2020.05.19, 17:16
 *  @changed 2021.02.15, 18:05
 */
/* eslint-disable react/jsx-max-depth */

import 'es5-shim/es5-shim';
import 'es5-shim/es5-sham';
import 'react-app-polyfill/ie9';
import 'react-app-polyfill/stable';

import React from 'react';
import { render } from 'react-dom';

/* // UNUSED: redux
 * import { Provider } from 'react-redux'
 * import {
 *   createStore,
 *   combineReducers,
 *   // compose,
 *   // applyMiddleware, // Not used (see `middlewares`)
 * } from 'redux'
 */

// import Loader from 'elements/Loader'

import * as demoSupport from './demoSupport';

// import * as build from './build'
import WebUiCoreRoot from './build';

// Demo app styles
import './demo.pcss';

import { demoFixtures } from './demoFixtures';

// import { testVar } from './test'; // ts test
// console.log(testVar);
// debugger;

/* // DEBUG: Check strings module
 * import { strings } from 'utils'
 * console.log(strings)
 * debugger
 * const x = strings.toType('number', '11')
 * debugger
 */

/* DEBUG: Check configure module
 * import { configure } from 'utils'
 * console.log(configure && configure.cssMapping)
 * debugger
 */

/* // DEBUG: Test css-module mappings substitution
 * import { utils } from './build'
 * utils.configure.setConfigOptions({
 *   useCssModules: true,
 *   cssMappings: {
 *     WebUiCoreTest: '__MODULE__WebUiCoreTest',
 *     Test: '__MODULE__Test',
 *     Hello: '__MODULE__Hello',
 *     FormLabel: '__MODULE__FormLabel',
 *   },
 * })
 */

// DEBUG: Test language internationalizing
import { utils } from './build';
const lang = {
  components: {
    // lang: 'en-US',
    lang: 'ru-RU',
    // lang: 'en',
    // lang: 'ru',
    common: {
      okButton: 'Lang: Ok',
      cancelButton: 'Lang: Cancel',
      loading: 'Lang: Loading',
    },
    calendar: {
      timeCaption: 'Время',
      previousYearButtonLabel: 'Пред.год',
      nextYearButtonLabel: 'След.год',
      previousMonthButtonLabel: 'Пред.месяц',
      nextMonthButtonLabel: 'След.месяц',
    },
  },
};
// Method 1: Using specified `setLang` method
// utils.lang.setLang(lang)
// Method 2: Using config options...
utils.configure.setConfigOptions({
  lang,
});

const findFixture = window.location.search && window.location.search.match(/\bfixture=(([^&:]+)(?::([^&]+))?)/);
// const fullFixtureId = findFixture && findFixture[1]
const fixtureId = findFixture && findFixture[2];
const fixtureItemId = findFixture && findFixture[3];
const fixtureModuleExports = fixtureId && demoFixtures[fixtureId];

let content;

if (fixtureModuleExports) { // Found fixture
  const {
    default: fixture,
    demoTitle = 'Demo fixture: ' + fixtureId, // fullFixtureId,
    DemoWrapper,
  } = fixtureModuleExports;
  content = demoSupport.PlaceFixture({ fixtureId, fixture, fixtureItemId, demoTitle, DemoWrapper });
}
else if (fixtureId) { // Fixture specified but not found!
  content = 'Fixture for id "' + fixtureId + '" not found!';
}
else { // List all available fixtures to display
  const fixtures = demoSupport.FixturesContents(demoFixtures);
  content = (
    <div className="demoIndex">
      <h3 className="demoIndex-Title">Available fixtures</h3>
      {fixtures}
      <h3 className="demoIndex-Title">Available demos</h3>
      (TODO)
      <p className="demoIndex-Comment">TODO: Navigation, styles, hierarchical components structure</p>
    </div>
  );
}

/* // Demo redux state...
 * export function demoReducer(state = {}, action) {
 *   switch (action.type) {
 *     case 'LOAD_RESPONSE':
 *       return { ...action.payload }
 *     default:
 *       return state
 *   }
 * }
 * const appReducer = combineReducers({
 *   demo: demoReducer,
 * })
 * const rootReducer = (state, action) => {
 *   if (action.type === 'DESTROY_STORE') {
 *     state = undefined
 *   }
 *   return appReducer(state, action)
 * }
 * const store = createStore(
 *   rootReducer,
 *   // composeEnhancers(mountedMiddleware [> applyMiddleware(...middlewares) <]),
 * )
 * const demoContent = (
 *   <Provider store={store}>
 * // ...
 */

const demoContent = (
  <WebUiCoreRoot autoModalsContainer>
    <div className="demo">
      {content}
    </div>
  </WebUiCoreRoot>
);

render(demoContent, document.getElementById('Root'));
