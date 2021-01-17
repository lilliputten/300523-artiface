module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 62);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

if (false) { var throwOnDirectAccess, ReactIs; } else {
  // By explicitly using `prop-types` you are opting into new production behavior.
  // http://fb.me/prop-types-in-prod
  module.exports = __webpack_require__(25)();
}


/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),
/* 2 */
/***/ (function(module, exports) {

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

module.exports = _defineProperty;

/***/ }),
/* 3 */
/***/ (function(module, exports) {

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

module.exports = _assertThisInitialized;

/***/ }),
/* 4 */
/***/ (function(module, exports) {

function _inheritsLoose(subClass, superClass) {
  subClass.prototype = Object.create(superClass.prototype);
  subClass.prototype.constructor = subClass;
  subClass.__proto__ = superClass;
}

module.exports = _inheritsLoose;

/***/ }),
/* 5 */
/***/ (function(module, exports) {

function _extends() {
  module.exports = _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

module.exports = _extends;

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

/** @module config
 *  @description App config
 *  @since 2019.08.29, 10:28
 *  @changed 2020.12.22, 00:32
 */

var config = {
  app: __webpack_require__(17),
  build: __webpack_require__(18),
  constants: __webpack_require__(19),
  css: __webpack_require__(20),
  modals: __webpack_require__(22),
  ui: __webpack_require__(23),
  userAgent: __webpack_require__(24) };


module.exports = config;

/***/ }),
/* 7 */
/***/ (function(module, exports) {

module.exports = require("react-dom");

/***/ }),
/* 8 */
/***/ (function(module, exports) {

module.exports = require("@fortawesome/react-fontawesome");

/***/ }),
/* 9 */
/***/ (function(module, exports) {

module.exports = require("@fortawesome/free-solid-svg-icons");

/***/ }),
/* 10 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global, module) {/* harmony import */ var _ponyfill_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(14);
/* global window */


var root;

if (typeof self !== 'undefined') {
  root = self;
} else if (typeof window !== 'undefined') {
  root = window;
} else if (typeof global !== 'undefined') {
  root = global;
} else if (true) {
  root = module;
} else {}

var result = Object(_ponyfill_js__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(root);
/* harmony default export */ __webpack_exports__["a"] = (result);

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(11), __webpack_require__(34)(module)))

/***/ }),
/* 11 */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || new Function("return this")();
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),
/* 12 */
/***/ (function(module, exports) {

module.exports = require("@bem-react/classname");

/***/ }),
/* 13 */
/***/ (function(module, exports) {

module.exports = require("@fortawesome/free-regular-svg-icons");

/***/ }),
/* 14 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return symbolObservablePonyfill; });
function symbolObservablePonyfill(root) {
	var result;
	var Symbol = root.Symbol;

	if (typeof Symbol === 'function') {
		if (Symbol.observable) {
			result = Symbol.observable;
		} else {
			result = Symbol('observable');
			Symbol.observable = result;
		}
	} else {
		result = '@@observable';
	}

	return result;
};


/***/ }),
/* 15 */,
/* 16 */,
/* 17 */
/***/ (function(module, exports) {

/** @module config.app
 *  @description Core app config
 *  @since 2019.09.10, 14:25
 *  @changed 2020.12.22, 00:32
 */

module.exports = { // Common-used app variables...

  defaultPageSize: 20, // Number of entries per page

  useCssModules: false, // To use css-module mappings (see `cssMappings` below)

  // Css-modules mappings in format `{ [originalClassName]: transformedClassName }`.
  // Set it with `WebUiCore.utils.setFactoryOptions(React, { useCssModules: true, cssMappings })`
  cssMappings: null,

  // cssModulePrefix: 'WebUiCore', // UNUSED

  lang: null // i18n language texts provider (from target project) // TODO
  // Mostly using texts from `lang.components.common`
};

/***/ }),
/* 18 */
/***/ (function(module, exports) {

/** @module config.build
 *  @description Build management config
 *  @since 2019.09.10, 14:25
 *  @changed 2019.09.10, 14:25
 */

var DEBUG = false;
var DEV_DEBUG = false;

module.exports = { // Common-used build variables...

  DEBUG: DEBUG,
  DEV_DEBUG: DEV_DEBUG,

  THEME: "default",
  buildTag: "v.0.2.2-210117-2006-build-prod-default",
  timestamp: "2021.01.17, 20:06",
  timetag: "210117-2006",
  version: "0.2.2" };

/***/ }),
/* 19 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "dateFormat", function() { return dateFormat; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "timeFormat", function() { return timeFormat; });
/** @module config.constants
 *  @description Basic constants
 *  @since 2019.09.10, 14:25
 *  @changed 2020.05.10, 06:13
 */

/** Date conversion & presentation templates... */
var dateFormat = 'DD.MM.YYYY HH:mm';
var timeFormat = 'HH:mm';

/** App title parts delimiter */
// export const pageDelim = ' – ' // en-dash

/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

/** @module config.css
 *  @description Global styles config
 *  @since 2019.08.29, 10:28
 *  @changed 2020.12.24, 18:19
 */

// Theme...
var THEME = "default";
var theme = __webpack_require__(21);

// Some reusable parameters...
var defaultFontSize = theme.defaultFontSize || 16;
var textColor = theme.textColor || '#444';

var defaultTransitionTime = 250;
var defaultAnimateTime = 500;

var errorColor = theme.errorColor || '#c33';
var warnColor = theme.warnColor || '#f73'; // '#f96'
var successColor = theme.successColor || '#593'; // '#ac9'
var infoColor = theme.infoColor || theme.primaryColor; // '#29a' // '#9bd'
var confirmColor = theme.confirmColor /* || theme.primaryColor || textColor */ || '#891'; // '#07f'
var selectColor = theme.selectColor || '#05b';

// module.exports = { // Common-used css variables...
var cssConfig = { // Common-used css variables...

  THEME: THEME,

  primaryColor: theme.primaryColor,
  primaryLightColor: theme.primaryLightColor,
  primaryDarkColor: theme.primaryDarkColor,
  primaryContrastColor: theme.primaryContrastColor,

  secondaryColor: theme.secondaryColor,
  secondaryLightColor: theme.secondaryLightColor,
  secondaryDarkColor: theme.secondaryDarkColor,
  secondaryContrastColor: theme.secondaryContrastColor,

  // Colors...

  // Colors for dialogs styles
  errorColor: errorColor, // theme.errorColor || '#c33',
  warnColor: warnColor, // theme.warnColor || '#f73', // '#f96',
  successColor: successColor, // theme.successColor || '#593', // '#ac9',
  infoColor: infoColor, // theme.infoColor || '#29a', // '#9bd',
  confirmColor: confirmColor, // theme.confirmColor /* || theme.primaryColor || textColor */ || '#891', // '#07f',
  selectColor: selectColor, // theme.selectColor || '#05b',

  specialContrastColor: '#fff', // Generic contrast for accenting colors

  textColor: textColor,
  defaultTextColor: textColor,

  // Neutral colors...

  neutralExtraDarkColor: '#666',
  neutralDarkColor: '#999',
  neutralTintedDarkColor: '#aaa',
  neutralShadedColor: '#bbb',
  neutralColor: '#ccc',
  neutralTintedColor: '#d0d0d0',
  neutralLightColor: '#e0e0e0',
  neutralExtraLightColor: '#f0f0f0',

  // Theme colors...

  bodyBgColor: theme.bodyBgColor || '#fff',
  bodyTextColor: theme.bodyTextColor || '#333',
  layoutBgColor: theme.layoutBgColor || '#f0f0f0',
  layoutLightBgColor: theme.layoutLightBgColor || '#f7f7f7',

  layoutBorderColor: theme.layoutBorderColor || '#ccc',

  themeColors: { // Generic theming colors...

    // primary: theme.primaryColor,
    // secondary: theme.primaryColor,

    error: errorColor,
    warn: warnColor,
    success: successColor,
    info: infoColor,
    confirm: confirmColor,
    select: selectColor,

    // red: '#c33',
    // orange: '#f73',
    // green: '#593',
    // grassGreen: '#891',
    // Blue: '#05b',
    // lightBue: '#29a',

    maroon: '#800000',
    red: '#ff0000',
    purple: '#800080',
    fuchsia: '#ff00ff',
    green: '#008000',
    // lime: '#00ff00',
    olive: '#808000',
    // yellow: '#ffff00',
    navy: '#000080',
    blue: '#0000ff',
    teal: '#008080',
    // aqua: '#00ffff',
    orange: '#ffa500',

    blueviolet: '#8a2be2',
    brown: '#a52a2a',
    cadetblue: '#5f9ea0',
    darkblue: '#00008b',
    darkcyan: '#008b8b',
    darkgoldenrod: '#b8860b',
    darkorange: '#ff8c00',
    darkorchid: '#9932cc',
    darkred: '#8b0000',
    darkslateblue: '#483d8b',
    darkslategray: '#2f4f4f' },



  // Fonts...

  defaultFont: theme.defaultFont || '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',

  defaultFontSize: defaultFontSize,
  fontSize: defaultFontSize,
  fontSizeM: defaultFontSize,
  fontSizeSm: defaultFontSize - 2,
  fontSizeXs: defaultFontSize - 4,
  fontSizeLg: defaultFontSize + 2,
  fontSizeXl: defaultFontSize + 4,
  fontSizeXxl: defaultFontSize + 8,
  titleFontSize: defaultFontSize + 8,
  defaultLineHeight: 1.6,
  // defaultFontWeight: 400,
  defaultFontWeight: 'normal',
  // defaultFontWeight: 500,
  // defaultBemFontSize: defaultFontSize,

  // Breakpoints (from bootstrap)
  bk_xs: 0,
  bk_sm_pre: 575.98,
  bk_sm: 576,
  bk_md_pre: 767.98,
  bk_md: 768,
  bk_lg_pre: 991.98,
  bk_lg: 992,
  bk_xl_pre: 1199.98,
  bk_xl: 1200,

  // Median breakpoints (breakpoints between popular screen sizes
  bm_xs: 0,
  bm_sm_pre: 399.98,
  bm_sm: 400,
  bm_md_pre: 699.98,
  bm_md: 700,
  bm_lg_pre: 799.98,
  bm_lg: 800,
  bm_xl_pre: 1099.98,
  bm_xl: 1100,

  // Modal sizes...
  modalMinWidth: 300, // Minimal width for 'auto' mode
  modalWindowPadding: 20, // Windows padding
  modalSizes: { // Generic theming colors...
    xs: 200,
    sm: 400,
    md: 600,
    lg: 800,
    xl: 1000,
    xxl: 1200 },


  // Spacings & paddings...

  innerPadding: 5,
  itemPadding: 10,
  containerPadding: 15,
  blockPadding: 20,

  // Timeouts & delays...

  transitionTime: defaultTransitionTime, // ms
  animateTime: defaultAnimateTime, // ms

  // Modals parameters...

  modalAnimateTime: defaultAnimateTime,
  modalWindowAnimateTime: defaultTransitionTime,

  // NOTE 2021.01.12, 13:54 -- `absolute` required for modal windows, `fixed` required for popups -- ???
  modalContainerPosition: 'absolute',
  modalPortalPosition: 'absolute'
  // modalContainerPosition: 'fixed',
  // modalPortalPosition: 'fixed',

  // Parameters...

  // // Use global flex container & in page components scrolls
  // // NOTE: 2019.06.14, 13:14 -- Not used. Using `html.Clippable` dynamically creating selectors.
  // useGlobalClipping: true,
};


var formItemSpacing = 4;
var formItemHeight = 32; // px
var formItemBorderSize = 1; // px
var formItemInnerHeight = formItemHeight - formItemBorderSize * 2; // px

Object.assign(cssConfig, { // Form properties...

  // Forms...

  formItemSpacing: formItemSpacing, // px
  formItemHeight: formItemHeight, // px
  formItemBorderSize: formItemBorderSize, // px
  formItemInnerHeight: formItemInnerHeight, // px

  formItemBorderRadius: 3, // px
  formItemBorderColor: cssConfig.neutralColor,
  formItemActorColor: cssConfig.neutralDarkColor,
  formItemBgColor: '#fff',
  formItemTextColor: cssConfig.defaultTextColor,
  formItemPlaceholderColor: cssConfig.neutralColor,
  formItemInnerPaddingH: 8,
  formItemDisabledOpacity: .5,

  formPlaceholderColor: '#ccc',

  // tableBorderWidth: 2,

  defaultIconSize: 24,
  smallIconSize: 16,

  popupContentGap: 4 });



module.exports = cssConfig;

/***/ }),
/* 21 */
/***/ (function(module, exports) {

/** @module config.themes.default
 *  @desc App theme css parameters
 *  @since 2019.09.06, 11:23
 *  @changed 2019.09.06, 11:24
 */

module.exports = {

  primaryDarkColor: '#06d', // '#c90'
  primaryColor: '#07f', // '#fc0'
  primaryLightColor: '#6af', // '#fe8'
  primaryContrastColor: '#fff',

  secondaryDarkColor: '#233',
  secondaryColor: '#677',
  secondaryLightColor: '#abb',
  secondaryContrastColor: '#fff' };

/***/ }),
/* 22 */
/***/ (function(module, exports) {

/** @module config.modals
 *  @description Core app config
 *  @since 2019.09.10, 14:25
 *  @changed 2020.12.22, 00:32
 */

var modalsConfig = { // Common-used app variables...

  // Id for modals & modals wrapper
  containerId: 'ModalsContainer',
  // containerClass: 'ModalsContainer',

  containerNode: null,
  domNode: null,

  isInited: false };



modalsConfig._initPromiseResolve = null;
modalsConfig.initPromise = new Promise(function (resolve) {
  modalsConfig._initPromiseResolve = resolve;
});

module.exports = modalsConfig;

/***/ }),
/* 23 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "defaultIcons", function() { return defaultIcons; });
/** @module config.ui
 *  @description Basic UI constants
 *  @since 2020.12.24, 21:01
 *  @changed 2020.12.24, 21:01
 */

var defaultIcons = {
  error: 'faExclamationCircle',
  warn: 'faBolt',
  success: 'faCheckCircle',
  info: 'faInfoCircle',
  confirm: 'faQuestionCircle',
  select: 'faListOl' };

/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {/** @module config.build
 *  @description Build management config
 *  @since 2019.09.10, 14:25
 *  @changed 2020.05.17, 04:12
 *
 * Detecting next browser features (see `detectUserAgent` function):
 *
 *  - ANTGalio
 *  - WebKit
 *  - Opera
 *  - Firefox
 *  - Safari
 *  - IE
 *  - Edge
 *  - Chrome
 *  - Blink
 *
 * NOTE: All config submodules uses only ES5 syntax (no webpack/babel poly/overfills for avoid compatibility issues)
 */

/** Prefix to add for each body agent class.
     * Adding `{cssAgentPrefix}BrowserId` class for each detected browser feature).
     * E.g.: 'ua_Chrome', 'ua_IE' etc...
     */
var cssAgentPrefix = 'ua_';

var hasOwnProperty = Object.prototype.hasOwnProperty;

function detectSafari() {
  var isSafari = false;
  try {
    isSafari = /constructor/i.test(String(global.HTMLElement));
  }
  catch (error) {} // eslint-disable-line no-empty
  if (!isSafari) {
    var notificationObject = global.safari && typeof global.safari !== 'undefined' && global.safari.pushNotification;
    isSafari = !!notificationObject && String(notificationObject) === '[object SafariRemoteNotification]';
  }
  return isSafari;
}

function detectUserAgent() {

  var agentString = String(global.navigator && global.navigator.userAgent || 'none');
  // var agentString = getAgentString()
  var document = global.document;
  var body = document && document.body /*  || {} */;

  var ua = {};

  ua.ANTGalio = agentString.indexOf('ANTGalio') !== -1;
  ua.WebKit = agentString.indexOf('WebKit') !== -1;

  ua.Opera = !!global.opr && !!global.opr.addons || !!global.opera || agentString.indexOf(' OPR/') != -1;

  // Firefox 1.0+
  ua.Firefox = typeof InstallTrigger !== 'undefined';

  // // Safari 3.0+ "[object HTMLElementConstructor]"
  // ua.Safari = /constructor/i.test(global.HTMLElement) || (function (p) { return p.toString() === "[object SafariRemoteNotification]" })(!global.safari || (typeof global.safari !== 'undefined' && global.safari.pushNotification))
  ua.Safari = detectSafari();

  ua.IE = /*@cc_on!@*/!!(document && document.documentMode);

  // Edge 20+
  ua.Edge = !ua.IE && !!global.StyleMedia;

  // Chrome 1 - 71
  ua.Chrome = !!global.chrome && (!!global.chrome.webstore || !!global.chrome.runtime);

  // Blink engine detection
  ua.Blink = (ua.Chrome || ua.Opera) && !!global.CSS;

  var agentData = {
    agentString: agentString,
    agentsList: [] };

  var cssAgentClasses = '';
  for (var key in ua) {// Filter non-false agent keys, construct agentsList...
    if (hasOwnProperty.call(ua, key) && ua[key]) {
      agentData[key] = ua[key];
      agentData.agentsList.push(key);
      cssAgentClasses += (cssAgentClasses ? ' ' : '') + cssAgentPrefix + key;
    }
  }

  if (body) {// Add agent classes to body class
    body.className = (body.className ? body.className + ' ' : '') + cssAgentClasses;
  }

  return agentData;

}

var userAgent = detectUserAgent();

module.exports = userAgent;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(11)))

/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var ReactPropTypesSecret = __webpack_require__(26);

function emptyFunction() {}
function emptyFunctionWithReset() {}
emptyFunctionWithReset.resetWarningCache = emptyFunction;

module.exports = function() {
  function shim(props, propName, componentName, location, propFullName, secret) {
    if (secret === ReactPropTypesSecret) {
      // It is still safe when called from React.
      return;
    }
    var err = new Error(
      'Calling PropTypes validators directly is not supported by the `prop-types` package. ' +
      'Use PropTypes.checkPropTypes() to call them. ' +
      'Read more at http://fb.me/use-check-prop-types'
    );
    err.name = 'Invariant Violation';
    throw err;
  };
  shim.isRequired = shim;
  function getShim() {
    return shim;
  };
  // Important!
  // Keep this list in sync with production version in `./factoryWithTypeCheckers.js`.
  var ReactPropTypes = {
    array: shim,
    bool: shim,
    func: shim,
    number: shim,
    object: shim,
    string: shim,
    symbol: shim,

    any: shim,
    arrayOf: getShim,
    element: shim,
    elementType: shim,
    instanceOf: getShim,
    node: shim,
    objectOf: getShim,
    oneOf: getShim,
    oneOfType: getShim,
    shape: getShim,
    exact: getShim,

    checkPropTypes: emptyFunctionWithReset,
    resetWarningCache: emptyFunction
  };

  ReactPropTypes.PropTypes = ReactPropTypes;

  return ReactPropTypes;
};


/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var ReactPropTypesSecret = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';

module.exports = ReactPropTypesSecret;


