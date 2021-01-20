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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/build.jsx");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/@babel/runtime/helpers/assertThisInitialized.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/assertThisInitialized.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

module.exports = _assertThisInitialized;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/defineProperty.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/defineProperty.js ***!
  \***************************************************************/
/*! no static exports found */
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

/***/ "./node_modules/@babel/runtime/helpers/extends.js":
/*!********************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/extends.js ***!
  \********************************************************/
/*! no static exports found */
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

/***/ "./node_modules/@babel/runtime/helpers/inheritsLoose.js":
/*!**************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/inheritsLoose.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _inheritsLoose(subClass, superClass) {
  subClass.prototype = Object.create(superClass.prototype);
  subClass.prototype.constructor = subClass;
  subClass.__proto__ = superClass;
}

module.exports = _inheritsLoose;

/***/ }),

/***/ "./node_modules/object-assign/index.js":
/*!*********************************************!*\
  !*** ./node_modules/object-assign/index.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

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
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

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
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

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
       true ? printWarning('Invalid argument supplied to oneOfType, expected an instance of array.') : undefined;
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
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

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
/*! no static exports found */
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

/***/ "./node_modules/react-is/cjs/react-is.development.js":
/*!***********************************************************!*\
  !*** ./node_modules/react-is/cjs/react-is.development.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

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
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


if (false) {} else {
  module.exports = __webpack_require__(/*! ./cjs/react-is.development.js */ "./node_modules/react-is/cjs/react-is.development.js");
}


/***/ }),

/***/ "./node_modules/webpack/buildin/global.js":
/*!***********************************!*\
  !*** (webpack)/buildin/global.js ***!
  \***********************************/
/*! no static exports found */
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

/***/ "./src/build.jsx":
/*!***********************!*\
  !*** ./src/build.jsx ***!
  \***********************/
/*! exports provided: config, utils, helpers, InlineIcon, Loader, Menu, MenuItem, ModalWindow, ModalPopup, ModalPortal, ModalsContainer, FormItemHOC, FormItemDummy, FormLabel, FormButton, FormGroup, FormLabeledGroup, FormButtonGroup, FormInputGroup, FormDelim, FormSpacer, FormText, FormSelect, FormTextInput, FormPasswordInput, FormRadio, Hello, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _config_config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./config/config */ "./src/config/config.js");
/* harmony import */ var _config_config__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_config_config__WEBPACK_IMPORTED_MODULE_1__);
/* harmony reexport (default from non-harmony) */ __webpack_require__.d(__webpack_exports__, "config", function() { return _config_config__WEBPACK_IMPORTED_MODULE_1___default.a; });
/* harmony import */ var _utils_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utils/utils */ "./src/utils/utils.js");
/* harmony reexport (module object) */ __webpack_require__.d(__webpack_exports__, "utils", function() { return _utils_utils__WEBPACK_IMPORTED_MODULE_2__; });
/* harmony import */ var _helpers_helpers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./helpers/helpers */ "./src/helpers/helpers.js");
/* harmony reexport (module object) */ __webpack_require__.d(__webpack_exports__, "helpers", function() { return _helpers_helpers__WEBPACK_IMPORTED_MODULE_3__; });
/* harmony import */ var _elements_elements__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./elements/elements */ "./src/elements/elements.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "InlineIcon", function() { return _elements_elements__WEBPACK_IMPORTED_MODULE_4__["InlineIcon"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Loader", function() { return _elements_elements__WEBPACK_IMPORTED_MODULE_4__["Loader"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Menu", function() { return _elements_elements__WEBPACK_IMPORTED_MODULE_4__["Menu"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MenuItem", function() { return _elements_elements__WEBPACK_IMPORTED_MODULE_4__["MenuItem"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ModalWindow", function() { return _elements_elements__WEBPACK_IMPORTED_MODULE_4__["ModalWindow"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ModalPopup", function() { return _elements_elements__WEBPACK_IMPORTED_MODULE_4__["ModalPopup"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ModalPortal", function() { return _elements_elements__WEBPACK_IMPORTED_MODULE_4__["ModalPortal"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ModalsContainer", function() { return _elements_elements__WEBPACK_IMPORTED_MODULE_4__["ModalsContainer"]; });

/* harmony import */ var _forms_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./forms/forms */ "./src/forms/forms.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FormItemHOC", function() { return _forms_forms__WEBPACK_IMPORTED_MODULE_5__["FormItemHOC"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FormItemDummy", function() { return _forms_forms__WEBPACK_IMPORTED_MODULE_5__["FormItemDummy"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FormLabel", function() { return _forms_forms__WEBPACK_IMPORTED_MODULE_5__["FormLabel"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FormButton", function() { return _forms_forms__WEBPACK_IMPORTED_MODULE_5__["FormButton"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FormGroup", function() { return _forms_forms__WEBPACK_IMPORTED_MODULE_5__["FormGroup"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FormLabeledGroup", function() { return _forms_forms__WEBPACK_IMPORTED_MODULE_5__["FormLabeledGroup"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FormButtonGroup", function() { return _forms_forms__WEBPACK_IMPORTED_MODULE_5__["FormButtonGroup"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FormInputGroup", function() { return _forms_forms__WEBPACK_IMPORTED_MODULE_5__["FormInputGroup"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FormDelim", function() { return _forms_forms__WEBPACK_IMPORTED_MODULE_5__["FormDelim"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FormSpacer", function() { return _forms_forms__WEBPACK_IMPORTED_MODULE_5__["FormSpacer"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FormText", function() { return _forms_forms__WEBPACK_IMPORTED_MODULE_5__["FormText"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FormSelect", function() { return _forms_forms__WEBPACK_IMPORTED_MODULE_5__["FormSelect"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FormTextInput", function() { return _forms_forms__WEBPACK_IMPORTED_MODULE_5__["FormTextInput"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FormPasswordInput", function() { return _forms_forms__WEBPACK_IMPORTED_MODULE_5__["FormPasswordInput"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FormRadio", function() { return _forms_forms__WEBPACK_IMPORTED_MODULE_5__["FormRadio"]; });

/* harmony import */ var _demo_Hello_Hello__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./demo/Hello/Hello */ "./src/demo/Hello/Hello.jsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Hello", function() { return _demo_Hello_Hello__WEBPACK_IMPORTED_MODULE_6__["default"]; });

/* harmony import */ var _build_pcss__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./build.pcss */ "./src/build.pcss");
/* harmony import */ var _build_pcss__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_build_pcss__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _elements_ModalsContainer_ModalsContainer__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./elements/ModalsContainer/ModalsContainer */ "./src/elements/ModalsContainer/ModalsContainer.jsx");
/** @module build
 *  @desc Library exportable ditributive
 *  @since 2020.05.19, 17:16
 *  @changed 2020.12.28, 01:09
 */






// Demo component


// Basic styles




// TODO: Use WebUiCoreContext?
var WebUiCoreRoot = function WebUiCoreRoot(_ref) {var children = _ref.children,autoModalsContainer = _ref.autoModalsContainer;
  return /*#__PURE__*/(
    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null,
    children,
    autoModalsContainer && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elements_ModalsContainer_ModalsContainer__WEBPACK_IMPORTED_MODULE_8__["default"], null)));


};
/* harmony default export */ __webpack_exports__["default"] = (WebUiCoreRoot);

/***/ }),

/***/ "./src/build.pcss":
/*!************************!*\
  !*** ./src/build.pcss ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/config/app.js":
/*!***************************!*\
  !*** ./src/config/app.js ***!
  \***************************/
/*! no static exports found */
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

/***/ "./src/config/build.js":
/*!*****************************!*\
  !*** ./src/config/build.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

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
  buildTag: "v.0.2.6-210120-2329-build-dev-default",
  timestamp: "2021.01.20, 23:29",
  timetag: "210120-2329",
  version: "0.2.6" };

/***/ }),

/***/ "./src/config/config.js":
/*!******************************!*\
  !*** ./src/config/config.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

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

/***/ "./src/config/constants.js":
/*!*********************************!*\
  !*** ./src/config/constants.js ***!
  \*********************************/
/*! exports provided: dateFormat, timeFormat */
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

/***/ "./src/config/css.js":
/*!***************************!*\
  !*** ./src/config/css.js ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/** @module config.css
 *  @description Global styles config
 *  @since 2019.08.29, 10:28
 *  @changed 2020.12.24, 18:19
 */

// Theme...
var THEME = "default";
var theme = __webpack_require__(/*! ./themes/default */ "./src/config/themes/default.js");

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

  // tableBorderWidth: 2,

  defaultIconSize: 24,
  smallIconSize: 16,

  popupContentGap: 4 });



module.exports = cssConfig;

/***/ }),

/***/ "./src/config/modals.js":
/*!******************************!*\
  !*** ./src/config/modals.js ***!
  \******************************/
/*! no static exports found */
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

/***/ "./src/config/themes/default.js":
/*!**************************************!*\
  !*** ./src/config/themes/default.js ***!
  \**************************************/
/*! no static exports found */
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

/***/ "./src/config/ui.js":
/*!**************************!*\
  !*** ./src/config/ui.js ***!
  \**************************/
/*! exports provided: defaultIcons */
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

/***/ "./src/config/userAgent.js":
/*!*********************************!*\
  !*** ./src/config/userAgent.js ***!
  \*********************************/
/*! no static exports found */
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
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./src/demo/Hello/Hello.jsx":
/*!**********************************!*\
  !*** ./src/demo/Hello/Hello.jsx ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utils_configure__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils/configure */ "./src/utils/configure.js");
/* harmony import */ var _Hello_pcss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Hello.pcss */ "./src/demo/Hello/Hello.pcss");
/* harmony import */ var _Hello_pcss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_Hello_pcss__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _img_LockColor2_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./img/LockColor2.svg */ "./src/demo/Hello/img/LockColor2.svg");
/** @module Hello
 *  @since 2020.07.20, 19:07
 *  @changed 2020.07.20, 19:07
 */



// import config from 'config'





var cnHello = Object(_utils_configure__WEBPACK_IMPORTED_MODULE_1__["cn"])('Hello');

var Hello = function Hello(_ref) {var _ref$greeting = _ref.greeting,greeting = _ref$greeting === void 0 ? 'Greeting' : _ref$greeting,_ref$name = _ref.name,name = _ref$name === void 0 ? 'Name' : _ref$name;
  var className = cnHello();
  var str = 'Hello:DEBUG';
  console.log(str, greeting, name);
  debugger;
  return /*#__PURE__*/(
    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { className: className, title: str }, /*#__PURE__*/
    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", { className: cnHello('Title') }, greeting, ", ", name, "!"), /*#__PURE__*/
    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { className: cnHello('Image') }, /*#__PURE__*/
    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", { src: _img_LockColor2_svg__WEBPACK_IMPORTED_MODULE_3__["default"] }))));



};

/* harmony default export */ __webpack_exports__["default"] = (Hello);

/***/ }),

/***/ "./src/demo/Hello/Hello.pcss":
/*!***********************************!*\
  !*** ./src/demo/Hello/Hello.pcss ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/demo/Hello/img/LockColor2.svg":
/*!*******************************************!*\
  !*** ./src/demo/Hello/img/LockColor2.svg ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pg0KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPg0KPHN2ZyB2ZXJzaW9uPSIxLjEiIGlkPSJDYXBhXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4Ig0KCSB2aWV3Qm94PSIwIDAgNTEyIDUxMiIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNTEyIDUxMjsiIHhtbDpzcGFjZT0icHJlc2VydmUiPg0KPHBhdGggc3R5bGU9ImZpbGw6I0Y3RjJGNDsiIGQ9Ik00MzIsNDg3SDgwYy00NC4xMTIsMC04MC0zNS44ODgtODAtODBzMzUuODg4LTgwLDgwLTgwaDM1MmM0NC4xMTIsMCw4MCwzNS44ODgsODAsODANCglTNDc2LjExMiw0ODcsNDMyLDQ4N3oiLz4NCjxnPg0KCTxjaXJjbGUgc3R5bGU9ImZpbGw6IzZENzM3RjsiIGN4PSIyMDYiIGN5PSI0MDciIHI9IjI1Ii8+DQoJPGNpcmNsZSBzdHlsZT0iZmlsbDojNkQ3MzdGOyIgY3g9IjEwNiIgY3k9IjQwNyIgcj0iMjUiLz4NCgk8cGF0aCBzdHlsZT0iZmlsbDojNkQ3MzdGOyIgZD0iTTMxNiwxNTdIMTk2Yy04LjI4NCwwLTE1LTYuNzE2LTE1LTE1di00MmMwLTQxLjM1NSwzMy42NDUtNzUsNzUtNzVzNzUsMzMuNjQ1LDc1LDc1djQyDQoJCUMzMzEsMTUwLjI4NCwzMjQuMjg0LDE1NywzMTYsMTU3eiBNMjExLDEyN2g5MHYtMjdjMC0yNC44MTMtMjAuMTg3LTQ1LTQ1LTQ1cy00NSwyMC4xODctNDUsNDVWMTI3eiIvPg0KPC9nPg0KPHBhdGggc3R5bGU9ImZpbGw6IzVFNUY2OTsiIGQ9Ik0yNTYsMjV2MzBjMjQuODEzLDAsNDUsMjAuMTg3LDQ1LDQ1djI3aC00NXYzMGg2MGM4LjI4NCwwLDE1LTYuNzE2LDE1LTE1di00Mg0KCUMzMzEsNTguNjQ1LDI5Ny4zNTUsMjUsMjU2LDI1eiIvPg0KPHBhdGggc3R5bGU9ImZpbGw6I0ZGQUMyQjsiIGQ9Ik0zNTEsMjc2SDE2MWMtOC4yODQsMC0xNS02LjcxNi0xNS0xNVYxNDJjMC04LjI4NCw2LjcxNi0xNSwxNS0xNWgxOTBjOC4yODQsMCwxNSw2LjcxNiwxNSwxNXYxMTkNCglDMzY2LDI2OS4yODQsMzU5LjI4NCwyNzYsMzUxLDI3NnoiLz4NCjxnPg0KCTxwYXRoIHN0eWxlPSJmaWxsOiNGRjk4MUU7IiBkPSJNMzUxLDEyN2gtOTV2MTQ5aDk1YzguMjg0LDAsMTUtNi43MTYsMTUtMTVWMTQyQzM2NiwxMzMuNzE2LDM1OS4yODQsMTI3LDM1MSwxMjd6Ii8+DQoJPHBhdGggc3R5bGU9ImZpbGw6I0ZGOTgxRTsiIGQ9Ik0yODEsMTkyYzAtOC4yODQtNi43MTYtMTUtMTUtMTVoLTIwYy04LjI4NCwwLTE1LDYuNzE2LTE1LDE1YzAsNi41MjgsNC4xNzgsMTIuMDY3LDEwLDE0LjEyOFYyMTINCgkJYzAsOC4yODQsNi43MTYsMTUsMTUsMTVzMTUtNi43MTYsMTUtMTV2LTUuODcyQzI3Ni44MjIsMjA0LjA2NywyODEsMTk4LjUyOCwyODEsMTkyeiIvPg0KPC9nPg0KPHBhdGggc3R5bGU9ImZpbGw6I0RGREFFMDsiIGQ9Ik00MzIsMzI3SDI1NnYxNjBoMTc2YzQ0LjExMiwwLDgwLTM1Ljg4OCw4MC04MFM0NzYuMTEyLDMyNyw0MzIsMzI3eiIvPg0KPGc+DQoJPGNpcmNsZSBzdHlsZT0iZmlsbDojNUU1RjY5OyIgY3g9IjMwNiIgY3k9IjQwNyIgcj0iMjUiLz4NCgk8Y2lyY2xlIHN0eWxlPSJmaWxsOiM1RTVGNjk7IiBjeD0iNDA2IiBjeT0iNDA3IiByPSIyNSIvPg0KPC9nPg0KPHBhdGggc3R5bGU9ImZpbGw6I0ZGODUxMjsiIGQ9Ik0yNjYsMTc3aC0xMHY1MGM4LjI4NCwwLDE1LTYuNzE2LDE1LTE1di01Ljg3MmM1LjgyMi0yLjA2MSwxMC03LjYsMTAtMTQuMTI4DQoJQzI4MSwxODMuNzE2LDI3NC4yODQsMTc3LDI2NiwxNzd6Ii8+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8L3N2Zz4NCg==");

/***/ }),

/***/ "./src/elements/InlineIcon/InlineIcon.jsx":
/*!************************************************!*\
  !*** ./src/elements/InlineIcon/InlineIcon.jsx ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/inheritsLoose */ "./node_modules/@babel/runtime/helpers/inheritsLoose.js");
/* harmony import */ var _babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1__);
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
/* harmony import */ var _InlineIcon_pcss__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./InlineIcon.pcss */ "./src/elements/InlineIcon/InlineIcon.pcss");
/* harmony import */ var _InlineIcon_pcss__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_InlineIcon_pcss__WEBPACK_IMPORTED_MODULE_8__);
 /** @module InlineIcon
                                                                                                                                        *  @class InlineIcon
                                                                                                                                        *  @since 2020.10.07, 02:08
                                                                                                                                        *  @changed 2020.12.24, 04:06
                                                                                                                                        */



// import connect from 'react-redux/es/connect/connect'






var iconGroups = {
  solid: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_6__,
  regular: _fortawesome_free_regular_svg_icons__WEBPACK_IMPORTED_MODULE_7__ };




var cnInlineIcon = Object(_utils_configure__WEBPACK_IMPORTED_MODULE_4__["cn"])('InlineIcon');var

InlineIcon = /*#__PURE__*/function (_React$PureComponent) {_babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_0___default()(InlineIcon, _React$PureComponent);function InlineIcon() {return _React$PureComponent.apply(this, arguments) || this;}var _proto = InlineIcon.prototype;_proto.










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
    var content = iconComponent && iconComponent.iconName ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_5__["FontAwesomeIcon"], { className: cnInlineIcon('IconImg'), icon: iconComponent }) : iconComponent;

    var renderProps = {
      id: id,
      className: this.getClassName(),
      title: title,
      onClick: onClick
      // key,
    };

    var tagName = tag || 'span';
    var element = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(tagName, renderProps, content);
    return element;
  };return InlineIcon;}(react__WEBPACK_IMPORTED_MODULE_2___default.a.PureComponent /** @lends @InlineIcon.prototype */);_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default()(InlineIcon, "propTypes", { id: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string, theme: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string, tag: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string, title: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string, icon: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.object]), onClick: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.func });



/* harmony default export */ __webpack_exports__["default"] = (InlineIcon);

/***/ }),

/***/ "./src/elements/InlineIcon/InlineIcon.pcss":
/*!*************************************************!*\
  !*** ./src/elements/InlineIcon/InlineIcon.pcss ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/elements/Loader/Loader-animation.pcss":
/*!***************************************************!*\
  !*** ./src/elements/Loader/Loader-animation.pcss ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/elements/Loader/Loader-modes.pcss":
/*!***********************************************!*\
  !*** ./src/elements/Loader/Loader-modes.pcss ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/elements/Loader/Loader-themes.pcss":
/*!************************************************!*\
  !*** ./src/elements/Loader/Loader-themes.pcss ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/elements/Loader/Loader.jsx":
/*!****************************************!*\
  !*** ./src/elements/Loader/Loader.jsx ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utils_configure__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils/configure */ "./src/utils/configure.js");
