/** @module demo
 *  @desc Demo app entry point
 *  @since 2020.05.19, 17:16
 *  @changed 2021.05.31, 16:24
 */
/* eslint-disable react/jsx-max-depth */

import 'es5-shim/es5-shim';
import 'es5-shim/es5-sham';
import 'react-app-polyfill/ie9';
import 'react-app-polyfill/stable';

import React from 'react';
import { render } from 'react-dom';

// DEBUG: redux
import { Provider } from 'react-redux';
import {
  createStore,
  combineReducers,
  // compose,
  // applyMiddleware, // Not used (see `middlewares`)
} from 'redux';
// console.log('demo:DEBUG', {
//   createStore,
// });
// debugger;

// import Loader from 'elements/Loader'

// // import * as WebUiCore from 'WebUiCore';
// const WebUiCore = require('./build');
// const { FormButton } = WebUiCore;
// console.log({ FormButton });
// debugger;

import * as demoSupport from './demoSupport';

// import * as build from './build'
import WebUiCoreRoot from './build';

// Demo app styles
import './demo.pcss';

import demoFixtures from './demoFixtures';

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
      test: 'Lang: Test string',
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

function getFixtureContent() {
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

  return content;
}

const content = getFixtureContent();

// DEBUG: Demo redux state...
const demoInitialState = { stateTest: 'Zero' };
export function demoReducer(state = demoInitialState, action) {
  console.log('demo:demoReducer', { state, action });
  // debugger;
  switch (action.type) {
    case 'LOAD_RESPONSE':
      return { ...action.payload };
    case 'SET_TEST':
      return { stateTest: action.payload };
    default:
      return state;
  }
}
const appReducer = combineReducers({
  demo: demoReducer,
  language: () => lang,
});
const rootReducer = (state, action) => {
  if (action.type === 'DESTROY_STORE') {
    state = undefined;
  }
  return appReducer(state, action);
};
const store = createStore(
  rootReducer,
  // composeEnhancers(mountedMiddleware /* applyMiddleware(...middlewares) */),
);
// const demoContent = (
//   <Provider store={store}>
//   // ...
store.dispatch({ type: 'SET_TEST', payload: 'Initial value' });
// Set `store` to config...
utils.configure.setConfigOptions({
  store,
});

const demoContent = (
  <Provider store={store}>
    <WebUiCoreRoot autoModalsController>
      <div className="demo">
        {content}
      </div>
    </WebUiCoreRoot>
  </Provider>
);

render(demoContent, document.getElementById('Root'));