/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 34 */
/***/ (function(module, exports) {

module.exports = function(originalModule) {
	if (!originalModule.webpackPolyfill) {
		var module = Object.create(originalModule);
		// module.parent = undefined by default
		if (!module.children) module.children = [];
		Object.defineProperty(module, "loaded", {
			enumerable: true,
			get: function() {
				return module.l;
			}
		});
		Object.defineProperty(module, "id", {
			enumerable: true,
			get: function() {
				return module.i;
			}
		});
		Object.defineProperty(module, "exports", {
			enumerable: true
		});
		module.webpackPolyfill = 1;
	}
	return module;
};


/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 44 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 45 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 46 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 47 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 48 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 49 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 50 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 51 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 52 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 53 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 54 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 55 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 56 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 57 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 58 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 59 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 60 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 61 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 62 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, "config", function() { return /* reexport */ config_default.a; });
__webpack_require__.d(__webpack_exports__, "utils", function() { return /* reexport */ utils_namespaceObject; });
__webpack_require__.d(__webpack_exports__, "helpers", function() { return /* reexport */ helpers_namespaceObject; });
__webpack_require__.d(__webpack_exports__, "InlineIcon", function() { return /* reexport */ elements_InlineIcon_InlineIcon; });
__webpack_require__.d(__webpack_exports__, "Loader", function() { return /* reexport */ elements_Loader_Loader; });
__webpack_require__.d(__webpack_exports__, "Menu", function() { return /* reexport */ elements_Menu_Menu; });
__webpack_require__.d(__webpack_exports__, "MenuItem", function() { return /* reexport */ elements_MenuItem_MenuItem; });
__webpack_require__.d(__webpack_exports__, "ModalWindow", function() { return /* reexport */ elements_ModalWindow_ModalWindow; });
__webpack_require__.d(__webpack_exports__, "ModalPopup", function() { return /* reexport */ elements_ModalPopup_ModalPopup; });
__webpack_require__.d(__webpack_exports__, "ModalPortal", function() { return /* reexport */ elements_ModalPortal_ModalPortal; });
__webpack_require__.d(__webpack_exports__, "ModalsContainer", function() { return /* reexport */ elements_ModalsContainer_ModalsContainer; });
__webpack_require__.d(__webpack_exports__, "FormItemHOC", function() { return /* reexport */ forms_FormItemHOC_FormItemHOC; });
__webpack_require__.d(__webpack_exports__, "FormItemDummy", function() { return /* reexport */ forms_FormItemDummy_FormItemDummy; });
__webpack_require__.d(__webpack_exports__, "FormLabel", function() { return /* reexport */ forms_FormLabel_FormLabel; });
__webpack_require__.d(__webpack_exports__, "FormButton", function() { return /* reexport */ forms_FormButton_FormButton; });
__webpack_require__.d(__webpack_exports__, "FormGroup", function() { return /* reexport */ forms_FormGroup_FormGroup; });
__webpack_require__.d(__webpack_exports__, "FormLabeledGroup", function() { return /* reexport */ forms_FormLabeledGroup_FormLabeledGroup; });
__webpack_require__.d(__webpack_exports__, "FormButtonGroup", function() { return /* reexport */ forms_FormButtonGroup_FormButtonGroup; });
__webpack_require__.d(__webpack_exports__, "FormInputGroup", function() { return /* reexport */ forms_FormInputGroup_FormInputGroup; });
__webpack_require__.d(__webpack_exports__, "FormDelim", function() { return /* reexport */ forms_FormDelim_FormDelim; });
__webpack_require__.d(__webpack_exports__, "FormSpacer", function() { return /* reexport */ forms_FormSpacer_FormSpacer; });
__webpack_require__.d(__webpack_exports__, "FormText", function() { return /* reexport */ forms_FormText_FormText; });
__webpack_require__.d(__webpack_exports__, "FormSelect", function() { return /* reexport */ forms_FormSelect_FormSelect; });
__webpack_require__.d(__webpack_exports__, "FormTextInput", function() { return /* reexport */ forms_FormTextInput_FormTextInput; });
__webpack_require__.d(__webpack_exports__, "FormPasswordInput", function() { return /* reexport */ forms_FormPasswordInput_FormPasswordInput; });
__webpack_require__.d(__webpack_exports__, "FormRadio", function() { return /* reexport */ forms_FormRadio_FormRadio; });
__webpack_require__.d(__webpack_exports__, "Hello", function() { return /* reexport */ demo_Hello_Hello; });

// NAMESPACE OBJECT: ./src/utils/configure.js
var configure_namespaceObject = {};
__webpack_require__.r(configure_namespaceObject);
__webpack_require__.d(configure_namespaceObject, "setConfigOptions", function() { return configure_setConfigOptions; });
__webpack_require__.d(configure_namespaceObject, "cssMapping", function() { return configure_cssMapping; });
__webpack_require__.d(configure_namespaceObject, "cn", function() { return configure_cn; });

// NAMESPACE OBJECT: ./src/utils/domUtils.js
var domUtils_namespaceObject = {};
__webpack_require__.r(domUtils_namespaceObject);
__webpack_require__.d(domUtils_namespaceObject, "getDocumentDomNodeByTag", function() { return getDocumentDomNodeByTag; });
__webpack_require__.d(domUtils_namespaceObject, "hasClassName", function() { return hasClassName; });
__webpack_require__.d(domUtils_namespaceObject, "addClassName", function() { return addClassName; });
__webpack_require__.d(domUtils_namespaceObject, "removeClassName", function() { return removeClassName; });

// NAMESPACE OBJECT: ./src/utils/lang.js
var lang_namespaceObject = {};
__webpack_require__.r(lang_namespaceObject);
__webpack_require__.d(lang_namespaceObject, "setLang", function() { return lang_setLang; });
__webpack_require__.d(lang_namespaceObject, "getLang", function() { return lang_getLang; });
__webpack_require__.d(lang_namespaceObject, "getCommonLangText", function() { return getCommonLangText; });

// NAMESPACE OBJECT: ./src/utils/strings.js
var strings_namespaceObject = {};
__webpack_require__.r(strings_namespaceObject);
__webpack_require__.d(strings_namespaceObject, "toNumber", function() { return toNumber; });
__webpack_require__.d(strings_namespaceObject, "toString", function() { return strings_toString; });
__webpack_require__.d(strings_namespaceObject, "toBoolean", function() { return toBoolean; });
__webpack_require__.d(strings_namespaceObject, "typeTransforms", function() { return typeTransforms; });
__webpack_require__.d(strings_namespaceObject, "getCommonLength", function() { return getCommonLength; });
__webpack_require__.d(strings_namespaceObject, "ucFirst", function() { return ucFirst; });
__webpack_require__.d(strings_namespaceObject, "toType", function() { return toType; });
__webpack_require__.d(strings_namespaceObject, "randomHexString", function() { return randomHexString; });
__webpack_require__.d(strings_namespaceObject, "html2string", function() { return html2string; });
__webpack_require__.d(strings_namespaceObject, "splitMultiline", function() { return strings_splitMultiline; });

// NAMESPACE OBJECT: ./src/utils/utils.js
var utils_namespaceObject = {};
__webpack_require__.r(utils_namespaceObject);
__webpack_require__.d(utils_namespaceObject, "configure", function() { return configure_namespaceObject; });
__webpack_require__.d(utils_namespaceObject, "domUtils", function() { return domUtils_namespaceObject; });
__webpack_require__.d(utils_namespaceObject, "lang", function() { return lang_namespaceObject; });
__webpack_require__.d(utils_namespaceObject, "strings", function() { return strings_namespaceObject; });

// NAMESPACE OBJECT: ./src/helpers/ActionsContext.jsx
var ActionsContext_namespaceObject = {};
__webpack_require__.r(ActionsContext_namespaceObject);
__webpack_require__.d(ActionsContext_namespaceObject, "ActionsContext", function() { return ActionsContext; });
__webpack_require__.d(ActionsContext_namespaceObject, "ActionsContextProvider", function() { return ActionsContextProvider; });
__webpack_require__.d(ActionsContext_namespaceObject, "ActionsContextConsumer", function() { return ActionsContextConsumer; });
__webpack_require__.d(ActionsContext_namespaceObject, "withActionsContext", function() { return ActionsContext_withActionsContext; });

// NAMESPACE OBJECT: ./src/helpers/helpers.js
var helpers_namespaceObject = {};
__webpack_require__.r(helpers_namespaceObject);
__webpack_require__.d(helpers_namespaceObject, "ActionsContext", function() { return ActionsContext_namespaceObject; });

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(1);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: ./src/config/config.js
var config = __webpack_require__(6);
var config_default = /*#__PURE__*/__webpack_require__.n(config);

// EXTERNAL MODULE: external "@bem-react/classname"
var classname_ = __webpack_require__(12);

// CONCATENATED MODULE: ./src/utils/configure.js
/** @module build
 *  @desc Library exportable ditributive
 *  @since 2020.05.19, 17:16
 *  @changed 2020.12.08, 21:47
 */




var configMap;

var configure_getConfigMap = function getConfigMap() {
  if (!configMap) {
    configMap = {};
    Object.keys(config_default.a).forEach(function (scopeId) {
      var scopeObj = config_default.a[scopeId];
      // const mapObj = configMap[scopeId] || (configMap[scopeId] = {})
      Object.keys(scopeObj).forEach(function (keyId) {
        if (configMap[keyId]) {
          configMap[keyId].push(scopeId);
          // const error = new Error('Duplicated config key "' + keyId + '" in scope "' + scopeId + '" and "' + configMap[keyId] + '"')
          // console.error(error) // eslint-disable-line no-console
          // debugger // eslint-disable-line no-debugger
          // throw error
        } else
        {
          configMap[keyId] = [scopeId];
        }
      });
    });
  }
  return configMap;
};

var configure_setConfigOptions = function setConfigOptions(options) {
  var map = configure_getConfigMap();
  Object.entries(options).map(function (_ref) {var key = _ref[0],val = _ref[1]; // Set entry
    var scopes = map[key];
    scopes.map(function (scope) {
      var obj = config_default.a[scope];
      if (obj) {
        obj[key] = val;
      }
    });
  });
};

var configure_cssMapping = function cssMapping(classNames) {var _config$app =
  config_default.a.app,useCssModules = _config$app.useCssModules,cssMappings = _config$app.cssMappings;
  if (!useCssModules || !cssMappings || !Object.keys(cssMappings)) {// No css-module transforms
    return classNames;
  }
  var classNamesList = typeof classNames === 'string' ? classNames.split(' ').map(function (s) {return s.trim();}) : classNames;
  if (!Array.isArray(classNamesList)) {
    throw new Error('Class list must be an array!');
  }
  var resultList = classNamesList.map(function (className) {
    var result = cssMappings[className];
    if (!result) {// Try to make className by similarity (eg: not found 'XXX_*', but found 'XXX')...
      var pos = [className.indexOf('-'), className.indexOf('_')].filter(function (x) {return x !== -1;});
      var minPos = pos && pos.length && Math.min.apply(Math, pos);
      if (minPos) {
        // const match = className.match(/^(\w+?)([-_].*)$/)
        // const [, base, rest] = match
        var base = className.substr(0, minPos);
        var rest = className.substr(minPos);
        var baseClassName = cssMappings[base];
        if (baseClassName) {
          result = baseClassName + rest;
        }
      }
    }
    // if (className !== result) {
    //   console.log('WebUiCore:utils:cssMapping', className, '->', result)
    //   debugger
    // }
    return result || className;
  });
  return resultList.join(' ');
};

// Wrapper for `@bem-react/classname/cn()` function
// See original method call signatures & usage in `https://github.com/bem/bem-react/tree/master/packages/classname`
var configure_cn = function cn() {for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {args[_key] = arguments[_key];}
  var result = classname_["cn"].apply(cn, args);
  if (typeof result === 'string') {// If class name, not fabric
    return configure_cssMapping(result);
  } else
  if (typeof result === 'function') {
    return function cnCssMapping() {for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {args[_key2] = arguments[_key2];}
      var res = result.apply(null, args);
      if (typeof res === 'string') {
        res = configure_cssMapping(res);
      }
      return res;
    };
  }
  return result;
};
// CONCATENATED MODULE: ./src/utils/domUtils.js
/** @module domUtils
 *  @class domUtils
 *  @since 2019.06.14, 12:20
 *  @changed 2020.12.21, 18:05
 */

/** Add class name
     * @param {String} tag
     * @return {DOM|undefined} domNode
     */
function getDocumentDomNodeByTag(tag) {
  var result = document.getElementsByTagName(tag.toUpperCase());
  return result && result[0];
}

/** Check for class name
   * @param {DOM} domNode
   * @param {String} className
   * @return {Boolean}
   */
function hasClassName(domNode, className) {
  if (domNode) {var
    classList = domNode.classList;
    return classList.contains(className);
  }
}

/** Add class name
   * @param {DOM} domNode
   * @param {String} className
   * @return {DOM} domNode
   */
function addClassName(domNode, className) {
  if (domNode && !hasClassName(domNode, className)) {var
    classList = domNode.classList;
    classList.add(className);
  }
  return domNode;
}

/** Remove class name
   * @param {DOM} domNode
   * @param {String} className
   * @return {DOM} domNode
   */
function removeClassName(domNode, className) {
  if (domNode && hasClassName(domNode, className)) {var
    classList = domNode.classList;
    classList.remove(className);
  }
  return domNode;
}
// CONCATENATED MODULE: ./src/utils/lang.js
/** @module lang
 *  @desc Language support tools
 *  @since 2021.01.11, 18:21
 *  @changed 2021.01.11, 20:14
 */



var lang_setLang = function setLang(lang) {
  // console.log('WebUiCore:utils:lang:setLang', lang)
  // debugger
  config_default.a.app.lang = lang;
};
var lang_getLang = function getLang() {
  return config_default.a.app.lang;
};
var getCommonLangText = function getCommonLangText(id, defaultText, propsLang) {
  var lang = propsLang || lang_getLang();
  var text = lang && lang.components && lang.components.common && lang.components.common[id];
  // console.log('WebUiCore:utils:lang:getCommonLangText', id, lang)
  // debugger
  return text != null ? text : defaultText || id;
};
// CONCATENATED MODULE: ./src/utils/strings.js
var strings_this = undefined; /** @module strings
                   *  @description Objects utilities
                   *  @since 2019.04.03, 14:38
                   *  @changed 2020.05.29, 13:35
                   */



/**
                            * @param {string} val
                            * @return {number}
                            */
var toNumber = function toNumber(val) {
  return val && !isNaN(val) ? Number(val) : 0;
};
/**
    * @param {string} val
    * @return {String}
    */
var strings_toString = function toString(val) {
  return val; // String(val);
};
/**
    * @param {string} val
    * @return {boolean}
    */
var toBoolean = function toBoolean(val) {
  return !!(val && val !== 'false' && val !== '0');
};

var typeTransforms = {
  toNumber: toNumber,
  toString: strings_toString,
  toBoolean: toBoolean };


/** Returns length of common parts of two strings
                           * @param {String} a
                           * @param {String} b
                           * @return {Number}
                           */
var getCommonLength = function getCommonLength(a, b) {
  var maxLen = Math.min(a.length, b.length);
  var commonLen = 0;
  for (var len = 1; len < maxLen; len++) {
    var s = a.substr(0, len);
    if (b.indexOf(s) === 0) {
      commonLen = len;
    }
  }
  return commonLen;
};

/** Uppercase first letter of string
    * @param {string} str
    * @return {str}
    */
var ucFirst = function ucFirst(str) {
  return str.charAt(0).toUpperCase() + str.slice(1); // .toLowerCase();
};

/** Convert string to desired type
    * @param {string} type
    * @param {string} val
    * @return {*}
    */
var toType = function toType(type, val) {
  var methodName = 'to' + ucFirst(type);
  if ( /* typeTransforms.hasOwnProperty(methodName) && */typeof typeTransforms[methodName] === 'function') {
    val = strings_this[methodName](val);
  }
  return val;
};

/**
    * @param {Number} length - Target hex string length
    * @return {String}
    */
var randomHexString = function randomHexString(length) {
  var result = '';
  for (var i = 0; i < length; i++) {
    result += Math.floor(Math.random() * 0xf).toString(16);
  }
  return result;
};

/** Convert (mostly error responses) html to text
    * @param {String} html
    * @return {String}
    */
var html2string = function html2string(html) {
  return html && html // Process error from (html) response body
  // .replace(/\s*<head>[\s\S]*<\/head>/m, '')
  .replace(/\s*<style>[\s\S]*<\/style>/gm, '').
  replace(/<title>(.+)<\/title>/gi, '$1:\n').
  replace(/<[^<>]*>/g, ' ').
  replace(/\r/gm, '\n') // Newlines
  .replace(/[ \t]+\n/gm, '\n') // Hanged spaces
  .replace(/\n[ \t]+/gm, '\n') // Hanged spaces
  .replace(/\n{3,}/gm, '\n\n') // Extra newlines
  .replace(/\n(.+):*[ \t\n]+\1\n/gm, '\n$1:\n') // Remove repeating titles
  // .replace(/\n/gm, '\\n') // DEBUG: newlines
  .trim(); // Trim
};

// TODO: Move to react strings helper?
var strings_splitMultiline = function splitMultiline(text, opt) {
  opt = opt || {};
  var textClassName = opt.textClassName || 'Text';
  var lineClassName = opt.lineClassName || 'TextLine';
  return text.split('\n\n').map(function (text, n) {
    var lines = text.split('\n').map(function (line, n) {
      return /*#__PURE__*/external_react_default.a.createElement('div', { key: 'line' + String(n), className: lineClassName }, line);
    });
    return /*#__PURE__*/external_react_default.a.createElement('div', { key: 'text' + String(n), className: textClassName }, lines);
  });
};

// module.exports = strings
// export default strings
// CONCATENATED MODULE: ./src/utils/utils.js
/** @module utils
 *  @desc Library utilities
 *  @since 2020.05.19, 17:16
 *  @changed 2020.12.15, 21:12
 */

// export * from './configure'

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/extends.js
var helpers_extends = __webpack_require__(5);
var extends_default = /*#__PURE__*/__webpack_require__.n(helpers_extends);

// CONCATENATED MODULE: ./src/helpers/ActionsContext.jsx
 /** @module ActionsContext
                                                        *  @class ActionsContext
                                                        *  @since 2020.12.24, 19:08
                                                        *  @changed 2020.12.24, 19:08
                                                        */



var ActionsContext = /*#__PURE__*/external_react_default.a.createContext();

var ActionsContextProvider = ActionsContext.Provider;
var ActionsContextConsumer = ActionsContext.Consumer;

var ActionsContext_withActionsContext = function withActionsContext(WrappedComponent) {return function withActionsContext(props) {
    return /*#__PURE__*/(
      external_react_default.a.createElement(ActionsContextConsumer, null,
      function (actions) {
        return /*#__PURE__*/(
          external_react_default.a.createElement(WrappedComponent, extends_default()({}, props, { actionsContextNode: actions })));

      }));


  };};
// CONCATENATED MODULE: ./src/helpers/helpers.js
/** @module helpers
 *  @desc Library helpers
 *  @since 2020.12.24, 19:06
 *  @changed 2020.12.24, 19:06
 */
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/inheritsLoose.js
var inheritsLoose = __webpack_require__(4);
var inheritsLoose_default = /*#__PURE__*/__webpack_require__.n(inheritsLoose);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/defineProperty.js
var defineProperty = __webpack_require__(2);
var defineProperty_default = /*#__PURE__*/__webpack_require__.n(defineProperty);

// EXTERNAL MODULE: ./node_modules/prop-types/index.js
var prop_types = __webpack_require__(0);
var prop_types_default = /*#__PURE__*/__webpack_require__.n(prop_types);

// EXTERNAL MODULE: external "@fortawesome/react-fontawesome"
var react_fontawesome_ = __webpack_require__(8);

// EXTERNAL MODULE: external "@fortawesome/free-solid-svg-icons"
var free_solid_svg_icons_ = __webpack_require__(9);

// EXTERNAL MODULE: external "@fortawesome/free-regular-svg-icons"
var free_regular_svg_icons_ = __webpack_require__(13);

// EXTERNAL MODULE: ./src/elements/InlineIcon/InlineIcon.pcss
var InlineIcon_InlineIcon = __webpack_require__(27);

// CONCATENATED MODULE: ./src/elements/InlineIcon/InlineIcon.jsx
 /** @module InlineIcon
                                                                                                                                        *  @class InlineIcon
                                                                                                                                        *  @since 2020.10.07, 02:08
                                                                                                                                        *  @changed 2020.12.24, 04:06
                                                                                                                                        */



// import connect from 'react-redux/es/connect/connect'






var iconGroups = {
  solid: free_solid_svg_icons_,
  regular: free_regular_svg_icons_ };




var cnInlineIcon = configure_cn('InlineIcon');var

InlineIcon_InlineIcon_InlineIcon = /*#__PURE__*/function (_React$PureComponent) {inheritsLoose_default()(InlineIcon, _React$PureComponent);function InlineIcon() {return _React$PureComponent.apply(this, arguments) || this;}var _proto = InlineIcon.prototype;_proto.










  getClassName = function getClassName() {var _this$props =



    this.props,id = _this$props.id,theme = _this$props.theme;
    var className = cnInlineIcon({
      id: id,
      theme: theme },
    [this.props.className]);
    return className;
  };_proto.

  getIconComponent = function getIconComponent(id) {
    var iconId = id;
    var icons = free_solid_svg_icons_;
    var matchGroup = iconId.match(/^(\w+):(.*)/);
    if (matchGroup) {var
      groupId = matchGroup[1],nextId = matchGroup[2];
      if (groupId && iconGroups[groupId] && nextId) {
        icons = iconGroups[groupId];
        iconId = nextId;
      }
    }
    var component = icons && icons[iconId] || icons['faQuestionCircle'];
    return component;
  };_proto.

  render = function render() {var _this$props2 =








    this.props,id = _this$props2.id,tag = _this$props2.tag,title = _this$props2.title,icon = _this$props2.icon,onClick = _this$props2.onClick;

    var iconType = typeof icon;
    // if (iconType !== 'string') {
    //   debugger
    // }

    // Create fortawesome icon element if passed icon image (svg icon)
    var iconComponent = icon && iconType === 'string' ? this.getIconComponent(icon) : icon;
    var content = iconComponent && iconComponent.iconName ? /*#__PURE__*/external_react_default.a.createElement(react_fontawesome_["FontAwesomeIcon"], { className: cnInlineIcon('IconImg'), icon: iconComponent }) : iconComponent;

    var renderProps = {
      id: id,
      className: this.getClassName(),
      title: title,
      onClick: onClick
      // key,
    };

    var tagName = tag || 'span';
    var element = /*#__PURE__*/external_react_default.a.createElement(tagName, renderProps, content);
    return element;
  };return InlineIcon;}(external_react_default.a.PureComponent /** @lends @InlineIcon.prototype */);defineProperty_default()(InlineIcon_InlineIcon_InlineIcon, "propTypes", { id: prop_types_default.a.string, theme: prop_types_default.a.string, tag: prop_types_default.a.string, title: prop_types_default.a.string, icon: prop_types_default.a.oneOfType([prop_types_default.a.string, prop_types_default.a.object]), onClick: prop_types_default.a.func });



/* harmony default export */ var elements_InlineIcon_InlineIcon = (InlineIcon_InlineIcon_InlineIcon);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/assertThisInitialized.js
var assertThisInitialized = __webpack_require__(3);
var assertThisInitialized_default = /*#__PURE__*/__webpack_require__.n(assertThisInitialized);

// EXTERNAL MODULE: ./src/forms/FormItemHOC/FormItemHOC.pcss
var FormItemHOC = __webpack_require__(28);

// CONCATENATED MODULE: ./src/forms/FormItemHOC/FormItemHOC.jsx
 /** @module FormItemHOC
                                                                                                                                                                                                                                                                                *  @class FormItemHOC
                                                                                                                                                                                                                                                                                *  @since 2019.09.25, 19:18
                                                                                                                                                                                                                                                                                *  @changed 2020.06.04, 22:58
                                                                                                                                                                                                                                                                                */






var cnFormItem = configure_cn('FormItem');

var classNameModifiers = [// Pass props/state params to class modifiers
// Display-related modifiers...
'fullWidth',
'innerFlex', // (???)
'solid', // Item is unwrappable (???)
'framed', // Frame around item (input field, select etc) (???)
// Behavior-related modifiers...
'hoverable', // Allow hover effects
'focusable', // Allow hover effects
'clickable',
// States...
'hovered',
'focused',
'pressed',
'checked',
'disabled',
'fill' // (???)
];
var classNameExpectedModifierTypes = {
  checked: 'boolean' };


var defaultState = {// Default state
  // hoverable: false,
  // focusable: false,
};

var props2State = [// Pass props to state
'hoverable', // Allow hover effects
'focusable' // Allow hover effects
];

// Helper functions...

var FormItemHOC_deriveState = function deriveState() {for (var _len = arguments.length, sets = new Array(_len), _key = 0; _key < _len; _key++) {sets[_key] = arguments[_key];}
  return props2State.reduce(function (state, id) {
    var val = sets.reduce(function (val, set) {
      return set[id] != null /* && val == null */ ? set[id] : val;
    }, null);
    if (val != null) {var _extends2;
      return extends_default()({}, state, (_extends2 = {}, _extends2[id] = val, _extends2));
    }
    return state;
  }, defaultState);
};
/* // UNUSED: deriveStateFromProps
    * const deriveStateFromProps = (props, defaultState) => {
    *   return props2State.reduce((state, id) =>{
    *     const val = props[id]
    *     if (val != null) {
    *       return { ...state, [id]: val }
    *     }
    *     return state
    *   }, defaultState)
    * }
    */

// Unique id counter
var uniqIdCount = 1;

var FormItemHOC_wrapFormItemHOC = function wrapFormItemHOC(WrappedComponent, params) {var _temp;if (params === void 0) {params = {};}return _temp = /*#__PURE__*/function (_React$Component) {inheritsLoose_default()(FormItem, _React$Component);var _proto = FormItem.prototype;

    // Helper methods...
    _proto.
    getStateOrPropOrParam = function getStateOrPropOrParam(id) {// Get parameter from state or from props
      var val = this.state[id] != null ? this.state[id] :
      this.props[id] != null ? this.props[id] :
      params[id];
      if (classNameExpectedModifierTypes[id] && typeof val !== classNameExpectedModifierTypes[id]) {
        val = null;
      }
      return val;
    };_proto.

    createUniqId = function createUniqId() {
      return 'FormItem' + uniqIdCount++;
    };_proto.

    getId = function getId(props) {
      props = props || this.props;
      return props.id || this.id || (this.id = this.createUniqId());
    }

    // Lifecycle methods...
    ;
    function FormItem(props) {var _this;
      _this = _React$Component.call(this, props) || this;defineProperty_default()(assertThisInitialized_default()(_this), "handleMouseOver",






































































      function () {
        var disabled = _this.getStateOrPropOrParam('disabled');
        var hoverable = _this.getStateOrPropOrParam('hoverable');
        if (hoverable && !disabled) {
          _this.setState({ hovered: true });
        }
      });defineProperty_default()(assertThisInitialized_default()(_this), "handleMouseOut",
      function () {
        var disabled = _this.getStateOrPropOrParam('disabled');
        var hoverable = _this.getStateOrPropOrParam('hoverable');
        if (hoverable && !disabled) {
          _this.setState({ hovered: false });
        }
      });defineProperty_default()(assertThisInitialized_default()(_this), "handleFocus",

      function () {
        var disabled = _this.getStateOrPropOrParam('disabled');
        var focusable = _this.getStateOrPropOrParam('focusable');
        if (focusable && !disabled) {
          _this.setState({ focused: true });
        }
      });defineProperty_default()(assertThisInitialized_default()(_this), "handleBlur",
      function () {
        var disabled = _this.getStateOrPropOrParam('disabled');
        var focusable = _this.getStateOrPropOrParam('focusable');
        if (focusable && !disabled) {
          _this.setState({ focused: false });
        }
      });defineProperty_default()(assertThisInitialized_default()(_this), "setDomRef",

      function (domRef) {// Children dom node receiver
        var setDomRef = _this.props.setDomRef;
        _this.formItemDomRef = domRef;
        if (typeof setDomRef === 'function') {
          setDomRef(domRef);
        }
        // domRef && domRef.focus && domRef.focus() // ???
      });_this.state = FormItemHOC_deriveState(defaultState, params, props); // deriveStateFromProps(props, defaultState)
      _this.id = props.id || params.id; // this.formItemRef = React.createRef()
      return _this;}FormItem.getDerivedStateFromProps = function getDerivedStateFromProps(props, state) {// TODO: Update event subscriptions if `hoverable` flag changed?
      return FormItemHOC_deriveState(params, props, state); // deriveStateFromProps(props, state)
    };_proto.componentDidMount = function componentDidMount() {var _this2 = this; // const { formItemRef: { current } = {} } = this
      var formItemDomRef = this.formItemDomRef;if (formItemDomRef && formItemDomRef.addEventListener) {var hoverable = this.getStateOrPropOrParam('hoverable');var focusable = this.getStateOrPropOrParam('focusable');if (hoverable && !this.hoverableInited) {this.hoverableInited = true;formItemDomRef.addEventListener('mouseover', this.handleMouseOver);formItemDomRef.addEventListener('mouseout', this.handleMouseOut);}if (focusable && !this.focusableInited) {this.focusableInited = true;formItemDomRef.addEventListener('focus', this.handleFocus);formItemDomRef.addEventListener('blur', this.handleBlur);this.focus = function () {// Focus handler
            var domRef = _this2.formItemDomRef;domRef && domRef.focus && domRef.focus();};}}};_proto.componentWillUnmount = function componentWillUnmount() {var formItemDomRef = this.formItemDomRef;if (formItemDomRef && formItemDomRef.removeEventListener) {// const hoverable = this.getStateOrPropOrParam('hoverable')
        // const focusable = this.getStateOrPropOrParam('focusable')
        if (this.hoverableInited) {formItemDomRef.removeEventListener('mouseover', this.handleMouseOver);formItemDomRef.removeEventListener('mouseout', this.handleMouseOut);}if (this.focusableInited) {formItemDomRef.removeEventListener('focus', this.handleFocus);formItemDomRef.removeEventListener('blur', this.handleBlur);}}};_proto.getClassName = function getClassName() {var _this3 = this; // Collect modifier values from state or props
      var mods = classNameModifiers.reduce(function (mods, id) {var val = _this3.getStateOrPropOrParam(id); // (this.state[id] != null) ? this.state[id] : this.props[id]
        if (val != null) {mods[id] = val;}return mods;}, {});return cnFormItem(mods, [this.props.className]);} /* // For `focusable` state (TODO?)
                                                                                                                * handleFocus() {
                                                                                                                *   this.setState({ focused: true })
                                                                                                                * }
                                                                                                                * handleBlur() {
                                                                                                                *   this.setState({ focused: false })
                                                                                                                * }
                                                                                                                */;_proto.render = function render() {var _this$state = this.state,hovered = _this$state.hovered,focused = _this$state.focused;var renderProps = { hovered: hovered, focused: focused, className: this.getClassName(), setDomRef: this.setDomRef // Children dom node receiver
        // formItemDomRef: this.formItemDomRef,
      };var focusable = this.getStateOrPropOrParam('focusable');if (focusable) {renderProps.tabIndex = 0;}return /*#__PURE__*/external_react_default.a.createElement(WrappedComponent, extends_default()({},
      this.props,
      renderProps));


    };return FormItem;}(external_react_default.a.Component), _temp;};



/** Usage:
                                                    * FormItemHOC(component)
                                                    * FormItemHOC(params)(component)
                                                    */
var FormItemHOC_FormItemHOC = function FormItemHOC(params) {
  if (typeof params === 'string') {// Passed identifier
    params = { id: params };
  }
  if (typeof params === 'object') {// Params passed -> metafabric
    return function (component) {return FormItemHOC_wrapFormItemHOC(component, params);};
  } else
  {// Component passed -> simple fabric
    return FormItemHOC_wrapFormItemHOC(params);
  }
};

/* harmony default export */ var forms_FormItemHOC_FormItemHOC = (FormItemHOC_FormItemHOC);
// EXTERNAL MODULE: ./src/forms/FormItemDummy/FormItemDummy.pcss
var FormItemDummy_FormItemDummy = __webpack_require__(29);

// CONCATENATED MODULE: ./src/forms/FormItemDummy/FormItemDummy.jsx
 /** @module FormItemDummy
                                                                                                                                                                                                                          *  @class FormItemDummy
                                                                                                                                                                                                                          *  @desc Demo form item
                                                                                                                                                                                                                          *  @since 2020.07.20, 19:07
                                                                                                                                                                                                                          *  @changed 2020.07.20, 19:07
                                                                                                                                                                                                                          */


// import connect from 'react-redux/es/connect/connect'








var cnFormItemDummy = configure_cn('FormItemDummy');var

FormItemDummy_FormItemDummy_FormItemDummy = /*#__PURE__*/function (_React$PureComponent) {inheritsLoose_default()(FormItemDummy, _React$PureComponent);

  function FormItemDummy(props) {var _this;
    _this = _React$PureComponent.call(this, props) || this;
    // const {
    //   hoverable,
    //   clickable,
    //   checked,
    // } = props
    defineProperty_default()(assertThisInitialized_default()(_this), "onClick",




































































    function (event) {var _this$props =




      _this.props,disabled = _this$props.disabled,onClick = _this$props.onClick,clickable = _this$props.clickable;
      if (clickable && !disabled && onClick && typeof onClick === 'function') {
        onClick(event);
      }
    });_this.state = {// // FormItem states...
      // solid: true,
      // hoverable: (hoverable != null) ? hoverable : true,
      // clickable: (clickable != null) ? clickable : true,
      // checked,
      // framed: true,
    };return _this;}FormItemDummy.getDerivedStateFromProps = function getDerivedStateFromProps(props /* , state */) {// ???
    var hasIcon = props.hasIcon,hasText = props.hasText,onlyIcon = props.onlyIcon,text = props.text,icon = props.icon,children = props.children;return { // hoverable: (hoverable != null) ? hoverable : true,
      // clickable: (clickable != null) ? clickable : true,
      // checked,
      hasIcon: !!(hasIcon || icon), hasText: !onlyIcon && !!(hasText || text || children) };};var _proto = FormItemDummy.prototype;_proto.getClassName = function getClassName() {// TODO: Refactor properties!
    var _this$props2 = this.props,id = _this$props2.id,onlyIcon = _this$props2.onlyIcon,largeIcon = _this$props2.largeIcon,rightIcon = _this$props2.rightIcon,theme = _this$props2.theme,fullWidth = _this$props2.fullWidth,type = _this$props2.type;var _this$state = this.state,hasIcon = _this$state.hasIcon,hasText = _this$state.hasText;var classList = cnFormItemDummy({ id: id, theme: theme, fullWidth: fullWidth, // checked,
      // plain,
      hasIcon: hasIcon, hasText: hasText, onlyIcon: onlyIcon, largeIcon: largeIcon, rightIcon: rightIcon, type: type, solid: true }, [this.props.className]);return classList;} // Handlers...
  ; // Render...
  _proto.render = function render() {var _this$props3 =




    this.props,id = _this$props3.id,children = _this$props3.children,text = _this$props3.text,tag = _this$props3.tag,type = _this$props3.type,title = _this$props3.title,icon = _this$props3.icon,setDomRef = _this$props3.setDomRef;var _this$state2 =



    this.state,hasIcon = _this$state2.hasIcon,hasText = _this$state2.hasText;

    // Create fortawesome icon element if passed icon image (svg icon)
    var iconImg = icon && icon.iconName ? /*#__PURE__*/external_react_default.a.createElement(react_fontawesome_["FontAwesomeIcon"], { className: cnFormItemDummy('IconImg'), icon: icon }) : icon;
    var iconElem = hasIcon && /*#__PURE__*/
    external_react_default.a.createElement("span", { key: "Icon", className: cnFormItemDummy('Icon') },
    iconImg);



    // Text element
    var textElem = hasText && /*#__PURE__*/
    external_react_default.a.createElement("span", { key: "Text", className: cnFormItemDummy('Text') },
    text || children);



    // const basicRenderProps = this.getRenderProps() // Get from props not from overrided `super`
    var renderProps = {
      // ...basicRenderProps,
      id: id,
      className: this.getClassName(),
      title: title,
      type: type,
      onClick: this.onClick,
      ref: setDomRef };


    var content = [iconElem, textElem]; // children || text

    var tagName = tag || 'div';
    var element = /*#__PURE__*/external_react_default.a.createElement(tagName, renderProps, content);
    return element;
  };return FormItemDummy;}(external_react_default.a.PureComponent /** @lends @FormItemDummy.prototype */);



/* harmony default export */ var forms_FormItemDummy_FormItemDummy = (forms_FormItemHOC_FormItemHOC(FormItemDummy_FormItemDummy_FormItemDummy));
// EXTERNAL MODULE: ./src/forms/FormLabel/FormLabel.pcss
var FormLabel_FormLabel = __webpack_require__(30);

// CONCATENATED MODULE: ./src/forms/FormLabel/FormLabel.jsx
 /** @module FormLabel
                                                                                                                                                                                                                          *  @class FormLabel
                                                                                                                                                                                                                          *  @since 2020.10.06, 23:45
                                                                                                                                                                                                                          *  @changed 2020.10.06, 23:46
                                                                                                                                                                                                                          */
/* eslint-disable react/require-default-props */



// import connect from 'react-redux/es/connect/connect'






var cnFormLabel = configure_cn('FormLabel');var

FormLabel_FormLabel_FormLabel = /*#__PURE__*/function (_React$PureComponent) {inheritsLoose_default()(FormLabel, _React$PureComponent);function FormLabel() {var _this;for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {args[_key] = arguments[_key];}_this = _React$PureComponent.call.apply(_React$PureComponent, [this].concat(args)) || this;defineProperty_default()(assertThisInitialized_default()(_this), "onClick",























    function (event) {var _this$props =




      _this.props,disabled = _this$props.disabled,onClick = _this$props.onClick;
      if ( /* clickable && */!disabled && onClick && typeof onClick === 'function') {
        onClick(event);
      }
    });return _this;}var _proto = FormLabel.prototype;_proto.getClassName = function getClassName() {var _this$props2 = this.props,id = _this$props2.id,fixed = _this$props2.fixed,firstInBlock = _this$props2.firstInBlock;var classList = cnFormLabel({ id: id, fixed: fixed, firstInBlock: firstInBlock // clickable,
    }, [this.props.className]);return classList;} // Handlers...
  ; // Render...
  _proto.
  render = function render() {var _this$props3 =









    this.props,id = _this$props3.id,name = _this$props3.name,disabled = _this$props3.disabled,htmlFor = _this$props3.htmlFor,text = _this$props3.text,children = _this$props3.children,title = _this$props3.title;

    var renderProps = {
      id: id,
      className: this.getClassName(),
      disabled: disabled,
      title: title };


    return /*#__PURE__*/(
      external_react_default.a.createElement("div", renderProps, /*#__PURE__*/
      external_react_default.a.createElement("label", {
        className: cnFormLabel('Control', ['FormItem-Control']),
        id: id,
        name: name,
        disabled: disabled,
        htmlFor: htmlFor,
        title: title },

      children || text || title)));



  };return FormLabel;}(external_react_default.a.PureComponent /** @lends @FormLabel.prototype */);defineProperty_default()(FormLabel_FormLabel_FormLabel, "propTypes", { id: prop_types_default.a.string });



/* harmony default export */ var forms_FormLabel_FormLabel = (forms_FormItemHOC_FormItemHOC({ hoverable: true, solid: true })(FormLabel_FormLabel_FormLabel));
// EXTERNAL MODULE: ./node_modules/symbol-observable/es/index.js
var es = __webpack_require__(10);

// CONCATENATED MODULE: ./node_modules/redux/es/redux.js


/**
 * These are private action types reserved by Redux.
 * For any unknown actions, you must return the current state.
 * If the current state is undefined, you must return the initial state.
 * Do not reference these action types directly in your code.
 */
var randomString = function randomString() {
  return Math.random().toString(36).substring(7).split('').join('.');
};

var ActionTypes = {
  INIT: "@@redux/INIT" + randomString(),
  REPLACE: "@@redux/REPLACE" + randomString(),
  PROBE_UNKNOWN_ACTION: function PROBE_UNKNOWN_ACTION() {
    return "@@redux/PROBE_UNKNOWN_ACTION" + randomString();
  }
};

/**
 * @param {any} obj The object to inspect.
 * @returns {boolean} True if the argument appears to be a plain object.
 */
function isPlainObject(obj) {
  if (typeof obj !== 'object' || obj === null) return false;
  var proto = obj;

  while (Object.getPrototypeOf(proto) !== null) {
    proto = Object.getPrototypeOf(proto);
  }

  return Object.getPrototypeOf(obj) === proto;
}

/**
 * Creates a Redux store that holds the state tree.
 * The only way to change the data in the store is to call `dispatch()` on it.
 *
 * There should only be a single store in your app. To specify how different
 * parts of the state tree respond to actions, you may combine several reducers
 * into a single reducer function by using `combineReducers`.
 *
 * @param {Function} reducer A function that returns the next state tree, given
 * the current state tree and the action to handle.
 *
 * @param {any} [preloadedState] The initial state. You may optionally specify it
 * to hydrate the state from the server in universal apps, or to restore a
 * previously serialized user session.
 * If you use `combineReducers` to produce the root reducer function, this must be
 * an object with the same shape as `combineReducers` keys.
 *
 * @param {Function} [enhancer] The store enhancer. You may optionally specify it
 * to enhance the store with third-party capabilities such as middleware,
 * time travel, persistence, etc. The only store enhancer that ships with Redux
 * is `applyMiddleware()`.
 *
 * @returns {Store} A Redux store that lets you read the state, dispatch actions
 * and subscribe to changes.
 */

function createStore(reducer, preloadedState, enhancer) {
  var _ref2;

  if (typeof preloadedState === 'function' && typeof enhancer === 'function' || typeof enhancer === 'function' && typeof arguments[3] === 'function') {
    throw new Error('It looks like you are passing several store enhancers to ' + 'createStore(). This is not supported. Instead, compose them ' + 'together to a single function.');
  }

  if (typeof preloadedState === 'function' && typeof enhancer === 'undefined') {
    enhancer = preloadedState;
    preloadedState = undefined;
  }

  if (typeof enhancer !== 'undefined') {
    if (typeof enhancer !== 'function') {
      throw new Error('Expected the enhancer to be a function.');
    }

    return enhancer(createStore)(reducer, preloadedState);
  }

  if (typeof reducer !== 'function') {
    throw new Error('Expected the reducer to be a function.');
  }

  var currentReducer = reducer;
  var currentState = preloadedState;
  var currentListeners = [];
  var nextListeners = currentListeners;
  var isDispatching = false;
  /**
   * This makes a shallow copy of currentListeners so we can use
   * nextListeners as a temporary list while dispatching.
   *
   * This prevents any bugs around consumers calling
   * subscribe/unsubscribe in the middle of a dispatch.
   */

  function ensureCanMutateNextListeners() {
    if (nextListeners === currentListeners) {
      nextListeners = currentListeners.slice();
    }
  }
  /**
   * Reads the state tree managed by the store.
   *
   * @returns {any} The current state tree of your application.
   */


  function getState() {
    if (isDispatching) {
      throw new Error('You may not call store.getState() while the reducer is executing. ' + 'The reducer has already received the state as an argument. ' + 'Pass it down from the top reducer instead of reading it from the store.');
    }

    return currentState;
  }
  /**
   * Adds a change listener. It will be called any time an action is dispatched,
   * and some part of the state tree may potentially have changed. You may then
   * call `getState()` to read the current state tree inside the callback.
   *
   * You may call `dispatch()` from a change listener, with the following
   * caveats:
   *
   * 1. The subscriptions are snapshotted just before every `dispatch()` call.
   * If you subscribe or unsubscribe while the listeners are being invoked, this
   * will not have any effect on the `dispatch()` that is currently in progress.
   * However, the next `dispatch()` call, whether nested or not, will use a more
   * recent snapshot of the subscription list.
   *
   * 2. The listener should not expect to see all state changes, as the state
   * might have been updated multiple times during a nested `dispatch()` before
   * the listener is called. It is, however, guaranteed that all subscribers
   * registered before the `dispatch()` started will be called with the latest
   * state by the time it exits.
   *
   * @param {Function} listener A callback to be invoked on every dispatch.
   * @returns {Function} A function to remove this change listener.
   */


  function subscribe(listener) {
    if (typeof listener !== 'function') {
      throw new Error('Expected the listener to be a function.');
    }

    if (isDispatching) {
      throw new Error('You may not call store.subscribe() while the reducer is executing. ' + 'If you would like to be notified after the store has been updated, subscribe from a ' + 'component and invoke store.getState() in the callback to access the latest state. ' + 'See https://redux.js.org/api-reference/store#subscribelistener for more details.');
    }

    var isSubscribed = true;
    ensureCanMutateNextListeners();
    nextListeners.push(listener);
    return function unsubscribe() {
      if (!isSubscribed) {
        return;
      }

      if (isDispatching) {
        throw new Error('You may not unsubscribe from a store listener while the reducer is executing. ' + 'See https://redux.js.org/api-reference/store#subscribelistener for more details.');
      }

      isSubscribed = false;
      ensureCanMutateNextListeners();
      var index = nextListeners.indexOf(listener);
      nextListeners.splice(index, 1);
      currentListeners = null;
    };
  }
  /**
   * Dispatches an action. It is the only way to trigger a state change.
   *
   * The `reducer` function, used to create the store, will be called with the
   * current state tree and the given `action`. Its return value will
   * be considered the **next** state of the tree, and the change listeners
   * will be notified.
   *
   * The base implementation only supports plain object actions. If you want to
   * dispatch a Promise, an Observable, a thunk, or something else, you need to
   * wrap your store creating function into the corresponding middleware. For
   * example, see the documentation for the `redux-thunk` package. Even the
   * middleware will eventually dispatch plain object actions using this method.
   *
   * @param {Object} action A plain object representing “what changed”. It is
   * a good idea to keep actions serializable so you can record and replay user
   * sessions, or use the time travelling `redux-devtools`. An action must have
   * a `type` property which may not be `undefined`. It is a good idea to use
   * string constants for action types.
   *
   * @returns {Object} For convenience, the same action object you dispatched.
   *
   * Note that, if you use a custom middleware, it may wrap `dispatch()` to
   * return something else (for example, a Promise you can await).
   */


  function dispatch(action) {
    if (!isPlainObject(action)) {
      throw new Error('Actions must be plain objects. ' + 'Use custom middleware for async actions.');
    }

    if (typeof action.type === 'undefined') {
      throw new Error('Actions may not have an undefined "type" property. ' + 'Have you misspelled a constant?');
    }

    if (isDispatching) {
      throw new Error('Reducers may not dispatch actions.');
    }

    try {
      isDispatching = true;
      currentState = currentReducer(currentState, action);
    } finally {
      isDispatching = false;
    }

    var listeners = currentListeners = nextListeners;

    for (var i = 0; i < listeners.length; i++) {
      var listener = listeners[i];
      listener();
    }

    return action;
  }
  /**
   * Replaces the reducer currently used by the store to calculate the state.
   *
   * You might need this if your app implements code splitting and you want to
   * load some of the reducers dynamically. You might also need this if you
   * implement a hot reloading mechanism for Redux.
   *
   * @param {Function} nextReducer The reducer for the store to use instead.
   * @returns {void}
   */


  function replaceReducer(nextReducer) {
    if (typeof nextReducer !== 'function') {
      throw new Error('Expected the nextReducer to be a function.');
    }

    currentReducer = nextReducer; // This action has a similiar effect to ActionTypes.INIT.
    // Any reducers that existed in both the new and old rootReducer
    // will receive the previous state. This effectively populates
    // the new state tree with any relevant data from the old one.

    dispatch({
      type: ActionTypes.REPLACE
    });
  }
  /**
   * Interoperability point for observable/reactive libraries.
   * @returns {observable} A minimal observable of state changes.
   * For more information, see the observable proposal:
   * https://github.com/tc39/proposal-observable
   */


  function observable() {
    var _ref;

    var outerSubscribe = subscribe;
    return _ref = {
      /**
       * The minimal observable subscription method.
       * @param {Object} observer Any object that can be used as an observer.
       * The observer object should have a `next` method.
       * @returns {subscription} An object with an `unsubscribe` method that can
       * be used to unsubscribe the observable from the store, and prevent further
       * emission of values from the observable.
       */
      subscribe: function subscribe(observer) {
        if (typeof observer !== 'object' || observer === null) {
          throw new TypeError('Expected the observer to be an object.');
        }

        function observeState() {
          if (observer.next) {
            observer.next(getState());
          }
        }

        observeState();
        var unsubscribe = outerSubscribe(observeState);
        return {
          unsubscribe: unsubscribe
        };
      }
    }, _ref[es["a" /* default */]] = function () {
      return this;
    }, _ref;
  } // When a store is created, an "INIT" action is dispatched so that every
  // reducer returns their initial state. This effectively populates
  // the initial state tree.


  dispatch({
    type: ActionTypes.INIT
  });
  return _ref2 = {
    dispatch: dispatch,
    subscribe: subscribe,
    getState: getState,
    replaceReducer: replaceReducer
  }, _ref2[es["a" /* default */]] = observable, _ref2;
}

/**
 * Prints a warning in the console if it exists.
 *
 * @param {String} message The warning message.
 * @returns {void}
 */
function warning(message) {
  /* eslint-disable no-console */
  if (typeof console !== 'undefined' && typeof console.error === 'function') {
    console.error(message);
  }
  /* eslint-enable no-console */


  try {
    // This error was thrown as a convenience so that if you enable
    // "break on all exceptions" in your console,
    // it would pause the execution at this line.
    throw new Error(message);
  } catch (e) {} // eslint-disable-line no-empty

}

function getUndefinedStateErrorMessage(key, action) {
  var actionType = action && action.type;
  var actionDescription = actionType && "action \"" + String(actionType) + "\"" || 'an action';
  return "Given " + actionDescription + ", reducer \"" + key + "\" returned undefined. " + "To ignore an action, you must explicitly return the previous state. " + "If you want this reducer to hold no value, you can return null instead of undefined.";
}

function getUnexpectedStateShapeWarningMessage(inputState, reducers, action, unexpectedKeyCache) {
  var reducerKeys = Object.keys(reducers);
  var argumentName = action && action.type === ActionTypes.INIT ? 'preloadedState argument passed to createStore' : 'previous state received by the reducer';

  if (reducerKeys.length === 0) {
    return 'Store does not have a valid reducer. Make sure the argument passed ' + 'to combineReducers is an object whose values are reducers.';
  }

  if (!isPlainObject(inputState)) {
    return "The " + argumentName + " has unexpected type of \"" + {}.toString.call(inputState).match(/\s([a-z|A-Z]+)/)[1] + "\". Expected argument to be an object with the following " + ("keys: \"" + reducerKeys.join('", "') + "\"");
  }

  var unexpectedKeys = Object.keys(inputState).filter(function (key) {
    return !reducers.hasOwnProperty(key) && !unexpectedKeyCache[key];
  });
  unexpectedKeys.forEach(function (key) {
    unexpectedKeyCache[key] = true;
  });
  if (action && action.type === ActionTypes.REPLACE) return;

  if (unexpectedKeys.length > 0) {
    return "Unexpected " + (unexpectedKeys.length > 1 ? 'keys' : 'key') + " " + ("\"" + unexpectedKeys.join('", "') + "\" found in " + argumentName + ". ") + "Expected to find one of the known reducer keys instead: " + ("\"" + reducerKeys.join('", "') + "\". Unexpected keys will be ignored.");
  }
}

function assertReducerShape(reducers) {
  Object.keys(reducers).forEach(function (key) {
    var reducer = reducers[key];
    var initialState = reducer(undefined, {
      type: ActionTypes.INIT
    });

    if (typeof initialState === 'undefined') {
      throw new Error("Reducer \"" + key + "\" returned undefined during initialization. " + "If the state passed to the reducer is undefined, you must " + "explicitly return the initial state. The initial state may " + "not be undefined. If you don't want to set a value for this reducer, " + "you can use null instead of undefined.");
    }

    if (typeof reducer(undefined, {
      type: ActionTypes.PROBE_UNKNOWN_ACTION()
    }) === 'undefined') {
      throw new Error("Reducer \"" + key + "\" returned undefined when probed with a random type. " + ("Don't try to handle " + ActionTypes.INIT + " or other actions in \"redux/*\" ") + "namespace. They are considered private. Instead, you must return the " + "current state for any unknown actions, unless it is undefined, " + "in which case you must return the initial state, regardless of the " + "action type. The initial state may not be undefined, but can be null.");
    }
  });
}
/**
 * Turns an object whose values are different reducer functions, into a single
 * reducer function. It will call every child reducer, and gather their results
 * into a single state object, whose keys correspond to the keys of the passed
 * reducer functions.
 *
 * @param {Object} reducers An object whose values correspond to different
 * reducer functions that need to be combined into one. One handy way to obtain
 * it is to use ES6 `import * as reducers` syntax. The reducers may never return
 * undefined for any action. Instead, they should return their initial state
 * if the state passed to them was undefined, and the current state for any
 * unrecognized action.
 *
 * @returns {Function} A reducer function that invokes every reducer inside the
 * passed object, and builds a state object with the same shape.
 */


function combineReducers(reducers) {
  var reducerKeys = Object.keys(reducers);
  var finalReducers = {};

  for (var i = 0; i < reducerKeys.length; i++) {
    var key = reducerKeys[i];

    if (false) {}

    if (typeof reducers[key] === 'function') {
      finalReducers[key] = reducers[key];
    }
  }

  var finalReducerKeys = Object.keys(finalReducers); // This is used to make sure we don't warn about the same
  // keys multiple times.

  var unexpectedKeyCache;

  if (false) {}

  var shapeAssertionError;

  try {
    assertReducerShape(finalReducers);
  } catch (e) {
    shapeAssertionError = e;
  }

  return function combination(state, action) {
    if (state === void 0) {
      state = {};
    }

    if (shapeAssertionError) {
      throw shapeAssertionError;
    }

    if (false) { var warningMessage; }

    var hasChanged = false;
    var nextState = {};

    for (var _i = 0; _i < finalReducerKeys.length; _i++) {
      var _key = finalReducerKeys[_i];
      var reducer = finalReducers[_key];
      var previousStateForKey = state[_key];
      var nextStateForKey = reducer(previousStateForKey, action);

      if (typeof nextStateForKey === 'undefined') {
        var errorMessage = getUndefinedStateErrorMessage(_key, action);
        throw new Error(errorMessage);
      }

      nextState[_key] = nextStateForKey;
      hasChanged = hasChanged || nextStateForKey !== previousStateForKey;
    }

    hasChanged = hasChanged || finalReducerKeys.length !== Object.keys(state).length;
    return hasChanged ? nextState : state;
  };
}

function bindActionCreator(actionCreator, dispatch) {
  return function () {
    return dispatch(actionCreator.apply(this, arguments));
  };
}
/**
 * Turns an object whose values are action creators, into an object with the
 * same keys, but with every function wrapped into a `dispatch` call so they
 * may be invoked directly. This is just a convenience method, as you can call
 * `store.dispatch(MyActionCreators.doSomething())` yourself just fine.
 *
 * For convenience, you can also pass an action creator as the first argument,
 * and get a dispatch wrapped function in return.
 *
 * @param {Function|Object} actionCreators An object whose values are action
 * creator functions. One handy way to obtain it is to use ES6 `import * as`
 * syntax. You may also pass a single function.
 *
 * @param {Function} dispatch The `dispatch` function available on your Redux
 * store.
 *
 * @returns {Function|Object} The object mimicking the original object, but with
 * every action creator wrapped into the `dispatch` call. If you passed a
 * function as `actionCreators`, the return value will also be a single
 * function.
 */


function bindActionCreators(actionCreators, dispatch) {
  if (typeof actionCreators === 'function') {
    return bindActionCreator(actionCreators, dispatch);
  }

  if (typeof actionCreators !== 'object' || actionCreators === null) {
    throw new Error("bindActionCreators expected an object or a function, instead received " + (actionCreators === null ? 'null' : typeof actionCreators) + ". " + "Did you write \"import ActionCreators from\" instead of \"import * as ActionCreators from\"?");
  }

  var boundActionCreators = {};

  for (var key in actionCreators) {
    var actionCreator = actionCreators[key];

    if (typeof actionCreator === 'function') {
      boundActionCreators[key] = bindActionCreator(actionCreator, dispatch);
    }
  }

  return boundActionCreators;
}

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    keys.push.apply(keys, Object.getOwnPropertySymbols(object));
  }

  if (enumerableOnly) keys = keys.filter(function (sym) {
    return Object.getOwnPropertyDescriptor(object, sym).enumerable;
  });
  return keys;
}