/* harmony import */ var _utils_lang__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utils/lang */ "./src/utils/lang.js");
/* harmony import */ var _forms_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../forms/forms */ "./src/forms/forms.js");
/* harmony import */ var _Loader_pcss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Loader.pcss */ "./src/elements/Loader/Loader.pcss");
/* harmony import */ var _Loader_pcss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_Loader_pcss__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _Loader_animation_pcss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Loader-animation.pcss */ "./src/elements/Loader/Loader-animation.pcss");
/* harmony import */ var _Loader_animation_pcss__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_Loader_animation_pcss__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _Loader_modes_pcss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Loader-modes.pcss */ "./src/elements/Loader/Loader-modes.pcss");
/* harmony import */ var _Loader_modes_pcss__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_Loader_modes_pcss__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _Loader_themes_pcss__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Loader-themes.pcss */ "./src/elements/Loader/Loader-themes.pcss");
/* harmony import */ var _Loader_themes_pcss__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_Loader_themes_pcss__WEBPACK_IMPORTED_MODULE_7__);
/** @module Loader
 *  @since 2020.10.27, 00:39
 *  @changed 2020.12.25, 00:29
 *
 *  TODO: Place block (and local?) loaders into `ModalsContainer`?
 */


// import connect from 'react-redux/es/connect/connect'




var cnLoader = Object(_utils_configure__WEBPACK_IMPORTED_MODULE_1__["cn"])('Loader');






// eslint-disable-next-line react/prefer-stateless-function
// export default class Loader extends React.PureComponent [>* @lends @Modal.prototype <] {

/** Loader component (FC)
 * @param {Boolean} [show]
 * @param {String} [theme] - Component theme (Light, none)
 * @param {Object} commonLang - Mapped language component
 */
var Loader = function Loader(props) {var

  lang =








  props.lang,className = props.className,mode = props.mode,show = props.show,theme = props.theme,text = props.text,onCancel = props.onCancel,cancelText = props.cancelText;
  var actions = typeof onCancel === 'function' && /*#__PURE__*/
  react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { className: cnLoader('Actions') }, /*#__PURE__*/
  react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_forms_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroup"], { flow: true, alignItems: "center" }, /*#__PURE__*/
  react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_forms_forms__WEBPACK_IMPORTED_MODULE_3__["FormButton"], {
    plain: true,
    onDark: true,
    text: cancelText || Object(_utils_lang__WEBPACK_IMPORTED_MODULE_2__["getCommonLangText"])('cancelButton', 'Cancel', lang),
    icon: "faTimes",
    onClick: onCancel })));




  var thisClassName = cnLoader({ mode: mode, theme: theme, show: show }, [className /* showClass */]);
  var showText = text != null ? text : Object(_utils_lang__WEBPACK_IMPORTED_MODULE_2__["getCommonLangText"])('loading', 'Loading...', lang);
  return /*#__PURE__*/(
    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { className: thisClassName }, /*#__PURE__*/
    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { className: cnLoader('Container') }, /*#__PURE__*/
    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { className: cnLoader('Spinner') }), /*#__PURE__*/
    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { className: cnLoader('Text') }, showText),
    actions)));



};
// const mapStateToProps = store => ({
//   // user: store.user,
//   // commonLang: store.language.components.common,
//   lang: store.language,
// })
// export default connect(mapStateToProps)(Loader)
/* harmony default export */ __webpack_exports__["default"] = (Loader);

/***/ }),

/***/ "./src/elements/Loader/Loader.pcss":
/*!*****************************************!*\
  !*** ./src/elements/Loader/Loader.pcss ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/elements/Menu/Menu.jsx":
/*!************************************!*\
  !*** ./src/elements/Menu/Menu.jsx ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/extends.js");
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/inheritsLoose */ "./node_modules/@babel/runtime/helpers/inheritsLoose.js");
/* harmony import */ var _babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _utils_configure__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../utils/configure */ "./src/utils/configure.js");
/* harmony import */ var _MenuItem_MenuItem__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../MenuItem/MenuItem */ "./src/elements/MenuItem/MenuItem.jsx");
/* harmony import */ var _Menu_pcss__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Menu.pcss */ "./src/elements/Menu/Menu.pcss");
/* harmony import */ var _Menu_pcss__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_Menu_pcss__WEBPACK_IMPORTED_MODULE_7__);
 /** @module Menu
                                                                                                                                                                                                                                                                                *  @class Menu
                                                                                                                                                                                                                                                                                *  @since 2020.10.27, 02:58
                                                                                                                                                                                                                                                                                *  @changed 2020.12.16, 20:21
                                                                                                                                                                                                                                                                                */


// import PropTypes from 'prop-types'
// import connect from 'react-redux/es/connect/connect'






var cnMenu = Object(_utils_configure__WEBPACK_IMPORTED_MODULE_5__["cn"])('Menu');

// Unique id counter
var uniqIdCount = 1;var

Menu = /*#__PURE__*/function (_React$PureComponent) {_babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_2___default()(Menu, _React$PureComponent);var _proto = Menu.prototype;

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
        var isElement = isObject && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.isValidElement(item);
        var isMenuItem = isElement && item.type === _MenuItem_MenuItem__WEBPACK_IMPORTED_MODULE_6__["default"];
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
          var newProps = _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({},
          itemProps, {
            onClick: itemProps.onClick || _this2.onMenuItemClick,
            checkable: checkable,
            checked: _checked });

          if (isRawObject) {// Raw object -> create MenuItem
            var key = item && item.key || _this2.getId() + '_Item_' + (itemProps.id || itemProps.val);
            item = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_MenuItem_MenuItem__WEBPACK_IMPORTED_MODULE_6__["default"], _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({}, newProps, { key: key }));
            // isMenuItem = isElement = true
          } else
          if (isMenuItem) {// MenuItem -> Add onClick handler if handler is not defined
            item = _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({}, item, { props: newProps });
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
        var isElement = isObject && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.isValidElement(item);
        var isMenuItem = isElement && item.type === _MenuItem_MenuItem__WEBPACK_IMPORTED_MODULE_6__["default"];
        if (isMenuItem) {
          var itemProps = item.props;var
          val = itemProps.val,checked = itemProps.checked;
          var checkedVal = checkedValStates[val];
          if (checkedVal == null) {// Check out all other items if single mode
            checkedVal = singleChoice ? false : checked;
          }
          if (checkedVal !== checked) {
            item = _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({}, item, { props: _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({}, itemProps, { checked: checkedVal }) });
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
    return 'Menu' + uniqIdCount++;
  };_proto.

  getId = function getId(props) {
    props = props || this.props;
    return props.id || this.id || (this.id = this.createUniqId());
  }

  // Lifecycle...
  ;
  function Menu(props) {var _this;
    _this = _React$PureComponent.call(this, props) || this;_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_3___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_1___default()(_this), "onMenuItemClick",



















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
      react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div", renderProps,
      content));


  };return Menu;}(react__WEBPACK_IMPORTED_MODULE_4___default.a.PureComponent /** @lends @Menu.prototype */);



/* harmony default export */ __webpack_exports__["default"] = (Menu);

/***/ }),

/***/ "./src/elements/Menu/Menu.pcss":
/*!*************************************!*\
  !*** ./src/elements/Menu/Menu.pcss ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/elements/MenuItem/MenuItem.jsx":
/*!********************************************!*\
  !*** ./src/elements/MenuItem/MenuItem.jsx ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/inheritsLoose */ "./node_modules/@babel/runtime/helpers/inheritsLoose.js");
/* harmony import */ var _babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _utils_configure__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../utils/configure */ "./src/utils/configure.js");
/* harmony import */ var _InlineIcon_InlineIcon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../InlineIcon/InlineIcon */ "./src/elements/InlineIcon/InlineIcon.jsx");
/* harmony import */ var _forms_FormItemHOC_FormItemHOC__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../forms/FormItemHOC/FormItemHOC */ "./src/forms/FormItemHOC/FormItemHOC.jsx");
/* harmony import */ var _MenuItem_pcss__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./MenuItem.pcss */ "./src/elements/MenuItem/MenuItem.pcss");
/* harmony import */ var _MenuItem_pcss__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_MenuItem_pcss__WEBPACK_IMPORTED_MODULE_7__);
 /** @module MenuItem
                                                                                                                                                                                                                          *  @class MenuItem
                                                                                                                                                                                                                          *  @since 2020.10.27, 03:05
                                                                                                                                                                                                                          *  @changed 2020.10.27, 03:06
                                                                                                                                                                                                                          */


// import PropTypes from 'prop-types'
// import connect from 'react-redux/es/connect/connect'








var cnMenuItem = Object(_utils_configure__WEBPACK_IMPORTED_MODULE_4__["cn"])('MenuItem');var

MenuItem = /*#__PURE__*/function (_React$PureComponent) {_babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_1___default()(MenuItem, _React$PureComponent);function MenuItem() {var _this;for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {args[_key] = arguments[_key];}_this = _React$PureComponent.call.apply(_React$PureComponent, [this].concat(args)) || this;_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_0___default()(_this), "onClick",



    function () {var _this$props =
      _this.props,id = _this$props.id,val = _this$props.val,onClick = _this$props.onClick;
      if (typeof onClick === 'function') {
        onClick({ id: id, val: val, component: _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_0___default()(_this) });
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
      return iconContent && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_InlineIcon_InlineIcon__WEBPACK_IMPORTED_MODULE_5__["default"], { icon: iconContent, className: cnMenuItem('Icon') });
    }
  };_proto.

  renderTextContent = function renderTextContent() {var _this$props4 =



    this.props,children = _this$props4.children,text = _this$props4.text;
    return /*#__PURE__*/(
      react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", { className: cnMenuItem('Text') },
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
      react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", renderProps,
      iconContent,
      textContent));


  };return MenuItem;}(react__WEBPACK_IMPORTED_MODULE_3___default.a.PureComponent /** @lends @MenuItem.prototype */);



/* harmony default export */ __webpack_exports__["default"] = (Object(_forms_FormItemHOC_FormItemHOC__WEBPACK_IMPORTED_MODULE_6__["default"])({ solid: true, hoverable: true })(MenuItem));

/***/ }),

/***/ "./src/elements/MenuItem/MenuItem.pcss":
/*!*********************************************!*\
  !*** ./src/elements/MenuItem/MenuItem.pcss ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/elements/ModalPopup/ModalPopup.jsx":
/*!************************************************!*\
  !*** ./src/elements/ModalPopup/ModalPopup.jsx ***!
  \************************************************/
/*! exports provided: default, FormItemModalPopup */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormItemModalPopup", function() { return FormItemModalPopup; });
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/extends.js");
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/inheritsLoose */ "./node_modules/@babel/runtime/helpers/inheritsLoose.js");
/* harmony import */ var _babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _utils_configure__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../utils/configure */ "./src/utils/configure.js");
/* harmony import */ var _utils_utils__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../utils/utils */ "./src/utils/utils.js");
/* harmony import */ var throttle_debounce__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! throttle-debounce */ "throttle-debounce");
/* harmony import */ var throttle_debounce__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(throttle_debounce__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _forms_FormItemHOC_FormItemHOC__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../forms/FormItemHOC/FormItemHOC */ "./src/forms/FormItemHOC/FormItemHOC.jsx");
/* harmony import */ var _ModalPortal_ModalPortal__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../ModalPortal/ModalPortal */ "./src/elements/ModalPortal/ModalPortal.jsx");
/* harmony import */ var _config_config__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../config/config */ "./src/config/config.js");
/* harmony import */ var _config_config__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_config_config__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _ModalPopup_pcss__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./ModalPopup.pcss */ "./src/elements/ModalPopup/ModalPopup.pcss");
/* harmony import */ var _ModalPopup_pcss__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_ModalPopup_pcss__WEBPACK_IMPORTED_MODULE_12__);
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









var cnModalPopup = Object(_utils_configure__WEBPACK_IMPORTED_MODULE_6__["cn"])('ModalPopup');
var cnModalPopupControl = Object(_utils_configure__WEBPACK_IMPORTED_MODULE_6__["cn"])('ModalPopupControl');

var doDebug = /*DEBUG*/ true && _config_config__WEBPACK_IMPORTED_MODULE_11___default.a.build.DEV_DEBUG || // DEBUG!
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

ModalPopup = /*#__PURE__*/function (_React$PureComponent) {_babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_2___default()(ModalPopup, _React$PureComponent);



























  // Properties...








  // From ModalPortal:




  // Lifecycle...

  function ModalPopup(props) {var _this;
    _this = _React$PureComponent.call(this, props) || this;_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_3___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_1___default()(_this), "delayedClickTimerHandler", null);_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_3___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_1___default()(_this), "globalHandlersRegistered", false);_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_3___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_1___default()(_this), "controlNode", null);_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_3___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_1___default()(_this), "controlDomNode", null);_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_3___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_1___default()(_this), "contentDomNode", null);_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_3___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_1___default()(_this), "geometry", {});_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_3___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_1___default()(_this), "windowDomNode", null);_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_3___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_1___default()(_this), "wrapperDomNode", null);_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_3___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_1___default()(_this), "ModalPortal", null);_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_3___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_1___default()(_this), "updateGeometryInstant",











































































































































































































































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
      var geometry = _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({},
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
    });_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_3___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_1___default()(_this), "open",














































    function () {return _this.ModalPortal && _this.ModalPortal.open();});_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_3___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_1___default()(_this), "close",
    function () {return _this.ModalPortal && _this.ModalPortal.close();});_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_3___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_1___default()(_this), "toggle",
    function (open) {return _this.ModalPortal && _this.ModalPortal.toggle(open);});_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_3___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_1___default()(_this), "isVisible",
    function () {return _this.ModalPortal && _this.ModalPortal.isVisible();});_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_3___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_1___default()(_this), "onActivate",



    function () {
      // console.log('ModalPopup:onActivate')
      setTimeout(_this.updateGeometryInstant, 0);
    });_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_3___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_1___default()(_this), "onDeactivate",
    function () {
      // console.log('ModalPopup:onDeactivate')
      _this.clearContentGeometry(); // Due to content is destroyed when hidden
    });_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_3___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_1___default()(_this), "handleOpenState",

    function (_ref) {var open = _ref.open;
      // console.log('ModalPopup:handleOpenState', open);
      _this.setState({ open: open }, _this.updateOpenOrCloseWithState); // Update own open state
      var _this$props = _this.props,id = _this$props.id,handleOpenState = _this$props.handleOpenState;
      if (typeof handleOpenState === 'function') {
        handleOpenState({ id: id, open: open });
      }
    });_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_3___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_1___default()(_this), "setControlNodeRef",

    function (node) {
      _this.controlNode = node;
    });_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_3___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_1___default()(_this), "setControlDomRef",
    function (domNode) {
      _this.controlDomNode = domNode;
    });_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_3___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_1___default()(_this), "setContentDomRef",
    function (domNode) {
      _this.contentDomNode = domNode;
    });_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_3___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_1___default()(_this), "handlePortalOpen",









    function () {
      // console.log('ModalPopup:handlePortalOpen');
      // TODO: Register/unregister popup in `ModalPopupStack`
      // this.updateGeometry()
      _this.registerGlobalHandlers();
    });_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_3___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_1___default()(_this), "handlePortalClose",

    function () {
      // TODO: Register/unregister popup in `ModalPopupStack`
      _this.unregisterGlobalHandlers();
      // this.clearContentGeometry() // Due to content is destroyed when hidden
    });_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_3___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_1___default()(_this), "updateOpenOrCloseWithState",

    function () {
      if (_this.state.open) {
        _this.handlePortalOpen();
      } else
      {
        _this.handlePortalClose();
      }
    });_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_3___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_1___default()(_this), "onControlClick",

    function () /* event */{var
      id = _this.props.id;var
      open = _this.state.open;
      var nextOpen = !open;
      // console.log('ModalPopup:onControlClick', id, nextOpen, open);
      if (nextOpen) {
        if (_this.controlNode) {// Move focus out of control element...
          // this.controlNode.focus && this.controlNode.focus(); // Ensure focus isnt on other element (eg, selects' inner button).
          _this.controlNode.blur && _this.controlNode.blur();
        }
        if (_this.controlDomNode) {// Move focus out of control element...
          // this.controlDomNode.focus && this.controlDomNode.focus(); // Ensure focus isnt on other element (eg, selects' inner button).
          _this.controlDomNode.blur && _this.controlDomNode.blur();
        }
      }
      _this.setState({ open: nextOpen }, _this.updateOpenOrCloseWithState); // Update own open state
      // TODO: Notify `ModalModalsContainer` when popup opens for closing all other popups from same level (before first modal in popups stack). (Now user can open several popups at the same time.
      var onControlClick = _this.props.onControlClick;
      if (typeof onControlClick === 'function') {
        onControlClick({ id: id, open: nextOpen });
      }
    });_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_3___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_1___default()(_this), "renderPortalContent",
































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
        ref: _this.setContentDomRef // Will be used windowDomNode from ModalPortal
      };
      return /*#__PURE__*/(
        react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div", renderProps,
        popupContent));


    });_this.state = { open: null // null -- uninitialized
    };_this.updateGeometry = Object(throttle_debounce__WEBPACK_IMPORTED_MODULE_8__["debounce"])(debouncedUpdateGeometryTimeout, _this.updateGeometryInstant);return _this;}var _proto = ModalPopup.prototype;_proto.componentWillUnmount = function componentWillUnmount() {this.unregisterGlobalHandlers();} // Helpers...
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
      var val = rect && rect[key];if (val != null) {var resultKey = id + _utils_utils__WEBPACK_IMPORTED_MODULE_7__["strings"].ucFirst(key);geometry[resultKey] = val;}return geometry;}, {}); // if (this.props.id === 'withMenu' && id === 'control') {
    //   console.log(domNode, rect, domNodeGeometryKeys, geometry)
    //   debugger
    // }
    return geometry || {};};_proto.getGlobalGeometry = function getGlobalGeometry() {var domNode = _config_config__WEBPACK_IMPORTED_MODULE_11___default.a.modals.domNode; // containerNode
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
      return;}var popupContentGap = _config_config__WEBPACK_IMPORTED_MODULE_11___default.a.css.popupContentGap; // const doubleContentModalPopupGap = popupContentGap * 2 // UNUSED
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
    var content = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.cloneElement(popupControl, { onClick: this.onControlClick, checked: open, // setDomRef: this.setControlDomRef,
      // ref: this.setControlNodeRef,
      setNodeRef: this.setControlNodeRef });var renderProps = { id: id, className: this.getClassName({ cnCtx: cnModalPopupControl, className: className }), ref: this.setControlDomRef };return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div", renderProps, content);};_proto.renderContent = function renderContent() {var _this3 = this;var portalProps = _ModalPortal_ModalPortal__WEBPACK_IMPORTED_MODULE_10__["passModalPortalProps"].reduce(function (data, id) {var _extends2;return _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({}, data, (_extends2 = {}, _extends2[id] = _this3.props[id], _extends2));}, {});if (this.state.open != null) {portalProps.open = this.state.open;}Object.assign(portalProps, { handleOpenState: this.handleOpenState, onActivate: this.onActivate, onDeactivate: this.onDeactivate, wrapperTheme: 'SubtleDark' });return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_ModalPortal_ModalPortal__WEBPACK_IMPORTED_MODULE_10__["default"], _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({}, portalProps, { type: "Popup" }), this.renderPortalContent);};_proto.render = function render() {return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_4___default.a.Fragment, null, this.renderControl(), this.renderContent());};return ModalPopup;}(react__WEBPACK_IMPORTED_MODULE_4___default.a.PureComponent /** @lends @ModalPopup.prototype */);_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_3___default()(ModalPopup, "propTypes", { // onEscPressed: PropTypes.func,
  // onKeyPress: PropTypes.func,
  // registerCallback: PropTypes.func, // registerCallback(handler = this.someMethod) -- handler stored by parent component and called when detected click on pulldown menu -- prevents popup content closing
  className: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.string, closeOnClickOutside: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.bool, closeOnEscPressed: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.bool, id: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.string, onControlClick: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.func, open: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.bool, popupContent: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.func, prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.object]).isRequired, popupControl: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.func, prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.object]).isRequired, setModalPopupNodeRef: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.func });_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_3___default()(ModalPopup, "defaultProps", { // onEscPressed: null,
  // onKeyPress: null,
  // popupContent: null,
  // popupControl: null,
  // registerCallback: null,
  closeOnClickOutside: true, closeOnEscPressed: true, open: false });/* harmony default export */ __webpack_exports__["default"] = (ModalPopup);var FormItemModalPopup = Object(_forms_FormItemHOC_FormItemHOC__WEBPACK_IMPORTED_MODULE_9__["default"])(ModalPopup);

