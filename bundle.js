/******/ (function() { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js":
/*!**************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js ***!
  \**************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ _assertThisInitialized; }
/* harmony export */ });
function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/defineProperty.js ***!
  \*******************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ _defineProperty; }
/* harmony export */ });
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

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/extends.js":
/*!************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/extends.js ***!
  \************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ _extends; }
/* harmony export */ });
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

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js":
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js ***!
  \******************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ _inheritsLoose; }
/* harmony export */ });
/* harmony import */ var _setPrototypeOf_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./setPrototypeOf.js */ "./node_modules/@babel/runtime/helpers/esm/setPrototypeOf.js");

function _inheritsLoose(subClass, superClass) {
  subClass.prototype = Object.create(superClass.prototype);
  subClass.prototype.constructor = subClass;
  (0,_setPrototypeOf_js__WEBPACK_IMPORTED_MODULE_0__.default)(subClass, superClass);
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js ***!
  \*********************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ _objectWithoutPropertiesLoose; }
/* harmony export */ });
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

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/setPrototypeOf.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/setPrototypeOf.js ***!
  \*******************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ _setPrototypeOf; }
/* harmony export */ });
function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

/***/ }),

/***/ "./src/config/app.js":
/*!***************************!*\
  !*** ./src/config/app.js ***!
  \***************************/
/***/ (function(module) {

/** @module config.app
 *  @description Core app config
 *  @since 2019.09.10, 14:25
 *  @changed 2021.01.24, 21:42
 *
 *  NOTE: All config params may be updated with `utils.configure.setConfigOptions`, eg:
 *  ```
 *  WebUiCoreUtils.configure.setConfigOptions({ useCssModules: true, cssMappings: webUiCoreCssMappings, store });
 *  ```
 */

module.exports = { // Common-used app variables...

  defaultPageSize: 20, // Number of entries per page

  useCssModules: false, // To use css-module mappings (see `cssMappings` below)

  // Css-modules mappings in format `{ [originalClassName]: transformedClassName }`.
  // Set it with `WebUiCore.utils.setFactoryOptions(React, { useCssModules: true, cssMappings })`
  cssMappings: null,

  // cssModulePrefix: 'WebUiCore', // UNUSED

  lang: null, // i18n language texts provider (from target project) // TODO
  // Mostly using texts from `lang.components.common`

  defaultLocale: 'ru-RU', // One of: 'ru-RU', 'en-US'

  store: null // Target app redux store (???)
};

/***/ }),

/***/ "./src/config/build.js":
/*!*****************************!*\
  !*** ./src/config/build.js ***!
  \*****************************/
/***/ (function(module) {

/** @module config.build
 *  @description Build management config
 *  @since 2019.09.10, 14:25
 *  @changed 2019.09.10, 14:25
 */

var DEBUG = true;
var DEV_DEBUG = true;

module.exports = { // Common-used build variables...

  DEBUG: DEBUG,
  DEV_DEBUG: DEV_DEBUG,

  THEME: "default",
  buildTag: "v.0.3.5-210531-2239-build-dev-default",
  timestamp: "2021.05.31, 22:39",
  timetag: "210531-2239",
  version: "0.3.5" };

/***/ }),

/***/ "./src/config/constants.js":
/*!*********************************!*\
  !*** ./src/config/constants.js ***!
  \*********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "dateFormat": function() { return /* binding */ dateFormat; },
/* harmony export */   "timeFormat": function() { return /* binding */ timeFormat; },
/* harmony export */   "timeSecFormat": function() { return /* binding */ timeSecFormat; },
/* harmony export */   "timeMsFormat": function() { return /* binding */ timeMsFormat; },
/* harmony export */   "dateTimeFormat": function() { return /* binding */ dateTimeFormat; },
/* harmony export */   "dateTimeSecFormat": function() { return /* binding */ dateTimeSecFormat; },
/* harmony export */   "dateTimeMsFormat": function() { return /* binding */ dateTimeMsFormat; },
/* harmony export */   "dateRangeDelim": function() { return /* binding */ dateRangeDelim; },
/* harmony export */   "timeIntervals": function() { return /* binding */ timeIntervals; },
/* harmony export */   "dayTicks": function() { return /* binding */ dayTicks; },
/* harmony export */   "weekTicks": function() { return /* binding */ weekTicks; }
/* harmony export */ });
/** @module config.constants
 *  @description Basic constants
 *  @since 2019.09.10, 14:25
 *  @changed 2021.05.14, 15:33
 */

/** Date conversion & presentation templates... */

// Date/time formats for use in DatePicker, see https://date-fns.org/v2.16.1/docs/format
// export const dateFormat = 'DD.MM.YYYY HH:mm';
// export const timeFormat = 'HH:mm';
var dateFormat = 'dd.MM.yyyy';
var timeFormat = 'HH:mm';
var timeSecFormat = 'HH:mm:ss';
var timeMsFormat = 'HH:mm:ss:SSS';
var dateTimeFormat = dateFormat + ' ' + timeFormat;
var dateTimeSecFormat = dateFormat + ' ' + timeSecFormat;
var dateTimeMsFormat = dateFormat + ' ' + timeMsFormat;
var dateRangeDelim = ' – ';

var timeIntervals = 60;
var dayTicks = 1000 * 60 * 60 * 24;
var weekTicks = dayTicks * 7;

// dateStringFormat: 'yyyy.mm.dd HH:MM:ss',
// dateTagFormat: 'yymmdd-HHMM',

/** App title parts delimiter */
// export const pageDelim = ' – ' // en-dash

/***/ }),

/***/ "./src/config/css.js":
/*!***************************!*\
  !*** ./src/config/css.js ***!
  \***************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

/** @module config.css
 *  @description Global styles config
 *  @since 2019.08.29, 10:28
 *  @changed 2020.12.24, 18:19
 */

// Theme...
var THEME = "default";
var theme = __webpack_require__(/*! ./themes/default */ "./src/config/themes/default.js");
// const themes = require('./css-themes');
// const theme = themes[THEME];

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
  primaryContrastColor: theme.primaryContrastColor || '#fff',

  secondaryColor: theme.secondaryColor,
  secondaryLightColor: theme.secondaryLightColor,
  secondaryDarkColor: theme.secondaryDarkColor,
  secondaryContrastColor: theme.secondaryContrastColor || '#fff',

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

  neutralSuperDarkestColor: '#222',
  neutralDarkestColor: '#333',
  neutralExtraDarkColor: '#666',
  neutralSuperDarkColor: '#777',
  neutralDarkColor: '#999',
  neutralTintedDarkColor: '#aaa',
  neutralShadedColor: '#bbb',
  neutralColor: '#ccc',
  neutralTintedColor: '#d0d0d0',
  neutralLightColor: '#e0e0e0',
  neutralSuperLightColor: '#eee',
  neutralExtraLightColor: '#f0f0f0',

  bootstrapDarkColor: '#212529',

  // Theme colors...

  bodyBgColor: theme.bodyBgColor || '#fff',
  bodyTextColor: theme.bodyTextColor || '#333',
  layoutBgColor: theme.layoutBgColor || '#f0f0f0',
  layoutLightBgColor: theme.layoutLightBgColor || '#f7f7f7',

  layoutBorderColor: theme.layoutBorderColor || '#ccc',

  themeColors: { // Generic theming colors...

    // ??? TODO: See buttons themes
    primary: theme.primaryColor,
    secondary: theme.secondaryColor,

    neutral: '#666',

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
  defaultLineHeight: 1.3,
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
var formItemInnerHeight = formItemHeight; // - formItemBorderSize * 2; // px -- if used css border

Object.assign(cssConfig, { // Form properties...

  // Forms...

  formItemSpacing: formItemSpacing, // px
  formItemHeight: formItemHeight, // px
  formItemBorderSize: formItemBorderSize, // px
  formItemInnerHeight: formItemInnerHeight, // px

  formItemBorderRadius: 3, // px
  formItemOuterGlow: 4, // px
  formItemGlowColor: cssConfig.primaryColor, // cssConfig.neutralColor,
  formItemBorderColor: cssConfig.neutralColor,
  formItemActorColor: cssConfig.neutralDarkColor,
  formItemBgColor: '#fff',
  formItemTextColor: cssConfig.defaultTextColor,
  formItemPlaceholderColor: cssConfig.neutralColor,
  formItemInnerPaddingH: 8,
  formItemDisabledOpacity: .5,

  formPlaceholderColor: '#ccc',

  // Menu...

  menuVPadding: 8,
  menuSeparatorVPadding: 4,
  menuSeparatorHPadding: 4,

  // tableBorderWidth: 2,

  defaultIconSize: 24,
  smallIconSize: 16,

  popupVerticalOffset: 4,
  popupWindowOffset: 10 });



module.exports = cssConfig;

/***/ }),

/***/ "./src/config/index.js":
/*!*****************************!*\
  !*** ./src/config/index.js ***!
  \*****************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

/** @module config
 *  @description App config
 *  @since 2019.08.29, 10:28
 *  @changed 2020.12.22, 00:32
 */

var config = {
  app: __webpack_require__(/*! ./app */ "./src/config/app.js"),
  build: __webpack_require__(/*! ./build */ "./src/config/build.js"),
  constants: __webpack_require__(/*! ./constants */ "./src/config/constants.js"),
  css: __webpack_require__(/*! ./css */ "./src/config/css.js"),
  modals: __webpack_require__(/*! ./modals */ "./src/config/modals.js"),
  ui: __webpack_require__(/*! ./ui */ "./src/config/ui.js"),
  userAgent: __webpack_require__(/*! ./userAgent */ "./src/config/userAgent.js") };


module.exports = config;

/***/ }),

/***/ "./src/config/modals.js":
/*!******************************!*\
  !*** ./src/config/modals.js ***!
  \******************************/
/***/ (function(module) {

/** @module config.modals
 *  @description Core app config
 *  @since 2019.09.10, 14:25
 *  @changed 2020.12.22, 00:32
 */

var modalsConfig = { // Common-used app variables...

  // Id for modals & modals wrapper
  containerId: 'ModalsController',

  // Controller reference (`ModalsController` instance)
  controller: undefined, // Was (before 2021.03.18): `containerNode`

  // Initialized flag
  isInited: false,

  __initPromise: undefined, // See `initPromise` below
  __initPromiseResolve: undefined };




// Delayed initialization (resolving in `ModalsController`)...
modalsConfig.initPromise = new Promise(function (resolve) {
  modalsConfig.__initPromiseResolve = resolve;
});

module.exports = modalsConfig;

/***/ }),

/***/ "./src/config/themes/default.js":
/*!**************************************!*\
  !*** ./src/config/themes/default.js ***!
  \**************************************/
/***/ (function(module) {

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

/***/ "./src/config/ui.js":
/*!**************************!*\
  !*** ./src/config/ui.js ***!
  \**************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "defaultIcons": function() { return /* binding */ defaultIcons; }
/* harmony export */ });
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

/***/ "./src/config/userAgent.js":
/*!*********************************!*\
  !*** ./src/config/userAgent.js ***!
  \*********************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

/** @module config.build
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
    isSafari = /constructor/i.test(String(__webpack_require__.g.HTMLElement));
  }
  catch (error) {} // eslint-disable-line no-empty
  if (!isSafari) {
    var notificationObject = __webpack_require__.g.safari && typeof __webpack_require__.g.safari !== 'undefined' && __webpack_require__.g.safari.pushNotification;
    isSafari = !!notificationObject && String(notificationObject) === '[object SafariRemoteNotification]';
  }
  return isSafari;
}

function detectUserAgent() {

  var agentString = String(__webpack_require__.g.navigator && __webpack_require__.g.navigator.userAgent || 'none');
  // var agentString = getAgentString()
  var document = __webpack_require__.g.document;
  var body = document && document.body /*  || {} */;

  var ua = {};

  ua.ANTGalio = agentString.indexOf('ANTGalio') !== -1;
  ua.WebKit = agentString.indexOf('WebKit') !== -1;

  ua.Opera = !!__webpack_require__.g.opr && !!__webpack_require__.g.opr.addons || !!__webpack_require__.g.opera || agentString.indexOf(' OPR/') != -1;

  // Firefox 1.0+
  ua.Firefox = typeof InstallTrigger !== 'undefined';

  // // Safari 3.0+ "[object HTMLElementConstructor]"
  // ua.Safari = /constructor/i.test(global.HTMLElement) || (function (p) { return p.toString() === "[object SafariRemoteNotification]" })(!global.safari || (typeof global.safari !== 'undefined' && global.safari.pushNotification))
  ua.Safari = detectSafari();

  ua.IE = /*@cc_on!@*/!!(document && document.documentMode);

  // Edge 20+
  ua.Edge = !ua.IE && !!__webpack_require__.g.StyleMedia;

  // Chrome 1 - 71
  ua.Chrome = !!__webpack_require__.g.chrome && (!!__webpack_require__.g.chrome.webstore || !!__webpack_require__.g.chrome.runtime);

  // Blink engine detection
  ua.Blink = (ua.Chrome || ua.Opera) && !!__webpack_require__.g.CSS;

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

/***/ }),

/***/ "./src/elements/DateTimeSelector/DateTimeSelector.jsx":
/*!************************************************************!*\
  !*** ./src/elements/DateTimeSelector/DateTimeSelector.jsx ***!
  \************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/inheritsLoose */ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _utils_configure__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../utils/configure */ "./src/utils/configure.js");
/* harmony import */ var _config_index_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../config/index.js */ "./src/config/index.js");
/* harmony import */ var _config_index_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_config_index_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _utils_lang__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../utils/lang */ "./src/utils/lang.js");
/* harmony import */ var react_datepicker__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-datepicker */ "react-datepicker");
/* harmony import */ var react_datepicker__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react_datepicker__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _utils_dates__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../utils/dates */ "./src/utils/dates.js");
/* harmony import */ var _utils_strings__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../utils/strings */ "./src/utils/strings.js");
/* harmony import */ var date_fns_esm_locale__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! date-fns/esm/locale */ "./node_modules/date-fns/esm/locale/ru/index.js");
/* harmony import */ var react_datepicker_dist_react_datepicker_css__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! react-datepicker/dist/react-datepicker.css */ "./node_modules/react-datepicker/dist/react-datepicker.css");
/* harmony import */ var _DateTimeSelector_pcss__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./DateTimeSelector.pcss */ "./src/elements/DateTimeSelector/DateTimeSelector.pcss");
 /** @module DateTimeSelector
 *  @class DateTimeSelector
 *  @since 2021.01.23, 19:44
 *  @changed 2021.03.17, 15:25
 *
 *  TODO 2020.12.16, 23:07 -- Add hidden html form element (for form submission)
 */
/* eslint-disable react/require-default-props */








// // langUtils.getCommonLangText('cancelButton', 'Cancel', lang)








// Initialize locales...
(0,react_datepicker__WEBPACK_IMPORTED_MODULE_9__.registerLocale)('ru-RU', date_fns_esm_locale__WEBPACK_IMPORTED_MODULE_12__.default);
// TDDO: Register locales in target project (using config data)?





var cnDateTimeSelector = (0,_utils_configure__WEBPACK_IMPORTED_MODULE_6__.cn)('DateTimeSelector');

var defaultDateType = 'number';var

DateTimeSelector = /*#__PURE__*/function (_React$PureComponent) {(0,_babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_2__.default)(DateTimeSelector, _React$PureComponent);






















  // Lifecycle methods...

  function DateTimeSelector(props) {var _this;
    _this = _React$PureComponent.call(this, props) || this;(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_3__.default)((0,_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_1__.default)(_this), "updateTimeListItems",























    function () {// Update time values to period ends (eg, '00:00' -> '00:59' for 1-hour intervals
      var _this$props =







      _this.props,showTime = _this$props.showTime,timeIntervals = _this$props.timeIntervals,isEndDate = _this$props.isEndDate;var _assertThisInitialize = (0,_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_1__.default)(_this),
      domNodeRef = _assertThisInitialize.domNodeRef;
      if (!isEndDate || !showTime || !domNodeRef) {// Do nothing
        return;
      }
      var items = domNodeRef.getElementsByClassName('react-datepicker__time-list-item');
      // console.log('DateTimeSelector:updateTimeListItems', {
      //   showTime,
      //   timeIntervals,
      //   isEndDate,
      //   domNodeRef,
      //   items,
      // });
      items.forEach(function (item) {
        var text = item.innerText;var _text$split$map =
        text.split(':').map(Number),hours = _text$split$map[0],mins = _text$split$map[1];
        mins += timeIntervals - 1;
        if (mins >= 60) {
          hours += Math.ceil(mins - 60);
          mins = mins % 60;
        }
        var resultText = _utils_strings__WEBPACK_IMPORTED_MODULE_11__.padNumber(hours, 2) + ':' + _utils_strings__WEBPACK_IMPORTED_MODULE_11__.padNumber(mins, 2);
        item.innerText = resultText;
      });
    });(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_3__.default)((0,_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_1__.default)(_this), "setDomRef",















































    function (node) {
      _this.domNodeRef = node;
      // console.log(node);
      // debugger;
    });(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_3__.default)((0,_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_1__.default)(_this), "onChange",

    function (value) {
      // const origValue = value;
      var _this$props2 =





      _this.props,selectsRange = _this$props2.selectsRange,onChange = _this$props2.onChange,showTime = _this$props2.showTime,timeIntervals = _this$props2.timeIntervals,isEndDate = _this$props2.isEndDate;var

      dateType =
      _this.state.dateType;
      var setParams;
      var selectedStart = _this.state.selectsStart;
      if (selectsRange) {
        var startDate = _this.state.startDate;
        var endDate = _this.state.endDate;
        if (Array.isArray(value)) {// datepicker v.3: array -- changed day, single value -- changed time
          value = value[0]; // ???
        } else
        {
          selectedStart = !selectedStart; // Re-revert start/end switch
        }
        if (selectedStart) {
          startDate = value;
        } else
        {
          endDate = value;
        }
        setParams = {
          id: _this.id,
          startDate: startDate || _this.state.startDate,
          endDate: endDate || _this.state.endDate,
          selectedStart: selectedStart,
          selectsStart: !selectedStart,
          selectsEnd: selectedStart,
          value: value };

      } else
      {
        setParams = {
          id: _this.id,
          value: value };

        if (_this.state.selectsStart) {
          setParams.startDate = value;
        }
        if (_this.state.selectsEnd) {
          setParams.endDate = value;
        }
      }
      // console.log('DateTimeSelector:onChange', selectsStart ? 'start' : 'end', origValue, setParams);
      _this.setState(setParams);
      if (typeof onChange === 'function') {
        var cbParams = (0,_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__.default)({}, setParams); // Convert date values to target date type...
        ['value', 'startDate', 'endDate'].forEach(function (id) {
          var date = cbParams[id];
          if (date) {
            var isEndDateCombined = id === 'endDate' || id === 'value' && isEndDate;
            var dateObj = _utils_dates__WEBPACK_IMPORTED_MODULE_10__.adjustDateValue(date, isEndDateCombined, showTime, timeIntervals);
            cbParams[id + 'Obj'] = dateObj;
            cbParams[id] = _utils_dates__WEBPACK_IMPORTED_MODULE_10__.convertDateToType(dateObj, dateType);
          }
        });
        // console.log('DateTimeSelector:onChange', cbParams);
        onChange(cbParams);
      }
    });var _value = props.value,_startDate = props.startDate,_endDate = props.endDate,_selectsRange = props.selectsRange,_showTime = props.showTime,_timeIntervals = props.timeIntervals;_this.id = props.id || props.inputId /*  || props.name */;var _dateType = props.dateType || _utils_dates__WEBPACK_IMPORTED_MODULE_10__.detectDateValueType(_value || _startDate || _endDate) || defaultDateType;var selectsStart = _selectsRange && props.selectsStart == null ? true : props.selectsStart;var selectsEnd = _selectsRange && props.selectsEnd == null ? !selectsStart : props.selectsEnd;_this.state = { dateType: _dateType, // value: value && dateUtils.convertToDateObject(value),
      value: _value && _utils_dates__WEBPACK_IMPORTED_MODULE_10__.adjustDateValue(_utils_dates__WEBPACK_IMPORTED_MODULE_10__.convertToDateObject(_value), false, _showTime, _timeIntervals), startDate: _startDate && _utils_dates__WEBPACK_IMPORTED_MODULE_10__.convertToDateObject(_startDate), endDate: _endDate && _utils_dates__WEBPACK_IMPORTED_MODULE_10__.convertToDateObject(_endDate), selectsStart: selectsStart, selectsEnd: selectsEnd };return _this;}var _proto = DateTimeSelector.prototype;_proto.componentDidMount = function componentDidMount() {var _this$props3 = this.props,showTime = _this$props3.showTime,isEndDate = _this$props3.isEndDate;if (isEndDate && showTime) {setTimeout(this.updateTimeListItems, 0); // Delayed update
    }};_proto.componentDidUpdate = function componentDidUpdate(prevProps) {var _this2 = this;var checkDateKeys = ['value', 'startDate', 'endDate'];var hasStateChanges = 0;var setState = {};checkDateKeys.forEach(function (key) {if (_this2.props[key] !== prevProps[key]) {setState[key] = _this2.props[key] && _utils_dates__WEBPACK_IMPORTED_MODULE_10__.convertToDateObject(_this2.props[key]);hasStateChanges++;}}); // console.log('DateTimeSelector:componentDidUpdate', {
    //   hasStateChanges,
    //   prevProps,
    //   props: this.props,
    // });
    if (hasStateChanges) {this.setState(setState);}} // Helper methods...
  ;_proto.getClassName = function getClassName() {var id = this.id;var classList = cnDateTimeSelector({ id: id }, [this.props.className]);return classList;} // Handlers...
  ; // Render...
  _proto.render = function render() {var _this$state =
    this.state,value = _this$state.value,startDate = _this$state.startDate,endDate = _this$state.endDate,selectsStart = _this$state.selectsStart,selectsEnd = _this$state.selectsEnd;var _this$props4 =








    this.props,showTime = _this$props4.showTime,timeIntervals = _this$props4.timeIntervals,selectsRange = _this$props4.selectsRange,calendarClassName = _this$props4.calendarClassName,minDate = _this$props4.minDate,maxDate = _this$props4.maxDate,now = _this$props4.now;
    var lang = _utils_lang__WEBPACK_IMPORTED_MODULE_8__.getLang();
    var langComponents = lang && lang.components || {};
    var locale = langComponents.lang || (_config_index_js__WEBPACK_IMPORTED_MODULE_7___default().app.defaultLocale); // TODO?
    var calendarLang = langComponents.calendar || {};
    // console.log('DateTimeSelector:render', {
    //   value,
    //   startDate,
    //   endDate,
    // });
    // @see https://reactdatepicker.com/
    // @see https://github.com/Hacker0x01/react-datepicker
    var datePickerProps = {
      id: this.id,
      inline: true,
      calendarClassName: calendarClassName,
      locale: locale, // Causes exception `A locale object was not found for the provided string` (use `registerLocale`)
      timeIntervals: timeIntervals,
      timeFormat: (_config_index_js__WEBPACK_IMPORTED_MODULE_7___default().constants.timeFormat),
      dateFormat: (_config_index_js__WEBPACK_IMPORTED_MODULE_7___default().constants.dateFormat),
      onChange: this.onChange,
      selected: value,
      startDate: startDate,
      endDate: endDate,
      minDate: minDate,
      maxDate: maxDate,
      now: now,
      showTimeSelect: showTime,
      selectsRange: selectsRange,
      selectsStart: selectsStart,
      selectsEnd: selectsEnd,
      // TODO: Fetch labels from lang data (lang.components.calendar)...
      timeCaption: calendarLang.timeCaption || 'Time',
      previousYearButtonLabel: calendarLang.previousYearButtonLabel || 'Previous Year',
      nextYearButtonLabel: calendarLang.nextYearButtonLabel || 'Next Year',
      previousMonthButtonLabel: calendarLang.previousMonthButtonLabel || 'Previous Month',
      nextMonthButtonLabel: calendarLang.nextMonthButtonLabel || 'Next Month'
      // onCalendarOpen: this.updateTimeListItems,
      // ref: this.setRef,
    };
    return /*#__PURE__*/(
      react__WEBPACK_IMPORTED_MODULE_4___default().createElement("div", { className: this.getClassName(), ref: this.setDomRef }, /*#__PURE__*/
      react__WEBPACK_IMPORTED_MODULE_4___default().createElement((react_datepicker__WEBPACK_IMPORTED_MODULE_9___default()), datePickerProps)));


  };return DateTimeSelector;}((react__WEBPACK_IMPORTED_MODULE_4___default().PureComponent) /** @lends @DateTimeSelector.prototype */);(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_3__.default)(DateTimeSelector, "propTypes", { calendarClassName: (prop_types__WEBPACK_IMPORTED_MODULE_5___default().string), disabled: (prop_types__WEBPACK_IMPORTED_MODULE_5___default().bool), endDate: prop_types__WEBPACK_IMPORTED_MODULE_5___default().oneOfType([(prop_types__WEBPACK_IMPORTED_MODULE_5___default().string), (prop_types__WEBPACK_IMPORTED_MODULE_5___default().number), prop_types__WEBPACK_IMPORTED_MODULE_5___default().instanceOf(Date)]), id: (prop_types__WEBPACK_IMPORTED_MODULE_5___default().string), inputId: (prop_types__WEBPACK_IMPORTED_MODULE_5___default().string), onChange: (prop_types__WEBPACK_IMPORTED_MODULE_5___default().func), selectsEnd: (prop_types__WEBPACK_IMPORTED_MODULE_5___default().bool), selectsRange: (prop_types__WEBPACK_IMPORTED_MODULE_5___default().bool), selectsStart: (prop_types__WEBPACK_IMPORTED_MODULE_5___default().bool), showTime: (prop_types__WEBPACK_IMPORTED_MODULE_5___default().bool), startDate: prop_types__WEBPACK_IMPORTED_MODULE_5___default().oneOfType([(prop_types__WEBPACK_IMPORTED_MODULE_5___default().string), (prop_types__WEBPACK_IMPORTED_MODULE_5___default().number), prop_types__WEBPACK_IMPORTED_MODULE_5___default().instanceOf(Date)]), timeIntervals: (prop_types__WEBPACK_IMPORTED_MODULE_5___default().number), title: (prop_types__WEBPACK_IMPORTED_MODULE_5___default().string), value: prop_types__WEBPACK_IMPORTED_MODULE_5___default().oneOfType([(prop_types__WEBPACK_IMPORTED_MODULE_5___default().string), (prop_types__WEBPACK_IMPORTED_MODULE_5___default().number), prop_types__WEBPACK_IMPORTED_MODULE_5___default().instanceOf(Date)]) });(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_3__.default)(DateTimeSelector, "defaultProps", { timeIntervals: 60 });



/* harmony default export */ __webpack_exports__["default"] = (DateTimeSelector);

/***/ }),

/***/ "./src/elements/ErrorContainer/ErrorContainer.jsx":
/*!********************************************************!*\
  !*** ./src/elements/ErrorContainer/ErrorContainer.jsx ***!
  \********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/inheritsLoose */ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _utils_configure__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utils/configure */ "./src/utils/configure.js");
/* harmony import */ var _utils_strings__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../utils/strings */ "./src/utils/strings.js");
/* harmony import */ var _ErrorContainer_pcss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ErrorContainer.pcss */ "./src/elements/ErrorContainer/ErrorContainer.pcss");
 /** @module ErrorContainer
 *  @desc Displays error messages
 *  @since 2021.05.07, 14:10
 *  @changed 2021.05.07, 14:10
 */


// import { cn } from '@bem-react/classname';





var cnErrorContainer = (0,_utils_configure__WEBPACK_IMPORTED_MODULE_2__.cn)('ErrorContainer');var

ErrorContainer = /*#__PURE__*/function (_PureComponent) {(0,_babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__.default)(ErrorContainer, _PureComponent);function ErrorContainer() {return _PureComponent.apply(this, arguments) || this;}var _proto = ErrorContainer.prototype;_proto.

  getErrorContent = function getErrorContent(error) {
    // const _origError = error;
    if (Array.isArray(error)) {
      error = error.map(this.getErrorContent, this);
    } else
    if (typeof error !== 'object' || ! /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().isValidElement(error)) {// If not react element...
      // ...prepare text...
      if (error instanceof Error && error.message) {
        error = error.message;
      }
      if (error && typeof error !== 'string') {
        error = String(error);
      }
      if (!error) {// Default message
        error = 'Undefined error'; // TODO: To get error text from languages
      }
      // TODO: To process html text?
      // `strings.html2string`?
      error = _utils_strings__WEBPACK_IMPORTED_MODULE_3__.splitMultiline(error);
    }
    return error;
  };_proto.

  render = function render() {
    var errors = this.props.error || this.props.message || this.props.children;
    if (errors) {
      console.error('ErrorContainer: error', errors); // eslint-disable-line no-console
      // debugger; // eslint-disable-line no-debugger
    }
    var error = this.getErrorContent(errors);
    var className = cnErrorContainer(null, [this.props.className]); // null, ['col-12 bg-danger p-2 mt-2 text-light']);
    return /*#__PURE__*/(
      react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", { className: className },
      error));


  };return ErrorContainer;}(react__WEBPACK_IMPORTED_MODULE_1__.PureComponent);


/* harmony default export */ __webpack_exports__["default"] = (ErrorContainer);

/***/ }),

/***/ "./src/elements/InlineIcon/InlineIcon.jsx":
/*!************************************************!*\
  !*** ./src/elements/InlineIcon/InlineIcon.jsx ***!
  \************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/inheritsLoose */ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _utils_configure__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../utils/configure */ "./src/utils/configure.js");
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ "@fortawesome/react-fontawesome");
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "@fortawesome/free-solid-svg-icons");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _fortawesome_free_regular_svg_icons__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @fortawesome/free-regular-svg-icons */ "@fortawesome/free-regular-svg-icons");
/* harmony import */ var _fortawesome_free_regular_svg_icons__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_free_regular_svg_icons__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @fortawesome/free-brands-svg-icons */ "@fortawesome/free-brands-svg-icons");
/* harmony import */ var _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _InlineIcon_pcss__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./InlineIcon.pcss */ "./src/elements/InlineIcon/InlineIcon.pcss");
 /** @module InlineIcon
 *  @class InlineIcon
 *  @since 2020.10.07, 02:08
 *  @changed 2021.01.25, 03:35
 */



// import connect from 'react-redux/es/connect/connect'







var iconGroups = {
  solid: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_6__,
  regular: _fortawesome_free_regular_svg_icons__WEBPACK_IMPORTED_MODULE_7__,
  brands: _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_8__ };




var cnInlineIcon = (0,_utils_configure__WEBPACK_IMPORTED_MODULE_4__.cn)('InlineIcon');var

InlineIcon = /*#__PURE__*/function (_React$PureComponent) {(0,_babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__.default)(InlineIcon, _React$PureComponent);function InlineIcon() {return _React$PureComponent.apply(this, arguments) || this;}var _proto = InlineIcon.prototype;_proto.










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
    var icons = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_6__;
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
    var content = iconComponent && iconComponent.iconName ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_5__.FontAwesomeIcon, { className: cnInlineIcon('IconImg'), icon: iconComponent }) : iconComponent;

    var renderProps = {
      id: id,
      className: this.getClassName(),
      title: title,
      onClick: onClick
      // key,
    };

    var tagName = tag || 'span';
    var element = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(tagName, renderProps, content);
    return element;
  };return InlineIcon;}((react__WEBPACK_IMPORTED_MODULE_2___default().PureComponent) /** @lends @InlineIcon.prototype */);(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1__.default)(InlineIcon, "propTypes", { id: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().string), theme: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().string), tag: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().string), title: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().string), icon: prop_types__WEBPACK_IMPORTED_MODULE_3___default().oneOfType([(prop_types__WEBPACK_IMPORTED_MODULE_3___default().string), (prop_types__WEBPACK_IMPORTED_MODULE_3___default().object)]), onClick: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().func) });



/* harmony default export */ __webpack_exports__["default"] = (InlineIcon);

/***/ }),

/***/ "./src/elements/Loader/Loader.jsx":
/*!****************************************!*\
  !*** ./src/elements/Loader/Loader.jsx ***!
  \****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utils_configure__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils/configure */ "./src/utils/configure.js");
/* harmony import */ var _utils_lang__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utils/lang */ "./src/utils/lang.js");
/* harmony import */ var _forms_index_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../forms/index.js */ "./src/forms/index.js");
/* harmony import */ var _Loader_pcss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Loader.pcss */ "./src/elements/Loader/Loader.pcss");
/* harmony import */ var _Loader_animation_pcss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Loader-animation.pcss */ "./src/elements/Loader/Loader-animation.pcss");
/* harmony import */ var _Loader_modes_pcss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Loader-modes.pcss */ "./src/elements/Loader/Loader-modes.pcss");
/* harmony import */ var _Loader_themes_pcss__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Loader-themes.pcss */ "./src/elements/Loader/Loader-themes.pcss");
/** @module Loader
 *  @since 2020.10.27, 00:39
 *  @changed 2021.04.22, 00:24
 *
 *  TODO: Place block (and local?) loaders into `ModalsController`?
 */


// import connect from 'react-redux/es/connect/connect'




var cnLoader = (0,_utils_configure__WEBPACK_IMPORTED_MODULE_1__.cn)('Loader');






// eslint-disable-next-line react/prefer-stateless-function
// export default class Loader extends React.PureComponent [>* @lends @Modal.prototype <] {

/** Loader component (FC)
 * @param {Boolean} [show]
 * @param {String} [theme] - Component theme (Light, none)
 * @param {Object} commonLang - Mapped language component
 */
var Loader = function Loader(props) {var

  id =









  props.id,lang = props.lang,className = props.className,mode = props.mode,show = props.show,theme = props.theme,text = props.text,onCancel = props.onCancel,cancelText = props.cancelText;
  var actions = typeof onCancel === 'function' && /*#__PURE__*/
  react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: cnLoader('Actions') }, /*#__PURE__*/
  react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_forms_index_js__WEBPACK_IMPORTED_MODULE_3__.FormGroup, { flow: true, alignItems: "center" }, /*#__PURE__*/
  react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_forms_index_js__WEBPACK_IMPORTED_MODULE_3__.FormButton, {
    plain: true,
    onDark: theme && theme.includes('Dark'),
    text: cancelText || (0,_utils_lang__WEBPACK_IMPORTED_MODULE_2__.getCommonLangText)('cancelButton', 'Cancel', lang),
    icon: "faTimes",
    onClick: onCancel })));




  var thisClassName = cnLoader({ mode: mode, theme: theme, show: show }, [className /* showClass */]);
  var showText = text != null ? text : (0,_utils_lang__WEBPACK_IMPORTED_MODULE_2__.getCommonLangText)('loading', 'Loading...', lang);
  return /*#__PURE__*/(
    react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { id: id, className: thisClassName }, /*#__PURE__*/
    react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: cnLoader('Container') }, /*#__PURE__*/
    react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: cnLoader('Spinner') }), /*#__PURE__*/
    react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: cnLoader('Text') }, showText),
    actions)));



};
/* harmony default export */ __webpack_exports__["default"] = (Loader);

/***/ }),

/***/ "./src/elements/MenuItemSeparator/MenuItemSeparator.jsx":
/*!**************************************************************!*\
  !*** ./src/elements/MenuItemSeparator/MenuItemSeparator.jsx ***!
  \**************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utils_configure__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils/configure */ "./src/utils/configure.js");
/* harmony import */ var _MenuItemSeparator_pcss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./MenuItemSeparator.pcss */ "./src/elements/MenuItemSeparator/MenuItemSeparator.pcss");
/** @module MenuItemSeparator
 *  @class MenuItemSeparator
 *  @since 2021.02.20, 14:33
 *  @changed 2021.02.20, 14:33
 */






var cnMenuItemSeparator = (0,_utils_configure__WEBPACK_IMPORTED_MODULE_1__.cn)('MenuItemSeparator');

var MenuItemSeparator = function MenuItemSeparator(props) {
  return /*#__PURE__*/(
    react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: cnMenuItemSeparator(null, [props.className]) }));

};

/* harmony default export */ __webpack_exports__["default"] = (MenuItemSeparator);

/***/ }),

/***/ "./src/elements/MenuItem/MenuItem.jsx":
/*!********************************************!*\
  !*** ./src/elements/MenuItem/MenuItem.jsx ***!
  \********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/inheritsLoose */ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! redux */ "redux");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _utils_configure__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../utils/configure */ "./src/utils/configure.js");
/* harmony import */ var _config_index_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../config/index.js */ "./src/config/index.js");
/* harmony import */ var _config_index_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_config_index_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _helpers_ActionsContext__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../helpers/ActionsContext */ "./src/helpers/ActionsContext.jsx");
/* harmony import */ var _InlineIcon_index_ts__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../InlineIcon/index.ts */ "./src/elements/InlineIcon/index.ts");
/* harmony import */ var _forms_FormItemHOC_index_ts__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../forms/FormItemHOC/index.ts */ "./src/forms/FormItemHOC/index.ts");
/* harmony import */ var _MenuItem_pcss__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./MenuItem.pcss */ "./src/elements/MenuItem/MenuItem.pcss");
 /** @module MenuItem
 *  @class MenuItem
 *  @since 2020.10.27, 03:05
 *  @changed 2021.04.20, 12:30
 */




// import connect from 'react-redux/es/connect/connect';










var cnMenuItem = (0,_utils_configure__WEBPACK_IMPORTED_MODULE_7__.cn)('MenuItem');var

MenuItem = /*#__PURE__*/function (_React$PureComponent) {(0,_babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_2__.default)(MenuItem, _React$PureComponent);




















  // Lifecycle...

  function MenuItem(props) {var _this;
    _this = _React$PureComponent.call(this, props) || this;(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_3__.default)((0,_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_1__.default)(_this), "onClick",













    function () /* event */{var _this$props =







      _this.props,id = _this$props.id,val = _this$props.val,onClick = _this$props.onClick,actionsContextNode = _this$props.actionsContextNode,disabled = _this$props.disabled,data = _this$props.data;
      if (!disabled) {
        // console.log('MenuItem:onClick', {
        //   id,
        //   val,
        //   onClick,
        //   actionsContextNode, // ActionsContext Provider
        //   disabled,
        // });
        // debugger;
        var hasOnClick = onClick && typeof onClick === 'function';
        var actionProps = {
          // ...event,
          id: id || val,
          val: val,
          component: (0,_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_1__.default)(_this),
          data: data };

        var result = hasOnClick ? onClick(actionProps) : undefined; // true;
        if (result !== false && actionsContextNode && typeof actionsContextNode.onAction === 'function') {
          Promise.resolve(result).then(function (result) {
            if (result !== false) {// Check for non-false value
              actionsContextNode.onAction((0,_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__.default)({}, actionProps, { result: result }));
            }
          });
        }
        _this.setState({ active: true });
        setTimeout(function () {
          if (_this.mounted) {
            _this.setState({ active: false });
          }
        }, (_config_index_js__WEBPACK_IMPORTED_MODULE_8___default().css.transitionTime));
      }
    });_this.state = {};_this.mounted = true; // if (props.setNodeRef) {
    //   props.setNodeRef(this);
    // }
    return _this;}var _proto = MenuItem.prototype;_proto.componentWillUnmount = function componentWillUnmount() {this.mounted = false;} // Event handlers...
  ; // Helper methods...
  _proto.getClassName = function getClassName() {var _this$props2 =









    this.props,id = _this$props2.id,checkable = _this$props2.checkable,hasIcon = _this$props2.hasIcon,icon = _this$props2.icon,checked = _this$props2.checked,disabled = _this$props2.disabled,theme = _this$props2.theme,checkedTheme = _this$props2.checkedTheme,wrap = _this$props2.wrap;
    var className = cnMenuItem({
      id: id,
      checkable: checkable,
      hasIcon: !!(hasIcon || icon || checkable),
      // hasIcon,
      checked: checked,
      disabled: disabled,
      theme: checked && checkedTheme ? checkedTheme : theme,
      wrap: wrap },
    [this.props.className]);
    return className;
  }

  // Render...
  ;_proto.
  renderIconContent = function renderIconContent() {var _this$props3 =





    this.props,hasIcon = _this$props3.hasIcon,checkable = _this$props3.checkable,checked = _this$props3.checked,icon = _this$props3.icon;
    if ((hasIcon || !checkable) && icon || checkable && checked) {
      var iconContent = icon || 'faCheck';
      return iconContent && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default().createElement(_InlineIcon_index_ts__WEBPACK_IMPORTED_MODULE_10__.default, { icon: iconContent, className: cnMenuItem('Icon') });
    }
  };_proto.

  renderTextContent = function renderTextContent() {var _this$props4 =



    this.props,children = _this$props4.children,text = _this$props4.text;
    return /*#__PURE__*/(
      react__WEBPACK_IMPORTED_MODULE_4___default().createElement("div", { className: cnMenuItem('Text') },
      children || text));


  };_proto.

  render = function render() {var _this$props5 =





    this.props,id = _this$props5.id,htmlId = _this$props5.htmlId,setDomRef = _this$props5.setDomRef;

    var renderProps = {
      // id,
      id: htmlId || id,
      className: this.getClassName(),
      onClick: this.onClick,
      ref: setDomRef // Init ref for FormItemHOC
    };

    var iconContent = this.renderIconContent();
    var textContent = this.renderTextContent();

    // console.log('MenuItem:render', val)

    return /*#__PURE__*/(
      react__WEBPACK_IMPORTED_MODULE_4___default().createElement("div", renderProps,
      iconContent,
      textContent));


  };return MenuItem;}((react__WEBPACK_IMPORTED_MODULE_4___default().PureComponent) /** @lends @MenuItem.prototype */);(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_3__.default)(MenuItem, "propTypes", { // setNodeRef: PropTypes.func, // ??? use ref in parent component
  checkable: (prop_types__WEBPACK_IMPORTED_MODULE_5___default().bool), checked: (prop_types__WEBPACK_IMPORTED_MODULE_5___default().bool), checkedTheme: (prop_types__WEBPACK_IMPORTED_MODULE_5___default().string), className: (prop_types__WEBPACK_IMPORTED_MODULE_5___default().string), disabled: (prop_types__WEBPACK_IMPORTED_MODULE_5___default().bool), hasIcon: (prop_types__WEBPACK_IMPORTED_MODULE_5___default().bool), htmlId: (prop_types__WEBPACK_IMPORTED_MODULE_5___default().string), // ???
  icon: prop_types__WEBPACK_IMPORTED_MODULE_5___default().oneOfType([(prop_types__WEBPACK_IMPORTED_MODULE_5___default().string), (prop_types__WEBPACK_IMPORTED_MODULE_5___default().object)]), id: (prop_types__WEBPACK_IMPORTED_MODULE_5___default().string), onClick: (prop_types__WEBPACK_IMPORTED_MODULE_5___default().func), setDomRef: (prop_types__WEBPACK_IMPORTED_MODULE_5___default().func), // From FormItemHOC
  text: (prop_types__WEBPACK_IMPORTED_MODULE_5___default().string), theme: (prop_types__WEBPACK_IMPORTED_MODULE_5___default().string), val: prop_types__WEBPACK_IMPORTED_MODULE_5___default().oneOfType([(prop_types__WEBPACK_IMPORTED_MODULE_5___default().string), (prop_types__WEBPACK_IMPORTED_MODULE_5___default().number)]), wrap: (prop_types__WEBPACK_IMPORTED_MODULE_5___default().bool) });
/* harmony default export */ __webpack_exports__["default"] = ((0,redux__WEBPACK_IMPORTED_MODULE_6__.compose)(
_helpers_ActionsContext__WEBPACK_IMPORTED_MODULE_9__.withActionsContext,
(0,_forms_FormItemHOC_index_ts__WEBPACK_IMPORTED_MODULE_11__.default)({ solid: true, hoverable: true, focusable: true }))(
MenuItem));

/***/ }),

/***/ "./src/elements/Menu/Menu.jsx":
/*!************************************!*\
  !*** ./src/elements/Menu/Menu.jsx ***!
  \************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/inheritsLoose */ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! redux */ "redux");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _utils_configure__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../utils/configure */ "./src/utils/configure.js");
/* harmony import */ var _helpers_ActionsContext__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../helpers/ActionsContext */ "./src/helpers/ActionsContext.jsx");
/* harmony import */ var _MenuItem_index_ts__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../MenuItem/index.ts */ "./src/elements/MenuItem/index.ts");
/* harmony import */ var _MenuItemSeparator_index_ts__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../MenuItemSeparator/index.ts */ "./src/elements/MenuItemSeparator/index.ts");
/* harmony import */ var _Menu_pcss__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./Menu.pcss */ "./src/elements/Menu/Menu.pcss");
 /** @module Menu
 *  @class Menu
 *  @since 2020.10.27, 02:58
 *  @changed 2021.02.15, 18:28
 */




// import connect from 'react-redux/es/connect/connect';









var cnMenu = (0,_utils_configure__WEBPACK_IMPORTED_MODULE_7__.cn)('Menu');

// Unique id counter
var uniqIdCount = 1;var

Menu = /*#__PURE__*/function (_React$PureComponent) {(0,_babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_2__.default)(Menu, _React$PureComponent);var _proto = Menu.prototype;



















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

  createItemElement = function createItemElement(item, n) {
    if (item && item.id === 'separator') {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default().createElement(_MenuItemSeparator_index_ts__WEBPACK_IMPORTED_MODULE_10__.default, { key: 'separator' + n });
    }var _this$props2 =







    this.props,singleChoice = _this$props2.singleChoice,value = _this$props2.value,selected = _this$props2.selected,itemTheme = _this$props2.itemTheme,checkedItemTheme = _this$props2.checkedItemTheme,wrapContent = _this$props2.wrapContent;
    var propsSelected = singleChoice && value != null ? [value] : selected;
    var isArray = !!item && Array.isArray(item);
    var isObject = !!item && typeof item === 'object' && !isArray; // Array.isArray(item)
    var isElement = isObject && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default().isValidElement(item);
    var isMenuItem = isElement && item.type === _MenuItem_index_ts__WEBPACK_IMPORTED_MODULE_9__.default;
    var isRawObject = isObject && !isElement;
    if (isRawObject || isMenuItem) {
      var itemProps = isRawObject ? item : item.props;
      // Construct unique key values...
      var val = itemProps.val;
      var checked = Array.isArray(propsSelected) ? propsSelected.includes(val) : itemProps.checked;
      var checkable = itemProps.checkable != null ? itemProps.checkable : this.props.selectable;
      var newProps = (0,_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__.default)({
        theme: itemTheme,
        checkedTheme: checkedItemTheme,
        wrap: wrapContent,
        text: /* itemProps.text || */itemProps.id || itemProps.val },
      itemProps, {
        onClick: itemProps.onClick || this.onMenuItemClick,
        checkable: checkable,
        checked: checked });

      if (isRawObject) {// Raw object -> create MenuItem
        var key = item && item.key || this.getId() + '_Item_' + (itemProps.val || itemProps.id);
        item = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default().createElement(_MenuItem_index_ts__WEBPACK_IMPORTED_MODULE_9__.default, (0,_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__.default)({}, newProps, { key: key }));
      } else
      if (isMenuItem) {// MenuItem -> Add onClick handler if handler is not defined
        item = (0,_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__.default)({}, item, { props: newProps });
      }
    }
    // TODO: Process arrays (subitems/groups)?
    // console.log('Menu:setChildrenItemsFromProps:item', {
    //   item,
    //   isElement,
    //   isArray,
    //   isObject,
    //   isMenuItem,
    // });
    return item;
  };_proto.

  setChildrenItemsFromProps = function setChildrenItemsFromProps() {
    // console.log('Menu:setChildrenItemsFromProps', {
    //   children,
    // })
    var children = this.props.children;
    var selectedList;
    if (Array.isArray(children)) {
      children = children.map(this.createItemElement, this);
      selectedList = children.
      filter(function (_ref) {var props = _ref.props;
        return props.checked;
      }).
      map(function (_ref2) {var props = _ref2.props;
        return props.val;
      });

    }
    // else {} // If rendered react element?
    this.setState({
      items: children,
      selectedList: selectedList });

    // return children
  };_proto.

  updateChildrenItems = function updateChildrenItems(checkedValStates) {var _this$props3 =
    this.props,id = _this$props3.id,singleChoice = _this$props3.singleChoice,onChange = _this$props3.onChange;var
    items = this.state.items;
    var selectedList = [];
    if (Array.isArray(items)) {
      items = items.map(function (item) {
        var isObject = !!item && typeof item === 'object';
        var isElement = isObject && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default().isValidElement(item);
        var isMenuItem = isElement && item.type === _MenuItem_index_ts__WEBPACK_IMPORTED_MODULE_9__.default;
        if (isMenuItem) {
          var itemProps = item.props;var
          val = itemProps.val,checked = itemProps.checked;
          var checkedVal = checkedValStates[val];
          if (checkedVal == null) {// Check out all other items if single mode
            checkedVal = singleChoice ? false : checked;
          }
          if (checkedVal !== checked) {
            // const theme = (checkedVal && checkedTheme) ? checkedTheme : itemTheme || itemProps.theme;
            item = (0,_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__.default)({}, item, { props: (0,_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__.default)({}, itemProps, { checked: checkedVal /* , theme */ }) });
            // TODO: Use `React.cloneElement`?
          }
          if (checkedVal) {// && (!singleChoice || !selectedList.length)) {
            selectedList.push(val);
          }
        }
        return item;
      });
    }
    this.setState({
      items: items,
      selectedList: selectedList });

    if (typeof onChange === 'function') {
      var params = { id: id, selected: selectedList };
      if (singleChoice && selectedList && selectedList.length) {// Add `val` param if singleChoice mode (and has selected)
        params.value = selectedList[0];
      }
      onChange(params);
    }
  };_proto.

  createUniqId = function createUniqId() {
    return 'Menu' + uniqIdCount++;
  };_proto.

  getId = function getId(props) {
    props = props || this.props;
    return props.id || this.id || (this.id = this.createUniqId());
  }

  // Lifecycle...
  ;
  function Menu(props) {var _this;
    _this = _React$PureComponent.call(this, props) || this;(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_3__.default)((0,_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_1__.default)(_this), "onAction",


















    function (actionProps) {// Event handler for ActionContext consumed children
      var _this$props4 =



      _this.props,id = _this$props4.id,actionsContextNode = _this$props4.actionsContextNode,onAction = _this$props4.onAction;
      var passProps = (0,_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__.default)({}, actionProps, { menuId: id });
      // console.log('Menu:onAction', id, actionProps, passProps);
      // debugger;
      if (typeof onAction === 'function') {
        onAction(passProps);
      }
      // Using chained ActionsContext?
      if (actionsContextNode && typeof actionsContextNode.onAction === 'function') {
        actionsContextNode.onAction(passProps);
      }
    });(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_3__.default)((0,_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_1__.default)(_this), "onMenuItemClick",

    function (_ref3) {var val = _ref3.val;var _this$props5 =
      _this.props,onClick = _this$props5.onClick,singleChoice = _this$props5.singleChoice,disabled = _this$props5.disabled;
      if (!disabled) {var _this$updateChildrenI;var
        selectedList = _this.state.selectedList;
        var setSelected = !selectedList.includes(val);
        if (singleChoice === 'forced' && !setSelected) {// Don not made changes if single mode and clicked item was selected
          return;
        }
        if (typeof onClick === 'function') {// Invoke onClick handler
          onClick({ value: val });
        }
        _this.updateChildrenItems((_this$updateChildrenI = {}, _this$updateChildrenI[val] = setSelected, _this$updateChildrenI)); // Apply items changes
      }
    });_this.state = {};return _this;}_proto.componentDidMount = function componentDidMount() {this.setChildrenItemsFromProps();};_proto.componentDidUpdate = function componentDidUpdate(prevProps) {var prevChildren = prevProps.children;var children = this.props.children;if (prevChildren !== children) {// TODO: To update items states?
      this.setChildrenItemsFromProps();}} // Handlers...
  ; // Render...
  _proto.
  renderContent = function renderContent() {var
    items = this.state.items;
    return items;
  };_proto.

  render = function render() {var _this$props6 =




    this.props,id = _this$props6.id,setDomRef = _this$props6.setDomRef;

    var renderProps = {
      id: id,
      className: this.getClassName(),
      ref: setDomRef // Init ref for FormItemHOC
    };

    var content = this.renderContent();

    return /*#__PURE__*/(
      react__WEBPACK_IMPORTED_MODULE_4___default().createElement("div", renderProps, /*#__PURE__*/
      react__WEBPACK_IMPORTED_MODULE_4___default().createElement(_helpers_ActionsContext__WEBPACK_IMPORTED_MODULE_8__.ActionsContextProvider, { value: this },
      content)));



  };return Menu;}((react__WEBPACK_IMPORTED_MODULE_4___default().PureComponent) /** @lends @Menu.prototype */);(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_3__.default)(Menu, "propTypes", { className: (prop_types__WEBPACK_IMPORTED_MODULE_5___default().string), disabled: (prop_types__WEBPACK_IMPORTED_MODULE_5___default().bool), id: (prop_types__WEBPACK_IMPORTED_MODULE_5___default().string), checkedItemTheme: (prop_types__WEBPACK_IMPORTED_MODULE_5___default().string), itemTheme: (prop_types__WEBPACK_IMPORTED_MODULE_5___default().string), layout: (prop_types__WEBPACK_IMPORTED_MODULE_5___default().string), mode: (prop_types__WEBPACK_IMPORTED_MODULE_5___default().string), // ???
  onChange: (prop_types__WEBPACK_IMPORTED_MODULE_5___default().func), onClick: (prop_types__WEBPACK_IMPORTED_MODULE_5___default().func), selectable: (prop_types__WEBPACK_IMPORTED_MODULE_5___default().bool), selected: prop_types__WEBPACK_IMPORTED_MODULE_5___default().arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_5___default().oneOfType([(prop_types__WEBPACK_IMPORTED_MODULE_5___default().string), (prop_types__WEBPACK_IMPORTED_MODULE_5___default().number)])), setDomRef: (prop_types__WEBPACK_IMPORTED_MODULE_5___default().func), singleChoice: prop_types__WEBPACK_IMPORTED_MODULE_5___default().oneOfType([(prop_types__WEBPACK_IMPORTED_MODULE_5___default().string), (prop_types__WEBPACK_IMPORTED_MODULE_5___default().bool)]), // false, true, 'forced'
  value: prop_types__WEBPACK_IMPORTED_MODULE_5___default().oneOfType([(prop_types__WEBPACK_IMPORTED_MODULE_5___default().string), (prop_types__WEBPACK_IMPORTED_MODULE_5___default().number)]), // ???
  wrapContent: (prop_types__WEBPACK_IMPORTED_MODULE_5___default().bool) });
/* harmony default export */ __webpack_exports__["default"] = ((0,redux__WEBPACK_IMPORTED_MODULE_6__.compose)(
_helpers_ActionsContext__WEBPACK_IMPORTED_MODULE_8__.withActionsContext)(
Menu));
// export default Menu;

/***/ }),

/***/ "./src/elements/ModalPopup/ModalPopup.jsx":
/*!************************************************!*\
  !*** ./src/elements/ModalPopup/ModalPopup.jsx ***!
  \************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FormItemModalPopup": function() { return /* binding */ FormItemModalPopup; }
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/inheritsLoose */ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _utils_configure__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../utils/configure */ "./src/utils/configure.js");
/* harmony import */ var _utils_index_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../utils/index.js */ "./src/utils/index.js");
/* harmony import */ var throttle_debounce__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! throttle-debounce */ "throttle-debounce");
/* harmony import */ var throttle_debounce__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(throttle_debounce__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _forms_FormItemHOC_index_ts__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../forms/FormItemHOC/index.ts */ "./src/forms/FormItemHOC/index.ts");
/* harmony import */ var _ModalPortal_index_ts__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../ModalPortal/index.ts */ "./src/elements/ModalPortal/index.ts");
/* harmony import */ var _config_index_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../config/index.js */ "./src/config/index.js");
/* harmony import */ var _config_index_js__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_config_index_js__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _ModalPopup_pcss__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./ModalPopup.pcss */ "./src/elements/ModalPopup/ModalPopup.pcss");
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









var cnModalPopup = (0,_utils_configure__WEBPACK_IMPORTED_MODULE_6__.cn)('ModalPopup');
var cnModalPopupControl = (0,_utils_configure__WEBPACK_IMPORTED_MODULE_6__.cn)('ModalPopupControl');

var doDebug = /*DEBUG*/ true && (_config_index_js__WEBPACK_IMPORTED_MODULE_11___default().build.DEV_DEBUG) || // DEBUG!
false;

// Debounce delay
var debouncedUpdateGeometryTimeout = /*DEBUG*/doDebug ? 500 :
15;

// Update by timer (0 - disabled), must be above than debounce delay (`debouncedUpdateGeometryTimeout`, above)
var updateGeometryTimerDelay = /*DEBUG*/doDebug ? 0 :
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

ModalPopup = /*#__PURE__*/function (_React$PureComponent) {(0,_babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_2__.default)(ModalPopup, _React$PureComponent);






























  // Properties...








  // From ModalPortal:




  // Lifecycle...

  function ModalPopup(props) {var _this;
    _this = _React$PureComponent.call(this, props) || this;(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_3__.default)((0,_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_1__.default)(_this), "delayedClickTimerHandler", null);(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_3__.default)((0,_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_1__.default)(_this), "globalHandlersRegistered", false);(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_3__.default)((0,_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_1__.default)(_this), "controlNode", null);(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_3__.default)((0,_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_1__.default)(_this), "controlDomNode", null);(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_3__.default)((0,_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_1__.default)(_this), "contentDomNode", null);(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_3__.default)((0,_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_1__.default)(_this), "geometry", {});(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_3__.default)((0,_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_1__.default)(_this), "windowDomNode", null);(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_3__.default)((0,_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_1__.default)(_this), "wrapperDomNode", null);(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_3__.default)((0,_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_1__.default)(_this), "ModalPortal", null);(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_3__.default)((0,_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_1__.default)(_this), "updateGeometryInstant",













































































































































































































































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
      var geometry = (0,_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__.default)({},
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
    });(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_3__.default)((0,_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_1__.default)(_this), "open",














































    function () {return _this.ModalPortal && _this.ModalPortal.open();});(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_3__.default)((0,_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_1__.default)(_this), "close",
    function () {return _this.ModalPortal && _this.ModalPortal.close();});(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_3__.default)((0,_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_1__.default)(_this), "toggle",
    function (open) {return _this.ModalPortal && _this.ModalPortal.toggle(open);});(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_3__.default)((0,_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_1__.default)(_this), "isVisible",
    function () {return _this.ModalPortal && _this.ModalPortal.isVisible();});(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_3__.default)((0,_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_1__.default)(_this), "onActivate",



    function () {
      // console.log('ModalPopup:onActivate');
      setTimeout(_this.updateGeometryInstant, 0);
      _this.hasControlClicked = false; // Reset state
    });(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_3__.default)((0,_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_1__.default)(_this), "onDeactivate",
    function () {
      // console.log('ModalPopup:onDeactivate');
      _this.clearContentGeometry(); // Due to content is destroyed when hidden
    });(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_3__.default)((0,_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_1__.default)(_this), "handleOpenState",

    function (_ref) {var open = _ref.open;
      // console.log('ModalPopup:handleOpenState', open);
      _this.setState({ open: open }, _this.updateOpenOrCloseWithState); // Update own open state
      var _this$props = _this.props,id = _this$props.id,handleOpenState = _this$props.handleOpenState;
      if (typeof handleOpenState === 'function') {
        handleOpenState({ id: id, open: open });
      }
    });(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_3__.default)((0,_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_1__.default)(_this), "setControlNodeRef",

    function (node) {
      _this.controlNode = node;
    });(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_3__.default)((0,_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_1__.default)(_this), "setControlDomRef",
    function (domNode) {
      _this.controlDomNode = domNode;
    });(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_3__.default)((0,_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_1__.default)(_this), "setContentDomRef",
    function (domNode) {
      _this.contentDomNode = domNode;
    });(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_3__.default)((0,_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_1__.default)(_this), "handlePortalOpen",









    function () {
      // console.log('ModalPopup:handlePortalOpen');
      // TODO: Register/unregister popup in `ModalPopupStack`
      // this.updateGeometry()
      _this.registerGlobalHandlers();
    });(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_3__.default)((0,_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_1__.default)(_this), "handlePortalClose",

    function () {
      // TODO: Register/unregister popup in `ModalPopupStack`
      _this.unregisterGlobalHandlers();
      // this.clearContentGeometry() // Due to content is destroyed when hidden
    });(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_3__.default)((0,_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_1__.default)(_this), "updateOpenOrCloseWithState",

    function () {
      if (_this.state.open) {
        _this.handlePortalOpen();
      } else
      {
        _this.handlePortalClose();
      }
    });(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_3__.default)((0,_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_1__.default)(_this), "startOutsideClickWaiting",

    function () {
      _this.isOutsideClickWaiting = true;
      // console.log('ModalPopup:startOutsideClickWaiting');
    });(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_3__.default)((0,_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_1__.default)(_this), "stopOutsideClickWaiting",
    function () {
      _this.isOutsideClickWaiting = false;
      _this.hasControlClicked = false;
      // console.log('ModalPopup:stopOutsideClickWaiting');
    });(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_3__.default)((0,_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_1__.default)(_this), "preventCloseOnOutsideClick",

    function () {var


      noCloseOnControlClick =
      _this.props.noCloseOnControlClick;var _assertThisInitialize = (0,_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_1__.default)(_this),

      hasControlClicked = _assertThisInitialize.hasControlClicked;

      var result = noCloseOnControlClick && hasControlClicked;
      // console.log('ModalPopup:preventCloseOnOutsideClick', {
      //   id,
      //   noCloseOnControlClick,
      //   hasControlClicked,
      //   result,
      // });
      _this.isOutsideClickWaiting = false;
      return result;
    });(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_3__.default)((0,_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_1__.default)(_this), "onControlClick",

    function () /* event */{var _this$props2 =
      _this.props,id = _this$props2.id,disabled = _this$props2.disabled;var
      open = _this.state.open;var _assertThisInitialize2 = (0,_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_1__.default)(_this),
      isOutsideClickWaiting = _assertThisInitialize2.isOutsideClickWaiting;
      // console.log('ModalPopup:onControlClick: pre-check', { id, isOutsideClickWaiting, disabled });
      if (!disabled) {
        if (!isOutsideClickWaiting) {// Prevent re-opening on `closeOnClickOutside`
          var nextOpen = !open;
          // console.log('ModalPopup:onControlClick', { id, nextOpen, open });
          if (nextOpen) {
            if (_this.controlNode) {// Move focus out of control element...
              // this.controlNode.focus && this.controlNode.focus(); // Ensure focus isnt on other element (eg, selects' inner button).
              // console.log('ModalPopup:onControlClick: blur');
              _this.controlNode.blur && _this.controlNode.blur();
            }
            if (_this.controlDomNode) {// Move focus out of control element...
              // this.controlDomNode.focus && this.controlDomNode.focus(); // Ensure focus isnt on other element (eg, selects' inner button).
              _this.controlDomNode.blur && _this.controlDomNode.blur();
            }
          }
          _this.setState({ open: nextOpen }, _this.updateOpenOrCloseWithState); // Update own open state
          // TODO: Notify `ModalsController` when popup opens for closing all other popups from same level (before first modal in popups stack). (Now user can open several popups at the same time.
          var onControlClick = _this.props.onControlClick;
          if (typeof onControlClick === 'function') {
            onControlClick({ id: id, open: nextOpen });
          }
        }
        _this.hasControlClicked = true;
      }
    });(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_3__.default)((0,_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_1__.default)(_this), "renderPortalContent",
































    function (portalProps) {var
      ModalPortal = portalProps.ModalPortal,windowDomNode = portalProps.windowDomNode,wrapperDomNode = portalProps.wrapperDomNode;
      if (ModalPortal) {// Save wrapping ModalPortal instance refernce
        // console.log('ModalPopup:renderPortalContent: updated ModalPortal')
        _this.ModalPortal = ModalPortal; // Save ModalPortal handler (TODO)
        _this.windowDomNode = windowDomNode;
        _this.wrapperDomNode = wrapperDomNode;
      }var _this$props3 =




      _this.props,id = _this$props3.id,popupContent = _this$props3.popupContent,className = _this$props3.contentClassName;
      var renderProps = {
        id: id,
        className: _this.getClassName({ cnCtx: cnModalPopup, className: className }),
        ref: _this.setContentDomRef // Will be used windowDomNode from ModalPortal
      };
      // console.log('ModalPopup:renderPortalContent', {
      //   renderProps,
      //   popupContent,
      // });
      return /*#__PURE__*/(
        react__WEBPACK_IMPORTED_MODULE_4___default().createElement("div", renderProps,
        popupContent));


    });_this.state = { open: null // null -- uninitialized
    };_this.updateGeometry = (0,throttle_debounce__WEBPACK_IMPORTED_MODULE_8__.debounce)(debouncedUpdateGeometryTimeout, _this.updateGeometryInstant);return _this;}var _proto = ModalPopup.prototype;_proto.componentWillUnmount = function componentWillUnmount() {this.unregisterGlobalHandlers();} // Helpers...
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
      var val = rect && rect[key];if (val != null) {var resultKey = id + _utils_index_js__WEBPACK_IMPORTED_MODULE_7__.strings.ucFirst(key);geometry[resultKey] = val;}return geometry;}, {}); // if (this.props.id === 'withMenu' && id === 'control') {
    //   console.log(domNode, rect, domNodeGeometryKeys, geometry)
    //   debugger
    // }
    return geometry || {};};_proto.getGlobalGeometry = function getGlobalGeometry() {var domNode = _config_index_js__WEBPACK_IMPORTED_MODULE_11___default().modals.controller.getDomNode(); // containerNode
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
      return;}var _config$css = (_config_index_js__WEBPACK_IMPORTED_MODULE_11___default().css),popupVerticalOffset = _config$css.popupVerticalOffset,popupWindowOffset = _config$css.popupWindowOffset; // const doubleContentModalPopupGap = popupVerticalOffset * 2 // UNUSED
    var keys = axisKeys[axis];var isVertical = axis === 'vertical'; // Get coordinates...
    var viewSize = geometry[keys.viewSize]; // globalHeight
    var viewPos = geometry[keys.viewPos]; // globalTop
    var controlPos = geometry[keys.controlPos]; // controlTop
    var controlSize = geometry[keys.controlSize]; // controlHeight
    var contentPos = geometry[keys.contentPos]; // contentTop
    var contentSize = geometry[keys.contentSize]; // contentClientHeight
    var storedContentSize = domNode[keys.storedContentSize];var contentMaxSize = storedContentSize || contentSize;if (!storedContentSize || contentSize > storedContentSize) {// Save (maximum) height
      domNode[keys.storedContentSize] = contentSize;} // const viewStart = popupVerticalOffset
    var viewStart = /* viewPos + */popupWindowOffset; // popupVerticalOffset;
    var viewEnd = viewStart + viewSize - popupWindowOffset * 2; // - popupVerticalOffset;
    // Calculate control coordinates...
    var controlScreenPos = controlPos;var controlScreenEnd = controlScreenPos + controlSize;var posNormal = isVertical ? controlScreenEnd + popupVerticalOffset : controlScreenPos;var posReverted = isVertical ? controlScreenPos - popupVerticalOffset : controlScreenEnd;var spaceAfter = viewEnd - posNormal;var spaceBefore = posReverted - viewStart; // Is it better to show content above control?
    // TODO: Alternative calculations for horizontal axis
    // const spaceBefore = isVertical ? controlScreenPos : controlScreenEnd
    // // const spaceEnd = isVertical ? controlScreenAfter : controlScreenPos
    // const spaceAfter = isVertical ? controlScreenAfter : controlScreenPos
    var isntFitBefore = contentMaxSize > spaceBefore;var isntFitAfter = contentMaxSize > spaceAfter;var isMoreSpaceBefore = spaceBefore > spaceAfter;var placeBefore = isMoreSpaceBefore && isntFitAfter;var isntFit = placeBefore ? isntFitBefore : isntFitAfter;var fitSize = placeBefore ? spaceBefore : spaceAfter; // - doubleContentModalPopupGap
    // Calculate `contentPos`...
    var contentPosValue;if (placeBefore) {// Down-up position: from control top -> up
      var fitContentSize = isntFit ? fitSize : contentMaxSize;contentPosValue = posReverted - fitContentSize; // contentPosValue = (controlScreenPos - fitContentSize - popupVerticalOffset)
    } else {// Normal position: from control bottom -> down
      contentPosValue = posNormal; // contentPosValue = (controlScreenEnd + popupVerticalOffset)
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
    } // // DEBUG (use doDebug?)...
    // console.log('ModalPopup:updateOneAxisContentPos', {
    //   // Parameters...
    //   axis,
    //   placeBefore,
    //   isntFit,
    //   // Coordinates...
    //   fitSize,
    //   contentPos,
    //   cssContentPos,
    //   cssContentStyleMaxSize,
    //   // controlScreenPos,
    //   // controlScreenEnd,
    //   // controlScreenAfter,
    //   // General...
    //   updatedGeometryKeys,
    //   geometry: geometry,
    //   'this.geometry': this.geometry,
    //   'changed geometry': Object.entries(geometry).reduce((result, [key, val]) => {
    //     return updatedGeometryKeys.includes(key) ? { ...result, [key]: val } : result;
    //   }, {}),
    //   'changed this.geometry': Object.entries(this.geometry).reduce((result, [key, val]) => {
    //     return updatedGeometryKeys.includes(key) ? { ...result, [key]: val } : result;
    //   }, {}),
    // });
  };_proto.registerGlobalHandlers = function registerGlobalHandlers() {if (!this.globalHandlersRegistered) {this.globalHandlersRegistered = true;document.addEventListener(globalScrollEventName, this.updateGeometry);window.addEventListener(globalResizeEventName, this.updateGeometry);if (!this.updateGeometryTimer && updateGeometryTimerDelay) {this.updateGeometryTimer = setInterval(this.updateGeometry, updateGeometryTimerDelay);}}};_proto.unregisterGlobalHandlers = function unregisterGlobalHandlers() {if (this.globalHandlersRegistered) {this.globalHandlersRegistered = false;document.removeEventListener(globalScrollEventName, this.updateGeometry);window.removeEventListener(globalResizeEventName, this.updateGeometry);if (this.updateGeometryTimer) {clearInterval(this.updateGeometryTimer);this.updateGeometryTimer = null;}}} // Render helpers...
  ;_proto.getClassName = function getClassName(params) {var cnCtx = params.cnCtx,className = params.className;var _this$props4 = this.props,id = _this$props4.id,fullWidth = _this$props4.fullWidth;var open = this.state.open;return cnCtx && cnCtx({ id: id, open: open, fullWidth: fullWidth }, [/* this.props. */className]);} // External methods...
  // Provide ModalPortal public methods...
  ;_proto.clearContentGeometry = function clearContentGeometry() {var _this2 = this; // UNUSED? Must be used on content update (using registrable callback; see example in constructor).
    Object.keys(this.geometry).forEach(function (key) {if (key.startsWith('content')) {_this2.geometry[key] = null;}});}; // Render...
  _proto.renderControl = function renderControl() {var _this$props5 = this.props,id = _this$props5.id,popupControl = _this$props5.popupControl,className = _this$props5.className;var open = this.state.open;var controlClassName = this.getClassName({ cnCtx: cnModalPopupControl, className: className });var renderProps = { id: id, className: controlClassName, setDomRef: this.setControlDomRef // ref: this.setControlDomRef, // For html element (div)
    }; // TODO: Cache modified `popupControl` in state?
    var content = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default().cloneElement(popupControl, (0,_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__.default)({ onClick: this.onControlClick, checked: open, // setDomRef: this.setControlDomRef,
      // ref: this.setControlNodeRef,
      setNodeRef: this.setControlNodeRef }, renderProps));return content;};_proto.renderContent = function renderContent() {var _this3 = this;var portalProps = _ModalPortal_index_ts__WEBPACK_IMPORTED_MODULE_10__.passModalPortalProps.reduce(function (data, id) {var _extends2;return (0,_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__.default)({}, data, (_extends2 = {}, _extends2[id] = _this3.props[id], _extends2));}, {});if (this.state.open != null) {portalProps.open = this.state.open;}Object.assign(portalProps, { handleOpenState: this.handleOpenState, onActivate: this.onActivate, onDeactivate: this.onDeactivate, wrapperTheme: 'SubtleDark', startOutsideClickWaiting: this.startOutsideClickWaiting, stopOutsideClickWaiting: this.stopOutsideClickWaiting, preventCloseOnOutsideClick: this.preventCloseOnOutsideClick });return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default().createElement(_ModalPortal_index_ts__WEBPACK_IMPORTED_MODULE_10__.default, (0,_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__.default)({}, portalProps, { type: "Popup" }), this.renderPortalContent);};_proto.render = function render() {return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default().createElement((react__WEBPACK_IMPORTED_MODULE_4___default().Fragment), null, this.renderControl(), this.renderContent());};return ModalPopup;}((react__WEBPACK_IMPORTED_MODULE_4___default().PureComponent) /** @lends @ModalPopup.prototype */);(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_3__.default)(ModalPopup, "propTypes", { // onEscPressed: PropTypes.func,
  // onKeyPress: PropTypes.func,
  // registerCallback: PropTypes.func, // registerCallback(handler = this.someMethod) -- handler stored by parent component and called when detected click on pulldown menu -- prevents popup content closing
  className: (prop_types__WEBPACK_IMPORTED_MODULE_5___default().string), closeOnClickOutside: (prop_types__WEBPACK_IMPORTED_MODULE_5___default().bool), // For ModalPortal
  closeOnEscPressed: (prop_types__WEBPACK_IMPORTED_MODULE_5___default().bool), // For ModalPortal
  id: (prop_types__WEBPACK_IMPORTED_MODULE_5___default().string), onControlClick: (prop_types__WEBPACK_IMPORTED_MODULE_5___default().func), open: (prop_types__WEBPACK_IMPORTED_MODULE_5___default().bool), popupContent: prop_types__WEBPACK_IMPORTED_MODULE_5___default().oneOfType([(prop_types__WEBPACK_IMPORTED_MODULE_5___default().func), (prop_types__WEBPACK_IMPORTED_MODULE_5___default().object)]).isRequired, popupControl: prop_types__WEBPACK_IMPORTED_MODULE_5___default().oneOfType([(prop_types__WEBPACK_IMPORTED_MODULE_5___default().func), (prop_types__WEBPACK_IMPORTED_MODULE_5___default().object)]).isRequired, setModalPopupNodeRef: (prop_types__WEBPACK_IMPORTED_MODULE_5___default().func), noWrapper: (prop_types__WEBPACK_IMPORTED_MODULE_5___default().bool), // For ModalPortal
  noCloseOnControlClick: (prop_types__WEBPACK_IMPORTED_MODULE_5___default().bool) });(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_3__.default)(ModalPopup, "defaultProps", { // onEscPressed: null,
  // onKeyPress: null,
  // popupContent: null,
  // popupControl: null,
  // registerCallback: null,
  closeOnClickOutside: true, // For ModalPortal
  closeOnEscPressed: true, // For ModalPortal
  noWrapper: true, open: false });/* harmony default export */ __webpack_exports__["default"] = (ModalPopup);var FormItemModalPopup = (0,_forms_FormItemHOC_index_ts__WEBPACK_IMPORTED_MODULE_9__.default)(ModalPopup);

/***/ }),

/***/ "./src/elements/ModalPortal/ModalPortal.jsx":
/*!**************************************************!*\
  !*** ./src/elements/ModalPortal/ModalPortal.jsx ***!
  \**************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "passModalPortalProps": function() { return /* binding */ passModalPortalProps; },
/* harmony export */   "selfCloseActionId": function() { return /* binding */ selfCloseActionId; },
/* harmony export */   "externalCloseActionId": function() { return /* binding */ externalCloseActionId; }
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/inheritsLoose */ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _utils_configure__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../utils/configure */ "./src/utils/configure.js");
/* harmony import */ var react_portal__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-portal */ "react-portal");
/* harmony import */ var react_portal__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_portal__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react_transition_group__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-transition-group */ "react-transition-group");
/* harmony import */ var react_transition_group__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_transition_group__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _config_index_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../config/index.js */ "./src/config/index.js");
/* harmony import */ var _config_index_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_config_index_js__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _utils_strings__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../utils/strings */ "./src/utils/strings.js");
/* harmony import */ var _helpers_ActionsContext__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../helpers/ActionsContext */ "./src/helpers/ActionsContext.jsx");
/* harmony import */ var _Loader_index_ts__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../Loader/index.ts */ "./src/elements/Loader/index.ts");
/* harmony import */ var _ModalPortal_Geometry_pcss__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./ModalPortal-Geometry.pcss */ "./src/elements/ModalPortal/ModalPortal-Geometry.pcss");
/* harmony import */ var _ModalPortal_Themes_pcss__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./ModalPortal-Themes.pcss */ "./src/elements/ModalPortal/ModalPortal-Themes.pcss");
/* harmony import */ var _ModalPortal_Transitions_pcss__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./ModalPortal-Transitions.pcss */ "./src/elements/ModalPortal/ModalPortal-Transitions.pcss");
/* harmony import */ var _ModalPortal_Variants_pcss__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./ModalPortal-Variants.pcss */ "./src/elements/ModalPortal/ModalPortal-Variants.pcss");
 /** @module ModalPortal
 *  @class ModalPortal
 *  @since 2020.12.21, 22:58
 *  @changed 2021.05.07, 14:49
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








// import { withModalsContext } from 'helpers/ModalsContext';

// import InlineIcon from 'elements/InlineIcon'

// import FormButton from 'forms/FormButton'






var cnModalPortal = (0,_utils_configure__WEBPACK_IMPORTED_MODULE_6__.cn)('ModalPortal');

// Event names...
var mouseDownEvent = 'mousedown';
var mouseUpEvent = 'mouseup';
var mouseLeaveEvent = 'mouseleave';
var globalKeyPressEventName = 'keydown';

var delayedHandlerTimeout = 50;

var passModalPortalProps = [// Used to pass external props (eg, from `ModalWindow`)
'id',
'modalId',
'className',
'closeOnClickOutside',
'closeOnEscPressed',
'handleLoaderCancel',
'useLoader',
'loaderTheme',
'loading',
'noWrapper',
// 'noCloseOnControlClick',
'onAction',
'onClickOutside',
'onCloseButtonClick',
'onEscPressed',
'onOpen',
'onClose',
'onActivate',
'onDeactivate',
'onChildAction',
// Additionally all other 'on...' handlers must/can be passed. See `resolveResult`.
'open',
'theme',
'windowClassName',
'windowWidth',
'wrapperClassName',
'wrapperTheme',
'width', // ???
'startOutsideClickWaiting',
'stopOutsideClickWaiting',
'preventCloseOnOutsideClick'];


var selfCloseActionId = '--modal-portal-self-close--';
var externalCloseActionId = '--modal-portal-external-close--';var

ModalPortal = /*#__PURE__*/function (_React$PureComponent) {(0,_babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_2__.default)(ModalPortal, _React$PureComponent);

  // Props...








































  // Instance variables...







  // Resulting action

  // Lifecycle...

  // typeId = 'ModalPortal'

  function ModalPortal(props) {var _this;
    _this = _React$PureComponent.call(this, props) || this;
    // const popupsInited = config.modals.isInited
    (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_3__.default)((0,_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_1__.default)(_this), "isOutsideClickWaiting", false);(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_3__.default)((0,_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_1__.default)(_this), "globalHandlersRegistered", false);(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_3__.default)((0,_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_1__.default)(_this), "globalDomNode", document);(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_3__.default)((0,_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_1__.default)(_this), "wrapperDomNode", null);(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_3__.default)((0,_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_1__.default)(_this), "windowDomNode", null);(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_3__.default)((0,_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_1__.default)(_this), "transitionTime", 0);(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_3__.default)((0,_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_1__.default)(_this), "resolvingResult", null);(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_3__.default)((0,_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_1__.default)(_this), "getId",



























































    function () {return _this.props.id;});(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_3__.default)((0,_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_1__.default)(_this), "getType",
    function () {return _this.props.type;});(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_3__.default)((0,_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_1__.default)(_this), "isVisible",

    function () {return _this.state.open;});(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_3__.default)((0,_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_1__.default)(_this), "activate",

    function (cb) {var _this$props =
      _this.props,id = _this$props.id,modalId = _this$props.modalId,onActivate = _this$props.onActivate;var
      activated = _this.state.activated;
      var done = function done() {
        if (typeof cb === 'function') {
          cb({ id: id, modalId: modalId });
        }
        if (typeof onActivate === 'function') {
          onActivate({ id: id, modalId: modalId });
        }
      };
      if (!activated) {
        // this.resolvingResult = null // Activating in `open` method
        // console.log('ModalPortal:activate', id, activated)
        _this.setState({ activated: true }, done);
        _config_index_js__WEBPACK_IMPORTED_MODULE_9___default().modals.controller.registerModal((0,_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_1__.default)(_this));
      } else
      {
        done();
      }
    });(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_3__.default)((0,_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_1__.default)(_this), "deactivate",

    function () {var _this$props2 =
      _this.props,id = _this$props2.id,modalId = _this$props2.modalId,onDeactivate = _this$props2.onDeactivate;var
      activated = _this.state.activated;
      if (activated) {
        // console.log('ModalPortal:deactivate', id)
        _this.resolveResult(); // `resolvingResult` must be defined?
        if (_this.mounted) {
          _this.setState({ activated: false });
        }
        if (typeof onDeactivate === 'function') {
          onDeactivate({ id: id, modalId: modalId });
        }
        _config_index_js__WEBPACK_IMPORTED_MODULE_9___default().modals.controller.unregisterModal((0,_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_1__.default)(_this));
      }
    });(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_3__.default)((0,_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_1__.default)(_this), "toggle",

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
    });(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_3__.default)((0,_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_1__.default)(_this), "close",

    function () {// External method for using in `ModalPortalStack`
      var prevOpen = _this.state.open;
      // console.log('ModalPortal:close', this.props.id, prevOpen)
      if (prevOpen) {
        _this.setState({ open: false }); // , this.updateShowWithState);
      }
    });(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_3__.default)((0,_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_1__.default)(_this), "open",

    function () {// External method for using in `ModalPortalStack`
      var prevOpen = _this.state.open;
      // console.log('ModalPortal:open', this.props.id, prevOpen);
      if (!prevOpen) {
        var open = true;
        _this.resolvingResult = null; // Reset resolving action
        // First activate portal then enter into opening animation
        _this.activate(function () {
          _this.setState({ open: open }); // , this.updateShowWithState);
        });
        // this.activate(() => this.setState({ open }, this.updateShowWithState)); // ??? WTF?
      }
    });(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_3__.default)((0,_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_1__.default)(_this), "updateGeometry",

    function () {return null;});(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_3__.default)((0,_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_1__.default)(_this), "updateShowWithState",





























































    function (state) {var _ref =
      state || _this.state,open = _ref.open;var _this$props3 =
      _this.props,id = _this$props3.id,modalId = _this$props3.modalId,onOpen = _this$props3.onOpen,onClose = _this$props3.onClose,handleOpenState = _this$props3.handleOpenState;
      if (open) {
        _this.registerGlobalHandlers();
        if (typeof onOpen === 'function') {
          onOpen({ id: id, modalId: modalId });
        }
      } else
      {
        _this.unregisterGlobalHandlers();
        if (typeof onClose === 'function') {
          onClose({ id: id, modalId: modalId });
        }
        setTimeout(_this.deactivate, _this.transitionTime); // TODO?
      }
      if (typeof handleOpenState === 'function') {
        handleOpenState({ id: id, modalId: modalId, open: open });
      }
    });(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_3__.default)((0,_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_1__.default)(_this), "onPopupsInited",

    function () {
      _this.setState({ popupsInited: true });var
      open = _this.props.open;
      if (open) {// Immediately open if passed open status
        // this.activate(() => this.setState({ open: true }))
        _this.activate(function () {return _this.setState({ open: true });}); // , this.updateShowWithState);
      }
    });(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_3__.default)((0,_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_1__.default)(_this), "onAction",






























    function (actionProps) {// Event handler for ActionContext consumed children
      var actionId = actionProps.id;var _this$props4 =
      _this.props,id = _this$props4.id,modalId = _this$props4.modalId,actionsContextNode = _this$props4.actionsContextNode,autoClose = _this$props4.autoClose,closeOnCancelAction = _this$props4.closeOnCancelAction;
      _this.setResult(actionId);
      // console.log('ModalPortal:onAction', id, actionId)
      if (autoClose || closeOnCancelAction && actionId === 'cancel') {// Close and call `resolveResult` when window is closed
        _this.close();
      } else
      {// ...Or all `resolveResult` immediatelly
        _this.resolveResult();
      }
      if (actionsContextNode && typeof actionsContextNode.onAction === 'function') {// Use chaining ActionsContext?
        actionsContextNode.onAction((0,_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__.default)({}, actionProps, { modalPortalId: id, modalId: modalId }));
      }
    });(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_3__.default)((0,_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_1__.default)(_this), "onKeyPress",

    function (event) {var

      key =


      event.key,keyCode = event.keyCode,charCode = event.charCode;var _this$props5 =






      _this.props,id = _this$props5.id,modalId = _this$props5.modalId,onEscPressed = _this$props5.onEscPressed,closeOnEscPressed = _this$props5.closeOnEscPressed,loading = _this$props5.loading;
      // @see https://keycode.info/
      var isEscPressed = key === 'Escape'; // (keyCode === 27);
      var cbProps = { event: event, id: id, modalId: modalId, key: key, keyCode: keyCode, charCode: charCode };
      // console.log('ModalPortal:onKeyPress', cbProps);
      if (isEscPressed && !loading) {
        var isTopmost = _config_index_js__WEBPACK_IMPORTED_MODULE_9___default().modals.controller.isModalTopmostVisible((0,_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_1__.default)(_this));
        // console.log('ModalPortal:onKeyPress', id, isTopmost)
        if (isTopmost) {
          // event.stopPropagation()
          if (closeOnEscPressed) {
            _this.setResult(selfCloseActionId);
            _this.close();
          }
          if (typeof onEscPressed === 'function') {
            onEscPressed(cbProps);
          }
        }
      }
    });(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_3__.default)((0,_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_1__.default)(_this), "stopOutsideClickWaiting",

    function () /* ev */{// Mouse released on window --> cancel waiting for mouse up on wrapper (don't close modal)
      if (_this.stopOutsideClickWaitingDelayedHandler) {
        clearTimeout(_this.stopOutsideClickWaitingDelayedHandler);
        _this.stopOutsideClickWaitingDelayedHandler = null;
      }var _assertThisInitialize = (0,_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_1__.default)(_this),
      globalDomNode = _assertThisInitialize.globalDomNode,windowDomNode = _assertThisInitialize.windowDomNode,mounted = _assertThisInitialize.mounted;var
      stopOutsideClickWaiting = _this.props.stopOutsideClickWaiting;
      if (mounted, _this.isOutsideClickWaiting /* && globalDomNode && windowDomNode */) {
          // console.log('ModalPortal:stopOutsideClickWaiting'[> , { preventClose } <]);
          globalDomNode && globalDomNode.removeEventListener(mouseUpEvent, _this.onOutsideClickCatchedDelayed);
          windowDomNode && windowDomNode.removeEventListener(mouseUpEvent, _this.stopOutsideClickWaiting);
          windowDomNode && windowDomNode.removeEventListener(mouseLeaveEvent, _this.stopOutsideClickWaiting);
          _this.isOutsideClickWaiting = false;
          if (typeof stopOutsideClickWaiting === 'function') {
            setTimeout(stopOutsideClickWaiting, delayedHandlerTimeout);
          }
        }
    });(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_3__.default)((0,_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_1__.default)(_this), "stopOutsideClickWaitingDelayed",
    function () {
      if (_this.stopOutsideClickWaitingDelayedHandler) {
        clearTimeout(_this.stopOutsideClickWaitingDelayedHandler);
      }
      _this.stopOutsideClickWaitingDelayedHandler = setTimeout(_this.stopOutsideClickWaiting, delayedHandlerTimeout);
    });(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_3__.default)((0,_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_1__.default)(_this), "startOutsideClickWaiting",
    function () {// Start waiting for mouse up on wrapper (close modal) or window (continue working)
      var _this$props6 = _this.props,loading = _this$props6.loading,startOutsideClickWaiting = _this$props6.startOutsideClickWaiting;
      var isTopmost = _config_index_js__WEBPACK_IMPORTED_MODULE_9___default().modals.controller.isModalTopmostVisible((0,_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_1__.default)(_this));
      if (!loading && isTopmost) {var _assertThisInitialize2 = (0,_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_1__.default)(_this),
        globalDomNode = _assertThisInitialize2.globalDomNode,windowDomNode = _assertThisInitialize2.windowDomNode;
        // console.log('ModalPortal:startOutsideClickWaiting');
        if (!_this.isOutsideClickWaiting && globalDomNode && windowDomNode) {// Start waiting for
          _this.isOutsideClickWaiting = true;
          globalDomNode && globalDomNode.addEventListener(mouseUpEvent, _this.onOutsideClickCatchedDelayed);
          windowDomNode && windowDomNode.addEventListener(mouseUpEvent, _this.stopOutsideClickWaiting);
          windowDomNode && windowDomNode.addEventListener(mouseLeaveEvent, _this.stopOutsideClickWaiting);
          if (typeof startOutsideClickWaiting === 'function') {
            startOutsideClickWaiting();
          }
        }
      }
    });(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_3__.default)((0,_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_1__.default)(_this), "onOutsideClickCatched",
    function () {// Mouse released on wrapper --> close modal
      var _this$props7 = _this.props,id = _this$props7.id,modalId = _this$props7.modalId,closeOnClickOutside = _this$props7.closeOnClickOutside,onClickOutside = _this$props7.onClickOutside,preventCloseOnOutsideClick = _this$props7.preventCloseOnOutsideClick;
      // console.log('ModalPortal:onOutsideClickCatched', id);
      if (typeof onClickOutside === 'function') {
        onClickOutside({ id: id, modalId: modalId });
      }
      if (closeOnClickOutside) {
        var preventClose = typeof preventCloseOnOutsideClick === 'function' && preventCloseOnOutsideClick();
        // console.log('ModalPortal:onOutsideClickCatched: check', { id, preventClose });
        if (preventClose !== true) {
          _this.setResult(selfCloseActionId);
          _this.close();
        }
      }
      // setTimeout(this.stopOutsideClickWaiting, delayedHandlerTimeout);
      _this.stopOutsideClickWaitingDelayed();
    });(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_3__.default)((0,_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_1__.default)(_this), "onOutsideClickCatchedDelayed",
    function () {
      if (_this.onOutsideClickCatchedDelayedHandler) {
        clearTimeout(_this.onOutsideClickCatchedDelayedHandler);
      }
      _this.onOutsideClickCatchedDelayedHandler = setTimeout(_this.onOutsideClickCatched, delayedHandlerTimeout);
    });(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_3__.default)((0,_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_1__.default)(_this), "onCloseButtonClick",

    function () {// Mouse released on wrapper --> close modal
      var _this$props8 = _this.props,id = _this$props8.id,modalId = _this$props8.modalId,closeWithCloseButton = _this$props8.closeWithCloseButton,onCloseButtonClick = _this$props8.onCloseButtonClick;
      // console.log('ModalPortal:onCloseButtonClick')
      if (closeWithCloseButton) {
        _this.setResult(selfCloseActionId);
        _this.close();
      }
      if (typeof onCloseButtonClick === 'function') {
        onCloseButtonClick({ id: id, modalId: modalId });
      }
    });(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_3__.default)((0,_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_1__.default)(_this), "setWindowDomRef",

    function (domNode) {
      _this.windowDomNode = domNode;
    });(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_3__.default)((0,_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_1__.default)(_this), "setWrapperDomRef",

    function (domNode) {
      _this.wrapperDomNode = domNode;
    });_this.state = { popupsInited: false, activated: false, open: false };_config_index_js__WEBPACK_IMPORTED_MODULE_9___default().modals.initPromise.then(_this.onPopupsInited);_this.transitionTime = (_config_index_js__WEBPACK_IMPORTED_MODULE_9___default().css.modalAnimateTime);_this.modalType = props.type;if (typeof props.setPortalNode === 'function') {props.setPortalNode((0,_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_1__.default)(_this));} /* // UNUSED: Failed `ModalsContext` test implementation; TODO: See ActionsContext as example if required.
     * const {
     *   modalsContainerNode, // ModalsContext Provider
     * } = props
     * console.log(modalsContainerNode)
     * debugger
     */return _this;}var _proto = ModalPortal.prototype;_proto.componentDidMount = function componentDidMount() {this.mounted = true;};_proto.componentWillUnmount = function componentWillUnmount() {if (!this.unregisterGlobalHandlers) {var error = new Error('ModalPortal: unregisterGlobalHandlers method is undefined');console.error(error); // eslint-disable-line no-console
      /*DEBUG*/debugger; // eslint-disable-line no-debugger
      throw error; // ???
    }this.unregisterGlobalHandlers();this.mounted = false;};_proto.componentDidUpdate = function componentDidUpdate(prevProps, prevState) {var _this2 = this;var props = this.props;var state = this.state; // console.log('ModalPortal:componentDidUpdate', {
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
        /*DEBUG*/debugger; // eslint-disable-line no-debugger
        throw error; // ???
      } /* // Update geometry (UNUSED)
       * document.addEventListener(globalScrollEventName, this.updateGeometry)
       * window.addEventListener(globalResizeEventName, this.updateGeometry)
       * if (!this.updateGeometryTimer && updateGeometryTimerDelay) {
       *   this.updateGeometryTimer = setInterval(this.updateGeometry, updateGeometryTimerDelay)
       * }
       */document.addEventListener(globalKeyPressEventName, this.onKeyPress);if (windowDomNode && globalDomNode) {globalDomNode.addEventListener(mouseDownEvent, this.startOutsideClickWaiting);windowDomNode.addEventListener(mouseUpEvent, this.stopOutsideClickWaitingDelayed); // windowDomNode.addEventListener(mouseUpEvent, this.stopOutsideClickWaiting);
      }}};_proto.unregisterGlobalHandlers = function unregisterGlobalHandlers() {var globalDomNode = this.globalDomNode,windowDomNode = this.windowDomNode; // TODO: Check for dom nodes exists during close process
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
      this.stopOutsideClickWaiting();globalDomNode && globalDomNode.removeEventListener(mouseDownEvent, this.startOutsideClickWaiting);windowDomNode && windowDomNode.removeEventListener(mouseUpEvent, this.stopOutsideClickWaitingDelayed); // windowDomNode && windowDomNode.removeEventListener(mouseUpEvent, this.stopOutsideClickWaiting);
      // }
    }};_proto.setResult = function setResult(result) {this.resolvingResult = result;};_proto.resolveResult = function resolveResult() {// Final method on close or on action event with autoClose mode
    var actionId = this.resolvingResult || externalCloseActionId; /* // UNUSED: Throw an error if actionId is undefined
     * if (!actionId) {
     *   const error = new Error('ModalPortal: resolving action is undefined')
     *   console.error(error) // eslint-disable-line no-console
     *   debugger // eslint-disable-line no-debugger
     *   throw error // ???
     * }
     */var _this$props9 = this.props,id = _this$props9.id,modalId = _this$props9.modalId,onAction = _this$props9.onAction;var cbData = { id: actionId, modalId: modalId || id };if (typeof onAction === 'function') {onAction(cbData);}this.resolvingResult = null; // Reset action back
    var cbName = 'on' + _utils_strings__WEBPACK_IMPORTED_MODULE_10__.ucFirst(actionId);var cb = this.props[cbName];if (typeof cb === 'function') {cb(cbData);}} // Handlers...
  ; // Render...
  _proto.renderWindow = function renderWindow() {var _this$props10 = this.props,onChildAction = _this$props10.onChildAction,windowWidth = _this$props10.windowWidth,windowTheme = _this$props10.windowTheme,theme = _this$props10.theme,windowClassName = _this$props10.windowClassName,children = _this$props10.children;var wrapperDomNode = this.wrapperDomNode,windowDomNode = this.windowDomNode; // console.log('ModalPortal:renderWindow', { windowWidth })
    // TODO: Pass windowDomNode to children?
    var childrenProps = { ModalPortal: this, windowDomNode: windowDomNode, wrapperDomNode: wrapperDomNode };var isElement = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default().isValidElement(children);var childrenType = typeof children;var isFunction = childrenType === 'function'; // Extend element or call function with children' props
    var content = isElement ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default().cloneElement(children, childrenProps) : isFunction ? children(childrenProps) : children;if (typeof onChildAction === 'function') {content = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default().createElement(_helpers_ActionsContext__WEBPACK_IMPORTED_MODULE_11__.ActionsContextProvider, { value: { onAction: onChildAction } }, content);}return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default().createElement("div", { className: cnModalPortal('Window', { width: windowWidth, theme: windowTheme || theme }, [windowClassName]), ref: this.setWindowDomRef }, content);};_proto.renderLoader = function renderLoader() {var _this$props11 = this.props,loading = _this$props11.loading,loaderTheme = _this$props11.loaderTheme,handleLoaderCancel = _this$props11.handleLoaderCancel;return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default().createElement(_Loader_index_ts__WEBPACK_IMPORTED_MODULE_12__.default, { mode: "local", theme: loaderTheme, show: loading, onCancel: handleLoaderCancel });};_proto.renderModalPortal = function renderModalPortal() {var _this$props12 = this.props,type = _this$props12.type,id = _this$props12.id,theme = _this$props12.theme,wrapperTheme = _this$props12.wrapperTheme,className = _this$props12.className,wrapperClassName = _this$props12.wrapperClassName,useLoader = _this$props12.useLoader,loading = _this$props12.loading,noWrapper = _this$props12.noWrapper;if (loading && !useLoader) {var error = new Error('ModalPortal: `useLoader` must be enabled for using `loading` prop');console.error(error); // eslint-disable-line no-console
      /*DEBUG*/debugger; // eslint-disable-line no-debugger
      throw error; // ???
    }var open = this.state.open;var realWrapperTheme = noWrapper ? false : wrapperTheme || theme;return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default().createElement(react_transition_group__WEBPACK_IMPORTED_MODULE_8__.CSSTransition, { key: id // id={id}
      , timeout: this.transitionTime, in: open, classNames: cnModalPortal() // Generate animation classes
    }, /*#__PURE__*/
    react__WEBPACK_IMPORTED_MODULE_4___default().createElement("div", {
      key: id,
      className: cnModalPortal({ type: type, id: id, noWrapper: noWrapper }, [className]) // Root node
      , ref: this.setRootDomRef }, /*#__PURE__*/

    react__WEBPACK_IMPORTED_MODULE_4___default().createElement("div", {
      className: cnModalPortal('Wrapper', { theme: realWrapperTheme }, [wrapperClassName]),
      ref: this.setWrapperDomRef },

    this.renderWindow(),
    useLoader && this.renderLoader())));




  };_proto.

  render = function render() {var _this$state =
    this.state,popupsInited = _this$state.popupsInited,activated = _this$state.activated;
    var toDisplay = popupsInited && activated;
    if (!toDisplay) {
      return null;
    }
    var node = _config_index_js__WEBPACK_IMPORTED_MODULE_9___default().modals.controller.getDomNode();
    if (!node) {
      var error = new Error('ModalPortal: Modals domNode is undefined. Don\'t forget to use WebUiCoreRoot with autoModalsController mode or render ModalsController manually.');
      console.error(error); // eslint-disable-line no-console
      /*DEBUG*/debugger; // eslint-disable-line no-debugger
      throw error; // ???
    }
    // console.log('ModalPortal:render', this.props.children)
    return /*#__PURE__*/(
      react__WEBPACK_IMPORTED_MODULE_4___default().createElement(react_portal__WEBPACK_IMPORTED_MODULE_7__.Portal, { node: node },
      this.renderModalPortal()));


  };return ModalPortal;}((react__WEBPACK_IMPORTED_MODULE_4___default().PureComponent) /** @lends @ModalPortal.prototype */);(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_3__.default)(ModalPortal, "propTypes", { useLoader: (prop_types__WEBPACK_IMPORTED_MODULE_5___default().bool), // Use loader (see `loading`)
  loading: (prop_types__WEBPACK_IMPORTED_MODULE_5___default().bool), // Show Loader flashback
  onAction: (prop_types__WEBPACK_IMPORTED_MODULE_5___default().func), // Event fired on action invoked (see `actions` prop)
  // registerCallback: PropTypes.func, // ??? registerCallback(handler = this.someMethod) -- handler stored by parent component and called when detected click on pulldown menu -- prevents popup content closing
  // setModalPortalNodeRef: PropTypes.func, // ??? Demo?
  windowWidth: (prop_types__WEBPACK_IMPORTED_MODULE_5___default().string), // (ModalWindow only?) ModalPortal window width (predefined variants: xs, sm, md, lg, xl, xxl)
  handleLoaderCancel: (prop_types__WEBPACK_IMPORTED_MODULE_5___default().func), // Loader onCancel event handler
  closeOnClickOutside: (prop_types__WEBPACK_IMPORTED_MODULE_5___default().bool), // Close (cancel) modal by click outside modal window (on 'curtain')
  closeOnEscPressed: (prop_types__WEBPACK_IMPORTED_MODULE_5___default().bool), // Close (cancel) modal on esc key pressed
  closeWithCloseButton: (prop_types__WEBPACK_IMPORTED_MODULE_5___default().bool), // Close (cancel) modal by click on header 'Close' button
  id: (prop_types__WEBPACK_IMPORTED_MODULE_5___default().string), // ModalPortal id
  onActivate: (prop_types__WEBPACK_IMPORTED_MODULE_5___default().func), // Event fired on activate (before open)
  onClickOutside: (prop_types__WEBPACK_IMPORTED_MODULE_5___default().func), // Event fired on click outside modal
  onCloseButtonClick: (prop_types__WEBPACK_IMPORTED_MODULE_5___default().func), // Event fired on header 'Close' button click
  onDeactivate: (prop_types__WEBPACK_IMPORTED_MODULE_5___default().func), // Event fired on deactivate (unmounting from dom)
  onEscPressed: (prop_types__WEBPACK_IMPORTED_MODULE_5___default().func), // Event fired on esc key pressed
  onOpen: (prop_types__WEBPACK_IMPORTED_MODULE_5___default().func), // Event fired on modal open
  onClose: (prop_types__WEBPACK_IMPORTED_MODULE_5___default().func), // Event fired on modal close
  handleOpenState: (prop_types__WEBPACK_IMPORTED_MODULE_5___default().func), // Event fired on modal open state change (update external open/close state) ({ open, id } => void)
  open: (prop_types__WEBPACK_IMPORTED_MODULE_5___default().bool), // Show modal by default
  className: (prop_types__WEBPACK_IMPORTED_MODULE_5___default().string), // ModalPortal class name
  windowClassName: (prop_types__WEBPACK_IMPORTED_MODULE_5___default().string), // ModalPortal window class name
  wrapperClassName: (prop_types__WEBPACK_IMPORTED_MODULE_5___default().string), // ModalPortal wrapper class name
  theme: (prop_types__WEBPACK_IMPORTED_MODULE_5___default().string), // ModalPortal theme (default theme for all other themed elements, see `*Theme`)
  windowTheme: (prop_types__WEBPACK_IMPORTED_MODULE_5___default().string), // Window theme (using `theme` if not specified)
  wrapperTheme: (prop_types__WEBPACK_IMPORTED_MODULE_5___default().string), // Wrapper (back-curtain) theme (using `theme` if not specified)
  loaderTheme: (prop_types__WEBPACK_IMPORTED_MODULE_5___default().string), // Loader theme ('MediumDark' is default)
  setPortalNode: (prop_types__WEBPACK_IMPORTED_MODULE_5___default().func), // Get reference to `ModalPortal` instance node
  startOutsideClickWaiting: (prop_types__WEBPACK_IMPORTED_MODULE_5___default().func), stopOutsideClickWaiting: (prop_types__WEBPACK_IMPORTED_MODULE_5___default().func), preventCloseOnOutsideClick: (prop_types__WEBPACK_IMPORTED_MODULE_5___default().func) // onOutsideClickCatched: PropTypes.func,
});(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_3__.default)(ModalPortal, "defaultProps", { loaderTheme: 'MediumDark' });/* harmony default export */ __webpack_exports__["default"] = (ModalPortal); /* // UNUSED: Failed `ModalsContext` test implementation
 * export default compose(
 *   withModalsContext,
 * )(ModalPortal)
 */

/***/ }),

/***/ "./src/elements/ModalProxifiedWindow/ModalProxifiedWindow.js":
/*!*******************************************************************!*\
  !*** ./src/elements/ModalProxifiedWindow/ModalProxifiedWindow.js ***!
  \*******************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _ModalsProxy_index_ts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../ModalsProxy/index.ts */ "./src/elements/ModalsProxy/index.ts");
/* harmony import */ var _config_index_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../config/index.js */ "./src/config/index.js");
/* harmony import */ var _config_index_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_config_index_js__WEBPACK_IMPORTED_MODULE_3__);
 /** @module ModalProxifiedWindow
 *  @class ModalProxifiedWindow
 *  @since 2021.05.27, 14:44
 *  @changed 2021.05.27, 16:57
 */



var

ModalProxifiedWindow = /*#__PURE__*/function () {



  // Unused (no way to receive new props)?



  function ModalProxifiedWindow(props) {var _this = this;(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1__.default)(this, "__updateTimer", []);(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1__.default)(this, "__updateCbQueue", []);(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1__.default)(this, "__newProps", undefined);(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1__.default)(this, "__newState", undefined);(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1__.default)(this, "__mounted", false);(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1__.default)(this, "onDeactivate",










    function (params) {
      _this.__deactivateStateHandler();
      // console.log('ModalProxifiedWindow:onDeactivate', { modalId: this.modalId });
      if (typeof _this.componentWillUnmount == 'function') {
        setTimeout(_this.componentWillUnmount.bind(_this), 0);
      }var
      onDeactivate = _this.props.onDeactivate;
      if (typeof onDeactivate === 'function') {
        // setTimeout(onDeactivate, 0, params);
        onDeactivate(params);
      }
      _ModalsProxy_index_ts__WEBPACK_IMPORTED_MODULE_2__.default.removeModal(_this.modalId);
    });(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1__.default)(this, "__update",



































































































    function () {
      // Reset timer...
      if (_this.__updateTimer) {
        clearTimeout(_this.__updateTimer);
        _this.__updateTimer = null;
      }
      // Save old & set new props...
      var prevProps = _this.props;
      if (_this.__newProps) {
        _this.props = (0,_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__.default)({}, prevProps, _this.__newProps);
        _this.__newProps = undefined;
      }
      // Save old & set new state...
      var prevState = _this.state;
      if (_this.__newState) {
        _this.state = (0,_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__.default)({}, prevState, _this.__newState);
        _this.__newState = undefined;
      }
      // console.log('ModalProxifiedWindow:__update', {
      //   modalId: this.modalId,
      //   props: this.props,
      //   prevProps,
      //   state: this.state,
      //   prevState,
      // });
      // Call all callbacks...
      var cb;
      while ((cb = _this.__updateCbQueue.shift()) != null) {
        setTimeout(cb, 0);
      }
      // Call update handler...
      if (typeof _this.componentDidUpdate === 'function') {
        _this.componentDidUpdate(prevProps, prevState); // TODO: Use `bind`, use `setTimeout`?
      }
      // Make render...
      _this.__render();
    });this.props = props || {};this.modalId = this.props.modalId || this.props.id || this.modalId; // console.log('ModalProxifiedWindow:constructor', {
    //   modalId: this.modalId,
    //   props,
    // });
    setTimeout(this.__activateStateHandler.bind(this), 0); // Initialize state change handler after constructor finished
    this.__restartUpdateTimer(); // Start initial update timer
  }var _proto = ModalProxifiedWindow.prototype; // Store state control...
  _proto.passStateToProps = function passStateToProps(state, mapStateToProps) {if (typeof mapStateToProps !== 'function') {return;}var stateProps = mapStateToProps.call(this, state);var props = this.props; // Detect changes...
    var hasChanges = false;for (var id in stateProps) {if (stateProps[id] !== props[id]) {hasChanges = true;break;}} // console.log('ModalProxifiedWindow:passStateToProps', {
    //   modalId: this.modalId,
    //   state,
    //   props,
    //   hasChanges,
    //   stateProps,
    // });
    if (hasChanges) {this.setProps(stateProps);}};_proto.onStateChangeHandler = function onStateChangeHandler(state) {// console.log('ModalProxifiedWindow:onStateChangeHandler', {
    //   modalId: this.modalId,
    //   mapStateToProps: this.mapStateToProps,
    //   state,
    // });
    this.passStateToProps(state, this.mapStateToProps);};_proto.__activateStateHandler = function __activateStateHandler() {var store = (_config_index_js__WEBPACK_IMPORTED_MODULE_3___default().app.store); // console.log('ModalProxifiedWindow:__activateStateHandler', {
    //   store,
    //   modalId: this.modalId,
    //   mapStateToProps: this.mapStateToProps,
    // });
    if (typeof this.mapStateToProps === 'function') {// Register update handler...
      this.__registered_onStateChangeHandler = this.onStateChangeHandler.bind(this);_ModalsProxy_index_ts__WEBPACK_IMPORTED_MODULE_2__.default.addStoreChangesHandler(this.__registered_onStateChangeHandler); // Set initial state props...
      if (store) {var state = store.getState();this.passStateToProps(state, this.mapStateToProps);}}};_proto.__deactivateStateHandler = function __deactivateStateHandler() {// console.log('ModalProxifiedWindow:__activateStateHandler', {
    //   modalId: this.modalId,
    //   __registered_onStateChangeHandler: this.__registered_onStateChangeHandler,
    // });
    if (this.__registered_onStateChangeHandler) {_ModalsProxy_index_ts__WEBPACK_IMPORTED_MODULE_2__.default.removeStoreChangesHandler(this.__registered_onStateChangeHandler);}} // Render...
  ;_proto.__render = function __render() {var children;if (typeof this.render === 'function') {children = this.render();}var updateProps = (0,_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__.default)({}, this.props, { onDeactivate: this.onDeactivate, children: children }); // console.log('ModalProxifiedWindow:__render', {
    //   modalId: this.modalId,
    //   props: this.props,
    //   updateProps,
    // });
    if (!this.__mounted) {_ModalsProxy_index_ts__WEBPACK_IMPORTED_MODULE_2__.default.addModal(updateProps); // TODO: Use `ModalsProxy.getProxyModalNode(modalId)` & overrided `onComponentDidUpdate`?
      if (typeof this.componentDidMount === 'function') {setTimeout(this.componentDidMount.bind(this), 0);}this.__mounted = true;} else {_ModalsProxy_index_ts__WEBPACK_IMPORTED_MODULE_2__.default.updateModal(this.modalId, updateProps);}} // Update...
  ;_proto.__restartUpdateTimer = function __restartUpdateTimer() {// TODO: Control multiple subsequenced timer restarts? (Force update for n sequential restarts?)
    if (this.__updateTimer) {clearTimeout(this.__updateTimer);this.__updateTimer = null;}this.__updateTimer = setTimeout(this.__update, 20);};_proto.setState = function setState(data, cb) {// console.log('ModalProxifiedWindow:setState', { modalId: this.modalId, data, cb });
    if (typeof data === 'function') {data = data(this.state);}Object.assign(this.__newState || (this.__newState = {}), data);if (typeof cb === 'function') {this.__updateCbQueue.push(cb);}this.__restartUpdateTimer();};_proto.setProps = function setProps(data, cb) {// console.log('ModalProxifiedWindow:setProps', { modalId: this.modalId, data, cb });
    if (typeof data === 'function') {data = data(this.props);}Object.assign(this.__newProps || (this.__newProps = {}), data);if (typeof cb === 'function') {this.__updateCbQueue.push(cb);}this.__restartUpdateTimer();};return ModalProxifiedWindow;}();/* harmony default export */ __webpack_exports__["default"] = (ModalProxifiedWindow);

/***/ }),

/***/ "./src/elements/ModalWindow/ModalWindow.jsx":
/*!**************************************************!*\
  !*** ./src/elements/ModalWindow/ModalWindow.jsx ***!
  \**************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "selfCloseActionId": function() { return /* binding */ selfCloseActionId; },
/* harmony export */   "externalCloseActionId": function() { return /* binding */ externalCloseActionId; }
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/inheritsLoose */ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _utils_configure__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../utils/configure */ "./src/utils/configure.js");
/* harmony import */ var _config_index_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../config/index.js */ "./src/config/index.js");
/* harmony import */ var _config_index_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_config_index_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _ModalPortal_index_ts__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../ModalPortal/index.ts */ "./src/elements/ModalPortal/index.ts");
/* harmony import */ var _InlineIcon_index_ts__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../InlineIcon/index.ts */ "./src/elements/InlineIcon/index.ts");
/* harmony import */ var _forms_FormButton_index_ts__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../forms/FormButton/index.ts */ "./src/forms/FormButton/index.ts");
/* harmony import */ var _forms_FormActions_index_ts__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../forms/FormActions/index.ts */ "./src/forms/FormActions/index.ts");
/* harmony import */ var _helpers_ActionsContext__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../helpers/ActionsContext */ "./src/helpers/ActionsContext.jsx");
/* harmony import */ var _ModalWindow_Geometry_pcss__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./ModalWindow-Geometry.pcss */ "./src/elements/ModalWindow/ModalWindow-Geometry.pcss");
/* harmony import */ var _ModalWindow_Themes_pcss__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./ModalWindow-Themes.pcss */ "./src/elements/ModalWindow/ModalWindow-Themes.pcss");
/* harmony import */ var _ModalWindow_Errors_pcss__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./ModalWindow-Errors.pcss */ "./src/elements/ModalWindow/ModalWindow-Errors.pcss");
 /** @module ModalWindow
 *  @class ModalWindow
 *  @since 2020.12.21, 22:58
 *  @changed 2021.05.17, 15:33
 *
 *  External methods (for PopupStack):
 *  - close
 *  - open
 *  - updateGeometry
 *
 *  TODO 2020.12.29, 21:51 -- Use level mod (increase margins)
 */
/* --eslint-disable no-console */








// import { Provider } from 'react-redux';
// import { app as appConfig } from 'config';










// import './ModalWindow-Transitions.pcss'

var cnModalWindow = (0,_utils_configure__WEBPACK_IMPORTED_MODULE_6__.cn)('ModalWindow');

// const doDebug = [>DEBUG<] false && config.build.DEV_DEBUG || // DEBUG!
//   false

var selfCloseActionId = 'modalSelfClose';
var externalCloseActionId = 'modalExternalClose';var

ModalWindow = /*#__PURE__*/function (_React$PureComponent) {(0,_babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_2__.default)(ModalWindow, _React$PureComponent);function ModalWindow() {var _this;for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {args[_key] = arguments[_key];}_this = _React$PureComponent.call.apply(_React$PureComponent, [this].concat(args)) || this;(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_3__.default)((0,_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_1__.default)(_this), "ModalPortal",


























































    null);(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_3__.default)((0,_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_1__.default)(_this), "handleOpenState",
















    function (_ref) {var open = _ref.open;
      // this.setState({ open })
      var _this$props = _this.props,id = _this$props.id,handleOpenState = _this$props.handleOpenState;
      if (typeof handleOpenState === 'function') {
        handleOpenState({ id: id, open: open });
      }
    });(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_3__.default)((0,_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_1__.default)(_this), "onAction",

    function (actionProps) {// Event handler for ActionContext consumed children
      var _assertThisInitialize = (0,_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_1__.default)(_this),ModalPortal = _assertThisInitialize.ModalPortal;
      if (!ModalPortal) {
        var error = new Error('ModalWindow:onAction: ModalPortal must be defined');
        console.error(error); // eslint-disable-line no-console
        /*DEBUG*/debugger; // eslint-disable-line no-debugger
        throw error; // ???
      }
      var actionId = actionProps.id;var _this$props2 =
      _this.props,open = _this$props2.open,actionsContextNode = _this$props2.actionsContextNode,autoClose = _this$props2.autoClose,closeOnCancelAction = _this$props2.closeOnCancelAction;
      // console.log('ModalWindow:onAction', this.props.id, actionId);
      ModalPortal.setResult(actionId);
      if (open && (autoClose || closeOnCancelAction && actionId === 'cancel')) {// Close and call `resolveResult` when window is closed
        ModalPortal.close();
      } else
      {// ...Or all `resolveResult` immediatelly
        ModalPortal.resolveResult();
      }
      if (actionsContextNode && typeof actionsContextNode.onAction === 'function') {
        actionsContextNode.onAction(actionProps);
      }
    });(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_3__.default)((0,_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_1__.default)(_this), "onCloseButtonClick",

    function () {// Mouse released on wrapper --> close modal
      var _assertThisInitialize2 = (0,_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_1__.default)(_this),ModalPortal = _assertThisInitialize2.ModalPortal;
      if (!ModalPortal) {
        var error = new Error('ModalWindow:onCloseButtonClick: ModalPortal must be defined');
        console.error(error); // eslint-disable-line no-console
        /*DEBUG*/debugger; // eslint-disable-line no-debugger
        throw error; // ???
      }var _this$props3 =
      _this.props,id = _this$props3.id,closeWithCloseButton = _this$props3.closeWithCloseButton,onCloseButtonClick = _this$props3.onCloseButtonClick;
      // console.log('ModalWindow: onCloseButtonClick', id)
      // debugger;
      if (closeWithCloseButton) {
        ModalPortal.setResult(selfCloseActionId);
        ModalPortal.close();
      }
      if (typeof onCloseButtonClick === 'function') {
        onCloseButtonClick({ id: id });
      }
    });(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_3__.default)((0,_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_1__.default)(_this), "setPortalNode",

    function (node) {// Save reference to ModalPortal node
      _this.ModalPortal = node;
    });(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_3__.default)((0,_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_1__.default)(_this), "open",



    function () {return _this.ModalPortal && _this.ModalPortal.open();});(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_3__.default)((0,_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_1__.default)(_this), "close",
    function () {return _this.ModalPortal && _this.ModalPortal.close();});(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_3__.default)((0,_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_1__.default)(_this), "toggle",
    function (open) {return _this.ModalPortal && _this.ModalPortal.toggle(open);});(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_3__.default)((0,_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_1__.default)(_this), "isVisible",
    function () {return _this.ModalPortal && _this.ModalPortal.isVisible();});(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_3__.default)((0,_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_1__.default)(_this), "renderContentError",































































    function (error) {
      if (Array.isArray(error)) {
        return error.
        map(_this.renderContentError).
        filter(function (x) {return x;}).
        map(function (str, n) {
          var key = 'error' + n;
          return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default().createElement("div", { key: key, className: cnModalWindow('ErrorItem') }, str);
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
    });(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_3__.default)((0,_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_1__.default)(_this), "renderWindow",






























    function () /* portalProps */{
      // const { ModalPortal } = portalProps || {} // !!!
      // this.ModalPortal = ModalPortal // Save ModalPortal handler
      // console.log('ModalWindow:renderWindow', this.props.children)
      var content = /*#__PURE__*/
      react__WEBPACK_IMPORTED_MODULE_4___default().createElement((react__WEBPACK_IMPORTED_MODULE_4___default().Fragment), null,
      _this.renderHeader(), /*#__PURE__*/
      react__WEBPACK_IMPORTED_MODULE_4___default().createElement("div", { className: cnModalWindow('Layout') },
      _this.renderLeftContent(), /*#__PURE__*/
      react__WEBPACK_IMPORTED_MODULE_4___default().createElement("div", { className: cnModalWindow('Main') },
      _this.renderContent(),
      _this.renderActions())));





      // // XXX: Wrap with redux provider?
      // const { store } = appConfig; // TODO: Move to `ModalPortal`?
      // if (store) {
      //   content = <Provider store={store}>{content}</Provider>;
      // }
      return content;
    });return _this;}var _proto = ModalWindow.prototype; // Lifecycle...
  _proto.componentDidUpdate = function componentDidUpdate(prevProps, prevState) {var node = this;var props = this.props,state = this.state;var onComponentDidUpdate = this.props.onComponentDidUpdate;if (typeof onComponentDidUpdate === 'function') {onComponentDidUpdate({ node: node, props: props, state: state, prevProps: prevProps, prevState: prevState });}} // Helpers...
  // Handlers...
  ; // Render helpers...
  // Render...
  _proto.renderHeaderIcon = function renderHeaderIcon() {var _this$props4 = this.props,icon = _this$props4.icon,iconTheme = _this$props4.iconTheme;var theme = iconTheme || this.props.theme;var showIcon = icon || theme && (_config_index_js__WEBPACK_IMPORTED_MODULE_7___default().ui.defaultIcons)[theme];return showIcon && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default().createElement("div", { key: "HeaderIcon", className: cnModalWindow('HeaderIcon', { theme: theme }) }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default().createElement(_InlineIcon_index_ts__WEBPACK_IMPORTED_MODULE_9__.default, { theme: theme, icon: showIcon }));};_proto.renderHeaderTitle = function renderHeaderTitle() {var title = this.props.title;return title && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default().createElement("div", { key: "HeaderTitle", className: cnModalWindow('HeaderTitle') }, title);};_proto.renderHeaderCloseButton = function renderHeaderCloseButton() {var showCloseButton = this.props.showCloseButton;return showCloseButton && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default().createElement("div", { key: "HeaderCloseButton", className: cnModalWindow('HeaderCloseButton') }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default().createElement(_forms_FormButton_index_ts__WEBPACK_IMPORTED_MODULE_10__.default, { icon: "faTimes", largeIcon: true, plain: true, title: "Close window" // TODO; Translate?
      , onClick: this.onCloseButtonClick }));};_proto.renderHeader = function renderHeader() {var _this$props5 = this.props,headerTheme = _this$props5.headerTheme,theme = _this$props5.theme;var content = [this.renderHeaderIcon(), this.renderHeaderTitle(), this.renderHeaderCloseButton()].filter(Boolean);var hasHeader = !!(content && content.length);return hasHeader && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default().createElement("div", { className: cnModalWindow('Header', { theme: headerTheme || theme }) }, content);};_proto.renderLeftContent = function renderLeftContent() {var leftContent = this.props.leftContent;return leftContent && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default().createElement("div", { className: cnModalWindow('LeftContent') }, leftContent);};_proto.renderContent = function renderContent() {var _this$props6 = this.props,children = _this$props6.children,contentClassName = _this$props6.contentClassName,error = _this$props6.error; // console.log('ModalWindow:renderContent', children)
    // debugger
    var errorContent = error && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default().createElement("div", { className: cnModalWindow('Error') }, this.renderContentError(error));return children && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default().createElement("div", { className: cnModalWindow('Content', [contentClassName]) }, errorContent, children);};_proto.renderActions = function renderActions() {var actions = this.props.actions; // Allow to treat actions as ids/texts/ list see `FromActions`.
    return actions && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default().createElement(_helpers_ActionsContext__WEBPACK_IMPORTED_MODULE_12__.ActionsContextProvider, { value: this }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default().createElement(_forms_FormActions_index_ts__WEBPACK_IMPORTED_MODULE_11__.default, { className: cnModalWindow('Actions') }, actions));};_proto.render = function render() {var _this2 = this; // Add all custom handler props ('on*')...
    var handlerKeys = Object.keys(this.props).filter(function (id) {return id.startsWith('on') && !_ModalPortal_index_ts__WEBPACK_IMPORTED_MODULE_8__.passModalPortalProps.includes(id);});var portalProps = _ModalPortal_index_ts__WEBPACK_IMPORTED_MODULE_8__.passModalPortalProps.concat(handlerKeys).reduce(function (data, id) {var _extends2;return (0,_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__.default)({}, data, (_extends2 = {}, _extends2[id] = _this2.props[id], _extends2));}, {});Object.keys(this.props).
    filter(function (id) {return id.startsWith('on');}).
    forEach(function (id) {
      portalProps[id] = _this2.props[id];
    });

    Object.assign(portalProps, {
      handleOpenState: this.handleOpenState
      // onActivate: this.onActivate,
      // onDeactivate: this.onDeactivate,
      // wrapperTheme: 'SubtleDark',
    });
    // console.log('ModalWindow:render', this.props.children)
    // NOTE: Use arrow function to force update modal content
    return /*#__PURE__*/(
      react__WEBPACK_IMPORTED_MODULE_4___default().createElement(_ModalPortal_index_ts__WEBPACK_IMPORTED_MODULE_8__.default, (0,_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__.default)({}, portalProps, { type: "Window", setPortalNode: this.setPortalNode }),
      this.renderWindow()));


  };return ModalWindow;}((react__WEBPACK_IMPORTED_MODULE_4___default().PureComponent) /** @lends @ModalWindow.prototype */);(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_3__.default)(ModalWindow, "propTypes", { // registerCallback: PropTypes.func, // ??? registerCallback(handler = this.someMethod) -- handler stored by parent component and called when detected click on pulldown menu -- prevents popup content closing
  // setModalNodeRef: PropTypes.func, // ??? Demo?
  actions: prop_types__WEBPACK_IMPORTED_MODULE_5___default().oneOfType([(prop_types__WEBPACK_IMPORTED_MODULE_5___default().array), (prop_types__WEBPACK_IMPORTED_MODULE_5___default().object)]), // Actions component(s) (TODO: `ActionsContext` must be used)
  className: (prop_types__WEBPACK_IMPORTED_MODULE_5___default().string), // ModalWindow class name
  closeOnCancelAction: (prop_types__WEBPACK_IMPORTED_MODULE_5___default().bool), // Auto-close on `cancel` action event
  closeOnClickOutside: (prop_types__WEBPACK_IMPORTED_MODULE_5___default().bool), // Close (cancel) modal by click outside modal window (on 'curtain')
  closeOnEscPressed: (prop_types__WEBPACK_IMPORTED_MODULE_5___default().bool), // Close (cancel) modal on esc key pressed
  closeWithCloseButton: (prop_types__WEBPACK_IMPORTED_MODULE_5___default().bool), // Close (cancel) modal by click on header 'Close' button
  contentClassName: (prop_types__WEBPACK_IMPORTED_MODULE_5___default().string), // Content element class name
  error: prop_types__WEBPACK_IMPORTED_MODULE_5___default().oneOfType([(prop_types__WEBPACK_IMPORTED_MODULE_5___default().string), prop_types__WEBPACK_IMPORTED_MODULE_5___default().arrayOf((prop_types__WEBPACK_IMPORTED_MODULE_5___default().string))]), // Error(s) strings to display above content
  handleLoaderCancel: (prop_types__WEBPACK_IMPORTED_MODULE_5___default().func), // Loader onCancel event handler
  handleOpenState: (prop_types__WEBPACK_IMPORTED_MODULE_5___default().func), // Event fired on modal open state change (update external open/close state) ({ open, id } => void)
  headerTheme: (prop_types__WEBPACK_IMPORTED_MODULE_5___default().string), // Header theme (using `theme` if not specified)
  icon: prop_types__WEBPACK_IMPORTED_MODULE_5___default().oneOfType([(prop_types__WEBPACK_IMPORTED_MODULE_5___default().string), (prop_types__WEBPACK_IMPORTED_MODULE_5___default().object)]), // Show icon in header
  iconTheme: (prop_types__WEBPACK_IMPORTED_MODULE_5___default().string), // Icon theme (using `theme` if not specified)
  id: (prop_types__WEBPACK_IMPORTED_MODULE_5___default().string), // ModalWindow id
  leftContent: prop_types__WEBPACK_IMPORTED_MODULE_5___default().oneOfType([(prop_types__WEBPACK_IMPORTED_MODULE_5___default().string), (prop_types__WEBPACK_IMPORTED_MODULE_5___default().object)]), // Content at left of main content and actions (ideal place for large visual icon)
  loaderTheme: (prop_types__WEBPACK_IMPORTED_MODULE_5___default().string), // Loader theme ('MediumDark' is default)
  loading: (prop_types__WEBPACK_IMPORTED_MODULE_5___default().bool), // Show Loader flashback
  onAction: (prop_types__WEBPACK_IMPORTED_MODULE_5___default().func), // Event fired on action invoked (see `actions` prop)
  onActivate: (prop_types__WEBPACK_IMPORTED_MODULE_5___default().func), // Event fired on activate (before open)
  onClickOutside: (prop_types__WEBPACK_IMPORTED_MODULE_5___default().func), // Event fired on click outside modal
  onClose: (prop_types__WEBPACK_IMPORTED_MODULE_5___default().func), // Event fired on modal close
  onCloseButtonClick: (prop_types__WEBPACK_IMPORTED_MODULE_5___default().func), // Event fired on header 'Close' button click
  onDeactivate: (prop_types__WEBPACK_IMPORTED_MODULE_5___default().func), // Event fired on deactivate (unmounting from dom)
  onEscPressed: (prop_types__WEBPACK_IMPORTED_MODULE_5___default().func), // Event fired on esc key pressed
  onOpen: (prop_types__WEBPACK_IMPORTED_MODULE_5___default().func), // Event fired on modal open
  open: (prop_types__WEBPACK_IMPORTED_MODULE_5___default().bool), // Show modal by default
  showCloseButton: (prop_types__WEBPACK_IMPORTED_MODULE_5___default().bool), // Display close button in header
  theme: (prop_types__WEBPACK_IMPORTED_MODULE_5___default().string), // ModalWindow theme (default theme for all other themed elements, see `*Theme`)
  title: (prop_types__WEBPACK_IMPORTED_MODULE_5___default().string), // ModalWindow title
  useLoader: (prop_types__WEBPACK_IMPORTED_MODULE_5___default().bool), width: (prop_types__WEBPACK_IMPORTED_MODULE_5___default().string), // ModalWindow window width (predefined variants: xs, sm, md, lg, xl, xxl)
  windowClassName: (prop_types__WEBPACK_IMPORTED_MODULE_5___default().string), // ModalWindow window class name
  windowTheme: (prop_types__WEBPACK_IMPORTED_MODULE_5___default().string), // Window theme (using `theme` if not specified)
  wrapperClassName: (prop_types__WEBPACK_IMPORTED_MODULE_5___default().string), // ModalWindow wrapper class name
  wrapperTheme: (prop_types__WEBPACK_IMPORTED_MODULE_5___default().string) // Wrapper (back-curtain) theme (using `theme` if not specified)
});(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_3__.default)(ModalWindow, "defaultProps", { closeOnClickOutside: true, // Close (with `selfCloseActionId` action id) modal by outisde-click.
  closeOnEscPressed: true, // Close (with `selfCloseActionId` action id) modal by esc-key.
  closeWithCloseButton: true, // Close (with `selfCloseActionId` action id) with 'Close button' (if present in layout -- see `showCloseButton`)
  loaderTheme: 'MediumDark', loading: false, open: false, showCloseButton: false, // Display 'Close button'?
  useLoader: false, wrapperTheme: 'MediumDark' });/* harmony default export */ __webpack_exports__["default"] = (ModalWindow);

/***/ }),

/***/ "./src/elements/ModalsController/ModalsController.jsx":
/*!************************************************************!*\
  !*** ./src/elements/ModalsController/ModalsController.jsx ***!
  \************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/inheritsLoose */ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_portal__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-portal */ "react-portal");
/* harmony import */ var react_portal__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_portal__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _utils_configure__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../utils/configure */ "./src/utils/configure.js");
/* harmony import */ var _config_index_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../config/index.js */ "./src/config/index.js");
/* harmony import */ var _config_index_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_config_index_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _ErrorContainer_ErrorContainer__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../ErrorContainer/ErrorContainer */ "./src/elements/ErrorContainer/ErrorContainer.jsx");
/* harmony import */ var react_error_boundary__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react-error-boundary */ "react-error-boundary");
/* harmony import */ var react_error_boundary__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react_error_boundary__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _ModalWindow_index_ts__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../ModalWindow/index.ts */ "./src/elements/ModalWindow/index.ts");
/* harmony import */ var _ModalsController_pcss__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./ModalsController.pcss */ "./src/elements/ModalsController/ModalsController.pcss");
 /** @module ModalsController
 *  @class ModalsController
 *  @desc Modals dom container & controller interface object
 *  @since 2020.12.21, 23:37
 *  @changed 2021.05.27, 14:03
 */








// import { Provider } from 'react-redux';
// import { app as appConfig } from 'config';





var cnModalsController = (0,_utils_configure__WEBPACK_IMPORTED_MODULE_7__.cn)('ModalsController');

// const doDebug = false // DEBUG!
var
ModalsController = /*#__PURE__*/function (_React$PureComponent) {(0,_babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_2__.default)(ModalsController, _React$PureComponent);





  // Internal variables...






  // Lifecycle...

  // UNUSED lifecycle methods
  function ModalsController(_props) {var _this;
    _this = _React$PureComponent.call(this, _props) || this;(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_3__.default)((0,_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_1__.default)(_this), "domNode", undefined);(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_3__.default)((0,_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_1__.default)(_this), "modalsStack", []);(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_3__.default)((0,_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_1__.default)(_this), "modalWindows", []);(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_3__.default)((0,_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_1__.default)(_this), "proxyModalNodes", {});(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_3__.default)((0,_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_1__.default)(_this), "setRef",






































    function (domNode) {// Get dom node reference. Used as portals root (with `config.modals.controller.getDomNode()`).
      // console.log('ModalsController:setRef', { domNode });
      _this.domNode = domNode;
      // config.modals.domNode = domNode;
    });(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_3__.default)((0,_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_1__.default)(_this), "onCatchedError",

    function (error) {// Error handler
      var errorMessage = error && (error.message || error.reason);
      console.error('ModalsController:onCatchedError', errorMessage, error); // eslint-disable-line no-console
      debugger; // eslint-disable-line no-debugger
      // this.setState({ errors: error });
      // this.props.setErrorNotify(error);
      throw error;
    });(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_3__.default)((0,_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_1__.default)(_this), "registerModal",







    function (modal /*: React.ReactNode*/) {// Add item to modals stack
      // console.log('ModalsController:registerModal', modal.props.type, modal.props.id);
      // debugger;
      if (!_this.modalsStack.includes(modal)) {// Add to stack if not exist
        _this.modalsStack.push(modal);
      }
    });(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_3__.default)((0,_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_1__.default)(_this), "unregisterModal",

    function (modal /*: React.ReactNode*/) {// Remove item from modals stack
      // console.log('ModalsController:unregisterModal', modal.props.type, modal.props.id)
      // debugger;
      var idx = _this.modalsStack.indexOf(modal);
      if (idx !== -1) {// Remove if found...
        _this.modalsStack.splice(idx, 1);
      }
    });(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_3__.default)((0,_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_1__.default)(_this), "getModalById",

    /*: React.ReactNode*/function (id) {
      for (var n = _this.modalsStack.length - 1; n >= 0; n--) {
        var modal = _this.modalsStack[n];
        var modalId = modal && modal.props && modal.props.id;
        if (modalId && modalId === id) {
          return modal;
        }
      }
      return true;
    });(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_3__.default)((0,_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_1__.default)(_this), "getTopmostVisibleModal",

    function () {// Get topmost modal element
      // Look for items from last (topmost) to first (bottommost) for first visible
      for (var n = _this.modalsStack.length - 1; n >= 0; n--) {
        var modal = _this.modalsStack[n];
        var isVisible = modal.isVisible();
        if (isVisible) {
          return modal;
        }
      }
    });(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_3__.default)((0,_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_1__.default)(_this), "isModalTopmostVisible",

    function (modal) {// Is modal modal element is top-most visible?
      var topmost = _this.getTopmostVisibleModal();
      return modal === topmost;
    });(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_3__.default)((0,_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_1__.default)(_this), "setPortalProxyRef",



    function (ref) {
      _this.PortalProxy = ref;
    });(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_3__.default)((0,_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_1__.default)(_this), "saveProxyModalNode",
















































































    function (node) {
      var props = node && node.props || {};
      var id = props.modalId || props.id;
      if (id) {
        _this.proxyModalNodes[id] = node;
      }
      // console.log('ModalsController:saveProxyModalNode', id, node);
      // debugger;
    });(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_3__.default)((0,_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_1__.default)(_this), "removeProxyModalNode",

    function (id) {
      if (typeof id === 'object' && id.props) {
        id = id.props.modalId || id.props.id;
      }
      // console.log('ModalsController:removeProxyModalNode', id);
      // debugger;
      var modalNode = _this.proxyModalNodes[id];
      if (modalNode) {
        if (typeof modalNode.onRemove === 'function') {
          modalNode.onRemove();
        }
        delete _this.proxyModalNodes[id];
      }
    });(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_3__.default)((0,_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_1__.default)(_this), "getProxyModalNode",

    function (id) {
      if (_this.proxyModalNodes[id]) {
        return _this.proxyModalNodes[id];
      }
    });_this.state = { proxyModalsList: [] // Active proxy modals list; see `...ProxyModal...` functionality below
    };return _this;}var _proto = ModalsController.prototype;_proto.componentDidMount = function componentDidMount() {// Uncaught errors handler...
    this.__saved_onunhandledrejection = window.onunhandledrejection;this.__saved_onerror = window.onerror;window.onunhandledrejection = this.onCatchedError;window.onerror = this.onCatchedError; // this.registerGlobalHandlers()
    // Initialize global references & parameters...
    if (typeof _config_index_js__WEBPACK_IMPORTED_MODULE_8__.modals.__initPromiseResolve == 'function') {_config_index_js__WEBPACK_IMPORTED_MODULE_8__.modals.__initPromiseResolve();}_config_index_js__WEBPACK_IMPORTED_MODULE_8__.modals.isInited = true;_config_index_js__WEBPACK_IMPORTED_MODULE_8__.modals.controller = this; /* // UNUSED: Old method to obtain dom node re3ference (see setRef below).
     * // eslint-disable-next-line react/no-find-dom-node
     * const domNode = ReactDOM.findDOMNode(this); // TODO: Find alternate legal method to get dom node? (refs doesn't works due to high-level element (`TransitionGroup`) rendering)
     * // console.log('ModalsController:componentDidMount', { domNode });
     * this.domNode = domNode;
     * config.modals.domNode = domNode;
     */};_proto.componentWillUnmount = function componentWillUnmount() {// this.unregisterGlobalHandlers()
    // Reset uncaught errors handler...
    window.onunhandledrejection = this.__saved_onunhandledrejection;window.onerror = this.__saved_onerror;} // Handlers...
  ; // External methods...
  _proto.getDomNode = function getDomNode() {// Get dom node
    return this.domNode || document.body;}; // External proxy methods...
  _proto.updateProxyModalsList = function updateProxyModalsList(proxyModalsList) {this.setState({ proxyModalsList: proxyModalsList });} /* DEPRECATED: Moved to ModalProxy...
  addProxyModal(modalData) {
    modalData = {
      key: id,
      id: id,
      ...modalData,
      onDeactivate: this.onProxyModalDeactivate,
    };
    const id = modalData.modalId; // || 'modal' + n;
    // TODO: Check not-empty id and id uniqueness
    if (!id || this.getProxyModal(id)) {
      const error = new Error('An unique modalId must be specified');
      console.error('ModalsController:addProxyModal: error', { error, modalData }); // eslint-disable-line no-console
      debugger; // eslint-disable-line no-debugger
      throw error;
    }
    this.setState(({ proxyModalsList }) => {
      return { proxyModalsList: proxyModalsList.concat(modalData) };
    });
  }
  removeProxyModal(modalId) {
    // TODO: Call some actions (on close modal)?
    this.setState(({ proxyModalsList }) => {
      proxyModalsList = proxyModalsList.filter(modalData => modalData.modalId !== modalId);
      return { proxyModalsList };
    });
  }
  getProxyModal(modalId) {
    const { proxyModalsList } = this.state;
    const found = proxyModalsList.find(modalData => modalData.modalId === modalId);
    return found;
  }
  isProxyModalExists(modalId) {
    const found = this.getProxyModal(modalId);
    return !!found;
  }
  updateProxyModal(modalId, options) {
    this.setState(({ proxyModalsList }) => {
      const foundIdx = proxyModalsList.findIndex(modalData => modalData.modalId === modalId);
      if (foundIdx !== -1) {
        const modalData = proxyModalsList[foundIdx];
        // Clone array...
        const newModals = proxyModalsList.slice();
        const newModalData = { ...modalData, ...options };
        newModals[foundIdx] = newModalData;
        return { proxyModalsList: newModals };
      }
    });
  }
  onProxyModalDeactivate = (data) => {
    let { modalId, id } = data;
    modalId = modalId || id;
    const modal = this.getProxyModal(modalId);
    if (!modal) {
      const error = new Error('Proxy modal not found for modalId="' + modalId + '"');
      console.error('ModalsController:onProxyModalDeactivate: error', { error, modalId }); // eslint-disable-line no-console
      debugger; // eslint-disable-line no-debugger
      throw error;
    }
    const { onDeactivate, onModalDeactivate } = modal;
    console.log('RulesModals:onModalDeactivate', { modalId, modal });
    // debugger;
    this.removeProxyModal(modalId);
    // Use try/catch?
    if (typeof onDeactivate === 'function') {
      onDeactivate(data);
    }
    if (typeof onModalDeactivate === 'function') {
      onModalDeactivate(data);
    }
  }
  */;_proto.renderProxyModal = function renderProxyModal(modalData /* , n */) {// const id = modalData.modalId; // || 'modal' + n;
    // // Non-empty unique id ensured in `addProxyModal`
    // const modalProps = {
    //   key: id,
    //   id: id,
    //   ...modalData,
    //   onDeactivate: this.onProxyModalDeactivate,
    // };
    // return <ModalWindow {...modalProps} />;
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement(_ModalWindow_index_ts__WEBPACK_IMPORTED_MODULE_11__.default, (0,_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__.default)({}, modalData, { ref: this.saveProxyModalNode }));};_proto.renderProxyModals = function renderProxyModals() {var proxyModalsList = this.state.proxyModalsList;return proxyModalsList.map(this.renderProxyModal, this);} // Render...
  ;_proto.renderModalsController = function renderModalsController() {var containerId = _config_index_js__WEBPACK_IMPORTED_MODULE_8__.modals.containerId;var className = cnModalsController(null, [this.props.className /* , cnModalsController('TransitionGroup') */]);var renderProps = { key: containerId || 'ModalsController', id: containerId, className: className, ref: this.setRef // Get dom node handler
    }; /* // UNUSED: Failed `ModalsContext` test implementation
     * return (
     *   <ModalsContextProvider value={this}>
     *     <div {...renderProps} />
     *   </ModalsContextProvider>
     * )
     */return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement(react_error_boundary__WEBPACK_IMPORTED_MODULE_10__.ErrorBoundary, { FallbackComponent: _ErrorContainer_ErrorContainer__WEBPACK_IMPORTED_MODULE_9__.default, onError: this.onCatchedError }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement("div", renderProps, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement("div", { className: cnModalsController('PortalProxy'), ref: this.setPortalProxyRef }, this.renderProxyModals())));};_proto.render = function render() {var content = this.renderModalsController();var usePortal = this.props.usePortal; // const { store } = appConfig;
    // if (store) {
    //   content = <Provider store={store}>{content}</Provider>;
    // }
    if (usePortal) {// console.log('ModalsController:render', {
      //   store,
      //   Provider,
      // });
      var node = document.body; // Render as new node in top level of dom tree
      content = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement(react_portal__WEBPACK_IMPORTED_MODULE_6__.Portal, { node: node }, content);}return content;};return ModalsController;}(react__WEBPACK_IMPORTED_MODULE_4__.PureComponent /** @lends @ModalsController.prototype */);(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_3__.default)(ModalsController, "propTypes", { usePortal: prop_types__WEBPACK_IMPORTED_MODULE_5__.bool // Render container at end of dom tree root level
});/* harmony default export */ __webpack_exports__["default"] = (ModalsController);

/***/ }),

/***/ "./src/elements/ModalsProxy/ModalsProxy.js":
/*!*************************************************!*\
  !*** ./src/elements/ModalsProxy/ModalsProxy.js ***!
  \*************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _config_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../config/index.js */ "./src/config/index.js");
/* harmony import */ var _config_index_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_config_index_js__WEBPACK_IMPORTED_MODULE_2__);
 /** @module ModalsProxy
 *  @class ModalsProxy
 *  @since 2021.05.14, 14:38
 *  @changed 2021.05.31, 16:57
 */

var

ModalsProxy = /*#__PURE__*/function () {var _proto = ModalsProxy.prototype;

  // 'Was initialized' flag
  // List of modals (passed to `ModalsController` state to direct render
  // Will be initialized with `ModalsController` instance reference promise in `config/modals`.
  _proto.

  getProxyModalNode = function getProxyModalNode(id) {
    return this._modalsController.getProxyModalNode(id);
  };_proto.

  updateProxyModalsList = function updateProxyModalsList() {// Using `this._modalsController.updateProxyModalsList`
    if (this._modalsController) {
      return this._modalsController.updateProxyModalsList(this._proxyModalsList);
    }
  };










  function ModalsProxy() {var _this = this;(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1__.default)(this, "_inited", false);(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1__.default)(this, "_proxyModalsList", []);(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1__.default)(this, "_modalsController", null);(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1__.default)(this, "_storeHandlers", []);(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1__.default)(this, "initialize", function () {_this._modalsController = (_config_index_js__WEBPACK_IMPORTED_MODULE_2___default().modals.controller);_this._inited = true;if (_this._proxyModalsList.length) {_this.updateProxyModalsList(); // Using `this._modalsController.updateProxyModalsList`
      }_this._initStore();});(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1__.default)(this, "_onStoreChange",




















    function () {var
      store = (_config_index_js__WEBPACK_IMPORTED_MODULE_2___default().app.store);
      var state = store.getState();
      _this._storeHandlers.forEach(function (cb) {
        typeof cb === 'function' && cb(state);
      });
    });(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1__.default)(this, "onModalDeactivate",













































































    function (data) {var
      modalId = data.modalId,id = data.id;
      modalId = modalId || id;
      var modalData = _this.getModal(modalId);
      if (!modalData) {
        var error = new Error('Proxy modal not found for modalId="' + modalId + '"');
        console.error('ModalsController:onModalDeactivate: error', { error: error, modalId: modalId }); // eslint-disable-line no-console
        debugger; // eslint-disable-line no-debugger
        throw error;
      }var

      onDeactivate =

      modalData.__saved__OnDeactivate,onModalDeactivate = modalData.onModalDeactivate;
      // console.log('ModalsProxy:onModalDeactivate', { modalId, modalData });
      _this.removeModal(modalId);
      // Use try/catch?
      if (typeof onDeactivate === 'function') {
        onDeactivate(data);
      }
      if (typeof onModalDeactivate === 'function') {
        onModalDeactivate(data);
      }
    });var initPromise = this.getInitPromise();initPromise.then(this.initialize);}_proto.getInitPromise = function getInitPromise() {return (_config_index_js__WEBPACK_IMPORTED_MODULE_2___default().modals.initPromise);};_proto.getModalsController = function getModalsController() {return this._modalsController;} // Store methods...
  ;_proto._initStore = function _initStore() {var store = (_config_index_js__WEBPACK_IMPORTED_MODULE_2___default().app.store);if (store) {store.subscribe(this._onStoreChange);}};_proto.addStoreChangesHandler = function addStoreChangesHandler(cb) {this._storeHandlers.push(cb);};_proto.removeStoreChangesHandler = function removeStoreChangesHandler(cb) {var idx = this._storeHandlers.indexOf(cb);if (idx !== -1) {this._storeHandlers.splice(idx, 1);}} /* External modal proxy interface...
   *
   * - addModal
   * - removeModal
   * - getModal
   * - isModalExists
   * - updateModal
   *
   * regexp: \<\(addModal\|removeModal\|getModal\|isModalExists\|updateModal\)\>
   *
   */;_proto.addModal = function addModal(modalData) {var modalId = modalData.modalId || modalData.id; // || 'modal' + n;
    // Check not-empty id and id uniqueness
    if (!modalId || this.getModal(modalId)) {var error = new Error('An unique modalId must be specified');console.error('ModalsController:addModal: error', { error: error, modalData: modalData }); // eslint-disable-line no-console
      debugger; // eslint-disable-line no-debugger
      throw error;} // Extend modal data...
    modalData = (0,_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__.default)({ key: modalId, id: modalId }, modalData, { __saved__OnDeactivate: modalData.onDeactivate, // Save passed handler, using in `onModalDeactivate` handler, see below
      onDeactivate: this.onModalDeactivate // Overwrite with our own deactivate handler
    }); // console.log('ModalsProxy:addModal', {
    //   modalId,
    //   modalData,
    // });
    this._proxyModalsList = this._proxyModalsList.concat(modalData);this.updateProxyModalsList(); // Using `this._modalsController.updateProxyModalsList`
  };_proto.removeModal = function removeModal(modalId) {// console.log('ModalsProxy:addModal', {
    //   modalId,
    //   'this._proxyModalsList': this._proxyModalsList,
    // });
    // TODO: Call some actions (on close modal)?
    this._proxyModalsList = this._proxyModalsList.filter(function (modalData) {return modalData.modalId !== modalId;});this.updateProxyModalsList(); // Using `this._modalsController.updateProxyModalsList`
    this._modalsController.removeProxyModalNode(modalId);};_proto.getModal = function getModal(modalId) {var _proxyModalsList = this._proxyModalsList;var found = _proxyModalsList.find(function (modalData) {return modalData.modalId === modalId;});return found;};_proto.isModalExists = function isModalExists(modalId) {var found = this.getModal(modalId);return !!found;};_proto.updateModal = function updateModal(modalId, options) {var newModals = this._proxyModalsList.map(function (modalData) {if (modalData.modalId === modalId) {modalData = (0,_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__.default)({}, modalData, options);}return modalData;});this._proxyModalsList = newModals;this.updateProxyModalsList(); // Using `this._modalsController.updateProxyModalsList`
  } // TODO: Implement `mapStateToProps` (as method of `ModalProxifiedWindow`?)
  ;return ModalsProxy;}();var ModalsProxySingleton = new ModalsProxy();/* harmony default export */ __webpack_exports__["default"] = (ModalsProxySingleton);

/***/ }),

/***/ "./src/elements/index.js":
/*!*******************************!*\
  !*** ./src/elements/index.js ***!
  \*******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DateTimeSelector": function() { return /* reexport safe */ _DateTimeSelector_index_ts__WEBPACK_IMPORTED_MODULE_0__.default; },
/* harmony export */   "InlineIcon": function() { return /* reexport safe */ _InlineIcon_index_ts__WEBPACK_IMPORTED_MODULE_1__.default; },
/* harmony export */   "Loader": function() { return /* reexport safe */ _Loader_index_ts__WEBPACK_IMPORTED_MODULE_2__.default; },
/* harmony export */   "Menu": function() { return /* reexport safe */ _Menu_index_ts__WEBPACK_IMPORTED_MODULE_3__.default; },
/* harmony export */   "MenuItem": function() { return /* reexport safe */ _MenuItem_index_ts__WEBPACK_IMPORTED_MODULE_4__.default; },
/* harmony export */   "MenuItemSeparator": function() { return /* reexport safe */ _MenuItemSeparator_index_ts__WEBPACK_IMPORTED_MODULE_5__.default; },
/* harmony export */   "ModalWindow": function() { return /* reexport safe */ _ModalWindow_index_ts__WEBPACK_IMPORTED_MODULE_6__.default; },
/* harmony export */   "ModalProxifiedWindow": function() { return /* reexport safe */ _ModalProxifiedWindow_ModalProxifiedWindow__WEBPACK_IMPORTED_MODULE_7__.default; },
/* harmony export */   "ModalPopup": function() { return /* reexport safe */ _ModalPopup_index_ts__WEBPACK_IMPORTED_MODULE_8__.default; },
/* harmony export */   "ModalPortal": function() { return /* reexport safe */ _ModalPortal_index_ts__WEBPACK_IMPORTED_MODULE_9__.default; },
/* harmony export */   "ModalsProxy": function() { return /* reexport safe */ _ModalsProxy_index_ts__WEBPACK_IMPORTED_MODULE_10__.default; },
/* harmony export */   "ModalsController": function() { return /* reexport safe */ _ModalsController_index_ts__WEBPACK_IMPORTED_MODULE_11__.default; }
/* harmony export */ });
/* harmony import */ var _DateTimeSelector_index_ts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DateTimeSelector/index.ts */ "./src/elements/DateTimeSelector/index.ts");
/* harmony import */ var _InlineIcon_index_ts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./InlineIcon/index.ts */ "./src/elements/InlineIcon/index.ts");
/* harmony import */ var _Loader_index_ts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Loader/index.ts */ "./src/elements/Loader/index.ts");
/* harmony import */ var _Menu_index_ts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Menu/index.ts */ "./src/elements/Menu/index.ts");
/* harmony import */ var _MenuItem_index_ts__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./MenuItem/index.ts */ "./src/elements/MenuItem/index.ts");
/* harmony import */ var _MenuItemSeparator_index_ts__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./MenuItemSeparator/index.ts */ "./src/elements/MenuItemSeparator/index.ts");
/* harmony import */ var _ModalWindow_index_ts__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./ModalWindow/index.ts */ "./src/elements/ModalWindow/index.ts");
/* harmony import */ var _ModalProxifiedWindow_ModalProxifiedWindow__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./ModalProxifiedWindow/ModalProxifiedWindow */ "./src/elements/ModalProxifiedWindow/ModalProxifiedWindow.js");
/* harmony import */ var _ModalPopup_index_ts__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./ModalPopup/index.ts */ "./src/elements/ModalPopup/index.ts");
/* harmony import */ var _ModalPortal_index_ts__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./ModalPortal/index.ts */ "./src/elements/ModalPortal/index.ts");
/* harmony import */ var _ModalsProxy_index_ts__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./ModalsProxy/index.ts */ "./src/elements/ModalsProxy/index.ts");
/* harmony import */ var _ModalsController_index_ts__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./ModalsController/index.ts */ "./src/elements/ModalsController/index.ts");
/** @module elements
 *  @desc Basic elements
 *  @since 2020.10.07, 02:12
 *  @changed 2021.05.14, 14:39
 */














/***/ }),

/***/ "./src/forms/FormActions/FormActions.jsx":
/*!***********************************************!*\
  !*** ./src/forms/FormActions/FormActions.jsx ***!
  \***********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/objectWithoutPropertiesLoose */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js");
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/inheritsLoose */ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! redux */ "redux");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _utils_configure__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../utils/configure */ "./src/utils/configure.js");
/* harmony import */ var _elements_Menu_index_ts__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../elements/Menu/index.ts */ "./src/elements/Menu/index.ts");
/* harmony import */ var _FormItemHOC_index_ts__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../FormItemHOC/index.ts */ "./src/forms/FormItemHOC/index.ts");
/* harmony import */ var _FormGroup_index_ts__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../FormGroup/index.ts */ "./src/forms/FormGroup/index.ts");
/* harmony import */ var _FormButton_index_ts__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../FormButton/index.ts */ "./src/forms/FormButton/index.ts");
/* harmony import */ var _FormSeparator_index_ts__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../FormSeparator/index.ts */ "./src/forms/FormSeparator/index.ts");
/* harmony import */ var _elements_ModalPopup_index_ts__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../elements/ModalPopup/index.ts */ "./src/elements/ModalPopup/index.ts");
/* harmony import */ var _helpers_ActionsContext__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../helpers/ActionsContext */ "./src/helpers/ActionsContext.jsx");
/* harmony import */ var _FormActions_pcss__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./FormActions.pcss */ "./src/forms/FormActions/FormActions.pcss");
 /** @module FormActions
 *  @class FormActions
 *  @since 2021.02.15, 18:03
 *  @changed 2021.02.20, 16:43
 */
/* eslint-disable react/require-default-props, react/no-unused-prop-types */




// import connect from 'react-redux/es/connect/connect'















var cnFormActions = (0,_utils_configure__WEBPACK_IMPORTED_MODULE_8__.cn)('FormActions');

var defaultActionButtonProps = {
  theme: 'default' };var


FormActions = /*#__PURE__*/function (_React$PureComponent) {(0,_babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_3__.default)(FormActions, _React$PureComponent);function FormActions() {var _this;for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {args[_key] = arguments[_key];}_this = _React$PureComponent.call.apply(_React$PureComponent, [this].concat(args)) || this;(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_4__.default)((0,_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__.default)(_this), "onAction",



















    function (actionProps) {var _this$props =





      _this.props,id = _this$props.id,onAction = _this$props.onAction,actionsContextNode = _this$props.actionsContextNode,disabled = _this$props.disabled;
      // Throw action up...
      if (!disabled) {
        if (id) {
          actionProps = (0,_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_1__.default)({}, actionProps, { actionsId: id });
        }
        // console.log('FormActions:onAction', {
        //   actionProps,
        //   onAction,
        //   actionsContextNode,
        // });
        // debugger;
        if (actionsContextNode && typeof actionsContextNode.onAction === 'function') {
          actionsContextNode.onAction(actionProps);
        }
        if (typeof onAction === 'function') {
          onAction(actionProps);
        }
      }
    });(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_4__.default)((0,_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__.default)(_this), "onMenuAction",

    function (actionProps) {var _assertThisInitialize = (0,_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__.default)(_this),
      popupNode = _assertThisInitialize.popupNode;var
      disabled = _this.props.disabled;
      if (!disabled) {
        // console.log('FormActions:onMenuAction', { actionProps, popupNode });
        // debugger;
        _this.onAction(actionProps);
        if ( /* closeMenuOnAction && */popupNode) {
          popupNode.close();
        }
      }
    });(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_4__.default)((0,_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__.default)(_this), "setPopupNodeRef",

    function (node) {var
      setPopupNodeRef = _this.props.setPopupNodeRef;
      _this.popupNode = node;
      if (setPopupNodeRef && typeof setPopupNodeRef === 'function') {
        setPopupNodeRef(node);
      }
    });return _this;}var _proto = FormActions.prototype;

  // Render...
  _proto.
  getClassName = function getClassName() {var _this$props2 =



    this.props,withMenu = _this$props2.withMenu,className = _this$props2.className;
    var mods = {
      withMenu: withMenu };

    return cnFormActions(mods, [className]);
  };_proto.

  renderActionItem = function renderActionItem(data, n) {
    if ( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default().isValidElement(data)) {
      return data;
    }
    if (typeof data !== 'object') {
      data = { text: String(data) };
    } else
    if (data.id === 'separator') {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default().createElement(_FormSeparator_index_ts__WEBPACK_IMPORTED_MODULE_13__.default, { key: 'separator' + n });
    }
    var id = data.id || 'item' + n;
    var element = /*#__PURE__*/
    react__WEBPACK_IMPORTED_MODULE_5___default().createElement(_FormButton_index_ts__WEBPACK_IMPORTED_MODULE_12__.default, (0,_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_1__.default)({
      key: id,
      id: id,
      text: id // Default text: would be overrided from `data` if exists
    }, defaultActionButtonProps,
    data));


    return element;
  };_proto.

  renderMenu = function renderMenu() {var _this$props3 =




    this.props,withMenu = _this$props3.withMenu,menu = _this$props3.menu,_this$props3$menuButt = _this$props3.menuButtonTheme,menuButtonTheme = _this$props3$menuButt === void 0 ? 'plain' : _this$props3$menuButt;
    if (!withMenu && !menu) {
      return null;
    }
    var menuElement;
    var menuProps = {
      // onClick: this.onMenuItemClick,
      onAction: this.onMenuAction };

    if ( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default().isValidElement(menu)) {
      menuElement = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default().cloneElement(menu, menuProps);
    } else
    {
      menuElement = /*#__PURE__*/
      react__WEBPACK_IMPORTED_MODULE_5___default().createElement(_helpers_ActionsContext__WEBPACK_IMPORTED_MODULE_15__.ActionsContextProvider, { value: this }, /*#__PURE__*/
      react__WEBPACK_IMPORTED_MODULE_5___default().createElement(_elements_Menu_index_ts__WEBPACK_IMPORTED_MODULE_9__.default, menuProps,
      menu));



    }
    var popupControl = /*#__PURE__*/
    react__WEBPACK_IMPORTED_MODULE_5___default().createElement(_FormButton_index_ts__WEBPACK_IMPORTED_MODULE_12__.default, {
      key: "popupControl",
      id: "popupControl",
      icon: "faBars",
      theme: menuButtonTheme });


    var menuPopup = /*#__PURE__*/
    react__WEBPACK_IMPORTED_MODULE_5___default().createElement(_elements_ModalPopup_index_ts__WEBPACK_IMPORTED_MODULE_14__.default, {
      key: "menuPopup",
      id: "menuPopup",
      popupControl: popupControl,
      popupContent: menuElement,
      ref: this.setPopupNodeRef
      // closeOnEscPressed
    });

    return /*#__PURE__*/(
      react__WEBPACK_IMPORTED_MODULE_5___default().createElement(_FormGroup_index_ts__WEBPACK_IMPORTED_MODULE_11__.default, {
        key: "FormActionsMenu",
        id: "FormActionsMenu",
        className: cnFormActions('Menu'),
        align: "right",
        flow: true },

      menuPopup));


  };_proto.

  render = function render() {var _this$props4 =













    this.props,actions = _this$props4.actions,children = _this$props4.children,className = _this$props4.className,withMenu = _this$props4.withMenu,menu = _this$props4.menu,setPopupNodeRef = _this$props4.setPopupNodeRef,restProps = (0,_babel_runtime_helpers_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_0__.default)(_this$props4, ["actions", "children", "className", "withMenu", "menu", "setPopupNodeRef"]);
    var content = actions || children;
    if (Array.isArray(content)) {
      content = content.filter(Boolean).map(this.renderActionItem, this);
    }
    return /*#__PURE__*/(
      react__WEBPACK_IMPORTED_MODULE_5___default().createElement(_FormGroup_index_ts__WEBPACK_IMPORTED_MODULE_11__.default, (0,_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_1__.default)({}, restProps, { className: this.getClassName() }), /*#__PURE__*/
      react__WEBPACK_IMPORTED_MODULE_5___default().createElement(_helpers_ActionsContext__WEBPACK_IMPORTED_MODULE_15__.ActionsContextProvider, { value: this },
      content),

      this.renderMenu()));


  };return FormActions;}((react__WEBPACK_IMPORTED_MODULE_5___default().PureComponent) /** @lends @FormActions.prototype */);(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_4__.default)(FormActions, "propTypes", { // children,
  actions: prop_types__WEBPACK_IMPORTED_MODULE_7___default().oneOfType([(prop_types__WEBPACK_IMPORTED_MODULE_7___default().array), (prop_types__WEBPACK_IMPORTED_MODULE_7___default().object)]), actionsContextNode: prop_types__WEBPACK_IMPORTED_MODULE_7___default().oneOfType([(prop_types__WEBPACK_IMPORTED_MODULE_7___default().element), (prop_types__WEBPACK_IMPORTED_MODULE_7___default().object)]), // ActionsContext Provider or object contained `onAction` method
  className: (prop_types__WEBPACK_IMPORTED_MODULE_7___default().string), disabled: (prop_types__WEBPACK_IMPORTED_MODULE_7___default().bool), id: (prop_types__WEBPACK_IMPORTED_MODULE_7___default().string), // layout: PropTypes.string,
  menu: prop_types__WEBPACK_IMPORTED_MODULE_7___default().oneOfType([(prop_types__WEBPACK_IMPORTED_MODULE_7___default().array), (prop_types__WEBPACK_IMPORTED_MODULE_7___default().object)]), menuButtonTheme: (prop_types__WEBPACK_IMPORTED_MODULE_7___default().string), onAction: (prop_types__WEBPACK_IMPORTED_MODULE_7___default().func), withMenu: (prop_types__WEBPACK_IMPORTED_MODULE_7___default().bool), setPopupNodeRef: (prop_types__WEBPACK_IMPORTED_MODULE_7___default().func) // See props definitions for FormGroup
});/* harmony default export */ __webpack_exports__["default"] = ((0,redux__WEBPACK_IMPORTED_MODULE_6__.compose)(
_helpers_ActionsContext__WEBPACK_IMPORTED_MODULE_15__.withActionsContext,
_FormItemHOC_index_ts__WEBPACK_IMPORTED_MODULE_10__.default)(
FormActions));
// export default FormItemHOC(FormActions);

/***/ }),

/***/ "./src/forms/FormBooleanHOC/FormBooleanHOC.jsx":
/*!*****************************************************!*\
  !*** ./src/forms/FormBooleanHOC/FormBooleanHOC.jsx ***!
  \*****************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/inheritsLoose */ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _utils_configure__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../utils/configure */ "./src/utils/configure.js");
/* harmony import */ var _config_index_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../config/index.js */ "./src/config/index.js");
/* harmony import */ var _config_index_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_config_index_js__WEBPACK_IMPORTED_MODULE_7__);
 /** @module FormBooleanHOC
 *  @class FormBooleanHOC
 *  @since 2020.12.10, 22:17
 *  @changed 2021.01.20, 23:28
 */
/* eslint-disable react/require-default-props, react/jsx-max-depth */






var cnFormBooleanHOC = (0,_utils_configure__WEBPACK_IMPORTED_MODULE_6__.cn)('FormBoolean');

var wrapFormBooleanHOC = function wrapFormBooleanHOC(WrappedComponent, params) {var _class, _temp;if (params === void 0) {params = {};}return _temp = _class = /*#__PURE__*/function (_React$Component) {(0,_babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_2__.default)(FormBoolean, _React$Component);














    // Lifecycle methods...

    function FormBoolean(props) {var _this;
      _this = _React$Component.call(this, props) || this;
      // this.formItemRef = React.createRef()
      (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_3__.default)((0,_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_1__.default)(_this), "updateValueWithState",

































































      function (state) {var _this$props =
        _this.props,onChange = _this$props.onChange,disabled = _this$props.disabled;
        if (!disabled && typeof onChange === 'function') {var
          value = state.value;
          onChange({ id: _this.id, value: value });
        }
      });(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_3__.default)((0,_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_1__.default)(_this), "handleChange",













      function (params) {
        _this.setState(function (_ref) {var stateValue = _ref.value;
          var value = params && params.value;
          if (value == null) {
            value = !stateValue;
          }
          return { active: true, value: value };
        });
        setTimeout(function () {
          _this.setState({ active: false });
        }, (_config_index_js__WEBPACK_IMPORTED_MODULE_7___default().css.transitionTime));
      });(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_3__.default)((0,_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_1__.default)(_this), "setDomRef",

      function (inputDomElem) {
        _this.inputDomElem = inputDomElem;var
        setDomRef = _this.props.setDomRef;
        if (typeof setDomRef === 'function') {
          setDomRef(inputDomElem);
        }
      });var _value = _this.props.value;_this.id = props.id || params.id || props.inputId || props.name;_this.state = { value: _value, active: false };return _this;}var _proto = FormBoolean.prototype;_proto.componentDidMount = function componentDidMount() {this.mounted = true; // this.afterUpdate();
      /* // UNUSED: interactiveKeyPressHandler
       * const { registerKeyPressHandler } = this.props;
       * if (typeof registerKeyPressHandler === 'function') { // From `FormInteractiveItemHOC`
       *   // Register callback with `FormInteractiveItemHOC`
       *   registerKeyPressHandler(this.interactiveKeyPressHandler);
       * }
       */ // this.addEventListeners();
    };_proto.componentWillUnmount = function componentWillUnmount() {// this.removeEventListeners();
      this.mounted = false;};_proto.componentDidUpdate = function componentDidUpdate(prevProps, prevState) {var prevValue = prevProps.value;var propsValue = this.props.value;var stateValue = this.state.value;if (propsValue !== prevValue && propsValue !== stateValue) {// New value from props
        this.setState({ value: propsValue }, this.updateValueWithState);} else if (stateValue !== prevState.value) {// New value from state
        this.updateValueWithState(this.state);} // this.afterUpdate(); // ???
    } // Helper methods...
    ;_proto.getClassName = function getClassName() {var id = this.id; // const { id } = this.props
      var value = this.state.value;var checked = !!value;var mods = { id: id, checked: checked };var classList = cnFormBooleanHOC(mods, [this.props.className]);return classList;} /* // focus, blur -- ???
     * focus() { // Invoke containing input focus method
     *   if (this.inputDomElem && typeof this.inputDomElem.focus == 'function') {
     *     this.inputDomElem.focus()
     *   }
     * }
     * blur() { // Invoke containing input blur method
     *   if (this.inputDomElem && typeof this.inputDomElem.blur == 'function') {
     *     this.inputDomElem.blur()
     *   }
     * }
     */; // Render...
    _proto.render = function render() {var _this$props2 = this.props,id = _this$props2.id,disabled = _this$props2.disabled;var _this$state = this.state,active = _this$state.active,value = _this$state.value;var renderProps = { id: id, className: this.getClassName(), disabled: disabled, value: value, active: active, handleChange: this.handleChange, setDomRef: this.setDomRef, setInputDomRef: this.setInputDomRef };return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default().createElement(WrappedComponent, (0,_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__.default)({}, this.props, renderProps));
    };return FormBoolean;}((react__WEBPACK_IMPORTED_MODULE_4___default().Component)), (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_3__.default)(_class, "propTypes", { id: (prop_types__WEBPACK_IMPORTED_MODULE_5___default().string), name: (prop_types__WEBPACK_IMPORTED_MODULE_5___default().string), value: (prop_types__WEBPACK_IMPORTED_MODULE_5___default().bool), disabled: (prop_types__WEBPACK_IMPORTED_MODULE_5___default().bool), onChange: (prop_types__WEBPACK_IMPORTED_MODULE_5___default().func) }), (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_3__.default)(_class, "defaultProps", { id: params.id, value: false }), _temp;};



/** Usage:
 * FormBooleanHOC(component)
 * FormBooleanHOC(params)(component)
 */
var FormBooleanHOC = function FormBooleanHOC(params) {
  if (typeof params === 'string') {// Passed identifier
    params = { id: params };
  }
  if (typeof params === 'object') {// Params passed -> metafabric
    return function (component) {return wrapFormBooleanHOC(component, params);};
  } else
  {// Component passed -> simple fabric
    return wrapFormBooleanHOC(params);
  }
};

// export default FormItemHOC({ hoverable: true, focusable: true, framed: false })(FormBooleanHOC)
/* harmony default export */ __webpack_exports__["default"] = (FormBooleanHOC);

/***/ }),

/***/ "./src/forms/FormButtonGroup/FormButtonGroup.jsx":
/*!*******************************************************!*\
  !*** ./src/forms/FormButtonGroup/FormButtonGroup.jsx ***!
  \*******************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/inheritsLoose */ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _utils_configure__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../utils/configure */ "./src/utils/configure.js");
/* harmony import */ var _FormItemHOC_index_ts__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../FormItemHOC/index.ts */ "./src/forms/FormItemHOC/index.ts");
/* harmony import */ var _FormGroup_index_ts__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../FormGroup/index.ts */ "./src/forms/FormGroup/index.ts");
/* harmony import */ var _FormButtonGroup_pcss__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./FormButtonGroup.pcss */ "./src/forms/FormButtonGroup/FormButtonGroup.pcss");
 /** @module FormButtonGroup
 *  @class FormButtonGroup
 *  @since 2020.10.21, 23:43
 *  @changed 2020.10.21, 23:43
 */
/* eslint-disable react/require-default-props */



// import connect from 'react-redux/es/connect/connect'







var classNameModifiers = [
// Basic element properties
'id'
// Style-related modifiers...
// 'align',
// 'padded',
// 'background',
// 'flow',
// 'fullWidth',
];

var cnFormButtonGroup = (0,_utils_configure__WEBPACK_IMPORTED_MODULE_5__.cn)('FormButtonGroup');var

FormButtonGroup = /*#__PURE__*/function (_React$PureComponent) {(0,_babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_1__.default)(FormButtonGroup, _React$PureComponent);function FormButtonGroup() {return _React$PureComponent.apply(this, arguments) || this;}var _proto = FormButtonGroup.prototype;_proto.






  getClassName = function getClassName() {var _this = this;
    var mods = classNameModifiers.reduce(function (mods, id) {
      var val = _this.props[id];
      if (val != null) {var _extends2;
        return (0,_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__.default)({}, mods, (_extends2 = {}, _extends2[id] = val, _extends2));
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
      react__WEBPACK_IMPORTED_MODULE_3___default().createElement(_FormGroup_index_ts__WEBPACK_IMPORTED_MODULE_7__.default, (0,_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__.default)({}, this.props, { className: this.getClassName() })));

  };return FormButtonGroup;}((react__WEBPACK_IMPORTED_MODULE_3___default().PureComponent) /** @lends @FormButtonGroup.prototype */);(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2__.default)(FormButtonGroup, "propTypes", { id: (prop_types__WEBPACK_IMPORTED_MODULE_4___default().string) // flow: PropTypes.bool,
});


/* harmony default export */ __webpack_exports__["default"] = ((0,_FormItemHOC_index_ts__WEBPACK_IMPORTED_MODULE_6__.default)(FormButtonGroup));

/***/ }),

/***/ "./src/forms/FormButton/FormButton.jsx":
/*!*********************************************!*\
  !*** ./src/forms/FormButton/FormButton.jsx ***!
  \*********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/inheritsLoose */ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! redux */ "redux");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _utils_configure__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../utils/configure */ "./src/utils/configure.js");
/* harmony import */ var _helpers_ActionsContext__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../helpers/ActionsContext */ "./src/helpers/ActionsContext.jsx");
/* harmony import */ var _config_index_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../config/index.js */ "./src/config/index.js");
/* harmony import */ var _config_index_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_config_index_js__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _FormItemHOC_index_ts__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../FormItemHOC/index.ts */ "./src/forms/FormItemHOC/index.ts");
/* harmony import */ var _elements_InlineIcon_index_ts__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../elements/InlineIcon/index.ts */ "./src/elements/InlineIcon/index.ts");
/* harmony import */ var _FormButton_pcss__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./FormButton.pcss */ "./src/forms/FormButton/FormButton.pcss");
/* harmony import */ var _FormButton_Variations_pcss__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./FormButton-Variations.pcss */ "./src/forms/FormButton/FormButton-Variations.pcss");
/* harmony import */ var _FormButton_Themes_pcss__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./FormButton-Themes.pcss */ "./src/forms/FormButton/FormButton-Themes.pcss");
 /** @module FormButton
 *  @class FormButton
 *  @since 2020.07.20, 19:07
 *  @changed 2021.02.19, 17:51
 */




// import connect from 'react-redux/es/connect/connect';












var cnFormButton = (0,_utils_configure__WEBPACK_IMPORTED_MODULE_7__.cn)('FormButton');

var defaultTag = 'button'; // 'div'; // `button` element is 'labelable', @see `https://stackoverflow.com/questions/54792126/html-label-with-for-div-id-to-focus-a-contenteditable-div-does-label-label`
var
FormButton = /*#__PURE__*/function (_React$PureComponent) {(0,_babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_2__.default)(FormButton, _React$PureComponent);























  // Lifecycle...

  function FormButton(props) {var _this;
    _this = _React$PureComponent.call(this, props) || this;(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_3__.default)((0,_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_1__.default)(_this), "focus",















































































    function () {var
      formItemNode = _this.props.formItemNode;
      // console.log('FormButton:focus');
      formItemNode && formItemNode.focus && formItemNode.focus();
    });(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_3__.default)((0,_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_1__.default)(_this), "blur",
    function () {var
      formItemNode = _this.props.formItemNode;
      // console.log('FormButton:blur');
      formItemNode && formItemNode.blur && formItemNode.blur();
    });(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_3__.default)((0,_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_1__.default)(_this), "onClick",

    function () /* event */{var _this$props =






      _this.props,id = _this$props.id,actionsContextNode = _this$props.actionsContextNode,disabled = _this$props.disabled,onClick = _this$props.onClick;
      if (!disabled) {
        var hasOnClick = onClick && typeof onClick === 'function';
        var actionProps = {
          // ...event,
          id: id };

        var result = hasOnClick ? onClick(actionProps) : undefined; // true;
        if (result !== false && actionsContextNode && typeof actionsContextNode.onAction === 'function') {
          Promise.resolve(result).then(function (result) {
            if (result !== false) {// Check for non-false value
              actionsContextNode.onAction((0,_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__.default)({}, actionProps, { result: result }));
            }
          });
        }
        _this.setState({ active: true });
        setTimeout(function () {
          if (_this.mounted) {
            _this.setState({ active: false });
          }
        }, (_config_index_js__WEBPACK_IMPORTED_MODULE_9___default().css.transitionTime));
      }
    });_this.state = {};_this.mounted = true;if (props.setNodeRef) {props.setNodeRef((0,_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_1__.default)(_this));}return _this;}var _proto = FormButton.prototype;_proto.componentWillUnmount = function componentWillUnmount() {this.mounted = false;} // Helpers...
  ;_proto.hasIcon = function hasIcon() {var _this$props2 = this.props,icon = _this$props2.icon,hasIcon = _this$props2.hasIcon;return !!(hasIcon || icon);};_proto.hasText = function hasText() {var _this$props3 = this.props,hasText = _this$props3.hasText,onlyIcon = _this$props3.onlyIcon,children = _this$props3.children,text = _this$props3.text;return !onlyIcon && !!(hasText || text || children);};_proto.getClassName = function getClassName() {// TODO: Refactor properties!
    var _this$props4 = this.props,checked = _this$props4.checked,fullWidth = _this$props4.fullWidth,id = _this$props4.id,inline = _this$props4.inline,largeIcon = _this$props4.largeIcon,onDark = _this$props4.onDark,onlyIcon = _this$props4.onlyIcon,plain = _this$props4.plain,rightIcon = _this$props4.rightIcon,rotatedIcon = _this$props4.rotatedIcon,theme = _this$props4.theme,type = _this$props4.type,variation = _this$props4.variation;var active = this.state.active;var mods = { // plain,
      checked: checked, fullWidth: fullWidth, id: id, inline: inline, largeIcon: largeIcon, onDark: onDark, onlyIcon: onlyIcon, plain: plain, rightIcon: rightIcon, rotatedIcon: rotatedIcon, theme: theme, type: type, variation: variation, // State..
      active: active };var staticMods = { solid: true };var classList = cnFormButton((0,_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__.default)({}, staticMods, mods, { hasIcon: this.hasIcon(), hasText: this.hasText() }), [this.props.className]);return classList;} // Handlers...
  ; // Render...
  _proto.renderIcon = function renderIcon() {var hasIcon = this.hasIcon();if (hasIcon) {var
      icon = this.props.icon;
      if (icon && icon.type === _elements_InlineIcon_index_ts__WEBPACK_IMPORTED_MODULE_11__.default) {// Already InlineIcon
        // Extend with updated `className` props
        var props = (0,_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__.default)({},
        icon.props, {
          className: cnFormButton('Icon', [icon.props.className]) });

        var newIcon = (0,_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__.default)({}, icon, { props: props });
        return newIcon;
      }
      return /*#__PURE__*/(
        react__WEBPACK_IMPORTED_MODULE_4___default().createElement(_elements_InlineIcon_index_ts__WEBPACK_IMPORTED_MODULE_11__.default, { icon: icon, className: cnFormButton('Icon') }));

    }
  };_proto.

  renderText = function renderText() {
    var hasText = this.hasText(); // !onlyIcon && !!(hasText || text || children
    if (hasText) {var _this$props5 =
      this.props,text = _this$props5.text,children = _this$props5.children;
      return hasText && /*#__PURE__*/
      react__WEBPACK_IMPORTED_MODULE_4___default().createElement("span", { className: cnFormButton('Text') },
      text || children);


    }
  };_proto.

  render = function render() {var _this$props6 =










    this.props,id = _this$props6.id,inputId = _this$props6.inputId,disabled = _this$props6.disabled,tag = _this$props6.tag,type = _this$props6.type,title = _this$props6.title,setDomRef = _this$props6.setDomRef;

    var iconElem = this.renderIcon(); // Icon element
    var textElem = this.renderText(); // Text element

    // const basicRenderProps = this.getRenderProps() // Get from props not from overrided `super`
    var renderProps = {
      // ...basicRenderProps,
      id: inputId || id,
      className: this.getClassName(),
      disabled: disabled,
      title: title,
      type: type,
      onClick: this.onClick,
      ref: setDomRef, // Init ref for FormItemHOC
      tabIndex: 0 };


    var content = /*#__PURE__*/
    react__WEBPACK_IMPORTED_MODULE_4___default().createElement((react__WEBPACK_IMPORTED_MODULE_4___default().Fragment), null,
    iconElem,
    textElem);



    var tagName = tag || defaultTag;
    var element = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default().createElement(tagName, renderProps, content);
    return element;
  };return FormButton;}((react__WEBPACK_IMPORTED_MODULE_4___default().PureComponent) /** @lends @FormButton.prototype */);



// export default FormItemHOC({ solid: true, hoverable: true, framed: true })(FormButton)
(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_3__.default)(FormButton, "propTypes", { // TODO!!!
  // TODO: size: PropTypes.string, // Different form item sizes? (eg: md -- default, sm, xs, lg, xl, xxl)
  checked: (prop_types__WEBPACK_IMPORTED_MODULE_6___default().bool), // FormItem: Checked state
  disabled: (prop_types__WEBPACK_IMPORTED_MODULE_6___default().bool), fullWidth: (prop_types__WEBPACK_IMPORTED_MODULE_6___default().bool), // Occupies all horizontal space
  hasIcon: (prop_types__WEBPACK_IMPORTED_MODULE_6___default().bool), // Optional
  hasText: (prop_types__WEBPACK_IMPORTED_MODULE_6___default().bool), // Optional
  icon: prop_types__WEBPACK_IMPORTED_MODULE_6___default().oneOfType([(prop_types__WEBPACK_IMPORTED_MODULE_6___default().string), (prop_types__WEBPACK_IMPORTED_MODULE_6___default().object)]), // Icon component. May be as image resource loaded with `file/url-loader` as `FontAwesomeIcon` component.
  id: (prop_types__WEBPACK_IMPORTED_MODULE_6___default().string), inline: (prop_types__WEBPACK_IMPORTED_MODULE_6___default().bool), largeIcon: (prop_types__WEBPACK_IMPORTED_MODULE_6___default().bool), // Large icon
  onClick: (prop_types__WEBPACK_IMPORTED_MODULE_6___default().func), onDark: (prop_types__WEBPACK_IMPORTED_MODULE_6___default().bool), // On dark background
  onlyIcon: (prop_types__WEBPACK_IMPORTED_MODULE_6___default().bool), // Only icon
  plain: (prop_types__WEBPACK_IMPORTED_MODULE_6___default().bool), // ??? Plain icon (no border & background -- if no style specified, looks as link)
  rightIcon: (prop_types__WEBPACK_IMPORTED_MODULE_6___default().bool), // Icon placed at right side
  text: (prop_types__WEBPACK_IMPORTED_MODULE_6___default().string), // Text content (may be passed as node children)
  theme: (prop_types__WEBPACK_IMPORTED_MODULE_6___default().string) // Button style (plain, default, primary, secondary, error, warn, success, info, etc -- some are in progress -- see styles file)
  // setDomRef: PropTypes.func,
  // setNodeRef: PropTypes.func,
});/* harmony default export */ __webpack_exports__["default"] = ((0,redux__WEBPACK_IMPORTED_MODULE_5__.compose)(_helpers_ActionsContext__WEBPACK_IMPORTED_MODULE_8__.withActionsContext, (0,_FormItemHOC_index_ts__WEBPACK_IMPORTED_MODULE_10__.default)({ solid: true, hoverable: true, focusable: true, framed: true }))(FormButton));

/***/ }),

/***/ "./src/forms/FormContainer/FormContainer.jsx":
/*!***************************************************!*\
  !*** ./src/forms/FormContainer/FormContainer.jsx ***!
  \***************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utils_configure__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils/configure */ "./src/utils/configure.js");
/* harmony import */ var _FormContainer_pcss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./FormContainer.pcss */ "./src/forms/FormContainer/FormContainer.pcss");
/** @module FormContainer
 *  @class FormContainer
 *  @since 2021.02.20, 16:55
 *  @changed 2021.02.20, 16:56
 */






var cnFormContainer = (0,_utils_configure__WEBPACK_IMPORTED_MODULE_1__.cn)('FormContainer');

var FormContainer = function FormContainer(props) {var

  children =

  props.children,spaced = props.spaced;
  return /*#__PURE__*/(
    react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: cnFormContainer({ spaced: spaced }) },
    children));


};

/* harmony default export */ __webpack_exports__["default"] = (FormContainer);

/***/ }),

/***/ "./src/forms/FormDateRangeSingleBox/FormDateRangeSingleBox.jsx":
/*!*********************************************************************!*\
  !*** ./src/forms/FormDateRangeSingleBox/FormDateRangeSingleBox.jsx ***!
  \*********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/inheritsLoose */ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _utils_configure__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../utils/configure */ "./src/utils/configure.js");
/* harmony import */ var _config_index_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../config/index.js */ "./src/config/index.js");
/* harmony import */ var _config_index_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_config_index_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _FormItemHOC_index_ts__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../FormItemHOC/index.ts */ "./src/forms/FormItemHOC/index.ts");
/* harmony import */ var _elements_ModalPopup_index_ts__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../elements/ModalPopup/index.ts */ "./src/elements/ModalPopup/index.ts");
/* harmony import */ var _FormButton_index_ts__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../FormButton/index.ts */ "./src/forms/FormButton/index.ts");
/* harmony import */ var _elements_DateTimeSelector_index_ts__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../elements/DateTimeSelector/index.ts */ "./src/elements/DateTimeSelector/index.ts");
/* harmony import */ var _utils_dates__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../utils/dates */ "./src/utils/dates.js");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "@fortawesome/free-solid-svg-icons");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _fortawesome_free_regular_svg_icons__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @fortawesome/free-regular-svg-icons */ "@fortawesome/free-regular-svg-icons");
/* harmony import */ var _fortawesome_free_regular_svg_icons__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_free_regular_svg_icons__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _FormDateRangeSingleBox_pcss__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./FormDateRangeSingleBox.pcss */ "./src/forms/FormDateRangeSingleBox/FormDateRangeSingleBox.pcss");
 /** @module FormDateRangeSingleBox
 *  @class FormDateRangeSingleBox
 *  @since 2021.01.26, 13:19
 *  @changed 2021.01.26, 13:19
 *
 *  TODO 2020.12.16, 23:07 -- Add hidden html form element (for form submission)
 */
/* eslint-disable react/require-default-props */



// import connect from 'react-redux/es/connect/connect'











// import * as langUtils from 'utils/lang';
// // getCommonLangText('cancelButton', 'Cancel', lang)}



// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'





var cnFormDateRangeSingleBox = (0,_utils_configure__WEBPACK_IMPORTED_MODULE_5__.cn)('FormDateRangeSingleBox');

// const defaultDateType = 'number';
var
FormDateRangeSingleBox = /*#__PURE__*/function (_React$PureComponent) {(0,_babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_1__.default)(FormDateRangeSingleBox, _React$PureComponent);




























  // Lifecycle methods...

  function FormDateRangeSingleBox(props) {var _this;
    _this = _React$PureComponent.call(this, props) || this;(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2__.default)((0,_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_0__.default)(_this), "onControlClick",

































    function (params) {var
      onControlClick = _this.props.onControlClick;
      if (typeof onControlClick === 'function') {
        onControlClick(params);
      }
    });(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2__.default)((0,_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_0__.default)(_this), "onChange",



















    function (_ref) {var startDate = _ref.startDate,startDateObj = _ref.startDateObj,endDate = _ref.endDate,endDateObj = _ref.endDateObj,value = _ref.value,valueObj = _ref.valueObj,selectedStart = _ref.selectedStart;var _this$props =





      _this.props,onChange = _this$props.onChange,closeOnSelect = _this$props.closeOnSelect,onStartDateChange = _this$props.onStartDateChange,onEndDateChange = _this$props.onEndDateChange;
      var setParams = { id: _this.id, startDate: startDate, startDateObj: startDateObj, endDate: endDate, endDateObj: endDateObj, value: value, valueObj: valueObj, selectedStart: selectedStart };
      setParams.displayValue = _this.getDisplayValue(setParams); // dateUtils.formatDateToString(value); // TODO: showTime option
      // console.log('FormDateRangeSingleBox:onChange', setParams);
      _this.setState(setParams);
      if (typeof onChange === 'function') {
        onChange(setParams);
      }
      if (selectedStart && typeof onStartDateChange === 'function') {
        onStartDateChange(setParams);
      }
      if (!selectedStart && typeof onEndDateChange === 'function') {
        onEndDateChange(setParams);
      }
      if (closeOnSelect /* && lastRangeChanged && lastRangeChanged !== rangeId */ && _this.popupNode) {
        _this.popupNode.close();
      }
    });(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2__.default)((0,_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_0__.default)(_this), "setPopupRef",

    function (node) {var
      setPopupNodeRef = _this.props.setPopupNodeRef;
      _this.popupNode = node;
      if (setPopupNodeRef && typeof setPopupNodeRef === 'function') {
        setPopupNodeRef(node);
      }
    });(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2__.default)((0,_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_0__.default)(_this), "handleOpenState",

    function (_ref2) {var open = _ref2.open;
      _this.setState({ open: open });
    });var _startDate = props.startDate,_endDate = props.endDate;_this.id = props.id || props.inputId || props.name; // const dateType = props.dateType || dateUtils.detectDateValueType(startDate || endDate) || defaultDateType;
    _this.state = { // dateType,
      startDate: _startDate, // : startDate && dateUtils.convertToDateObject(startDate),
      endDate: _endDate // : endDate && dateUtils.convertToDateObject(endDate),
    };_this.state.displayValue = _this.getDisplayValue(_this.state);return _this;} // Helper methods...
  var _proto = FormDateRangeSingleBox.prototype;_proto.getClassName = function getClassName() {var id = this.id;var classList = cnFormDateRangeSingleBox({ id: id }, [this.props.className]);return classList;};_proto.getItemsText = function getItemsText() {var displayValue = this.state.displayValue;return displayValue;} // Handlers...
  ;_proto.getDisplayValue = function getDisplayValue(params) {params = params || this.state;var _params = params,startDate = _params.startDate,endDate = _params.endDate;var showTime = this.props.showTime;var dateFormat = showTime ? (_config_index_js__WEBPACK_IMPORTED_MODULE_6___default().constants.dateTimeFormat) : (_config_index_js__WEBPACK_IMPORTED_MODULE_6___default().constants.dateFormat);return [startDate && _utils_dates__WEBPACK_IMPORTED_MODULE_11__.formatDateToString(startDate, dateFormat), endDate && _utils_dates__WEBPACK_IMPORTED_MODULE_11__.formatDateToString(endDate, dateFormat)].filter(Boolean).join((_config_index_js__WEBPACK_IMPORTED_MODULE_6___default().constants.dateRangeDelim));}; // Render...
  _proto.renderControlContent = function renderControlContent() {var _this$props2 =




    this.props,placeholder = _this$props2.placeholder,title = _this$props2.title,controlButtonTheme = _this$props2.controlButtonTheme,_this$props2$fullWidt = _this$props2.fullWidth,fullWidth = _this$props2$fullWidt === void 0 ? true : _this$props2$fullWidt,disabled = _this$props2.disabled;var

    open =
    this.state.open;
    // const icon = open ? 'faCalendarCheck' : 'regular:faCalendar';
    var icon = open ? _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_12__.faCalendarCheck : _fortawesome_free_regular_svg_icons__WEBPACK_IMPORTED_MODULE_13__.faCalendar;
    var buttonText = this.getItemsText() || placeholder; // || text;
    return /*#__PURE__*/(
      react__WEBPACK_IMPORTED_MODULE_3___default().createElement(_FormButton_index_ts__WEBPACK_IMPORTED_MODULE_9__.default, {
        icon: icon,
        rightIcon: true,
        theme: controlButtonTheme || 'default',
        variation: "popupControl",
        text: buttonText,
        title: title,
        fullWidth: fullWidth,
        disabled: disabled,
        checkable: true,
        checked: open }));


  };_proto.

  renderPopupContent = function renderPopupContent() {var _this$state =



    this.state,startDate = _this$state.startDate,endDate = _this$state.endDate;var _this$props3 =






    this.props,calendarClassName = _this$props3.calendarClassName,id = _this$props3.id,inputId = _this$props3.inputId,showTime = _this$props3.showTime,timeIntervals = _this$props3.timeIntervals;
    var dateSelectorProps = {
      id: id,
      inputId: inputId,
      onChange: this.onChange,
      startDate: startDate,
      endDate: endDate,
      inline: true,
      calendarClassName: calendarClassName,
      showTime: showTime,
      timeIntervals: timeIntervals,
      selectsRange: true };

    return /*#__PURE__*/(
      react__WEBPACK_IMPORTED_MODULE_3___default().createElement(_elements_DateTimeSelector_index_ts__WEBPACK_IMPORTED_MODULE_10__.default, dateSelectorProps));

  };_proto.

  render = function render() {var _this$props4 =







    this.props,id = _this$props4.id,disabled = _this$props4.disabled,title = _this$props4.title,open = _this$props4.open,fullWidth = _this$props4.fullWidth,setDomRef = _this$props4.setDomRef;
    var popupControl = this.renderControlContent();
    var popupContent = this.renderPopupContent();
    var popupProps = {
      id: id,
      className: this.getClassName(),
      // contentClassName: 'XXX', // ???
      disabled: disabled,
      title: title,
      open: open,
      popupControl: popupControl,
      popupContent: popupContent,
      onControlClick: this.onControlClick,
      fullWidth: fullWidth,
      ref: this.setPopupRef,
      setDomRef: setDomRef,
      handleOpenState: this.handleOpenState };

    return /*#__PURE__*/(
      react__WEBPACK_IMPORTED_MODULE_3___default().createElement(_elements_ModalPopup_index_ts__WEBPACK_IMPORTED_MODULE_8__.default, popupProps));

  };return FormDateRangeSingleBox;}((react__WEBPACK_IMPORTED_MODULE_3___default().PureComponent) /** @lends @FormDateRangeSingleBox.prototype */);(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2__.default)(FormDateRangeSingleBox, "propTypes", { // selectsEnd: PropTypes.bool,
  // selectsStart: PropTypes.bool,
  // value: PropTypes.oneOfType([ PropTypes.string, PropTypes.number, PropTypes.instanceOf(Date) ]),
  calendarClassName: (prop_types__WEBPACK_IMPORTED_MODULE_4___default().string), className: (prop_types__WEBPACK_IMPORTED_MODULE_4___default().string), closeOnSelect: (prop_types__WEBPACK_IMPORTED_MODULE_4___default().bool), controlButtonTheme: (prop_types__WEBPACK_IMPORTED_MODULE_4___default().string), disabled: (prop_types__WEBPACK_IMPORTED_MODULE_4___default().bool), endDate: prop_types__WEBPACK_IMPORTED_MODULE_4___default().oneOfType([(prop_types__WEBPACK_IMPORTED_MODULE_4___default().string), (prop_types__WEBPACK_IMPORTED_MODULE_4___default().number), prop_types__WEBPACK_IMPORTED_MODULE_4___default().instanceOf(Date)]), fullWidth: (prop_types__WEBPACK_IMPORTED_MODULE_4___default().bool), id: (prop_types__WEBPACK_IMPORTED_MODULE_4___default().string), inputId: (prop_types__WEBPACK_IMPORTED_MODULE_4___default().string), onChange: (prop_types__WEBPACK_IMPORTED_MODULE_4___default().func), onStartDateChange: (prop_types__WEBPACK_IMPORTED_MODULE_4___default().func), onEndDateChange: (prop_types__WEBPACK_IMPORTED_MODULE_4___default().func), onControlClick: (prop_types__WEBPACK_IMPORTED_MODULE_4___default().func), open: (prop_types__WEBPACK_IMPORTED_MODULE_4___default().bool), placeholder: (prop_types__WEBPACK_IMPORTED_MODULE_4___default().string), setDomRef: (prop_types__WEBPACK_IMPORTED_MODULE_4___default().func), setPopupNodeRef: (prop_types__WEBPACK_IMPORTED_MODULE_4___default().func), showTime: (prop_types__WEBPACK_IMPORTED_MODULE_4___default().bool), startDate: prop_types__WEBPACK_IMPORTED_MODULE_4___default().oneOfType([(prop_types__WEBPACK_IMPORTED_MODULE_4___default().string), (prop_types__WEBPACK_IMPORTED_MODULE_4___default().number), prop_types__WEBPACK_IMPORTED_MODULE_4___default().instanceOf(Date)]), timeIntervals: (prop_types__WEBPACK_IMPORTED_MODULE_4___default().number), title: (prop_types__WEBPACK_IMPORTED_MODULE_4___default().string) });
/* harmony default export */ __webpack_exports__["default"] = ((0,_FormItemHOC_index_ts__WEBPACK_IMPORTED_MODULE_7__.default)({ solid: true, hoverable: true })(FormDateRangeSingleBox));

/***/ }),

/***/ "./src/forms/FormDateRange/FormDateRange.jsx":
/*!***************************************************!*\
  !*** ./src/forms/FormDateRange/FormDateRange.jsx ***!
  \***************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/inheritsLoose */ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _utils_configure__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../utils/configure */ "./src/utils/configure.js");
/* harmony import */ var _config_index_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../config/index.js */ "./src/config/index.js");
/* harmony import */ var _config_index_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_config_index_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _utils_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../utils/forms */ "./src/utils/forms.js");
/* harmony import */ var _utils_dates__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../utils/dates */ "./src/utils/dates.js");
/* harmony import */ var _utils_lang__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../utils/lang */ "./src/utils/lang.js");
/* harmony import */ var _FormGroup_index_ts__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../FormGroup/index.ts */ "./src/forms/FormGroup/index.ts");
/* harmony import */ var _FormDateTime_index_ts__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../FormDateTime/index.ts */ "./src/forms/FormDateTime/index.ts");
/* harmony import */ var _FormLabel_index_ts__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../FormLabel/index.ts */ "./src/forms/FormLabel/index.ts");
/* harmony import */ var _FormItemHOC_index_ts__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../FormItemHOC/index.ts */ "./src/forms/FormItemHOC/index.ts");
/* harmony import */ var _FormDateRange_pcss__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./FormDateRange.pcss */ "./src/forms/FormDateRange/FormDateRange.pcss");
 /** @module FormDateRange
 *  @class FormDateRange
 *  @since 2021.01.26, 13:19
 *  @changed 2021.03.11, 22:16
 *
 *  TODO 2020.12.16, 23:07 -- Add hidden html form element (for form submission)
 */
/* eslint-disable react/require-default-props */










// // langUtils.getCommonLangText('cancelButton', 'Cancel', lang)








var cnFormDateRange = (0,_utils_configure__WEBPACK_IMPORTED_MODULE_6__.cn)('FormDateRange');var

FormDateRange = /*#__PURE__*/function (_React$PureComponent) {(0,_babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_2__.default)(FormDateRange, _React$PureComponent);




























  // defaultProps = {
  //   timeIntervals: 60,
  // };

  // Lifecycle methods...

  function FormDateRange(props) {var _this;
    _this = _React$PureComponent.call(this, props) || this;(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_3__.default)((0,_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_1__.default)(_this), "handleChange",























































    function (params) {var

      id =



      params.id,value = params.value,valueObj = params.valueObj;var _this$props =




      _this.props,onChange = _this$props.onChange,onStartDateChange = _this$props.onStartDateChange,onEndDateChange = _this$props.onEndDateChange;var _this$state =



      _this.state,startDate = _this$state.startDate,endDate = _this$state.endDate;
      var selectedStart = id === 'startDate';
      var stateParams = {
        startDate: startDate,
        endDate: endDate };

      stateParams[id] = value;
      var cbParams = (0,_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__.default)({},
      stateParams, {
        id: _this.id,
        selectedStart: selectedStart,
        valueId: id,
        value: value,
        valueObj: valueObj });

      // console.log('FormDateRange:handleChange', {
      //   stateParams,
      //   cbParams,
      // });
      _this.setState(stateParams);
      if (typeof onChange === 'function') {
        onChange(cbParams);
      }
      if (selectedStart && typeof onStartDateChange === 'function') {
        onStartDateChange(cbParams);
      }
      if (!selectedStart && typeof onEndDateChange === 'function') {
        onEndDateChange(cbParams);
      }
    });var _startDate = props.startDate,_endDate = props.endDate,showTime = props.showTime,_props$timeIntervals = props.timeIntervals,timeIntervals = _props$timeIntervals === void 0 ? (_config_index_js__WEBPACK_IMPORTED_MODULE_7___default().constants.timeIntervals) : _props$timeIntervals;_this.id = props.id || props.inputId;_this.uniqFormId = props.inputId || props.id || _utils_forms__WEBPACK_IMPORTED_MODULE_8__.getUniqFormId({ prefix: 'FormDateRange' }); // identifier for local labels refering to local inputs
    // const dateType = props.dateType || dateUtils.detectDateValueType(startDate || endDate) || defaultDateType;
    // Default date (now)
    _this.now = new Date(props.now || Date.now()); // Date.now()
    // Default start date (beginning of the day)
    _this.startNow = _utils_dates__WEBPACK_IMPORTED_MODULE_9__.adjustDateValue(_this.now, false, showTime, timeIntervals); // this.startNow = new Date(this.now);
    // this.startNow.setHours(0);
    // this.startNow.setMinutes(0);
    // this.startNow.setSeconds(0);
    // this.startNow.setMilliseconds(0);
    // Default end date (end of the day)
    _this.endNow = _utils_dates__WEBPACK_IMPORTED_MODULE_9__.adjustDateValue(_this.now, true, showTime, timeIntervals); // this.endNow = new Date(this.now);
    // this.endNow.setHours(23);
    // this.endNow.setMinutes(59);
    // this.endNow.setSeconds(59);
    // this.endNow.setMilliseconds(999);
    _this.state = { // dateType,
      startDate: _startDate, // : startDate && dateUtils.convertToDateObject(startDate),
      endDate: _endDate // : endDate && dateUtils.convertToDateObject(endDate),
    }; // this.state.displayValue = this.getDisplayValue(this.state);
    return _this;} // Helper methods...
  var _proto = FormDateRange.prototype;_proto.getClassName = function getClassName() {var id = this.id;var fullWidth = this.props.fullWidth;var className = cnFormDateRange({ id: id, fullWidth: fullWidth // ???
    }, [this.props.className]);return className;} // Handlers...
  ; // Render...
  _proto.render = function render() {var _this$props2 =









    this.props,id = _this$props2.id,disabled = _this$props2.disabled,startLabel = _this$props2.startLabel,endLabel = _this$props2.endLabel,startPlaceholder = _this$props2.startPlaceholder,endPlaceholder = _this$props2.endPlaceholder,showTime = _this$props2.showTime,_this$props2$timeInte = _this$props2.timeIntervals,timeIntervals = _this$props2$timeInte === void 0 ? (_config_index_js__WEBPACK_IMPORTED_MODULE_7___default().constants.timeIntervals) : _this$props2$timeInte,allowEmpty = _this$props2.allowEmpty;var _this$state2 =



    this.state,startDate = _this$state2.startDate,endDate = _this$state2.endDate;

    var renderProps = {
      className: this.getClassName(),
      disabled: disabled,
      flow: true,
      id: id };


    // console.log('FormDateRange:render', {
    //   startDate,
    //   endDate,
    //   props,
    // });

    var uniqStartId = this.uniqFormId + 'StartDate';
    var uniqEndId = this.uniqFormId + 'EndDate';

    var startLabelText = startLabel; // || 'от'
    var endLabelText = endLabel; // || 'до'

    var startPlaceholderText = startPlaceholder || _utils_lang__WEBPACK_IMPORTED_MODULE_10__.getCommonLangText('from');
    var endPlaceholderText = endPlaceholder || _utils_lang__WEBPACK_IMPORTED_MODULE_10__.getCommonLangText('to');

    var commonProps = {
      // startDate,
      // endDate,
      showTime: showTime,
      timeIntervals: timeIntervals,
      allowEmpty: allowEmpty };

    return /*#__PURE__*/(
      react__WEBPACK_IMPORTED_MODULE_4___default().createElement(_FormGroup_index_ts__WEBPACK_IMPORTED_MODULE_11__.default, renderProps,
      startLabelText && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default().createElement(_FormLabel_index_ts__WEBPACK_IMPORTED_MODULE_13__.default, {
        htmlFor: uniqStartId,
        text: startLabelText }), /*#__PURE__*/

      react__WEBPACK_IMPORTED_MODULE_4___default().createElement(_FormDateTime_index_ts__WEBPACK_IMPORTED_MODULE_12__.default, (0,_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__.default)({},
      commonProps, {
        selectsStart: true,
        name: "startDate",
        id: "startDate",
        inputId: uniqStartId,
        startDate: startDate,
        endDate: endDate,
        value: startDate,
        placeholder: startPlaceholderText,
        now: this.startNow,
        maxDate: endDate,
        onChange: this.handleChange })),

      endLabelText && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default().createElement(_FormLabel_index_ts__WEBPACK_IMPORTED_MODULE_13__.default, {
        htmlFor: uniqEndId,
        text: endLabelText }), /*#__PURE__*/

      react__WEBPACK_IMPORTED_MODULE_4___default().createElement(_FormDateTime_index_ts__WEBPACK_IMPORTED_MODULE_12__.default, (0,_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__.default)({},
      commonProps, {
        selectsEnd: true,
        name: "endDate",
        id: "endDate",
        inputId: uniqEndId,
        startDate: startDate,
        endDate: endDate,
        value: endDate,
        placeholder: endPlaceholderText,
        now: this.endNow,
        minDate: startDate,
        onChange: this.handleChange,
        isEndDate: true }))));



  };return FormDateRange;}((react__WEBPACK_IMPORTED_MODULE_4___default().PureComponent) /** @lends @FormDateRange.prototype */);(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_3__.default)(FormDateRange, "propTypes", { selectsEnd: (prop_types__WEBPACK_IMPORTED_MODULE_5___default().bool), selectsStart: (prop_types__WEBPACK_IMPORTED_MODULE_5___default().bool), // value: PropTypes.oneOfType([ PropTypes.string, PropTypes.number, PropTypes.instanceOf(Date) ]),
  calendarClassName: (prop_types__WEBPACK_IMPORTED_MODULE_5___default().string), className: (prop_types__WEBPACK_IMPORTED_MODULE_5___default().string), closeOnSelect: (prop_types__WEBPACK_IMPORTED_MODULE_5___default().bool), controlButtonTheme: (prop_types__WEBPACK_IMPORTED_MODULE_5___default().string), disabled: (prop_types__WEBPACK_IMPORTED_MODULE_5___default().bool), endDate: prop_types__WEBPACK_IMPORTED_MODULE_5___default().oneOfType([(prop_types__WEBPACK_IMPORTED_MODULE_5___default().string), (prop_types__WEBPACK_IMPORTED_MODULE_5___default().number), prop_types__WEBPACK_IMPORTED_MODULE_5___default().instanceOf(Date)]), fullWidth: (prop_types__WEBPACK_IMPORTED_MODULE_5___default().bool), id: (prop_types__WEBPACK_IMPORTED_MODULE_5___default().string), inputId: (prop_types__WEBPACK_IMPORTED_MODULE_5___default().string), onChange: (prop_types__WEBPACK_IMPORTED_MODULE_5___default().func), onStartDateChange: (prop_types__WEBPACK_IMPORTED_MODULE_5___default().func), onEndDateChange: (prop_types__WEBPACK_IMPORTED_MODULE_5___default().func), onControlClick: (prop_types__WEBPACK_IMPORTED_MODULE_5___default().func), open: (prop_types__WEBPACK_IMPORTED_MODULE_5___default().bool), placeholder: (prop_types__WEBPACK_IMPORTED_MODULE_5___default().string), setDomRef: (prop_types__WEBPACK_IMPORTED_MODULE_5___default().func), setPopupNodeRef: (prop_types__WEBPACK_IMPORTED_MODULE_5___default().func), showTime: (prop_types__WEBPACK_IMPORTED_MODULE_5___default().bool), startDate: prop_types__WEBPACK_IMPORTED_MODULE_5___default().oneOfType([(prop_types__WEBPACK_IMPORTED_MODULE_5___default().string), (prop_types__WEBPACK_IMPORTED_MODULE_5___default().number), prop_types__WEBPACK_IMPORTED_MODULE_5___default().instanceOf(Date)]), timeIntervals: (prop_types__WEBPACK_IMPORTED_MODULE_5___default().number), title: (prop_types__WEBPACK_IMPORTED_MODULE_5___default().string) });


/* harmony default export */ __webpack_exports__["default"] = ((0,_FormItemHOC_index_ts__WEBPACK_IMPORTED_MODULE_14__.default)({ solid: true, hoverable: true })(FormDateRange));

/***/ }),

/***/ "./src/forms/FormDateTime/FormDateTime.jsx":
/*!*************************************************!*\
  !*** ./src/forms/FormDateTime/FormDateTime.jsx ***!
  \*************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/inheritsLoose */ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _utils_configure__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../utils/configure */ "./src/utils/configure.js");
/* harmony import */ var _config_index_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../config/index.js */ "./src/config/index.js");
/* harmony import */ var _config_index_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_config_index_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _FormItemHOC_index_ts__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../FormItemHOC/index.ts */ "./src/forms/FormItemHOC/index.ts");
/* harmony import */ var _elements_ModalPopup_index_ts__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../elements/ModalPopup/index.ts */ "./src/elements/ModalPopup/index.ts");
/* harmony import */ var _FormButton_index_ts__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../FormButton/index.ts */ "./src/forms/FormButton/index.ts");
/* harmony import */ var _elements_DateTimeSelector_index_ts__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../elements/DateTimeSelector/index.ts */ "./src/elements/DateTimeSelector/index.ts");
/* harmony import */ var _utils_dates__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../utils/dates */ "./src/utils/dates.js");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "@fortawesome/free-solid-svg-icons");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _fortawesome_free_regular_svg_icons__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @fortawesome/free-regular-svg-icons */ "@fortawesome/free-regular-svg-icons");
/* harmony import */ var _fortawesome_free_regular_svg_icons__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_free_regular_svg_icons__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _FormDateTime_pcss__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./FormDateTime.pcss */ "./src/forms/FormDateTime/FormDateTime.pcss");
 /** @module FormDateTime
 *  @class FormDateTime
 *  @since 2021.01.23, 19:44
 *  @changed 2021.01.23, 19:44
 *
 *  TODO 2020.12.16, 23:07 -- Add hidden html form element (for form submission)
 */



// import connect from 'react-redux/es/connect/connect'











// import * as langUtils from 'utils/lang';
// // getCommonLangText('cancelButton', 'Cancel', lang)}








var cnFormDateTime = (0,_utils_configure__WEBPACK_IMPORTED_MODULE_5__.cn)('FormDateTime');

// const defaultDateType = 'number';
var
FormDateTime = /*#__PURE__*/function (_React$PureComponent) {(0,_babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_1__.default)(FormDateTime, _React$PureComponent);
























  // Lifecycle methods...

  function FormDateTime(props) {var _this;
    _this = _React$PureComponent.call(this, props) || this;(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2__.default)((0,_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_0__.default)(_this), "onControlClick",



























    function (params) {var
      onControlClick = _this.props.onControlClick;
      if (typeof onControlClick === 'function') {
        onControlClick(params);
      }
    });(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2__.default)((0,_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_0__.default)(_this), "onChange",













    function (_ref) {var value = _ref.value,valueObj = _ref.valueObj;var _this$props =



      _this.props,onChange = _this$props.onChange,closeOnSelect = _this$props.closeOnSelect;
      var setParams = { id: _this.id, value: value, valueObj: valueObj };
      setParams.displayValue = _this.getDisplayValue(setParams); // dateUtils.formatDateToString(value); // TODO: showTime option
      // console.log('FormDateTime:onChange', setParams);
      _this.setState(setParams);
      if (typeof onChange === 'function') {
        onChange(setParams);
      }
      if (closeOnSelect && _this.popupNode) {
        _this.popupNode.close();
      }
    });(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2__.default)((0,_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_0__.default)(_this), "setPopupRef",

    function (node) {var
      setPopupNodeRef = _this.props.setPopupNodeRef;
      _this.popupNode = node;
      if (setPopupNodeRef && typeof setPopupNodeRef === 'function') {
        setPopupNodeRef(node);
      }
    });(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2__.default)((0,_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_0__.default)(_this), "handleOpenState",

    function (_ref2) {var open = _ref2.open;
      _this.setState({ open: open });
    });var _value = props.value;_this.id = props.id || props.inputId; // || props.name;
    _this.state = { value: _value };_this.state.displayValue = _this.getDisplayValue(_this.state);return _this;} // Helper methods...
  var _proto = FormDateTime.prototype;_proto.getClassName = function getClassName() {var id = this.id;var classList = cnFormDateTime({ id: id }, [this.props.className]);return classList;};_proto.getItemsText = function getItemsText() {var displayValue = this.state.displayValue;return displayValue;} // Handlers...
  ;_proto.getDisplayValue = function getDisplayValue(params) {params = params || this.state;var _params = params,value = _params.value;var showTime = this.props.showTime;var dateFormat = showTime ? (_config_index_js__WEBPACK_IMPORTED_MODULE_6___default().constants.dateTimeFormat) : (_config_index_js__WEBPACK_IMPORTED_MODULE_6___default().constants.dateFormat);return _utils_dates__WEBPACK_IMPORTED_MODULE_11__.formatDateToString(value, dateFormat);}; // Render...
  _proto.renderControlContent = function renderControlContent() {var _this$props2 =








    this.props,id = _this$props2.id,inputId = _this$props2.inputId,placeholder = _this$props2.placeholder,title = _this$props2.title,controlButtonTheme = _this$props2.controlButtonTheme,_this$props2$fullWidt = _this$props2.fullWidth,fullWidth = _this$props2$fullWidt === void 0 ? true : _this$props2$fullWidt,disabled = _this$props2.disabled;var

    open =
    this.state.open;
    // const icon = open ? 'faCalendarCheck' : 'regular:faCalendar';
    var icon = open ? _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_12__.faCalendarCheck : _fortawesome_free_regular_svg_icons__WEBPACK_IMPORTED_MODULE_13__.faCalendar;
    var buttonText = this.getItemsText() || placeholder; // || text;
    return /*#__PURE__*/(
      react__WEBPACK_IMPORTED_MODULE_3___default().createElement(_FormButton_index_ts__WEBPACK_IMPORTED_MODULE_9__.default, {
        id: id,
        inputId: inputId,
        icon: icon,
        rightIcon: true,
        theme: controlButtonTheme || 'default',
        variation: "popupControl",
        text: buttonText,
        title: title,
        fullWidth: fullWidth,
        disabled: disabled }));


  };_proto.

  renderDateSelectorContent = function renderDateSelectorContent() {var

    value =
    this.state.value;var _this$props3 =















    this.props,id = _this$props3.id,inputId = _this$props3.inputId,showTime = _this$props3.showTime,timeIntervals = _this$props3.timeIntervals,selectsRange = _this$props3.selectsRange,calendarClassName = _this$props3.calendarClassName,selectsStart = _this$props3.selectsStart,selectsEnd = _this$props3.selectsEnd,startDate = _this$props3.startDate,endDate = _this$props3.endDate,minDate = _this$props3.minDate,maxDate = _this$props3.maxDate,now = _this$props3.now,isEndDate = _this$props3.isEndDate;
    var dateSelectorProps = {
      id: id,
      inputId: inputId,
      inline: true,
      calendarClassName: calendarClassName,
      onChange: this.onChange,
      value: value,
      showTime: showTime,
      timeIntervals: timeIntervals,
      selectsRange: selectsRange,
      selectsStart: selectsStart,
      selectsEnd: selectsEnd,
      startDate: startDate,
      endDate: endDate,
      minDate: minDate,
      maxDate: maxDate,
      now: now,
      isEndDate: isEndDate };

    // console.log('FormDateTime:renderDateSelectorContent', {
    //   dateSelectorProps,
    // });
    return /*#__PURE__*/(
      react__WEBPACK_IMPORTED_MODULE_3___default().createElement(_elements_DateTimeSelector_index_ts__WEBPACK_IMPORTED_MODULE_10__.default, dateSelectorProps));

  };_proto.

  render = function render() {var _this$props4 =








    this.props,disabled = _this$props4.disabled,title = _this$props4.title,open = _this$props4.open,fullWidth = _this$props4.fullWidth,setDomRef = _this$props4.setDomRef;

    var controlContent = this.renderControlContent();
    var dateSelectorContent = this.renderDateSelectorContent();

    var popupProps = {
      // id,
      className: this.getClassName(),
      disabled: disabled,
      title: title,
      open: open,
      popupControl: controlContent,
      popupContent: dateSelectorContent,
      onControlClick: this.onControlClick,
      fullWidth: fullWidth,
      ref: this.setPopupRef,
      setDomRef: setDomRef,
      handleOpenState: this.handleOpenState };


    return /*#__PURE__*/(
      react__WEBPACK_IMPORTED_MODULE_3___default().createElement(_elements_ModalPopup_index_ts__WEBPACK_IMPORTED_MODULE_8__.default, popupProps));


  };return FormDateTime;}((react__WEBPACK_IMPORTED_MODULE_3___default().PureComponent) /** @lends @FormDateTime.prototype */);(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2__.default)(FormDateTime, "propTypes", { calendarClassName: (prop_types__WEBPACK_IMPORTED_MODULE_4___default().string), className: (prop_types__WEBPACK_IMPORTED_MODULE_4___default().string), closeOnSelect: (prop_types__WEBPACK_IMPORTED_MODULE_4___default().bool), controlButtonTheme: (prop_types__WEBPACK_IMPORTED_MODULE_4___default().string), disabled: (prop_types__WEBPACK_IMPORTED_MODULE_4___default().bool), fullWidth: (prop_types__WEBPACK_IMPORTED_MODULE_4___default().bool), id: (prop_types__WEBPACK_IMPORTED_MODULE_4___default().string), inputId: (prop_types__WEBPACK_IMPORTED_MODULE_4___default().string), onChange: (prop_types__WEBPACK_IMPORTED_MODULE_4___default().func), onControlClick: (prop_types__WEBPACK_IMPORTED_MODULE_4___default().func), open: (prop_types__WEBPACK_IMPORTED_MODULE_4___default().bool), placeholder: (prop_types__WEBPACK_IMPORTED_MODULE_4___default().string), selectsEnd: (prop_types__WEBPACK_IMPORTED_MODULE_4___default().bool), selectsRange: (prop_types__WEBPACK_IMPORTED_MODULE_4___default().bool), selectsStart: (prop_types__WEBPACK_IMPORTED_MODULE_4___default().bool), setDomRef: (prop_types__WEBPACK_IMPORTED_MODULE_4___default().func), setPopupNodeRef: (prop_types__WEBPACK_IMPORTED_MODULE_4___default().func), showTime: (prop_types__WEBPACK_IMPORTED_MODULE_4___default().bool), title: (prop_types__WEBPACK_IMPORTED_MODULE_4___default().string), value: prop_types__WEBPACK_IMPORTED_MODULE_4___default().oneOfType([(prop_types__WEBPACK_IMPORTED_MODULE_4___default().string), (prop_types__WEBPACK_IMPORTED_MODULE_4___default().number), prop_types__WEBPACK_IMPORTED_MODULE_4___default().instanceOf(Date)]) });



/* harmony default export */ __webpack_exports__["default"] = ((0,_FormItemHOC_index_ts__WEBPACK_IMPORTED_MODULE_7__.default)({ solid: true, hoverable: true })(FormDateTime));

/***/ }),

/***/ "./src/forms/FormDelim/FormDelim.jsx":
/*!*******************************************!*\
  !*** ./src/forms/FormDelim/FormDelim.jsx ***!
  \*******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utils_configure__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils/configure */ "./src/utils/configure.js");
/* harmony import */ var _FormDelim_pcss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./FormDelim.pcss */ "./src/forms/FormDelim/FormDelim.pcss");
/** @module FormDelim
 *  @class FormDelim
 *  @since 2020.11.27, 12:52
 *  @changed 2020.11.27, 12:52
 */






var FormDelim = function FormDelim(props) {var
  id = props.id;
  var className = (0,_utils_configure__WEBPACK_IMPORTED_MODULE_1__.cn)('FormDelim')({ id: id }, [props.className]);
  return /*#__PURE__*/(
    react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: className }));

};

/* harmony default export */ __webpack_exports__["default"] = (FormDelim);

/***/ }),

/***/ "./src/forms/FormGroup/FormGroup.jsx":
/*!*******************************************!*\
  !*** ./src/forms/FormGroup/FormGroup.jsx ***!
  \*******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/inheritsLoose */ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _utils_configure__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../utils/configure */ "./src/utils/configure.js");
/* harmony import */ var _FormItemHOC_index_ts__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../FormItemHOC/index.ts */ "./src/forms/FormItemHOC/index.ts");
/* harmony import */ var _FormSeparator_index_ts__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../FormSeparator/index.ts */ "./src/forms/FormSeparator/index.ts");
/* harmony import */ var _FormContainer_index_ts__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../FormContainer/index.ts */ "./src/forms/FormContainer/index.ts");
/* harmony import */ var _FormGroup_pcss__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./FormGroup.pcss */ "./src/forms/FormGroup/FormGroup.pcss");
/* harmony import */ var _FormGroup_Layout_pcss__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./FormGroup-Layout.pcss */ "./src/forms/FormGroup/FormGroup-Layout.pcss");
/* harmony import */ var _FormGroup_Variations_pcss__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./FormGroup-Variations.pcss */ "./src/forms/FormGroup/FormGroup-Variations.pcss");
 /** @module FormGroup
 *  @class FormGroup
 *  @since 2020.07.20, 19:07
 *  @changed 2021.02.20, 19:09
 */
/* eslint-disable react/require-default-props, react/no-unused-prop-types */













var cnFormGroup = (0,_utils_configure__WEBPACK_IMPORTED_MODULE_5__.cn)('FormGroup');var

FormGroup = /*#__PURE__*/function (_React$PureComponent) {(0,_babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_1__.default)(FormGroup, _React$PureComponent);










































  function FormGroup(props) {var _this;
    _this = _React$PureComponent.call(this, props) || this;
    _this.state = {};return _this;

  }var _proto = FormGroup.prototype;_proto.

  getClassName = function getClassName() {var _this2 = this;
    var mods = FormGroup.classNameModifiers.reduce(function (mods, id) {
      var val = _this2.state[id] != null ? _this2.state[id] : _this2.props[id];
      if (val != null) {var _extends2;
        return (0,_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__.default)({}, mods, (_extends2 = {}, _extends2[id] = val, _extends2));
      }
      return mods;
    }, {});
    return cnFormGroup(mods, [this.props.className]);
  }

  // Render...
  ;_proto.
  render = function render() {var _this$props =








    this.props,id = _this$props.id,children = _this$props.children,content = _this$props.content,separated = _this$props.separated,withContainer = _this$props.withContainer;

    // const renderProps = this.getRenderProps()

    var result = /*#__PURE__*/
    react__WEBPACK_IMPORTED_MODULE_3___default().createElement("div", { id: id, className: this.getClassName() },
    separated && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement(_FormSeparator_index_ts__WEBPACK_IMPORTED_MODULE_7__.default, null),
    content || children);



    if (withContainer) {
      result = /*#__PURE__*/
      react__WEBPACK_IMPORTED_MODULE_3___default().createElement(_FormContainer_index_ts__WEBPACK_IMPORTED_MODULE_8__.default, null,
      result);


    }

    return result;
  };return FormGroup;}((react__WEBPACK_IMPORTED_MODULE_3___default().PureComponent) /** @lends @FormGroup.prototype */);(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2__.default)(FormGroup, "propTypes", { // background: PropTypes.string,
  align: (prop_types__WEBPACK_IMPORTED_MODULE_4___default().string), alignItems: (prop_types__WEBPACK_IMPORTED_MODULE_4___default().string), className: (prop_types__WEBPACK_IMPORTED_MODULE_4___default().string), content: (prop_types__WEBPACK_IMPORTED_MODULE_4___default().element), // ???
  disabled: (prop_types__WEBPACK_IMPORTED_MODULE_4___default().bool), // ???
  flow: (prop_types__WEBPACK_IMPORTED_MODULE_4___default().bool), fullWidth: (prop_types__WEBPACK_IMPORTED_MODULE_4___default().bool), id: (prop_types__WEBPACK_IMPORTED_MODULE_4___default().string), noSpace: (prop_types__WEBPACK_IMPORTED_MODULE_4___default().bool), noWrap: (prop_types__WEBPACK_IMPORTED_MODULE_4___default().bool), padded: (prop_types__WEBPACK_IMPORTED_MODULE_4___default().bool), separated: (prop_types__WEBPACK_IMPORTED_MODULE_4___default().bool), shaded: (prop_types__WEBPACK_IMPORTED_MODULE_4___default().bool), spaced: (prop_types__WEBPACK_IMPORTED_MODULE_4___default().bool), stack: (prop_types__WEBPACK_IMPORTED_MODULE_4___default().bool), wrap: (prop_types__WEBPACK_IMPORTED_MODULE_4___default().bool), withContainer: (prop_types__WEBPACK_IMPORTED_MODULE_4___default().bool) });(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2__.default)(FormGroup, "classNameModifiers", [// Basic element properties
'id', // Style-related modifiers...
'align', 'alignItems', // 'background',
'flow', 'fullWidth', 'noSpace', 'noWrap', 'padded', 'separated', 'shaded', 'spaced', 'stack', 'wrap' // 'disabled',
]);/* harmony default export */ __webpack_exports__["default"] = ((0,_FormItemHOC_index_ts__WEBPACK_IMPORTED_MODULE_6__.default)(FormGroup));

/***/ }),

/***/ "./src/forms/FormInputGroup/FormInputGroup.jsx":
/*!*****************************************************!*\
  !*** ./src/forms/FormInputGroup/FormInputGroup.jsx ***!
  \*****************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/inheritsLoose */ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _utils_configure__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../utils/configure */ "./src/utils/configure.js");
/* harmony import */ var _FormItemHOC_index_ts__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../FormItemHOC/index.ts */ "./src/forms/FormItemHOC/index.ts");
/* harmony import */ var _FormGroup_index_ts__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../FormGroup/index.ts */ "./src/forms/FormGroup/index.ts");
/* harmony import */ var _FormInputGroup_pcss__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./FormInputGroup.pcss */ "./src/forms/FormInputGroup/FormInputGroup.pcss");
 /** @module FormInputGroup
 *  @class FormInputGroup
 *  @since 2020.10.21, 23:43
 *  @changed 2020.10.21, 23:43
 */
/* eslint-disable react/require-default-props */



// import connect from 'react-redux/es/connect/connect'







var classNameModifiers = [
// Basic element properties
'id'
// Style-related modifiers...
// 'align',
// 'padded',
// 'background',
// 'flow',
// 'fullWidth',
];

var cnFormInputGroup = (0,_utils_configure__WEBPACK_IMPORTED_MODULE_5__.cn)('FormInputGroup');var

FormInputGroup = /*#__PURE__*/function (_React$PureComponent) {(0,_babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_1__.default)(FormInputGroup, _React$PureComponent);function FormInputGroup() {return _React$PureComponent.apply(this, arguments) || this;}var _proto = FormInputGroup.prototype;_proto.









  getClassName = function getClassName() {var _this = this;
    var mods = classNameModifiers.reduce(function (mods, id) {
      var val = _this.props[id];
      if (val != null) {var _extends2;
        return (0,_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__.default)({}, mods, (_extends2 = {}, _extends2[id] = val, _extends2));
      }
      return mods;
    }, {});
    return cnFormInputGroup(mods, [this.props.className]);
  }

  // Render...
  ;_proto.
  render = function render() {
    return /*#__PURE__*/(
      react__WEBPACK_IMPORTED_MODULE_3___default().createElement(_FormGroup_index_ts__WEBPACK_IMPORTED_MODULE_7__.default, (0,_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__.default)({}, this.props, { className: this.getClassName() })));

  };return FormInputGroup;}((react__WEBPACK_IMPORTED_MODULE_3___default().PureComponent) /** @lends @FormInputGroup.prototype */);(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2__.default)(FormInputGroup, "propTypes", { id: (prop_types__WEBPACK_IMPORTED_MODULE_4___default().string) // disabled: PropTypes.bool, // ???
  // align: PropTypes.string,
  // padded: PropTypes.bool,
  // flow: PropTypes.bool,
});/* harmony default export */ __webpack_exports__["default"] = ((0,_FormItemHOC_index_ts__WEBPACK_IMPORTED_MODULE_6__.default)(FormInputGroup));

/***/ }),

/***/ "./src/forms/FormInteractiveItemHOC/FormInteractiveItemHOC.jsx":
/*!*********************************************************************!*\
  !*** ./src/forms/FormInteractiveItemHOC/FormInteractiveItemHOC.jsx ***!
  \*********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/inheritsLoose */ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _helpers_FormContext__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../helpers/FormContext */ "./src/helpers/FormContext.jsx");
 /** @module FormInteractiveItemHOC
 *  @class FormInteractiveItemHOC
 *  @since 2021.01.20, 23:30
 *  @changed 2021.01.20, 23:30
 *
 *  NOTE: Unused (functional is present in `FormFocusableItemHOC` and `FormItemHOC`.
 */
/* eslint-disable react/require-default-props, react/jsx-max-depth, react/require-optimization */


// import { compose } from 'redux';

// import { cn } from 'utils/configure';


var wrapFormInteractiveItemHOC = function wrapFormInteractiveItemHOC(WrappedComponent, params) {if (params === void 0) {params = {};}var
  FormInteractiveItem = /*#__PURE__*/function (_React$Component) {(0,_babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_2__.default)(FormInteractiveItem, _React$Component);function FormInteractiveItem() {var _this;for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {args[_key] = arguments[_key];}_this = _React$Component.call.apply(_React$Component, [this].concat(args)) || this;(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_3__.default)((0,_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_1__.default)(_this), "registeredKeyPressHandlers",



















      []);(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_3__.default)((0,_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_1__.default)(_this), "onKeyPress",



























      function (event) {var

        key =



        event.key,code = event.code,keyCode = event.keyCode,charCode = event.charCode;var _this$props =







        _this.props,id = _this$props.id,onKeyPress = _this$props.onKeyPress,onEnterPressed = _this$props.onEnterPressed,onEscPressed = _this$props.onEscPressed,onSpacePressed = _this$props.onSpacePressed,formContextNode = _this$props.formContextNode;
        // @see https://keycode.info/
        var isEnterPressed = code === 'Enter'; // (keyCode === 13); // Enter?
        var isEscPressed = code === 'Escape'; // (keyCode === 27); // Esc?
        var isSpacePressed = code === 'Space'; // (keyCode === 27); // Space?
        var cbProps = {
          event: event,
          id: id,
          key: key,
          code: code,
          keyCode: keyCode,
          charCode: charCode,
          isEnterPressed: isEnterPressed,
          isEscPressed: isEscPressed,
          isSpacePressed: isSpacePressed,
          domNode: _this.domNode };

        // console.log('FormInteractiveItemHOC:onKeyPress', cbProps);
        // debugger;
        // Process registered callback handlers...
        if (_this.registeredKeyPressHandlers.length) {
          var result = _this.registeredKeyPressHandlers.reduce(function (result, cb) {
            return typeof cb === 'function' && cb(cbProps) === false ? false : result;
          }, undefined);
          // Don't process other handlers and return `false` value if one of registered handlers rerurned `false`.
          if (result === false) {
            // TODO: Stop event propagation?
            // event.stopImmediatePropagation();
            event.stopPropagation();
            return false;
          }
        }
        if (typeof onKeyPress === 'function') {
          onKeyPress(cbProps);
        }
        if (isEnterPressed) {
          if (typeof onEnterPressed === 'function') {
            onEnterPressed(cbProps);
          }
          if (formContextNode && typeof formContextNode.onInputEnterPressed === 'function') {
            formContextNode.onInputEnterPressed(cbProps);
          }
        }
        if (isEscPressed && typeof onEscPressed === 'function') {
          onEscPressed(cbProps);
        }
        if (isSpacePressed && typeof onSpacePressed === 'function') {
          onSpacePressed(cbProps);
        }
      });(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_3__.default)((0,_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_1__.default)(_this), "registerKeyPressHandler",

      function (handler) {
        _this.registeredKeyPressHandlers.push(handler);
      });(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_3__.default)((0,_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_1__.default)(_this), "setDomRef",

      function (domNode) {var
        setDomRef = _this.props.setDomRef;
        _this.domNode = domNode;
        // console.log('FormInteractiveItemHOC:setDomRef', {
        //   domNode,
        // });
        _this.addEventListeners();
        if (typeof setDomRef === 'function') {// Pass to parent if callback specified
          setDomRef(domNode);
        }
      });return _this;}var _proto = FormInteractiveItem.prototype; // Registered keypress callback handlers list...
    // Lifecycle methods...
    _proto.componentWillUnmount = function componentWillUnmount() {this.removeEventListeners();} // Helper methods...
    // focus, blur?
    ;_proto.addEventListeners = function addEventListeners() {if (!this.addedEventListeners && this.domNode) {this.addedEventListeners = true;this.domNode.addEventListener('keypress', this.onKeyPress);}};_proto.removeEventListeners = function removeEventListeners() {if (this.addedEventListeners && this.domNode) {this.addedEventListeners = false;this.domNode.removeEventListener('keypress', this.onKeyPress);}} // Events...
    ; // Render...
    _proto.render = function render() {var renderProps = { setDomRef: this.setDomRef,
        registerKeyPressHandler: this.registerKeyPressHandler };

      return /*#__PURE__*/(
        react__WEBPACK_IMPORTED_MODULE_4___default().createElement(WrappedComponent, (0,_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__.default)({},
        this.props,
        renderProps)));



    };return FormInteractiveItem;}((react__WEBPACK_IMPORTED_MODULE_4___default().Component));(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_3__.default)(FormInteractiveItem, "propTypes", { id: (prop_types__WEBPACK_IMPORTED_MODULE_5___default().string), // name: PropTypes.string,
    // value: PropTypes.bool,
    // disabled: PropTypes.bool,
    setDomRef: (prop_types__WEBPACK_IMPORTED_MODULE_5___default().func), onKeyPress: (prop_types__WEBPACK_IMPORTED_MODULE_5___default().func), onEnterPressed: (prop_types__WEBPACK_IMPORTED_MODULE_5___default().func), onEscPressed: (prop_types__WEBPACK_IMPORTED_MODULE_5___default().func), onSpacePressed: (prop_types__WEBPACK_IMPORTED_MODULE_5___default().func), // FormContext Provider
    formContextNode: prop_types__WEBPACK_IMPORTED_MODULE_5___default().shape({ onInputEnterPressed: (prop_types__WEBPACK_IMPORTED_MODULE_5___default().func) }) });(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_3__.default)(FormInteractiveItem, "defaultProps", { id: params.id });return (0,_helpers_FormContext__WEBPACK_IMPORTED_MODULE_6__.withFormContext)(FormInteractiveItem);};

/** Usage:
 * FormInteractiveItemHOC(component)
 * FormInteractiveItemHOC(params)(component)
 */
var FormInteractiveItemHOC = function FormInteractiveItemHOC(params) {
  if (typeof params === 'string') {// Passed identifier
    params = { id: params };
  }
  if (typeof params === 'object') {// Params passed -> metafabric
    return function (component) {return wrapFormInteractiveItemHOC(component, params);};
  } else
  {// Component passed -> simple fabric
    return wrapFormInteractiveItemHOC(params);
  }
};

// export default FormItemHOC({ hoverable: true, focusable: true, framed: false })(FormInteractiveItemHOC)
/* harmony default export */ __webpack_exports__["default"] = (FormInteractiveItemHOC);

/***/ }),

/***/ "./src/forms/FormItemDummy/FormItemDummy.jsx":
/*!***************************************************!*\
  !*** ./src/forms/FormItemDummy/FormItemDummy.jsx ***!
  \***************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/inheritsLoose */ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _utils_configure__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../utils/configure */ "./src/utils/configure.js");
/* harmony import */ var _FormItemHOC_index_ts__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../FormItemHOC/index.ts */ "./src/forms/FormItemHOC/index.ts");
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ "@fortawesome/react-fontawesome");
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _FormItemDummy_pcss__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./FormItemDummy.pcss */ "./src/forms/FormItemDummy/FormItemDummy.pcss");
 /** @module FormItemDummy
 *  @class FormItemDummy
 *  @desc Demo form item
 *  @since 2020.07.20, 19:07
 *  @changed 2020.07.20, 19:07
 */


// import connect from 'react-redux/es/connect/connect'








var cnFormItemDummy = (0,_utils_configure__WEBPACK_IMPORTED_MODULE_4__.cn)('FormItemDummy');var

FormItemDummy = /*#__PURE__*/function (_React$PureComponent) {(0,_babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_1__.default)(FormItemDummy, _React$PureComponent);

  function FormItemDummy(props) {var _this;
    _this = _React$PureComponent.call(this, props) || this;
    // const {
    //   hoverable,
    //   clickable,
    //   checked,
    // } = props
    (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2__.default)((0,_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_0__.default)(_this), "onClick",




































































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
    var iconImg = icon && icon.iconName ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_6__.FontAwesomeIcon, { className: cnFormItemDummy('IconImg'), icon: icon }) : icon;
    var iconElem = hasIcon && /*#__PURE__*/
    react__WEBPACK_IMPORTED_MODULE_3___default().createElement("span", { key: "Icon", className: cnFormItemDummy('Icon') },
    iconImg);



    // Text element
    var textElem = hasText && /*#__PURE__*/
    react__WEBPACK_IMPORTED_MODULE_3___default().createElement("span", { key: "Text", className: cnFormItemDummy('Text') },
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
    var element = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement(tagName, renderProps, content);
    return element;
  };return FormItemDummy;}((react__WEBPACK_IMPORTED_MODULE_3___default().PureComponent) /** @lends @FormItemDummy.prototype */);



/* harmony default export */ __webpack_exports__["default"] = ((0,_FormItemHOC_index_ts__WEBPACK_IMPORTED_MODULE_5__.default)(FormItemDummy));

/***/ }),

/***/ "./src/forms/FormItemHOC/FormItemHOC.jsx":
/*!***********************************************!*\
  !*** ./src/forms/FormItemHOC/FormItemHOC.jsx ***!
  \***********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/inheritsLoose */ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _utils_configure__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../utils/configure */ "./src/utils/configure.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _FormItemHOC_pcss__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./FormItemHOC.pcss */ "./src/forms/FormItemHOC/FormItemHOC.pcss");
 /** @module FormItemHOC
 *  @class FormItemHOC
 *  @since 2019.09.25, 19:18
 *  @changed 2021.01.28, 21:58
 */







var cnFormItem = (0,_utils_configure__WEBPACK_IMPORTED_MODULE_5__.cn)('FormItem');

var classNameModifiers = [// Pass props/state params to class modifiers
// Display-related modifiers...
'fullWidth',
// 'innerFlex', // (???)
// 'solid', // Item is unwrappable (???)
'framed', // Frame around item (input field, button, select etc)
// Behavior-related modifiers...
'hoverable', // Allow hover effects
'focusable', // Allow hover effects
'clickable',
// States...
'hovered',
'focused',
'pressed',
// 'checked', // Use in derived elements
'disabled'
// 'fill', // (???)
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

var deriveState = function deriveState() {for (var _len = arguments.length, sets = new Array(_len), _key = 0; _key < _len; _key++) {sets[_key] = arguments[_key];}
  return props2State.reduce(function (state, id) {
    var val = sets.reduce(function (val, set) {
      return set[id] != null /* && val == null */ ? set[id] : val;
    }, null);
    if (val != null) {var _extends2;
      return (0,_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_3__.default)({}, state, (_extends2 = {}, _extends2[id] = val, _extends2));
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

var wrapFormItemHOC = function wrapFormItemHOC(WrappedComponent, params) {var _class, _temp;if (params === void 0) {params = {};}return _temp = _class = /*#__PURE__*/function (_React$Component) {(0,_babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_1__.default)(FormItem, _React$Component);var _proto = FormItem.prototype;


















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
      _this = _React$Component.call(this, props) || this;(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2__.default)((0,_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_0__.default)(_this), "focus",






































































      function () {var _assertThisInitialize = (0,_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_0__.default)(_this),
        formItemDomRef = _assertThisInitialize.formItemDomRef;
        // console.log('FormItem:focus');
        formItemDomRef && formItemDomRef.focus && formItemDomRef.focus();
        _this.handleFocusIn();
      });(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2__.default)((0,_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_0__.default)(_this), "blur",
      function () {var _assertThisInitialize2 = (0,_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_0__.default)(_this),
        formItemDomRef = _assertThisInitialize2.formItemDomRef;
        // console.log('FormItem:blur');
        formItemDomRef && formItemDomRef.blur && formItemDomRef.blur();
        _this.handleFocusOut();
      });(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2__.default)((0,_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_0__.default)(_this), "handleMouseOver",

      function () {
        var disabled = _this.getStateOrPropOrParam('disabled');
        var hoverable = _this.getStateOrPropOrParam('hoverable');
        // console.log('FormItemHOC:handleMouseOver');
        if (hoverable && !disabled) {
          _this.setState({ hovered: true });
        }
      });(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2__.default)((0,_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_0__.default)(_this), "handleMouseOut",
      function () {
        var disabled = _this.getStateOrPropOrParam('disabled');
        var hoverable = _this.getStateOrPropOrParam('hoverable');
        // console.log('FormItemHOC:handleMouseOut');
        if (hoverable && !disabled) {
          _this.setState({ hovered: false });
        }
      });(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2__.default)((0,_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_0__.default)(_this), "handleFocusIn",

      function () {
        var disabled = _this.getStateOrPropOrParam('disabled');
        var focusable = _this.getStateOrPropOrParam('focusable');
        if (focusable && !disabled) {
          // console.log('FormItemHOC:handleFocusIn');
          _this.setState({ focused: true });
        }
      });(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2__.default)((0,_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_0__.default)(_this), "handleFocusOut",
      function () {
        var disabled = _this.getStateOrPropOrParam('disabled');
        var focusable = _this.getStateOrPropOrParam('focusable');
        if (focusable && !disabled) {
          // console.log('FormItemHOC:handleFocusOut');
          _this.setState({ focused: false });
        }
      });(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2__.default)((0,_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_0__.default)(_this), "setDomRef",

      function (domRef) {// Children dom node receiver
        _this.formItemDomRef = domRef;var
        setDomRef = _this.props.setDomRef;
        if (typeof setDomRef === 'function') {
          setDomRef(domRef);
        }
        // domRef && domRef.focus && domRef.focus() // ???
      });_this.state = deriveState(defaultState, params, props); // deriveStateFromProps(props, defaultState)
      _this.id = props.id || params.id;return _this;}FormItem.getDerivedStateFromProps = function getDerivedStateFromProps(props, state) {// TODO: Update event subscriptions if `hoverable` flag changed?
      return deriveState(params, props, state); // deriveStateFromProps(props, state)
    };_proto.componentDidMount = function componentDidMount() {var formItemDomRef = this.formItemDomRef;if (formItemDomRef && formItemDomRef.addEventListener) {var hoverable = this.getStateOrPropOrParam('hoverable');var focusable = this.getStateOrPropOrParam('focusable');if (hoverable && !this.hoverableInited) {this.hoverableInited = true;formItemDomRef.addEventListener('mouseover', this.handleMouseOver);formItemDomRef.addEventListener('mouseout', this.handleMouseOut);}if (focusable && !this.focusableInited) {this.focusableInited = true; // formItemDomRef.addEventListener('focus', this.handleFocusIn);
          formItemDomRef.addEventListener('focus', this.handleFocusIn);formItemDomRef.addEventListener('blur', this.handleFocusOut);formItemDomRef.addEventListener('focusin', this.handleFocusIn);formItemDomRef.addEventListener('focusout', this.handleFocusOut); // console.log('FormItemHOC:componentDidMount: focus event handlers added');
          this.focus = function () {// Focus handler
            formItemDomRef && formItemDomRef.focus && formItemDomRef.focus();};}}var setFormItemNodeRef = this.props.setFormItemNodeRef;if (typeof setFormItemNodeRef === 'function') {setFormItemNodeRef(this);}};_proto.componentWillUnmount = function componentWillUnmount() {var formItemDomRef = this.formItemDomRef;if (formItemDomRef && formItemDomRef.removeEventListener) {// const hoverable = this.getStateOrPropOrParam('hoverable')
        // const focusable = this.getStateOrPropOrParam('focusable')
        if (this.hoverableInited) {formItemDomRef.removeEventListener('mouseover', this.handleMouseOver);formItemDomRef.removeEventListener('mouseout', this.handleMouseOut);}if (this.focusableInited) {formItemDomRef.removeEventListener('focus', this.handleFocusIn);formItemDomRef.removeEventListener('blur', this.handleFocusOut);formItemDomRef.removeEventListener('focusin', this.handleFocusIn);formItemDomRef.removeEventListener('focusout', this.handleFocusOut);}}};_proto.getClassName = function getClassName() {var _this2 = this; // Collect modifier values from state or props
      var mods = classNameModifiers.reduce(function (mods, id) {var val = _this2.getStateOrPropOrParam(id); // (this.state[id] != null) ? this.state[id] : this.props[id]
        if (val != null) {mods[id] = val;}return mods;}, {});return cnFormItem(mods, [this.props.className]);} // Handlers...
    ;_proto.render = function render() {var _this$state = this.state,hovered = _this$state.hovered,focused = _this$state.focused;var renderProps = { hovered: hovered, focused: focused, formItemNode: this, className: this.getClassName(),
        setDomRef: this.setDomRef // Children dom node receiver
        // formItemDomRef: this.formItemDomRef,
      };
      var focusable = this.getStateOrPropOrParam('focusable');
      if (focusable) {
        renderProps.tabIndex = 0;
      }
      return /*#__PURE__*/(
        react__WEBPACK_IMPORTED_MODULE_4___default().createElement(WrappedComponent, (0,_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_3__.default)({},
        this.props,
        renderProps)));


    };return FormItem;}((react__WEBPACK_IMPORTED_MODULE_4___default().Component)), (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2__.default)(_class, "propTypes", { checked: (prop_types__WEBPACK_IMPORTED_MODULE_6___default().bool), className: (prop_types__WEBPACK_IMPORTED_MODULE_6___default().string), clickable: (prop_types__WEBPACK_IMPORTED_MODULE_6___default().bool), disabled: (prop_types__WEBPACK_IMPORTED_MODULE_6___default().bool), focusable: (prop_types__WEBPACK_IMPORTED_MODULE_6___default().bool), focused: (prop_types__WEBPACK_IMPORTED_MODULE_6___default().bool), framed: (prop_types__WEBPACK_IMPORTED_MODULE_6___default().bool), fullWidth: (prop_types__WEBPACK_IMPORTED_MODULE_6___default().bool), hoverable: (prop_types__WEBPACK_IMPORTED_MODULE_6___default().bool), hovered: (prop_types__WEBPACK_IMPORTED_MODULE_6___default().bool), id: (prop_types__WEBPACK_IMPORTED_MODULE_6___default().string), pressed: (prop_types__WEBPACK_IMPORTED_MODULE_6___default().bool), setDomRef: (prop_types__WEBPACK_IMPORTED_MODULE_6___default().func), setFormItemNodeRef: (prop_types__WEBPACK_IMPORTED_MODULE_6___default().func) }), _temp;};



/** Usage:
 * FormItemHOC(component)
 * FormItemHOC(params)(component)
 */
var FormItemHOC = function FormItemHOC(params) {
  if (typeof params === 'string') {// Passed identifier
    params = { id: params };
  }
  if (typeof params === 'object') {// Params passed -> metafabric
    return function (component) {return wrapFormItemHOC(component, params);};
  } else
  {// Component passed -> simple fabric
    return wrapFormItemHOC(params);
  }
};

/* harmony default export */ __webpack_exports__["default"] = (FormItemHOC);

/***/ }),

/***/ "./src/forms/FormLabel/FormLabel.jsx":
/*!*******************************************!*\
  !*** ./src/forms/FormLabel/FormLabel.jsx ***!
  \*******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/inheritsLoose */ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _utils_configure__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../utils/configure */ "./src/utils/configure.js");
/* harmony import */ var _FormItemHOC_index_ts__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../FormItemHOC/index.ts */ "./src/forms/FormItemHOC/index.ts");
/* harmony import */ var _FormLabel_pcss__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./FormLabel.pcss */ "./src/forms/FormLabel/FormLabel.pcss");
 /** @module FormLabel
 *  @class FormLabel
 *  @since 2020.10.06, 23:45
 *  @changed 2020.10.06, 23:46
 */
/* eslint-disable react/require-default-props */



// import connect from 'react-redux/es/connect/connect'






var cnFormLabel = (0,_utils_configure__WEBPACK_IMPORTED_MODULE_5__.cn)('FormLabel');var

FormLabel = /*#__PURE__*/function (_React$PureComponent) {(0,_babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_1__.default)(FormLabel, _React$PureComponent);function FormLabel() {var _this;for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {args[_key] = arguments[_key];}_this = _React$PureComponent.call.apply(_React$PureComponent, [this].concat(args)) || this;(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2__.default)((0,_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_0__.default)(_this), "onClick",























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
      react__WEBPACK_IMPORTED_MODULE_3___default().createElement("div", renderProps, /*#__PURE__*/
      react__WEBPACK_IMPORTED_MODULE_3___default().createElement("label", {
        className: cnFormLabel('Control', ['FormItem-Control']),
        id: id,
        name: name,
        disabled: disabled,
        htmlFor: htmlFor,
        title: title },

      children || text || title)));



  };return FormLabel;}((react__WEBPACK_IMPORTED_MODULE_3___default().PureComponent) /** @lends @FormLabel.prototype */);(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2__.default)(FormLabel, "propTypes", { id: (prop_types__WEBPACK_IMPORTED_MODULE_4___default().string) });



/* harmony default export */ __webpack_exports__["default"] = ((0,_FormItemHOC_index_ts__WEBPACK_IMPORTED_MODULE_6__.default)({ hoverable: true, solid: true })(FormLabel));

/***/ }),

/***/ "./src/forms/FormLabeledGroup/FormLabeledGroup.jsx":
/*!*********************************************************!*\
  !*** ./src/forms/FormLabeledGroup/FormLabeledGroup.jsx ***!
  \*********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _FormGroup_index_ts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../FormGroup/index.ts */ "./src/forms/FormGroup/index.ts");
/* harmony import */ var _FormLabel_index_ts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../FormLabel/index.ts */ "./src/forms/FormLabel/index.ts");
/** @module FormLabeledGroup
 *  @class FormLabeledGroup
 *  @since 2020.05.10, 09:24
 *  @changed 2020.12.10, 16:20
 */


// import { cn } from 'utils/configure'




// import './FormLabeledGroup.pcss'

// const cnFormLabeledGroup = cn('FormLabeledGroup')

var FormLabeledGroup = function FormLabeledGroup(props) /** @lends @FormLabeledGroup.prototype */{var

  className =










  props.className,children = props.children,id = props.id,fullWidth = props.fullWidth,innerFlex = props.innerFlex,htmlFor = props.htmlFor,title = props.title,text = props.text,flow = props.flow;
  // const thisClassName = cnFormLabeledGroup({ flow, full })
  return /*#__PURE__*/(
    react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_FormGroup_index_ts__WEBPACK_IMPORTED_MODULE_1__.default, {
      className: className,
      fullWidth: fullWidth,
      innerFlex: innerFlex,
      flow: flow,
      id: id }, /*#__PURE__*/

    react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_FormLabel_index_ts__WEBPACK_IMPORTED_MODULE_2__.default, {
      htmlFor: htmlFor,
      title: title,
      text: text || title + ':',
      fixed: flow && fullWidth,
      firstInBlock: !flow && fullWidth }),

    children));



};

/* harmony default export */ __webpack_exports__["default"] = (FormLabeledGroup);

/***/ }),

/***/ "./src/forms/FormPasswordInput/FormPasswordInput.jsx":
/*!***********************************************************!*\
  !*** ./src/forms/FormPasswordInput/FormPasswordInput.jsx ***!
  \***********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/inheritsLoose */ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _utils_configure__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../utils/configure */ "./src/utils/configure.js");
/* harmony import */ var _FormTextInput_index_ts__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../FormTextInput/index.ts */ "./src/forms/FormTextInput/index.ts");
/* harmony import */ var _FormPasswordInput_pcss__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./FormPasswordInput.pcss */ "./src/forms/FormPasswordInput/FormPasswordInput.pcss");
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



var cnFormPasswordInput = (0,_utils_configure__WEBPACK_IMPORTED_MODULE_5__.cn)('FormPasswordInput');var

FormPasswordInput = /*#__PURE__*/function (_React$PureComponent) {(0,_babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_2__.default)(FormPasswordInput, _React$PureComponent);

  // Lifecycle...

  function FormPasswordInput(props) {var _this;
    _this = _React$PureComponent.call(this, props) || this;(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_3__.default)((0,_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_1__.default)(_this), "onTypeIconClick",


































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
      react__WEBPACK_IMPORTED_MODULE_4___default().createElement(_FormTextInput_index_ts__WEBPACK_IMPORTED_MODULE_6__.default, (0,_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__.default)({
        iconTitle: "Show/hide password",
        onIconClick: this.onTypeIconClick },
      this.props, {
        type: type,
        icon: icon })));



  };return FormPasswordInput;}((react__WEBPACK_IMPORTED_MODULE_4___default().PureComponent) /** @lends @FormPasswordInput.prototype */);



/* // propTypes
 * FormPasswordInput.propTypes = {
 *   id: PropTypes.string,
 * }
 */
/* harmony default export */ __webpack_exports__["default"] = (/* FormItemHOC({ hoverable: true, framed: true })( */FormPasswordInput);

/***/ }),

/***/ "./src/forms/FormRadio/FormRadio.jsx":
/*!*******************************************!*\
  !*** ./src/forms/FormRadio/FormRadio.jsx ***!
  \*******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/inheritsLoose */ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _utils_configure__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../utils/configure */ "./src/utils/configure.js");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! redux */ "redux");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _FormItemHOC_index_ts__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../FormItemHOC/index.ts */ "./src/forms/FormItemHOC/index.ts");
/* harmony import */ var _FormBooleanHOC_index_ts__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../FormBooleanHOC/index.ts */ "./src/forms/FormBooleanHOC/index.ts");
/* harmony import */ var _FormInteractiveItemHOC_index_ts__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../FormInteractiveItemHOC/index.ts */ "./src/forms/FormInteractiveItemHOC/index.ts");
/* harmony import */ var _FormRadio_pcss__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./FormRadio.pcss */ "./src/forms/FormRadio/FormRadio.pcss");
/* harmony import */ var _FormRadio_Themes_pcss__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./FormRadio-Themes.pcss */ "./src/forms/FormRadio/FormRadio-Themes.pcss");
 /** @module FormRadio
 *  @class FormRadio
 *  @since 2020.04.02, 14:53
 *  @changed 2021.01.20, 23:28
 */
/* eslint-disable react/require-default-props, react/jsx-max-depth */






// import FormItem from '../FormItem'



// import { withFormContext } from 'helpers/FormContext';

// import FormFocusableItemHOC from 'forms/FormFocusableItemHOC';




var cnFormRadio = (0,_utils_configure__WEBPACK_IMPORTED_MODULE_4__.cn)('FormRadio');var

FormRadio = /*#__PURE__*/function (_React$PureComponent) {(0,_babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__.default)(FormRadio, _React$PureComponent);function FormRadio() {return _React$PureComponent.apply(this, arguments) || this;}var _proto = FormRadio.prototype;

















  // Lifecycle

  // Helper methods...
  _proto.
  getClassName = function getClassName() {var _this$props =







    this.props,id = _this$props.id,value = _this$props.value,theme = _this$props.theme,disabled = _this$props.disabled,active = _this$props.active;
    var checked = !!value;
    var mods = {
      id: id,
      checked: checked,
      theme: theme,
      disabled: disabled,
      active: active
      // focused,
    };
    var classList = cnFormRadio(mods, [this.props.className]);
    return classList;
  }

  // Render...
  ;_proto.
  renderInput = function renderInput() {var _this$props2 =







    this.props,id = _this$props2.id,inputId = _this$props2.inputId,name = _this$props2.name,handleChange = _this$props2.handleChange,value = _this$props2.value,setDomRef = _this$props2.setDomRef;
    var checked = !!value;
    var inputProps = {
      type: 'checkbox',
      className: cnFormRadio('Input'),
      id: inputId || id || name,
      name: name || inputId || id,
      checked: checked,
      onChange: handleChange,
      ref: setDomRef
      // ref: setInputDomRef,
      // tabIndex,
    };
    return /*#__PURE__*/(
      react__WEBPACK_IMPORTED_MODULE_2___default().createElement("input", inputProps));

  };_proto.

  render = function render() {var _this$props3 =





    this.props,id = _this$props3.id,disabled = _this$props3.disabled;
    var renderProps = {
      id: id,
      className: this.getClassName(),
      disabled: disabled,
      onKeyPress: this.onKeyPress
      // ref: setDomRef,
    };
    return /*#__PURE__*/(
      react__WEBPACK_IMPORTED_MODULE_2___default().createElement("div", renderProps, /*#__PURE__*/
      react__WEBPACK_IMPORTED_MODULE_2___default().createElement("div", {
        className: cnFormRadio('Control', ['FormItem-Control']),
        disabled: disabled }, /*#__PURE__*/

      react__WEBPACK_IMPORTED_MODULE_2___default().createElement("span", { className: cnFormRadio('Frame') }, /*#__PURE__*/
      react__WEBPACK_IMPORTED_MODULE_2___default().createElement("span", { className: cnFormRadio('Actor') })),

      this.renderInput())));



  };return FormRadio;}((react__WEBPACK_IMPORTED_MODULE_2___default().PureComponent) /** @lends @FormRadio.prototype */);



// export default FormItemHOC({ hoverable: true, focusable: true, framed: false })(FormRadio)
(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1__.default)(FormRadio, "propTypes", { active: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().bool), disabled: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().bool), handleChange: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().func), id: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().string), name: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().string), onChange: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().func), setDomRef: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().func), // From FormItemHOC
  theme: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().string), value: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().bool) });(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1__.default)(FormRadio, "defaultProps", { value: false });/* harmony default export */ __webpack_exports__["default"] = ((0,redux__WEBPACK_IMPORTED_MODULE_5__.compose)( // withFormContext,
_FormInteractiveItemHOC_index_ts__WEBPACK_IMPORTED_MODULE_8__.default,
// FormFocusableItemHOC,
(0,_FormItemHOC_index_ts__WEBPACK_IMPORTED_MODULE_6__.default)({ hoverable: true, focusable: true, framed: false }),
_FormBooleanHOC_index_ts__WEBPACK_IMPORTED_MODULE_7__.default)(
FormRadio));

/***/ }),

/***/ "./src/forms/FormSelect/FormSelect.jsx":
/*!*********************************************!*\
  !*** ./src/forms/FormSelect/FormSelect.jsx ***!
  \*********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/inheritsLoose */ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _utils_configure__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../utils/configure */ "./src/utils/configure.js");
/* harmony import */ var _FormItemHOC_index_ts__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../FormItemHOC/index.ts */ "./src/forms/FormItemHOC/index.ts");
/* harmony import */ var _elements_ModalPopup_index_ts__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../elements/ModalPopup/index.ts */ "./src/elements/ModalPopup/index.ts");
/* harmony import */ var _elements_Menu_index_ts__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../elements/Menu/index.ts */ "./src/elements/Menu/index.ts");
/* harmony import */ var _FormButton_index_ts__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../FormButton/index.ts */ "./src/forms/FormButton/index.ts");
/* harmony import */ var _FormSelect_pcss__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./FormSelect.pcss */ "./src/forms/FormSelect/FormSelect.pcss");
 /** @module FormSelect
 *  @class FormSelect
 *  @since 2020.10.28, 22:49
 *  @changed 2021.02.15, 18:28
 *
 *  TODO 2020.12.16, 23:07 -- Add hidden html form element (for form submission)
 */
/* eslint-disable react/require-default-props */













var cnFormSelect = (0,_utils_configure__WEBPACK_IMPORTED_MODULE_5__.cn)('FormSelect');var

FormSelect = /*#__PURE__*/function (_React$PureComponent) {(0,_babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_1__.default)(FormSelect, _React$PureComponent);




























  // Lifecycle methods...

  function FormSelect(props) {var _this;
    _this = _React$PureComponent.call(this, props) || this;
    // this.formItemRef = React.createRef()
    (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2__.default)((0,_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_0__.default)(_this), "onControlClick",
































    function (params) {var
      onControlClick = _this.props.onControlClick;
      if (typeof onControlClick === 'function') {
        onControlClick(params);
      }
    });(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2__.default)((0,_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_0__.default)(_this), "onMenuItemClick",
    function (params) {var _this$props =
      _this.props,closeOnSelect = _this$props.closeOnSelect,onMenuItemClick = _this$props.onMenuItemClick;
      if (typeof onMenuItemClick === 'function') {
        onMenuItemClick(params);
      }
      if (closeOnSelect && _this.popupNode) {
        _this.popupNode.close();
      }
    });(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2__.default)((0,_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_0__.default)(_this), "onMenuChange",
    function (params) {var
      onChange = _this.props.onChange;var
      selected = params.selected;
      if (typeof onChange === 'function') {var _this$props2 =
        _this.props,id = _this$props2.id,inputId = _this$props2.inputId,name = _this$props2.name,singleChoice = _this$props2.singleChoice;
        var value = singleChoice ? selected[0] : selected;
        var setId = id || inputId || name;
        var setParams = { id: setId, selected: selected, value: value };
        onChange(setParams);
      }
      _this.setState({ selected: selected });
    });(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2__.default)((0,_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_0__.default)(_this), "setPopupRef",

    function (node) {var
      setPopupNodeRef = _this.props.setPopupNodeRef;
      _this.popupNode = node;
      if (setPopupNodeRef && typeof setPopupNodeRef === 'function') {
        setPopupNodeRef(node);
      }
    });(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2__.default)((0,_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_0__.default)(_this), "handleOpenState",

    function (_ref) {var open = _ref.open;
      _this.setState({ open: open });
    });_this.id = props.id || props.inputId || props.name;var _selected = props.selected,_value = props.value;_this.state = { selected: Array.isArray(_selected) ? _selected : _value && [_value] || [] }; // if (props.setNodeRef) {
    //   props.setNodeRef(this);
    // }
    return _this;} // Helper methods...
  var _proto = FormSelect.prototype;_proto.getClassName = function getClassName() {var id = this.id;var classList = cnFormSelect({ id: id }, [this.props.className]);return classList;};_proto.getItemsText = function getItemsText() {var selected = this.state.selected;var options = this.props.options;var text = Array.isArray(options) && Array.isArray(selected) && options.map(function (_ref2) {var val = _ref2.val,text = _ref2.text;if (selected.includes(val)) {return text;}}).filter(Boolean).join(', ');return text;} // Handlers...
  ; // Render...
  _proto.renderControlContent = function renderControlContent() {var _this$props3 =






    this.props,text = _this$props3.text,placeholder = _this$props3.placeholder,title = _this$props3.title,controlButtonTheme = _this$props3.controlButtonTheme,_this$props3$fullWidt = _this$props3.fullWidth,fullWidth = _this$props3$fullWidt === void 0 ? true : _this$props3$fullWidt,disabled = _this$props3.disabled,inputId = _this$props3.inputId;var

    open =
    this.state.open;
    var buttonText = this.getItemsText() || placeholder || text;
    return /*#__PURE__*/(
      react__WEBPACK_IMPORTED_MODULE_3___default().createElement(_FormButton_index_ts__WEBPACK_IMPORTED_MODULE_9__.default, {
        inputId: inputId,
        icon: "faChevronDown",
        rightIcon: true,
        theme: controlButtonTheme || 'primary',
        variation: "popupControl",
        rotatedIcon: true,
        text: buttonText,
        title: title,
        fullWidth: fullWidth,
        disabled: disabled,
        checkable: true,
        checked: open }));


  };_proto.

  renderMenuContent = function renderMenuContent() {var _this$props4 =








    this.props,singleChoice = _this$props4.singleChoice,options = _this$props4.options,disabled = _this$props4.disabled,itemTheme = _this$props4.itemTheme,wrapContent = _this$props4.wrapContent;var

    selected =
    this.state.selected;
    return /*#__PURE__*/(
      react__WEBPACK_IMPORTED_MODULE_3___default().createElement(_elements_Menu_index_ts__WEBPACK_IMPORTED_MODULE_8__.default, {
        selectable: true,
        singleChoice: singleChoice,
        onChange: this.onMenuChange,
        onClick: this.onMenuItemClick,
        selected: selected
        // value={value}
        , disabled: disabled,
        itemTheme: itemTheme
        // itemSelectedTheme={itemSelectedTheme}
        , wrapContent: wrapContent },

      options));


  };_proto.

  render = function render() {var _this$props5 =








    this.props,id = _this$props5.id,disabled = _this$props5.disabled,title = _this$props5.title,open = _this$props5.open,fullWidth = _this$props5.fullWidth,setDomRef = _this$props5.setDomRef;

    var controlContent = this.renderControlContent();
    var menuContent = this.renderMenuContent();

    var popupProps = {
      id: id,
      className: this.getClassName(),
      // contentClassName: 'XXX', // ???
      disabled: disabled,
      title: title,
      open: open,
      popupControl: controlContent,
      popupContent: menuContent,
      onControlClick: this.onControlClick,
      fullWidth: fullWidth,
      ref: this.setPopupRef,
      setDomRef: setDomRef,
      handleOpenState: this.handleOpenState };


    return /*#__PURE__*/(
      react__WEBPACK_IMPORTED_MODULE_3___default().createElement(_elements_ModalPopup_index_ts__WEBPACK_IMPORTED_MODULE_7__.default, popupProps));


  };return FormSelect;}((react__WEBPACK_IMPORTED_MODULE_3___default().PureComponent) /** @lends @FormSelect.prototype */);(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2__.default)(FormSelect, "propTypes", { // setNodeRef: PropTypes.func,
  // value: PropTypes.oneOfType([ PropTypes.string, PropTypes.number, PropTypes.arrayOf(PropTypes.oneOfType([ PropTypes.string, PropTypes.number ])) ]),
  closeOnSelect: (prop_types__WEBPACK_IMPORTED_MODULE_4___default().bool), controlButtonTheme: (prop_types__WEBPACK_IMPORTED_MODULE_4___default().string), // itemSelectedTheme: PropTypes.string,
  wrapContent: (prop_types__WEBPACK_IMPORTED_MODULE_4___default().bool), disabled: (prop_types__WEBPACK_IMPORTED_MODULE_4___default().bool), fullWidth: (prop_types__WEBPACK_IMPORTED_MODULE_4___default().bool), id: (prop_types__WEBPACK_IMPORTED_MODULE_4___default().string), inputId: (prop_types__WEBPACK_IMPORTED_MODULE_4___default().string), name: (prop_types__WEBPACK_IMPORTED_MODULE_4___default().string), onChange: (prop_types__WEBPACK_IMPORTED_MODULE_4___default().func), onControlClick: (prop_types__WEBPACK_IMPORTED_MODULE_4___default().func), onMenuItemClick: (prop_types__WEBPACK_IMPORTED_MODULE_4___default().func), open: (prop_types__WEBPACK_IMPORTED_MODULE_4___default().bool), options: prop_types__WEBPACK_IMPORTED_MODULE_4___default().arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_4___default().shape({ val: prop_types__WEBPACK_IMPORTED_MODULE_4___default().oneOfType([(prop_types__WEBPACK_IMPORTED_MODULE_4___default().string), (prop_types__WEBPACK_IMPORTED_MODULE_4___default().number)]), text: (prop_types__WEBPACK_IMPORTED_MODULE_4___default().string) })), placeholder: (prop_types__WEBPACK_IMPORTED_MODULE_4___default().string), selected: prop_types__WEBPACK_IMPORTED_MODULE_4___default().arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_4___default().oneOfType([(prop_types__WEBPACK_IMPORTED_MODULE_4___default().string), (prop_types__WEBPACK_IMPORTED_MODULE_4___default().number)])), setDomRef: (prop_types__WEBPACK_IMPORTED_MODULE_4___default().func), setPopupNodeRef: (prop_types__WEBPACK_IMPORTED_MODULE_4___default().func), singleChoice: prop_types__WEBPACK_IMPORTED_MODULE_4___default().oneOfType([(prop_types__WEBPACK_IMPORTED_MODULE_4___default().string), (prop_types__WEBPACK_IMPORTED_MODULE_4___default().bool)]), text: (prop_types__WEBPACK_IMPORTED_MODULE_4___default().string), title: (prop_types__WEBPACK_IMPORTED_MODULE_4___default().string), value: prop_types__WEBPACK_IMPORTED_MODULE_4___default().oneOfType([(prop_types__WEBPACK_IMPORTED_MODULE_4___default().string), (prop_types__WEBPACK_IMPORTED_MODULE_4___default().number)]) });
/* harmony default export */ __webpack_exports__["default"] = ((0,_FormItemHOC_index_ts__WEBPACK_IMPORTED_MODULE_6__.default)({ solid: true, hoverable: true })(FormSelect));

/***/ }),

/***/ "./src/forms/FormSeparator/FormSeparator.jsx":
/*!***************************************************!*\
  !*** ./src/forms/FormSeparator/FormSeparator.jsx ***!
  \***************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utils_configure__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils/configure */ "./src/utils/configure.js");
/* harmony import */ var _FormSeparator_pcss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./FormSeparator.pcss */ "./src/forms/FormSeparator/FormSeparator.pcss");
/** @module FormSeparator
 *  @class FormSeparator
 *  @since 2021.02.20, 13:40
 *  @changed 2021.02.20, 13:40
 */






var FormSeparator = function FormSeparator(props) {var
  id = props.id;
  var className = (0,_utils_configure__WEBPACK_IMPORTED_MODULE_1__.cn)('FormSeparator')({ id: id }, [props.className, 'FormItem']);
  return /*#__PURE__*/(
    react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: className }));

};

/* harmony default export */ __webpack_exports__["default"] = (FormSeparator);

/***/ }),

/***/ "./src/forms/FormSpacer/FormSpacer.jsx":
/*!*********************************************!*\
  !*** ./src/forms/FormSpacer/FormSpacer.jsx ***!
  \*********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utils_configure__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils/configure */ "./src/utils/configure.js");
/* harmony import */ var _FormSpacer_pcss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./FormSpacer.pcss */ "./src/forms/FormSpacer/FormSpacer.pcss");
/** @module FormSpacer
 *  @class FormSpacer
 *  @since 2020.11.27, 12:52
 *  @changed 2020.11.27, 12:52
 */






var FormSpacer = function FormSpacer(props) {var
  id = props.id;
  var className = (0,_utils_configure__WEBPACK_IMPORTED_MODULE_1__.cn)('FormSpacer')({ id: id }, [props.className]);
  return /*#__PURE__*/(
    react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: className }));

};

/* harmony default export */ __webpack_exports__["default"] = (FormSpacer);

/***/ }),

/***/ "./src/forms/FormTextInput/FormTextInput.jsx":
/*!***************************************************!*\
  !*** ./src/forms/FormTextInput/FormTextInput.jsx ***!
  \***************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/inheritsLoose */ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! redux */ "redux");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _utils_configure__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../utils/configure */ "./src/utils/configure.js");
/* harmony import */ var _utils_lang__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../utils/lang */ "./src/utils/lang.js");
/* harmony import */ var _elements_InlineIcon_index_ts__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../elements/InlineIcon/index.ts */ "./src/elements/InlineIcon/index.ts");
/* harmony import */ var _FormItemHOC_index_ts__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../FormItemHOC/index.ts */ "./src/forms/FormItemHOC/index.ts");
/* harmony import */ var _FormInteractiveItemHOC_index_ts__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../FormInteractiveItemHOC/index.ts */ "./src/forms/FormInteractiveItemHOC/index.ts");
/* harmony import */ var _FormTextInput_pcss__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./FormTextInput.pcss */ "./src/forms/FormTextInput/FormTextInput.pcss");
 /** @module FormTextInput
 *  @class FormTextInput
 *  @since 2020.10.07, 00:20
 *  @changed 2021.04.12, 14:26
 */
/* eslint-disable react/require-default-props */





// import * as langUtils from 'utils/lang';





// import { withFormContext } from 'helpers/FormContext';




var cnFormTextInput = (0,_utils_configure__WEBPACK_IMPORTED_MODULE_6__.cn)('FormTextInput');var

FormTextInput = /*#__PURE__*/function (_React$PureComponent) {(0,_babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_1__.default)(FormTextInput, _React$PureComponent);



































  // Lifecycle...

  function FormTextInput(props) {var _this;
    _this = _React$PureComponent.call(this, props) || this;(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2__.default)((0,_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_0__.default)(_this), "updateValueWithState",



















































































    function (state) {
      state = state || _this.state;var _this$props =
      _this.props,id = _this$props.id,inputId = _this$props.inputId,name = _this$props.name,onChange = _this$props.onChange,disabled = _this$props.disabled;
      if (!disabled && typeof onChange === 'function') {var _state =
        state,value = _state.value;
        // console.log('FormTextInput:updateValueWithState', {
        //   value,
        // });
        var setId = id || inputId || name;
        onChange({ id: setId, value: value });
      }
    });(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2__.default)((0,_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_0__.default)(_this), "handleChange",





















    function (event) {var
      target = event.target;
      var origValue = target.value;
      var value = _this.getCorrectedValue(origValue);
      _this.setState({ value: value });
    });(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2__.default)((0,_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_0__.default)(_this), "onClearClick",

    function () {var _this$props2 =
      _this.props,allowEmpty = _this$props2.allowEmpty,numericValue = _this$props2.numericValue;
      var value = numericValue && !allowEmpty ? 0 : '';
      _this.setState({ value: value });
    });(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2__.default)((0,_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_0__.default)(_this), "onFocusIn",

    function () {
      if (_this.mounted) {
        if (_this.inputDomElem) {
          _this.inputDomElem.style.backgroundColor = '#fff'; // Try to override standard html autofill styles
        }
        _this.setState({ focused: true });
      }
      // window.addEventListener('keypress', this.onKeyPress);
      if (typeof _this.props.onFocusIn === 'function') {// Propogate event if handler passed
        _this.props.onFocusIn(event);
      }
    });(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2__.default)((0,_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_0__.default)(_this), "onFocusOut",
    function (event) {
      _this.mounted && _this.setState({ focused: false });
      // window.removeEventListener('keypress', this.onKeyPress);
      if (typeof _this.props.onFocusOut === 'function') {// Propogate event if handler passed
        _this.props.onFocusOut(event);
      }
    });(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2__.default)((0,_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_0__.default)(_this), "setInputDomRef",

    function (inputDomElem) {
      _this.inputDomElem = inputDomElem;
      if (typeof _this.props.setInputDomRef === 'function') {
        _this.props.setInputDomRef(inputDomElem);
      }
    });var _value = _this.getCorrectedValue(props.value || props.defaultValue || (props.numericValue && !props.allowEmpty ? 0 : ''));_this.state = { value: _value };return _this;} /* // UNUSED: componentDidMount
   * componentDidMount() {
   *   const { registerKeyPressHandler } = this.props;
   *   if (typeof registerKeyPressHandler === 'function') { // From `FormInteractiveItemHOC`
   *     // Register callback with `FormInteractiveItemHOC`
   *     this.interactiveKeyPressHandler && registerKeyPressHandler(this.interactiveKeyPressHandler);
   *   }
   * }
   */var _proto = FormTextInput.prototype;_proto.componentDidUpdate = function componentDidUpdate(prevProps, prevState) {var prevPropsValue = prevProps.value; // const propsValue = this.getCorrectedValue(this.props.value);
    var propsValue = this.props.value;var stateValue = this.state.value;var prevStateValue = prevState.value;if (propsValue !== prevPropsValue && propsValue !== prevStateValue) {// New value from props
      // console.log('FormTextInput:componentDidUpdate (propsValue)', {
      //   prevPropsValue,
      //   propsValue,
      //   stateValue,
      //   prevStateValue,
      // });
      this.setState({ value: this.getCorrectedValue(propsValue) }, this.updateValueWithState);} else if (stateValue !== prevStateValue) {// New value from state
      // console.log('FormTextInput:componentDidUpdate (stateValue)', {
      //   prevPropsValue,
      //   propsValue,
      //   stateValue,
      //   prevStateValue,
      // });
      this.setState({ value: stateValue }, this.updateValueWithState); // this.updateValueWithState(this.state);
    }} // Helper methods...
  ;_proto.getCorrectedValue = function getCorrectedValue(value) {// const origValue = value;
    var _this$props3 = this.props,numericValue = _this$props3.numericValue,defaultValue = _this$props3.defaultValue,allowEmpty = _this$props3.allowEmpty;if (numericValue && typeof value !== 'number') {value = String(value).replace(/[^0-9.,-]/g, '');value = parseInt(value, 10);if (isNaN(value)) {value = defaultValue || allowEmpty ? '' : 0;}} // console.log('FormTextInput:getCorrectedValue', {
    //   origValue,
    //   value,
    //   numericValue,
    // });
    return value;};_proto.hasValue = function hasValue() {var value = this.state.value;return value != null && value !== '';};_proto.hasIcon = function hasIcon() {var _this$props4 = this.props,icon = _this$props4.icon,hasIcon = _this$props4.hasIcon,hasClear = _this$props4.hasClear;return hasIcon || !!icon || hasClear && this.hasValue();};_proto.getClassName = function getClassName() {var _this$props5 = this.props,id = _this$props5.id,hasClear = _this$props5.hasClear,className = _this$props5.className;var hasValue = this.hasValue();var hasClearActive = hasClear && hasValue;var classList = cnFormTextInput({ id: id, hasIcon: this.hasIcon(), hasValue: this.hasValue(), hasClear: hasClear, hasClearActive: hasClearActive }, [className]);return classList;} // Event handlers...
  ; // Render...
  _proto.renderClearIcon = function renderClearIcon() {// DELETE
    var _this$props6 = this.props,hasClear = _this$props6.hasClear,clearIcon = _this$props6.clearIcon,clearIconTitle = _this$props6.clearIconTitle,lang = _this$props6.lang;var hasValue = this.hasValue();var hasClearActive = hasClear && hasValue;var title = clearIconTitle || (0,_utils_lang__WEBPACK_IMPORTED_MODULE_7__.getCommonLangText)('clearButton', 'Clear', lang);return hasClearActive && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement(_elements_InlineIcon_index_ts__WEBPACK_IMPORTED_MODULE_8__.default, { icon: clearIcon || 'faTimes', className: cnFormTextInput('Icon', { mode: 'Clear' }), onClick: this.onClearClick, title: title });};_proto.renderIcon = function renderIcon() {// DELETE
    var _this$props7 = this.props,icon = _this$props7.icon,iconTitle = _this$props7.iconTitle,onIconClick = _this$props7.onIconClick;return icon && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement(_elements_InlineIcon_index_ts__WEBPACK_IMPORTED_MODULE_8__.default, { icon: icon,
      className: cnFormTextInput('Icon'),
      onClick: onIconClick,
      title: iconTitle });


  };_proto.

  renderInput = function renderInput() {var

    value =
    this.state.value;var _this$props8 =








    this.props,id = _this$props8.id,inputId = _this$props8.inputId,name = _this$props8.name,disabled = _this$props8.disabled,placeholder = _this$props8.placeholder,_this$props8$type = _this$props8.type,type = _this$props8$type === void 0 ? 'text' : _this$props8$type;

    var inputProps = {
      key: 'Input',
      type: type,
      className: cnFormTextInput('Control', ['FormItem-Control']),
      id: inputId || id || name,
      name: name || inputId || id,
      disabled: disabled,
      placeholder: placeholder,
      ref: this.setInputDomRef,
      onChange: this.handleChange,
      onKeyPress: this.onKeyPress,
      value: value
      // onFocus: this.onFocusIn,
      // onBlur: this.onFocusOut,
    };
    return /*#__PURE__*/(
      react__WEBPACK_IMPORTED_MODULE_3___default().createElement("input",
      inputProps));


  };_proto.

  render = function render() {var _this$props9 =







    this.props,id = _this$props9.id,disabled = _this$props9.disabled,_this$props9$type = _this$props9.type,type = _this$props9$type === void 0 ? 'text' : _this$props9$type,title = _this$props9.title,setDomRef = _this$props9.setDomRef;

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
      react__WEBPACK_IMPORTED_MODULE_3___default().createElement("div", renderProps,
      inputElem,
      this.renderIcon() || this.renderClearIcon()));



  };return FormTextInput;}((react__WEBPACK_IMPORTED_MODULE_3___default().PureComponent) /** @lends @FormTextInput.prototype */);



// export default FormItemHOC({ solid: true, hoverable: true, framed: true })(FormTextInput);
(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2__.default)(FormTextInput, "propTypes", { // TODO: minValue, maxValue, maxLength
  allowEmpty: (prop_types__WEBPACK_IMPORTED_MODULE_4___default().bool), className: (prop_types__WEBPACK_IMPORTED_MODULE_4___default().string), clearIcon: (prop_types__WEBPACK_IMPORTED_MODULE_4___default().bool), clearIconTitle: (prop_types__WEBPACK_IMPORTED_MODULE_4___default().string), defaultValue: prop_types__WEBPACK_IMPORTED_MODULE_4___default().oneOfType([(prop_types__WEBPACK_IMPORTED_MODULE_4___default().string), (prop_types__WEBPACK_IMPORTED_MODULE_4___default().number)]), disabled: (prop_types__WEBPACK_IMPORTED_MODULE_4___default().bool), hasClear: (prop_types__WEBPACK_IMPORTED_MODULE_4___default().bool), hasClearActive: (prop_types__WEBPACK_IMPORTED_MODULE_4___default().bool), hasIcon: (prop_types__WEBPACK_IMPORTED_MODULE_4___default().bool), hasValue: (prop_types__WEBPACK_IMPORTED_MODULE_4___default().bool), icon: prop_types__WEBPACK_IMPORTED_MODULE_4___default().oneOfType([(prop_types__WEBPACK_IMPORTED_MODULE_4___default().string), (prop_types__WEBPACK_IMPORTED_MODULE_4___default().object)]), // Icon id or icon object
  iconTitle: (prop_types__WEBPACK_IMPORTED_MODULE_4___default().string), id: (prop_types__WEBPACK_IMPORTED_MODULE_4___default().string), inputId: (prop_types__WEBPACK_IMPORTED_MODULE_4___default().string), name: (prop_types__WEBPACK_IMPORTED_MODULE_4___default().string), numericValue: (prop_types__WEBPACK_IMPORTED_MODULE_4___default().bool), onChange: (prop_types__WEBPACK_IMPORTED_MODULE_4___default().func), onFocusIn: (prop_types__WEBPACK_IMPORTED_MODULE_4___default().func), onFocusOut: (prop_types__WEBPACK_IMPORTED_MODULE_4___default().func), onIconClick: (prop_types__WEBPACK_IMPORTED_MODULE_4___default().func), placeholder: (prop_types__WEBPACK_IMPORTED_MODULE_4___default().string), setDomRef: (prop_types__WEBPACK_IMPORTED_MODULE_4___default().func), setInputDomRef: (prop_types__WEBPACK_IMPORTED_MODULE_4___default().func), type: (prop_types__WEBPACK_IMPORTED_MODULE_4___default().string), value: prop_types__WEBPACK_IMPORTED_MODULE_4___default().oneOfType([(prop_types__WEBPACK_IMPORTED_MODULE_4___default().string), (prop_types__WEBPACK_IMPORTED_MODULE_4___default().number)]) });(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2__.default)(FormTextInput, "defaultProps", { // allowEmpty: true,
  value: '' });/* harmony default export */ __webpack_exports__["default"] = ((0,redux__WEBPACK_IMPORTED_MODULE_5__.compose)( // withFormContext,
_FormInteractiveItemHOC_index_ts__WEBPACK_IMPORTED_MODULE_10__.default, (0,_FormItemHOC_index_ts__WEBPACK_IMPORTED_MODULE_9__.default)({ solid: true, hoverable: true, focusable: true, framed: true }))(FormTextInput));

/***/ }),

/***/ "./src/forms/FormText/FormText.jsx":
/*!*****************************************!*\
  !*** ./src/forms/FormText/FormText.jsx ***!
  \*****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/inheritsLoose */ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _utils_configure__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../utils/configure */ "./src/utils/configure.js");
/* harmony import */ var _FormItemHOC_index_ts__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../FormItemHOC/index.ts */ "./src/forms/FormItemHOC/index.ts");
/* harmony import */ var _FormText_pcss__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./FormText.pcss */ "./src/forms/FormText/FormText.pcss");
 /** @module FormText
 *  @class FormText
 *  @since 2020.10.29, 21:25
 *  @changed 2020.10.29, 22:42
 */
/* eslint-disable react/require-default-props */



// import connect from 'react-redux/es/connect/connect'






var cnFormText = (0,_utils_configure__WEBPACK_IMPORTED_MODULE_5__.cn)('FormText');var

FormText = /*#__PURE__*/function (_React$PureComponent) {(0,_babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_1__.default)(FormText, _React$PureComponent);function FormText() {var _this;for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {args[_key] = arguments[_key];}_this = _React$PureComponent.call.apply(_React$PureComponent, [this].concat(args)) || this;(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2__.default)((0,_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_0__.default)(_this), "onClick",



















    function (event) {var _this$props =



      _this.props,disabled = _this$props.disabled,onClick = _this$props.onClick;
      if (!disabled && onClick && typeof onClick === 'function') {
        onClick(event);
      }
    });return _this;}var _proto = FormText.prototype;_proto.getClassName = function getClassName() {var _this$props2 = this.props,id = _this$props2.id,wrap = _this$props2.wrap;var classList = cnFormText({ id: id, wrap: wrap }, [this.props.className]);return classList;} // Handlers...
  ;
  // Render...
  _proto.
  render = function render() {var _this$props3 =







    this.props,id = _this$props3.id,disabled = _this$props3.disabled,text = _this$props3.text,children = _this$props3.children,title = _this$props3.title;

    var renderProps = {
      id: id,
      className: this.getClassName(),
      disabled: disabled,
      title: title };


    return /*#__PURE__*/(
      react__WEBPACK_IMPORTED_MODULE_3___default().createElement("div", renderProps,
      children || text || title));



  };return FormText;}((react__WEBPACK_IMPORTED_MODULE_3___default().PureComponent) /** @lends @FormText.prototype */);(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2__.default)(FormText, "propTypes", { id: (prop_types__WEBPACK_IMPORTED_MODULE_4___default().string) });



/* harmony default export */ __webpack_exports__["default"] = ((0,_FormItemHOC_index_ts__WEBPACK_IMPORTED_MODULE_6__.default)({ hoverable: true })(FormText));

/***/ }),

/***/ "./src/forms/index.js":
/*!****************************!*\
  !*** ./src/forms/index.js ***!
  \****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FormButton": function() { return /* reexport safe */ _FormButton_index_ts__WEBPACK_IMPORTED_MODULE_0__.default; },
/* harmony export */   "FormItemHOC": function() { return /* reexport safe */ _FormItemHOC_index_ts__WEBPACK_IMPORTED_MODULE_1__.default; },
/* harmony export */   "FormItemDummy": function() { return /* reexport safe */ _FormItemDummy_index_ts__WEBPACK_IMPORTED_MODULE_2__.default; },
/* harmony export */   "FormLabel": function() { return /* reexport safe */ _FormLabel_index_ts__WEBPACK_IMPORTED_MODULE_3__.default; },
/* harmony export */   "FormDelim": function() { return /* reexport safe */ _FormDelim_index_ts__WEBPACK_IMPORTED_MODULE_4__.default; },
/* harmony export */   "FormSpacer": function() { return /* reexport safe */ _FormSpacer_index_ts__WEBPACK_IMPORTED_MODULE_5__.default; },
/* harmony export */   "FormSeparator": function() { return /* reexport safe */ _FormSeparator_index_ts__WEBPACK_IMPORTED_MODULE_6__.default; },
/* harmony export */   "FormText": function() { return /* reexport safe */ _FormText_index_ts__WEBPACK_IMPORTED_MODULE_7__.default; },
/* harmony export */   "FormSelect": function() { return /* reexport safe */ _FormSelect_index_ts__WEBPACK_IMPORTED_MODULE_8__.default; },
/* harmony export */   "FormTextInput": function() { return /* reexport safe */ _FormTextInput_index_ts__WEBPACK_IMPORTED_MODULE_9__.default; },
/* harmony export */   "FormPasswordInput": function() { return /* reexport safe */ _FormPasswordInput_index_ts__WEBPACK_IMPORTED_MODULE_10__.default; },
/* harmony export */   "FormRadio": function() { return /* reexport safe */ _FormRadio_index_ts__WEBPACK_IMPORTED_MODULE_11__.default; },
/* harmony export */   "FormDateTime": function() { return /* reexport safe */ _FormDateTime_index_ts__WEBPACK_IMPORTED_MODULE_12__.default; },
/* harmony export */   "FormDateRange": function() { return /* reexport safe */ _FormDateRange_index_ts__WEBPACK_IMPORTED_MODULE_13__.default; },
/* harmony export */   "FormDateRangeSingleBox": function() { return /* reexport safe */ _FormDateRangeSingleBox_index_ts__WEBPACK_IMPORTED_MODULE_14__.default; },
/* harmony export */   "FormActions": function() { return /* reexport safe */ _FormActions_index_ts__WEBPACK_IMPORTED_MODULE_15__.default; },
/* harmony export */   "FormContainer": function() { return /* reexport safe */ _FormContainer_index_ts__WEBPACK_IMPORTED_MODULE_16__.default; },
/* harmony export */   "FormGroup": function() { return /* reexport safe */ _FormGroup_index_ts__WEBPACK_IMPORTED_MODULE_17__.default; },
/* harmony export */   "FormLabeledGroup": function() { return /* reexport safe */ _FormLabeledGroup_index_ts__WEBPACK_IMPORTED_MODULE_18__.default; },
/* harmony export */   "FormButtonGroup": function() { return /* reexport safe */ _FormButtonGroup_index_ts__WEBPACK_IMPORTED_MODULE_19__.default; },
/* harmony export */   "FormInputGroup": function() { return /* reexport safe */ _FormInputGroup_index_ts__WEBPACK_IMPORTED_MODULE_20__.default; }
/* harmony export */ });
/* harmony import */ var _FormButton_index_ts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./FormButton/index.ts */ "./src/forms/FormButton/index.ts");
/* harmony import */ var _FormItemHOC_index_ts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./FormItemHOC/index.ts */ "./src/forms/FormItemHOC/index.ts");
/* harmony import */ var _FormItemDummy_index_ts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./FormItemDummy/index.ts */ "./src/forms/FormItemDummy/index.ts");
/* harmony import */ var _FormLabel_index_ts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./FormLabel/index.ts */ "./src/forms/FormLabel/index.ts");
/* harmony import */ var _FormDelim_index_ts__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./FormDelim/index.ts */ "./src/forms/FormDelim/index.ts");
/* harmony import */ var _FormSpacer_index_ts__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./FormSpacer/index.ts */ "./src/forms/FormSpacer/index.ts");
/* harmony import */ var _FormSeparator_index_ts__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./FormSeparator/index.ts */ "./src/forms/FormSeparator/index.ts");
/* harmony import */ var _FormText_index_ts__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./FormText/index.ts */ "./src/forms/FormText/index.ts");
/* harmony import */ var _FormSelect_index_ts__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./FormSelect/index.ts */ "./src/forms/FormSelect/index.ts");
/* harmony import */ var _FormTextInput_index_ts__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./FormTextInput/index.ts */ "./src/forms/FormTextInput/index.ts");
/* harmony import */ var _FormPasswordInput_index_ts__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./FormPasswordInput/index.ts */ "./src/forms/FormPasswordInput/index.ts");
/* harmony import */ var _FormRadio_index_ts__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./FormRadio/index.ts */ "./src/forms/FormRadio/index.ts");
/* harmony import */ var _FormDateTime_index_ts__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./FormDateTime/index.ts */ "./src/forms/FormDateTime/index.ts");
/* harmony import */ var _FormDateRange_index_ts__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./FormDateRange/index.ts */ "./src/forms/FormDateRange/index.ts");
/* harmony import */ var _FormDateRangeSingleBox_index_ts__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./FormDateRangeSingleBox/index.ts */ "./src/forms/FormDateRangeSingleBox/index.ts");
/* harmony import */ var _FormActions_index_ts__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./FormActions/index.ts */ "./src/forms/FormActions/index.ts");
/* harmony import */ var _FormContainer_index_ts__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./FormContainer/index.ts */ "./src/forms/FormContainer/index.ts");
/* harmony import */ var _FormGroup_index_ts__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./FormGroup/index.ts */ "./src/forms/FormGroup/index.ts");
/* harmony import */ var _FormLabeledGroup_index_ts__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./FormLabeledGroup/index.ts */ "./src/forms/FormLabeledGroup/index.ts");
/* harmony import */ var _FormButtonGroup_index_ts__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./FormButtonGroup/index.ts */ "./src/forms/FormButtonGroup/index.ts");
/* harmony import */ var _FormInputGroup_index_ts__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./FormInputGroup/index.ts */ "./src/forms/FormInputGroup/index.ts");
/** @module forms
 *  @desc Form components
 *  @since 2020.07.20, 19:21
 *  @changed 2021.04.09, 23:48
 */

// Form elements...

// export * as FormButton from './FormButton';  // Old (non-ts) export style
// NOTE: This re-export format doesnt works in TS!





 // DEBUG: Demo element














// export * as FormCheck from './FormCheck';
// export * as FormSwitch from './FormSwitch';














// TODO...

// export * as FormPager from './FormPager';

/***/ }),

/***/ "./src/helpers/ActionsContext.jsx":
/*!****************************************!*\
  !*** ./src/helpers/ActionsContext.jsx ***!
  \****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ActionsContext": function() { return /* binding */ ActionsContext; },
/* harmony export */   "ActionsContextProvider": function() { return /* binding */ ActionsContextProvider; },
/* harmony export */   "ActionsContextConsumer": function() { return /* binding */ ActionsContextConsumer; },
/* harmony export */   "withActionsContext": function() { return /* binding */ withActionsContext; }
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
 /** @module ActionsContext
 *  @class ActionsContext
 *  @since 2020.12.24, 19:08
 *  @changed 2020.12.24, 19:08
 */



var ActionsContext = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createContext();

var ActionsContextProvider = ActionsContext.Provider;
var ActionsContextConsumer = ActionsContext.Consumer;

var withActionsContext = function withActionsContext(WrappedComponent) {return function withActionsContext(props) {
    return /*#__PURE__*/(
      react__WEBPACK_IMPORTED_MODULE_1___default().createElement(ActionsContextConsumer, null,
      function (actions) {
        return /*#__PURE__*/(
          react__WEBPACK_IMPORTED_MODULE_1___default().createElement(WrappedComponent, (0,_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__.default)({}, props, { actionsContextNode: actions })));

      }));


  };};

/***/ }),

/***/ "./src/helpers/FormContext.jsx":
/*!*************************************!*\
  !*** ./src/helpers/FormContext.jsx ***!
  \*************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FormContext": function() { return /* binding */ FormContext; },
/* harmony export */   "FormContextProvider": function() { return /* binding */ FormContextProvider; },
/* harmony export */   "FormContextConsumer": function() { return /* binding */ FormContextConsumer; },
/* harmony export */   "withFormContext": function() { return /* binding */ withFormContext; }
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
 /** @module FormContext
 *  @class FormContext
 *  @since 2021.01.19, 15:23
 *  @changed 2021.01.19, 16:08
 */



var FormContext = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createContext();

var FormContextProvider = FormContext.Provider;
var FormContextConsumer = FormContext.Consumer;

var withFormContext = function withFormContext(WrappedComponent) {return function withFormContext(props) {
    return /*#__PURE__*/(
      react__WEBPACK_IMPORTED_MODULE_1___default().createElement(FormContextConsumer, null,
      function (form) {
        return /*#__PURE__*/(
          react__WEBPACK_IMPORTED_MODULE_1___default().createElement(WrappedComponent, (0,_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__.default)({}, props, { formContextNode: form })));

      }));


  };};

/***/ }),

/***/ "./src/helpers/index.js":
/*!******************************!*\
  !*** ./src/helpers/index.js ***!
  \******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ActionsContext": function() { return /* reexport module object */ _ActionsContext__WEBPACK_IMPORTED_MODULE_0__; },
/* harmony export */   "FormContext": function() { return /* reexport module object */ _FormContext__WEBPACK_IMPORTED_MODULE_1__; }
/* harmony export */ });
/* harmony import */ var _ActionsContext__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ActionsContext */ "./src/helpers/ActionsContext.jsx");
/* harmony import */ var _FormContext__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./FormContext */ "./src/helpers/FormContext.jsx");
/** @module helpers
 *  @desc Library helpers
 *  @since 2020.12.24, 19:06
 *  @changed 2021.01.19, 16:20
 */
// export * as ModalsContext from './ModalsContext'; // UNUSED


/***/ }),

/***/ "./src/utils/configure.js":
/*!********************************!*\
  !*** ./src/utils/configure.js ***!
  \********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "setConfigOptions": function() { return /* binding */ setConfigOptions; },
/* harmony export */   "cssMapping": function() { return /* binding */ cssMapping; },
/* harmony export */   "cn": function() { return /* binding */ cn; }
/* harmony export */ });
/* harmony import */ var _config_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../config/index.js */ "./src/config/index.js");
/* harmony import */ var _config_index_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_config_index_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _bem_react_classname__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @bem-react/classname */ "@bem-react/classname");
/* harmony import */ var _bem_react_classname__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_bem_react_classname__WEBPACK_IMPORTED_MODULE_1__);
/** @module build
 *  @desc Library exportable ditributive
 *  @since 2020.05.19, 17:16
 *  @changed 2020.12.08, 21:47
 */




var configMap;

var getConfigMap = function getConfigMap() {
  if (!configMap) {
    configMap = {};
    Object.keys((_config_index_js__WEBPACK_IMPORTED_MODULE_0___default())).forEach(function (scopeId) {
      var scopeObj = (_config_index_js__WEBPACK_IMPORTED_MODULE_0___default())[scopeId];
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

var setConfigOptions = function setConfigOptions(options) {
  var map = getConfigMap();
  Object.entries(options).map(function (_ref) {var key = _ref[0],val = _ref[1]; // Set entry
    var scopes = map[key];
    scopes.map(function (scope) {
      var obj = (_config_index_js__WEBPACK_IMPORTED_MODULE_0___default())[scope];
      if (obj) {
        obj[key] = val;
      }
    });
  });
};

var cssMapping = function cssMapping(classNames) {var _config$app =
  (_config_index_js__WEBPACK_IMPORTED_MODULE_0___default().app),useCssModules = _config$app.useCssModules,cssMappings = _config$app.cssMappings;
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
var cn = function cn() {for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {args[_key] = arguments[_key];}
  var result = _bem_react_classname__WEBPACK_IMPORTED_MODULE_1__.cn.apply(cn, args);
  if (typeof result === 'string') {// If class name, not fabric
    return cssMapping(result);
  } else
  if (typeof result === 'function') {
    return function cnCssMapping() {for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {args[_key2] = arguments[_key2];}
      var res = result.apply(null, args);
      if (typeof res === 'string') {
        res = cssMapping(res);
      }
      return res;
    };
  }
  return result;
};

/***/ }),

/***/ "./src/utils/dates.js":
/*!****************************!*\
  !*** ./src/utils/dates.js ***!
  \****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "dayTicks": function() { return /* binding */ dayTicks; },
/* harmony export */   "weekTicks": function() { return /* binding */ weekTicks; },
/* harmony export */   "detectDateValueType": function() { return /* binding */ detectDateValueType; },
/* harmony export */   "convertToDateObject": function() { return /* binding */ convertToDateObject; },
/* harmony export */   "toMicrosoftDateTime": function() { return /* binding */ toMicrosoftDateTime; },
/* harmony export */   "convertDateToType": function() { return /* binding */ convertDateToType; },
/* harmony export */   "formatDateToString": function() { return /* binding */ formatDateToString; },
/* harmony export */   "formatDateTimeToString": function() { return /* binding */ formatDateTimeToString; },
/* harmony export */   "adjustDateValue": function() { return /* binding */ adjustDateValue; },
/* harmony export */   "startOfTheDay": function() { return /* binding */ startOfTheDay; },
/* harmony export */   "endOfTheDay": function() { return /* binding */ endOfTheDay; }
/* harmony export */ });
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! moment */ "moment");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! date-fns */ "date-fns");
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(date_fns__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _config_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../config/index.js */ "./src/config/index.js");
/* harmony import */ var _config_index_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_config_index_js__WEBPACK_IMPORTED_MODULE_2__);
/** @module dates
 *  @description Objects utilities
 *  @since 2021.01.23, 20:29
 *  @changed 2021.04.30, 14:28
 */





var msDatePrefix = '/Date(';
var msDatePostfix = ')/';

// Export constants...

var dayTicks = (_config_index_js__WEBPACK_IMPORTED_MODULE_2___default().constants.dayTicks); // 1000 * 60 * 60 * 24;
var weekTicks = (_config_index_js__WEBPACK_IMPORTED_MODULE_2___default().constants.weekTicks); // dayTicks * 7;

/** Get date type
 * @param {Date|Moment|number} date
 * @return {String} dateType ('number', 'object', 'moment', 'msDateStr')
 * msDateStr: '/Date(1498653276417+0300)/'
 */
function detectDateValueType(date) {
  if (date == null) {
    return undefined;
  }
  var dateType = typeof date;
  if (dateType === 'object') {// TODO: Determine moment object
    if (date instanceof (moment__WEBPACK_IMPORTED_MODULE_0___default())) {
      return 'moment';
    }
  } else
  if (dateType === 'string') {
    if (date.startsWith(msDatePrefix)) {
      return 'msDateStr';
    }
  }
  return dateType;
}

function convertToDateObject(date) {
  var dateType = detectDateValueType(date);
  var result = date;
  if (dateType !== 'object') {
    if (dateType === 'msDateStr') {// Convert to number...
      result = parseInt(result.substr(msDatePrefix.length)); // '/Date(*' -> number
    }
    if (dateType === 'number' || dateType === 'msDateStr') {// Convert to date object...
      result = new Date(result);
    } else
    if (dateType === 'moment') {// Convert form moment date...
      result = date.toDate();
    }
    // else -- error?
  }
  return result;
}

/** Convert any date (date object, moment object, milliseconds timestamp) to microsoft date string ('Date(timestamp+xxxx)')
 * @param {Date|Number|Moment} date - Date object or milliseconds date value
 * @return {String}
 */
function toMicrosoftDateTime(date) {
  if (typeof date === 'number') {// Milliseconds passed?
    // TODO: Use timestamp number to compose ms date (which offset should we to use?)
    date = new Date(date);
  } else
  if (date instanceof (moment__WEBPACK_IMPORTED_MODULE_0___default())) {
    date = date.toDate();
  }
  // TODO: To check for valid date object?
  // const offset = date.toString().replace(/^.*GMT\s*([+-]\d+).*$/, '$1') // ???
  var match = date.toString().match(/GMT\s*([+-]\d+)/);
  var offset = match && match[1] || '';
  var format = String(date.getTime()) + offset;
  return msDatePrefix + format + msDatePostfix; // -> '/Date(...)/'
  /* // OLD CODE:
   * const offset = () => {
   *   const hours = date.getTimezoneOffset() / 60
   *   let doubleOrNot = Math.abs(date.getTimezoneOffset()) / 60
   *   if (doubleOrNot < 10) {
   *     doubleOrNot = `+0${doubleOrNot.toString()}00`
   *   }
   *   return doubleOrNot
   * }
   * const format = () => String(date.getTime()) + String(offset())
   * return `//Date(${format()})/`
   */
}

function convertDateToType(date, targetType) {
  // const type = detectDateValueType(date);
  var result = date;
  if (targetType !== 'object') {
    if (targetType === 'moment') {
      return moment__WEBPACK_IMPORTED_MODULE_0___default()(date);
    } else
    if (targetType === 'number') {
      result = date.getTime();
    } else
    if (targetType === 'msDateStr') {
      result = toMicrosoftDateTime(date);
    }
  }
  return result;
}

function formatDateToString(date, fmt, opt) {if (opt === void 0) {opt = {};}
  fmt = fmt || (_config_index_js__WEBPACK_IMPORTED_MODULE_2___default().constants.dateFormat);
  // @see https://date-fns.org/v2.16.1/docs/format
  return (0,date_fns__WEBPACK_IMPORTED_MODULE_1__.format)(convertToDateObject(date), fmt, opt);
}

function formatDateTimeToString(date, opt) {if (opt === void 0) {opt = {};}
  var fmt = opt.format || (opt.showTime ? (_config_index_js__WEBPACK_IMPORTED_MODULE_2___default().constants.dateTimeFormat) : (_config_index_js__WEBPACK_IMPORTED_MODULE_2___default().constants.dateFormat));
  // @see https://date-fns.org/v2.16.1/docs/format
  return (0,date_fns__WEBPACK_IMPORTED_MODULE_1__.format)(convertToDateObject(date), fmt, opt);
}

/** adjustDateValue -- Adjust date to day/interval start/end.
 * @param {Date|Number|moment|msDateStr} origDate - date (in any format)
 * @param {Boolean} [toEnd=false] -- Adjust to end
 * @param {Boolean} [toTime=false] -- Adjust to time periods (timeIntervals)
 * @param {Number} [timeIntervals] -- Time period to adjust (in minutes, default value = config.constants.timeIntervals)
 * @return {Date|Number|moment|msDateStr} adjustedDate -- Date in the input format
 */
function adjustDateValue(origDate, toEnd, toTime, timeIntervals) {
  var dateType = detectDateValueType(origDate);
  var date;
  if (dateType === 'object') {// Just clone date object
    date = new Date(origDate.getTime());
  } else
  {
    date = convertToDateObject(origDate);
  }
  if (!toTime) {
    if (toEnd) {
      date.setHours(23, 59, 59, 999);
    } else
    {
      date.setHours(0, 0, 0, 0);
    }
  } else
  {
    if (!timeIntervals) {
      timeIntervals = (_config_index_js__WEBPACK_IMPORTED_MODULE_2___default().constants.timeIntervals);
    }
    if (toEnd) {
      date.setMilliseconds(999);
      date.setSeconds(59);
      var minutes = date.getMinutes();
      // To end of period slot
      var extraMinutes = timeIntervals - minutes % timeIntervals;
      var setMinutes = minutes + extraMinutes - 1;
      date.setMinutes(setMinutes);
    } else
    {
      date.setMilliseconds(0);
      date.setSeconds(0);
      var _minutes = date.getMinutes();
      // To begin of period slot
      var _extraMinutes = _minutes % timeIntervals;
      var _setMinutes = _minutes - _extraMinutes;
      date.setMinutes(_setMinutes);
    }
  }
  return convertDateToType(date, dateType);
}

function startOfTheDay(date) {
  return adjustDateValue(date);
}

function endOfTheDay(date) {
  return adjustDateValue(date, true);
}

/***/ }),

/***/ "./src/utils/domUtils.js":
/*!*******************************!*\
  !*** ./src/utils/domUtils.js ***!
  \*******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getDocumentDomNodeByTag": function() { return /* binding */ getDocumentDomNodeByTag; },
/* harmony export */   "hasClassName": function() { return /* binding */ hasClassName; },
/* harmony export */   "addClassName": function() { return /* binding */ addClassName; },
/* harmony export */   "removeClassName": function() { return /* binding */ removeClassName; }
/* harmony export */ });
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

/***/ }),

/***/ "./src/utils/forms.js":
/*!****************************!*\
  !*** ./src/utils/forms.js ***!
  \****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getUniqFormId": function() { return /* binding */ getUniqFormId; }
/* harmony export */ });
/** @module forms
 *  @since 2021.03.11, 20:00
 *  @changed 2021.03.11, 20:00
 */

// Unique for serializer
var uniqCounter = 0;

/** Get unique form identifier
 * @param {Object} [opt]
 * @param {String} [opt.prefix]
 * @return {String}
 */
function getUniqFormId(_temp) {var _ref = _temp === void 0 ? {} : _temp,_ref$prefix = _ref.prefix,prefix = _ref$prefix === void 0 ? 'uniqForm' : _ref$prefix;
  // const prefix = opts.prefix || 'uniqForm';
  var id = prefix + (uniqCounter++ || '');
  return id;
}

/***/ }),

/***/ "./src/utils/index.js":
/*!****************************!*\
  !*** ./src/utils/index.js ***!
  \****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "configure": function() { return /* reexport module object */ _configure__WEBPACK_IMPORTED_MODULE_0__; },
/* harmony export */   "dates": function() { return /* reexport module object */ _dates__WEBPACK_IMPORTED_MODULE_1__; },
/* harmony export */   "domUtils": function() { return /* reexport module object */ _domUtils__WEBPACK_IMPORTED_MODULE_2__; },
/* harmony export */   "lang": function() { return /* reexport module object */ _lang__WEBPACK_IMPORTED_MODULE_3__; },
/* harmony export */   "strings": function() { return /* reexport module object */ _strings__WEBPACK_IMPORTED_MODULE_4__; },
/* harmony export */   "objects": function() { return /* reexport module object */ _objects__WEBPACK_IMPORTED_MODULE_5__; },
/* harmony export */   "forms": function() { return /* reexport module object */ _forms__WEBPACK_IMPORTED_MODULE_6__; }
/* harmony export */ });
/* harmony import */ var _configure__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./configure */ "./src/utils/configure.js");
/* harmony import */ var _dates__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dates */ "./src/utils/dates.js");
/* harmony import */ var _domUtils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./domUtils */ "./src/utils/domUtils.js");
/* harmony import */ var _lang__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./lang */ "./src/utils/lang.js");
/* harmony import */ var _strings__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./strings */ "./src/utils/strings.js");
/* harmony import */ var _objects__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./objects */ "./src/utils/objects.js");
/* harmony import */ var _forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./forms */ "./src/utils/forms.js");
/** @module utils
 *  @desc Library utilities
 *  @since 2020.05.19, 17:16
 *  @changed 2021.04.22, 13:48
 */

// export * from './configure'


/***/ }),

/***/ "./src/utils/lang.js":
/*!***************************!*\
  !*** ./src/utils/lang.js ***!
  \***************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "setLang": function() { return /* binding */ setLang; },
/* harmony export */   "getLang": function() { return /* binding */ getLang; },
/* harmony export */   "getCommonLangText": function() { return /* binding */ getCommonLangText; }
/* harmony export */ });
/* harmony import */ var _config_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../config/index.js */ "./src/config/index.js");
/* harmony import */ var _config_index_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_config_index_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var date_fns_esm_locale__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! date-fns/esm/locale */ "./node_modules/date-fns/esm/locale/ru/index.js");
/* harmony import */ var react_datepicker__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-datepicker */ "react-datepicker");
/* harmony import */ var react_datepicker__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_datepicker__WEBPACK_IMPORTED_MODULE_1__);
/** @module lang
 *  @desc Language support tools
 *  @since 2021.01.11, 18:21
 *  @changed 2021.01.11, 20:14
 */





// Initialize locales...
(0,react_datepicker__WEBPACK_IMPORTED_MODULE_1__.registerLocale)('ru-RU', date_fns_esm_locale__WEBPACK_IMPORTED_MODULE_2__.default);
// TDDO: Register locales in target project (using config data)?

function setLang(lang) {
  // console.log('WebUiCore:utils:lang:setLang', lang)
  // debugger
  (_config_index_js__WEBPACK_IMPORTED_MODULE_0___default().app.lang) = lang;
}
function getLang() {
  return (_config_index_js__WEBPACK_IMPORTED_MODULE_0___default().app.lang);
}
function getCommonLangText(id, defaultText, propsLang) {
  var lang = propsLang || getLang();
  var text = lang && lang.components && lang.components.common && lang.components.common[id];
  // console.log('WebUiCore:utils:lang:getCommonLangText', id, lang)
  // debugger
  return text != null ? text : defaultText || id;
}

/***/ }),

/***/ "./src/utils/objects.js":
/*!******************************!*\
  !*** ./src/utils/objects.js ***!
  \******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "reverseKeyAndValue": function() { return /* binding */ reverseKeyAndValue; },
/* harmony export */   "reverseDataHash": function() { return /* binding */ reverseDataHash; }
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
 /** @module objects
 *  @description Objects utilities
 *  @since 2021.04.22, 13:47
 *  @changed 2021.04.22, 13:47
 */

function reverseKeyAndValue(result, _ref) {var _extends2;var key = _ref[0],val = _ref[1];
  return (0,_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__.default)({}, result, (_extends2 = {}, _extends2[val] = key, _extends2));
}
function reverseDataHash(hash) {
  return Object.entries(hash).reduce(reverseKeyAndValue, {});
}

/***/ }),

/***/ "./src/utils/strings.js":
/*!******************************!*\
  !*** ./src/utils/strings.js ***!
  \******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "toNumber": function() { return /* binding */ toNumber; },
/* harmony export */   "toString": function() { return /* binding */ toString; },
/* harmony export */   "toBoolean": function() { return /* binding */ toBoolean; },
/* harmony export */   "typeTransforms": function() { return /* binding */ typeTransforms; },
/* harmony export */   "getCommonLength": function() { return /* binding */ getCommonLength; },
/* harmony export */   "ucFirst": function() { return /* binding */ ucFirst; },
/* harmony export */   "toType": function() { return /* binding */ toType; },
/* harmony export */   "randomHexString": function() { return /* binding */ randomHexString; },
/* harmony export */   "html2string": function() { return /* binding */ html2string; },
/* harmony export */   "splitMultiline": function() { return /* binding */ splitMultiline; },
/* harmony export */   "padNumber": function() { return /* binding */ padNumber; },
/* harmony export */   "periodizeNumber": function() { return /* binding */ periodizeNumber; },
/* harmony export */   "humanizeId": function() { return /* binding */ humanizeId; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _this = undefined; /** @module strings
 *  @description Strings utilities
 *  @since 2019.04.03, 14:38
 *  @changed 2021.04.06, 14:00
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
var toString = function toString(val) {
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
  toString: toString,
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
  str = String(str);
  return str && str.charAt(0).toUpperCase() + str.slice(1); // .toLowerCase();
};

/** Convert string to desired type
 * @param {string} type
 * @param {string} val
 * @return {*}
 */
var toType = function toType(type, val) {
  var methodName = 'to' + ucFirst(type);
  if ( /* typeTransforms.hasOwnProperty(methodName) && */typeof typeTransforms[methodName] === 'function') {
    val = _this[methodName](val);
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
var splitMultiline = function splitMultiline(text, opt) {
  opt = opt || {};
  var textClassName = opt.textClassName || 'Text';
  var lineClassName = opt.lineClassName || 'TextLine';
  return text.split('\n\n').map(function (text, n) {
    var lines = text.split('\n').map(function (line, n) {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement('div', { key: 'line' + String(n), className: lineClassName }, line);
    });
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement('div', { key: 'text' + String(n), className: textClassName }, lines);
  });
};

function padNumber(num, size) {
  return String(num).padStart(size, '0');
}

/** Make periods for long numbers. Returns string presentation of number.
 * @param {String|Number} num
 * @param {String} [periodChar=' ']
 * @return {String}
 */
function periodizeNumber(num, periodChar) {
  periodChar = periodChar || ' ';
  num = String(num);
  // If long number...
  if (num.length > 3 && !num.match(/\D/)) {
    num = num.replace(/\B(?=(\d{3})+(?!\d))/g, periodChar);
  }
  return num;
}

/** humanizeId -- Make human-readable string from id (eg, 'thisId' -> 'This Id')
 * @param {String} id
 * @return {String}
 */
function humanizeId(id) {
  return ucFirst(String(id)).replace(/\B([A-Z])/g, ' $1');
}

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/isSameUTCWeek/index.js":
/*!***************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/isSameUTCWeek/index.js ***!
  \***************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ isSameUTCWeek; }
/* harmony export */ });
/* harmony import */ var _startOfUTCWeek_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../startOfUTCWeek/index.js */ "./node_modules/date-fns/esm/_lib/startOfUTCWeek/index.js");
/* harmony import */ var _requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");

 // This function will be a part of public API when UTC function will be implemented.
// See issue: https://github.com/date-fns/date-fns/issues/376

function isSameUTCWeek(dirtyDateLeft, dirtyDateRight, options) {
  (0,_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__.default)(2, arguments);
  var dateLeftStartOfWeek = (0,_startOfUTCWeek_index_js__WEBPACK_IMPORTED_MODULE_1__.default)(dirtyDateLeft, options);
  var dateRightStartOfWeek = (0,_startOfUTCWeek_index_js__WEBPACK_IMPORTED_MODULE_1__.default)(dirtyDateRight, options);
  return dateLeftStartOfWeek.getTime() === dateRightStartOfWeek.getTime();
}

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js":
/*!**************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/requiredArgs/index.js ***!
  \**************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ requiredArgs; }
/* harmony export */ });
function requiredArgs(required, args) {
  if (args.length < required) {
    throw new TypeError(required + ' argument' + (required > 1 ? 's' : '') + ' required, but only ' + args.length + ' present');
  }
}

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/startOfUTCWeek/index.js":
/*!****************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/startOfUTCWeek/index.js ***!
  \****************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ startOfUTCWeek; }
/* harmony export */ });
/* harmony import */ var _toInteger_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../toInteger/index.js */ "./node_modules/date-fns/esm/_lib/toInteger/index.js");
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../toDate/index.js */ "./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var _requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");


 // This function will be a part of public API when UTC function will be implemented.
// See issue: https://github.com/date-fns/date-fns/issues/376

function startOfUTCWeek(dirtyDate, dirtyOptions) {
  (0,_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__.default)(1, arguments);
  var options = dirtyOptions || {};
  var locale = options.locale;
  var localeWeekStartsOn = locale && locale.options && locale.options.weekStartsOn;
  var defaultWeekStartsOn = localeWeekStartsOn == null ? 0 : (0,_toInteger_index_js__WEBPACK_IMPORTED_MODULE_1__.default)(localeWeekStartsOn);
  var weekStartsOn = options.weekStartsOn == null ? defaultWeekStartsOn : (0,_toInteger_index_js__WEBPACK_IMPORTED_MODULE_1__.default)(options.weekStartsOn); // Test if weekStartsOn is between 0 and 6 _and_ is not NaN

  if (!(weekStartsOn >= 0 && weekStartsOn <= 6)) {
    throw new RangeError('weekStartsOn must be between 0 and 6 inclusively');
  }

  var date = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_2__.default)(dirtyDate);
  var day = date.getUTCDay();
  var diff = (day < weekStartsOn ? 7 : 0) + day - weekStartsOn;
  date.setUTCDate(date.getUTCDate() - diff);
  date.setUTCHours(0, 0, 0, 0);
  return date;
}

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/toInteger/index.js":
/*!***********************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/toInteger/index.js ***!
  \***********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ toInteger; }
/* harmony export */ });
function toInteger(dirtyNumber) {
  if (dirtyNumber === null || dirtyNumber === true || dirtyNumber === false) {
    return NaN;
  }

  var number = Number(dirtyNumber);

  if (isNaN(number)) {
    return number;
  }

  return number < 0 ? Math.ceil(number) : Math.floor(number);
}

/***/ }),

/***/ "./node_modules/date-fns/esm/locale/_lib/buildFormatLongFn/index.js":
/*!**************************************************************************!*\
  !*** ./node_modules/date-fns/esm/locale/_lib/buildFormatLongFn/index.js ***!
  \**************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ buildFormatLongFn; }
/* harmony export */ });
function buildFormatLongFn(args) {
  return function (dirtyOptions) {
    var options = dirtyOptions || {};
    var width = options.width ? String(options.width) : args.defaultWidth;
    var format = args.formats[width] || args.formats[args.defaultWidth];
    return format;
  };
}

/***/ }),

/***/ "./node_modules/date-fns/esm/locale/_lib/buildLocalizeFn/index.js":
/*!************************************************************************!*\
  !*** ./node_modules/date-fns/esm/locale/_lib/buildLocalizeFn/index.js ***!
  \************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ buildLocalizeFn; }
/* harmony export */ });
function buildLocalizeFn(args) {
  return function (dirtyIndex, dirtyOptions) {
    var options = dirtyOptions || {};
    var context = options.context ? String(options.context) : 'standalone';
    var valuesArray;

    if (context === 'formatting' && args.formattingValues) {
      var defaultWidth = args.defaultFormattingWidth || args.defaultWidth;
      var width = options.width ? String(options.width) : defaultWidth;
      valuesArray = args.formattingValues[width] || args.formattingValues[defaultWidth];
    } else {
      var _defaultWidth = args.defaultWidth;

      var _width = options.width ? String(options.width) : args.defaultWidth;

      valuesArray = args.values[_width] || args.values[_defaultWidth];
    }

    var index = args.argumentCallback ? args.argumentCallback(dirtyIndex) : dirtyIndex;
    return valuesArray[index];
  };
}

/***/ }),

/***/ "./node_modules/date-fns/esm/locale/_lib/buildMatchFn/index.js":
/*!*********************************************************************!*\
  !*** ./node_modules/date-fns/esm/locale/_lib/buildMatchFn/index.js ***!
  \*********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ buildMatchFn; }
/* harmony export */ });
function buildMatchFn(args) {
  return function (dirtyString, dirtyOptions) {
    var string = String(dirtyString);
    var options = dirtyOptions || {};
    var width = options.width;
    var matchPattern = width && args.matchPatterns[width] || args.matchPatterns[args.defaultMatchWidth];
    var matchResult = string.match(matchPattern);

    if (!matchResult) {
      return null;
    }

    var matchedString = matchResult[0];
    var parsePatterns = width && args.parsePatterns[width] || args.parsePatterns[args.defaultParseWidth];
    var value;

    if (Object.prototype.toString.call(parsePatterns) === '[object Array]') {
      value = findIndex(parsePatterns, function (pattern) {
        return pattern.test(matchedString);
      });
    } else {
      value = findKey(parsePatterns, function (pattern) {
        return pattern.test(matchedString);
      });
    }

    value = args.valueCallback ? args.valueCallback(value) : value;
    value = options.valueCallback ? options.valueCallback(value) : value;
    return {
      value: value,
      rest: string.slice(matchedString.length)
    };
  };
}

function findKey(object, predicate) {
  for (var key in object) {
    if (object.hasOwnProperty(key) && predicate(object[key])) {
      return key;
    }
  }
}

function findIndex(array, predicate) {
  for (var key = 0; key < array.length; key++) {
    if (predicate(array[key])) {
      return key;
    }
  }
}

/***/ }),

/***/ "./node_modules/date-fns/esm/locale/_lib/buildMatchPatternFn/index.js":
/*!****************************************************************************!*\
  !*** ./node_modules/date-fns/esm/locale/_lib/buildMatchPatternFn/index.js ***!
  \****************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ buildMatchPatternFn; }
/* harmony export */ });
function buildMatchPatternFn(args) {
  return function (dirtyString, dirtyOptions) {
    var string = String(dirtyString);
    var options = dirtyOptions || {};
    var matchResult = string.match(args.matchPattern);

    if (!matchResult) {
      return null;
    }

    var matchedString = matchResult[0];
    var parseResult = string.match(args.parsePattern);

    if (!parseResult) {
      return null;
    }

    var value = args.valueCallback ? args.valueCallback(parseResult[0]) : parseResult[0];
    value = options.valueCallback ? options.valueCallback(value) : value;
    return {
      value: value,
      rest: string.slice(matchedString.length)
    };
  };
}

/***/ }),

/***/ "./node_modules/date-fns/esm/locale/ru/_lib/formatDistance/index.js":
/*!**************************************************************************!*\
  !*** ./node_modules/date-fns/esm/locale/ru/_lib/formatDistance/index.js ***!
  \**************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ formatDistance; }
/* harmony export */ });
function declension(scheme, count) {
  // scheme for count=1 exists
  if (scheme.one !== undefined && count === 1) {
    return scheme.one;
  }

  var rem10 = count % 10;
  var rem100 = count % 100; // 1, 21, 31, ...

  if (rem10 === 1 && rem100 !== 11) {
    return scheme.singularNominative.replace('{{count}}', count); // 2, 3, 4, 22, 23, 24, 32 ...
  } else if (rem10 >= 2 && rem10 <= 4 && (rem100 < 10 || rem100 > 20)) {
    return scheme.singularGenitive.replace('{{count}}', count); // 5, 6, 7, 8, 9, 10, 11, ...
  } else {
    return scheme.pluralGenitive.replace('{{count}}', count);
  }
}

function buildLocalizeTokenFn(scheme) {
  return function (count, options) {
    if (options.addSuffix) {
      if (options.comparison > 0) {
        if (scheme.future) {
          return declension(scheme.future, count);
        } else {
          return 'через ' + declension(scheme.regular, count);
        }
      } else {
        if (scheme.past) {
          return declension(scheme.past, count);
        } else {
          return declension(scheme.regular, count) + ' назад';
        }
      }
    } else {
      return declension(scheme.regular, count);
    }
  };
}

var formatDistanceLocale = {
  lessThanXSeconds: buildLocalizeTokenFn({
    regular: {
      one: 'меньше секунды',
      singularNominative: 'меньше {{count}} секунды',
      singularGenitive: 'меньше {{count}} секунд',
      pluralGenitive: 'меньше {{count}} секунд'
    },
    future: {
      one: 'меньше, чем через секунду',
      singularNominative: 'меньше, чем через {{count}} секунду',
      singularGenitive: 'меньше, чем через {{count}} секунды',
      pluralGenitive: 'меньше, чем через {{count}} секунд'
    }
  }),
  xSeconds: buildLocalizeTokenFn({
    regular: {
      singularNominative: '{{count}} секунда',
      singularGenitive: '{{count}} секунды',
      pluralGenitive: '{{count}} секунд'
    },
    past: {
      singularNominative: '{{count}} секунду назад',
      singularGenitive: '{{count}} секунды назад',
      pluralGenitive: '{{count}} секунд назад'
    },
    future: {
      singularNominative: 'через {{count}} секунду',
      singularGenitive: 'через {{count}} секунды',
      pluralGenitive: 'через {{count}} секунд'
    }
  }),
  halfAMinute: function (_, options) {
    if (options.addSuffix) {
      if (options.comparison > 0) {
        return 'через полминуты';
      } else {
        return 'полминуты назад';
      }
    }

    return 'полминуты';
  },
  lessThanXMinutes: buildLocalizeTokenFn({
    regular: {
      one: 'меньше минуты',
      singularNominative: 'меньше {{count}} минуты',
      singularGenitive: 'меньше {{count}} минут',
      pluralGenitive: 'меньше {{count}} минут'
    },
    future: {
      one: 'меньше, чем через минуту',
      singularNominative: 'меньше, чем через {{count}} минуту',
      singularGenitive: 'меньше, чем через {{count}} минуты',
      pluralGenitive: 'меньше, чем через {{count}} минут'
    }
  }),
  xMinutes: buildLocalizeTokenFn({
    regular: {
      singularNominative: '{{count}} минута',
      singularGenitive: '{{count}} минуты',
      pluralGenitive: '{{count}} минут'
    },
    past: {
      singularNominative: '{{count}} минуту назад',
      singularGenitive: '{{count}} минуты назад',
      pluralGenitive: '{{count}} минут назад'
    },
    future: {
      singularNominative: 'через {{count}} минуту',
      singularGenitive: 'через {{count}} минуты',
      pluralGenitive: 'через {{count}} минут'
    }
  }),
  aboutXHours: buildLocalizeTokenFn({
    regular: {
      singularNominative: 'около {{count}} часа',
      singularGenitive: 'около {{count}} часов',
      pluralGenitive: 'около {{count}} часов'
    },
    future: {
      singularNominative: 'приблизительно через {{count}} час',
      singularGenitive: 'приблизительно через {{count}} часа',
      pluralGenitive: 'приблизительно через {{count}} часов'
    }
  }),
  xHours: buildLocalizeTokenFn({
    regular: {
      singularNominative: '{{count}} час',
      singularGenitive: '{{count}} часа',
      pluralGenitive: '{{count}} часов'
    }
  }),
  xDays: buildLocalizeTokenFn({
    regular: {
      singularNominative: '{{count}} день',
      singularGenitive: '{{count}} дня',
      pluralGenitive: '{{count}} дней'
    }
  }),
  aboutXWeeks: buildLocalizeTokenFn({
    regular: {
      singularNominative: 'около {{count}} недели',
      singularGenitive: 'около {{count}} недель',
      pluralGenitive: 'около {{count}} недель'
    },
    future: {
      singularNominative: 'приблизительно через {{count}} неделю',
      singularGenitive: 'приблизительно через {{count}} недели',
      pluralGenitive: 'приблизительно через {{count}} недель'
    }
  }),
  xWeeks: buildLocalizeTokenFn({
    regular: {
      singularNominative: '{{count}} неделя',
      singularGenitive: '{{count}} недели',
      pluralGenitive: '{{count}} недель'
    }
  }),
  aboutXMonths: buildLocalizeTokenFn({
    regular: {
      singularNominative: 'около {{count}} месяца',
      singularGenitive: 'около {{count}} месяцев',
      pluralGenitive: 'около {{count}} месяцев'
    },
    future: {
      singularNominative: 'приблизительно через {{count}} месяц',
      singularGenitive: 'приблизительно через {{count}} месяца',
      pluralGenitive: 'приблизительно через {{count}} месяцев'
    }
  }),
  xMonths: buildLocalizeTokenFn({
    regular: {
      singularNominative: '{{count}} месяц',
      singularGenitive: '{{count}} месяца',
      pluralGenitive: '{{count}} месяцев'
    }
  }),
  aboutXYears: buildLocalizeTokenFn({
    regular: {
      singularNominative: 'около {{count}} года',
      singularGenitive: 'около {{count}} лет',
      pluralGenitive: 'около {{count}} лет'
    },
    future: {
      singularNominative: 'приблизительно через {{count}} год',
      singularGenitive: 'приблизительно через {{count}} года',
      pluralGenitive: 'приблизительно через {{count}} лет'
    }
  }),
  xYears: buildLocalizeTokenFn({
    regular: {
      singularNominative: '{{count}} год',
      singularGenitive: '{{count}} года',
      pluralGenitive: '{{count}} лет'
    }
  }),
  overXYears: buildLocalizeTokenFn({
    regular: {
      singularNominative: 'больше {{count}} года',
      singularGenitive: 'больше {{count}} лет',
      pluralGenitive: 'больше {{count}} лет'
    },
    future: {
      singularNominative: 'больше, чем через {{count}} год',
      singularGenitive: 'больше, чем через {{count}} года',
      pluralGenitive: 'больше, чем через {{count}} лет'
    }
  }),
  almostXYears: buildLocalizeTokenFn({
    regular: {
      singularNominative: 'почти {{count}} год',
      singularGenitive: 'почти {{count}} года',
      pluralGenitive: 'почти {{count}} лет'
    },
    future: {
      singularNominative: 'почти через {{count}} год',
      singularGenitive: 'почти через {{count}} года',
      pluralGenitive: 'почти через {{count}} лет'
    }
  })
};
function formatDistance(token, count, options) {
  options = options || {};
  return formatDistanceLocale[token](count, options);
}

/***/ }),

/***/ "./node_modules/date-fns/esm/locale/ru/_lib/formatLong/index.js":
/*!**********************************************************************!*\
  !*** ./node_modules/date-fns/esm/locale/ru/_lib/formatLong/index.js ***!
  \**********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _lib_buildFormatLongFn_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../_lib/buildFormatLongFn/index.js */ "./node_modules/date-fns/esm/locale/_lib/buildFormatLongFn/index.js");

var dateFormats = {
  full: "EEEE, do MMMM y 'г.'",
  long: "do MMMM y 'г.'",
  medium: "d MMM y 'г.'",
  short: 'dd.MM.y'
};
var timeFormats = {
  full: 'H:mm:ss zzzz',
  long: 'H:mm:ss z',
  medium: 'H:mm:ss',
  short: 'H:mm'
};
var dateTimeFormats = {
  any: '{{date}}, {{time}}'
};
var formatLong = {
  date: (0,_lib_buildFormatLongFn_index_js__WEBPACK_IMPORTED_MODULE_0__.default)({
    formats: dateFormats,
    defaultWidth: 'full'
  }),
  time: (0,_lib_buildFormatLongFn_index_js__WEBPACK_IMPORTED_MODULE_0__.default)({
    formats: timeFormats,
    defaultWidth: 'full'
  }),
  dateTime: (0,_lib_buildFormatLongFn_index_js__WEBPACK_IMPORTED_MODULE_0__.default)({
    formats: dateTimeFormats,
    defaultWidth: 'any'
  })
};
/* harmony default export */ __webpack_exports__["default"] = (formatLong);

/***/ }),

/***/ "./node_modules/date-fns/esm/locale/ru/_lib/formatRelative/index.js":
/*!**************************************************************************!*\
  !*** ./node_modules/date-fns/esm/locale/ru/_lib/formatRelative/index.js ***!
  \**************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ formatRelative; }
/* harmony export */ });
/* harmony import */ var _lib_isSameUTCWeek_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../_lib/isSameUTCWeek/index.js */ "./node_modules/date-fns/esm/_lib/isSameUTCWeek/index.js");

var accusativeWeekdays = ['воскресенье', 'понедельник', 'вторник', 'среду', 'четверг', 'пятницу', 'субботу'];

function lastWeek(day) {
  var weekday = accusativeWeekdays[day];

  switch (day) {
    case 0:
      return "'в прошлое " + weekday + " в' p";

    case 1:
    case 2:
    case 4:
      return "'в прошлый " + weekday + " в' p";

    case 3:
    case 5:
    case 6:
      return "'в прошлую " + weekday + " в' p";
  }
}

function thisWeek(day) {
  var weekday = accusativeWeekdays[day];

  if (day === 2
  /* Tue */
  ) {
      return "'во " + weekday + " в' p";
    } else {
    return "'в " + weekday + " в' p";
  }
}

function nextWeek(day) {
  var weekday = accusativeWeekdays[day];

  switch (day) {
    case 0:
      return "'в следующее " + weekday + " в' p";

    case 1:
    case 2:
    case 4:
      return "'в следующий " + weekday + " в' p";

    case 3:
    case 5:
    case 6:
      return "'в следующую " + weekday + " в' p";
  }
}

var formatRelativeLocale = {
  lastWeek: function (date, baseDate, options) {
    var day = date.getUTCDay();

    if ((0,_lib_isSameUTCWeek_index_js__WEBPACK_IMPORTED_MODULE_0__.default)(date, baseDate, options)) {
      return thisWeek(day);
    } else {
      return lastWeek(day);
    }
  },
  yesterday: "'вчера в' p",
  today: "'сегодня в' p",
  tomorrow: "'завтра в' p",
  nextWeek: function (date, baseDate, options) {
    var day = date.getUTCDay();

    if ((0,_lib_isSameUTCWeek_index_js__WEBPACK_IMPORTED_MODULE_0__.default)(date, baseDate, options)) {
      return thisWeek(day);
    } else {
      return nextWeek(day);
    }
  },
  other: 'P'
};
function formatRelative(token, date, baseDate, options) {
  var format = formatRelativeLocale[token];

  if (typeof format === 'function') {
    return format(date, baseDate, options);
  }

  return format;
}

/***/ }),

/***/ "./node_modules/date-fns/esm/locale/ru/_lib/localize/index.js":
/*!********************************************************************!*\
  !*** ./node_modules/date-fns/esm/locale/ru/_lib/localize/index.js ***!
  \********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _lib_buildLocalizeFn_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../_lib/buildLocalizeFn/index.js */ "./node_modules/date-fns/esm/locale/_lib/buildLocalizeFn/index.js");

var eraValues = {
  narrow: ['до н.э.', 'н.э.'],
  abbreviated: ['до н. э.', 'н. э.'],
  wide: ['до нашей эры', 'нашей эры']
};
var quarterValues = {
  narrow: ['1', '2', '3', '4'],
  abbreviated: ['1-й кв.', '2-й кв.', '3-й кв.', '4-й кв.'],
  wide: ['1-й квартал', '2-й квартал', '3-й квартал', '4-й квартал']
};
var monthValues = {
  narrow: ['Я', 'Ф', 'М', 'А', 'М', 'И', 'И', 'А', 'С', 'О', 'Н', 'Д'],
  abbreviated: ['янв.', 'фев.', 'март', 'апр.', 'май', 'июнь', 'июль', 'авг.', 'сент.', 'окт.', 'нояб.', 'дек.'],
  wide: ['январь', 'февраль', 'март', 'апрель', 'май', 'июнь', 'июль', 'август', 'сентябрь', 'октябрь', 'ноябрь', 'декабрь']
};
var formattingMonthValues = {
  narrow: ['Я', 'Ф', 'М', 'А', 'М', 'И', 'И', 'А', 'С', 'О', 'Н', 'Д'],
  abbreviated: ['янв.', 'фев.', 'мар.', 'апр.', 'мая', 'июн.', 'июл.', 'авг.', 'сент.', 'окт.', 'нояб.', 'дек.'],
  wide: ['января', 'февраля', 'марта', 'апреля', 'мая', 'июня', 'июля', 'августа', 'сентября', 'октября', 'ноября', 'декабря']
};
var dayValues = {
  narrow: ['В', 'П', 'В', 'С', 'Ч', 'П', 'С'],
  short: ['вс', 'пн', 'вт', 'ср', 'чт', 'пт', 'сб'],
  abbreviated: ['вск', 'пнд', 'втр', 'срд', 'чтв', 'птн', 'суб'],
  wide: ['воскресенье', 'понедельник', 'вторник', 'среда', 'четверг', 'пятница', 'суббота']
};
var dayPeriodValues = {
  narrow: {
    am: 'ДП',
    pm: 'ПП',
    midnight: 'полн.',
    noon: 'полд.',
    morning: 'утро',
    afternoon: 'день',
    evening: 'веч.',
    night: 'ночь'
  },
  abbreviated: {
    am: 'ДП',
    pm: 'ПП',
    midnight: 'полн.',
    noon: 'полд.',
    morning: 'утро',
    afternoon: 'день',
    evening: 'веч.',
    night: 'ночь'
  },
  wide: {
    am: 'ДП',
    pm: 'ПП',
    midnight: 'полночь',
    noon: 'полдень',
    morning: 'утро',
    afternoon: 'день',
    evening: 'вечер',
    night: 'ночь'
  }
};
var formattingDayPeriodValues = {
  narrow: {
    am: 'ДП',
    pm: 'ПП',
    midnight: 'полн.',
    noon: 'полд.',
    morning: 'утра',
    afternoon: 'дня',
    evening: 'веч.',
    night: 'ночи'
  },
  abbreviated: {
    am: 'ДП',
    pm: 'ПП',
    midnight: 'полн.',
    noon: 'полд.',
    morning: 'утра',
    afternoon: 'дня',
    evening: 'веч.',
    night: 'ночи'
  },
  wide: {
    am: 'ДП',
    pm: 'ПП',
    midnight: 'полночь',
    noon: 'полдень',
    morning: 'утра',
    afternoon: 'дня',
    evening: 'вечера',
    night: 'ночи'
  }
};

function ordinalNumber(dirtyNumber, dirtyOptions) {
  var options = dirtyOptions || {};
  var unit = String(options.unit);
  var suffix;

  if (unit === 'date') {
    suffix = '-е';
  } else if (unit === 'week' || unit === 'minute' || unit === 'second') {
    suffix = '-я';
  } else {
    suffix = '-й';
  }

  return dirtyNumber + suffix;
}

var localize = {
  ordinalNumber: ordinalNumber,
  era: (0,_lib_buildLocalizeFn_index_js__WEBPACK_IMPORTED_MODULE_0__.default)({
    values: eraValues,
    defaultWidth: 'wide'
  }),
  quarter: (0,_lib_buildLocalizeFn_index_js__WEBPACK_IMPORTED_MODULE_0__.default)({
    values: quarterValues,
    defaultWidth: 'wide',
    argumentCallback: function (quarter) {
      return Number(quarter) - 1;
    }
  }),
  month: (0,_lib_buildLocalizeFn_index_js__WEBPACK_IMPORTED_MODULE_0__.default)({
    values: monthValues,
    defaultWidth: 'wide',
    formattingValues: formattingMonthValues,
    defaultFormattingWidth: 'wide'
  }),
  day: (0,_lib_buildLocalizeFn_index_js__WEBPACK_IMPORTED_MODULE_0__.default)({
    values: dayValues,
    defaultWidth: 'wide'
  }),
  dayPeriod: (0,_lib_buildLocalizeFn_index_js__WEBPACK_IMPORTED_MODULE_0__.default)({
    values: dayPeriodValues,
    defaultWidth: 'any',
    formattingValues: formattingDayPeriodValues,
    defaultFormattingWidth: 'wide'
  })
};
/* harmony default export */ __webpack_exports__["default"] = (localize);

/***/ }),

/***/ "./node_modules/date-fns/esm/locale/ru/_lib/match/index.js":
/*!*****************************************************************!*\
  !*** ./node_modules/date-fns/esm/locale/ru/_lib/match/index.js ***!
  \*****************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _lib_buildMatchPatternFn_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../_lib/buildMatchPatternFn/index.js */ "./node_modules/date-fns/esm/locale/_lib/buildMatchPatternFn/index.js");
/* harmony import */ var _lib_buildMatchFn_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../_lib/buildMatchFn/index.js */ "./node_modules/date-fns/esm/locale/_lib/buildMatchFn/index.js");


var matchOrdinalNumberPattern = /^(\d+)(-?(е|я|й|ое|ье|ая|ья|ый|ой|ий|ый))?/i;
var parseOrdinalNumberPattern = /\d+/i;
var matchEraPatterns = {
  narrow: /^((до )?н\.?\s?э\.?)/i,
  abbreviated: /^((до )?н\.?\s?э\.?)/i,
  wide: /^(до нашей эры|нашей эры|наша эра)/i
};
var parseEraPatterns = {
  any: [/^д/i, /^н/i]
};
var matchQuarterPatterns = {
  narrow: /^[1234]/i,
  abbreviated: /^[1234](-?[ыои]?й?)? кв.?/i,
  wide: /^[1234](-?[ыои]?й?)? квартал/i
};
var parseQuarterPatterns = {
  any: [/1/i, /2/i, /3/i, /4/i]
};
var matchMonthPatterns = {
  narrow: /^[яфмаисонд]/i,
  abbreviated: /^(янв|фев|март?|апр|ма[йя]|июн[ья]?|июл[ья]?|авг|сент?|окт|нояб?|дек)\.?/i,
  wide: /^(январ[ья]|феврал[ья]|марта?|апрел[ья]|ма[йя]|июн[ья]|июл[ья]|августа?|сентябр[ья]|октябр[ья]|октябр[ья]|ноябр[ья]|декабр[ья])/i
};
var parseMonthPatterns = {
  narrow: [/^я/i, /^ф/i, /^м/i, /^а/i, /^м/i, /^и/i, /^и/i, /^а/i, /^с/i, /^о/i, /^н/i, /^я/i],
  any: [/^я/i, /^ф/i, /^мар/i, /^ап/i, /^ма[йя]/i, /^июн/i, /^июл/i, /^ав/i, /^с/i, /^о/i, /^н/i, /^д/i]
};
var matchDayPatterns = {
  narrow: /^[впсч]/i,
  short: /^(вс|во|пн|по|вт|ср|чт|че|пт|пя|сб|су)\.?/i,
  abbreviated: /^(вск|вос|пнд|пон|втр|вто|срд|сре|чтв|чет|птн|пят|суб).?/i,
  wide: /^(воскресень[ея]|понедельника?|вторника?|сред[аы]|четверга?|пятниц[аы]|суббот[аы])/i
};
var parseDayPatterns = {
  narrow: [/^в/i, /^п/i, /^в/i, /^с/i, /^ч/i, /^п/i, /^с/i],
  any: [/^в[ос]/i, /^п[он]/i, /^в/i, /^ср/i, /^ч/i, /^п[ят]/i, /^с[уб]/i]
};
var matchDayPeriodPatterns = {
  narrow: /^([дп]п|полн\.?|полд\.?|утр[оа]|день|дня|веч\.?|ноч[ьи])/i,
  abbreviated: /^([дп]п|полн\.?|полд\.?|утр[оа]|день|дня|веч\.?|ноч[ьи])/i,
  wide: /^([дп]п|полночь|полдень|утр[оа]|день|дня|вечера?|ноч[ьи])/i
};
var parseDayPeriodPatterns = {
  any: {
    am: /^дп/i,
    pm: /^пп/i,
    midnight: /^полн/i,
    noon: /^полд/i,
    morning: /^у/i,
    afternoon: /^д[ен]/i,
    evening: /^в/i,
    night: /^н/i
  }
};
var match = {
  ordinalNumber: (0,_lib_buildMatchPatternFn_index_js__WEBPACK_IMPORTED_MODULE_0__.default)({
    matchPattern: matchOrdinalNumberPattern,
    parsePattern: parseOrdinalNumberPattern,
    valueCallback: function (value) {
      return parseInt(value, 10);
    }
  }),
  era: (0,_lib_buildMatchFn_index_js__WEBPACK_IMPORTED_MODULE_1__.default)({
    matchPatterns: matchEraPatterns,
    defaultMatchWidth: 'wide',
    parsePatterns: parseEraPatterns,
    defaultParseWidth: 'any'
  }),
  quarter: (0,_lib_buildMatchFn_index_js__WEBPACK_IMPORTED_MODULE_1__.default)({
    matchPatterns: matchQuarterPatterns,
    defaultMatchWidth: 'wide',
    parsePatterns: parseQuarterPatterns,
    defaultParseWidth: 'any',
    valueCallback: function (index) {
      return index + 1;
    }
  }),
  month: (0,_lib_buildMatchFn_index_js__WEBPACK_IMPORTED_MODULE_1__.default)({
    matchPatterns: matchMonthPatterns,
    defaultMatchWidth: 'wide',
    parsePatterns: parseMonthPatterns,
    defaultParseWidth: 'any'
  }),
  day: (0,_lib_buildMatchFn_index_js__WEBPACK_IMPORTED_MODULE_1__.default)({
    matchPatterns: matchDayPatterns,
    defaultMatchWidth: 'wide',
    parsePatterns: parseDayPatterns,
    defaultParseWidth: 'any'
  }),
  dayPeriod: (0,_lib_buildMatchFn_index_js__WEBPACK_IMPORTED_MODULE_1__.default)({
    matchPatterns: matchDayPeriodPatterns,
    defaultMatchWidth: 'wide',
    parsePatterns: parseDayPeriodPatterns,
    defaultParseWidth: 'any'
  })
};
/* harmony default export */ __webpack_exports__["default"] = (match);

/***/ }),

/***/ "./node_modules/date-fns/esm/locale/ru/index.js":
/*!******************************************************!*\
  !*** ./node_modules/date-fns/esm/locale/ru/index.js ***!
  \******************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _lib_formatDistance_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_lib/formatDistance/index.js */ "./node_modules/date-fns/esm/locale/ru/_lib/formatDistance/index.js");
/* harmony import */ var _lib_formatLong_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_lib/formatLong/index.js */ "./node_modules/date-fns/esm/locale/ru/_lib/formatLong/index.js");
/* harmony import */ var _lib_formatRelative_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./_lib/formatRelative/index.js */ "./node_modules/date-fns/esm/locale/ru/_lib/formatRelative/index.js");
/* harmony import */ var _lib_localize_index_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./_lib/localize/index.js */ "./node_modules/date-fns/esm/locale/ru/_lib/localize/index.js");
/* harmony import */ var _lib_match_index_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./_lib/match/index.js */ "./node_modules/date-fns/esm/locale/ru/_lib/match/index.js");





/**
 * @type {Locale}
 * @category Locales
 * @summary Russian locale.
 * @language Russian
 * @iso-639-2 rus
 * @author Sasha Koss [@kossnocorp]{@link https://github.com/kossnocorp}
 * @author Lesha Koss [@leshakoss]{@link https://github.com/leshakoss}
 */

var locale = {
  code: 'ru',
  formatDistance: _lib_formatDistance_index_js__WEBPACK_IMPORTED_MODULE_0__.default,
  formatLong: _lib_formatLong_index_js__WEBPACK_IMPORTED_MODULE_1__.default,
  formatRelative: _lib_formatRelative_index_js__WEBPACK_IMPORTED_MODULE_2__.default,
  localize: _lib_localize_index_js__WEBPACK_IMPORTED_MODULE_3__.default,
  match: _lib_match_index_js__WEBPACK_IMPORTED_MODULE_4__.default,
  options: {
    weekStartsOn: 1
    /* Monday */
    ,
    firstWeekContainsDate: 1
  }
};
/* harmony default export */ __webpack_exports__["default"] = (locale);

/***/ }),

/***/ "./node_modules/date-fns/esm/toDate/index.js":
/*!***************************************************!*\
  !*** ./node_modules/date-fns/esm/toDate/index.js ***!
  \***************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ toDate; }
/* harmony export */ });
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");

/**
 * @name toDate
 * @category Common Helpers
 * @summary Convert the given argument to an instance of Date.
 *
 * @description
 * Convert the given argument to an instance of Date.
 *
 * If the argument is an instance of Date, the function returns its clone.
 *
 * If the argument is a number, it is treated as a timestamp.
 *
 * If the argument is none of the above, the function returns Invalid Date.
 *
 * **Note**: *all* Date arguments passed to any *date-fns* function is processed by `toDate`.
 *
 * @param {Date|Number} argument - the value to convert
 * @returns {Date} the parsed date in the local time zone
 * @throws {TypeError} 1 argument required
 *
 * @example
 * // Clone the date:
 * const result = toDate(new Date(2014, 1, 11, 11, 30, 30))
 * //=> Tue Feb 11 2014 11:30:30
 *
 * @example
 * // Convert the timestamp to date:
 * const result = toDate(1392098430000)
 * //=> Tue Feb 11 2014 11:30:30
 */

function toDate(argument) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__.default)(1, arguments);
  var argStr = Object.prototype.toString.call(argument); // Clone the date

  if (argument instanceof Date || typeof argument === 'object' && argStr === '[object Date]') {
    // Prevent the date to lose the milliseconds when passed to new Date() in IE10
    return new Date(argument.getTime());
  } else if (typeof argument === 'number' || argStr === '[object Number]') {
    return new Date(argument);
  } else {
    if ((typeof argument === 'string' || argStr === '[object String]') && typeof console !== 'undefined') {
      // eslint-disable-next-line no-console
      console.warn("Starting with v2.0.0-beta.1 date-fns doesn't accept strings as date arguments. Please use `parseISO` to parse strings. See: https://git.io/fjule"); // eslint-disable-next-line no-console

      console.warn(new Error().stack);
    }

    return new Date(NaN);
  }
}

/***/ }),

/***/ "./node_modules/react-datepicker/dist/react-datepicker.css":
/*!*****************************************************************!*\
  !*** ./node_modules/react-datepicker/dist/react-datepicker.css ***!
  \*****************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/build.pcss":
/*!************************!*\
  !*** ./src/build.pcss ***!
  \************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/demo/Hello/Hello.pcss":
/*!***********************************!*\
  !*** ./src/demo/Hello/Hello.pcss ***!
  \***********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/elements/DateTimeSelector/DateTimeSelector.pcss":
/*!*************************************************************!*\
  !*** ./src/elements/DateTimeSelector/DateTimeSelector.pcss ***!
  \*************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/elements/ErrorContainer/ErrorContainer.pcss":
/*!*********************************************************!*\
  !*** ./src/elements/ErrorContainer/ErrorContainer.pcss ***!
  \*********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/elements/InlineIcon/InlineIcon.pcss":
/*!*************************************************!*\
  !*** ./src/elements/InlineIcon/InlineIcon.pcss ***!
  \*************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/elements/Loader/Loader-animation.pcss":
/*!***************************************************!*\
  !*** ./src/elements/Loader/Loader-animation.pcss ***!
  \***************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/elements/Loader/Loader-modes.pcss":
/*!***********************************************!*\
  !*** ./src/elements/Loader/Loader-modes.pcss ***!
  \***********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/elements/Loader/Loader-themes.pcss":
/*!************************************************!*\
  !*** ./src/elements/Loader/Loader-themes.pcss ***!
  \************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/elements/Loader/Loader.pcss":
/*!*****************************************!*\
  !*** ./src/elements/Loader/Loader.pcss ***!
  \*****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/elements/MenuItemSeparator/MenuItemSeparator.pcss":
/*!***************************************************************!*\
  !*** ./src/elements/MenuItemSeparator/MenuItemSeparator.pcss ***!
  \***************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/elements/MenuItem/MenuItem.pcss":
/*!*********************************************!*\
  !*** ./src/elements/MenuItem/MenuItem.pcss ***!
  \*********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/elements/Menu/Menu.pcss":
/*!*************************************!*\
  !*** ./src/elements/Menu/Menu.pcss ***!
  \*************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/elements/ModalPopup/ModalPopup.pcss":
/*!*************************************************!*\
  !*** ./src/elements/ModalPopup/ModalPopup.pcss ***!
  \*************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/elements/ModalPortal/ModalPortal-Geometry.pcss":
/*!************************************************************!*\
  !*** ./src/elements/ModalPortal/ModalPortal-Geometry.pcss ***!
  \************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/elements/ModalPortal/ModalPortal-Themes.pcss":
/*!**********************************************************!*\
  !*** ./src/elements/ModalPortal/ModalPortal-Themes.pcss ***!
  \**********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/elements/ModalPortal/ModalPortal-Transitions.pcss":
/*!***************************************************************!*\
  !*** ./src/elements/ModalPortal/ModalPortal-Transitions.pcss ***!
  \***************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/elements/ModalPortal/ModalPortal-Variants.pcss":
/*!************************************************************!*\
  !*** ./src/elements/ModalPortal/ModalPortal-Variants.pcss ***!
  \************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/elements/ModalWindow/ModalWindow-Errors.pcss":
/*!**********************************************************!*\
  !*** ./src/elements/ModalWindow/ModalWindow-Errors.pcss ***!
  \**********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/elements/ModalWindow/ModalWindow-Geometry.pcss":
/*!************************************************************!*\
  !*** ./src/elements/ModalWindow/ModalWindow-Geometry.pcss ***!
  \************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/elements/ModalWindow/ModalWindow-Themes.pcss":
/*!**********************************************************!*\
  !*** ./src/elements/ModalWindow/ModalWindow-Themes.pcss ***!
  \**********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/elements/ModalsController/ModalsController.pcss":
/*!*************************************************************!*\
  !*** ./src/elements/ModalsController/ModalsController.pcss ***!
  \*************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/forms/FormActions/FormActions.pcss":
/*!************************************************!*\
  !*** ./src/forms/FormActions/FormActions.pcss ***!
  \************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/forms/FormButtonGroup/FormButtonGroup.pcss":
/*!********************************************************!*\
  !*** ./src/forms/FormButtonGroup/FormButtonGroup.pcss ***!
  \********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/forms/FormButton/FormButton-Themes.pcss":
/*!*****************************************************!*\
  !*** ./src/forms/FormButton/FormButton-Themes.pcss ***!
  \*****************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/forms/FormButton/FormButton-Variations.pcss":
/*!*********************************************************!*\
  !*** ./src/forms/FormButton/FormButton-Variations.pcss ***!
  \*********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/forms/FormButton/FormButton.pcss":
/*!**********************************************!*\
  !*** ./src/forms/FormButton/FormButton.pcss ***!
  \**********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/forms/FormContainer/FormContainer.pcss":
/*!****************************************************!*\
  !*** ./src/forms/FormContainer/FormContainer.pcss ***!
  \****************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/forms/FormDateRangeSingleBox/FormDateRangeSingleBox.pcss":
/*!**********************************************************************!*\
  !*** ./src/forms/FormDateRangeSingleBox/FormDateRangeSingleBox.pcss ***!
  \**********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/forms/FormDateRange/FormDateRange.pcss":
/*!****************************************************!*\
  !*** ./src/forms/FormDateRange/FormDateRange.pcss ***!
  \****************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/forms/FormDateTime/FormDateTime.pcss":
/*!**************************************************!*\
  !*** ./src/forms/FormDateTime/FormDateTime.pcss ***!
  \**************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/forms/FormDelim/FormDelim.pcss":
/*!********************************************!*\
  !*** ./src/forms/FormDelim/FormDelim.pcss ***!
  \********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/forms/FormGroup/FormGroup-Layout.pcss":
/*!***************************************************!*\
  !*** ./src/forms/FormGroup/FormGroup-Layout.pcss ***!
  \***************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/forms/FormGroup/FormGroup-Variations.pcss":
/*!*******************************************************!*\
  !*** ./src/forms/FormGroup/FormGroup-Variations.pcss ***!
  \*******************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/forms/FormGroup/FormGroup.pcss":
/*!********************************************!*\
  !*** ./src/forms/FormGroup/FormGroup.pcss ***!
  \********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/forms/FormInputGroup/FormInputGroup.pcss":
/*!******************************************************!*\
  !*** ./src/forms/FormInputGroup/FormInputGroup.pcss ***!
  \******************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/forms/FormItemDummy/FormItemDummy.pcss":
/*!****************************************************!*\
  !*** ./src/forms/FormItemDummy/FormItemDummy.pcss ***!
  \****************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/forms/FormItemHOC/FormItemHOC.pcss":
/*!************************************************!*\
  !*** ./src/forms/FormItemHOC/FormItemHOC.pcss ***!
  \************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/forms/FormLabel/FormLabel.pcss":
/*!********************************************!*\
  !*** ./src/forms/FormLabel/FormLabel.pcss ***!
  \********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/forms/FormPasswordInput/FormPasswordInput.pcss":
/*!************************************************************!*\
  !*** ./src/forms/FormPasswordInput/FormPasswordInput.pcss ***!
  \************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/forms/FormRadio/FormRadio-Themes.pcss":
/*!***************************************************!*\
  !*** ./src/forms/FormRadio/FormRadio-Themes.pcss ***!
  \***************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/forms/FormRadio/FormRadio.pcss":
/*!********************************************!*\
  !*** ./src/forms/FormRadio/FormRadio.pcss ***!
  \********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/forms/FormSelect/FormSelect.pcss":
/*!**********************************************!*\
  !*** ./src/forms/FormSelect/FormSelect.pcss ***!
  \**********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/forms/FormSeparator/FormSeparator.pcss":
/*!****************************************************!*\
  !*** ./src/forms/FormSeparator/FormSeparator.pcss ***!
  \****************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/forms/FormSpacer/FormSpacer.pcss":
/*!**********************************************!*\
  !*** ./src/forms/FormSpacer/FormSpacer.pcss ***!
  \**********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/forms/FormTextInput/FormTextInput.pcss":
/*!****************************************************!*\
  !*** ./src/forms/FormTextInput/FormTextInput.pcss ***!
  \****************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/forms/FormText/FormText.pcss":
/*!******************************************!*\
  !*** ./src/forms/FormText/FormText.pcss ***!
  \******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./node_modules/object-assign/index.js":
/*!*********************************************!*\
  !*** ./node_modules/object-assign/index.js ***!
  \*********************************************/
/***/ (function(module) {

"use strict";
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/


/* eslint-disable no-unused-vars */
var getOwnPropertySymbols = Object.getOwnPropertySymbols;
var hasOwnProperty = Object.prototype.hasOwnProperty;
var propIsEnumerable = Object.prototype.propertyIsEnumerable;

function toObject(val) {
	if (val === null || val === undefined) {
		throw new TypeError('Object.assign cannot be called with null or undefined');
	}

	return Object(val);
}

function shouldUseNative() {
	try {
		if (!Object.assign) {
			return false;
		}

		// Detect buggy property enumeration order in older V8 versions.

		// https://bugs.chromium.org/p/v8/issues/detail?id=4118
		var test1 = new String('abc');  // eslint-disable-line no-new-wrappers
		test1[5] = 'de';
		if (Object.getOwnPropertyNames(test1)[0] === '5') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test2 = {};
		for (var i = 0; i < 10; i++) {
			test2['_' + String.fromCharCode(i)] = i;
		}
		var order2 = Object.getOwnPropertyNames(test2).map(function (n) {
			return test2[n];
		});
		if (order2.join('') !== '0123456789') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test3 = {};
		'abcdefghijklmnopqrst'.split('').forEach(function (letter) {
			test3[letter] = letter;
		});
		if (Object.keys(Object.assign({}, test3)).join('') !==
				'abcdefghijklmnopqrst') {
			return false;
		}

		return true;
	} catch (err) {
		// We don't expect any of the above to throw, but better to be safe.
		return false;
	}
}

module.exports = shouldUseNative() ? Object.assign : function (target, source) {
	var from;
	var to = toObject(target);
	var symbols;

	for (var s = 1; s < arguments.length; s++) {
		from = Object(arguments[s]);

		for (var key in from) {
			if (hasOwnProperty.call(from, key)) {
				to[key] = from[key];
			}
		}

		if (getOwnPropertySymbols) {
			symbols = getOwnPropertySymbols(from);
			for (var i = 0; i < symbols.length; i++) {
				if (propIsEnumerable.call(from, symbols[i])) {
					to[symbols[i]] = from[symbols[i]];
				}
			}
		}
	}

	return to;
};


/***/ }),

/***/ "./node_modules/prop-types/checkPropTypes.js":
/*!***************************************************!*\
  !*** ./node_modules/prop-types/checkPropTypes.js ***!
  \***************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var printWarning = function() {};

if (true) {
  var ReactPropTypesSecret = __webpack_require__(/*! ./lib/ReactPropTypesSecret */ "./node_modules/prop-types/lib/ReactPropTypesSecret.js");
  var loggedTypeFailures = {};
  var has = Function.call.bind(Object.prototype.hasOwnProperty);

  printWarning = function(text) {
    var message = 'Warning: ' + text;
    if (typeof console !== 'undefined') {
      console.error(message);
    }
    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) {}
  };
}

/**
 * Assert that the values match with the type specs.
 * Error messages are memorized and will only be shown once.
 *
 * @param {object} typeSpecs Map of name to a ReactPropType
 * @param {object} values Runtime values that need to be type-checked
 * @param {string} location e.g. "prop", "context", "child context"
 * @param {string} componentName Name of the component for error messages.
 * @param {?Function} getStack Returns the component stack.
 * @private
 */
function checkPropTypes(typeSpecs, values, location, componentName, getStack) {
  if (true) {
    for (var typeSpecName in typeSpecs) {
      if (has(typeSpecs, typeSpecName)) {
        var error;
        // Prop type validation may throw. In case they do, we don't want to
        // fail the render phase where it didn't fail before. So we log it.
        // After these have been cleaned up, we'll let them throw.
        try {
          // This is intentionally an invariant that gets caught. It's the same
          // behavior as without this statement except with a better message.
          if (typeof typeSpecs[typeSpecName] !== 'function') {
            var err = Error(
              (componentName || 'React class') + ': ' + location + ' type `' + typeSpecName + '` is invalid; ' +
              'it must be a function, usually from the `prop-types` package, but received `' + typeof typeSpecs[typeSpecName] + '`.'
            );
            err.name = 'Invariant Violation';
            throw err;
          }
          error = typeSpecs[typeSpecName](values, typeSpecName, componentName, location, null, ReactPropTypesSecret);
        } catch (ex) {
          error = ex;
        }
        if (error && !(error instanceof Error)) {
          printWarning(
            (componentName || 'React class') + ': type specification of ' +
            location + ' `' + typeSpecName + '` is invalid; the type checker ' +
            'function must return `null` or an `Error` but returned a ' + typeof error + '. ' +
            'You may have forgotten to pass an argument to the type checker ' +
            'creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and ' +
            'shape all require an argument).'
          );
        }
        if (error instanceof Error && !(error.message in loggedTypeFailures)) {
          // Only monitor this failure once because there tends to be a lot of the
          // same error.
          loggedTypeFailures[error.message] = true;

          var stack = getStack ? getStack() : '';

          printWarning(
            'Failed ' + location + ' type: ' + error.message + (stack != null ? stack : '')
          );
        }
      }
    }
  }
}

/**
 * Resets warning cache when testing.
 *
 * @private
 */
checkPropTypes.resetWarningCache = function() {
  if (true) {
    loggedTypeFailures = {};
  }
}

module.exports = checkPropTypes;


/***/ }),

/***/ "./node_modules/prop-types/factoryWithTypeCheckers.js":
/*!************************************************************!*\
  !*** ./node_modules/prop-types/factoryWithTypeCheckers.js ***!
  \************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var ReactIs = __webpack_require__(/*! react-is */ "./node_modules/react-is/index.js");
var assign = __webpack_require__(/*! object-assign */ "./node_modules/object-assign/index.js");

var ReactPropTypesSecret = __webpack_require__(/*! ./lib/ReactPropTypesSecret */ "./node_modules/prop-types/lib/ReactPropTypesSecret.js");
var checkPropTypes = __webpack_require__(/*! ./checkPropTypes */ "./node_modules/prop-types/checkPropTypes.js");

var has = Function.call.bind(Object.prototype.hasOwnProperty);
var printWarning = function() {};

if (true) {
  printWarning = function(text) {
    var message = 'Warning: ' + text;
    if (typeof console !== 'undefined') {
      console.error(message);
    }
    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) {}
  };
}

function emptyFunctionThatReturnsNull() {
  return null;
}

module.exports = function(isValidElement, throwOnDirectAccess) {
  /* global Symbol */
  var ITERATOR_SYMBOL = typeof Symbol === 'function' && Symbol.iterator;
  var FAUX_ITERATOR_SYMBOL = '@@iterator'; // Before Symbol spec.

  /**
   * Returns the iterator method function contained on the iterable object.
   *
   * Be sure to invoke the function with the iterable as context:
   *
   *     var iteratorFn = getIteratorFn(myIterable);
   *     if (iteratorFn) {
   *       var iterator = iteratorFn.call(myIterable);
   *       ...
   *     }
   *
   * @param {?object} maybeIterable
   * @return {?function}
   */
  function getIteratorFn(maybeIterable) {
    var iteratorFn = maybeIterable && (ITERATOR_SYMBOL && maybeIterable[ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL]);
    if (typeof iteratorFn === 'function') {
      return iteratorFn;
    }
  }

  /**
   * Collection of methods that allow declaration and validation of props that are
   * supplied to React components. Example usage:
   *
   *   var Props = require('ReactPropTypes');
   *   var MyArticle = React.createClass({
   *     propTypes: {
   *       // An optional string prop named "description".
   *       description: Props.string,
   *
   *       // A required enum prop named "category".
   *       category: Props.oneOf(['News','Photos']).isRequired,
   *
   *       // A prop named "dialog" that requires an instance of Dialog.
   *       dialog: Props.instanceOf(Dialog).isRequired
   *     },
   *     render: function() { ... }
   *   });
   *
   * A more formal specification of how these methods are used:
   *
   *   type := array|bool|func|object|number|string|oneOf([...])|instanceOf(...)
   *   decl := ReactPropTypes.{type}(.isRequired)?
   *
   * Each and every declaration produces a function with the same signature. This
   * allows the creation of custom validation functions. For example:
   *
   *  var MyLink = React.createClass({
   *    propTypes: {
   *      // An optional string or URI prop named "href".
   *      href: function(props, propName, componentName) {
   *        var propValue = props[propName];
   *        if (propValue != null && typeof propValue !== 'string' &&
   *            !(propValue instanceof URI)) {
   *          return new Error(
   *            'Expected a string or an URI for ' + propName + ' in ' +
   *            componentName
   *          );
   *        }
   *      }
   *    },
   *    render: function() {...}
   *  });
   *
   * @internal
   */

  var ANONYMOUS = '<<anonymous>>';

  // Important!
  // Keep this list in sync with production version in `./factoryWithThrowingShims.js`.
  var ReactPropTypes = {
    array: createPrimitiveTypeChecker('array'),
    bool: createPrimitiveTypeChecker('boolean'),
    func: createPrimitiveTypeChecker('function'),
    number: createPrimitiveTypeChecker('number'),
    object: createPrimitiveTypeChecker('object'),
    string: createPrimitiveTypeChecker('string'),
    symbol: createPrimitiveTypeChecker('symbol'),

    any: createAnyTypeChecker(),
    arrayOf: createArrayOfTypeChecker,
    element: createElementTypeChecker(),
    elementType: createElementTypeTypeChecker(),
    instanceOf: createInstanceTypeChecker,
    node: createNodeChecker(),
    objectOf: createObjectOfTypeChecker,
    oneOf: createEnumTypeChecker,
    oneOfType: createUnionTypeChecker,
    shape: createShapeTypeChecker,
    exact: createStrictShapeTypeChecker,
  };

  /**
   * inlined Object.is polyfill to avoid requiring consumers ship their own
   * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is
   */
  /*eslint-disable no-self-compare*/
  function is(x, y) {
    // SameValue algorithm
    if (x === y) {
      // Steps 1-5, 7-10
      // Steps 6.b-6.e: +0 != -0
      return x !== 0 || 1 / x === 1 / y;
    } else {
      // Step 6.a: NaN == NaN
      return x !== x && y !== y;
    }
  }
  /*eslint-enable no-self-compare*/

  /**
   * We use an Error-like object for backward compatibility as people may call
   * PropTypes directly and inspect their output. However, we don't use real
   * Errors anymore. We don't inspect their stack anyway, and creating them
   * is prohibitively expensive if they are created too often, such as what
   * happens in oneOfType() for any type before the one that matched.
   */
  function PropTypeError(message) {
    this.message = message;
    this.stack = '';
  }
  // Make `instanceof Error` still work for returned errors.
  PropTypeError.prototype = Error.prototype;

  function createChainableTypeChecker(validate) {
    if (true) {
      var manualPropTypeCallCache = {};
      var manualPropTypeWarningCount = 0;
    }
    function checkType(isRequired, props, propName, componentName, location, propFullName, secret) {
      componentName = componentName || ANONYMOUS;
      propFullName = propFullName || propName;

      if (secret !== ReactPropTypesSecret) {
        if (throwOnDirectAccess) {
          // New behavior only for users of `prop-types` package
          var err = new Error(
            'Calling PropTypes validators directly is not supported by the `prop-types` package. ' +
            'Use `PropTypes.checkPropTypes()` to call them. ' +
            'Read more at http://fb.me/use-check-prop-types'
          );
          err.name = 'Invariant Violation';
          throw err;
        } else if ( true && typeof console !== 'undefined') {
          // Old behavior for people using React.PropTypes
          var cacheKey = componentName + ':' + propName;
          if (
            !manualPropTypeCallCache[cacheKey] &&
            // Avoid spamming the console because they are often not actionable except for lib authors
            manualPropTypeWarningCount < 3
          ) {
            printWarning(
              'You are manually calling a React.PropTypes validation ' +
              'function for the `' + propFullName + '` prop on `' + componentName  + '`. This is deprecated ' +
              'and will throw in the standalone `prop-types` package. ' +
              'You may be seeing this warning due to a third-party PropTypes ' +
              'library. See https://fb.me/react-warning-dont-call-proptypes ' + 'for details.'
            );
            manualPropTypeCallCache[cacheKey] = true;
            manualPropTypeWarningCount++;
          }
        }
      }
      if (props[propName] == null) {
        if (isRequired) {
          if (props[propName] === null) {
            return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required ' + ('in `' + componentName + '`, but its value is `null`.'));
          }
          return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required in ' + ('`' + componentName + '`, but its value is `undefined`.'));
        }
        return null;
      } else {
        return validate(props, propName, componentName, location, propFullName);
      }
    }

    var chainedCheckType = checkType.bind(null, false);
    chainedCheckType.isRequired = checkType.bind(null, true);

    return chainedCheckType;
  }

  function createPrimitiveTypeChecker(expectedType) {
    function validate(props, propName, componentName, location, propFullName, secret) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== expectedType) {
        // `propValue` being instance of, say, date/regexp, pass the 'object'
        // check, but we can offer a more precise error message here rather than
        // 'of type `object`'.
        var preciseType = getPreciseType(propValue);

        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + preciseType + '` supplied to `' + componentName + '`, expected ') + ('`' + expectedType + '`.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createAnyTypeChecker() {
    return createChainableTypeChecker(emptyFunctionThatReturnsNull);
  }

  function createArrayOfTypeChecker(typeChecker) {
    function validate(props, propName, componentName, location, propFullName) {
      if (typeof typeChecker !== 'function') {
        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside arrayOf.');
      }
      var propValue = props[propName];
      if (!Array.isArray(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an array.'));
      }
      for (var i = 0; i < propValue.length; i++) {
        var error = typeChecker(propValue, i, componentName, location, propFullName + '[' + i + ']', ReactPropTypesSecret);
        if (error instanceof Error) {
          return error;
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createElementTypeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      if (!isValidElement(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected a single ReactElement.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createElementTypeTypeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      if (!ReactIs.isValidElementType(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected a single ReactElement type.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createInstanceTypeChecker(expectedClass) {
    function validate(props, propName, componentName, location, propFullName) {
      if (!(props[propName] instanceof expectedClass)) {
        var expectedClassName = expectedClass.name || ANONYMOUS;
        var actualClassName = getClassName(props[propName]);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + actualClassName + '` supplied to `' + componentName + '`, expected ') + ('instance of `' + expectedClassName + '`.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createEnumTypeChecker(expectedValues) {
    if (!Array.isArray(expectedValues)) {
      if (true) {
        if (arguments.length > 1) {
          printWarning(
            'Invalid arguments supplied to oneOf, expected an array, got ' + arguments.length + ' arguments. ' +
            'A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z]).'
          );
        } else {
          printWarning('Invalid argument supplied to oneOf, expected an array.');
        }
      }
      return emptyFunctionThatReturnsNull;
    }

    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      for (var i = 0; i < expectedValues.length; i++) {
        if (is(propValue, expectedValues[i])) {
          return null;
        }
      }

      var valuesString = JSON.stringify(expectedValues, function replacer(key, value) {
        var type = getPreciseType(value);
        if (type === 'symbol') {
          return String(value);
        }
        return value;
      });
      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of value `' + String(propValue) + '` ' + ('supplied to `' + componentName + '`, expected one of ' + valuesString + '.'));
    }
    return createChainableTypeChecker(validate);
  }

  function createObjectOfTypeChecker(typeChecker) {
    function validate(props, propName, componentName, location, propFullName) {
      if (typeof typeChecker !== 'function') {
        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside objectOf.');
      }
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an object.'));
      }
      for (var key in propValue) {
        if (has(propValue, key)) {
          var error = typeChecker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
          if (error instanceof Error) {
            return error;
          }
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createUnionTypeChecker(arrayOfTypeCheckers) {
    if (!Array.isArray(arrayOfTypeCheckers)) {
       true ? printWarning('Invalid argument supplied to oneOfType, expected an instance of array.') : 0;
      return emptyFunctionThatReturnsNull;
    }

    for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
      var checker = arrayOfTypeCheckers[i];
      if (typeof checker !== 'function') {
        printWarning(
          'Invalid argument supplied to oneOfType. Expected an array of check functions, but ' +
          'received ' + getPostfixForTypeWarning(checker) + ' at index ' + i + '.'
        );
        return emptyFunctionThatReturnsNull;
      }
    }

    function validate(props, propName, componentName, location, propFullName) {
      for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
        var checker = arrayOfTypeCheckers[i];
        if (checker(props, propName, componentName, location, propFullName, ReactPropTypesSecret) == null) {
          return null;
        }
      }

      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`.'));
    }
    return createChainableTypeChecker(validate);
  }

  function createNodeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      if (!isNode(props[propName])) {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`, expected a ReactNode.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createShapeTypeChecker(shapeTypes) {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
      }
      for (var key in shapeTypes) {
        var checker = shapeTypes[key];
        if (!checker) {
          continue;
        }
        var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
        if (error) {
          return error;
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createStrictShapeTypeChecker(shapeTypes) {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
      }
      // We need to check all keys in case some are required but missing from
      // props.
      var allKeys = assign({}, props[propName], shapeTypes);
      for (var key in allKeys) {
        var checker = shapeTypes[key];
        if (!checker) {
          return new PropTypeError(
            'Invalid ' + location + ' `' + propFullName + '` key `' + key + '` supplied to `' + componentName + '`.' +
            '\nBad object: ' + JSON.stringify(props[propName], null, '  ') +
            '\nValid keys: ' +  JSON.stringify(Object.keys(shapeTypes), null, '  ')
          );
        }
        var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
        if (error) {
          return error;
        }
      }
      return null;
    }

    return createChainableTypeChecker(validate);
  }

  function isNode(propValue) {
    switch (typeof propValue) {
      case 'number':
      case 'string':
      case 'undefined':
        return true;
      case 'boolean':
        return !propValue;
      case 'object':
        if (Array.isArray(propValue)) {
          return propValue.every(isNode);
        }
        if (propValue === null || isValidElement(propValue)) {
          return true;
        }

        var iteratorFn = getIteratorFn(propValue);
        if (iteratorFn) {
          var iterator = iteratorFn.call(propValue);
          var step;
          if (iteratorFn !== propValue.entries) {
            while (!(step = iterator.next()).done) {
              if (!isNode(step.value)) {
                return false;
              }
            }
          } else {
            // Iterator will provide entry [k,v] tuples rather than values.
            while (!(step = iterator.next()).done) {
              var entry = step.value;
              if (entry) {
                if (!isNode(entry[1])) {
                  return false;
                }
              }
            }
          }
        } else {
          return false;
        }

        return true;
      default:
        return false;
    }
  }

  function isSymbol(propType, propValue) {
    // Native Symbol.
    if (propType === 'symbol') {
      return true;
    }

    // falsy value can't be a Symbol
    if (!propValue) {
      return false;
    }

    // 19.4.3.5 Symbol.prototype[@@toStringTag] === 'Symbol'
    if (propValue['@@toStringTag'] === 'Symbol') {
      return true;
    }

    // Fallback for non-spec compliant Symbols which are polyfilled.
    if (typeof Symbol === 'function' && propValue instanceof Symbol) {
      return true;
    }

    return false;
  }

  // Equivalent of `typeof` but with special handling for array and regexp.
  function getPropType(propValue) {
    var propType = typeof propValue;
    if (Array.isArray(propValue)) {
      return 'array';
    }
    if (propValue instanceof RegExp) {
      // Old webkits (at least until Android 4.0) return 'function' rather than
      // 'object' for typeof a RegExp. We'll normalize this here so that /bla/
      // passes PropTypes.object.
      return 'object';
    }
    if (isSymbol(propType, propValue)) {
      return 'symbol';
    }
    return propType;
  }

  // This handles more types than `getPropType`. Only used for error messages.
  // See `createPrimitiveTypeChecker`.
  function getPreciseType(propValue) {
    if (typeof propValue === 'undefined' || propValue === null) {
      return '' + propValue;
    }
    var propType = getPropType(propValue);
    if (propType === 'object') {
      if (propValue instanceof Date) {
        return 'date';
      } else if (propValue instanceof RegExp) {
        return 'regexp';
      }
    }
    return propType;
  }

  // Returns a string that is postfixed to a warning about an invalid type.
  // For example, "undefined" or "of type array"
  function getPostfixForTypeWarning(value) {
    var type = getPreciseType(value);
    switch (type) {
      case 'array':
      case 'object':
        return 'an ' + type;
      case 'boolean':
      case 'date':
      case 'regexp':
        return 'a ' + type;
      default:
        return type;
    }
  }

  // Returns class name of the object, if any.
  function getClassName(propValue) {
    if (!propValue.constructor || !propValue.constructor.name) {
      return ANONYMOUS;
    }
    return propValue.constructor.name;
  }

  ReactPropTypes.checkPropTypes = checkPropTypes;
  ReactPropTypes.resetWarningCache = checkPropTypes.resetWarningCache;
  ReactPropTypes.PropTypes = ReactPropTypes;

  return ReactPropTypes;
};


/***/ }),

/***/ "./node_modules/prop-types/index.js":
/*!******************************************!*\
  !*** ./node_modules/prop-types/index.js ***!
  \******************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

if (true) {
  var ReactIs = __webpack_require__(/*! react-is */ "./node_modules/react-is/index.js");

  // By explicitly using `prop-types` you are opting into new development behavior.
  // http://fb.me/prop-types-in-prod
  var throwOnDirectAccess = true;
  module.exports = __webpack_require__(/*! ./factoryWithTypeCheckers */ "./node_modules/prop-types/factoryWithTypeCheckers.js")(ReactIs.isElement, throwOnDirectAccess);
} else {}


/***/ }),

/***/ "./node_modules/prop-types/lib/ReactPropTypesSecret.js":
/*!*************************************************************!*\
  !*** ./node_modules/prop-types/lib/ReactPropTypesSecret.js ***!
  \*************************************************************/
/***/ (function(module) {

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

/***/ "./node_modules/react-is/cjs/react-is.development.js":
/*!***********************************************************!*\
  !*** ./node_modules/react-is/cjs/react-is.development.js ***!
  \***********************************************************/
/***/ (function(__unused_webpack_module, exports) {

"use strict";
/** @license React v16.13.1
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */





if (true) {
  (function() {
'use strict';

// The Symbol used to tag the ReactElement-like types. If there is no native Symbol
// nor polyfill, then a plain number is used for performance.
var hasSymbol = typeof Symbol === 'function' && Symbol.for;
var REACT_ELEMENT_TYPE = hasSymbol ? Symbol.for('react.element') : 0xeac7;
var REACT_PORTAL_TYPE = hasSymbol ? Symbol.for('react.portal') : 0xeaca;
var REACT_FRAGMENT_TYPE = hasSymbol ? Symbol.for('react.fragment') : 0xeacb;
var REACT_STRICT_MODE_TYPE = hasSymbol ? Symbol.for('react.strict_mode') : 0xeacc;
var REACT_PROFILER_TYPE = hasSymbol ? Symbol.for('react.profiler') : 0xead2;
var REACT_PROVIDER_TYPE = hasSymbol ? Symbol.for('react.provider') : 0xeacd;
var REACT_CONTEXT_TYPE = hasSymbol ? Symbol.for('react.context') : 0xeace; // TODO: We don't use AsyncMode or ConcurrentMode anymore. They were temporary
// (unstable) APIs that have been removed. Can we remove the symbols?

var REACT_ASYNC_MODE_TYPE = hasSymbol ? Symbol.for('react.async_mode') : 0xeacf;
var REACT_CONCURRENT_MODE_TYPE = hasSymbol ? Symbol.for('react.concurrent_mode') : 0xeacf;
var REACT_FORWARD_REF_TYPE = hasSymbol ? Symbol.for('react.forward_ref') : 0xead0;
var REACT_SUSPENSE_TYPE = hasSymbol ? Symbol.for('react.suspense') : 0xead1;
var REACT_SUSPENSE_LIST_TYPE = hasSymbol ? Symbol.for('react.suspense_list') : 0xead8;
var REACT_MEMO_TYPE = hasSymbol ? Symbol.for('react.memo') : 0xead3;
var REACT_LAZY_TYPE = hasSymbol ? Symbol.for('react.lazy') : 0xead4;
var REACT_BLOCK_TYPE = hasSymbol ? Symbol.for('react.block') : 0xead9;
var REACT_FUNDAMENTAL_TYPE = hasSymbol ? Symbol.for('react.fundamental') : 0xead5;
var REACT_RESPONDER_TYPE = hasSymbol ? Symbol.for('react.responder') : 0xead6;
var REACT_SCOPE_TYPE = hasSymbol ? Symbol.for('react.scope') : 0xead7;

function isValidElementType(type) {
  return typeof type === 'string' || typeof type === 'function' || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
  type === REACT_FRAGMENT_TYPE || type === REACT_CONCURRENT_MODE_TYPE || type === REACT_PROFILER_TYPE || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || type === REACT_SUSPENSE_LIST_TYPE || typeof type === 'object' && type !== null && (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE || type.$$typeof === REACT_FUNDAMENTAL_TYPE || type.$$typeof === REACT_RESPONDER_TYPE || type.$$typeof === REACT_SCOPE_TYPE || type.$$typeof === REACT_BLOCK_TYPE);
}

function typeOf(object) {
  if (typeof object === 'object' && object !== null) {
    var $$typeof = object.$$typeof;

    switch ($$typeof) {
      case REACT_ELEMENT_TYPE:
        var type = object.type;

        switch (type) {
          case REACT_ASYNC_MODE_TYPE:
          case REACT_CONCURRENT_MODE_TYPE:
          case REACT_FRAGMENT_TYPE:
          case REACT_PROFILER_TYPE:
          case REACT_STRICT_MODE_TYPE:
          case REACT_SUSPENSE_TYPE:
            return type;

          default:
            var $$typeofType = type && type.$$typeof;

            switch ($$typeofType) {
              case REACT_CONTEXT_TYPE:
              case REACT_FORWARD_REF_TYPE:
              case REACT_LAZY_TYPE:
              case REACT_MEMO_TYPE:
              case REACT_PROVIDER_TYPE:
                return $$typeofType;

              default:
                return $$typeof;
            }

        }

      case REACT_PORTAL_TYPE:
        return $$typeof;
    }
  }

  return undefined;
} // AsyncMode is deprecated along with isAsyncMode

var AsyncMode = REACT_ASYNC_MODE_TYPE;
var ConcurrentMode = REACT_CONCURRENT_MODE_TYPE;
var ContextConsumer = REACT_CONTEXT_TYPE;
var ContextProvider = REACT_PROVIDER_TYPE;
var Element = REACT_ELEMENT_TYPE;
var ForwardRef = REACT_FORWARD_REF_TYPE;
var Fragment = REACT_FRAGMENT_TYPE;
var Lazy = REACT_LAZY_TYPE;
var Memo = REACT_MEMO_TYPE;
var Portal = REACT_PORTAL_TYPE;
var Profiler = REACT_PROFILER_TYPE;
var StrictMode = REACT_STRICT_MODE_TYPE;
var Suspense = REACT_SUSPENSE_TYPE;
var hasWarnedAboutDeprecatedIsAsyncMode = false; // AsyncMode should be deprecated

function isAsyncMode(object) {
  {
    if (!hasWarnedAboutDeprecatedIsAsyncMode) {
      hasWarnedAboutDeprecatedIsAsyncMode = true; // Using console['warn'] to evade Babel and ESLint

      console['warn']('The ReactIs.isAsyncMode() alias has been deprecated, ' + 'and will be removed in React 17+. Update your code to use ' + 'ReactIs.isConcurrentMode() instead. It has the exact same API.');
    }
  }

  return isConcurrentMode(object) || typeOf(object) === REACT_ASYNC_MODE_TYPE;
}
function isConcurrentMode(object) {
  return typeOf(object) === REACT_CONCURRENT_MODE_TYPE;
}
function isContextConsumer(object) {
  return typeOf(object) === REACT_CONTEXT_TYPE;
}
function isContextProvider(object) {
  return typeOf(object) === REACT_PROVIDER_TYPE;
}
function isElement(object) {
  return typeof object === 'object' && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
}
function isForwardRef(object) {
  return typeOf(object) === REACT_FORWARD_REF_TYPE;
}
function isFragment(object) {
  return typeOf(object) === REACT_FRAGMENT_TYPE;
}
function isLazy(object) {
  return typeOf(object) === REACT_LAZY_TYPE;
}
function isMemo(object) {
  return typeOf(object) === REACT_MEMO_TYPE;
}
function isPortal(object) {
  return typeOf(object) === REACT_PORTAL_TYPE;
}
function isProfiler(object) {
  return typeOf(object) === REACT_PROFILER_TYPE;
}
function isStrictMode(object) {
  return typeOf(object) === REACT_STRICT_MODE_TYPE;
}
function isSuspense(object) {
  return typeOf(object) === REACT_SUSPENSE_TYPE;
}

exports.AsyncMode = AsyncMode;
exports.ConcurrentMode = ConcurrentMode;
exports.ContextConsumer = ContextConsumer;
exports.ContextProvider = ContextProvider;
exports.Element = Element;
exports.ForwardRef = ForwardRef;
exports.Fragment = Fragment;
exports.Lazy = Lazy;
exports.Memo = Memo;
exports.Portal = Portal;
exports.Profiler = Profiler;
exports.StrictMode = StrictMode;
exports.Suspense = Suspense;
exports.isAsyncMode = isAsyncMode;
exports.isConcurrentMode = isConcurrentMode;
exports.isContextConsumer = isContextConsumer;
exports.isContextProvider = isContextProvider;
exports.isElement = isElement;
exports.isForwardRef = isForwardRef;
exports.isFragment = isFragment;
exports.isLazy = isLazy;
exports.isMemo = isMemo;
exports.isPortal = isPortal;
exports.isProfiler = isProfiler;
exports.isStrictMode = isStrictMode;
exports.isSuspense = isSuspense;
exports.isValidElementType = isValidElementType;
exports.typeOf = typeOf;
  })();
}


/***/ }),

/***/ "./node_modules/react-is/index.js":
/*!****************************************!*\
  !*** ./node_modules/react-is/index.js ***!
  \****************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";


if (false) {} else {
  module.exports = __webpack_require__(/*! ./cjs/react-is.development.js */ "./node_modules/react-is/cjs/react-is.development.js");
}


/***/ }),

/***/ "./src/demo/Hello/Hello.tsx":
/*!**********************************!*\
  !*** ./src/demo/Hello/Hello.tsx ***!
  \**********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var utils_configure__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! utils/configure */ "./src/utils/configure.js");
/* harmony import */ var _Hello_pcss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Hello.pcss */ "./src/demo/Hello/Hello.pcss");
/* harmony import */ var _img_LockColor2_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./img/LockColor2.svg */ "./src/demo/Hello/img/LockColor2.svg");
/** @module Hello
 *  @since 2020.07.20, 19:07
 *  @changed 2020.07.20, 19:07
 */


// import config from 'config'


// const LockImage = require('./img/LockColor2.svg'); // ts
var cnHello = (0,utils_configure__WEBPACK_IMPORTED_MODULE_1__.cn)('Hello');
var Hello = function (_a) {
    var _b = _a.greeting, greeting = _b === void 0 ? 'Greeting' : _b, _c = _a.name, name = _c === void 0 ? 'Name' : _c;
    var className = cnHello();
    var str = 'Hello:DEBUG';
    // console.log(str, greeting, name);
    // debugger;
    return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: className, title: str },
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h1", { className: cnHello('Title') },
            greeting,
            ", ",
            name,
            "!"),
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: cnHello('LockImage') },
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img", { src: _img_LockColor2_svg__WEBPACK_IMPORTED_MODULE_3__.default }))));
};
/* harmony default export */ __webpack_exports__["default"] = (Hello);


/***/ }),

/***/ "./src/demo/Hello/index.ts":
/*!*********************************!*\
  !*** ./src/demo/Hello/index.ts ***!
  \*********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* reexport safe */ _Hello__WEBPACK_IMPORTED_MODULE_0__.default; }
/* harmony export */ });
/* harmony import */ var _Hello__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Hello */ "./src/demo/Hello/Hello.tsx");
// NOTE: Workaround for directory index in TS

// import Hello from './Hello';
// export { default Hello;


/***/ }),

/***/ "./src/elements/DateTimeSelector/index.ts":
/*!************************************************!*\
  !*** ./src/elements/DateTimeSelector/index.ts ***!
  \************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* reexport safe */ _DateTimeSelector__WEBPACK_IMPORTED_MODULE_0__.default; }
/* harmony export */ });
/* harmony import */ var _DateTimeSelector__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DateTimeSelector */ "./src/elements/DateTimeSelector/DateTimeSelector.jsx");



/***/ }),

/***/ "./src/elements/InlineIcon/index.ts":
/*!******************************************!*\
  !*** ./src/elements/InlineIcon/index.ts ***!
  \******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* reexport safe */ _InlineIcon__WEBPACK_IMPORTED_MODULE_0__.default; }
/* harmony export */ });
/* harmony import */ var _InlineIcon__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./InlineIcon */ "./src/elements/InlineIcon/InlineIcon.jsx");



/***/ }),

/***/ "./src/elements/Loader/index.ts":
/*!**************************************!*\
  !*** ./src/elements/Loader/index.ts ***!
  \**************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* reexport safe */ _Loader__WEBPACK_IMPORTED_MODULE_0__.default; }
/* harmony export */ });
/* harmony import */ var _Loader__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Loader */ "./src/elements/Loader/Loader.jsx");



/***/ }),

/***/ "./src/elements/MenuItemSeparator/index.ts":
/*!*************************************************!*\
  !*** ./src/elements/MenuItemSeparator/index.ts ***!
  \*************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* reexport safe */ _MenuItemSeparator__WEBPACK_IMPORTED_MODULE_0__.default; }
/* harmony export */ });
/* harmony import */ var _MenuItemSeparator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./MenuItemSeparator */ "./src/elements/MenuItemSeparator/MenuItemSeparator.jsx");



/***/ }),

/***/ "./src/elements/MenuItem/index.ts":
/*!****************************************!*\
  !*** ./src/elements/MenuItem/index.ts ***!
  \****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* reexport safe */ _MenuItem__WEBPACK_IMPORTED_MODULE_0__.default; }
/* harmony export */ });
/* harmony import */ var _MenuItem__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./MenuItem */ "./src/elements/MenuItem/MenuItem.jsx");



/***/ }),

/***/ "./src/elements/Menu/index.ts":
/*!************************************!*\
  !*** ./src/elements/Menu/index.ts ***!
  \************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* reexport safe */ _Menu__WEBPACK_IMPORTED_MODULE_0__.default; }
/* harmony export */ });
/* harmony import */ var _Menu__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Menu */ "./src/elements/Menu/Menu.jsx");



/***/ }),

/***/ "./src/elements/ModalPopup/index.ts":
/*!******************************************!*\
  !*** ./src/elements/ModalPopup/index.ts ***!
  \******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* reexport safe */ _ModalPopup__WEBPACK_IMPORTED_MODULE_0__.default; }
/* harmony export */ });
/* harmony import */ var _ModalPopup__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ModalPopup */ "./src/elements/ModalPopup/ModalPopup.jsx");



/***/ }),

/***/ "./src/elements/ModalPortal/index.ts":
/*!*******************************************!*\
  !*** ./src/elements/ModalPortal/index.ts ***!
  \*******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* reexport safe */ _ModalPortal__WEBPACK_IMPORTED_MODULE_0__.default; },
/* harmony export */   "passModalPortalProps": function() { return /* reexport safe */ _ModalPortal__WEBPACK_IMPORTED_MODULE_0__.passModalPortalProps; }
/* harmony export */ });
/* harmony import */ var _ModalPortal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ModalPortal */ "./src/elements/ModalPortal/ModalPortal.jsx");



/***/ }),

/***/ "./src/elements/ModalWindow/index.ts":
/*!*******************************************!*\
  !*** ./src/elements/ModalWindow/index.ts ***!
  \*******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* reexport safe */ _ModalWindow__WEBPACK_IMPORTED_MODULE_0__.default; }
/* harmony export */ });
/* harmony import */ var _ModalWindow__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ModalWindow */ "./src/elements/ModalWindow/ModalWindow.jsx");



/***/ }),

/***/ "./src/elements/ModalsController/index.ts":
/*!************************************************!*\
  !*** ./src/elements/ModalsController/index.ts ***!
  \************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* reexport safe */ _ModalsController__WEBPACK_IMPORTED_MODULE_0__.default; }
/* harmony export */ });
/* harmony import */ var _ModalsController__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ModalsController */ "./src/elements/ModalsController/ModalsController.jsx");

// NOTE: Workaround for directory index in TS
// import ModalsController from './ModalsController';
// export default ModalsController;


/***/ }),

/***/ "./src/elements/ModalsProxy/index.ts":
/*!*******************************************!*\
  !*** ./src/elements/ModalsProxy/index.ts ***!
  \*******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* reexport safe */ _ModalsProxy__WEBPACK_IMPORTED_MODULE_0__.default; }
/* harmony export */ });
/* harmony import */ var _ModalsProxy__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ModalsProxy */ "./src/elements/ModalsProxy/ModalsProxy.js");



/***/ }),

/***/ "./src/forms/FormActions/index.ts":
/*!****************************************!*\
  !*** ./src/forms/FormActions/index.ts ***!
  \****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* reexport safe */ _FormActions__WEBPACK_IMPORTED_MODULE_0__.default; }
/* harmony export */ });
/* harmony import */ var _FormActions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./FormActions */ "./src/forms/FormActions/FormActions.jsx");



/***/ }),

/***/ "./src/forms/FormBooleanHOC/index.ts":
/*!*******************************************!*\
  !*** ./src/forms/FormBooleanHOC/index.ts ***!
  \*******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* reexport safe */ _FormBooleanHOC__WEBPACK_IMPORTED_MODULE_0__.default; }
/* harmony export */ });
/* harmony import */ var _FormBooleanHOC__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./FormBooleanHOC */ "./src/forms/FormBooleanHOC/FormBooleanHOC.jsx");



/***/ }),

/***/ "./src/forms/FormButtonGroup/index.ts":
/*!********************************************!*\
  !*** ./src/forms/FormButtonGroup/index.ts ***!
  \********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* reexport safe */ _FormButtonGroup__WEBPACK_IMPORTED_MODULE_0__.default; }
/* harmony export */ });
/* harmony import */ var _FormButtonGroup__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./FormButtonGroup */ "./src/forms/FormButtonGroup/FormButtonGroup.jsx");



/***/ }),

/***/ "./src/forms/FormButton/index.ts":
/*!***************************************!*\
  !*** ./src/forms/FormButton/index.ts ***!
  \***************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* reexport safe */ _FormButton__WEBPACK_IMPORTED_MODULE_0__.default; }
/* harmony export */ });
/* harmony import */ var _FormButton__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./FormButton */ "./src/forms/FormButton/FormButton.jsx");



/***/ }),

/***/ "./src/forms/FormContainer/index.ts":
/*!******************************************!*\
  !*** ./src/forms/FormContainer/index.ts ***!
  \******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* reexport safe */ _FormContainer__WEBPACK_IMPORTED_MODULE_0__.default; }
/* harmony export */ });
/* harmony import */ var _FormContainer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./FormContainer */ "./src/forms/FormContainer/FormContainer.jsx");



/***/ }),

/***/ "./src/forms/FormDateRangeSingleBox/index.ts":
/*!***************************************************!*\
  !*** ./src/forms/FormDateRangeSingleBox/index.ts ***!
  \***************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* reexport safe */ _FormDateRangeSingleBox__WEBPACK_IMPORTED_MODULE_0__.default; }
/* harmony export */ });
/* harmony import */ var _FormDateRangeSingleBox__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./FormDateRangeSingleBox */ "./src/forms/FormDateRangeSingleBox/FormDateRangeSingleBox.jsx");



/***/ }),

/***/ "./src/forms/FormDateRange/index.ts":
/*!******************************************!*\
  !*** ./src/forms/FormDateRange/index.ts ***!
  \******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* reexport safe */ _FormDateRange__WEBPACK_IMPORTED_MODULE_0__.default; }
/* harmony export */ });
/* harmony import */ var _FormDateRange__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./FormDateRange */ "./src/forms/FormDateRange/FormDateRange.jsx");



/***/ }),

/***/ "./src/forms/FormDateTime/index.ts":
/*!*****************************************!*\
  !*** ./src/forms/FormDateTime/index.ts ***!
  \*****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* reexport safe */ _FormDateTime__WEBPACK_IMPORTED_MODULE_0__.default; }
/* harmony export */ });
/* harmony import */ var _FormDateTime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./FormDateTime */ "./src/forms/FormDateTime/FormDateTime.jsx");



/***/ }),

/***/ "./src/forms/FormDelim/index.ts":
/*!**************************************!*\
  !*** ./src/forms/FormDelim/index.ts ***!
  \**************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* reexport safe */ _FormDelim__WEBPACK_IMPORTED_MODULE_0__.default; }
/* harmony export */ });
/* harmony import */ var _FormDelim__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./FormDelim */ "./src/forms/FormDelim/FormDelim.jsx");



/***/ }),

/***/ "./src/forms/FormGroup/index.ts":
/*!**************************************!*\
  !*** ./src/forms/FormGroup/index.ts ***!
  \**************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* reexport safe */ _FormGroup__WEBPACK_IMPORTED_MODULE_0__.default; }
/* harmony export */ });
/* harmony import */ var _FormGroup__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./FormGroup */ "./src/forms/FormGroup/FormGroup.jsx");



/***/ }),

/***/ "./src/forms/FormInputGroup/index.ts":
/*!*******************************************!*\
  !*** ./src/forms/FormInputGroup/index.ts ***!
  \*******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* reexport safe */ _FormInputGroup__WEBPACK_IMPORTED_MODULE_0__.default; }
/* harmony export */ });
/* harmony import */ var _FormInputGroup__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./FormInputGroup */ "./src/forms/FormInputGroup/FormInputGroup.jsx");



/***/ }),

/***/ "./src/forms/FormInteractiveItemHOC/index.ts":
/*!***************************************************!*\
  !*** ./src/forms/FormInteractiveItemHOC/index.ts ***!
  \***************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* reexport safe */ _FormInteractiveItemHOC__WEBPACK_IMPORTED_MODULE_0__.default; }
/* harmony export */ });
/* harmony import */ var _FormInteractiveItemHOC__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./FormInteractiveItemHOC */ "./src/forms/FormInteractiveItemHOC/FormInteractiveItemHOC.jsx");



/***/ }),

/***/ "./src/forms/FormItemDummy/index.ts":
/*!******************************************!*\
  !*** ./src/forms/FormItemDummy/index.ts ***!
  \******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* reexport safe */ _FormItemDummy__WEBPACK_IMPORTED_MODULE_0__.default; }
/* harmony export */ });
/* harmony import */ var _FormItemDummy__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./FormItemDummy */ "./src/forms/FormItemDummy/FormItemDummy.jsx");



/***/ }),

/***/ "./src/forms/FormItemHOC/index.ts":
/*!****************************************!*\
  !*** ./src/forms/FormItemHOC/index.ts ***!
  \****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* reexport safe */ _FormItemHOC__WEBPACK_IMPORTED_MODULE_0__.default; }
/* harmony export */ });
/* harmony import */ var _FormItemHOC__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./FormItemHOC */ "./src/forms/FormItemHOC/FormItemHOC.jsx");



/***/ }),

/***/ "./src/forms/FormLabel/index.ts":
/*!**************************************!*\
  !*** ./src/forms/FormLabel/index.ts ***!
  \**************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* reexport safe */ _FormLabel__WEBPACK_IMPORTED_MODULE_0__.default; }
/* harmony export */ });
/* harmony import */ var _FormLabel__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./FormLabel */ "./src/forms/FormLabel/FormLabel.jsx");



/***/ }),

/***/ "./src/forms/FormLabeledGroup/index.ts":
/*!*********************************************!*\
  !*** ./src/forms/FormLabeledGroup/index.ts ***!
  \*********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* reexport safe */ _FormLabeledGroup__WEBPACK_IMPORTED_MODULE_0__.default; }
/* harmony export */ });
/* harmony import */ var _FormLabeledGroup__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./FormLabeledGroup */ "./src/forms/FormLabeledGroup/FormLabeledGroup.jsx");



/***/ }),

/***/ "./src/forms/FormPasswordInput/index.ts":
/*!**********************************************!*\
  !*** ./src/forms/FormPasswordInput/index.ts ***!
  \**********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* reexport safe */ _FormPasswordInput__WEBPACK_IMPORTED_MODULE_0__.default; }
/* harmony export */ });
/* harmony import */ var _FormPasswordInput__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./FormPasswordInput */ "./src/forms/FormPasswordInput/FormPasswordInput.jsx");



/***/ }),

/***/ "./src/forms/FormRadio/index.ts":
/*!**************************************!*\
  !*** ./src/forms/FormRadio/index.ts ***!
  \**************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* reexport safe */ _FormRadio__WEBPACK_IMPORTED_MODULE_0__.default; }
/* harmony export */ });
/* harmony import */ var _FormRadio__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./FormRadio */ "./src/forms/FormRadio/FormRadio.jsx");



/***/ }),

/***/ "./src/forms/FormSelect/index.ts":
/*!***************************************!*\
  !*** ./src/forms/FormSelect/index.ts ***!
  \***************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* reexport safe */ _FormSelect__WEBPACK_IMPORTED_MODULE_0__.default; }
/* harmony export */ });
/* harmony import */ var _FormSelect__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./FormSelect */ "./src/forms/FormSelect/FormSelect.jsx");



/***/ }),

/***/ "./src/forms/FormSeparator/index.ts":
/*!******************************************!*\
  !*** ./src/forms/FormSeparator/index.ts ***!
  \******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* reexport safe */ _FormSeparator__WEBPACK_IMPORTED_MODULE_0__.default; }
/* harmony export */ });
/* harmony import */ var _FormSeparator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./FormSeparator */ "./src/forms/FormSeparator/FormSeparator.jsx");



/***/ }),

/***/ "./src/forms/FormSpacer/index.ts":
/*!***************************************!*\
  !*** ./src/forms/FormSpacer/index.ts ***!
  \***************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* reexport safe */ _FormSpacer__WEBPACK_IMPORTED_MODULE_0__.default; }
/* harmony export */ });
/* harmony import */ var _FormSpacer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./FormSpacer */ "./src/forms/FormSpacer/FormSpacer.jsx");



/***/ }),

/***/ "./src/forms/FormTextInput/index.ts":
/*!******************************************!*\
  !*** ./src/forms/FormTextInput/index.ts ***!
  \******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* reexport safe */ _FormTextInput__WEBPACK_IMPORTED_MODULE_0__.default; }
/* harmony export */ });
/* harmony import */ var _FormTextInput__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./FormTextInput */ "./src/forms/FormTextInput/FormTextInput.jsx");



/***/ }),

/***/ "./src/forms/FormText/index.ts":
/*!*************************************!*\
  !*** ./src/forms/FormText/index.ts ***!
  \*************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* reexport safe */ _FormText__WEBPACK_IMPORTED_MODULE_0__.default; }
/* harmony export */ });
/* harmony import */ var _FormText__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./FormText */ "./src/forms/FormText/FormText.jsx");



/***/ }),

/***/ "./src/demo/Hello/img/LockColor2.svg":
/*!*******************************************!*\
  !*** ./src/demo/Hello/img/LockColor2.svg ***!
  \*******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pg0KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPg0KPHN2ZyB2ZXJzaW9uPSIxLjEiIGlkPSJDYXBhXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4Ig0KCSB2aWV3Qm94PSIwIDAgNTEyIDUxMiIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNTEyIDUxMjsiIHhtbDpzcGFjZT0icHJlc2VydmUiPg0KPHBhdGggc3R5bGU9ImZpbGw6I0Y3RjJGNDsiIGQ9Ik00MzIsNDg3SDgwYy00NC4xMTIsMC04MC0zNS44ODgtODAtODBzMzUuODg4LTgwLDgwLTgwaDM1MmM0NC4xMTIsMCw4MCwzNS44ODgsODAsODANCglTNDc2LjExMiw0ODcsNDMyLDQ4N3oiLz4NCjxnPg0KCTxjaXJjbGUgc3R5bGU9ImZpbGw6IzZENzM3RjsiIGN4PSIyMDYiIGN5PSI0MDciIHI9IjI1Ii8+DQoJPGNpcmNsZSBzdHlsZT0iZmlsbDojNkQ3MzdGOyIgY3g9IjEwNiIgY3k9IjQwNyIgcj0iMjUiLz4NCgk8cGF0aCBzdHlsZT0iZmlsbDojNkQ3MzdGOyIgZD0iTTMxNiwxNTdIMTk2Yy04LjI4NCwwLTE1LTYuNzE2LTE1LTE1di00MmMwLTQxLjM1NSwzMy42NDUtNzUsNzUtNzVzNzUsMzMuNjQ1LDc1LDc1djQyDQoJCUMzMzEsMTUwLjI4NCwzMjQuMjg0LDE1NywzMTYsMTU3eiBNMjExLDEyN2g5MHYtMjdjMC0yNC44MTMtMjAuMTg3LTQ1LTQ1LTQ1cy00NSwyMC4xODctNDUsNDVWMTI3eiIvPg0KPC9nPg0KPHBhdGggc3R5bGU9ImZpbGw6IzVFNUY2OTsiIGQ9Ik0yNTYsMjV2MzBjMjQuODEzLDAsNDUsMjAuMTg3LDQ1LDQ1djI3aC00NXYzMGg2MGM4LjI4NCwwLDE1LTYuNzE2LDE1LTE1di00Mg0KCUMzMzEsNTguNjQ1LDI5Ny4zNTUsMjUsMjU2LDI1eiIvPg0KPHBhdGggc3R5bGU9ImZpbGw6I0ZGQUMyQjsiIGQ9Ik0zNTEsMjc2SDE2MWMtOC4yODQsMC0xNS02LjcxNi0xNS0xNVYxNDJjMC04LjI4NCw2LjcxNi0xNSwxNS0xNWgxOTBjOC4yODQsMCwxNSw2LjcxNiwxNSwxNXYxMTkNCglDMzY2LDI2OS4yODQsMzU5LjI4NCwyNzYsMzUxLDI3NnoiLz4NCjxnPg0KCTxwYXRoIHN0eWxlPSJmaWxsOiNGRjk4MUU7IiBkPSJNMzUxLDEyN2gtOTV2MTQ5aDk1YzguMjg0LDAsMTUtNi43MTYsMTUtMTVWMTQyQzM2NiwxMzMuNzE2LDM1OS4yODQsMTI3LDM1MSwxMjd6Ii8+DQoJPHBhdGggc3R5bGU9ImZpbGw6I0ZGOTgxRTsiIGQ9Ik0yODEsMTkyYzAtOC4yODQtNi43MTYtMTUtMTUtMTVoLTIwYy04LjI4NCwwLTE1LDYuNzE2LTE1LDE1YzAsNi41MjgsNC4xNzgsMTIuMDY3LDEwLDE0LjEyOFYyMTINCgkJYzAsOC4yODQsNi43MTYsMTUsMTUsMTVzMTUtNi43MTYsMTUtMTV2LTUuODcyQzI3Ni44MjIsMjA0LjA2NywyODEsMTk4LjUyOCwyODEsMTkyeiIvPg0KPC9nPg0KPHBhdGggc3R5bGU9ImZpbGw6I0RGREFFMDsiIGQ9Ik00MzIsMzI3SDI1NnYxNjBoMTc2YzQ0LjExMiwwLDgwLTM1Ljg4OCw4MC04MFM0NzYuMTEyLDMyNyw0MzIsMzI3eiIvPg0KPGc+DQoJPGNpcmNsZSBzdHlsZT0iZmlsbDojNUU1RjY5OyIgY3g9IjMwNiIgY3k9IjQwNyIgcj0iMjUiLz4NCgk8Y2lyY2xlIHN0eWxlPSJmaWxsOiM1RTVGNjk7IiBjeD0iNDA2IiBjeT0iNDA3IiByPSIyNSIvPg0KPC9nPg0KPHBhdGggc3R5bGU9ImZpbGw6I0ZGODUxMjsiIGQ9Ik0yNjYsMTc3aC0xMHY1MGM4LjI4NCwwLDE1LTYuNzE2LDE1LTE1di01Ljg3MmM1LjgyMi0yLjA2MSwxMC03LjYsMTAtMTQuMTI4DQoJQzI4MSwxODMuNzE2LDI3NC4yODQsMTc3LDI2NiwxNzd6Ii8+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8L3N2Zz4NCg==");

/***/ }),

/***/ "@bem-react/classname":
/*!***************************************!*\
  !*** external "@bem-react/classname" ***!
  \***************************************/
/***/ (function(module) {

"use strict";
module.exports = require("@bem-react/classname");;

/***/ }),

/***/ "@fortawesome/free-brands-svg-icons":
/*!*****************************************************!*\
  !*** external "@fortawesome/free-brands-svg-icons" ***!
  \*****************************************************/
/***/ (function(module) {

"use strict";
module.exports = require("@fortawesome/free-brands-svg-icons");;

/***/ }),

/***/ "@fortawesome/free-regular-svg-icons":
/*!******************************************************!*\
  !*** external "@fortawesome/free-regular-svg-icons" ***!
  \******************************************************/
/***/ (function(module) {

"use strict";
module.exports = require("@fortawesome/free-regular-svg-icons");;

/***/ }),

/***/ "@fortawesome/free-solid-svg-icons":
/*!****************************************************!*\
  !*** external "@fortawesome/free-solid-svg-icons" ***!
  \****************************************************/
/***/ (function(module) {

"use strict";
module.exports = require("@fortawesome/free-solid-svg-icons");;

/***/ }),

/***/ "@fortawesome/react-fontawesome":
/*!*************************************************!*\
  !*** external "@fortawesome/react-fontawesome" ***!
  \*************************************************/
/***/ (function(module) {

"use strict";
module.exports = require("@fortawesome/react-fontawesome");;

/***/ }),

/***/ "date-fns":
/*!***************************!*\
  !*** external "date-fns" ***!
  \***************************/
/***/ (function(module) {

"use strict";
module.exports = require("date-fns");;

/***/ }),

/***/ "moment":
/*!*************************!*\
  !*** external "moment" ***!
  \*************************/
/***/ (function(module) {

"use strict";
module.exports = require("moment");;

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ (function(module) {

"use strict";
module.exports = require("react");;

/***/ }),

/***/ "react-datepicker":
/*!***********************************!*\
  !*** external "react-datepicker" ***!
  \***********************************/
/***/ (function(module) {

"use strict";
module.exports = require("react-datepicker");;

/***/ }),

/***/ "react-error-boundary":
/*!***************************************!*\
  !*** external "react-error-boundary" ***!
  \***************************************/
/***/ (function(module) {

"use strict";
module.exports = require("react-error-boundary");;

/***/ }),

/***/ "react-portal":
/*!*******************************!*\
  !*** external "react-portal" ***!
  \*******************************/
/***/ (function(module) {

"use strict";
module.exports = require("react-portal");;

/***/ }),

/***/ "react-transition-group":
/*!*****************************************!*\
  !*** external "react-transition-group" ***!
  \*****************************************/
/***/ (function(module) {

"use strict";
module.exports = require("react-transition-group");;

/***/ }),

/***/ "redux":
/*!************************!*\
  !*** external "redux" ***!
  \************************/
/***/ (function(module) {

"use strict";
module.exports = require("redux");;

/***/ }),

/***/ "throttle-debounce":
/*!************************************!*\
  !*** external "throttle-debounce" ***!
  \************************************/
/***/ (function(module) {

"use strict";
module.exports = require("throttle-debounce");;

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	!function() {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = function(module) {
/******/ 			var getter = module && module.__esModule ?
/******/ 				function() { return module['default']; } :
/******/ 				function() { return module; };
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	!function() {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
!function() {
"use strict";
/*!***********************!*\
  !*** ./src/build.jsx ***!
  \***********************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "config": function() { return /* reexport module object */ _config_index_js__WEBPACK_IMPORTED_MODULE_1__; },
/* harmony export */   "utils": function() { return /* reexport module object */ _utils_index_js__WEBPACK_IMPORTED_MODULE_2__; },
/* harmony export */   "helpers": function() { return /* reexport module object */ _helpers_index_js__WEBPACK_IMPORTED_MODULE_3__; },
/* harmony export */   "DateTimeSelector": function() { return /* reexport safe */ _elements_index_js__WEBPACK_IMPORTED_MODULE_4__.DateTimeSelector; },
/* harmony export */   "InlineIcon": function() { return /* reexport safe */ _elements_index_js__WEBPACK_IMPORTED_MODULE_4__.InlineIcon; },
/* harmony export */   "Loader": function() { return /* reexport safe */ _elements_index_js__WEBPACK_IMPORTED_MODULE_4__.Loader; },
/* harmony export */   "Menu": function() { return /* reexport safe */ _elements_index_js__WEBPACK_IMPORTED_MODULE_4__.Menu; },
/* harmony export */   "MenuItem": function() { return /* reexport safe */ _elements_index_js__WEBPACK_IMPORTED_MODULE_4__.MenuItem; },
/* harmony export */   "MenuItemSeparator": function() { return /* reexport safe */ _elements_index_js__WEBPACK_IMPORTED_MODULE_4__.MenuItemSeparator; },
/* harmony export */   "ModalPopup": function() { return /* reexport safe */ _elements_index_js__WEBPACK_IMPORTED_MODULE_4__.ModalPopup; },
/* harmony export */   "ModalPortal": function() { return /* reexport safe */ _elements_index_js__WEBPACK_IMPORTED_MODULE_4__.ModalPortal; },
/* harmony export */   "ModalProxifiedWindow": function() { return /* reexport safe */ _elements_index_js__WEBPACK_IMPORTED_MODULE_4__.ModalProxifiedWindow; },
/* harmony export */   "ModalWindow": function() { return /* reexport safe */ _elements_index_js__WEBPACK_IMPORTED_MODULE_4__.ModalWindow; },
/* harmony export */   "ModalsController": function() { return /* reexport safe */ _elements_index_js__WEBPACK_IMPORTED_MODULE_4__.ModalsController; },
/* harmony export */   "ModalsProxy": function() { return /* reexport safe */ _elements_index_js__WEBPACK_IMPORTED_MODULE_4__.ModalsProxy; },
/* harmony export */   "FormActions": function() { return /* reexport safe */ _forms_index_js__WEBPACK_IMPORTED_MODULE_5__.FormActions; },
/* harmony export */   "FormButton": function() { return /* reexport safe */ _forms_index_js__WEBPACK_IMPORTED_MODULE_5__.FormButton; },
/* harmony export */   "FormButtonGroup": function() { return /* reexport safe */ _forms_index_js__WEBPACK_IMPORTED_MODULE_5__.FormButtonGroup; },
/* harmony export */   "FormContainer": function() { return /* reexport safe */ _forms_index_js__WEBPACK_IMPORTED_MODULE_5__.FormContainer; },
/* harmony export */   "FormDateRange": function() { return /* reexport safe */ _forms_index_js__WEBPACK_IMPORTED_MODULE_5__.FormDateRange; },
/* harmony export */   "FormDateRangeSingleBox": function() { return /* reexport safe */ _forms_index_js__WEBPACK_IMPORTED_MODULE_5__.FormDateRangeSingleBox; },
/* harmony export */   "FormDateTime": function() { return /* reexport safe */ _forms_index_js__WEBPACK_IMPORTED_MODULE_5__.FormDateTime; },
/* harmony export */   "FormDelim": function() { return /* reexport safe */ _forms_index_js__WEBPACK_IMPORTED_MODULE_5__.FormDelim; },
/* harmony export */   "FormGroup": function() { return /* reexport safe */ _forms_index_js__WEBPACK_IMPORTED_MODULE_5__.FormGroup; },
/* harmony export */   "FormInputGroup": function() { return /* reexport safe */ _forms_index_js__WEBPACK_IMPORTED_MODULE_5__.FormInputGroup; },
/* harmony export */   "FormItemDummy": function() { return /* reexport safe */ _forms_index_js__WEBPACK_IMPORTED_MODULE_5__.FormItemDummy; },
/* harmony export */   "FormItemHOC": function() { return /* reexport safe */ _forms_index_js__WEBPACK_IMPORTED_MODULE_5__.FormItemHOC; },
/* harmony export */   "FormLabel": function() { return /* reexport safe */ _forms_index_js__WEBPACK_IMPORTED_MODULE_5__.FormLabel; },
/* harmony export */   "FormLabeledGroup": function() { return /* reexport safe */ _forms_index_js__WEBPACK_IMPORTED_MODULE_5__.FormLabeledGroup; },
/* harmony export */   "FormPasswordInput": function() { return /* reexport safe */ _forms_index_js__WEBPACK_IMPORTED_MODULE_5__.FormPasswordInput; },
/* harmony export */   "FormRadio": function() { return /* reexport safe */ _forms_index_js__WEBPACK_IMPORTED_MODULE_5__.FormRadio; },
/* harmony export */   "FormSelect": function() { return /* reexport safe */ _forms_index_js__WEBPACK_IMPORTED_MODULE_5__.FormSelect; },
/* harmony export */   "FormSeparator": function() { return /* reexport safe */ _forms_index_js__WEBPACK_IMPORTED_MODULE_5__.FormSeparator; },
/* harmony export */   "FormSpacer": function() { return /* reexport safe */ _forms_index_js__WEBPACK_IMPORTED_MODULE_5__.FormSpacer; },
/* harmony export */   "FormText": function() { return /* reexport safe */ _forms_index_js__WEBPACK_IMPORTED_MODULE_5__.FormText; },
/* harmony export */   "FormTextInput": function() { return /* reexport safe */ _forms_index_js__WEBPACK_IMPORTED_MODULE_5__.FormTextInput; },
/* harmony export */   "Hello": function() { return /* reexport safe */ _demo_Hello_index_ts__WEBPACK_IMPORTED_MODULE_6__.default; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _config_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./config/index.js */ "./src/config/index.js");
/* harmony import */ var _config_index_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_config_index_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _utils_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utils/index.js */ "./src/utils/index.js");
/* harmony import */ var _helpers_index_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./helpers/index.js */ "./src/helpers/index.js");
/* harmony import */ var _elements_index_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./elements/index.js */ "./src/elements/index.js");
/* harmony import */ var _forms_index_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./forms/index.js */ "./src/forms/index.js");
/* harmony import */ var _demo_Hello_index_ts__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./demo/Hello/index.ts */ "./src/demo/Hello/index.ts");
/* harmony import */ var _build_pcss__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./build.pcss */ "./src/build.pcss");
/* harmony import */ var _elements_ModalsController_index_ts__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./elements/ModalsController/index.ts */ "./src/elements/ModalsController/index.ts");
/** @module build
 *  @desc Library exportable ditributive
 *  @since 2020.05.19, 17:16
 *  @changed 2021.05.31, 16:24
 */


// import connect from 'react-redux/lib/connect/connect'; // DEBUG: Test redux state

// export config from 'config';


// export * as utils from 'utils';





// Demo component
// export Hello from './demo/Hello';



// Basic styles




// TODO: Use WebUiCoreContext?
var WebUiCoreRoot = function WebUiCoreRoot(_ref)





{var children = _ref.children,autoModalsController = _ref.autoModalsController;
  // console.log('WebUiCoreRoot', { // DEBUG: Test redux state
  //   'config.app.store': config.app.store,
  //   // store,
  //   stateTest,
  //   models,
  // });
  // debugger;
  return /*#__PURE__*/(
    react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null,
    children,
    autoModalsController && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_elements_ModalsController_index_ts__WEBPACK_IMPORTED_MODULE_8__.default, null)));


};

// // DEBUG: Test redux state
// const mapStateToProps = store => ({
//   // language: store.language.components.adminPage.terminals,
//   // user: store.user,
//   // models: store.printerModels.models,
//   // store: store,
//   stateTest: store && store.demo && store.demo.stateTest,
//   models: store && store.printerModels && store.printerModels.models,
// });
// export default connect(mapStateToProps)(WebUiCoreRoot);
/* harmony default export */ __webpack_exports__["default"] = (WebUiCoreRoot);
}();
module.exports = __webpack_exports__;
/******/ })()
;
//# sourceMappingURL=bundle.js.map