function _objectSpread2(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    if (i % 2) {
      ownKeys(source, true).forEach(function (key) {
        _defineProperty(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys(source).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }

  return target;
}

/**
 * Composes single-argument functions from right to left. The rightmost
 * function can take multiple arguments as it provides the signature for
 * the resulting composite function.
 *
 * @param {...Function} funcs The functions to compose.
 * @returns {Function} A function obtained by composing the argument functions
 * from right to left. For example, compose(f, g, h) is identical to doing
 * (...args) => f(g(h(...args))).
 */
function compose() {
  for (var _len = arguments.length, funcs = new Array(_len), _key = 0; _key < _len; _key++) {
    funcs[_key] = arguments[_key];
  }

  if (funcs.length === 0) {
    return function (arg) {
      return arg;
    };
  }

  if (funcs.length === 1) {
    return funcs[0];
  }

  return funcs.reduce(function (a, b) {
    return function () {
      return a(b.apply(void 0, arguments));
    };
  });
}

/**
 * Creates a store enhancer that applies middleware to the dispatch method
 * of the Redux store. This is handy for a variety of tasks, such as expressing
 * asynchronous actions in a concise manner, or logging every action payload.
 *
 * See `redux-thunk` package as an example of the Redux middleware.
 *
 * Because middleware is potentially asynchronous, this should be the first
 * store enhancer in the composition chain.
 *
 * Note that each middleware will be given the `dispatch` and `getState` functions
 * as named arguments.
 *
 * @param {...Function} middlewares The middleware chain to be applied.
 * @returns {Function} A store enhancer applying the middleware.
 */

function applyMiddleware() {
  for (var _len = arguments.length, middlewares = new Array(_len), _key = 0; _key < _len; _key++) {
    middlewares[_key] = arguments[_key];
  }

  return function (createStore) {
    return function () {
      var store = createStore.apply(void 0, arguments);

      var _dispatch = function dispatch() {
        throw new Error('Dispatching while constructing your middleware is not allowed. ' + 'Other middleware would not be applied to this dispatch.');
      };

      var middlewareAPI = {
        getState: store.getState,
        dispatch: function dispatch() {
          return _dispatch.apply(void 0, arguments);
        }
      };
      var chain = middlewares.map(function (middleware) {
        return middleware(middlewareAPI);
      });
      _dispatch = compose.apply(void 0, chain)(store.dispatch);
      return _objectSpread2({}, store, {
        dispatch: _dispatch
      });
    };
  };
}

/*
 * This is a dummy function to check if the function name has been altered by minification.
 * If the function has been minified and NODE_ENV !== 'production', warn the user.
 */

function isCrushed() {}

if (false) {}



// EXTERNAL MODULE: ./src/forms/FormButton/FormButton.pcss
var FormButton_FormButton = __webpack_require__(31);

// EXTERNAL MODULE: ./src/forms/FormButton/FormButton-Variations.pcss
var FormButton_Variations = __webpack_require__(32);

// EXTERNAL MODULE: ./src/forms/FormButton/FormButton-Themes.pcss
var FormButton_Themes = __webpack_require__(33);

// CONCATENATED MODULE: ./src/forms/FormButton/FormButton.jsx
 /** @module FormButton
                                                                                                                                                                                                                                                                                *  @class FormButton
                                                                                                                                                                                                                                                                                *  @since 2020.07.20, 19:07
                                                                                                                                                                                                                                                                                *  @changed 2020.12.29, 20:57
                                                                                                                                                                                                                                                                                */




// import connect from 'react-redux/es/connect/connect'











var cnFormButton = configure_cn('FormButton');var

FormButton_FormButton_FormButton = /*#__PURE__*/function (_React$PureComponent) {inheritsLoose_default()(FormButton, _React$PureComponent);function FormButton() {var _this;for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {args[_key] = arguments[_key];}_this = _React$PureComponent.call.apply(_React$PureComponent, [this].concat(args)) || this;defineProperty_default()(assertThisInitialized_default()(_this), "onClick",

























































































    function (event) {var _this$props =






      _this.props,id = _this$props.id,actionsContextNode = _this$props.actionsContextNode,disabled = _this$props.disabled,onClick = _this$props.onClick;
      if (!disabled) {
        var hasOnClick = onClick && typeof onClick === 'function';
        var result = hasOnClick ? onClick(event) : true;
        if (result !== false && actionsContextNode && typeof actionsContextNode.onAction) {
          Promise.resolve(result).then(function (result) {
            if (result !== false) {// Check for non-false value
              actionsContextNode.onAction({ id: id, result: result });
            }
          });
        }
      }
    });return _this;}var _proto = FormButton.prototype; // static defaultProps = {
  // }
  // Helpers...
  _proto.hasIcon = function hasIcon() {var _this$props2 = this.props,icon = _this$props2.icon,hasIcon = _this$props2.hasIcon;return !!(hasIcon || icon);};_proto.hasText = function hasText() {var _this$props3 = this.props,hasText = _this$props3.hasText,onlyIcon = _this$props3.onlyIcon,children = _this$props3.children,text = _this$props3.text;return !onlyIcon && !!(hasText || text || children);};_proto.getClassName = function getClassName() {// TODO: Refactor properties!
    var _this$props4 = this.props,checked = _this$props4.checked,fullWidth = _this$props4.fullWidth,id = _this$props4.id,inline = _this$props4.inline,largeIcon = _this$props4.largeIcon,onDark = _this$props4.onDark,onlyIcon = _this$props4.onlyIcon,plain = _this$props4.plain,rightIcon = _this$props4.rightIcon,rotatedIcon = _this$props4.rotatedIcon,theme = _this$props4.theme,type = _this$props4.type,variation = _this$props4.variation;var mods = { // plain,
      checked: checked, fullWidth: fullWidth, id: id, inline: inline, largeIcon: largeIcon, onDark: onDark, onlyIcon: onlyIcon, plain: plain, rightIcon: rightIcon, rotatedIcon: rotatedIcon, theme: theme, type: type, variation: variation };var staticMods = { solid: true };var classList = cnFormButton(extends_default()({}, staticMods, mods, { hasIcon: this.hasIcon(), hasText: this.hasText() }), [this.props.className]);return classList;} // Handlers...
  ; // Render...
  _proto.renderIcon = function renderIcon() {var hasIcon = this.hasIcon();if (hasIcon) {var icon = this.props.icon;
      if (icon && icon.type === elements_InlineIcon_InlineIcon) {// Already InlineIcon
        // Extend with updated `className` props
        var props = extends_default()({},
        icon.props, {
          className: cnFormButton('Icon', [icon.props.className]) });

        var newIcon = extends_default()({}, icon, { props: props });
        return newIcon;
      }
      return /*#__PURE__*/(
        external_react_default.a.createElement(elements_InlineIcon_InlineIcon, { icon: icon, className: cnFormButton('Icon') }));

    }
  };_proto.

  renderText = function renderText() {
    var hasText = this.hasText(); // !onlyIcon && !!(hasText || text || children
    if (hasText) {var _this$props5 =
      this.props,text = _this$props5.text,children = _this$props5.children;
      return hasText && /*#__PURE__*/
      external_react_default.a.createElement("span", { className: cnFormButton('Text') },
      text || children);


    }
  };_proto.

  render = function render() {var _this$props6 =









    this.props,id = _this$props6.id,disabled = _this$props6.disabled,tag = _this$props6.tag,type = _this$props6.type,title = _this$props6.title,setDomRef = _this$props6.setDomRef;

    var iconElem = this.renderIcon(); // Icon element
    var textElem = this.renderText(); // Text element

    // const basicRenderProps = this.getRenderProps() // Get from props not from overrided `super`
    var renderProps = {
      // ...basicRenderProps,
      id: id,
      className: this.getClassName(),
      disabled: disabled,
      title: title,
      type: type,
      onClick: this.onClick,
      ref: setDomRef // Init ref for FormItemHOC
    };

    var content = /*#__PURE__*/
    external_react_default.a.createElement(external_react_default.a.Fragment, null,
    iconElem,
    textElem);



    var tagName = tag || 'div';
    var element = /*#__PURE__*/external_react_default.a.createElement(tagName, renderProps, content);
    return element;
  };return FormButton;}(external_react_default.a.PureComponent /** @lends @FormButton.prototype */);



// export default FormItemHOC({ solid: true, hoverable: true, framed: true })(FormButton)
defineProperty_default()(FormButton_FormButton_FormButton, "propTypes", { // TODO!!!
  // TODO: size: PropTypes.string, // Different form item sizes? (eg: md -- default, sm, xs, lg, xl, xxl)
  checked: prop_types_default.a.bool, // FormItem: Checked state
  disabled: prop_types_default.a.bool, fullWidth: prop_types_default.a.bool, // Occupies all horizontal space
  hasIcon: prop_types_default.a.bool, // Optional
  hasText: prop_types_default.a.bool, // Optional
  icon: prop_types_default.a.oneOfType([prop_types_default.a.string, prop_types_default.a.object]), // Icon component. May be as image resource loaded with `file/url-loader` as `FontAwesomeIcon` component.
  id: prop_types_default.a.string, inline: prop_types_default.a.bool, largeIcon: prop_types_default.a.bool, // Large icon
  onClick: prop_types_default.a.func, onDark: prop_types_default.a.bool, // On dark background
  onlyIcon: prop_types_default.a.bool, // Only icon
  plain: prop_types_default.a.bool, // ??? Plain icon (no border & background -- if no style specified, looks as link)
  rightIcon: prop_types_default.a.bool, // Icon placed at right side
  text: prop_types_default.a.string, // Text content (may be passed as node children)
  theme: prop_types_default.a.string // Button style (plain, default, primary, secondary, error, warn, success, info, etc -- some are in progress -- see styles file)
});/* harmony default export */ var forms_FormButton_FormButton = (compose(ActionsContext_withActionsContext, forms_FormItemHOC_FormItemHOC({ solid: true, hoverable: true, framed: true }))(FormButton_FormButton_FormButton));
// EXTERNAL MODULE: ./src/forms/FormGroup/FormGroup.pcss
var FormGroup_FormGroup = __webpack_require__(35);

// CONCATENATED MODULE: ./src/forms/FormGroup/FormGroup.jsx
 /** @module FormGroup
                                                                                                                                                                                              *  @class FormGroup
                                                                                                                                                                                              *  @since 2020.07.20, 19:07
                                                                                                                                                                                              *  @changed 2020.07.20, 19:07
                                                                                                                                                                                              */
/* eslint-disable react/require-default-props, react/no-unused-prop-types */



// import connect from 'react-redux/es/connect/connect'






var cnFormGroup = configure_cn('FormGroup');var

FormGroup_FormGroup_FormGroup = /*#__PURE__*/function (_React$PureComponent) {inheritsLoose_default()(FormGroup, _React$PureComponent);
































  function FormGroup(props) {var _this;
    _this = _React$PureComponent.call(this, props) || this;
    _this.state = {};return _this;

  }var _proto = FormGroup.prototype;_proto.

  getClassName = function getClassName() {var _this2 = this;
    var mods = FormGroup.classNameModifiers.reduce(function (mods, id) {
      var val = _this2.state[id] != null ? _this2.state[id] : _this2.props[id];
      if (val != null) {var _extends2;
        return extends_default()({}, mods, (_extends2 = {}, _extends2[id] = val, _extends2));
      }
      return mods;
    }, {});
    return cnFormGroup(mods, [this.props.className]);
  }

  // Render...
  ;_proto.
  render = function render() {var _this$props =






    this.props,id = _this$props.id,children = _this$props.children,content = _this$props.content;

    // const renderProps = this.getRenderProps()

    return /*#__PURE__*/(
      external_react_default.a.createElement("div", { id: id, className: this.getClassName() },
      content || children));


  };return FormGroup;}(external_react_default.a.PureComponent /** @lends @FormGroup.prototype */);defineProperty_default()(FormGroup_FormGroup_FormGroup, "propTypes", { id: prop_types_default.a.string, align: prop_types_default.a.string, alignItems: prop_types_default.a.string, background: prop_types_default.a.string, flow: prop_types_default.a.oneOfType([prop_types_default.a.bool, prop_types_default.a.string]), noWrap: prop_types_default.a.bool, fullWidth: prop_types_default.a.bool, padded: prop_types_default.a.bool, stack: prop_types_default.a.oneOfType([prop_types_default.a.bool, prop_types_default.a.string]) // name: PropTypes.string,
  // disabled: PropTypes.bool,
  // value: PropTypes.any,
  // valueType: PropTypes.string,
  // onChange: PropTypes.func,
});defineProperty_default()(FormGroup_FormGroup_FormGroup, "classNameModifiers", [// Basic element properties
'id', // Style-related modifiers...
'align', 'alignItems', 'background', 'flow', 'noWrap', 'fullWidth', 'padded', 'stack']);/* harmony default export */ var forms_FormGroup_FormGroup = (forms_FormItemHOC_FormItemHOC(FormGroup_FormGroup_FormGroup));
// CONCATENATED MODULE: ./src/forms/FormLabeledGroup/FormLabeledGroup.jsx
/** @module FormLabeledGroup
 *  @class FormLabeledGroup
 *  @since 2020.05.10, 09:24
 *  @changed 2020.12.10, 16:20
 */


// import { cn } from 'utils/configure'




// import './FormLabeledGroup.pcss'

// const cnFormLabeledGroup = cn('FormLabeledGroup')

// class FormLabeledGroup extends React.PureComponent [>* @lends @FormLabeledGroup.prototype <] {
var FormLabeledGroup_FormLabeledGroup = function FormLabeledGroup(props) /** @lends @FormLabeledGroup.prototype */{var

  className =










  props.className,children = props.children,id = props.id,fullWidth = props.fullWidth,innerFlex = props.innerFlex,htmlFor = props.htmlFor,title = props.title,text = props.text,flow = props.flow;
  // const thisClassName = cnFormLabeledGroup({ flow, full })
  return /*#__PURE__*/(
    external_react_default.a.createElement(forms_FormGroup_FormGroup, {
      className: className,
      fullWidth: fullWidth,
      innerFlex: innerFlex,
      flow: flow,
      id: id }, /*#__PURE__*/

    external_react_default.a.createElement(forms_FormLabel_FormLabel, {
      htmlFor: htmlFor,
      title: title,
      text: text || title + ':',
      fixed: flow && fullWidth,
      firstInBlock: !flow && fullWidth }),

    children));



};

/* harmony default export */ var forms_FormLabeledGroup_FormLabeledGroup = (FormLabeledGroup_FormLabeledGroup);
// EXTERNAL MODULE: ./src/forms/FormButtonGroup/FormButtonGroup.pcss
var FormButtonGroup_FormButtonGroup = __webpack_require__(36);

// CONCATENATED MODULE: ./src/forms/FormButtonGroup/FormButtonGroup.jsx
 /** @module FormButtonGroup
                                                                                                                                                                                              *  @class FormButtonGroup
                                                                                                                                                                                              *  @since 2020.10.21, 23:43
                                                                                                                                                                                              *  @changed 2020.10.21, 23:43
                                                                                                                                                                                              */
/* eslint-disable react/require-default-props */



// import connect from 'react-redux/es/connect/connect'







var FormButtonGroup_classNameModifiers = [
// Basic element properties
'id'
// Style-related modifiers...
// 'align',
// 'padded',
// 'background',
// 'flow',
// 'fullWidth',
];

var cnFormButtonGroup = configure_cn('FormButtonGroup');var

FormButtonGroup_FormButtonGroup_FormButtonGroup = /*#__PURE__*/function (_React$PureComponent) {inheritsLoose_default()(FormButtonGroup, _React$PureComponent);function FormButtonGroup() {return _React$PureComponent.apply(this, arguments) || this;}var _proto = FormButtonGroup.prototype;_proto.






  getClassName = function getClassName() {var _this = this;
    var mods = FormButtonGroup_classNameModifiers.reduce(function (mods, id) {
      var val = _this.props[id];
      if (val != null) {var _extends2;
        return extends_default()({}, mods, (_extends2 = {}, _extends2[id] = val, _extends2));
      }
      return mods;
    }, {});
    return cnFormButtonGroup(mods, [this.props.className]);
  }

  // Render...
  ;_proto.
  render = function render() {
    // const {
    //   id,
    //   // name,
    //   // disabled,
    //   children,
    //   content,
    // } = this.props
    return /*#__PURE__*/(
      external_react_default.a.createElement(forms_FormGroup_FormGroup, extends_default()({}, this.props, { className: this.getClassName() })));

  };return FormButtonGroup;}(external_react_default.a.PureComponent /** @lends @FormButtonGroup.prototype */);defineProperty_default()(FormButtonGroup_FormButtonGroup_FormButtonGroup, "propTypes", { id: prop_types_default.a.string // flow: PropTypes.bool,
});


/* harmony default export */ var forms_FormButtonGroup_FormButtonGroup = (forms_FormItemHOC_FormItemHOC(FormButtonGroup_FormButtonGroup_FormButtonGroup));
// EXTERNAL MODULE: ./src/forms/FormInputGroup/FormInputGroup.pcss
var FormInputGroup_FormInputGroup = __webpack_require__(37);

// CONCATENATED MODULE: ./src/forms/FormInputGroup/FormInputGroup.jsx
 /** @module FormInputGroup
                                                                                                                                                                                              *  @class FormInputGroup
                                                                                                                                                                                              *  @since 2020.10.21, 23:43
                                                                                                                                                                                              *  @changed 2020.10.21, 23:43
                                                                                                                                                                                              */
/* eslint-disable react/require-default-props */



// import connect from 'react-redux/es/connect/connect'







var FormInputGroup_classNameModifiers = [
// Basic element properties
'id'
// Style-related modifiers...
// 'align',
// 'padded',
// 'background',
// 'flow',
// 'fullWidth',
];

var cnFormInputGroup = configure_cn('FormInputGroup');var

FormInputGroup_FormInputGroup_FormInputGroup = /*#__PURE__*/function (_React$PureComponent) {inheritsLoose_default()(FormInputGroup, _React$PureComponent);function FormInputGroup() {return _React$PureComponent.apply(this, arguments) || this;}var _proto = FormInputGroup.prototype;_proto.









  getClassName = function getClassName() {var _this = this;
    var mods = FormInputGroup_classNameModifiers.reduce(function (mods, id) {
      var val = _this.props[id];
      if (val != null) {var _extends2;
        return extends_default()({}, mods, (_extends2 = {}, _extends2[id] = val, _extends2));
      }
      return mods;
    }, {});
    return cnFormInputGroup(mods, [this.props.className]);
  }

  // Render...
  ;_proto.
  render = function render() {
    return /*#__PURE__*/(
      external_react_default.a.createElement(forms_FormGroup_FormGroup, extends_default()({}, this.props, { className: this.getClassName() })));

  };return FormInputGroup;}(external_react_default.a.PureComponent /** @lends @FormInputGroup.prototype */);defineProperty_default()(FormInputGroup_FormInputGroup_FormInputGroup, "propTypes", { id: prop_types_default.a.string // disabled: PropTypes.bool, // ???
  // align: PropTypes.string,
  // padded: PropTypes.bool,
  // flow: PropTypes.bool,
});/* harmony default export */ var forms_FormInputGroup_FormInputGroup = (forms_FormItemHOC_FormItemHOC(FormInputGroup_FormInputGroup_FormInputGroup));
// EXTERNAL MODULE: ./src/forms/FormDelim/FormDelim.pcss
var FormDelim_FormDelim = __webpack_require__(38);

// CONCATENATED MODULE: ./src/forms/FormDelim/FormDelim.jsx
/** @module FormDelim
 *  @class FormDelim
 *  @since 2020.11.27, 12:52
 *  @changed 2020.11.27, 12:52
 */






var FormDelim_FormDelim_FormDelim = function FormDelim(props) {var
  id = props.id;
  var className = configure_cn('FormDelim')({ id: id }, [props.className]);
  return /*#__PURE__*/(
    external_react_default.a.createElement("div", { className: className }));

};

/* harmony default export */ var forms_FormDelim_FormDelim = (FormDelim_FormDelim_FormDelim);
// EXTERNAL MODULE: ./src/forms/FormSpacer/FormSpacer.pcss
var FormSpacer_FormSpacer = __webpack_require__(39);

// CONCATENATED MODULE: ./src/forms/FormSpacer/FormSpacer.jsx
/** @module FormSpacer
 *  @class FormSpacer
 *  @since 2020.11.27, 12:52
 *  @changed 2020.11.27, 12:52
 */






var FormSpacer_FormSpacer_FormSpacer = function FormSpacer(props) {var
  id = props.id;
  var className = configure_cn('FormSpacer')({ id: id }, [props.className]);
  return /*#__PURE__*/(
    external_react_default.a.createElement("div", { className: className }));

};

/* harmony default export */ var forms_FormSpacer_FormSpacer = (FormSpacer_FormSpacer_FormSpacer);
// EXTERNAL MODULE: ./src/forms/FormText/FormText.pcss
var FormText_FormText = __webpack_require__(40);

// CONCATENATED MODULE: ./src/forms/FormText/FormText.jsx
 /** @module FormText
                                                                                                                                                                                                                          *  @class FormText
                                                                                                                                                                                                                          *  @since 2020.10.29, 21:25
                                                                                                                                                                                                                          *  @changed 2020.10.29, 22:42
                                                                                                                                                                                                                          */
/* eslint-disable react/require-default-props */



// import connect from 'react-redux/es/connect/connect'






var cnFormText = configure_cn('FormText');var

FormText_FormText_FormText = /*#__PURE__*/function (_React$PureComponent) {inheritsLoose_default()(FormText, _React$PureComponent);function FormText() {var _this;for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {args[_key] = arguments[_key];}_this = _React$PureComponent.call.apply(_React$PureComponent, [this].concat(args)) || this;defineProperty_default()(assertThisInitialized_default()(_this), "onClick",

















    function (event) {var _this$props =



      _this.props,disabled = _this$props.disabled,onClick = _this$props.onClick;
      if (!disabled && onClick && typeof onClick === 'function') {
        onClick(event);
      }
    });return _this;}var _proto = FormText.prototype;_proto.getClassName = function getClassName() {var id = this.props.id;var classList = cnFormText({ id: id }, [this.props.className]);return classList;} // Handlers...
  ;
  // Render...
  _proto.
  render = function render() {var _this$props2 =







    this.props,id = _this$props2.id,disabled = _this$props2.disabled,text = _this$props2.text,children = _this$props2.children,title = _this$props2.title;

    var renderProps = {
      id: id,
      className: this.getClassName(),
      disabled: disabled,
      title: title };


    return /*#__PURE__*/(
      external_react_default.a.createElement("div", renderProps,
      children || text || title));



  };return FormText;}(external_react_default.a.PureComponent /** @lends @FormText.prototype */);defineProperty_default()(FormText_FormText_FormText, "propTypes", { id: prop_types_default.a.string });



/* harmony default export */ var forms_FormText_FormText = (forms_FormItemHOC_FormItemHOC({ hoverable: true })(FormText_FormText_FormText));
// CONCATENATED MODULE: ./node_modules/throttle-debounce/esm/index.js
/* eslint-disable no-undefined,no-param-reassign,no-shadow */

/**
 * Throttle execution of a function. Especially useful for rate limiting
 * execution of handlers on events like resize and scroll.
 *
 * @param  {number}    delay -          A zero-or-greater delay in milliseconds. For event callbacks, values around 100 or 250 (or even higher) are most useful.
 * @param  {boolean}   [noTrailing] -   Optional, defaults to false. If noTrailing is true, callback will only execute every `delay` milliseconds while the
 *                                    throttled-function is being called. If noTrailing is false or unspecified, callback will be executed one final time
 *                                    after the last throttled-function call. (After the throttled-function has not been called for `delay` milliseconds,
 *                                    the internal counter is reset).
 * @param  {Function}  callback -       A function to be executed after delay milliseconds. The `this` context and all arguments are passed through, as-is,
 *                                    to `callback` when the throttled-function is executed.
 * @param  {boolean}   [debounceMode] - If `debounceMode` is true (at begin), schedule `clear` to execute after `delay` ms. If `debounceMode` is false (at end),
 *                                    schedule `callback` to execute after `delay` ms.
 *
 * @returns {Function}  A new, throttled, function.
 */
function throttle (delay, noTrailing, callback, debounceMode) {
  /*
   * After wrapper has stopped being called, this timeout ensures that
   * `callback` is executed at the proper times in `throttle` and `end`
   * debounce modes.
   */
  var timeoutID;
  var cancelled = false; // Keep track of the last time `callback` was executed.

  var lastExec = 0; // Function to clear existing timeout

  function clearExistingTimeout() {
    if (timeoutID) {
      clearTimeout(timeoutID);
    }
  } // Function to cancel next exec


  function cancel() {
    clearExistingTimeout();
    cancelled = true;
  } // `noTrailing` defaults to falsy.


  if (typeof noTrailing !== 'boolean') {
    debounceMode = callback;
    callback = noTrailing;
    noTrailing = undefined;
  }
  /*
   * The `wrapper` function encapsulates all of the throttling / debouncing
   * functionality and when executed will limit the rate at which `callback`
   * is executed.
   */


  function wrapper() {
    for (var _len = arguments.length, arguments_ = new Array(_len), _key = 0; _key < _len; _key++) {
      arguments_[_key] = arguments[_key];
    }

    var self = this;
    var elapsed = Date.now() - lastExec;

    if (cancelled) {
      return;
    } // Execute `callback` and update the `lastExec` timestamp.


    function exec() {
      lastExec = Date.now();
      callback.apply(self, arguments_);
    }
    /*
     * If `debounceMode` is true (at begin) this is used to clear the flag
     * to allow future `callback` executions.
     */


    function clear() {
      timeoutID = undefined;
    }

    if (debounceMode && !timeoutID) {
      /*
       * Since `wrapper` is being called for the first time and
       * `debounceMode` is true (at begin), execute `callback`.
       */
      exec();
    }

    clearExistingTimeout();

    if (debounceMode === undefined && elapsed > delay) {
      /*
       * In throttle mode, if `delay` time has been exceeded, execute
       * `callback`.
       */
      exec();
    } else if (noTrailing !== true) {
      /*
       * In trailing throttle mode, since `delay` time has not been
       * exceeded, schedule `callback` to execute `delay` ms after most
       * recent execution.
       *
       * If `debounceMode` is true (at begin), schedule `clear` to execute
       * after `delay` ms.
       *
       * If `debounceMode` is false (at end), schedule `callback` to
       * execute after `delay` ms.
       */
      timeoutID = setTimeout(debounceMode ? clear : exec, debounceMode === undefined ? delay - elapsed : delay);
    }
  }

  wrapper.cancel = cancel; // Return the wrapper function.

  return wrapper;
}

/* eslint-disable no-undefined */
/**
 * Debounce execution of a function. Debouncing, unlike throttling,
 * guarantees that a function is only executed a single time, either at the
 * very beginning of a series of calls, or at the very end.
 *
 * @param  {number}   delay -         A zero-or-greater delay in milliseconds. For event callbacks, values around 100 or 250 (or even higher) are most useful.
 * @param  {boolean}  [atBegin] -     Optional, defaults to false. If atBegin is false or unspecified, callback will only be executed `delay` milliseconds
 *                                  after the last debounced-function call. If atBegin is true, callback will be executed only at the first debounced-function call.
 *                                  (After the throttled-function has not been called for `delay` milliseconds, the internal counter is reset).
 * @param  {Function} callback -      A function to be executed after delay milliseconds. The `this` context and all arguments are passed through, as-is,
 *                                  to `callback` when the debounced-function is executed.
 *
 * @returns {Function} A new, debounced function.
 */

function debounce (delay, atBegin, callback) {
  return callback === undefined ? throttle(delay, atBegin, false) : throttle(delay, callback, atBegin !== false);
}


//# sourceMappingURL=index.js.map

// EXTERNAL MODULE: external "react-dom"
var external_react_dom_ = __webpack_require__(7);
var external_react_dom_default = /*#__PURE__*/__webpack_require__.n(external_react_dom_);

// CONCATENATED MODULE: ./node_modules/react-portal/es/utils.js
var canUseDOM = !!(typeof window !== 'undefined' && window.document && window.document.createElement);
// CONCATENATED MODULE: ./node_modules/react-portal/es/Portal.js
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }






var Portal_Portal = function (_React$Component) {
  _inherits(Portal, _React$Component);

  function Portal() {
    _classCallCheck(this, Portal);

    return _possibleConstructorReturn(this, (Portal.__proto__ || Object.getPrototypeOf(Portal)).apply(this, arguments));
  }

  _createClass(Portal, [{
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      if (this.defaultNode) {
        document.body.removeChild(this.defaultNode);
      }
      this.defaultNode = null;
    }
  }, {
    key: 'render',
    value: function render() {
      if (!canUseDOM) {
        return null;
      }
      if (!this.props.node && !this.defaultNode) {
        this.defaultNode = document.createElement('div');
        document.body.appendChild(this.defaultNode);
      }
      return external_react_dom_default.a.createPortal(this.props.children, this.props.node || this.defaultNode);
    }
  }]);

  return Portal;
}(external_react_default.a.Component);

Portal_Portal.propTypes = {
  children: prop_types_default.a.node.isRequired,
  node: prop_types_default.a.any
};

/* harmony default export */ var es_Portal = (Portal_Portal);
// CONCATENATED MODULE: ./node_modules/react-portal/es/LegacyPortal.js
var LegacyPortal_createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function LegacyPortal_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function LegacyPortal_possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function LegacyPortal_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// This file is a fallback for a consumer who is not yet on React 16
// as createPortal was introduced in React 16





var LegacyPortal_Portal = function (_React$Component) {
  LegacyPortal_inherits(Portal, _React$Component);

  function Portal() {
    LegacyPortal_classCallCheck(this, Portal);

    return LegacyPortal_possibleConstructorReturn(this, (Portal.__proto__ || Object.getPrototypeOf(Portal)).apply(this, arguments));
  }

  LegacyPortal_createClass(Portal, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.renderPortal();
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate(props) {
      this.renderPortal();
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      external_react_dom_default.a.unmountComponentAtNode(this.defaultNode || this.props.node);
      if (this.defaultNode) {
        document.body.removeChild(this.defaultNode);
      }
      this.defaultNode = null;
      this.portal = null;
    }
  }, {
    key: 'renderPortal',
    value: function renderPortal(props) {
      if (!this.props.node && !this.defaultNode) {
        this.defaultNode = document.createElement('div');
        document.body.appendChild(this.defaultNode);
      }

      var children = this.props.children;
      // https://gist.github.com/jimfb/d99e0678e9da715ccf6454961ef04d1b
      if (typeof this.props.children.type === 'function') {
        children = external_react_default.a.cloneElement(this.props.children);
      }

      this.portal = external_react_dom_default.a.unstable_renderSubtreeIntoContainer(this, children, this.props.node || this.defaultNode);
    }
  }, {
    key: 'render',
    value: function render() {
      return null;
    }
  }]);

  return Portal;
}(external_react_default.a.Component);