/***/ }),

/***/ "./src/elements/ModalPopup/ModalPopup.pcss":
/*!*************************************************!*\
  !*** ./src/elements/ModalPopup/ModalPopup.pcss ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/elements/ModalPortal/ModalPortal-Geometry.pcss":
/*!************************************************************!*\
  !*** ./src/elements/ModalPortal/ModalPortal-Geometry.pcss ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/elements/ModalPortal/ModalPortal-Themes.pcss":
/*!**********************************************************!*\
  !*** ./src/elements/ModalPortal/ModalPortal-Themes.pcss ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/elements/ModalPortal/ModalPortal-Transitions.pcss":
/*!***************************************************************!*\
  !*** ./src/elements/ModalPortal/ModalPortal-Transitions.pcss ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/elements/ModalPortal/ModalPortal.jsx":
/*!**************************************************!*\
  !*** ./src/elements/ModalPortal/ModalPortal.jsx ***!
  \**************************************************/
/*! exports provided: passModalPortalProps, selfCloseActionId, externalCloseActionId, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "passModalPortalProps", function() { return passModalPortalProps; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selfCloseActionId", function() { return selfCloseActionId; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "externalCloseActionId", function() { return externalCloseActionId; });
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/extends.js");
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/inheritsLoose */ "./node_modules/@babel/runtime/helpers/inheritsLoose.js");
/* harmony import */ var _babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _utils_configure__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../utils/configure */ "./src/utils/configure.js");
/* harmony import */ var react_portal__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-portal */ "react-portal");
/* harmony import */ var react_portal__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_portal__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react_transition_group__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-transition-group */ "react-transition-group");
/* harmony import */ var react_transition_group__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_transition_group__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _config_config__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../config/config */ "./src/config/config.js");
/* harmony import */ var _config_config__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_config_config__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _Loader_Loader__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../Loader/Loader */ "./src/elements/Loader/Loader.jsx");
/* harmony import */ var _ModalPortal_Geometry_pcss__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./ModalPortal-Geometry.pcss */ "./src/elements/ModalPortal/ModalPortal-Geometry.pcss");
/* harmony import */ var _ModalPortal_Geometry_pcss__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_ModalPortal_Geometry_pcss__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _ModalPortal_Themes_pcss__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./ModalPortal-Themes.pcss */ "./src/elements/ModalPortal/ModalPortal-Themes.pcss");
/* harmony import */ var _ModalPortal_Themes_pcss__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_ModalPortal_Themes_pcss__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _ModalPortal_Transitions_pcss__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./ModalPortal-Transitions.pcss */ "./src/elements/ModalPortal/ModalPortal-Transitions.pcss");
/* harmony import */ var _ModalPortal_Transitions_pcss__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_ModalPortal_Transitions_pcss__WEBPACK_IMPORTED_MODULE_13__);
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





var cnModalPortal = Object(_utils_configure__WEBPACK_IMPORTED_MODULE_6__["cn"])('ModalPortal');

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

ModalPortal = /*#__PURE__*/function (_React$PureComponent) {_babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_2___default()(ModalPortal, _React$PureComponent);

  // Props...




































  // Instance variables...







  // Resulting action

  // Lifecycle...

  // typeId = 'ModalPortal'

  function ModalPortal(props) {var _this;
    _this = _React$PureComponent.call(this, props) || this;
    // const popupsInited = config.modals.isInited
    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_3___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_1___default()(_this), "isOutsideClickWaiting", false);_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_3___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_1___default()(_this), "globalHandlersRegistered", false);_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_3___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_1___default()(_this), "globalDomNode", document);_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_3___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_1___default()(_this), "wrapperDomNode", null);_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_3___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_1___default()(_this), "windowDomNode", null);_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_3___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_1___default()(_this), "transitionTime", 0);_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_3___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_1___default()(_this), "resolvingResult", null);_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_3___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_1___default()(_this), "getId",



























































    function () {return _this.props.id;});_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_3___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_1___default()(_this), "getType",
    function () {return _this.props.type;});_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_3___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_1___default()(_this), "isVisible",

    function () {return _this.state.open;});_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_3___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_1___default()(_this), "activate",

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
        _config_config__WEBPACK_IMPORTED_MODULE_9___default.a.modals.containerNode.registerModal(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_1___default()(_this));
      } else
      if (typeof cb === 'function') {
        cb();
      }
    });_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_3___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_1___default()(_this), "deactivate",

    function () {var _this$props2 =
      _this.props,id = _this$props2.id,onDeactivate = _this$props2.onDeactivate;var
      activated = _this.state.activated;
      if (activated) {
        // console.log('ModalPortal:deactivate', id)
        _this.resolveResult(); // `resolvingResult` must be defined?
        if (_this.mounted) {
          _this.setState({ activated: false });
        }
        if (typeof onDeactivate === 'function') {
          onDeactivate({ id: id });
        }
        _config_config__WEBPACK_IMPORTED_MODULE_9___default.a.modals.containerNode.unregisterModal(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_1___default()(_this));
      }
    });_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_3___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_1___default()(_this), "toggle",

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
    });_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_3___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_1___default()(_this), "close",

    function () {// External method for using in `ModalPortalStack`
      var prevOpen = _this.state.open;
      // console.log('ModalPortal:close', this.props.id, prevOpen)
      if (prevOpen) {
        _this.setState({ open: false }, _this.updateShowWithState);
      }
    });_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_3___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_1___default()(_this), "open",

    function () {// External method for using in `ModalPortalStack`
      var prevOpen = _this.state.open;
      // console.log('ModalPortal:open', this.props.id, prevOpen);
      if (!prevOpen) {
        var open = true;
        _this.resolvingResult = null; // Reset resolving action
        // First activate portal then enter into opening animation
        _this.activate(function () {
          _this.setState({ open: open }, _this.updateShowWithState);
        });
        _this.activate(function () {return _this.setState({ open: open }, _this.updateShowWithState);});
      }
    });_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_3___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_1___default()(_this), "updateGeometry",

    function () {return null;});_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_3___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_1___default()(_this), "updateShowWithState",



























































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
    });_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_3___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_1___default()(_this), "onPopupsInited",

    function () {
      _this.setState({ popupsInited: true });var
      open = _this.props.open;
      if (open) {// Immediately open if passed open status
        // this.activate(() => this.setState({ open: true }))
        _this.activate(function () {return _this.setState({ open: true });}, _this.updateShowWithState);
      }
    });_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_3___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_1___default()(_this), "onAction",
























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
        actionsContextNode.onAction(_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({}, actionProps, { modalPortalId: id }));
      }
    });_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_3___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_1___default()(_this), "onKeyPress",

    function (event) {var

      key =


      event.key,keyCode = event.keyCode,charCode = event.charCode;var _this$props5 =





      _this.props,id = _this$props5.id,onEscPressed = _this$props5.onEscPressed,closeOnEscPressed = _this$props5.closeOnEscPressed,loading = _this$props5.loading;
      // @see https://keycode.info/
      var isEscPressed = key === 'Escape'; // (keyCode === 27);
      var cbProps = { event: event, id: id, key: key, keyCode: keyCode, charCode: charCode };
      // console.log('ModalPortal:onKeyPress', cbProps);
      if (isEscPressed && !loading) {
        var isTopmost = _config_config__WEBPACK_IMPORTED_MODULE_9___default.a.modals.containerNode.isModalTopmostVisible(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_1___default()(_this));
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
    });_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_3___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_1___default()(_this), "stopOutsideClickWaiting",

    function () /* ev */{// Mouse released on window --> cancel waiting for mouse up on wrapper (don't close modal)
      var _assertThisInitialize = _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_1___default()(_this),globalDomNode = _assertThisInitialize.globalDomNode,windowDomNode = _assertThisInitialize.windowDomNode;
      if (_this.isOutsideClickWaiting /* && globalDomNode && windowDomNode */) {
          // console.log('ModalPortal:stopOutsideClickWaiting', ev && ev.type, ev && ev.currentTarget)
          globalDomNode && globalDomNode.removeEventListener(mouseUpEvent, _this.onOutsideClickCatched);
          windowDomNode && windowDomNode.removeEventListener(mouseLeaveEvent, _this.stopOutsideClickWaiting);
          _this.isOutsideClickWaiting = false;
        }
    });_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_3___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_1___default()(_this), "startOutsideClickWaiting",
    function () {// Start waiting for mouse up on wrapper (close modal) or window (continue working)
      var loading = _this.props.loading;
      var isTopmost = _config_config__WEBPACK_IMPORTED_MODULE_9___default.a.modals.containerNode.isModalTopmostVisible(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_1___default()(_this));
      if (!loading && isTopmost) {var _assertThisInitialize2 = _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_1___default()(_this),
        globalDomNode = _assertThisInitialize2.globalDomNode,windowDomNode = _assertThisInitialize2.windowDomNode;
        // console.log('ModalPortal:startOutsideClickWaiting')
        if (!_this.isOutsideClickWaiting && globalDomNode && windowDomNode) {// Start waiting for
          _this.isOutsideClickWaiting = true;
          globalDomNode.addEventListener(mouseUpEvent, _this.onOutsideClickCatched);
          windowDomNode.addEventListener(mouseLeaveEvent, _this.stopOutsideClickWaiting);
        }
      }
    });_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_3___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_1___default()(_this), "onOutsideClickCatched",
    function () {// Mouse released on wrapper --> close modal
      var _this$props6 = _this.props,id = _this$props6.id,closeOnClickOutside = _this$props6.closeOnClickOutside,onClickOutside = _this$props6.onClickOutside;
      // console.log('ModalPortal:onOutsideClickCatched', id);
      _this.stopOutsideClickWaiting();
      if (closeOnClickOutside) {
        _this.setResult(selfCloseActionId);
        _this.close();
      }
      if (typeof onClickOutside === 'function') {
        onClickOutside({ id: id });
      }
    });_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_3___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_1___default()(_this), "onCloseButtonClick",

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
    });_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_3___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_1___default()(_this), "setWindowDomRef",

    function (domNode) {
      _this.windowDomNode = domNode;
    });_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_3___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_1___default()(_this), "setWrapperDomRef",

    function (domNode) {
      _this.wrapperDomNode = domNode;
    });_this.state = { popupsInited: false, activated: false, open: false };_config_config__WEBPACK_IMPORTED_MODULE_9___default.a.modals.initPromise.then(_this.onPopupsInited);_this.transitionTime = _config_config__WEBPACK_IMPORTED_MODULE_9___default.a.css.modalAnimateTime;_this.modalType = props.type;if (typeof props.setPortalNode === 'function') {props.setPortalNode(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_1___default()(_this));} /* // UNUSED: Failed `ModalsContext` test implementation
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
    var childrenProps = { ModalPortal: this, windowDomNode: windowDomNode, wrapperDomNode: wrapperDomNode };var isElement = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.isValidElement(children);var childrenType = typeof children;var isFunction = childrenType === 'function'; // Extend element or call function with children' props
    var content = isElement ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.cloneElement(children, childrenProps) : isFunction ? children(childrenProps) : children;return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div", { className: cnModalPortal('Window', { width: windowWidth, theme: windowTheme || theme }, [windowClassName]), ref: this.setWindowDomRef }, content);};_proto.renderLoader = function renderLoader() {var _this$props10 = this.props,loading = _this$props10.loading,loaderTheme = _this$props10.loaderTheme,handleLoaderCancel = _this$props10.handleLoaderCancel;return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_Loader_Loader__WEBPACK_IMPORTED_MODULE_10__["default"], { mode: "local", theme: loaderTheme, show: loading, onCancel: handleLoaderCancel });};_proto.renderModalPortal = function renderModalPortal() {var _this$props11 = this.props,type = _this$props11.type,id = _this$props11.id,theme = _this$props11.theme,wrapperTheme = _this$props11.wrapperTheme,className = _this$props11.className,wrapperClassName = _this$props11.wrapperClassName,useLoader = _this$props11.useLoader,loading = _this$props11.loading;if (loading && !useLoader) {var error = new Error('ModalPortal: `useLoader` must be enabled for using `loading` prop');console.error(error); // eslint-disable-line no-console
      /*DEBUG*/debugger; // eslint-disable-line no-debugger
      throw error; // ???
    }var open = this.state.open;return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(react_transition_group__WEBPACK_IMPORTED_MODULE_8__["CSSTransition"], { key: id // id={id}
      , timeout: this.transitionTime, in: open, classNames: cnModalPortal() // Generate animation classes
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div", { className: cnModalPortal({ type: type, id: id }, [className]) // Root node
      , ref: this.setRootDomRef }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div", { className: cnModalPortal('Wrapper', { theme: wrapperTheme || theme }, [wrapperClassName]), ref: this.setWrapperDomRef }, this.renderWindow(), useLoader && this.renderLoader())));};_proto.

  render = function render() {var _this$state =
    this.state,popupsInited = _this$state.popupsInited,activated = _this$state.activated;
    var toDisplay = popupsInited && activated;
    if (!toDisplay) {
      return null;
    }
    var node = _config_config__WEBPACK_IMPORTED_MODULE_9___default.a.modals.domNode;
    if (!node) {
      var error = new Error('ModalPortal: config.modals.domNode is undefined. Don\'t forget to use WebUiCoreRoot with autoModalsContainer mode or render ModalsContainer manually.');
      console.error(error); // eslint-disable-line no-console
      /*DEBUG*/debugger; // eslint-disable-line no-debugger
      throw error; // ???
    }
    // console.log('ModalPortal:render', this.props.children)
    return /*#__PURE__*/(
      react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(react_portal__WEBPACK_IMPORTED_MODULE_7__["Portal"], { node: node },
      this.renderModalPortal()));


  };return ModalPortal;}(react__WEBPACK_IMPORTED_MODULE_4___default.a.PureComponent /** @lends @ModalPortal.prototype */);_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_3___default()(ModalPortal, "propTypes", { useLoader: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.bool, // Use loader (see `loading`)
  loading: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.bool, // Show Loader flashback
  onAction: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.func, // Event fired on action invoked (see `actions` prop)
  // registerCallback: PropTypes.func, // ??? registerCallback(handler = this.someMethod) -- handler stored by parent component and called when detected click on pulldown menu -- prevents popup content closing
  // setModalPortalNodeRef: PropTypes.func, // ??? Demo?
  windowWidth: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.string, // (ModalWindow only?) ModalPortal window width (predefined variants: xs, sm, md, lg, xl, xxl)
  handleLoaderCancel: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.func, // Loader onCancel event handler
  closeOnClickOutside: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.bool, // Close (cancel) modal by click outside modal window (on 'curtain')
  closeOnEscPressed: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.bool, // Close (cancel) modal on esc key pressed
  closeWithCloseButton: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.bool, // Close (cancel) modal by click on header 'Close' button
  id: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.string, // ModalPortal id
  onActivate: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.func, // Event fired on activate (before open)
  onClickOutside: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.func, // Event fired on click outside modal
  onCloseButtonClick: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.func, // Event fired on header 'Close' button click
  onDeactivate: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.func, // Event fired on deactivate (unmounting from dom)
  onEscPressed: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.func, // Event fired on esc key pressed
  onOpen: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.func, // Event fired on modal open
  onClose: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.func, // Event fired on modal close
  handleOpenState: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.func, // Event fired on modal open state change (update external open/close state) ({ open, id } => void)
  open: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.bool, // Show modal by default
  className: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.string, // ModalPortal class name
  windowClassName: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.string, // ModalPortal window class name
  wrapperClassName: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.string, // ModalPortal wrapper class name
  theme: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.string, // ModalPortal theme (default theme for all other themed elements, see `*Theme`)
  windowTheme: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.string, // Window theme (using `theme` if not specified)
  wrapperTheme: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.string, // Wrapper (back-curtain) theme (using `theme` if not specified)
  loaderTheme: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.string, // Loader theme ('MediumDark' is default)
  setPortalNode: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.func // Get reference to `ModalPortal` instance node
});_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_3___default()(ModalPortal, "defaultProps", { loaderTheme: 'MediumDark' });/* harmony default export */ __webpack_exports__["default"] = (ModalPortal); /* // UNUSED: Failed `ModalsContext` test implementation
                                                                                                            * export default compose(
                                                                                                            *   withModalsContext,
                                                                                                            * )(ModalPortal)
                                                                                                            */

/***/ }),

/***/ "./src/elements/ModalWindow/ModalWindow-Errors.pcss":
/*!**********************************************************!*\
  !*** ./src/elements/ModalWindow/ModalWindow-Errors.pcss ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/elements/ModalWindow/ModalWindow-Geometry.pcss":
/*!************************************************************!*\
  !*** ./src/elements/ModalWindow/ModalWindow-Geometry.pcss ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/elements/ModalWindow/ModalWindow-Themes.pcss":
/*!**********************************************************!*\
  !*** ./src/elements/ModalWindow/ModalWindow-Themes.pcss ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/elements/ModalWindow/ModalWindow.jsx":
/*!**************************************************!*\
  !*** ./src/elements/ModalWindow/ModalWindow.jsx ***!
  \**************************************************/