/* harmony default export */ var LegacyPortal = (LegacyPortal_Portal);


LegacyPortal_Portal.propTypes = {
  children: prop_types_default.a.node.isRequired,
  node: prop_types_default.a.any
};
// CONCATENATED MODULE: ./node_modules/react-portal/es/PortalCompat.js





var PortalCompat_Portal = void 0;

if (external_react_dom_default.a.createPortal) {
  PortalCompat_Portal = es_Portal;
} else {
  PortalCompat_Portal = LegacyPortal;
}

/* harmony default export */ var PortalCompat = (PortalCompat_Portal);
// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/extends.js
function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}
// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js
function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}
// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js
function _inheritsLoose(subClass, superClass) {
  subClass.prototype = Object.create(superClass.prototype);
  subClass.prototype.constructor = subClass;
  subClass.__proto__ = superClass;
}
// CONCATENATED MODULE: ./node_modules/dom-helpers/esm/hasClass.js
function hasClass(element, className) {
  if (element.classList) return !!className && element.classList.contains(className);
  return (" " + (element.className.baseVal || element.className) + " ").indexOf(" " + className + " ") !== -1;
}
// CONCATENATED MODULE: ./node_modules/dom-helpers/esm/addClass.js

function addClass_addClass(element, className) {
  if (element.classList) element.classList.add(className);else if (!hasClass(element, className)) if (typeof element.className === 'string') element.className = element.className + " " + className;else element.setAttribute('class', (element.className && element.className.baseVal || '') + " " + className);
}
// CONCATENATED MODULE: ./node_modules/dom-helpers/esm/removeClass.js
function replaceClassName(origClass, classToRemove) {
  return origClass.replace(new RegExp("(^|\\s)" + classToRemove + "(?:\\s|$)", 'g'), '$1').replace(/\s+/g, ' ').replace(/^\s*|\s*$/g, '');
}

function removeClass_removeClass(element, className) {
  if (element.classList) {
    element.classList.remove(className);
  } else if (typeof element.className === 'string') {
    ;
    element.className = replaceClassName(element.className, className);
  } else {
    element.setAttribute('class', replaceClassName(element.className && element.className.baseVal || '', className));
  }
}
// CONCATENATED MODULE: ./node_modules/react-transition-group/esm/config.js
/* harmony default export */ var esm_config = ({
  disabled: false
});
// CONCATENATED MODULE: ./node_modules/react-transition-group/esm/TransitionGroupContext.js

/* harmony default export */ var TransitionGroupContext = (external_react_default.a.createContext(null));
// CONCATENATED MODULE: ./node_modules/react-transition-group/esm/Transition.js








var UNMOUNTED = 'unmounted';
var EXITED = 'exited';
var ENTERING = 'entering';
var ENTERED = 'entered';
var EXITING = 'exiting';
/**
 * The Transition component lets you describe a transition from one component
 * state to another _over time_ with a simple declarative API. Most commonly
 * it's used to animate the mounting and unmounting of a component, but can also
 * be used to describe in-place transition states as well.
 *
 * ---
 *
 * **Note**: `Transition` is a platform-agnostic base component. If you're using
 * transitions in CSS, you'll probably want to use
 * [`CSSTransition`](https://reactcommunity.org/react-transition-group/css-transition)
 * instead. It inherits all the features of `Transition`, but contains
 * additional features necessary to play nice with CSS transitions (hence the
 * name of the component).
 *
 * ---
 *
 * By default the `Transition` component does not alter the behavior of the
 * component it renders, it only tracks "enter" and "exit" states for the
 * components. It's up to you to give meaning and effect to those states. For
 * example we can add styles to a component when it enters or exits:
 *
 * ```jsx
 * import { Transition } from 'react-transition-group';
 *
 * const duration = 300;
 *
 * const defaultStyle = {
 *   transition: `opacity ${duration}ms ease-in-out`,
 *   opacity: 0,
 * }
 *
 * const transitionStyles = {
 *   entering: { opacity: 1 },
 *   entered:  { opacity: 1 },
 *   exiting:  { opacity: 0 },
 *   exited:  { opacity: 0 },
 * };
 *
 * const Fade = ({ in: inProp }) => (
 *   <Transition in={inProp} timeout={duration}>
 *     {state => (
 *       <div style={{
 *         ...defaultStyle,
 *         ...transitionStyles[state]
 *       }}>
 *         I'm a fade Transition!
 *       </div>
 *     )}
 *   </Transition>
 * );
 * ```
 *
 * There are 4 main states a Transition can be in:
 *  - `'entering'`
 *  - `'entered'`
 *  - `'exiting'`
 *  - `'exited'`
 *
 * Transition state is toggled via the `in` prop. When `true` the component
 * begins the "Enter" stage. During this stage, the component will shift from
 * its current transition state, to `'entering'` for the duration of the
 * transition and then to the `'entered'` stage once it's complete. Let's take
 * the following example (we'll use the
 * [useState](https://reactjs.org/docs/hooks-reference.html#usestate) hook):
 *
 * ```jsx
 * function App() {
 *   const [inProp, setInProp] = useState(false);
 *   return (
 *     <div>
 *       <Transition in={inProp} timeout={500}>
 *         {state => (
 *           // ...
 *         )}
 *       </Transition>
 *       <button onClick={() => setInProp(true)}>
 *         Click to Enter
 *       </button>
 *     </div>
 *   );
 * }
 * ```
 *
 * When the button is clicked the component will shift to the `'entering'` state
 * and stay there for 500ms (the value of `timeout`) before it finally switches
 * to `'entered'`.
 *
 * When `in` is `false` the same thing happens except the state moves from
 * `'exiting'` to `'exited'`.
 */

var Transition_Transition = /*#__PURE__*/function (_React$Component) {
  _inheritsLoose(Transition, _React$Component);

  function Transition(props, context) {
    var _this;

    _this = _React$Component.call(this, props, context) || this;
    var parentGroup = context; // In the context of a TransitionGroup all enters are really appears

    var appear = parentGroup && !parentGroup.isMounting ? props.enter : props.appear;
    var initialStatus;
    _this.appearStatus = null;

    if (props.in) {
      if (appear) {
        initialStatus = EXITED;
        _this.appearStatus = ENTERING;
      } else {
        initialStatus = ENTERED;
      }
    } else {
      if (props.unmountOnExit || props.mountOnEnter) {
        initialStatus = UNMOUNTED;
      } else {
        initialStatus = EXITED;
      }
    }

    _this.state = {
      status: initialStatus
    };
    _this.nextCallback = null;
    return _this;
  }

  Transition.getDerivedStateFromProps = function getDerivedStateFromProps(_ref, prevState) {
    var nextIn = _ref.in;

    if (nextIn && prevState.status === UNMOUNTED) {
      return {
        status: EXITED
      };
    }

    return null;
  } // getSnapshotBeforeUpdate(prevProps) {
  //   let nextStatus = null
  //   if (prevProps !== this.props) {
  //     const { status } = this.state
  //     if (this.props.in) {
  //       if (status !== ENTERING && status !== ENTERED) {
  //         nextStatus = ENTERING
  //       }
  //     } else {
  //       if (status === ENTERING || status === ENTERED) {
  //         nextStatus = EXITING
  //       }
  //     }
  //   }
  //   return { nextStatus }
  // }
  ;

  var _proto = Transition.prototype;

  _proto.componentDidMount = function componentDidMount() {
    this.updateStatus(true, this.appearStatus);
  };

  _proto.componentDidUpdate = function componentDidUpdate(prevProps) {
    var nextStatus = null;

    if (prevProps !== this.props) {
      var status = this.state.status;

      if (this.props.in) {
        if (status !== ENTERING && status !== ENTERED) {
          nextStatus = ENTERING;
        }
      } else {
        if (status === ENTERING || status === ENTERED) {
          nextStatus = EXITING;
        }
      }
    }

    this.updateStatus(false, nextStatus);
  };

  _proto.componentWillUnmount = function componentWillUnmount() {
    this.cancelNextCallback();
  };

  _proto.getTimeouts = function getTimeouts() {
    var timeout = this.props.timeout;
    var exit, enter, appear;
    exit = enter = appear = timeout;

    if (timeout != null && typeof timeout !== 'number') {
      exit = timeout.exit;
      enter = timeout.enter; // TODO: remove fallback for next major

      appear = timeout.appear !== undefined ? timeout.appear : enter;
    }

    return {
      exit: exit,
      enter: enter,
      appear: appear
    };
  };

  _proto.updateStatus = function updateStatus(mounting, nextStatus) {
    if (mounting === void 0) {
      mounting = false;
    }

    if (nextStatus !== null) {
      // nextStatus will always be ENTERING or EXITING.
      this.cancelNextCallback();

      if (nextStatus === ENTERING) {
        this.performEnter(mounting);
      } else {
        this.performExit();
      }
    } else if (this.props.unmountOnExit && this.state.status === EXITED) {
      this.setState({
        status: UNMOUNTED
      });
    }
  };

  _proto.performEnter = function performEnter(mounting) {
    var _this2 = this;

    var enter = this.props.enter;
    var appearing = this.context ? this.context.isMounting : mounting;

    var _ref2 = this.props.nodeRef ? [appearing] : [external_react_dom_default.a.findDOMNode(this), appearing],
        maybeNode = _ref2[0],
        maybeAppearing = _ref2[1];

    var timeouts = this.getTimeouts();
    var enterTimeout = appearing ? timeouts.appear : timeouts.enter; // no enter animation skip right to ENTERED
    // if we are mounting and running this it means appear _must_ be set

    if (!mounting && !enter || esm_config.disabled) {
      this.safeSetState({
        status: ENTERED
      }, function () {
        _this2.props.onEntered(maybeNode);
      });
      return;
    }

    this.props.onEnter(maybeNode, maybeAppearing);
    this.safeSetState({
      status: ENTERING
    }, function () {
      _this2.props.onEntering(maybeNode, maybeAppearing);

      _this2.onTransitionEnd(enterTimeout, function () {
        _this2.safeSetState({
          status: ENTERED
        }, function () {
          _this2.props.onEntered(maybeNode, maybeAppearing);
        });
      });
    });
  };

  _proto.performExit = function performExit() {
    var _this3 = this;

    var exit = this.props.exit;
    var timeouts = this.getTimeouts();
    var maybeNode = this.props.nodeRef ? undefined : external_react_dom_default.a.findDOMNode(this); // no exit animation skip right to EXITED

    if (!exit || esm_config.disabled) {
      this.safeSetState({
        status: EXITED
      }, function () {
        _this3.props.onExited(maybeNode);
      });
      return;
    }

    this.props.onExit(maybeNode);
    this.safeSetState({
      status: EXITING
    }, function () {
      _this3.props.onExiting(maybeNode);

      _this3.onTransitionEnd(timeouts.exit, function () {
        _this3.safeSetState({
          status: EXITED
        }, function () {
          _this3.props.onExited(maybeNode);
        });
      });
    });
  };

  _proto.cancelNextCallback = function cancelNextCallback() {
    if (this.nextCallback !== null) {
      this.nextCallback.cancel();
      this.nextCallback = null;
    }
  };

  _proto.safeSetState = function safeSetState(nextState, callback) {
    // This shouldn't be necessary, but there are weird race conditions with
    // setState callbacks and unmounting in testing, so always make sure that
    // we can cancel any pending setState callbacks after we unmount.
    callback = this.setNextCallback(callback);
    this.setState(nextState, callback);
  };

  _proto.setNextCallback = function setNextCallback(callback) {
    var _this4 = this;

    var active = true;

    this.nextCallback = function (event) {
      if (active) {
        active = false;
        _this4.nextCallback = null;
        callback(event);
      }
    };

    this.nextCallback.cancel = function () {
      active = false;
    };

    return this.nextCallback;
  };

  _proto.onTransitionEnd = function onTransitionEnd(timeout, handler) {
    this.setNextCallback(handler);
    var node = this.props.nodeRef ? this.props.nodeRef.current : external_react_dom_default.a.findDOMNode(this);
    var doesNotHaveTimeoutOrListener = timeout == null && !this.props.addEndListener;

    if (!node || doesNotHaveTimeoutOrListener) {
      setTimeout(this.nextCallback, 0);
      return;
    }

    if (this.props.addEndListener) {
      var _ref3 = this.props.nodeRef ? [this.nextCallback] : [node, this.nextCallback],
          maybeNode = _ref3[0],
          maybeNextCallback = _ref3[1];

      this.props.addEndListener(maybeNode, maybeNextCallback);
    }

    if (timeout != null) {
      setTimeout(this.nextCallback, timeout);
    }
  };

  _proto.render = function render() {
    var status = this.state.status;

    if (status === UNMOUNTED) {
      return null;
    }

    var _this$props = this.props,
        children = _this$props.children,
        _in = _this$props.in,
        _mountOnEnter = _this$props.mountOnEnter,
        _unmountOnExit = _this$props.unmountOnExit,
        _appear = _this$props.appear,
        _enter = _this$props.enter,
        _exit = _this$props.exit,
        _timeout = _this$props.timeout,
        _addEndListener = _this$props.addEndListener,
        _onEnter = _this$props.onEnter,
        _onEntering = _this$props.onEntering,
        _onEntered = _this$props.onEntered,
        _onExit = _this$props.onExit,
        _onExiting = _this$props.onExiting,
        _onExited = _this$props.onExited,
        _nodeRef = _this$props.nodeRef,
        childProps = _objectWithoutPropertiesLoose(_this$props, ["children", "in", "mountOnEnter", "unmountOnExit", "appear", "enter", "exit", "timeout", "addEndListener", "onEnter", "onEntering", "onEntered", "onExit", "onExiting", "onExited", "nodeRef"]);

    return (
      /*#__PURE__*/
      // allows for nested Transitions
      external_react_default.a.createElement(TransitionGroupContext.Provider, {
        value: null
      }, typeof children === 'function' ? children(status, childProps) : external_react_default.a.cloneElement(external_react_default.a.Children.only(children), childProps))
    );
  };

  return Transition;
}(external_react_default.a.Component);

Transition_Transition.contextType = TransitionGroupContext;
Transition_Transition.propTypes =  false ? undefined : {}; // Name the function so it is clearer in the documentation

function noop() {}

Transition_Transition.defaultProps = {
  in: false,
  mountOnEnter: false,
  unmountOnExit: false,
  appear: false,
  enter: true,
  exit: true,
  onEnter: noop,
  onEntering: noop,
  onEntered: noop,
  onExit: noop,
  onExiting: noop,
  onExited: noop
};
Transition_Transition.UNMOUNTED = UNMOUNTED;
Transition_Transition.EXITED = EXITED;
Transition_Transition.ENTERING = ENTERING;
Transition_Transition.ENTERED = ENTERED;
Transition_Transition.EXITING = EXITING;
/* harmony default export */ var esm_Transition = (Transition_Transition);
// CONCATENATED MODULE: ./node_modules/react-transition-group/esm/CSSTransition.js










var _addClass = function addClass(node, classes) {
  return node && classes && classes.split(' ').forEach(function (c) {
    return addClass_addClass(node, c);
  });
};

var CSSTransition_removeClass = function removeClass(node, classes) {
  return node && classes && classes.split(' ').forEach(function (c) {
    return removeClass_removeClass(node, c);
  });
};
/**
 * A transition component inspired by the excellent
 * [ng-animate](https://docs.angularjs.org/api/ngAnimate) library, you should
 * use it if you're using CSS transitions or animations. It's built upon the
 * [`Transition`](https://reactcommunity.org/react-transition-group/transition)
 * component, so it inherits all of its props.
 *
 * `CSSTransition` applies a pair of class names during the `appear`, `enter`,
 * and `exit` states of the transition. The first class is applied and then a
 * second `*-active` class in order to activate the CSS transition. After the
 * transition, matching `*-done` class names are applied to persist the
 * transition state.
 *
 * ```jsx
 * function App() {
 *   const [inProp, setInProp] = useState(false);
 *   return (
 *     <div>
 *       <CSSTransition in={inProp} timeout={200} classNames="my-node">
 *         <div>
 *           {"I'll receive my-node-* classes"}
 *         </div>
 *       </CSSTransition>
 *       <button type="button" onClick={() => setInProp(true)}>
 *         Click to Enter
 *       </button>
 *     </div>
 *   );
 * }
 * ```
 *
 * When the `in` prop is set to `true`, the child component will first receive
 * the class `example-enter`, then the `example-enter-active` will be added in
 * the next tick. `CSSTransition` [forces a
 * reflow](https://github.com/reactjs/react-transition-group/blob/5007303e729a74be66a21c3e2205e4916821524b/src/CSSTransition.js#L208-L215)
 * between before adding the `example-enter-active`. This is an important trick
 * because it allows us to transition between `example-enter` and
 * `example-enter-active` even though they were added immediately one after
 * another. Most notably, this is what makes it possible for us to animate
 * _appearance_.
 *
 * ```css
 * .my-node-enter {
 *   opacity: 0;
 * }
 * .my-node-enter-active {
 *   opacity: 1;
 *   transition: opacity 200ms;
 * }
 * .my-node-exit {
 *   opacity: 1;
 * }
 * .my-node-exit-active {
 *   opacity: 0;
 *   transition: opacity 200ms;
 * }
 * ```
 *
 * `*-active` classes represent which styles you want to animate **to**, so it's
 * important to add `transition` declaration only to them, otherwise transitions
 * might not behave as intended! This might not be obvious when the transitions
 * are symmetrical, i.e. when `*-enter-active` is the same as `*-exit`, like in
 * the example above (minus `transition`), but it becomes apparent in more
 * complex transitions.
 *
 * **Note**: If you're using the
 * [`appear`](http://reactcommunity.org/react-transition-group/transition#Transition-prop-appear)
 * prop, make sure to define styles for `.appear-*` classes as well.
 */


var CSSTransition_CSSTransition = /*#__PURE__*/function (_React$Component) {
  _inheritsLoose(CSSTransition, _React$Component);

  function CSSTransition() {
    var _this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _React$Component.call.apply(_React$Component, [this].concat(args)) || this;
    _this.appliedClasses = {
      appear: {},
      enter: {},
      exit: {}
    };

    _this.onEnter = function (maybeNode, maybeAppearing) {
      var _this$resolveArgument = _this.resolveArguments(maybeNode, maybeAppearing),
          node = _this$resolveArgument[0],
          appearing = _this$resolveArgument[1];

      _this.removeClasses(node, 'exit');

      _this.addClass(node, appearing ? 'appear' : 'enter', 'base');

      if (_this.props.onEnter) {
        _this.props.onEnter(maybeNode, maybeAppearing);
      }
    };

    _this.onEntering = function (maybeNode, maybeAppearing) {
      var _this$resolveArgument2 = _this.resolveArguments(maybeNode, maybeAppearing),
          node = _this$resolveArgument2[0],
          appearing = _this$resolveArgument2[1];

      var type = appearing ? 'appear' : 'enter';

      _this.addClass(node, type, 'active');

      if (_this.props.onEntering) {
        _this.props.onEntering(maybeNode, maybeAppearing);
      }
    };

    _this.onEntered = function (maybeNode, maybeAppearing) {
      var _this$resolveArgument3 = _this.resolveArguments(maybeNode, maybeAppearing),
          node = _this$resolveArgument3[0],
          appearing = _this$resolveArgument3[1];

      var type = appearing ? 'appear' : 'enter';

      _this.removeClasses(node, type);

      _this.addClass(node, type, 'done');

      if (_this.props.onEntered) {
        _this.props.onEntered(maybeNode, maybeAppearing);
      }
    };

    _this.onExit = function (maybeNode) {
      var _this$resolveArgument4 = _this.resolveArguments(maybeNode),
          node = _this$resolveArgument4[0];

      _this.removeClasses(node, 'appear');

      _this.removeClasses(node, 'enter');

      _this.addClass(node, 'exit', 'base');

      if (_this.props.onExit) {
        _this.props.onExit(maybeNode);
      }
    };

    _this.onExiting = function (maybeNode) {
      var _this$resolveArgument5 = _this.resolveArguments(maybeNode),
          node = _this$resolveArgument5[0];

      _this.addClass(node, 'exit', 'active');

      if (_this.props.onExiting) {
        _this.props.onExiting(maybeNode);
      }
    };

    _this.onExited = function (maybeNode) {
      var _this$resolveArgument6 = _this.resolveArguments(maybeNode),
          node = _this$resolveArgument6[0];

      _this.removeClasses(node, 'exit');

      _this.addClass(node, 'exit', 'done');

      if (_this.props.onExited) {
        _this.props.onExited(maybeNode);
      }
    };

    _this.resolveArguments = function (maybeNode, maybeAppearing) {
      return _this.props.nodeRef ? [_this.props.nodeRef.current, maybeNode] // here `maybeNode` is actually `appearing`
      : [maybeNode, maybeAppearing];
    };

    _this.getClassNames = function (type) {
      var classNames = _this.props.classNames;
      var isStringClassNames = typeof classNames === 'string';
      var prefix = isStringClassNames && classNames ? classNames + "-" : '';
      var baseClassName = isStringClassNames ? "" + prefix + type : classNames[type];
      var activeClassName = isStringClassNames ? baseClassName + "-active" : classNames[type + "Active"];
      var doneClassName = isStringClassNames ? baseClassName + "-done" : classNames[type + "Done"];
      return {
        baseClassName: baseClassName,
        activeClassName: activeClassName,
        doneClassName: doneClassName
      };
    };

    return _this;
  }

  var _proto = CSSTransition.prototype;

  _proto.addClass = function addClass(node, type, phase) {
    var className = this.getClassNames(type)[phase + "ClassName"];

    var _this$getClassNames = this.getClassNames('enter'),
        doneClassName = _this$getClassNames.doneClassName;

    if (type === 'appear' && phase === 'done' && doneClassName) {
      className += " " + doneClassName;
    } // This is for to force a repaint,
    // which is necessary in order to transition styles when adding a class name.


    if (phase === 'active') {
      /* eslint-disable no-unused-expressions */
      node && node.scrollTop;
    }

    if (className) {
      this.appliedClasses[type][phase] = className;

      _addClass(node, className);
    }
  };

  _proto.removeClasses = function removeClasses(node, type) {
    var _this$appliedClasses$ = this.appliedClasses[type],
        baseClassName = _this$appliedClasses$.base,
        activeClassName = _this$appliedClasses$.active,
        doneClassName = _this$appliedClasses$.done;
    this.appliedClasses[type] = {};

    if (baseClassName) {
      CSSTransition_removeClass(node, baseClassName);
    }

    if (activeClassName) {
      CSSTransition_removeClass(node, activeClassName);
    }

    if (doneClassName) {
      CSSTransition_removeClass(node, doneClassName);
    }
  };

  _proto.render = function render() {
    var _this$props = this.props,
        _ = _this$props.classNames,
        props = _objectWithoutPropertiesLoose(_this$props, ["classNames"]);

    return /*#__PURE__*/external_react_default.a.createElement(esm_Transition, _extends({}, props, {
      onEnter: this.onEnter,
      onEntered: this.onEntered,
      onEntering: this.onEntering,
      onExit: this.onExit,
      onExiting: this.onExiting,
      onExited: this.onExited
    }));
  };

  return CSSTransition;
}(external_react_default.a.Component);

CSSTransition_CSSTransition.defaultProps = {
  classNames: ''
};
CSSTransition_CSSTransition.propTypes =  false ? undefined : {};
/* harmony default export */ var esm_CSSTransition = (CSSTransition_CSSTransition);
// EXTERNAL MODULE: ./src/elements/ModalPortal/ModalPortal-Geometry.pcss
var ModalPortal_Geometry = __webpack_require__(41);

// EXTERNAL MODULE: ./src/elements/ModalPortal/ModalPortal-Themes.pcss
var ModalPortal_Themes = __webpack_require__(42);

// EXTERNAL MODULE: ./src/elements/ModalPortal/ModalPortal-Transitions.pcss
var ModalPortal_Transitions = __webpack_require__(43);

// CONCATENATED MODULE: ./src/elements/ModalPortal/ModalPortal.jsx
 /** @module ModalPortal
                                                                                                                                                                                                                                                                                *  @class ModalPortal
                                                                                                                                                                                                                                                                                *  @since 2020.12.21, 22:58
                                                                                                                                                                                                                                                                                *  @changed 2020.12.29, 19:58
                                                                                                                                                                                                                                                                                *
                                                                                                                                                                                                                                                                                *  External methods (for PopupStack, ModalWindow etc):
                                                                                                                                                                                                                                                                                *
                                                                                                                                                                                                                                                                                *  - activate
                                                                                                                                                                                                                                                                                *  - close
                                                                                                                                                                                                                                                                                *  - deactivate
                                                                                                                                                                                                                                                                                *  - isVisible
                                                                                                                                                                                                                                                                                *  - open
                                                                                                                                                                                                                                                                                *  - toggle
                                                                                                                                                                                                                                                                                *  - updateGeometry
                                                                                                                                                                                                                                                                                */
/* --eslint-disable no-console */

// TODO: Use ModalContext


// import { compose } from 'redux'






// import { withModalsContext } from 'helpers/ModalsContext'

// import InlineIcon from 'elements/InlineIcon'

// import FormButton from 'forms/FormButton'

// import { ActionsContextProvider } from 'helpers/ActionsContext' // TODO?





var cnModalPortal = configure_cn('ModalPortal');

// const doDebug = [>DEBUG<] false && config.build.DEV_DEBUG || // DEBUG!
//   false

//
var mouseDownEvent = 'mousedown';
var mouseUpEvent = 'mouseup';
var mouseLeaveEvent = 'mouseleave';
var globalKeyPressEventName = 'keydown';

var passModalPortalProps = [
'id',
'className',
'closeOnClickOutside',
'closeOnEscPressed',
'handleLoaderCancel',
'useLoader',
'loaderTheme',
'loading',
'onAction',
'onClickOutside',
'onCloseButtonClick',
'onEscPressed',
'onOpen',
'onClose',
'onActivate',
'onDeactivate',
'open',
'theme',
'windowClassName',
'windowWidth',
'wrapperClassName',
'wrapperTheme'];


var selfCloseActionId = '--modal-portal-self-close--';
var externalCloseActionId = '--modal-portal-external-close--';var

ModalPortal_ModalPortal = /*#__PURE__*/function (_React$PureComponent) {inheritsLoose_default()(ModalPortal, _React$PureComponent);

  // Props...




































  // Instance variables...







  // Resulting action

  // Lifecycle...

  // typeId = 'ModalPortal'

  function ModalPortal(props) {var _this;
    _this = _React$PureComponent.call(this, props) || this;
    // const popupsInited = config.modals.isInited
    defineProperty_default()(assertThisInitialized_default()(_this), "isOutsideClickWaiting", false);defineProperty_default()(assertThisInitialized_default()(_this), "globalHandlersRegistered", false);defineProperty_default()(assertThisInitialized_default()(_this), "globalDomNode", document);defineProperty_default()(assertThisInitialized_default()(_this), "wrapperDomNode", null);defineProperty_default()(assertThisInitialized_default()(_this), "windowDomNode", null);defineProperty_default()(assertThisInitialized_default()(_this), "transitionTime", 0);defineProperty_default()(assertThisInitialized_default()(_this), "resolvingResult", null);defineProperty_default()(assertThisInitialized_default()(_this), "getId",






















































    function () {return _this.props.id;});defineProperty_default()(assertThisInitialized_default()(_this), "getType",
    function () {return _this.props.type;});defineProperty_default()(assertThisInitialized_default()(_this), "isVisible",

    function () {return _this.state.open;});defineProperty_default()(assertThisInitialized_default()(_this), "activate",

    function (cb) {var _this$props =
      _this.props,id = _this$props.id,onActivate = _this$props.onActivate;var
      activated = _this.state.activated;
      if (!activated) {
        // this.resolvingResult = null // Activating in `open` method
        // console.log('ModalPortal:activate', id, activated)
        _this.setState({ activated: true }, function () {
          if (typeof cb === 'function') {
            cb();
          }
          if (typeof onActivate === 'function') {
            onActivate({ id: id });
          }
        });
        config_default.a.modals.containerNode.registerModal(assertThisInitialized_default()(_this));
      } else
      if (typeof cb === 'function') {
        cb();
      }
    });defineProperty_default()(assertThisInitialized_default()(_this), "deactivate",

    function () {var _this$props2 =
      _this.props,id = _this$props2.id,onDeactivate = _this$props2.onDeactivate;var
      activated = _this.state.activated;
      if (activated) {
        // console.log('ModalPortal:deactivate', id)
        _this.resolveResult(); // `resolvingResult` must be defined?
        if (typeof onDeactivate === 'function') {
          onDeactivate({ id: id });
        }
        _this.setState({ activated: false });
        config_default.a.modals.containerNode.unregisterModal(assertThisInitialized_default()(_this));
      }
    });defineProperty_default()(assertThisInitialized_default()(_this), "toggle",

    function (open) {// External method for using in `ModalPortalStack`
      // const { id } = this.props
      // console.log('ModalPortal:toggle', this.props.id, open)
      if (open == null) {
        open = !_this.state.open;
      } else
      if (open === _this.state.open) {
        return false;
      }
      if (open) {
        _this.open();
      } else
      {
        _this.close();
      }
    });defineProperty_default()(assertThisInitialized_default()(_this), "close",

    function () {// External method for using in `ModalPortalStack`
      var prevOpen = _this.state.open;
      // console.log('ModalPortal:close', this.props.id, prevOpen)
      if (prevOpen) {
        _this.setState({ open: false }, _this.updateShowWithState);
      }
    });defineProperty_default()(assertThisInitialized_default()(_this), "open",

    function () {// External method for using in `ModalPortalStack`
      var prevOpen = _this.state.open;
      // console.log('ModalPortal:open', this.props.id, prevOpen)
      if (!prevOpen) {
        var open = true;
        _this.resolvingResult = null; // Reset resolving action
        // First activate portal then enter into opening animation
        _this.activate(function () {
          _this.setState({ open: open }, _this.updateShowWithState);
        });
        _this.activate(function () {return _this.setState({ open: open }, _this.updateShowWithState);});
      }
    });defineProperty_default()(assertThisInitialized_default()(_this), "updateGeometry",

    function () {return null;});defineProperty_default()(assertThisInitialized_default()(_this), "updateShowWithState",



























































    function (state) {var _ref =
      state || _this.state,open = _ref.open;var _this$props3 =
      _this.props,id = _this$props3.id,onOpen = _this$props3.onOpen,onClose = _this$props3.onClose,handleOpenState = _this$props3.handleOpenState;
      if (open) {
        _this.registerGlobalHandlers();
        if (typeof onOpen === 'function') {
          onOpen({ id: id });
        }
      } else
      {
        _this.unregisterGlobalHandlers();
        if (typeof onClose === 'function') {
          onClose({ id: id });
        }
        setTimeout(_this.deactivate, _this.transitionTime); // TODO?
      }
      if (typeof handleOpenState === 'function') {
        handleOpenState({ id: id, open: open });
      }
    });defineProperty_default()(assertThisInitialized_default()(_this), "onPopupsInited",

    function () {
      _this.setState({ popupsInited: true });var
      open = _this.props.open;
      if (open) {// Immediately open if passed open status
        // this.activate(() => this.setState({ open: true }))
        _this.activate(function () {return _this.setState({ open: true });}, _this.updateShowWithState);
      }
    });defineProperty_default()(assertThisInitialized_default()(_this), "onAction",
























    function (actionProps) {// Event handler for ActionContext consumed children
      var actionId = actionProps.id;var _this$props4 =
      _this.props,id = _this$props4.id,actionsContextNode = _this$props4.actionsContextNode,autoClose = _this$props4.autoClose,closeOnCancelAction = _this$props4.closeOnCancelAction;
      _this.setResult(actionId);
      // console.log('ModalPortal:ModalPortal:onAction', id, actionId)
      if (autoClose || closeOnCancelAction && actionId === 'cancel') {// Close and call `resolveResult` when window is closed
        _this.close();
      } else
      {// ...Or all `resolveResult` immediatelly
        _this.resolveResult();
      }
      if (actionsContextNode && typeof actionsContextNode.onAction) {// Use chaining ActionsContext?
        actionsContextNode.onAction(extends_default()({}, actionProps, { modalPortalId: id }));
      }
    });defineProperty_default()(assertThisInitialized_default()(_this), "onKeyPress",

    function (event) {var _this$props5 =





      _this.props,id = _this$props5.id,onEscPressed = _this$props5.onEscPressed,closeOnEscPressed = _this$props5.closeOnEscPressed,loading = _this$props5.loading;var
      keyCode = event.keyCode;
      var isEscPressed = keyCode === 27;
      if (isEscPressed && !loading) {
        var isTopmost = config_default.a.modals.containerNode.isModalTopmostVisible(assertThisInitialized_default()(_this));
        // console.log('ModalPortal:onKeyPress', id, isTopmost)
        if (isTopmost) {
          // event.stopPropagation()
          if (closeOnEscPressed) {
            _this.setResult(selfCloseActionId);
            _this.close();
          }
          if (typeof onEscPressed === 'function') {
            var cbProps = { event: event, id: id, keyCode: keyCode };
            onEscPressed(cbProps);
          }
        }
      }
    });defineProperty_default()(assertThisInitialized_default()(_this), "stopOutsideClickWaiting",

    function () /* ev */{// Mouse released on window --> cancel waiting for mouse up on wrapper (don't close modal)
      var _assertThisInitialize = assertThisInitialized_default()(_this),globalDomNode = _assertThisInitialize.globalDomNode,windowDomNode = _assertThisInitialize.windowDomNode;
      if (_this.isOutsideClickWaiting /* && globalDomNode && windowDomNode */) {
          // console.log('ModalPortal:stopOutsideClickWaiting', ev && ev.type, ev && ev.currentTarget)
          globalDomNode && globalDomNode.removeEventListener(mouseUpEvent, _this.onOutsideClickCatched);
          windowDomNode && windowDomNode.removeEventListener(mouseLeaveEvent, _this.stopOutsideClickWaiting);
          _this.isOutsideClickWaiting = false;
        }
    });defineProperty_default()(assertThisInitialized_default()(_this), "startOutsideClickWaiting",
    function () {// Start waiting for mouse up on wrapper (close modal) or window (continue working)
      var loading = _this.props.loading;
      if (!loading) {var _assertThisInitialize2 = assertThisInitialized_default()(_this),
        globalDomNode = _assertThisInitialize2.globalDomNode,windowDomNode = _assertThisInitialize2.windowDomNode;
        // console.log('ModalPortal:startOutsideClickWaiting')
        if (!_this.isOutsideClickWaiting && globalDomNode && windowDomNode) {// Start waiting for
          _this.isOutsideClickWaiting = true;
          globalDomNode.addEventListener(mouseUpEvent, _this.onOutsideClickCatched);
          windowDomNode.addEventListener(mouseLeaveEvent, _this.stopOutsideClickWaiting);
        }
      }
    });defineProperty_default()(assertThisInitialized_default()(_this), "onOutsideClickCatched",
    function () {// Mouse released on wrapper --> close modal
      var _this$props6 = _this.props,id = _this$props6.id,closeOnClickOutside = _this$props6.closeOnClickOutside,onClickOutside = _this$props6.onClickOutside;
      // console.log('ModalPortal:onOutsideClickCatched')
      _this.stopOutsideClickWaiting();
      if (closeOnClickOutside) {
        _this.setResult(selfCloseActionId);
        _this.close();
      }
      if (typeof onClickOutside === 'function') {
        onClickOutside({ id: id });
      }
    });defineProperty_default()(assertThisInitialized_default()(_this), "onCloseButtonClick",

    function () {// Mouse released on wrapper --> close modal
      var _this$props7 = _this.props,id = _this$props7.id,closeWithCloseButton = _this$props7.closeWithCloseButton,onCloseButtonClick = _this$props7.onCloseButtonClick;
      // console.log('ModalPortal:onCloseButtonClick')
      if (closeWithCloseButton) {
        _this.setResult(selfCloseActionId);
        _this.close();
      }
      if (typeof onCloseButtonClick === 'function') {
        onCloseButtonClick({ id: id });
      }
    });defineProperty_default()(assertThisInitialized_default()(_this), "setWindowDomRef",

    function (domNode) {
      _this.windowDomNode = domNode;
    });defineProperty_default()(assertThisInitialized_default()(_this), "setWrapperDomRef",

    function (domNode) {
      _this.wrapperDomNode = domNode;
    });_this.state = { popupsInited: false, activated: false, open: false };config_default.a.modals.initPromise.then(_this.onPopupsInited);_this.transitionTime = config_default.a.css.modalAnimateTime;_this.modalType = props.type;if (typeof props.setPortalNode === 'function') {props.setPortalNode(assertThisInitialized_default()(_this));} /* // UNUSED: Failed `ModalsContext` test implementation
                                                                                                                                                                                                                                                                                                                       * const {
                                                                                                                                                                                                                                                                                                                       *   modalsContainerNode, // ModalsContext Provider
                                                                                                                                                                                                                                                                                                                       * } = props
                                                                                                                                                                                                                                                                                                                       * console.log(modalsContainerNode)
                                                                                                                                                                                                                                                                                                                       * debugger
                                                                                                                                                                                                                                                                                                                       */return _this;}var _proto = ModalPortal.prototype;_proto.componentWillUnmount = function componentWillUnmount() {if (!this.unregisterGlobalHandlers) {var error = new Error('ModalPortal: unregisterGlobalHandlers method is undefined');console.error(error); // eslint-disable-line no-console
      //DEBUG//debugger; // eslint-disable-line no-debugger
      throw error; // ???
    }this.unregisterGlobalHandlers();};_proto.componentDidUpdate = function componentDidUpdate(prevProps, prevState) {var _this2 = this;var props = this.props;var state = this.state; // console.log('ModalPortal:componentDidUpdate', {
    //   'props.open': props.open,
    //   'state.open': state.open,
    // })
    if (props.open !== prevProps.open && props.open !== state.open) {// New open from props
      if (props.open) {this.activate(function () {return _this2.setState({ open: true });});} else {this.setState({ open: false });}} else if (state.open !== prevState.open) {// New open from state
      if (!state.activated) {// Is it real case (changing `open` on inactive modal?
        this.activate();}this.updateShowWithState();}} // External methods...
  ; // External method stub? (For popups only?)
  // Helpers...
  _proto.registerGlobalHandlers = function registerGlobalHandlers() {var globalDomNode = this.globalDomNode,windowDomNode = this.windowDomNode; // const { closeOnClickOutside } = this.props
    if (!this.globalHandlersRegistered) {this.globalHandlersRegistered = true; // Set flag
      // console.log('ModalPortal:registerGlobalHandlers')
      if (!windowDomNode || !globalDomNode) {var error = new Error('ModalPortal: dom nodes is undefined on registerGlobalHandlers');console.error(error); // eslint-disable-line no-console
        //DEBUG//debugger; // eslint-disable-line no-debugger
        throw error; // ???
      } /* // Update geometry (UNUSED)
         * document.addEventListener(globalScrollEventName, this.updateGeometry)
         * window.addEventListener(globalResizeEventName, this.updateGeometry)
         * if (!this.updateGeometryTimer && updateGeometryTimerDelay) {
         *   this.updateGeometryTimer = setInterval(this.updateGeometry, updateGeometryTimerDelay)
         * }
         */document.addEventListener(globalKeyPressEventName, this.onKeyPress);if (windowDomNode && globalDomNode) {globalDomNode.addEventListener(mouseDownEvent, this.startOutsideClickWaiting);windowDomNode.addEventListener(mouseUpEvent, this.stopOutsideClickWaiting);}}};_proto.unregisterGlobalHandlers = function unregisterGlobalHandlers() {var globalDomNode = this.globalDomNode,windowDomNode = this.windowDomNode; // TODO: Check for dom nodes exists during close process
    // const { closeOnClickOutside } = this.props
    if (this.globalHandlersRegistered) {this.globalHandlersRegistered = false; // Reset flag
      // console.log('ModalPortal:unregisterGlobalHandlers')
      // if (!windowDomNode || !globalDomNode) {
      //   const error = new Error('ModalPortal: dom nodes is undefined on unregisterGlobalHandlers')
      //   console.error(error) // eslint-disable-line no-console
      //   [>DEBUG<] debugger // eslint-disable-line no-debugger
      //   throw error // ???
      // }
      /* // Update geometry (UNUSED)
       * document.removeEventListener(globalScrollEventName, this.updateGeometry)
       * window.removeEventListener(globalResizeEventName, this.updateGeometry)
       * if (!this.updateGeometryTimer && updateGeometryTimerDelay) {
       *   this.updateGeometryTimer = setInterval(this.updateGeometry, updateGeometryTimerDelay)
       * }
       */document.removeEventListener(globalKeyPressEventName, this.onKeyPress); // if (windowDomNode && globalDomNode) {
      this.stopOutsideClickWaiting();globalDomNode && globalDomNode.removeEventListener(mouseDownEvent, this.startOutsideClickWaiting);windowDomNode && windowDomNode.removeEventListener(mouseUpEvent, this.stopOutsideClickWaiting); // }
    }};_proto.setResult = function setResult(result) {this.resolvingResult = result;};_proto.resolveResult = function resolveResult() {// Final method on close or on action event with autoClose mode
    var actionId = this.resolvingResult || externalCloseActionId; /* // UNUSED: Throw an error if actionId is undefined
                                                                   * if (!actionId) {
                                                                   *   const error = new Error('ModalPortal: resolving action is undefined')
                                                                   *   console.error(error) // eslint-disable-line no-console
                                                                   *   debugger // eslint-disable-line no-debugger
                                                                   *   throw error // ???
                                                                   * }
                                                                   */var _this$props8 = this.props,id = _this$props8.id,onAction = _this$props8.onAction;if (typeof onAction === 'function') {onAction({ id: actionId, modalId: id });}this.resolvingResult = null; // Reset action back
  } // Handlers...
  ; // Render helpers...
  // Render...
  _proto.renderWindow = function renderWindow() {var _this$props9 = this.props,windowWidth = _this$props9.windowWidth,windowTheme = _this$props9.windowTheme,theme = _this$props9.theme,windowClassName = _this$props9.windowClassName,children = _this$props9.children;var wrapperDomNode = this.wrapperDomNode,windowDomNode = this.windowDomNode; // console.log('ModalPortal:renderWindow', { windowWidth })
    // TODO: Pass windowDomNode to children?
    var childrenProps = { ModalPortal: this, windowDomNode: windowDomNode, wrapperDomNode: wrapperDomNode };var isElement = /*#__PURE__*/external_react_default.a.isValidElement(children);var childrenType = typeof children;var isFunction = childrenType === 'function'; // Extend element or call function with children' props
    var content = isElement ? /*#__PURE__*/external_react_default.a.cloneElement(children, childrenProps) : isFunction ? children(childrenProps) : children;return /*#__PURE__*/external_react_default.a.createElement("div", { className: cnModalPortal('Window', { width: windowWidth, theme: windowTheme || theme }, [windowClassName]), ref: this.setWindowDomRef }, content);};_proto.renderLoader = function renderLoader() {var _this$props10 = this.props,loading = _this$props10.loading,loaderTheme = _this$props10.loaderTheme,handleLoaderCancel = _this$props10.handleLoaderCancel;return /*#__PURE__*/external_react_default.a.createElement(elements_Loader_Loader, { mode: "local", theme: loaderTheme, show: loading, onCancel: handleLoaderCancel });};_proto.renderModalPortal = function renderModalPortal() {var _this$props11 = this.props,type = _this$props11.type,id = _this$props11.id,theme = _this$props11.theme,wrapperTheme = _this$props11.wrapperTheme,className = _this$props11.className,wrapperClassName = _this$props11.wrapperClassName,useLoader = _this$props11.useLoader,loading = _this$props11.loading;if (loading && !useLoader) {var error = new Error('ModalPortal: `useLoader` must be enabled for using `loading` prop');console.error(error); // eslint-disable-line no-console
      //DEBUG//debugger; // eslint-disable-line no-debugger
      throw error; // ???
    }var open = this.state.open;return /*#__PURE__*/external_react_default.a.createElement(esm_CSSTransition, { key: id // id={id}
      , timeout: this.transitionTime, in: open, classNames: cnModalPortal() // Generate animation classes
    }, /*#__PURE__*/external_react_default.a.createElement("div", { className: cnModalPortal({ type: type, id: id }, [className]) // Root node
      , ref: this.setRootDomRef }, /*#__PURE__*/external_react_default.a.createElement("div", { className: cnModalPortal('Wrapper', { theme: wrapperTheme || theme }, [wrapperClassName]), ref: this.setWrapperDomRef }, this.renderWindow(), useLoader && this.renderLoader())));};_proto.

  render = function render() {var _this$state =
    this.state,popupsInited = _this$state.popupsInited,activated = _this$state.activated;
    var toDisplay = popupsInited && activated;
    if (!toDisplay) {
      return null;
    }
    var node = config_default.a.modals.domNode;
    if (!node) {
      var error = new Error('ModalPortal: config.modals.domNode is undefined. Don\'t forget to use WebUiCoreRoot with autoModalsContainer mode or render ModalsContainer manually.');
      console.error(error); // eslint-disable-line no-console
      //DEBUG//debugger; // eslint-disable-line no-debugger
      throw error; // ???
    }
    // console.log('ModalPortal:render', this.props.children)
    return /*#__PURE__*/(
      external_react_default.a.createElement(PortalCompat, { node: node },
      this.renderModalPortal()));


  };return ModalPortal;}(external_react_default.a.PureComponent /** @lends @ModalPortal.prototype */);defineProperty_default()(ModalPortal_ModalPortal, "propTypes", { useLoader: prop_types_default.a.bool, // Use loader (see `loading`)
  loading: prop_types_default.a.bool, // Show Loader flashback
  onAction: prop_types_default.a.func, // Event fired on action invoked (see `actions` prop)
  // registerCallback: PropTypes.func, // ??? registerCallback(handler = this.someMethod) -- handler stored by parent component and called when detected click on pulldown menu -- prevents popup content closing
  // setModalPortalNodeRef: PropTypes.func, // ??? Demo?
  windowWidth: prop_types_default.a.string, // (ModalWindow only?) ModalPortal window width (predefined variants: xs, sm, md, lg, xl, xxl)
  handleLoaderCancel: prop_types_default.a.func, // Loader onCancel event handler
  closeOnClickOutside: prop_types_default.a.bool, // Close (cancel) modal by click outside modal window (on 'curtain')
  closeOnEscPressed: prop_types_default.a.bool, // Close (cancel) modal on esc key pressed
  closeWithCloseButton: prop_types_default.a.bool, // Close (cancel) modal by click on header 'Close' button
  id: prop_types_default.a.string, // ModalPortal id
  onActivate: prop_types_default.a.func, // Event fired on activate (before open)
  onClickOutside: prop_types_default.a.func, // Event fired on click outside modal
  onCloseButtonClick: prop_types_default.a.func, // Event fired on header 'Close' button click
  onDeactivate: prop_types_default.a.func, // Event fired on deactivate (unmounting from dom)
  onEscPressed: prop_types_default.a.func, // Event fired on esc key pressed
  onOpen: prop_types_default.a.func, // Event fired on modal open
  onClose: prop_types_default.a.func, // Event fired on modal close
  handleOpenState: prop_types_default.a.func, // Event fired on modal open state change (update external open/close state) ({ open, id } => void)
  open: prop_types_default.a.bool, // Show modal by default
  className: prop_types_default.a.string, // ModalPortal class name
  windowClassName: prop_types_default.a.string, // ModalPortal window class name
  wrapperClassName: prop_types_default.a.string, // ModalPortal wrapper class name
  theme: prop_types_default.a.string, // ModalPortal theme (default theme for all other themed elements, see `*Theme`)
  windowTheme: prop_types_default.a.string, // Window theme (using `theme` if not specified)
  wrapperTheme: prop_types_default.a.string, // Wrapper (back-curtain) theme (using `theme` if not specified)
  loaderTheme: prop_types_default.a.string, // Loader theme ('MediumDark' is default)
  setPortalNode: prop_types_default.a.func // Get reference to `ModalPortal` instance node
});defineProperty_default()(ModalPortal_ModalPortal, "defaultProps", { loaderTheme: 'MediumDark' });/* harmony default export */ var elements_ModalPortal_ModalPortal = (ModalPortal_ModalPortal); /* // UNUSED: Failed `ModalsContext` test implementation
                                                                                                            * export default compose(
                                                                                                            *   withModalsContext,
                                                                                                            * )(ModalPortal)
                                                                                                            */
// EXTERNAL MODULE: ./src/elements/ModalPopup/ModalPopup.pcss
var ModalPopup_ModalPopup = __webpack_require__(44);

// CONCATENATED MODULE: ./src/elements/ModalPopup/ModalPopup.jsx
 /** @module ModalPopup
                                                                                                                                                                                                                                                                                *  @class ModalPopup
                                                                                                                                                                                                                                                                                *  @since 2020.10.27, 00:39
                                                                                                                                                                                                                                                                                *  @changed 2020.12.18, 02:34
                                                                                                                                                                                                                                                                                *
                                                                                                                                                                                                                                                                                *  TODO 2020.12.18, 01:50 -- ModalPopup: Reset both `storedContentSize` if content changed (use registrable handler)?
                                                                                                                                                                                                                                                                                *  TODO 2020.12.18, 02:15 -- ModalPopup: Use static `ModalPopupStack` component and close same-level (from stack end to first `Modal` or stack begin) popups
                                                                                                                                                                                                                                                                                *  TODO 2020.12.19, 03:35 -- ModalPopup: Use nearest scrollable container ancestor as popup base? Or clip to it bounds? Or hide popup if countrol is (partially) out of this bounds?
                                                                                                                                                                                                                                                                                *
                                                                                                                                                                                                                                                                                *  External methods (for ModalPopupStack):
                                                                                                                                                                                                                                                                                *  - close
                                                                                                                                                                                                                                                                                *  - open
                                                                                                                                                                                                                                                                                *  - updateGeometry
                                                                                                                                                                                                                                                                                */



// import connect from 'react-redux/es/connect/connect'