/*! exports provided: selfCloseActionId, externalCloseActionId, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selfCloseActionId", function() { return selfCloseActionId; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "externalCloseActionId", function() { return externalCloseActionId; });
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/extends.js");
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/inheritsLoose */ "./node_modules/@babel/runtime/helpers/inheritsLoose.js");
/* harmony import */ var _babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _utils_configure__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../utils/configure */ "./src/utils/configure.js");
/* harmony import */ var _config_config__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../config/config */ "./src/config/config.js");
/* harmony import */ var _config_config__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_config_config__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _ModalPortal_ModalPortal__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../ModalPortal/ModalPortal */ "./src/elements/ModalPortal/ModalPortal.jsx");
/* harmony import */ var _InlineIcon_InlineIcon__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../InlineIcon/InlineIcon */ "./src/elements/InlineIcon/InlineIcon.jsx");
/* harmony import */ var _forms_FormButton_FormButton__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../forms/FormButton/FormButton */ "./src/forms/FormButton/FormButton.jsx");
/* harmony import */ var _helpers_ActionsContext__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../helpers/ActionsContext */ "./src/helpers/ActionsContext.jsx");
/* harmony import */ var _ModalWindow_Geometry_pcss__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./ModalWindow-Geometry.pcss */ "./src/elements/ModalWindow/ModalWindow-Geometry.pcss");
/* harmony import */ var _ModalWindow_Geometry_pcss__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_ModalWindow_Geometry_pcss__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _ModalWindow_Themes_pcss__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./ModalWindow-Themes.pcss */ "./src/elements/ModalWindow/ModalWindow-Themes.pcss");
/* harmony import */ var _ModalWindow_Themes_pcss__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_ModalWindow_Themes_pcss__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _ModalWindow_Errors_pcss__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./ModalWindow-Errors.pcss */ "./src/elements/ModalWindow/ModalWindow-Errors.pcss");
/* harmony import */ var _ModalWindow_Errors_pcss__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_ModalWindow_Errors_pcss__WEBPACK_IMPORTED_MODULE_14__);
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

var cnModalWindow = Object(_utils_configure__WEBPACK_IMPORTED_MODULE_6__["cn"])('ModalWindow');

// const doDebug = [>DEBUG<] false && config.build.DEV_DEBUG || // DEBUG!
//   false

var selfCloseActionId = 'modalSelfClose';
var externalCloseActionId = 'modalExternalClose';var

ModalWindow = /*#__PURE__*/function (_React$PureComponent) {_babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_2___default()(ModalWindow, _React$PureComponent);function ModalWindow() {var _this;for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {args[_key] = arguments[_key];}_this = _React$PureComponent.call.apply(_React$PureComponent, [this].concat(args)) || this;_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_3___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_1___default()(_this), "ModalPortal",


























































    null);_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_3___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_1___default()(_this), "handleOpenState",







    function (_ref) {var open = _ref.open;
      // this.setState({ open })
      var _this$props = _this.props,id = _this$props.id,handleOpenState = _this$props.handleOpenState;
      if (typeof handleOpenState === 'function') {
        handleOpenState({ id: id, open: open });
      }
    });_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_3___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_1___default()(_this), "onAction",

    function (actionProps) {// Event handler for ActionContext consumed children
      var _assertThisInitialize = _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_1___default()(_this),ModalPortal = _assertThisInitialize.ModalPortal;
      if (!ModalPortal) {
        var error = new Error('ModalWindow:onAction: ModalPortal must be defined');
        console.error(error); // eslint-disable-line no-console
        /*DEBUG*/debugger; // eslint-disable-line no-debugger
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
    });_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_3___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_1___default()(_this), "onCloseButtonClick",

    function () {// Mouse released on wrapper --> close modal
      var _assertThisInitialize2 = _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_1___default()(_this),ModalPortal = _assertThisInitialize2.ModalPortal;
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
    });_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_3___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_1___default()(_this), "setPortalNode",

    function (node) {// Save reference to ModalPortal node
      _this.ModalPortal = node;
    });_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_3___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_1___default()(_this), "open",



    function () {return _this.ModalPortal && _this.ModalPortal.open();});_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_3___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_1___default()(_this), "close",
    function () {return _this.ModalPortal && _this.ModalPortal.close();});_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_3___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_1___default()(_this), "toggle",
    function (open) {return _this.ModalPortal && _this.ModalPortal.toggle(open);});_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_3___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_1___default()(_this), "isVisible",
    function () {return _this.ModalPortal && _this.ModalPortal.isVisible();});_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_3___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_1___default()(_this), "renderContentError",































































    function (error) {
      if (Array.isArray(error)) {
        return error.
        map(_this.renderContentError).
        filter(function (x) {return x;}).
        map(function (str, n) {
          var key = 'error' + n;
          return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div", { key: key, className: cnModalWindow('ErrorItem') }, str);
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
    });_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_3___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_1___default()(_this), "renderWindow",





























    function () /* portalProps */{
      // const { ModalPortal } = portalProps || {} // !!!
      // this.ModalPortal = ModalPortal // Save ModalPortal handler
      // console.log('ModalWindow:renderWindow', this.props.children)
      return /*#__PURE__*/(
        react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_4___default.a.Fragment, null,
        _this.renderHeader(), /*#__PURE__*/
        react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div", { className: cnModalWindow('Layout') },
        _this.renderLeftContent(), /*#__PURE__*/
        react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div", { className: cnModalWindow('Main') },
        _this.renderContent(),
        _this.renderActions()))));





    });return _this;}var _proto = ModalWindow.prototype; // Render helpers...
  // Render...
  _proto.renderHeaderIcon = function renderHeaderIcon() {var _this$props4 = this.props,icon = _this$props4.icon,iconTheme = _this$props4.iconTheme;var theme = iconTheme || this.props.theme;var showIcon = icon || theme && _config_config__WEBPACK_IMPORTED_MODULE_7___default.a.ui.defaultIcons[theme];return showIcon && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div", { key: "HeaderIcon", className: cnModalWindow('HeaderIcon', { theme: theme }) }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_InlineIcon_InlineIcon__WEBPACK_IMPORTED_MODULE_9__["default"], { theme: theme, icon: showIcon }));};_proto.renderHeaderTitle = function renderHeaderTitle() {var title = this.props.title;return title && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div", { key: "HeaderTitle", className: cnModalWindow('HeaderTitle') }, title);};_proto.renderHeaderCloseButton = function renderHeaderCloseButton() {var showCloseButton = this.props.showCloseButton;return showCloseButton && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div", { key: "HeaderCloseButton", className: cnModalWindow('HeaderCloseButton') }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_forms_FormButton_FormButton__WEBPACK_IMPORTED_MODULE_10__["default"], { icon: "faTimes", largeIcon: true, plain: true, title: "Close window" // TODO; Translate?
      , onClick: this.onCloseButtonClick }));};_proto.renderHeader = function renderHeader() {var _this$props5 = this.props,headerTheme = _this$props5.headerTheme,theme = _this$props5.theme;var content = [this.renderHeaderIcon(), this.renderHeaderTitle(), this.renderHeaderCloseButton()].filter(Boolean);var hasHeader = !!(content && content.length);return hasHeader && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div", { className: cnModalWindow('Header', { theme: headerTheme || theme }) }, content);};_proto.renderLeftContent = function renderLeftContent() {var leftContent = this.props.leftContent;return leftContent && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div", { className: cnModalWindow('LeftContent') }, leftContent);};_proto.renderContent = function renderContent() {var _this$props6 = this.props,children = _this$props6.children,contentClassName = _this$props6.contentClassName,error = _this$props6.error; // console.log('ModalWindow:renderContent', children)
    // debugger
    var errorContent = error && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div", { className: cnModalWindow('Error') }, this.renderContentError(error));return children && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div", { className: cnModalWindow('Content', [contentClassName]) }, errorContent, children);};_proto.renderActions = function renderActions() {var actions = this.props.actions;return actions && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div", { className: cnModalWindow('Actions') }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_helpers_ActionsContext__WEBPACK_IMPORTED_MODULE_11__["ActionsContextProvider"], { value: this }, actions));};_proto.render = function render() {var _this2 = this;var portalProps = _ModalPortal_ModalPortal__WEBPACK_IMPORTED_MODULE_8__["passModalPortalProps"].reduce(function (data, id) {var _extends2;return _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({}, data, (_extends2 = {}, _extends2[id] = _this2.props[id], _extends2));}, {});
    Object.assign(portalProps, {
      handleOpenState: this.handleOpenState
      // onActivate: this.onActivate,
      // onDeactivate: this.onDeactivate,
      // wrapperTheme: 'SubtleDark',
    });
    // console.log('ModalWindow:render', this.props.children)
    // NOTE: Use arrow function to force update modal content
    return /*#__PURE__*/(
      react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_ModalPortal_ModalPortal__WEBPACK_IMPORTED_MODULE_8__["default"], _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({}, portalProps, { type: "Window", setPortalNode: this.setPortalNode }),
      this.renderWindow()));


  };return ModalWindow;}(react__WEBPACK_IMPORTED_MODULE_4___default.a.PureComponent /** @lends @ModalWindow.prototype */);_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_3___default()(ModalWindow, "propTypes", { useLoader: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.bool, loading: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.bool, // Show Loader flashback
  onAction: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.func, // Event fired on action invoked (see `actions` prop)
  // registerCallback: PropTypes.func, // ??? registerCallback(handler = this.someMethod) -- handler stored by parent component and called when detected click on pulldown menu -- prevents popup content closing
  // setModalNodeRef: PropTypes.func, // ??? Demo?
  width: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.string, // ModalWindow window width (predefined variants: xs, sm, md, lg, xl, xxl)
  handleLoaderCancel: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.func, // Loader onCancel event handler
  error: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.string)]), // Error(s) strings to display above content
  actions: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.array, prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.object]), // Actions component(s) (TODO: `ActionsContext` must be used)
  closeOnCancelAction: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.bool, // Auto-close on `cancel` action event
  closeOnClickOutside: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.bool, // Close (cancel) modal by click outside modal window (on 'curtain')
  closeOnEscPressed: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.bool, // Close (cancel) modal on esc key pressed
  closeWithCloseButton: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.bool, // Close (cancel) modal by click on header 'Close' button
  showCloseButton: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.bool, // Display close button in header
  icon: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.object]), // Show icon in header
  id: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.string, // ModalWindow id
  leftContent: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.object]), // Content at left of main content and actions (ideal place for large visual icon)
  onActivate: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.func, // Event fired on activate (before open)
  onClickOutside: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.func, // Event fired on click outside modal
  onCloseButtonClick: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.func, // Event fired on header 'Close' button click
  onDeactivate: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.func, // Event fired on deactivate (unmounting from dom)
  onEscPressed: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.func, // Event fired on esc key pressed
  onOpen: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.func, // Event fired on modal open
  onClose: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.func, // Event fired on modal close
  handleOpenState: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.func, // Event fired on modal open state change (update external open/close state) ({ open, id } => void)
  open: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.bool, // Show modal by default
  title: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.string, // ModalWindow title
  className: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.string, // ModalWindow class name
  contentClassName: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.string, // Content element class name
  windowClassName: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.string, // ModalWindow window class name
  wrapperClassName: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.string, // ModalWindow wrapper class name
  theme: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.string, // ModalWindow theme (default theme for all other themed elements, see `*Theme`)
  iconTheme: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.string, // Icon theme (using `theme` if not specified)
  windowTheme: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.string, // Window theme (using `theme` if not specified)
  headerTheme: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.string, // Header theme (using `theme` if not specified)
  wrapperTheme: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.string, // Wrapper (back-curtain) theme (using `theme` if not specified)
  loaderTheme: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.string // Loader theme ('MediumDark' is default)
});_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_3___default()(ModalWindow, "defaultProps", { closeOnClickOutside: true, // Close (with `selfCloseActionId` action id) modal by outisde-click.
  closeOnEscPressed: true, // Close (with `selfCloseActionId` action id) modal by esc-key.
  closeWithCloseButton: true, // Close (with `selfCloseActionId` action id) with 'Close button' (if present in layout -- see `showCloseButton`)
  loaderTheme: 'MediumDark', loading: false, open: false, showCloseButton: false, // Display 'Close button'?
  useLoader: false, wrapperTheme: 'MediumDark' });/* harmony default export */ __webpack_exports__["default"] = (ModalWindow);

/***/ }),

/***/ "./src/elements/ModalsContainer/ModalsContainer.jsx":
/*!**********************************************************!*\
  !*** ./src/elements/ModalsContainer/ModalsContainer.jsx ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/inheritsLoose */ "./node_modules/@babel/runtime/helpers/inheritsLoose.js");
/* harmony import */ var _babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-dom */ "react-dom");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_portal__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-portal */ "react-portal");
/* harmony import */ var react_portal__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_portal__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _utils_configure__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../utils/configure */ "./src/utils/configure.js");
/* harmony import */ var _config_config__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../config/config */ "./src/config/config.js");
/* harmony import */ var _config_config__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_config_config__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _ModalsContainer_pcss__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./ModalsContainer.pcss */ "./src/elements/ModalsContainer/ModalsContainer.pcss");
/* harmony import */ var _ModalsContainer_pcss__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_ModalsContainer_pcss__WEBPACK_IMPORTED_MODULE_9__);
 /** @module ModalsContainer
                                                                                                                                                                                                                          *  @class ModalsContainer
                                                                                                                                                                                                                          *  @since 2020.12.21, 23:37
                                                                                                                                                                                                                          *  @changed 2020.12.21, 23:37
                                                                                                                                                                                                                          */





// import { cssMapping } from 'utils/configure'


// import { ModalsContextProvider } from 'helpers/ModalsContext'



var cnModalsContainer = Object(_utils_configure__WEBPACK_IMPORTED_MODULE_7__["cn"])('ModalsContainer');

// const doDebug = false // DEBUG!
var
ModalsContainer = /*#__PURE__*/function (_React$PureComponent) {_babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_1___default()(ModalsContainer, _React$PureComponent);





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
    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_0___default()(_this), "modalsStack", []);_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_0___default()(_this), "registerModal",




















    function (modal) {
      // console.log('ModalsContainer:registerModal', modal.props.type, modal.props.id)
      if (!_this.modalsStack.includes(modal)) {// Add to stack if not exist
        _this.modalsStack.push(modal);
      }
    });_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_0___default()(_this), "unregisterModal",

    function (modal) {
      // console.log('ModalsContainer:unregisterModal', modal.props.type, modal.props.id)
      var idx = _this.modalsStack.indexOf(modal);
      if (idx !== -1) {// Remove if found...
        _this.modalsStack.splice(idx, 1);
      }
    });_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_0___default()(_this), "getTopmostVisibleModal",

    function () {
      // Look for items from last (topmost) to first (bottommost) for first visible
      for (var n = _this.modalsStack.length - 1; n >= 0; n--) {
        var modal = _this.modalsStack[n];
        var isVisible = modal.isVisible();
        if (isVisible) {
          return modal;
        }
      }
    });_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_0___default()(_this), "isModalTopmostVisible",

    function (modal) {
      var topmost = _this.getTopmostVisibleModal();
      return modal === topmost;
    });return _this;}var _proto = ModalsContainer.prototype;_proto.componentDidMount = function componentDidMount() {// this.registerGlobalHandlers()
    if (typeof _config_config__WEBPACK_IMPORTED_MODULE_8___default.a.modals._initPromiseResolve == 'function') {_config_config__WEBPACK_IMPORTED_MODULE_8___default.a.modals._initPromiseResolve();}_config_config__WEBPACK_IMPORTED_MODULE_8___default.a.modals.isInited = true;_config_config__WEBPACK_IMPORTED_MODULE_8___default.a.modals.containerNode = this; // eslint-disable-next-line react/no-find-dom-node
    var domNode = react_dom__WEBPACK_IMPORTED_MODULE_4___default.a.findDOMNode(this); // TODO: Find alternate legal method to get dom node? (refs doesn't works due to high-level element (`TransitionGroup`) rendering)
    _config_config__WEBPACK_IMPORTED_MODULE_8___default.a.modals.domNode = domNode;};_proto.componentWillUnmount = function componentWillUnmount() {// this.unregisterGlobalHandlers()
  } // Handlers...
  // External methods...
  ; // Render...
  _proto.renderModalsContainer = function renderModalsContainer() {var containerId = _config_config__WEBPACK_IMPORTED_MODULE_8___default.a.modals.containerId;var className = cnModalsContainer(null, [this.props.className /* , cnModalsContainer('TransitionGroup') */]);var renderProps = {
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
      react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", renderProps));

  };_proto.

  render = function render() {
    var node = document.body; // Render as new node in top level of dom tree
    var container = this.renderModalsContainer();var
    usePortal = this.props.usePortal;
    var content = usePortal ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(react_portal__WEBPACK_IMPORTED_MODULE_6__["Portal"], { node: node }, container) : container;
    return content;
    // return (
    //   <Portal node={node}>
    //     {this.renderModalsContainer()}
    //   </Portal>
    // )
  };return ModalsContainer;}(react__WEBPACK_IMPORTED_MODULE_3___default.a.PureComponent /** @lends @ModalsContainer.prototype */);_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2___default()(ModalsContainer, "propTypes", { usePortal: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.bool // Render container at end of dom tree root level
});


/* harmony default export */ __webpack_exports__["default"] = (ModalsContainer);

/***/ }),

/***/ "./src/elements/ModalsContainer/ModalsContainer.pcss":
/*!***********************************************************!*\
  !*** ./src/elements/ModalsContainer/ModalsContainer.pcss ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/elements/elements.js":
/*!**********************************!*\
  !*** ./src/elements/elements.js ***!
  \**********************************/
/*! exports provided: InlineIcon, Loader, Menu, MenuItem, ModalWindow, ModalPopup, ModalPortal, ModalsContainer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _InlineIcon_InlineIcon__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./InlineIcon/InlineIcon */ "./src/elements/InlineIcon/InlineIcon.jsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "InlineIcon", function() { return _InlineIcon_InlineIcon__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _Loader_Loader__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Loader/Loader */ "./src/elements/Loader/Loader.jsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Loader", function() { return _Loader_Loader__WEBPACK_IMPORTED_MODULE_1__["default"]; });

/* harmony import */ var _Menu_Menu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Menu/Menu */ "./src/elements/Menu/Menu.jsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Menu", function() { return _Menu_Menu__WEBPACK_IMPORTED_MODULE_2__["default"]; });

/* harmony import */ var _MenuItem_MenuItem__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./MenuItem/MenuItem */ "./src/elements/MenuItem/MenuItem.jsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MenuItem", function() { return _MenuItem_MenuItem__WEBPACK_IMPORTED_MODULE_3__["default"]; });

/* harmony import */ var _ModalWindow_ModalWindow__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ModalWindow/ModalWindow */ "./src/elements/ModalWindow/ModalWindow.jsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ModalWindow", function() { return _ModalWindow_ModalWindow__WEBPACK_IMPORTED_MODULE_4__["default"]; });

/* harmony import */ var _ModalPopup_ModalPopup__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ModalPopup/ModalPopup */ "./src/elements/ModalPopup/ModalPopup.jsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ModalPopup", function() { return _ModalPopup_ModalPopup__WEBPACK_IMPORTED_MODULE_5__["default"]; });