var cnModalPopup = configure_cn('ModalPopup');
var cnModalPopupControl = configure_cn('ModalPopupControl');

var doDebug = //DEBUG// true && config_default.a.build.DEV_DEBUG || // DEBUG!
false;

// Debounce delay
var debouncedUpdateGeometryTimeout = //DEBUG//doDebug ? 500 :
15;

// Update by timer (0 - disabled), must be above than debounce delay (`debouncedUpdateGeometryTimeout`, above)
var updateGeometryTimerDelay = //DEBUG//doDebug ? 0 :
50; // 0

var domNodeGeometryKeys = [
/* // controlBouningBox sample:
                            * bottom: 642.8125
                            * height: 32
                            * left: 223.921875
                            * right: 551.515625
                            * top: 610.8125
                            * width: 327.59375
                            * x: 223.921875
                            * y: 610.8125
                            */
'left',
'top',
'width',
'height'
/* // Old values (for `node.style` keys)
          * 'offsetLeft',
          * 'offsetTop',
          * 'offsetWidth',
          * 'offsetHeight',
          */];

var verticalGeometryKeys = [
'contentHeight',
'contentTop',
'controlHeight',
'controlTop',
'globalHeight',
'globalTop'
// 'scrollY',
// 'viewHeight',
];
var horizontalGeometryKeys = [
'contentWidth',
'contentLeft',
'controlWidth',
'controlLeft',
'gloablWidth',
'gloablLeft'
// 'scrollX',
// 'viewWidth',
];

/* // UNUSED: globalGeometryKeys
    * const globalGeometryKeys = { // See `getGlobalGeometry`
    *   viewWidth: { obj: window, key: 'innerWidth' },
    *   viewHeight: { obj: window, key: 'innerHeight' },
    *   scrollX: { obj: window, key: 'pageXOffset' },
    *   scrollY: { obj: window, key: 'pageYOffset' },
    * }
    */

var axisKeys = { // Used in `updateOneAxisContentPos`
  // Regexp to convert vertical axis keys to horizontal:
  // '<,'>S/top/left/g | '<,'>S/bottom/right/g | '<,'>S/height/width/g | '<,'>S/vertical/horizontal/g
  vertical: {
    // viewSize: 'viewHeight',
    viewSize: 'globalHeight',
    viewPos: 'globalTop',
    controlPos: 'controlTop',
    controlSize: 'controlHeight',
    contentPos: 'contentTop',
    contentSize: 'contentHeight',
    contentStylePos: 'top',
    contentStyleSize: 'height',
    contentStyleMaxSize: 'maxHeight',
    // contentStyleMaxSize: 'max-height',
    storedContentSize: 'storedContentHeight' // Stored in dom node
  },
  horizontal: {
    // viewSize: 'viewWidth',
    viewSize: 'globalWidth',
    viewPos: 'globalLeft',
    controlPos: 'controlLeft',
    controlSize: 'controlWidth',
    contentPos: 'contentLeft',
    contentSize: 'contentWidth',
    contentStylePos: 'left',
    contentStyleSize: 'width',
    contentStyleMaxSize: 'maxWidth',
    // contentStyleMaxSize: 'max-width',
    storedContentSize: 'storedContentWidth' // Stored in dom node
  } };


// const globalClickEventName = 'mousedown'
// const globalKeyPressEventName = 'keydown'
var globalScrollEventName = 'scroll';
var globalResizeEventName = 'resize';

/* // DEBUG: Demo for prevent closing underlaying popups. (Can be used for modal windows. See crrsp styles & html layout.)
                                       * const debugHide = document.getElementById('DebugHide')
                                       * setTimeout(() => {
                                       *   if (debugHide) {
                                       *     debugHide.style.display = 'block'
                                       *   }
                                       * }, 3000)
                                       * const debugHideListener = (ev) => {
                                       *   // ev.stopImmediatePropagation()
                                       *   ev.stopPropagation()
                                       * }
                                       * debugHide && debugHide.addEventListener('click', debugHideListener)
                                       */var

ModalPopup_ModalPopup_ModalPopup = /*#__PURE__*/function (_React$PureComponent) {inheritsLoose_default()(ModalPopup, _React$PureComponent);



























  // Properties...







  // From ModalPortal:




  // Lifecycle...

  function ModalPopup(props) {var _this;
    _this = _React$PureComponent.call(this, props) || this;defineProperty_default()(assertThisInitialized_default()(_this), "delayedClickTimerHandler", null);defineProperty_default()(assertThisInitialized_default()(_this), "globalHandlersRegistered", false);defineProperty_default()(assertThisInitialized_default()(_this), "controlDomNode", null);defineProperty_default()(assertThisInitialized_default()(_this), "contentDomNode", null);defineProperty_default()(assertThisInitialized_default()(_this), "geometry", {});defineProperty_default()(assertThisInitialized_default()(_this), "windowDomNode", null);defineProperty_default()(assertThisInitialized_default()(_this), "wrapperDomNode", null);defineProperty_default()(assertThisInitialized_default()(_this), "ModalPortal", null);defineProperty_default()(assertThisInitialized_default()(_this), "updateGeometryInstant",











































































































































































































































    function () {// UNUSED? TODO? Update geometry
      var open = _this.state.open;
      if (!open) {// Do nothing if popup is closed
        // console.log('ModalPopup:updateGeometryInstant: SKIPED (closed)')
        return;
      }var
      fullWidth = _this.props.fullWidth;
      // TODO: Call `updateGeometryInstant` on content update? How? Use timer?
      var controlGeometry = _this.getDomNodeGeometry(_this.controlDomNode, 'control');
      var contentGeometry = _this.getDomNodeGeometry(_this.windowDomNode, 'content');
      // const contentGeometry = this.getDomNodeGeometry(this.contentDomNode, 'content')
      // const windowGeometry = this.getDomNodeGeometry(this.windowDomNode, 'window')
      var globalGeometry = _this.getGlobalGeometry();
      var geometry = extends_default()({},
      globalGeometry,
      controlGeometry,
      contentGeometry);


      /* Sample geometry keys:
                         * contentHeight
                         * contentLeft
                         * contentTop
                         * contentWidth
                         * controlHeight
                         * controlLeft
                         * controlTop
                         * controlWidth
                         * scrollX
                         * scrollY
                         * viewHeight
                         * viewWidth
                         */
      var updatedGeometryKeys = _this.getUpdatedGeometryKeys(geometry);
      var changedHorizontalKeys = horizontalGeometryKeys.some(function (key) {return updatedGeometryKeys.includes(key);});
      var changedVerticalKeys = verticalGeometryKeys.some(function (key) {return updatedGeometryKeys.includes(key);});
      /* // DEBUG (use doDebug?)...
                                                                                                                        * console.log('ModalPopup:updateGeometryInstant', {
                                                                                                                        *   globalGeometry,
                                                                                                                        *   controlGeometry,
                                                                                                                        *   contentGeometry,
                                                                                                                        *   updatedGeometryKeys,
                                                                                                                        *   changedHorizontalKeys,
                                                                                                                        *   changedVerticalKeys,
                                                                                                                        *   // geometry,
                                                                                                                        *   // 'this.geometry': this.geometry,
                                                                                                                        *   'changed geometry': Object.entries(geometry).reduce((result, [key, val]) => {
                                                                                                                        *     return updatedGeometryKeys.includes(key) ? { ...result, [key]: val } : result
                                                                                                                        *   }, {}),
                                                                                                                        *   'changed this.geometry': Object.entries(this.geometry).reduce((result, [key, val]) => {
                                                                                                                        *     return updatedGeometryKeys.includes(key) ? { ...result, [key]: val } : result
                                                                                                                        *   }, {}),
                                                                                                                        * })
                                                                                                                        */
      if (!updatedGeometryKeys.length) {// Do nothing if no changes detected
        return;
      }
      if (changedVerticalKeys) {
        _this.updateOneAxisContentPos('vertical', geometry, updatedGeometryKeys); // Update vertical position & size...
      }
      if (changedHorizontalKeys) {
        if (fullWidth) {// TODO?
          _this.updateContentWidth(geometry, updatedGeometryKeys);
        }
        _this.updateOneAxisContentPos('horizontal', geometry, updatedGeometryKeys); // Update horizontal position & size...
      }
      _this.geometry = geometry;
    });defineProperty_default()(assertThisInitialized_default()(_this), "open",














































    function () {return _this.ModalPortal && _this.ModalPortal.open();});defineProperty_default()(assertThisInitialized_default()(_this), "close",
    function () {return _this.ModalPortal && _this.ModalPortal.close();});defineProperty_default()(assertThisInitialized_default()(_this), "toggle",
    function (open) {return _this.ModalPortal && _this.ModalPortal.toggle(open);});defineProperty_default()(assertThisInitialized_default()(_this), "isVisible",
    function () {return _this.ModalPortal && _this.ModalPortal.isVisible();});defineProperty_default()(assertThisInitialized_default()(_this), "onActivate",



    function () {
      // console.log('ModalPopup:onActivate')
      setTimeout(_this.updateGeometryInstant, 0);
    });defineProperty_default()(assertThisInitialized_default()(_this), "onDeactivate",
    function () {
      // console.log('ModalPopup:onDeactivate')
      _this.clearContentGeometry(); // Due to content is destroyed when hidden
    });defineProperty_default()(assertThisInitialized_default()(_this), "handleOpenState",

    function (_ref) {var open = _ref.open;
      // console.log('ModalPopup:handleOpenState', open)
      _this.setState({ open: open }, _this.updateOpenOrCloseWithState); // Update own open state
      var _this$props = _this.props,id = _this$props.id,handleOpenState = _this$props.handleOpenState;
      if (typeof handleOpenState === 'function') {
        handleOpenState({ id: id, open: open });
      }
    });defineProperty_default()(assertThisInitialized_default()(_this), "setControlRef",

    function (domNode) {
      _this.controlDomNode = domNode;
    });defineProperty_default()(assertThisInitialized_default()(_this), "setContentRef",

    function (domNode) {
      _this.contentDomNode = domNode;
    });defineProperty_default()(assertThisInitialized_default()(_this), "handlePortalOpen",









    function () {
      // TODO: Register/unregister popup in `ModalPopupStack`
      // this.updateGeometry()
      _this.registerGlobalHandlers();
    });defineProperty_default()(assertThisInitialized_default()(_this), "handlePortalClose",

    function () {
      // TODO: Register/unregister popup in `ModalPopupStack`
      _this.unregisterGlobalHandlers();
      // this.clearContentGeometry() // Due to content is destroyed when hidden
    });defineProperty_default()(assertThisInitialized_default()(_this), "updateOpenOrCloseWithState",

    function () {
      if (_this.state.open) {
        _this.handlePortalOpen();
      } else
      {
        _this.handlePortalClose();
      }
    });defineProperty_default()(assertThisInitialized_default()(_this), "onControlClick",

    function () /* event */{var
      id = _this.props.id;var
      open = _this.state.open;
      var nextOpen = !open;
      // console.log('ModalPopup:onControlClick', id, nextOpen, open)
      _this.setState({ open: nextOpen }, _this.updateOpenOrCloseWithState); // Update own open state
      // TODO: Notify `ModalModalsContainer` when popup opens for closing all other popups from same level (before first modal in popups stack). (Now user can open several popups at the same time.
      var onControlClick = _this.props.onControlClick;
      if (typeof onControlClick === 'function') {
        onControlClick({ id: id, open: nextOpen });
      }
    });defineProperty_default()(assertThisInitialized_default()(_this), "renderPortalContent",






























    function (portalProps) {var
      ModalPortal = portalProps.ModalPortal,windowDomNode = portalProps.windowDomNode,wrapperDomNode = portalProps.wrapperDomNode;
      if (ModalPortal) {// Save wrapping ModalPortal instance refernce
        // console.log('ModalPopup:renderPortalContent: updated ModalPortal')
        _this.ModalPortal = ModalPortal; // Save ModalPortal handler (TODO)
        _this.windowDomNode = windowDomNode;
        _this.wrapperDomNode = wrapperDomNode;
      }var _this$props2 =




      _this.props,id = _this$props2.id,popupContent = _this$props2.popupContent,className = _this$props2.contentClassName;
      var renderProps = {
        id: id,
        className: _this.getClassName({ cnCtx: cnModalPopup, className: className }),
        ref: _this.setContentRef // Will be used windowDomNode from ModalPortal
      };
      return /*#__PURE__*/(
        external_react_default.a.createElement("div", renderProps,
        popupContent));


    });_this.state = { open: null // null -- uninitialized
    };_this.updateGeometry = debounce(debouncedUpdateGeometryTimeout, _this.updateGeometryInstant);return _this;}var _proto = ModalPopup.prototype;_proto.componentWillUnmount = function componentWillUnmount() {this.unregisterGlobalHandlers();} // Helpers...
  ;_proto.getDomNodeGeometry = function getDomNodeGeometry(domNode, id) {id = id || 'default';var rect = domNode && domNode.getBoundingClientRect(); /* // controlBouningBox sample:
                                                                                                                                                      * bottom: 642.8125
                                                                                                                                                      * height: 32
                                                                                                                                                      * left: 223.921875
                                                                                                                                                      * right: 551.515625
                                                                                                                                                      * top: 610.8125
                                                                                                                                                      * width: 327.59375
                                                                                                                                                      * x: 223.921875
                                                                                                                                                      * y: 610.8125
                                                                                                                                                      */var geometry = rect && domNodeGeometryKeys.reduce(function (geometry, key) {// const val = domNode && domNode[key]
      var val = rect && rect[key];if (val != null) {var resultKey = id + strings_namespaceObject.ucFirst(key);geometry[resultKey] = val;}return geometry;}, {}); // if (this.props.id === 'withMenu' && id === 'control') {
    //   console.log(domNode, rect, domNodeGeometryKeys, geometry)
    //   debugger
    // }
    return geometry || {};};_proto.getGlobalGeometry = function getGlobalGeometry() {var domNode = config_default.a.modals.domNode; // containerNode
    var globalGeometry = this.getDomNodeGeometry(domNode, 'global');return globalGeometry; // TODO!
    // const rect = domNode && domNode.getBoundingClientRect && domNode.getBoundingClientRect()
    /* // UNUSED: globalGeometryKeys
     * const geometry = Object.entries(globalGeometryKeys).reduce((geometry, [id, descr]) => {
     *   const obj = descr.obj
     *   const key = descr.key || id
     *   const val = obj[key]
     *   return { ...geometry, [id]: val }
     * }, {})
     */ /*
         * rect:
         *
         * - bottom: 467
         * - height: 367
         * - left: 0
         * - right: 434
         * - top: 100
         * - width: 434
         * - x: 0
         * - y: 100
         *
         * geometry:
         *
         * - scrollX: 0
         * - scrollY: 0
         * - viewHeight: 667
         * - viewWidth: 434
         *
         * globalGeometry:
         *
         * - globalHeight: 367
         * - globalLeft: 0
         * - globalTop: 100
         * - globalWidth: 434
         *
         */ // console.log('ModalPopup:getGlobalGeometry', { domNode, rect, geometry, globalGeometry })
  };_proto.getUpdatedGeometryKeys = function getUpdatedGeometryKeys(geometry) {var origGeometry = this.geometry;var updatedKeys = [];Object.entries(geometry).forEach(function (_ref2) {var key = _ref2[0],val = _ref2[1];if (val !== origGeometry[key]) {updatedKeys.push(key);}});return updatedKeys;};_proto.updateContentWidth = function updateContentWidth(geometry, updatedGeometryKeys) {// eslint-disable-line no-unused-vars
    // if (updatedGeometryKeys.includes('controlWidth') || updatedGeometryKeys.includes('contentWidth')) {
    var width = geometry.controlWidth;var domNode = this.windowDomNode; // contentDomNode
    if (!domNode) {// Error?
      var error = new Error('ModalPopup:updateContentWidth: target dom node is undefined');console.error(error); // eslint-disable-line no-console
      debugger; // eslint-disable-line no-debugger
      // throw error
      return;}var setWidth = width + 'px'; /* // DEBUG
                                            * console.log('ModalPopup:updateContentWidth', {
                                            *   width,
                                            *   'geometry.contentWidth': geometry.contentWidth,
                                            *   // geometry,
                                            *   updatedGeometryKeys,
                                            * })
                                            * debugger
                                            */if (domNode && domNode.style.width !== setWidth) {geometry.contentWidth = width;domNode.storedContentWidth = null; // Reset stored width
      domNode.style.width = setWidth;} // }
  } /** updateOneAxisContentPos -- Calculate content position/size for one axis (horizontal, vertical)
     * @param {String('horizontal'|'vertical')} axis
     * @param {Object} geometry
     * @param {String[]} updatedGeometryKeys
     */;_proto.updateOneAxisContentPos = function updateOneAxisContentPos(axis, geometry, updatedGeometryKeys) {// eslint-disable-line no-unused-vars
    var domNode = this.windowDomNode; // contentDomNode
    if (!domNode) {// Error?
      var error = new Error('ModalPopup:updateOneAxisContentPos: target dom node is undefined');console.error(error); // eslint-disable-line no-console
      debugger; // eslint-disable-line no-debugger
      // throw error
      return;}var popupContentGap = config_default.a.css.popupContentGap; // const doubleContentModalPopupGap = popupContentGap * 2 // UNUSED
    var keys = axisKeys[axis];var isVertical = axis === 'vertical'; // Get coordinates...
    var viewSize = geometry[keys.viewSize]; // globalHeight
    var viewPos = geometry[keys.viewPos]; // globalTop
    var controlPos = geometry[keys.controlPos]; // controlTop
    var controlSize = geometry[keys.controlSize]; // controlHeight
    var contentPos = geometry[keys.contentPos]; // contentTop
    var contentSize = geometry[keys.contentSize]; // contentClientHeight
    var storedContentSize = domNode[keys.storedContentSize];var contentMaxSize = storedContentSize || contentSize;if (!storedContentSize || contentSize > storedContentSize) {// Save (maximum) height
      domNode[keys.storedContentSize] = contentSize;} // const viewStart = popupContentGap
    var viewStart = /* viewPos + */popupContentGap;var viewEnd = viewStart + viewSize - popupContentGap; // Calculate control coordinates...
    var controlScreenPos = controlPos;var controlScreenEnd = controlScreenPos + controlSize;var posNormal = isVertical ? controlScreenEnd + popupContentGap : controlScreenPos;var posReverted = isVertical ? controlScreenPos - popupContentGap : controlScreenEnd;var spaceAfter = viewEnd - posNormal;var spaceBefore = posReverted - viewStart; // Is it better to show content above control?
    // TODO: Alternative calculations for horizontal axis
    // const spaceBefore = isVertical ? controlScreenPos : controlScreenEnd
    // // const spaceEnd = isVertical ? controlScreenAfter : controlScreenPos
    // const spaceAfter = isVertical ? controlScreenAfter : controlScreenPos
    var isntFitBefore = contentMaxSize > spaceBefore;var isntFitAfter = contentMaxSize > spaceAfter;var isMoreSpaceBefore = spaceBefore > spaceAfter;var placeBefore = isMoreSpaceBefore && isntFitAfter;var isntFit = placeBefore ? isntFitBefore : isntFitAfter;var fitSize = placeBefore ? spaceBefore : spaceAfter; // - doubleContentModalPopupGap
    // Calculate `contentPos`...
    var contentPosValue;if (placeBefore) {// Down-up position: from control top -> up
      var fitContentSize = isntFit ? fitSize : contentMaxSize;contentPosValue = posReverted - fitContentSize; // contentPosValue = (controlScreenPos - fitContentSize - popupContentGap)
    } else {// Normal position: from control bottom -> down
      contentPosValue = posNormal; // contentPosValue = (controlScreenEnd + popupContentGap)
    }contentPosValue -= viewPos; // Relative to global view
    var cssContentPos = contentPosValue + 'px';var isContentPosChanged = contentPosValue !== contentPos; // Is position changed?
    // Calculate `contentStyleMaxSize`...
    var cssContentStyleMaxSize = isntFit ? fitSize + 'px' : ''; // New value: pixels or auto (empty)
    var origContentStyleMaxSize = domNode.style[keys.contentStyleMaxSize]; // Old value
    var isContentStyleMaxSizeChanged = cssContentStyleMaxSize !== origContentStyleMaxSize; // Is maxsize changed?
    if (isContentPosChanged || isContentStyleMaxSizeChanged) {// Pos or size changed
      domNode.style[keys.contentStylePos] = cssContentPos; // Update dom node css style
      geometry[keys.contentPos] = contentPosValue; // Update geometry object
      domNode.style[keys.contentStyleMaxSize] = cssContentStyleMaxSize; // Update dom node css style
    } /* // DEBUG (use doDebug?)...
       * console.log('ModalPopup:updateOneAxisContentPos', {
       *   // Parameters...
       *   axis,
       *   placeBefore,
       *   isntFit,
       *   // Coordinates...
       *   fitSize,
       *   contentPos,
       *   cssContentPos,
       *   cssContentStyleMaxSize,
       *   // controlScreenPos,
       *   // controlScreenEnd,
       *   // controlScreenAfter,
       *   // General...
       *   updatedGeometryKeys,
       *   geometry: geometry,
       *   'this.geometry': this.geometry,
       *   'changed geometry': Object.entries(geometry).reduce((result, [key, val]) => {
       *     return updatedGeometryKeys.includes(key) ? { ...result, [key]: val } : result
       *   }, {}),
       *   'changed this.geometry': Object.entries(this.geometry).reduce((result, [key, val]) => {
       *     return updatedGeometryKeys.includes(key) ? { ...result, [key]: val } : result
       *   }, {}),
       * })
       */};_proto.registerGlobalHandlers = function registerGlobalHandlers() {if (!this.globalHandlersRegistered) {this.globalHandlersRegistered = true;document.addEventListener(globalScrollEventName, this.updateGeometry);window.addEventListener(globalResizeEventName, this.updateGeometry);if (!this.updateGeometryTimer && updateGeometryTimerDelay) {this.updateGeometryTimer = setInterval(this.updateGeometry, updateGeometryTimerDelay);}}};_proto.unregisterGlobalHandlers = function unregisterGlobalHandlers() {if (this.globalHandlersRegistered) {this.globalHandlersRegistered = false;document.removeEventListener(globalScrollEventName, this.updateGeometry);window.removeEventListener(globalResizeEventName, this.updateGeometry);if (this.updateGeometryTimer) {clearInterval(this.updateGeometryTimer);this.updateGeometryTimer = null;}}} // Render helpers...
  ;_proto.getClassName = function getClassName(params) {var cnCtx = params.cnCtx,className = params.className;var _this$props3 = this.props,id = _this$props3.id,fullWidth = _this$props3.fullWidth;var open = this.state.open;return cnCtx && cnCtx({ id: id, open: open, fullWidth: fullWidth }, [/* this.props. */className]);} // External methods...
  // Provide ModalPortal public methods...
  ;_proto.clearContentGeometry = function clearContentGeometry() {var _this2 = this; // UNUSED? Must be used on content update (using registrable callback; see example in constructor).
    Object.keys(this.geometry).forEach(function (key) {if (key.startsWith('content')) {_this2.geometry[key] = null;}});}; // Render...
  _proto.renderControl = function renderControl() {var _this$props4 = this.props,id = _this$props4.id,popupControl = _this$props4.popupControl,className = _this$props4.className;var open = this.state.open; // TODO: Cache modified `popupControl` in state?
    var content = /*#__PURE__*/external_react_default.a.cloneElement(popupControl, { onClick: this.onControlClick, checked: open, setDomRef: this.setControlRef });var renderProps = { id: id, className: this.getClassName({ cnCtx: cnModalPopupControl, className: className }), ref: this.setControlRef };return /*#__PURE__*/external_react_default.a.createElement("div", renderProps, content);};_proto.renderContent = function renderContent() {var _this3 = this;var portalProps = passModalPortalProps.reduce(function (data, id) {var _extends2;return extends_default()({}, data, (_extends2 = {}, _extends2[id] = _this3.props[id], _extends2));}, {});if (this.state.open != null) {portalProps.open = this.state.open;}Object.assign(portalProps, { handleOpenState: this.handleOpenState, onActivate: this.onActivate, onDeactivate: this.onDeactivate, wrapperTheme: 'SubtleDark' });return /*#__PURE__*/external_react_default.a.createElement(elements_ModalPortal_ModalPortal, extends_default()({}, portalProps, { type: "Popup" }), this.renderPortalContent);};_proto.render = function render() {return /*#__PURE__*/external_react_default.a.createElement(external_react_default.a.Fragment, null, this.renderControl(), this.renderContent());};return ModalPopup;}(external_react_default.a.PureComponent /** @lends @ModalPopup.prototype */);defineProperty_default()(ModalPopup_ModalPopup_ModalPopup, "propTypes", { // onEscPressed: PropTypes.func,
  // onKeyPress: PropTypes.func,
  // registerCallback: PropTypes.func, // registerCallback(handler = this.someMethod) -- handler stored by parent component and called when detected click on pulldown menu -- prevents popup content closing
  className: prop_types_default.a.string, closeOnClickOutside: prop_types_default.a.bool, closeOnEscPressed: prop_types_default.a.bool, id: prop_types_default.a.string, onControlClick: prop_types_default.a.func, open: prop_types_default.a.bool, popupContent: prop_types_default.a.oneOfType([prop_types_default.a.func, prop_types_default.a.object]).isRequired, popupControl: prop_types_default.a.oneOfType([prop_types_default.a.func, prop_types_default.a.object]).isRequired, setModalPopupNodeRef: prop_types_default.a.func });defineProperty_default()(ModalPopup_ModalPopup_ModalPopup, "defaultProps", { // onEscPressed: null,
  // onKeyPress: null,
  // popupContent: null,
  // popupControl: null,
  // registerCallback: null,
  closeOnClickOutside: true, closeOnEscPressed: true, open: false });/* harmony default export */ var elements_ModalPopup_ModalPopup = (ModalPopup_ModalPopup_ModalPopup);var FormItemModalPopup = forms_FormItemHOC_FormItemHOC(ModalPopup_ModalPopup_ModalPopup);
// EXTERNAL MODULE: ./src/elements/MenuItem/MenuItem.pcss
var MenuItem_MenuItem = __webpack_require__(45);

// CONCATENATED MODULE: ./src/elements/MenuItem/MenuItem.jsx
 /** @module MenuItem
                                                                                                                                                                                                                          *  @class MenuItem
                                                                                                                                                                                                                          *  @since 2020.10.27, 03:05
                                                                                                                                                                                                                          *  @changed 2020.10.27, 03:06
                                                                                                                                                                                                                          */


// import PropTypes from 'prop-types'
// import connect from 'react-redux/es/connect/connect'








var cnMenuItem = configure_cn('MenuItem');var

MenuItem_MenuItem_MenuItem = /*#__PURE__*/function (_React$PureComponent) {inheritsLoose_default()(MenuItem, _React$PureComponent);function MenuItem() {var _this;for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {args[_key] = arguments[_key];}_this = _React$PureComponent.call.apply(_React$PureComponent, [this].concat(args)) || this;defineProperty_default()(assertThisInitialized_default()(_this), "onClick",



    function () {var _this$props =
      _this.props,id = _this$props.id,val = _this$props.val,onClick = _this$props.onClick;
      if (typeof onClick === 'function') {
        onClick({ id: id, val: val, component: assertThisInitialized_default()(_this) });
      }
    });return _this;}var _proto = MenuItem.prototype;

  // Helper methods...
  _proto.
  getClassName = function getClassName() {var _this$props2 =








    this.props,id = _this$props2.id,checkable = _this$props2.checkable,withIcon = _this$props2.withIcon,checked = _this$props2.checked,disabled = _this$props2.disabled;
    var className = cnMenuItem({
      id: id,
      checkable: checkable,
      withIcon: withIcon,
      checked: checked,
      disabled: disabled },
    [this.props.className]);
    return className;
  }

  // Render...
  ;_proto.
  renderIconContent = function renderIconContent() {var _this$props3 =





    this.props,withIcon = _this$props3.withIcon,checkable = _this$props3.checkable,checked = _this$props3.checked,icon = _this$props3.icon;
    if (withIcon && icon || checkable && checked) {
      var iconContent = icon || 'faCheck';
      return iconContent && /*#__PURE__*/external_react_default.a.createElement(elements_InlineIcon_InlineIcon, { icon: iconContent, className: cnMenuItem('Icon') });
    }
  };_proto.

  renderTextContent = function renderTextContent() {var _this$props4 =



    this.props,children = _this$props4.children,text = _this$props4.text;
    return /*#__PURE__*/(
      external_react_default.a.createElement("div", { className: cnMenuItem('Text') },
      children || text));


  };_proto.

  render = function render() {var _this$props5 =




    this.props,htmlId = _this$props5.htmlId,setDomRef = _this$props5.setDomRef;

    var renderProps = {
      // id,
      id: htmlId,
      className: this.getClassName(),
      onClick: this.onClick,
      ref: setDomRef // Init ref for FormItemHOC
    };

    var iconContent = this.renderIconContent();
    var textContent = this.renderTextContent();

    // console.log('MenuItem:render', val)

    return /*#__PURE__*/(
      external_react_default.a.createElement("div", renderProps,
      iconContent,
      textContent));


  };return MenuItem;}(external_react_default.a.PureComponent /** @lends @MenuItem.prototype */);



/* harmony default export */ var elements_MenuItem_MenuItem = (forms_FormItemHOC_FormItemHOC({ solid: true, hoverable: true })(MenuItem_MenuItem_MenuItem));
// EXTERNAL MODULE: ./src/elements/Menu/Menu.pcss
var Menu_Menu = __webpack_require__(46);

// CONCATENATED MODULE: ./src/elements/Menu/Menu.jsx
 /** @module Menu
                                                                                                                                                                                                                                                                                *  @class Menu
                                                                                                                                                                                                                                                                                *  @since 2020.10.27, 02:58
                                                                                                                                                                                                                                                                                *  @changed 2020.12.16, 20:21
                                                                                                                                                                                                                                                                                */


// import PropTypes from 'prop-types'
// import connect from 'react-redux/es/connect/connect'






var cnMenu = configure_cn('Menu');

// Unique id counter
var Menu_uniqIdCount = 1;var

Menu_Menu_Menu = /*#__PURE__*/function (_React$PureComponent) {inheritsLoose_default()(Menu, _React$PureComponent);var _proto = Menu.prototype;

  // Helper fuctions...
  _proto.
  getClassName = function getClassName() {
    // const id = this.getId()
    var _this$props =




    this.props,id = _this$props.id,disabled = _this$props.disabled,mode = _this$props.mode,layout = _this$props.layout;
    var className = cnMenu({
      id: id,
      disabled: disabled,
      mode: mode,
      layout: layout },
    [this.props.className]);
    return className;
  };_proto.

  setChildrenItemsFromProps = function setChildrenItemsFromProps() /* children, checkedValStates */{var _this2 = this;
    // console.log('Menu:setChildrenItemsFromProps', {
    //   children,
    // })
    var children = this.props.children;
    var checkedList = [];
    if (Array.isArray(children)) {var
      singleChoice = this.props.singleChoice;var _this$props2 =
      this.props,value = _this$props2.value,checked = _this$props2.checked;
      var propsChecked = singleChoice && value != null ? [value] : checked;
      children = children.map(function (item) {
        var isArray = !!item && Array.isArray(item);
        var isObject = !!item && typeof item === 'object' && !isArray; // Array.isArray(item)
        var isElement = isObject && /*#__PURE__*/external_react_default.a.isValidElement(item);
        var isMenuItem = isElement && item.type === elements_MenuItem_MenuItem;
        var isRawObject = isObject && !isElement;
        // console.log('Menu:setChildrenItemsFromProps:item', {
        //   item,
        //   isElement,
        //   isArray,
        //   isObject,
        //   isMenuItem,
        // })
        if (isRawObject || isMenuItem) {
          var itemProps = isRawObject ? item : item.props;
          // Construct unique key values...
          var val = itemProps.val;
          var _checked = Array.isArray(propsChecked) ? propsChecked.includes(val) : itemProps.checked;
          // const checked = checkedValStates && checkedValStates[val] != null ? checkedValStates[val] : itemProps.checked
          var checkable = itemProps.checkable != null ? itemProps.checkable : _this2.props.checkable;
          var newProps = extends_default()({},
          itemProps, {
            onClick: itemProps.onClick || _this2.onMenuItemClick,
            checkable: checkable,
            checked: _checked });

          if (isRawObject) {// Raw object -> create MenuItem
            var key = item && item.key || _this2.getId() + '_Item_' + (itemProps.id || itemProps.val);
            item = /*#__PURE__*/external_react_default.a.createElement(elements_MenuItem_MenuItem, extends_default()({}, newProps, { key: key }));
            // isMenuItem = isElement = true
          } else
          if (isMenuItem) {// MenuItem -> Add onClick handler if handler is not defined
            item = extends_default()({}, item, { props: newProps });
          }
          if (item.props.checked && (!singleChoice || !checkedList.length)) {
            checkedList.push(val);
          }
        }
        // TODO: Process arrays (subitems/groups)?
        return item;
      });
    }
    this.setState({
      items: children,
      checkedList: checkedList });

    // return children
  };_proto.

  updateChildrenItems = function updateChildrenItems(checkedValStates) {var _this$props3 =
    this.props,singleChoice = _this$props3.singleChoice,onChange = _this$props3.onChange;var
    items = this.state.items;
    var checkedList = [];
    if (Array.isArray(items)) {
      items = items.map(function (item) {
        var isObject = !!item && typeof item === 'object';
        var isElement = isObject && /*#__PURE__*/external_react_default.a.isValidElement(item);
        var isMenuItem = isElement && item.type === elements_MenuItem_MenuItem;
        if (isMenuItem) {
          var itemProps = item.props;var
          val = itemProps.val,checked = itemProps.checked;
          var checkedVal = checkedValStates[val];
          if (checkedVal == null) {// Check out all other items if single mode
            checkedVal = singleChoice ? false : checked;
          }
          if (checkedVal !== checked) {
            item = extends_default()({}, item, { props: extends_default()({}, itemProps, { checked: checkedVal }) });
          }
          if (checkedVal) {// && (!singleChoice || !checkedList.length)) {
            checkedList.push(val);
          }
        }
        return item;
      });
    }
    this.setState({
      items: items,
      checkedList: checkedList });

    if (typeof onChange === 'function') {
      var params = { checked: checkedList };
      if (singleChoice && checkedList.length) {// Add `val` param if singleChoice mode (and has checked)
        params.value = checkedList[0];
      }
      onChange(params);
    }
  };_proto.

  createUniqId = function createUniqId() {
    return 'Menu' + Menu_uniqIdCount++;
  };_proto.

  getId = function getId(props) {
    props = props || this.props;
    return props.id || this.id || (this.id = this.createUniqId());
  }

  // Lifecycle...
  ;
  function Menu(props) {var _this;
    _this = _React$PureComponent.call(this, props) || this;defineProperty_default()(assertThisInitialized_default()(_this), "onMenuItemClick",



















    function (_ref) {var _this$updateChildrenI;var val = _ref.val;var _this$props4 =
      _this.props,onClick = _this$props4.onClick,singleChoice = _this$props4.singleChoice;var
      checkedList = _this.state.checkedList;
      var setChecked = !checkedList.includes(val);
      if (singleChoice === 'forced' && !setChecked) {// Don not made changes if single mode and clicked item was checked
        return;
      }
      if (typeof onClick === 'function') {// Invoke onClick handler
        onClick({ value: val });
      }
      _this.updateChildrenItems((_this$updateChildrenI = {}, _this$updateChildrenI[val] = setChecked, _this$updateChildrenI)); // Apply items changes
    });_this.state = {};return _this;}_proto.componentDidMount = function componentDidMount() {// const children = this.props.children
    this.setChildrenItemsFromProps();};_proto.componentDidUpdate = function componentDidUpdate(prevProps) {var prevChildren = prevProps.children;var children = this.props.children;if (prevChildren !== children) {// TODO: To update items states?
      this.setChildrenItemsFromProps();}} // Handlers...
  ; // Render...
  _proto.renderContent = function renderContent() {var
    items = this.state.items;
    return items;
  };_proto.

  render = function render() {var _this$props5 =








    this.props,id = _this$props5.id,setDomRef = _this$props5.setDomRef;

    var renderProps = {
      id: id,
      className: this.getClassName(),
      // title,
      // onClick,
      // key,
      ref: setDomRef // Init ref for FormItemHOC
    };

    var content = this.renderContent();

    return /*#__PURE__*/(
      external_react_default.a.createElement("div", renderProps,
      content));


  };return Menu;}(external_react_default.a.PureComponent /** @lends @Menu.prototype */);



/* harmony default export */ var elements_Menu_Menu = (Menu_Menu_Menu);
// EXTERNAL MODULE: ./src/forms/FormSelect/FormSelect.pcss
var FormSelect_FormSelect = __webpack_require__(47);

// CONCATENATED MODULE: ./src/forms/FormSelect/FormSelect.jsx
 /** @module FormSelect
                                                                                                                                                                                                                          *  @class FormSelect
                                                                                                                                                                                                                          *  @since 2020.10.28, 22:49
                                                                                                                                                                                                                          *  @changed 2020.10.29, 03:14
                                                                                                                                                                                                                          *
                                                                                                                                                                                                                          *  TODO 2020.12.16, 23:07 -- Add hidden html form element (for form submission)
                                                                                                                                                                                                                          */
/* eslint-disable react/require-default-props */



// import connect from 'react-redux/es/connect/connect'




// import FormGroup from 'forms/FormGroup'
// import FormGroup from '../FormGroup'

// import { FormItemPopup } from 'elements/ModalPopup'



// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'



var cnFormSelect = configure_cn('FormSelect');var

FormSelect_FormSelect_FormSelect = /*#__PURE__*/function (_React$PureComponent) {inheritsLoose_default()(FormSelect, _React$PureComponent);















  // Lifecycle methods...

  function FormSelect(props) {var _this;
    _this = _React$PureComponent.call(this, props) || this;
    // this.formItemRef = React.createRef()
    defineProperty_default()(assertThisInitialized_default()(_this), "onControlClick",





























    function (params) {var
      onControlClick = _this.props.onControlClick;
      if (typeof onControlClick === 'function') {
        onControlClick(params);
      }
    });defineProperty_default()(assertThisInitialized_default()(_this), "onMenuItemClick",
    function (params) {var _this$props =
      _this.props,closeOnSelect = _this$props.closeOnSelect,onMenuItemClick = _this$props.onMenuItemClick;
      if (typeof onMenuItemClick === 'function') {
        onMenuItemClick(params);
      }
      if (closeOnSelect && _this.popupNode) {
        _this.popupNode.close();
      }
    });defineProperty_default()(assertThisInitialized_default()(_this), "onMenuChange",
    function (params) {var
      onChange = _this.props.onChange;var
      checked = params.checked;
      if (typeof onChange === 'function') {var _this$props2 =
        _this.props,id = _this$props2.id,inputId = _this$props2.inputId,name = _this$props2.name,singleChoice = _this$props2.singleChoice;
        var value = singleChoice ? checked[0] : checked;
        var setId = id || inputId || name;
        var setParams = { id: setId, checked: checked, value: value };
        onChange(setParams);
      }
      _this.setState({ checked: checked });
    });defineProperty_default()(assertThisInitialized_default()(_this), "setPopupRef",

    function (node) {var
      setPopupNodeRef = _this.props.setPopupNodeRef;
      _this.popupNode = node;
      if (setPopupNodeRef && typeof setPopupNodeRef === 'function') {
        setPopupNodeRef(node);
      }
    });_this.id = props.id || props.inputId || props.name;var _checked = props.checked,_value = props.value;_this.state = { checked: Array.isArray(_checked) ? _checked : _value && [_value] || [] };return _this;} // Helper methods...
  var _proto = FormSelect.prototype;_proto.getClassName = function getClassName() {var id = this.id;var classList = cnFormSelect({ id: id }, [this.props.className]);return classList;};_proto.getItemsText = function getItemsText() {var checked = this.state.checked;var options = this.props.options;var text = Array.isArray(options) && Array.isArray(checked) && options.map(function (_ref) {var val = _ref.val,text = _ref.text;if (checked.includes(val)) {return text;}}).filter(Boolean).join(', ');return text;} // Handlers...
  ; // Render...
  _proto.
  renderControlContent = function renderControlContent() {var _this$props3 =







    this.props,text = _this$props3.text,placeholder = _this$props3.placeholder,title = _this$props3.title,controlButtonTheme = _this$props3.controlButtonTheme,fullWidth = _this$props3.fullWidth,disabled = _this$props3.disabled;
    var buttonText = this.getItemsText() || placeholder || text;
    return /*#__PURE__*/(
      external_react_default.a.createElement(forms_FormButton_FormButton, {
        icon: "faChevronDown",
        rightIcon: true,
        theme: controlButtonTheme || 'primary',
        variation: "popupControl",
        rotatedIcon: true,
        text: buttonText,
        title: title,
        fullWidth: fullWidth,
        disabled: disabled }));


  };_proto.

  renderMenuContent = function renderMenuContent() {var _this$props4 =







    this.props,singleChoice = _this$props4.singleChoice,options = _this$props4.options,disabled = _this$props4.disabled;var

    checked =
    this.state.checked;
    return /*#__PURE__*/(
      external_react_default.a.createElement(elements_Menu_Menu, {
        checkable: true,
        singleChoice: singleChoice,
        onChange: this.onMenuChange,
        onClick: this.onMenuItemClick,
        checked: checked
        // value={value}
        , disabled: disabled },

      options));


  };_proto.

  render = function render() {var _this$props5 =







    this.props,id = _this$props5.id,disabled = _this$props5.disabled,title = _this$props5.title,open = _this$props5.open,fullWidth = _this$props5.fullWidth;

    var controlContent = this.renderControlContent();
    var menuContent = this.renderMenuContent();

    var popupProps = {
      id: id,
      className: this.getClassName(),
      contentClassName: 'XXX',
      disabled: disabled,
      title: title,
      open: open,
      popupControl: controlContent,
      popupContent: menuContent,
      onControlClick: this.onControlClick,
      fullWidth: fullWidth,
      ref: this.setPopupRef };


    return /*#__PURE__*/(
      external_react_default.a.createElement(elements_ModalPopup_ModalPopup, popupProps));


  };return FormSelect;}(external_react_default.a.PureComponent /** @lends @FormSelect.prototype */);defineProperty_default()(FormSelect_FormSelect_FormSelect, "propTypes", { // value: PropTypes.oneOfType([ PropTypes.string, PropTypes.number, PropTypes.arrayOf(PropTypes.oneOfType([ PropTypes.string, PropTypes.number ])) ]),
  checked: prop_types_default.a.arrayOf(prop_types_default.a.oneOfType([prop_types_default.a.string, prop_types_default.a.number])), disabled: prop_types_default.a.bool, fullWidth: prop_types_default.a.bool, id: prop_types_default.a.string, onChange: prop_types_default.a.func, open: prop_types_default.a.bool, options: prop_types_default.a.arrayOf(prop_types_default.a.shape({ val: prop_types_default.a.oneOfType([prop_types_default.a.string, prop_types_default.a.number]), text: prop_types_default.a.string })), placeholder: prop_types_default.a.string, text: prop_types_default.a.string, value: prop_types_default.a.oneOfType([prop_types_default.a.string, prop_types_default.a.number]) });


/* harmony default export */ var forms_FormSelect_FormSelect = (forms_FormItemHOC_FormItemHOC({ solid: true, hoverable: true })(FormSelect_FormSelect_FormSelect));
// EXTERNAL MODULE: ./src/forms/FormTextInput/FormTextInput.pcss
var FormTextInput_FormTextInput = __webpack_require__(48);

// CONCATENATED MODULE: ./src/forms/FormTextInput/FormTextInput.jsx
 /** @module FormTextInput
                                                                                                                                                                                                                          *  @class FormTextInput
                                                                                                                                                                                                                          *  @since 2020.10.07, 00:20
                                                                                                                                                                                                                          *  @changed 2020.10.29, 23:44
                                                                                                                                                                                                                          */
/* eslint-disable react/require-default-props */



// import connect from 'react-redux/es/connect/connect'





// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'



var cnFormTextInput = configure_cn('FormTextInput');var

FormTextInput_FormTextInput_FormTextInput = /*#__PURE__*/function (_React$PureComponent) {inheritsLoose_default()(FormTextInput, _React$PureComponent);

  // Lifecycle...

  function FormTextInput(props) {var _this;
    _this = _React$PureComponent.call(this, props) || this;defineProperty_default()(assertThisInitialized_default()(_this), "updateValueWithState",






































    function (state) {var _this$props =
      _this.props,id = _this$props.id,inputId = _this$props.inputId,name = _this$props.name,onChange = _this$props.onChange,disabled = _this$props.disabled,numericValue = _this$props.numericValue;
      if (!disabled && typeof onChange === 'function') {var
        value = state.value;
        if (numericValue && !isNaN(value)) {
          value = Number(value);
        }
        var setId = inputId || id || name;
        onChange({ id: setId, value: value });
      }
    });defineProperty_default()(assertThisInitialized_default()(_this), "handleChange",




















    function (event) {var
      target = event.target;var
      value = target.value;
      _this.setState({ value: value });
    });defineProperty_default()(assertThisInitialized_default()(_this), "onClearClick",

    function () {
      _this.setState({ value: '' });
    });defineProperty_default()(assertThisInitialized_default()(_this), "onKeyPress",

    function (event) {var
      keyCode = event.keyCode;var _this$props2 =





      _this.props,id = _this$props2.id,onKeyPress = _this$props2.onKeyPress,onEnterPressed = _this$props2.onEnterPressed;
      var cbProps = { event: event, id: id, keyCode: keyCode };
      onKeyPress && onKeyPress(cbProps);
      onEnterPressed && keyCode === 13 && onEnterPressed(cbProps); // Enter?
      // onEscPressed && (keyCode === 27) && onEscPressed(cbProps) // Esc? Seems to not processing (in chrome at least)
    });defineProperty_default()(assertThisInitialized_default()(_this), "onFocusIn",

    function () {
      _this.mounted && _this.setState({ focused: true });
      window.addEventListener('keypress', _this.onKeyPress);
      if (typeof _this.props.onFocusIn === 'function') {// Propogate event if handler passed
        _this.props.onFocusIn(event);
      }
    });defineProperty_default()(assertThisInitialized_default()(_this), "onFocusOut",
    function (event) {
      _this.mounted && _this.setState({ focused: false });
      window.removeEventListener('keypress', _this.onKeyPress);
      if (typeof _this.props.onFocusOut === 'function') {// Propogate event if handler passed
        _this.props.onFocusOut(event);
      }
    });var _this$props$value = _this.props.value,_value = _this$props$value === void 0 ? '' : _this$props$value;_this.state = { value: _value };return _this;}var _proto = FormTextInput.prototype;_proto.componentDidUpdate = function componentDidUpdate(prevProps, prevState) {var prevValue = prevProps.value;var propsValue = this.props.value;var stateValue = this.state.value;if (propsValue !== prevValue && propsValue !== stateValue) {// New value from props
      this.setState({ value: propsValue }, this.updateValueWithState);} else if (stateValue !== prevState.value) {// New value from state
      this.updateValueWithState(this.state);}} // Helper methods...
  ;_proto.hasValue = function hasValue() {var value = this.state.value;return value != null && value !== '';};_proto.hasIcon = function hasIcon() {var _this$props3 = this.props,icon = _this$props3.icon,hasIcon = _this$props3.hasIcon,hasClear = _this$props3.hasClear;return hasIcon || !!icon || hasClear && this.hasValue();};_proto.getClassName = function getClassName() {var _this$props4 = this.props,id = _this$props4.id,hasClear = _this$props4.hasClear;var hasValue = this.hasValue();var hasClearActive = hasClear && hasValue;var classList = cnFormTextInput({ id: id, hasIcon: this.hasIcon(), hasValue: this.hasValue(), hasClear: hasClear, hasClearActive: hasClearActive }, [this.props.className]);return classList;} // Event handlers...
  ; // Render...
  _proto.renderInput = function renderInput() {var _this2 = this;var
    value =
    this.state.value;var _this$props5 =








    this.props,id = _this$props5.id,inputId = _this$props5.inputId,name = _this$props5.name,disabled = _this$props5.disabled,placeholder = _this$props5.placeholder,_this$props5$type = _this$props5.type,type = _this$props5$type === void 0 ? 'text' : _this$props5$type;

    var inputProps = {
      key: 'Input',
      type: type,
      className: cnFormTextInput('Control', ['FormItem-Control']),
      id: inputId || id || name,
      name: name || inputId || id,
      disabled: disabled,
      placeholder: placeholder,
      ref: function ref(domElem) {_this2.inputDomElem = domElem;},
      onChange: this.handleChange,
      value: value
      // onFocus: this.onFocusIn,
      // onBlur: this.onFocusOut,
    };
    return /*#__PURE__*/(
      external_react_default.a.createElement("input",
      inputProps));


  };_proto.

  renderClearIcon = function renderClearIcon() {// DELETE
    var _this$props6 =




    this.props,hasClear = _this$props6.hasClear,clearIcon = _this$props6.clearIcon,clearIconTitle = _this$props6.clearIconTitle;
    var hasValue = this.hasValue();
    var hasClearActive = hasClear && hasValue;
    return hasClearActive && /*#__PURE__*/
    external_react_default.a.createElement(elements_InlineIcon_InlineIcon, {
      icon: clearIcon || 'faTimes',
      className: cnFormTextInput('Icon', { mode: 'Clear' }),
      onClick: this.onClearClick,
      title: clearIconTitle || 'Clear content' });


  };_proto.

  renderIcon = function renderIcon() {// DELETE
    var _this$props7 =




    this.props,icon = _this$props7.icon,iconTitle = _this$props7.iconTitle,onIconClick = _this$props7.onIconClick;

    return icon && /*#__PURE__*/
    external_react_default.a.createElement(elements_InlineIcon_InlineIcon, {
      icon: icon,
      className: cnFormTextInput('Icon'),
      onClick: onIconClick,
      title: iconTitle });


  };_proto.

  render = function render() {var _this$props8 =







    this.props,id = _this$props8.id,disabled = _this$props8.disabled,_this$props8$type = _this$props8.type,type = _this$props8$type === void 0 ? 'text' : _this$props8$type,title = _this$props8.title,setDomRef = _this$props8.setDomRef;

    var inputElem = this.renderInput();

    var renderProps = {
      id: id,
      className: this.getClassName(),
      disabled: disabled,
      title: title,
      type: type,
      onClick: this.onClick,
      ref: setDomRef };


    return /*#__PURE__*/(
      external_react_default.a.createElement("div", renderProps,
      inputElem,
      this.renderIcon() || this.renderClearIcon()));



  };return FormTextInput;}(external_react_default.a.PureComponent /** @lends @FormTextInput.prototype */);defineProperty_default()(FormTextInput_FormTextInput_FormTextInput, "propTypes",

{
  id: prop_types_default.a.string });




/* harmony default export */ var forms_FormTextInput_FormTextInput = (forms_FormItemHOC_FormItemHOC({ solid: true, hoverable: true, framed: true })(FormTextInput_FormTextInput_FormTextInput));
// EXTERNAL MODULE: ./src/forms/FormPasswordInput/FormPasswordInput.pcss
var FormPasswordInput_FormPasswordInput = __webpack_require__(49);

// CONCATENATED MODULE: ./src/forms/FormPasswordInput/FormPasswordInput.jsx
 /** @module FormPasswordInput
                                                                                                                                                                                                                                                                                *  @class FormPasswordInput
                                                                                                                                                                                                                                                                                *  @since 2020.10.29, 23:50
                                                                                                                                                                                                                                                                                *  @changed 2020.10.30, 00:03
                                                                                                                                                                                                                                                                                */


// import PropTypes from 'prop-types'
// import connect from 'react-redux/es/connect/connect'


// import InlineIcon from 'elements/InlineIcon'
// import FormItemHOC from '../FormItemHOC'


// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'



var cnFormPasswordInput = configure_cn('FormPasswordInput');var

FormPasswordInput_FormPasswordInput_FormPasswordInput = /*#__PURE__*/function (_React$PureComponent) {inheritsLoose_default()(FormPasswordInput, _React$PureComponent);

  // Lifecycle...

  function FormPasswordInput(props) {var _this;
    _this = _React$PureComponent.call(this, props) || this;defineProperty_default()(assertThisInitialized_default()(_this), "onTypeIconClick",


































    function () {var
      type = _this.state.type;
      var setType = type === 'password' ? 'type' : 'password';
      _this.setState({ type: setType });
    });var _this$props$type = _this.props.type,_type = _this$props$type === void 0 ? 'password' : _this$props$type;_this.state = { type: _type };return _this;}var _proto = FormPasswordInput.prototype;_proto.componentDidUpdate = function componentDidUpdate(prevProps /* , prevState */) {var prevType = prevProps.type;var propsType = this.props.type;var stateType = this.state.type;if (prevType !== propsType && propsType !== stateType) {this.setState({ type: propsType });} // else if (prevState.type !== stateType) {
    //   this.updateType(this.state)
    // }
  } // Helper methods...
  ;_proto.getClassName = function getClassName() {var id = this.props.id;var classList = cnFormPasswordInput({ id: id }, [this.props.className]);return classList;} // Event handlers...
  ; // Render...
  _proto.render = function render() {var
    type =
    this.state.type;

    var icon = type === 'password' ? 'faEyeSlash' : 'faEye';
    return /*#__PURE__*/(
      external_react_default.a.createElement(forms_FormTextInput_FormTextInput, extends_default()({
        iconTitle: "Show/hide password",
        onIconClick: this.onTypeIconClick },
      this.props, {
        type: type,
        icon: icon })));



  };return FormPasswordInput;}(external_react_default.a.PureComponent /** @lends @FormPasswordInput.prototype */);



/* // propTypes
                                                                                                 * FormPasswordInput.propTypes = {
                                                                                                 *   id: PropTypes.string,
                                                                                                 * }
                                                                                                 */
/* harmony default export */ var forms_FormPasswordInput_FormPasswordInput = (/* FormItemHOC({ hoverable: true, framed: true })( */FormPasswordInput_FormPasswordInput_FormPasswordInput);
// CONCATENATED MODULE: ./src/forms/FormBooleanHOC/FormBooleanHOC.jsx
 /** @module FormBooleanHOC
                                                                                                                                                                                                                                                                                *  @class FormBooleanHOC
                                                                                                                                                                                                                                                                                *  @since 2020.12.10, 22:17
                                                                                                                                                                                                                                                                                *  @changed 2020.12.10, 22:17
                                                                                                                                                                                                                                                                                */
/* eslint-disable react/require-default-props, react/jsx-max-depth */





var cnFormBooleanHOC = configure_cn('FormBooleanHOC');

var FormBooleanHOC_wrapFormBooleanHOC = function wrapFormBooleanHOC(WrappedComponent, params) {var _class, _temp;if (params === void 0) {params = {};}return _temp = _class = /*#__PURE__*/function (_React$Component) {inheritsLoose_default()(FormBoolean, _React$Component);














    // Lifecycle methods...

    function FormBoolean(props) {var _this;
      _this = _React$Component.call(this, props) || this;
      // this.formItemRef = React.createRef()
      defineProperty_default()(assertThisInitialized_default()(_this), "updateValueWithState",
























































      function (state) {var _this$props =
        _this.props,onChange = _this$props.onChange,disabled = _this$props.disabled;
        if (!disabled && typeof onChange === 'function') {var
          value = state.value;
          onChange({ id: _this.id, value: value });
        }
      });defineProperty_default()(assertThisInitialized_default()(_this), "handleChange",



      function (_ref) {var value = _ref.value;
        _this.setState(function (_ref2) {var stateValue = _ref2.value;
          if (value == null) {
            value = !stateValue;
          }
          return { value: value };
        });
      });var _value = _this.props.value;_this.id = props.id || params.id || props.inputId || props.name;_this.state = { value: _value };return _this;}var _proto = FormBoolean.prototype;_proto.componentDidMount = function componentDidMount() {// const { formItemRef: { current } = {} } = this
      this.afterRender();};_proto.componentDidUpdate = function componentDidUpdate(prevProps, prevState) {var prevValue = prevProps.value;var propsValue = this.props.value;var stateValue = this.state.value;if (propsValue !== prevValue && propsValue !== stateValue) {// New value from props
        this.setState({ value: propsValue }, this.updateValueWithState);} else if (stateValue !== prevState.value) {// New value from state
        this.updateValueWithState(this.state);}this.afterRender();} // Helper methods...
    ;_proto.getClassName = function getClassName() {var id = this.id; // const { id } = this.props
      var value = this.state.value;var checked = !!value;var mods = { id: id, checked: checked };var classList = cnFormBooleanHOC(mods, [this.props.className]);return classList;};_proto.focus = function focus() {// Invoke containing input focus method
      // if (this.inputDomElem && typeof this.inputDomElem.focus == 'function') {
      //   this.inputDomElem.focus()
      // }
    };_proto.afterRender = function afterRender() {// Calling after each (including first) render
      // // TODO: Move `focus` and `select` forwarding to `FormItem` (for `focusable` variant)?
      // if (this.formItemRef && this.formItemRef.current) {
      //   if (!this.formItemRef.current.focus && this.focus) {
      //     this.formItemRef.current.focus = this.focus.bind(this)
      //   }
      //   if (!this.formItemRef.current.select && this.select) {
      //     this.formItemRef.current.select = this.select.bind(this)
      //   }
      // }
    }; // Render...
    _proto.renderInput = function renderInput() {var _this$props2 = this.props,id = _this$props2.id,inputId = _this$props2.inputId,name = _this$props2.name,setDomRef = _this$props2.setDomRef,tabIndex = _this$props2.tabIndex;var value = this.state.value;var checked = !!value;var inputProps = { type: 'checkbox', className: cnFormBooleanHOC('Input'), id: inputId || id || name, name: name || inputId || id, checked: checked,
        onChange: this.handleChange,
        // onFocus={this.handleFocused}
        // onBlur={this.handleUnfocused}
        ref: setDomRef,
        tabIndex: tabIndex };

      return /*#__PURE__*/(
        external_react_default.a.createElement("input", inputProps));

    };_proto.

    render = function render() {var _this$props3 =



      this.props,id = _this$props3.id,disabled = _this$props3.disabled;var
      value = this.state.value;
      var renderProps = {
        id: id,
        className: this.getClassName(),
        disabled: disabled,
        value: value,
        handleChange: this.handleChange
        // ref: setDomRef, // Init ref for FormItemHOC
        // ref: this.formItemRef,
        // tabIndex,
      };
      return /*#__PURE__*/(
        external_react_default.a.createElement(WrappedComponent, extends_default()({},
        this.props,
        renderProps)));



    };return FormBoolean;}(external_react_default.a.Component), defineProperty_default()(_class, "propTypes", { id: prop_types_default.a.string, name: prop_types_default.a.string, value: prop_types_default.a.bool, disabled: prop_types_default.a.bool, onChange: prop_types_default.a.func }), defineProperty_default()(_class, "defaultProps", { id: params.id, value: false }), _temp;};



/** Usage:
                                                                                                                                                                                                                                                                                                    * FormBooleanHOC(component)
                                                                                                                                                                                                                                                                                                    * FormBooleanHOC(params)(component)
                                                                                                                                                                                                                                                                                                    */
var FormBooleanHOC = function FormBooleanHOC(params) {
  if (typeof params === 'string') {// Passed identifier
    params = { id: params };
  }
  if (typeof params === 'object') {// Params passed -> metafabric
    return function (component) {return FormBooleanHOC_wrapFormBooleanHOC(component, params);};
  } else
  {// Component passed -> simple fabric
    return FormBooleanHOC_wrapFormBooleanHOC(params);
  }
};

// export default FormItemHOC({ hoverable: true, focusable: true, framed: false })(FormBooleanHOC)
/* harmony default export */ var FormBooleanHOC_FormBooleanHOC = (FormBooleanHOC);
// EXTERNAL MODULE: ./src/forms/FormRadio/FormRadio.pcss
var FormRadio_FormRadio = __webpack_require__(50);

// EXTERNAL MODULE: ./src/forms/FormRadio/FormRadio-Themes.pcss
var FormRadio_Themes = __webpack_require__(51);

// CONCATENATED MODULE: ./src/forms/FormRadio/FormRadio.jsx
 /** @module FormRadio
                                                                                                                                        *  @class FormRadio
                                                                                                                                        *  @since 2020.04.02, 14:53
                                                                                                                                        *  @changed 2020.04.02, 14:53
                                                                                                                                        */
/* eslint-disable react/require-default-props, react/jsx-max-depth */






// import FormItem from '../FormItem'






var cnFormRadio = configure_cn('FormRadio');var

FormRadio_FormRadio_FormRadio = /*#__PURE__*/function (_React$PureComponent) {inheritsLoose_default()(FormRadio, _React$PureComponent);function FormRadio() {return _React$PureComponent.apply(this, arguments) || this;}var _proto = FormRadio.prototype;













  // Helper methods...
  _proto.
  getClassName = function getClassName() {var _this$props =
    this.props,id = _this$props.id,value = _this$props.value,theme = _this$props.theme;
    var checked = !!value;
    var mods = { id: id, checked: checked, theme: theme };
    var classList = cnFormRadio(mods, [this.props.className]);
    return classList;
  }

  // Render...
  ;_proto.
  renderInput = function renderInput() {var _this$props2 =








    this.props,id = _this$props2.id,inputId = _this$props2.inputId,name = _this$props2.name,setDomRef = _this$props2.setDomRef,tabIndex = _this$props2.tabIndex,handleChange = _this$props2.handleChange,value = _this$props2.value;
    var checked = !!value;
    var inputProps = {
      type: 'checkbox',
      className: cnFormRadio('Input'),
      id: inputId || id || name,
      name: name || inputId || id,
      checked: checked,
      onChange: handleChange,
      ref: setDomRef,
      tabIndex: tabIndex };

    return /*#__PURE__*/(
      external_react_default.a.createElement("input", inputProps));

  };_proto.

  render = function render() {var _this$props3 =



    this.props,id = _this$props3.id,disabled = _this$props3.disabled;
    var renderProps = {
      id: id,
      className: this.getClassName(),
      disabled: disabled };

    return /*#__PURE__*/(
      external_react_default.a.createElement("div", renderProps, /*#__PURE__*/
      external_react_default.a.createElement("div", {
        className: cnFormRadio('Control', ['FormItem-Control']),
        disabled: disabled }, /*#__PURE__*/

      external_react_default.a.createElement("span", { className: cnFormRadio('Frame') }, /*#__PURE__*/
      external_react_default.a.createElement("span", { className: cnFormRadio('Actor') })),

      this.renderInput())));



  };return FormRadio;}(external_react_default.a.PureComponent /** @lends @FormRadio.prototype */);