/* harmony import */ var _ModalPortal_ModalPortal__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./ModalPortal/ModalPortal */ "./src/elements/ModalPortal/ModalPortal.jsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ModalPortal", function() { return _ModalPortal_ModalPortal__WEBPACK_IMPORTED_MODULE_6__["default"]; });

/* harmony import */ var _ModalsContainer_ModalsContainer__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./ModalsContainer/ModalsContainer */ "./src/elements/ModalsContainer/ModalsContainer.jsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ModalsContainer", function() { return _ModalsContainer_ModalsContainer__WEBPACK_IMPORTED_MODULE_7__["default"]; });

/** @module elements
 *  @desc Basic elements
 *  @since 2020.10.07, 02:12
 *  @changed 2020.12.24, 23:52
 */

/***/ }),

/***/ "./src/forms/FormBooleanHOC/FormBooleanHOC.jsx":
/*!*****************************************************!*\
  !*** ./src/forms/FormBooleanHOC/FormBooleanHOC.jsx ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/extends.js");
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/inheritsLoose */ "./node_modules/@babel/runtime/helpers/inheritsLoose.js");
/* harmony import */ var _babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _utils_configure__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../utils/configure */ "./src/utils/configure.js");
/* harmony import */ var _config_config__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../config/config */ "./src/config/config.js");
/* harmony import */ var _config_config__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_config_config__WEBPACK_IMPORTED_MODULE_7__);
 /** @module FormBooleanHOC
                                                                                                                                                                                                                                                                                *  @class FormBooleanHOC
                                                                                                                                                                                                                                                                                *  @since 2020.12.10, 22:17
                                                                                                                                                                                                                                                                                *  @changed 2021.01.20, 23:28
                                                                                                                                                                                                                                                                                */
/* eslint-disable react/require-default-props, react/jsx-max-depth */






var cnFormBooleanHOC = Object(_utils_configure__WEBPACK_IMPORTED_MODULE_6__["cn"])('FormBoolean');

var wrapFormBooleanHOC = function wrapFormBooleanHOC(WrappedComponent, params) {var _class, _temp;if (params === void 0) {params = {};}return _temp = _class = /*#__PURE__*/function (_React$Component) {_babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_2___default()(FormBoolean, _React$Component);














    // Lifecycle methods...

    function FormBoolean(props) {var _this;
      _this = _React$Component.call(this, props) || this;
      // this.formItemRef = React.createRef()
      _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_3___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_1___default()(_this), "updateValueWithState",

































































      function (state) {var _this$props =
        _this.props,onChange = _this$props.onChange,disabled = _this$props.disabled;
        if (!disabled && typeof onChange === 'function') {var
          value = state.value;
          onChange({ id: _this.id, value: value });
        }
      });_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_3___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_1___default()(_this), "handleChange",













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
        }, _config_config__WEBPACK_IMPORTED_MODULE_7___default.a.css.transitionTime);
      });_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_3___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_1___default()(_this), "setDomRef",

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
    _proto.render = function render() {var _this$props2 = this.props,id = _this$props2.id,disabled = _this$props2.disabled;var _this$state = this.state,active = _this$state.active,value = _this$state.value;var renderProps = { id: id, className: this.getClassName(), disabled: disabled, value: value, active: active, handleChange: this.handleChange, setDomRef: this.setDomRef, setInputDomRef: this.setInputDomRef };return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(WrappedComponent, _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({}, this.props, renderProps));
    };return FormBoolean;}(react__WEBPACK_IMPORTED_MODULE_4___default.a.Component), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_3___default()(_class, "propTypes", { id: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.string, name: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.string, value: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.bool, disabled: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.bool, onChange: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.func }), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_3___default()(_class, "defaultProps", { id: params.id, value: false }), _temp;};



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

/***/ "./src/forms/FormButton/FormButton-Themes.pcss":
/*!*****************************************************!*\
  !*** ./src/forms/FormButton/FormButton-Themes.pcss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/forms/FormButton/FormButton-Variations.pcss":
/*!*********************************************************!*\
  !*** ./src/forms/FormButton/FormButton-Variations.pcss ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/forms/FormButton/FormButton.jsx":
/*!*********************************************!*\
  !*** ./src/forms/FormButton/FormButton.jsx ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/extends.js");
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/inheritsLoose */ "./node_modules/@babel/runtime/helpers/inheritsLoose.js");
/* harmony import */ var _babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! redux */ "redux");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _utils_configure__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../utils/configure */ "./src/utils/configure.js");
/* harmony import */ var _helpers_ActionsContext__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../helpers/ActionsContext */ "./src/helpers/ActionsContext.jsx");
/* harmony import */ var _config_config__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../config/config */ "./src/config/config.js");
/* harmony import */ var _config_config__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_config_config__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _FormItemHOC_FormItemHOC__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../FormItemHOC/FormItemHOC */ "./src/forms/FormItemHOC/FormItemHOC.jsx");
/* harmony import */ var _elements_InlineIcon_InlineIcon__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../elements/InlineIcon/InlineIcon */ "./src/elements/InlineIcon/InlineIcon.jsx");
/* harmony import */ var _FormButton_pcss__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./FormButton.pcss */ "./src/forms/FormButton/FormButton.pcss");
/* harmony import */ var _FormButton_pcss__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_FormButton_pcss__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _FormButton_Variations_pcss__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./FormButton-Variations.pcss */ "./src/forms/FormButton/FormButton-Variations.pcss");
/* harmony import */ var _FormButton_Variations_pcss__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_FormButton_Variations_pcss__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _FormButton_Themes_pcss__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./FormButton-Themes.pcss */ "./src/forms/FormButton/FormButton-Themes.pcss");
/* harmony import */ var _FormButton_Themes_pcss__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_FormButton_Themes_pcss__WEBPACK_IMPORTED_MODULE_14__);
 /** @module FormButton
                                                                                                                                                                                                                                                                                *  @class FormButton
                                                                                                                                                                                                                                                                                *  @since 2020.07.20, 19:07
                                                                                                                                                                                                                                                                                *  @changed 2020.12.29, 20:57
                                                                                                                                                                                                                                                                                */




// import connect from 'react-redux/es/connect/connect';












var cnFormButton = Object(_utils_configure__WEBPACK_IMPORTED_MODULE_7__["cn"])('FormButton');var

FormButton = /*#__PURE__*/function (_React$PureComponent) {_babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_2___default()(FormButton, _React$PureComponent);























  // Lifecycle...

  function FormButton(props) {var _this;
    _this = _React$PureComponent.call(this, props) || this;_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_3___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_1___default()(_this), "focus",















































































    function () {var
      formItemNode = _this.props.formItemNode;
      // console.log('FormButton:focus');
      // debugger;
      formItemNode && formItemNode.focus && formItemNode.focus();
    });_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_3___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_1___default()(_this), "blur",
    function () {var
      formItemNode = _this.props.formItemNode;
      // console.log('FormButton:focus');
      // debugger;
      formItemNode && formItemNode.focus && formItemNode.focus();
    });_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_3___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_1___default()(_this), "onClick",

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
        _this.setState({ active: true });
        setTimeout(function () {
          if (_this.mounted) {
            _this.setState({ active: false });
          }
        }, _config_config__WEBPACK_IMPORTED_MODULE_9___default.a.css.transitionTime);
      }
    });_this.state = {};_this.mounted = true;if (props.setNodeRef) {props.setNodeRef(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_1___default()(_this));}return _this;}var _proto = FormButton.prototype;_proto.componentWillUnmount = function componentWillUnmount() {this.mounted = false;} // Helpers...
  ;_proto.hasIcon = function hasIcon() {var _this$props2 = this.props,icon = _this$props2.icon,hasIcon = _this$props2.hasIcon;return !!(hasIcon || icon);};_proto.hasText = function hasText() {var _this$props3 = this.props,hasText = _this$props3.hasText,onlyIcon = _this$props3.onlyIcon,children = _this$props3.children,text = _this$props3.text;return !onlyIcon && !!(hasText || text || children);};_proto.getClassName = function getClassName() {// TODO: Refactor properties!
    var _this$props4 = this.props,checked = _this$props4.checked,fullWidth = _this$props4.fullWidth,id = _this$props4.id,inline = _this$props4.inline,largeIcon = _this$props4.largeIcon,onDark = _this$props4.onDark,onlyIcon = _this$props4.onlyIcon,plain = _this$props4.plain,rightIcon = _this$props4.rightIcon,rotatedIcon = _this$props4.rotatedIcon,theme = _this$props4.theme,type = _this$props4.type,variation = _this$props4.variation;var active = this.state.active;var mods = { // plain,
      checked: checked, fullWidth: fullWidth, id: id, inline: inline, largeIcon: largeIcon, onDark: onDark, onlyIcon: onlyIcon, plain: plain, rightIcon: rightIcon, rotatedIcon: rotatedIcon, theme: theme, type: type, variation: variation, // State..
      active: active };var staticMods = { solid: true };var classList = cnFormButton(_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({}, staticMods, mods, { hasIcon: this.hasIcon(), hasText: this.hasText() }), [this.props.className]);return classList;} // Handlers...
  ; // Render...
  _proto.renderIcon = function renderIcon() {var hasIcon = this.hasIcon();if (hasIcon) {var
      icon = this.props.icon;
      if (icon && icon.type === _elements_InlineIcon_InlineIcon__WEBPACK_IMPORTED_MODULE_11__["default"]) {// Already InlineIcon
        // Extend with updated `className` props
        var props = _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({},
        icon.props, {
          className: cnFormButton('Icon', [icon.props.className]) });

        var newIcon = _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({}, icon, { props: props });
        return newIcon;
      }
      return /*#__PURE__*/(
        react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_elements_InlineIcon_InlineIcon__WEBPACK_IMPORTED_MODULE_11__["default"], { icon: icon, className: cnFormButton('Icon') }));

    }
  };_proto.

  renderText = function renderText() {
    var hasText = this.hasText(); // !onlyIcon && !!(hasText || text || children
    if (hasText) {var _this$props5 =
      this.props,text = _this$props5.text,children = _this$props5.children;
      return hasText && /*#__PURE__*/
      react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("span", { className: cnFormButton('Text') },
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
      ref: setDomRef, // Init ref for FormItemHOC
      tabIndex: -1 };


    var content = /*#__PURE__*/
    react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_4___default.a.Fragment, null,
    iconElem,
    textElem);



    var tagName = tag || 'div';
    var element = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(tagName, renderProps, content);
    return element;
  };return FormButton;}(react__WEBPACK_IMPORTED_MODULE_4___default.a.PureComponent /** @lends @FormButton.prototype */);



// export default FormItemHOC({ solid: true, hoverable: true, framed: true })(FormButton)
_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_3___default()(FormButton, "propTypes", { // TODO!!!
  // TODO: size: PropTypes.string, // Different form item sizes? (eg: md -- default, sm, xs, lg, xl, xxl)
  checked: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.bool, // FormItem: Checked state
  disabled: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.bool, fullWidth: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.bool, // Occupies all horizontal space
  hasIcon: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.bool, // Optional
  hasText: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.bool, // Optional
  icon: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.object]), // Icon component. May be as image resource loaded with `file/url-loader` as `FontAwesomeIcon` component.
  id: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.string, inline: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.bool, largeIcon: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.bool, // Large icon
  onClick: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.func, onDark: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.bool, // On dark background
  onlyIcon: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.bool, // Only icon
  plain: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.bool, // ??? Plain icon (no border & background -- if no style specified, looks as link)
  rightIcon: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.bool, // Icon placed at right side
  text: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.string, // Text content (may be passed as node children)
  theme: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.string // Button style (plain, default, primary, secondary, error, warn, success, info, etc -- some are in progress -- see styles file)
  // setDomRef: PropTypes.func,
  // setNodeRef: PropTypes.func,
});/* harmony default export */ __webpack_exports__["default"] = (Object(redux__WEBPACK_IMPORTED_MODULE_5__["compose"])(_helpers_ActionsContext__WEBPACK_IMPORTED_MODULE_8__["withActionsContext"], Object(_FormItemHOC_FormItemHOC__WEBPACK_IMPORTED_MODULE_10__["default"])({ solid: true, hoverable: true, framed: true }))(FormButton));

/***/ }),

/***/ "./src/forms/FormButton/FormButton.pcss":
/*!**********************************************!*\
  !*** ./src/forms/FormButton/FormButton.pcss ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/forms/FormButtonGroup/FormButtonGroup.jsx":
/*!*******************************************************!*\
  !*** ./src/forms/FormButtonGroup/FormButtonGroup.jsx ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/extends.js");
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/inheritsLoose */ "./node_modules/@babel/runtime/helpers/inheritsLoose.js");
/* harmony import */ var _babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _utils_configure__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../utils/configure */ "./src/utils/configure.js");
/* harmony import */ var _FormItemHOC_FormItemHOC__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../FormItemHOC/FormItemHOC */ "./src/forms/FormItemHOC/FormItemHOC.jsx");
/* harmony import */ var _FormGroup_FormGroup__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../FormGroup/FormGroup */ "./src/forms/FormGroup/FormGroup.jsx");
/* harmony import */ var _FormButtonGroup_pcss__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./FormButtonGroup.pcss */ "./src/forms/FormButtonGroup/FormButtonGroup.pcss");
/* harmony import */ var _FormButtonGroup_pcss__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_FormButtonGroup_pcss__WEBPACK_IMPORTED_MODULE_8__);
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

var cnFormButtonGroup = Object(_utils_configure__WEBPACK_IMPORTED_MODULE_5__["cn"])('FormButtonGroup');var

FormButtonGroup = /*#__PURE__*/function (_React$PureComponent) {_babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_1___default()(FormButtonGroup, _React$PureComponent);function FormButtonGroup() {return _React$PureComponent.apply(this, arguments) || this;}var _proto = FormButtonGroup.prototype;_proto.






  getClassName = function getClassName() {var _this = this;
    var mods = classNameModifiers.reduce(function (mods, id) {
      var val = _this.props[id];
      if (val != null) {var _extends2;
        return _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({}, mods, (_extends2 = {}, _extends2[id] = val, _extends2));
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
      react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_FormGroup_FormGroup__WEBPACK_IMPORTED_MODULE_7__["default"], _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({}, this.props, { className: this.getClassName() })));

  };return FormButtonGroup;}(react__WEBPACK_IMPORTED_MODULE_3___default.a.PureComponent /** @lends @FormButtonGroup.prototype */);_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2___default()(FormButtonGroup, "propTypes", { id: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.string // flow: PropTypes.bool,
});


/* harmony default export */ __webpack_exports__["default"] = (Object(_FormItemHOC_FormItemHOC__WEBPACK_IMPORTED_MODULE_6__["default"])(FormButtonGroup));

/***/ }),

/***/ "./src/forms/FormButtonGroup/FormButtonGroup.pcss":
/*!********************************************************!*\
  !*** ./src/forms/FormButtonGroup/FormButtonGroup.pcss ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/forms/FormDelim/FormDelim.jsx":
/*!*******************************************!*\
  !*** ./src/forms/FormDelim/FormDelim.jsx ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utils_configure__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils/configure */ "./src/utils/configure.js");
/* harmony import */ var _FormDelim_pcss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./FormDelim.pcss */ "./src/forms/FormDelim/FormDelim.pcss");
/* harmony import */ var _FormDelim_pcss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_FormDelim_pcss__WEBPACK_IMPORTED_MODULE_2__);
/** @module FormDelim
 *  @class FormDelim
 *  @since 2020.11.27, 12:52
 *  @changed 2020.11.27, 12:52
 */






var FormDelim = function FormDelim(props) {var
  id = props.id;
  var className = Object(_utils_configure__WEBPACK_IMPORTED_MODULE_1__["cn"])('FormDelim')({ id: id }, [props.className]);
  return /*#__PURE__*/(
    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { className: className }));

};

/* harmony default export */ __webpack_exports__["default"] = (FormDelim);

/***/ }),

/***/ "./src/forms/FormDelim/FormDelim.pcss":
/*!********************************************!*\
  !*** ./src/forms/FormDelim/FormDelim.pcss ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/forms/FormGroup/FormGroup.jsx":
/*!*******************************************!*\
  !*** ./src/forms/FormGroup/FormGroup.jsx ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/extends.js");
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/inheritsLoose */ "./node_modules/@babel/runtime/helpers/inheritsLoose.js");
/* harmony import */ var _babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _utils_configure__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../utils/configure */ "./src/utils/configure.js");
/* harmony import */ var _FormItemHOC_FormItemHOC__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../FormItemHOC/FormItemHOC */ "./src/forms/FormItemHOC/FormItemHOC.jsx");
/* harmony import */ var _FormGroup_pcss__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./FormGroup.pcss */ "./src/forms/FormGroup/FormGroup.pcss");
/* harmony import */ var _FormGroup_pcss__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_FormGroup_pcss__WEBPACK_IMPORTED_MODULE_7__);
 /** @module FormGroup
                                                                                                                                                                                              *  @class FormGroup
                                                                                                                                                                                              *  @since 2020.07.20, 19:07
                                                                                                                                                                                              *  @changed 2020.07.20, 19:07
                                                                                                                                                                                              */
/* eslint-disable react/require-default-props, react/no-unused-prop-types */



// import connect from 'react-redux/es/connect/connect'






var cnFormGroup = Object(_utils_configure__WEBPACK_IMPORTED_MODULE_5__["cn"])('FormGroup');var

FormGroup = /*#__PURE__*/function (_React$PureComponent) {_babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_1___default()(FormGroup, _React$PureComponent);
































  function FormGroup(props) {var _this;
    _this = _React$PureComponent.call(this, props) || this;
    _this.state = {};return _this;

  }var _proto = FormGroup.prototype;_proto.

  getClassName = function getClassName() {var _this2 = this;
    var mods = FormGroup.classNameModifiers.reduce(function (mods, id) {
      var val = _this2.state[id] != null ? _this2.state[id] : _this2.props[id];
      if (val != null) {var _extends2;
        return _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({}, mods, (_extends2 = {}, _extends2[id] = val, _extends2));
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
      react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", { id: id, className: this.getClassName() },
      content || children));


  };return FormGroup;}(react__WEBPACK_IMPORTED_MODULE_3___default.a.PureComponent /** @lends @FormGroup.prototype */);_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2___default()(FormGroup, "propTypes", { id: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.string, align: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.string, alignItems: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.string, background: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.string, flow: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.bool, prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.string]), noWrap: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.bool, fullWidth: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.bool, padded: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.bool, stack: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.bool, prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.string]) // name: PropTypes.string,
  // disabled: PropTypes.bool,
  // value: PropTypes.any,
  // valueType: PropTypes.string,
  // onChange: PropTypes.func,
});_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2___default()(FormGroup, "classNameModifiers", [// Basic element properties
'id', // Style-related modifiers...
'align', 'alignItems', 'background', 'flow', 'noWrap', 'fullWidth', 'padded', 'stack']);/* harmony default export */ __webpack_exports__["default"] = (Object(_FormItemHOC_FormItemHOC__WEBPACK_IMPORTED_MODULE_6__["default"])(FormGroup));

/***/ }),

/***/ "./src/forms/FormGroup/FormGroup.pcss":
/*!********************************************!*\
  !*** ./src/forms/FormGroup/FormGroup.pcss ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/forms/FormInputGroup/FormInputGroup.jsx":
/*!*****************************************************!*\
  !*** ./src/forms/FormInputGroup/FormInputGroup.jsx ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/extends.js");
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/inheritsLoose */ "./node_modules/@babel/runtime/helpers/inheritsLoose.js");
/* harmony import */ var _babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _utils_configure__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../utils/configure */ "./src/utils/configure.js");
/* harmony import */ var _FormItemHOC_FormItemHOC__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../FormItemHOC/FormItemHOC */ "./src/forms/FormItemHOC/FormItemHOC.jsx");
/* harmony import */ var _FormGroup_FormGroup__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../FormGroup/FormGroup */ "./src/forms/FormGroup/FormGroup.jsx");
/* harmony import */ var _FormInputGroup_pcss__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./FormInputGroup.pcss */ "./src/forms/FormInputGroup/FormInputGroup.pcss");
/* harmony import */ var _FormInputGroup_pcss__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_FormInputGroup_pcss__WEBPACK_IMPORTED_MODULE_8__);
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

var cnFormInputGroup = Object(_utils_configure__WEBPACK_IMPORTED_MODULE_5__["cn"])('FormInputGroup');var

FormInputGroup = /*#__PURE__*/function (_React$PureComponent) {_babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_1___default()(FormInputGroup, _React$PureComponent);function FormInputGroup() {return _React$PureComponent.apply(this, arguments) || this;}var _proto = FormInputGroup.prototype;_proto.









  getClassName = function getClassName() {var _this = this;
    var mods = classNameModifiers.reduce(function (mods, id) {
      var val = _this.props[id];
      if (val != null) {var _extends2;
        return _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({}, mods, (_extends2 = {}, _extends2[id] = val, _extends2));
      }
      return mods;
    }, {});
    return cnFormInputGroup(mods, [this.props.className]);
  }

  // Render...
  ;_proto.
  render = function render() {
    return /*#__PURE__*/(
      react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_FormGroup_FormGroup__WEBPACK_IMPORTED_MODULE_7__["default"], _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({}, this.props, { className: this.getClassName() })));

  };return FormInputGroup;}(react__WEBPACK_IMPORTED_MODULE_3___default.a.PureComponent /** @lends @FormInputGroup.prototype */);_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2___default()(FormInputGroup, "propTypes", { id: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.string // disabled: PropTypes.bool, // ???
  // align: PropTypes.string,
  // padded: PropTypes.bool,
  // flow: PropTypes.bool,
});/* harmony default export */ __webpack_exports__["default"] = (Object(_FormItemHOC_FormItemHOC__WEBPACK_IMPORTED_MODULE_6__["default"])(FormInputGroup));

/***/ }),

/***/ "./src/forms/FormInputGroup/FormInputGroup.pcss":
/*!******************************************************!*\
  !*** ./src/forms/FormInputGroup/FormInputGroup.pcss ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/forms/FormInteractiveItemHOC/FormInteractiveItemHOC.jsx":
/*!*********************************************************************!*\
  !*** ./src/forms/FormInteractiveItemHOC/FormInteractiveItemHOC.jsx ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/extends.js");
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/inheritsLoose */ "./node_modules/@babel/runtime/helpers/inheritsLoose.js");
/* harmony import */ var _babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _helpers_FormContext__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../helpers/FormContext */ "./src/helpers/FormContext.jsx");
 /** @module FormInteractiveItemHOC
                                                                                                                                                                                                                                                                                *  @class FormInteractiveItemHOC
                                                                                                                                                                                                                                                                                *  @since 2021.01.19, 18:21
                                                                                                                                                                                                                                                                                *  @changed 2021.01.19, 20:27
                                                                                                                                                                                                                                                                                */
/* eslint-disable react/require-default-props, react/jsx-max-depth, react/require-optimization */


// import { compose } from 'redux';

// import { cn } from 'utils/configure';


var wrapFormInteractiveItemHOC = function wrapFormInteractiveItemHOC(WrappedComponent, params) {if (params === void 0) {params = {};}var
  FormInteractiveItem = /*#__PURE__*/function (_React$Component) {_babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_2___default()(FormInteractiveItem, _React$Component);function FormInteractiveItem() {var _this;for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {args[_key] = arguments[_key];}_this = _React$Component.call.apply(_React$Component, [this].concat(args)) || this;_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_3___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_1___default()(_this), "registeredKeyPressHandlers",



















      []);_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_3___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_1___default()(_this), "onKeyPress",



























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
      });_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_3___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_1___default()(_this), "registerKeyPressHandler",

      function (handler) {
        _this.registeredKeyPressHandlers.push(handler);
      });_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_3___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_1___default()(_this), "setDomRef",

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
        react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(WrappedComponent, _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({},
        this.props,
        renderProps)));



    };return FormInteractiveItem;}(react__WEBPACK_IMPORTED_MODULE_4___default.a.Component);_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_3___default()(FormInteractiveItem, "propTypes", { id: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.string, // name: PropTypes.string,
    // value: PropTypes.bool,
    // disabled: PropTypes.bool,
    setDomRef: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.func, onKeyPress: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.func, onEnterPressed: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.func, onEscPressed: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.func, onSpacePressed: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.func, // FormContext Provider
    formContextNode: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.shape({ onInputEnterPressed: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.func }) });_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_3___default()(FormInteractiveItem, "defaultProps", { id: params.id });return Object(_helpers_FormContext__WEBPACK_IMPORTED_MODULE_6__["withFormContext"])(FormInteractiveItem);};

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
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/inheritsLoose */ "./node_modules/@babel/runtime/helpers/inheritsLoose.js");
/* harmony import */ var _babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _utils_configure__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../utils/configure */ "./src/utils/configure.js");
/* harmony import */ var _FormItemHOC_FormItemHOC__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../FormItemHOC/FormItemHOC */ "./src/forms/FormItemHOC/FormItemHOC.jsx");
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ "@fortawesome/react-fontawesome");
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _FormItemDummy_pcss__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./FormItemDummy.pcss */ "./src/forms/FormItemDummy/FormItemDummy.pcss");
/* harmony import */ var _FormItemDummy_pcss__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_FormItemDummy_pcss__WEBPACK_IMPORTED_MODULE_7__);
 /** @module FormItemDummy
                                                                                                                                                                                                                          *  @class FormItemDummy
                                                                                                                                                                                                                          *  @desc Demo form item
                                                                                                                                                                                                                          *  @since 2020.07.20, 19:07
                                                                                                                                                                                                                          *  @changed 2020.07.20, 19:07
                                                                                                                                                                                                                          */


// import connect from 'react-redux/es/connect/connect'








var cnFormItemDummy = Object(_utils_configure__WEBPACK_IMPORTED_MODULE_4__["cn"])('FormItemDummy');var

FormItemDummy = /*#__PURE__*/function (_React$PureComponent) {_babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_1___default()(FormItemDummy, _React$PureComponent);

  function FormItemDummy(props) {var _this;
    _this = _React$PureComponent.call(this, props) || this;
    // const {
    //   hoverable,
    //   clickable,
    //   checked,
    // } = props
    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_0___default()(_this), "onClick",




































































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
    var iconImg = icon && icon.iconName ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_6__["FontAwesomeIcon"], { className: cnFormItemDummy('IconImg'), icon: icon }) : icon;
    var iconElem = hasIcon && /*#__PURE__*/
    react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("span", { key: "Icon", className: cnFormItemDummy('Icon') },
    iconImg);



    // Text element
    var textElem = hasText && /*#__PURE__*/
    react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("span", { key: "Text", className: cnFormItemDummy('Text') },
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
    var element = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(tagName, renderProps, content);
    return element;
  };return FormItemDummy;}(react__WEBPACK_IMPORTED_MODULE_3___default.a.PureComponent /** @lends @FormItemDummy.prototype */);



/* harmony default export */ __webpack_exports__["default"] = (Object(_FormItemHOC_FormItemHOC__WEBPACK_IMPORTED_MODULE_5__["default"])(FormItemDummy));

/***/ }),

/***/ "./src/forms/FormItemDummy/FormItemDummy.pcss":
/*!****************************************************!*\
  !*** ./src/forms/FormItemDummy/FormItemDummy.pcss ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/forms/FormItemHOC/FormItemHOC.jsx":
/*!***********************************************!*\
  !*** ./src/forms/FormItemHOC/FormItemHOC.jsx ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/inheritsLoose */ "./node_modules/@babel/runtime/helpers/inheritsLoose.js");
/* harmony import */ var _babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/extends.js");
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _utils_configure__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../utils/configure */ "./src/utils/configure.js");
/* harmony import */ var _FormItemHOC_pcss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./FormItemHOC.pcss */ "./src/forms/FormItemHOC/FormItemHOC.pcss");
/* harmony import */ var _FormItemHOC_pcss__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_FormItemHOC_pcss__WEBPACK_IMPORTED_MODULE_6__);
 /** @module FormItemHOC
                                                                                                                                                                                                                                                                                *  @class FormItemHOC
                                                                                                                                                                                                                                                                                *  @since 2019.09.25, 19:18
                                                                                                                                                                                                                                                                                *  @changed 2020.06.04, 22:58
                                                                                                                                                                                                                                                                                */






var cnFormItem = Object(_utils_configure__WEBPACK_IMPORTED_MODULE_5__["cn"])('FormItem');

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

var deriveState = function deriveState() {for (var _len = arguments.length, sets = new Array(_len), _key = 0; _key < _len; _key++) {sets[_key] = arguments[_key];}
  return props2State.reduce(function (state, id) {
    var val = sets.reduce(function (val, set) {
      return set[id] != null /* && val == null */ ? set[id] : val;
    }, null);
    if (val != null) {var _extends2;
      return _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_3___default()({}, state, (_extends2 = {}, _extends2[id] = val, _extends2));
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

var wrapFormItemHOC = function wrapFormItemHOC(WrappedComponent, params) {var _temp;if (params === void 0) {params = {};}return _temp = /*#__PURE__*/function (_React$Component) {_babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_1___default()(FormItem, _React$Component);var _proto = FormItem.prototype;

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
      _this = _React$Component.call(this, props) || this;_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_0___default()(_this), "focus",




































































      function () {var _assertThisInitialize = _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_0___default()(_this),
        formItemDomRef = _assertThisInitialize.formItemDomRef;
        // console.log('FormItem:focus');
        // debugger;
        formItemDomRef && formItemDomRef.focus && formItemDomRef.focus();
      });_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_0___default()(_this), "blur",
      function () {var _assertThisInitialize2 = _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_0___default()(_this),
        formItemDomRef = _assertThisInitialize2.formItemDomRef;
        // console.log('FormItem:focus');
        // debugger;
        formItemDomRef && formItemDomRef.focus && formItemDomRef.focus();
      });_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_0___default()(_this), "handleMouseOver",

      function () {
        var disabled = _this.getStateOrPropOrParam('disabled');
        var hoverable = _this.getStateOrPropOrParam('hoverable');
        // console.log('FormItemHOC:handleMouseOver');
        if (hoverable && !disabled) {
          _this.setState({ hovered: true });
        }
      });_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_0___default()(_this), "handleMouseOut",
      function () {
        var disabled = _this.getStateOrPropOrParam('disabled');
        var hoverable = _this.getStateOrPropOrParam('hoverable');
        // console.log('FormItemHOC:handleMouseOut');
        if (hoverable && !disabled) {
          _this.setState({ hovered: false });
        }
      });_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_0___default()(_this), "handleFocusIn",

      function () {
        var disabled = _this.getStateOrPropOrParam('disabled');
        var focusable = _this.getStateOrPropOrParam('focusable');
        if (focusable && !disabled) {
          // console.log('FormItemHOC:handleFocusIn');
          _this.setState({ focused: true });
        }
      });_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_0___default()(_this), "handleFocusOut",
      function () {
        var disabled = _this.getStateOrPropOrParam('disabled');
        var focusable = _this.getStateOrPropOrParam('focusable');
        if (focusable && !disabled) {
          // console.log('FormItemHOC:handleFocusOut');
          _this.setState({ focused: false });
        }
      });_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_0___default()(_this), "setDomRef",

      function (domRef) {// Children dom node receiver
        _this.formItemDomRef = domRef;var
        setDomRef = _this.props.setDomRef;
        if (typeof setDomRef === 'function') {
          setDomRef(domRef);
        }
        // domRef && domRef.focus && domRef.focus() // ???
      });_this.state = deriveState(defaultState, params, props); // deriveStateFromProps(props, defaultState)
      _this.id = props.id || params.id; // this.formItemRef = React.createRef()
      return _this;}FormItem.getDerivedStateFromProps = function getDerivedStateFromProps(props, state) {// TODO: Update event subscriptions if `hoverable` flag changed?
      return deriveState(params, props, state); // deriveStateFromProps(props, state)
    };_proto.componentDidMount = function componentDidMount() {// const { formItemRef: { current } = {} } = this
      var formItemDomRef = this.formItemDomRef;if (formItemDomRef && formItemDomRef.addEventListener) {var hoverable = this.getStateOrPropOrParam('hoverable');var focusable = this.getStateOrPropOrParam('focusable');if (hoverable && !this.hoverableInited) {this.hoverableInited = true;formItemDomRef.addEventListener('mouseover', this.handleMouseOver);formItemDomRef.addEventListener('mouseout', this.handleMouseOut);}if (focusable && !this.focusableInited) {this.focusableInited = true; // formItemDomRef.addEventListener('focus', this.handleFocusIn);
          formItemDomRef.addEventListener('focus', this.handleFocusIn);formItemDomRef.addEventListener('blur', this.handleFocusOut);formItemDomRef.addEventListener('focusin', this.handleFocusIn);formItemDomRef.addEventListener('focusout', this.handleFocusOut); // console.log('FormItemHOC:componentDidMount: focus event handlers added');
          this.focus = function () {// Focus handler
            formItemDomRef && formItemDomRef.focus && formItemDomRef.focus();};}}};_proto.componentWillUnmount = function componentWillUnmount() {var formItemDomRef = this.formItemDomRef;if (formItemDomRef && formItemDomRef.removeEventListener) {// const hoverable = this.getStateOrPropOrParam('hoverable')
        // const focusable = this.getStateOrPropOrParam('focusable')
        if (this.hoverableInited) {formItemDomRef.removeEventListener('mouseover', this.handleMouseOver);formItemDomRef.removeEventListener('mouseout', this.handleMouseOut);}if (this.focusableInited) {formItemDomRef.removeEventListener('focus', this.handleFocusIn);formItemDomRef.removeEventListener('blur', this.handleFocusOut);formItemDomRef.removeEventListener('focusin', this.handleFocusIn);formItemDomRef.removeEventListener('focusout', this.handleFocusOut);}}};_proto.getClassName = function getClassName() {var _this2 = this; // Collect modifier values from state or props
      var mods = classNameModifiers.reduce(function (mods, id) {var val = _this2.getStateOrPropOrParam(id); // (this.state[id] != null) ? this.state[id] : this.props[id]
        if (val != null) {mods[id] = val;}return mods;}, {});return cnFormItem(mods, [this.props.className]);} // Handlers...
    ;_proto.render = function render() {var _this$state = this.state,hovered = _this$state.hovered,focused = _this$state.focused;var renderProps = { hovered: hovered, focused: focused, formItemNode: this, className: this.getClassName(), setDomRef: this.setDomRef // Children dom node receiver
        // formItemDomRef: this.formItemDomRef,
      };var focusable = this.getStateOrPropOrParam('focusable');
      if (focusable) {
        renderProps.tabIndex = 0;
      }
      return /*#__PURE__*/(
        react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(WrappedComponent, _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_3___default()({},
        this.props,
        renderProps)));


    };return FormItem;}(react__WEBPACK_IMPORTED_MODULE_4___default.a.Component), _temp;};



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

/***/ "./src/forms/FormItemHOC/FormItemHOC.pcss":
/*!************************************************!*\
  !*** ./src/forms/FormItemHOC/FormItemHOC.pcss ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/forms/FormLabel/FormLabel.jsx":
/*!*******************************************!*\
  !*** ./src/forms/FormLabel/FormLabel.jsx ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/inheritsLoose */ "./node_modules/@babel/runtime/helpers/inheritsLoose.js");
/* harmony import */ var _babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _utils_configure__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../utils/configure */ "./src/utils/configure.js");
/* harmony import */ var _FormItemHOC_FormItemHOC__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../FormItemHOC/FormItemHOC */ "./src/forms/FormItemHOC/FormItemHOC.jsx");
/* harmony import */ var _FormLabel_pcss__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./FormLabel.pcss */ "./src/forms/FormLabel/FormLabel.pcss");
/* harmony import */ var _FormLabel_pcss__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_FormLabel_pcss__WEBPACK_IMPORTED_MODULE_7__);
 /** @module FormLabel
                                                                                                                                                                                                                          *  @class FormLabel
                                                                                                                                                                                                                          *  @since 2020.10.06, 23:45
                                                                                                                                                                                                                          *  @changed 2020.10.06, 23:46
                                                                                                                                                                                                                          */
/* eslint-disable react/require-default-props */



// import connect from 'react-redux/es/connect/connect'






var cnFormLabel = Object(_utils_configure__WEBPACK_IMPORTED_MODULE_5__["cn"])('FormLabel');var

FormLabel = /*#__PURE__*/function (_React$PureComponent) {_babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_1___default()(FormLabel, _React$PureComponent);function FormLabel() {var _this;for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {args[_key] = arguments[_key];}_this = _React$PureComponent.call.apply(_React$PureComponent, [this].concat(args)) || this;_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_0___default()(_this), "onClick",























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
      react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", renderProps, /*#__PURE__*/
      react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("label", {
        className: cnFormLabel('Control', ['FormItem-Control']),
        id: id,
        name: name,
        disabled: disabled,
        htmlFor: htmlFor,
        title: title },

      children || text || title)));



  };return FormLabel;}(react__WEBPACK_IMPORTED_MODULE_3___default.a.PureComponent /** @lends @FormLabel.prototype */);_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2___default()(FormLabel, "propTypes", { id: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.string });



/* harmony default export */ __webpack_exports__["default"] = (Object(_FormItemHOC_FormItemHOC__WEBPACK_IMPORTED_MODULE_6__["default"])({ hoverable: true, solid: true })(FormLabel));

/***/ }),

/***/ "./src/forms/FormLabel/FormLabel.pcss":
/*!********************************************!*\
  !*** ./src/forms/FormLabel/FormLabel.pcss ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/forms/FormLabeledGroup/FormLabeledGroup.jsx":
/*!*********************************************************!*\
  !*** ./src/forms/FormLabeledGroup/FormLabeledGroup.jsx ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _FormGroup_FormGroup__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../FormGroup/FormGroup */ "./src/forms/FormGroup/FormGroup.jsx");