// export default FormItemHOC({ hoverable: true, focusable: true, framed: false })(FormRadio)
defineProperty_default()(FormRadio_FormRadio_FormRadio, "propTypes", { id: prop_types_default.a.string, name: prop_types_default.a.string, value: prop_types_default.a.bool, disabled: prop_types_default.a.bool, onChange: prop_types_default.a.func });defineProperty_default()(FormRadio_FormRadio_FormRadio, "defaultProps", { value: false });/* harmony default export */ var forms_FormRadio_FormRadio = (compose(
forms_FormItemHOC_FormItemHOC({ hoverable: true, focusable: true, framed: false }),
FormBooleanHOC_FormBooleanHOC)(
FormRadio_FormRadio_FormRadio));
// CONCATENATED MODULE: ./src/forms/forms.js
/** @module forms
 *  @desc Form components
 *  @since 2020.07.20, 19:21
 *  @changed 2020.10.22, 00:16
 */

// Form elements...
 // DEBUG: Demo element

// export FormCheck from './FormCheck'
// export FormSwitch from './FormSwitch'

// TODO...

// export FormDateRange from './FormDateRange'
// export FormDateTime from './FormDateTime'
//
// export FormPager from './FormPager'
// EXTERNAL MODULE: ./src/elements/Loader/Loader.pcss
var Loader_Loader = __webpack_require__(52);

// EXTERNAL MODULE: ./src/elements/Loader/Loader-animation.pcss
var Loader_animation = __webpack_require__(53);

// EXTERNAL MODULE: ./src/elements/Loader/Loader-modes.pcss
var Loader_modes = __webpack_require__(54);

// EXTERNAL MODULE: ./src/elements/Loader/Loader-themes.pcss
var Loader_themes = __webpack_require__(55);

// CONCATENATED MODULE: ./src/elements/Loader/Loader.jsx
/** @module Loader
 *  @since 2020.10.27, 00:39
 *  @changed 2020.12.25, 00:29
 *
 *  TODO: Place block (and local?) loaders into `ModalsContainer`?
 */


// import connect from 'react-redux/es/connect/connect'




var cnLoader = configure_cn('Loader');






// eslint-disable-next-line react/prefer-stateless-function
// export default class Loader extends React.PureComponent [>* @lends @Modal.prototype <] {

/** Loader component (FC)
 * @param {Boolean} [show]
 * @param {String} [theme] - Component theme (Light, none)
 * @param {Object} commonLang - Mapped language component
 */
var Loader_Loader_Loader = function Loader(props) {var

  lang =








  props.lang,className = props.className,mode = props.mode,show = props.show,theme = props.theme,text = props.text,onCancel = props.onCancel,cancelText = props.cancelText;
  var actions = typeof onCancel === 'function' && /*#__PURE__*/
  external_react_default.a.createElement("div", { className: cnLoader('Actions') }, /*#__PURE__*/
  external_react_default.a.createElement(forms_FormGroup_FormGroup, { flow: true, alignItems: "center" }, /*#__PURE__*/
  external_react_default.a.createElement(forms_FormButton_FormButton, {
    plain: true,
    onDark: true,
    text: cancelText || getCommonLangText('cancelButton', 'Cancel', lang),
    icon: "faTimes",
    onClick: onCancel })));




  var thisClassName = cnLoader({ mode: mode, theme: theme, show: show }, [className /* showClass */]);
  var showText = text != null ? text : getCommonLangText('loading', 'Loading...', lang);
  return /*#__PURE__*/(
    external_react_default.a.createElement("div", { className: thisClassName }, /*#__PURE__*/
    external_react_default.a.createElement("div", { className: cnLoader('Container') }, /*#__PURE__*/
    external_react_default.a.createElement("div", { className: cnLoader('Spinner') }), /*#__PURE__*/
    external_react_default.a.createElement("div", { className: cnLoader('Text') }, showText),
    actions)));



};
// const mapStateToProps = store => ({
//   // user: store.user,
//   // commonLang: store.language.components.common,
//   lang: store.language,
// })
// export default connect(mapStateToProps)(Loader)
/* harmony default export */ var elements_Loader_Loader = (Loader_Loader_Loader);
// EXTERNAL MODULE: ./src/elements/ModalWindow/ModalWindow-Geometry.pcss
var ModalWindow_Geometry = __webpack_require__(56);

// EXTERNAL MODULE: ./src/elements/ModalWindow/ModalWindow-Themes.pcss
var ModalWindow_Themes = __webpack_require__(57);

// EXTERNAL MODULE: ./src/elements/ModalWindow/ModalWindow-Errors.pcss
var ModalWindow_Errors = __webpack_require__(58);

// CONCATENATED MODULE: ./src/elements/ModalWindow/ModalWindow.jsx
 /** @module ModalWindow
                                                                                                                                                                                                                                                                                *  @class ModalWindow
                                                                                                                                                                                                                                                                                *  @since 2020.12.21, 22:58
                                                                                                                                                                                                                                                                                *  @changed 2020.12.29, 20:05
                                                                                                                                                                                                                                                                                *
                                                                                                                                                                                                                                                                                *  External methods (for PopupStack):
                                                                                                                                                                                                                                                                                *  - close
                                                                                                                                                                                                                                                                                *  - open
                                                                                                                                                                                                                                                                                *  - updateGeometry
                                                                                                                                                                                                                                                                                *
                                                                                                                                                                                                                                                                                *  TODO 2020.12.29, 21:51 -- Use level mod (increase margins)
                                                                                                                                                                                                                                                                                */
/* --eslint-disable no-console */
















// import './ModalWindow-Transitions.pcss'

var cnModalWindow = configure_cn('ModalWindow');

// const doDebug = [>DEBUG<] false && config.build.DEV_DEBUG || // DEBUG!
//   false

var ModalWindow_selfCloseActionId = 'modalSelfClose';
var ModalWindow_externalCloseActionId = 'modalExternalClose';var

ModalWindow_ModalWindow = /*#__PURE__*/function (_React$PureComponent) {inheritsLoose_default()(ModalWindow, _React$PureComponent);function ModalWindow() {var _this;for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {args[_key] = arguments[_key];}_this = _React$PureComponent.call.apply(_React$PureComponent, [this].concat(args)) || this;defineProperty_default()(assertThisInitialized_default()(_this), "ModalPortal",


























































    null);defineProperty_default()(assertThisInitialized_default()(_this), "handleOpenState",







    function (_ref) {var open = _ref.open;
      // this.setState({ open })
      var _this$props = _this.props,id = _this$props.id,handleOpenState = _this$props.handleOpenState;
      if (typeof handleOpenState === 'function') {
        handleOpenState({ id: id, open: open });
      }
    });defineProperty_default()(assertThisInitialized_default()(_this), "onAction",

    function (actionProps) {// Event handler for ActionContext consumed children
      var _assertThisInitialize = assertThisInitialized_default()(_this),ModalPortal = _assertThisInitialize.ModalPortal;
      if (!ModalPortal) {
        var error = new Error('ModalWindow:onAction: ModalPortal must be defined');
        console.error(error); // eslint-disable-line no-console
        //DEBUG//debugger; // eslint-disable-line no-debugger
        throw error; // ???
      }
      var actionId = actionProps.id;var _this$props2 =
      _this.props,open = _this$props2.open,actionsContextNode = _this$props2.actionsContextNode,autoClose = _this$props2.autoClose,closeOnCancelAction = _this$props2.closeOnCancelAction;
      // console.log('ModalWindow:onAction', this.props.id, actionId)
      ModalPortal.setResult(actionId);
      if (open && (autoClose || closeOnCancelAction && actionId === 'cancel')) {// Close and call `resolveResult` when window is closed
        ModalPortal.close();
      } else
      {// ...Or all `resolveResult` immediatelly
        ModalPortal.resolveResult();
      }
      if (actionsContextNode && typeof actionsContextNode.onAction) {
        actionsContextNode.onAction(actionProps);
      }
    });defineProperty_default()(assertThisInitialized_default()(_this), "onCloseButtonClick",

    function () {// Mouse released on wrapper --> close modal
      var _assertThisInitialize2 = assertThisInitialized_default()(_this),ModalPortal = _assertThisInitialize2.ModalPortal;
      if (!ModalPortal) {
        var error = new Error('ModalWindow:onCloseButtonClick: ModalPortal must be defined');
        console.error(error); // eslint-disable-line no-console
        //DEBUG//debugger; // eslint-disable-line no-debugger
        throw error; // ???
      }var _this$props3 =
      _this.props,id = _this$props3.id,closeWithCloseButton = _this$props3.closeWithCloseButton,onCloseButtonClick = _this$props3.onCloseButtonClick;
      // console.log('ModalWindow: onCloseButtonClick', id)
      // debugger;
      if (closeWithCloseButton) {
        ModalPortal.setResult(ModalWindow_selfCloseActionId);
        ModalPortal.close();
      }
      if (typeof onCloseButtonClick === 'function') {
        onCloseButtonClick({ id: id });
      }
    });defineProperty_default()(assertThisInitialized_default()(_this), "setPortalNode",

    function (node) {// Save reference to ModalPortal node
      _this.ModalPortal = node;
    });defineProperty_default()(assertThisInitialized_default()(_this), "open",



    function () {return _this.ModalPortal && _this.ModalPortal.open();});defineProperty_default()(assertThisInitialized_default()(_this), "close",
    function () {return _this.ModalPortal && _this.ModalPortal.close();});defineProperty_default()(assertThisInitialized_default()(_this), "toggle",
    function (open) {return _this.ModalPortal && _this.ModalPortal.toggle(open);});defineProperty_default()(assertThisInitialized_default()(_this), "isVisible",
    function () {return _this.ModalPortal && _this.ModalPortal.isVisible();});defineProperty_default()(assertThisInitialized_default()(_this), "renderContentError",































































    function (error) {
      if (Array.isArray(error)) {
        return error.
        map(_this.renderContentError).
        filter(function (x) {return x;}).
        map(function (str, n) {
          var key = 'error' + n;
          return /*#__PURE__*/external_react_default.a.createElement("div", { key: key, className: cnModalWindow('ErrorItem') }, str);
        });
      }
      if (!error) {
        return null;
      }
      if (error instanceof Error) {
        return String(error).replace(/^Error:\s*/, '');
      }
      if (typeof error !== 'string') {
        return String(error);
      }
      return error;
    });defineProperty_default()(assertThisInitialized_default()(_this), "renderWindow",





























    function () /* portalProps */{
      // const { ModalPortal } = portalProps || {} // !!!
      // this.ModalPortal = ModalPortal // Save ModalPortal handler
      // console.log('ModalWindow:renderWindow', this.props.children)
      return /*#__PURE__*/(
        external_react_default.a.createElement(external_react_default.a.Fragment, null,
        _this.renderHeader(), /*#__PURE__*/
        external_react_default.a.createElement("div", { className: cnModalWindow('Layout') },
        _this.renderLeftContent(), /*#__PURE__*/
        external_react_default.a.createElement("div", { className: cnModalWindow('Main') },
        _this.renderContent(),
        _this.renderActions()))));





    });return _this;}var _proto = ModalWindow.prototype; // Render helpers...
  // Render...
  _proto.renderHeaderIcon = function renderHeaderIcon() {var _this$props4 = this.props,icon = _this$props4.icon,iconTheme = _this$props4.iconTheme;var theme = iconTheme || this.props.theme;var showIcon = icon || theme && config_default.a.ui.defaultIcons[theme];return showIcon && /*#__PURE__*/external_react_default.a.createElement("div", { key: "HeaderIcon", className: cnModalWindow('HeaderIcon', { theme: theme }) }, /*#__PURE__*/external_react_default.a.createElement(elements_InlineIcon_InlineIcon, { theme: theme, icon: showIcon }));};_proto.renderHeaderTitle = function renderHeaderTitle() {var title = this.props.title;return title && /*#__PURE__*/external_react_default.a.createElement("div", { key: "HeaderTitle", className: cnModalWindow('HeaderTitle') }, title);};_proto.renderHeaderCloseButton = function renderHeaderCloseButton() {var showCloseButton = this.props.showCloseButton;return showCloseButton && /*#__PURE__*/external_react_default.a.createElement("div", { key: "HeaderCloseButton", className: cnModalWindow('HeaderCloseButton') }, /*#__PURE__*/external_react_default.a.createElement(forms_FormButton_FormButton, { icon: "faTimes", largeIcon: true, plain: true, title: "Close window" // TODO; Translate?
      , onClick: this.onCloseButtonClick }));};_proto.renderHeader = function renderHeader() {var _this$props5 = this.props,headerTheme = _this$props5.headerTheme,theme = _this$props5.theme;var content = [this.renderHeaderIcon(), this.renderHeaderTitle(), this.renderHeaderCloseButton()].filter(Boolean);var hasHeader = !!(content && content.length);return hasHeader && /*#__PURE__*/external_react_default.a.createElement("div", { className: cnModalWindow('Header', { theme: headerTheme || theme }) }, content);};_proto.renderLeftContent = function renderLeftContent() {var leftContent = this.props.leftContent;return leftContent && /*#__PURE__*/external_react_default.a.createElement("div", { className: cnModalWindow('LeftContent') }, leftContent);};_proto.renderContent = function renderContent() {var _this$props6 = this.props,children = _this$props6.children,contentClassName = _this$props6.contentClassName,error = _this$props6.error; // console.log('ModalWindow:renderContent', children)
    // debugger
    var errorContent = error && /*#__PURE__*/external_react_default.a.createElement("div", { className: cnModalWindow('Error') }, this.renderContentError(error));return children && /*#__PURE__*/external_react_default.a.createElement("div", { className: cnModalWindow('Content', [contentClassName]) }, errorContent, children);};_proto.renderActions = function renderActions() {var actions = this.props.actions;return actions && /*#__PURE__*/external_react_default.a.createElement("div", { className: cnModalWindow('Actions') }, /*#__PURE__*/external_react_default.a.createElement(ActionsContextProvider, { value: this }, actions));};_proto.render = function render() {var _this2 = this;var portalProps = passModalPortalProps.reduce(function (data, id) {var _extends2;return extends_default()({}, data, (_extends2 = {}, _extends2[id] = _this2.props[id], _extends2));}, {});
    Object.assign(portalProps, {
      handleOpenState: this.handleOpenState
      // onActivate: this.onActivate,
      // onDeactivate: this.onDeactivate,
      // wrapperTheme: 'SubtleDark',
    });
    // console.log('ModalWindow:render', this.props.children)
    // NOTE: Use arrow function to force update modal content
    return /*#__PURE__*/(
      external_react_default.a.createElement(elements_ModalPortal_ModalPortal, extends_default()({}, portalProps, { type: "Window", setPortalNode: this.setPortalNode }),
      this.renderWindow()));


  };return ModalWindow;}(external_react_default.a.PureComponent /** @lends @ModalWindow.prototype */);defineProperty_default()(ModalWindow_ModalWindow, "propTypes", { useLoader: prop_types_default.a.bool, loading: prop_types_default.a.bool, // Show Loader flashback
  onAction: prop_types_default.a.func, // Event fired on action invoked (see `actions` prop)
  // registerCallback: PropTypes.func, // ??? registerCallback(handler = this.someMethod) -- handler stored by parent component and called when detected click on pulldown menu -- prevents popup content closing
  // setModalNodeRef: PropTypes.func, // ??? Demo?
  width: prop_types_default.a.string, // ModalWindow window width (predefined variants: xs, sm, md, lg, xl, xxl)
  handleLoaderCancel: prop_types_default.a.func, // Loader onCancel event handler
  error: prop_types_default.a.oneOfType([prop_types_default.a.string, prop_types_default.a.arrayOf(prop_types_default.a.string)]), // Error(s) strings to display above content
  actions: prop_types_default.a.oneOfType([prop_types_default.a.array, prop_types_default.a.object]), // Actions component(s) (TODO: `ActionsContext` must be used)
  closeOnCancelAction: prop_types_default.a.bool, // Auto-close on `cancel` action event
  closeOnClickOutside: prop_types_default.a.bool, // Close (cancel) modal by click outside modal window (on 'curtain')
  closeOnEscPressed: prop_types_default.a.bool, // Close (cancel) modal on esc key pressed
  closeWithCloseButton: prop_types_default.a.bool, // Close (cancel) modal by click on header 'Close' button
  showCloseButton: prop_types_default.a.bool, // Display close button in header
  icon: prop_types_default.a.oneOfType([prop_types_default.a.string, prop_types_default.a.object]), // Show icon in header
  id: prop_types_default.a.string, // ModalWindow id
  leftContent: prop_types_default.a.oneOfType([prop_types_default.a.string, prop_types_default.a.object]), // Content at left of main content and actions (ideal place for large visual icon)
  onActivate: prop_types_default.a.func, // Event fired on activate (before open)
  onClickOutside: prop_types_default.a.func, // Event fired on click outside modal
  onCloseButtonClick: prop_types_default.a.func, // Event fired on header 'Close' button click
  onDeactivate: prop_types_default.a.func, // Event fired on deactivate (unmounting from dom)
  onEscPressed: prop_types_default.a.func, // Event fired on esc key pressed
  onOpen: prop_types_default.a.func, // Event fired on modal open
  onClose: prop_types_default.a.func, // Event fired on modal close
  handleOpenState: prop_types_default.a.func, // Event fired on modal open state change (update external open/close state) ({ open, id } => void)
  open: prop_types_default.a.bool, // Show modal by default
  title: prop_types_default.a.string, // ModalWindow title
  className: prop_types_default.a.string, // ModalWindow class name
  contentClassName: prop_types_default.a.string, // Content element class name
  windowClassName: prop_types_default.a.string, // ModalWindow window class name
  wrapperClassName: prop_types_default.a.string, // ModalWindow wrapper class name
  theme: prop_types_default.a.string, // ModalWindow theme (default theme for all other themed elements, see `*Theme`)
  iconTheme: prop_types_default.a.string, // Icon theme (using `theme` if not specified)
  windowTheme: prop_types_default.a.string, // Window theme (using `theme` if not specified)
  headerTheme: prop_types_default.a.string, // Header theme (using `theme` if not specified)
  wrapperTheme: prop_types_default.a.string, // Wrapper (back-curtain) theme (using `theme` if not specified)
  loaderTheme: prop_types_default.a.string // Loader theme ('MediumDark' is default)
});defineProperty_default()(ModalWindow_ModalWindow, "defaultProps", { closeOnClickOutside: true, // Close (with `selfCloseActionId` action id) modal by outisde-click.
  closeOnEscPressed: true, // Close (with `selfCloseActionId` action id) modal by esc-key.
  closeWithCloseButton: true, // Close (with `selfCloseActionId` action id) with 'Close button' (if present in layout -- see `showCloseButton`)
  loaderTheme: 'MediumDark', loading: false, open: false, showCloseButton: false, // Display 'Close button'?
  useLoader: false, wrapperTheme: 'MediumDark' });/* harmony default export */ var elements_ModalWindow_ModalWindow = (ModalWindow_ModalWindow);
// EXTERNAL MODULE: ./src/elements/ModalsContainer/ModalsContainer.pcss
var ModalsContainer_ModalsContainer = __webpack_require__(59);

// CONCATENATED MODULE: ./src/elements/ModalsContainer/ModalsContainer.jsx
 /** @module ModalsContainer
                                                                                                                                                                                                                          *  @class ModalsContainer
                                                                                                                                                                                                                          *  @since 2020.12.21, 23:37
                                                                                                                                                                                                                          *  @changed 2020.12.21, 23:37
                                                                                                                                                                                                                          */





// import { cssMapping } from 'utils/configure'


// import { ModalsContextProvider } from 'helpers/ModalsContext'



var cnModalsContainer = configure_cn('ModalsContainer');

// const doDebug = false // DEBUG!
var
ModalsContainer_ModalsContainer_ModalsContainer = /*#__PURE__*/function (_React$PureComponent) {inheritsLoose_default()(ModalsContainer, _React$PureComponent);





  // Internal variables...



  // Lifecycle...

  function ModalsContainer(props) {var _this;
    _this = _React$PureComponent.call(this, props) || this;
    // ???
    // const {
    //   modalsContainerNode, // ModalsContext Provider
    // } = props
    // console.log(modalsContainerNode)
    // debugger
    defineProperty_default()(assertThisInitialized_default()(_this), "modalsStack", []);defineProperty_default()(assertThisInitialized_default()(_this), "registerModal",




















    function (modal) {
      // console.log('ModalsContainer:registerModal', modal.props.type, modal.props.id)
      if (!_this.modalsStack.includes(modal)) {// Add to stack if not exist
        _this.modalsStack.push(modal);
      }
    });defineProperty_default()(assertThisInitialized_default()(_this), "unregisterModal",

    function (modal) {
      // console.log('ModalsContainer:unregisterModal', modal.props.type, modal.props.id)
      var idx = _this.modalsStack.indexOf(modal);
      if (idx !== -1) {// Remove if found...
        _this.modalsStack.splice(idx, 1);
      }
    });defineProperty_default()(assertThisInitialized_default()(_this), "getTopmostVisibleModal",

    function () {
      // Look for items from last (topmost) to first (bottommost) for first visible
      for (var n = _this.modalsStack.length - 1; n >= 0; n--) {
        var modal = _this.modalsStack[n];
        var isVisible = modal.isVisible();
        if (isVisible) {
          return modal;
        }
      }
    });defineProperty_default()(assertThisInitialized_default()(_this), "isModalTopmostVisible",

    function (modal) {
      var topmost = _this.getTopmostVisibleModal();
      return modal === topmost;
    });return _this;}var _proto = ModalsContainer.prototype;_proto.componentDidMount = function componentDidMount() {// this.registerGlobalHandlers()
    if (typeof config_default.a.modals._initPromiseResolve == 'function') {config_default.a.modals._initPromiseResolve();}config_default.a.modals.isInited = true;config_default.a.modals.containerNode = this; // eslint-disable-next-line react/no-find-dom-node
    var domNode = external_react_dom_default.a.findDOMNode(this); // TODO: Find alternate legal method to get dom node? (refs doesn't works due to high-level element (`TransitionGroup`) rendering)
    config_default.a.modals.domNode = domNode;};_proto.componentWillUnmount = function componentWillUnmount() {// this.unregisterGlobalHandlers()
  } // Handlers...
  // External methods...
  ; // Render...
  _proto.renderModalsContainer = function renderModalsContainer() {var containerId = config_default.a.modals.containerId;var className = cnModalsContainer(null, [this.props.className /* , cnModalsContainer('TransitionGroup') */]);var renderProps = {
      key: containerId || 'ModalsContainer',
      id: containerId,
      className: className };

    /* // UNUSED: Failed `ModalsContext` test implementation
                               * return (
                               *   <ModalsContextProvider value={this}>
                               *     <div {...renderProps} />
                               *   </ModalsContextProvider>
                               * )
                               */
    return /*#__PURE__*/(
      external_react_default.a.createElement("div", renderProps));

  };_proto.

  render = function render() {
    var node = document.body; // Render as new node in top level of dom tree
    var container = this.renderModalsContainer();var
    usePortal = this.props.usePortal;
    var content = usePortal ? /*#__PURE__*/external_react_default.a.createElement(PortalCompat, { node: node }, container) : container;
    return content;
    // return (
    //   <Portal node={node}>
    //     {this.renderModalsContainer()}
    //   </Portal>
    // )
  };return ModalsContainer;}(external_react_default.a.PureComponent /** @lends @ModalsContainer.prototype */);defineProperty_default()(ModalsContainer_ModalsContainer_ModalsContainer, "propTypes", { usePortal: prop_types_default.a.bool // Render container at end of dom tree root level
});


/* harmony default export */ var elements_ModalsContainer_ModalsContainer = (ModalsContainer_ModalsContainer_ModalsContainer);
// CONCATENATED MODULE: ./src/elements/elements.js
/** @module elements
 *  @desc Basic elements
 *  @since 2020.10.07, 02:12
 *  @changed 2020.12.24, 23:52
 */
// EXTERNAL MODULE: ./src/demo/Hello/Hello.pcss
var Hello_Hello = __webpack_require__(60);

// CONCATENATED MODULE: ./src/demo/Hello/img/LockColor2.svg
/* harmony default export */ var LockColor2 = ("data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pg0KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPg0KPHN2ZyB2ZXJzaW9uPSIxLjEiIGlkPSJDYXBhXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4Ig0KCSB2aWV3Qm94PSIwIDAgNTEyIDUxMiIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNTEyIDUxMjsiIHhtbDpzcGFjZT0icHJlc2VydmUiPg0KPHBhdGggc3R5bGU9ImZpbGw6I0Y3RjJGNDsiIGQ9Ik00MzIsNDg3SDgwYy00NC4xMTIsMC04MC0zNS44ODgtODAtODBzMzUuODg4LTgwLDgwLTgwaDM1MmM0NC4xMTIsMCw4MCwzNS44ODgsODAsODANCglTNDc2LjExMiw0ODcsNDMyLDQ4N3oiLz4NCjxnPg0KCTxjaXJjbGUgc3R5bGU9ImZpbGw6IzZENzM3RjsiIGN4PSIyMDYiIGN5PSI0MDciIHI9IjI1Ii8+DQoJPGNpcmNsZSBzdHlsZT0iZmlsbDojNkQ3MzdGOyIgY3g9IjEwNiIgY3k9IjQwNyIgcj0iMjUiLz4NCgk8cGF0aCBzdHlsZT0iZmlsbDojNkQ3MzdGOyIgZD0iTTMxNiwxNTdIMTk2Yy04LjI4NCwwLTE1LTYuNzE2LTE1LTE1di00MmMwLTQxLjM1NSwzMy42NDUtNzUsNzUtNzVzNzUsMzMuNjQ1LDc1LDc1djQyDQoJCUMzMzEsMTUwLjI4NCwzMjQuMjg0LDE1NywzMTYsMTU3eiBNMjExLDEyN2g5MHYtMjdjMC0yNC44MTMtMjAuMTg3LTQ1LTQ1LTQ1cy00NSwyMC4xODctNDUsNDVWMTI3eiIvPg0KPC9nPg0KPHBhdGggc3R5bGU9ImZpbGw6IzVFNUY2OTsiIGQ9Ik0yNTYsMjV2MzBjMjQuODEzLDAsNDUsMjAuMTg3LDQ1LDQ1djI3aC00NXYzMGg2MGM4LjI4NCwwLDE1LTYuNzE2LDE1LTE1di00Mg0KCUMzMzEsNTguNjQ1LDI5Ny4zNTUsMjUsMjU2LDI1eiIvPg0KPHBhdGggc3R5bGU9ImZpbGw6I0ZGQUMyQjsiIGQ9Ik0zNTEsMjc2SDE2MWMtOC4yODQsMC0xNS02LjcxNi0xNS0xNVYxNDJjMC04LjI4NCw2LjcxNi0xNSwxNS0xNWgxOTBjOC4yODQsMCwxNSw2LjcxNiwxNSwxNXYxMTkNCglDMzY2LDI2OS4yODQsMzU5LjI4NCwyNzYsMzUxLDI3NnoiLz4NCjxnPg0KCTxwYXRoIHN0eWxlPSJmaWxsOiNGRjk4MUU7IiBkPSJNMzUxLDEyN2gtOTV2MTQ5aDk1YzguMjg0LDAsMTUtNi43MTYsMTUtMTVWMTQyQzM2NiwxMzMuNzE2LDM1OS4yODQsMTI3LDM1MSwxMjd6Ii8+DQoJPHBhdGggc3R5bGU9ImZpbGw6I0ZGOTgxRTsiIGQ9Ik0yODEsMTkyYzAtOC4yODQtNi43MTYtMTUtMTUtMTVoLTIwYy04LjI4NCwwLTE1LDYuNzE2LTE1LDE1YzAsNi41MjgsNC4xNzgsMTIuMDY3LDEwLDE0LjEyOFYyMTINCgkJYzAsOC4yODQsNi43MTYsMTUsMTUsMTVzMTUtNi43MTYsMTUtMTV2LTUuODcyQzI3Ni44MjIsMjA0LjA2NywyODEsMTk4LjUyOCwyODEsMTkyeiIvPg0KPC9nPg0KPHBhdGggc3R5bGU9ImZpbGw6I0RGREFFMDsiIGQ9Ik00MzIsMzI3SDI1NnYxNjBoMTc2YzQ0LjExMiwwLDgwLTM1Ljg4OCw4MC04MFM0NzYuMTEyLDMyNyw0MzIsMzI3eiIvPg0KPGc+DQoJPGNpcmNsZSBzdHlsZT0iZmlsbDojNUU1RjY5OyIgY3g9IjMwNiIgY3k9IjQwNyIgcj0iMjUiLz4NCgk8Y2lyY2xlIHN0eWxlPSJmaWxsOiM1RTVGNjk7IiBjeD0iNDA2IiBjeT0iNDA3IiByPSIyNSIvPg0KPC9nPg0KPHBhdGggc3R5bGU9ImZpbGw6I0ZGODUxMjsiIGQ9Ik0yNjYsMTc3aC0xMHY1MGM4LjI4NCwwLDE1LTYuNzE2LDE1LTE1di01Ljg3MmM1LjgyMi0yLjA2MSwxMC03LjYsMTAtMTQuMTI4DQoJQzI4MSwxODMuNzE2LDI3NC4yODQsMTc3LDI2NiwxNzd6Ii8+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8L3N2Zz4NCg==");
// CONCATENATED MODULE: ./src/demo/Hello/Hello.jsx
/** @module Hello
 *  @since 2020.07.20, 19:07
 *  @changed 2020.07.20, 19:07
 */



// import config from 'config'





var cnHello = configure_cn('Hello');

var Hello_Hello_Hello = function Hello(_ref) {var _ref$greeting = _ref.greeting,greeting = _ref$greeting === void 0 ? 'Greeting' : _ref$greeting,_ref$name = _ref.name,name = _ref$name === void 0 ? 'Name' : _ref$name;
  var className = cnHello();
  return /*#__PURE__*/(
    external_react_default.a.createElement("div", { className: className }, /*#__PURE__*/
    external_react_default.a.createElement("h1", { className: cnHello('Title') }, greeting, ", ", name, "!"), /*#__PURE__*/
    external_react_default.a.createElement("div", { className: cnHello('Image') }, /*#__PURE__*/
    external_react_default.a.createElement("img", { src: LockColor2 }))));



};

/* harmony default export */ var demo_Hello_Hello = (Hello_Hello_Hello);
// EXTERNAL MODULE: ./src/build.pcss
var build = __webpack_require__(61);

// CONCATENATED MODULE: ./src/build.jsx
/** @module build
 *  @desc Library exportable ditributive
 *  @since 2020.05.19, 17:16
 *  @changed 2020.12.28, 01:09
 */






// Demo component


// Basic styles




// TODO: Use WebUiCoreContext?
var build_WebUiCoreRoot = function WebUiCoreRoot(_ref) {var children = _ref.children,autoModalsContainer = _ref.autoModalsContainer;
  return /*#__PURE__*/(
    external_react_default.a.createElement(external_react_default.a.Fragment, null,
    children,
    autoModalsContainer && /*#__PURE__*/external_react_default.a.createElement(elements_ModalsContainer_ModalsContainer, null)));


};
/* harmony default export */ var src_build = __webpack_exports__["default"] = (build_WebUiCoreRoot);

/***/ })
/******/ ]);
//# sourceMappingURL=bundle.js.map