/* harmony import */ var _FormLabel_FormLabel__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../FormLabel/FormLabel */ "./src/forms/FormLabel/FormLabel.jsx");
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
    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_FormGroup_FormGroup__WEBPACK_IMPORTED_MODULE_1__["default"], {
      className: className,
      fullWidth: fullWidth,
      innerFlex: innerFlex,
      flow: flow,
      id: id }, /*#__PURE__*/

    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_FormLabel_FormLabel__WEBPACK_IMPORTED_MODULE_2__["default"], {
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
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/extends.js");
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/inheritsLoose */ "./node_modules/@babel/runtime/helpers/inheritsLoose.js");
/* harmony import */ var _babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _utils_configure__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../utils/configure */ "./src/utils/configure.js");
/* harmony import */ var _FormTextInput_FormTextInput__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../FormTextInput/FormTextInput */ "./src/forms/FormTextInput/FormTextInput.jsx");
/* harmony import */ var _FormPasswordInput_pcss__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./FormPasswordInput.pcss */ "./src/forms/FormPasswordInput/FormPasswordInput.pcss");
/* harmony import */ var _FormPasswordInput_pcss__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_FormPasswordInput_pcss__WEBPACK_IMPORTED_MODULE_7__);
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



var cnFormPasswordInput = Object(_utils_configure__WEBPACK_IMPORTED_MODULE_5__["cn"])('FormPasswordInput');var

FormPasswordInput = /*#__PURE__*/function (_React$PureComponent) {_babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_2___default()(FormPasswordInput, _React$PureComponent);

  // Lifecycle...

  function FormPasswordInput(props) {var _this;
    _this = _React$PureComponent.call(this, props) || this;_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_3___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_1___default()(_this), "onTypeIconClick",


































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
      react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_FormTextInput_FormTextInput__WEBPACK_IMPORTED_MODULE_6__["default"], _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({
        iconTitle: "Show/hide password",
        onIconClick: this.onTypeIconClick },
      this.props, {
        type: type,
        icon: icon })));



  };return FormPasswordInput;}(react__WEBPACK_IMPORTED_MODULE_4___default.a.PureComponent /** @lends @FormPasswordInput.prototype */);



/* // propTypes
                                                                                                 * FormPasswordInput.propTypes = {
                                                                                                 *   id: PropTypes.string,
                                                                                                 * }
                                                                                                 */
/* harmony default export */ __webpack_exports__["default"] = (/* FormItemHOC({ hoverable: true, framed: true })( */FormPasswordInput);

/***/ }),

/***/ "./src/forms/FormPasswordInput/FormPasswordInput.pcss":
/*!************************************************************!*\
  !*** ./src/forms/FormPasswordInput/FormPasswordInput.pcss ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/forms/FormRadio/FormRadio-Themes.pcss":
/*!***************************************************!*\
  !*** ./src/forms/FormRadio/FormRadio-Themes.pcss ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/forms/FormRadio/FormRadio.jsx":
/*!*******************************************!*\
  !*** ./src/forms/FormRadio/FormRadio.jsx ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/inheritsLoose */ "./node_modules/@babel/runtime/helpers/inheritsLoose.js");
/* harmony import */ var _babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _utils_configure__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../utils/configure */ "./src/utils/configure.js");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! redux */ "redux");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _FormItemHOC_FormItemHOC__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../FormItemHOC/FormItemHOC */ "./src/forms/FormItemHOC/FormItemHOC.jsx");
/* harmony import */ var _FormBooleanHOC_FormBooleanHOC__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../FormBooleanHOC/FormBooleanHOC */ "./src/forms/FormBooleanHOC/FormBooleanHOC.jsx");
/* harmony import */ var _FormInteractiveItemHOC_FormInteractiveItemHOC__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../FormInteractiveItemHOC/FormInteractiveItemHOC */ "./src/forms/FormInteractiveItemHOC/FormInteractiveItemHOC.jsx");
/* harmony import */ var _FormRadio_pcss__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./FormRadio.pcss */ "./src/forms/FormRadio/FormRadio.pcss");
/* harmony import */ var _FormRadio_pcss__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_FormRadio_pcss__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _FormRadio_Themes_pcss__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./FormRadio-Themes.pcss */ "./src/forms/FormRadio/FormRadio-Themes.pcss");
/* harmony import */ var _FormRadio_Themes_pcss__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_FormRadio_Themes_pcss__WEBPACK_IMPORTED_MODULE_10__);
 /** @module FormRadio
                                                                                                                                        *  @class FormRadio
                                                                                                                                        *  @since 2020.04.02, 14:53
                                                                                                                                        *  @changed 2021.01.20, 23:28
                                                                                                                                        */
/* eslint-disable react/require-default-props, react/jsx-max-depth */






// import FormItem from '../FormItem'



// import { withFormContext } from 'helpers/FormContext';

// import FormFocusableItemHOC from 'forms/FormFocusableItemHOC';




var cnFormRadio = Object(_utils_configure__WEBPACK_IMPORTED_MODULE_4__["cn"])('FormRadio');var

FormRadio = /*#__PURE__*/function (_React$PureComponent) {_babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_0___default()(FormRadio, _React$PureComponent);function FormRadio() {return _React$PureComponent.apply(this, arguments) || this;}var _proto = FormRadio.prototype;













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
      react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("input", inputProps));

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
      react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", renderProps, /*#__PURE__*/
      react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
        className: cnFormRadio('Control', ['FormItem-Control']),
        disabled: disabled }, /*#__PURE__*/

      react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("span", { className: cnFormRadio('Frame') }, /*#__PURE__*/
      react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("span", { className: cnFormRadio('Actor') })),

      this.renderInput())));



  };return FormRadio;}(react__WEBPACK_IMPORTED_MODULE_2___default.a.PureComponent /** @lends @FormRadio.prototype */);



// export default FormItemHOC({ hoverable: true, focusable: true, framed: false })(FormRadio)
_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default()(FormRadio, "propTypes", { id: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string, name: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string, value: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.bool, disabled: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.bool, onChange: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.func });_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default()(FormRadio, "defaultProps", { value: false });/* harmony default export */ __webpack_exports__["default"] = (Object(redux__WEBPACK_IMPORTED_MODULE_5__["compose"])(
// withFormContext,
_FormInteractiveItemHOC_FormInteractiveItemHOC__WEBPACK_IMPORTED_MODULE_8__["default"],
// FormFocusableItemHOC,
Object(_FormItemHOC_FormItemHOC__WEBPACK_IMPORTED_MODULE_6__["default"])({ hoverable: true, focusable: true, framed: false }),
_FormBooleanHOC_FormBooleanHOC__WEBPACK_IMPORTED_MODULE_7__["default"])(
FormRadio));

/***/ }),

/***/ "./src/forms/FormRadio/FormRadio.pcss":
/*!********************************************!*\
  !*** ./src/forms/FormRadio/FormRadio.pcss ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/forms/FormSelect/FormSelect.jsx":
/*!*********************************************!*\
  !*** ./src/forms/FormSelect/FormSelect.jsx ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/inheritsLoose */ "./node_modules/@babel/runtime/helpers/inheritsLoose.js");
/* harmony import */ var _babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _utils_configure__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../utils/configure */ "./src/utils/configure.js");
/* harmony import */ var _FormItemHOC_FormItemHOC__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../FormItemHOC/FormItemHOC */ "./src/forms/FormItemHOC/FormItemHOC.jsx");
/* harmony import */ var _elements_ModalPopup_ModalPopup__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../elements/ModalPopup/ModalPopup */ "./src/elements/ModalPopup/ModalPopup.jsx");
/* harmony import */ var _elements_Menu_Menu__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../elements/Menu/Menu */ "./src/elements/Menu/Menu.jsx");
/* harmony import */ var _FormButton_FormButton__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../FormButton/FormButton */ "./src/forms/FormButton/FormButton.jsx");
/* harmony import */ var _FormSelect_pcss__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./FormSelect.pcss */ "./src/forms/FormSelect/FormSelect.pcss");
/* harmony import */ var _FormSelect_pcss__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_FormSelect_pcss__WEBPACK_IMPORTED_MODULE_10__);
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



var cnFormSelect = Object(_utils_configure__WEBPACK_IMPORTED_MODULE_5__["cn"])('FormSelect');var

FormSelect = /*#__PURE__*/function (_React$PureComponent) {_babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_1___default()(FormSelect, _React$PureComponent);

















  // Lifecycle methods...

  function FormSelect(props) {var _this;
    _this = _React$PureComponent.call(this, props) || this;
    // this.formItemRef = React.createRef()
    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_0___default()(_this), "onControlClick",
































    function (params) {var
      onControlClick = _this.props.onControlClick;
      if (typeof onControlClick === 'function') {
        onControlClick(params);
      }
    });_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_0___default()(_this), "onMenuItemClick",
    function (params) {var _this$props =
      _this.props,closeOnSelect = _this$props.closeOnSelect,onMenuItemClick = _this$props.onMenuItemClick;
      if (typeof onMenuItemClick === 'function') {
        onMenuItemClick(params);
      }
      if (closeOnSelect && _this.popupNode) {
        _this.popupNode.close();
      }
    });_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_0___default()(_this), "onMenuChange",
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
    });_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_0___default()(_this), "setPopupRef",

    function (node) {var
      setPopupNodeRef = _this.props.setPopupNodeRef;
      _this.popupNode = node;
      if (setPopupNodeRef && typeof setPopupNodeRef === 'function') {
        setPopupNodeRef(node);
      }
    });_this.id = props.id || props.inputId || props.name;var _checked = props.checked,_value = props.value;_this.state = { checked: Array.isArray(_checked) ? _checked : _value && [_value] || [] }; // if (props.setNodeRef) {
    //   props.setNodeRef(this);
    // }
    return _this;} // Helper methods...
  var _proto = FormSelect.prototype;_proto.getClassName = function getClassName() {var id = this.id;var classList = cnFormSelect({ id: id }, [this.props.className]);return classList;};_proto.getItemsText = function getItemsText() {var checked = this.state.checked;var options = this.props.options;var text = Array.isArray(options) && Array.isArray(checked) && options.map(function (_ref) {var val = _ref.val,text = _ref.text;if (checked.includes(val)) {return text;}}).filter(Boolean).join(', ');return text;} // Handlers...
  ; // Render...
  _proto.renderControlContent = function renderControlContent() {var _this$props3 =





    this.props,text = _this$props3.text,placeholder = _this$props3.placeholder,title = _this$props3.title,controlButtonTheme = _this$props3.controlButtonTheme,_this$props3$fullWidt = _this$props3.fullWidth,fullWidth = _this$props3$fullWidt === void 0 ? true : _this$props3$fullWidt,disabled = _this$props3.disabled;
    var buttonText = this.getItemsText() || placeholder || text;
    return /*#__PURE__*/(
      react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_FormButton_FormButton__WEBPACK_IMPORTED_MODULE_9__["default"], {
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
      react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_elements_Menu_Menu__WEBPACK_IMPORTED_MODULE_8__["default"], {
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








    this.props,id = _this$props5.id,disabled = _this$props5.disabled,title = _this$props5.title,open = _this$props5.open,fullWidth = _this$props5.fullWidth,setDomRef = _this$props5.setDomRef;

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
      ref: this.setPopupRef,
      setDomRef: setDomRef };


    return /*#__PURE__*/(
      react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_elements_ModalPopup_ModalPopup__WEBPACK_IMPORTED_MODULE_7__["default"], popupProps));


  };return FormSelect;}(react__WEBPACK_IMPORTED_MODULE_3___default.a.PureComponent /** @lends @FormSelect.prototype */);_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2___default()(FormSelect, "propTypes", { // value: PropTypes.oneOfType([ PropTypes.string, PropTypes.number, PropTypes.arrayOf(PropTypes.oneOfType([ PropTypes.string, PropTypes.number ])) ]),
  checked: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.number])), disabled: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.bool, fullWidth: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.bool, id: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.string, onChange: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.func, open: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.bool, options: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.shape({ val: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.number]), text: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.string })), placeholder: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.string, text: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.string, value: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.number]), setDomRef: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.func // setNodeRef: PropTypes.func,
});

/* harmony default export */ __webpack_exports__["default"] = (Object(_FormItemHOC_FormItemHOC__WEBPACK_IMPORTED_MODULE_6__["default"])({ solid: true, hoverable: true })(FormSelect));

/***/ }),

/***/ "./src/forms/FormSelect/FormSelect.pcss":
/*!**********************************************!*\
  !*** ./src/forms/FormSelect/FormSelect.pcss ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/forms/FormSpacer/FormSpacer.jsx":
/*!*********************************************!*\
  !*** ./src/forms/FormSpacer/FormSpacer.jsx ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utils_configure__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils/configure */ "./src/utils/configure.js");
/* harmony import */ var _FormSpacer_pcss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./FormSpacer.pcss */ "./src/forms/FormSpacer/FormSpacer.pcss");
/* harmony import */ var _FormSpacer_pcss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_FormSpacer_pcss__WEBPACK_IMPORTED_MODULE_2__);
/** @module FormSpacer
 *  @class FormSpacer
 *  @since 2020.11.27, 12:52
 *  @changed 2020.11.27, 12:52
 */






var FormSpacer = function FormSpacer(props) {var
  id = props.id;
  var className = Object(_utils_configure__WEBPACK_IMPORTED_MODULE_1__["cn"])('FormSpacer')({ id: id }, [props.className]);
  return /*#__PURE__*/(
    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { className: className }));

};

/* harmony default export */ __webpack_exports__["default"] = (FormSpacer);

/***/ }),

/***/ "./src/forms/FormSpacer/FormSpacer.pcss":
/*!**********************************************!*\
  !*** ./src/forms/FormSpacer/FormSpacer.pcss ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/forms/FormText/FormText.jsx":
/*!*****************************************!*\
  !*** ./src/forms/FormText/FormText.jsx ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/inheritsLoose */ "./node_modules/@babel/runtime/helpers/inheritsLoose.js");
/* harmony import */ var _babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _utils_configure__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../utils/configure */ "./src/utils/configure.js");
/* harmony import */ var _FormItemHOC_FormItemHOC__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../FormItemHOC/FormItemHOC */ "./src/forms/FormItemHOC/FormItemHOC.jsx");
/* harmony import */ var _FormText_pcss__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./FormText.pcss */ "./src/forms/FormText/FormText.pcss");
/* harmony import */ var _FormText_pcss__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_FormText_pcss__WEBPACK_IMPORTED_MODULE_7__);
 /** @module FormText
                                                                                                                                                                                                                          *  @class FormText
                                                                                                                                                                                                                          *  @since 2020.10.29, 21:25
                                                                                                                                                                                                                          *  @changed 2020.10.29, 22:42
                                                                                                                                                                                                                          */
/* eslint-disable react/require-default-props */



// import connect from 'react-redux/es/connect/connect'






var cnFormText = Object(_utils_configure__WEBPACK_IMPORTED_MODULE_5__["cn"])('FormText');var

FormText = /*#__PURE__*/function (_React$PureComponent) {_babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_1___default()(FormText, _React$PureComponent);function FormText() {var _this;for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {args[_key] = arguments[_key];}_this = _React$PureComponent.call.apply(_React$PureComponent, [this].concat(args)) || this;_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_0___default()(_this), "onClick",

















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
      react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", renderProps,
      children || text || title));



  };return FormText;}(react__WEBPACK_IMPORTED_MODULE_3___default.a.PureComponent /** @lends @FormText.prototype */);_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2___default()(FormText, "propTypes", { id: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.string });



/* harmony default export */ __webpack_exports__["default"] = (Object(_FormItemHOC_FormItemHOC__WEBPACK_IMPORTED_MODULE_6__["default"])({ hoverable: true })(FormText));

/***/ }),

/***/ "./src/forms/FormText/FormText.pcss":
/*!******************************************!*\
  !*** ./src/forms/FormText/FormText.pcss ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/forms/FormTextInput/FormTextInput.jsx":
/*!***************************************************!*\
  !*** ./src/forms/FormTextInput/FormTextInput.jsx ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/inheritsLoose */ "./node_modules/@babel/runtime/helpers/inheritsLoose.js");
/* harmony import */ var _babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! redux */ "redux");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _utils_configure__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../utils/configure */ "./src/utils/configure.js");
/* harmony import */ var _elements_InlineIcon_InlineIcon__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../elements/InlineIcon/InlineIcon */ "./src/elements/InlineIcon/InlineIcon.jsx");
/* harmony import */ var _FormItemHOC_FormItemHOC__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../FormItemHOC/FormItemHOC */ "./src/forms/FormItemHOC/FormItemHOC.jsx");
/* harmony import */ var _FormInteractiveItemHOC_FormInteractiveItemHOC__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../FormInteractiveItemHOC/FormInteractiveItemHOC */ "./src/forms/FormInteractiveItemHOC/FormInteractiveItemHOC.jsx");
/* harmony import */ var _FormTextInput_pcss__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./FormTextInput.pcss */ "./src/forms/FormTextInput/FormTextInput.pcss");
/* harmony import */ var _FormTextInput_pcss__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_FormTextInput_pcss__WEBPACK_IMPORTED_MODULE_10__);
 /** @module FormTextInput
                                                                                                                                                                                                                          *  @class FormTextInput
                                                                                                                                                                                                                          *  @since 2020.10.07, 00:20
                                                                                                                                                                                                                          *  @changed 2021.01.19, 16:08
                                                                                                                                                                                                                          */
/* eslint-disable react/require-default-props */









// import { withFormContext } from 'helpers/FormContext';




var cnFormTextInput = Object(_utils_configure__WEBPACK_IMPORTED_MODULE_6__["cn"])('FormTextInput');var

FormTextInput = /*#__PURE__*/function (_React$PureComponent) {_babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_1___default()(FormTextInput, _React$PureComponent);

  // Lifecycle...

  function FormTextInput(props) {var _this;
    _this = _React$PureComponent.call(this, props) || this;_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_0___default()(_this), "updateValueWithState",
















































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
    });_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_0___default()(_this), "handleChange",




















    function (event) {var
      target = event.target;var
      value = target.value;
      _this.setState({ value: value });
    });_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_0___default()(_this), "onClearClick",

    function () {
      _this.setState({ value: '' });
    });_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_0___default()(_this), "onFocusIn",

    function () {
      _this.mounted && _this.setState({ focused: true });
      // window.addEventListener('keypress', this.onKeyPress);
      if (typeof _this.props.onFocusIn === 'function') {// Propogate event if handler passed
        _this.props.onFocusIn(event);
      }
    });_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_0___default()(_this), "onFocusOut",
    function (event) {
      _this.mounted && _this.setState({ focused: false });
      // window.removeEventListener('keypress', this.onKeyPress);
      if (typeof _this.props.onFocusOut === 'function') {// Propogate event if handler passed
        _this.props.onFocusOut(event);
      }
    });var _this$props$value = _this.props.value,_value = _this$props$value === void 0 ? '' : _this$props$value;_this.state = { value: _value };return _this;} /* // UNUSED: componentDidMount
                                                                                                                                                                * componentDidMount() {
                                                                                                                                                                *   const { registerKeyPressHandler } = this.props;
                                                                                                                                                                *   if (typeof registerKeyPressHandler === 'function') { // From `FormInteractiveItemHOC`
                                                                                                                                                                *     // Register callback with `FormInteractiveItemHOC`
                                                                                                                                                                *     this.interactiveKeyPressHandler && registerKeyPressHandler(this.interactiveKeyPressHandler);
                                                                                                                                                                *   }
                                                                                                                                                                * }
                                                                                                                                                                */var _proto = FormTextInput.prototype;_proto.componentDidUpdate = function componentDidUpdate(prevProps, prevState) {var prevValue = prevProps.value;var propsValue = this.props.value;var stateValue = this.state.value;if (propsValue !== prevValue && propsValue !== stateValue) {// New value from props
      this.setState({ value: propsValue }, this.updateValueWithState);} else if (stateValue !== prevState.value) {// New value from state
      this.updateValueWithState(this.state);}} // Helper methods...
  ;_proto.hasValue = function hasValue() {var value = this.state.value;return value != null && value !== '';};_proto.hasIcon = function hasIcon() {var _this$props2 = this.props,icon = _this$props2.icon,hasIcon = _this$props2.hasIcon,hasClear = _this$props2.hasClear;return hasIcon || !!icon || hasClear && this.hasValue();};_proto.getClassName = function getClassName() {var _this$props3 = this.props,id = _this$props3.id,hasClear = _this$props3.hasClear;var hasValue = this.hasValue();var hasClearActive = hasClear && hasValue;var classList = cnFormTextInput({ id: id, hasIcon: this.hasIcon(), hasValue: this.hasValue(), hasClear: hasClear, hasClearActive: hasClearActive }, [this.props.className]);return classList;} // Event handlers...
  ; // Render...
  _proto.renderInput = function renderInput() {var _this2 = this;var value = this.state.value;var _this$props4 =


    this.props,id = _this$props4.id,inputId = _this$props4.inputId,name = _this$props4.name,disabled = _this$props4.disabled,placeholder = _this$props4.placeholder,_this$props4$type = _this$props4.type,type = _this$props4$type === void 0 ? 'text' : _this$props4$type;

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
      onKeyPress: this.onKeyPress,
      value: value
      // onFocus: this.onFocusIn,
      // onBlur: this.onFocusOut,
    };
    return /*#__PURE__*/(
      react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("input",
      inputProps));


  };_proto.

  renderClearIcon = function renderClearIcon() {// DELETE
    var _this$props5 =




    this.props,hasClear = _this$props5.hasClear,clearIcon = _this$props5.clearIcon,clearIconTitle = _this$props5.clearIconTitle;
    var hasValue = this.hasValue();
    var hasClearActive = hasClear && hasValue;
    return hasClearActive && /*#__PURE__*/
    react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_elements_InlineIcon_InlineIcon__WEBPACK_IMPORTED_MODULE_7__["default"], {
      icon: clearIcon || 'faTimes',
      className: cnFormTextInput('Icon', { mode: 'Clear' }),
      onClick: this.onClearClick,
      title: clearIconTitle || 'Clear content' });


  };_proto.

  renderIcon = function renderIcon() {// DELETE
    var _this$props6 =




    this.props,icon = _this$props6.icon,iconTitle = _this$props6.iconTitle,onIconClick = _this$props6.onIconClick;

    return icon && /*#__PURE__*/
    react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_elements_InlineIcon_InlineIcon__WEBPACK_IMPORTED_MODULE_7__["default"], {
      icon: icon,
      className: cnFormTextInput('Icon'),
      onClick: onIconClick,
      title: iconTitle });


  };_proto.

  render = function render() {var _this$props7 =







    this.props,id = _this$props7.id,disabled = _this$props7.disabled,_this$props7$type = _this$props7.type,type = _this$props7$type === void 0 ? 'text' : _this$props7$type,title = _this$props7.title,setDomRef = _this$props7.setDomRef;

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
      react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", renderProps,
      inputElem,
      this.renderIcon() || this.renderClearIcon()));



  };return FormTextInput;}(react__WEBPACK_IMPORTED_MODULE_3___default.a.PureComponent /** @lends @FormTextInput.prototype */);







// export default FormItemHOC({ solid: true, hoverable: true, framed: true })(FormTextInput);
_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2___default()(FormTextInput, "propTypes", { id: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.string });/* harmony default export */ __webpack_exports__["default"] = (Object(redux__WEBPACK_IMPORTED_MODULE_5__["compose"])(
// withFormContext,
_FormInteractiveItemHOC_FormInteractiveItemHOC__WEBPACK_IMPORTED_MODULE_9__["default"],
Object(_FormItemHOC_FormItemHOC__WEBPACK_IMPORTED_MODULE_8__["default"])({ solid: true, hoverable: true, focusable: true, framed: true }))(
FormTextInput));

/***/ }),

/***/ "./src/forms/FormTextInput/FormTextInput.pcss":
/*!****************************************************!*\
  !*** ./src/forms/FormTextInput/FormTextInput.pcss ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/forms/forms.js":
/*!****************************!*\
  !*** ./src/forms/forms.js ***!
  \****************************/
/*! exports provided: FormItemHOC, FormItemDummy, FormLabel, FormButton, FormGroup, FormLabeledGroup, FormButtonGroup, FormInputGroup, FormDelim, FormSpacer, FormText, FormSelect, FormTextInput, FormPasswordInput, FormRadio */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _FormItemHOC_FormItemHOC__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./FormItemHOC/FormItemHOC */ "./src/forms/FormItemHOC/FormItemHOC.jsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FormItemHOC", function() { return _FormItemHOC_FormItemHOC__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _FormItemDummy_FormItemDummy__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./FormItemDummy/FormItemDummy */ "./src/forms/FormItemDummy/FormItemDummy.jsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FormItemDummy", function() { return _FormItemDummy_FormItemDummy__WEBPACK_IMPORTED_MODULE_1__["default"]; });

/* harmony import */ var _FormLabel_FormLabel__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./FormLabel/FormLabel */ "./src/forms/FormLabel/FormLabel.jsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FormLabel", function() { return _FormLabel_FormLabel__WEBPACK_IMPORTED_MODULE_2__["default"]; });

/* harmony import */ var _FormButton_FormButton__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./FormButton/FormButton */ "./src/forms/FormButton/FormButton.jsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FormButton", function() { return _FormButton_FormButton__WEBPACK_IMPORTED_MODULE_3__["default"]; });

/* harmony import */ var _FormGroup_FormGroup__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./FormGroup/FormGroup */ "./src/forms/FormGroup/FormGroup.jsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FormGroup", function() { return _FormGroup_FormGroup__WEBPACK_IMPORTED_MODULE_4__["default"]; });

/* harmony import */ var _FormLabeledGroup_FormLabeledGroup__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./FormLabeledGroup/FormLabeledGroup */ "./src/forms/FormLabeledGroup/FormLabeledGroup.jsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FormLabeledGroup", function() { return _FormLabeledGroup_FormLabeledGroup__WEBPACK_IMPORTED_MODULE_5__["default"]; });

/* harmony import */ var _FormButtonGroup_FormButtonGroup__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./FormButtonGroup/FormButtonGroup */ "./src/forms/FormButtonGroup/FormButtonGroup.jsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FormButtonGroup", function() { return _FormButtonGroup_FormButtonGroup__WEBPACK_IMPORTED_MODULE_6__["default"]; });

/* harmony import */ var _FormInputGroup_FormInputGroup__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./FormInputGroup/FormInputGroup */ "./src/forms/FormInputGroup/FormInputGroup.jsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FormInputGroup", function() { return _FormInputGroup_FormInputGroup__WEBPACK_IMPORTED_MODULE_7__["default"]; });

/* harmony import */ var _FormDelim_FormDelim__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./FormDelim/FormDelim */ "./src/forms/FormDelim/FormDelim.jsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FormDelim", function() { return _FormDelim_FormDelim__WEBPACK_IMPORTED_MODULE_8__["default"]; });

/* harmony import */ var _FormSpacer_FormSpacer__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./FormSpacer/FormSpacer */ "./src/forms/FormSpacer/FormSpacer.jsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FormSpacer", function() { return _FormSpacer_FormSpacer__WEBPACK_IMPORTED_MODULE_9__["default"]; });

/* harmony import */ var _FormText_FormText__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./FormText/FormText */ "./src/forms/FormText/FormText.jsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FormText", function() { return _FormText_FormText__WEBPACK_IMPORTED_MODULE_10__["default"]; });

/* harmony import */ var _FormSelect_FormSelect__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./FormSelect/FormSelect */ "./src/forms/FormSelect/FormSelect.jsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FormSelect", function() { return _FormSelect_FormSelect__WEBPACK_IMPORTED_MODULE_11__["default"]; });

/* harmony import */ var _FormTextInput_FormTextInput__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./FormTextInput/FormTextInput */ "./src/forms/FormTextInput/FormTextInput.jsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FormTextInput", function() { return _FormTextInput_FormTextInput__WEBPACK_IMPORTED_MODULE_12__["default"]; });

/* harmony import */ var _FormPasswordInput_FormPasswordInput__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./FormPasswordInput/FormPasswordInput */ "./src/forms/FormPasswordInput/FormPasswordInput.jsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FormPasswordInput", function() { return _FormPasswordInput_FormPasswordInput__WEBPACK_IMPORTED_MODULE_13__["default"]; });

/* harmony import */ var _FormRadio_FormRadio__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./FormRadio/FormRadio */ "./src/forms/FormRadio/FormRadio.jsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FormRadio", function() { return _FormRadio_FormRadio__WEBPACK_IMPORTED_MODULE_14__["default"]; });

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

/***/ }),

/***/ "./src/helpers/ActionsContext.jsx":
/*!****************************************!*\
  !*** ./src/helpers/ActionsContext.jsx ***!
  \****************************************/
/*! exports provided: ActionsContext, ActionsContextProvider, ActionsContextConsumer, withActionsContext */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ActionsContext", function() { return ActionsContext; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ActionsContextProvider", function() { return ActionsContextProvider; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ActionsContextConsumer", function() { return ActionsContextConsumer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "withActionsContext", function() { return withActionsContext; });
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/extends.js");
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
 /** @module ActionsContext
                                                        *  @class ActionsContext
                                                        *  @since 2020.12.24, 19:08
                                                        *  @changed 2020.12.24, 19:08
                                                        */



var ActionsContext = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createContext();

var ActionsContextProvider = ActionsContext.Provider;
var ActionsContextConsumer = ActionsContext.Consumer;

var withActionsContext = function withActionsContext(WrappedComponent) {return function withActionsContext(props) {
    return /*#__PURE__*/(
      react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(ActionsContextConsumer, null,
      function (actions) {
        return /*#__PURE__*/(
          react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(WrappedComponent, _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({}, props, { actionsContextNode: actions })));

      }));


  };};

/***/ }),

/***/ "./src/helpers/FormContext.jsx":
/*!*************************************!*\
  !*** ./src/helpers/FormContext.jsx ***!
  \*************************************/
/*! exports provided: FormContext, FormContextProvider, FormContextConsumer, withFormContext */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormContext", function() { return FormContext; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormContextProvider", function() { return FormContextProvider; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormContextConsumer", function() { return FormContextConsumer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "withFormContext", function() { return withFormContext; });
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/extends.js");
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
 /** @module FormContext
                                                        *  @class FormContext
                                                        *  @since 2021.01.19, 15:23
                                                        *  @changed 2021.01.19, 16:08
                                                        */



var FormContext = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createContext();

var FormContextProvider = FormContext.Provider;
var FormContextConsumer = FormContext.Consumer;

var withFormContext = function withFormContext(WrappedComponent) {return function withFormContext(props) {
    return /*#__PURE__*/(
      react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(FormContextConsumer, null,
      function (form) {
        return /*#__PURE__*/(
          react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(WrappedComponent, _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({}, props, { formContextNode: form })));

      }));


  };};

/***/ }),

/***/ "./src/helpers/helpers.js":
/*!********************************!*\
  !*** ./src/helpers/helpers.js ***!
  \********************************/
/*! exports provided: ActionsContext, FormContext */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ActionsContext__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ActionsContext */ "./src/helpers/ActionsContext.jsx");
/* harmony reexport (module object) */ __webpack_require__.d(__webpack_exports__, "ActionsContext", function() { return _ActionsContext__WEBPACK_IMPORTED_MODULE_0__; });
/* harmony import */ var _FormContext__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./FormContext */ "./src/helpers/FormContext.jsx");
/* harmony reexport (module object) */ __webpack_require__.d(__webpack_exports__, "FormContext", function() { return _FormContext__WEBPACK_IMPORTED_MODULE_1__; });
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
/*! exports provided: setConfigOptions, cssMapping, cn */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setConfigOptions", function() { return setConfigOptions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cssMapping", function() { return cssMapping; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cn", function() { return cn; });
/* harmony import */ var _config_config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../config/config */ "./src/config/config.js");
/* harmony import */ var _config_config__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_config_config__WEBPACK_IMPORTED_MODULE_0__);
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
    Object.keys(_config_config__WEBPACK_IMPORTED_MODULE_0___default.a).forEach(function (scopeId) {
      var scopeObj = _config_config__WEBPACK_IMPORTED_MODULE_0___default.a[scopeId];
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
      var obj = _config_config__WEBPACK_IMPORTED_MODULE_0___default.a[scope];
      if (obj) {
        obj[key] = val;
      }
    });
  });
};

var cssMapping = function cssMapping(classNames) {var _config$app =
  _config_config__WEBPACK_IMPORTED_MODULE_0___default.a.app,useCssModules = _config$app.useCssModules,cssMappings = _config$app.cssMappings;
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
  var result = _bem_react_classname__WEBPACK_IMPORTED_MODULE_1__["cn"].apply(cn, args);
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

/***/ "./src/utils/domUtils.js":
/*!*******************************!*\
  !*** ./src/utils/domUtils.js ***!
  \*******************************/
/*! exports provided: getDocumentDomNodeByTag, hasClassName, addClassName, removeClassName */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getDocumentDomNodeByTag", function() { return getDocumentDomNodeByTag; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hasClassName", function() { return hasClassName; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addClassName", function() { return addClassName; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "removeClassName", function() { return removeClassName; });
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

/***/ "./src/utils/lang.js":
/*!***************************!*\
  !*** ./src/utils/lang.js ***!
  \***************************/
/*! exports provided: setLang, getLang, getCommonLangText */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setLang", function() { return setLang; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getLang", function() { return getLang; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getCommonLangText", function() { return getCommonLangText; });
/* harmony import */ var _config_config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../config/config */ "./src/config/config.js");
/* harmony import */ var _config_config__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_config_config__WEBPACK_IMPORTED_MODULE_0__);
/** @module lang
 *  @desc Language support tools
 *  @since 2021.01.11, 18:21
 *  @changed 2021.01.11, 20:14
 */



var setLang = function setLang(lang) {
  // console.log('WebUiCore:utils:lang:setLang', lang)
  // debugger
  _config_config__WEBPACK_IMPORTED_MODULE_0___default.a.app.lang = lang;
};
var getLang = function getLang() {
  return _config_config__WEBPACK_IMPORTED_MODULE_0___default.a.app.lang;
};
var getCommonLangText = function getCommonLangText(id, defaultText, propsLang) {
  var lang = propsLang || getLang();
  var text = lang && lang.components && lang.components.common && lang.components.common[id];
  // console.log('WebUiCore:utils:lang:getCommonLangText', id, lang)
  // debugger
  return text != null ? text : defaultText || id;
};

/***/ }),

/***/ "./src/utils/strings.js":
/*!******************************!*\
  !*** ./src/utils/strings.js ***!
  \******************************/
/*! exports provided: toNumber, toString, toBoolean, typeTransforms, getCommonLength, ucFirst, toType, randomHexString, html2string, splitMultiline */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toNumber", function() { return toNumber; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toString", function() { return toString; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toBoolean", function() { return toBoolean; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "typeTransforms", function() { return typeTransforms; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getCommonLength", function() { return getCommonLength; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ucFirst", function() { return ucFirst; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toType", function() { return toType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "randomHexString", function() { return randomHexString; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "html2string", function() { return html2string; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "splitMultiline", function() { return splitMultiline; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _this = undefined; /** @module strings
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
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement('div', { key: 'line' + String(n), className: lineClassName }, line);
    });
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement('div', { key: 'text' + String(n), className: textClassName }, lines);
  });
};

// module.exports = strings
// export default strings

/***/ }),

/***/ "./src/utils/utils.js":
/*!****************************!*\
  !*** ./src/utils/utils.js ***!
  \****************************/
/*! exports provided: configure, domUtils, lang, strings */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _configure__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./configure */ "./src/utils/configure.js");
/* harmony reexport (module object) */ __webpack_require__.d(__webpack_exports__, "configure", function() { return _configure__WEBPACK_IMPORTED_MODULE_0__; });
/* harmony import */ var _domUtils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./domUtils */ "./src/utils/domUtils.js");
/* harmony reexport (module object) */ __webpack_require__.d(__webpack_exports__, "domUtils", function() { return _domUtils__WEBPACK_IMPORTED_MODULE_1__; });
/* harmony import */ var _lang__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./lang */ "./src/utils/lang.js");
/* harmony reexport (module object) */ __webpack_require__.d(__webpack_exports__, "lang", function() { return _lang__WEBPACK_IMPORTED_MODULE_2__; });
/* harmony import */ var _strings__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./strings */ "./src/utils/strings.js");
/* harmony reexport (module object) */ __webpack_require__.d(__webpack_exports__, "strings", function() { return _strings__WEBPACK_IMPORTED_MODULE_3__; });
/** @module utils
 *  @desc Library utilities
 *  @since 2020.05.19, 17:16
 *  @changed 2020.12.15, 21:12
 */

// export * from './configure'


/***/ }),

/***/ "@bem-react/classname":
/*!***************************************!*\
  !*** external "@bem-react/classname" ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@bem-react/classname");

/***/ }),

/***/ "@fortawesome/free-regular-svg-icons":
/*!******************************************************!*\
  !*** external "@fortawesome/free-regular-svg-icons" ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@fortawesome/free-regular-svg-icons");

/***/ }),

/***/ "@fortawesome/free-solid-svg-icons":
/*!****************************************************!*\
  !*** external "@fortawesome/free-solid-svg-icons" ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@fortawesome/free-solid-svg-icons");

/***/ }),

/***/ "@fortawesome/react-fontawesome":
/*!*************************************************!*\
  !*** external "@fortawesome/react-fontawesome" ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@fortawesome/react-fontawesome");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-dom":
/*!****************************!*\
  !*** external "react-dom" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-dom");

/***/ }),

/***/ "react-portal":
/*!*******************************!*\
  !*** external "react-portal" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-portal");

/***/ }),

/***/ "react-transition-group":
/*!*****************************************!*\
  !*** external "react-transition-group" ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-transition-group");

/***/ }),

/***/ "redux":
/*!************************!*\
  !*** external "redux" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("redux");

/***/ }),

/***/ "throttle-debounce":
/*!************************************!*\
  !*** external "throttle-debounce" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("throttle-debounce");

/***/ })

/******/ });
//# sourceMappingURL=bundle.js.map